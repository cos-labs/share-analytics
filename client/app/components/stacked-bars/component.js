import Ember from 'ember';

const ucsdVariations = 'UCSD%20OR%20"UC%20San%20Diego"%20OR%20"UC%20San%20Diego%20Library"%20OR%20"UC%20San%20Diego%20Library%20Digital%20Collections"%20OR%20"Scripps%20Institution%20of%20Oceanography"%20OR%20"Scripps%20Institute%20of%20Oceanography"%20OR%20"University%20of%20California%20San%20Diego"%20OR%20"Univ%20of%20california%20san%20diego"%20OR%20"University%20of%20CA%20San%20Diego"';
const ucsdLuceneQuery = 'q=contributors:(' + ucsdVariations + ')%20OR%20publishers:(' + ucsdVariations + ')%20OR%20funders:(' + ucsdVariations + ')%20OR%20title:(' + ucsdVariations + ')%20OR%20hosts:(' + ucsdVariations + ')%20OR%20tags:(ucsd%20OR%20"cdl.ucsd"%20OR%20"scripps%20institution%20of%20oceanography")%20OR%20affiliations:(' + ucsdVariations + ')';
const minLabelWidth = 90;

function get_search_query(params) {
    var query = '';
    if (params['all'] === 'ucsd') {
        return ucsdLuceneQuery;
    } else {
        for (var param in params) {
            if (params.hasOwnProperty(param)) {
                query += param + '=' + encodeURIComponent(params[param]);
            }
        }
        return query;
    }
}

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
        var query = get_search_query(this.get('parameters'));

        let data = items.map((item, index) => {
            let percentage = (item.doc_count*100/total).toFixed(2);
            return {
                number: item.doc_count,
                label: item.key,
                percentage: percentage,
                background: this.get('pattern')[index] || '#666666',
                url: "https://share.osf.io/discover?" + query + "&type=" + item.key
            };
        });
        this.set('data', data);
    },
    generateChart(){
        let items = this.get('data');
        let chartElement = this.$(this.element).find(this.get('chartSelector'));
        chartElement.html('');
        this.setWidths();
        for (var j = 0; j < items.length; j++) {
            let value = items[j];
            chartElement.append('<div class="stack" data-index="' + j + '" data-tooltip="'+ value.label + ': ' + value.percentage  + '%" style="width:'+ value.width +'px; background-color:'+ value.background+';"><span>'+ value.label + ': ' + value.percentage  + '%</span></div>');
        }
    },
    showHideLabel() {
        let component = this;
        let elements = this.$(this.element).find(this.get('chartSelector') + ' .stack');
        elements.map(function(index, stack){
            let stackEl = component.$(stack);
            if(stackEl.width() < minLabelWidth){
                stackEl.children('span').hide();
            } else {
                stackEl.children('span').show();
            }
        });
    },
    setWidths(){
        let items = this.get('data');
        let chartElementWidth = this.$(this.element).find(this.get('chartSelector')).width();
        let residualPixel = 0; // How much percentage is left after rounding down
        let topItem = null; // The item that has the highest percentage
        let topItemPercentage = 0; // The highest item Percentage
        for(var item of items){
            let itemWidth;
            let rawWidth = chartElementWidth/100*item.percentage;
            if (rawWidth < 1){
                itemWidth = 1;
                residualPixel -= 1 - rawWidth;
            } else {
                itemWidth = Math.floor(rawWidth);
                residualPixel += rawWidth - itemWidth;
            }
            if(item.percentage > topItemPercentage ) {
                topItem = item;
                topItemPercentage = item.percentage;
            }
            item.width = itemWidth;
        }
        topItem.itemWidth += residualPixel; // Add all residual pixel to biggest item;

    },
    didInsertElement(){
        this.generateChart();
        let component  = this;
        component.$(window).on('resize', function(){
            component.generateChart.call(component);// This is very expensive, will need to be revised for actual app
            component.showHideLabel.call(component);
        });
        component.showHideLabel.call(component);
        component.$('.stack').click(function(event){
            let index = component.$(event.target).attr('data-index');
            let item = component.get('data')[index];
            if (item.url) {
                window.location.href = item.url;
                return;
            }
        })
    },
    init() {
        this._super(...arguments);
        this.setData();
    }

});
