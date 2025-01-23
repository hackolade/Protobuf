const _ = require('lodash');
const { getConfluentPostQuery } = require('./getConfluentPostQuery');
const { getPulsarPostQuery } = require('./getPulsarPostQuery');

const prepareScript = (script, data) => {
	const targetSchemaRegistry = _.get(data, 'options.targetScriptOptions.keyword');
	if (targetSchemaRegistry === 'confluentSchemaRegistry') {
		return getConfluentPostQuery({ data, schema: script });
	}
	if (targetSchemaRegistry === 'pulsarSchemaRegistry') {
		return getPulsarPostQuery({ data, schema: script });
	}

	return script;
};

module.exports = {
	prepareScript,
};
