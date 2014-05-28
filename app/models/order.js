export default DS.Model.extend({
  customer: DS.attr('string'),
  items:    DS.hasMany('item'),
});