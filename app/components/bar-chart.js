/* global c3 */
import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
    
    contributorsList: Ember.computed('aggregations', function() {
        let data = this.get('aggregations.contributors.buckets');
        return data ? data.map(({ key, doc_count }) => [key, doc_count]) : [];
    }),

    dataChanged: Ember.observer('aggregations', function() {
        let data = this.get('contributorsList');
        this.updateBar(data);
    }),

    updateBar(data) {
        let columns = data.slice(0,10); // jscs:ignore
        let title = 'Top 10 Contributors: ';
        
        let bar = this.get('bar');
        if (!bar) {
            this.initBar(title, columns);
        } else {
            bar.load({
                columns,
                unload: true
            });   
        }
    },

    initBar(title, columns) {
        let element = this.$(`.bar`).get(0);
        let q = this.get('querystring');
        let gte = this.get('g');
        let lte = this.get('l');
        let bar = c3.generate({
            bindto: element,
            data: {
                columns,
                type: 'bar',
                onclick: (d) => { // params are going in correctly
                    console.log(this.getContrib(d,q,gte,lte));
                }
            },
            axis: {
              x: {
                  tick: {
                      format: function() {
                          return 'Top 10 Contributors';
                      }
                  }
              },
              y: {
                   label: 'Number of Publications'
              },
            },
            tooltip: {
                grouped: false, // Default true
            },
            legend: { show: false },
            bar: {
                title,
                label: {
                    show: false
                }
            },
            size: { width: 400 }
        });
        this.set('bar', bar);
    },
    
    init() { // Init should be used ONLY for setting component proprties. When we want to work on the component DOM element, we use didInsertElement hool
        this._super(...arguments);
    },
    
    didInsertElement() {
        let data = this.get('contributorsList');
        this.updateBar(data);
    },
    
    getContrib(d,q,gte,lte) {
        return Ember.$.ajax({ // This request is NOT getting what it should be getting. Next time, check that the query is correctly formed!
            url: ENV.apiUrl +  '/search/abstractcreativework/_search',
            crossDomain: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                query: {
                    bool: {
                        must: [
                            {
                                query_string: {
                                    query: q
                                }
                            },
                            {
                                range: {
                                    date: {
                                        gte: gte,
                                        lte: lte,
                                            format: "yyyy-MM-dd||yyyy"
                                    }
                                }
                            }
                        ],
                        filter: [
                            {
                                term: {
                                    contributors: d.name // This is NOT an issue with the specific name not being found. 'John' doesn't work either. Must be query strictur.
                                }
                            }
                        ]
                    }
                }
            })
        }).then((json) => {
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
            console.log(docs);
        });
    }

    
});
