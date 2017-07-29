var DIACRITICS = {
    'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
    'b': '[b␢βΒB฿𐌁ᛒ]',
    'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
    'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
    'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
    'f': '[fƑƒḞḟ]',
    'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
    'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
    'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
    'j': '[jȷĴĵɈɉʝɟʲ]',
    'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
    'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
    'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
    'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
    'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
    'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
    'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
    's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
    't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
    'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
    'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
    'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
    'x': '[xẌẍẊẋχ]',
    'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
    'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
};

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

function cmp(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a > b ? 1 : (a < b ? -1 : 0);
    }
    a = asciifold(String(a || ''));
    b = asciifold(String(b || ''));
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
}

function extend(a, b) {
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
function getattr(obj, name, nesting) {
    if (!obj || !name) return;
    if (!nesting) return obj[name];
    var names = name.split('.');
    while(names.length && (obj = obj[names.shift()]));
    return obj;
}

function trim(str) {
    return (str + '').replace(/^\s+|\s+$|/g, '');
}

function escapeRegex(str) {
    return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}

const isArray = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
};

/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/**
 * Textually searches arrays and hashes of objects
 * by property (or multiple properties). Designed
 * specifically for autocomplete.
 *
 * @constructor
 * @param {array|object} items
 * @param {object} items
 */
function Sifter(items, settings) {
    this.items = items;
    this.settings = settings || {diacritics: true};
}

/**
 * Splits a search string into an array of individual
 * regexps to be used to match results.
 *
 * @param {string} query
 * @returns {array}
 */
Sifter.prototype.tokenize = function(query) {
    query = trim(String(query || '').toLowerCase());
    if (!query || !query.length) return [];

    var i, n, regex, letter;
    var tokens = [];
    var words = query.split(/ +/);

    for (i = 0, n = words.length; i < n; i++) {
        regex = escapeRegex(words[i]);
        if (this.settings.diacritics) {
            for (letter in DIACRITICS) {
                if (DIACRITICS.hasOwnProperty(letter)) {
                    regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
                }
            }
        }
        tokens.push({
            string : words[i],
            regex  : new RegExp(regex, 'i')
        });
    }

    return tokens;
};

/**
 * Iterates over arrays and hashes.
 *
 * ```
 * this.iterator(this.items, function(item, id) {
 *    // invoked for each item
 * });
 * ```
 *
 * @param {array|object} object
 */
Sifter.prototype.iterator = function(object, callback) {
    var iterator;
    if (isArray(object)) {
        iterator = Array.prototype.forEach || function(callback) {
            for (var i = 0, n = this.length; i < n; i++) {
                callback(this[i], i, this);
            }
        };
    } else {
        iterator = function(callback) {
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    callback(this[key], key, this);
                }
            }
        };
    }

    iterator.apply(object, [callback]);
};

/**
 * Returns a function to be used to score individual results.
 *
 * Good matches will have a higher score than poor matches.
 * If an item is not a match, 0 will be returned by the function.
 *
 * @param {object|string} search
 * @param {object} options (optional)
 * @returns {function}
 */
Sifter.prototype.getScoreFunction = function(search, options) {
    var self, fields, tokens, tokenCount, nesting;

    self       = this;
    search     = self.prepareSearch(search, options);
    tokens     = search.tokens;
    fields     = search.options.fields;
    tokenCount = tokens.length;
    nesting    = search.options.nesting;

    /**
     * Calculates how close of a match the
     * given value is against a search token.
     *
     * @param {mixed} value
     * @param {object} token
     * @return {number}
     */
     function scoreValue(value, token) {
        var score, pos;

        if (!value) return 0;
        value = String(value || '');
        pos = value.search(token.regex);
        if (pos === -1) return 0;
        score = token.string.length / value.length;
        if (pos === 0) score += 0.5;
        return score;
    }

    /**
     * Calculates the score of an object
     * against the search query.
     *
     * @param {object} token
     * @param {object} data
     * @return {number}
     */
    var scoreObject = (function() {
        var fieldCount = fields.length;
        if (!fieldCount) {
            return function() { return 0; };
        }
        if (fieldCount === 1) {
            return function(token, data) {
                return scoreValue(getattr(data, fields[0], nesting), token);
            };
        }
        return function(token, data) {
            for (var i = 0, sum = 0; i < fieldCount; i++) {
                sum += scoreValue(getattr(data, fields[i], nesting), token);
            }
            return sum / fieldCount;
        };
    })();

    if (!tokenCount) {
        return function() { return 0; };
    }
    if (tokenCount === 1) {
        return function(data) {
            return scoreObject(tokens[0], data);
        };
    }

    if (search.options.conjunction === 'and') {
        return function(data) {
            var score;
            for (var i = 0, sum = 0; i < tokenCount; i++) {
                score = scoreObject(tokens[i], data);
                if (score <= 0) return 0;
                sum += score;
            }
            return sum / tokenCount;
        };
    } else {
        return function(data) {
            for (var i = 0, sum = 0; i < tokenCount; i++) {
                sum += scoreObject(tokens[i], data);
            }
            return sum / tokenCount;
        };
    }
};

/**
 * Returns a function that can be used to compare two
 * results, for sorting purposes. If no sorting should
 * be performed, `null` will be returned.
 *
 * @param {string|object} search
 * @param {object} options
 * @return function(a,b)
 */
Sifter.prototype.getSortFunction = function(search, options) {
    var i, n, self, field, fields, fieldsCount, multiplier, multipliers, sort, implicitScore;

    self   = this;
    search = self.prepareSearch(search, options);
    sort   = (!search.query && options.sortEmpty) || options.sort;

    /**
     * Fetches the specified sort field value
     * from a search result item.
     *
     * @param  {string} name
     * @param  {object} result
     * @return {mixed}
     */
    function getField(name, result) {
        if (name === '$score') return result.score;
        return getattr(self.items[result.id], name, options.nesting);
    }

    // parse options
    fields = [];
    if (sort) {
        for (i = 0, n = sort.length; i < n; i++) {
            if (search.query || sort[i].field !== '$score') {
                fields.push(sort[i]);
            }
        }
    }

    // the "$score" field is implied to be the primary
    // sort field, unless it's manually specified
    if (search.query) {
        implicitScore = true;
        for (i = 0, n = fields.length; i < n; i++) {
            if (fields[i].field === '$score') {
                implicitScore = false;
                break;
            }
        }
        if (implicitScore) {
            fields.unshift({field: '$score', direction: 'desc'});
        }
    } else {
        for (i = 0, n = fields.length; i < n; i++) {
            if (fields[i].field === '$score') {
                fields.splice(i, 1);
                break;
            }
        }
    }

    multipliers = [];
    for (i = 0, n = fields.length; i < n; i++) {
        multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
    }

    // build function
    fieldsCount = fields.length;
    if (!fieldsCount) {
        return null;
    } else if (fieldsCount === 1) {
        field = fields[0].field;
        multiplier = multipliers[0];
        return function(a, b) {
            return multiplier * cmp(
                getField(field, a),
                getField(field, b)
            );
        };
    } else {
        return function(a, b) {
            var i, result, field;
            for (i = 0; i < fieldsCount; i++) {
                field = fields[i].field;
                result = multipliers[i] * cmp(
                    getField(field, a),
                    getField(field, b)
                );
                if (result) return result;
            }
            return 0;
        };
    }
};

/**
 * Parses a search query and returns an object
 * with tokens and fields ready to be populated
 * with results.
 *
 * @param {string} query
 * @param {object} options
 * @returns {object}
 */
Sifter.prototype.prepareSearch = function(query, options) {
    if (typeof query === 'object') return query;

    options = extend({}, options);

    var optionFields     = options.fields;
    var optionSort       = options.sort;
    var optionSortEmpty = options.sortEmpty;

    if (optionFields && !isArray(optionFields)) options.fields = [optionFields];
    if (optionSort && !isArray(optionSort)) options.sort = [optionSort];
    if (optionSortEmpty && !isArray(optionSortEmpty)) options.sortEmpty = [optionSortEmpty];

    return {
        options : options,
        query   : String(query || '').toLowerCase(),
        tokens  : this.tokenize(query),
        total   : 0,
        items   : []
    };
};

/**
 * Searches through all items and returns a sorted array of matches.
 *
 * The `options` parameter can contain:
 *
 *   - fields {string|array}
 *   - sort {array}
 *   - score {function}
 *   - filter {bool}
 *   - limit {integer}
 *
 * Returns an object containing:
 *
 *   - options {object}
 *   - query {string}
 *   - tokens {array}
 *   - total {int}
 *   - items {array}
 *
 * @param {string} query
 * @param {object} options
 * @returns {object}
 */
Sifter.prototype.search = function(query, options) {
    var self = this, score, search;
    var fnSort;
    var fnScore;

    search  = this.prepareSearch(query, options);
    options = search.options;
    query   = search.query;

    // generate result scoring function
    fnScore = options.score || self.getScoreFunction(search);

    // perform search and sort
    if (query.length) {
        self.iterator(self.items, function(item, id) {
            score = fnScore(item);
            if (options.filter === false || score > 0) {
                search.items.push({'score': score, 'id': id});
            }
        });
    } else {
        self.iterator(self.items, function(item, id) {
            search.items.push({'score': 1, 'id': id});
        });
    }

    fnSort = self.getSortFunction(search, options);
    if (fnSort) search.items.sort(fnSort);

    // apply limits
    search.total = search.items.length;
    if (typeof options.limit === 'number') {
        search.items = search.items.slice(0, options.limit);
    }

    return search;
};

var isActualNaN;
var isArgs;
var isFn;
var objProto;
var owns;
var symbolValueOf;
var toStr;

objProto = Object.prototype;

owns = objProto.hasOwnProperty;

toStr = objProto.toString;

symbolValueOf = void 0;

if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}

isActualNaN = function(value) {
  return value !== value;
};

var isEqual = function(value, other) {
  var key, type;
  if (value === other) {
    return true;
  }
  type = toStr.call(value);
  if (type !== toStr.call(other)) {
    return false;
  }
  if (type === '[object Object]') {
    for (key in value) {
      if (!isEqual(value[key], other[key]) || !(key in other)) {
        return false;
      }
    }
    for (key in other) {
      if (!isEqual(value[key], other[key]) || !(key in value)) {
        return false;
      }
    }
    return true;
  }
  if (type === '[object Array]') {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (key--) {
      if (!isEqual(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }
  if (type === '[object Function]') {
    return value.prototype === other.prototype;
  }
  if (type === '[object Date]') {
    return value.getTime() === other.getTime();
  }
  return false;
};

var isArrayLike = function(value) {
  return !!value && !isBool(value) && owns.call(value, 'length') && isFinite(value.length) && isNumber(value.length) && value.length >= 0;
};

var isArguments = isArgs = function(value) {
  var isOldArguments, isStandardArguments;
  isStandardArguments = toStr.call(value) === '[object Arguments]';
  isOldArguments = !isArray$1(value) && isArrayLike(value) && isObject(value) && isFn(value.callee);
  return isStandardArguments || isOldArguments;
};

var isArray$1 = Array.isArray || function(value) {
  return toStr.call(value) === '[object Array]';
};

var isBool = function(value) {
  return toStr.call(value) === '[object Boolean]';
};

var isFunction = isFn = function(value) {
  var isAlert, str;
  isAlert = typeof window !== 'undefined' && value === window.alert;
  if (isAlert) {
    return true;
  }
  str = toStr.call(value);
  return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
};

var isNumber = function(value) {
  return toStr.call(value) === '[object Number]';
};

var isObject = function(value) {
  return toStr.call(value) === '[object Object]';
};

/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

const MicroPlugin = {};

MicroPlugin.mixin = function(Interface) {
    Interface.plugins = {};

    /**
     * Initializes the listed plugins (with options).
     * Acceptable formats:
     *
     * List (without options):
     *   ['a', 'b', 'c']
     *
     * List (with options):
     *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
     *
     * Hash (with options):
     *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
     *
     * @param {mixed} plugins
     */
    Interface.prototype.initializePlugins = function(plugins) {
        var i, n, key;
        var self  = this;
        var queue = [];

        self.plugins = {
            names     : [],
            settings  : {},
            requested : {},
            loaded    : {}
        };

        if (isArray$1(plugins)) {
            for (i = 0, n = plugins.length; i < n; i++) {
                if (typeof plugins[i] === 'string') {
                    queue.push(plugins[i]);
                } else {
                    self.plugins.settings[plugins[i].name] = plugins[i].options;
                    queue.push(plugins[i].name);
                }
            }
        } else if (plugins) {
            for (key in plugins) {
                if (plugins.hasOwnProperty(key)) {
                    self.plugins.settings[key] = plugins[key];
                    queue.push(key);
                }
            }
        }

        while (queue.length) {
            self.require(queue.shift());
        }
    };

    Interface.prototype.loadPlugin = function(name) {
        var self    = this;
        var plugins = self.plugins;
        var plugin  = Interface.plugins[name];

        if (!Interface.plugins.hasOwnProperty(name)) {
            throw new Error('Unable to find "' +  name + '" plugin');
        }

        plugins.requested[name] = true;
        plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
        plugins.names.push(name);
    };

    /**
     * Initializes a plugin.
     *
     * @param {string} name
     */
    Interface.prototype.require = function(name) {
        var self = this;
        var plugins = self.plugins;

        if (!self.plugins.loaded.hasOwnProperty(name)) {
            if (plugins.requested[name]) {
                throw new Error('Plugin has circular dependency ("' + name + '")');
            }
            self.loadPlugin(name);
        }

        return plugins.loaded[name];
    };

    /**
     * Registers a plugin.
     *
     * @param {string} name
     * @param {function} fn
     */
    Interface.define = function(name, fn) {
        Interface.plugins[name] = {
            'name' : name,
            'fn'   : fn
        };
    };
};

/**
 * MicroEvent - to make any js object an event emitter
 *
 * - pure javascript - server compatible, browser compatible
 * - dont rely on the browser doms
 * - super simple - you get it immediatly, no mistery, no magic involved
 *
 * @author Jerome Etienne (https://github.com/jeromeetienne)
 */

function MicroEvent() {}

MicroEvent.prototype = {
	on: function(event, fct){
		this._events = this._events || {};
		this._events[event] = this._events[event] || [];
		this._events[event].push(fct);
	},
	off: function(event, fct){
		var n = arguments.length;
		if (n === 0) return delete this._events;
		if (n === 1) return delete this._events[event];

		this._events = this._events || {};
		if (event in this._events === false) return;
		this._events[event].splice(this._events[event].indexOf(fct), 1);
	},
	trigger: function(event /* , args... */){
		this._events = this._events || {};
		if (event in this._events === false) return;
		for (var i = 0; i < this._events[event].length; i++){
			this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}
};

/**
 * Mixin will delegate all MicroEvent.js function in the destination object.
 *
 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
 *
 * @param {object} the object which will support MicroEvent
 */
MicroEvent.mixin = function(destObject){
	var props = ['on', 'off', 'trigger'];
	for (var i = 0; i < props.length; i++){
		destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
	}
};

/**
 * highlight v3 | MIT license | Johann Burkard <jb@eaio.com>
 * Highlights arbitrary terms in a node.
 *
 * - Modified by Marshal <beatgates@gmail.com> 2011-6-24 (added regex)
 * - Modified by Brian Reavis <brian@thirdroute.com> 2012-8-27 (cleanup)
 */

function highlight($element, pattern) {
	if (typeof pattern === 'string' && !pattern.length) return;
	var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;

	var highlight = function(node) {
		var skip = 0;
		if (node.nodeType === 3) {
			var pos = node.data.search(regex);
			if (pos >= 0 && node.data.length > 0) {
				// var match = node.data.match(regex);
				var spannode = document.createElement('span');
				spannode.className = 'highlight';
				var middlebit = node.splitText(pos);
				// var endbit = middlebit.splitText(match[0].length);
				var middleclone = middlebit.cloneNode(true);
				spannode.appendChild(middleclone);
				middlebit.parentNode.replaceChild(spannode, middlebit);
				skip = 1;
			}
		} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
			for (var i = 0; i < node.childNodes.length; ++i) {
				i += highlight(node.childNodes[i]);
			}
		}
		return skip;
	};

	return $element.each(function() {
		highlight(this);
	});
}

/**
 * removeHighlight fn copied from highlight v5 and
 * edited to remove with() and pass js strict mode
 */
$.fn.removeHighlight = function() {
	return this.find('span.highlight').each(function() {
		// this.parentNode.firstChild.nodeName;
		var parent = this.parentNode;
		parent.replaceChild(this.firstChild, this);
		parent.normalize();
	}).end();
};

var defaults = {
	options: [],
	optgroups: [],

	plugins: [],
	delimiter: ',',
	splitOn: null, // regexp or string for splitting up values from a paste command
	persist: true,
	diacritics: true,
	create: false,
	createOnBlur: false,
	createFilter: null,
	highlight: true,
	openOnFocus: true,
	maxOptions: 1000,
	maxItems: null,
	hideSelected: null,
	addPrecedence: false,
	selectOnTab: false,
	preload: false,
	allowEmptyOption: false,
	closeAfterSelect: false,

	scrollDuration: 60,
	loadThrottle: 300,
	loadingClass: 'loading',

	dataAttr: 'data-data',
	optgroupField: 'optgroup',
	valueField: 'value',
	labelField: 'text',
	optgroupLabelField: 'label',
	optgroupValueField: 'value',
	lockOptgroupOrder: false,

	sortField: '$order',
	searchField: ['text'],
	searchConjunction: 'and',

	mode: null,
	wrapperClass: 'selectize-control',
	inputClass: 'selectize-input',
	dropdownClass: 'selectize-dropdown',
	dropdownContentClass: 'selectize-dropdown-content',

	dropdownParent: null,

	copyClassesToDropdown: true,

	/*
	load                 : null, // function(query, callback) { ... }
	score                : null, // function(search) { ... }
	onInitialize         : null, // function() { ... }
	onChange             : null, // function(value) { ... }
	onItemAdd            : null, // function(value, $item) { ... }
	onItemRemove         : null, // function(value) { ... }
	onClear              : null, // function() { ... }
	onOptionAdd          : null, // function(value, data) { ... }
	onOptionRemove       : null, // function(value) { ... }
	onOptionClear        : null, // function() { ... }
	onOptionGroupAdd     : null, // function(id, data) { ... }
	onOptionGroupRemove  : null, // function(id) { ... }
	onOptionGroupClear   : null, // function() { ... }
	onDropdownOpen       : null, // function($dropdown) { ... }
	onDropdownClose      : null, // function($dropdown) { ... }
	onType               : null, // function(str) { ... }
	onDelete             : null, // function(values) { ... }
	*/

	render: {
		/*
		item: null,
		optgroup: null,
		optgroup_header: null,
		option: null,
		option_create: null
		*/
	}
};

var IS_MAC        = /Mac/.test(navigator.userAgent);

var KEY_A         = 65;

var KEY_RETURN    = 13;
var KEY_ESC       = 27;
var KEY_LEFT      = 37;
var KEY_UP        = 38;
var KEY_P         = 80;
var KEY_RIGHT     = 39;
var KEY_DOWN      = 40;
var KEY_N         = 78;
var KEY_BACKSPACE = 8;
var KEY_DELETE    = 46;
var KEY_SHIFT     = 16;
var KEY_CMD       = IS_MAC ? 91 : 17;
var KEY_CTRL      = IS_MAC ? 18 : 17;
var KEY_TAB       = 9;

var TAG_SELECT    = 1;
var TAG_INPUT     = 2;

// for now, android support in general is too spotty to support validity
var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;

/**
 * Determines if the provided value has been defined.
 *
 * @param {mixed} object
 * @returns {boolean}
 */
function isSet(object) {
	return typeof object !== 'undefined';
}

/**
 * Converts a scalar to its best string representation
 * for hash keys and HTML attribute values.
 *
 * Transformations:
 *   'str'     -> 'str'
 *   null      -> ''
 *   undefined -> ''
 *   true      -> '1'
 *   false     -> '0'
 *   0         -> '0'
 *   1         -> '1'
 *
 * @param {string} value
 * @returns {string|null}
 */
function hashKey(value) {
	if (typeof value === 'undefined' || value === null) return null;
	if (typeof value === 'boolean') return value ? '1' : '0';
	return value + '';
}

/**
 * Escapes a string for use within HTML.
 *
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
	return (str + '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/**
 * Escapes "$" characters in replacement strings.
 *
 * @param {string} str
 * @returns {string}
 */




/**
 * Wraps `fn` so that it can only be invoked once.
 *
 * @param {function} fn
 * @returns {function}
 */
function once(fn) {
	var called = false;
	return function() {
		if (called) return;
		called = true;
		fn.apply(this, arguments);
	};
}

/**
 * Wraps `fn` so that it can only be called once
 * every `delay` milliseconds (invoked on the falling edge).
 *
 * @param {function} fn
 * @param {int} delay
 * @returns {function}
 */
function debounce(fn, delay) {
	var timeout;
	return function() {
		var self = this;
		var args = arguments;
		window.clearTimeout(timeout);
		timeout = window.setTimeout(function() {
			fn.apply(self, args);
		}, delay);
	};
}

/**
 * Debounce all fired events types listed in `types`
 * while executing the provided `fn`.
 *
 * @param {object} self
 * @param {array} types
 * @param {function} fn
 */
function debounceEvents(self, types, fn) {
	var type;
	var trigger = self.trigger;
	var eventArgs = {};

	// override trigger method
	self.trigger = function() {
		var type = arguments[0];
		if (types.indexOf(type) !== -1) {
			eventArgs[type] = arguments;
		} else {
			return trigger.apply(self, arguments);
		}
	};

	// invoke provided function
	fn.apply(self, []);
	self.trigger = trigger;

	// trigger queued events
	for (type in eventArgs) {
		if (eventArgs.hasOwnProperty(type)) {
			trigger.apply(self, eventArgs[type]);
		}
	}
}

/**
 * A workaround for http://bugs.jquery.com/ticket/6696
 *
 * @param {object} $parent - Parent element to listen on.
 * @param {string} event - Event name.
 * @param {string} selector - Descendant selector to filter by.
 * @param {function} fn - Event handler.
 */
function watchChildEvent($parent, event, selector, fn) {
	$parent.on(event, selector, function(e) {
		var child = e.target;
		while (child && child.parentNode !== $parent[0]) {
			child = child.parentNode;
		}
		e.currentTarget = child;
		return fn.apply(this, [e]);
	});
}

/**
 * Determines the current selection within a text input control.
 * Returns an object containing:
 *   - start
 *   - length
 *
 * @param {object} input
 * @returns {object}
 */
function getSelection(input) {
	var result = {};
	if ('selectionStart' in input) {
		result.start = input.selectionStart;
		result.length = input.selectionEnd - result.start;
	} else if (document.selection) {
		input.focus();
		var sel = document.selection.createRange();
		var selLen = document.selection.createRange().text.length;
		sel.moveStart('character', -input.value.length);
		result.start = sel.text.length - selLen;
		result.length = selLen;
	}
	return result;
}

/**
 * Copies CSS properties from one element to another.
 *
 * @param {object} $from
 * @param {object} $to
 * @param {array} properties
 */
function transferStyles($from, $to, properties) {
	var i, n, styles = {};
	if (properties) {
		for (i = 0, n = properties.length; i < n; i++) {
			styles[properties[i]] = $from.css(properties[i]);
		}
	} else {
		styles = $from.css();
	}
	$to.css(styles);
}

/**
 * Measures the width of a string within a
 * parent element (in pixels).
 *
 * @param {string} str
 * @param {object} $parent
 * @returns {int}
 */
function measureString(str, $parent) {
	if (!str) {
		return 0;
	}

	var $test = $('<test>').css({
		position: 'absolute',
		top: -99999,
		left: -99999,
		width: 'auto',
		padding: 0,
		whiteSpace: 'pre'
	}).text(str).appendTo('body');

	transferStyles($parent, $test, [
		'letterSpacing',
		'fontSize',
		'fontFamily',
		'fontWeight',
		'textTransform'
	]);

	var width = $test.width();
	$test.remove();

	return width;
}

/**
 * Sets up an input to grow horizontally as the user
 * types. If the value is changed manually, you can
 * trigger the "update" handler to resize:
 *
 * $input.trigger('update');
 *
 * @param {object} $input
 */
function autoGrow($input) {
	var currentWidth = null;

	var update = function(e, options) {
		var value, keyCode, printable, placeholder, width;
		var shift, character, selection;
		e = e || window.event || {};
		options = options || {};

		if (e.metaKey || e.altKey) return;
		if (!options.force && $input.data('grow') === false) return;

		value = $input.val();
		if (e.type && e.type.toLowerCase() === 'keydown') {
			keyCode = e.keyCode;
			printable = (
				(keyCode >= 97 && keyCode <= 122) || // a-z
				(keyCode >= 65 && keyCode <= 90)  || // A-Z
				(keyCode >= 48 && keyCode <= 57)  || // 0-9
				keyCode === 32 // space
			);

			if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
				selection = getSelection($input[0]);
				if (selection.length) {
					value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
				} else if (keyCode === KEY_BACKSPACE && selection.start) {
					value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
				} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
					value = value.substring(0, selection.start) + value.substring(selection.start + 1);
				}
			} else if (printable) {
				shift = e.shiftKey;
				character = String.fromCharCode(e.keyCode);
				if (shift) character = character.toUpperCase();
				else character = character.toLowerCase();
				value += character;
			}
		}

		placeholder = $input.attr('placeholder');
		if (!value && placeholder) {
			value = placeholder;
		}

		width = measureString(value, $input) + 4;
		if (width !== currentWidth) {
			currentWidth = width;
			$input.width(width);
			$input.triggerHandler('resize');
		}
	};

	$input.on('keydown keyup update blur', update);
	update();
}

function domToString(d) {
	var tmp = document.createElement('div');

	tmp.appendChild(d.cloneNode(true));

	return tmp.innerHTML;
}

function Selectize($input, settings) {
	var i, n, dir, input, self = this;
	input = $input[0];
	input.selectize = self;

	// detect rtl environment
	var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
	dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
	dir = dir || $input.parents('[dir]:first').attr('dir') || '';

	// setup default state
	$.extend(self, {
		order            : 0,
		settings         : settings,
		$input           : $input,
		tabIndex         : $input.attr('tabindex') || '',
		tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
		rtl              : /rtl/i.test(dir),

		eventNS          : '.selectize' + (++Selectize.count),
		highlightedValue : null,
		isOpen           : false,
		isDisabled       : false,
		isRequired       : $input.is('[required]'),
		isInvalid        : false,
		isLocked         : false,
		isFocused        : false,
		isInputHidden    : false,
		isSetup          : false,
		isShiftDown      : false,
		isCmdDown        : false,
		isCtrlDown       : false,
		ignoreFocus      : false,
		ignoreBlur       : false,
		ignoreHover      : false,
		hasOptions       : false,
		currentResults   : null,
		lastValue        : '',
		caretPos         : 0,
		loading          : 0,
		loadedSearches   : {},

		$activeOption    : null,
		$activeItems     : [],

		optgroups        : {},
		options          : {},
		userOptions      : {},
		items            : [],
		renderCache      : {},
		onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
	});

	// search system
	self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});

	// build options table
	if (self.settings.options) {
		for (i = 0, n = self.settings.options.length; i < n; i++) {
			self.registerOption(self.settings.options[i]);
		}
		delete self.settings.options;
	}

	// build optgroup table
	if (self.settings.optgroups) {
		for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
			self.registerOptionGroup(self.settings.optgroups[i]);
		}
		delete self.settings.optgroups;
	}

	// option-dependent defaults
	self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
	if (typeof self.settings.hideSelected !== 'boolean') {
		self.settings.hideSelected = self.settings.mode === 'multi';
	}

	self.initializePlugins(self.settings.plugins);
	self.setupCallbacks();
	self.setupTemplates();
	self.setup();
}


// defaults
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Selectize.defaults = defaults;
Selectize.count    = 0;

// mixins
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

MicroEvent.mixin(Selectize);
MicroPlugin.mixin(Selectize);

// methods
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

$.extend(Selectize.prototype, {

	/**
	 * Creates all elements and sets up event bindings.
	 */
	setup: function() {
		var self      = this;
		var settings  = self.settings;
		var eventNS   = self.eventNS;
		var $window   = $(window);
		var $document = $(document);
		var $input    = self.$input;

		var $wrapper;
		var $control;
		var $controlInput;
		var $dropdown;
		var $dropdownContent;
		var $dropdownParent;
		var inputMode;
		var classes;
		var classesPlugins;
		var inputId;

		inputMode         = self.settings.mode;
		classes           = $input.attr('class') || '';

		$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
		$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
		$controlInput    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
		$dropdownParent  = $(settings.dropdownParent || $wrapper);
		$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdownParent);
		$dropdownContent = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);

		if(inputId = $input.attr('id')) {
			$controlInput.attr('id', inputId + '-selectized');
			$('label[for="'+inputId+'"]').attr('for', inputId + '-selectized');
		}

		if(self.settings.copyClassesToDropdown) {
			$dropdown.addClass(classes);
		}

		$wrapper.css({
			width: $input[0].style.width
		});

		if (self.plugins.names.length) {
			classesPlugins = 'plugin-' + self.plugins.names.join(' plugin-');
			$wrapper.addClass(classesPlugins);
			$dropdown.addClass(classesPlugins);
		}

		if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
			$input.attr('multiple', 'multiple');
		}

		if (self.settings.placeholder) {
			$controlInput.attr('placeholder', settings.placeholder);
		}

		// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
		if (!self.settings.splitOn && self.settings.delimiter) {
			var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
			self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
		}

		if ($input.attr('autocorrect')) {
			$controlInput.attr('autocorrect', $input.attr('autocorrect'));
		}

		if ($input.attr('autocapitalize')) {
			$controlInput.attr('autocapitalize', $input.attr('autocapitalize'));
		}

		self.$wrapper          = $wrapper;
		self.$control          = $control;
		self.$controlInput    = $controlInput;
		self.$dropdown         = $dropdown;
		self.$dropdownContent = $dropdownContent;

		$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
		$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
		watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
		autoGrow($controlInput);

		$control.on({
			mousedown : function() { return self.onMouseDown.apply(self, arguments); },
			click     : function() { return self.onClick.apply(self, arguments); }
		});

		$controlInput.on({
			mousedown : function(e) { e.stopPropagation(); },
			keydown   : function() { return self.onKeyDown.apply(self, arguments); },
			keyup     : function() { return self.onKeyUp.apply(self, arguments); },
			keypress  : function() { return self.onKeyPress.apply(self, arguments); },
			resize    : function() { self.positionDropdown.apply(self, []); },
			blur      : function() { return self.onBlur.apply(self, arguments); },
			focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
			paste     : function() { return self.onPaste.apply(self, arguments); }
		});

		$document.on('keydown' + eventNS, function(e) {
			self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
			self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
			self.isShiftDown = e.shiftKey;
		});

		$document.on('keyup' + eventNS, function(e) {
			if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
			if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
			if (e.keyCode === KEY_CMD) self.isCmdDown = false;
		});

		$document.on('mousedown' + eventNS, function(e) {
			if (self.isFocused) {
				// prevent events on the dropdown scrollbar from causing the control to blur
				if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
					return false;
				}
				// blur on click outside
				if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
					self.blur(e.target);
				}
			}
		});

		$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
			if (self.isOpen) {
				self.positionDropdown.apply(self, arguments);
			}
		});
		$window.on('mousemove' + eventNS, function() {
			self.ignoreHover = false;
		});

		// store original children and tab index so that they can be
		// restored when the destroy() method is called.
		this.revertSettings = {
			$children : $input.children().detach(),
			tabindex  : $input.attr('tabindex')
		};

		$input.attr('tabindex', -1).hide().after(self.$wrapper);

		if ($.isArray(settings.items)) {
			self.setValue(settings.items);
			delete settings.items;
		}

		// feature detect for the validation API
		if (SUPPORTS_VALIDITY_API) {
			$input.on('invalid' + eventNS, function(e) {
				e.preventDefault();
				self.isInvalid = true;
				self.refreshState();
			});
		}

		self.updateOriginalInput();
		self.refreshItems();
		self.refreshState();
		self.updatePlaceholder();
		self.isSetup = true;

		if ($input.is(':disabled')) {
			self.disable();
		}

		self.on('change', this.onChange);

		$input.data('selectize', self);
		$input.addClass('selectized');
		self.trigger('initialize');

		// preload options
		if (settings.preload === true) {
			self.onSearchChange('');
		}

	},

	/**
	 * Sets up default rendering functions.
	 */
	setupTemplates: function() {
		var self = this;
		var fieldLabel = self.settings.labelField;
		var fieldOptgroup = self.settings.optgroupLabelField;

		var templates = {
			'optgroup': function(data) {
				return '<div class="optgroup">' + data.html + '</div>';
			},
			'optgroupHeader': function(data, escape) {
				return '<div class="optgroup-header">' + escape(data[fieldOptgroup]) + '</div>';
			},
			'option': function(data, escape) {
				return '<div class="option">' + escape(data[fieldLabel]) + '</div>';
			},
			'item': function(data, escape) {
				return '<div class="item">' + escape(data[fieldLabel]) + '</div>';
			},
			'optionCreate': function(data, escape) {
				return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
			}
		};

		self.settings.render = $.extend({}, templates, self.settings.render);
	},

	/**
	 * Maps fired events to callbacks provided
	 * in the settings used when creating the control.
	 */
	setupCallbacks: function() {
		var key, fn, callbacks = {
			'initialize'      : 'onInitialize',
			'change'          : 'onChange',
			'itemAdd'        : 'onItemAdd',
			'itemRemove'     : 'onItemRemove',
			'clear'           : 'onClear',
			'optionAdd'      : 'onOptionAdd',
			'optionRemove'   : 'onOptionRemove',
			'optionClear'    : 'onOptionClear',
			'optgroupAdd'    : 'onOptionGroupAdd',
			'optgroupRemove' : 'onOptionGroupRemove',
			'optgroupClear'  : 'onOptionGroupClear',
			'dropdownOpen'   : 'onDropdownOpen',
			'dropdownClose'  : 'onDropdownClose',
			'type'            : 'onType',
			'load'            : 'onLoad',
			'focus'           : 'onFocus',
			'blur'            : 'onBlur'
		};

		for (key in callbacks) {
			if (callbacks.hasOwnProperty(key)) {
				fn = this.settings[callbacks[key]];
				if (fn) this.on(key, fn);
			}
		}
	},

	/**
	 * Triggered when the main control element
	 * has a click event.
	 *
	 * @param {object} e
	 * @return {boolean}
	 */
	onClick: function(e) {
		var self = this;

		// necessary for mobile webkit devices (manual focus triggering
		// is ignored unless invoked within a click event)
		if (!self.isFocused) {
			self.focus();
			e.preventDefault();
		}
	},

	/**
	 * Triggered when the main control element
	 * has a mouse down event.
	 *
	 * @param {object} e
	 * @return {boolean}
	 */
	onMouseDown: function(e) {
		var self = this;
		var defaultPrevented = e.isDefaultPrevented();

		if (self.isFocused) {
			// retain focus by preventing native handling. if the
			// event target is the input it should not be modified.
			// otherwise, text selection within the input won't work.
			if (e.target !== self.$controlInput[0]) {
				if (self.settings.mode === 'single') {
					// toggle dropdown
					if (self.isOpen)
					  self.close();
					else
					  self.open();
				} else if (!defaultPrevented) {
					self.setActiveItem(null);
				}
				return false
			}
		} else {
			// give control focus
			if (!defaultPrevented) {
				window.setTimeout(function() {
					self.focus();
				}, 0);
			}
		}
	},

	/**
	 * Triggered when the value of the control has been changed.
	 * This should propagate the event to the original DOM
	 * input / select element.
	 */
	onChange: function() {
		this.$input.trigger('change');
	},

	/**
	 * Triggered on <input> paste.
	 *
	 * @param {object} e
	 * @returns {boolean}
	 */
	onPaste: function(e) {
		var self = this;

		if (self.isFull() || self.isInputHidden || self.isLocked) {
			e.preventDefault();
			return;
		}

		// If a regex or string is included, this will split the pasted
		// input and create Items for each separate value
		if (self.settings.splitOn) {

			// Wait for pasted text to be recognized in value
			setTimeout(function() {
				var pastedText = self.$controlInput.val();
				if(!pastedText.match(self.settings.splitOn)){ return }

				var splitInput = $.trim(pastedText).split(self.settings.splitOn);
				for (var i = 0, n = splitInput.length; i < n; i++) {
					self.createItem(splitInput[i]);
				}
			}, 0);
		}
	},

	/**
	 * Triggered on <input> keypress.
	 *
	 * @param {object} e
	 * @returns {boolean}
	 */
	onKeyPress: function(e) {
		if (this.isLocked) return e && e.preventDefault();
		var character = String.fromCharCode(e.keyCode || e.which);
		if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
			this.createItem();
			e.preventDefault();
			return false;
		}
	},

	/**
	 * Triggered on <input> keydown.
	 *
	 * @param {object} e
	 * @returns {boolean}
	 */
	onKeyDown: function(e) {
		var self = this;

		if (self.isLocked) {
			if (e.keyCode !== KEY_TAB) {
				e.preventDefault();
			}
			return;
		}

		switch (e.keyCode) {
			case KEY_A:
				if (self.isCmdDown) {
					self.selectAll();
					return;
				}
				break;
			case KEY_ESC:
				if (self.isOpen) {
					e.preventDefault();
					e.stopPropagation();
					self.close();
				}
				return;
			case KEY_N:
				if (!e.ctrlKey || e.altKey) break;
			case KEY_DOWN:
				if (!self.isOpen && self.hasOptions) {
					self.open();
				} else if (self.$activeOption) {
					self.ignoreHover = true;
					var $next = self.getAdjacentOption(self.$activeOption, 1);
					if ($next.length) self.setActiveOption($next, true, true);
				}
				e.preventDefault();
				return;
			case KEY_P:
				if (!e.ctrlKey || e.altKey) break;
			case KEY_UP:
				if (self.$activeOption) {
					self.ignoreHover = true;
					var $prev = self.getAdjacentOption(self.$activeOption, -1);
					if ($prev.length) self.setActiveOption($prev, true, true);
				}
				e.preventDefault();
				return;
			case KEY_RETURN:
				if (self.isOpen && self.$activeOption) {
					self.onOptionSelect({currentTarget: self.$activeOption});
					e.preventDefault();
				}
				return;
			case KEY_LEFT:
				self.advanceSelection(-1, e);
				return;
			case KEY_RIGHT:
				self.advanceSelection(1, e);
				return;
			case KEY_TAB:
				if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
					self.onOptionSelect({currentTarget: self.$activeOption});

					// Default behaviour is to jump to the next field, we only want this
					// if the current field doesn't accept any more entries
					if (!self.isFull()) {
						e.preventDefault();
					}
				}
				if (self.settings.create && self.createItem()) {
					e.preventDefault();
				}
				return;
			case KEY_BACKSPACE:
			case KEY_DELETE:
				self.deleteSelection(e);
				return;
		}

		if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
			e.preventDefault();
			return;
		}
	},

	/**
	 * Triggered on <input> keyup.
	 *
	 * @param {object} e
	 * @returns {boolean}
	 */
	onKeyUp: function(e) {
		var self = this;

		if (self.isLocked) return e && e.preventDefault();
		var value = self.$controlInput.val() || '';
		if (self.lastValue !== value) {
			self.lastValue = value;
			self.onSearchChange(value);
			self.refreshOptions();
			self.trigger('type', value);
		}
	},

	/**
	 * Invokes the user-provide option provider / loader.
	 *
	 * Note: this function is debounced in the Selectize
	 * constructor (by `settings.loadThrottle` milliseconds)
	 *
	 * @param {string} value
	 */
	onSearchChange: function(value) {
		var self = this;
		var fn = self.settings.load;
		if (!fn) return;
		if (self.loadedSearches.hasOwnProperty(value)) return;
		self.loadedSearches[value] = true;
		self.load(function(callback) {
			fn.apply(self, [value, callback]);
		});
	},

	/**
	 * Triggered on <input> focus.
	 *
	 * @param {object} e (optional)
	 * @returns {boolean}
	 */
	onFocus: function(e) {
		var self = this;
		var wasFocused = self.isFocused;

		if (self.isDisabled) {
			self.blur();
			if (e) e.preventDefault();
			return false;
		}

		if (self.ignoreFocus) return;
		self.isFocused = true;
		if (self.settings.preload === 'focus') self.onSearchChange('');

		if (!wasFocused) self.trigger('focus');

		if (!self.$activeItems.length) {
			self.showInput();
			self.setActiveItem(null);
			self.refreshOptions(!!self.settings.openOnFocus);
		}

		self.refreshState();
	},

	/**
	 * Triggered on <input> blur.
	 *
	 * @param {object} e
	 * @param {Element} dest
	 */
	onBlur: function(e, dest) {
		var self = this;
		if (!self.isFocused) return;
		self.isFocused = false;

		if (self.ignoreFocus) {
			return;
		} else if (!self.ignoreBlur && document.activeElement === self.$dropdownContent[0]) {
			// necessary to prevent IE closing the dropdown when the scrollbar is clicked
			self.ignoreBlur = true;
			self.onFocus(e);
			return;
		}

		var deactivate = function() {
			self.close();
			self.setTextboxValue('');
			self.setActiveItem(null);
			self.setActiveOption(null);
			self.setCaret(self.items.length);
			self.refreshState();

			// IE11 bug: element still marked as active
			if (dest && dest.focus) dest.focus();

			self.ignoreFocus = false;
			self.trigger('blur');
		};

		self.ignoreFocus = true;
		if (self.settings.create && self.settings.createOnBlur) {
			self.createItem(null, false, deactivate);
		} else {
			deactivate();
		}
	},

	/**
	 * Triggered when the user rolls over
	 * an option in the autocomplete dropdown menu.
	 *
	 * @param {object} e
	 * @returns {boolean}
	 */
	onOptionHover: function(e) {
		if (this.ignoreHover) return;
		this.setActiveOption(e.currentTarget, false);
	},

	/**
	 * Triggered when the user clicks on an option
	 * in the autocomplete dropdown menu.
	 *
	 * @param {object} e
	 * @returns {boolean}
	 */
	onOptionSelect: function(e) {
		var value, $target, self = this;

		if (e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		}

		$target = $(e.currentTarget);
		if ($target.hasClass('create')) {
			self.createItem(null, function() {
				if (self.settings.closeAfterSelect) {
					self.close();
				}
			});
		} else {
			value = $target.attr('data-value');
			if (typeof value !== 'undefined') {
				self.lastQuery = null;
				self.setTextboxValue('');
				self.addItem(value);
				if (self.settings.closeAfterSelect) {
					self.close();
				} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
					self.setActiveOption(self.getOption(value));
				}
			}
		}
	},

	/**
	 * Triggered when the user clicks on an item
	 * that has been selected.
	 *
	 * @param {object} e
	 * @returns {boolean}
	 */
	onItemSelect: function(e) {
		var self = this;

		if (self.isLocked) return;
		if (self.settings.mode === 'multi') {
			e.preventDefault();
			self.setActiveItem(e.currentTarget, e);
		}
	},

	/**
	 * Invokes the provided method that provides
	 * results to a callback---which are then added
	 * as options to the control.
	 *
	 * @param {function} fn
	 */
	load: function(fn) {
		var self = this;
		var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);

		self.loading++;
		fn.apply(self, [function(results) {
			self.loading = Math.max(self.loading - 1, 0);
			if (results && results.length) {
				self.addOption(results);
				self.refreshOptions(self.isFocused && !self.isInputHidden);
			}
			if (!self.loading) {
				$wrapper.removeClass(self.settings.loadingClass);
			}
			self.trigger('load', results);
		}]);
	},

	/**
	 * Sets the input field of the control to the specified value.
	 *
	 * @param {string} value
	 */
	setTextboxValue: function(value) {
		var $input = this.$controlInput;
		var changed = $input.val() !== value;
		if (changed) {
			$input.val(value).triggerHandler('update');
			this.lastValue = value;
		}
	},

	/**
	 * Returns the value of the control. If multiple items
	 * can be selected (e.g. <select multiple>), this returns
	 * an array. If only one item can be selected, this
	 * returns a string.
	 *
	 * @returns {mixed}
	 */
	getValue: function() {
		if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
			return this.items;
		} else {
			return this.items.join(this.settings.delimiter);
		}
	},

	/**
	 * Resets the selected items to the given value.
	 *
	 * @param {mixed} value
	 */
	setValue: function(value, silent) {
		var events = silent ? [] : ['change'];

		debounceEvents(this, events, function() {
			this.clear(silent);
			this.addItems(value, silent);
		});
	},

	/**
	 * Sets the selected item.
	 *
	 * @param {object} $item
	 * @param {object} e (optional)
	 */
	setActiveItem: function($item, e) {
		var self = this;
		var eventName;
		var i, idx, begin, end, item, swap;
		var $last;

		if (self.settings.mode === 'single') return;
		$item = $($item);

		// clear the active selection
		if (!$item.length) {
			$(self.$activeItems).removeClass('active');
			self.$activeItems = [];
			if (self.isFocused) {
				self.showInput();
			}
			return;
		}

		// modify selection
		eventName = e && e.type.toLowerCase();

		if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
			$last = self.$control.children('.active:last');
			begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
			end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
			if (begin > end) {
				swap  = begin;
				begin = end;
				end   = swap;
			}
			for (i = begin; i <= end; i++) {
				item = self.$control[0].childNodes[i];
				if (self.$activeItems.indexOf(item) === -1) {
					$(item).addClass('active');
					self.$activeItems.push(item);
				}
			}
			e.preventDefault();
		} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
			if ($item.hasClass('active')) {
				idx = self.$activeItems.indexOf($item[0]);
				self.$activeItems.splice(idx, 1);
				$item.removeClass('active');
			} else {
				self.$activeItems.push($item.addClass('active')[0]);
			}
		} else {
			$(self.$activeItems).removeClass('active');
			self.$activeItems = [$item.addClass('active')[0]];
		}

		// ensure control has focus
		self.hideInput();
		if (!this.isFocused) {
			self.focus();
		}
	},

	/**
	 * Sets the selected item in the dropdown menu
	 * of available options.
	 *
	 * @param {object} $object
	 * @param {boolean} scroll
	 * @param {boolean} animate
	 */
	setActiveOption: function($option, scroll, animate) {
		var heightMenu, heightItem, y;
		var scrollTop, scrollBottom;
		var self = this;

		if (self.$activeOption) self.$activeOption.removeClass('active');
		self.$activeOption = null;

		$option = $($option);
		if (!$option.length) return;

		self.$activeOption = $option.addClass('active');

		if (scroll || !isSet(scroll)) {

			heightMenu   = self.$dropdownContent.height();
			heightItem   = self.$activeOption.outerHeight(true);
			scroll        = self.$dropdownContent.scrollTop() || 0;
			y             = self.$activeOption.offset().top - self.$dropdownContent.offset().top + scroll;
			scrollTop    = y;
			scrollBottom = y - heightMenu + heightItem;

			if (y + heightItem > heightMenu + scroll) {
				self.$dropdownContent.stop().animate({scrollTop: scrollBottom}, animate ? self.settings.scrollDuration : 0);
			} else if (y < scroll) {
				self.$dropdownContent.stop().animate({scrollTop: scrollTop}, animate ? self.settings.scrollDuration : 0);
			}

		}
	},

	/**
	 * Selects all items (CTRL + A).
	 */
	selectAll: function() {
		var self = this;
		if (self.settings.mode === 'single') return;

		self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
		if (self.$activeItems.length) {
			self.hideInput();
			self.close();
		}
		self.focus();
	},

	/**
	 * Hides the input element out of view, while
	 * retaining its focus.
	 */
	hideInput: function() {
		var self = this;

		self.setTextboxValue('');
		self.$controlInput.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
		self.isInputHidden = true;
	},

	/**
	 * Restores input visibility.
	 */
	showInput: function() {
		this.$controlInput.css({opacity: 1, position: 'relative', left: 0});
		this.isInputHidden = false;
	},

	/**
	 * Gives the control focus.
	 */
	focus: function() {
		var self = this;
		if (self.isDisabled) return;

		self.ignoreFocus = true;
		self.$controlInput[0].focus();
		window.setTimeout(function() {
			self.ignoreFocus = false;
			self.onFocus();
		}, 0);
	},

	/**
	 * Forces the control out of focus.
	 *
	 * @param {Element} dest
	 */
	blur: function(dest) {
		this.$controlInput[0].blur();
		this.onBlur(null, dest);
	},

	/**
	 * Returns a function that scores an object
	 * to show how good of a match it is to the
	 * provided query.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @return {function}
	 */
	getScoreFunction: function(query) {
		return this.sifter.getScoreFunction(query, this.getSearchOptions());
	},

	/**
	 * Returns search options for sifter (the system
	 * for scoring and sorting results).
	 *
	 * @see https://github.com/brianreavis/sifter.js
	 * @return {object}
	 */
	getSearchOptions: function() {
		var settings = this.settings;
		var sort = settings.sortField;
		if (typeof sort === 'string') {
			sort = [{field: sort}];
		}

		return {
			fields      : settings.searchField,
			conjunction : settings.searchConjunction,
			sort        : sort
		};
	},

	/**
	 * Searches through available options and returns
	 * a sorted array of matches.
	 *
	 * Returns an object containing:
	 *
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @returns {object}
	 */
	search: function(query) {
		var i, result, calculateScore;
		var self     = this;
		var settings = self.settings;
		var options  = this.getSearchOptions();

		// validate user-provided result scoring function
		if (settings.score) {
			calculateScore = self.settings.score.apply(this, [query]);
			if (typeof calculateScore !== 'function') {
				throw new Error('Selectize "score" setting must be a function that returns a function');
			}
		}

		// perform search
		if (query !== self.lastQuery) {
			self.lastQuery = query;
			result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
			self.currentResults = result;
		} else {
			result = $.extend(true, {}, self.currentResults);
		}

		// filter out selected items
		if (settings.hideSelected) {
			for (i = result.items.length - 1; i >= 0; i--) {
				if (self.items.indexOf(hashKey(result.items[i].id)) !== -1) {
					result.items.splice(i, 1);
				}
			}
		}

		return result;
	},

	/**
	 * Refreshes the list of available options shown
	 * in the autocomplete dropdown menu.
	 *
	 * @param {boolean} triggerDropdown
	 */
	refreshOptions: function(triggerDropdown) {
		var i, j, k, n, groups, groupsOrder, option, optionHtml, optgroup, optgroups, html, htmlChildren, hasCreateOption;
		var $active, $activeBefore, $create;

		if (typeof triggerDropdown === 'undefined') {
			triggerDropdown = true;
		}

		var self              = this;
		var query             = $.trim(self.$controlInput.val());
		var results           = self.search(query);
		var $dropdownContent = self.$dropdownContent;
		var activeBefore     = self.$activeOption && hashKey(self.$activeOption.attr('data-value'));

		// build markup
		n = results.items.length;
		if (typeof self.settings.maxOptions === 'number') {
			n = Math.min(n, self.settings.maxOptions);
		}

		// render and group available options individually
		groups = {};
		groupsOrder = [];

		for (i = 0; i < n; i++) {
			option      = self.options[results.items[i].id];
			optionHtml = self.render('option', option);
			optgroup    = option[self.settings.optgroupField] || '';
			optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];

			for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
				optgroup = optgroups[j];
				if (!self.optgroups.hasOwnProperty(optgroup)) {
					optgroup = '';
				}
				if (!groups.hasOwnProperty(optgroup)) {
					groups[optgroup] = document.createDocumentFragment();
					groupsOrder.push(optgroup);
				}
				groups[optgroup].appendChild(optionHtml);
			}
		}

		// sort optgroups
		if (this.settings.lockOptgroupOrder) {
			groupsOrder.sort(function(a, b) {
				var aOrder = self.optgroups[a].$order || 0;
				var bOrder = self.optgroups[b].$order || 0;
				return aOrder - bOrder;
			});
		}

		// render optgroup headers & join groups
		html = document.createDocumentFragment();
		for (i = 0, n = groupsOrder.length; i < n; i++) {
			optgroup = groupsOrder[i];
			if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
				// render the optgroup header and options within it,
				// then pass it to the wrapper template
				htmlChildren = document.createDocumentFragment();
				htmlChildren.appendChild(self.render('optgroupHeader', self.optgroups[optgroup]));
				htmlChildren.appendChild(groups[optgroup]);

				html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
					html: domToString(htmlChildren),
					dom:  htmlChildren
				})));
			} else {
				html.appendChild(groups[optgroup]);
			}
		}

		$dropdownContent.html(html);

		// highlight matching terms inline
		if (self.settings.highlight && results.query.length && results.tokens.length) {
			$dropdownContent.removeHighlight();
			for (i = 0, n = results.tokens.length; i < n; i++) {
				highlight($dropdownContent, results.tokens[i].regex);
			}
		}

		// add "selected" class to selected options
		if (!self.settings.hideSelected) {
			for (i = 0, n = self.items.length; i < n; i++) {
				self.getOption(self.items[i]).addClass('selected');
			}
		}

		// add create option
		hasCreateOption = self.canCreate(query);
		if (hasCreateOption) {
			$dropdownContent.prepend(self.render('optionCreate', {input: query}));
			$create = $($dropdownContent[0].childNodes[0]);
		}

		// activate
		self.hasOptions = results.items.length > 0 || hasCreateOption;
		if (self.hasOptions) {
			if (results.items.length > 0) {
				$activeBefore = activeBefore && self.getOption(activeBefore);
				if ($activeBefore && $activeBefore.length) {
					$active = $activeBefore;
				} else if (self.settings.mode === 'single' && self.items.length) {
					$active = self.getOption(self.items[0]);
				}
				if (!$active || !$active.length) {
					if ($create && !self.settings.addPrecedence) {
						$active = self.getAdjacentOption($create, 1);
					} else {
						$active = $dropdownContent.find('[data-selectable]:first');
					}
				}
			} else {
				$active = $create;
			}
			self.setActiveOption($active);
			if (triggerDropdown && !self.isOpen) { self.open(); }
		} else {
			self.setActiveOption(null);
			if (triggerDropdown && self.isOpen) { self.close(); }
		}
	},

	/**
	 * Adds an available option. If it already exists,
	 * nothing will happen. Note: this does not refresh
	 * the options list dropdown (use `refreshOptions`
	 * for that).
	 *
	 * Usage:
	 *
	 *   this.addOption(data)
	 *
	 * @param {object|array} data
	 */
	addOption: function(data) {
		var i, n, value, self = this;

		if ($.isArray(data)) {
			for (i = 0, n = data.length; i < n; i++) {
				self.addOption(data[i]);
			}
			return;
		}

		if (value = self.registerOption(data)) {
			self.userOptions[value] = true;
			self.lastQuery = null;
			self.trigger('optionAdd', value, data);
		}
	},

	/**
	 * Registers an option to the pool of options.
	 *
	 * @param {object} data
	 * @return {boolean|string}
	 */
	registerOption: function(data) {
		var key = hashKey(data[this.settings.valueField]);
		if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
		data.$order = data.$order || ++this.order;
		this.options[key] = data;
		return key;
	},

	/**
	 * Registers an option group to the pool of option groups.
	 *
	 * @param {object} data
	 * @return {boolean|string}
	 */
	registerOptionGroup: function(data) {
		var key = hashKey(data[this.settings.optgroupValueField]);
		if (!key) return false;

		data.$order = data.$order || ++this.order;
		this.optgroups[key] = data;
		return key;
	},

	/**
	 * Registers a new optgroup for options
	 * to be bucketed into.
	 *
	 * @param {string} id
	 * @param {object} data
	 */
	addOptionGroup: function(id, data) {
		data[this.settings.optgroupValueField] = id;
		if (id = this.registerOptionGroup(data)) {
			this.trigger('optgroupAdd', id, data);
		}
	},

	/**
	 * Removes an existing option group.
	 *
	 * @param {string} id
	 */
	removeOptionGroup: function(id) {
		if (this.optgroups.hasOwnProperty(id)) {
			delete this.optgroups[id];
			this.renderCache = {};
			this.trigger('optgroupRemove', id);
		}
	},

	/**
	 * Clears all existing option groups.
	 */
	clearOptionGroups: function() {
		this.optgroups = {};
		this.renderCache = {};
		this.trigger('optgroupClear');
	},

	/**
	 * Updates an option available for selection. If
	 * it is visible in the selected items or options
	 * dropdown, it will be re-rendered automatically.
	 *
	 * @param {string} value
	 * @param {object} data
	 */
	updateOption: function(value, data) {
		var self = this;
		var $item, $itemNew;
		var valueNew, indexItem, cacheItems, cacheOptions, orderOld;

		value     = hashKey(value);
		valueNew = hashKey(data[self.settings.valueField]);

		// sanity checks
		if (value === null) return;
		if (!self.options.hasOwnProperty(value)) return;
		if (typeof valueNew !== 'string') throw new Error('Value must be set in option data');

		orderOld = self.options[value].$order;

		// update references
		if (valueNew !== value) {
			delete self.options[value];
			indexItem = self.items.indexOf(value);
			if (indexItem !== -1) {
				self.items.splice(indexItem, 1, valueNew);
			}
		}
		data.$order = data.$order || orderOld;
		self.options[valueNew] = data;

		// invalidate render cache
		cacheItems = self.renderCache.item;
		cacheOptions = self.renderCache.option;

		if (cacheItems) {
			delete cacheItems[value];
			delete cacheItems[valueNew];
		}
		if (cacheOptions) {
			delete cacheOptions[value];
			delete cacheOptions[valueNew];
		}

		// update the item if it's selected
		if (self.items.indexOf(valueNew) !== -1) {
			$item = self.getItem(value);
			$itemNew = $(self.render('item', data));
			if ($item.hasClass('active')) $itemNew.addClass('active');
			$item.replaceWith($itemNew);
		}

		// invalidate last query because we might have updated the sortField
		self.lastQuery = null;

		// update dropdown contents
		if (self.isOpen) {
			self.refreshOptions(false);
		}
	},

	/**
	 * Removes a single option.
	 *
	 * @param {string} value
	 * @param {boolean} silent
	 */
	removeOption: function(value, silent) {
		var self = this;
		value = hashKey(value);

		var cacheItems = self.renderCache.item;
		var cacheOptions = self.renderCache.option;
		if (cacheItems) delete cacheItems[value];
		if (cacheOptions) delete cacheOptions[value];

		delete self.userOptions[value];
		delete self.options[value];
		self.lastQuery = null;
		self.trigger('optionRemove', value);
		self.removeItem(value, silent);
	},

	/**
	 * Clears all options.
	 */
	clearOptions: function() {
		var self = this;

		self.loadedSearches = {};
		self.userOptions = {};
		self.renderCache = {};
		self.options = self.sifter.items = {};
		self.lastQuery = null;
		self.trigger('optionClear');
		self.clear();
	},

	/**
	 * Returns the jQuery element of the option
	 * matching the given value.
	 *
	 * @param {string} value
	 * @returns {object}
	 */
	getOption: function(value) {
		return this.getElementWithValue(value, this.$dropdownContent.find('[data-selectable]'));
	},

	/**
	 * Returns the jQuery element of the next or
	 * previous selectable option.
	 *
	 * @param {object} $option
	 * @param {int} direction  can be 1 for next or -1 for previous
	 * @return {object}
	 */
	getAdjacentOption: function($option, direction) {
		var $options = this.$dropdown.find('[data-selectable]');
		var index    = $options.index($option) + direction;

		return index >= 0 && index < $options.length ? $options.eq(index) : $();
	},

	/**
	 * Finds the first element with a "data-value" attribute
	 * that matches the given value.
	 *
	 * @param {mixed} value
	 * @param {object} $els
	 * @return {object}
	 */
	getElementWithValue: function(value, $els) {
		value = hashKey(value);

		if (typeof value !== 'undefined' && value !== null) {
			for (var i = 0, n = $els.length; i < n; i++) {
				if ($els[i].getAttribute('data-value') === value) {
					return $($els[i]);
				}
			}
		}

		return $();
	},

	/**
	 * Returns the jQuery element of the item
	 * matching the given value.
	 *
	 * @param {string} value
	 * @returns {object}
	 */
	getItem: function(value) {
		return this.getElementWithValue(value, this.$control.children());
	},

	/**
	 * "Selects" multiple items at once. Adds them to the list
	 * at the current caret position.
	 *
	 * @param {string} value
	 * @param {boolean} silent
	 */
	addItems: function(values, silent) {
		var items = $.isArray(values) ? values : [values];
		for (var i = 0, n = items.length; i < n; i++) {
			this.isPending = (i < n - 1);
			this.addItem(items[i], silent);
		}
	},

	/**
	 * "Selects" an item. Adds it to the list
	 * at the current caret position.
	 *
	 * @param {string} value
	 * @param {boolean} silent
	 */
	addItem: function(value, silent) {
		var events = silent ? [] : ['change'];

		debounceEvents(this, events, function() {
			var $item, $option, $options;
			var self = this;
			var inputMode = self.settings.mode;
			var valueNext, wasFull;
			value = hashKey(value);

			if (self.items.indexOf(value) !== -1) {
				if (inputMode === 'single') self.close();
				return;
			}

			if (!self.options.hasOwnProperty(value)) return;
			if (inputMode === 'single') self.clear(silent);
			if (inputMode === 'multi' && self.isFull()) return;

			$item = $(self.render('item', self.options[value]));
			wasFull = self.isFull();
			self.items.splice(self.caretPos, 0, value);
			self.insertAtCaret($item);
			if (!self.isPending || (!wasFull && self.isFull())) {
				self.refreshState();
			}

			if (self.isSetup) {
				$options = self.$dropdownContent.find('[data-selectable]');

				// update menu / remove the option (if this is not one item being added as part of series)
				if (!self.isPending) {
					$option = self.getOption(value);
					valueNext = self.getAdjacentOption($option, 1).attr('data-value');
					self.refreshOptions(self.isFocused && inputMode !== 'single');
					if (valueNext) {
						self.setActiveOption(self.getOption(valueNext));
					}
				}

				// hide the menu if the maximum number of items have been selected or no options are left
				if (!$options.length || self.isFull()) {
					self.close();
				} else {
					self.positionDropdown();
				}

				self.updatePlaceholder();
				self.trigger('itemAdd', value, $item);
				self.updateOriginalInput({silent: silent});
			}
		});
	},

	/**
	 * Removes the selected item matching
	 * the provided value.
	 *
	 * @param {string} value
	 */
	removeItem: function(value, silent) {
		var self = this;
		var $item, i, idx;

		$item = (value instanceof $) ? value : self.getItem(value);
		value = hashKey($item.attr('data-value'));
		i = self.items.indexOf(value);

		if (i !== -1) {
			$item.remove();
			if ($item.hasClass('active')) {
				idx = self.$activeItems.indexOf($item[0]);
				self.$activeItems.splice(idx, 1);
			}

			self.items.splice(i, 1);
			self.lastQuery = null;
			if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
				self.removeOption(value, silent);
			}

			if (i < self.caretPos) {
				self.setCaret(self.caretPos - 1);
			}

			self.refreshState();
			self.updatePlaceholder();
			self.updateOriginalInput({silent: silent});
			self.positionDropdown();
			self.trigger('itemRemove', value, $item);
		}
	},

	/**
	 * Invokes the `create` method provided in the
	 * selectize options that should provide the data
	 * for the new item, given the user input.
	 *
	 * Once this completes, it will be added
	 * to the item list.
	 *
	 * @param {string} value
	 * @param {boolean} [triggerDropdown]
	 * @param {function} [callback]
	 * @return {boolean}
	 */
	createItem: function(input, triggerDropdown) {
		var self  = this;
		var caret = self.caretPos;
		input = input || $.trim(self.$controlInput.val() || '');

		var callback = arguments[arguments.length - 1];
		if (typeof callback !== 'function') callback = function() {};

		if (typeof triggerDropdown !== 'boolean') {
			triggerDropdown = true;
		}

		if (!self.canCreate(input)) {
			callback();
			return false;
		}

		self.lock();

		var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
			var data = {};
			data[self.settings.labelField] = input;
			data[self.settings.valueField] = input;
			return data;
		};

		var create = once(function(data) {
			self.unlock();

			if (!data || typeof data !== 'object') return callback();
			var value = hashKey(data[self.settings.valueField]);
			if (typeof value !== 'string') return callback();

			self.setTextboxValue('');
			self.addOption(data);
			self.setCaret(caret);
			self.addItem(value);
			self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
			callback(data);
		});

		var output = setup.apply(this, [input, create]);
		if (typeof output !== 'undefined') {
			create(output);
		}

		return true;
	},

	/**
	 * Re-renders the selected item lists.
	 */
	refreshItems: function() {
		this.lastQuery = null;

		if (this.isSetup) {
			this.addItem(this.items);
		}

		this.refreshState();
		this.updateOriginalInput();
	},

	/**
	 * Updates all state-dependent attributes
	 * and CSS classes.
	 */
	refreshState: function() {
		this.refreshValidityState();
		this.refreshClasses();
	},

	/**
	 * Update the `required` attribute of both input and control input.
	 *
	 * The `required` property needs to be activated on the control input
	 * for the error to be displayed at the right place. `required` also
	 * needs to be temporarily deactivated on the input since the input is
	 * hidden and can't show errors.
	 */
	refreshValidityState: function() {
		if (!this.isRequired) return false;

		var invalid = !this.items.length;

		this.isInvalid = invalid;
		this.$controlInput.prop('required', invalid);
		this.$input.prop('required', !invalid);
	},

	/**
	 * Updates all state-dependent CSS classes.
	 */
	refreshClasses: function() {
		var self     = this;
		var isFull   = self.isFull();
		var isLocked = self.isLocked;

		self.$wrapper
			.toggleClass('rtl', self.rtl);

		self.$control
			.toggleClass('focus', self.isFocused)
			.toggleClass('disabled', self.isDisabled)
			.toggleClass('required', self.isRequired)
			.toggleClass('invalid', self.isInvalid)
			.toggleClass('locked', isLocked)
			.toggleClass('full', isFull).toggleClass('not-full', !isFull)
			.toggleClass('input-active', self.isFocused && !self.isInputHidden)
			.toggleClass('dropdown-active', self.isOpen)
			.toggleClass('has-options', !$.isEmptyObject(self.options))
			.toggleClass('has-items', self.items.length > 0);

		self.$controlInput.data('grow', !isFull && !isLocked);
	},

	/**
	 * Determines whether or not more items can be added
	 * to the control without exceeding the user-defined maximum.
	 *
	 * @returns {boolean}
	 */
	isFull: function() {
		return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
	},

	/**
	 * Refreshes the original <select> or <input>
	 * element to reflect the current state.
	 */
	updateOriginalInput: function(opts) {
		var i, n, options, label, self = this;
		opts = opts || {};

		if (self.tagType === TAG_SELECT) {
			options = [];
			for (i = 0, n = self.items.length; i < n; i++) {
				label = self.options[self.items[i]][self.settings.labelField] || '';
				options.push('<option value="' + escapeHtml(self.items[i]) + '" selected="selected">' + escapeHtml(label) + '</option>');
			}
			if (!options.length && !this.$input.attr('multiple')) {
				options.push('<option value="" selected="selected"></option>');
			}
			self.$input.html(options.join(''));
		} else {
			self.$input.val(self.getValue());
			self.$input.attr('value',self.$input.val());
		}

		if (self.isSetup) {
			if (!opts.silent) {
				self.trigger('change', self.$input.val());
			}
		}
	},

	/**
	 * Shows/hide the input placeholder depending
	 * on if there items in the list already.
	 */
	updatePlaceholder: function() {
		if (!this.settings.placeholder) return;
		var $input = this.$controlInput;

		if (this.items.length) {
			$input.removeAttr('placeholder');
		} else {
			$input.attr('placeholder', this.settings.placeholder);
		}
		$input.triggerHandler('update', {force: true});
	},

	/**
	 * Shows the autocomplete dropdown containing
	 * the available options.
	 */
	open: function() {
		var self = this;

		if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
		self.focus();
		self.isOpen = true;
		self.refreshState();
		self.$dropdown.css({visibility: 'hidden', display: 'block'});
		self.positionDropdown();
		self.$dropdown.css({visibility: 'visible'});
		self.trigger('dropdownOpen', self.$dropdown);
	},

	/**
	 * Closes the autocomplete dropdown menu.
	 */
	close: function() {
		var self = this;
		var trigger = self.isOpen;

		if (self.settings.mode === 'single' && self.items.length) {
			self.hideInput();
			self.$controlInput.blur(); // close keyboard on iOS
		}

		self.isOpen = false;
		self.$dropdown.hide();
		self.setActiveOption(null);
		self.refreshState();

		if (trigger) self.trigger('dropdownClose', self.$dropdown);
	},

	/**
	 * Calculates and applies the appropriate
	 * position of the dropdown.
	 */
	positionDropdown: function() {
		var $control = this.$control;
		var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
		offset.top += $control.outerHeight(true);

		this.$dropdown.css({
			width : $control.outerWidth(),
			top   : offset.top,
			left  : offset.left
		});
	},

	/**
	 * Resets / clears all selected items
	 * from the control.
	 *
	 * @param {boolean} silent
	 */
	clear: function(silent) {
		var self = this;

		if (!self.items.length) return;
		self.$control.children(':not(input)').remove();
		self.items = [];
		self.lastQuery = null;
		self.setCaret(0);
		self.setActiveItem(null);
		self.updatePlaceholder();
		self.updateOriginalInput({silent: silent});
		self.refreshState();
		self.showInput();
		self.trigger('clear');
	},

	/**
	 * A helper method for inserting an element
	 * at the current caret position.
	 *
	 * @param {object} $el
	 */
	insertAtCaret: function($el) {
		var caret = Math.min(this.caretPos, this.items.length);
		if (caret === 0) {
			this.$control.prepend($el);
		} else {
			$(this.$control[0].childNodes[caret]).before($el);
		}
		this.setCaret(caret + 1);
	},

	/**
	 * Removes the current selected item(s).
	 *
	 * @param {object} e (optional)
	 * @returns {boolean}
	 */
	deleteSelection: function(e) {
		var i, n, direction, selection, values, caret, optionSelect, $optionSelect, $tail;
		var self = this;

		direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
		selection = getSelection(self.$controlInput[0]);

		if (self.$activeOption && !self.settings.hideSelected) {
			optionSelect = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
		}

		// determine items that will be removed
		values = [];

		if (self.$activeItems.length) {
			$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
			caret = self.$control.children(':not(input)').index($tail);
			if (direction > 0) { caret++; }

			for (i = 0, n = self.$activeItems.length; i < n; i++) {
				values.push($(self.$activeItems[i]).attr('data-value'));
			}
			if (e) {
				e.preventDefault();
				e.stopPropagation();
			}
		} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
			if (direction < 0 && selection.start === 0 && selection.length === 0) {
				values.push(self.items[self.caretPos - 1]);
			} else if (direction > 0 && selection.start === self.$controlInput.val().length) {
				values.push(self.items[self.caretPos]);
			}
		}

		// allow the callback to abort
		if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
			return false;
		}

		// perform removal
		if (typeof caret !== 'undefined') {
			self.setCaret(caret);
		}
		while (values.length) {
			self.removeItem(values.pop());
		}

		self.showInput();
		self.positionDropdown();
		self.refreshOptions(true);

		// select previous option
		if (optionSelect) {
			$optionSelect = self.getOption(optionSelect);
			if ($optionSelect.length) {
				self.setActiveOption($optionSelect);
			}
		}

		return true;
	},

	/**
	 * Selects the previous / next item (depending
	 * on the `direction` argument).
	 *
	 * > 0 - right
	 * < 0 - left
	 *
	 * @param {int} direction
	 * @param {object} e (optional)
	 */
	advanceSelection: function(direction, e) {
		var tail, selection, idx, valueLength, cursorAtEdge, $tail;
		var self = this;

		if (direction === 0) return;
		if (self.rtl) direction *= -1;

		tail = direction > 0 ? 'last' : 'first';
		selection = getSelection(self.$controlInput[0]);

		if (self.isFocused && !self.isInputHidden) {
			valueLength = self.$controlInput.val().length;
            cursorAtEdge = direction < 0 ? selection.start === 0 &&
              selection.length === 0 : selection.start === valueLength;

			if (cursorAtEdge && !valueLength) {
				self.advanceCaret(direction, e);
			}
		} else {
			$tail = self.$control.children('.active:' + tail);
			if ($tail.length) {
				idx = self.$control.children(':not(input)').index($tail);
				self.setActiveItem(null);
				self.setCaret(direction > 0 ? idx + 1 : idx);
			}
		}
	},

	/**
	 * Moves the caret left / right.
	 *
	 * @param {int} direction
	 * @param {object} e (optional)
	 */
	advanceCaret: function(direction, e) {
		var self = this, fn, $adj;

		if (direction === 0) return;

		fn = direction > 0 ? 'next' : 'prev';
		if (self.isShiftDown) {
			$adj = self.$controlInput[fn]();
			if ($adj.length) {
				self.hideInput();
				self.setActiveItem($adj);
				if(e) e.preventDefault();
			}
		} else {
			self.setCaret(self.caretPos + direction);
		}
	},

	/**
	 * Moves the caret to the specified index.
	 *
	 * @param {int} i
	 */
	setCaret: function(i) {
		var self = this;

		if (self.settings.mode === 'single') {
			i = self.items.length;
		} else {
			i = Math.max(0, Math.min(self.items.length, i));
		}

		if(!self.isPending) {
			// the input must be moved by leaving it in place and moving the
			// siblings, due to the fact that focus cannot be restored once lost
			// on mobile webkit devices
			var j, n, $children, $child;
			$children = self.$control.children(':not(input)');
			for (j = 0, n = $children.length; j < n; j++) {
				$child = $($children[j]).detach();
				if (j <  i) {
					self.$controlInput.before($child);
				} else {
					self.$control.append($child);
				}
			}
		}

		self.caretPos = i;
	},

	/**
	 * Disables user input on the control. Used while
	 * items are being asynchronously created.
	 */
	lock: function() {
		this.close();
		this.isLocked = true;
		this.refreshState();
	},

	/**
	 * Re-enables user input on the control.
	 */
	unlock: function() {
		this.isLocked = false;
		this.refreshState();
	},

	/**
	 * Disables user input on the control completely.
	 * While disabled, it cannot receive focus.
	 */
	disable: function() {
		var self = this;
		self.$input.prop('disabled', true);
		self.$controlInput.prop('disabled', true).prop('tabindex', -1);
		self.isDisabled = true;
		self.lock();
	},

	/**
	 * Enables the control so that it can respond
	 * to focus and user input.
	 */
	enable: function() {
		var self = this;
		self.$input.prop('disabled', false);
		self.$controlInput.prop('disabled', false).prop('tabindex', self.tabIndex);
		self.isDisabled = false;
		self.unlock();
	},

	/**
	 * Completely destroys the control and
	 * unbinds all event listeners so that it can
	 * be garbage collected.
	 */
	destroy: function() {
		var self = this;
		var eventNS = self.eventNS;
		var revertSettings = self.revertSettings;

		self.trigger('destroy');
		self.off();
		self.$wrapper.remove();
		self.$dropdown.remove();

		self.$input
			.html('')
			.append(revertSettings.$children)
			.removeAttr('tabindex')
			.removeClass('selectized')
			.attr({tabindex: revertSettings.tabindex})
			.show();

		self.$controlInput.removeData('grow');
		self.$input.removeData('selectize');

		$(window).off(eventNS);
		$(document).off(eventNS);
		$(document.body).off(eventNS);

		delete self.$input[0].selectize;
	},

	/**
	 * A helper method for rendering "item" and
	 * "option" templates, given the data.
	 *
	 * @param {string} templateName
	 * @param {object} data
	 * @returns {string}
	 */
	render: function(templateName, data) {
		var value, id;
		var html = '';
		var cache = false;
		var self = this;
		// var regexTag = /^[\t \r\n]*<([a-z][a-z0-9\-]*(?:\:[a-z][a-z0-9\-]*)?)/i;

		if (templateName === 'option' || templateName === 'item') {
			value = hashKey(data[self.settings.valueField]);
			cache = !!value;
		}

		// pull markup from cache if it exists
		if (cache) {
			if (!isSet(self.renderCache[templateName])) {
				self.renderCache[templateName] = {};
			}
			if (self.renderCache[templateName].hasOwnProperty(value)) {
				return self.renderCache[templateName][value];
			}
		}

		// render markup
		html = $(self.settings.render[templateName].apply(this, [data, escapeHtml]));

		// add mandatory attributes
		if (templateName === 'option' || templateName === 'optionCreate') {
			html.attr('data-selectable', '');
		}
		else if (templateName === 'optgroup') {
			id = data[self.settings.optgroupValueField] || '';
			html.attr('data-group', id);
		}
		if (templateName === 'option' || templateName === 'item') {
			html.attr('data-value', value || '');
		}

		// update cache
		if (cache) {
			self.renderCache[templateName][value] = html[0];
		}

		return html[0];
	},

	/**
	 * Clears the render cache for a template. If
	 * no template is given, clears all render
	 * caches.
	 *
	 * @param {string} templateName
	 */
	clearCache: function(templateName) {
		var self = this;
		if (typeof templateName === 'undefined') {
			self.renderCache = {};
		} else {
			delete self.renderCache[templateName];
		}
	},

	/**
	 * Determines whether or not to display the
	 * create item prompt, given a user input.
	 *
	 * @param {string} input
	 * @return {boolean}
	 */
	canCreate: function(input) {
		var self = this;
		if (!self.settings.create) return false;
		var filter = self.settings.createFilter;
		return input.length
            && (typeof filter !== 'function' || filter.apply(self, [input]))
			&& (typeof filter !== 'string' || new RegExp(filter).test(input))
			&& (!(filter instanceof RegExp) || filter.test(input));
	}

});

function selectize($select, optsUser) {
    var opts               = $.extend({}, defaults, optsUser);
    var attrData           = opts.dataAttr;
    var fieldLabel         = opts.labelField;
    var fieldValue         = opts.valueField;
    var fieldOptgroup      = opts.optgroupField;
    var fieldOptgroupLabel = opts.optgroupLabelField;
    var fieldOptgroupValue = opts.optgroupValueField;

    /**
     * Initializes selectize from a <input type="text"> element.
     *
     * @param {object} $input
     * @param {object} optsElement
     */
    var initTextbox = function($input, optsElement) {
        var i, n, values, option;

        var dataRaw = $input.attr(attrData);

        if (!dataRaw) {
            var value = $.trim($input.val() || '');
            if (!opts.allowEmptyOption && !value.length) return;
            values = value.split(opts.delimiter);
            for (i = 0, n = values.length; i < n; i++) {
                option = {};
                option[fieldLabel] = values[i];
                option[fieldValue] = values[i];
                optsElement.options.push(option);
            }
            optsElement.items = values;
        } else {
            optsElement.options = JSON.parse(dataRaw);
            for (i = 0, n = optsElement.options.length; i < n; i++) {
                optsElement.items.push(optsElement.options[i][fieldValue]);
            }
        }
    };

    /**
     * Initializes selectize from a <select> element.
     *
     * @param {object} $input
     * @param {object} optsElement
     */
    var initSelect = function($input, optsElement) {
        var i, n, tagName, $children;
        var options = optsElement.options;
        var optionsMap = {};

        var readData = function($el) {
            var data = attrData && $el.attr(attrData);
            if (typeof data === 'string' && data.length) {
                return JSON.parse(data);
            }
            return null;
        };

        var addOption = function($option, group) {
            $option = $($option);

            var value = hashKey($option.val());
            if (!value && !opts.allowEmptyOption) return;

            // if the option already exists, it's probably been
            // duplicated in another optgroup. in this case, push
            // the current group to the "optgroup" property on the
            // existing option so that it's rendered in both places.
            if (optionsMap.hasOwnProperty(value)) {
                if (group) {
                    var arr = optionsMap[value][fieldOptgroup];
                    if (!arr) {
                        optionsMap[value][fieldOptgroup] = group;
                    } else if (!$.isArray(arr)) {
                        optionsMap[value][fieldOptgroup] = [arr, group];
                    } else {
                        arr.push(group);
                    }
                }
                return;
            }

            var option            = readData($option) || {};
            option[fieldLabel]    = option[fieldLabel] || $option.text();
            option[fieldValue]    = option[fieldValue] || value;
            option[fieldOptgroup] = option[fieldOptgroup] || group;

            optionsMap[value] = option;
            options.push(option);

            if ($option.is(':selected')) {
                optsElement.items.push(value);
            }
        };

        var addGroup = function($optgroup) {
            var i, n, id, optgroup, $options;

            $optgroup = $($optgroup);
            id = $optgroup.attr('label');

            if (id) {
                optgroup = readData($optgroup) || {};
                optgroup[fieldOptgroupLabel] = id;
                optgroup[fieldOptgroupValue] = id;
                optsElement.optgroups.push(optgroup);
            }

            $options = $('option', $optgroup);
            for (i = 0, n = $options.length; i < n; i++) {
                addOption($options[i], id);
            }
        };

        optsElement.maxItems = $input.attr('multiple') ? null : 1;

        $children = $input.children();
        for (i = 0, n = $children.length; i < n; i++) {
            tagName = $children[i].tagName.toLowerCase();
            if (tagName === 'optgroup') {
                addGroup($children[i]);
            } else if (tagName === 'option') {
                addOption($children[i]);
            }
        }
    };

    return $select.each(function() {
        if (this.selectize) return;

        var instance;
        var $input = $(this);
        var tagName = this.tagName.toLowerCase();
        var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
        if (!placeholder && !opts.allowEmptyOption) {
            placeholder = $input.children('option[value=""]').text();
        }

        var optsElement = {
            'placeholder' : placeholder,
            'options'     : [],
            'optgroups'   : [],
            'items'       : []
        };

        if (tagName === 'select') {
            initSelect($input, optsElement);
        } else {
            initTextbox($input, optsElement);
        }

        instance = new Selectize($input, $.extend(true, {}, defaults, optsElement, optsUser));
    });
}

export default selectize;
//# sourceMappingURL=selectize.mjs.map
