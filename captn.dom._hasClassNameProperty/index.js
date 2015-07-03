"use strict";

/**
 * Validates that an element has the `className` property.
 *
 * @private
 * @param  {DOMElement} element The DOM element to verify.
 * @param  {string} className The string to verify.
 * @return {boolean} Returns `true` if element.className exist.
 * @example
 *
 * hasClassNameProperty({});
 * // => false
 *
 * hasClassNameProperty({className: 123});
 * // => false
 *
 * hasClassNameProperty({className: ""});
 * // => true
 */
function hasClassNameProperty(element) {
    return !!element && typeof element.className === 'string';
}

module.exports = hasClassNameProperty;
