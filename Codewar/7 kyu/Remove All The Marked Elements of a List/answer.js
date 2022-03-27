Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((integer) => !values_list.includes(integer));
};
