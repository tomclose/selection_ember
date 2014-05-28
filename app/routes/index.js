export default Ember.Route.extend({

  beforeModel: function() {
    this.store.pushPayload('order', order_payload);
    this.store.pushPayload('dish',  dishes_payload);
  },


});
