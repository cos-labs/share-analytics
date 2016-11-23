import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
    name: attr('string', {defaultValue:'Unnamed Widget'}),
    // author: attr('string'),
    width: attr('number'),
    height: attr('number'),
    query: attr({
        bool: attr({
            must: attr([{
                query_string: attr('string'),
            },{
                range: attr({
                    date: attr({
                        gte: attr('date'),
                        lte: attr('date'),
                        interval: attr('string')
                    })
                })
            }])
        })
    }),

    settings: attr({
                      gte: attr('date'),
                      lte: attr('date'),
                      interval: attr('string')
                    }),
});
