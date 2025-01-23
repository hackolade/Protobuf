const _ = require('lodash');
const { formatComment } = require('./helpers/utils');
const { prepareScript } = require('./helpers/prepareScript');
const { generateCollectionScript } = require('./services/protoScriptGenerationService');

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
			callback(null, prepareScript(script, preparedData));
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
			callback(null, prepareScript(script, preparedData));
		} catch (error) {
			const errorObject = {
				message: error.message,
				stack: error.stack,
			};
			logger.log('error', errorObject, 'Protobuf Forward-Engineering Error');
			callback(errorObject);
		}
	},
};
