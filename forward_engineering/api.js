const _ = require('lodash');
const { generateCollectionScript } = require('./services/protoScriptGenerationService');
const { formatComment } = require('./helpers/utils');

const RECORD_NAME_STRATEGY = 'RecordNameStrategy';
const TOPIC_RECORD_NAME_STRATEGY = 'TopicRecordNameStrategy';
const protobufjs = require('protobufjs');
const descriptor = require('protobufjs/ext/descriptor');

const defaultContainerData = [
	{
		code: 'proto_file',
		imports: [],
		package: 'proto',
	},
];

module.exports = {
	generateContainerScript(data, logger, callback, app) {
		const containerData = !_.isEmpty(data.containerData) ? data.containerData : defaultContainerData;
		try {
			let preparedData = {
				...data,
				containerData,
				includeAllModelDefinitionsStatements: true,
			};
			if (_.isEmpty(preparedData.collections)) {
				callback(null, '');
			}
			const { syntax, imports, modelDefinitionsStatements, options, messages } = preparedData.collections.reduce(
				(processedMessages, message) => {
					const schema = JSON.parse(message);
					if (schema.$ref) {
						return processedMessages;
					}

					const processedMessage = generateCollectionScript({ ...preparedData, jsonSchema: message });
					return {
						syntax: processedMessage.syntax,
						imports: [...processedMessages.imports, ...processedMessage.imports],
						modelDefinitionsStatements: [
							...processedMessages.modelDefinitionsStatements,
							...processedMessage.modelDefinitionsStatements,
						],
						options: processedMessage.options,
						messages: [...processedMessages.messages, processedMessage.message],
					};
				},
				{
					imports: [],
					modelDefinitionsStatements: [],
					options: [],
					messages: [],
				},
			);
			const description = formatComment(containerData[0].description);
			const script = [
				description,
				syntax,
				`package ${containerData[0].package || 'proto'};\n`,
				..._.uniq(imports),
				' ',
				...options,
				...messages,
				..._.uniq(modelDefinitionsStatements),
			]
				.filter(row => row !== '')
				.join('\n');
			callback(null, this.prepareScript(script, preparedData));
		} catch (error) {
			const errorObject = {
				message: error.message,
				stack: error.stack,
			};

			logger.log('error', errorObject, 'Protobuf Forward-Engineering Error');
			callback(errorObject);
		}
	},

	generateScript(data, logger, callback, app) {
		const containerData = !_.isEmpty(data.containerData) ? data.containerData : defaultContainerData;
		try {
			let preparedData = {
				...data,
				containerData,
				includeAllModelDefinitionsStatements: false,
			};
			const description = formatComment(containerData[0].description);
			const processedMessage = generateCollectionScript(preparedData);
			const script = [
				description,
				processedMessage.syntax,
				processedMessage.packageName,
				..._.uniq(processedMessage.imports),
				' ',
				...processedMessage.options,
				...processedMessage.modelDefinitionsStatements,
				processedMessage.message,
			]
				.filter(row => row !== '')
				.join('\n');
			callback(null, this.prepareScript(script, preparedData));
		} catch (error) {
			const errorObject = {
				message: error.message,
				stack: error.stack,
			};
			logger.log('error', errorObject, 'Protobuf Forward-Engineering Error');
			callback(errorObject);
		}
	},

	prepareScript(script, data) {
		const targetSchemaRegistry = _.get(data, 'options.targetScriptOptions.keyword');
		if (targetSchemaRegistry === 'confluentSchemaRegistry') {
			return this.getConfluentPostQuery({ data, schema: script });
		}
		if (targetSchemaRegistry === 'pulsarSchemaRegistry') {
			return this.getPulsarPostQuery({ data, schema: script });
		}

		return script;
	},

	getPulsarPostQuery({ data, schema }) {
		const root = protobufjs.parse(schema).root;
		const descriptorMsg = root.toDescriptor('proto3');
		const buffer = descriptor.FileDescriptorSet.encode(descriptorMsg).finish();
		const fileDescriptorSet = buffer.toString('base64');
		const descriptorJson = descriptorMsg.toJSON();
		const rootMessageTypeName = `${_.get(descriptorJson, 'file[0].package')}.${_.get(descriptorJson, 'file[0].messageType[0].name')}`;
		const rootFileDescriptorName = _.get(descriptorJson, 'file[0].name');
		const body = {
			fileDescriptorSet,
			rootMessageTypeName,
			rootFileDescriptorName,
		};
		const bodyObject = {
			type: 'PROTOBUF_NATIVE',
			data: body,
			properties: {},
		};
		const namespace = _.get(data, 'containerData[0].name', '');
		const topic = _.get(data, 'containerData[0].pulsarTopicName', '');
		const persistence = _.get(data, 'containerData[0].isNonPersistentTopic', false)
			? 'non-persistent'
			: 'persistent';
		return `POST /${persistence}/${namespace}/${topic}/schema\n\n${JSON.stringify(bodyObject, null, 4)}`;
	},

	getConfluentPostQuery({ data, schema }) {
		const getName = () => {
			const name = this.getRecordName(data);

			const schemaType = _.get(data, 'containerData[0].schemaType');
			const containerName = _.get(data, 'containerData[0].name');
			const topic = _.get(data, 'modelData[0].schemaTopic');

			const typePostfix = schemaType ? `-${schemaType}` : '';
			const containerPrefix = containerName ? `${containerName}.` : '';
			const topicPrefix = topic ? `${topic}-` : '';

			const schemaNameStrategy = _.get(data, 'modelData[0].schemaNameStrategy', '');
			switch (schemaNameStrategy) {
				case RECORD_NAME_STRATEGY:
					return `${containerPrefix}${name}${typePostfix}`;
				case TOPIC_RECORD_NAME_STRATEGY:
					return `${topicPrefix}${containerPrefix}${name}${typePostfix}`;
				default:
					return `${name}${typePostfix}`;
			}
		};

		return `POST /subjects/${getName()}/versions\n\n${schema}`;
	},

	getRecordName(data) {
		return data.containerData[0].code || data.containerData[0].name || data.containerData[0].collectionName;
	},
};
