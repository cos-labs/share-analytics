import DS from 'ember-data';

export default DS.Model.extend({
    
    name: DS.attr('string'),
    dashboards: DS.hasMany('dashboard')

});
