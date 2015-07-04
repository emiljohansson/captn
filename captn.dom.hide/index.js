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
 * // => display: none;
 */
function hide(element) {
    if (!element || !element.style || typeof element.style.display !== 'string') {
        return;
    }
    element.style.display = "none";
}

module.exports = hide;
