import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  extractMeta: function(store, type, payload) {
    if (payload && payload.meta) {
      store.metaForType(type, camelizeDeep(payload.meta));
      delete payload.meta;
    }
  }
});

function camelizeDeep(payload) {
  switch (Ember.typeOf(payload)) {
    case 'object':
      return camelizeHash(payload);
    case 'array':
      return payload.map(camelizeDeep);
    default:
      return payload;
  }
}

function camelizeHash(hash) {
  return Ember.keys(hash).reduce(function(camelized, key) {
    camelized[key.camelize()] = camelizeDeep(hash[key]);
    return camelized;
  }, {});
}
