/*
 * POLAR POP — selection state.
 * Drink and cup size are stored independently; changing one never
 * touches the other.
 */
window.PolarPop = window.PolarPop || {};

PolarPop.createState = function () {
  var state = { drinkId: null, cupId: null };
  var listeners = [];

  function emit() {
    var snapshot = { drinkId: state.drinkId, cupId: state.cupId };
    listeners.forEach(function (fn) { fn(snapshot); });
  }

  return {
    get: function () { return { drinkId: state.drinkId, cupId: state.cupId }; },
    selectDrink: function (id) { if (state.drinkId !== id) { state.drinkId = id; emit(); } },
    selectCup: function (id) { if (state.cupId !== id) { state.cupId = id; emit(); } },
    subscribe: function (fn) { listeners.push(fn); }
  };
};
