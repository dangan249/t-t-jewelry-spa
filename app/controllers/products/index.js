import Ember from 'ember';

export default Ember.ArrayController.extend({
  // setup our query params
  queryParams: ["page", "perPage", "category", "brand", "gender", "query"],

  query: null,
  brand: null,
  gender: '',
  category: null,

  // TODO: this somehow cause 2 request when loaded
  products: function() {
    var query, unFilteredProducts, result, brand, gender, category;

    query = this.get('query');
    brand = this.get('brand');
    gender = this.get('gender');
    category = this.get('category');

    unFilteredProducts = this.get('model');

    result = (query || brand || gender || category) ?
      this.store.find('product', {
        query: query,
        brand: brand,
        category: category,
        gender: gender
      }) : unFilteredProducts;

    return result;
  }.property('model','query', 'category', 'brand', 'gender'),

  brands: function () {
   var result = this.store.find('brand', {
      category: this.get('category')
    });
    return result;
  }.property('products', 'category'),

  actions: {
    search: function (searchQuery) {
      this.set('query', searchQuery);
    }
  }
});
