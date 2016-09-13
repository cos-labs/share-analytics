import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    
    model: function() {
        return Ember.$.ajax({
            url: ENV.apiUrl + '/search/abstractcreativework/_search',
            crossDomain: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({query: { query_string: { query: "cancer" } }, from: 0, aggregations: { sources: { terms: { field: "sources.raw", size: 200 } } } })
        }).then((json) => {
            let aggregations = json.aggregations;
            let docs = json.hits.hits.map((hit) => {
                let source = Ember.Object.create(hit._source);
                let r = source.getProperties('type', 'title', 'description', 'language', 'date', 'date_created', 'date_modified', 'date_updated', 'date_published', 'tags', 'sources');
                r.id = hit._id;
                r.contributors = source.lists.contributors;
                r.funders = source.lists.funders;
                r.publishers = source.lists.publishers;
                r.institutions = source.lists.institutions;
                r.organizations = source.lists.organizations;
                return r;
            });
            return {aggregations: aggregations, docs: docs}; //allows us to access returned docs as model.docs, aggregations as model.aggregations
            
        });                                                                                            
                                                                                                      
    }
    
});
