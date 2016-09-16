/* global c3 */
import Ember from 'ember';

export default Ember.Component.extend({
    
    timeseriesList: Ember.computed('aggregations', function() { 
        let d = this.get('aggregations.articles_over_time.buckets');
        let firstRow = ['x'];
        let secondRow = ['Publicaions'];
        d.forEach(function(entry) {
            firstRow.push(entry.key_as_string);
            secondRow.push(entry.doc_count);
        });
        console.log(firstRow);
        console.log(secondRow); // These are in the proper format now; need to return them as an array, and also FIGURE OUT HOW TO CUT THIS OFF!!
        return [firstRow, secondRow];
    }),

    dataChanged: Ember.observer('aggregations', function() {
        let data = this.get('timeseriesList');
        this.updateBar(data);
    }),

    updateTS(data) {
//        let columns = data.slice(0,37); // We assume that we're not always going to stop at this index, but for now we do. For some reason dates go on forever?Like 2080?
//        let title = '';
//        
//        let ts = this.get('ts');
//        if (!ts) {
//            this.initTS(title, columns);
//        } else {
//            ts.load({
//                columns,
//                unload: true
//            });   
//        }
    },

    initTS(title, columns) {
        let element = this.$(`.ts`).get(0);
        let bar = c3.generate({
            bindto: element,
            data: {
                columns,
                type: 'bar',
                onclick: (d) => {
                    let selected = this.get('selected');
                    if (!selected.contains(d.name)) {
                        this.send('changeFilter', [d.name, ...selected]);
                    }
                }
            },
            legend: { show: false },
            bar: {
                title,
                label: {
                    show: false
                }
            },
            size: { width: 600 }
        });
        this.set('bar', bar);
    },
    
    init() { // Init should be used ONLY for setting component proprties. When we want to work on the component DOM element, we use didInsertElement hool
        this._super(...arguments);
    },
    
    didInsertElement() {
        let data = this.get('timeseriesList');
        this.updateTS(data);
    } 

    
});
