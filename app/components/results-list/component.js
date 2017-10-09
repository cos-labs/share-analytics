import Ember from 'ember';


export default Ember.Component.extend({

    data : [""],
    pagebackbtn : null,
    pagenextbtn : null,
    newTab: false,
    objectID: "",

    init(){
        this._super(...arguments);
        let data = this.processData(this.get('data.hits.hits'));
        this.set('data', data);
        this.get('resourceType')
        
    },
    didRender(){
        $('.dropdown-toggle').click(function() {
          $(this).siblings('.dropdown-menu').toggleClass('collapsed expanded');
      });

        $(".menu").click((e)=> {
         e.stopPropagation();
         this.set('objectID' , e.target.getAttribute('data-id'))

         switch(e.target.innerHTML) {

            case "Open in new tab":
            this.set('newTab', true)
            this.send('transitionToFacet')
            this.set('newTab', false)

            break;
            
            case "Open Link":
            this.set('newTab', "transitionToFacet")
            this.send('transitionToFacet')
            this.set('newTab', false)

            break;
            case "Copy URL":
            var aux = document.createElement("input");
            aux.setAttribute("value", window.location.origin+'/'+this.get('objectID') );
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
            $(e.target).text('Text copied')
            setTimeout(()=>{  $(e.target).text('Copy URL') }, 3000);
            break;

            default:
        }
        return false;
    });


    //check the sort
    if(this.get('parameters').recently_added_sort === 'desc'){
        $('.orderBy label').removeClass( "active orderBySelected" );
        $( ".orderBy" ).children().eq(1).addClass( "active orderBySelected" )
    }
},
pagebackbtn: Ember.computed('page',  function() {
  let page = Number(this.parameters['page']);
  if (page == 1 || !page) {
      return 'disable';
  } else {
      return null;
  }
}),
pagenextbtn: Ember.computed('data',  function() {
    if(this.get('data').length < 10){
        return 'disable';
    }else{
        return null;
    }
}),
pageNumber: Ember.computed('page',  function() { 
    let page = 'Page ' + this.get('parameters').page
    if (!this.get('parameters').page) page = 'Page 1';
    return page
}),
processData (data) {
    return data.map((datum) => {
        var options = {year: 'numeric', month: 'long', day: 'numeric' };
        options.timeZone = 'UTC';
        if (datum._source.description) {
            datum['description_truncated'] = datum._source.description.substring(0,200)+'...'
        }
        if (datum._source.date) {
            datum["_source"]["date"] = (new Date(datum["_source"]["date"])).toLocaleDateString('en-US', options);
        }
        if (datum._source.date_created) {
            datum["_source"]["date_created"] = (new Date(datum["_source"]["date_created"])).toLocaleDateString('en-US', options)
        }
        if (datum._source.date_modified) {
            datum["_source"]["date_modified"] = (new Date(datum["_source"]["date_modified"])).toLocaleDateString('en-US', options)
        }
        if (datum._source.date_published) {
            datum["_source"]["date_published"] = (new Date(datum["_source"]["date_published"])).toLocaleDateString('en-US', options)
        }
        if (datum._source.date_updated) {
            datum["_source"]["date_updated"] = (new Date(datum["_source"]["date_updated"])).toLocaleDateString('en-US', options)
        }
        if( datum["_source"]["type"] === "project"){
            datum["_source"]["type"] =  datum["_source"]["type"] + " & awards"
        }

        return datum;
    });
},
actions: {

    transitionToFacet(facet_name, parameter_name, parameter_value) {
        let queryParams = {};
        queryParams[parameter_name] = parameter_value;
        if(this.get('newTab') === true){
            window.open(window.location.origin+'/'+this.get('objectID')); 
        }else if(this.get('newTab') === "transitionToFacet"){
            let url = window.location+'/'+ this.get('objectID') 
            console.log("URL" , url)
            window.location.replace(window.location.origin+'/'+this.get('objectID')); 

        }else{
            this.attrs.transitionToFacet(facet_name, queryParams);
        }
    },
    pageback() {
        let page = Number(this.parameters["page"]);
        if (!page || --page < 1) { // decrements and modifies page var before the comparison
            page = 1;
        }
        this.attrs.transitionToFacet("search", {page: page})
    },
    pagenext() {
        let page = Number(this.parameters["page"]);
        if (!page) {
            page = 2;
        }
        else if ( ++page < 1) { // increments and modifies page var before the comparison
            page = 1;
        }
        this.attrs.transitionToFacet("search", {page: page})
    },
    orderBy(){
        let orderBtnID = $(event.target).children().attr('id');
        
        $('.orderBy label').removeClass( "active orderBySelected" );
        $(event.target).addClass( "active orderBySelected" )

        if(orderBtnID ==='orderByDate'){
            console.log('date')
            this.attrs.transitionToFacet('search', {recently_added_sort:'desc'});
        }else if(orderBtnID ==='orderByRelevance'){
            console.log('relevance')
            let queryParams = {};
            queryParams['recently_added_sort'] = undefined;
            this.attrs.transitionToFacet('search', queryParams);
        }

    }

}

});
