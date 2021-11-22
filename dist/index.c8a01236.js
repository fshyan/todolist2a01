// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fSbD7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "6d5e001cc8a01236";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bzG5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _router = require("./routes/router");
var _store = require("./redux/store");
var _dataFetcher = require("./utils/dataFetcher");
var _key = require("./utils/key");
var _keyDefault = parcelHelpers.interopDefault(_key);
// MOVE THE ROUTER
const app = document.querySelector("#app");
const onAppInit = async function(e) {
    let tasks = await _dataFetcher.dataFetcher('./data/tasks.json');
    if (tasks[0].id === undefined) tasks = [
        ..._keyDefault.default(tasks)
    ];
    _store.createStore(tasks);
    _router.Router(window.location.pathname);
};
window.addEventListener('load', onAppInit);

},{"./routes/router":"f0QlQ","./redux/store":"2rtCO","./utils/dataFetcher":"8J3wM","./utils/key":"aLkS9","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f0QlQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Router", ()=>Router
);
var _home = require("../pages/home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _toDoPage = require("../pages/toDoPage");
var _toDoPageDefault = parcelHelpers.interopDefault(_toDoPage);
var _delete = require("../pages/delete");
var _deleteDefault = parcelHelpers.interopDefault(_delete);
var _add = require("../pages/add");
var _addDefault = parcelHelpers.interopDefault(_add);
var _edit = require("../pages/edit");
var _editDefault = parcelHelpers.interopDefault(_edit);
var _directory = require("../pages/directory/directory");
var _directoryDefault = parcelHelpers.interopDefault(_directory);
var _notFound = require("../pages/notFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/ const routes = {
    "/": _homeDefault.default,
    "/directory": _directoryDefault.default,
    "/toDoPage": _toDoPageDefault.default,
    "/delete": _deleteDefault.default,
    "/add": _addDefault.default,
    "/edit": _editDefault.default,
    "/*": _notFoundDefault.default
};
const Router = function(pathname, params = null) {
    const isValidRoute = Object.keys(routes).find((key)=>key === pathname
    );
    // loading and unloading pages into the div app
    const app = document.querySelector('#app');
    app.innerHTML = '';
    window.history.pushState({
    }, pathname, window.location.origin + pathname);
    if (isValidRoute === undefined || isValidRoute === '') app.appendChild(_notFoundDefault.default());
    else app.appendChild(routes[isValidRoute](params));
};

},{"../pages/home":"ibbKS","../pages/toDoPage":"B5bua","../pages/delete":"MnGO9","../pages/add":"2kbOS","../pages/edit":"dw60c","../pages/directory/directory":"aR6pi","../pages/notFound":"3FOuT","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ibbKS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _link = require("../components/ui/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _levelHeading = require("../components/ui/levelHeading");
var _levelHeadingDefault = parcelHelpers.interopDefault(_levelHeading);
var _logo = require("../components/icons/logo");
var _logoDefault = parcelHelpers.interopDefault(_logo);
const index = function() {
    const page = document.createElement('div');
    let headerTemplate = `
        <header class="warning center-in-page">
           
        </header>
    `;
    const pageHeader = _makeElementDefault.default(headerTemplate);
    const logoTemplate = _logoDefault.default();
    const headingTitle = _levelHeadingDefault.default('h1', 'Task Way');
    const tagline = _levelHeadingDefault.default('h5', "Let's manage the tasks in Task Way");
    const homeLink = _linkDefault.default("To Do App", "/toDoPage");
    const addLink = _linkDefault.default("Add New To Do", "/add");
    pageHeader.append(logoTemplate);
    pageHeader.append(headingTitle);
    pageHeader.append(tagline);
    pageHeader.append(homeLink);
    pageHeader.append(addLink);
    page.append(pageHeader);
    return page;
};
exports.default = index;

},{"../utils/makeElement":"8ZxEo","../components/ui/link":"hFEwy","../components/ui/levelHeading":"bWyNS","../components/icons/logo":"izkzg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8ZxEo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const makeElement = function(templateString = ``) {
    const docFragment = document.createRange().createContextualFragment(templateString);
    const element = docFragment.children[0];
    return element;
};
exports.default = makeElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hFEwy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _router = require("../../routes/router");
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const onRequestPage = function(e) {
    e.preventDefault();
    _router.Router(e.currentTarget.dataset.path);
    return false;
};
const link = function(label = "ui link", path = "/", className = "ui-link") {
    const template = `<a href="${path}" class="button" data-path="${path}">${label}</a>`;
    const element = _makeElementDefault.default(template);
    element.addEventListener('click', onRequestPage);
    return element;
};
exports.default = link;

},{"../../routes/router":"f0QlQ","../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bWyNS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const levelHeading = function(elementType = 'h2', label = "ui heading", className = "ui-heading") {
    const template = `<${elementType} class="${className}"> ${label} </ ${elementType}>`;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = levelHeading;

},{"../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"izkzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const logo = function() {
    const template = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
     <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
     <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
   </svg>`;
    const element = _makeElementDefault.default(logo);
    return element;
};
exports.default = logo;

},{"../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"B5bua":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _brandingHeader = require("../components/cards/brandingHeader");
var _brandingHeaderDefault = parcelHelpers.interopDefault(_brandingHeader);
var _todolist = require("../components/cards/todolist");
var _todolistDefault = parcelHelpers.interopDefault(_todolist);
var _todoitem = require("../components/cards/todoitem");
var _todoitemDefault = parcelHelpers.interopDefault(_todoitem);
var _addtodo = require("../components/cards/addtodo");
var _addtodoDefault = parcelHelpers.interopDefault(_addtodo);
var _router = require("../routes/router");
var _store = require("../redux/store");
var _ejs = require("ejs");
let createPage = true;
const toDoLists = function() {
    const taskList = _store.getStore();
    const page = document.createElement('div');
    const container = _todolistDefault.default();
    var brandHead = _brandingHeaderDefault.default();
    var addToDoItem = _addtodoDefault.default();
    function cleanUp() {
        const tasks = container.querySelectorAll('aside');
        tasks.forEach((task)=>{
            task.removeEventListener('click', onDeleteTask);
        });
    }
    function onDeleteTask(e) {
        const taskId = e.currentTarget.dataset.key;
        const task = _store.getStore().filter((todoitem)=>todoitem.id === taskId
        );
        cleanUp();
        _router.Router('/delete', task[0]);
    }
    function onEditTask(e) {
        const taskId = e.currentTarget.dataset.key;
        const task = _store.getStore().filter((todoitem)=>todoitem.id === taskId
        );
        cleanUp();
        _router.Router('/edit', task[0]);
    }
    function render() {
        const ul = container.querySelector('ul');
        const footer = container.querySelector('footer');
        const div = container.getElementsByClassName('tasklist1');
        const innerdiv = container.querySelector('#tasks');
        div[0].append(brandHead);
        const elements = taskList.map((task)=>_todoitemDefault.default(task)
        );
        elements.forEach((element)=>ul.append(element)
        );
        elements.forEach((element)=>{
            element.querySelector('#delete').addEventListener('click', onDeleteTask);
            element.querySelector('#edit').addEventListener('click', onEditTask);
            innerdiv.append(element);
        });
        page.append(container);
    }
    if (taskList !== null) render();
    return page;
};
exports.default = toDoLists;

},{"../components/cards/brandingHeader":"3w2kc","../components/cards/todolist":"7vNfA","../components/cards/todoitem":"bWpH0","../components/cards/addtodo":"2ok0r","../routes/router":"f0QlQ","../redux/store":"2rtCO","ejs":"doTCF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3w2kc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _link = require("../../components/ui/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _levelHeading = require("../../components/ui/levelHeading");
var _levelHeadingDefault = parcelHelpers.interopDefault(_levelHeading);
var _logo = require("../../components/icons/logo");
var _logoDefault = parcelHelpers.interopDefault(_logo);
const brandHead = function() {
    const page = document.createElement('div');
    let headerTemplate = `
        <header class="warning center-in-page">
           
        </header>
    `;
    const pageHeader = _makeElementDefault.default(headerTemplate);
    const logoTemplate = _logoDefault.default();
    const headingTitle = _levelHeadingDefault.default('h1', 'Task Way');
    const tagline = _levelHeadingDefault.default('h5', "Let's manage the tasks in Task Way");
    pageHeader.append(logoTemplate);
    pageHeader.append(headingTitle);
    pageHeader.append(tagline);
    page.append(pageHeader);
    return page;
};
exports.default = brandHead;

},{"../../utils/makeElement":"8ZxEo","../../components/ui/link":"hFEwy","../../components/ui/levelHeading":"bWyNS","../../components/icons/logo":"izkzg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7vNfA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const directory = function() {
    const template1 = `
    <div id="tasklist" class="tasklist">
    <div id="tasks">
    <ul class="tasklist1">
     </ul>
     </div>
    <footer>

    </footer>
</div>`;
    //  <header>
    //         <h3>To-Do List</h3>
    //     </header>
    return _makeElementDefault.default(template1);
};
exports.default = directory;

},{"../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bWpH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const task = function({ id , category , title , isComplete , endDate  }) {
    const template = `       
  <li  class="task" data-key="${id}">
     <h3>${category} category</h3>
     <p> ${title} </p>
     <p>Due: ${endDate}</p>
     <div><p> ${isComplete == true ? 'Completed' : ''} </p>
     <p class="controls">
     <button id="edit" data-key="${id}" class="btnEdit">Edit</button>
     <button id="delete" data-key="${id}" class="btnDelete">Delete</button></p>      
  </li>        
  `;
    return _makeElementDefault.default(template);
};
exports.default = task;

},{"../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2ok0r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const todoItem = function() {
    const template = `       
  <div class="addToDoItem"><div class="addtodoText">
  <input type="text" class="text"></input>  </div>   
  <div class="addtodoBtn"><button class="btnAdd">Add</button></p>      
  </div></div>        
  `;
    return _makeElementDefault.default(template);
};
exports.default = todoItem;

},{"../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2rtCO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStore", ()=>createStore
);
parcelHelpers.export(exports, "getStore", ()=>getStore
);
parcelHelpers.export(exports, "updateStore", ()=>updateStore
);
let store = null;
// Create the store accessed by all our app components
function createStore(data = []) {
    if (store === null) store = [
        ...data
    ];
    return null;
}
function getStore() {
    return store;
}
function updateStore(newStore) {
    store = [
        ...newStore
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"doTCF":[function(require,module,exports) {
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/ 'use strict';
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */ /**
 * EJS internal functions.
 *
 * Technically this "module" lies in the same file as {@link module:ejs}, for
 * the sake of organization all the private functions re grouped into this
 * module.
 *
 * @module ejs-internal
 * @private
 */ /**
 * Embedded JavaScript templating engine.
 *
 * @module ejs
 * @public
 */ var fs = require('fs');
var path = require('path');
var utils = require('./utils');
var scopeOptionWarned = false;
/** @type {string} */ var _VERSION_STRING = require('../package.json').version;
var _DEFAULT_OPEN_DELIMITER = '<';
var _DEFAULT_CLOSE_DELIMITER = '>';
var _DEFAULT_DELIMITER = '%';
var _DEFAULT_LOCALS_NAME = 'locals';
var _NAME = 'ejs';
var _REGEX_STRING = '(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)';
var _OPTS_PASSABLE_WITH_DATA = [
    'delimiter',
    'scope',
    'context',
    'debug',
    'compileDebug',
    'client',
    '_with',
    'rmWhitespace',
    'strict',
    'filename',
    'async'
];
// We don't allow 'cache' option to be passed in the data obj for
// the normal `render` call, but this is where Express 2 & 3 put it
// so we make an exception for `renderFile`
var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat('cache');
var _BOM = /^\uFEFF/;
/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 *
 * @type {Cache}
 */ exports.cache = utils.cache;
/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 *
 * @type {fileLoader}
 */ exports.fileLoader = fs.readFileSync;
/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 *
 * @type {String}
 * @public
 */ exports.localsName = _DEFAULT_LOCALS_NAME;
/**
 * Promise implementation -- defaults to the native implementation if available
 * This is mostly just for testability
 *
 * @type {PromiseConstructorLike}
 * @public
 */ exports.promiseImpl = new Function('return this;')().Promise;
/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name     specified path
 * @param {String}  filename parent file path
 * @param {Boolean} [isDir=false] whether the parent file path is a directory
 * @return {String}
 */ exports.resolveInclude = function(name, filename, isDir) {
    var dirname = path.dirname;
    var extname = path.extname;
    var resolve = path.resolve;
    var includePath = resolve(isDir ? filename : dirname(filename), name);
    var ext = extname(name);
    if (!ext) includePath += '.ejs';
    return includePath;
};
/**
 * Try to resolve file path on multiple directories
 *
 * @param  {String}        name  specified path
 * @param  {Array<String>} paths list of possible parent directory paths
 * @return {String}
 */ function resolvePaths(name, paths) {
    var filePath;
    if (paths.some(function(v) {
        filePath = exports.resolveInclude(name, v, true);
        return fs.existsSync(filePath);
    })) return filePath;
}
/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */ function getIncludePath(path, options) {
    var includePath;
    var filePath;
    var views = options.views;
    var match = /^[A-Za-z]+:\\|^\//.exec(path);
    // Abs path
    if (match && match.length) {
        path = path.replace(/^\/*/, '');
        if (Array.isArray(options.root)) includePath = resolvePaths(path, options.root);
        else includePath = exports.resolveInclude(path, options.root || '/', true);
    } else {
        // Look relative to a passed filename first
        if (options.filename) {
            filePath = exports.resolveInclude(path, options.filename);
            if (fs.existsSync(filePath)) includePath = filePath;
        }
        // Then look in any views directories
        if (!includePath && Array.isArray(views)) includePath = resolvePaths(path, views);
        if (!includePath && typeof options.includer !== 'function') throw new Error('Could not find the include file "' + options.escapeFunction(path) + '"');
    }
    return includePath;
}
/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `template` is not set, the file specified in `options.filename` will be
 * read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @memberof module:ejs-internal
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */ function handleCache(options, template) {
    var func;
    var filename = options.filename;
    var hasTemplate = arguments.length > 1;
    if (options.cache) {
        if (!filename) throw new Error('cache option requires a filename');
        func = exports.cache.get(filename);
        if (func) return func;
        if (!hasTemplate) template = fileLoader(filename).toString().replace(_BOM, '');
    } else if (!hasTemplate) {
        // istanbul ignore if: should not happen at all
        if (!filename) throw new Error("Internal EJS error: no file name or template provided");
        template = fileLoader(filename).toString().replace(_BOM, '');
    }
    func = exports.compile(template, options);
    if (options.cache) exports.cache.set(filename, func);
    return func;
}
/**
 * Try calling handleCache with the given options and data and call the
 * callback with the result. If an error occurs, call the callback with
 * the error. Used by renderFile().
 *
 * @memberof module:ejs-internal
 * @param {Options} options    compilation options
 * @param {Object} data        template data
 * @param {RenderFileCallback} cb callback
 * @static
 */ function tryHandleCache(options, data, cb) {
    var result;
    if (!cb) {
        if (typeof exports.promiseImpl == 'function') return new exports.promiseImpl(function(resolve, reject) {
            try {
                result = handleCache(options)(data);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
        else throw new Error('Please provide a callback function');
    } else {
        try {
            result = handleCache(options)(data);
        } catch (err) {
            return cb(err);
        }
        cb(null, result);
    }
}
/**
 * fileLoader is independent
 *
 * @param {String} filePath ejs file path.
 * @return {String} The contents of the specified file.
 * @static
 */ function fileLoader(filePath) {
    return exports.fileLoader(filePath);
}
/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */ function includeFile(path, options) {
    var opts = utils.shallowCopy({
    }, options);
    opts.filename = getIncludePath(path, opts);
    if (typeof options.includer === 'function') {
        var includerResult = options.includer(path, opts.filename);
        if (includerResult) {
            if (includerResult.filename) opts.filename = includerResult.filename;
            if (includerResult.template) return handleCache(opts, includerResult.template);
        }
    }
    return handleCache(opts);
}
/**
 * Re-throw the given `err` in context to the `str` of ejs, `filename`, and
 * `lineno`.
 *
 * @implements {RethrowCallback}
 * @memberof module:ejs-internal
 * @param {Error}  err      Error object
 * @param {String} str      EJS source
 * @param {String} flnm     file name of the EJS file
 * @param {Number} lineno   line number of the error
 * @param {EscapeCallback} esc
 * @static
 */ function rethrow(err, str, flnm, lineno, esc) {
    var lines = str.split('\n');
    var start = Math.max(lineno - 3, 0);
    var end = Math.min(lines.length, lineno + 3);
    var filename = esc(flnm);
    // Error context
    var context = lines.slice(start, end).map(function(line, i) {
        var curr = i + start + 1;
        return (curr == lineno ? ' >> ' : '    ') + curr + '| ' + line;
    }).join('\n');
    // Alter exception message
    err.path = filename;
    err.message = (filename || 'ejs') + ':' + lineno + '\n' + context + '\n\n' + err.message;
    throw err;
}
function stripSemi(str) {
    return str.replace(/;(\s*$)/, '$1');
}
/**
 * Compile the given `str` of ejs into a template function.
 *
 * @param {String}  template EJS template
 *
 * @param {Options} [opts] compilation options
 *
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `opts.client`, either type might be returned.
 * Note that the return type of the function also depends on the value of `opts.async`.
 * @public
 */ exports.compile = function compile(template, opts) {
    var templ;
    // v1 compat
    // 'scope' is 'context'
    // FIXME: Remove this in a future version
    if (opts && opts.scope) {
        if (!scopeOptionWarned) {
            console.warn('`scope` option is deprecated and will be removed in EJS 3');
            scopeOptionWarned = true;
        }
        if (!opts.context) opts.context = opts.scope;
        delete opts.scope;
    }
    templ = new Template(template, opts);
    return templ.compile();
};
/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}   template EJS template
 * @param {Object}  [data={}] template data
 * @param {Options} [opts={}] compilation and rendering options
 * @return {(String|Promise<String>)}
 * Return value type depends on `opts.async`.
 * @public
 */ exports.render = function(template, d, o) {
    var data = d || {
    };
    var opts = o || {
    };
    // No options object -- if there are optiony names
    // in the data, copy them to options
    if (arguments.length == 2) utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
    return handleCache(opts, template)(data);
};
/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}             path     path to the EJS file
 * @param {Object}            [data={}] template data
 * @param {Options}           [opts={}] compilation and rendering options
 * @param {RenderFileCallback} cb callback
 * @public
 */ exports.renderFile = function() {
    var args = Array.prototype.slice.call(arguments);
    var filename = args.shift();
    var cb;
    var opts = {
        filename: filename
    };
    var data;
    var viewOpts;
    // Do we have a callback?
    if (typeof arguments[arguments.length - 1] == 'function') cb = args.pop();
    // Do we have data/opts?
    if (args.length) {
        // Should always have data obj
        data = args.shift();
        // Normal passed opts (data obj + opts obj)
        if (args.length) // Use shallowCopy so we don't pollute passed in opts obj with new vals
        utils.shallowCopy(opts, args.pop());
        else {
            // Express 3 and 4
            if (data.settings) {
                // Pull a few things from known locations
                if (data.settings.views) opts.views = data.settings.views;
                if (data.settings['view cache']) opts.cache = true;
                // Undocumented after Express 2, but still usable, esp. for
                // items that are unsafe to be passed along with data, like `root`
                viewOpts = data.settings['view options'];
                if (viewOpts) utils.shallowCopy(opts, viewOpts);
            }
            // Express 2 and lower, values set in app.locals, or people who just
            // want to pass options in their data. NOTE: These values will override
            // anything previously set in settings  or settings['view options']
            utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
        }
        opts.filename = filename;
    } else data = {
    };
    return tryHandleCache(opts, data, cb);
};
/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 * @public
 */ /**
 * EJS template class
 * @public
 */ exports.Template = Template;
exports.clearCache = function() {
    exports.cache.reset();
};
function Template(text, opts) {
    opts = opts || {
    };
    var options = {
    };
    this.templateText = text;
    /** @type {string | null} */ this.mode = null;
    this.truncate = false;
    this.currentLine = 1;
    this.source = '';
    options.client = opts.client || false;
    options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
    options.compileDebug = opts.compileDebug !== false;
    options.debug = !!opts.debug;
    options.filename = opts.filename;
    options.openDelimiter = opts.openDelimiter || exports.openDelimiter || _DEFAULT_OPEN_DELIMITER;
    options.closeDelimiter = opts.closeDelimiter || exports.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
    options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
    options.strict = opts.strict || false;
    options.context = opts.context;
    options.cache = opts.cache || false;
    options.rmWhitespace = opts.rmWhitespace;
    options.root = opts.root;
    options.includer = opts.includer;
    options.outputFunctionName = opts.outputFunctionName;
    options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
    options.views = opts.views;
    options.async = opts.async;
    options.destructuredLocals = opts.destructuredLocals;
    options.legacyInclude = typeof opts.legacyInclude != 'undefined' ? !!opts.legacyInclude : true;
    if (options.strict) options._with = false;
    else options._with = typeof opts._with != 'undefined' ? opts._with : true;
    this.opts = options;
    this.regex = this.createRegex();
}
Template.modes = {
    EVAL: 'eval',
    ESCAPED: 'escaped',
    RAW: 'raw',
    COMMENT: 'comment',
    LITERAL: 'literal'
};
Template.prototype = {
    createRegex: function() {
        var str = _REGEX_STRING;
        var delim = utils.escapeRegExpChars(this.opts.delimiter);
        var open = utils.escapeRegExpChars(this.opts.openDelimiter);
        var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
        str = str.replace(/%/g, delim).replace(/</g, open).replace(/>/g, close);
        return new RegExp(str);
    },
    compile: function() {
        /** @type {string} */ var src;
        /** @type {ClientFunction} */ var fn;
        var opts = this.opts;
        var prepended = '';
        var appended = '';
        /** @type {EscapeCallback} */ var escapeFn = opts.escapeFunction;
        /** @type {FunctionConstructor} */ var ctor;
        /** @type {string} */ var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : 'undefined';
        if (!this.source) {
            this.generateSource();
            prepended += "  var __output = \"\";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n";
            if (opts.outputFunctionName) prepended += '  var ' + opts.outputFunctionName + ' = __append;' + '\n';
            if (opts.destructuredLocals && opts.destructuredLocals.length) {
                var destructuring = '  var __locals = (' + opts.localsName + ' || {}),\n';
                for(var i = 0; i < opts.destructuredLocals.length; i++){
                    var name = opts.destructuredLocals[i];
                    if (i > 0) destructuring += ',\n  ';
                    destructuring += name + ' = __locals.' + name;
                }
                prepended += destructuring + ';\n';
            }
            if (opts._with !== false) {
                prepended += '  with (' + opts.localsName + ' || {}) {' + '\n';
                appended += "  }\n";
            }
            appended += "  return __output;\n";
            this.source = prepended + this.source + appended;
        }
        if (opts.compileDebug) src = "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + '\n' + '  , __filename = ' + sanitizedFilename + ';' + '\n' + 'try {' + '\n' + this.source + '} catch (e) {' + '\n' + '  rethrow(e, __lines, __filename, __line, escapeFn);' + '\n' + '}' + '\n';
        else src = this.source;
        if (opts.client) {
            src = 'escapeFn = escapeFn || ' + escapeFn.toString() + ';' + '\n' + src;
            if (opts.compileDebug) src = 'rethrow = rethrow || ' + rethrow.toString() + ';' + '\n' + src;
        }
        if (opts.strict) src = '"use strict";\n' + src;
        if (opts.debug) console.log(src);
        if (opts.compileDebug && opts.filename) src = src + '\n' + '//# sourceURL=' + sanitizedFilename + '\n';
        try {
            if (opts.async) // Have to use generated function for this, since in envs without support,
            // it breaks in parsing
            try {
                ctor = new Function('return (async function(){}).constructor;')();
            } catch (e) {
                if (e instanceof SyntaxError) throw new Error('This environment does not support async/await');
                else throw e;
            }
            else ctor = Function;
            fn = new ctor(opts.localsName + ', escapeFn, include, rethrow', src);
        } catch (e1) {
            // istanbul ignore else
            if (e1 instanceof SyntaxError) {
                if (opts.filename) e1.message += ' in ' + opts.filename;
                e1.message += ' while compiling ejs\n\n';
                e1.message += 'If the above error is not helpful, you may want to try EJS-Lint:\n';
                e1.message += 'https://github.com/RyanZim/EJS-Lint';
                if (!opts.async) {
                    e1.message += '\n';
                    e1.message += 'Or, if you meant to create an async function, pass `async: true` as an option.';
                }
            }
            throw e1;
        }
        // Return a callable function which will execute the function
        // created by the source-code, with the passed data as locals
        // Adds a local `include` function which allows full recursive include
        var returnedFn = opts.client ? fn : function anonymous(data) {
            var include = function(path, includeData) {
                var d = utils.shallowCopy({
                }, data);
                if (includeData) d = utils.shallowCopy(d, includeData);
                return includeFile(path, opts)(d);
            };
            return fn.apply(opts.context, [
                data || {
                },
                escapeFn,
                include,
                rethrow
            ]);
        };
        if (opts.filename && typeof Object.defineProperty === 'function') {
            var filename = opts.filename;
            var basename = path.basename(filename, path.extname(filename));
            try {
                Object.defineProperty(returnedFn, 'name', {
                    value: basename,
                    writable: false,
                    enumerable: false,
                    configurable: true
                });
            } catch (e) {
            }
        }
        return returnedFn;
    },
    generateSource: function() {
        var opts = this.opts;
        if (opts.rmWhitespace) // Have to use two separate replace here as `^` and `$` operators don't
        // work well with `\r` and empty lines don't work well with the `m` flag.
        this.templateText = this.templateText.replace(/[\r\n]+/g, '\n').replace(/^\s+|\s+$/gm, '');
        // Slurp spaces and tabs before <%_ and after _%>
        this.templateText = this.templateText.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>');
        var self = this;
        var matches = this.parseTemplateText();
        var d = this.opts.delimiter;
        var o = this.opts.openDelimiter;
        var c = this.opts.closeDelimiter;
        if (matches && matches.length) matches.forEach(function(line, index) {
            var closing;
            // If this is an opening tag, check for closing tags
            // FIXME: May end up with some false positives here
            // Better to store modes as k/v with openDelimiter + delimiter as key
            // Then this can simply check against the map
            if (line.indexOf(o + d) === 0 // If it is a tag
             && line.indexOf(o + d + d) !== 0) {
                closing = matches[index + 2];
                if (!(closing == d + c || closing == '-' + d + c || closing == '_' + d + c)) throw new Error('Could not find matching close tag for "' + line + '".');
            }
            self.scanLine(line);
        });
    },
    parseTemplateText: function() {
        var str = this.templateText;
        var pat = this.regex;
        var result = pat.exec(str);
        var arr = [];
        var firstPos;
        while(result){
            firstPos = result.index;
            if (firstPos !== 0) {
                arr.push(str.substring(0, firstPos));
                str = str.slice(firstPos);
            }
            arr.push(result[0]);
            str = str.slice(result[0].length);
            result = pat.exec(str);
        }
        if (str) arr.push(str);
        return arr;
    },
    _addOutput: function(line) {
        if (this.truncate) {
            // Only replace single leading linebreak in the line after
            // -%> tag -- this is the single, trailing linebreak
            // after the tag that the truncation mode replaces
            // Handle Win / Unix / old Mac linebreaks -- do the \r\n
            // combo first in the regex-or
            line = line.replace(/^(?:\r\n|\r|\n)/, '');
            this.truncate = false;
        }
        if (!line) return line;
        // Preserve literal slashes
        line = line.replace(/\\/g, '\\\\');
        // Convert linebreaks
        line = line.replace(/\n/g, '\\n');
        line = line.replace(/\r/g, '\\r');
        // Escape double-quotes
        // - this will be the delimiter during execution
        line = line.replace(/"/g, '\\"');
        this.source += '    ; __append("' + line + '")' + '\n';
    },
    scanLine: function(line) {
        var self = this;
        var d = this.opts.delimiter;
        var o = this.opts.openDelimiter;
        var c = this.opts.closeDelimiter;
        var newLineCount = 0;
        newLineCount = line.split('\n').length - 1;
        switch(line){
            case o + d:
            case o + d + '_':
                this.mode = Template.modes.EVAL;
                break;
            case o + d + '=':
                this.mode = Template.modes.ESCAPED;
                break;
            case o + d + '-':
                this.mode = Template.modes.RAW;
                break;
            case o + d + '#':
                this.mode = Template.modes.COMMENT;
                break;
            case o + d + d:
                this.mode = Template.modes.LITERAL;
                this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")' + '\n';
                break;
            case d + d + c:
                this.mode = Template.modes.LITERAL;
                this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")' + '\n';
                break;
            case d + c:
            case '-' + d + c:
            case '_' + d + c:
                if (this.mode == Template.modes.LITERAL) this._addOutput(line);
                this.mode = null;
                this.truncate = line.indexOf('-') === 0 || line.indexOf('_') === 0;
                break;
            default:
                // In script mode, depends on type of tag
                if (this.mode) {
                    // If '//' is found without a line break, add a line break.
                    switch(this.mode){
                        case Template.modes.EVAL:
                        case Template.modes.ESCAPED:
                        case Template.modes.RAW:
                            if (line.lastIndexOf('//') > line.lastIndexOf('\n')) line += '\n';
                    }
                    switch(this.mode){
                        // Just executing code
                        case Template.modes.EVAL:
                            this.source += '    ; ' + line + '\n';
                            break;
                        // Exec, esc, and output
                        case Template.modes.ESCAPED:
                            this.source += '    ; __append(escapeFn(' + stripSemi(line) + '))' + '\n';
                            break;
                        // Exec and output
                        case Template.modes.RAW:
                            this.source += '    ; __append(' + stripSemi(line) + ')' + '\n';
                            break;
                        case Template.modes.COMMENT:
                            break;
                        // Literal <%% mode, append as raw output
                        case Template.modes.LITERAL:
                            this._addOutput(line);
                            break;
                    }
                } else this._addOutput(line);
        }
        if (self.opts.compileDebug && newLineCount) {
            this.currentLine += newLineCount;
            this.source += '    ; __line = ' + this.currentLine + '\n';
        }
    }
};
/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @public
 * @func
 * */ exports.escapeXML = utils.escapeXML;
/**
 * Express.js support.
 *
 * This is an alias for {@link module:ejs.renderFile}, in order to support
 * Express.js out-of-the-box.
 *
 * @func
 */ exports.__express = exports.renderFile;
/**
 * Version of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */ exports.VERSION = _VERSION_STRING;
/**
 * Name for detection of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */ exports.name = _NAME;
/* istanbul ignore if */ if (typeof window != 'undefined') window.ejs = exports;

},{"fs":"joWnX","path":"dTeSu","./utils":"7j1JL","../package.json":"4aLKF"}],"joWnX":[function(require,module,exports) {
"use strict";

},{}],"dTeSu":[function(require,module,exports) {
var process = require("process");
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"lDnB8"}],"lDnB8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"7j1JL":[function(require,module,exports) {
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/ /**
 * Private utility functions
 * @module utils
 * @private
 */ 'use strict';
var regExpChars = /[|\\{}()[\]^$+*?.]/g;
/**
 * Escape characters reserved in regular expressions.
 *
 * If `string` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} string Input string
 * @return {String} Escaped string
 * @static
 * @private
 */ exports.escapeRegExpChars = function(string) {
    // istanbul ignore if
    if (!string) return '';
    return String(string).replace(regExpChars, '\\$&');
};
var _ENCODE_HTML_RULES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&#34;',
    "'": '&#39;'
};
var _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
    return _ENCODE_HTML_RULES[c] || c;
}
/**
 * Stringified version of constants used by {@link module:utils.escapeXML}.
 *
 * It is used in the process of generating {@link ClientFunction}s.
 *
 * @readonly
 * @type {String}
 */ var escapeFuncStr = "var _ENCODE_HTML_RULES = {\n      \"&\": \"&amp;\"\n    , \"<\": \"&lt;\"\n    , \">\": \"&gt;\"\n    , '\"': \"&#34;\"\n    , \"'\": \"&#39;\"\n    }\n  , _MATCH_HTML = /[&<>'\"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n";
/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @implements {EscapeCallback}
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @static
 * @private
 */ exports.escapeXML = function(markup) {
    return markup == undefined ? '' : String(markup).replace(_MATCH_HTML, encode_char);
};
exports.escapeXML.toString = function() {
    return Function.prototype.toString.call(this) + ';\n' + escapeFuncStr;
};
/**
 * Naive copy of properties from one object to another.
 * Does not recurse into non-scalar properties
 * Does not check to see if the property has a value before copying
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */ exports.shallowCopy = function(to, from) {
    from = from || {
    };
    for(var p in from)to[p] = from[p];
    return to;
};
/**
 * Naive copy of a list of key names, from one object to another.
 * Only copies property if it is actually defined
 * Does not recurse into non-scalar properties
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @param  {Array} list List of properties to copy
 * @return {Object}      Destination object
 * @static
 * @private
 */ exports.shallowCopyFromList = function(to, from, list) {
    for(var i = 0; i < list.length; i++){
        var p = list[i];
        if (typeof from[p] != 'undefined') to[p] = from[p];
    }
    return to;
};
/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 *
 * @implements {Cache}
 * @static
 * @private
 */ exports.cache = {
    _data: {
    },
    set: function(key, val) {
        this._data[key] = val;
    },
    get: function(key) {
        return this._data[key];
    },
    remove: function(key) {
        delete this._data[key];
    },
    reset: function() {
        this._data = {
        };
    }
};
/**
 * Transforms hyphen case variable into camel case.
 *
 * @param {String} string Hyphen case string
 * @return {String} Camel case string
 * @static
 * @private
 */ exports.hyphenToCamel = function(str) {
    return str.replace(/-[a-z]/g, function(match) {
        return match[1].toUpperCase();
    });
};

},{}],"4aLKF":[function(require,module,exports) {
module.exports = JSON.parse("{\"name\":\"ejs\",\"description\":\"Embedded JavaScript templates\",\"keywords\":[\"template\",\"engine\",\"ejs\"],\"version\":\"3.1.6\",\"author\":\"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)\",\"license\":\"Apache-2.0\",\"bin\":{\"ejs\":\"./bin/cli.js\"},\"main\":\"./lib/ejs.js\",\"jsdelivr\":\"ejs.min.js\",\"unpkg\":\"ejs.min.js\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/mde/ejs.git\"},\"bugs\":\"https://github.com/mde/ejs/issues\",\"homepage\":\"https://github.com/mde/ejs\",\"dependencies\":{\"jake\":\"^10.6.1\"},\"devDependencies\":{\"browserify\":\"^16.5.1\",\"eslint\":\"^6.8.0\",\"git-directory-deploy\":\"^1.5.1\",\"jsdoc\":\"^3.6.4\",\"lru-cache\":\"^4.0.1\",\"mocha\":\"^7.1.1\",\"uglify-js\":\"^3.3.16\"},\"engines\":{\"node\":\">=0.10.0\"},\"scripts\":{\"test\":\"mocha\"}}");

},{}],"MnGO9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _delete = require("./delete");
var _deleteDefault = parcelHelpers.interopDefault(_delete);
exports.default = _deleteDefault.default;

},{"./delete":"fGqUL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fGqUL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("~/src/js/utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _button = require("../../components/ui/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _router = require("./../../routes/router");
var _store = require("../../redux/store");
var _reducers = require("./../../redux/reducers");
var _reducersDefault = parcelHelpers.interopDefault(_reducers);
const cancelButton = _buttonDefault.default("cancel");
const deleteButton = _buttonDefault.default("delete");
const deletePage = function(props) {
    // Create A Container for the page
    // Styles either with modules.scss or styles.module.css
    const page = document.createElement('div');
    // Component Clean Up Function
    // Remove The Listeners from the Page
    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelDelete);
        deleteButton.removeEventListener('click', onRemoveTask);
    }
    function onCancelDelete(e) {
        cleanUp();
        _router.Router('/');
    }
    function onRemoveTask(e) {
        if (props !== null) {
            _router.Router('/');
            const removeTask = props;
            const index = _store.getStore().findIndex((task)=>task.id === removeTask.id
            );
            const action = {
                type: "delete",
                payload: {
                    index
                },
                cb: ()=>_router.Router('/')
            };
            _reducersDefault.default(action);
            cleanUp();
        }
    }
    let headerTemplate = `
        <header class="welcome center-in-page">
            <h3>Delete Task</h3>
            <p id="taskDeatil"></p> 
            <div></div>
        </header>
    `;
    const pageHeader = _makeElementDefault.default(headerTemplate);
    if (props !== null) pageHeader.querySelector('#taskDeatil').innerHTML = props.title;
    cancelButton.addEventListener('click', onCancelDelete);
    deleteButton.addEventListener('click', onRemoveTask);
    pageHeader.querySelector('div').append(cancelButton, deleteButton);
    page.append(pageHeader);
    return page;
};
exports.default = deletePage;

},{"~/src/js/utils/makeElement":"8ZxEo","../../components/ui/button":"6DmRG","./../../routes/router":"f0QlQ","../../redux/store":"2rtCO","./../../redux/reducers":"8hFC2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6DmRG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _button = require("./button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
exports.default = _buttonDefault.default;

},{"./button":"hr6TA","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hr6TA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("~/src/js/utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _stylesModuleScss = require("./styles.module.scss");
var _stylesModuleScssDefault = parcelHelpers.interopDefault(_stylesModuleScss);
const button = function(label = "ui button") {
    const template = `<button class="${_stylesModuleScssDefault.default.buttonBase}">${label}</button>`;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = button;

},{"~/src/js/utils/makeElement":"8ZxEo","./styles.module.scss":"6WRST","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6WRST":[function(require,module,exports) {
module.exports["buttonBase"] = "_buttonBase_ac2622";

},{}],"8hFC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _store = require("./store");
function reducer(action) {
    switch(action.type){
        case "delete":
            const store = _store.getStore();
            const deletIndex = action.payload.index;
            const newStore = [
                ...store.slice(0, deletIndex),
                ...store.slice(deletIndex + 1)
            ];
            _store.updateStore(newStore);
            action.cb();
        case "edit":
            const currentStore = _store.getStore();
            const editedTask = action.payload;
            const editedIndex = _store.getStore().findIndex((task)=>task.id === editedTask.id
            );
            const updateTask = [
                ...currentStore.slice(0, editedIndex),
                ...currentStore.slice()
            ];
            currentStore[editedIndex] = editedTask;
            _store.updateStore(currentStore);
            action.cb();
        case "add":
            const addStore = _store.getStore();
            const newTask = action.payload;
            const addTask = [
                ...addStore,
                newTask
            ];
            _store.updateStore(addTask);
            console.log(_store.getStore());
            action.cb();
        default:
            return _store.getStore();
    }
}
exports.default = reducer;

},{"./store":"2rtCO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2kbOS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _add = require("./add");
var _addDefault = parcelHelpers.interopDefault(_add);
exports.default = _addDefault.default;

},{"./add":"gEBVh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gEBVh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("~/src/js/utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _button = require("../../components/ui/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _router = require("./../../routes/router");
var _store = require("../../redux/store");
var _reducers = require("./../../redux/reducers");
var _reducersDefault = parcelHelpers.interopDefault(_reducers);
const cancelButton = _buttonDefault.default("Cancel");
const addButton = _buttonDefault.default("Add", "btnAdd");
const addPage = function(props) {
    const page = document.createElement('div');
    function onCancelAdd(e) {
        _router.Router('/');
    }
    function onAddTask(e) {
        var taskObj = {
            id: null,
            category: document.getElementById('category').value,
            title: document.getElementById('task').value,
            isComplete: document.getElementById('completed').checked,
            startDate: document.getElementById('startDate').value,
            startTime: document.getElementById('startTime').value,
            endDate: document.getElementById('endDate').value,
            endTime: document.getElementById('endTime').value
        };
        const action = {
            type: "add",
            // payload:{id ,category , title , isComplete , startDate , startTime , endDate , endTime},
            payload: taskObj,
            cb: ()=>_router.Router('/')
        };
        // reducer(action ,category , title)
        _reducersDefault.default(action);
    }
    let headerTemplate = `
    <div class="tasklist">
            <h3>Add New Task</h3>
            <br/>
<div class="addtodoText">
<label class="addLabel text" for="cat">Category</label>
<select class="text" name="cate" id="category">
<option value="School Project">School Project</option>
<option value="Home Work">Home Work</option>
<option value="Office Work">Office Work</option>
</select>
</div>      
<div class="addtodoText">
<label class="addLabel text" for="task">Task To Do</label>
<input name="task" id="task" type="text" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="startDate" >Start Date</label>
<input name="startDate" id="startDate" type="date" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="startTime" >Start Time</label>
<input name="startTime" id="startTime" type="time" class="text"></input>
</div>  
<div class="addtodoText">
<label class="addLabel text" for="endDate" >End Date</label>
<input name="endDate" id="endDate" type="date" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="endTime" >End Time</label>
<input name="endTime" id="endTime" type="time" class="text"></input>
</div>
<div class="addtodoText">
<label class="addLabel text" for="completed" >Completed</label>
<input name="completed" id="completed" type="checkbox"></input>
</div> 
<div id="footer"></div>   
</div>   
       
        </div>`;
    const pageHeader = _makeElementDefault.default(headerTemplate);
    // if(props !== null)
    // {     
    //     pageHeader.querySelector('#taskDeatil').innerHTML = props.title;
    // }
    cancelButton.addEventListener('click', onCancelAdd);
    addButton.addEventListener('click', onAddTask);
    pageHeader.querySelector('#footer').append(cancelButton, addButton);
    page.append(pageHeader);
    return page;
};
exports.default = addPage;

},{"~/src/js/utils/makeElement":"8ZxEo","../../components/ui/button":"6DmRG","./../../routes/router":"f0QlQ","../../redux/store":"2rtCO","./../../redux/reducers":"8hFC2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dw60c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _edit = require("./edit");
var _editDefault = parcelHelpers.interopDefault(_edit);
exports.default = _editDefault.default;

},{"./edit":"lKrTE","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lKrTE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("~/src/js/utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _button = require("../../components/ui/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _router = require("./../../routes/router");
var _store = require("../../redux/store");
var _reducers = require("./../../redux/reducers");
var _reducersDefault = parcelHelpers.interopDefault(_reducers);
const cancelButton = _buttonDefault.default("Cancel");
const editButton = _buttonDefault.default("Update");
const editPage = function(props) {
    const page = document.createElement('div');
    function cleanUp() {
        cancelButton.removeEventListener('click', onCancelEdit);
        editButton.removeEventListener('click', onEditTask);
    }
    function onCancelEdit(e) {
        cleanUp();
        _router.Router('/');
    }
    function onEditTask(e) {
        if (props !== null) {
            var taskObj = {
                id: document.getElementById('id').value,
                category: document.getElementById('category').value,
                title: document.getElementById('task').value,
                isComplete: document.getElementById('completed').checked,
                startDate: document.getElementById('startDate').value,
                startTime: document.getElementById('startTime').value,
                endDate: document.getElementById('endDate').value,
                endTime: document.getElementById('endTime').value
            };
            _router.Router('/');
            const editTask = props;
            const index = _store.getStore().findIndex((task)=>task.id === editTask.id
            );
            const action = {
                type: "edit",
                payload: taskObj,
                cb: ()=>_router.Router('/')
            };
            _reducersDefault.default(action);
            cleanUp();
        }
    }
    let headerTemplate = `
    <div class="tasklist">
        
            <h3>Edit Task</h3>
            <br/>
           
        <div class="addToDoItem">
        <div class="addToDoItem">
        <div class="addtodoText">
           <label class="addLabel text" for="ID"> ID </label>
           <input name="ID" id="id" type="text" class="text"/>
        </div> 
         
<div class="addtodoText">
<label class="addLabel text" for="cat">Category</label>
<select class="text" name="cate" id="category">
<option value="School Project">School Project</option>
<option value="Home Work">Home Work</option>
<option value="Office Work">Office Work</option>
</select>
</div>      
<div class="addtodoText">
<label class="addLabel text" for="task">Task To Do</label>
<input name="task" id="task" type="text" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="startDate" >Start Date</label>
<input name="startDate" id="startDate" type="date" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="startTime" >Start Time</label>
<input name="startTime" id="startTime" type="time" class="text"></input>
</div>  
<div class="addtodoText">
<label class="addLabel text" for="endDate" >End Date</label>
<input name="endDate" id="endDate" type="date" class="text"></input>
</div>   
<div class="addtodoText">
<label class="addLabel text" for="endTime" >End Time</label>
<input name="endTime" id="endTime" type="time" class="text"></input>
</div>
<div class="addtodoText">
<label class="addLabel text" for="completed" >Completed</label>
<input name="completed" id="completed" type="checkbox"></input>
</div>    
</div> 
        </div>`;
    const pageHeader = _makeElementDefault.default(headerTemplate);
    if (props !== null) {
        pageHeader.querySelector('#id').value = props.id;
        pageHeader.querySelector('#category').value = props.category;
        pageHeader.querySelector('#task').value = props.title;
        pageHeader.querySelector('#startDate').value = props.startDate;
        pageHeader.querySelector('#startTime').value = props.startTime;
        pageHeader.querySelector('#endDate').value = props.endDate;
        pageHeader.querySelector('#endTime').value = props.endTime;
        pageHeader.querySelector('#completed').checked = props.isComplete;
    }
    cancelButton.addEventListener('click', onCancelEdit);
    editButton.addEventListener('click', onEditTask);
    pageHeader.querySelector('div').append(cancelButton, editButton);
    page.append(pageHeader);
    return page;
};
exports.default = editPage;

},{"~/src/js/utils/makeElement":"8ZxEo","../../components/ui/button":"6DmRG","./../../routes/router":"f0QlQ","../../redux/store":"2rtCO","./../../redux/reducers":"8hFC2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aR6pi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _todolist = require("../../components/cards/todolist");
var _todolistDefault = parcelHelpers.interopDefault(_todolist);
var _todoitem = require("../../components/cards/todoitem");
var _todoitemDefault = parcelHelpers.interopDefault(_todoitem);
var _store = require("../../redux/store");
var _router = require("../../routes/router");
let createPage = true;
const employeeDirectory = function() {
    const page = document.createElement('div');
    const employeeContainer = _todolistDefault.default();
    function cleanUp() {
        const employees = employeeContainer.querySelectorAll('aside');
        employees.forEach((employee)=>{
            employee.removeEventListener('click', onDeleteEmployee);
        });
    }
    // EVENT HANDLER FUNCTION FOR REMOVING AN EMPLOYEE
    function onDeleteEmployee(e) {
        const employeeId = e.currentTarget.dataset.key;
        const employee = _store.getStore().filter((employee)=>employee.id === employeeId
        );
        cleanUp();
        _router.Router('/delete', employee[0]);
    }
    function render() {
        const employees = _store.getStore();
        const div = employeeContainer.querySelector('#tasks');
        // create li from the store data
        const employeeElements = _store.getStore().map((emp)=>_todoitemDefault.default(emp)
        );
        employeeElements.forEach((element)=>{
            element.querySelector('#delete').addEventListener('click', onDeleteEmployee);
            div.append(element);
        });
        page.append(employeeContainer);
    }
    render();
    return page;
};
exports.default = employeeDirectory;

},{"../../utils/makeElement":"8ZxEo","../../components/cards/todolist":"7vNfA","../../components/cards/todoitem":"bWpH0","../../redux/store":"2rtCO","../../routes/router":"f0QlQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3FOuT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _link = require("./../components/ui/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
const notFound = function() {
    const page = document.createElement('div');
    let headerTemplate = `
        <header class="page-not-found center-in-page">
        <h2>Oops !!!</h2>
        <h2><span>404</span> <span>page not found</span></h2>
        </header>
    `;
    const pageHeader = _makeElementDefault.default(headerTemplate);
    const homeLink = _linkDefault.default("Get me back to Home", "/");
    pageHeader.append(homeLink);
    page.append(pageHeader);
    return page;
};
exports.default = notFound;

},{"../utils/makeElement":"8ZxEo","./../components/ui/link":"hFEwy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8J3wM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dataFetcher", ()=>dataFetcher
);
const dataFetcher = async function(url) {
    // if(url === undefined){
    //     throw new Error("Fuck OFf")
    // }
    const response = await fetch(url);
    const payload = await response.json();
    return payload;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aLkS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// export v4 renamed uuidv4
var _uuid = require("uuid");
const keyGenerator = function(data) {
    const keyedData = data.map((item)=>{
        item.id = _uuid.v4().substr(0, 8);
        return item;
    });
    return keyedData;
};
exports.default = keyGenerator;

},{"uuid":"aOmRP","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aOmRP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>_v1JsDefault.default
);
parcelHelpers.export(exports, "v3", ()=>_v3JsDefault.default
);
parcelHelpers.export(exports, "v4", ()=>_v4JsDefault.default
);
parcelHelpers.export(exports, "v5", ()=>_v5JsDefault.default
);
parcelHelpers.export(exports, "NIL", ()=>_nilJsDefault.default
);
parcelHelpers.export(exports, "version", ()=>_versionJsDefault.default
);
parcelHelpers.export(exports, "validate", ()=>_validateJsDefault.default
);
parcelHelpers.export(exports, "stringify", ()=>_stringifyJsDefault.default
);
parcelHelpers.export(exports, "parse", ()=>_parseJsDefault.default
);
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"hrXPJ","./v3.js":"37QHr","./v4.js":"eXRUD","./v5.js":"hOJNx","./nil.js":"9jL43","./version.js":"hxY0M","./validate.js":"gyXYN","./stringify.js":"cg61U","./parse.js":"jKRnJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hrXPJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq; // Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || new Array(16);
    options = options || {
    };
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || _rngJsDefault.default)();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 1,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 16383;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    var tl = ((msecs & 268435455) * 10000 + nsecs) % 4294967296;
    b[i++] = tl >>> 24 & 255;
    b[i++] = tl >>> 16 & 255;
    b[i++] = tl >>> 8 & 255;
    b[i++] = tl & 255; // `time_mid`
    var tmh = msecs / 4294967296 * 10000 & 268435455;
    b[i++] = tmh >>> 8 & 255;
    b[i++] = tmh & 255; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 15 | 16; // include version
    b[i++] = tmh >>> 16 & 255; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 128; // `clock_seq_low`
    b[i++] = clockseq & 255; // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || _stringifyJsDefault.default(b);
}
exports.default = v1;

},{"./rng.js":"pABlm","./stringify.js":"cg61U","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"pABlm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cg61U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex.push((i + 256).toString(16).substr(1));
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!_validateJsDefault.default(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"gyXYN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gyXYN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && _regexJsDefault.default.test(uuid);
}
exports.default = validate;

},{"./regex.js":"d0sd7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d0sd7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"37QHr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
var v3 = _v35JsDefault.default('v3', 48, _md5JsDefault.default);
exports.default = v3;

},{"./v35.js":"28OqM","./md5.js":"cQGFK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"28OqM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS
);
parcelHelpers.export(exports, "URL", ()=>URL
);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    var bytes = [];
    for(var i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.default = function(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') value = stringToBytes(value);
        if (typeof namespace === 'string') namespace = _parseJsDefault.default(namespace);
        if (namespace.length !== 16) throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        var bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
            offset = offset || 0;
            for(var i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return _stringifyJsDefault.default(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {
    } // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
};

},{"./stringify.js":"cg61U","./parse.js":"jKRnJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jKRnJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!_validateJsDefault.default(uuid)) throw TypeError('Invalid UUID');
    var v;
    var arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 255;
    arr[2] = v >>> 8 & 255;
    arr[3] = v & 255; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v / 4294967296 & 255;
    arr[12] = v >>> 24 & 255;
    arr[13] = v >>> 16 & 255;
    arr[14] = v >>> 8 & 255;
    arr[15] = v & 255;
    return arr;
}
exports.default = parse;

},{"./validate.js":"gyXYN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cQGFK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ function md5(bytes) {
    if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(var i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    var output = [];
    var length32 = input.length * 32;
    var hexTab = '0123456789abcdef';
    for(var i = 0; i < length32; i += 8){
        var x = input[i >> 5] >>> i % 32 & 255;
        var hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 128 << len % 32;
    x[getOutputLength(len) - 1] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for(var i = 0; i < x.length; i += 16){
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    var length8 = input.length * 8;
    var output = new Uint32Array(getOutputLength(length8));
    for(var i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 255) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    var lsw = (x & 65535) + (y & 65535);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eXRUD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
function v4(options, buf, offset) {
    options = options || {
    };
    var rnds = options.random || (options.rng || _rngJsDefault.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return _stringifyJsDefault.default(rnds);
}
exports.default = v4;

},{"./rng.js":"pABlm","./stringify.js":"cg61U","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hOJNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
var v5 = _v35JsDefault.default('v5', 80, _sha1JsDefault.default);
exports.default = v5;

},{"./v35.js":"28OqM","./sha1.js":"efl6y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"efl6y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    var K = [
        1518500249,
        1859775393,
        2400959708,
        3395469782
    ];
    var H = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
    ];
    if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(var i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(128);
    var l = bytes.length / 4 + 2;
    var N = Math.ceil(l / 16);
    var M = new Array(N);
    for(var _i = 0; _i < N; ++_i){
        var arr = new Uint32Array(16);
        for(var j = 0; j < 16; ++j)arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
        M[_i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
    for(var _i2 = 0; _i2 < N; ++_i2){
        var W = new Uint32Array(80);
        for(var t = 0; t < 16; ++t)W[t] = M[_i2][t];
        for(var _t = 16; _t < 80; ++_t)W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        for(var _t2 = 0; _t2 < 80; ++_t2){
            var s = Math.floor(_t2 / 20);
            var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 255,
        H[0] >> 16 & 255,
        H[0] >> 8 & 255,
        H[0] & 255,
        H[1] >> 24 & 255,
        H[1] >> 16 & 255,
        H[1] >> 8 & 255,
        H[1] & 255,
        H[2] >> 24 & 255,
        H[2] >> 16 & 255,
        H[2] >> 8 & 255,
        H[2] & 255,
        H[3] >> 24 & 255,
        H[3] >> 16 & 255,
        H[3] >> 8 & 255,
        H[3] & 255,
        H[4] >> 24 & 255,
        H[4] >> 16 & 255,
        H[4] >> 8 & 255,
        H[4] & 255
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9jL43":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '00000000-0000-0000-0000-000000000000';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hxY0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!_validateJsDefault.default(uuid)) throw TypeError('Invalid UUID');
    return parseInt(uuid.substr(14, 1), 16);
}
exports.default = version;

},{"./validate.js":"gyXYN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["fSbD7","bzG5g"], "bzG5g", "parcelRequire683a")

//# sourceMappingURL=index.c8a01236.js.map
