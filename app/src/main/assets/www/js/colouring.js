/*
 * POLAR POP — colouring stage (next milestone).
 *
 * Intentionally not wired into the UI yet. When label artwork is
 * supplied, each drink's `colouringArt` outline will be opened here.
 * The original brand artwork (`art`) and the colouring outline
 * (`colouringArt`) are kept as separate assets.
 */
window.PolarPop = window.PolarPop || {};

PolarPop.colouring = {
  isReady: function (drink) { return !!(drink && drink.colouringArt); },
  start: function (drink) {
    // Next stage: open the colouring canvas for drink.colouringArt.
    return false;
  }
};
