"use strict";

var hasClassNameProperty = require('captn.dom._hasClassNameProperty');
var hasClass = require('captn.dom.hasclass');

/**
 * Adds a class name to the element's list of class names.
 *
 * @static
 * @param  {DOMElement} element The DOM element to modify.
 * @param  {string} className The name to append.
 * @example
 *
 * hasClass(el, 'container');
 * // => false
 *
 * addClass(el, 'container');
 *
 * hasClass(el, 'container');
 * // => true
 */
function addClass(element, className) {
    if (!hasClassNameProperty(element) || hasClass(element, className)) {
        return;
    }
    element.className = (element.className + ' ' + className).replace(/^\s+|\s+$/g, '');
}

module.exports = addClass;
