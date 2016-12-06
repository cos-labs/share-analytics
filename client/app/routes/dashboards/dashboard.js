import Ember from 'ember';
/* global Freewall */
//import 'bower_components/freewall/freewall';
//
export default Ember.Route.extend({

    // Note that the above query is NOT perfect. But we'll go with it for now.
    model: function(params) {
        return {
            overview: {
                dasboardName: 'Institution Overview Dashboard',
                widgets: [
                    {chartType: 'totalResults', widgetType: 'number-widget', name: 'Total Results'},
                    {chartType: 'totalPublications', widgetType: 'number-widget', name: 'Total Publications'},
                    {chartType: 'topContributors', widgetType: 'top-contributors', name: 'Top Contributors'},
                    {chartType: 'timeseries', widgetType: 'generic-chart', name:'timeser'},
                    {chartType: 'donut', widgetType: 'generic-chart', name: 'don1'},
                    {chartType: 'donut', widgetType: 'generic-chart', name: 'don2'}
                ]
            },
            user: {
                dasboardName: 'Institution Contributor Overview Dashboard',
                widgets: [
                    {chartType: 'totalResults', widgetType: 'number-widget', name: 'Total Results'},
                    {chartType: 'totalPublications', widgetType: 'number-widget', name: 'Total Publications'},
                    {chartType: 'timeseries', widgetType: 'generic-chart', name:'timeser'},
                    {chartType: 'donut', widgetType: 'generic-chart', name: 'don1'},
                    {chartType: 'donut', widgetType: 'generic-chart', name: 'don2'},
                    {chartType: 'relevanceHistogram', widgetType: 'generic-chart', name:'timeser'}
                ]
            },
            topic: {
                dasboardName: 'Institution Subject Area Dashboard',
                widgets: [
                    {chartType: 'relevanceHistogram', widgetType: 'generic-chart', name:'timeser'},
                    {chartType: 'totalResults', widgetType: 'number-widget', name: 'Total Results'},
                    {chartType: 'totalPublications', widgetType: 'number-widget', name: 'Total Publications'},
                    {chartType: 'timeseries', widgetType: 'generic-chart', name:'timeser'},
                    {chartType: 'donut', widgetType: 'generic-chart', name: 'don1'},
                    {chartType: 'donut', widgetType: 'generic-chart', name: 'don2'}
                ]
            }
        }[params.dashboard];
        //return Ember.RSVP.hash({
        //    widgets: this.get('store').peekAll('widget').map((item) => {
        //        return {
        //            name: item.get('name'),
        //            author: item.get('author'),
        //            width: item.get('width'),
        //            height: item.get('height'),
        //            query: item.get('query'),
        //            settings: item.get('settings')
        //        }
        //    }),
        //    settings: {}
        //});
    },

    setupController: function(controller, model) {
        controller.set('widgets', model.widgets)
        this._super(controller, model);
        let self = this;
        Ember.run.schedule('afterRender', this, function() {
           // var wall =  new Freewall('#freewall');
           // wall.reset({
           //     draggable: true,
           //     selector: '.widget',
           //     animate: true,
           //     cellW: 150,
           //     cellH: 150,
           //     fixSize: 0,
           //     cacheSize: true,
           //     onResize: function() {
           //         wall.refresh();
           //     },
           //     onBlockMove: function() {
           //         console.log(this);
           //     }
           // });
           // wall.fitWidth();
           // Ember.$(window).trigger('resize');
           // controller.set('wall', wall);
        });
        this.addObserver('controller.q', function() {
            this.refresh();
        });
        this.addObserver('controller.gte', function() {
            this.refresh();
        });
        this.addObserver('controller.lte', function() {
            this.refresh();
        });
    },

});
