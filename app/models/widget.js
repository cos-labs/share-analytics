import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
    name: attr('string'),
    author: attr('string'),
    width: attr('number'),
    height: attr('number'),
    content: attr(),
    showbutton: attr("boolean"),
    widgettype: attr("string"),
    charttype: attr("string"),
    facetdash: DS.belongsTo("dashboard"),
    query: attr(),
    dashboard: DS.hasMany('dashboard')
});
