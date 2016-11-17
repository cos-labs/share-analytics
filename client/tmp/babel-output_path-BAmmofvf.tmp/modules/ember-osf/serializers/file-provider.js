import OsfSerializer from './osf-serializer';

export default OsfSerializer.extend({
    modelNameFromPayloadKey: function modelNameFromPayloadKey() {
        return 'file-provider';
    }
});