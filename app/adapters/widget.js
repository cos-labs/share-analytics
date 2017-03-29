
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from '../config/environment';

export default JSONAPIAdapter.extend({
    host: 'http://localhost:8000',
    namespace: 'api',

    buildURL: function(type, id, record) {
        //call the default buildURL and then append a slash
        // return this._super(type, id, record) + '/';
        return this._super(type, id, record) + '/';
    }

});
