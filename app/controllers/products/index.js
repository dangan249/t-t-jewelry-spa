import Ember from 'ember';

export default Ember.ArrayController.extend({
  // setup our query params
  queryParams: ["page", "perPage", "category", "brand", "gender", "query"],

  query: null,
  brand: null,
  gender: null,
  category: null,
  unFilteredProducts: Ember.computed.alias('model'),

  // TODO: this somehow cause 2 request when loaded
  products: function() {
    var query, unFilteredProducts, result, brand, gender, category;

    query = this.get('query');
    brand = this.get('brand');
    gender = this.get('gender');
    category = this.get('category');

    unFilteredProducts = this.get('unFilteredProducts');

    result = (query || brand || gender || category) ?
      this.store.find('product', {
        query: query,
        brand: brand,
        category: category,
        gender: gender
      }) : unFilteredProducts;
    return result;
  }.property('unFilteredProducts','query', 'category', 'brand', 'genger'),

  actions: {
    search: function (searchQuery) {
      this.set('query', searchQuery);
    }
  }
});
