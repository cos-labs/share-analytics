import OsfAdapter from './osf-adapter';

export default OsfAdapter.extend({
    buildURL: function buildURL(_, __, ___, requestType) {
        // Embed linked_nodes
        var base = this._super.apply(this, arguments);
        if (['createRecord', 'updateRecord', 'deleteRecord'].indexOf(requestType) === -1) {
            return base + '?embed=linked_nodes';
        } else {
            return base;
        }
    }
});