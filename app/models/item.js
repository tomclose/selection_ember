export default DS.Model.extend({
  dish:     DS.belongsTo('dish'),
  quantity: DS.attr('number'),
});