"use strict";

/**
 * Hides an element.
 *
 * @static
 * @param  {DOMElement} element The DOM element to be modified.
 * @example
 *
 * hide(el);
 *
 * el.style
 * // => display: "";
 */
function hide(element) {
    if (!element || !element.style || typeof element.style.display !== 'string') {
        return;
    }
    element.style.display = "";
}

module.exports = hide;
