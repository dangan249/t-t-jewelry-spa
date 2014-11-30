import Ember from 'ember';

export default Ember.Component.extend({
  placeholder: '',
  query: '',

  actions: {
    search: function() {
      this.sendAction('action', this.get('query'));
    }
  }
});
