/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "//" + location.hostname + ":35729/livereload.js";
/******/ 	  document.getElementsByTagName("head")[0].appendChild(el);
/******/ 	}());
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lean-tag/dist/lean-tag.js":
/***/ (function(module, exports) {

eval("module.exports=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p=\"\",e(0)}([function(t,e){\"use strict\";function n(t,e){for(var n=0;n<t.length;n++)e(t[n])}function o(t,e){for(var n=Object.keys(t),o=0;o<n.length;o++)e(t[n[o]],n[o])}function r(t){return t&&(t.nodeName&&t.nodeType||t instanceof Text)}function i(){function t(t){for(var i=void 0,f=arguments.length,p=Array(f>1?f-1:0),a=1;a<f;a++)p[a-1]=arguments[a];if(\"string\"==typeof t){var l=t.split(\".\"),d=l[0],y=l.slice(1);i=document.createElement(\"\"===d?\"div\":d),y.length&&(i.className=y.join(\" \"))}else i=document.createElement(\"div\"),void 0!==t&&p.unshift(t);return n(p,function(t){Array.isArray(t)?n(t,function(t){return i.appendChild(r(t)?t:document.createTextNode(t))}):r(t)?i.appendChild(t):null!==t&&\"object\"===(\"undefined\"==typeof t?\"undefined\":u(t))?o(t,function(t,n){\"function\"==typeof t?(i.addEventListener(n.substring(c),t,!1),e.push(function(){return i.removeEventListener(n.substring(c),t,!1)})):\"style\"===n?\"string\"==typeof t?i.style.cssText=t:o(t,function(t,e){var n=t.match(s);n?i.style.setProperty(e,n[1],\"important\"):i.style.setProperty(e,t)}):\"attrs\"===n?o(t,function(t,e){return i.setAttribute(e,t)}):i[n]=t}):i.appendChild(document.createTextNode(t))}),i}var e=[];return t.cleanup=function(){n(e,function(t){return t()}),e.length=0},t}var u=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t},c=2,s=/(.*)\\W+!important\\W*$/;t.exports=i(),t.exports.context=i}]);\n\n//# sourceURL=webpack:///./node_modules/lean-tag/dist/lean-tag.js?");

/***/ }),

/***/ "./src/data/adjectives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  header: {\n    polish: 'Przymiotnik(i)',\n    german: 'Adjektiv(e)'\n  },\n  items: []\n};\n\n//# sourceURL=webpack:///./src/data/adjectives.js?");

/***/ }),

/***/ "./src/data/adverbs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  header: {\n    polish: 'Przysłów(ek/ki)',\n    german: 'Adverb(ien)'\n  },\n  items: [{\n    polish: 'szybko',\n    german: 'schnell'\n  }, {\n    polish: 'ładnie',\n    german: 'schön'\n  }, {\n    polish: 'poprawnie',\n    german: 'richtig'\n  }, {\n    polish: 'długo',\n    german: 'lange'\n  }, {\n    polish: 'poprawnie',\n    german: 'korrekt'\n  }, {\n    polish: 'dobrze',\n    german: 'gut'\n  }, {\n    polish: 'tam',\n    german: 'dort,dorthin'\n  }, {\n    polish: 'tutaj',\n    german: 'hier, playhierher'\n  }, {\n    polish: 'wszędzie',\n    german: 'überall'\n  }, {\n    polish: 'czasami',\n    german: 'manchmal'\n  }, {\n    polish: 'wkrótce',\n    german: 'bald'\n  }, {\n    polish: 'niedawno',\n    german: 'von kurzem'\n  }]\n};\n\n//# sourceURL=webpack:///./src/data/adverbs.js?");

/***/ }),

/***/ "./src/data/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _adjectives = __webpack_require__(\"./src/data/adjectives.js\");\n\nvar _adjectives2 = _interopRequireDefault(_adjectives);\n\nvar _adverbs = __webpack_require__(\"./src/data/adverbs.js\");\n\nvar _adverbs2 = _interopRequireDefault(_adverbs);\n\nvar _nouns = __webpack_require__(\"./src/data/nouns.js\");\n\nvar _nouns2 = _interopRequireDefault(_nouns);\n\nvar _numerals = __webpack_require__(\"./src/data/numerals.js\");\n\nvar _numerals2 = _interopRequireDefault(_numerals);\n\nvar _particles = __webpack_require__(\"./src/data/particles.js\");\n\nvar _particles2 = _interopRequireDefault(_particles);\n\nvar _prepositions = __webpack_require__(\"./src/data/prepositions.js\");\n\nvar _prepositions2 = _interopRequireDefault(_prepositions);\n\nvar _pronouns = __webpack_require__(\"./src/data/pronouns.js\");\n\nvar _pronouns2 = _interopRequireDefault(_pronouns);\n\nvar _verbs = __webpack_require__(\"./src/data/verbs.js\");\n\nvar _verbs2 = _interopRequireDefault(_verbs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// https://niemiecki.ang.pl/gramatyka/czesci-mowy\n\nexports.default = {\n  nouns: _nouns2.default,\n  verbs: _verbs2.default,\n  adjectives: _adjectives2.default,\n  numerals: _numerals2.default,\n  particles: _particles2.default,\n  prepositions: _prepositions2.default,\n  adverbs: _adverbs2.default,\n  pronouns: _pronouns2.default\n};\n\n//# sourceURL=webpack:///./src/data/index.js?");

/***/ }),

/***/ "./src/data/nouns.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  header: {\n    polish: 'Rzeczownik(i)',\n    german: 'Substantiv(e)'\n  },\n  items: [{\n    polish: 'mężczyzna',\n    german: ['der Mann', 'die Männer']\n  }, {\n    polish: 'kobieta',\n    german: ['die Frau', 'die Frauen']\n  }, {\n    polish: 'dziecko',\n    german: ['das Kind', 'die Kinder']\n\n  }]\n};\n\n//# sourceURL=webpack:///./src/data/nouns.js?");

/***/ }),

/***/ "./src/data/numerals.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  header: {\n    polish: 'Liczebniki(i)',\n    german: 'Ziffer/Zahlen'\n  },\n  items: [{\n    label: '0',\n    polish: 'zero',\n    german: 'null'\n  }, {\n    label: '1',\n    polish: 'jeden',\n    german: 'ein'\n  }, {\n    label: '2',\n    polish: 'dwa',\n    german: 'zwei'\n  }, {\n    label: '3',\n    polish: 'trzy',\n    german: 'drei'\n  }, {\n    label: '4',\n    polish: 'cztery',\n    german: 'vier'\n  }, {\n    label: '5',\n    polish: 'pięć',\n    german: 'fünf'\n  }, {\n    label: '6',\n    polish: 'sześć',\n    german: 'sechs'\n  }, {\n    label: '7',\n    polish: 'siedem',\n    german: 'sieben'\n  }, {\n    label: '8',\n    polish: 'osiem',\n    german: 'acht'\n  }, {\n    label: '9',\n    polish: 'dziewięć',\n    german: 'nein'\n  }, {\n    label: '10',\n    polish: 'dziesięć',\n    german: 'zehn'\n  }, {\n    label: '11',\n    polish: 'jedenaście',\n    german: 'elf'\n  }, {\n    label: '12',\n    polish: 'dwanaście',\n    german: 'zwölf'\n  }, {\n    label: '13',\n    polish: 'trzynaście',\n    german: 'dreizehn'\n  }, {\n    label: '14',\n    polish: 'czternaście',\n    german: 'vierzehn'\n  }, {\n    label: '15',\n    polish: 'piętnaście',\n    german: 'fünfzehn'\n  }, {\n    label: '16',\n    polish: 'szesnaście',\n    german: 'sechzehn'\n  }, {\n    label: '17',\n    polish: 'siedemnaście',\n    german: 'siebzehn'\n  }, {\n    label: '18',\n    polish: 'osiemnaście',\n    german: 'achtzehn'\n  }, {\n    label: '19',\n    polish: 'dziewiętnaście',\n    german: 'neunzehn'\n  }, {\n    label: '20',\n    polish: 'dwadzieścia',\n    german: 'zwanzig'\n  }, {\n    label: '21',\n    polish: 'dwadzieścia jeden',\n    german: 'einundzwanzig'\n  }, {\n    label: '22',\n    polish: 'dwadzieścia dwa',\n    german: 'zweiundzwanzig'\n  }, {\n    label: '30',\n    polish: 'trzydzieści',\n    german: 'dreißig'\n  }, {\n    label: '40',\n    polish: 'czterdzieści',\n    german: 'vierzig'\n  }, {\n    label: '50',\n    polish: 'pięćdziesiąt',\n    german: 'fünfzig'\n  }, {\n    label: '60',\n    polish: 'sześćdziesiąt',\n    german: 'sechzig'\n  }, {\n    label: '70',\n    polish: 'siedemdziesiąt',\n    german: 'siebzig'\n  }, {\n    label: '80',\n    polish: 'osiemdziesiąt',\n    german: 'achtzig'\n  }, {\n    label: '90',\n    polish: 'dziewięćdziesiąt',\n    german: 'neunzig'\n  }, {\n    label: '100',\n    polish: 'sto',\n    german: 'hundert'\n  }, {\n    label: '101',\n    polish: 'sto jeden',\n    german: 'einhundertundeins'\n  }, {\n    label: '111',\n    polish: 'sto jedenaście',\n    german: 'einhundertundelf'\n  }, {\n    label: '1.000',\n    polish: 'tysiąc',\n    german: 'tausend'\n  }, {\n    label: '1.001',\n    polish: 'tysiąc jeden',\n    german: 'eintausend eins'\n  }, {\n    label: '1.011',\n    polish: 'tysiąc jedenaście',\n    german: 'eintausend elf'\n  }, {\n    label: '1.111',\n    polish: 'tysiąc sto jedenaście',\n    german: '?'\n  }, {\n    label: '10.000',\n    polish: 'dziesięć tysięcy',\n    german: 'zehntausend'\n  }, {\n    label: '100.000',\n    polish: 'sto tysięcy',\n    german: 'einhunderttausend'\n  }, {\n    label: '1.000.000',\n    plish: 'milion',\n    german: 'million'\n  }]\n};\n\n//# sourceURL=webpack:///./src/data/numerals.js?");

/***/ }),

/***/ "./src/data/particles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  header: {\n    polish: 'Partykuł(y)',\n    german: 'Partikel'\n  },\n  items: [{\n    polish: 'mało',\n    german: 'wenig'\n  }, {\n    polish: 'dużo',\n    german: 'viel'\n  }, {\n    polish: 'bardzo',\n    german: 'sehr'\n  }, {\n    polish: 'całkiem, zupełnie',\n    german: 'ganz'\n  }, {\n    polish: 'nawet',\n    german: 'sogar'\n  }, {\n    polish: 'w ogóle',\n    german: 'überhaupt'\n  }, {\n    polish: 'jeszcze',\n    german: 'noch'\n  }, {\n    polish: 'tak',\n    german: 'so'\n  }, {\n    polish: 'coraz',\n    german: 'immer'\n  }, {\n    polish: 'zbyt',\n    german: 'zu'\n  }]\n};\n\n//# sourceURL=webpack:///./src/data/particles.js?");

/***/ }),

/***/ "./src/data/prepositions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  header: {\n    polish: 'Przyim(ek/ki)',\n    german: 'Präposition(en)'\n  },\n  items: [{\n    polish: 'z, ze środka',\n    german: 'aus'\n  }, {\n    polish: 'u, przy, koło',\n    german: 'bei'\n  }, {\n    polish: 'naprzeciwko',\n    german: 'gegenüber'\n  }, {\n    polish: 'z czymś, z kimś',\n    german: 'mit'\n  }, {\n    polish: 'po, do, według',\n    german: 'nach'\n  }, {\n    polish: 'od (czas)',\n    german: 'seit'\n  }, {\n    polish: 'od, z, o',\n    german: 'von'\n  }, {\n    polish: 'do (osoby, budowli)',\n    german: 'zu'\n  }]\n};\n\n//# sourceURL=webpack:///./src/data/prepositions.js?");

/***/ }),

/***/ "./src/data/pronouns.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  header: {\n    polish: 'Zaim(ek/ki)',\n    german: 'Pronomen'\n  },\n  items: [{\n    polish: 'ja',\n    german: ['ich', 'meiner', 'mir', 'mich']\n  }, {\n    polish: 'ty',\n    german: ['du', 'deiner', 'dir', 'dich']\n  }, {\n    polish: 'on',\n    german: ['er', 'seiner', 'ihm', 'ihn']\n  }, {\n    polish: 'ona',\n    german: ['sie', 'ihrer', 'ihr', 'sie']\n  }, {\n    polish: 'ono',\n    german: ['es', 'seiner', 'ihm', 'es']\n  }, {\n    polish: 'my',\n    german: ['wir', 'unser', 'uns', 'uns']\n  }, {\n    polish: 'wy',\n    german: ['ihr', 'eurer', 'euch', 'euch']\n  }, {\n    polish: 'oni, one',\n    german: ['sie', 'ihrer', 'ihnen', 'sie']\n  }]\n};\n\n//# sourceURL=webpack:///./src/data/pronouns.js?");

/***/ }),

/***/ "./src/data/verbs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  header: {\n    polish: 'Czasownik(i)',\n    german: 'Verb(en)'\n  },\n  items: [{\n    polish: 'być',\n    german: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind']\n  }, {\n    polish: 'mieć',\n    german: ['habe', 'hast', 'hat', 'haben', 'habt', 'haben']\n  }, {\n    polish: '.',\n    german: ['lasse', 'lässt', 'lässt', 'lassen', 'lasst', 'lassen']\n  }, {\n    polish: 'uczyć się',\n    german: ['lerne', 'lernst', 'lernt', 'lernen', 'lernt', 'lernen']\n  }, {\n    polish: 'robić',\n    german: ['mache', 'machst', 'macht', 'machen', 'macht', 'machen']\n  }, {\n    polish: 'dawać',\n    german: ['gebe', 'gibst', 'gibt', 'geben', 'gebt', 'geben']\n  }, {\n    polish: 'brać',\n    german: ['nehme', 'playnimmst', 'playnimmt', 'playnehmen', 'playnehmt', 'playnehmen']\n  }, {\n    polish: 'pomagać',\n    german: ['helfe', 'hilfst', 'hilft', 'helfen', 'helft', 'helfen']\n  }]\n};\n\n//# sourceURL=webpack:///./src/data/verbs.js?");

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(\"./src/styles.scss\");\n\nvar _leanTag = __webpack_require__(\"./node_modules/lean-tag/dist/lean-tag.js\");\n\nvar _leanTag2 = _interopRequireDefault(_leanTag);\n\nvar _data = __webpack_require__(\"./src/data/index.js\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nvar _section = __webpack_require__(\"./src/render/section.js\");\n\nvar _section2 = _interopRequireDefault(_section);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import { omit } from 'lodash';\n\nvar sections = Object.keys(_data2.default).reduce(function (obj, key) {\n    return Object.assign(obj, _defineProperty({}, key, (0, _section2.default)(_data2.default[key])));\n}, {});\n\nvar paper = (0, _leanTag2.default)('.paper', [(0, _leanTag2.default)('.col', sections.nouns), (0, _leanTag2.default)('.col', sections.verbs, (0, _leanTag2.default)('.row', (0, _leanTag2.default)('.col', sections.pronouns), (0, _leanTag2.default)('.col', sections.prepositions)), sections.adjectives), (0, _leanTag2.default)('.col', sections.numerals), (0, _leanTag2.default)('.col', sections.particles, sections.adverbs)]);\n\ndocument.body.appendChild(paper);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render/consts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar FROM = exports.FROM = 'polish';\nvar TO = exports.TO = 'german';\n\n//# sourceURL=webpack:///./src/render/consts.js?");

/***/ }),

/***/ "./src/render/section.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = renderSection;\n\nvar _leanTag = __webpack_require__(\"./node_modules/lean-tag/dist/lean-tag.js\");\n\nvar _leanTag2 = _interopRequireDefault(_leanTag);\n\nvar _consts = __webpack_require__(\"./src/render/consts.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction renderOriginal(item) {\n  var content = item.label || item[_consts.FROM];\n\n  return (0, _leanTag2.default)('td', content);\n}\n\nfunction renderTranslation(item) {\n  var content = item[_consts.TO];\n\n  content = Array.isArray(content) ? content : [content];\n\n  return content.map(function (el) {\n    return (0, _leanTag2.default)('td', el);\n  });\n}\n\nfunction renderItem(item) {\n  return (0, _leanTag2.default)('tr', [renderOriginal(item)].concat(_toConsumableArray(renderTranslation(item))));\n}\n\nfunction renderTable(items) {\n  var rows = items.map(function (item) {\n    return renderItem(item);\n  });\n\n  return (0, _leanTag2.default)('table', rows);\n}\n\nfunction renderSection(section) {\n  var table = renderTable(section.items);\n\n  return (0, _leanTag2.default)('.section', (0, _leanTag2.default)('h3.section-header', (0, _leanTag2.default)('', section.header[_consts.FROM]), (0, _leanTag2.default)('', section.header[_consts.TO])), table);\n}\n\n//# sourceURL=webpack:///./src/render/section.js?");

/***/ }),

/***/ "./src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ })

/******/ });