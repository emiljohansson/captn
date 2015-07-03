"use strict";

var hasClassNameProperty = require('captn.dom._hasclassnameproperty');

/**
 * Returns true if the element's class name contains className.
 *
 * @static
 * @param  {DOMElement} element The DOM element to be checked.
 * @param  {string} className The name to match.
 * @return {boolean} Returns `true` if `className` exist within the elements className.
 * @example
 *
 * hasClass(el, 'container');
 * // => true
 */
function hasClass(element, className) {
    if (!hasClassNameProperty(element)) {
        return false;
    }
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

module.exports = hasClass;
