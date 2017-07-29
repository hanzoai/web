import DIACRITICS from './diacritics'

var asciifold = (function() {
    var i, n, k, chunk;
    var foreignletters = '';
    var lookup = {};
    for (k in DIACRITICS) {
        if (DIACRITICS.hasOwnProperty(k)) {
            chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
            foreignletters += chunk;
            for (i = 0, n = chunk.length; i < n; i++) {
                lookup[chunk.charAt(i)] = k;
            }
        }
    }
    var regexp = new RegExp('[' +  foreignletters + ']', 'g');
    return function(str) {
        return str.replace(regexp, function(foreignletter) {
            return lookup[foreignletter];
        }).toLowerCase();
    };
})();

export function cmp(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a > b ? 1 : (a < b ? -1 : 0);
    }
    a = asciifold(String(a || ''));
    b = asciifold(String(b || ''));
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
}

export function extend(a, b) {
    var i, n, k, object;
    for (i = 1, n = arguments.length; i < n; i++) {
        object = arguments[i];
        if (!object) continue;
        for (k in object) {
            if (object.hasOwnProperty(k)) {
                a[k] = object[k];
            }
        }
    }
    return a;
}

/**
 * A property getter resolving dot-notation
 * @param  {Object}  obj     The root object to fetch property on
 * @param  {String}  name    The optionally dotted property name to fetch
 * @param  {Boolean} nesting Handle nesting or not
 * @return {Object}          The resolved property value
 */
export function getattr(obj, name, nesting) {
    if (!obj || !name) return;
    if (!nesting) return obj[name];
    var names = name.split('.');
    while(names.length && (obj = obj[names.shift()]));
    return obj;
}

export function trim(str) {
    return (str + '').replace(/^\s+|\s+$|/g, '');
}

export function escapeRegex(str) {
    return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

export const isArray = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
};
