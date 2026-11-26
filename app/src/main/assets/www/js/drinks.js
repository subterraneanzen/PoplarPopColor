/*
 * POLAR POP — central drink list (the ONLY place drinks are defined).
 *
 * To swap in real label artwork later, set `art` to an image path
 * (e.g. "img/labels/pepsi.png") — the dispenser will show the image
 * instead of the placeholder label. `colouringArt` is reserved for the
 * separate outline asset used by the colouring stage.
 *
 * Fields:
 *   id           stable identifier
 *   name         display / accessible name
 *   lines        how the placeholder label text is broken into lines
 *   bg, fg       placeholder label colours (brand-inspired)
 *   accent       optional stripe colour on the placeholder label
 *   liquid       colour of the pour stream when selected
 *   art          real label artwork path (null = placeholder)
 *   colouringArt colouring-page outline path (null = not supplied yet)
 */
window.PolarPop = window.PolarPop || {};

PolarPop.DRINKS = [
  { id: "coca-cola",        name: "Coca-Cola",        lines: ["Coca", "Cola"],           bg: "#e41e2b", fg: "#ffffff", accent: "#ffffff", liquid: "#4a2412" },
  { id: "diet-coke",        name: "Diet Coke",        lines: ["Diet", "Coke"],           bg: "#d8dadd", fg: "#e41e2b", accent: "#e41e2b", liquid: "#4a2412" },
  { id: "pepsi",            name: "Pepsi",            lines: ["Pepsi"],                  bg: "#0a3d91", fg: "#ffffff", accent: "#e32934", liquid: "#3b1d0e" },
  { id: "diet-pepsi",       name: "Diet Pepsi",       lines: ["Diet", "Pepsi"],          bg: "#e8ecf2", fg: "#0a3d91", accent: "#0a3d91", liquid: "#3b1d0e" },
  { id: "sprite",           name: "Sprite",           lines: ["Sprite"],                 bg: "#0b8a43", fg: "#ffffff", accent: "#f6d200", liquid: "#e3f6e6" },
  { id: "dr-pepper",        name: "Dr Pepper",        lines: ["Dr", "Pepper"],           bg: "#6d1a2b", fg: "#ffffff", accent: null,      liquid: "#3a140d" },
  { id: "mountain-dew",     name: "Mountain Dew",     lines: ["Mountain", "Dew"],        bg: "#0f5f2a", fg: "#c8e64a", accent: "#d81f26", liquid: "#d9ef5a" },
  { id: "barqs-root-beer",  name: "Barq's Root Beer", lines: ["Barq's", "Root", "Beer"], bg: "#1e2f5c", fg: "#ffffff", accent: "#d81f26", liquid: "#3a1d0f" },
  { id: "orange-crush",     name: "Orange Crush",     lines: ["Orange", "Crush"],        bg: "#f47b20", fg: "#ffffff", accent: "#0b5d2a", liquid: "#ff8a1e" },
  { id: "crush-cream-soda", name: "Crush Cream Soda", lines: ["Crush", "Cream", "Soda"], bg: "#e85a9b", fg: "#ffffff", accent: null,      liquid: "#ff9cc8" },
  { id: "grape-crush",      name: "Grape Crush",      lines: ["Grape", "Crush"],         bg: "#5b2a86", fg: "#ffffff", accent: "#0b5d2a", liquid: "#6d2c91" },
  { id: "aw-root-beer",     name: "A&W Root Beer",    lines: ["A&W", "Root", "Beer"],    bg: "#5e2b10", fg: "#ffa230", accent: "#ffa230", liquid: "#3a1d0f" },
  { id: "mug-root-beer",    name: "Mug Root Beer",    lines: ["Mug", "Root", "Beer"],    bg: "#7a3d1c", fg: "#ffffff", accent: "#1e2f5c", liquid: "#3a1d0f" },
  { id: "lime-crush",       name: "Lime Crush",       lines: ["Lime", "Crush"],          bg: "#7cc242", fg: "#10461f", accent: "#0b5d2a", liquid: "#a4e05a" },
  { id: "brisk-iced-tea",   name: "Brisk Iced Tea",   lines: ["Brisk", "Iced Tea"],      bg: "#161616", fg: "#ffd23f", accent: "#ffd23f", liquid: "#8a4a14" },
  { id: "7up",              name: "7UP",              lines: ["7UP"],                    bg: "#00843d", fg: "#ffffff", accent: "#e32934", liquid: "#e7f7e6" }
].map(function (d) {
  d.art = d.art || null;
  d.colouringArt = d.colouringArt || null;
  return d;
});
