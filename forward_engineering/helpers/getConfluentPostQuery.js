const _ = require('lodash');

const RECORD_NAME_STRATEGY = 'RecordNameStrategy';
const TOPIC_RECORD_NAME_STRATEGY = 'TopicRecordNameStrategy';

const getRecordName = data => {
	return data.containerData[0].code || data.containerData[0].name || data.containerData[0].collectionName;
};

const getConfluentPostQuery = ({ data, schema }) => {
	const getName = () => {
		const name = getRecordName(data);

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
};

module.exports = {
	getConfluentPostQuery,
};
