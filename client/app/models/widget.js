import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
    name: attr('string', {defaultValue:'Unnamed Widget'}),
    author: attr('string'),
    width: attr('number'),
    height: attr('number'),
    query: attr({
        aggregations:attr({
            articles_over_time: attr({
                data_histogram:attr({
                    field: attr('date'),
                    interval: attr('string'),
                    format: attr('string'),
                }),
                aggregations:attr({
                    arttype: {
                        term: {
                            field: attr('string'),
                        }
                    }
                })
            }),
            tags: attr({
                terms: attr({
                    field: attr('string'),
                    size: attr('number')
                })
            }),
            contributors: attr({
                terms: attr({
                    field: attr('string'),
                    size: attr('number')
                })
            }),
            sources: attr({
                terms: attr({
                    field: attr('string'),
                    size: attr('number')
                })
            })}),
        query: attr({
                  bool: attr({
                      must: attr([{
                            query_string: attr({query: attr('string')})
                          },
                          { range: attr({
                                  date: attr({
                                      gte: attr('date'),
                                      lte: attr('date'),
                                      interval: attr('string')
                                      })
                                  })
                          }]
                      )
                  })
                }),
        from: attr('number')
    }),

    settings: attr({
                      gte: attr('date'),
                      lte: attr('date'),
                      interval: attr('string')
                    }),
});
