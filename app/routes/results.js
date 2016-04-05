import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url= 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=9c32ae907a2e469b9c7eb7b48ef66a3a&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
