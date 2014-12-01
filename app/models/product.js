import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image_url: DS.attr('string'),
  gender: DS.attr('string'),
  category: DS.attr('string'),
  brand: DS.attr('string'),
  price: DS.attr('number'),
  values: DS.hasMany('values')
});
