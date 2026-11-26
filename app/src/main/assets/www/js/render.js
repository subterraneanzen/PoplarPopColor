/*
 * POLAR POP — screen rendering (dispenser valves + cup buttons).
 * Reads only from PolarPop.DRINKS / PolarPop.CUP_SIZES.
 */
window.PolarPop = window.PolarPop || {};

PolarPop.render = (function () {
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function labelFace(d) {
    if (d.art) {
      return '<img class="label-art" src="' + esc(d.art) + '" alt="">';
    }
    var stripe = d.accent ? '<span class="stripe" style="background:' + esc(d.accent) + '"></span>' : "";
    return (
      '<span class="label-text">' +
      d.lines.map(function (l) { return "<span>" + esc(l) + "</span>"; }).join("") +
      "</span>" + stripe +
      '<span class="ph-tag">placeholder</span>'
    );
  }

  function drinks(container, list, onSelect) {
    container.innerHTML = list.map(function (d) {
      return (
        '<button type="button" class="valve" role="radio" aria-checked="false" ' +
        'data-id="' + esc(d.id) + '" aria-label="' + esc(d.name) + '" ' +
        'style="--bg:' + esc(d.bg) + ';--fg:' + esc(d.fg) + ';--liquid:' + esc(d.liquid) + '">' +
        '<span class="label' + (d.art ? " has-art" : "") + '">' + labelFace(d) + "</span>" +
        '<span class="housing"></span>' +
        '<span class="spout"><span class="nozzle"></span><span class="lever"></span><span class="stream"></span></span>' +
        "</button>"
      );
    }).join("");
    container.addEventListener("click", function (e) {
      var btn = e.target.closest(".valve");
      if (btn) onSelect(btn.dataset.id);
    });
  }

  function cupSvg(scale) {
    var h = Math.round(120 * scale), w = Math.round(84 * scale);
    return (
      '<svg class="cup-svg" viewBox="0 0 84 120" width="' + w + '" height="' + h + '" aria-hidden="true">' +
      '<path d="M8 22 L76 22 L68 116 Q42 120 16 116 Z" fill="#ffffff" stroke="#c9d6e6" stroke-width="2"/>' +
      '<path d="M11 52 L73 52 L70 84 L14 84 Z" fill="#1f6fd1"/>' +
      '<path d="M14 84 L70 84 L69.4 90 L14.6 90 Z" fill="#e53935"/>' +
      '<rect x="4" y="12" width="76" height="12" rx="6" fill="#eef4fb" stroke="#c9d6e6" stroke-width="2"/>' +
      '<rect x="46" y="0" width="6" height="16" rx="2" fill="#e53935" transform="rotate(12 49 8)"/>' +
      "</svg>"
    );
  }

  function cups(container, list, onSelect) {
    container.innerHTML = list.map(function (c) {
      return (
        '<button type="button" class="cup" role="radio" aria-checked="false" data-id="' + esc(c.id) + '">' +
        '<span class="cup-art">' + cupSvg(c.scale) + "</span>" +
        '<span class="cup-name">' + esc(c.label) + "</span>" +
        '<span class="check" aria-hidden="true"></span>' +
        "</button>"
      );
    }).join("");
    container.addEventListener("click", function (e) {
      var btn = e.target.closest(".cup");
      if (btn) onSelect(btn.dataset.id);
    });
  }

  function mark(container, selector, id) {
    container.querySelectorAll(selector).forEach(function (el) {
      var on = el.dataset.id === id;
      el.classList.toggle("is-selected", on);
      el.setAttribute("aria-checked", on ? "true" : "false");
    });
  }

  return { drinks: drinks, cups: cups, mark: mark };
})();
