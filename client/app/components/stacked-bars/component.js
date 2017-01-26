import Ember from 'ember';

export default Ember.Component.extend({
    chartSelector: '.widget-stackedBar',
    data:[],
    pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'],
    calculateTotal(items){
        let total = 0;
        for (var value of items) {
          total += value.doc_count;
        }
        return total;
    },
    setData () {
        // Turn numbers into percentages and save to width
        let items = this.get('data.aggregations.stackedData.buckets');
        let total = this.calculateTotal(items);

        let data = items.map((item, index) => {
            return {
                number: item.doc_count,
                label: item.key,
                percentage: Math.round(item.doc_count*100/total),
                background: this.get('pattern')[index] || '#666666'
            };
        });
        this.set('data', data);

    },
    generateChart(){
        let items = this.get('data');
        let chartElement = this.$(this.element).find(this.get('chartSelector'));
        chartElement.html('');
        for (var value of items) {
            chartElement.append('<div class="stack" data-tooltip="'+ value.label + ': ' + value.percentage  + '%" style="width:'+ value.percentage +'%; background-color:'+ value.background+';"><span>'+ value.label + ': ' + value.percentage  + '%</span></div>');
        }
    },
    showHideLabel(component) {
        let elements = component.$(this.element).find(this.get('chartSelector') + ' .stack');
        elements.map(function(index, stack){
            let stackEl = component.$(stack);
            if(stackEl.width() < 100){
                stackEl.children('span').hide();
            } else {
                stackEl.children('span').show();
            }
        });
    },
    didInsertElement(){
        this.generateChart();
        let component  = this;
        component.$(window).on('resize', function(){
            component.showHideLabel(component);
        });
        component.showHideLabel(component);
    },
    init(){
        this._super(...arguments);
        this.setData();
    },

});
