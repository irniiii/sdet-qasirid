const objA = {a: 11, b: 20, c: 30};
const objB = {a: 3, c: 6, d: 3};

console.log(
  Object.keys(Object.assign({},objA,objB))
  .reduce(function(combine, k) {
    // sum A & B, 0 if not defined
    combine[k] = (objA[k] || 0) + (objB[k] || 0);
    return combine;
    // initial is empty
  }, {})
)
