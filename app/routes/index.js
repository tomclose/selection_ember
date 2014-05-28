export default Ember.Route.extend({

  beforeModel: function() {
    this.store.pushPayload('order', order_payload);
    this.store.pushPayload('dish',  dishes_payload);
  },

  model: function() {
    return Em.RSVP.hash({
      'order': this.store.getById('order', order_payload["order"]["id"]),
      'dishes': this.store.all('dish')
    });
  },

  setupController: function(controller, models) {
    this.controllerFor('order').set('model', models['order']);
    this.controllerFor('dishes').set('model', models['dishes']);
  },

  renderTemplate: function() {
    this.render();
    this.render('order', {
      into: 'application',
      controller: this.controllerFor('order'),
    })
  },

});
