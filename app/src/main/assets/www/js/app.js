/* POLAR POP — wires data, state and rendering together. */
(function () {
  var P = window.PolarPop;
  if (P.DRINKS.length !== 16) console.error("POLAR POP expects 16 drinks, found " + P.DRINKS.length);
  if (P.CUP_SIZES.length !== 3) console.error("POLAR POP expects 3 cup sizes, found " + P.CUP_SIZES.length);

  var state = P.createState();
  var valves = document.getElementById("valves");
  var cups = document.getElementById("cups");
  var summary = document.getElementById("summary");

  P.render.drinks(valves, P.DRINKS, state.selectDrink);
  P.render.cups(cups, P.CUP_SIZES, state.selectCup);

  function find(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  state.subscribe(function (s) {
    P.render.mark(valves, ".valve", s.drinkId);
    P.render.mark(cups, ".cup", s.cupId);
    var d = find(P.DRINKS, s.drinkId), c = find(P.CUP_SIZES, s.cupId);
    summary.textContent = (d ? d.name : "No drink yet") + "  ·  " + (c ? c.label + " cup" : "No size yet");
  });
})();
