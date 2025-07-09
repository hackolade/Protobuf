const _ = require('lodash');
const protobufjs = require('protobufjs');
const descriptor = require('protobufjs/ext/descriptor');

const getPulsarPostQuery = ({ data, schema }) => {
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
	const persistence = _.get(data, 'containerData[0].isNonPersistentTopic', false) ? 'non-persistent' : 'persistent';
	return `POST /${persistence}/${namespace}/${topic}/schema\n\n${JSON.stringify(bodyObject, null, 4)}`;
};

module.exports = {
	getPulsarPostQuery,
};
