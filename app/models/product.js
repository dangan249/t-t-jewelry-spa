import DS from 'ember-data';

var Product = DS.Model.extend({
  name: DS.attr('string'),
  image_url: DS.attr('string'),
  gender: DS.attr('string'),
  category: DS.attr('string'),
  brand: DS.attr('string'),
  price: DS.attr('number')
});

export default Product;
