import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    filterPriceRange: function(){
      console.log(this.get('filterBrands'));
    }
  }
});
