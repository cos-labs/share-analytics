import DS from 'ember-data';


export default DS.Model.extend({
    name: DS.attr('string'),
    displayName: DS.attr('string'),
    widgetType: DS.attr('string'),
    width: DS.attr('number'),
    facetDash: DS.belongsTo('dashboard'),
    facetDashParameter: DS.attr('string'),
    //owner: attr('string'),
    //parameters: DS.hasMany('parameter'),
    context: DS.attr('raw'),
    dashboard: DS.hasMany('dashboard')
});
