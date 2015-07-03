"use strict";

var hasClassNameProperty = require('captn.dom._hasclassnameproperty');

/**
 * Removes a class name from the element's list of class names.
 *
 * @static
 * @param  {DOMElement} element The DOM element to modify.
 * @param  {string} className The name to remove.
 * @example
 *
 * addClass(el, 'container');
 *
 * hasClass(el, 'container');
 * // => true
 *
 * removeClass(el, 'container');
 *
 * hasClass(el, 'container');
 * // => false
 */
function removeClass(element, className) {
    if (!hasClassNameProperty(element)) {
        return;
    }
    element.className = element.className
        .replace(className, '')
        .replace(/^\s+|\s+$/g, '')
        .replace(/\s\s/g, ' ');
}

module.exports = removeClass;
