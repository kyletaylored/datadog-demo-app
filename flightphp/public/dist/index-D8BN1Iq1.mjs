var Ja = { env: { NODE_ENV: "production" } };
function Rs(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var pg = { exports: {} }, hg = { exports: {} }, $c = { exports: {} };
$c.exports;
var rR;
function FU() {
  return rR || (rR = 1, function(n, a) {
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var o = "18.3.1", u = Symbol.for("react.element"), l = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), y = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), Y = Symbol.iterator, H = "@@iterator";
      function Q(S) {
        if (S === null || typeof S != "object")
          return null;
        var O = Y && S[Y] || S[H];
        return typeof O == "function" ? O : null;
      }
      var V = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ae = {
        transition: null
      }, oe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, de = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Z = {}, Ie = null;
      function ft(S) {
        Ie = S;
      }
      Z.setExtraStackFrame = function(S) {
        Ie = S;
      }, Z.getCurrentStack = null, Z.getStackAddendum = function() {
        var S = "";
        Ie && (S += Ie);
        var O = Z.getCurrentStack;
        return O && (S += O() || ""), S;
      };
      var Lt = !1, Ot = !1, rt = !1, we = !1, Ze = !1, ht = {
        ReactCurrentDispatcher: V,
        ReactCurrentBatchConfig: ae,
        ReactCurrentOwner: de
      };
      ht.ReactDebugCurrentFrame = Z, ht.ReactCurrentActQueue = oe;
      function Ge(S) {
        {
          for (var O = arguments.length, B = new Array(O > 1 ? O - 1 : 0), q = 1; q < O; q++)
            B[q - 1] = arguments[q];
          Fe("warn", S, B);
        }
      }
      function Oe(S) {
        {
          for (var O = arguments.length, B = new Array(O > 1 ? O - 1 : 0), q = 1; q < O; q++)
            B[q - 1] = arguments[q];
          Fe("error", S, B);
        }
      }
      function Fe(S, O, B) {
        {
          var q = ht.ReactDebugCurrentFrame, le = q.getStackAddendum();
          le !== "" && (O += "%s", B = B.concat([le]));
          var Pe = B.map(function(xe) {
            return String(xe);
          });
          Pe.unshift("Warning: " + O), Function.prototype.apply.call(console[S], console, Pe);
        }
      }
      var qt = {};
      function X(S, O) {
        {
          var B = S.constructor, q = B && (B.displayName || B.name) || "ReactClass", le = q + "." + O;
          if (qt[le])
            return;
          Oe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", O, q), qt[le] = !0;
        }
      }
      var ie = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(S, O, B) {
          X(S, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(S, O, B, q) {
          X(S, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(S, O, B, q) {
          X(S, "setState");
        }
      }, se = Object.assign, Ae = {};
      Object.freeze(Ae);
      function Se(S, O, B) {
        this.props = S, this.context = O, this.refs = Ae, this.updater = B || ie;
      }
      Se.prototype.isReactComponent = {}, Se.prototype.setState = function(S, O) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, O, "setState");
      }, Se.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Ue = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Be = function(S, O) {
          Object.defineProperty(Se.prototype, S, {
            get: function() {
              Ge("%s(...) is deprecated in plain JavaScript React classes. %s", O[0], O[1]);
            }
          });
        };
        for (var ke in Ue)
          Ue.hasOwnProperty(ke) && Be(ke, Ue[ke]);
      }
      function $e() {
      }
      $e.prototype = Se.prototype;
      function ze(S, O, B) {
        this.props = S, this.context = O, this.refs = Ae, this.updater = B || ie;
      }
      var Ne = ze.prototype = new $e();
      Ne.constructor = ze, se(Ne, Se.prototype), Ne.isPureReactComponent = !0;
      function vt() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var ue = Array.isArray;
      function xt(S) {
        return ue(S);
      }
      function Tt(S) {
        {
          var O = typeof Symbol == "function" && Symbol.toStringTag, B = O && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return B;
        }
      }
      function et(S) {
        try {
          return cn(S), !1;
        } catch {
          return !0;
        }
      }
      function cn(S) {
        return "" + S;
      }
      function Nn(S) {
        if (et(S))
          return Oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tt(S)), cn(S);
      }
      function Kr(S, O, B) {
        var q = S.displayName;
        if (q)
          return q;
        var le = O.displayName || O.name || "";
        return le !== "" ? B + "(" + le + ")" : B;
      }
      function Hn(S) {
        return S.displayName || "Context";
      }
      function Vn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case f:
            return "Fragment";
          case l:
            return "Portal";
          case m:
            return "Profiler";
          case d:
            return "StrictMode";
          case R:
            return "Suspense";
          case T:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case y:
              var O = S;
              return Hn(O) + ".Consumer";
            case g:
              var B = S;
              return Hn(B._context) + ".Provider";
            case _:
              return Kr(S, S.render, "ForwardRef");
            case w:
              var q = S.displayName || null;
              return q !== null ? q : Vn(S.type) || "Memo";
            case D: {
              var le = S, Pe = le._payload, xe = le._init;
              try {
                return Vn(xe(Pe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Mn = Object.prototype.hasOwnProperty, bn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, In, Xr, dn;
      dn = {};
      function qn(S) {
        if (Mn.call(S, "ref")) {
          var O = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function Ur(S) {
        if (Mn.call(S, "key")) {
          var O = Object.getOwnPropertyDescriptor(S, "key").get;
          if (O && O.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function Qr(S, O) {
        var B = function() {
          In || (In = !0, Oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        B.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: B,
          configurable: !0
        });
      }
      function Jr(S, O) {
        var B = function() {
          Xr || (Xr = !0, Oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        B.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: B,
          configurable: !0
        });
      }
      function pe(S) {
        if (typeof S.ref == "string" && de.current && S.__self && de.current.stateNode !== S.__self) {
          var O = Vn(de.current.type);
          dn[O] || (Oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O, S.ref), dn[O] = !0);
        }
      }
      var Le = function(S, O, B, q, le, Pe, xe) {
        var Ke = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: u,
          // Built-in properties that belong on the element
          type: S,
          key: O,
          ref: B,
          props: xe,
          // Record the component responsible for creating this element.
          _owner: Pe
        };
        return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ke, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(Ke, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: le
        }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
      };
      function at(S, O, B) {
        var q, le = {}, Pe = null, xe = null, Ke = null, bt = null;
        if (O != null) {
          qn(O) && (xe = O.ref, pe(O)), Ur(O) && (Nn(O.key), Pe = "" + O.key), Ke = O.__self === void 0 ? null : O.__self, bt = O.__source === void 0 ? null : O.__source;
          for (q in O)
            Mn.call(O, q) && !bn.hasOwnProperty(q) && (le[q] = O[q]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          le.children = B;
        else if (Ft > 1) {
          for (var nn = Array(Ft), rn = 0; rn < Ft; rn++)
            nn[rn] = arguments[rn + 2];
          Object.freeze && Object.freeze(nn), le.children = nn;
        }
        if (S && S.defaultProps) {
          var mt = S.defaultProps;
          for (q in mt)
            le[q] === void 0 && (le[q] = mt[q]);
        }
        if (Pe || xe) {
          var un = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Pe && Qr(le, un), xe && Jr(le, un);
        }
        return Le(S, Pe, xe, Ke, bt, de.current, le);
      }
      function tt(S, O) {
        var B = Le(S.type, O, S.ref, S._self, S._source, S._owner, S.props);
        return B;
      }
      function Yt(S, O, B) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var q, le = se({}, S.props), Pe = S.key, xe = S.ref, Ke = S._self, bt = S._source, Ft = S._owner;
        if (O != null) {
          qn(O) && (xe = O.ref, Ft = de.current), Ur(O) && (Nn(O.key), Pe = "" + O.key);
          var nn;
          S.type && S.type.defaultProps && (nn = S.type.defaultProps);
          for (q in O)
            Mn.call(O, q) && !bn.hasOwnProperty(q) && (O[q] === void 0 && nn !== void 0 ? le[q] = nn[q] : le[q] = O[q]);
        }
        var rn = arguments.length - 2;
        if (rn === 1)
          le.children = B;
        else if (rn > 1) {
          for (var mt = Array(rn), un = 0; un < rn; un++)
            mt[un] = arguments[un + 2];
          le.children = mt;
        }
        return Le(S.type, Pe, xe, Ke, bt, Ft, le);
      }
      function Qt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === u;
      }
      var Jt = ".", Un = ":";
      function Zt(S) {
        var O = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, q = S.replace(O, function(le) {
          return B[le];
        });
        return "$" + q;
      }
      var Gt = !1, Wt = /\/+/g;
      function Na(S) {
        return S.replace(Wt, "$&/");
      }
      function ar(S, O) {
        return typeof S == "object" && S !== null && S.key != null ? (Nn(S.key), Zt("" + S.key)) : O.toString(36);
      }
      function hr(S, O, B, q, le) {
        var Pe = typeof S;
        (Pe === "undefined" || Pe === "boolean") && (S = null);
        var xe = !1;
        if (S === null)
          xe = !0;
        else
          switch (Pe) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case u:
                case l:
                  xe = !0;
              }
          }
        if (xe) {
          var Ke = S, bt = le(Ke), Ft = q === "" ? Jt + ar(Ke, 0) : q;
          if (xt(bt)) {
            var nn = "";
            Ft != null && (nn = Na(Ft) + "/"), hr(bt, O, nn, "", function(fh) {
              return fh;
            });
          } else bt != null && (Qt(bt) && (bt.key && (!Ke || Ke.key !== bt.key) && Nn(bt.key), bt = tt(
            bt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (bt.key && (!Ke || Ke.key !== bt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Na("" + bt.key) + "/"
            ) : "") + Ft
          )), O.push(bt));
          return 1;
        }
        var rn, mt, un = 0, En = q === "" ? Jt : q + Un;
        if (xt(S))
          for (var jo = 0; jo < S.length; jo++)
            rn = S[jo], mt = En + ar(rn, jo), un += hr(rn, O, B, mt, le);
        else {
          var al = Q(S);
          if (typeof al == "function") {
            var li = S;
            al === li.entries && (Gt || Ge("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var il = al.call(li), ol, ch = 0; !(ol = il.next()).done; )
              rn = ol.value, mt = En + ar(rn, ch++), un += hr(rn, O, B, mt, le);
          } else if (Pe === "object") {
            var pf = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (pf === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : pf) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return un;
      }
      function Ma(S, O, B) {
        if (S == null)
          return S;
        var q = [], le = 0;
        return hr(S, q, "", "", function(Pe) {
          return O.call(B, Pe, le++);
        }), q;
      }
      function zi(S) {
        var O = 0;
        return Ma(S, function() {
          O++;
        }), O;
      }
      function Pi(S, O, B) {
        Ma(S, function() {
          O.apply(this, arguments);
        }, B);
      }
      function ii(S) {
        return Ma(S, function(O) {
          return O;
        }) || [];
      }
      function Bi(S) {
        if (!Qt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function oi(S) {
        var O = {
          $$typeof: y,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        O.Provider = {
          $$typeof: g,
          _context: O
        };
        var B = !1, q = !1, le = !1;
        {
          var Pe = {
            $$typeof: y,
            _context: O
          };
          Object.defineProperties(Pe, {
            Provider: {
              get: function() {
                return q || (q = !0, Oe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), O.Provider;
              },
              set: function(xe) {
                O.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return O._currentValue;
              },
              set: function(xe) {
                O._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return O._currentValue2;
              },
              set: function(xe) {
                O._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return O._threadCount;
              },
              set: function(xe) {
                O._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, Oe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), O.Consumer;
              }
            },
            displayName: {
              get: function() {
                return O.displayName;
              },
              set: function(xe) {
                le || (Ge("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), le = !0);
              }
            }
          }), O.Consumer = Pe;
        }
        return O._currentRenderer = null, O._currentRenderer2 = null, O;
      }
      var jr = -1, vr = 0, Yn = 1, Fr = 2;
      function Zr(S) {
        if (S._status === jr) {
          var O = S._result, B = O();
          if (B.then(function(Pe) {
            if (S._status === vr || S._status === jr) {
              var xe = S;
              xe._status = Yn, xe._result = Pe;
            }
          }, function(Pe) {
            if (S._status === vr || S._status === jr) {
              var xe = S;
              xe._status = Fr, xe._result = Pe;
            }
          }), S._status === jr) {
            var q = S;
            q._status = vr, q._result = B;
          }
        }
        if (S._status === Yn) {
          var le = S._result;
          return le === void 0 && Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, le), "default" in le || Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, le), le.default;
        } else
          throw S._result;
      }
      function zr(S) {
        var O = {
          // We use these fields to store the result.
          _status: jr,
          _result: S
        }, B = {
          $$typeof: D,
          _payload: O,
          _init: Zr
        };
        {
          var q, le;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Pe) {
                Oe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Pe, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return le;
              },
              set: function(Pe) {
                Oe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), le = Pe, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function jn(S) {
        S != null && S.$$typeof === w ? Oe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Oe("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Oe("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Oe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var O = {
          $$typeof: _,
          render: S
        };
        {
          var B;
          Object.defineProperty(O, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(q) {
              B = q, !S.name && !S.displayName && (S.displayName = q);
            }
          });
        }
        return O;
      }
      var A;
      A = Symbol.for("react.module.reference");
      function J(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === f || S === m || Ze || S === d || S === R || S === T || we || S === P || Lt || Ot || rt || typeof S == "object" && S !== null && (S.$$typeof === D || S.$$typeof === w || S.$$typeof === g || S.$$typeof === y || S.$$typeof === _ || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === A || S.getModuleId !== void 0));
      }
      function me(S, O) {
        J(S) || Oe("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var B = {
          $$typeof: w,
          type: S,
          compare: O === void 0 ? null : O
        };
        {
          var q;
          Object.defineProperty(B, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(le) {
              q = le, !S.name && !S.displayName && (S.displayName = le);
            }
          });
        }
        return B;
      }
      function Te() {
        var S = V.current;
        return S === null && Oe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function dt(S) {
        var O = Te();
        if (S._context !== void 0) {
          var B = S._context;
          B.Consumer === S ? Oe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === S && Oe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return O.useContext(S);
      }
      function We(S) {
        var O = Te();
        return O.useState(S);
      }
      function lt(S, O, B) {
        var q = Te();
        return q.useReducer(S, O, B);
      }
      function it(S) {
        var O = Te();
        return O.useRef(S);
      }
      function pn(S, O) {
        var B = Te();
        return B.useEffect(S, O);
      }
      function Nt(S, O) {
        var B = Te();
        return B.useInsertionEffect(S, O);
      }
      function en(S, O) {
        var B = Te();
        return B.useLayoutEffect(S, O);
      }
      function Sn(S, O) {
        var B = Te();
        return B.useCallback(S, O);
      }
      function Pr(S, O) {
        var B = Te();
        return B.useMemo(S, O);
      }
      function Tr(S, O, B) {
        var q = Te();
        return q.useImperativeHandle(S, O, B);
      }
      function tn(S, O) {
        {
          var B = Te();
          return B.useDebugValue(S, O);
        }
      }
      function nt() {
        var S = Te();
        return S.useTransition();
      }
      function va(S) {
        var O = Te();
        return O.useDeferredValue(S);
      }
      function $i() {
        var S = Te();
        return S.useId();
      }
      function ks(S, O, B) {
        var q = Te();
        return q.useSyncExternalStore(S, O, B);
      }
      var ma = 0, Hi, Ao, Vi, Do, ko, Ls, Lo;
      function Ia() {
      }
      Ia.__reactDisabledLog = !0;
      function No() {
        {
          if (ma === 0) {
            Hi = console.log, Ao = console.info, Vi = console.warn, Do = console.error, ko = console.group, Ls = console.groupCollapsed, Lo = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: Ia,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          ma++;
        }
      }
      function ea() {
        {
          if (ma--, ma === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: se({}, S, {
                value: Hi
              }),
              info: se({}, S, {
                value: Ao
              }),
              warn: se({}, S, {
                value: Vi
              }),
              error: se({}, S, {
                value: Do
              }),
              group: se({}, S, {
                value: ko
              }),
              groupCollapsed: se({}, S, {
                value: Ls
              }),
              groupEnd: se({}, S, {
                value: Lo
              })
            });
          }
          ma < 0 && Oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var si = ht.ReactCurrentDispatcher, Ua;
      function qi(S, O, B) {
        {
          if (Ua === void 0)
            try {
              throw Error();
            } catch (le) {
              var q = le.stack.trim().match(/\n( *(at )?)/);
              Ua = q && q[1] || "";
            }
          return `
` + Ua + S;
        }
      }
      var ja = !1, ta;
      {
        var Mo = typeof WeakMap == "function" ? WeakMap : Map;
        ta = new Mo();
      }
      function Yi(S, O) {
        if (!S || ja)
          return "";
        {
          var B = ta.get(S);
          if (B !== void 0)
            return B;
        }
        var q;
        ja = !0;
        var le = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Pe;
        Pe = si.current, si.current = null, No();
        try {
          if (O) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (En) {
                q = En;
              }
              Reflect.construct(S, [], xe);
            } else {
              try {
                xe.call();
              } catch (En) {
                q = En;
              }
              S.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (En) {
              q = En;
            }
            S();
          }
        } catch (En) {
          if (En && q && typeof En.stack == "string") {
            for (var Ke = En.stack.split(`
`), bt = q.stack.split(`
`), Ft = Ke.length - 1, nn = bt.length - 1; Ft >= 1 && nn >= 0 && Ke[Ft] !== bt[nn]; )
              nn--;
            for (; Ft >= 1 && nn >= 0; Ft--, nn--)
              if (Ke[Ft] !== bt[nn]) {
                if (Ft !== 1 || nn !== 1)
                  do
                    if (Ft--, nn--, nn < 0 || Ke[Ft] !== bt[nn]) {
                      var rn = `
` + Ke[Ft].replace(" at new ", " at ");
                      return S.displayName && rn.includes("<anonymous>") && (rn = rn.replace("<anonymous>", S.displayName)), typeof S == "function" && ta.set(S, rn), rn;
                    }
                  while (Ft >= 1 && nn >= 0);
                break;
              }
          }
        } finally {
          ja = !1, si.current = Pe, ea(), Error.prepareStackTrace = le;
        }
        var mt = S ? S.displayName || S.name : "", un = mt ? qi(mt) : "";
        return typeof S == "function" && ta.set(S, un), un;
      }
      function Io(S, O, B) {
        return Yi(S, !1);
      }
      function Ns(S) {
        var O = S.prototype;
        return !!(O && O.isReactComponent);
      }
      function Cr(S, O, B) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return Yi(S, Ns(S));
        if (typeof S == "string")
          return qi(S);
        switch (S) {
          case R:
            return qi("Suspense");
          case T:
            return qi("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case _:
              return Io(S.render);
            case w:
              return Cr(S.type, O, B);
            case D: {
              var q = S, le = q._payload, Pe = q._init;
              try {
                return Cr(Pe(le), O, B);
              } catch {
              }
            }
          }
        return "";
      }
      var Ms = {}, Gi = ht.ReactDebugCurrentFrame;
      function Ct(S) {
        if (S) {
          var O = S._owner, B = Cr(S.type, S._source, O ? O.type : null);
          Gi.setExtraStackFrame(B);
        } else
          Gi.setExtraStackFrame(null);
      }
      function tl(S, O, B, q, le) {
        {
          var Pe = Function.call.bind(Mn);
          for (var xe in S)
            if (Pe(S, xe)) {
              var Ke = void 0;
              try {
                if (typeof S[xe] != "function") {
                  var bt = Error((q || "React class") + ": " + B + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw bt.name = "Invariant Violation", bt;
                }
                Ke = S[xe](O, xe, q, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Ke = Ft;
              }
              Ke && !(Ke instanceof Error) && (Ct(le), Oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", B, xe, typeof Ke), Ct(null)), Ke instanceof Error && !(Ke.message in Ms) && (Ms[Ke.message] = !0, Ct(le), Oe("Failed %s type: %s", B, Ke.message), Ct(null));
            }
        }
      }
      function h(S) {
        if (S) {
          var O = S._owner, B = Cr(S.type, S._source, O ? O.type : null);
          ft(B);
        } else
          ft(null);
      }
      var E;
      E = !1;
      function k() {
        if (de.current) {
          var S = Vn(de.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function I(S) {
        if (S !== void 0) {
          var O = S.fileName.replace(/^.*[\\\/]/, ""), B = S.lineNumber;
          return `

Check your code at ` + O + ":" + B + ".";
        }
        return "";
      }
      function ne(S) {
        return S != null ? I(S.__source) : "";
      }
      var ee = {};
      function he(S) {
        var O = k();
        if (!O) {
          var B = typeof S == "string" ? S : S.displayName || S.name;
          B && (O = `

Check the top-level render call using <` + B + ">.");
        }
        return O;
      }
      function fe(S, O) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var B = he(O);
          if (!ee[B]) {
            ee[B] = !0;
            var q = "";
            S && S._owner && S._owner !== de.current && (q = " It was passed a child from " + Vn(S._owner.type) + "."), h(S), Oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, q), h(null);
          }
        }
      }
      function ce(S, O) {
        if (typeof S == "object") {
          if (xt(S))
            for (var B = 0; B < S.length; B++) {
              var q = S[B];
              Qt(q) && fe(q, O);
            }
          else if (Qt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var le = Q(S);
            if (typeof le == "function" && le !== S.entries)
              for (var Pe = le.call(S), xe; !(xe = Pe.next()).done; )
                Qt(xe.value) && fe(xe.value, O);
          }
        }
      }
      function ct(S) {
        {
          var O = S.type;
          if (O == null || typeof O == "string")
            return;
          var B;
          if (typeof O == "function")
            B = O.propTypes;
          else if (typeof O == "object" && (O.$$typeof === _ || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          O.$$typeof === w))
            B = O.propTypes;
          else
            return;
          if (B) {
            var q = Vn(O);
            tl(B, S.props, "prop", q, S);
          } else if (O.PropTypes !== void 0 && !E) {
            E = !0;
            var le = Vn(O);
            Oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
          }
          typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && Oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function wt(S) {
        {
          for (var O = Object.keys(S.props), B = 0; B < O.length; B++) {
            var q = O[B];
            if (q !== "children" && q !== "key") {
              h(S), Oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), h(null);
              break;
            }
          }
          S.ref !== null && (h(S), Oe("Invalid attribute `ref` supplied to `React.Fragment`."), h(null));
        }
      }
      function gt(S, O, B) {
        var q = J(S);
        if (!q) {
          var le = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = ne(O);
          Pe ? le += Pe : le += k();
          var xe;
          S === null ? xe = "null" : xt(S) ? xe = "array" : S !== void 0 && S.$$typeof === u ? (xe = "<" + (Vn(S.type) || "Unknown") + " />", le = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof S, Oe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, le);
        }
        var Ke = at.apply(this, arguments);
        if (Ke == null)
          return Ke;
        if (q)
          for (var bt = 2; bt < arguments.length; bt++)
            ce(arguments[bt], S);
        return S === f ? wt(Ke) : ct(Ke), Ke;
      }
      var Rt = !1;
      function ya(S) {
        var O = gt.bind(null, S);
        return O.type = S, Rt || (Rt = !0, Ge("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(O, "type", {
          enumerable: !1,
          get: function() {
            return Ge("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), O;
      }
      function Fa(S, O, B) {
        for (var q = Yt.apply(this, arguments), le = 2; le < arguments.length; le++)
          ce(arguments[le], q.type);
        return ct(q), q;
      }
      function Rr(S, O) {
        var B = ae.transition;
        ae.transition = {};
        var q = ae.transition;
        ae.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (ae.transition = B, B === null && q._updatedFibers) {
            var le = q._updatedFibers.size;
            le > 10 && Ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var Wi = !1, Is = null;
      function lh(S) {
        if (Is === null)
          try {
            var O = ("require" + Math.random()).slice(0, 7), B = n && n[O];
            Is = B.call(n, "timers").setImmediate;
          } catch {
            Is = function(le) {
              Wi === !1 && (Wi = !0, typeof MessageChannel > "u" && Oe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Pe = new MessageChannel();
              Pe.port1.onmessage = le, Pe.port2.postMessage(void 0);
            };
          }
        return Is(S);
      }
      var Ki = 0, Uo = !1;
      function nl(S) {
        {
          var O = Ki;
          Ki++, oe.current === null && (oe.current = []);
          var B = oe.isBatchingLegacy, q;
          try {
            if (oe.isBatchingLegacy = !0, q = S(), !B && oe.didScheduleLegacyUpdate) {
              var le = oe.current;
              le !== null && (oe.didScheduleLegacyUpdate = !1, Fs(le));
            }
          } catch (mt) {
            throw ui(O), mt;
          } finally {
            oe.isBatchingLegacy = B;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Pe = q, xe = !1, Ke = {
              then: function(mt, un) {
                xe = !0, Pe.then(function(En) {
                  ui(O), Ki === 0 ? Us(En, mt, un) : mt(En);
                }, function(En) {
                  ui(O), un(En);
                });
              }
            };
            return !Uo && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (Uo = !0, Oe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ke;
          } else {
            var bt = q;
            if (ui(O), Ki === 0) {
              var Ft = oe.current;
              Ft !== null && (Fs(Ft), oe.current = null);
              var nn = {
                then: function(mt, un) {
                  oe.current === null ? (oe.current = [], Us(bt, mt, un)) : mt(bt);
                }
              };
              return nn;
            } else {
              var rn = {
                then: function(mt, un) {
                  mt(bt);
                }
              };
              return rn;
            }
          }
        }
      }
      function ui(S) {
        S !== Ki - 1 && Oe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ki = S;
      }
      function Us(S, O, B) {
        {
          var q = oe.current;
          if (q !== null)
            try {
              Fs(q), lh(function() {
                q.length === 0 ? (oe.current = null, O(S)) : Us(S, O, B);
              });
            } catch (le) {
              B(le);
            }
          else
            O(S);
        }
      }
      var js = !1;
      function Fs(S) {
        if (!js) {
          js = !0;
          var O = 0;
          try {
            for (; O < S.length; O++) {
              var B = S[O];
              do
                B = B(!0);
              while (B !== null);
            }
            S.length = 0;
          } catch (q) {
            throw S = S.slice(O + 1), q;
          } finally {
            js = !1;
          }
        }
      }
      var cf = gt, ff = Fa, rl = ya, df = {
        map: Ma,
        forEach: Pi,
        count: zi,
        toArray: ii,
        only: Bi
      };
      a.Children = df, a.Component = Se, a.Fragment = f, a.Profiler = m, a.PureComponent = ze, a.StrictMode = d, a.Suspense = R, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, a.act = nl, a.cloneElement = ff, a.createContext = oi, a.createElement = cf, a.createFactory = rl, a.createRef = vt, a.forwardRef = jn, a.isValidElement = Qt, a.lazy = zr, a.memo = me, a.startTransition = Rr, a.unstable_act = nl, a.useCallback = Sn, a.useContext = dt, a.useDebugValue = tn, a.useDeferredValue = va, a.useEffect = pn, a.useId = $i, a.useImperativeHandle = Tr, a.useInsertionEffect = Nt, a.useLayoutEffect = en, a.useMemo = Pr, a.useReducer = lt, a.useRef = it, a.useState = We, a.useSyncExternalStore = ks, a.useTransition = nt, a.version = o, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  }($c, $c.exports)), $c.exports;
}
var aR;
function cb() {
  return aR || (aR = 1, hg.exports = FU()), hg.exports;
}
var Mc = {}, iR;
function zU() {
  if (iR) return Mc;
  iR = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    var n = cb(), a = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), D = Symbol.iterator, P = "@@iterator";
    function Y(A) {
      if (A === null || typeof A != "object")
        return null;
      var J = D && A[D] || A[P];
      return typeof J == "function" ? J : null;
    }
    var H = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Q(A) {
      {
        for (var J = arguments.length, me = new Array(J > 1 ? J - 1 : 0), Te = 1; Te < J; Te++)
          me[Te - 1] = arguments[Te];
        V("error", A, me);
      }
    }
    function V(A, J, me) {
      {
        var Te = H.ReactDebugCurrentFrame, dt = Te.getStackAddendum();
        dt !== "" && (J += "%s", me = me.concat([dt]));
        var We = me.map(function(lt) {
          return String(lt);
        });
        We.unshift("Warning: " + J), Function.prototype.apply.call(console[A], console, We);
      }
    }
    var ae = !1, oe = !1, de = !1, Z = !1, Ie = !1, ft;
    ft = Symbol.for("react.module.reference");
    function Lt(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === u || A === f || Ie || A === l || A === y || A === _ || Z || A === w || ae || oe || de || typeof A == "object" && A !== null && (A.$$typeof === T || A.$$typeof === R || A.$$typeof === d || A.$$typeof === m || A.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === ft || A.getModuleId !== void 0));
    }
    function Ot(A, J, me) {
      var Te = A.displayName;
      if (Te)
        return Te;
      var dt = J.displayName || J.name || "";
      return dt !== "" ? me + "(" + dt + ")" : me;
    }
    function rt(A) {
      return A.displayName || "Context";
    }
    function we(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && Q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case f:
          return "Profiler";
        case l:
          return "StrictMode";
        case y:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case m:
            var J = A;
            return rt(J) + ".Consumer";
          case d:
            var me = A;
            return rt(me._context) + ".Provider";
          case g:
            return Ot(A, A.render, "ForwardRef");
          case R:
            var Te = A.displayName || null;
            return Te !== null ? Te : we(A.type) || "Memo";
          case T: {
            var dt = A, We = dt._payload, lt = dt._init;
            try {
              return we(lt(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, ht = 0, Ge, Oe, Fe, qt, X, ie, se;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function Se() {
      {
        if (ht === 0) {
          Ge = console.log, Oe = console.info, Fe = console.warn, qt = console.error, X = console.group, ie = console.groupCollapsed, se = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        ht++;
      }
    }
    function Ue() {
      {
        if (ht--, ht === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ze({}, A, {
              value: Ge
            }),
            info: Ze({}, A, {
              value: Oe
            }),
            warn: Ze({}, A, {
              value: Fe
            }),
            error: Ze({}, A, {
              value: qt
            }),
            group: Ze({}, A, {
              value: X
            }),
            groupCollapsed: Ze({}, A, {
              value: ie
            }),
            groupEnd: Ze({}, A, {
              value: se
            })
          });
        }
        ht < 0 && Q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Be = H.ReactCurrentDispatcher, ke;
    function $e(A, J, me) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (dt) {
            var Te = dt.stack.trim().match(/\n( *(at )?)/);
            ke = Te && Te[1] || "";
          }
        return `
` + ke + A;
      }
    }
    var ze = !1, Ne;
    {
      var vt = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new vt();
    }
    function ue(A, J) {
      if (!A || ze)
        return "";
      {
        var me = Ne.get(A);
        if (me !== void 0)
          return me;
      }
      var Te;
      ze = !0;
      var dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = Be.current, Be.current = null, Se();
      try {
        if (J) {
          var lt = function() {
            throw Error();
          };
          if (Object.defineProperty(lt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(lt, []);
            } catch (tn) {
              Te = tn;
            }
            Reflect.construct(A, [], lt);
          } else {
            try {
              lt.call();
            } catch (tn) {
              Te = tn;
            }
            A.call(lt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tn) {
            Te = tn;
          }
          A();
        }
      } catch (tn) {
        if (tn && Te && typeof tn.stack == "string") {
          for (var it = tn.stack.split(`
`), pn = Te.stack.split(`
`), Nt = it.length - 1, en = pn.length - 1; Nt >= 1 && en >= 0 && it[Nt] !== pn[en]; )
            en--;
          for (; Nt >= 1 && en >= 0; Nt--, en--)
            if (it[Nt] !== pn[en]) {
              if (Nt !== 1 || en !== 1)
                do
                  if (Nt--, en--, en < 0 || it[Nt] !== pn[en]) {
                    var Sn = `
` + it[Nt].replace(" at new ", " at ");
                    return A.displayName && Sn.includes("<anonymous>") && (Sn = Sn.replace("<anonymous>", A.displayName)), typeof A == "function" && Ne.set(A, Sn), Sn;
                  }
                while (Nt >= 1 && en >= 0);
              break;
            }
        }
      } finally {
        ze = !1, Be.current = We, Ue(), Error.prepareStackTrace = dt;
      }
      var Pr = A ? A.displayName || A.name : "", Tr = Pr ? $e(Pr) : "";
      return typeof A == "function" && Ne.set(A, Tr), Tr;
    }
    function xt(A, J, me) {
      return ue(A, !1);
    }
    function Tt(A) {
      var J = A.prototype;
      return !!(J && J.isReactComponent);
    }
    function et(A, J, me) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return ue(A, Tt(A));
      if (typeof A == "string")
        return $e(A);
      switch (A) {
        case y:
          return $e("Suspense");
        case _:
          return $e("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case g:
            return xt(A.render);
          case R:
            return et(A.type, J, me);
          case T: {
            var Te = A, dt = Te._payload, We = Te._init;
            try {
              return et(We(dt), J, me);
            } catch {
            }
          }
        }
      return "";
    }
    var cn = Object.prototype.hasOwnProperty, Nn = {}, Kr = H.ReactDebugCurrentFrame;
    function Hn(A) {
      if (A) {
        var J = A._owner, me = et(A.type, A._source, J ? J.type : null);
        Kr.setExtraStackFrame(me);
      } else
        Kr.setExtraStackFrame(null);
    }
    function Vn(A, J, me, Te, dt) {
      {
        var We = Function.call.bind(cn);
        for (var lt in A)
          if (We(A, lt)) {
            var it = void 0;
            try {
              if (typeof A[lt] != "function") {
                var pn = Error((Te || "React class") + ": " + me + " type `" + lt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[lt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pn.name = "Invariant Violation", pn;
              }
              it = A[lt](J, lt, Te, me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Nt) {
              it = Nt;
            }
            it && !(it instanceof Error) && (Hn(dt), Q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", me, lt, typeof it), Hn(null)), it instanceof Error && !(it.message in Nn) && (Nn[it.message] = !0, Hn(dt), Q("Failed %s type: %s", me, it.message), Hn(null));
          }
      }
    }
    var Mn = Array.isArray;
    function bn(A) {
      return Mn(A);
    }
    function In(A) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, me = J && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return me;
      }
    }
    function Xr(A) {
      try {
        return dn(A), !1;
      } catch {
        return !0;
      }
    }
    function dn(A) {
      return "" + A;
    }
    function qn(A) {
      if (Xr(A))
        return Q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(A)), dn(A);
    }
    var Ur = H.ReactCurrentOwner, Qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Jr, pe;
    function Le(A) {
      if (cn.call(A, "ref")) {
        var J = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function at(A) {
      if (cn.call(A, "key")) {
        var J = Object.getOwnPropertyDescriptor(A, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function tt(A, J) {
      typeof A.ref == "string" && Ur.current;
    }
    function Yt(A, J) {
      {
        var me = function() {
          Jr || (Jr = !0, Q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        me.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: me,
          configurable: !0
        });
      }
    }
    function Qt(A, J) {
      {
        var me = function() {
          pe || (pe = !0, Q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        me.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: me,
          configurable: !0
        });
      }
    }
    var Jt = function(A, J, me, Te, dt, We, lt) {
      var it = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: A,
        key: J,
        ref: me,
        props: lt,
        // Record the component responsible for creating this element.
        _owner: We
      };
      return it._store = {}, Object.defineProperty(it._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(it, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(it, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dt
      }), Object.freeze && (Object.freeze(it.props), Object.freeze(it)), it;
    };
    function Un(A, J, me, Te, dt) {
      {
        var We, lt = {}, it = null, pn = null;
        me !== void 0 && (qn(me), it = "" + me), at(J) && (qn(J.key), it = "" + J.key), Le(J) && (pn = J.ref, tt(J, dt));
        for (We in J)
          cn.call(J, We) && !Qr.hasOwnProperty(We) && (lt[We] = J[We]);
        if (A && A.defaultProps) {
          var Nt = A.defaultProps;
          for (We in Nt)
            lt[We] === void 0 && (lt[We] = Nt[We]);
        }
        if (it || pn) {
          var en = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          it && Yt(lt, en), pn && Qt(lt, en);
        }
        return Jt(A, it, pn, dt, Te, Ur.current, lt);
      }
    }
    var Zt = H.ReactCurrentOwner, Gt = H.ReactDebugCurrentFrame;
    function Wt(A) {
      if (A) {
        var J = A._owner, me = et(A.type, A._source, J ? J.type : null);
        Gt.setExtraStackFrame(me);
      } else
        Gt.setExtraStackFrame(null);
    }
    var Na;
    Na = !1;
    function ar(A) {
      return typeof A == "object" && A !== null && A.$$typeof === a;
    }
    function hr() {
      {
        if (Zt.current) {
          var A = we(Zt.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Ma(A) {
      return "";
    }
    var zi = {};
    function Pi(A) {
      {
        var J = hr();
        if (!J) {
          var me = typeof A == "string" ? A : A.displayName || A.name;
          me && (J = `

Check the top-level render call using <` + me + ">.");
        }
        return J;
      }
    }
    function ii(A, J) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var me = Pi(J);
        if (zi[me])
          return;
        zi[me] = !0;
        var Te = "";
        A && A._owner && A._owner !== Zt.current && (Te = " It was passed a child from " + we(A._owner.type) + "."), Wt(A), Q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', me, Te), Wt(null);
      }
    }
    function Bi(A, J) {
      {
        if (typeof A != "object")
          return;
        if (bn(A))
          for (var me = 0; me < A.length; me++) {
            var Te = A[me];
            ar(Te) && ii(Te, J);
          }
        else if (ar(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var dt = Y(A);
          if (typeof dt == "function" && dt !== A.entries)
            for (var We = dt.call(A), lt; !(lt = We.next()).done; )
              ar(lt.value) && ii(lt.value, J);
        }
      }
    }
    function oi(A) {
      {
        var J = A.type;
        if (J == null || typeof J == "string")
          return;
        var me;
        if (typeof J == "function")
          me = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === R))
          me = J.propTypes;
        else
          return;
        if (me) {
          var Te = we(J);
          Vn(me, A.props, "prop", Te, A);
        } else if (J.PropTypes !== void 0 && !Na) {
          Na = !0;
          var dt = we(J);
          Q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", dt || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && Q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(A) {
      {
        for (var J = Object.keys(A.props), me = 0; me < J.length; me++) {
          var Te = J[me];
          if (Te !== "children" && Te !== "key") {
            Wt(A), Q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), Wt(null);
            break;
          }
        }
        A.ref !== null && (Wt(A), Q("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var vr = {};
    function Yn(A, J, me, Te, dt, We) {
      {
        var lt = Lt(A);
        if (!lt) {
          var it = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (it += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pn = Ma();
          pn ? it += pn : it += hr();
          var Nt;
          A === null ? Nt = "null" : bn(A) ? Nt = "array" : A !== void 0 && A.$$typeof === a ? (Nt = "<" + (we(A.type) || "Unknown") + " />", it = " Did you accidentally export a JSX literal instead of a component?") : Nt = typeof A, Q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Nt, it);
        }
        var en = Un(A, J, me, dt, We);
        if (en == null)
          return en;
        if (lt) {
          var Sn = J.children;
          if (Sn !== void 0)
            if (Te)
              if (bn(Sn)) {
                for (var Pr = 0; Pr < Sn.length; Pr++)
                  Bi(Sn[Pr], A);
                Object.freeze && Object.freeze(Sn);
              } else
                Q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bi(Sn, A);
        }
        if (cn.call(J, "key")) {
          var Tr = we(A), tn = Object.keys(J).filter(function($i) {
            return $i !== "key";
          }), nt = tn.length > 0 ? "{key: someKey, " + tn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vr[Tr + nt]) {
            var va = tn.length > 0 ? "{" + tn.join(": ..., ") + ": ...}" : "{}";
            Q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, Tr, va, Tr), vr[Tr + nt] = !0;
          }
        }
        return A === u ? jr(en) : oi(en), en;
      }
    }
    function Fr(A, J, me) {
      return Yn(A, J, me, !0);
    }
    function Zr(A, J, me) {
      return Yn(A, J, me, !1);
    }
    var zr = Zr, jn = Fr;
    Mc.Fragment = u, Mc.jsx = zr, Mc.jsxs = jn;
  }(), Mc;
}
var oR;
function PU() {
  return oR || (oR = 1, pg.exports = zU()), pg.exports;
}
var z = PU(), M = cb();
const ei = /* @__PURE__ */ Rs(M);
var pp = {}, vg = { exports: {} }, mg = { exports: {} }, yg = {}, sR;
function BU() {
  return sR || (sR = 1, function(n) {
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var a = !1, o = 5;
      function u(pe, Le) {
        var at = pe.length;
        pe.push(Le), d(pe, Le, at);
      }
      function l(pe) {
        return pe.length === 0 ? null : pe[0];
      }
      function f(pe) {
        if (pe.length === 0)
          return null;
        var Le = pe[0], at = pe.pop();
        return at !== Le && (pe[0] = at, m(pe, at, 0)), Le;
      }
      function d(pe, Le, at) {
        for (var tt = at; tt > 0; ) {
          var Yt = tt - 1 >>> 1, Qt = pe[Yt];
          if (g(Qt, Le) > 0)
            pe[Yt] = Le, pe[tt] = Qt, tt = Yt;
          else
            return;
        }
      }
      function m(pe, Le, at) {
        for (var tt = at, Yt = pe.length, Qt = Yt >>> 1; tt < Qt; ) {
          var Jt = (tt + 1) * 2 - 1, Un = pe[Jt], Zt = Jt + 1, Gt = pe[Zt];
          if (g(Un, Le) < 0)
            Zt < Yt && g(Gt, Un) < 0 ? (pe[tt] = Gt, pe[Zt] = Le, tt = Zt) : (pe[tt] = Un, pe[Jt] = Le, tt = Jt);
          else if (Zt < Yt && g(Gt, Le) < 0)
            pe[tt] = Gt, pe[Zt] = Le, tt = Zt;
          else
            return;
        }
      }
      function g(pe, Le) {
        var at = pe.sortIndex - Le.sortIndex;
        return at !== 0 ? at : pe.id - Le.id;
      }
      var y = 1, _ = 2, R = 3, T = 4, w = 5;
      function D(pe, Le) {
      }
      var P = typeof performance == "object" && typeof performance.now == "function";
      if (P) {
        var Y = performance;
        n.unstable_now = function() {
          return Y.now();
        };
      } else {
        var H = Date, Q = H.now();
        n.unstable_now = function() {
          return H.now() - Q;
        };
      }
      var V = 1073741823, ae = -1, oe = 250, de = 5e3, Z = 1e4, Ie = V, ft = [], Lt = [], Ot = 1, rt = null, we = R, Ze = !1, ht = !1, Ge = !1, Oe = typeof setTimeout == "function" ? setTimeout : null, Fe = typeof clearTimeout == "function" ? clearTimeout : null, qt = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function X(pe) {
        for (var Le = l(Lt); Le !== null; ) {
          if (Le.callback === null)
            f(Lt);
          else if (Le.startTime <= pe)
            f(Lt), Le.sortIndex = Le.expirationTime, u(ft, Le);
          else
            return;
          Le = l(Lt);
        }
      }
      function ie(pe) {
        if (Ge = !1, X(pe), !ht)
          if (l(ft) !== null)
            ht = !0, dn(se);
          else {
            var Le = l(Lt);
            Le !== null && qn(ie, Le.startTime - pe);
          }
      }
      function se(pe, Le) {
        ht = !1, Ge && (Ge = !1, Ur()), Ze = !0;
        var at = we;
        try {
          var tt;
          if (!a) return Ae(pe, Le);
        } finally {
          rt = null, we = at, Ze = !1;
        }
      }
      function Ae(pe, Le) {
        var at = Le;
        for (X(at), rt = l(ft); rt !== null && !(rt.expirationTime > at && (!pe || Kr())); ) {
          var tt = rt.callback;
          if (typeof tt == "function") {
            rt.callback = null, we = rt.priorityLevel;
            var Yt = rt.expirationTime <= at, Qt = tt(Yt);
            at = n.unstable_now(), typeof Qt == "function" ? rt.callback = Qt : rt === l(ft) && f(ft), X(at);
          } else
            f(ft);
          rt = l(ft);
        }
        if (rt !== null)
          return !0;
        var Jt = l(Lt);
        return Jt !== null && qn(ie, Jt.startTime - at), !1;
      }
      function Se(pe, Le) {
        switch (pe) {
          case y:
          case _:
          case R:
          case T:
          case w:
            break;
          default:
            pe = R;
        }
        var at = we;
        we = pe;
        try {
          return Le();
        } finally {
          we = at;
        }
      }
      function Ue(pe) {
        var Le;
        switch (we) {
          case y:
          case _:
          case R:
            Le = R;
            break;
          default:
            Le = we;
            break;
        }
        var at = we;
        we = Le;
        try {
          return pe();
        } finally {
          we = at;
        }
      }
      function Be(pe) {
        var Le = we;
        return function() {
          var at = we;
          we = Le;
          try {
            return pe.apply(this, arguments);
          } finally {
            we = at;
          }
        };
      }
      function ke(pe, Le, at) {
        var tt = n.unstable_now(), Yt;
        if (typeof at == "object" && at !== null) {
          var Qt = at.delay;
          typeof Qt == "number" && Qt > 0 ? Yt = tt + Qt : Yt = tt;
        } else
          Yt = tt;
        var Jt;
        switch (pe) {
          case y:
            Jt = ae;
            break;
          case _:
            Jt = oe;
            break;
          case w:
            Jt = Ie;
            break;
          case T:
            Jt = Z;
            break;
          case R:
          default:
            Jt = de;
            break;
        }
        var Un = Yt + Jt, Zt = {
          id: Ot++,
          callback: Le,
          priorityLevel: pe,
          startTime: Yt,
          expirationTime: Un,
          sortIndex: -1
        };
        return Yt > tt ? (Zt.sortIndex = Yt, u(Lt, Zt), l(ft) === null && Zt === l(Lt) && (Ge ? Ur() : Ge = !0, qn(ie, Yt - tt))) : (Zt.sortIndex = Un, u(ft, Zt), !ht && !Ze && (ht = !0, dn(se))), Zt;
      }
      function $e() {
      }
      function ze() {
        !ht && !Ze && (ht = !0, dn(se));
      }
      function Ne() {
        return l(ft);
      }
      function vt(pe) {
        pe.callback = null;
      }
      function ue() {
        return we;
      }
      var xt = !1, Tt = null, et = -1, cn = o, Nn = -1;
      function Kr() {
        var pe = n.unstable_now() - Nn;
        return !(pe < cn);
      }
      function Hn() {
      }
      function Vn(pe) {
        if (pe < 0 || pe > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        pe > 0 ? cn = Math.floor(1e3 / pe) : cn = o;
      }
      var Mn = function() {
        if (Tt !== null) {
          var pe = n.unstable_now();
          Nn = pe;
          var Le = !0, at = !0;
          try {
            at = Tt(Le, pe);
          } finally {
            at ? bn() : (xt = !1, Tt = null);
          }
        } else
          xt = !1;
      }, bn;
      if (typeof qt == "function")
        bn = function() {
          qt(Mn);
        };
      else if (typeof MessageChannel < "u") {
        var In = new MessageChannel(), Xr = In.port2;
        In.port1.onmessage = Mn, bn = function() {
          Xr.postMessage(null);
        };
      } else
        bn = function() {
          Oe(Mn, 0);
        };
      function dn(pe) {
        Tt = pe, xt || (xt = !0, bn());
      }
      function qn(pe, Le) {
        et = Oe(function() {
          pe(n.unstable_now());
        }, Le);
      }
      function Ur() {
        Fe(et), et = -1;
      }
      var Qr = Hn, Jr = null;
      n.unstable_IdlePriority = w, n.unstable_ImmediatePriority = y, n.unstable_LowPriority = T, n.unstable_NormalPriority = R, n.unstable_Profiling = Jr, n.unstable_UserBlockingPriority = _, n.unstable_cancelCallback = vt, n.unstable_continueExecution = ze, n.unstable_forceFrameRate = Vn, n.unstable_getCurrentPriorityLevel = ue, n.unstable_getFirstCallbackNode = Ne, n.unstable_next = Ue, n.unstable_pauseExecution = $e, n.unstable_requestPaint = Qr, n.unstable_runWithPriority = Se, n.unstable_scheduleCallback = ke, n.unstable_shouldYield = Kr, n.unstable_wrapCallback = Be, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  }(yg)), yg;
}
var uR;
function $U() {
  return uR || (uR = 1, mg.exports = BU()), mg.exports;
}
var Lr = {}, lR;
function HU() {
  if (lR) return Lr;
  lR = 1;
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = cb(), a = $U(), o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, u = !1;
    function l(e) {
      u = e;
    }
    function f(e) {
      if (!u) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        m("warn", e, r);
      }
    }
    function d(e) {
      if (!u) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        m("error", e, r);
      }
    }
    function m(e, t, r) {
      {
        var i = o.ReactDebugCurrentFrame, s = i.getStackAddendum();
        s !== "" && (t += "%s", r = r.concat([s]));
        var c = r.map(function(p) {
          return String(p);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var g = 0, y = 1, _ = 2, R = 3, T = 4, w = 5, D = 6, P = 7, Y = 8, H = 9, Q = 10, V = 11, ae = 12, oe = 13, de = 14, Z = 15, Ie = 16, ft = 17, Lt = 18, Ot = 19, rt = 21, we = 22, Ze = 23, ht = 24, Ge = 25, Oe = !0, Fe = !1, qt = !1, X = !1, ie = !1, se = !0, Ae = !0, Se = !0, Ue = !0, Be = /* @__PURE__ */ new Set(), ke = {}, $e = {};
    function ze(e, t) {
      Ne(e, t), Ne(e + "Capture", t);
    }
    function Ne(e, t) {
      ke[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ke[e] = t;
      {
        var r = e.toLowerCase();
        $e[r] = e, e === "onDoubleClick" && ($e.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Be.add(t[i]);
    }
    var vt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ue = Object.prototype.hasOwnProperty;
    function xt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function Tt(e) {
      try {
        return et(e), !1;
      } catch {
        return !0;
      }
    }
    function et(e) {
      return "" + e;
    }
    function cn(e, t) {
      if (Tt(e))
        return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xt(e)), et(e);
    }
    function Nn(e) {
      if (Tt(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xt(e)), et(e);
    }
    function Kr(e, t) {
      if (Tt(e))
        return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xt(e)), et(e);
    }
    function Hn(e, t) {
      if (Tt(e))
        return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xt(e)), et(e);
    }
    function Vn(e) {
      if (Tt(e))
        return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", xt(e)), et(e);
    }
    function Mn(e) {
      if (Tt(e))
        return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", xt(e)), et(e);
    }
    var bn = 0, In = 1, Xr = 2, dn = 3, qn = 4, Ur = 5, Qr = 6, Jr = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", pe = Jr + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Le = new RegExp("^[" + Jr + "][" + pe + "]*$"), at = {}, tt = {};
    function Yt(e) {
      return ue.call(tt, e) ? !0 : ue.call(at, e) ? !1 : Le.test(e) ? (tt[e] = !0, !0) : (at[e] = !0, d("Invalid attribute name: `%s`", e), !1);
    }
    function Qt(e, t, r) {
      return t !== null ? t.type === bn : r ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Jt(e, t, r, i) {
      if (r !== null && r.type === bn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (r !== null)
            return !r.acceptsBooleans;
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Un(e, t, r, i) {
      if (t === null || typeof t > "u" || Jt(e, t, r, i))
        return !0;
      if (i)
        return !1;
      if (r !== null)
        switch (r.type) {
          case dn:
            return !t;
          case qn:
            return t === !1;
          case Ur:
            return isNaN(t);
          case Qr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Zt(e) {
      return Wt.hasOwnProperty(e) ? Wt[e] : null;
    }
    function Gt(e, t, r, i, s, c, p) {
      this.acceptsBooleans = t === Xr || t === dn || t === qn, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = p;
    }
    var Wt = {}, Na = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Na.forEach(function(e) {
      Wt[e] = new Gt(
        e,
        bn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], r = e[1];
      Wt[t] = new Gt(
        t,
        In,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Xr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Xr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        dn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        dn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        qn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Qr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        Ur,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ar = /[\-\:]([a-z])/g, hr = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ar, hr);
      Wt[t] = new Gt(
        t,
        In,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ar, hr);
      Wt[t] = new Gt(
        t,
        In,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ar, hr);
      Wt[t] = new Gt(
        t,
        In,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        In,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ma = "xlinkHref";
    Wt[Ma] = new Gt(
      "xlinkHref",
      In,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Wt[e] = new Gt(
        e,
        In,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var zi = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Pi = !1;
    function ii(e) {
      !Pi && zi.test(e) && (Pi = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Bi(e, t, r, i) {
      if (i.mustUseProperty) {
        var s = i.propertyName;
        return e[s];
      } else {
        cn(r, t), i.sanitizeURL && ii("" + r);
        var c = i.attributeName, p = null;
        if (i.type === qn) {
          if (e.hasAttribute(c)) {
            var v = e.getAttribute(c);
            return v === "" ? !0 : Un(t, r, i, !1) ? v : v === "" + r ? r : v;
          }
        } else if (e.hasAttribute(c)) {
          if (Un(t, r, i, !1))
            return e.getAttribute(c);
          if (i.type === dn)
            return r;
          p = e.getAttribute(c);
        }
        return Un(t, r, i, !1) ? p === null ? r : p : p === "" + r ? r : p;
      }
    }
    function oi(e, t, r, i) {
      {
        if (!Yt(t))
          return;
        if (!e.hasAttribute(t))
          return r === void 0 ? void 0 : null;
        var s = e.getAttribute(t);
        return cn(r, t), s === "" + r ? r : s;
      }
    }
    function jr(e, t, r, i) {
      var s = Zt(t);
      if (!Qt(t, s, i)) {
        if (Un(t, r, s, i) && (r = null), i || s === null) {
          if (Yt(t)) {
            var c = t;
            r === null ? e.removeAttribute(c) : (cn(r, t), e.setAttribute(c, "" + r));
          }
          return;
        }
        var p = s.mustUseProperty;
        if (p) {
          var v = s.propertyName;
          if (r === null) {
            var b = s.type;
            e[v] = b === dn ? !1 : "";
          } else
            e[v] = r;
          return;
        }
        var C = s.attributeName, x = s.attributeNamespace;
        if (r === null)
          e.removeAttribute(C);
        else {
          var N = s.type, L;
          N === dn || N === qn && r === !0 ? L = "" : (cn(r, C), L = "" + r, s.sanitizeURL && ii(L.toString())), x ? e.setAttributeNS(x, C, L) : e.setAttribute(C, L);
        }
      }
    }
    var vr = Symbol.for("react.element"), Yn = Symbol.for("react.portal"), Fr = Symbol.for("react.fragment"), Zr = Symbol.for("react.strict_mode"), zr = Symbol.for("react.profiler"), jn = Symbol.for("react.provider"), A = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), dt = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), lt = Symbol.for("react.scope"), it = Symbol.for("react.debug_trace_mode"), pn = Symbol.for("react.offscreen"), Nt = Symbol.for("react.legacy_hidden"), en = Symbol.for("react.cache"), Sn = Symbol.for("react.tracing_marker"), Pr = Symbol.iterator, Tr = "@@iterator";
    function tn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Pr && e[Pr] || e[Tr];
      return typeof t == "function" ? t : null;
    }
    var nt = Object.assign, va = 0, $i, ks, ma, Hi, Ao, Vi, Do;
    function ko() {
    }
    ko.__reactDisabledLog = !0;
    function Ls() {
      {
        if (va === 0) {
          $i = console.log, ks = console.info, ma = console.warn, Hi = console.error, Ao = console.group, Vi = console.groupCollapsed, Do = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ko,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        va++;
      }
    }
    function Lo() {
      {
        if (va--, va === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, e, {
              value: $i
            }),
            info: nt({}, e, {
              value: ks
            }),
            warn: nt({}, e, {
              value: ma
            }),
            error: nt({}, e, {
              value: Hi
            }),
            group: nt({}, e, {
              value: Ao
            }),
            groupCollapsed: nt({}, e, {
              value: Vi
            }),
            groupEnd: nt({}, e, {
              value: Do
            })
          });
        }
        va < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ia = o.ReactCurrentDispatcher, No;
    function ea(e, t, r) {
      {
        if (No === void 0)
          try {
            throw Error();
          } catch (s) {
            var i = s.stack.trim().match(/\n( *(at )?)/);
            No = i && i[1] || "";
          }
        return `
` + No + e;
      }
    }
    var si = !1, Ua;
    {
      var qi = typeof WeakMap == "function" ? WeakMap : Map;
      Ua = new qi();
    }
    function ja(e, t) {
      if (!e || si)
        return "";
      {
        var r = Ua.get(e);
        if (r !== void 0)
          return r;
      }
      var i;
      si = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Ia.current, Ia.current = null, Ls();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch ($) {
              i = $;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch ($) {
              i = $;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            i = $;
          }
          e();
        }
      } catch ($) {
        if ($ && i && typeof $.stack == "string") {
          for (var v = $.stack.split(`
`), b = i.stack.split(`
`), C = v.length - 1, x = b.length - 1; C >= 1 && x >= 0 && v[C] !== b[x]; )
            x--;
          for (; C >= 1 && x >= 0; C--, x--)
            if (v[C] !== b[x]) {
              if (C !== 1 || x !== 1)
                do
                  if (C--, x--, x < 0 || v[C] !== b[x]) {
                    var N = `
` + v[C].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && Ua.set(e, N), N;
                  }
                while (C >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        si = !1, Ia.current = c, Lo(), Error.prepareStackTrace = s;
      }
      var L = e ? e.displayName || e.name : "", F = L ? ea(L) : "";
      return typeof e == "function" && Ua.set(e, F), F;
    }
    function ta(e, t, r) {
      return ja(e, !0);
    }
    function Mo(e, t, r) {
      return ja(e, !1);
    }
    function Yi(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Io(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ja(e, Yi(e));
      if (typeof e == "string")
        return ea(e);
      switch (e) {
        case me:
          return ea("Suspense");
        case Te:
          return ea("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case J:
            return Mo(e.render);
          case dt:
            return Io(e.type, t, r);
          case We: {
            var i = e, s = i._payload, c = i._init;
            try {
              return Io(c(s), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    function Ns(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case w:
          return ea(e.type);
        case Ie:
          return ea("Lazy");
        case oe:
          return ea("Suspense");
        case Ot:
          return ea("SuspenseList");
        case g:
        case _:
        case Z:
          return Mo(e.type);
        case V:
          return Mo(e.type.render);
        case y:
          return ta(e.type);
        default:
          return "";
      }
    }
    function Cr(e) {
      try {
        var t = "", r = e;
        do
          t += Ns(r), r = r.return;
        while (r);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ms(e, t, r) {
      var i = e.displayName;
      if (i)
        return i;
      var s = t.displayName || t.name || "";
      return s !== "" ? r + "(" + s + ")" : r;
    }
    function Gi(e) {
      return e.displayName || "Context";
    }
    function Ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Fr:
          return "Fragment";
        case Yn:
          return "Portal";
        case zr:
          return "Profiler";
        case Zr:
          return "StrictMode";
        case me:
          return "Suspense";
        case Te:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case A:
            var t = e;
            return Gi(t) + ".Consumer";
          case jn:
            var r = e;
            return Gi(r._context) + ".Provider";
          case J:
            return Ms(e, e.render, "ForwardRef");
          case dt:
            var i = e.displayName || null;
            return i !== null ? i : Ct(e.type) || "Memo";
          case We: {
            var s = e, c = s._payload, p = s._init;
            try {
              return Ct(p(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function tl(e, t, r) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? r + "(" + i + ")" : r);
    }
    function h(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      var t = e.tag, r = e.type;
      switch (t) {
        case ht:
          return "Cache";
        case H:
          var i = r;
          return h(i) + ".Consumer";
        case Q:
          var s = r;
          return h(s._context) + ".Provider";
        case Lt:
          return "DehydratedFragment";
        case V:
          return tl(r, r.render, "ForwardRef");
        case P:
          return "Fragment";
        case w:
          return r;
        case T:
          return "Portal";
        case R:
          return "Root";
        case D:
          return "Text";
        case Ie:
          return Ct(r);
        case Y:
          return r === Zr ? "StrictMode" : "Mode";
        case we:
          return "Offscreen";
        case ae:
          return "Profiler";
        case rt:
          return "Scope";
        case oe:
          return "Suspense";
        case Ot:
          return "SuspenseList";
        case Ge:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case y:
        case g:
        case ft:
        case _:
        case de:
        case Z:
          if (typeof r == "function")
            return r.displayName || r.name || null;
          if (typeof r == "string")
            return r;
          break;
      }
      return null;
    }
    var k = o.ReactDebugCurrentFrame, I = null, ne = !1;
    function ee() {
      {
        if (I === null)
          return null;
        var e = I._debugOwner;
        if (e !== null && typeof e < "u")
          return E(e);
      }
      return null;
    }
    function he() {
      return I === null ? "" : Cr(I);
    }
    function fe() {
      k.getCurrentStack = null, I = null, ne = !1;
    }
    function ce(e) {
      k.getCurrentStack = e === null ? null : he, I = e, ne = !1;
    }
    function ct() {
      return I;
    }
    function wt(e) {
      ne = e;
    }
    function gt(e) {
      return "" + e;
    }
    function Rt(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Mn(e), e;
        default:
          return "";
      }
    }
    var ya = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Fa(e, t) {
      ya[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Rr(e) {
      var t = e.type, r = e.nodeName;
      return r && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Wi(e) {
      return e._valueTracker;
    }
    function Is(e) {
      e._valueTracker = null;
    }
    function lh(e) {
      var t = "";
      return e && (Rr(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ki(e) {
      var t = Rr(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Mn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof r > "u" || typeof r.get != "function" || typeof r.set != "function")) {
        var s = r.get, c = r.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return s.call(this);
          },
          set: function(v) {
            Mn(v), i = "" + v, c.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: r.enumerable
        });
        var p = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            Mn(v), i = "" + v;
          },
          stopTracking: function() {
            Is(e), delete e[t];
          }
        };
        return p;
      }
    }
    function Uo(e) {
      Wi(e) || (e._valueTracker = Ki(e));
    }
    function nl(e) {
      if (!e)
        return !1;
      var t = Wi(e);
      if (!t)
        return !0;
      var r = t.getValue(), i = lh(e);
      return i !== r ? (t.setValue(i), !0) : !1;
    }
    function ui(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Us = !1, js = !1, Fs = !1, cf = !1;
    function ff(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function rl(e, t) {
      var r = e, i = t.checked, s = nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? r._wrapperState.initialChecked
      });
      return s;
    }
    function df(e, t) {
      Fa("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !js && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ee() || "A component", t.type), js = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Us && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ee() || "A component", t.type), Us = !0);
      var r = e, i = t.defaultValue == null ? "" : t.defaultValue;
      r._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Rt(t.value != null ? t.value : i),
        controlled: ff(t)
      };
    }
    function S(e, t) {
      var r = e, i = t.checked;
      i != null && jr(r, "checked", i, !1);
    }
    function O(e, t) {
      var r = e;
      {
        var i = ff(t);
        !r._wrapperState.controlled && i && !cf && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cf = !0), r._wrapperState.controlled && !i && !Fs && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Fs = !0);
      }
      S(e, t);
      var s = Rt(t.value), c = t.type;
      if (s != null)
        c === "number" ? (s === 0 && r.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        r.value != s) && (r.value = gt(s)) : r.value !== gt(s) && (r.value = gt(s));
      else if (c === "submit" || c === "reset") {
        r.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Pe(r, t.type, s) : t.hasOwnProperty("defaultValue") && Pe(r, t.type, Rt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
    }
    function B(e, t, r) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var s = t.type, c = s === "submit" || s === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var p = gt(i._wrapperState.initialValue);
        r || p !== i.value && (i.value = p), i.defaultValue = p;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function q(e, t) {
      var r = e;
      O(r, t), le(r, t);
    }
    function le(e, t) {
      var r = t.name;
      if (t.type === "radio" && r != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        cn(r, "name");
        for (var s = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), c = 0; c < s.length; c++) {
          var p = s[c];
          if (!(p === e || p.form !== e.form)) {
            var v = Zf(p);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            nl(p), O(p, v);
          }
        }
      }
    }
    function Pe(e, t, r) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ui(e.ownerDocument) !== e) && (r == null ? e.defaultValue = gt(e._wrapperState.initialValue) : e.defaultValue !== gt(r) && (e.defaultValue = gt(r)));
    }
    var xe = !1, Ke = !1, bt = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? n.Children.forEach(t.children, function(r) {
        r != null && (typeof r == "string" || typeof r == "number" || Ke || (Ke = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (bt || (bt = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xe && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xe = !0);
    }
    function nn(e, t) {
      t.value != null && e.setAttribute("value", gt(Rt(t.value)));
    }
    var rn = Array.isArray;
    function mt(e) {
      return rn(e);
    }
    var un;
    un = !1;
    function En() {
      var e = ee();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var jo = ["value", "defaultValue"];
    function al(e) {
      {
        Fa("select", e);
        for (var t = 0; t < jo.length; t++) {
          var r = jo[t];
          if (e[r] != null) {
            var i = mt(e[r]);
            e.multiple && !i ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", r, En()) : !e.multiple && i && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", r, En());
          }
        }
      }
    }
    function li(e, t, r, i) {
      var s = e.options;
      if (t) {
        for (var c = r, p = {}, v = 0; v < c.length; v++)
          p["$" + c[v]] = !0;
        for (var b = 0; b < s.length; b++) {
          var C = p.hasOwnProperty("$" + s[b].value);
          s[b].selected !== C && (s[b].selected = C), C && i && (s[b].defaultSelected = !0);
        }
      } else {
        for (var x = gt(Rt(r)), N = null, L = 0; L < s.length; L++) {
          if (s[L].value === x) {
            s[L].selected = !0, i && (s[L].defaultSelected = !0);
            return;
          }
          N === null && !s[L].disabled && (N = s[L]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function il(e, t) {
      return nt({}, t, {
        value: void 0
      });
    }
    function ol(e, t) {
      var r = e;
      al(t), r._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !un && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), un = !0);
    }
    function ch(e, t) {
      var r = e;
      r.multiple = !!t.multiple;
      var i = t.value;
      i != null ? li(r, !!t.multiple, i, !1) : t.defaultValue != null && li(r, !!t.multiple, t.defaultValue, !0);
    }
    function pf(e, t) {
      var r = e, i = r._wrapperState.wasMultiple;
      r._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? li(r, !!t.multiple, s, !1) : i !== !!t.multiple && (t.defaultValue != null ? li(r, !!t.multiple, t.defaultValue, !0) : li(r, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function fh(e, t) {
      var r = e, i = t.value;
      i != null && li(r, !!t.multiple, i, !1);
    }
    var Kb = !1;
    function dh(e, t) {
      var r = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: gt(r._wrapperState.initialValue)
      });
      return i;
    }
    function Xb(e, t) {
      var r = e;
      Fa("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Kb && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ee() || "A component"), Kb = !0);
      var i = t.value;
      if (i == null) {
        var s = t.children, c = t.defaultValue;
        if (s != null) {
          d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (mt(s)) {
              if (s.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              s = s[0];
            }
            c = s;
          }
        }
        c == null && (c = ""), i = c;
      }
      r._wrapperState = {
        initialValue: Rt(i)
      };
    }
    function Qb(e, t) {
      var r = e, i = Rt(t.value), s = Rt(t.defaultValue);
      if (i != null) {
        var c = gt(i);
        c !== r.value && (r.value = c), t.defaultValue == null && r.defaultValue !== c && (r.defaultValue = c);
      }
      s != null && (r.defaultValue = gt(s));
    }
    function Jb(e, t) {
      var r = e, i = r.textContent;
      i === r._wrapperState.initialValue && i !== "" && i !== null && (r.value = i);
    }
    function RO(e, t) {
      Qb(e, t);
    }
    var ci = "http://www.w3.org/1999/xhtml", xO = "http://www.w3.org/1998/Math/MathML", ph = "http://www.w3.org/2000/svg";
    function hh(e) {
      switch (e) {
        case "svg":
          return ph;
        case "math":
          return xO;
        default:
          return ci;
      }
    }
    function vh(e, t) {
      return e == null || e === ci ? hh(t) : e === ph && t === "foreignObject" ? ci : e;
    }
    var wO = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, r, i, s);
        });
      } : e;
    }, hf, Zb = wO(function(e, t) {
      if (e.namespaceURI === ph && !("innerHTML" in e)) {
        hf = hf || document.createElement("div"), hf.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var r = hf.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; r.firstChild; )
          e.appendChild(r.firstChild);
        return;
      }
      e.innerHTML = t;
    }), xr = 1, fi = 3, _n = 8, di = 9, mh = 11, vf = function(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === fi) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, OO = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, sl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function AO(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var DO = ["Webkit", "ms", "Moz", "O"];
    Object.keys(sl).forEach(function(e) {
      DO.forEach(function(t) {
        sl[AO(t, e)] = sl[e];
      });
    });
    function yh(e, t, r) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !r && typeof t == "number" && t !== 0 && !(sl.hasOwnProperty(e) && sl[e]) ? t + "px" : (Hn(t, e), ("" + t).trim());
    }
    var kO = /([A-Z])/g, LO = /^ms-/;
    function NO(e) {
      return e.replace(kO, "-$1").toLowerCase().replace(LO, "-ms-");
    }
    var eS = function() {
    };
    {
      var MO = /^(?:webkit|moz|o)[A-Z]/, IO = /^-ms-/, UO = /-(.)/g, tS = /;\s*$/, zs = {}, gh = {}, nS = !1, rS = !1, jO = function(e) {
        return e.replace(UO, function(t, r) {
          return r.toUpperCase();
        });
      }, FO = function(e) {
        zs.hasOwnProperty(e) && zs[e] || (zs[e] = !0, d(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          jO(e.replace(IO, "ms-"))
        ));
      }, zO = function(e) {
        zs.hasOwnProperty(e) && zs[e] || (zs[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, PO = function(e, t) {
        gh.hasOwnProperty(t) && gh[t] || (gh[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(tS, "")));
      }, BO = function(e, t) {
        nS || (nS = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $O = function(e, t) {
        rS || (rS = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      eS = function(e, t) {
        e.indexOf("-") > -1 ? FO(e) : MO.test(e) ? zO(e) : tS.test(t) && PO(e, t), typeof t == "number" && (isNaN(t) ? BO(e, t) : isFinite(t) || $O(e, t));
      };
    }
    var HO = eS;
    function VO(e) {
      {
        var t = "", r = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var s = e[i];
            if (s != null) {
              var c = i.indexOf("--") === 0;
              t += r + (c ? i : NO(i)) + ":", t += yh(i, s, c), r = ";";
            }
          }
        return t || null;
      }
    }
    function aS(e, t) {
      var r = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var s = i.indexOf("--") === 0;
          s || HO(i, t[i]);
          var c = yh(i, t[i], s);
          i === "float" && (i = "cssFloat"), s ? r.setProperty(i, c) : r[i] = c;
        }
    }
    function qO(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function iS(e) {
      var t = {};
      for (var r in e)
        for (var i = OO[r] || [r], s = 0; s < i.length; s++)
          t[i[s]] = r;
      return t;
    }
    function YO(e, t) {
      {
        if (!t)
          return;
        var r = iS(e), i = iS(t), s = {};
        for (var c in r) {
          var p = r[c], v = i[c];
          if (v && p !== v) {
            var b = p + "," + v;
            if (s[b])
              continue;
            s[b] = !0, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", qO(e[p]) ? "Removing" : "Updating", p, v);
          }
        }
      }
    }
    var GO = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, WO = nt({
      menuitem: !0
    }, GO), KO = "__html";
    function bh(e, t) {
      if (t) {
        if (WO[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(KO in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Fo(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var mf = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, oS = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ps = {}, XO = new RegExp("^(aria)-[" + pe + "]*$"), QO = new RegExp("^(aria)[A-Z][" + pe + "]*$");
    function JO(e, t) {
      {
        if (ue.call(Ps, t) && Ps[t])
          return !0;
        if (QO.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), i = oS.hasOwnProperty(r) ? r : null;
          if (i == null)
            return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ps[t] = !0, !0;
          if (t !== i)
            return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ps[t] = !0, !0;
        }
        if (XO.test(t)) {
          var s = t.toLowerCase(), c = oS.hasOwnProperty(s) ? s : null;
          if (c == null)
            return Ps[t] = !0, !1;
          if (t !== c)
            return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Ps[t] = !0, !0;
        }
      }
      return !0;
    }
    function ZO(e, t) {
      {
        var r = [];
        for (var i in t) {
          var s = JO(e, i);
          s || r.push(i);
        }
        var c = r.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        r.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : r.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function eA(e, t) {
      Fo(e, t) || ZO(e, t);
    }
    var sS = !1;
    function tA(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !sS && (sS = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var uS = function() {
    };
    {
      var mr = {}, lS = /^on./, nA = /^on[^A-Z]/, rA = new RegExp("^(aria)-[" + pe + "]*$"), aA = new RegExp("^(aria)[A-Z][" + pe + "]*$");
      uS = function(e, t, r, i) {
        if (ue.call(mr, t) && mr[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), mr[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, p = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var v = p.hasOwnProperty(s) ? p[s] : null;
          if (v != null)
            return d("Invalid event handler property `%s`. Did you mean `%s`?", t, v), mr[t] = !0, !0;
          if (lS.test(t))
            return d("Unknown event handler property `%s`. It will be ignored.", t), mr[t] = !0, !0;
        } else if (lS.test(t))
          return nA.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), mr[t] = !0, !0;
        if (rA.test(t) || aA.test(t))
          return !0;
        if (s === "innerhtml")
          return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), mr[t] = !0, !0;
        if (s === "aria")
          return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), mr[t] = !0, !0;
        if (s === "is" && r !== null && r !== void 0 && typeof r != "string")
          return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), mr[t] = !0, !0;
        if (typeof r == "number" && isNaN(r))
          return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), mr[t] = !0, !0;
        var b = Zt(t), C = b !== null && b.type === bn;
        if (mf.hasOwnProperty(s)) {
          var x = mf[s];
          if (x !== t)
            return d("Invalid DOM property `%s`. Did you mean `%s`?", t, x), mr[t] = !0, !0;
        } else if (!C && t !== s)
          return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), mr[t] = !0, !0;
        return typeof r == "boolean" && Jt(t, r, b, !1) ? (r ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), mr[t] = !0, !0) : C ? !0 : Jt(t, r, b, !1) ? (mr[t] = !0, !1) : ((r === "false" || r === "true") && b !== null && b.type === dn && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), mr[t] = !0), !0);
      };
    }
    var iA = function(e, t, r) {
      {
        var i = [];
        for (var s in t) {
          var c = uS(e, s, t[s], r);
          c || i.push(s);
        }
        var p = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : i.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function oA(e, t, r) {
      Fo(e, t) || iA(e, t, r);
    }
    var cS = 1, Sh = 2, ul = 4, sA = cS | Sh | ul, ll = null;
    function uA(e) {
      ll !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ll = e;
    }
    function lA() {
      ll === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ll = null;
    }
    function cA(e) {
      return e === ll;
    }
    function Eh(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === fi ? t.parentNode : t;
    }
    var _h = null, Bs = null, $s = null;
    function fS(e) {
      var t = ao(e);
      if (t) {
        if (typeof _h != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var r = t.stateNode;
        if (r) {
          var i = Zf(r);
          _h(t.stateNode, t.type, i);
        }
      }
    }
    function fA(e) {
      _h = e;
    }
    function dS(e) {
      Bs ? $s ? $s.push(e) : $s = [e] : Bs = e;
    }
    function dA() {
      return Bs !== null || $s !== null;
    }
    function pS() {
      if (Bs) {
        var e = Bs, t = $s;
        if (Bs = null, $s = null, fS(e), t)
          for (var r = 0; r < t.length; r++)
            fS(t[r]);
      }
    }
    var hS = function(e, t) {
      return e(t);
    }, vS = function() {
    }, Th = !1;
    function pA() {
      var e = dA();
      e && (vS(), pS());
    }
    function mS(e, t, r) {
      if (Th)
        return e(t, r);
      Th = !0;
      try {
        return hS(e, t, r);
      } finally {
        Th = !1, pA();
      }
    }
    function hA(e, t, r) {
      hS = e, vS = r;
    }
    function vA(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function mA(e, t, r) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(r.disabled && vA(t));
        default:
          return !1;
      }
    }
    function cl(e, t) {
      var r = e.stateNode;
      if (r === null)
        return null;
      var i = Zf(r);
      if (i === null)
        return null;
      var s = i[t];
      if (mA(t, e.type, i))
        return null;
      if (s && typeof s != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof s + "` type.");
      return s;
    }
    var Ch = !1;
    if (vt)
      try {
        var fl = {};
        Object.defineProperty(fl, "passive", {
          get: function() {
            Ch = !0;
          }
        }), window.addEventListener("test", fl, fl), window.removeEventListener("test", fl, fl);
      } catch {
        Ch = !1;
      }
    function yS(e, t, r, i, s, c, p, v, b) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, C);
      } catch (x) {
        this.onError(x);
      }
    }
    var gS = yS;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rh = document.createElement("react");
      gS = function(t, r, i, s, c, p, v, b, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), N = !1, L = !0, F = window.event, $ = Object.getOwnPropertyDescriptor(window, "event");
        function G() {
          Rh.removeEventListener(W, Me, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = F);
        }
        var ye = Array.prototype.slice.call(arguments, 3);
        function Me() {
          N = !0, G(), r.apply(i, ye), L = !1;
        }
        var De, _t = !1, yt = !1;
        function U(j) {
          if (De = j.error, _t = !0, De === null && j.colno === 0 && j.lineno === 0 && (yt = !0), j.defaultPrevented && De != null && typeof De == "object")
            try {
              De._suppressLogging = !0;
            } catch {
            }
        }
        var W = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", U), Rh.addEventListener(W, Me, !1), x.initEvent(W, !1, !1), Rh.dispatchEvent(x), $ && Object.defineProperty(window, "event", $), N && L && (_t ? yt && (De = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : De = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(De)), window.removeEventListener("error", U), !N)
          return G(), yS.apply(this, arguments);
      };
    }
    var yA = gS, Hs = !1, yf = null, gf = !1, xh = null, gA = {
      onError: function(e) {
        Hs = !0, yf = e;
      }
    };
    function wh(e, t, r, i, s, c, p, v, b) {
      Hs = !1, yf = null, yA.apply(gA, arguments);
    }
    function bA(e, t, r, i, s, c, p, v, b) {
      if (wh.apply(this, arguments), Hs) {
        var C = Oh();
        gf || (gf = !0, xh = C);
      }
    }
    function SA() {
      if (gf) {
        var e = xh;
        throw gf = !1, xh = null, e;
      }
    }
    function EA() {
      return Hs;
    }
    function Oh() {
      if (Hs) {
        var e = yf;
        return Hs = !1, yf = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vs(e) {
      return e._reactInternals;
    }
    function _A(e) {
      return e._reactInternals !== void 0;
    }
    function TA(e, t) {
      e._reactInternals = t;
    }
    var He = (
      /*                      */
      0
    ), qs = (
      /*                */
      1
    ), Fn = (
      /*                    */
      2
    ), Mt = (
      /*                       */
      4
    ), zo = (
      /*                */
      16
    ), bf = (
      /*                 */
      32
    ), bS = (
      /*                     */
      64
    ), It = (
      /*                   */
      128
    ), Po = (
      /*            */
      256
    ), Bo = (
      /*                          */
      512
    ), Ys = (
      /*                     */
      1024
    ), Xi = (
      /*                      */
      2048
    ), $o = (
      /*                    */
      4096
    ), Ho = (
      /*                   */
      8192
    ), Ah = (
      /*             */
      16384
    ), CA = (
      /*               */
      32767
    ), Sf = (
      /*                   */
      32768
    ), ga = (
      /*                */
      65536
    ), Dh = (
      /* */
      131072
    ), SS = (
      /*                       */
      1048576
    ), kh = (
      /*                    */
      2097152
    ), Vo = (
      /*                 */
      4194304
    ), Lh = (
      /*                */
      8388608
    ), Qi = (
      /*               */
      16777216
    ), Nh = (
      /*              */
      33554432
    ), Mh = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Mt | Ys | 0
    ), Ih = Fn | Mt | zo | bf | Bo | $o | Ho, dl = Mt | bS | Bo | Ho, Gs = Xi | zo, pi = Vo | Lh | kh, RA = o.ReactCurrentOwner;
    function qo(e) {
      var t = e, r = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Fn | $o)) !== He && (r = t.return), i = t.return;
        while (i);
      }
      return t.tag === R ? r : null;
    }
    function ES(e) {
      if (e.tag === oe) {
        var t = e.memoizedState;
        if (t === null) {
          var r = e.alternate;
          r !== null && (t = r.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function _S(e) {
      return e.tag === R ? e.stateNode.containerInfo : null;
    }
    function xA(e) {
      return qo(e) === e;
    }
    function wA(e) {
      {
        var t = RA.current;
        if (t !== null && t.tag === y) {
          var r = t, i = r.stateNode;
          i._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", E(r) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var s = Vs(e);
      return s ? qo(s) === s : !1;
    }
    function TS(e) {
      if (qo(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function CS(e) {
      var t = e.alternate;
      if (!t) {
        var r = qo(e);
        if (r === null)
          throw new Error("Unable to find node on an unmounted component.");
        return r !== e ? null : e;
      }
      for (var i = e, s = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var p = c.alternate;
        if (p === null) {
          var v = c.return;
          if (v !== null) {
            i = s = v;
            continue;
          }
          break;
        }
        if (c.child === p.child) {
          for (var b = c.child; b; ) {
            if (b === i)
              return TS(c), e;
            if (b === s)
              return TS(c), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== s.return)
          i = c, s = p;
        else {
          for (var C = !1, x = c.child; x; ) {
            if (x === i) {
              C = !0, i = c, s = p;
              break;
            }
            if (x === s) {
              C = !0, s = c, i = p;
              break;
            }
            x = x.sibling;
          }
          if (!C) {
            for (x = p.child; x; ) {
              if (x === i) {
                C = !0, i = p, s = c;
                break;
              }
              if (x === s) {
                C = !0, s = p, i = c;
                break;
              }
              x = x.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== s)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== R)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function RS(e) {
      var t = CS(e);
      return t !== null ? xS(t) : null;
    }
    function xS(e) {
      if (e.tag === w || e.tag === D)
        return e;
      for (var t = e.child; t !== null; ) {
        var r = xS(t);
        if (r !== null)
          return r;
        t = t.sibling;
      }
      return null;
    }
    function OA(e) {
      var t = CS(e);
      return t !== null ? wS(t) : null;
    }
    function wS(e) {
      if (e.tag === w || e.tag === D)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== T) {
          var r = wS(t);
          if (r !== null)
            return r;
        }
        t = t.sibling;
      }
      return null;
    }
    var OS = a.unstable_scheduleCallback, AA = a.unstable_cancelCallback, DA = a.unstable_shouldYield, kA = a.unstable_requestPaint, zn = a.unstable_now, LA = a.unstable_getCurrentPriorityLevel, Ef = a.unstable_ImmediatePriority, Uh = a.unstable_UserBlockingPriority, Yo = a.unstable_NormalPriority, NA = a.unstable_LowPriority, jh = a.unstable_IdlePriority, MA = a.unstable_yieldValue, IA = a.unstable_setDisableYieldValue, Ws = null, ir = null, be = null, za = !1, ba = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function UA(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ae && (e = nt({}, e, {
          getLaneLabelMap: $A,
          injectProfilingHooks: BA
        })), Ws = t.inject(e), ir = t;
      } catch (r) {
        d("React instrumentation encountered an error: %s.", r);
      }
      return !!t.checkDCE;
    }
    function jA(e, t) {
      if (ir && typeof ir.onScheduleFiberRoot == "function")
        try {
          ir.onScheduleFiberRoot(Ws, e, t);
        } catch (r) {
          za || (za = !0, d("React instrumentation encountered an error: %s", r));
        }
    }
    function FA(e, t) {
      if (ir && typeof ir.onCommitFiberRoot == "function")
        try {
          var r = (e.current.flags & It) === It;
          if (Se) {
            var i;
            switch (t) {
              case $r:
                i = Ef;
                break;
              case vi:
                i = Uh;
                break;
              case mi:
                i = Yo;
                break;
              case Of:
                i = jh;
                break;
              default:
                i = Yo;
                break;
            }
            ir.onCommitFiberRoot(Ws, e, i, r);
          }
        } catch (s) {
          za || (za = !0, d("React instrumentation encountered an error: %s", s));
        }
    }
    function zA(e) {
      if (ir && typeof ir.onPostCommitFiberRoot == "function")
        try {
          ir.onPostCommitFiberRoot(Ws, e);
        } catch (t) {
          za || (za = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function PA(e) {
      if (ir && typeof ir.onCommitFiberUnmount == "function")
        try {
          ir.onCommitFiberUnmount(Ws, e);
        } catch (t) {
          za || (za = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof MA == "function" && (IA(e), l(e)), ir && typeof ir.setStrictMode == "function")
        try {
          ir.setStrictMode(Ws, e);
        } catch (t) {
          za || (za = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function BA(e) {
      be = e;
    }
    function $A() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, r = 0; r < zh; r++) {
          var i = uD(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function HA(e) {
      be !== null && typeof be.markCommitStarted == "function" && be.markCommitStarted(e);
    }
    function AS() {
      be !== null && typeof be.markCommitStopped == "function" && be.markCommitStopped();
    }
    function pl(e) {
      be !== null && typeof be.markComponentRenderStarted == "function" && be.markComponentRenderStarted(e);
    }
    function Ks() {
      be !== null && typeof be.markComponentRenderStopped == "function" && be.markComponentRenderStopped();
    }
    function VA(e) {
      be !== null && typeof be.markComponentPassiveEffectMountStarted == "function" && be.markComponentPassiveEffectMountStarted(e);
    }
    function qA() {
      be !== null && typeof be.markComponentPassiveEffectMountStopped == "function" && be.markComponentPassiveEffectMountStopped();
    }
    function YA(e) {
      be !== null && typeof be.markComponentPassiveEffectUnmountStarted == "function" && be.markComponentPassiveEffectUnmountStarted(e);
    }
    function GA() {
      be !== null && typeof be.markComponentPassiveEffectUnmountStopped == "function" && be.markComponentPassiveEffectUnmountStopped();
    }
    function WA(e) {
      be !== null && typeof be.markComponentLayoutEffectMountStarted == "function" && be.markComponentLayoutEffectMountStarted(e);
    }
    function KA() {
      be !== null && typeof be.markComponentLayoutEffectMountStopped == "function" && be.markComponentLayoutEffectMountStopped();
    }
    function DS(e) {
      be !== null && typeof be.markComponentLayoutEffectUnmountStarted == "function" && be.markComponentLayoutEffectUnmountStarted(e);
    }
    function kS() {
      be !== null && typeof be.markComponentLayoutEffectUnmountStopped == "function" && be.markComponentLayoutEffectUnmountStopped();
    }
    function XA(e, t, r) {
      be !== null && typeof be.markComponentErrored == "function" && be.markComponentErrored(e, t, r);
    }
    function QA(e, t, r) {
      be !== null && typeof be.markComponentSuspended == "function" && be.markComponentSuspended(e, t, r);
    }
    function JA(e) {
      be !== null && typeof be.markLayoutEffectsStarted == "function" && be.markLayoutEffectsStarted(e);
    }
    function ZA() {
      be !== null && typeof be.markLayoutEffectsStopped == "function" && be.markLayoutEffectsStopped();
    }
    function eD(e) {
      be !== null && typeof be.markPassiveEffectsStarted == "function" && be.markPassiveEffectsStarted(e);
    }
    function tD() {
      be !== null && typeof be.markPassiveEffectsStopped == "function" && be.markPassiveEffectsStopped();
    }
    function LS(e) {
      be !== null && typeof be.markRenderStarted == "function" && be.markRenderStarted(e);
    }
    function nD() {
      be !== null && typeof be.markRenderYielded == "function" && be.markRenderYielded();
    }
    function NS() {
      be !== null && typeof be.markRenderStopped == "function" && be.markRenderStopped();
    }
    function rD(e) {
      be !== null && typeof be.markRenderScheduled == "function" && be.markRenderScheduled(e);
    }
    function aD(e, t) {
      be !== null && typeof be.markForceUpdateScheduled == "function" && be.markForceUpdateScheduled(e, t);
    }
    function Fh(e, t) {
      be !== null && typeof be.markStateUpdateScheduled == "function" && be.markStateUpdateScheduled(e, t);
    }
    var je = (
      /*                         */
      0
    ), St = (
      /*                 */
      1
    ), zt = (
      /*                    */
      2
    ), hn = (
      /*               */
      8
    ), Pa = (
      /*              */
      16
    ), MS = Math.clz32 ? Math.clz32 : sD, iD = Math.log, oD = Math.LN2;
    function sD(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (iD(t) / oD | 0) | 0;
    }
    var zh = 31, te = (
      /*                        */
      0
    ), Bn = (
      /*                          */
      0
    ), qe = (
      /*                        */
      1
    ), Xs = (
      /*    */
      2
    ), hi = (
      /*             */
      4
    ), Go = (
      /*            */
      8
    ), Ba = (
      /*                     */
      16
    ), hl = (
      /*                */
      32
    ), Qs = (
      /*                       */
      4194240
    ), vl = (
      /*                        */
      64
    ), Ph = (
      /*                        */
      128
    ), Bh = (
      /*                        */
      256
    ), $h = (
      /*                        */
      512
    ), Hh = (
      /*                        */
      1024
    ), Vh = (
      /*                        */
      2048
    ), qh = (
      /*                        */
      4096
    ), Yh = (
      /*                        */
      8192
    ), Gh = (
      /*                        */
      16384
    ), Wh = (
      /*                       */
      32768
    ), Kh = (
      /*                       */
      65536
    ), Xh = (
      /*                       */
      131072
    ), Qh = (
      /*                       */
      262144
    ), Jh = (
      /*                       */
      524288
    ), Zh = (
      /*                       */
      1048576
    ), ev = (
      /*                       */
      2097152
    ), _f = (
      /*                            */
      130023424
    ), Js = (
      /*                             */
      4194304
    ), tv = (
      /*                             */
      8388608
    ), nv = (
      /*                             */
      16777216
    ), rv = (
      /*                             */
      33554432
    ), av = (
      /*                             */
      67108864
    ), IS = Js, ml = (
      /*          */
      134217728
    ), US = (
      /*                          */
      268435455
    ), yl = (
      /*               */
      268435456
    ), Wo = (
      /*                        */
      536870912
    ), na = (
      /*                   */
      1073741824
    );
    function uD(e) {
      {
        if (e & qe)
          return "Sync";
        if (e & Xs)
          return "InputContinuousHydration";
        if (e & hi)
          return "InputContinuous";
        if (e & Go)
          return "DefaultHydration";
        if (e & Ba)
          return "Default";
        if (e & hl)
          return "TransitionHydration";
        if (e & Qs)
          return "Transition";
        if (e & _f)
          return "Retry";
        if (e & ml)
          return "SelectiveHydration";
        if (e & yl)
          return "IdleHydration";
        if (e & Wo)
          return "Idle";
        if (e & na)
          return "Offscreen";
      }
    }
    var an = -1, Tf = vl, Cf = Js;
    function gl(e) {
      switch (Ko(e)) {
        case qe:
          return qe;
        case Xs:
          return Xs;
        case hi:
          return hi;
        case Go:
          return Go;
        case Ba:
          return Ba;
        case hl:
          return hl;
        case vl:
        case Ph:
        case Bh:
        case $h:
        case Hh:
        case Vh:
        case qh:
        case Yh:
        case Gh:
        case Wh:
        case Kh:
        case Xh:
        case Qh:
        case Jh:
        case Zh:
        case ev:
          return e & Qs;
        case Js:
        case tv:
        case nv:
        case rv:
        case av:
          return e & _f;
        case ml:
          return ml;
        case yl:
          return yl;
        case Wo:
          return Wo;
        case na:
          return na;
        default:
          return d("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Rf(e, t) {
      var r = e.pendingLanes;
      if (r === te)
        return te;
      var i = te, s = e.suspendedLanes, c = e.pingedLanes, p = r & US;
      if (p !== te) {
        var v = p & ~s;
        if (v !== te)
          i = gl(v);
        else {
          var b = p & c;
          b !== te && (i = gl(b));
        }
      } else {
        var C = r & ~s;
        C !== te ? i = gl(C) : c !== te && (i = gl(c));
      }
      if (i === te)
        return te;
      if (t !== te && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & s) === te) {
        var x = Ko(i), N = Ko(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === Ba && (N & Qs) !== te
        )
          return t;
      }
      (i & hi) !== te && (i |= r & Ba);
      var L = e.entangledLanes;
      if (L !== te)
        for (var F = e.entanglements, $ = i & L; $ > 0; ) {
          var G = Xo($), ye = 1 << G;
          i |= F[G], $ &= ~ye;
        }
      return i;
    }
    function lD(e, t) {
      for (var r = e.eventTimes, i = an; t > 0; ) {
        var s = Xo(t), c = 1 << s, p = r[s];
        p > i && (i = p), t &= ~c;
      }
      return i;
    }
    function cD(e, t) {
      switch (e) {
        case qe:
        case Xs:
        case hi:
          return t + 250;
        case Go:
        case Ba:
        case hl:
        case vl:
        case Ph:
        case Bh:
        case $h:
        case Hh:
        case Vh:
        case qh:
        case Yh:
        case Gh:
        case Wh:
        case Kh:
        case Xh:
        case Qh:
        case Jh:
        case Zh:
        case ev:
          return t + 5e3;
        case Js:
        case tv:
        case nv:
        case rv:
        case av:
          return an;
        case ml:
        case yl:
        case Wo:
        case na:
          return an;
        default:
          return d("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function fD(e, t) {
      for (var r = e.pendingLanes, i = e.suspendedLanes, s = e.pingedLanes, c = e.expirationTimes, p = r; p > 0; ) {
        var v = Xo(p), b = 1 << v, C = c[v];
        C === an ? ((b & i) === te || (b & s) !== te) && (c[v] = cD(b, t)) : C <= t && (e.expiredLanes |= b), p &= ~b;
      }
    }
    function dD(e) {
      return gl(e.pendingLanes);
    }
    function iv(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== te ? t : t & na ? na : te;
    }
    function pD(e) {
      return (e & qe) !== te;
    }
    function ov(e) {
      return (e & US) !== te;
    }
    function jS(e) {
      return (e & _f) === e;
    }
    function hD(e) {
      var t = qe | hi | Ba;
      return (e & t) === te;
    }
    function vD(e) {
      return (e & Qs) === e;
    }
    function xf(e, t) {
      var r = Xs | hi | Go | Ba;
      return (t & r) !== te;
    }
    function mD(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function FS(e) {
      return (e & Qs) !== te;
    }
    function zS() {
      var e = Tf;
      return Tf <<= 1, (Tf & Qs) === te && (Tf = vl), e;
    }
    function yD() {
      var e = Cf;
      return Cf <<= 1, (Cf & _f) === te && (Cf = Js), e;
    }
    function Ko(e) {
      return e & -e;
    }
    function bl(e) {
      return Ko(e);
    }
    function Xo(e) {
      return 31 - MS(e);
    }
    function sv(e) {
      return Xo(e);
    }
    function Br(e, t) {
      return (e & t) !== te;
    }
    function Zs(e, t) {
      return (e & t) === t;
    }
    function st(e, t) {
      return e | t;
    }
    function wf(e, t) {
      return e & ~t;
    }
    function PS(e, t) {
      return e & t;
    }
    function L3(e) {
      return e;
    }
    function gD(e, t) {
      return e !== Bn && e < t ? e : t;
    }
    function uv(e) {
      for (var t = [], r = 0; r < zh; r++)
        t.push(e);
      return t;
    }
    function Sl(e, t, r) {
      e.pendingLanes |= t, t !== Wo && (e.suspendedLanes = te, e.pingedLanes = te);
      var i = e.eventTimes, s = sv(t);
      i[s] = r;
    }
    function bD(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var r = e.expirationTimes, i = t; i > 0; ) {
        var s = Xo(i), c = 1 << s;
        r[s] = an, i &= ~c;
      }
    }
    function BS(e, t, r) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function SD(e, t) {
      var r = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, s = e.eventTimes, c = e.expirationTimes, p = r; p > 0; ) {
        var v = Xo(p), b = 1 << v;
        i[v] = te, s[v] = an, c[v] = an, p &= ~b;
      }
    }
    function lv(e, t) {
      for (var r = e.entangledLanes |= t, i = e.entanglements, s = r; s; ) {
        var c = Xo(s), p = 1 << c;
        // Is this one of the newly entangled lanes?
        p & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), s &= ~p;
      }
    }
    function ED(e, t) {
      var r = Ko(t), i;
      switch (r) {
        case hi:
          i = Xs;
          break;
        case Ba:
          i = Go;
          break;
        case vl:
        case Ph:
        case Bh:
        case $h:
        case Hh:
        case Vh:
        case qh:
        case Yh:
        case Gh:
        case Wh:
        case Kh:
        case Xh:
        case Qh:
        case Jh:
        case Zh:
        case ev:
        case Js:
        case tv:
        case nv:
        case rv:
        case av:
          i = hl;
          break;
        case Wo:
          i = yl;
          break;
        default:
          i = Bn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Bn ? Bn : i;
    }
    function $S(e, t, r) {
      if (ba)
        for (var i = e.pendingUpdatersLaneMap; r > 0; ) {
          var s = sv(r), c = 1 << s, p = i[s];
          p.add(t), r &= ~c;
        }
    }
    function HS(e, t) {
      if (ba)
        for (var r = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var s = sv(t), c = 1 << s, p = r[s];
          p.size > 0 && (p.forEach(function(v) {
            var b = v.alternate;
            (b === null || !i.has(b)) && i.add(v);
          }), p.clear()), t &= ~c;
        }
    }
    function VS(e, t) {
      return null;
    }
    var $r = qe, vi = hi, mi = Ba, Of = Wo, El = Bn;
    function Sa() {
      return El;
    }
    function $n(e) {
      El = e;
    }
    function _D(e, t) {
      var r = El;
      try {
        return El = e, t();
      } finally {
        El = r;
      }
    }
    function TD(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function CD(e, t) {
      return e > t ? e : t;
    }
    function cv(e, t) {
      return e !== 0 && e < t;
    }
    function qS(e) {
      var t = Ko(e);
      return cv($r, t) ? cv(vi, t) ? ov(t) ? mi : Of : vi : $r;
    }
    function Af(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var YS;
    function RD(e) {
      YS = e;
    }
    function xD(e) {
      YS(e);
    }
    var fv;
    function wD(e) {
      fv = e;
    }
    var GS;
    function OD(e) {
      GS = e;
    }
    var WS;
    function AD(e) {
      WS = e;
    }
    var KS;
    function DD(e) {
      KS = e;
    }
    var dv = !1, Df = [], Ji = null, Zi = null, eo = null, _l = /* @__PURE__ */ new Map(), Tl = /* @__PURE__ */ new Map(), to = [], kD = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function LD(e) {
      return kD.indexOf(e) > -1;
    }
    function ND(e, t, r, i, s) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
      };
    }
    function XS(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ji = null;
          break;
        case "dragenter":
        case "dragleave":
          Zi = null;
          break;
        case "mouseover":
        case "mouseout":
          eo = null;
          break;
        case "pointerover":
        case "pointerout": {
          var r = t.pointerId;
          _l.delete(r);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Tl.delete(i);
          break;
        }
      }
    }
    function Cl(e, t, r, i, s, c) {
      if (e === null || e.nativeEvent !== c) {
        var p = ND(t, r, i, s, c);
        if (t !== null) {
          var v = ao(t);
          v !== null && fv(v);
        }
        return p;
      }
      e.eventSystemFlags |= i;
      var b = e.targetContainers;
      return s !== null && b.indexOf(s) === -1 && b.push(s), e;
    }
    function MD(e, t, r, i, s) {
      switch (t) {
        case "focusin": {
          var c = s;
          return Ji = Cl(Ji, e, t, r, i, c), !0;
        }
        case "dragenter": {
          var p = s;
          return Zi = Cl(Zi, e, t, r, i, p), !0;
        }
        case "mouseover": {
          var v = s;
          return eo = Cl(eo, e, t, r, i, v), !0;
        }
        case "pointerover": {
          var b = s, C = b.pointerId;
          return _l.set(C, Cl(_l.get(C) || null, e, t, r, i, b)), !0;
        }
        case "gotpointercapture": {
          var x = s, N = x.pointerId;
          return Tl.set(N, Cl(Tl.get(N) || null, e, t, r, i, x)), !0;
        }
      }
      return !1;
    }
    function QS(e) {
      var t = Zo(e.target);
      if (t !== null) {
        var r = qo(t);
        if (r !== null) {
          var i = r.tag;
          if (i === oe) {
            var s = ES(r);
            if (s !== null) {
              e.blockedOn = s, KS(e.priority, function() {
                GS(r);
              });
              return;
            }
          } else if (i === R) {
            var c = r.stateNode;
            if (Af(c)) {
              e.blockedOn = _S(r);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function ID(e) {
      for (var t = WS(), r = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < to.length && cv(t, to[i].priority); i++)
        ;
      to.splice(i, 0, r), i === 0 && QS(r);
    }
    function kf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var r = t[0], i = vv(e.domEventName, e.eventSystemFlags, r, e.nativeEvent);
        if (i === null) {
          var s = e.nativeEvent, c = new s.constructor(s.type, s);
          uA(c), s.target.dispatchEvent(c), lA();
        } else {
          var p = ao(i);
          return p !== null && fv(p), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function JS(e, t, r) {
      kf(e) && r.delete(t);
    }
    function UD() {
      dv = !1, Ji !== null && kf(Ji) && (Ji = null), Zi !== null && kf(Zi) && (Zi = null), eo !== null && kf(eo) && (eo = null), _l.forEach(JS), Tl.forEach(JS);
    }
    function Rl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, dv || (dv = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, UD)));
    }
    function xl(e) {
      if (Df.length > 0) {
        Rl(Df[0], e);
        for (var t = 1; t < Df.length; t++) {
          var r = Df[t];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      Ji !== null && Rl(Ji, e), Zi !== null && Rl(Zi, e), eo !== null && Rl(eo, e);
      var i = function(v) {
        return Rl(v, e);
      };
      _l.forEach(i), Tl.forEach(i);
      for (var s = 0; s < to.length; s++) {
        var c = to[s];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; to.length > 0; ) {
        var p = to[0];
        if (p.blockedOn !== null)
          break;
        QS(p), p.blockedOn === null && to.shift();
      }
    }
    var eu = o.ReactCurrentBatchConfig, pv = !0;
    function ZS(e) {
      pv = !!e;
    }
    function jD() {
      return pv;
    }
    function FD(e, t, r) {
      var i = eE(t), s;
      switch (i) {
        case $r:
          s = zD;
          break;
        case vi:
          s = PD;
          break;
        case mi:
        default:
          s = hv;
          break;
      }
      return s.bind(null, t, r, e);
    }
    function zD(e, t, r, i) {
      var s = Sa(), c = eu.transition;
      eu.transition = null;
      try {
        $n($r), hv(e, t, r, i);
      } finally {
        $n(s), eu.transition = c;
      }
    }
    function PD(e, t, r, i) {
      var s = Sa(), c = eu.transition;
      eu.transition = null;
      try {
        $n(vi), hv(e, t, r, i);
      } finally {
        $n(s), eu.transition = c;
      }
    }
    function hv(e, t, r, i) {
      pv && BD(e, t, r, i);
    }
    function BD(e, t, r, i) {
      var s = vv(e, t, r, i);
      if (s === null) {
        Av(e, t, i, Lf, r), XS(e, i);
        return;
      }
      if (MD(s, e, t, r, i)) {
        i.stopPropagation();
        return;
      }
      if (XS(e, i), t & ul && LD(e)) {
        for (; s !== null; ) {
          var c = ao(s);
          c !== null && xD(c);
          var p = vv(e, t, r, i);
          if (p === null && Av(e, t, i, Lf, r), p === s)
            break;
          s = p;
        }
        s !== null && i.stopPropagation();
        return;
      }
      Av(e, t, i, null, r);
    }
    var Lf = null;
    function vv(e, t, r, i) {
      Lf = null;
      var s = Eh(i), c = Zo(s);
      if (c !== null) {
        var p = qo(c);
        if (p === null)
          c = null;
        else {
          var v = p.tag;
          if (v === oe) {
            var b = ES(p);
            if (b !== null)
              return b;
            c = null;
          } else if (v === R) {
            var C = p.stateNode;
            if (Af(C))
              return _S(p);
            c = null;
          } else p !== c && (c = null);
        }
      }
      return Lf = c, null;
    }
    function eE(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return $r;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return vi;
        case "message": {
          var t = LA();
          switch (t) {
            case Ef:
              return $r;
            case Uh:
              return vi;
            case Yo:
            case NA:
              return mi;
            case jh:
              return Of;
            default:
              return mi;
          }
        }
        default:
          return mi;
      }
    }
    function $D(e, t, r) {
      return e.addEventListener(t, r, !1), r;
    }
    function HD(e, t, r) {
      return e.addEventListener(t, r, !0), r;
    }
    function VD(e, t, r, i) {
      return e.addEventListener(t, r, {
        capture: !0,
        passive: i
      }), r;
    }
    function qD(e, t, r, i) {
      return e.addEventListener(t, r, {
        passive: i
      }), r;
    }
    var wl = null, mv = null, Ol = null;
    function YD(e) {
      return wl = e, mv = nE(), !0;
    }
    function GD() {
      wl = null, mv = null, Ol = null;
    }
    function tE() {
      if (Ol)
        return Ol;
      var e, t = mv, r = t.length, i, s = nE(), c = s.length;
      for (e = 0; e < r && t[e] === s[e]; e++)
        ;
      var p = r - e;
      for (i = 1; i <= p && t[r - i] === s[c - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Ol = s.slice(e, v), Ol;
    }
    function nE() {
      return "value" in wl ? wl.value : wl.textContent;
    }
    function Nf(e) {
      var t, r = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Mf() {
      return !0;
    }
    function rE() {
      return !1;
    }
    function Hr(e) {
      function t(r, i, s, c, p) {
        this._reactName = r, this._targetInst = s, this.type = i, this.nativeEvent = c, this.target = p, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var b = e[v];
            b ? this[v] = b(c) : this[v] = c[v];
          }
        var C = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return C ? this.isDefaultPrevented = Mf : this.isDefaultPrevented = rE, this.isPropagationStopped = rE, this;
      }
      return nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Mf);
        },
        stopPropagation: function() {
          var r = this.nativeEvent;
          r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Mf);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Mf
      }), t;
    }
    var tu = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, yv = Hr(tu), Al = nt({}, tu, {
      view: 0,
      detail: 0
    }), WD = Hr(Al), gv, bv, Dl;
    function KD(e) {
      e !== Dl && (Dl && e.type === "mousemove" ? (gv = e.screenX - Dl.screenX, bv = e.screenY - Dl.screenY) : (gv = 0, bv = 0), Dl = e);
    }
    var If = nt({}, Al, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ev,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (KD(e), gv);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : bv;
      }
    }), aE = Hr(If), XD = nt({}, If, {
      dataTransfer: 0
    }), QD = Hr(XD), JD = nt({}, Al, {
      relatedTarget: 0
    }), Sv = Hr(JD), ZD = nt({}, tu, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ek = Hr(ZD), tk = nt({}, tu, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), nk = Hr(tk), rk = nt({}, tu, {
      data: 0
    }), iE = Hr(rk), ak = iE, ik = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, ok = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function sk(e) {
      if (e.key) {
        var t = ik[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var r = Nf(e);
        return r === 13 ? "Enter" : String.fromCharCode(r);
      }
      return e.type === "keydown" || e.type === "keyup" ? ok[e.keyCode] || "Unidentified" : "";
    }
    var uk = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function lk(e) {
      var t = this, r = t.nativeEvent;
      if (r.getModifierState)
        return r.getModifierState(e);
      var i = uk[e];
      return i ? !!r[i] : !1;
    }
    function Ev(e) {
      return lk;
    }
    var ck = nt({}, Al, {
      key: sk,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ev,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Nf(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Nf(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), fk = Hr(ck), dk = nt({}, If, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), oE = Hr(dk), pk = nt({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ev
    }), hk = Hr(pk), vk = nt({}, tu, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), mk = Hr(vk), yk = nt({}, If, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), gk = Hr(yk), bk = [9, 13, 27, 32], sE = 229, _v = vt && "CompositionEvent" in window, kl = null;
    vt && "documentMode" in document && (kl = document.documentMode);
    var Sk = vt && "TextEvent" in window && !kl, uE = vt && (!_v || kl && kl > 8 && kl <= 11), lE = 32, cE = String.fromCharCode(lE);
    function Ek() {
      ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ze("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ze("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ze("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var fE = !1;
    function _k(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Tk(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ck(e, t) {
      return e === "keydown" && t.keyCode === sE;
    }
    function dE(e, t) {
      switch (e) {
        case "keyup":
          return bk.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== sE;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pE(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hE(e) {
      return e.locale === "ko";
    }
    var nu = !1;
    function Rk(e, t, r, i, s) {
      var c, p;
      if (_v ? c = Tk(t) : nu ? dE(t, i) && (c = "onCompositionEnd") : Ck(t, i) && (c = "onCompositionStart"), !c)
        return null;
      uE && !hE(i) && (!nu && c === "onCompositionStart" ? nu = YD(s) : c === "onCompositionEnd" && nu && (p = tE()));
      var v = Pf(r, c);
      if (v.length > 0) {
        var b = new iE(c, t, null, i, s);
        if (e.push({
          event: b,
          listeners: v
        }), p)
          b.data = p;
        else {
          var C = pE(i);
          C !== null && (b.data = C);
        }
      }
    }
    function xk(e, t) {
      switch (e) {
        case "compositionend":
          return pE(t);
        case "keypress":
          var r = t.which;
          return r !== lE ? null : (fE = !0, cE);
        case "textInput":
          var i = t.data;
          return i === cE && fE ? null : i;
        default:
          return null;
      }
    }
    function wk(e, t) {
      if (nu) {
        if (e === "compositionend" || !_v && dE(e, t)) {
          var r = tE();
          return GD(), nu = !1, r;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!_k(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return uE && !hE(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ok(e, t, r, i, s) {
      var c;
      if (Sk ? c = xk(t, i) : c = wk(t, i), !c)
        return null;
      var p = Pf(r, "onBeforeInput");
      if (p.length > 0) {
        var v = new ak("onBeforeInput", "beforeinput", null, i, s);
        e.push({
          event: v,
          listeners: p
        }), v.data = c;
      }
    }
    function Ak(e, t, r, i, s, c, p) {
      Rk(e, t, r, i, s), Ok(e, t, r, i, s);
    }
    var Dk = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function vE(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Dk[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function kk(e) {
      if (!vt)
        return !1;
      var t = "on" + e, r = t in document;
      if (!r) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), r = typeof i[t] == "function";
      }
      return r;
    }
    function Lk() {
      ze("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function mE(e, t, r, i) {
      dS(i);
      var s = Pf(t, "onChange");
      if (s.length > 0) {
        var c = new yv("onChange", "change", null, r, i);
        e.push({
          event: c,
          listeners: s
        });
      }
    }
    var Ll = null, Nl = null;
    function Nk(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function Mk(e) {
      var t = [];
      mE(t, Nl, e, Eh(e)), mS(Ik, t);
    }
    function Ik(e) {
      ME(e, 0);
    }
    function Uf(e) {
      var t = uu(e);
      if (nl(t))
        return e;
    }
    function Uk(e, t) {
      if (e === "change")
        return t;
    }
    var yE = !1;
    vt && (yE = kk("input") && (!document.documentMode || document.documentMode > 9));
    function jk(e, t) {
      Ll = e, Nl = t, Ll.attachEvent("onpropertychange", bE);
    }
    function gE() {
      Ll && (Ll.detachEvent("onpropertychange", bE), Ll = null, Nl = null);
    }
    function bE(e) {
      e.propertyName === "value" && Uf(Nl) && Mk(e);
    }
    function Fk(e, t, r) {
      e === "focusin" ? (gE(), jk(t, r)) : e === "focusout" && gE();
    }
    function zk(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Uf(Nl);
    }
    function Pk(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Bk(e, t) {
      if (e === "click")
        return Uf(t);
    }
    function $k(e, t) {
      if (e === "input" || e === "change")
        return Uf(t);
    }
    function Hk(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Pe(e, "number", e.value);
    }
    function Vk(e, t, r, i, s, c, p) {
      var v = r ? uu(r) : window, b, C;
      if (Nk(v) ? b = Uk : vE(v) ? yE ? b = $k : (b = zk, C = Fk) : Pk(v) && (b = Bk), b) {
        var x = b(t, r);
        if (x) {
          mE(e, x, i, s);
          return;
        }
      }
      C && C(t, v, r), t === "focusout" && Hk(v);
    }
    function qk() {
      Ne("onMouseEnter", ["mouseout", "mouseover"]), Ne("onMouseLeave", ["mouseout", "mouseover"]), Ne("onPointerEnter", ["pointerout", "pointerover"]), Ne("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Yk(e, t, r, i, s, c, p) {
      var v = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (v && !cA(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Zo(C) || Wl(C)))
          return;
      }
      if (!(!b && !v)) {
        var x;
        if (s.window === s)
          x = s;
        else {
          var N = s.ownerDocument;
          N ? x = N.defaultView || N.parentWindow : x = window;
        }
        var L, F;
        if (b) {
          var $ = i.relatedTarget || i.toElement;
          if (L = r, F = $ ? Zo($) : null, F !== null) {
            var G = qo(F);
            (F !== G || F.tag !== w && F.tag !== D) && (F = null);
          }
        } else
          L = null, F = r;
        if (L !== F) {
          var ye = aE, Me = "onMouseLeave", De = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (ye = oE, Me = "onPointerLeave", De = "onPointerEnter", _t = "pointer");
          var yt = L == null ? x : uu(L), U = F == null ? x : uu(F), W = new ye(Me, _t + "leave", L, i, s);
          W.target = yt, W.relatedTarget = U;
          var j = null, re = Zo(s);
          if (re === r) {
            var _e = new ye(De, _t + "enter", F, i, s);
            _e.target = U, _e.relatedTarget = yt, j = _e;
          }
          mL(e, W, j, L, F);
        }
      }
    }
    function Gk(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Vr = typeof Object.is == "function" ? Object.is : Gk;
    function Ml(e, t) {
      if (Vr(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var r = Object.keys(e), i = Object.keys(t);
      if (r.length !== i.length)
        return !1;
      for (var s = 0; s < r.length; s++) {
        var c = r[s];
        if (!ue.call(t, c) || !Vr(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function SE(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Wk(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function EE(e, t) {
      for (var r = SE(e), i = 0, s = 0; r; ) {
        if (r.nodeType === fi) {
          if (s = i + r.textContent.length, i <= t && s >= t)
            return {
              node: r,
              offset: t - i
            };
          i = s;
        }
        r = SE(Wk(r));
      }
    }
    function Kk(e) {
      var t = e.ownerDocument, r = t && t.defaultView || window, i = r.getSelection && r.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var s = i.anchorNode, c = i.anchorOffset, p = i.focusNode, v = i.focusOffset;
      try {
        s.nodeType, p.nodeType;
      } catch {
        return null;
      }
      return Xk(e, s, c, p, v);
    }
    function Xk(e, t, r, i, s) {
      var c = 0, p = -1, v = -1, b = 0, C = 0, x = e, N = null;
      e: for (; ; ) {
        for (var L = null; x === t && (r === 0 || x.nodeType === fi) && (p = c + r), x === i && (s === 0 || x.nodeType === fi) && (v = c + s), x.nodeType === fi && (c += x.nodeValue.length), (L = x.firstChild) !== null; )
          N = x, x = L;
        for (; ; ) {
          if (x === e)
            break e;
          if (N === t && ++b === r && (p = c), N === i && ++C === s && (v = c), (L = x.nextSibling) !== null)
            break;
          x = N, N = x.parentNode;
        }
        x = L;
      }
      return p === -1 || v === -1 ? null : {
        start: p,
        end: v
      };
    }
    function Qk(e, t) {
      var r = e.ownerDocument || document, i = r && r.defaultView || window;
      if (i.getSelection) {
        var s = i.getSelection(), c = e.textContent.length, p = Math.min(t.start, c), v = t.end === void 0 ? p : Math.min(t.end, c);
        if (!s.extend && p > v) {
          var b = v;
          v = p, p = b;
        }
        var C = EE(e, p), x = EE(e, v);
        if (C && x) {
          if (s.rangeCount === 1 && s.anchorNode === C.node && s.anchorOffset === C.offset && s.focusNode === x.node && s.focusOffset === x.offset)
            return;
          var N = r.createRange();
          N.setStart(C.node, C.offset), s.removeAllRanges(), p > v ? (s.addRange(N), s.extend(x.node, x.offset)) : (N.setEnd(x.node, x.offset), s.addRange(N));
        }
      }
    }
    function _E(e) {
      return e && e.nodeType === fi;
    }
    function TE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : _E(e) ? !1 : _E(t) ? TE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Jk(e) {
      return e && e.ownerDocument && TE(e.ownerDocument.documentElement, e);
    }
    function Zk(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function CE() {
      for (var e = window, t = ui(); t instanceof e.HTMLIFrameElement; ) {
        if (Zk(t))
          e = t.contentWindow;
        else
          return t;
        t = ui(e.document);
      }
      return t;
    }
    function Tv(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function eL() {
      var e = CE();
      return {
        focusedElem: e,
        selectionRange: Tv(e) ? nL(e) : null
      };
    }
    function tL(e) {
      var t = CE(), r = e.focusedElem, i = e.selectionRange;
      if (t !== r && Jk(r)) {
        i !== null && Tv(r) && rL(r, i);
        for (var s = [], c = r; c = c.parentNode; )
          c.nodeType === xr && s.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof r.focus == "function" && r.focus();
        for (var p = 0; p < s.length; p++) {
          var v = s[p];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function nL(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Kk(e), t || {
        start: 0,
        end: 0
      };
    }
    function rL(e, t) {
      var r = t.start, i = t.end;
      i === void 0 && (i = r), "selectionStart" in e ? (e.selectionStart = r, e.selectionEnd = Math.min(i, e.value.length)) : Qk(e, t);
    }
    var aL = vt && "documentMode" in document && document.documentMode <= 11;
    function iL() {
      ze("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ru = null, Cv = null, Il = null, Rv = !1;
    function oL(e) {
      if ("selectionStart" in e && Tv(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, r = t.getSelection();
      return {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      };
    }
    function sL(e) {
      return e.window === e ? e.document : e.nodeType === di ? e : e.ownerDocument;
    }
    function RE(e, t, r) {
      var i = sL(r);
      if (!(Rv || ru == null || ru !== ui(i))) {
        var s = oL(ru);
        if (!Il || !Ml(Il, s)) {
          Il = s;
          var c = Pf(Cv, "onSelect");
          if (c.length > 0) {
            var p = new yv("onSelect", "select", null, t, r);
            e.push({
              event: p,
              listeners: c
            }), p.target = ru;
          }
        }
      }
    }
    function uL(e, t, r, i, s, c, p) {
      var v = r ? uu(r) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (vE(v) || v.contentEditable === "true") && (ru = v, Cv = r, Il = null);
          break;
        case "focusout":
          ru = null, Cv = null, Il = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Rv = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Rv = !1, RE(e, i, s);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (aL)
            break;
        // falls through
        case "keydown":
        case "keyup":
          RE(e, i, s);
      }
    }
    function jf(e, t) {
      var r = {};
      return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
    }
    var au = {
      animationend: jf("Animation", "AnimationEnd"),
      animationiteration: jf("Animation", "AnimationIteration"),
      animationstart: jf("Animation", "AnimationStart"),
      transitionend: jf("Transition", "TransitionEnd")
    }, xv = {}, xE = {};
    vt && (xE = document.createElement("div").style, "AnimationEvent" in window || (delete au.animationend.animation, delete au.animationiteration.animation, delete au.animationstart.animation), "TransitionEvent" in window || delete au.transitionend.transition);
    function Ff(e) {
      if (xv[e])
        return xv[e];
      if (!au[e])
        return e;
      var t = au[e];
      for (var r in t)
        if (t.hasOwnProperty(r) && r in xE)
          return xv[e] = t[r];
      return e;
    }
    var wE = Ff("animationend"), OE = Ff("animationiteration"), AE = Ff("animationstart"), DE = Ff("transitionend"), kE = /* @__PURE__ */ new Map(), LE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function no(e, t) {
      kE.set(e, t), ze(t, [e]);
    }
    function lL() {
      for (var e = 0; e < LE.length; e++) {
        var t = LE[e], r = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        no(r, "on" + i);
      }
      no(wE, "onAnimationEnd"), no(OE, "onAnimationIteration"), no(AE, "onAnimationStart"), no("dblclick", "onDoubleClick"), no("focusin", "onFocus"), no("focusout", "onBlur"), no(DE, "onTransitionEnd");
    }
    function cL(e, t, r, i, s, c, p) {
      var v = kE.get(t);
      if (v !== void 0) {
        var b = yv, C = t;
        switch (t) {
          case "keypress":
            if (Nf(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            b = fk;
            break;
          case "focusin":
            C = "focus", b = Sv;
            break;
          case "focusout":
            C = "blur", b = Sv;
            break;
          case "beforeblur":
          case "afterblur":
            b = Sv;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = aE;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = QD;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = hk;
            break;
          case wE:
          case OE:
          case AE:
            b = ek;
            break;
          case DE:
            b = mk;
            break;
          case "scroll":
            b = WD;
            break;
          case "wheel":
            b = gk;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = nk;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = oE;
            break;
        }
        var x = (c & ul) !== 0;
        {
          var N = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", L = hL(r, v, i.type, x, N);
          if (L.length > 0) {
            var F = new b(v, C, null, i, s);
            e.push({
              event: F,
              listeners: L
            });
          }
        }
      }
    }
    lL(), qk(), Lk(), iL(), Ek();
    function fL(e, t, r, i, s, c, p) {
      cL(e, t, r, i, s, c);
      var v = (c & sA) === 0;
      v && (Yk(e, t, r, i, s), Vk(e, t, r, i, s), uL(e, t, r, i, s), Ak(e, t, r, i, s));
    }
    var Ul = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wv = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Ul));
    function NE(e, t, r) {
      var i = e.type || "unknown-event";
      e.currentTarget = r, bA(i, t, void 0, e), e.currentTarget = null;
    }
    function dL(e, t, r) {
      var i;
      if (r)
        for (var s = t.length - 1; s >= 0; s--) {
          var c = t[s], p = c.instance, v = c.currentTarget, b = c.listener;
          if (p !== i && e.isPropagationStopped())
            return;
          NE(e, b, v), i = p;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var x = t[C], N = x.instance, L = x.currentTarget, F = x.listener;
          if (N !== i && e.isPropagationStopped())
            return;
          NE(e, F, L), i = N;
        }
    }
    function ME(e, t) {
      for (var r = (t & ul) !== 0, i = 0; i < e.length; i++) {
        var s = e[i], c = s.event, p = s.listeners;
        dL(c, p, r);
      }
      SA();
    }
    function pL(e, t, r, i, s) {
      var c = Eh(r), p = [];
      fL(p, e, i, r, c, t), ME(p, t);
    }
    function on(e, t) {
      wv.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var r = !1, i = H1(t), s = yL(e);
      i.has(s) || (IE(t, e, Sh, r), i.add(s));
    }
    function Ov(e, t, r) {
      wv.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ul), IE(r, e, i, t);
    }
    var zf = "_reactListening" + Math.random().toString(36).slice(2);
    function jl(e) {
      if (!e[zf]) {
        e[zf] = !0, Be.forEach(function(r) {
          r !== "selectionchange" && (wv.has(r) || Ov(r, !1, e), Ov(r, !0, e));
        });
        var t = e.nodeType === di ? e : e.ownerDocument;
        t !== null && (t[zf] || (t[zf] = !0, Ov("selectionchange", !1, t)));
      }
    }
    function IE(e, t, r, i, s) {
      var c = FD(e, t, r), p = void 0;
      Ch && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, i ? p !== void 0 ? VD(e, t, c, p) : HD(e, t, c) : p !== void 0 ? qD(e, t, c, p) : $D(e, t, c);
    }
    function UE(e, t) {
      return e === t || e.nodeType === _n && e.parentNode === t;
    }
    function Av(e, t, r, i, s) {
      var c = i;
      if (!(t & cS) && !(t & Sh)) {
        var p = s;
        if (i !== null) {
          var v = i;
          e: for (; ; ) {
            if (v === null)
              return;
            var b = v.tag;
            if (b === R || b === T) {
              var C = v.stateNode.containerInfo;
              if (UE(C, p))
                break;
              if (b === T)
                for (var x = v.return; x !== null; ) {
                  var N = x.tag;
                  if (N === R || N === T) {
                    var L = x.stateNode.containerInfo;
                    if (UE(L, p))
                      return;
                  }
                  x = x.return;
                }
              for (; C !== null; ) {
                var F = Zo(C);
                if (F === null)
                  return;
                var $ = F.tag;
                if ($ === w || $ === D) {
                  v = c = F;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            v = v.return;
          }
        }
      }
      mS(function() {
        return pL(e, t, r, c);
      });
    }
    function Fl(e, t, r) {
      return {
        instance: e,
        listener: t,
        currentTarget: r
      };
    }
    function hL(e, t, r, i, s, c) {
      for (var p = t !== null ? t + "Capture" : null, v = i ? p : t, b = [], C = e, x = null; C !== null; ) {
        var N = C, L = N.stateNode, F = N.tag;
        if (F === w && L !== null && (x = L, v !== null)) {
          var $ = cl(C, v);
          $ != null && b.push(Fl(C, $, x));
        }
        if (s)
          break;
        C = C.return;
      }
      return b;
    }
    function Pf(e, t) {
      for (var r = t + "Capture", i = [], s = e; s !== null; ) {
        var c = s, p = c.stateNode, v = c.tag;
        if (v === w && p !== null) {
          var b = p, C = cl(s, r);
          C != null && i.unshift(Fl(s, C, b));
          var x = cl(s, t);
          x != null && i.push(Fl(s, x, b));
        }
        s = s.return;
      }
      return i;
    }
    function iu(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== w);
      return e || null;
    }
    function vL(e, t) {
      for (var r = e, i = t, s = 0, c = r; c; c = iu(c))
        s++;
      for (var p = 0, v = i; v; v = iu(v))
        p++;
      for (; s - p > 0; )
        r = iu(r), s--;
      for (; p - s > 0; )
        i = iu(i), p--;
      for (var b = s; b--; ) {
        if (r === i || i !== null && r === i.alternate)
          return r;
        r = iu(r), i = iu(i);
      }
      return null;
    }
    function jE(e, t, r, i, s) {
      for (var c = t._reactName, p = [], v = r; v !== null && v !== i; ) {
        var b = v, C = b.alternate, x = b.stateNode, N = b.tag;
        if (C !== null && C === i)
          break;
        if (N === w && x !== null) {
          var L = x;
          if (s) {
            var F = cl(v, c);
            F != null && p.unshift(Fl(v, F, L));
          } else if (!s) {
            var $ = cl(v, c);
            $ != null && p.push(Fl(v, $, L));
          }
        }
        v = v.return;
      }
      p.length !== 0 && e.push({
        event: t,
        listeners: p
      });
    }
    function mL(e, t, r, i, s) {
      var c = i && s ? vL(i, s) : null;
      i !== null && jE(e, t, i, c, !1), s !== null && r !== null && jE(e, r, s, c, !0);
    }
    function yL(e, t) {
      return e + "__bubble";
    }
    var wr = !1, zl = "dangerouslySetInnerHTML", Bf = "suppressContentEditableWarning", ro = "suppressHydrationWarning", FE = "autoFocus", Qo = "children", Jo = "style", $f = "__html", Dv, Hf, Pl, zE, Vf, PE, BE;
    Dv = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Hf = function(e, t) {
      eA(e, t), tA(e, t), oA(e, t, {
        registrationNameDependencies: ke,
        possibleRegistrationNames: $e
      });
    }, PE = vt && !document.documentMode, Pl = function(e, t, r) {
      if (!wr) {
        var i = qf(r), s = qf(t);
        s !== i && (wr = !0, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(i)));
      }
    }, zE = function(e) {
      if (!wr) {
        wr = !0;
        var t = [];
        e.forEach(function(r) {
          t.push(r);
        }), d("Extra attributes from the server: %s", t);
      }
    }, Vf = function(e, t) {
      t === !1 ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, BE = function(e, t) {
      var r = e.namespaceURI === ci ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return r.innerHTML = t, r.innerHTML;
    };
    var gL = /\r\n?/g, bL = /\u0000|\uFFFD/g;
    function qf(e) {
      Vn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(gL, `
`).replace(bL, "");
    }
    function Yf(e, t, r, i) {
      var s = qf(t), c = qf(e);
      if (c !== s && (i && (wr || (wr = !0, d('Text content did not match. Server: "%s" Client: "%s"', c, s))), r && Oe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function $E(e) {
      return e.nodeType === di ? e : e.ownerDocument;
    }
    function SL() {
    }
    function Gf(e) {
      e.onclick = SL;
    }
    function EL(e, t, r, i, s) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var p = i[c];
          if (c === Jo)
            p && Object.freeze(p), aS(t, p);
          else if (c === zl) {
            var v = p ? p[$f] : void 0;
            v != null && Zb(t, v);
          } else if (c === Qo)
            if (typeof p == "string") {
              var b = e !== "textarea" || p !== "";
              b && vf(t, p);
            } else typeof p == "number" && vf(t, "" + p);
          else c === Bf || c === ro || c === FE || (ke.hasOwnProperty(c) ? p != null && (typeof p != "function" && Vf(c, p), c === "onScroll" && on("scroll", t)) : p != null && jr(t, c, p, s));
        }
    }
    function _L(e, t, r, i) {
      for (var s = 0; s < t.length; s += 2) {
        var c = t[s], p = t[s + 1];
        c === Jo ? aS(e, p) : c === zl ? Zb(e, p) : c === Qo ? vf(e, p) : jr(e, c, p, i);
      }
    }
    function TL(e, t, r, i) {
      var s, c = $E(r), p, v = i;
      if (v === ci && (v = hh(e)), v === ci) {
        if (s = Fo(e, t), !s && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = c.createElement("div");
          b.innerHTML = "<script><\/script>";
          var C = b.firstChild;
          p = b.removeChild(C);
        } else if (typeof t.is == "string")
          p = c.createElement(e, {
            is: t.is
          });
        else if (p = c.createElement(e), e === "select") {
          var x = p;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        p = c.createElementNS(v, e);
      return v === ci && !s && Object.prototype.toString.call(p) === "[object HTMLUnknownElement]" && !ue.call(Dv, e) && (Dv[e] = !0, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), p;
    }
    function CL(e, t) {
      return $E(t).createTextNode(e);
    }
    function RL(e, t, r, i) {
      var s = Fo(t, r);
      Hf(t, r);
      var c;
      switch (t) {
        case "dialog":
          on("cancel", e), on("close", e), c = r;
          break;
        case "iframe":
        case "object":
        case "embed":
          on("load", e), c = r;
          break;
        case "video":
        case "audio":
          for (var p = 0; p < Ul.length; p++)
            on(Ul[p], e);
          c = r;
          break;
        case "source":
          on("error", e), c = r;
          break;
        case "img":
        case "image":
        case "link":
          on("error", e), on("load", e), c = r;
          break;
        case "details":
          on("toggle", e), c = r;
          break;
        case "input":
          df(e, r), c = rl(e, r), on("invalid", e);
          break;
        case "option":
          Ft(e, r), c = r;
          break;
        case "select":
          ol(e, r), c = il(e, r), on("invalid", e);
          break;
        case "textarea":
          Xb(e, r), c = dh(e, r), on("invalid", e);
          break;
        default:
          c = r;
      }
      switch (bh(t, c), EL(t, e, i, c, s), t) {
        case "input":
          Uo(e), B(e, r, !1);
          break;
        case "textarea":
          Uo(e), Jb(e);
          break;
        case "option":
          nn(e, r);
          break;
        case "select":
          ch(e, r);
          break;
        default:
          typeof c.onClick == "function" && Gf(e);
          break;
      }
    }
    function xL(e, t, r, i, s) {
      Hf(t, i);
      var c = null, p, v;
      switch (t) {
        case "input":
          p = rl(e, r), v = rl(e, i), c = [];
          break;
        case "select":
          p = il(e, r), v = il(e, i), c = [];
          break;
        case "textarea":
          p = dh(e, r), v = dh(e, i), c = [];
          break;
        default:
          p = r, v = i, typeof p.onClick != "function" && typeof v.onClick == "function" && Gf(e);
          break;
      }
      bh(t, v);
      var b, C, x = null;
      for (b in p)
        if (!(v.hasOwnProperty(b) || !p.hasOwnProperty(b) || p[b] == null))
          if (b === Jo) {
            var N = p[b];
            for (C in N)
              N.hasOwnProperty(C) && (x || (x = {}), x[C] = "");
          } else b === zl || b === Qo || b === Bf || b === ro || b === FE || (ke.hasOwnProperty(b) ? c || (c = []) : (c = c || []).push(b, null));
      for (b in v) {
        var L = v[b], F = p != null ? p[b] : void 0;
        if (!(!v.hasOwnProperty(b) || L === F || L == null && F == null))
          if (b === Jo)
            if (L && Object.freeze(L), F) {
              for (C in F)
                F.hasOwnProperty(C) && (!L || !L.hasOwnProperty(C)) && (x || (x = {}), x[C] = "");
              for (C in L)
                L.hasOwnProperty(C) && F[C] !== L[C] && (x || (x = {}), x[C] = L[C]);
            } else
              x || (c || (c = []), c.push(b, x)), x = L;
          else if (b === zl) {
            var $ = L ? L[$f] : void 0, G = F ? F[$f] : void 0;
            $ != null && G !== $ && (c = c || []).push(b, $);
          } else b === Qo ? (typeof L == "string" || typeof L == "number") && (c = c || []).push(b, "" + L) : b === Bf || b === ro || (ke.hasOwnProperty(b) ? (L != null && (typeof L != "function" && Vf(b, L), b === "onScroll" && on("scroll", e)), !c && F !== L && (c = [])) : (c = c || []).push(b, L));
      }
      return x && (YO(x, v[Jo]), (c = c || []).push(Jo, x)), c;
    }
    function wL(e, t, r, i, s) {
      r === "input" && s.type === "radio" && s.name != null && S(e, s);
      var c = Fo(r, i), p = Fo(r, s);
      switch (_L(e, t, c, p), r) {
        case "input":
          O(e, s);
          break;
        case "textarea":
          Qb(e, s);
          break;
        case "select":
          pf(e, s);
          break;
      }
    }
    function OL(e) {
      {
        var t = e.toLowerCase();
        return mf.hasOwnProperty(t) && mf[t] || null;
      }
    }
    function AL(e, t, r, i, s, c, p) {
      var v, b;
      switch (v = Fo(t, r), Hf(t, r), t) {
        case "dialog":
          on("cancel", e), on("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          on("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < Ul.length; C++)
            on(Ul[C], e);
          break;
        case "source":
          on("error", e);
          break;
        case "img":
        case "image":
        case "link":
          on("error", e), on("load", e);
          break;
        case "details":
          on("toggle", e);
          break;
        case "input":
          df(e, r), on("invalid", e);
          break;
        case "option":
          Ft(e, r);
          break;
        case "select":
          ol(e, r), on("invalid", e);
          break;
        case "textarea":
          Xb(e, r), on("invalid", e);
          break;
      }
      bh(t, r);
      {
        b = /* @__PURE__ */ new Set();
        for (var x = e.attributes, N = 0; N < x.length; N++) {
          var L = x[N].name.toLowerCase();
          switch (L) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(x[N].name);
          }
        }
      }
      var F = null;
      for (var $ in r)
        if (r.hasOwnProperty($)) {
          var G = r[$];
          if ($ === Qo)
            typeof G == "string" ? e.textContent !== G && (r[ro] !== !0 && Yf(e.textContent, G, c, p), F = [Qo, G]) : typeof G == "number" && e.textContent !== "" + G && (r[ro] !== !0 && Yf(e.textContent, G, c, p), F = [Qo, "" + G]);
          else if (ke.hasOwnProperty($))
            G != null && (typeof G != "function" && Vf($, G), $ === "onScroll" && on("scroll", e));
          else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var ye = void 0, Me = Zt($);
            if (r[ro] !== !0) {
              if (!($ === Bf || $ === ro || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === zl) {
                  var De = e.innerHTML, _t = G ? G[$f] : void 0;
                  if (_t != null) {
                    var yt = BE(e, _t);
                    yt !== De && Pl($, De, yt);
                  }
                } else if ($ === Jo) {
                  if (b.delete($), PE) {
                    var U = VO(G);
                    ye = e.getAttribute("style"), U !== ye && Pl($, ye, U);
                  }
                } else if (v)
                  b.delete($.toLowerCase()), ye = oi(e, $, G), G !== ye && Pl($, ye, G);
                else if (!Qt($, Me, v) && !Un($, G, Me, v)) {
                  var W = !1;
                  if (Me !== null)
                    b.delete(Me.attributeName), ye = Bi(e, $, G, Me);
                  else {
                    var j = i;
                    if (j === ci && (j = hh(t)), j === ci)
                      b.delete($.toLowerCase());
                    else {
                      var re = OL($);
                      re !== null && re !== $ && (W = !0, b.delete(re)), b.delete($);
                    }
                    ye = oi(e, $, G);
                  }
                  var _e = ie;
                  !_e && G !== ye && !W && Pl($, ye, G);
                }
              }
            }
          }
        }
      switch (p && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && r[ro] !== !0 && zE(b), t) {
        case "input":
          Uo(e), B(e, r, !0);
          break;
        case "textarea":
          Uo(e), Jb(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof r.onClick == "function" && Gf(e);
          break;
      }
      return F;
    }
    function DL(e, t, r) {
      var i = e.nodeValue !== t;
      return i;
    }
    function kv(e, t) {
      {
        if (wr)
          return;
        wr = !0, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Lv(e, t) {
      {
        if (wr)
          return;
        wr = !0, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Nv(e, t, r) {
      {
        if (wr)
          return;
        wr = !0, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Mv(e, t) {
      {
        if (t === "" || wr)
          return;
        wr = !0, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function kL(e, t, r) {
      switch (t) {
        case "input":
          q(e, r);
          return;
        case "textarea":
          RO(e, r);
          return;
        case "select":
          fh(e, r);
          return;
      }
    }
    var Bl = function() {
    }, $l = function() {
    };
    {
      var LL = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], HE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], NL = HE.concat(["button"]), ML = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], VE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      $l = function(e, t) {
        var r = nt({}, e || VE), i = {
          tag: t
        };
        return HE.indexOf(t) !== -1 && (r.aTagInScope = null, r.buttonTagInScope = null, r.nobrTagInScope = null), NL.indexOf(t) !== -1 && (r.pTagInButtonScope = null), LL.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (r.listItemTagAutoclosing = null, r.dlItemTagAutoclosing = null), r.current = i, t === "form" && (r.formTag = i), t === "a" && (r.aTagInScope = i), t === "button" && (r.buttonTagInScope = i), t === "nobr" && (r.nobrTagInScope = i), t === "p" && (r.pTagInButtonScope = i), t === "li" && (r.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (r.dlItemTagAutoclosing = i), r;
      };
      var IL = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return ML.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, UL = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, qE = {};
      Bl = function(e, t, r) {
        r = r || VE;
        var i = r.current, s = i && i.tag;
        t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = IL(e, s) ? null : i, p = c ? null : UL(e, r), v = c || p;
        if (v) {
          var b = v.tag, C = !!c + "|" + e + "|" + b;
          if (!qE[C]) {
            qE[C] = !0;
            var x = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", c) {
              var L = "";
              b === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, b, N, L);
            } else
              d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, b);
          }
        }
      };
    }
    var Wf = "suppressHydrationWarning", Kf = "$", Xf = "/$", Hl = "$?", Vl = "$!", jL = "style", Iv = null, Uv = null;
    function FL(e) {
      var t, r, i = e.nodeType;
      switch (i) {
        case di:
        case mh: {
          t = i === di ? "#document" : "#fragment";
          var s = e.documentElement;
          r = s ? s.namespaceURI : vh(null, "");
          break;
        }
        default: {
          var c = i === _n ? e.parentNode : e, p = c.namespaceURI || null;
          t = c.tagName, r = vh(p, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), b = $l(null, v);
        return {
          namespace: r,
          ancestorInfo: b
        };
      }
    }
    function zL(e, t, r) {
      {
        var i = e, s = vh(i.namespace, t), c = $l(i.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: c
        };
      }
    }
    function N3(e) {
      return e;
    }
    function PL(e) {
      Iv = jD(), Uv = eL();
      var t = null;
      return ZS(!1), t;
    }
    function BL(e) {
      tL(Uv), ZS(Iv), Iv = null, Uv = null;
    }
    function $L(e, t, r, i, s) {
      var c;
      {
        var p = i;
        if (Bl(e, null, p.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, b = $l(p.ancestorInfo, e);
          Bl(null, v, b);
        }
        c = p.namespace;
      }
      var C = TL(e, t, r, c);
      return Gl(s, C), Vv(C, t), C;
    }
    function HL(e, t) {
      e.appendChild(t);
    }
    function VL(e, t, r, i, s) {
      switch (RL(e, t, r, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!r.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function qL(e, t, r, i, s, c) {
      {
        var p = c;
        if (typeof i.children != typeof r.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, b = $l(p.ancestorInfo, t);
          Bl(null, v, b);
        }
      }
      return xL(e, t, r, i);
    }
    function jv(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function YL(e, t, r, i) {
      {
        var s = r;
        Bl(null, e, s.ancestorInfo);
      }
      var c = CL(e, t);
      return Gl(i, c), c;
    }
    function GL() {
      var e = window.event;
      return e === void 0 ? mi : eE(e.type);
    }
    var Fv = typeof setTimeout == "function" ? setTimeout : void 0, WL = typeof clearTimeout == "function" ? clearTimeout : void 0, zv = -1, YE = typeof Promise == "function" ? Promise : void 0, KL = typeof queueMicrotask == "function" ? queueMicrotask : typeof YE < "u" ? function(e) {
      return YE.resolve(null).then(e).catch(XL);
    } : Fv;
    function XL(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function QL(e, t, r, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && e.focus();
          return;
        case "img": {
          r.src && (e.src = r.src);
          return;
        }
      }
    }
    function JL(e, t, r, i, s, c) {
      wL(e, t, r, i, s), Vv(e, s);
    }
    function GE(e) {
      vf(e, "");
    }
    function ZL(e, t, r) {
      e.nodeValue = r;
    }
    function e1(e, t) {
      e.appendChild(t);
    }
    function t1(e, t) {
      var r;
      e.nodeType === _n ? (r = e.parentNode, r.insertBefore(t, e)) : (r = e, r.appendChild(t));
      var i = e._reactRootContainer;
      i == null && r.onclick === null && Gf(r);
    }
    function n1(e, t, r) {
      e.insertBefore(t, r);
    }
    function r1(e, t, r) {
      e.nodeType === _n ? e.parentNode.insertBefore(t, r) : e.insertBefore(t, r);
    }
    function a1(e, t) {
      e.removeChild(t);
    }
    function i1(e, t) {
      e.nodeType === _n ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Pv(e, t) {
      var r = t, i = 0;
      do {
        var s = r.nextSibling;
        if (e.removeChild(r), s && s.nodeType === _n) {
          var c = s.data;
          if (c === Xf)
            if (i === 0) {
              e.removeChild(s), xl(t);
              return;
            } else
              i--;
          else (c === Kf || c === Hl || c === Vl) && i++;
        }
        r = s;
      } while (r);
      xl(t);
    }
    function o1(e, t) {
      e.nodeType === _n ? Pv(e.parentNode, t) : e.nodeType === xr && Pv(e, t), xl(e);
    }
    function s1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function u1(e) {
      e.nodeValue = "";
    }
    function l1(e, t) {
      e = e;
      var r = t[jL], i = r != null && r.hasOwnProperty("display") ? r.display : null;
      e.style.display = yh("display", i);
    }
    function c1(e, t) {
      e.nodeValue = t;
    }
    function f1(e) {
      e.nodeType === xr ? e.textContent = "" : e.nodeType === di && e.documentElement && e.removeChild(e.documentElement);
    }
    function d1(e, t, r) {
      return e.nodeType !== xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function p1(e, t) {
      return t === "" || e.nodeType !== fi ? null : e;
    }
    function h1(e) {
      return e.nodeType !== _n ? null : e;
    }
    function WE(e) {
      return e.data === Hl;
    }
    function Bv(e) {
      return e.data === Vl;
    }
    function v1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, r, i, s;
      return t && (r = t.dgst, i = t.msg, s = t.stck), {
        message: i,
        digest: r,
        stack: s
      };
    }
    function m1(e, t) {
      e._reactRetry = t;
    }
    function Qf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === xr || t === fi)
          break;
        if (t === _n) {
          var r = e.data;
          if (r === Kf || r === Vl || r === Hl)
            break;
          if (r === Xf)
            return null;
        }
      }
      return e;
    }
    function ql(e) {
      return Qf(e.nextSibling);
    }
    function y1(e) {
      return Qf(e.firstChild);
    }
    function g1(e) {
      return Qf(e.firstChild);
    }
    function b1(e) {
      return Qf(e.nextSibling);
    }
    function S1(e, t, r, i, s, c, p) {
      Gl(c, e), Vv(e, r);
      var v;
      {
        var b = s;
        v = b.namespace;
      }
      var C = (c.mode & St) !== je;
      return AL(e, t, r, v, i, C, p);
    }
    function E1(e, t, r, i) {
      return Gl(r, e), r.mode & St, DL(e, t);
    }
    function _1(e, t) {
      Gl(t, e);
    }
    function T1(e) {
      for (var t = e.nextSibling, r = 0; t; ) {
        if (t.nodeType === _n) {
          var i = t.data;
          if (i === Xf) {
            if (r === 0)
              return ql(t);
            r--;
          } else (i === Kf || i === Vl || i === Hl) && r++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function KE(e) {
      for (var t = e.previousSibling, r = 0; t; ) {
        if (t.nodeType === _n) {
          var i = t.data;
          if (i === Kf || i === Vl || i === Hl) {
            if (r === 0)
              return t;
            r--;
          } else i === Xf && r++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function C1(e) {
      xl(e);
    }
    function R1(e) {
      xl(e);
    }
    function x1(e) {
      return e !== "head" && e !== "body";
    }
    function w1(e, t, r, i) {
      var s = !0;
      Yf(t.nodeValue, r, i, s);
    }
    function O1(e, t, r, i, s, c) {
      if (t[Wf] !== !0) {
        var p = !0;
        Yf(i.nodeValue, s, c, p);
      }
    }
    function A1(e, t) {
      t.nodeType === xr ? kv(e, t) : t.nodeType === _n || Lv(e, t);
    }
    function D1(e, t) {
      {
        var r = e.parentNode;
        r !== null && (t.nodeType === xr ? kv(r, t) : t.nodeType === _n || Lv(r, t));
      }
    }
    function k1(e, t, r, i, s) {
      (s || t[Wf] !== !0) && (i.nodeType === xr ? kv(r, i) : i.nodeType === _n || Lv(r, i));
    }
    function L1(e, t, r) {
      Nv(e, t);
    }
    function N1(e, t) {
      Mv(e, t);
    }
    function M1(e, t, r) {
      {
        var i = e.parentNode;
        i !== null && Nv(i, t);
      }
    }
    function I1(e, t) {
      {
        var r = e.parentNode;
        r !== null && Mv(r, t);
      }
    }
    function U1(e, t, r, i, s, c) {
      (c || t[Wf] !== !0) && Nv(r, i);
    }
    function j1(e, t, r, i, s) {
      (s || t[Wf] !== !0) && Mv(r, i);
    }
    function F1(e) {
      d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function z1(e) {
      jl(e);
    }
    var ou = Math.random().toString(36).slice(2), su = "__reactFiber$" + ou, $v = "__reactProps$" + ou, Yl = "__reactContainer$" + ou, Hv = "__reactEvents$" + ou, P1 = "__reactListeners$" + ou, B1 = "__reactHandles$" + ou;
    function $1(e) {
      delete e[su], delete e[$v], delete e[Hv], delete e[P1], delete e[B1];
    }
    function Gl(e, t) {
      t[su] = e;
    }
    function Jf(e, t) {
      t[Yl] = e;
    }
    function XE(e) {
      e[Yl] = null;
    }
    function Wl(e) {
      return !!e[Yl];
    }
    function Zo(e) {
      var t = e[su];
      if (t)
        return t;
      for (var r = e.parentNode; r; ) {
        if (t = r[Yl] || r[su], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var s = KE(e); s !== null; ) {
              var c = s[su];
              if (c)
                return c;
              s = KE(s);
            }
          return t;
        }
        e = r, r = e.parentNode;
      }
      return null;
    }
    function ao(e) {
      var t = e[su] || e[Yl];
      return t && (t.tag === w || t.tag === D || t.tag === oe || t.tag === R) ? t : null;
    }
    function uu(e) {
      if (e.tag === w || e.tag === D)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Zf(e) {
      return e[$v] || null;
    }
    function Vv(e, t) {
      e[$v] = t;
    }
    function H1(e) {
      var t = e[Hv];
      return t === void 0 && (t = e[Hv] = /* @__PURE__ */ new Set()), t;
    }
    var QE = {}, JE = o.ReactDebugCurrentFrame;
    function ed(e) {
      if (e) {
        var t = e._owner, r = Io(e.type, e._source, t ? t.type : null);
        JE.setExtraStackFrame(r);
      } else
        JE.setExtraStackFrame(null);
    }
    function Ea(e, t, r, i, s) {
      {
        var c = Function.call.bind(ue);
        for (var p in e)
          if (c(e, p)) {
            var v = void 0;
            try {
              if (typeof e[p] != "function") {
                var b = Error((i || "React class") + ": " + r + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              v = e[p](t, p, i, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              v = C;
            }
            v && !(v instanceof Error) && (ed(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", r, p, typeof v), ed(null)), v instanceof Error && !(v.message in QE) && (QE[v.message] = !0, ed(s), d("Failed %s type: %s", r, v.message), ed(null));
          }
      }
    }
    var qv = [], td;
    td = [];
    var yi = -1;
    function io(e) {
      return {
        current: e
      };
    }
    function or(e, t) {
      if (yi < 0) {
        d("Unexpected pop.");
        return;
      }
      t !== td[yi] && d("Unexpected Fiber popped."), e.current = qv[yi], qv[yi] = null, td[yi] = null, yi--;
    }
    function sr(e, t, r) {
      yi++, qv[yi] = e.current, td[yi] = r, e.current = t;
    }
    var Yv;
    Yv = {};
    var qr = {};
    Object.freeze(qr);
    var gi = io(qr), $a = io(!1), Gv = qr;
    function lu(e, t, r) {
      return r && Ha(t) ? Gv : gi.current;
    }
    function ZE(e, t, r) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = r;
      }
    }
    function cu(e, t) {
      {
        var r = e.type, i = r.contextTypes;
        if (!i)
          return qr;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
          return s.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var p in i)
          c[p] = t[p];
        {
          var v = E(e) || "Unknown";
          Ea(i, c, "context", v);
        }
        return s && ZE(e, t, c), c;
      }
    }
    function nd() {
      return $a.current;
    }
    function Ha(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function rd(e) {
      or($a, e), or(gi, e);
    }
    function Wv(e) {
      or($a, e), or(gi, e);
    }
    function e_(e, t, r) {
      {
        if (gi.current !== qr)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        sr(gi, t, e), sr($a, r, e);
      }
    }
    function t_(e, t, r) {
      {
        var i = e.stateNode, s = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = E(e) || "Unknown";
            Yv[c] || (Yv[c] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return r;
        }
        var p = i.getChildContext();
        for (var v in p)
          if (!(v in s))
            throw new Error((E(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var b = E(e) || "Unknown";
          Ea(s, p, "child context", b);
        }
        return nt({}, r, p);
      }
    }
    function ad(e) {
      {
        var t = e.stateNode, r = t && t.__reactInternalMemoizedMergedChildContext || qr;
        return Gv = gi.current, sr(gi, r, e), sr($a, $a.current, e), !0;
      }
    }
    function n_(e, t, r) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (r) {
          var s = t_(e, t, Gv);
          i.__reactInternalMemoizedMergedChildContext = s, or($a, e), or(gi, e), sr(gi, s, e), sr($a, r, e);
        } else
          or($a, e), sr($a, r, e);
      }
    }
    function V1(e) {
      {
        if (!xA(e) || e.tag !== y)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case R:
              return t.stateNode.context;
            case y: {
              var r = t.type;
              if (Ha(r))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var oo = 0, id = 1, bi = null, Kv = !1, Xv = !1;
    function r_(e) {
      bi === null ? bi = [e] : bi.push(e);
    }
    function q1(e) {
      Kv = !0, r_(e);
    }
    function a_() {
      Kv && so();
    }
    function so() {
      if (!Xv && bi !== null) {
        Xv = !0;
        var e = 0, t = Sa();
        try {
          var r = !0, i = bi;
          for ($n($r); e < i.length; e++) {
            var s = i[e];
            do
              s = s(r);
            while (s !== null);
          }
          bi = null, Kv = !1;
        } catch (c) {
          throw bi !== null && (bi = bi.slice(e + 1)), OS(Ef, so), c;
        } finally {
          $n(t), Xv = !1;
        }
      }
      return null;
    }
    var fu = [], du = 0, od = null, sd = 0, ra = [], aa = 0, es = null, Si = 1, Ei = "";
    function Y1(e) {
      return ns(), (e.flags & SS) !== He;
    }
    function G1(e) {
      return ns(), sd;
    }
    function W1() {
      var e = Ei, t = Si, r = t & ~K1(t);
      return r.toString(32) + e;
    }
    function ts(e, t) {
      ns(), fu[du++] = sd, fu[du++] = od, od = e, sd = t;
    }
    function i_(e, t, r) {
      ns(), ra[aa++] = Si, ra[aa++] = Ei, ra[aa++] = es, es = e;
      var i = Si, s = Ei, c = ud(i) - 1, p = i & ~(1 << c), v = r + 1, b = ud(t) + c;
      if (b > 30) {
        var C = c - c % 5, x = (1 << C) - 1, N = (p & x).toString(32), L = p >> C, F = c - C, $ = ud(t) + F, G = v << F, ye = G | L, Me = N + s;
        Si = 1 << $ | ye, Ei = Me;
      } else {
        var De = v << c, _t = De | p, yt = s;
        Si = 1 << b | _t, Ei = yt;
      }
    }
    function Qv(e) {
      ns();
      var t = e.return;
      if (t !== null) {
        var r = 1, i = 0;
        ts(e, r), i_(e, r, i);
      }
    }
    function ud(e) {
      return 32 - MS(e);
    }
    function K1(e) {
      return 1 << ud(e) - 1;
    }
    function Jv(e) {
      for (; e === od; )
        od = fu[--du], fu[du] = null, sd = fu[--du], fu[du] = null;
      for (; e === es; )
        es = ra[--aa], ra[aa] = null, Ei = ra[--aa], ra[aa] = null, Si = ra[--aa], ra[aa] = null;
    }
    function X1() {
      return ns(), es !== null ? {
        id: Si,
        overflow: Ei
      } : null;
    }
    function Q1(e, t) {
      ns(), ra[aa++] = Si, ra[aa++] = Ei, ra[aa++] = es, Si = t.id, Ei = t.overflow, es = e;
    }
    function ns() {
      Wn() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Gn = null, ia = null, _a = !1, rs = !1, uo = null;
    function J1() {
      _a && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function o_() {
      rs = !0;
    }
    function Z1() {
      return rs;
    }
    function eN(e) {
      var t = e.stateNode.containerInfo;
      return ia = g1(t), Gn = e, _a = !0, uo = null, rs = !1, !0;
    }
    function tN(e, t, r) {
      return ia = b1(t), Gn = e, _a = !0, uo = null, rs = !1, r !== null && Q1(e, r), !0;
    }
    function s_(e, t) {
      switch (e.tag) {
        case R: {
          A1(e.stateNode.containerInfo, t);
          break;
        }
        case w: {
          var r = (e.mode & St) !== je;
          k1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            r
          );
          break;
        }
        case oe: {
          var i = e.memoizedState;
          i.dehydrated !== null && D1(i.dehydrated, t);
          break;
        }
      }
    }
    function u_(e, t) {
      s_(e, t);
      var r = iU();
      r.stateNode = t, r.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [r], e.flags |= zo) : i.push(r);
    }
    function Zv(e, t) {
      {
        if (rs)
          return;
        switch (e.tag) {
          case R: {
            var r = e.stateNode.containerInfo;
            switch (t.tag) {
              case w:
                var i = t.type;
                t.pendingProps, L1(r, i);
                break;
              case D:
                var s = t.pendingProps;
                N1(r, s);
                break;
            }
            break;
          }
          case w: {
            var c = e.type, p = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case w: {
                var b = t.type, C = t.pendingProps, x = (e.mode & St) !== je;
                U1(
                  c,
                  p,
                  v,
                  b,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case D: {
                var N = t.pendingProps, L = (e.mode & St) !== je;
                j1(
                  c,
                  p,
                  v,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  L
                );
                break;
              }
            }
            break;
          }
          case oe: {
            var F = e.memoizedState, $ = F.dehydrated;
            if ($ !== null) switch (t.tag) {
              case w:
                var G = t.type;
                t.pendingProps, M1($, G);
                break;
              case D:
                var ye = t.pendingProps;
                I1($, ye);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function l_(e, t) {
      t.flags = t.flags & -4097 | Fn, Zv(e, t);
    }
    function c_(e, t) {
      switch (e.tag) {
        case w: {
          var r = e.type;
          e.pendingProps;
          var i = d1(t, r);
          return i !== null ? (e.stateNode = i, Gn = e, ia = y1(i), !0) : !1;
        }
        case D: {
          var s = e.pendingProps, c = p1(t, s);
          return c !== null ? (e.stateNode = c, Gn = e, ia = null, !0) : !1;
        }
        case oe: {
          var p = h1(t);
          if (p !== null) {
            var v = {
              dehydrated: p,
              treeContext: X1(),
              retryLane: na
            };
            e.memoizedState = v;
            var b = oU(p);
            return b.return = e, e.child = b, Gn = e, ia = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function em(e) {
      return (e.mode & St) !== je && (e.flags & It) === He;
    }
    function tm(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function nm(e) {
      if (_a) {
        var t = ia;
        if (!t) {
          em(e) && (Zv(Gn, e), tm()), l_(Gn, e), _a = !1, Gn = e;
          return;
        }
        var r = t;
        if (!c_(e, t)) {
          em(e) && (Zv(Gn, e), tm()), t = ql(r);
          var i = Gn;
          if (!t || !c_(e, t)) {
            l_(Gn, e), _a = !1, Gn = e;
            return;
          }
          u_(i, r);
        }
      }
    }
    function nN(e, t, r) {
      var i = e.stateNode, s = !rs, c = S1(i, e.type, e.memoizedProps, t, r, e, s);
      return e.updateQueue = c, c !== null;
    }
    function rN(e) {
      var t = e.stateNode, r = e.memoizedProps, i = E1(t, r, e);
      if (i) {
        var s = Gn;
        if (s !== null)
          switch (s.tag) {
            case R: {
              var c = s.stateNode.containerInfo, p = (s.mode & St) !== je;
              w1(
                c,
                t,
                r,
                // TODO: Delete this argument when we remove the legacy root API.
                p
              );
              break;
            }
            case w: {
              var v = s.type, b = s.memoizedProps, C = s.stateNode, x = (s.mode & St) !== je;
              O1(
                v,
                b,
                C,
                t,
                r,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function aN(e) {
      var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
      if (!r)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      _1(r, e);
    }
    function iN(e) {
      var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
      if (!r)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return T1(r);
    }
    function f_(e) {
      for (var t = e.return; t !== null && t.tag !== w && t.tag !== R && t.tag !== oe; )
        t = t.return;
      Gn = t;
    }
    function ld(e) {
      if (e !== Gn)
        return !1;
      if (!_a)
        return f_(e), _a = !0, !1;
      if (e.tag !== R && (e.tag !== w || x1(e.type) && !jv(e.type, e.memoizedProps))) {
        var t = ia;
        if (t)
          if (em(e))
            d_(e), tm();
          else
            for (; t; )
              u_(e, t), t = ql(t);
      }
      return f_(e), e.tag === oe ? ia = iN(e) : ia = Gn ? ql(e.stateNode) : null, !0;
    }
    function oN() {
      return _a && ia !== null;
    }
    function d_(e) {
      for (var t = ia; t; )
        s_(e, t), t = ql(t);
    }
    function pu() {
      Gn = null, ia = null, _a = !1, rs = !1;
    }
    function p_() {
      uo !== null && (oC(uo), uo = null);
    }
    function Wn() {
      return _a;
    }
    function rm(e) {
      uo === null ? uo = [e] : uo.push(e);
    }
    var sN = o.ReactCurrentBatchConfig, uN = null;
    function lN() {
      return sN.transition;
    }
    var Ta = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var cN = function(e) {
        for (var t = null, r = e; r !== null; )
          r.mode & hn && (t = r), r = r.return;
        return t;
      }, as = function(e) {
        var t = [];
        return e.forEach(function(r) {
          t.push(r);
        }), t.sort().join(", ");
      }, Kl = [], Xl = [], Ql = [], Jl = [], Zl = [], ec = [], is = /* @__PURE__ */ new Set();
      Ta.recordUnsafeLifecycleWarnings = function(e, t) {
        is.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Kl.push(e), e.mode & hn && typeof t.UNSAFE_componentWillMount == "function" && Xl.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ql.push(e), e.mode & hn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Jl.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Zl.push(e), e.mode & hn && typeof t.UNSAFE_componentWillUpdate == "function" && ec.push(e));
      }, Ta.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Kl.length > 0 && (Kl.forEach(function(L) {
          e.add(E(L) || "Component"), is.add(L.type);
        }), Kl = []);
        var t = /* @__PURE__ */ new Set();
        Xl.length > 0 && (Xl.forEach(function(L) {
          t.add(E(L) || "Component"), is.add(L.type);
        }), Xl = []);
        var r = /* @__PURE__ */ new Set();
        Ql.length > 0 && (Ql.forEach(function(L) {
          r.add(E(L) || "Component"), is.add(L.type);
        }), Ql = []);
        var i = /* @__PURE__ */ new Set();
        Jl.length > 0 && (Jl.forEach(function(L) {
          i.add(E(L) || "Component"), is.add(L.type);
        }), Jl = []);
        var s = /* @__PURE__ */ new Set();
        Zl.length > 0 && (Zl.forEach(function(L) {
          s.add(E(L) || "Component"), is.add(L.type);
        }), Zl = []);
        var c = /* @__PURE__ */ new Set();
        if (ec.length > 0 && (ec.forEach(function(L) {
          c.add(E(L) || "Component"), is.add(L.type);
        }), ec = []), t.size > 0) {
          var p = as(t);
          d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, p);
        }
        if (i.size > 0) {
          var v = as(i);
          d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (c.size > 0) {
          var b = as(c);
          d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var C = as(e);
          f(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (r.size > 0) {
          var x = as(r);
          f(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (s.size > 0) {
          var N = as(s);
          f(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var cd = /* @__PURE__ */ new Map(), h_ = /* @__PURE__ */ new Set();
      Ta.recordLegacyContextWarning = function(e, t) {
        var r = cN(e);
        if (r === null) {
          d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!h_.has(e.type)) {
          var i = cd.get(r);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], cd.set(r, i)), i.push(e));
        }
      }, Ta.flushLegacyContextWarning = function() {
        cd.forEach(function(e, t) {
          if (e.length !== 0) {
            var r = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(E(c) || "Component"), h_.add(c.type);
            });
            var s = as(i);
            try {
              ce(r), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s);
            } finally {
              fe();
            }
          }
        });
      }, Ta.discardPendingWarnings = function() {
        Kl = [], Xl = [], Ql = [], Jl = [], Zl = [], ec = [], cd = /* @__PURE__ */ new Map();
      };
    }
    var am, im, om, sm, um, v_ = function(e, t) {
    };
    am = !1, im = !1, om = {}, sm = {}, um = {}, v_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var r = E(t) || "Component";
        sm[r] || (sm[r] = !0, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function fN(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function tc(e, t, r) {
      var i = r.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & hn || se) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(r._owner && r._self && r._owner.stateNode !== r._self) && // Will already throw with "Function components cannot have string refs"
        !(r._owner && r._owner.tag !== y) && // Will already warn with "Function components cannot be given refs"
        !(typeof r.type == "function" && !fN(r.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        r._owner) {
          var s = E(e) || "Component";
          om[s] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', s, i), om[s] = !0);
        }
        if (r._owner) {
          var c = r._owner, p;
          if (c) {
            var v = c;
            if (v.tag !== y)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            p = v.stateNode;
          }
          if (!p)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = p;
          Kr(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var x = function(N) {
            var L = b.refs;
            N === null ? delete L[C] : L[C] = N;
          };
          return x._stringRef = C, x;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!r._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function fd(e, t) {
      var r = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
    }
    function dd(e) {
      {
        var t = E(e) || "Component";
        if (um[t])
          return;
        um[t] = !0, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function m_(e) {
      var t = e._payload, r = e._init;
      return r(t);
    }
    function y_(e) {
      function t(U, W) {
        if (e) {
          var j = U.deletions;
          j === null ? (U.deletions = [W], U.flags |= zo) : j.push(W);
        }
      }
      function r(U, W) {
        if (!e)
          return null;
        for (var j = W; j !== null; )
          t(U, j), j = j.sibling;
        return null;
      }
      function i(U, W) {
        for (var j = /* @__PURE__ */ new Map(), re = W; re !== null; )
          re.key !== null ? j.set(re.key, re) : j.set(re.index, re), re = re.sibling;
        return j;
      }
      function s(U, W) {
        var j = hs(U, W);
        return j.index = 0, j.sibling = null, j;
      }
      function c(U, W, j) {
        if (U.index = j, !e)
          return U.flags |= SS, W;
        var re = U.alternate;
        if (re !== null) {
          var _e = re.index;
          return _e < W ? (U.flags |= Fn, W) : _e;
        } else
          return U.flags |= Fn, W;
      }
      function p(U) {
        return e && U.alternate === null && (U.flags |= Fn), U;
      }
      function v(U, W, j, re) {
        if (W === null || W.tag !== D) {
          var _e = rg(j, U.mode, re);
          return _e.return = U, _e;
        } else {
          var ge = s(W, j);
          return ge.return = U, ge;
        }
      }
      function b(U, W, j, re) {
        var _e = j.type;
        if (_e === Fr)
          return x(U, W, j.props.children, re, j.key);
        if (W !== null && (W.elementType === _e || // Keep this check inline so it only runs on the false path:
        _C(W, j) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof _e == "object" && _e !== null && _e.$$typeof === We && m_(_e) === W.type)) {
          var ge = s(W, j.props);
          return ge.ref = tc(U, W, j), ge.return = U, ge._debugSource = j._source, ge._debugOwner = j._owner, ge;
        }
        var Ve = ng(j, U.mode, re);
        return Ve.ref = tc(U, W, j), Ve.return = U, Ve;
      }
      function C(U, W, j, re) {
        if (W === null || W.tag !== T || W.stateNode.containerInfo !== j.containerInfo || W.stateNode.implementation !== j.implementation) {
          var _e = ag(j, U.mode, re);
          return _e.return = U, _e;
        } else {
          var ge = s(W, j.children || []);
          return ge.return = U, ge;
        }
      }
      function x(U, W, j, re, _e) {
        if (W === null || W.tag !== P) {
          var ge = So(j, U.mode, re, _e);
          return ge.return = U, ge;
        } else {
          var Ve = s(W, j);
          return Ve.return = U, Ve;
        }
      }
      function N(U, W, j) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var re = rg("" + W, U.mode, j);
          return re.return = U, re;
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case vr: {
              var _e = ng(W, U.mode, j);
              return _e.ref = tc(U, null, W), _e.return = U, _e;
            }
            case Yn: {
              var ge = ag(W, U.mode, j);
              return ge.return = U, ge;
            }
            case We: {
              var Ve = W._payload, Xe = W._init;
              return N(U, Xe(Ve), j);
            }
          }
          if (mt(W) || tn(W)) {
            var Bt = So(W, U.mode, j, null);
            return Bt.return = U, Bt;
          }
          fd(U, W);
        }
        return typeof W == "function" && dd(U), null;
      }
      function L(U, W, j, re) {
        var _e = W !== null ? W.key : null;
        if (typeof j == "string" && j !== "" || typeof j == "number")
          return _e !== null ? null : v(U, W, "" + j, re);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case vr:
              return j.key === _e ? b(U, W, j, re) : null;
            case Yn:
              return j.key === _e ? C(U, W, j, re) : null;
            case We: {
              var ge = j._payload, Ve = j._init;
              return L(U, W, Ve(ge), re);
            }
          }
          if (mt(j) || tn(j))
            return _e !== null ? null : x(U, W, j, re, null);
          fd(U, j);
        }
        return typeof j == "function" && dd(U), null;
      }
      function F(U, W, j, re, _e) {
        if (typeof re == "string" && re !== "" || typeof re == "number") {
          var ge = U.get(j) || null;
          return v(W, ge, "" + re, _e);
        }
        if (typeof re == "object" && re !== null) {
          switch (re.$$typeof) {
            case vr: {
              var Ve = U.get(re.key === null ? j : re.key) || null;
              return b(W, Ve, re, _e);
            }
            case Yn: {
              var Xe = U.get(re.key === null ? j : re.key) || null;
              return C(W, Xe, re, _e);
            }
            case We:
              var Bt = re._payload, At = re._init;
              return F(U, W, j, At(Bt), _e);
          }
          if (mt(re) || tn(re)) {
            var mn = U.get(j) || null;
            return x(W, mn, re, _e, null);
          }
          fd(W, re);
        }
        return typeof re == "function" && dd(W), null;
      }
      function $(U, W, j) {
        {
          if (typeof U != "object" || U === null)
            return W;
          switch (U.$$typeof) {
            case vr:
            case Yn:
              v_(U, j);
              var re = U.key;
              if (typeof re != "string")
                break;
              if (W === null) {
                W = /* @__PURE__ */ new Set(), W.add(re);
                break;
              }
              if (!W.has(re)) {
                W.add(re);
                break;
              }
              d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", re);
              break;
            case We:
              var _e = U._payload, ge = U._init;
              $(ge(_e), W, j);
              break;
          }
        }
        return W;
      }
      function G(U, W, j, re) {
        for (var _e = null, ge = 0; ge < j.length; ge++) {
          var Ve = j[ge];
          _e = $(Ve, _e, U);
        }
        for (var Xe = null, Bt = null, At = W, mn = 0, Dt = 0, vn = null; At !== null && Dt < j.length; Dt++) {
          At.index > Dt ? (vn = At, At = null) : vn = At.sibling;
          var lr = L(U, At, j[Dt], re);
          if (lr === null) {
            At === null && (At = vn);
            break;
          }
          e && At && lr.alternate === null && t(U, At), mn = c(lr, mn, Dt), Bt === null ? Xe = lr : Bt.sibling = lr, Bt = lr, At = vn;
        }
        if (Dt === j.length) {
          if (r(U, At), Wn()) {
            var tr = Dt;
            ts(U, tr);
          }
          return Xe;
        }
        if (At === null) {
          for (; Dt < j.length; Dt++) {
            var Gr = N(U, j[Dt], re);
            Gr !== null && (mn = c(Gr, mn, Dt), Bt === null ? Xe = Gr : Bt.sibling = Gr, Bt = Gr);
          }
          if (Wn()) {
            var Sr = Dt;
            ts(U, Sr);
          }
          return Xe;
        }
        for (var Er = i(U, At); Dt < j.length; Dt++) {
          var cr = F(Er, U, Dt, j[Dt], re);
          cr !== null && (e && cr.alternate !== null && Er.delete(cr.key === null ? Dt : cr.key), mn = c(cr, mn, Dt), Bt === null ? Xe = cr : Bt.sibling = cr, Bt = cr);
        }
        if (e && Er.forEach(function(Lu) {
          return t(U, Lu);
        }), Wn()) {
          var Oi = Dt;
          ts(U, Oi);
        }
        return Xe;
      }
      function ye(U, W, j, re) {
        var _e = tn(j);
        if (typeof _e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          j[Symbol.toStringTag] === "Generator" && (im || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), im = !0), j.entries === _e && (am || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), am = !0);
          var ge = _e.call(j);
          if (ge)
            for (var Ve = null, Xe = ge.next(); !Xe.done; Xe = ge.next()) {
              var Bt = Xe.value;
              Ve = $(Bt, Ve, U);
            }
        }
        var At = _e.call(j);
        if (At == null)
          throw new Error("An iterable object provided no iterator.");
        for (var mn = null, Dt = null, vn = W, lr = 0, tr = 0, Gr = null, Sr = At.next(); vn !== null && !Sr.done; tr++, Sr = At.next()) {
          vn.index > tr ? (Gr = vn, vn = null) : Gr = vn.sibling;
          var Er = L(U, vn, Sr.value, re);
          if (Er === null) {
            vn === null && (vn = Gr);
            break;
          }
          e && vn && Er.alternate === null && t(U, vn), lr = c(Er, lr, tr), Dt === null ? mn = Er : Dt.sibling = Er, Dt = Er, vn = Gr;
        }
        if (Sr.done) {
          if (r(U, vn), Wn()) {
            var cr = tr;
            ts(U, cr);
          }
          return mn;
        }
        if (vn === null) {
          for (; !Sr.done; tr++, Sr = At.next()) {
            var Oi = N(U, Sr.value, re);
            Oi !== null && (lr = c(Oi, lr, tr), Dt === null ? mn = Oi : Dt.sibling = Oi, Dt = Oi);
          }
          if (Wn()) {
            var Lu = tr;
            ts(U, Lu);
          }
          return mn;
        }
        for (var Nc = i(U, vn); !Sr.done; tr++, Sr = At.next()) {
          var Qa = F(Nc, U, tr, Sr.value, re);
          Qa !== null && (e && Qa.alternate !== null && Nc.delete(Qa.key === null ? tr : Qa.key), lr = c(Qa, lr, tr), Dt === null ? mn = Qa : Dt.sibling = Qa, Dt = Qa);
        }
        if (e && Nc.forEach(function(jU) {
          return t(U, jU);
        }), Wn()) {
          var UU = tr;
          ts(U, UU);
        }
        return mn;
      }
      function Me(U, W, j, re) {
        if (W !== null && W.tag === D) {
          r(U, W.sibling);
          var _e = s(W, j);
          return _e.return = U, _e;
        }
        r(U, W);
        var ge = rg(j, U.mode, re);
        return ge.return = U, ge;
      }
      function De(U, W, j, re) {
        for (var _e = j.key, ge = W; ge !== null; ) {
          if (ge.key === _e) {
            var Ve = j.type;
            if (Ve === Fr) {
              if (ge.tag === P) {
                r(U, ge.sibling);
                var Xe = s(ge, j.props.children);
                return Xe.return = U, Xe._debugSource = j._source, Xe._debugOwner = j._owner, Xe;
              }
            } else if (ge.elementType === Ve || // Keep this check inline so it only runs on the false path:
            _C(ge, j) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ve == "object" && Ve !== null && Ve.$$typeof === We && m_(Ve) === ge.type) {
              r(U, ge.sibling);
              var Bt = s(ge, j.props);
              return Bt.ref = tc(U, ge, j), Bt.return = U, Bt._debugSource = j._source, Bt._debugOwner = j._owner, Bt;
            }
            r(U, ge);
            break;
          } else
            t(U, ge);
          ge = ge.sibling;
        }
        if (j.type === Fr) {
          var At = So(j.props.children, U.mode, re, j.key);
          return At.return = U, At;
        } else {
          var mn = ng(j, U.mode, re);
          return mn.ref = tc(U, W, j), mn.return = U, mn;
        }
      }
      function _t(U, W, j, re) {
        for (var _e = j.key, ge = W; ge !== null; ) {
          if (ge.key === _e)
            if (ge.tag === T && ge.stateNode.containerInfo === j.containerInfo && ge.stateNode.implementation === j.implementation) {
              r(U, ge.sibling);
              var Ve = s(ge, j.children || []);
              return Ve.return = U, Ve;
            } else {
              r(U, ge);
              break;
            }
          else
            t(U, ge);
          ge = ge.sibling;
        }
        var Xe = ag(j, U.mode, re);
        return Xe.return = U, Xe;
      }
      function yt(U, W, j, re) {
        var _e = typeof j == "object" && j !== null && j.type === Fr && j.key === null;
        if (_e && (j = j.props.children), typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case vr:
              return p(De(U, W, j, re));
            case Yn:
              return p(_t(U, W, j, re));
            case We:
              var ge = j._payload, Ve = j._init;
              return yt(U, W, Ve(ge), re);
          }
          if (mt(j))
            return G(U, W, j, re);
          if (tn(j))
            return ye(U, W, j, re);
          fd(U, j);
        }
        return typeof j == "string" && j !== "" || typeof j == "number" ? p(Me(U, W, "" + j, re)) : (typeof j == "function" && dd(U), r(U, W));
      }
      return yt;
    }
    var hu = y_(!0), g_ = y_(!1);
    function dN(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var r = t.child, i = hs(r, r.pendingProps);
        for (t.child = i, i.return = t; r.sibling !== null; )
          r = r.sibling, i = i.sibling = hs(r, r.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function pN(e, t) {
      for (var r = e.child; r !== null; )
        eU(r, t), r = r.sibling;
    }
    var lm = io(null), cm;
    cm = {};
    var pd = null, vu = null, fm = null, hd = !1;
    function vd() {
      pd = null, vu = null, fm = null, hd = !1;
    }
    function b_() {
      hd = !0;
    }
    function S_() {
      hd = !1;
    }
    function E_(e, t, r) {
      sr(lm, t._currentValue, e), t._currentValue = r, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cm && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cm;
    }
    function dm(e, t) {
      var r = lm.current;
      or(lm, t), e._currentValue = r;
    }
    function pm(e, t, r) {
      for (var i = e; i !== null; ) {
        var s = i.alternate;
        if (Zs(i.childLanes, t) ? s !== null && !Zs(s.childLanes, t) && (s.childLanes = st(s.childLanes, t)) : (i.childLanes = st(i.childLanes, t), s !== null && (s.childLanes = st(s.childLanes, t))), i === r)
          break;
        i = i.return;
      }
      i !== r && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function hN(e, t, r) {
      vN(e, t, r);
    }
    function vN(e, t, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var s = void 0, c = i.dependencies;
        if (c !== null) {
          s = i.child;
          for (var p = c.firstContext; p !== null; ) {
            if (p.context === t) {
              if (i.tag === y) {
                var v = bl(r), b = _i(an, v);
                b.tag = yd;
                var C = i.updateQueue;
                if (C !== null) {
                  var x = C.shared, N = x.pending;
                  N === null ? b.next = b : (b.next = N.next, N.next = b), x.pending = b;
                }
              }
              i.lanes = st(i.lanes, r);
              var L = i.alternate;
              L !== null && (L.lanes = st(L.lanes, r)), pm(i.return, r, e), c.lanes = st(c.lanes, r);
              break;
            }
            p = p.next;
          }
        } else if (i.tag === Q)
          s = i.type === e.type ? null : i.child;
        else if (i.tag === Lt) {
          var F = i.return;
          if (F === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          F.lanes = st(F.lanes, r);
          var $ = F.alternate;
          $ !== null && ($.lanes = st($.lanes, r)), pm(F, r, e), s = i.sibling;
        } else
          s = i.child;
        if (s !== null)
          s.return = i;
        else
          for (s = i; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            var G = s.sibling;
            if (G !== null) {
              G.return = s.return, s = G;
              break;
            }
            s = s.return;
          }
        i = s;
      }
    }
    function mu(e, t) {
      pd = e, vu = null, fm = null;
      var r = e.dependencies;
      if (r !== null) {
        var i = r.firstContext;
        i !== null && (Br(r.lanes, t) && mc(), r.firstContext = null);
      }
    }
    function Tn(e) {
      hd && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (fm !== e) {
        var r = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (vu === null) {
          if (pd === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          vu = r, pd.dependencies = {
            lanes: te,
            firstContext: r
          };
        } else
          vu = vu.next = r;
      }
      return t;
    }
    var os = null;
    function hm(e) {
      os === null ? os = [e] : os.push(e);
    }
    function mN() {
      if (os !== null) {
        for (var e = 0; e < os.length; e++) {
          var t = os[e], r = t.interleaved;
          if (r !== null) {
            t.interleaved = null;
            var i = r.next, s = t.pending;
            if (s !== null) {
              var c = s.next;
              s.next = i, r.next = c;
            }
            t.pending = r;
          }
        }
        os = null;
      }
    }
    function __(e, t, r, i) {
      var s = t.interleaved;
      return s === null ? (r.next = r, hm(t)) : (r.next = s.next, s.next = r), t.interleaved = r, md(e, i);
    }
    function yN(e, t, r, i) {
      var s = t.interleaved;
      s === null ? (r.next = r, hm(t)) : (r.next = s.next, s.next = r), t.interleaved = r;
    }
    function gN(e, t, r, i) {
      var s = t.interleaved;
      return s === null ? (r.next = r, hm(t)) : (r.next = s.next, s.next = r), t.interleaved = r, md(e, i);
    }
    function Or(e, t) {
      return md(e, t);
    }
    var bN = md;
    function md(e, t) {
      e.lanes = st(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = st(r.lanes, t)), r === null && (e.flags & (Fn | $o)) !== He && gC(e);
      for (var i = e, s = e.return; s !== null; )
        s.childLanes = st(s.childLanes, t), r = s.alternate, r !== null ? r.childLanes = st(r.childLanes, t) : (s.flags & (Fn | $o)) !== He && gC(e), i = s, s = s.return;
      if (i.tag === R) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var T_ = 0, C_ = 1, yd = 2, vm = 3, gd = !1, mm, bd;
    mm = !1, bd = null;
    function ym(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function R_(e, t) {
      var r = t.updateQueue, i = e.updateQueue;
      if (r === i) {
        var s = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = s;
      }
    }
    function _i(e, t) {
      var r = {
        eventTime: e,
        lane: t,
        tag: T_,
        payload: null,
        callback: null,
        next: null
      };
      return r;
    }
    function lo(e, t, r) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var s = i.shared;
      if (bd === s && !mm && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mm = !0), yI()) {
        var c = s.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), s.pending = t, bN(e, r);
      } else
        return gN(e, s, t, r);
    }
    function Sd(e, t, r) {
      var i = t.updateQueue;
      if (i !== null) {
        var s = i.shared;
        if (FS(r)) {
          var c = s.lanes;
          c = PS(c, e.pendingLanes);
          var p = st(c, r);
          s.lanes = p, lv(e, p);
        }
      }
    }
    function gm(e, t) {
      var r = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var s = i.updateQueue;
        if (r === s) {
          var c = null, p = null, v = r.firstBaseUpdate;
          if (v !== null) {
            var b = v;
            do {
              var C = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              p === null ? c = p = C : (p.next = C, p = C), b = b.next;
            } while (b !== null);
            p === null ? c = p = t : (p.next = t, p = t);
          } else
            c = p = t;
          r = {
            baseState: s.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: p,
            shared: s.shared,
            effects: s.effects
          }, e.updateQueue = r;
          return;
        }
      }
      var x = r.lastBaseUpdate;
      x === null ? r.firstBaseUpdate = t : x.next = t, r.lastBaseUpdate = t;
    }
    function SN(e, t, r, i, s, c) {
      switch (r.tag) {
        case C_: {
          var p = r.payload;
          if (typeof p == "function") {
            b_();
            var v = p.call(c, i, s);
            {
              if (e.mode & hn) {
                Pn(!0);
                try {
                  p.call(c, i, s);
                } finally {
                  Pn(!1);
                }
              }
              S_();
            }
            return v;
          }
          return p;
        }
        case vm:
          e.flags = e.flags & -65537 | It;
        // Intentional fallthrough
        case T_: {
          var b = r.payload, C;
          if (typeof b == "function") {
            b_(), C = b.call(c, i, s);
            {
              if (e.mode & hn) {
                Pn(!0);
                try {
                  b.call(c, i, s);
                } finally {
                  Pn(!1);
                }
              }
              S_();
            }
          } else
            C = b;
          return C == null ? i : nt({}, i, C);
        }
        case yd:
          return gd = !0, i;
      }
      return i;
    }
    function Ed(e, t, r, i) {
      var s = e.updateQueue;
      gd = !1, bd = s.shared;
      var c = s.firstBaseUpdate, p = s.lastBaseUpdate, v = s.shared.pending;
      if (v !== null) {
        s.shared.pending = null;
        var b = v, C = b.next;
        b.next = null, p === null ? c = C : p.next = C, p = b;
        var x = e.alternate;
        if (x !== null) {
          var N = x.updateQueue, L = N.lastBaseUpdate;
          L !== p && (L === null ? N.firstBaseUpdate = C : L.next = C, N.lastBaseUpdate = b);
        }
      }
      if (c !== null) {
        var F = s.baseState, $ = te, G = null, ye = null, Me = null, De = c;
        do {
          var _t = De.lane, yt = De.eventTime;
          if (Zs(i, _t)) {
            if (Me !== null) {
              var W = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Bn,
                tag: De.tag,
                payload: De.payload,
                callback: De.callback,
                next: null
              };
              Me = Me.next = W;
            }
            F = SN(e, s, De, F, t, r);
            var j = De.callback;
            if (j !== null && // If the update was already committed, we should not queue its
            // callback again.
            De.lane !== Bn) {
              e.flags |= bS;
              var re = s.effects;
              re === null ? s.effects = [De] : re.push(De);
            }
          } else {
            var U = {
              eventTime: yt,
              lane: _t,
              tag: De.tag,
              payload: De.payload,
              callback: De.callback,
              next: null
            };
            Me === null ? (ye = Me = U, G = F) : Me = Me.next = U, $ = st($, _t);
          }
          if (De = De.next, De === null) {
            if (v = s.shared.pending, v === null)
              break;
            var _e = v, ge = _e.next;
            _e.next = null, De = ge, s.lastBaseUpdate = _e, s.shared.pending = null;
          }
        } while (!0);
        Me === null && (G = F), s.baseState = G, s.firstBaseUpdate = ye, s.lastBaseUpdate = Me;
        var Ve = s.shared.interleaved;
        if (Ve !== null) {
          var Xe = Ve;
          do
            $ = st($, Xe.lane), Xe = Xe.next;
          while (Xe !== Ve);
        } else c === null && (s.shared.lanes = te);
        Oc($), e.lanes = $, e.memoizedState = F;
      }
      bd = null;
    }
    function EN(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function x_() {
      gd = !1;
    }
    function _d() {
      return gd;
    }
    function w_(e, t, r) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var s = 0; s < i.length; s++) {
          var c = i[s], p = c.callback;
          p !== null && (c.callback = null, EN(p, r));
        }
    }
    var nc = {}, co = io(nc), rc = io(nc), Td = io(nc);
    function Cd(e) {
      if (e === nc)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function O_() {
      var e = Cd(Td.current);
      return e;
    }
    function bm(e, t) {
      sr(Td, t, e), sr(rc, e, e), sr(co, nc, e);
      var r = FL(t);
      or(co, e), sr(co, r, e);
    }
    function yu(e) {
      or(co, e), or(rc, e), or(Td, e);
    }
    function Sm() {
      var e = Cd(co.current);
      return e;
    }
    function A_(e) {
      Cd(Td.current);
      var t = Cd(co.current), r = zL(t, e.type);
      t !== r && (sr(rc, e, e), sr(co, r, e));
    }
    function Em(e) {
      rc.current === e && (or(co, e), or(rc, e));
    }
    var _N = 0, D_ = 1, k_ = 1, ac = 2, Ca = io(_N);
    function _m(e, t) {
      return (e & t) !== 0;
    }
    function gu(e) {
      return e & D_;
    }
    function Tm(e, t) {
      return e & D_ | t;
    }
    function TN(e, t) {
      return e | t;
    }
    function fo(e, t) {
      sr(Ca, t, e);
    }
    function bu(e) {
      or(Ca, e);
    }
    function CN(e, t) {
      var r = e.memoizedState;
      return r !== null ? r.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Rd(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === oe) {
          var r = t.memoizedState;
          if (r !== null) {
            var i = r.dehydrated;
            if (i === null || WE(i) || Bv(i))
              return t;
          }
        } else if (t.tag === Ot && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var s = (t.flags & It) !== He;
          if (s)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ar = (
      /*   */
      0
    ), Cn = (
      /* */
      1
    ), Va = (
      /*  */
      2
    ), Rn = (
      /*    */
      4
    ), Kn = (
      /*   */
      8
    ), Cm = [];
    function Rm() {
      for (var e = 0; e < Cm.length; e++) {
        var t = Cm[e];
        t._workInProgressVersionPrimary = null;
      }
      Cm.length = 0;
    }
    function RN(e, t) {
      var r = t._getVersion, i = r(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ee = o.ReactCurrentDispatcher, ic = o.ReactCurrentBatchConfig, xm, Su;
    xm = /* @__PURE__ */ new Set();
    var ss = te, Pt = null, xn = null, wn = null, xd = !1, oc = !1, sc = 0, xN = 0, wN = 25, K = null, oa = null, po = -1, wm = !1;
    function Ut() {
      {
        var e = K;
        oa === null ? oa = [e] : oa.push(e);
      }
    }
    function ve() {
      {
        var e = K;
        oa !== null && (po++, oa[po] !== e && ON(e));
      }
    }
    function Eu(e) {
      e != null && !mt(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", K, typeof e);
    }
    function ON(e) {
      {
        var t = E(Pt);
        if (!xm.has(t) && (xm.add(t), oa !== null)) {
          for (var r = "", i = 30, s = 0; s <= po; s++) {
            for (var c = oa[s], p = s === po ? e : c, v = s + 1 + ". " + c; v.length < i; )
              v += " ";
            v += p + `
`, r += v;
          }
          d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, r);
        }
      }
    }
    function ur() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Om(e, t) {
      if (wm)
        return !1;
      if (t === null)
        return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", K), !1;
      e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, K, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!Vr(e[r], t[r]))
          return !1;
      return !0;
    }
    function _u(e, t, r, i, s, c) {
      ss = c, Pt = t, oa = e !== null ? e._debugHookTypes : null, po = -1, wm = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? Ee.current = Z_ : oa !== null ? Ee.current = J_ : Ee.current = Q_;
      var p = r(i, s);
      if (oc) {
        var v = 0;
        do {
          if (oc = !1, sc = 0, v >= wN)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, wm = !1, xn = null, wn = null, t.updateQueue = null, po = -1, Ee.current = eT, p = r(i, s);
        } while (oc);
      }
      Ee.current = zd, t._debugHookTypes = oa;
      var b = xn !== null && xn.next !== null;
      if (ss = te, Pt = null, xn = null, wn = null, K = null, oa = null, po = -1, e !== null && (e.flags & pi) !== (t.flags & pi) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & St) !== je && d("Internal React error: Expected static flag was missing. Please notify the React team."), xd = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return p;
    }
    function Tu() {
      var e = sc !== 0;
      return sc = 0, e;
    }
    function L_(e, t, r) {
      t.updateQueue = e.updateQueue, (t.mode & Pa) !== je ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = wf(e.lanes, r);
    }
    function N_() {
      if (Ee.current = zd, xd) {
        for (var e = Pt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        xd = !1;
      }
      ss = te, Pt = null, xn = null, wn = null, oa = null, po = -1, K = null, Y_ = !1, oc = !1, sc = 0;
    }
    function qa() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return wn === null ? Pt.memoizedState = wn = e : wn = wn.next = e, wn;
    }
    function sa() {
      var e;
      if (xn === null) {
        var t = Pt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = xn.next;
      var r;
      if (wn === null ? r = Pt.memoizedState : r = wn.next, r !== null)
        wn = r, r = wn.next, xn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        xn = e;
        var i = {
          memoizedState: xn.memoizedState,
          baseState: xn.baseState,
          baseQueue: xn.baseQueue,
          queue: xn.queue,
          next: null
        };
        wn === null ? Pt.memoizedState = wn = i : wn = wn.next = i;
      }
      return wn;
    }
    function M_() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Am(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dm(e, t, r) {
      var i = qa(), s;
      r !== void 0 ? s = r(t) : s = t, i.memoizedState = i.baseState = s;
      var c = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      };
      i.queue = c;
      var p = c.dispatch = LN.bind(null, Pt, c);
      return [i.memoizedState, p];
    }
    function km(e, t, r) {
      var i = sa(), s = i.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var c = xn, p = c.baseQueue, v = s.pending;
      if (v !== null) {
        if (p !== null) {
          var b = p.next, C = v.next;
          p.next = C, v.next = b;
        }
        c.baseQueue !== p && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = p = v, s.pending = null;
      }
      if (p !== null) {
        var x = p.next, N = c.baseState, L = null, F = null, $ = null, G = x;
        do {
          var ye = G.lane;
          if (Zs(ss, ye)) {
            if ($ !== null) {
              var De = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Bn,
                action: G.action,
                hasEagerState: G.hasEagerState,
                eagerState: G.eagerState,
                next: null
              };
              $ = $.next = De;
            }
            if (G.hasEagerState)
              N = G.eagerState;
            else {
              var _t = G.action;
              N = e(N, _t);
            }
          } else {
            var Me = {
              lane: ye,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            };
            $ === null ? (F = $ = Me, L = N) : $ = $.next = Me, Pt.lanes = st(Pt.lanes, ye), Oc(ye);
          }
          G = G.next;
        } while (G !== null && G !== x);
        $ === null ? L = N : $.next = F, Vr(N, i.memoizedState) || mc(), i.memoizedState = N, i.baseState = L, i.baseQueue = $, s.lastRenderedState = N;
      }
      var yt = s.interleaved;
      if (yt !== null) {
        var U = yt;
        do {
          var W = U.lane;
          Pt.lanes = st(Pt.lanes, W), Oc(W), U = U.next;
        } while (U !== yt);
      } else p === null && (s.lanes = te);
      var j = s.dispatch;
      return [i.memoizedState, j];
    }
    function Lm(e, t, r) {
      var i = sa(), s = i.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var c = s.dispatch, p = s.pending, v = i.memoizedState;
      if (p !== null) {
        s.pending = null;
        var b = p.next, C = b;
        do {
          var x = C.action;
          v = e(v, x), C = C.next;
        } while (C !== b);
        Vr(v, i.memoizedState) || mc(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), s.lastRenderedState = v;
      }
      return [v, c];
    }
    function M3(e, t, r) {
    }
    function I3(e, t, r) {
    }
    function Nm(e, t, r) {
      var i = Pt, s = qa(), c, p = Wn();
      if (p) {
        if (r === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = r(), Su || c !== r() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), Su = !0);
      } else {
        if (c = t(), !Su) {
          var v = t();
          Vr(c, v) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Su = !0);
        }
        var b = ap();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xf(b, ss) || I_(i, t, c);
      }
      s.memoizedState = c;
      var C = {
        value: c,
        getSnapshot: t
      };
      return s.queue = C, kd(j_.bind(null, i, C, e), [e]), i.flags |= Xi, uc(Cn | Kn, U_.bind(null, i, C, c, t), void 0, null), c;
    }
    function wd(e, t, r) {
      var i = Pt, s = sa(), c = t();
      if (!Su) {
        var p = t();
        Vr(c, p) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), Su = !0);
      }
      var v = s.memoizedState, b = !Vr(v, c);
      b && (s.memoizedState = c, mc());
      var C = s.queue;
      if (cc(j_.bind(null, i, C, e), [e]), C.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      wn !== null && wn.memoizedState.tag & Cn) {
        i.flags |= Xi, uc(Cn | Kn, U_.bind(null, i, C, c, t), void 0, null);
        var x = ap();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xf(x, ss) || I_(i, t, c);
      }
      return c;
    }
    function I_(e, t, r) {
      e.flags |= Ah;
      var i = {
        getSnapshot: t,
        value: r
      }, s = Pt.updateQueue;
      if (s === null)
        s = M_(), Pt.updateQueue = s, s.stores = [i];
      else {
        var c = s.stores;
        c === null ? s.stores = [i] : c.push(i);
      }
    }
    function U_(e, t, r, i) {
      t.value = r, t.getSnapshot = i, F_(t) && z_(e);
    }
    function j_(e, t, r) {
      var i = function() {
        F_(t) && z_(e);
      };
      return r(i);
    }
    function F_(e) {
      var t = e.getSnapshot, r = e.value;
      try {
        var i = t();
        return !Vr(r, i);
      } catch {
        return !0;
      }
    }
    function z_(e) {
      var t = Or(e, qe);
      t !== null && kn(t, e, qe, an);
    }
    function Od(e) {
      var t = qa();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var r = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: Am,
        lastRenderedState: e
      };
      t.queue = r;
      var i = r.dispatch = NN.bind(null, Pt, r);
      return [t.memoizedState, i];
    }
    function Mm(e) {
      return km(Am);
    }
    function Im(e) {
      return Lm(Am);
    }
    function uc(e, t, r, i) {
      var s = {
        tag: e,
        create: t,
        destroy: r,
        deps: i,
        // Circular
        next: null
      }, c = Pt.updateQueue;
      if (c === null)
        c = M_(), Pt.updateQueue = c, c.lastEffect = s.next = s;
      else {
        var p = c.lastEffect;
        if (p === null)
          c.lastEffect = s.next = s;
        else {
          var v = p.next;
          p.next = s, s.next = v, c.lastEffect = s;
        }
      }
      return s;
    }
    function Um(e) {
      var t = qa();
      {
        var r = {
          current: e
        };
        return t.memoizedState = r, r;
      }
    }
    function Ad(e) {
      var t = sa();
      return t.memoizedState;
    }
    function lc(e, t, r, i) {
      var s = qa(), c = i === void 0 ? null : i;
      Pt.flags |= e, s.memoizedState = uc(Cn | t, r, void 0, c);
    }
    function Dd(e, t, r, i) {
      var s = sa(), c = i === void 0 ? null : i, p = void 0;
      if (xn !== null) {
        var v = xn.memoizedState;
        if (p = v.destroy, c !== null) {
          var b = v.deps;
          if (Om(c, b)) {
            s.memoizedState = uc(t, r, p, c);
            return;
          }
        }
      }
      Pt.flags |= e, s.memoizedState = uc(Cn | t, r, p, c);
    }
    function kd(e, t) {
      return (Pt.mode & Pa) !== je ? lc(Nh | Xi | Lh, Kn, e, t) : lc(Xi | Lh, Kn, e, t);
    }
    function cc(e, t) {
      return Dd(Xi, Kn, e, t);
    }
    function jm(e, t) {
      return lc(Mt, Va, e, t);
    }
    function Ld(e, t) {
      return Dd(Mt, Va, e, t);
    }
    function Fm(e, t) {
      var r = Mt;
      return r |= Vo, (Pt.mode & Pa) !== je && (r |= Qi), lc(r, Rn, e, t);
    }
    function Nd(e, t) {
      return Dd(Mt, Rn, e, t);
    }
    function P_(e, t) {
      if (typeof t == "function") {
        var r = t, i = e();
        return r(i), function() {
          r(null);
        };
      } else if (t != null) {
        var s = t;
        s.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(s).join(", ") + "}");
        var c = e();
        return s.current = c, function() {
          s.current = null;
        };
      }
    }
    function zm(e, t, r) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null, s = Mt;
      return s |= Vo, (Pt.mode & Pa) !== je && (s |= Qi), lc(s, Rn, P_.bind(null, t, e), i);
    }
    function Md(e, t, r) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null;
      return Dd(Mt, Rn, P_.bind(null, t, e), i);
    }
    function AN(e, t) {
    }
    var Id = AN;
    function Pm(e, t) {
      var r = qa(), i = t === void 0 ? null : t;
      return r.memoizedState = [e, i], e;
    }
    function Ud(e, t) {
      var r = sa(), i = t === void 0 ? null : t, s = r.memoizedState;
      if (s !== null && i !== null) {
        var c = s[1];
        if (Om(i, c))
          return s[0];
      }
      return r.memoizedState = [e, i], e;
    }
    function Bm(e, t) {
      var r = qa(), i = t === void 0 ? null : t, s = e();
      return r.memoizedState = [s, i], s;
    }
    function jd(e, t) {
      var r = sa(), i = t === void 0 ? null : t, s = r.memoizedState;
      if (s !== null && i !== null) {
        var c = s[1];
        if (Om(i, c))
          return s[0];
      }
      var p = e();
      return r.memoizedState = [p, i], p;
    }
    function $m(e) {
      var t = qa();
      return t.memoizedState = e, e;
    }
    function B_(e) {
      var t = sa(), r = xn, i = r.memoizedState;
      return H_(t, i, e);
    }
    function $_(e) {
      var t = sa();
      if (xn === null)
        return t.memoizedState = e, e;
      var r = xn.memoizedState;
      return H_(t, r, e);
    }
    function H_(e, t, r) {
      var i = !hD(ss);
      if (i) {
        if (!Vr(r, t)) {
          var s = zS();
          Pt.lanes = st(Pt.lanes, s), Oc(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, mc()), e.memoizedState = r, r;
    }
    function DN(e, t, r) {
      var i = Sa();
      $n(TD(i, vi)), e(!0);
      var s = ic.transition;
      ic.transition = {};
      var c = ic.transition;
      ic.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), ic.transition = s, s === null && c._updatedFibers) {
          var p = c._updatedFibers.size;
          p > 10 && f("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function Hm() {
      var e = Od(!1), t = e[0], r = e[1], i = DN.bind(null, r), s = qa();
      return s.memoizedState = i, [t, i];
    }
    function V_() {
      var e = Mm(), t = e[0], r = sa(), i = r.memoizedState;
      return [t, i];
    }
    function q_() {
      var e = Im(), t = e[0], r = sa(), i = r.memoizedState;
      return [t, i];
    }
    var Y_ = !1;
    function kN() {
      return Y_;
    }
    function Vm() {
      var e = qa(), t = ap(), r = t.identifierPrefix, i;
      if (Wn()) {
        var s = W1();
        i = ":" + r + "R" + s;
        var c = sc++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var p = xN++;
        i = ":" + r + "r" + p.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Fd() {
      var e = sa(), t = e.memoizedState;
      return t;
    }
    function LN(e, t, r) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = go(e), s = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (G_(e))
        W_(t, s);
      else {
        var c = __(e, t, s, i);
        if (c !== null) {
          var p = br();
          kn(c, e, i, p), K_(c, t, i);
        }
      }
      X_(e, i);
    }
    function NN(e, t, r) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = go(e), s = {
        lane: i,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (G_(e))
        W_(t, s);
      else {
        var c = e.alternate;
        if (e.lanes === te && (c === null || c.lanes === te)) {
          var p = t.lastRenderedReducer;
          if (p !== null) {
            var v;
            v = Ee.current, Ee.current = Ra;
            try {
              var b = t.lastRenderedState, C = p(b, r);
              if (s.hasEagerState = !0, s.eagerState = C, Vr(C, b)) {
                yN(e, t, s, i);
                return;
              }
            } catch {
            } finally {
              Ee.current = v;
            }
          }
        }
        var x = __(e, t, s, i);
        if (x !== null) {
          var N = br();
          kn(x, e, i, N), K_(x, t, i);
        }
      }
      X_(e, i);
    }
    function G_(e) {
      var t = e.alternate;
      return e === Pt || t !== null && t === Pt;
    }
    function W_(e, t) {
      oc = xd = !0;
      var r = e.pending;
      r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
    }
    function K_(e, t, r) {
      if (FS(r)) {
        var i = t.lanes;
        i = PS(i, e.pendingLanes);
        var s = st(i, r);
        t.lanes = s, lv(e, s);
      }
    }
    function X_(e, t, r) {
      Fh(e, t);
    }
    var zd = {
      readContext: Tn,
      useCallback: ur,
      useContext: ur,
      useEffect: ur,
      useImperativeHandle: ur,
      useInsertionEffect: ur,
      useLayoutEffect: ur,
      useMemo: ur,
      useReducer: ur,
      useRef: ur,
      useState: ur,
      useDebugValue: ur,
      useDeferredValue: ur,
      useTransition: ur,
      useMutableSource: ur,
      useSyncExternalStore: ur,
      useId: ur,
      unstable_isNewReconciler: Fe
    }, Q_ = null, J_ = null, Z_ = null, eT = null, Ya = null, Ra = null, Pd = null;
    {
      var qm = function() {
        d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ye = function() {
        d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Q_ = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", Ut(), Eu(t), Pm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", Ut(), Tn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", Ut(), Eu(t), kd(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return K = "useImperativeHandle", Ut(), Eu(r), zm(e, t, r);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", Ut(), Eu(t), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", Ut(), Eu(t), Fm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", Ut(), Eu(t);
          var r = Ee.current;
          Ee.current = Ya;
          try {
            return Bm(e, t);
          } finally {
            Ee.current = r;
          }
        },
        useReducer: function(e, t, r) {
          K = "useReducer", Ut();
          var i = Ee.current;
          Ee.current = Ya;
          try {
            return Dm(e, t, r);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", Ut(), Um(e);
        },
        useState: function(e) {
          K = "useState", Ut();
          var t = Ee.current;
          Ee.current = Ya;
          try {
            return Od(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", Ut(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", Ut(), $m(e);
        },
        useTransition: function() {
          return K = "useTransition", Ut(), Hm();
        },
        useMutableSource: function(e, t, r) {
          return K = "useMutableSource", Ut(), void 0;
        },
        useSyncExternalStore: function(e, t, r) {
          return K = "useSyncExternalStore", Ut(), Nm(e, t, r);
        },
        useId: function() {
          return K = "useId", Ut(), Vm();
        },
        unstable_isNewReconciler: Fe
      }, J_ = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", ve(), Pm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", ve(), Tn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", ve(), kd(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return K = "useImperativeHandle", ve(), zm(e, t, r);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", ve(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", ve(), Fm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", ve();
          var r = Ee.current;
          Ee.current = Ya;
          try {
            return Bm(e, t);
          } finally {
            Ee.current = r;
          }
        },
        useReducer: function(e, t, r) {
          K = "useReducer", ve();
          var i = Ee.current;
          Ee.current = Ya;
          try {
            return Dm(e, t, r);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", ve(), Um(e);
        },
        useState: function(e) {
          K = "useState", ve();
          var t = Ee.current;
          Ee.current = Ya;
          try {
            return Od(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", ve(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", ve(), $m(e);
        },
        useTransition: function() {
          return K = "useTransition", ve(), Hm();
        },
        useMutableSource: function(e, t, r) {
          return K = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, r) {
          return K = "useSyncExternalStore", ve(), Nm(e, t, r);
        },
        useId: function() {
          return K = "useId", ve(), Vm();
        },
        unstable_isNewReconciler: Fe
      }, Z_ = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", ve(), Ud(e, t);
        },
        useContext: function(e) {
          return K = "useContext", ve(), Tn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", ve(), cc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return K = "useImperativeHandle", ve(), Md(e, t, r);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", ve(), Ld(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", ve(), Nd(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", ve();
          var r = Ee.current;
          Ee.current = Ra;
          try {
            return jd(e, t);
          } finally {
            Ee.current = r;
          }
        },
        useReducer: function(e, t, r) {
          K = "useReducer", ve();
          var i = Ee.current;
          Ee.current = Ra;
          try {
            return km(e, t, r);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", ve(), Ad();
        },
        useState: function(e) {
          K = "useState", ve();
          var t = Ee.current;
          Ee.current = Ra;
          try {
            return Mm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", ve(), Id();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", ve(), B_(e);
        },
        useTransition: function() {
          return K = "useTransition", ve(), V_();
        },
        useMutableSource: function(e, t, r) {
          return K = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, r) {
          return K = "useSyncExternalStore", ve(), wd(e, t);
        },
        useId: function() {
          return K = "useId", ve(), Fd();
        },
        unstable_isNewReconciler: Fe
      }, eT = {
        readContext: function(e) {
          return Tn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", ve(), Ud(e, t);
        },
        useContext: function(e) {
          return K = "useContext", ve(), Tn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", ve(), cc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return K = "useImperativeHandle", ve(), Md(e, t, r);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", ve(), Ld(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", ve(), Nd(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", ve();
          var r = Ee.current;
          Ee.current = Pd;
          try {
            return jd(e, t);
          } finally {
            Ee.current = r;
          }
        },
        useReducer: function(e, t, r) {
          K = "useReducer", ve();
          var i = Ee.current;
          Ee.current = Pd;
          try {
            return Lm(e, t, r);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", ve(), Ad();
        },
        useState: function(e) {
          K = "useState", ve();
          var t = Ee.current;
          Ee.current = Pd;
          try {
            return Im(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", ve(), Id();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", ve(), $_(e);
        },
        useTransition: function() {
          return K = "useTransition", ve(), q_();
        },
        useMutableSource: function(e, t, r) {
          return K = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, r) {
          return K = "useSyncExternalStore", ve(), wd(e, t);
        },
        useId: function() {
          return K = "useId", ve(), Fd();
        },
        unstable_isNewReconciler: Fe
      }, Ya = {
        readContext: function(e) {
          return qm(), Tn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", Ye(), Ut(), Pm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", Ye(), Ut(), Tn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", Ye(), Ut(), kd(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return K = "useImperativeHandle", Ye(), Ut(), zm(e, t, r);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", Ye(), Ut(), jm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", Ye(), Ut(), Fm(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", Ye(), Ut();
          var r = Ee.current;
          Ee.current = Ya;
          try {
            return Bm(e, t);
          } finally {
            Ee.current = r;
          }
        },
        useReducer: function(e, t, r) {
          K = "useReducer", Ye(), Ut();
          var i = Ee.current;
          Ee.current = Ya;
          try {
            return Dm(e, t, r);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", Ye(), Ut(), Um(e);
        },
        useState: function(e) {
          K = "useState", Ye(), Ut();
          var t = Ee.current;
          Ee.current = Ya;
          try {
            return Od(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", Ye(), Ut(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", Ye(), Ut(), $m(e);
        },
        useTransition: function() {
          return K = "useTransition", Ye(), Ut(), Hm();
        },
        useMutableSource: function(e, t, r) {
          return K = "useMutableSource", Ye(), Ut(), void 0;
        },
        useSyncExternalStore: function(e, t, r) {
          return K = "useSyncExternalStore", Ye(), Ut(), Nm(e, t, r);
        },
        useId: function() {
          return K = "useId", Ye(), Ut(), Vm();
        },
        unstable_isNewReconciler: Fe
      }, Ra = {
        readContext: function(e) {
          return qm(), Tn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", Ye(), ve(), Ud(e, t);
        },
        useContext: function(e) {
          return K = "useContext", Ye(), ve(), Tn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", Ye(), ve(), cc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return K = "useImperativeHandle", Ye(), ve(), Md(e, t, r);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", Ye(), ve(), Ld(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", Ye(), ve(), Nd(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", Ye(), ve();
          var r = Ee.current;
          Ee.current = Ra;
          try {
            return jd(e, t);
          } finally {
            Ee.current = r;
          }
        },
        useReducer: function(e, t, r) {
          K = "useReducer", Ye(), ve();
          var i = Ee.current;
          Ee.current = Ra;
          try {
            return km(e, t, r);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", Ye(), ve(), Ad();
        },
        useState: function(e) {
          K = "useState", Ye(), ve();
          var t = Ee.current;
          Ee.current = Ra;
          try {
            return Mm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", Ye(), ve(), Id();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", Ye(), ve(), B_(e);
        },
        useTransition: function() {
          return K = "useTransition", Ye(), ve(), V_();
        },
        useMutableSource: function(e, t, r) {
          return K = "useMutableSource", Ye(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, r) {
          return K = "useSyncExternalStore", Ye(), ve(), wd(e, t);
        },
        useId: function() {
          return K = "useId", Ye(), ve(), Fd();
        },
        unstable_isNewReconciler: Fe
      }, Pd = {
        readContext: function(e) {
          return qm(), Tn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", Ye(), ve(), Ud(e, t);
        },
        useContext: function(e) {
          return K = "useContext", Ye(), ve(), Tn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", Ye(), ve(), cc(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return K = "useImperativeHandle", Ye(), ve(), Md(e, t, r);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", Ye(), ve(), Ld(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", Ye(), ve(), Nd(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", Ye(), ve();
          var r = Ee.current;
          Ee.current = Ra;
          try {
            return jd(e, t);
          } finally {
            Ee.current = r;
          }
        },
        useReducer: function(e, t, r) {
          K = "useReducer", Ye(), ve();
          var i = Ee.current;
          Ee.current = Ra;
          try {
            return Lm(e, t, r);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", Ye(), ve(), Ad();
        },
        useState: function(e) {
          K = "useState", Ye(), ve();
          var t = Ee.current;
          Ee.current = Ra;
          try {
            return Im(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", Ye(), ve(), Id();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", Ye(), ve(), $_(e);
        },
        useTransition: function() {
          return K = "useTransition", Ye(), ve(), q_();
        },
        useMutableSource: function(e, t, r) {
          return K = "useMutableSource", Ye(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, r) {
          return K = "useSyncExternalStore", Ye(), ve(), wd(e, t);
        },
        useId: function() {
          return K = "useId", Ye(), ve(), Fd();
        },
        unstable_isNewReconciler: Fe
      };
    }
    var ho = a.unstable_now, tT = 0, Bd = -1, fc = -1, $d = -1, Ym = !1, Hd = !1;
    function nT() {
      return Ym;
    }
    function MN() {
      Hd = !0;
    }
    function IN() {
      Ym = !1, Hd = !1;
    }
    function UN() {
      Ym = Hd, Hd = !1;
    }
    function rT() {
      return tT;
    }
    function aT() {
      tT = ho();
    }
    function Gm(e) {
      fc = ho(), e.actualStartTime < 0 && (e.actualStartTime = ho());
    }
    function iT(e) {
      fc = -1;
    }
    function Vd(e, t) {
      if (fc >= 0) {
        var r = ho() - fc;
        e.actualDuration += r, t && (e.selfBaseDuration = r), fc = -1;
      }
    }
    function Ga(e) {
      if (Bd >= 0) {
        var t = ho() - Bd;
        Bd = -1;
        for (var r = e.return; r !== null; ) {
          switch (r.tag) {
            case R:
              var i = r.stateNode;
              i.effectDuration += t;
              return;
            case ae:
              var s = r.stateNode;
              s.effectDuration += t;
              return;
          }
          r = r.return;
        }
      }
    }
    function Wm(e) {
      if ($d >= 0) {
        var t = ho() - $d;
        $d = -1;
        for (var r = e.return; r !== null; ) {
          switch (r.tag) {
            case R:
              var i = r.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ae:
              var s = r.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
          }
          r = r.return;
        }
      }
    }
    function Wa() {
      Bd = ho();
    }
    function Km() {
      $d = ho();
    }
    function Xm(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function xa(e, t) {
      if (e && e.defaultProps) {
        var r = nt({}, t), i = e.defaultProps;
        for (var s in i)
          r[s] === void 0 && (r[s] = i[s]);
        return r;
      }
      return t;
    }
    var Qm = {}, Jm, Zm, ey, ty, ny, oT, qd, ry, ay, iy, dc;
    {
      Jm = /* @__PURE__ */ new Set(), Zm = /* @__PURE__ */ new Set(), ey = /* @__PURE__ */ new Set(), ty = /* @__PURE__ */ new Set(), ry = /* @__PURE__ */ new Set(), ny = /* @__PURE__ */ new Set(), ay = /* @__PURE__ */ new Set(), iy = /* @__PURE__ */ new Set(), dc = /* @__PURE__ */ new Set();
      var sT = /* @__PURE__ */ new Set();
      qd = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var r = t + "_" + e;
          sT.has(r) || (sT.add(r), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, oT = function(e, t) {
        if (t === void 0) {
          var r = Ct(e) || "Component";
          ny.has(r) || (ny.add(r), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", r));
        }
      }, Object.defineProperty(Qm, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Qm);
    }
    function oy(e, t, r, i) {
      var s = e.memoizedState, c = r(i, s);
      {
        if (e.mode & hn) {
          Pn(!0);
          try {
            c = r(i, s);
          } finally {
            Pn(!1);
          }
        }
        oT(t, c);
      }
      var p = c == null ? s : nt({}, s, c);
      if (e.memoizedState = p, e.lanes === te) {
        var v = e.updateQueue;
        v.baseState = p;
      }
    }
    var sy = {
      isMounted: wA,
      enqueueSetState: function(e, t, r) {
        var i = Vs(e), s = br(), c = go(i), p = _i(s, c);
        p.payload = t, r != null && (qd(r, "setState"), p.callback = r);
        var v = lo(i, p, c);
        v !== null && (kn(v, i, c, s), Sd(v, i, c)), Fh(i, c);
      },
      enqueueReplaceState: function(e, t, r) {
        var i = Vs(e), s = br(), c = go(i), p = _i(s, c);
        p.tag = C_, p.payload = t, r != null && (qd(r, "replaceState"), p.callback = r);
        var v = lo(i, p, c);
        v !== null && (kn(v, i, c, s), Sd(v, i, c)), Fh(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var r = Vs(e), i = br(), s = go(r), c = _i(i, s);
        c.tag = yd, t != null && (qd(t, "forceUpdate"), c.callback = t);
        var p = lo(r, c, s);
        p !== null && (kn(p, r, s, i), Sd(p, r, s)), aD(r, s);
      }
    };
    function uT(e, t, r, i, s, c, p) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var b = v.shouldComponentUpdate(i, c, p);
        {
          if (e.mode & hn) {
            Pn(!0);
            try {
              b = v.shouldComponentUpdate(i, c, p);
            } finally {
              Pn(!1);
            }
          }
          b === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ct(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ml(r, i) || !Ml(s, c) : !0;
    }
    function jN(e, t, r) {
      var i = e.stateNode;
      {
        var s = Ct(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), i.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), i.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), t.childContextTypes && !dc.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & hn) === je && (dc.add(t), d(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, s)), t.contextTypes && !dc.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & hn) === je && (dc.add(t), d(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s)), i.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !ay.has(t) && (ay.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof i.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof i.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof i.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof i.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var p = i.props !== r;
        i.props !== void 0 && p && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), i.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !ey.has(t) && (ey.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ct(t))), typeof i.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof i.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var v = i.state;
        v && (typeof v != "object" || mt(v)) && d("%s.state: must be set to an object or null", s), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function lT(e, t) {
      t.updater = sy, e.stateNode = t, TA(t, e), t._reactInternalInstance = Qm;
    }
    function cT(e, t, r) {
      var i = !1, s = qr, c = qr, p = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === A && p._context === void 0
        );
        if (!v && !iy.has(t)) {
          iy.add(t);
          var b = "";
          p === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? b = " However, it is set to a " + typeof p + "." : p.$$typeof === jn ? b = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ct(t) || "Component", b);
        }
      }
      if (typeof p == "object" && p !== null)
        c = Tn(p);
      else {
        s = lu(e, t, !0);
        var C = t.contextTypes;
        i = C != null, c = i ? cu(e, s) : qr;
      }
      var x = new t(r, c);
      if (e.mode & hn) {
        Pn(!0);
        try {
          x = new t(r, c);
        } finally {
          Pn(!1);
        }
      }
      var N = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      lT(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var L = Ct(t) || "Component";
          Zm.has(L) || (Zm.add(L), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, x.state === null ? "null" : "undefined", L));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var F = null, $ = null, G = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? F = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (F = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? $ = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && ($ = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? G = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (G = "UNSAFE_componentWillUpdate"), F !== null || $ !== null || G !== null) {
            var ye = Ct(t) || "Component", Me = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ty.has(ye) || (ty.add(ye), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ye, Me, F !== null ? `
  ` + F : "", $ !== null ? `
  ` + $ : "", G !== null ? `
  ` + G : ""));
          }
        }
      }
      return i && ZE(e, s, c), x;
    }
    function FN(e, t) {
      var r = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", E(e) || "Component"), sy.enqueueReplaceState(t, t.state, null));
    }
    function fT(e, t, r, i) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== s) {
        {
          var c = E(e) || "Component";
          Jm.has(c) || (Jm.add(c), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        sy.enqueueReplaceState(t, t.state, null);
      }
    }
    function uy(e, t, r, i) {
      jN(e, t, r);
      var s = e.stateNode;
      s.props = r, s.state = e.memoizedState, s.refs = {}, ym(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        s.context = Tn(c);
      else {
        var p = lu(e, t, !0);
        s.context = cu(e, p);
      }
      {
        if (s.state === r) {
          var v = Ct(t) || "Component";
          ry.has(v) || (ry.add(v), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & hn && Ta.recordLegacyContextWarning(e, s), Ta.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (oy(e, t, b, r), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (FN(e, s), Ed(e, r, s, i), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var C = Mt;
        C |= Vo, (e.mode & Pa) !== je && (C |= Qi), e.flags |= C;
      }
    }
    function zN(e, t, r, i) {
      var s = e.stateNode, c = e.memoizedProps;
      s.props = c;
      var p = s.context, v = t.contextType, b = qr;
      if (typeof v == "object" && v !== null)
        b = Tn(v);
      else {
        var C = lu(e, t, !0);
        b = cu(e, C);
      }
      var x = t.getDerivedStateFromProps, N = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (c !== r || p !== b) && fT(e, s, r, b), x_();
      var L = e.memoizedState, F = s.state = L;
      if (Ed(e, r, s, i), F = e.memoizedState, c === r && L === F && !nd() && !_d()) {
        if (typeof s.componentDidMount == "function") {
          var $ = Mt;
          $ |= Vo, (e.mode & Pa) !== je && ($ |= Qi), e.flags |= $;
        }
        return !1;
      }
      typeof x == "function" && (oy(e, t, x, r), F = e.memoizedState);
      var G = _d() || uT(e, t, c, r, L, F, b);
      if (G) {
        if (!N && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
          var ye = Mt;
          ye |= Vo, (e.mode & Pa) !== je && (ye |= Qi), e.flags |= ye;
        }
      } else {
        if (typeof s.componentDidMount == "function") {
          var Me = Mt;
          Me |= Vo, (e.mode & Pa) !== je && (Me |= Qi), e.flags |= Me;
        }
        e.memoizedProps = r, e.memoizedState = F;
      }
      return s.props = r, s.state = F, s.context = b, G;
    }
    function PN(e, t, r, i, s) {
      var c = t.stateNode;
      R_(e, t);
      var p = t.memoizedProps, v = t.type === t.elementType ? p : xa(t.type, p);
      c.props = v;
      var b = t.pendingProps, C = c.context, x = r.contextType, N = qr;
      if (typeof x == "object" && x !== null)
        N = Tn(x);
      else {
        var L = lu(t, r, !0);
        N = cu(t, L);
      }
      var F = r.getDerivedStateFromProps, $ = typeof F == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !$ && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (p !== b || C !== N) && fT(t, c, i, N), x_();
      var G = t.memoizedState, ye = c.state = G;
      if (Ed(t, i, c, s), ye = t.memoizedState, p === b && G === ye && !nd() && !_d())
        return typeof c.componentDidUpdate == "function" && (p !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Mt), typeof c.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Ys), !1;
      typeof F == "function" && (oy(t, r, F, i), ye = t.memoizedState);
      var Me = _d() || uT(t, r, v, i, G, ye, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      qt;
      return Me ? (!$ && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, ye, N), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, ye, N)), typeof c.componentDidUpdate == "function" && (t.flags |= Mt), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Ys)) : (typeof c.componentDidUpdate == "function" && (p !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Mt), typeof c.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Ys), t.memoizedProps = i, t.memoizedState = ye), c.props = i, c.state = ye, c.context = N, Me;
    }
    function us(e, t) {
      return {
        value: e,
        source: t,
        stack: Cr(t),
        digest: null
      };
    }
    function ly(e, t, r) {
      return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
      };
    }
    function BN(e, t) {
      return !0;
    }
    function cy(e, t) {
      try {
        var r = BN(e, t);
        if (r === !1)
          return;
        var i = t.value, s = t.source, c = t.stack, p = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === y)
            return;
          console.error(i);
        }
        var v = s ? E(s) : null, b = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === R)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = E(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var N = b + `
` + p + `

` + ("" + C);
        console.error(N);
      } catch (L) {
        setTimeout(function() {
          throw L;
        });
      }
    }
    var $N = typeof WeakMap == "function" ? WeakMap : Map;
    function dT(e, t, r) {
      var i = _i(an, r);
      i.tag = vm, i.payload = {
        element: null
      };
      var s = t.value;
      return i.callback = function() {
        MI(s), cy(e, t);
      }, i;
    }
    function fy(e, t, r) {
      var i = _i(an, r);
      i.tag = vm;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var c = t.value;
        i.payload = function() {
          return s(c);
        }, i.callback = function() {
          TC(e), cy(e, t);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
        TC(e), cy(e, t), typeof s != "function" && LI(this);
        var b = t.value, C = t.stack;
        this.componentDidCatch(b, {
          componentStack: C !== null ? C : ""
        }), typeof s != "function" && (Br(e.lanes, qe) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", E(e) || "Unknown"));
      }), i;
    }
    function pT(e, t, r) {
      var i = e.pingCache, s;
      if (i === null ? (i = e.pingCache = new $N(), s = /* @__PURE__ */ new Set(), i.set(t, s)) : (s = i.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s))), !s.has(r)) {
        s.add(r);
        var c = II.bind(null, e, t, r);
        ba && Ac(e, r), t.then(c, c);
      }
    }
    function HN(e, t, r, i) {
      var s = e.updateQueue;
      if (s === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(r), e.updateQueue = c;
      } else
        s.add(r);
    }
    function VN(e, t) {
      var r = e.tag;
      if ((e.mode & St) === je && (r === g || r === V || r === Z)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function hT(e) {
      var t = e;
      do {
        if (t.tag === oe && CN(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function vT(e, t, r, i, s) {
      if ((e.mode & St) === je) {
        if (e === t)
          e.flags |= ga;
        else {
          if (e.flags |= It, r.flags |= Dh, r.flags &= -52805, r.tag === y) {
            var c = r.alternate;
            if (c === null)
              r.tag = ft;
            else {
              var p = _i(an, qe);
              p.tag = yd, lo(r, p, qe);
            }
          }
          r.lanes = st(r.lanes, qe);
        }
        return e;
      }
      return e.flags |= ga, e.lanes = s, e;
    }
    function qN(e, t, r, i, s) {
      if (r.flags |= Sf, ba && Ac(e, s), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        VN(r), Wn() && r.mode & St && o_();
        var p = hT(t);
        if (p !== null) {
          p.flags &= -257, vT(p, t, r, e, s), p.mode & St && pT(e, c, s), HN(p, e, c);
          return;
        } else {
          if (!pD(s)) {
            pT(e, c, s), Vy();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Wn() && r.mode & St) {
        o_();
        var b = hT(t);
        if (b !== null) {
          (b.flags & ga) === He && (b.flags |= Po), vT(b, t, r, e, s), rm(us(i, r));
          return;
        }
      }
      i = us(i, r), CI(i);
      var C = t;
      do {
        switch (C.tag) {
          case R: {
            var x = i;
            C.flags |= ga;
            var N = bl(s);
            C.lanes = st(C.lanes, N);
            var L = dT(C, x, N);
            gm(C, L);
            return;
          }
          case y:
            var F = i, $ = C.type, G = C.stateNode;
            if ((C.flags & It) === He && (typeof $.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && !hC(G))) {
              C.flags |= ga;
              var ye = bl(s);
              C.lanes = st(C.lanes, ye);
              var Me = fy(C, F, ye);
              gm(C, Me);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function YN() {
      return null;
    }
    var pc = o.ReactCurrentOwner, wa = !1, dy, hc, py, hy, vy, ls, my, Yd, vc;
    dy = {}, hc = {}, py = {}, hy = {}, vy = {}, ls = !1, my = {}, Yd = {}, vc = {};
    function yr(e, t, r, i) {
      e === null ? t.child = g_(t, null, r, i) : t.child = hu(t, e.child, r, i);
    }
    function GN(e, t, r, i) {
      t.child = hu(t, e.child, null, i), t.child = hu(t, null, r, i);
    }
    function mT(e, t, r, i, s) {
      if (t.type !== t.elementType) {
        var c = r.propTypes;
        c && Ea(
          c,
          i,
          // Resolved props
          "prop",
          Ct(r)
        );
      }
      var p = r.render, v = t.ref, b, C;
      mu(t, s), pl(t);
      {
        if (pc.current = t, wt(!0), b = _u(e, t, p, i, v, s), C = Tu(), t.mode & hn) {
          Pn(!0);
          try {
            b = _u(e, t, p, i, v, s), C = Tu();
          } finally {
            Pn(!1);
          }
        }
        wt(!1);
      }
      return Ks(), e !== null && !wa ? (L_(e, t, s), Ti(e, t, s)) : (Wn() && C && Qv(t), t.flags |= qs, yr(e, t, b, s), t.child);
    }
    function yT(e, t, r, i, s) {
      if (e === null) {
        var c = r.type;
        if (JI(c) && r.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        r.defaultProps === void 0) {
          var p = c;
          return p = ku(c), t.tag = Z, t.type = p, by(t, c), gT(e, t, p, i, s);
        }
        {
          var v = c.propTypes;
          if (v && Ea(
            v,
            i,
            // Resolved props
            "prop",
            Ct(c)
          ), r.defaultProps !== void 0) {
            var b = Ct(c) || "Unknown";
            vc[b] || (d("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", b), vc[b] = !0);
          }
        }
        var C = tg(r.type, null, i, t, t.mode, s);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var x = r.type, N = x.propTypes;
        N && Ea(
          N,
          i,
          // Resolved props
          "prop",
          Ct(x)
        );
      }
      var L = e.child, F = Ry(e, s);
      if (!F) {
        var $ = L.memoizedProps, G = r.compare;
        if (G = G !== null ? G : Ml, G($, i) && e.ref === t.ref)
          return Ti(e, t, s);
      }
      t.flags |= qs;
      var ye = hs(L, i);
      return ye.ref = t.ref, ye.return = t, t.child = ye, ye;
    }
    function gT(e, t, r, i, s) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === We) {
          var p = c, v = p._payload, b = p._init;
          try {
            c = b(v);
          } catch {
            c = null;
          }
          var C = c && c.propTypes;
          C && Ea(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ct(c)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (Ml(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (wa = !1, t.pendingProps = i = x, Ry(e, s))
            (e.flags & Dh) !== He && (wa = !0);
          else return t.lanes = e.lanes, Ti(e, t, s);
      }
      return yy(e, t, r, i, s);
    }
    function bT(e, t, r) {
      var i = t.pendingProps, s = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || X)
        if ((t.mode & St) === je) {
          var p = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = p, ip(t, r);
        } else if (Br(r, na)) {
          var N = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var L = c !== null ? c.baseLanes : r;
          ip(t, L);
        } else {
          var v = null, b;
          if (c !== null) {
            var C = c.baseLanes;
            b = st(C, r);
          } else
            b = r;
          t.lanes = t.childLanes = na;
          var x = {
            baseLanes: b,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, ip(t, b), null;
        }
      else {
        var F;
        c !== null ? (F = st(c.baseLanes, r), t.memoizedState = null) : F = r, ip(t, F);
      }
      return yr(e, t, s, r), t.child;
    }
    function WN(e, t, r) {
      var i = t.pendingProps;
      return yr(e, t, i, r), t.child;
    }
    function KN(e, t, r) {
      var i = t.pendingProps.children;
      return yr(e, t, i, r), t.child;
    }
    function XN(e, t, r) {
      {
        t.flags |= Mt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var s = t.pendingProps, c = s.children;
      return yr(e, t, c, r), t.child;
    }
    function ST(e, t) {
      var r = t.ref;
      (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= Bo, t.flags |= kh);
    }
    function yy(e, t, r, i, s) {
      if (t.type !== t.elementType) {
        var c = r.propTypes;
        c && Ea(
          c,
          i,
          // Resolved props
          "prop",
          Ct(r)
        );
      }
      var p;
      {
        var v = lu(t, r, !0);
        p = cu(t, v);
      }
      var b, C;
      mu(t, s), pl(t);
      {
        if (pc.current = t, wt(!0), b = _u(e, t, r, i, p, s), C = Tu(), t.mode & hn) {
          Pn(!0);
          try {
            b = _u(e, t, r, i, p, s), C = Tu();
          } finally {
            Pn(!1);
          }
        }
        wt(!1);
      }
      return Ks(), e !== null && !wa ? (L_(e, t, s), Ti(e, t, s)) : (Wn() && C && Qv(t), t.flags |= qs, yr(e, t, b, s), t.child);
    }
    function ET(e, t, r, i, s) {
      {
        switch (pU(t)) {
          case !1: {
            var c = t.stateNode, p = t.type, v = new p(t.memoizedProps, c.context), b = v.state;
            c.updater.enqueueSetState(c, b, null);
            break;
          }
          case !0: {
            t.flags |= It, t.flags |= ga;
            var C = new Error("Simulated error coming from DevTools"), x = bl(s);
            t.lanes = st(t.lanes, x);
            var N = fy(t, us(C, t), x);
            gm(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var L = r.propTypes;
          L && Ea(
            L,
            i,
            // Resolved props
            "prop",
            Ct(r)
          );
        }
      }
      var F;
      Ha(r) ? (F = !0, ad(t)) : F = !1, mu(t, s);
      var $ = t.stateNode, G;
      $ === null ? (Wd(e, t), cT(t, r, i), uy(t, r, i, s), G = !0) : e === null ? G = zN(t, r, i, s) : G = PN(e, t, r, i, s);
      var ye = gy(e, t, r, G, F, s);
      {
        var Me = t.stateNode;
        G && Me.props !== i && (ls || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", E(t) || "a component"), ls = !0);
      }
      return ye;
    }
    function gy(e, t, r, i, s, c) {
      ST(e, t);
      var p = (t.flags & It) !== He;
      if (!i && !p)
        return s && n_(t, r, !1), Ti(e, t, c);
      var v = t.stateNode;
      pc.current = t;
      var b;
      if (p && typeof r.getDerivedStateFromError != "function")
        b = null, iT();
      else {
        pl(t);
        {
          if (wt(!0), b = v.render(), t.mode & hn) {
            Pn(!0);
            try {
              v.render();
            } finally {
              Pn(!1);
            }
          }
          wt(!1);
        }
        Ks();
      }
      return t.flags |= qs, e !== null && p ? GN(e, t, b, c) : yr(e, t, b, c), t.memoizedState = v.state, s && n_(t, r, !0), t.child;
    }
    function _T(e) {
      var t = e.stateNode;
      t.pendingContext ? e_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && e_(e, t.context, !1), bm(e, t.containerInfo);
    }
    function QN(e, t, r) {
      if (_T(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, s = t.memoizedState, c = s.element;
      R_(e, t), Ed(t, i, null, r);
      var p = t.memoizedState;
      t.stateNode;
      var v = p.element;
      if (s.isDehydrated) {
        var b = {
          element: v,
          isDehydrated: !1,
          cache: p.cache,
          pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
          transitions: p.transitions
        }, C = t.updateQueue;
        if (C.baseState = b, t.memoizedState = b, t.flags & Po) {
          var x = us(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return TT(e, t, v, r, x);
        } else if (v !== c) {
          var N = us(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return TT(e, t, v, r, N);
        } else {
          eN(t);
          var L = g_(t, null, v, r);
          t.child = L;
          for (var F = L; F; )
            F.flags = F.flags & -3 | $o, F = F.sibling;
        }
      } else {
        if (pu(), v === c)
          return Ti(e, t, r);
        yr(e, t, v, r);
      }
      return t.child;
    }
    function TT(e, t, r, i, s) {
      return pu(), rm(s), t.flags |= Po, yr(e, t, r, i), t.child;
    }
    function JN(e, t, r) {
      A_(t), e === null && nm(t);
      var i = t.type, s = t.pendingProps, c = e !== null ? e.memoizedProps : null, p = s.children, v = jv(i, s);
      return v ? p = null : c !== null && jv(i, c) && (t.flags |= bf), ST(e, t), yr(e, t, p, r), t.child;
    }
    function ZN(e, t) {
      return e === null && nm(t), null;
    }
    function eM(e, t, r, i) {
      Wd(e, t);
      var s = t.pendingProps, c = r, p = c._payload, v = c._init, b = v(p);
      t.type = b;
      var C = t.tag = ZI(b), x = xa(b, s), N;
      switch (C) {
        case g:
          return by(t, b), t.type = b = ku(b), N = yy(null, t, b, x, i), N;
        case y:
          return t.type = b = Ky(b), N = ET(null, t, b, x, i), N;
        case V:
          return t.type = b = Xy(b), N = mT(null, t, b, x, i), N;
        case de: {
          if (t.type !== t.elementType) {
            var L = b.propTypes;
            L && Ea(
              L,
              x,
              // Resolved for outer only
              "prop",
              Ct(b)
            );
          }
          return N = yT(
            null,
            t,
            b,
            xa(b.type, x),
            // The inner type can have defaults too
            i
          ), N;
        }
      }
      var F = "";
      throw b !== null && typeof b == "object" && b.$$typeof === We && (F = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + F));
    }
    function tM(e, t, r, i, s) {
      Wd(e, t), t.tag = y;
      var c;
      return Ha(r) ? (c = !0, ad(t)) : c = !1, mu(t, s), cT(t, r, i), uy(t, r, i, s), gy(null, t, r, !0, c, s);
    }
    function nM(e, t, r, i) {
      Wd(e, t);
      var s = t.pendingProps, c;
      {
        var p = lu(t, r, !1);
        c = cu(t, p);
      }
      mu(t, i);
      var v, b;
      pl(t);
      {
        if (r.prototype && typeof r.prototype.render == "function") {
          var C = Ct(r) || "Unknown";
          dy[C] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), dy[C] = !0);
        }
        t.mode & hn && Ta.recordLegacyContextWarning(t, null), wt(!0), pc.current = t, v = _u(null, t, r, s, c, i), b = Tu(), wt(!1);
      }
      if (Ks(), t.flags |= qs, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var x = Ct(r) || "Unknown";
        hc[x] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), hc[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var N = Ct(r) || "Unknown";
          hc[N] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), hc[N] = !0);
        }
        t.tag = y, t.memoizedState = null, t.updateQueue = null;
        var L = !1;
        return Ha(r) ? (L = !0, ad(t)) : L = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, ym(t), lT(t, v), uy(t, r, s, i), gy(null, t, r, !0, L, i);
      } else {
        if (t.tag = g, t.mode & hn) {
          Pn(!0);
          try {
            v = _u(null, t, r, s, c, i), b = Tu();
          } finally {
            Pn(!1);
          }
        }
        return Wn() && b && Qv(t), yr(null, t, v, i), by(t, r), t.child;
      }
    }
    function by(e, t) {
      {
        if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var r = "", i = ee();
          i && (r += `

Check the render method of \`` + i + "`.");
          var s = i || "", c = e._debugSource;
          c && (s = c.fileName + ":" + c.lineNumber), vy[s] || (vy[s] = !0, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", r));
        }
        if (t.defaultProps !== void 0) {
          var p = Ct(t) || "Unknown";
          vc[p] || (d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", p), vc[p] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = Ct(t) || "Unknown";
          hy[v] || (d("%s: Function components do not support getDerivedStateFromProps.", v), hy[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var b = Ct(t) || "Unknown";
          py[b] || (d("%s: Function components do not support contextType.", b), py[b] = !0);
        }
      }
    }
    var Sy = {
      dehydrated: null,
      treeContext: null,
      retryLane: Bn
    };
    function Ey(e) {
      return {
        baseLanes: e,
        cachePool: YN(),
        transitions: null
      };
    }
    function rM(e, t) {
      var r = null;
      return {
        baseLanes: st(e.baseLanes, t),
        cachePool: r,
        transitions: e.transitions
      };
    }
    function aM(e, t, r, i) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return _m(e, ac);
    }
    function iM(e, t) {
      return wf(e.childLanes, t);
    }
    function CT(e, t, r) {
      var i = t.pendingProps;
      hU(t) && (t.flags |= It);
      var s = Ca.current, c = !1, p = (t.flags & It) !== He;
      if (p || aM(s, e) ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s = TN(s, k_)), s = gu(s), fo(t, s), e === null) {
        nm(t);
        var v = t.memoizedState;
        if (v !== null) {
          var b = v.dehydrated;
          if (b !== null)
            return cM(t, b);
        }
        var C = i.children, x = i.fallback;
        if (c) {
          var N = oM(t, C, x, r), L = t.child;
          return L.memoizedState = Ey(r), t.memoizedState = Sy, N;
        } else
          return _y(t, C);
      } else {
        var F = e.memoizedState;
        if (F !== null) {
          var $ = F.dehydrated;
          if ($ !== null)
            return fM(e, t, p, i, $, F, r);
        }
        if (c) {
          var G = i.fallback, ye = i.children, Me = uM(e, t, ye, G, r), De = t.child, _t = e.child.memoizedState;
          return De.memoizedState = _t === null ? Ey(r) : rM(_t, r), De.childLanes = iM(e, r), t.memoizedState = Sy, Me;
        } else {
          var yt = i.children, U = sM(e, t, yt, r);
          return t.memoizedState = null, U;
        }
      }
    }
    function _y(e, t, r) {
      var i = e.mode, s = {
        mode: "visible",
        children: t
      }, c = Ty(s, i);
      return c.return = e, e.child = c, c;
    }
    function oM(e, t, r, i) {
      var s = e.mode, c = e.child, p = {
        mode: "hidden",
        children: t
      }, v, b;
      return (s & St) === je && c !== null ? (v = c, v.childLanes = te, v.pendingProps = p, e.mode & zt && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), b = So(r, s, i, null)) : (v = Ty(p, s), b = So(r, s, i, null)), v.return = e, b.return = e, v.sibling = b, e.child = v, b;
    }
    function Ty(e, t, r) {
      return RC(e, t, te, null);
    }
    function RT(e, t) {
      return hs(e, t);
    }
    function sM(e, t, r, i) {
      var s = e.child, c = s.sibling, p = RT(s, {
        mode: "visible",
        children: r
      });
      if ((t.mode & St) === je && (p.lanes = i), p.return = t, p.sibling = null, c !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [c], t.flags |= zo) : v.push(c);
      }
      return t.child = p, p;
    }
    function uM(e, t, r, i, s) {
      var c = t.mode, p = e.child, v = p.sibling, b = {
        mode: "hidden",
        children: r
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & St) === je && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== p
      ) {
        var x = t.child;
        C = x, C.childLanes = te, C.pendingProps = b, t.mode & zt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = p.selfBaseDuration, C.treeBaseDuration = p.treeBaseDuration), t.deletions = null;
      } else
        C = RT(p, b), C.subtreeFlags = p.subtreeFlags & pi;
      var N;
      return v !== null ? N = hs(v, i) : (N = So(i, c, s, null), N.flags |= Fn), N.return = t, C.return = t, C.sibling = N, t.child = C, N;
    }
    function Gd(e, t, r, i) {
      i !== null && rm(i), hu(t, e.child, null, r);
      var s = t.pendingProps, c = s.children, p = _y(t, c);
      return p.flags |= Fn, t.memoizedState = null, p;
    }
    function lM(e, t, r, i, s) {
      var c = t.mode, p = {
        mode: "visible",
        children: r
      }, v = Ty(p, c), b = So(i, c, s, null);
      return b.flags |= Fn, v.return = t, b.return = t, v.sibling = b, t.child = v, (t.mode & St) !== je && hu(t, e.child, null, s), b;
    }
    function cM(e, t, r) {
      return (e.mode & St) === je ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = qe) : Bv(t) ? e.lanes = Go : e.lanes = na, null;
    }
    function fM(e, t, r, i, s, c, p) {
      if (r)
        if (t.flags & Po) {
          t.flags &= -257;
          var U = ly(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Gd(e, t, p, U);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= It, null;
          var W = i.children, j = i.fallback, re = lM(e, t, W, j, p), _e = t.child;
          return _e.memoizedState = Ey(p), t.memoizedState = Sy, re;
        }
      else {
        if (J1(), (t.mode & St) === je)
          return Gd(
            e,
            t,
            p,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Bv(s)) {
          var v, b, C;
          {
            var x = v1(s);
            v = x.digest, b = x.message, C = x.stack;
          }
          var N;
          b ? N = new Error(b) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var L = ly(N, v, C);
          return Gd(e, t, p, L);
        }
        var F = Br(p, e.childLanes);
        if (wa || F) {
          var $ = ap();
          if ($ !== null) {
            var G = ED($, p);
            if (G !== Bn && G !== c.retryLane) {
              c.retryLane = G;
              var ye = an;
              Or(e, G), kn($, e, G, ye);
            }
          }
          Vy();
          var Me = ly(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Gd(e, t, p, Me);
        } else if (WE(s)) {
          t.flags |= It, t.child = e.child;
          var De = UI.bind(null, e);
          return m1(s, De), null;
        } else {
          tN(t, s, c.treeContext);
          var _t = i.children, yt = _y(t, _t);
          return yt.flags |= $o, yt;
        }
      }
    }
    function xT(e, t, r) {
      e.lanes = st(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = st(i.lanes, t)), pm(e.return, t, r);
    }
    function dM(e, t, r) {
      for (var i = t; i !== null; ) {
        if (i.tag === oe) {
          var s = i.memoizedState;
          s !== null && xT(i, r, e);
        } else if (i.tag === Ot)
          xT(i, r, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function pM(e) {
      for (var t = e, r = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Rd(i) === null && (r = t), t = t.sibling;
      }
      return r;
    }
    function hM(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !my[e])
        if (my[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function vM(e, t) {
      e !== void 0 && !Yd[e] && (e !== "collapsed" && e !== "hidden" ? (Yd[e] = !0, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Yd[e] = !0, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function wT(e, t) {
      {
        var r = mt(e), i = !r && typeof tn(e) == "function";
        if (r || i) {
          var s = r ? "array" : "iterable";
          return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function mM(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mt(e)) {
          for (var r = 0; r < e.length; r++)
            if (!wT(e[r], r))
              return;
        } else {
          var i = tn(e);
          if (typeof i == "function") {
            var s = i.call(e);
            if (s)
              for (var c = s.next(), p = 0; !c.done; c = s.next()) {
                if (!wT(c.value, p))
                  return;
                p++;
              }
          } else
            d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Cy(e, t, r, i, s) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: r,
        tailMode: s
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = r, c.tailMode = s);
    }
    function OT(e, t, r) {
      var i = t.pendingProps, s = i.revealOrder, c = i.tail, p = i.children;
      hM(s), vM(c, s), mM(p, s), yr(e, t, p, r);
      var v = Ca.current, b = _m(v, ac);
      if (b)
        v = Tm(v, ac), t.flags |= It;
      else {
        var C = e !== null && (e.flags & It) !== He;
        C && dM(t, t.child, r), v = gu(v);
      }
      if (fo(t, v), (t.mode & St) === je)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var x = pM(t.child), N;
            x === null ? (N = t.child, t.child = null) : (N = x.sibling, x.sibling = null), Cy(
              t,
              !1,
              // isBackwards
              N,
              x,
              c
            );
            break;
          }
          case "backwards": {
            var L = null, F = t.child;
            for (t.child = null; F !== null; ) {
              var $ = F.alternate;
              if ($ !== null && Rd($) === null) {
                t.child = F;
                break;
              }
              var G = F.sibling;
              F.sibling = L, L = F, F = G;
            }
            Cy(
              t,
              !0,
              // isBackwards
              L,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            Cy(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function yM(e, t, r) {
      bm(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = hu(t, null, i, r) : yr(e, t, i, r), t.child;
    }
    var AT = !1;
    function gM(e, t, r) {
      var i = t.type, s = i._context, c = t.pendingProps, p = t.memoizedProps, v = c.value;
      {
        "value" in c || AT || (AT = !0, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && Ea(b, c, "prop", "Context.Provider");
      }
      if (E_(t, s, v), p !== null) {
        var C = p.value;
        if (Vr(C, v)) {
          if (p.children === c.children && !nd())
            return Ti(e, t, r);
        } else
          hN(t, s, r);
      }
      var x = c.children;
      return yr(e, t, x, r), t.child;
    }
    var DT = !1;
    function bM(e, t, r) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (DT || (DT = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var s = t.pendingProps, c = s.children;
      typeof c != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), mu(t, r);
      var p = Tn(i);
      pl(t);
      var v;
      return pc.current = t, wt(!0), v = c(p), wt(!1), Ks(), t.flags |= qs, yr(e, t, v, r), t.child;
    }
    function mc() {
      wa = !0;
    }
    function Wd(e, t) {
      (t.mode & St) === je && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Fn);
    }
    function Ti(e, t, r) {
      return e !== null && (t.dependencies = e.dependencies), iT(), Oc(t.lanes), Br(r, t.childLanes) ? (dN(e, t), t.child) : null;
    }
    function SM(e, t, r) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, r.index = t.index, r.sibling = t.sibling, r.return = t.return, r.ref = t.ref, t === i.child)
          i.child = r;
        else {
          var s = i.child;
          if (s === null)
            throw new Error("Expected parent to have a child.");
          for (; s.sibling !== t; )
            if (s = s.sibling, s === null)
              throw new Error("Expected to find the previous sibling.");
          s.sibling = r;
        }
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= zo) : c.push(e), r.flags |= Fn, r;
      }
    }
    function Ry(e, t) {
      var r = e.lanes;
      return !!Br(r, t);
    }
    function EM(e, t, r) {
      switch (t.tag) {
        case R:
          _T(t), t.stateNode, pu();
          break;
        case w:
          A_(t);
          break;
        case y: {
          var i = t.type;
          Ha(i) && ad(t);
          break;
        }
        case T:
          bm(t, t.stateNode.containerInfo);
          break;
        case Q: {
          var s = t.memoizedProps.value, c = t.type._context;
          E_(t, c, s);
          break;
        }
        case ae:
          {
            var p = Br(r, t.childLanes);
            p && (t.flags |= Mt);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case oe: {
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return fo(t, gu(Ca.current)), t.flags |= It, null;
            var C = t.child, x = C.childLanes;
            if (Br(r, x))
              return CT(e, t, r);
            fo(t, gu(Ca.current));
            var N = Ti(e, t, r);
            return N !== null ? N.sibling : null;
          } else
            fo(t, gu(Ca.current));
          break;
        }
        case Ot: {
          var L = (e.flags & It) !== He, F = Br(r, t.childLanes);
          if (L) {
            if (F)
              return OT(e, t, r);
            t.flags |= It;
          }
          var $ = t.memoizedState;
          if ($ !== null && ($.rendering = null, $.tail = null, $.lastEffect = null), fo(t, Ca.current), F)
            break;
          return null;
        }
        case we:
        case Ze:
          return t.lanes = te, bT(e, t, r);
      }
      return Ti(e, t, r);
    }
    function kT(e, t, r) {
      if (t._debugNeedsRemount && e !== null)
        return SM(e, t, tg(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, s = t.pendingProps;
        if (i !== s || nd() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          wa = !0;
        else {
          var c = Ry(e, r);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & It) === He)
            return wa = !1, EM(e, t, r);
          (e.flags & Dh) !== He ? wa = !0 : wa = !1;
        }
      } else if (wa = !1, Wn() && Y1(t)) {
        var p = t.index, v = G1();
        i_(t, v, p);
      }
      switch (t.lanes = te, t.tag) {
        case _:
          return nM(e, t, t.type, r);
        case Ie: {
          var b = t.elementType;
          return eM(e, t, b, r);
        }
        case g: {
          var C = t.type, x = t.pendingProps, N = t.elementType === C ? x : xa(C, x);
          return yy(e, t, C, N, r);
        }
        case y: {
          var L = t.type, F = t.pendingProps, $ = t.elementType === L ? F : xa(L, F);
          return ET(e, t, L, $, r);
        }
        case R:
          return QN(e, t, r);
        case w:
          return JN(e, t, r);
        case D:
          return ZN(e, t);
        case oe:
          return CT(e, t, r);
        case T:
          return yM(e, t, r);
        case V: {
          var G = t.type, ye = t.pendingProps, Me = t.elementType === G ? ye : xa(G, ye);
          return mT(e, t, G, Me, r);
        }
        case P:
          return WN(e, t, r);
        case Y:
          return KN(e, t, r);
        case ae:
          return XN(e, t, r);
        case Q:
          return gM(e, t, r);
        case H:
          return bM(e, t, r);
        case de: {
          var De = t.type, _t = t.pendingProps, yt = xa(De, _t);
          if (t.type !== t.elementType) {
            var U = De.propTypes;
            U && Ea(
              U,
              yt,
              // Resolved for outer only
              "prop",
              Ct(De)
            );
          }
          return yt = xa(De.type, yt), yT(e, t, De, yt, r);
        }
        case Z:
          return gT(e, t, t.type, t.pendingProps, r);
        case ft: {
          var W = t.type, j = t.pendingProps, re = t.elementType === W ? j : xa(W, j);
          return tM(e, t, W, re, r);
        }
        case Ot:
          return OT(e, t, r);
        case rt:
          break;
        case we:
          return bT(e, t, r);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Cu(e) {
      e.flags |= Mt;
    }
    function LT(e) {
      e.flags |= Bo, e.flags |= kh;
    }
    var NT, xy, MT, IT;
    NT = function(e, t, r, i) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === w || s.tag === D)
          HL(e, s.stateNode);
        else if (s.tag !== T) {
          if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
        }
        if (s === t)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === t)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, xy = function(e, t) {
    }, MT = function(e, t, r, i, s) {
      var c = e.memoizedProps;
      if (c !== i) {
        var p = t.stateNode, v = Sm(), b = qL(p, r, c, i, s, v);
        t.updateQueue = b, b && Cu(t);
      }
    }, IT = function(e, t, r, i) {
      r !== i && Cu(t);
    };
    function yc(e, t) {
      if (!Wn())
        switch (e.tailMode) {
          case "hidden": {
            for (var r = e.tail, i = null; r !== null; )
              r.alternate !== null && (i = r), r = r.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var s = e.tail, c = null; s !== null; )
              s.alternate !== null && (c = s), s = s.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function Xn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, r = te, i = He;
      if (t) {
        if ((e.mode & zt) !== je) {
          for (var b = e.selfBaseDuration, C = e.child; C !== null; )
            r = st(r, st(C.lanes, C.childLanes)), i |= C.subtreeFlags & pi, i |= C.flags & pi, b += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = b;
        } else
          for (var x = e.child; x !== null; )
            r = st(r, st(x.lanes, x.childLanes)), i |= x.subtreeFlags & pi, i |= x.flags & pi, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & zt) !== je) {
          for (var s = e.actualDuration, c = e.selfBaseDuration, p = e.child; p !== null; )
            r = st(r, st(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, s += p.actualDuration, c += p.treeBaseDuration, p = p.sibling;
          e.actualDuration = s, e.treeBaseDuration = c;
        } else
          for (var v = e.child; v !== null; )
            r = st(r, st(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = r, t;
    }
    function _M(e, t, r) {
      if (oN() && (t.mode & St) !== je && (t.flags & It) === He)
        return d_(t), pu(), t.flags |= Po | Sf | ga, !1;
      var i = ld(t);
      if (r !== null && r.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (aN(t), Xn(t), (t.mode & zt) !== je) {
            var s = r !== null;
            if (s) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (pu(), (t.flags & It) === He && (t.memoizedState = null), t.flags |= Mt, Xn(t), (t.mode & zt) !== je) {
            var p = r !== null;
            if (p) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return p_(), !0;
    }
    function UT(e, t, r) {
      var i = t.pendingProps;
      switch (Jv(t), t.tag) {
        case _:
        case Ie:
        case Z:
        case g:
        case V:
        case P:
        case Y:
        case ae:
        case H:
        case de:
          return Xn(t), null;
        case y: {
          var s = t.type;
          return Ha(s) && rd(t), Xn(t), null;
        }
        case R: {
          var c = t.stateNode;
          if (yu(t), Wv(t), Rm(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var p = ld(t);
            if (p)
              Cu(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Po) !== He) && (t.flags |= Ys, p_());
            }
          }
          return xy(e, t), Xn(t), null;
        }
        case w: {
          Em(t);
          var b = O_(), C = t.type;
          if (e !== null && t.stateNode != null)
            MT(e, t, C, i, b), e.ref !== t.ref && LT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Xn(t), null;
            }
            var x = Sm(), N = ld(t);
            if (N)
              nN(t, b, x) && Cu(t);
            else {
              var L = $L(C, i, b, x, t);
              NT(L, t, !1, !1), t.stateNode = L, VL(L, C, i, b) && Cu(t);
            }
            t.ref !== null && LT(t);
          }
          return Xn(t), null;
        }
        case D: {
          var F = i;
          if (e && t.stateNode != null) {
            var $ = e.memoizedProps;
            IT(e, t, $, F);
          } else {
            if (typeof F != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var G = O_(), ye = Sm(), Me = ld(t);
            Me ? rN(t) && Cu(t) : t.stateNode = YL(F, G, ye, t);
          }
          return Xn(t), null;
        }
        case oe: {
          bu(t);
          var De = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = _M(e, t, De);
            if (!_t)
              return t.flags & ga ? t : null;
          }
          if ((t.flags & It) !== He)
            return t.lanes = r, (t.mode & zt) !== je && Xm(t), t;
          var yt = De !== null, U = e !== null && e.memoizedState !== null;
          if (yt !== U && yt) {
            var W = t.child;
            if (W.flags |= Ho, (t.mode & St) !== je) {
              var j = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              j || _m(Ca.current, k_) ? TI() : Vy();
            }
          }
          var re = t.updateQueue;
          if (re !== null && (t.flags |= Mt), Xn(t), (t.mode & zt) !== je && yt) {
            var _e = t.child;
            _e !== null && (t.treeBaseDuration -= _e.treeBaseDuration);
          }
          return null;
        }
        case T:
          return yu(t), xy(e, t), e === null && z1(t.stateNode.containerInfo), Xn(t), null;
        case Q:
          var ge = t.type._context;
          return dm(ge, t), Xn(t), null;
        case ft: {
          var Ve = t.type;
          return Ha(Ve) && rd(t), Xn(t), null;
        }
        case Ot: {
          bu(t);
          var Xe = t.memoizedState;
          if (Xe === null)
            return Xn(t), null;
          var Bt = (t.flags & It) !== He, At = Xe.rendering;
          if (At === null)
            if (Bt)
              yc(Xe, !1);
            else {
              var mn = RI() && (e === null || (e.flags & It) === He);
              if (!mn)
                for (var Dt = t.child; Dt !== null; ) {
                  var vn = Rd(Dt);
                  if (vn !== null) {
                    Bt = !0, t.flags |= It, yc(Xe, !1);
                    var lr = vn.updateQueue;
                    return lr !== null && (t.updateQueue = lr, t.flags |= Mt), t.subtreeFlags = He, pN(t, r), fo(t, Tm(Ca.current, ac)), t.child;
                  }
                  Dt = Dt.sibling;
                }
              Xe.tail !== null && zn() > rC() && (t.flags |= It, Bt = !0, yc(Xe, !1), t.lanes = IS);
            }
          else {
            if (!Bt) {
              var tr = Rd(At);
              if (tr !== null) {
                t.flags |= It, Bt = !0;
                var Gr = tr.updateQueue;
                if (Gr !== null && (t.updateQueue = Gr, t.flags |= Mt), yc(Xe, !0), Xe.tail === null && Xe.tailMode === "hidden" && !At.alternate && !Wn())
                  return Xn(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              zn() * 2 - Xe.renderingStartTime > rC() && r !== na && (t.flags |= It, Bt = !0, yc(Xe, !1), t.lanes = IS);
            }
            if (Xe.isBackwards)
              At.sibling = t.child, t.child = At;
            else {
              var Sr = Xe.last;
              Sr !== null ? Sr.sibling = At : t.child = At, Xe.last = At;
            }
          }
          if (Xe.tail !== null) {
            var Er = Xe.tail;
            Xe.rendering = Er, Xe.tail = Er.sibling, Xe.renderingStartTime = zn(), Er.sibling = null;
            var cr = Ca.current;
            return Bt ? cr = Tm(cr, ac) : cr = gu(cr), fo(t, cr), Er;
          }
          return Xn(t), null;
        }
        case rt:
          break;
        case we:
        case Ze: {
          Hy(t);
          var Oi = t.memoizedState, Lu = Oi !== null;
          if (e !== null) {
            var Nc = e.memoizedState, Qa = Nc !== null;
            Qa !== Lu && (t.flags |= Ho);
          }
          return !Lu || (t.mode & St) === je ? Xn(t) : Br(Xa, na) && (Xn(t), t.subtreeFlags & (Fn | Mt) && (t.flags |= Ho)), null;
        }
        case ht:
          return null;
        case Ge:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function TM(e, t, r) {
      switch (Jv(t), t.tag) {
        case y: {
          var i = t.type;
          Ha(i) && rd(t);
          var s = t.flags;
          return s & ga ? (t.flags = s & -65537 | It, (t.mode & zt) !== je && Xm(t), t) : null;
        }
        case R: {
          t.stateNode, yu(t), Wv(t), Rm();
          var c = t.flags;
          return (c & ga) !== He && (c & It) === He ? (t.flags = c & -65537 | It, t) : null;
        }
        case w:
          return Em(t), null;
        case oe: {
          bu(t);
          var p = t.memoizedState;
          if (p !== null && p.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            pu();
          }
          var v = t.flags;
          return v & ga ? (t.flags = v & -65537 | It, (t.mode & zt) !== je && Xm(t), t) : null;
        }
        case Ot:
          return bu(t), null;
        case T:
          return yu(t), null;
        case Q:
          var b = t.type._context;
          return dm(b, t), null;
        case we:
        case Ze:
          return Hy(t), null;
        case ht:
          return null;
        default:
          return null;
      }
    }
    function jT(e, t, r) {
      switch (Jv(t), t.tag) {
        case y: {
          var i = t.type.childContextTypes;
          i != null && rd(t);
          break;
        }
        case R: {
          t.stateNode, yu(t), Wv(t), Rm();
          break;
        }
        case w: {
          Em(t);
          break;
        }
        case T:
          yu(t);
          break;
        case oe:
          bu(t);
          break;
        case Ot:
          bu(t);
          break;
        case Q:
          var s = t.type._context;
          dm(s, t);
          break;
        case we:
        case Ze:
          Hy(t);
          break;
      }
    }
    var FT = null;
    FT = /* @__PURE__ */ new Set();
    var Kd = !1, Qn = !1, CM = typeof WeakSet == "function" ? WeakSet : Set, Ce = null, Ru = null, xu = null;
    function RM(e) {
      wh(null, function() {
        throw e;
      }), Oh();
    }
    var xM = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & zt)
        try {
          Wa(), t.componentWillUnmount();
        } finally {
          Ga(e);
        }
      else
        t.componentWillUnmount();
    };
    function zT(e, t) {
      try {
        vo(Rn, e);
      } catch (r) {
        Xt(e, t, r);
      }
    }
    function wy(e, t, r) {
      try {
        xM(e, r);
      } catch (i) {
        Xt(e, t, i);
      }
    }
    function wM(e, t, r) {
      try {
        r.componentDidMount();
      } catch (i) {
        Xt(e, t, i);
      }
    }
    function PT(e, t) {
      try {
        $T(e);
      } catch (r) {
        Xt(e, t, r);
      }
    }
    function wu(e, t) {
      var r = e.ref;
      if (r !== null)
        if (typeof r == "function") {
          var i;
          try {
            if (Se && Ue && e.mode & zt)
              try {
                Wa(), i = r(null);
              } finally {
                Ga(e);
              }
            else
              i = r(null);
          } catch (s) {
            Xt(e, t, s);
          }
          typeof i == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", E(e));
        } else
          r.current = null;
    }
    function Xd(e, t, r) {
      try {
        r();
      } catch (i) {
        Xt(e, t, i);
      }
    }
    var BT = !1;
    function OM(e, t) {
      PL(e.containerInfo), Ce = t, AM();
      var r = BT;
      return BT = !1, r;
    }
    function AM() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        (e.subtreeFlags & Mh) !== He && t !== null ? (t.return = e, Ce = t) : DM();
      }
    }
    function DM() {
      for (; Ce !== null; ) {
        var e = Ce;
        ce(e);
        try {
          kM(e);
        } catch (r) {
          Xt(e, e.return, r);
        }
        fe();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function kM(e) {
      var t = e.alternate, r = e.flags;
      if ((r & Ys) !== He) {
        switch (ce(e), e.tag) {
          case g:
          case V:
          case Z:
            break;
          case y: {
            if (t !== null) {
              var i = t.memoizedProps, s = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !ls && (c.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", E(e) || "instance"), c.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", E(e) || "instance"));
              var p = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : xa(e.type, i), s);
              {
                var v = FT;
                p === void 0 && !v.has(e.type) && (v.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", E(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          }
          case R: {
            {
              var b = e.stateNode;
              f1(b.containerInfo);
            }
            break;
          }
          case w:
          case D:
          case T:
          case ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        fe();
      }
    }
    function Oa(e, t, r) {
      var i = t.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var c = s.next, p = c;
        do {
          if ((p.tag & e) === e) {
            var v = p.destroy;
            p.destroy = void 0, v !== void 0 && ((e & Kn) !== Ar ? YA(t) : (e & Rn) !== Ar && DS(t), (e & Va) !== Ar && Dc(!0), Xd(t, r, v), (e & Va) !== Ar && Dc(!1), (e & Kn) !== Ar ? GA() : (e & Rn) !== Ar && kS());
          }
          p = p.next;
        } while (p !== c);
      }
    }
    function vo(e, t) {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var s = i.next, c = s;
        do {
          if ((c.tag & e) === e) {
            (e & Kn) !== Ar ? VA(t) : (e & Rn) !== Ar && WA(t);
            var p = c.create;
            (e & Va) !== Ar && Dc(!0), c.destroy = p(), (e & Va) !== Ar && Dc(!1), (e & Kn) !== Ar ? qA() : (e & Rn) !== Ar && KA();
            {
              var v = c.destroy;
              if (v !== void 0 && typeof v != "function") {
                var b = void 0;
                (c.tag & Rn) !== He ? b = "useLayoutEffect" : (c.tag & Va) !== He ? b = "useInsertionEffect" : b = "useEffect";
                var C = void 0;
                v === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? C = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + v, d("%s must not return anything besides a function, which is used for clean-up.%s", b, C);
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    }
    function LM(e, t) {
      if ((t.flags & Mt) !== He)
        switch (t.tag) {
          case ae: {
            var r = t.stateNode.passiveEffectDuration, i = t.memoizedProps, s = i.id, c = i.onPostCommit, p = rT(), v = t.alternate === null ? "mount" : "update";
            nT() && (v = "nested-update"), typeof c == "function" && c(s, v, r, p);
            var b = t.return;
            e: for (; b !== null; ) {
              switch (b.tag) {
                case R:
                  var C = b.stateNode;
                  C.passiveEffectDuration += r;
                  break e;
                case ae:
                  var x = b.stateNode;
                  x.passiveEffectDuration += r;
                  break e;
              }
              b = b.return;
            }
            break;
          }
        }
    }
    function NM(e, t, r, i) {
      if ((r.flags & dl) !== He)
        switch (r.tag) {
          case g:
          case V:
          case Z: {
            if (!Qn)
              if (r.mode & zt)
                try {
                  Wa(), vo(Rn | Cn, r);
                } finally {
                  Ga(r);
                }
              else
                vo(Rn | Cn, r);
            break;
          }
          case y: {
            var s = r.stateNode;
            if (r.flags & Mt && !Qn)
              if (t === null)
                if (r.type === r.elementType && !ls && (s.props !== r.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", E(r) || "instance"), s.state !== r.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", E(r) || "instance")), r.mode & zt)
                  try {
                    Wa(), s.componentDidMount();
                  } finally {
                    Ga(r);
                  }
                else
                  s.componentDidMount();
              else {
                var c = r.elementType === r.type ? t.memoizedProps : xa(r.type, t.memoizedProps), p = t.memoizedState;
                if (r.type === r.elementType && !ls && (s.props !== r.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", E(r) || "instance"), s.state !== r.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", E(r) || "instance")), r.mode & zt)
                  try {
                    Wa(), s.componentDidUpdate(c, p, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ga(r);
                  }
                else
                  s.componentDidUpdate(c, p, s.__reactInternalSnapshotBeforeUpdate);
              }
            var v = r.updateQueue;
            v !== null && (r.type === r.elementType && !ls && (s.props !== r.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", E(r) || "instance"), s.state !== r.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", E(r) || "instance")), w_(r, v, s));
            break;
          }
          case R: {
            var b = r.updateQueue;
            if (b !== null) {
              var C = null;
              if (r.child !== null)
                switch (r.child.tag) {
                  case w:
                    C = r.child.stateNode;
                    break;
                  case y:
                    C = r.child.stateNode;
                    break;
                }
              w_(r, b, C);
            }
            break;
          }
          case w: {
            var x = r.stateNode;
            if (t === null && r.flags & Mt) {
              var N = r.type, L = r.memoizedProps;
              QL(x, N, L);
            }
            break;
          }
          case D:
            break;
          case T:
            break;
          case ae: {
            {
              var F = r.memoizedProps, $ = F.onCommit, G = F.onRender, ye = r.stateNode.effectDuration, Me = rT(), De = t === null ? "mount" : "update";
              nT() && (De = "nested-update"), typeof G == "function" && G(r.memoizedProps.id, De, r.actualDuration, r.treeBaseDuration, r.actualStartTime, Me);
              {
                typeof $ == "function" && $(r.memoizedProps.id, De, ye, Me), DI(r);
                var _t = r.return;
                e: for (; _t !== null; ) {
                  switch (_t.tag) {
                    case R:
                      var yt = _t.stateNode;
                      yt.effectDuration += ye;
                      break e;
                    case ae:
                      var U = _t.stateNode;
                      U.effectDuration += ye;
                      break e;
                  }
                  _t = _t.return;
                }
              }
            }
            break;
          }
          case oe: {
            BM(e, r);
            break;
          }
          case Ot:
          case ft:
          case rt:
          case we:
          case Ze:
          case Ge:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Qn || r.flags & Bo && $T(r);
    }
    function MM(e) {
      switch (e.tag) {
        case g:
        case V:
        case Z: {
          if (e.mode & zt)
            try {
              Wa(), zT(e, e.return);
            } finally {
              Ga(e);
            }
          else
            zT(e, e.return);
          break;
        }
        case y: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && wM(e, e.return, t), PT(e, e.return);
          break;
        }
        case w: {
          PT(e, e.return);
          break;
        }
      }
    }
    function IM(e, t) {
      for (var r = null, i = e; ; ) {
        if (i.tag === w) {
          if (r === null) {
            r = i;
            try {
              var s = i.stateNode;
              t ? s1(s) : l1(i.stateNode, i.memoizedProps);
            } catch (p) {
              Xt(e, e.return, p);
            }
          }
        } else if (i.tag === D) {
          if (r === null)
            try {
              var c = i.stateNode;
              t ? u1(c) : c1(c, i.memoizedProps);
            } catch (p) {
              Xt(e, e.return, p);
            }
        } else if (!((i.tag === we || i.tag === Ze) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          r === i && (r = null), i = i.return;
        }
        r === i && (r = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function $T(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode, i;
        switch (e.tag) {
          case w:
            i = r;
            break;
          default:
            i = r;
        }
        if (typeof t == "function") {
          var s;
          if (e.mode & zt)
            try {
              Wa(), s = t(i);
            } finally {
              Ga(e);
            }
          else
            s = t(i);
          typeof s == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", E(e));
        } else
          t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", E(e)), t.current = i;
      }
    }
    function UM(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function HT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, HT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === w) {
          var r = e.stateNode;
          r !== null && $1(r);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function jM(e) {
      for (var t = e.return; t !== null; ) {
        if (VT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function VT(e) {
      return e.tag === w || e.tag === R || e.tag === T;
    }
    function qT(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || VT(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== w && t.tag !== D && t.tag !== Lt; ) {
          if (t.flags & Fn || t.child === null || t.tag === T)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Fn))
          return t.stateNode;
      }
    }
    function FM(e) {
      var t = jM(e);
      switch (t.tag) {
        case w: {
          var r = t.stateNode;
          t.flags & bf && (GE(r), t.flags &= -33);
          var i = qT(e);
          Ay(e, i, r);
          break;
        }
        case R:
        case T: {
          var s = t.stateNode.containerInfo, c = qT(e);
          Oy(e, c, s);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Oy(e, t, r) {
      var i = e.tag, s = i === w || i === D;
      if (s) {
        var c = e.stateNode;
        t ? r1(r, c, t) : t1(r, c);
      } else if (i !== T) {
        var p = e.child;
        if (p !== null) {
          Oy(p, t, r);
          for (var v = p.sibling; v !== null; )
            Oy(v, t, r), v = v.sibling;
        }
      }
    }
    function Ay(e, t, r) {
      var i = e.tag, s = i === w || i === D;
      if (s) {
        var c = e.stateNode;
        t ? n1(r, c, t) : e1(r, c);
      } else if (i !== T) {
        var p = e.child;
        if (p !== null) {
          Ay(p, t, r);
          for (var v = p.sibling; v !== null; )
            Ay(v, t, r), v = v.sibling;
        }
      }
    }
    var Jn = null, Aa = !1;
    function zM(e, t, r) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case w: {
              Jn = i.stateNode, Aa = !1;
              break e;
            }
            case R: {
              Jn = i.stateNode.containerInfo, Aa = !0;
              break e;
            }
            case T: {
              Jn = i.stateNode.containerInfo, Aa = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Jn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        YT(e, t, r), Jn = null, Aa = !1;
      }
      UM(r);
    }
    function mo(e, t, r) {
      for (var i = r.child; i !== null; )
        YT(e, t, i), i = i.sibling;
    }
    function YT(e, t, r) {
      switch (PA(r), r.tag) {
        case w:
          Qn || wu(r, t);
        // eslint-disable-next-line-no-fallthrough
        case D: {
          {
            var i = Jn, s = Aa;
            Jn = null, mo(e, t, r), Jn = i, Aa = s, Jn !== null && (Aa ? i1(Jn, r.stateNode) : a1(Jn, r.stateNode));
          }
          return;
        }
        case Lt: {
          Jn !== null && (Aa ? o1(Jn, r.stateNode) : Pv(Jn, r.stateNode));
          return;
        }
        case T: {
          {
            var c = Jn, p = Aa;
            Jn = r.stateNode.containerInfo, Aa = !0, mo(e, t, r), Jn = c, Aa = p;
          }
          return;
        }
        case g:
        case V:
        case de:
        case Z: {
          if (!Qn) {
            var v = r.updateQueue;
            if (v !== null) {
              var b = v.lastEffect;
              if (b !== null) {
                var C = b.next, x = C;
                do {
                  var N = x, L = N.destroy, F = N.tag;
                  L !== void 0 && ((F & Va) !== Ar ? Xd(r, t, L) : (F & Rn) !== Ar && (DS(r), r.mode & zt ? (Wa(), Xd(r, t, L), Ga(r)) : Xd(r, t, L), kS())), x = x.next;
                } while (x !== C);
              }
            }
          }
          mo(e, t, r);
          return;
        }
        case y: {
          if (!Qn) {
            wu(r, t);
            var $ = r.stateNode;
            typeof $.componentWillUnmount == "function" && wy(r, t, $);
          }
          mo(e, t, r);
          return;
        }
        case rt: {
          mo(e, t, r);
          return;
        }
        case we: {
          if (
            // TODO: Remove this dead flag
            r.mode & St
          ) {
            var G = Qn;
            Qn = G || r.memoizedState !== null, mo(e, t, r), Qn = G;
          } else
            mo(e, t, r);
          break;
        }
        default: {
          mo(e, t, r);
          return;
        }
      }
    }
    function PM(e) {
      e.memoizedState;
    }
    function BM(e, t) {
      var r = t.memoizedState;
      if (r === null) {
        var i = t.alternate;
        if (i !== null) {
          var s = i.memoizedState;
          if (s !== null) {
            var c = s.dehydrated;
            c !== null && R1(c);
          }
        }
      }
    }
    function GT(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new CM()), t.forEach(function(i) {
          var s = jI.bind(null, e, i);
          if (!r.has(i)) {
            if (r.add(i), ba)
              if (Ru !== null && xu !== null)
                Ac(xu, Ru);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(s, s);
          }
        });
      }
    }
    function $M(e, t, r) {
      Ru = r, xu = e, ce(t), WT(t, e), ce(t), Ru = null, xu = null;
    }
    function Da(e, t, r) {
      var i = t.deletions;
      if (i !== null)
        for (var s = 0; s < i.length; s++) {
          var c = i[s];
          try {
            zM(e, t, c);
          } catch (b) {
            Xt(c, t, b);
          }
        }
      var p = ct();
      if (t.subtreeFlags & Ih)
        for (var v = t.child; v !== null; )
          ce(v), WT(v, e), v = v.sibling;
      ce(p);
    }
    function WT(e, t, r) {
      var i = e.alternate, s = e.flags;
      switch (e.tag) {
        case g:
        case V:
        case de:
        case Z: {
          if (Da(t, e), Ka(e), s & Mt) {
            try {
              Oa(Va | Cn, e, e.return), vo(Va | Cn, e);
            } catch (Ve) {
              Xt(e, e.return, Ve);
            }
            if (e.mode & zt) {
              try {
                Wa(), Oa(Rn | Cn, e, e.return);
              } catch (Ve) {
                Xt(e, e.return, Ve);
              }
              Ga(e);
            } else
              try {
                Oa(Rn | Cn, e, e.return);
              } catch (Ve) {
                Xt(e, e.return, Ve);
              }
          }
          return;
        }
        case y: {
          Da(t, e), Ka(e), s & Bo && i !== null && wu(i, i.return);
          return;
        }
        case w: {
          Da(t, e), Ka(e), s & Bo && i !== null && wu(i, i.return);
          {
            if (e.flags & bf) {
              var c = e.stateNode;
              try {
                GE(c);
              } catch (Ve) {
                Xt(e, e.return, Ve);
              }
            }
            if (s & Mt) {
              var p = e.stateNode;
              if (p != null) {
                var v = e.memoizedProps, b = i !== null ? i.memoizedProps : v, C = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    JL(p, x, C, b, v, e);
                  } catch (Ve) {
                    Xt(e, e.return, Ve);
                  }
              }
            }
          }
          return;
        }
        case D: {
          if (Da(t, e), Ka(e), s & Mt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, L = e.memoizedProps, F = i !== null ? i.memoizedProps : L;
            try {
              ZL(N, F, L);
            } catch (Ve) {
              Xt(e, e.return, Ve);
            }
          }
          return;
        }
        case R: {
          if (Da(t, e), Ka(e), s & Mt && i !== null) {
            var $ = i.memoizedState;
            if ($.isDehydrated)
              try {
                C1(t.containerInfo);
              } catch (Ve) {
                Xt(e, e.return, Ve);
              }
          }
          return;
        }
        case T: {
          Da(t, e), Ka(e);
          return;
        }
        case oe: {
          Da(t, e), Ka(e);
          var G = e.child;
          if (G.flags & Ho) {
            var ye = G.stateNode, Me = G.memoizedState, De = Me !== null;
            if (ye.isHidden = De, De) {
              var _t = G.alternate !== null && G.alternate.memoizedState !== null;
              _t || _I();
            }
          }
          if (s & Mt) {
            try {
              PM(e);
            } catch (Ve) {
              Xt(e, e.return, Ve);
            }
            GT(e);
          }
          return;
        }
        case we: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & St
          ) {
            var U = Qn;
            Qn = U || yt, Da(t, e), Qn = U;
          } else
            Da(t, e);
          if (Ka(e), s & Ho) {
            var W = e.stateNode, j = e.memoizedState, re = j !== null, _e = e;
            if (W.isHidden = re, re && !yt && (_e.mode & St) !== je) {
              Ce = _e;
              for (var ge = _e.child; ge !== null; )
                Ce = ge, VM(ge), ge = ge.sibling;
            }
            IM(_e, re);
          }
          return;
        }
        case Ot: {
          Da(t, e), Ka(e), s & Mt && GT(e);
          return;
        }
        case rt:
          return;
        default: {
          Da(t, e), Ka(e);
          return;
        }
      }
    }
    function Ka(e) {
      var t = e.flags;
      if (t & Fn) {
        try {
          FM(e);
        } catch (r) {
          Xt(e, e.return, r);
        }
        e.flags &= -3;
      }
      t & $o && (e.flags &= -4097);
    }
    function HM(e, t, r) {
      Ru = r, xu = t, Ce = e, KT(e, t, r), Ru = null, xu = null;
    }
    function KT(e, t, r) {
      for (var i = (e.mode & St) !== je; Ce !== null; ) {
        var s = Ce, c = s.child;
        if (s.tag === we && i) {
          var p = s.memoizedState !== null, v = p || Kd;
          if (v) {
            Dy(e, t, r);
            continue;
          } else {
            var b = s.alternate, C = b !== null && b.memoizedState !== null, x = C || Qn, N = Kd, L = Qn;
            Kd = v, Qn = x, Qn && !L && (Ce = s, qM(s));
            for (var F = c; F !== null; )
              Ce = F, KT(
                F,
                // New root; bubble back up to here and stop.
                t,
                r
              ), F = F.sibling;
            Ce = s, Kd = N, Qn = L, Dy(e, t, r);
            continue;
          }
        }
        (s.subtreeFlags & dl) !== He && c !== null ? (c.return = s, Ce = c) : Dy(e, t, r);
      }
    }
    function Dy(e, t, r) {
      for (; Ce !== null; ) {
        var i = Ce;
        if ((i.flags & dl) !== He) {
          var s = i.alternate;
          ce(i);
          try {
            NM(t, s, i, r);
          } catch (p) {
            Xt(i, i.return, p);
          }
          fe();
        }
        if (i === e) {
          Ce = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, Ce = c;
          return;
        }
        Ce = i.return;
      }
    }
    function VM(e) {
      for (; Ce !== null; ) {
        var t = Ce, r = t.child;
        switch (t.tag) {
          case g:
          case V:
          case de:
          case Z: {
            if (t.mode & zt)
              try {
                Wa(), Oa(Rn, t, t.return);
              } finally {
                Ga(t);
              }
            else
              Oa(Rn, t, t.return);
            break;
          }
          case y: {
            wu(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && wy(t, t.return, i);
            break;
          }
          case w: {
            wu(t, t.return);
            break;
          }
          case we: {
            var s = t.memoizedState !== null;
            if (s) {
              XT(e);
              continue;
            }
            break;
          }
        }
        r !== null ? (r.return = t, Ce = r) : XT(e);
      }
    }
    function XT(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        if (t === e) {
          Ce = null;
          return;
        }
        var r = t.sibling;
        if (r !== null) {
          r.return = t.return, Ce = r;
          return;
        }
        Ce = t.return;
      }
    }
    function qM(e) {
      for (; Ce !== null; ) {
        var t = Ce, r = t.child;
        if (t.tag === we) {
          var i = t.memoizedState !== null;
          if (i) {
            QT(e);
            continue;
          }
        }
        r !== null ? (r.return = t, Ce = r) : QT(e);
      }
    }
    function QT(e) {
      for (; Ce !== null; ) {
        var t = Ce;
        ce(t);
        try {
          MM(t);
        } catch (i) {
          Xt(t, t.return, i);
        }
        if (fe(), t === e) {
          Ce = null;
          return;
        }
        var r = t.sibling;
        if (r !== null) {
          r.return = t.return, Ce = r;
          return;
        }
        Ce = t.return;
      }
    }
    function YM(e, t, r, i) {
      Ce = t, GM(t, e, r, i);
    }
    function GM(e, t, r, i) {
      for (; Ce !== null; ) {
        var s = Ce, c = s.child;
        (s.subtreeFlags & Gs) !== He && c !== null ? (c.return = s, Ce = c) : WM(e, t, r, i);
      }
    }
    function WM(e, t, r, i) {
      for (; Ce !== null; ) {
        var s = Ce;
        if ((s.flags & Xi) !== He) {
          ce(s);
          try {
            KM(t, s, r, i);
          } catch (p) {
            Xt(s, s.return, p);
          }
          fe();
        }
        if (s === e) {
          Ce = null;
          return;
        }
        var c = s.sibling;
        if (c !== null) {
          c.return = s.return, Ce = c;
          return;
        }
        Ce = s.return;
      }
    }
    function KM(e, t, r, i) {
      switch (t.tag) {
        case g:
        case V:
        case Z: {
          if (t.mode & zt) {
            Km();
            try {
              vo(Kn | Cn, t);
            } finally {
              Wm(t);
            }
          } else
            vo(Kn | Cn, t);
          break;
        }
      }
    }
    function XM(e) {
      Ce = e, QM();
    }
    function QM() {
      for (; Ce !== null; ) {
        var e = Ce, t = e.child;
        if ((Ce.flags & zo) !== He) {
          var r = e.deletions;
          if (r !== null) {
            for (var i = 0; i < r.length; i++) {
              var s = r[i];
              Ce = s, eI(s, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var p = c.child;
                if (p !== null) {
                  c.child = null;
                  do {
                    var v = p.sibling;
                    p.sibling = null, p = v;
                  } while (p !== null);
                }
              }
            }
            Ce = e;
          }
        }
        (e.subtreeFlags & Gs) !== He && t !== null ? (t.return = e, Ce = t) : JM();
      }
    }
    function JM() {
      for (; Ce !== null; ) {
        var e = Ce;
        (e.flags & Xi) !== He && (ce(e), ZM(e), fe());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ce = t;
          return;
        }
        Ce = e.return;
      }
    }
    function ZM(e) {
      switch (e.tag) {
        case g:
        case V:
        case Z: {
          e.mode & zt ? (Km(), Oa(Kn | Cn, e, e.return), Wm(e)) : Oa(Kn | Cn, e, e.return);
          break;
        }
      }
    }
    function eI(e, t) {
      for (; Ce !== null; ) {
        var r = Ce;
        ce(r), nI(r, t), fe();
        var i = r.child;
        i !== null ? (i.return = r, Ce = i) : tI(e);
      }
    }
    function tI(e) {
      for (; Ce !== null; ) {
        var t = Ce, r = t.sibling, i = t.return;
        if (HT(t), t === e) {
          Ce = null;
          return;
        }
        if (r !== null) {
          r.return = i, Ce = r;
          return;
        }
        Ce = i;
      }
    }
    function nI(e, t) {
      switch (e.tag) {
        case g:
        case V:
        case Z: {
          e.mode & zt ? (Km(), Oa(Kn, e, t), Wm(e)) : Oa(Kn, e, t);
          break;
        }
      }
    }
    function rI(e) {
      switch (e.tag) {
        case g:
        case V:
        case Z: {
          try {
            vo(Rn | Cn, e);
          } catch (r) {
            Xt(e, e.return, r);
          }
          break;
        }
        case y: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (r) {
            Xt(e, e.return, r);
          }
          break;
        }
      }
    }
    function aI(e) {
      switch (e.tag) {
        case g:
        case V:
        case Z: {
          try {
            vo(Kn | Cn, e);
          } catch (t) {
            Xt(e, e.return, t);
          }
          break;
        }
      }
    }
    function iI(e) {
      switch (e.tag) {
        case g:
        case V:
        case Z: {
          try {
            Oa(Rn | Cn, e, e.return);
          } catch (r) {
            Xt(e, e.return, r);
          }
          break;
        }
        case y: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && wy(e, e.return, t);
          break;
        }
      }
    }
    function oI(e) {
      switch (e.tag) {
        case g:
        case V:
        case Z:
          try {
            Oa(Kn | Cn, e, e.return);
          } catch (t) {
            Xt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var gc = Symbol.for;
      gc("selector.component"), gc("selector.has_pseudo_class"), gc("selector.role"), gc("selector.test_id"), gc("selector.text");
    }
    var sI = [];
    function uI() {
      sI.forEach(function(e) {
        return e();
      });
    }
    var lI = o.ReactCurrentActQueue;
    function cI(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), r = typeof jest < "u";
        return r && t !== !1;
      }
    }
    function JT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && lI.current !== null && d("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var fI = Math.ceil, ky = o.ReactCurrentDispatcher, Ly = o.ReactCurrentOwner, Zn = o.ReactCurrentBatchConfig, ka = o.ReactCurrentActQueue, On = (
      /*             */
      0
    ), ZT = (
      /*               */
      1
    ), er = (
      /*                */
      2
    ), ua = (
      /*                */
      4
    ), Ci = 0, bc = 1, cs = 2, Qd = 3, Sc = 4, eC = 5, Ny = 6, Et = On, gr = null, fn = null, An = te, Xa = te, My = io(te), Dn = Ci, Ec = null, Jd = te, _c = te, Zd = te, Tc = null, Dr = null, Iy = 0, tC = 500, nC = 1 / 0, dI = 500, Ri = null;
    function Cc() {
      nC = zn() + dI;
    }
    function rC() {
      return nC;
    }
    var ep = !1, Uy = null, Ou = null, fs = !1, yo = null, Rc = te, jy = [], Fy = null, pI = 50, xc = 0, zy = null, Py = !1, tp = !1, hI = 50, Au = 0, np = null, wc = an, rp = te, aC = !1;
    function ap() {
      return gr;
    }
    function br() {
      return (Et & (er | ua)) !== On ? zn() : (wc !== an || (wc = zn()), wc);
    }
    function go(e) {
      var t = e.mode;
      if ((t & St) === je)
        return qe;
      if ((Et & er) !== On && An !== te)
        return bl(An);
      var r = lN() !== uN;
      if (r) {
        if (Zn.transition !== null) {
          var i = Zn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return rp === Bn && (rp = zS()), rp;
      }
      var s = Sa();
      if (s !== Bn)
        return s;
      var c = GL();
      return c;
    }
    function vI(e) {
      var t = e.mode;
      return (t & St) === je ? qe : yD();
    }
    function kn(e, t, r, i) {
      zI(), aC && d("useInsertionEffect must not schedule updates."), Py && (tp = !0), Sl(e, r, i), (Et & er) !== te && e === gr ? $I(t) : (ba && $S(e, t, r), HI(t), e === gr && ((Et & er) === On && (_c = st(_c, r)), Dn === Sc && bo(e, An)), kr(e, i), r === qe && Et === On && (t.mode & St) === je && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ka.isBatchingLegacy && (Cc(), a_()));
    }
    function mI(e, t, r) {
      var i = e.current;
      i.lanes = t, Sl(e, t, r), kr(e, r);
    }
    function yI(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Et & er) !== On
      );
    }
    function kr(e, t) {
      var r = e.callbackNode;
      fD(e, t);
      var i = Rf(e, e === gr ? An : te);
      if (i === te) {
        r !== null && SC(r), e.callbackNode = null, e.callbackPriority = Bn;
        return;
      }
      var s = Ko(i), c = e.callbackPriority;
      if (c === s && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ka.current !== null && r !== Gy)) {
        r == null && c !== qe && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      r != null && SC(r);
      var p;
      if (s === qe)
        e.tag === oo ? (ka.isBatchingLegacy !== null && (ka.didScheduleLegacyUpdate = !0), q1(sC.bind(null, e))) : r_(sC.bind(null, e)), ka.current !== null ? ka.current.push(so) : KL(function() {
          (Et & (er | ua)) === On && so();
        }), p = null;
      else {
        var v;
        switch (qS(i)) {
          case $r:
            v = Ef;
            break;
          case vi:
            v = Uh;
            break;
          case mi:
            v = Yo;
            break;
          case Of:
            v = jh;
            break;
          default:
            v = Yo;
            break;
        }
        p = Wy(v, iC.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = p;
    }
    function iC(e, t) {
      if (IN(), wc = an, rp = te, (Et & (er | ua)) !== On)
        throw new Error("Should not already be working.");
      var r = e.callbackNode, i = wi();
      if (i && e.callbackNode !== r)
        return null;
      var s = Rf(e, e === gr ? An : te);
      if (s === te)
        return null;
      var c = !xf(e, s) && !mD(e, s) && !t, p = c ? wI(e, s) : op(e, s);
      if (p !== Ci) {
        if (p === cs) {
          var v = iv(e);
          v !== te && (s = v, p = By(e, v));
        }
        if (p === bc) {
          var b = Ec;
          throw ds(e, te), bo(e, s), kr(e, zn()), b;
        }
        if (p === Ny)
          bo(e, s);
        else {
          var C = !xf(e, s), x = e.current.alternate;
          if (C && !bI(x)) {
            if (p = op(e, s), p === cs) {
              var N = iv(e);
              N !== te && (s = N, p = By(e, N));
            }
            if (p === bc) {
              var L = Ec;
              throw ds(e, te), bo(e, s), kr(e, zn()), L;
            }
          }
          e.finishedWork = x, e.finishedLanes = s, gI(e, p, s);
        }
      }
      return kr(e, zn()), e.callbackNode === r ? iC.bind(null, e) : null;
    }
    function By(e, t) {
      var r = Tc;
      if (Af(e)) {
        var i = ds(e, t);
        i.flags |= Po, F1(e.containerInfo);
      }
      var s = op(e, t);
      if (s !== cs) {
        var c = Dr;
        Dr = r, c !== null && oC(c);
      }
      return s;
    }
    function oC(e) {
      Dr === null ? Dr = e : Dr.push.apply(Dr, e);
    }
    function gI(e, t, r) {
      switch (t) {
        case Ci:
        case bc:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case cs: {
          ps(e, Dr, Ri);
          break;
        }
        case Qd: {
          if (bo(e, r), jS(r) && // do not delay if we're inside an act() scope
          !EC()) {
            var i = Iy + tC - zn();
            if (i > 10) {
              var s = Rf(e, te);
              if (s !== te)
                break;
              var c = e.suspendedLanes;
              if (!Zs(c, r)) {
                br(), BS(e, c);
                break;
              }
              e.timeoutHandle = Fv(ps.bind(null, e, Dr, Ri), i);
              break;
            }
          }
          ps(e, Dr, Ri);
          break;
        }
        case Sc: {
          if (bo(e, r), vD(r))
            break;
          if (!EC()) {
            var p = lD(e, r), v = p, b = zn() - v, C = FI(b) - b;
            if (C > 10) {
              e.timeoutHandle = Fv(ps.bind(null, e, Dr, Ri), C);
              break;
            }
          }
          ps(e, Dr, Ri);
          break;
        }
        case eC: {
          ps(e, Dr, Ri);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function bI(e) {
      for (var t = e; ; ) {
        if (t.flags & Ah) {
          var r = t.updateQueue;
          if (r !== null) {
            var i = r.stores;
            if (i !== null)
              for (var s = 0; s < i.length; s++) {
                var c = i[s], p = c.getSnapshot, v = c.value;
                try {
                  if (!Vr(p(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & Ah && b !== null) {
          b.return = t, t = b;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function bo(e, t) {
      t = wf(t, Zd), t = wf(t, _c), bD(e, t);
    }
    function sC(e) {
      if (UN(), (Et & (er | ua)) !== On)
        throw new Error("Should not already be working.");
      wi();
      var t = Rf(e, te);
      if (!Br(t, qe))
        return kr(e, zn()), null;
      var r = op(e, t);
      if (e.tag !== oo && r === cs) {
        var i = iv(e);
        i !== te && (t = i, r = By(e, i));
      }
      if (r === bc) {
        var s = Ec;
        throw ds(e, te), bo(e, t), kr(e, zn()), s;
      }
      if (r === Ny)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, ps(e, Dr, Ri), kr(e, zn()), null;
    }
    function SI(e, t) {
      t !== te && (lv(e, st(t, qe)), kr(e, zn()), (Et & (er | ua)) === On && (Cc(), so()));
    }
    function $y(e, t) {
      var r = Et;
      Et |= ZT;
      try {
        return e(t);
      } finally {
        Et = r, Et === On && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ka.isBatchingLegacy && (Cc(), a_());
      }
    }
    function EI(e, t, r, i, s) {
      var c = Sa(), p = Zn.transition;
      try {
        return Zn.transition = null, $n($r), e(t, r, i, s);
      } finally {
        $n(c), Zn.transition = p, Et === On && Cc();
      }
    }
    function xi(e) {
      yo !== null && yo.tag === oo && (Et & (er | ua)) === On && wi();
      var t = Et;
      Et |= ZT;
      var r = Zn.transition, i = Sa();
      try {
        return Zn.transition = null, $n($r), e ? e() : void 0;
      } finally {
        $n(i), Zn.transition = r, Et = t, (Et & (er | ua)) === On && so();
      }
    }
    function uC() {
      return (Et & (er | ua)) !== On;
    }
    function ip(e, t) {
      sr(My, Xa, e), Xa = st(Xa, t);
    }
    function Hy(e) {
      Xa = My.current, or(My, e);
    }
    function ds(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var r = e.timeoutHandle;
      if (r !== zv && (e.timeoutHandle = zv, WL(r)), fn !== null)
        for (var i = fn.return; i !== null; ) {
          var s = i.alternate;
          jT(s, i), i = i.return;
        }
      gr = e;
      var c = hs(e.current, null);
      return fn = c, An = Xa = t, Dn = Ci, Ec = null, Jd = te, _c = te, Zd = te, Tc = null, Dr = null, mN(), Ta.discardPendingWarnings(), c;
    }
    function lC(e, t) {
      do {
        var r = fn;
        try {
          if (vd(), N_(), fe(), Ly.current = null, r === null || r.return === null) {
            Dn = bc, Ec = t, fn = null;
            return;
          }
          if (Se && r.mode & zt && Vd(r, !0), Ae)
            if (Ks(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              QA(r, i, An);
            } else
              XA(r, t, An);
          qN(e, r.return, r, t, An), pC(r);
        } catch (s) {
          t = s, fn === r && r !== null ? (r = r.return, fn = r) : r = fn;
          continue;
        }
        return;
      } while (!0);
    }
    function cC() {
      var e = ky.current;
      return ky.current = zd, e === null ? zd : e;
    }
    function fC(e) {
      ky.current = e;
    }
    function _I() {
      Iy = zn();
    }
    function Oc(e) {
      Jd = st(e, Jd);
    }
    function TI() {
      Dn === Ci && (Dn = Qd);
    }
    function Vy() {
      (Dn === Ci || Dn === Qd || Dn === cs) && (Dn = Sc), gr !== null && (ov(Jd) || ov(_c)) && bo(gr, An);
    }
    function CI(e) {
      Dn !== Sc && (Dn = cs), Tc === null ? Tc = [e] : Tc.push(e);
    }
    function RI() {
      return Dn === Ci;
    }
    function op(e, t) {
      var r = Et;
      Et |= er;
      var i = cC();
      if (gr !== e || An !== t) {
        if (ba) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Ac(e, An), s.clear()), HS(e, t);
        }
        Ri = VS(), ds(e, t);
      }
      LS(t);
      do
        try {
          xI();
          break;
        } catch (c) {
          lC(e, c);
        }
      while (!0);
      if (vd(), Et = r, fC(i), fn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return NS(), gr = null, An = te, Dn;
    }
    function xI() {
      for (; fn !== null; )
        dC(fn);
    }
    function wI(e, t) {
      var r = Et;
      Et |= er;
      var i = cC();
      if (gr !== e || An !== t) {
        if (ba) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Ac(e, An), s.clear()), HS(e, t);
        }
        Ri = VS(), Cc(), ds(e, t);
      }
      LS(t);
      do
        try {
          OI();
          break;
        } catch (c) {
          lC(e, c);
        }
      while (!0);
      return vd(), fC(i), Et = r, fn !== null ? (nD(), Ci) : (NS(), gr = null, An = te, Dn);
    }
    function OI() {
      for (; fn !== null && !DA(); )
        dC(fn);
    }
    function dC(e) {
      var t = e.alternate;
      ce(e);
      var r;
      (e.mode & zt) !== je ? (Gm(e), r = qy(t, e, Xa), Vd(e, !0)) : r = qy(t, e, Xa), fe(), e.memoizedProps = e.pendingProps, r === null ? pC(e) : fn = r, Ly.current = null;
    }
    function pC(e) {
      var t = e;
      do {
        var r = t.alternate, i = t.return;
        if ((t.flags & Sf) === He) {
          ce(t);
          var s = void 0;
          if ((t.mode & zt) === je ? s = UT(r, t, Xa) : (Gm(t), s = UT(r, t, Xa), Vd(t, !1)), fe(), s !== null) {
            fn = s;
            return;
          }
        } else {
          var c = TM(r, t);
          if (c !== null) {
            c.flags &= CA, fn = c;
            return;
          }
          if ((t.mode & zt) !== je) {
            Vd(t, !1);
            for (var p = t.actualDuration, v = t.child; v !== null; )
              p += v.actualDuration, v = v.sibling;
            t.actualDuration = p;
          }
          if (i !== null)
            i.flags |= Sf, i.subtreeFlags = He, i.deletions = null;
          else {
            Dn = Ny, fn = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          fn = b;
          return;
        }
        t = i, fn = t;
      } while (t !== null);
      Dn === Ci && (Dn = eC);
    }
    function ps(e, t, r) {
      var i = Sa(), s = Zn.transition;
      try {
        Zn.transition = null, $n($r), AI(e, t, r, i);
      } finally {
        Zn.transition = s, $n(i);
      }
      return null;
    }
    function AI(e, t, r, i) {
      do
        wi();
      while (yo !== null);
      if (PI(), (Et & (er | ua)) !== On)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, c = e.finishedLanes;
      if (HA(c), s === null)
        return AS(), null;
      if (c === te && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Bn;
      var p = st(s.lanes, s.childLanes);
      SD(e, p), e === gr && (gr = null, fn = null, An = te), ((s.subtreeFlags & Gs) !== He || (s.flags & Gs) !== He) && (fs || (fs = !0, Fy = r, Wy(Yo, function() {
        return wi(), null;
      })));
      var v = (s.subtreeFlags & (Mh | Ih | dl | Gs)) !== He, b = (s.flags & (Mh | Ih | dl | Gs)) !== He;
      if (v || b) {
        var C = Zn.transition;
        Zn.transition = null;
        var x = Sa();
        $n($r);
        var N = Et;
        Et |= ua, Ly.current = null, OM(e, s), aT(), $M(e, s, c), BL(e.containerInfo), e.current = s, JA(c), HM(s, e, c), ZA(), kA(), Et = N, $n(x), Zn.transition = C;
      } else
        e.current = s, aT();
      var L = fs;
      if (fs ? (fs = !1, yo = e, Rc = c) : (Au = 0, np = null), p = e.pendingLanes, p === te && (Ou = null), L || yC(e.current, !1), FA(s.stateNode, i), ba && e.memoizedUpdaters.clear(), uI(), kr(e, zn()), t !== null)
        for (var F = e.onRecoverableError, $ = 0; $ < t.length; $++) {
          var G = t[$], ye = G.stack, Me = G.digest;
          F(G.value, {
            componentStack: ye,
            digest: Me
          });
        }
      if (ep) {
        ep = !1;
        var De = Uy;
        throw Uy = null, De;
      }
      return Br(Rc, qe) && e.tag !== oo && wi(), p = e.pendingLanes, Br(p, qe) ? (MN(), e === zy ? xc++ : (xc = 0, zy = e)) : xc = 0, so(), AS(), null;
    }
    function wi() {
      if (yo !== null) {
        var e = qS(Rc), t = CD(mi, e), r = Zn.transition, i = Sa();
        try {
          return Zn.transition = null, $n(t), kI();
        } finally {
          $n(i), Zn.transition = r;
        }
      }
      return !1;
    }
    function DI(e) {
      jy.push(e), fs || (fs = !0, Wy(Yo, function() {
        return wi(), null;
      }));
    }
    function kI() {
      if (yo === null)
        return !1;
      var e = Fy;
      Fy = null;
      var t = yo, r = Rc;
      if (yo = null, Rc = te, (Et & (er | ua)) !== On)
        throw new Error("Cannot flush passive effects while already rendering.");
      Py = !0, tp = !1, eD(r);
      var i = Et;
      Et |= ua, XM(t.current), YM(t, t.current, r, e);
      {
        var s = jy;
        jy = [];
        for (var c = 0; c < s.length; c++) {
          var p = s[c];
          LM(t, p);
        }
      }
      tD(), yC(t.current, !0), Et = i, so(), tp ? t === np ? Au++ : (Au = 0, np = t) : Au = 0, Py = !1, tp = !1, zA(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function hC(e) {
      return Ou !== null && Ou.has(e);
    }
    function LI(e) {
      Ou === null ? Ou = /* @__PURE__ */ new Set([e]) : Ou.add(e);
    }
    function NI(e) {
      ep || (ep = !0, Uy = e);
    }
    var MI = NI;
    function vC(e, t, r) {
      var i = us(r, t), s = dT(e, i, qe), c = lo(e, s, qe), p = br();
      c !== null && (Sl(c, qe, p), kr(c, p));
    }
    function Xt(e, t, r) {
      if (RM(r), Dc(!1), e.tag === R) {
        vC(e, e, r);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === R) {
          vC(i, e, r);
          return;
        } else if (i.tag === y) {
          var s = i.type, c = i.stateNode;
          if (typeof s.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !hC(c)) {
            var p = us(r, e), v = fy(i, p, qe), b = lo(i, v, qe), C = br();
            b !== null && (Sl(b, qe, C), kr(b, C));
            return;
          }
        }
        i = i.return;
      }
      d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, r);
    }
    function II(e, t, r) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var s = br();
      BS(e, r), VI(e), gr === e && Zs(An, r) && (Dn === Sc || Dn === Qd && jS(An) && zn() - Iy < tC ? ds(e, te) : Zd = st(Zd, r)), kr(e, s);
    }
    function mC(e, t) {
      t === Bn && (t = vI(e));
      var r = br(), i = Or(e, t);
      i !== null && (Sl(i, t, r), kr(i, r));
    }
    function UI(e) {
      var t = e.memoizedState, r = Bn;
      t !== null && (r = t.retryLane), mC(e, r);
    }
    function jI(e, t) {
      var r = Bn, i;
      switch (e.tag) {
        case oe:
          i = e.stateNode;
          var s = e.memoizedState;
          s !== null && (r = s.retryLane);
          break;
        case Ot:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), mC(e, r);
    }
    function FI(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : fI(e / 1960) * 1960;
    }
    function zI() {
      if (xc > pI)
        throw xc = 0, zy = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Au > hI && (Au = 0, np = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function PI() {
      Ta.flushLegacyContextWarning(), Ta.flushPendingUnsafeLifecycleWarnings();
    }
    function yC(e, t) {
      ce(e), sp(e, Qi, iI), t && sp(e, Nh, oI), sp(e, Qi, rI), t && sp(e, Nh, aI), fe();
    }
    function sp(e, t, r) {
      for (var i = e, s = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== s && i.child !== null && c !== He ? i = i.child : ((i.flags & t) !== He && r(i), i.sibling !== null ? i = i.sibling : i = s = i.return);
      }
    }
    var up = null;
    function gC(e) {
      {
        if ((Et & er) !== On || !(e.mode & St))
          return;
        var t = e.tag;
        if (t !== _ && t !== R && t !== y && t !== g && t !== V && t !== de && t !== Z)
          return;
        var r = E(e) || "ReactComponent";
        if (up !== null) {
          if (up.has(r))
            return;
          up.add(r);
        } else
          up = /* @__PURE__ */ new Set([r]);
        var i = I;
        try {
          ce(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? ce(e) : fe();
        }
      }
    }
    var qy;
    {
      var BI = null;
      qy = function(e, t, r) {
        var i = xC(BI, t);
        try {
          return kT(e, t, r);
        } catch (c) {
          if (Z1() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (vd(), N_(), jT(e, t), xC(t, i), t.mode & zt && Gm(t), wh(null, kT, null, e, t, r), EA()) {
            var s = Oh();
            typeof s == "object" && s !== null && s._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var bC = !1, Yy;
    Yy = /* @__PURE__ */ new Set();
    function $I(e) {
      if (ne && !kN())
        switch (e.tag) {
          case g:
          case V:
          case Z: {
            var t = fn && E(fn) || "Unknown", r = t;
            if (!Yy.has(r)) {
              Yy.add(r);
              var i = E(e) || "Unknown";
              d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case y: {
            bC || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), bC = !0);
            break;
          }
        }
    }
    function Ac(e, t) {
      if (ba) {
        var r = e.memoizedUpdaters;
        r.forEach(function(i) {
          $S(e, i, t);
        });
      }
    }
    var Gy = {};
    function Wy(e, t) {
      {
        var r = ka.current;
        return r !== null ? (r.push(t), Gy) : OS(e, t);
      }
    }
    function SC(e) {
      if (e !== Gy)
        return AA(e);
    }
    function EC() {
      return ka.current !== null;
    }
    function HI(e) {
      {
        if (e.mode & St) {
          if (!JT())
            return;
        } else if (!cI() || Et !== On || e.tag !== g && e.tag !== V && e.tag !== Z)
          return;
        if (ka.current === null) {
          var t = I;
          try {
            ce(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, E(e));
          } finally {
            t ? ce(e) : fe();
          }
        }
      }
    }
    function VI(e) {
      e.tag !== oo && JT() && ka.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Dc(e) {
      aC = e;
    }
    var la = null, Du = null, qI = function(e) {
      la = e;
    };
    function ku(e) {
      {
        if (la === null)
          return e;
        var t = la(e);
        return t === void 0 ? e : t.current;
      }
    }
    function Ky(e) {
      return ku(e);
    }
    function Xy(e) {
      {
        if (la === null)
          return e;
        var t = la(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var r = ku(e.render);
            if (e.render !== r) {
              var i = {
                $$typeof: J,
                render: r
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function _C(e, t) {
      {
        if (la === null)
          return !1;
        var r = e.elementType, i = t.type, s = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case y: {
            typeof i == "function" && (s = !0);
            break;
          }
          case g: {
            (typeof i == "function" || c === We) && (s = !0);
            break;
          }
          case V: {
            (c === J || c === We) && (s = !0);
            break;
          }
          case de:
          case Z: {
            (c === dt || c === We) && (s = !0);
            break;
          }
          default:
            return !1;
        }
        if (s) {
          var p = la(r);
          if (p !== void 0 && p === la(i))
            return !0;
        }
        return !1;
      }
    }
    function TC(e) {
      {
        if (la === null || typeof WeakSet != "function")
          return;
        Du === null && (Du = /* @__PURE__ */ new WeakSet()), Du.add(e);
      }
    }
    var YI = function(e, t) {
      {
        if (la === null)
          return;
        var r = t.staleFamilies, i = t.updatedFamilies;
        wi(), xi(function() {
          Qy(e.current, i, r);
        });
      }
    }, GI = function(e, t) {
      {
        if (e.context !== qr)
          return;
        wi(), xi(function() {
          kc(t, e, null, null);
        });
      }
    };
    function Qy(e, t, r) {
      {
        var i = e.alternate, s = e.child, c = e.sibling, p = e.tag, v = e.type, b = null;
        switch (p) {
          case g:
          case Z:
          case y:
            b = v;
            break;
          case V:
            b = v.render;
            break;
        }
        if (la === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, x = !1;
        if (b !== null) {
          var N = la(b);
          N !== void 0 && (r.has(N) ? x = !0 : t.has(N) && (p === y ? x = !0 : C = !0));
        }
        if (Du !== null && (Du.has(e) || i !== null && Du.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || C) {
          var L = Or(e, qe);
          L !== null && kn(L, e, qe, an);
        }
        s !== null && !x && Qy(s, t, r), c !== null && Qy(c, t, r);
      }
    }
    var WI = function(e, t) {
      {
        var r = /* @__PURE__ */ new Set(), i = new Set(t.map(function(s) {
          return s.current;
        }));
        return Jy(e.current, i, r), r;
      }
    };
    function Jy(e, t, r) {
      {
        var i = e.child, s = e.sibling, c = e.tag, p = e.type, v = null;
        switch (c) {
          case g:
          case Z:
          case y:
            v = p;
            break;
          case V:
            v = p.render;
            break;
        }
        var b = !1;
        v !== null && t.has(v) && (b = !0), b ? KI(e, r) : i !== null && Jy(i, t, r), s !== null && Jy(s, t, r);
      }
    }
    function KI(e, t) {
      {
        var r = XI(e, t);
        if (r)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case w:
              t.add(i.stateNode);
              return;
            case T:
              t.add(i.stateNode.containerInfo);
              return;
            case R:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function XI(e, t) {
      for (var r = e, i = !1; ; ) {
        if (r.tag === w)
          i = !0, t.add(r.stateNode);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === e)
          return i;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return i;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return !1;
    }
    var Zy;
    {
      Zy = !1;
      try {
        var CC = Object.preventExtensions({});
      } catch {
        Zy = !0;
      }
    }
    function QI(e, t, r, i) {
      this.tag = e, this.key = r, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = He, this.subtreeFlags = He, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Zy && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Yr = function(e, t, r, i) {
      return new QI(e, t, r, i);
    };
    function eg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function JI(e) {
      return typeof e == "function" && !eg(e) && e.defaultProps === void 0;
    }
    function ZI(e) {
      if (typeof e == "function")
        return eg(e) ? y : g;
      if (e != null) {
        var t = e.$$typeof;
        if (t === J)
          return V;
        if (t === dt)
          return de;
      }
      return _;
    }
    function hs(e, t) {
      var r = e.alternate;
      r === null ? (r = Yr(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r._debugSource = e._debugSource, r._debugOwner = e._debugOwner, r._debugHookTypes = e._debugHookTypes, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = He, r.subtreeFlags = He, r.deletions = null, r.actualDuration = 0, r.actualStartTime = -1), r.flags = e.flags & pi, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (r.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.selfBaseDuration = e.selfBaseDuration, r.treeBaseDuration = e.treeBaseDuration, r._debugNeedsRemount = e._debugNeedsRemount, r.tag) {
        case _:
        case g:
        case Z:
          r.type = ku(e.type);
          break;
        case y:
          r.type = Ky(e.type);
          break;
        case V:
          r.type = Xy(e.type);
          break;
      }
      return r;
    }
    function eU(e, t) {
      e.flags &= pi | Fn;
      var r = e.alternate;
      if (r === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = He, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = He, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type;
        var i = r.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = r.selfBaseDuration, e.treeBaseDuration = r.treeBaseDuration;
      }
      return e;
    }
    function tU(e, t, r) {
      var i;
      return e === id ? (i = St, t === !0 && (i |= hn, i |= Pa)) : i = je, ba && (i |= zt), Yr(R, null, null, i);
    }
    function tg(e, t, r, i, s, c) {
      var p = _, v = e;
      if (typeof e == "function")
        eg(e) ? (p = y, v = Ky(v)) : v = ku(v);
      else if (typeof e == "string")
        p = w;
      else
        e: switch (e) {
          case Fr:
            return So(r.children, s, c, t);
          case Zr:
            p = Y, s |= hn, (s & St) !== je && (s |= Pa);
            break;
          case zr:
            return nU(r, s, c, t);
          case me:
            return rU(r, s, c, t);
          case Te:
            return aU(r, s, c, t);
          case pn:
            return RC(r, s, c, t);
          case Nt:
          // eslint-disable-next-line no-fallthrough
          case lt:
          // eslint-disable-next-line no-fallthrough
          case en:
          // eslint-disable-next-line no-fallthrough
          case Sn:
          // eslint-disable-next-line no-fallthrough
          case it:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case jn:
                  p = Q;
                  break e;
                case A:
                  p = H;
                  break e;
                case J:
                  p = V, v = Xy(v);
                  break e;
                case dt:
                  p = de;
                  break e;
                case We:
                  p = Ie, v = null;
                  break e;
              }
            var b = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? E(i) : null;
              C && (b += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
          }
        }
      var x = Yr(p, r, t, s);
      return x.elementType = e, x.type = v, x.lanes = c, x._debugOwner = i, x;
    }
    function ng(e, t, r) {
      var i = null;
      i = e._owner;
      var s = e.type, c = e.key, p = e.props, v = tg(s, c, p, i, t, r);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function So(e, t, r, i) {
      var s = Yr(P, e, i, t);
      return s.lanes = r, s;
    }
    function nU(e, t, r, i) {
      typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = Yr(ae, e, i, t | zt);
      return s.elementType = zr, s.lanes = r, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function rU(e, t, r, i) {
      var s = Yr(oe, e, i, t);
      return s.elementType = me, s.lanes = r, s;
    }
    function aU(e, t, r, i) {
      var s = Yr(Ot, e, i, t);
      return s.elementType = Te, s.lanes = r, s;
    }
    function RC(e, t, r, i) {
      var s = Yr(we, e, i, t);
      s.elementType = pn, s.lanes = r;
      var c = {
        isHidden: !1
      };
      return s.stateNode = c, s;
    }
    function rg(e, t, r) {
      var i = Yr(D, e, null, t);
      return i.lanes = r, i;
    }
    function iU() {
      var e = Yr(w, null, null, je);
      return e.elementType = "DELETED", e;
    }
    function oU(e) {
      var t = Yr(Lt, null, null, je);
      return t.stateNode = e, t;
    }
    function ag(e, t, r) {
      var i = e.children !== null ? e.children : [], s = Yr(T, i, e.key, t);
      return s.lanes = r, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function xC(e, t) {
      return e === null && (e = Yr(_, null, null, je)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function sU(e, t, r, i, s) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zv, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Bn, this.eventTimes = uv(te), this.expirationTimes = uv(an), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = uv(te), this.identifierPrefix = i, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], p = 0; p < zh; p++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case id:
          this._debugRootType = r ? "hydrateRoot()" : "createRoot()";
          break;
        case oo:
          this._debugRootType = r ? "hydrate()" : "render()";
          break;
      }
    }
    function wC(e, t, r, i, s, c, p, v, b, C) {
      var x = new sU(e, t, r, v, b), N = tU(t, c);
      x.current = N, N.stateNode = x;
      {
        var L = {
          element: i,
          isDehydrated: r,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = L;
      }
      return ym(N), x;
    }
    var ig = "18.3.1";
    function uU(e, t, r) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Nn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Yn,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: r
      };
    }
    var og, sg;
    og = !1, sg = {};
    function OC(e) {
      if (!e)
        return qr;
      var t = Vs(e), r = V1(t);
      if (t.tag === y) {
        var i = t.type;
        if (Ha(i))
          return t_(t, i, r);
      }
      return r;
    }
    function lU(e, t) {
      {
        var r = Vs(e);
        if (r === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var s = RS(r);
        if (s === null)
          return null;
        if (s.mode & hn) {
          var c = E(r) || "Component";
          if (!sg[c]) {
            sg[c] = !0;
            var p = I;
            try {
              ce(s), r.mode & hn ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              p ? ce(p) : fe();
            }
          }
        }
        return s.stateNode;
      }
    }
    function AC(e, t, r, i, s, c, p, v) {
      var b = !1, C = null;
      return wC(e, t, b, C, r, i, s, c, p);
    }
    function DC(e, t, r, i, s, c, p, v, b, C) {
      var x = !0, N = wC(r, i, x, e, s, c, p, v, b);
      N.context = OC(null);
      var L = N.current, F = br(), $ = go(L), G = _i(F, $);
      return G.callback = t ?? null, lo(L, G, $), mI(N, $, F), N;
    }
    function kc(e, t, r, i) {
      jA(t, e);
      var s = t.current, c = br(), p = go(s);
      rD(p);
      var v = OC(r);
      t.context === null ? t.context = v : t.pendingContext = v, ne && I !== null && !og && (og = !0, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, E(I) || "Unknown"));
      var b = _i(c, p);
      b.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), b.callback = i);
      var C = lo(s, b, p);
      return C !== null && (kn(C, s, p, c), Sd(C, s, p)), p;
    }
    function lp(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case w:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function cU(e) {
      switch (e.tag) {
        case R: {
          var t = e.stateNode;
          if (Af(t)) {
            var r = dD(t);
            SI(t, r);
          }
          break;
        }
        case oe: {
          xi(function() {
            var s = Or(e, qe);
            if (s !== null) {
              var c = br();
              kn(s, e, qe, c);
            }
          });
          var i = qe;
          ug(e, i);
          break;
        }
      }
    }
    function kC(e, t) {
      var r = e.memoizedState;
      r !== null && r.dehydrated !== null && (r.retryLane = gD(r.retryLane, t));
    }
    function ug(e, t) {
      kC(e, t);
      var r = e.alternate;
      r && kC(r, t);
    }
    function fU(e) {
      if (e.tag === oe) {
        var t = ml, r = Or(e, t);
        if (r !== null) {
          var i = br();
          kn(r, e, t, i);
        }
        ug(e, t);
      }
    }
    function dU(e) {
      if (e.tag === oe) {
        var t = go(e), r = Or(e, t);
        if (r !== null) {
          var i = br();
          kn(r, e, t, i);
        }
        ug(e, t);
      }
    }
    function LC(e) {
      var t = OA(e);
      return t === null ? null : t.stateNode;
    }
    var NC = function(e) {
      return null;
    };
    function pU(e) {
      return NC(e);
    }
    var MC = function(e) {
      return !1;
    };
    function hU(e) {
      return MC(e);
    }
    var IC = null, UC = null, jC = null, FC = null, zC = null, PC = null, BC = null, $C = null, HC = null;
    {
      var VC = function(e, t, r) {
        var i = t[r], s = mt(e) ? e.slice() : nt({}, e);
        return r + 1 === t.length ? (mt(s) ? s.splice(i, 1) : delete s[i], s) : (s[i] = VC(e[i], t, r + 1), s);
      }, qC = function(e, t) {
        return VC(e, t, 0);
      }, YC = function(e, t, r, i) {
        var s = t[i], c = mt(e) ? e.slice() : nt({}, e);
        if (i + 1 === t.length) {
          var p = r[i];
          c[p] = c[s], mt(c) ? c.splice(s, 1) : delete c[s];
        } else
          c[s] = YC(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            r,
            i + 1
          );
        return c;
      }, GC = function(e, t, r) {
        if (t.length !== r.length) {
          f("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < r.length - 1; i++)
            if (t[i] !== r[i]) {
              f("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return YC(e, t, r, 0);
      }, WC = function(e, t, r, i) {
        if (r >= t.length)
          return i;
        var s = t[r], c = mt(e) ? e.slice() : nt({}, e);
        return c[s] = WC(e[s], t, r + 1, i), c;
      }, KC = function(e, t, r) {
        return WC(e, t, 0, r);
      }, lg = function(e, t) {
        for (var r = e.memoizedState; r !== null && t > 0; )
          r = r.next, t--;
        return r;
      };
      IC = function(e, t, r, i) {
        var s = lg(e, t);
        if (s !== null) {
          var c = KC(s.memoizedState, r, i);
          s.memoizedState = c, s.baseState = c, e.memoizedProps = nt({}, e.memoizedProps);
          var p = Or(e, qe);
          p !== null && kn(p, e, qe, an);
        }
      }, UC = function(e, t, r) {
        var i = lg(e, t);
        if (i !== null) {
          var s = qC(i.memoizedState, r);
          i.memoizedState = s, i.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var c = Or(e, qe);
          c !== null && kn(c, e, qe, an);
        }
      }, jC = function(e, t, r, i) {
        var s = lg(e, t);
        if (s !== null) {
          var c = GC(s.memoizedState, r, i);
          s.memoizedState = c, s.baseState = c, e.memoizedProps = nt({}, e.memoizedProps);
          var p = Or(e, qe);
          p !== null && kn(p, e, qe, an);
        }
      }, FC = function(e, t, r) {
        e.pendingProps = KC(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Or(e, qe);
        i !== null && kn(i, e, qe, an);
      }, zC = function(e, t) {
        e.pendingProps = qC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var r = Or(e, qe);
        r !== null && kn(r, e, qe, an);
      }, PC = function(e, t, r) {
        e.pendingProps = GC(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Or(e, qe);
        i !== null && kn(i, e, qe, an);
      }, BC = function(e) {
        var t = Or(e, qe);
        t !== null && kn(t, e, qe, an);
      }, $C = function(e) {
        NC = e;
      }, HC = function(e) {
        MC = e;
      };
    }
    function vU(e) {
      var t = RS(e);
      return t === null ? null : t.stateNode;
    }
    function mU(e) {
      return null;
    }
    function yU() {
      return I;
    }
    function gU(e) {
      var t = e.findFiberByHostInstance, r = o.ReactCurrentDispatcher;
      return UA({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: IC,
        overrideHookStateDeletePath: UC,
        overrideHookStateRenamePath: jC,
        overrideProps: FC,
        overridePropsDeletePath: zC,
        overridePropsRenamePath: PC,
        setErrorHandler: $C,
        setSuspenseHandler: HC,
        scheduleUpdate: BC,
        currentDispatcherRef: r,
        findHostInstanceByFiber: vU,
        findFiberByHostInstance: t || mU,
        // React Refresh
        findHostInstancesForRefresh: WI,
        scheduleRefresh: YI,
        scheduleRoot: GI,
        setRefreshHandler: qI,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: yU,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ig
      });
    }
    var XC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function cg(e) {
      this._internalRoot = e;
    }
    cp.prototype.render = cg.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : fp(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
        var r = t.containerInfo;
        if (r.nodeType !== _n) {
          var i = LC(t.current);
          i && i.parentNode !== r && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      kc(e, t, null, null);
    }, cp.prototype.unmount = cg.prototype.unmount = function() {
      typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        uC() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), xi(function() {
          kc(null, e, null, null);
        }), XE(t);
      }
    };
    function bU(e, t) {
      if (!fp(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      QC(e);
      var r = !1, i = !1, s = "", c = XC;
      t != null && (t.hydrate ? f("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === vr && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var p = AC(e, id, null, r, i, s, c);
      Jf(p.current, e);
      var v = e.nodeType === _n ? e.parentNode : e;
      return jl(v), new cg(p);
    }
    function cp(e) {
      this._internalRoot = e;
    }
    function SU(e) {
      e && ID(e);
    }
    cp.prototype.unstable_scheduleHydration = SU;
    function EU(e, t, r) {
      if (!fp(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      QC(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = r ?? null, s = r != null && r.hydratedSources || null, c = !1, p = !1, v = "", b = XC;
      r != null && (r.unstable_strictMode === !0 && (c = !0), r.identifierPrefix !== void 0 && (v = r.identifierPrefix), r.onRecoverableError !== void 0 && (b = r.onRecoverableError));
      var C = DC(t, null, e, id, i, c, p, v, b);
      if (Jf(C.current, e), jl(e), s)
        for (var x = 0; x < s.length; x++) {
          var N = s[x];
          RN(C, N);
        }
      return new cp(C);
    }
    function fp(e) {
      return !!(e && (e.nodeType === xr || e.nodeType === di || e.nodeType === mh));
    }
    function Lc(e) {
      return !!(e && (e.nodeType === xr || e.nodeType === di || e.nodeType === mh || e.nodeType === _n && e.nodeValue === " react-mount-point-unstable "));
    }
    function QC(e) {
      e.nodeType === xr && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Wl(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var _U = o.ReactCurrentOwner, JC;
    JC = function(e) {
      if (e._reactRootContainer && e.nodeType !== _n) {
        var t = LC(e._reactRootContainer.current);
        t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var r = !!e._reactRootContainer, i = fg(e), s = !!(i && ao(i));
      s && !r && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === xr && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function fg(e) {
      return e ? e.nodeType === di ? e.documentElement : e.firstChild : null;
    }
    function ZC() {
    }
    function TU(e, t, r, i, s) {
      if (s) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var L = lp(p);
            c.call(L);
          };
        }
        var p = DC(
          t,
          i,
          e,
          oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          ZC
        );
        e._reactRootContainer = p, Jf(p.current, e);
        var v = e.nodeType === _n ? e.parentNode : e;
        return jl(v), xi(), p;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var L = lp(x);
            C.call(L);
          };
        }
        var x = AC(
          e,
          oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          ZC
        );
        e._reactRootContainer = x, Jf(x.current, e);
        var N = e.nodeType === _n ? e.parentNode : e;
        return jl(N), xi(function() {
          kc(t, x, r, i);
        }), x;
      }
    }
    function CU(e, t) {
      e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function dp(e, t, r, i, s) {
      JC(r), CU(s === void 0 ? null : s, "render");
      var c = r._reactRootContainer, p;
      if (!c)
        p = TU(r, t, e, s, i);
      else {
        if (p = c, typeof s == "function") {
          var v = s;
          s = function() {
            var b = lp(p);
            v.call(b);
          };
        }
        kc(t, p, e, s);
      }
      return lp(p);
    }
    var eR = !1;
    function RU(e) {
      {
        eR || (eR = !0, d("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = _U.current;
        if (t !== null && t.stateNode !== null) {
          var r = t.stateNode._warnedAboutRefsInRender;
          r || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === xr ? e : lU(e, "findDOMNode");
    }
    function xU(e, t, r) {
      if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lc(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Wl(t) && t._reactRootContainer === void 0;
        i && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return dp(null, e, t, !0, r);
    }
    function wU(e, t, r) {
      if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lc(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Wl(t) && t._reactRootContainer === void 0;
        i && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return dp(null, e, t, !1, r);
    }
    function OU(e, t, r, i) {
      if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lc(r))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_A(e))
        throw new Error("parentComponent must be a valid React Component");
      return dp(e, t, r, !1, i);
    }
    var tR = !1;
    function AU(e) {
      if (tR || (tR = !0, d("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Lc(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Wl(e) && e._reactRootContainer === void 0;
        t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var r = fg(e), i = r && !ao(r);
          i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return xi(function() {
          dp(null, null, e, !1, function() {
            e._reactRootContainer = null, XE(e);
          });
        }), !0;
      } else {
        {
          var s = fg(e), c = !!(s && ao(s)), p = e.nodeType === xr && Lc(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    RD(cU), wD(fU), OD(dU), AD(Sa), DD(_D), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), fA(kL), hA($y, EI, xi);
    function DU(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fp(t))
        throw new Error("Target container is not a DOM element.");
      return uU(e, t, null, r);
    }
    function kU(e, t, r, i) {
      return OU(e, t, r, i);
    }
    var dg = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ao, uu, Zf, dS, pS, $y]
    };
    function LU(e, t) {
      return dg.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bU(e, t);
    }
    function NU(e, t, r) {
      return dg.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), EU(e, t, r);
    }
    function MU(e) {
      return uC() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), xi(e);
    }
    var IU = gU({
      findFiberByHostInstance: Zo,
      bundleType: 1,
      version: ig,
      rendererPackageName: "react-dom"
    });
    if (!IU && vt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var nR = window.location.protocol;
      /^(https?|file):$/.test(nR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (nR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dg, Lr.createPortal = DU, Lr.createRoot = LU, Lr.findDOMNode = RU, Lr.flushSync = MU, Lr.hydrate = xU, Lr.hydrateRoot = NU, Lr.render = wU, Lr.unmountComponentAtNode = AU, Lr.unstable_batchedUpdates = $y, Lr.unstable_renderSubtreeIntoContainer = kU, Lr.version = ig, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Lr;
}
var cR;
function Ex() {
  return cR || (cR = 1, vg.exports = HU()), vg.exports;
}
var fR;
function VU() {
  if (fR) return pp;
  fR = 1;
  var n = Ex();
  {
    var a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    pp.createRoot = function(o, u) {
      a.usingClientEntryPoint = !0;
      try {
        return n.createRoot(o, u);
      } finally {
        a.usingClientEntryPoint = !1;
      }
    }, pp.hydrateRoot = function(o, u, l) {
      a.usingClientEntryPoint = !0;
      try {
        return n.hydrateRoot(o, u, l);
      } finally {
        a.usingClientEntryPoint = !1;
      }
    };
  }
  return pp;
}
var qU = VU();
const YU = /* @__PURE__ */ Rs(qU);
var gg = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var dR;
function GU() {
  return dR || (dR = 1, function(n) {
    (function() {
      var a = {}.hasOwnProperty;
      function o() {
        for (var f = "", d = 0; d < arguments.length; d++) {
          var m = arguments[d];
          m && (f = l(f, u(m)));
        }
        return f;
      }
      function u(f) {
        if (typeof f == "string" || typeof f == "number")
          return f;
        if (typeof f != "object")
          return "";
        if (Array.isArray(f))
          return o.apply(null, f);
        if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
          return f.toString();
        var d = "";
        for (var m in f)
          a.call(f, m) && f[m] && (d = l(d, m));
        return d;
      }
      function l(f, d) {
        return d ? f ? f + " " + d : f + d : f;
      }
      n.exports ? (o.default = o, n.exports = o) : window.classNames = o;
    })();
  }(gg)), gg.exports;
}
var WU = GU();
const Je = /* @__PURE__ */ Rs(WU);
function Qg() {
  return Qg = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var u in o) ({}).hasOwnProperty.call(o, u) && (n[u] = o[u]);
    }
    return n;
  }, Qg.apply(null, arguments);
}
function _x(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n) if ({}.hasOwnProperty.call(n, u)) {
    if (a.indexOf(u) !== -1) continue;
    o[u] = n[u];
  }
  return o;
}
function pR(n) {
  return "default" + n.charAt(0).toUpperCase() + n.substr(1);
}
function KU(n) {
  var a = XU(n, "string");
  return typeof a == "symbol" ? a : String(a);
}
function XU(n, a) {
  if (typeof n != "object" || n === null) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(n, a);
    if (typeof u != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(n);
}
function QU(n, a, o) {
  var u = M.useRef(n !== void 0), l = M.useState(a), f = l[0], d = l[1], m = n !== void 0, g = u.current;
  return u.current = m, !m && g && f !== a && d(a), [m ? n : f, M.useCallback(function(y) {
    for (var _ = arguments.length, R = new Array(_ > 1 ? _ - 1 : 0), T = 1; T < _; T++)
      R[T - 1] = arguments[T];
    o && o.apply(void 0, [y].concat(R)), d(y);
  }, [o])];
}
function Tx(n, a) {
  return Object.keys(a).reduce(function(o, u) {
    var l, f = o, d = f[pR(u)], m = f[u], g = _x(f, [pR(u), u].map(KU)), y = a[u], _ = QU(m, d, n[y]), R = _[0], T = _[1];
    return Qg({}, g, (l = {}, l[u] = R, l[y] = T, l));
  }, n);
}
function Jg(n, a) {
  return Jg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, u) {
    return o.__proto__ = u, o;
  }, Jg(n, a);
}
function JU(n, a) {
  n.prototype = Object.create(a.prototype), n.prototype.constructor = n, Jg(n, a);
}
const Cx = ["xxl", "xl", "lg", "md", "sm", "xs"], Rx = "xs", qp = /* @__PURE__ */ M.createContext({
  prefixes: {},
  breakpoints: Cx,
  minBreakpoint: Rx
}), {
  Consumer: U3,
  Provider: j3
} = qp;
function pt(n, a) {
  const {
    prefixes: o
  } = M.useContext(qp);
  return n || o[a] || a;
}
function fb() {
  const {
    breakpoints: n
  } = M.useContext(qp);
  return n;
}
function db() {
  const {
    minBreakpoint: n
  } = M.useContext(qp);
  return n;
}
function pb(n) {
  return n && n.ownerDocument || document;
}
function ZU(n) {
  var a = pb(n);
  return a && a.defaultView || window;
}
function ej(n, a) {
  return ZU(n).getComputedStyle(n, a);
}
var tj = /([A-Z])/g;
function nj(n) {
  return n.replace(tj, "-$1").toLowerCase();
}
var rj = /^ms-/;
function hp(n) {
  return nj(n).replace(rj, "-ms-");
}
var aj = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function ij(n) {
  return !!(n && aj.test(n));
}
function Li(n, a) {
  var o = "", u = "";
  if (typeof a == "string")
    return n.style.getPropertyValue(hp(a)) || ej(n).getPropertyValue(hp(a));
  Object.keys(a).forEach(function(l) {
    var f = a[l];
    !f && f !== 0 ? n.style.removeProperty(hp(l)) : ij(l) ? u += l + "(" + f + ") " : o += hp(l) + ": " + f + ";";
  }), u && (o += "transform: " + u + ";"), n.style.cssText += ";" + o;
}
var bg = { exports: {} }, Sg = { exports: {} }, $t = {}, hR;
function oj() {
  if (hR) return $t;
  hR = 1;
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    var n = typeof Symbol == "function" && Symbol.for, a = n ? Symbol.for("react.element") : 60103, o = n ? Symbol.for("react.portal") : 60106, u = n ? Symbol.for("react.fragment") : 60107, l = n ? Symbol.for("react.strict_mode") : 60108, f = n ? Symbol.for("react.profiler") : 60114, d = n ? Symbol.for("react.provider") : 60109, m = n ? Symbol.for("react.context") : 60110, g = n ? Symbol.for("react.async_mode") : 60111, y = n ? Symbol.for("react.concurrent_mode") : 60111, _ = n ? Symbol.for("react.forward_ref") : 60112, R = n ? Symbol.for("react.suspense") : 60113, T = n ? Symbol.for("react.suspense_list") : 60120, w = n ? Symbol.for("react.memo") : 60115, D = n ? Symbol.for("react.lazy") : 60116, P = n ? Symbol.for("react.block") : 60121, Y = n ? Symbol.for("react.fundamental") : 60117, H = n ? Symbol.for("react.responder") : 60118, Q = n ? Symbol.for("react.scope") : 60119;
    function V(ue) {
      return typeof ue == "string" || typeof ue == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ue === u || ue === y || ue === f || ue === l || ue === R || ue === T || typeof ue == "object" && ue !== null && (ue.$$typeof === D || ue.$$typeof === w || ue.$$typeof === d || ue.$$typeof === m || ue.$$typeof === _ || ue.$$typeof === Y || ue.$$typeof === H || ue.$$typeof === Q || ue.$$typeof === P);
    }
    function ae(ue) {
      if (typeof ue == "object" && ue !== null) {
        var xt = ue.$$typeof;
        switch (xt) {
          case a:
            var Tt = ue.type;
            switch (Tt) {
              case g:
              case y:
              case u:
              case f:
              case l:
              case R:
                return Tt;
              default:
                var et = Tt && Tt.$$typeof;
                switch (et) {
                  case m:
                  case _:
                  case D:
                  case w:
                  case d:
                    return et;
                  default:
                    return xt;
                }
            }
          case o:
            return xt;
        }
      }
    }
    var oe = g, de = y, Z = m, Ie = d, ft = a, Lt = _, Ot = u, rt = D, we = w, Ze = o, ht = f, Ge = l, Oe = R, Fe = !1;
    function qt(ue) {
      return Fe || (Fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(ue) || ae(ue) === g;
    }
    function X(ue) {
      return ae(ue) === y;
    }
    function ie(ue) {
      return ae(ue) === m;
    }
    function se(ue) {
      return ae(ue) === d;
    }
    function Ae(ue) {
      return typeof ue == "object" && ue !== null && ue.$$typeof === a;
    }
    function Se(ue) {
      return ae(ue) === _;
    }
    function Ue(ue) {
      return ae(ue) === u;
    }
    function Be(ue) {
      return ae(ue) === D;
    }
    function ke(ue) {
      return ae(ue) === w;
    }
    function $e(ue) {
      return ae(ue) === o;
    }
    function ze(ue) {
      return ae(ue) === f;
    }
    function Ne(ue) {
      return ae(ue) === l;
    }
    function vt(ue) {
      return ae(ue) === R;
    }
    $t.AsyncMode = oe, $t.ConcurrentMode = de, $t.ContextConsumer = Z, $t.ContextProvider = Ie, $t.Element = ft, $t.ForwardRef = Lt, $t.Fragment = Ot, $t.Lazy = rt, $t.Memo = we, $t.Portal = Ze, $t.Profiler = ht, $t.StrictMode = Ge, $t.Suspense = Oe, $t.isAsyncMode = qt, $t.isConcurrentMode = X, $t.isContextConsumer = ie, $t.isContextProvider = se, $t.isElement = Ae, $t.isForwardRef = Se, $t.isFragment = Ue, $t.isLazy = Be, $t.isMemo = ke, $t.isPortal = $e, $t.isProfiler = ze, $t.isStrictMode = Ne, $t.isSuspense = vt, $t.isValidElementType = V, $t.typeOf = ae;
  }(), $t;
}
var vR;
function xx() {
  return vR || (vR = 1, Sg.exports = oj()), Sg.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Eg, mR;
function sj() {
  if (mR) return Eg;
  mR = 1;
  var n = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function u(f) {
    if (f == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(f);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var f = new String("abc");
      if (f[5] = "de", Object.getOwnPropertyNames(f)[0] === "5")
        return !1;
      for (var d = {}, m = 0; m < 10; m++)
        d["_" + String.fromCharCode(m)] = m;
      var g = Object.getOwnPropertyNames(d).map(function(_) {
        return d[_];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        y[_] = _;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Eg = l() ? Object.assign : function(f, d) {
    for (var m, g = u(f), y, _ = 1; _ < arguments.length; _++) {
      m = Object(arguments[_]);
      for (var R in m)
        a.call(m, R) && (g[R] = m[R]);
      if (n) {
        y = n(m);
        for (var T = 0; T < y.length; T++)
          o.call(m, y[T]) && (g[y[T]] = m[y[T]]);
      }
    }
    return g;
  }, Eg;
}
var _g, yR;
function wx() {
  if (yR) return _g;
  yR = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _g = n, _g;
}
var Tg, gR;
function Ox() {
  return gR || (gR = 1, Tg = Function.call.bind(Object.prototype.hasOwnProperty)), Tg;
}
var Cg, bR;
function uj() {
  if (bR) return Cg;
  bR = 1;
  var n = function() {
  };
  {
    var a = /* @__PURE__ */ wx(), o = {}, u = /* @__PURE__ */ Ox();
    n = function(f) {
      var d = "Warning: " + f;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function l(f, d, m, g, y) {
    for (var _ in f)
      if (u(f, _)) {
        var R;
        try {
          if (typeof f[_] != "function") {
            var T = Error(
              (g || "React class") + ": " + m + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
            );
            throw T.name = "Invariant Violation", T;
          }
          R = f[_](d, _, g, m, null, a);
        } catch (D) {
          R = D;
        }
        if (R && !(R instanceof Error) && n(
          (g || "React class") + ": type specification of " + m + " `" + _ + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
        ), R instanceof Error && !(R.message in o)) {
          o[R.message] = !0;
          var w = y ? y() : "";
          n(
            "Failed " + m + " type: " + R.message + (w ?? "")
          );
        }
      }
  }
  return l.resetWarningCache = function() {
    o = {};
  }, Cg = l, Cg;
}
var Rg, SR;
function lj() {
  if (SR) return Rg;
  SR = 1;
  var n = xx(), a = sj(), o = /* @__PURE__ */ wx(), u = /* @__PURE__ */ Ox(), l = /* @__PURE__ */ uj(), f = function() {
  };
  f = function(m) {
    var g = "Warning: " + m;
    typeof console < "u" && console.error(g);
    try {
      throw new Error(g);
    } catch {
    }
  };
  function d() {
    return null;
  }
  return Rg = function(m, g) {
    var y = typeof Symbol == "function" && Symbol.iterator, _ = "@@iterator";
    function R(X) {
      var ie = X && (y && X[y] || X[_]);
      if (typeof ie == "function")
        return ie;
    }
    var T = "<<anonymous>>", w = {
      array: H("array"),
      bigint: H("bigint"),
      bool: H("boolean"),
      func: H("function"),
      number: H("number"),
      object: H("object"),
      string: H("string"),
      symbol: H("symbol"),
      any: Q(),
      arrayOf: V,
      element: ae(),
      elementType: oe(),
      instanceOf: de,
      node: Lt(),
      objectOf: Ie,
      oneOf: Z,
      oneOfType: ft,
      shape: rt,
      exact: we
    };
    function D(X, ie) {
      return X === ie ? X !== 0 || 1 / X === 1 / ie : X !== X && ie !== ie;
    }
    function P(X, ie) {
      this.message = X, this.data = ie && typeof ie == "object" ? ie : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function Y(X) {
      var ie = {}, se = 0;
      function Ae(Ue, Be, ke, $e, ze, Ne, vt) {
        if ($e = $e || T, Ne = Ne || ke, vt !== o) {
          if (g) {
            var ue = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ue.name = "Invariant Violation", ue;
          } else if (typeof console < "u") {
            var xt = $e + ":" + ke;
            !ie[xt] && // Avoid spamming the console because they are often not actionable except for lib authors
            se < 3 && (f(
              "You are manually calling a React.PropTypes validation function for the `" + Ne + "` prop on `" + $e + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), ie[xt] = !0, se++);
          }
        }
        return Be[ke] == null ? Ue ? Be[ke] === null ? new P("The " + ze + " `" + Ne + "` is marked as required " + ("in `" + $e + "`, but its value is `null`.")) : new P("The " + ze + " `" + Ne + "` is marked as required in " + ("`" + $e + "`, but its value is `undefined`.")) : null : X(Be, ke, $e, ze, Ne);
      }
      var Se = Ae.bind(null, !1);
      return Se.isRequired = Ae.bind(null, !0), Se;
    }
    function H(X) {
      function ie(se, Ae, Se, Ue, Be, ke) {
        var $e = se[Ae], ze = Ge($e);
        if (ze !== X) {
          var Ne = Oe($e);
          return new P(
            "Invalid " + Ue + " `" + Be + "` of type " + ("`" + Ne + "` supplied to `" + Se + "`, expected ") + ("`" + X + "`."),
            { expectedType: X }
          );
        }
        return null;
      }
      return Y(ie);
    }
    function Q() {
      return Y(d);
    }
    function V(X) {
      function ie(se, Ae, Se, Ue, Be) {
        if (typeof X != "function")
          return new P("Property `" + Be + "` of component `" + Se + "` has invalid PropType notation inside arrayOf.");
        var ke = se[Ae];
        if (!Array.isArray(ke)) {
          var $e = Ge(ke);
          return new P("Invalid " + Ue + " `" + Be + "` of type " + ("`" + $e + "` supplied to `" + Se + "`, expected an array."));
        }
        for (var ze = 0; ze < ke.length; ze++) {
          var Ne = X(ke, ze, Se, Ue, Be + "[" + ze + "]", o);
          if (Ne instanceof Error)
            return Ne;
        }
        return null;
      }
      return Y(ie);
    }
    function ae() {
      function X(ie, se, Ae, Se, Ue) {
        var Be = ie[se];
        if (!m(Be)) {
          var ke = Ge(Be);
          return new P("Invalid " + Se + " `" + Ue + "` of type " + ("`" + ke + "` supplied to `" + Ae + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(X);
    }
    function oe() {
      function X(ie, se, Ae, Se, Ue) {
        var Be = ie[se];
        if (!n.isValidElementType(Be)) {
          var ke = Ge(Be);
          return new P("Invalid " + Se + " `" + Ue + "` of type " + ("`" + ke + "` supplied to `" + Ae + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(X);
    }
    function de(X) {
      function ie(se, Ae, Se, Ue, Be) {
        if (!(se[Ae] instanceof X)) {
          var ke = X.name || T, $e = qt(se[Ae]);
          return new P("Invalid " + Ue + " `" + Be + "` of type " + ("`" + $e + "` supplied to `" + Se + "`, expected ") + ("instance of `" + ke + "`."));
        }
        return null;
      }
      return Y(ie);
    }
    function Z(X) {
      if (!Array.isArray(X))
        return arguments.length > 1 ? f(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : f("Invalid argument supplied to oneOf, expected an array."), d;
      function ie(se, Ae, Se, Ue, Be) {
        for (var ke = se[Ae], $e = 0; $e < X.length; $e++)
          if (D(ke, X[$e]))
            return null;
        var ze = JSON.stringify(X, function(vt, ue) {
          var xt = Oe(ue);
          return xt === "symbol" ? String(ue) : ue;
        });
        return new P("Invalid " + Ue + " `" + Be + "` of value `" + String(ke) + "` " + ("supplied to `" + Se + "`, expected one of " + ze + "."));
      }
      return Y(ie);
    }
    function Ie(X) {
      function ie(se, Ae, Se, Ue, Be) {
        if (typeof X != "function")
          return new P("Property `" + Be + "` of component `" + Se + "` has invalid PropType notation inside objectOf.");
        var ke = se[Ae], $e = Ge(ke);
        if ($e !== "object")
          return new P("Invalid " + Ue + " `" + Be + "` of type " + ("`" + $e + "` supplied to `" + Se + "`, expected an object."));
        for (var ze in ke)
          if (u(ke, ze)) {
            var Ne = X(ke, ze, Se, Ue, Be + "." + ze, o);
            if (Ne instanceof Error)
              return Ne;
          }
        return null;
      }
      return Y(ie);
    }
    function ft(X) {
      if (!Array.isArray(X))
        return f("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var ie = 0; ie < X.length; ie++) {
        var se = X[ie];
        if (typeof se != "function")
          return f(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Fe(se) + " at index " + ie + "."
          ), d;
      }
      function Ae(Se, Ue, Be, ke, $e) {
        for (var ze = [], Ne = 0; Ne < X.length; Ne++) {
          var vt = X[Ne], ue = vt(Se, Ue, Be, ke, $e, o);
          if (ue == null)
            return null;
          ue.data && u(ue.data, "expectedType") && ze.push(ue.data.expectedType);
        }
        var xt = ze.length > 0 ? ", expected one of type [" + ze.join(", ") + "]" : "";
        return new P("Invalid " + ke + " `" + $e + "` supplied to " + ("`" + Be + "`" + xt + "."));
      }
      return Y(Ae);
    }
    function Lt() {
      function X(ie, se, Ae, Se, Ue) {
        return Ze(ie[se]) ? null : new P("Invalid " + Se + " `" + Ue + "` supplied to " + ("`" + Ae + "`, expected a ReactNode."));
      }
      return Y(X);
    }
    function Ot(X, ie, se, Ae, Se) {
      return new P(
        (X || "React class") + ": " + ie + " type `" + se + "." + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Se + "`."
      );
    }
    function rt(X) {
      function ie(se, Ae, Se, Ue, Be) {
        var ke = se[Ae], $e = Ge(ke);
        if ($e !== "object")
          return new P("Invalid " + Ue + " `" + Be + "` of type `" + $e + "` " + ("supplied to `" + Se + "`, expected `object`."));
        for (var ze in X) {
          var Ne = X[ze];
          if (typeof Ne != "function")
            return Ot(Se, Ue, Be, ze, Oe(Ne));
          var vt = Ne(ke, ze, Se, Ue, Be + "." + ze, o);
          if (vt)
            return vt;
        }
        return null;
      }
      return Y(ie);
    }
    function we(X) {
      function ie(se, Ae, Se, Ue, Be) {
        var ke = se[Ae], $e = Ge(ke);
        if ($e !== "object")
          return new P("Invalid " + Ue + " `" + Be + "` of type `" + $e + "` " + ("supplied to `" + Se + "`, expected `object`."));
        var ze = a({}, se[Ae], X);
        for (var Ne in ze) {
          var vt = X[Ne];
          if (u(X, Ne) && typeof vt != "function")
            return Ot(Se, Ue, Be, Ne, Oe(vt));
          if (!vt)
            return new P(
              "Invalid " + Ue + " `" + Be + "` key `" + Ne + "` supplied to `" + Se + "`.\nBad object: " + JSON.stringify(se[Ae], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(X), null, "  ")
            );
          var ue = vt(ke, Ne, Se, Ue, Be + "." + Ne, o);
          if (ue)
            return ue;
        }
        return null;
      }
      return Y(ie);
    }
    function Ze(X) {
      switch (typeof X) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !X;
        case "object":
          if (Array.isArray(X))
            return X.every(Ze);
          if (X === null || m(X))
            return !0;
          var ie = R(X);
          if (ie) {
            var se = ie.call(X), Ae;
            if (ie !== X.entries) {
              for (; !(Ae = se.next()).done; )
                if (!Ze(Ae.value))
                  return !1;
            } else
              for (; !(Ae = se.next()).done; ) {
                var Se = Ae.value;
                if (Se && !Ze(Se[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ht(X, ie) {
      return X === "symbol" ? !0 : ie ? ie["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && ie instanceof Symbol : !1;
    }
    function Ge(X) {
      var ie = typeof X;
      return Array.isArray(X) ? "array" : X instanceof RegExp ? "object" : ht(ie, X) ? "symbol" : ie;
    }
    function Oe(X) {
      if (typeof X > "u" || X === null)
        return "" + X;
      var ie = Ge(X);
      if (ie === "object") {
        if (X instanceof Date)
          return "date";
        if (X instanceof RegExp)
          return "regexp";
      }
      return ie;
    }
    function Fe(X) {
      var ie = Oe(X);
      switch (ie) {
        case "array":
        case "object":
          return "an " + ie;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + ie;
        default:
          return ie;
      }
    }
    function qt(X) {
      return !X.constructor || !X.constructor.name ? T : X.constructor.name;
    }
    return w.checkPropTypes = l, w.resetWarningCache = l.resetWarningCache, w.PropTypes = w, w;
  }, Rg;
}
var ER;
function cj() {
  if (ER) return bg.exports;
  ER = 1;
  {
    var n = xx(), a = !0;
    bg.exports = /* @__PURE__ */ lj()(n.isElement, a);
  }
  return bg.exports;
}
var fj = /* @__PURE__ */ cj();
const Qe = /* @__PURE__ */ Rs(fj);
var dj = Ex();
const Fu = /* @__PURE__ */ Rs(dj), _R = {
  disabled: !1
};
var pj = Qe.oneOfType([Qe.number, Qe.shape({
  enter: Qe.number,
  exit: Qe.number,
  appear: Qe.number
}).isRequired]);
Qe.oneOfType([Qe.string, Qe.shape({
  enter: Qe.string,
  exit: Qe.string,
  active: Qe.string
}), Qe.shape({
  enter: Qe.string,
  enterDone: Qe.string,
  enterActive: Qe.string,
  exit: Qe.string,
  exitDone: Qe.string,
  exitActive: Qe.string
})]);
const Ax = ei.createContext(null);
var hj = function(a) {
  return a.scrollTop;
}, Hc = "unmounted", Eo = "exited", La = "entering", Di = "entered", Kc = "exiting", Ii = /* @__PURE__ */ function(n) {
  JU(a, n);
  function a(u, l) {
    var f;
    f = n.call(this, u, l) || this;
    var d = l, m = d && !d.isMounting ? u.enter : u.appear, g;
    return f.appearStatus = null, u.in ? m ? (g = Eo, f.appearStatus = La) : g = Di : u.unmountOnExit || u.mountOnEnter ? g = Hc : g = Eo, f.state = {
      status: g
    }, f.nextCallback = null, f;
  }
  a.getDerivedStateFromProps = function(l, f) {
    var d = l.in;
    return d && f.status === Hc ? {
      status: Eo
    } : null;
  };
  var o = a.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(l) {
    var f = null;
    if (l !== this.props) {
      var d = this.state.status;
      this.props.in ? d !== La && d !== Di && (f = La) : (d === La || d === Di) && (f = Kc);
    }
    this.updateStatus(!1, f);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var l = this.props.timeout, f, d, m;
    return f = d = m = l, l != null && typeof l != "number" && (f = l.exit, d = l.enter, m = l.appear !== void 0 ? l.appear : d), {
      exit: f,
      enter: d,
      appear: m
    };
  }, o.updateStatus = function(l, f) {
    if (l === void 0 && (l = !1), f !== null)
      if (this.cancelNextCallback(), f === La) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var d = this.props.nodeRef ? this.props.nodeRef.current : Fu.findDOMNode(this);
          d && hj(d);
        }
        this.performEnter(l);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Eo && this.setState({
      status: Hc
    });
  }, o.performEnter = function(l) {
    var f = this, d = this.props.enter, m = this.context ? this.context.isMounting : l, g = this.props.nodeRef ? [m] : [Fu.findDOMNode(this), m], y = g[0], _ = g[1], R = this.getTimeouts(), T = m ? R.appear : R.enter;
    if (!l && !d || _R.disabled) {
      this.safeSetState({
        status: Di
      }, function() {
        f.props.onEntered(y);
      });
      return;
    }
    this.props.onEnter(y, _), this.safeSetState({
      status: La
    }, function() {
      f.props.onEntering(y, _), f.onTransitionEnd(T, function() {
        f.safeSetState({
          status: Di
        }, function() {
          f.props.onEntered(y, _);
        });
      });
    });
  }, o.performExit = function() {
    var l = this, f = this.props.exit, d = this.getTimeouts(), m = this.props.nodeRef ? void 0 : Fu.findDOMNode(this);
    if (!f || _R.disabled) {
      this.safeSetState({
        status: Eo
      }, function() {
        l.props.onExited(m);
      });
      return;
    }
    this.props.onExit(m), this.safeSetState({
      status: Kc
    }, function() {
      l.props.onExiting(m), l.onTransitionEnd(d.exit, function() {
        l.safeSetState({
          status: Eo
        }, function() {
          l.props.onExited(m);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(l, f) {
    f = this.setNextCallback(f), this.setState(l, f);
  }, o.setNextCallback = function(l) {
    var f = this, d = !0;
    return this.nextCallback = function(m) {
      d && (d = !1, f.nextCallback = null, l(m));
    }, this.nextCallback.cancel = function() {
      d = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(l, f) {
    this.setNextCallback(f);
    var d = this.props.nodeRef ? this.props.nodeRef.current : Fu.findDOMNode(this), m = l == null && !this.props.addEndListener;
    if (!d || m) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var g = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback], y = g[0], _ = g[1];
      this.props.addEndListener(y, _);
    }
    l != null && setTimeout(this.nextCallback, l);
  }, o.render = function() {
    var l = this.state.status;
    if (l === Hc)
      return null;
    var f = this.props, d = f.children;
    f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
    var m = _x(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ei.createElement(Ax.Provider, {
        value: null
      }, typeof d == "function" ? d(l, m) : ei.cloneElement(ei.Children.only(d), m))
    );
  }, a;
}(ei.Component);
Ii.contextType = Ax;
Ii.propTypes = {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: Qe.shape({
    current: typeof Element > "u" ? Qe.any : function(n, a, o, u, l, f) {
      var d = n[a];
      return Qe.instanceOf(d && "ownerDocument" in d ? d.ownerDocument.defaultView.Element : Element)(n, a, o, u, l, f);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: Qe.oneOfType([Qe.func.isRequired, Qe.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: Qe.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: Qe.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: Qe.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: Qe.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: Qe.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: Qe.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(a) {
    var o = pj;
    a.addEndListener || (o = o.isRequired);
    for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
      l[f - 1] = arguments[f];
    return o.apply(void 0, [a].concat(l));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: Qe.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: Qe.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: Qe.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: Qe.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: Qe.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: Qe.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: Qe.func
};
function Nu() {
}
Ii.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nu,
  onEntering: Nu,
  onEntered: Nu,
  onExit: Nu,
  onExiting: Nu,
  onExited: Nu
};
Ii.UNMOUNTED = Hc;
Ii.EXITED = Eo;
Ii.ENTERING = La;
Ii.ENTERED = Di;
Ii.EXITING = Kc;
function vj(n) {
  return n.code === "Escape" || n.keyCode === 27;
}
function mj() {
  const n = M.version.split(".");
  return {
    major: +n[0],
    minor: +n[1],
    patch: +n[2]
  };
}
function Gu(n) {
  if (!n || typeof n == "function")
    return null;
  const {
    major: a
  } = mj();
  return a >= 19 ? n.props.ref : n.ref;
}
const Yp = !!(typeof window < "u" && window.document && window.document.createElement);
var Zg = !1, eb = !1;
try {
  var xg = {
    get passive() {
      return Zg = !0;
    },
    get once() {
      return eb = Zg = !0;
    }
  };
  Yp && (window.addEventListener("test", xg, xg), window.removeEventListener("test", xg, !0));
} catch {
}
function yj(n, a, o, u) {
  if (u && typeof u != "boolean" && !eb) {
    var l = u.once, f = u.capture, d = o;
    !eb && l && (d = o.__once || function m(g) {
      this.removeEventListener(a, m, f), o.call(this, g);
    }, o.__once = d), n.addEventListener(a, d, Zg ? u : f);
  }
  n.addEventListener(a, o, u);
}
function gj(n, a, o, u) {
  var l = u && typeof u != "boolean" ? u.capture : u;
  n.removeEventListener(a, o, l), o.__once && n.removeEventListener(a, o.__once, l);
}
function Dp(n, a, o, u) {
  return yj(n, a, o, u), function() {
    gj(n, a, o, u);
  };
}
function bj(n, a, o, u) {
  if (u === void 0 && (u = !0), n) {
    var l = document.createEvent("HTMLEvents");
    l.initEvent(a, o, u), n.dispatchEvent(l);
  }
}
function Sj(n) {
  var a = Li(n, "transitionDuration") || "", o = a.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(a) * o;
}
function Ej(n, a, o) {
  o === void 0 && (o = 5);
  var u = !1, l = setTimeout(function() {
    u || bj(n, "transitionend", !0);
  }, a + o), f = Dp(n, "transitionend", function() {
    u = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(l), f();
  };
}
function _j(n, a, o, u) {
  o == null && (o = Sj(n) || 0);
  var l = Ej(n, o, u), f = Dp(n, "transitionend", a);
  return function() {
    l(), f();
  };
}
function TR(n, a) {
  const o = Li(n, a) || "", u = o.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(o) * u;
}
function hb(n, a) {
  const o = TR(n, "transitionDuration"), u = TR(n, "transitionDelay"), l = _j(n, (f) => {
    f.target === n && (l(), a(f));
  }, o + u);
}
function Ic(...n) {
  return n.filter((a) => a != null).reduce((a, o) => {
    if (typeof o != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return a === null ? o : function(...l) {
      a.apply(this, l), o.apply(this, l);
    };
  }, null);
}
function Dx(n) {
  n.offsetHeight;
}
const CR = (n) => !n || typeof n == "function" ? n : (a) => {
  n.current = a;
};
function Tj(n, a) {
  const o = CR(n), u = CR(a);
  return (l) => {
    o && o(l), u && u(l);
  };
}
function Cj(n, a) {
  return M.useMemo(() => Tj(n, a), [n, a]);
}
function Rj(n) {
  return n && "setState" in n ? Fu.findDOMNode(n) : n ?? null;
}
const vb = /* @__PURE__ */ ei.forwardRef(({
  onEnter: n,
  onEntering: a,
  onEntered: o,
  onExit: u,
  onExiting: l,
  onExited: f,
  addEndListener: d,
  children: m,
  childRef: g,
  ...y
}, _) => {
  const R = M.useRef(null), T = Cj(R, g), w = (de) => {
    T(Rj(de));
  }, D = (de) => (Z) => {
    de && R.current && de(R.current, Z);
  }, P = M.useCallback(D(n), [n]), Y = M.useCallback(D(a), [a]), H = M.useCallback(D(o), [o]), Q = M.useCallback(D(u), [u]), V = M.useCallback(D(l), [l]), ae = M.useCallback(D(f), [f]), oe = M.useCallback(D(d), [d]);
  return /* @__PURE__ */ z.jsx(Ii, {
    ref: _,
    ...y,
    onEnter: P,
    onEntered: H,
    onEntering: Y,
    onExit: Q,
    onExited: ae,
    onExiting: V,
    addEndListener: oe,
    nodeRef: R,
    children: typeof m == "function" ? (de, Z) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      m(de, {
        ...Z,
        ref: w
      })
    ) : /* @__PURE__ */ ei.cloneElement(m, {
      ref: w
    })
  });
}), xj = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function wj(n, a) {
  const o = `offset${n[0].toUpperCase()}${n.slice(1)}`, u = a[o], l = xj[n];
  return u + // @ts-ignore
  parseInt(Li(a, l[0]), 10) + // @ts-ignore
  parseInt(Li(a, l[1]), 10);
}
const Oj = {
  [Eo]: "collapse",
  [Kc]: "collapsing",
  [La]: "collapsing",
  [Di]: "collapse show"
}, Aj = /* @__PURE__ */ ei.forwardRef(({
  onEnter: n,
  onEntering: a,
  onEntered: o,
  onExit: u,
  onExiting: l,
  className: f,
  children: d,
  dimension: m = "height",
  in: g = !1,
  timeout: y = 300,
  mountOnEnter: _ = !1,
  unmountOnExit: R = !1,
  appear: T = !1,
  getDimensionValue: w = wj,
  ...D
}, P) => {
  const Y = typeof m == "function" ? m() : m, H = M.useMemo(() => Ic((de) => {
    de.style[Y] = "0";
  }, n), [Y, n]), Q = M.useMemo(() => Ic((de) => {
    const Z = `scroll${Y[0].toUpperCase()}${Y.slice(1)}`;
    de.style[Y] = `${de[Z]}px`;
  }, a), [Y, a]), V = M.useMemo(() => Ic((de) => {
    de.style[Y] = null;
  }, o), [Y, o]), ae = M.useMemo(() => Ic((de) => {
    de.style[Y] = `${w(Y, de)}px`, Dx(de);
  }, u), [u, w, Y]), oe = M.useMemo(() => Ic((de) => {
    de.style[Y] = null;
  }, l), [Y, l]);
  return /* @__PURE__ */ z.jsx(vb, {
    ref: P,
    addEndListener: hb,
    ...D,
    "aria-expanded": D.role ? g : null,
    onEnter: H,
    onEntering: Q,
    onEntered: V,
    onExit: ae,
    onExiting: oe,
    childRef: Gu(d),
    in: g,
    timeout: y,
    mountOnEnter: _,
    unmountOnExit: R,
    appear: T,
    children: (de, Z) => /* @__PURE__ */ ei.cloneElement(d, {
      ...Z,
      className: Je(f, d.props.className, Oj[de], Y === "width" && "collapse-horizontal")
    })
  });
});
function Dj(n) {
  const a = M.useRef(n);
  return M.useEffect(() => {
    a.current = n;
  }, [n]), a;
}
function Gp(n) {
  const a = Dj(n);
  return M.useCallback(function(...o) {
    return a.current && a.current(...o);
  }, [a]);
}
const mb = (n) => /* @__PURE__ */ M.forwardRef((a, o) => /* @__PURE__ */ z.jsx("div", {
  ...a,
  ref: o,
  className: Je(a.className, n)
}));
function kj(n) {
  const a = M.useRef(n);
  return M.useEffect(() => {
    a.current = n;
  }, [n]), a;
}
function ki(n) {
  const a = kj(n);
  return M.useCallback(function(...o) {
    return a.current && a.current(...o);
  }, [a]);
}
function Lj() {
  const n = M.useRef(!0), a = M.useRef(() => n.current);
  return M.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []), a.current;
}
function Nj(n) {
  const a = M.useRef(null);
  return M.useEffect(() => {
    a.current = n;
  }), a.current;
}
const Mj = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", Ij = typeof document < "u", RR = Ij || Mj ? M.useLayoutEffect : M.useEffect, Uj = ["as", "disabled"];
function jj(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n) if ({}.hasOwnProperty.call(n, u)) {
    if (a.indexOf(u) >= 0) continue;
    o[u] = n[u];
  }
  return o;
}
function Fj(n) {
  return !n || n.trim() === "#";
}
function yb({
  tagName: n,
  disabled: a,
  href: o,
  target: u,
  rel: l,
  role: f,
  onClick: d,
  tabIndex: m = 0,
  type: g
}) {
  n || (o != null || u != null || l != null ? n = "a" : n = "button");
  const y = {
    tagName: n
  };
  if (n === "button")
    return [{
      type: g || "button",
      disabled: a
    }, y];
  const _ = (T) => {
    if ((a || n === "a" && Fj(o)) && T.preventDefault(), a) {
      T.stopPropagation();
      return;
    }
    d == null || d(T);
  }, R = (T) => {
    T.key === " " && (T.preventDefault(), _(T));
  };
  return n === "a" && (o || (o = "#"), a && (o = void 0)), [{
    role: f ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: a ? void 0 : m,
    href: o,
    target: n === "a" ? u : void 0,
    "aria-disabled": a || void 0,
    rel: n === "a" ? l : void 0,
    onClick: _,
    onKeyDown: R
  }, y];
}
const kx = /* @__PURE__ */ M.forwardRef((n, a) => {
  let {
    as: o,
    disabled: u
  } = n, l = jj(n, Uj);
  const [f, {
    tagName: d
  }] = yb(Object.assign({
    tagName: o,
    disabled: u
  }, l));
  return /* @__PURE__ */ z.jsx(d, Object.assign({}, l, f, {
    ref: a
  }));
});
kx.displayName = "Button";
const zj = ["onKeyDown"];
function Pj(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n) if ({}.hasOwnProperty.call(n, u)) {
    if (a.indexOf(u) >= 0) continue;
    o[u] = n[u];
  }
  return o;
}
function Bj(n) {
  return !n || n.trim() === "#";
}
const Lx = /* @__PURE__ */ M.forwardRef((n, a) => {
  let {
    onKeyDown: o
  } = n, u = Pj(n, zj);
  const [l] = yb(Object.assign({
    tagName: "a"
  }, u)), f = ki((d) => {
    l.onKeyDown(d), o == null || o(d);
  });
  return Bj(u.href) || u.role === "button" ? /* @__PURE__ */ z.jsx("a", Object.assign({
    ref: a
  }, u, l, {
    onKeyDown: f
  })) : /* @__PURE__ */ z.jsx("a", Object.assign({
    ref: a
  }, u, {
    onKeyDown: o
  }));
});
Lx.displayName = "Anchor";
const $j = {
  [La]: "show",
  [Di]: "show"
}, Nx = /* @__PURE__ */ M.forwardRef(({
  className: n,
  children: a,
  transitionClasses: o = {},
  onEnter: u,
  ...l
}, f) => {
  const d = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    ...l
  }, m = M.useCallback((g, y) => {
    Dx(g), u == null || u(g, y);
  }, [u]);
  return /* @__PURE__ */ z.jsx(vb, {
    ref: f,
    addEndListener: hb,
    ...d,
    onEnter: m,
    childRef: Gu(a),
    children: (g, y) => /* @__PURE__ */ M.cloneElement(a, {
      ...y,
      className: Je("fade", n, a.props.className, $j[g], o[g])
    })
  });
});
Nx.displayName = "Fade";
const Hj = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": Qe.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: Qe.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: Qe.oneOf(["white"])
}, gb = /* @__PURE__ */ M.forwardRef(({
  className: n,
  variant: a,
  "aria-label": o = "Close",
  ...u
}, l) => /* @__PURE__ */ z.jsx("button", {
  ref: l,
  type: "button",
  className: Je("btn-close", a && `btn-close-${a}`, n),
  "aria-label": o,
  ...u
}));
gb.displayName = "CloseButton";
gb.propTypes = Hj;
const tb = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  bg: a = "primary",
  pill: o = !1,
  text: u,
  className: l,
  as: f = "span",
  ...d
}, m) => {
  const g = pt(n, "badge");
  return /* @__PURE__ */ z.jsx(f, {
    ref: m,
    ...d,
    className: Je(l, g, o && "rounded-pill", u && `text-${u}`, a && `bg-${a}`)
  });
});
tb.displayName = "Badge";
const Nr = /* @__PURE__ */ M.forwardRef(({
  as: n,
  bsPrefix: a,
  variant: o = "primary",
  size: u,
  active: l = !1,
  disabled: f = !1,
  className: d,
  ...m
}, g) => {
  const y = pt(a, "btn"), [_, {
    tagName: R
  }] = yb({
    tagName: n,
    disabled: f,
    ...m
  }), T = R;
  return /* @__PURE__ */ z.jsx(T, {
    ..._,
    ...m,
    ref: g,
    disabled: f,
    className: Je(d, y, l && "active", o && `${y}-${o}`, u && `${y}-${u}`, m.href && f && "disabled")
  });
});
Nr.displayName = "Button";
const bb = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "div",
  ...u
}, l) => (a = pt(a, "card-body"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
bb.displayName = "CardBody";
const Mx = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "div",
  ...u
}, l) => (a = pt(a, "card-footer"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
Mx.displayName = "CardFooter";
const Sb = /* @__PURE__ */ M.createContext(null);
Sb.displayName = "CardHeaderContext";
const Ix = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: o = "div",
  ...u
}, l) => {
  const f = pt(n, "card-header"), d = M.useMemo(() => ({
    cardHeaderBsPrefix: f
  }), [f]);
  return /* @__PURE__ */ z.jsx(Sb.Provider, {
    value: d,
    children: /* @__PURE__ */ z.jsx(o, {
      ref: l,
      ...u,
      className: Je(a, f)
    })
  });
});
Ix.displayName = "CardHeader";
const Ux = /* @__PURE__ */ M.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: n,
    className: a,
    variant: o,
    as: u = "img",
    ...l
  }, f) => {
    const d = pt(n, "card-img");
    return /* @__PURE__ */ z.jsx(u, {
      ref: f,
      className: Je(o ? `${d}-${o}` : d, a),
      ...l
    });
  }
);
Ux.displayName = "CardImg";
const jx = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "div",
  ...u
}, l) => (a = pt(a, "card-img-overlay"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
jx.displayName = "CardImgOverlay";
const Fx = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "a",
  ...u
}, l) => (a = pt(a, "card-link"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
Fx.displayName = "CardLink";
const Vj = mb("h6"), zx = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = Vj,
  ...u
}, l) => (a = pt(a, "card-subtitle"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
zx.displayName = "CardSubtitle";
const Px = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "p",
  ...u
}, l) => (a = pt(a, "card-text"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
Px.displayName = "CardText";
const qj = mb("h5"), Bx = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = qj,
  ...u
}, l) => (a = pt(a, "card-title"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
Bx.displayName = "CardTitle";
const $x = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  bg: o,
  text: u,
  border: l,
  body: f = !1,
  children: d,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: m = "div",
  ...g
}, y) => {
  const _ = pt(n, "card");
  return /* @__PURE__ */ z.jsx(m, {
    ref: y,
    ...g,
    className: Je(a, _, o && `bg-${o}`, u && `text-${u}`, l && `border-${l}`),
    children: f ? /* @__PURE__ */ z.jsx(bb, {
      children: d
    }) : d
  });
});
$x.displayName = "Card";
const Uc = Object.assign($x, {
  Img: Ux,
  Title: Bx,
  Subtitle: zx,
  Body: bb,
  Link: Fx,
  Text: Px,
  Header: Ix,
  Footer: Mx,
  ImgOverlay: jx
});
function Yj(n, a) {
  return M.Children.toArray(n).some((o) => /* @__PURE__ */ M.isValidElement(o) && o.type === a);
}
function Gj({
  as: n,
  bsPrefix: a,
  className: o,
  ...u
}) {
  a = pt(a, "col");
  const l = fb(), f = db(), d = [], m = [];
  return l.forEach((g) => {
    const y = u[g];
    delete u[g];
    let _, R, T;
    typeof y == "object" && y != null ? {
      span: _,
      offset: R,
      order: T
    } = y : _ = y;
    const w = g !== f ? `-${g}` : "";
    _ && d.push(_ === !0 ? `${a}${w}` : `${a}${w}-${_}`), T != null && m.push(`order${w}-${T}`), R != null && m.push(`offset${w}-${R}`);
  }), [{
    ...u,
    className: Je(o, ...d, ...m)
  }, {
    as: n,
    bsPrefix: a,
    spans: d
  }];
}
const qc = /* @__PURE__ */ M.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (n, a) => {
    const [{
      className: o,
      ...u
    }, {
      as: l = "div",
      bsPrefix: f,
      spans: d
    }] = Gj(n);
    return /* @__PURE__ */ z.jsx(l, {
      ...u,
      ref: a,
      className: Je(o, !d.length && f)
    });
  }
);
qc.displayName = "Col";
const Vc = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  fluid: a = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: o = "div",
  className: u,
  ...l
}, f) => {
  const d = pt(n, "container"), m = typeof a == "string" ? `-${a}` : "-fluid";
  return /* @__PURE__ */ z.jsx(o, {
    ref: f,
    ...l,
    className: Je(u, a ? `${d}${m}` : d)
  });
});
Vc.displayName = "Container";
var Wj = Function.prototype.bind.call(Function.prototype.call, [].slice);
function ms(n, a) {
  return Wj(n.querySelectorAll(a));
}
function Kj() {
  const [, n] = M.useReducer((a) => a + 1, 0);
  return n;
}
function xR(n, a) {
  if (n.contains) return n.contains(a);
  if (n.compareDocumentPosition) return n === a || !!(n.compareDocumentPosition(a) & 16);
}
var wg, wR;
function Xj() {
  if (wR) return wg;
  wR = 1;
  var n = function() {
  };
  {
    var a = function(u, l) {
      var f = arguments.length;
      l = new Array(f > 1 ? f - 1 : 0);
      for (var d = 1; d < f; d++)
        l[d - 1] = arguments[d];
      var m = 0, g = "Warning: " + u.replace(/%s/g, function() {
        return l[m++];
      });
      typeof console < "u" && console.error(g);
      try {
        throw new Error(g);
      } catch {
      }
    };
    n = function(o, u, l) {
      var f = arguments.length;
      l = new Array(f > 2 ? f - 2 : 0);
      for (var d = 2; d < f; d++)
        l[d - 2] = arguments[d];
      if (u === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      o || a.apply(null, [u].concat(l));
    };
  }
  return wg = n, wg;
}
var Qj = Xj();
const Hx = /* @__PURE__ */ Rs(Qj), kp = /* @__PURE__ */ M.createContext(null), Eb = (n, a = null) => n != null ? String(n) : a || null, _b = /* @__PURE__ */ M.createContext(null);
_b.displayName = "NavContext";
const Jj = "data-rr-ui-", Zj = "rrUi";
function Wp(n) {
  return `${Jj}${n}`;
}
function eF(n) {
  return `${Zj}${n}`;
}
const Vx = /* @__PURE__ */ M.createContext(Yp ? window : void 0);
Vx.Provider;
function Tb() {
  return M.useContext(Vx);
}
const tF = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", nF = typeof document < "u", rF = nF || tF ? M.useLayoutEffect : M.useEffect, Wu = /* @__PURE__ */ M.createContext(null);
Wu.displayName = "NavbarContext";
const aF = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: Qe.string,
  /** Display feedback as a tooltip. */
  tooltip: Qe.bool,
  as: Qe.elementType
}, Kp = /* @__PURE__ */ M.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: n = "div",
    className: a,
    type: o = "valid",
    tooltip: u = !1,
    ...l
  }, f) => /* @__PURE__ */ z.jsx(n, {
    ...l,
    ref: f,
    className: Je(a, `${o}-${u ? "tooltip" : "feedback"}`)
  })
);
Kp.displayName = "Feedback";
Kp.propTypes = aF;
const Ni = /* @__PURE__ */ M.createContext({}), Cb = /* @__PURE__ */ M.forwardRef(({
  id: n,
  bsPrefix: a,
  className: o,
  type: u = "checkbox",
  isValid: l = !1,
  isInvalid: f = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: d = "input",
  ...m
}, g) => {
  const {
    controlId: y
  } = M.useContext(Ni);
  return a = pt(a, "form-check-input"), /* @__PURE__ */ z.jsx(d, {
    ...m,
    ref: g,
    type: u,
    id: n || y,
    className: Je(o, a, l && "is-valid", f && "is-invalid")
  });
});
Cb.displayName = "FormCheckInput";
const Lp = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  htmlFor: o,
  ...u
}, l) => {
  const {
    controlId: f
  } = M.useContext(Ni);
  return n = pt(n, "form-check-label"), /* @__PURE__ */ z.jsx("label", {
    ...u,
    ref: l,
    htmlFor: o || f,
    className: Je(a, n)
  });
});
Lp.displayName = "FormCheckLabel";
const qx = /* @__PURE__ */ M.forwardRef(({
  id: n,
  bsPrefix: a,
  bsSwitchPrefix: o,
  inline: u = !1,
  reverse: l = !1,
  disabled: f = !1,
  isValid: d = !1,
  isInvalid: m = !1,
  feedbackTooltip: g = !1,
  feedback: y,
  feedbackType: _,
  className: R,
  style: T,
  title: w = "",
  type: D = "checkbox",
  label: P,
  children: Y,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: H = "input",
  ...Q
}, V) => {
  a = pt(a, "form-check"), o = pt(o, "form-switch");
  const {
    controlId: ae
  } = M.useContext(Ni), oe = M.useMemo(() => ({
    controlId: n || ae
  }), [ae, n]), de = !Y && P != null && P !== !1 || Yj(Y, Lp), Z = /* @__PURE__ */ z.jsx(Cb, {
    ...Q,
    type: D === "switch" ? "checkbox" : D,
    ref: V,
    isValid: d,
    isInvalid: m,
    disabled: f,
    as: H
  });
  return /* @__PURE__ */ z.jsx(Ni.Provider, {
    value: oe,
    children: /* @__PURE__ */ z.jsx("div", {
      style: T,
      className: Je(R, de && a, u && `${a}-inline`, l && `${a}-reverse`, D === "switch" && o),
      children: Y || /* @__PURE__ */ z.jsxs(z.Fragment, {
        children: [Z, de && /* @__PURE__ */ z.jsx(Lp, {
          title: w,
          children: P
        }), y && /* @__PURE__ */ z.jsx(Kp, {
          type: _,
          tooltip: g,
          children: y
        })]
      })
    })
  });
});
qx.displayName = "FormCheck";
const Np = Object.assign(qx, {
  Input: Cb,
  Label: Lp
}), Yx = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  type: a,
  size: o,
  htmlSize: u,
  id: l,
  className: f,
  isValid: d = !1,
  isInvalid: m = !1,
  plaintext: g,
  readOnly: y,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: _ = "input",
  ...R
}, T) => {
  const {
    controlId: w
  } = M.useContext(Ni);
  return n = pt(n, "form-control"), Hx(w == null || !l, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ z.jsx(_, {
    ...R,
    type: a,
    size: u,
    ref: T,
    readOnly: y,
    id: l || w,
    className: Je(f, g ? `${n}-plaintext` : n, o && `${n}-${o}`, a === "color" && `${n}-color`, d && "is-valid", m && "is-invalid")
  });
});
Yx.displayName = "FormControl";
const Gx = Object.assign(Yx, {
  Feedback: Kp
}), Wx = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "div",
  ...u
}, l) => (a = pt(a, "form-floating"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
Wx.displayName = "FormFloating";
const Rb = /* @__PURE__ */ M.forwardRef(({
  controlId: n,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "div",
  ...o
}, u) => {
  const l = M.useMemo(() => ({
    controlId: n
  }), [n]);
  return /* @__PURE__ */ z.jsx(Ni.Provider, {
    value: l,
    children: /* @__PURE__ */ z.jsx(a, {
      ...o,
      ref: u
    })
  });
});
Rb.displayName = "FormGroup";
const Kx = /* @__PURE__ */ M.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: n = "label",
  bsPrefix: a,
  column: o = !1,
  visuallyHidden: u = !1,
  className: l,
  htmlFor: f,
  ...d
}, m) => {
  const {
    controlId: g
  } = M.useContext(Ni);
  a = pt(a, "form-label");
  let y = "col-form-label";
  typeof o == "string" && (y = `${y} ${y}-${o}`);
  const _ = Je(l, a, u && "visually-hidden", o && y);
  return Hx(g == null || !f, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), f = f || g, o ? /* @__PURE__ */ z.jsx(qc, {
    ref: m,
    as: "label",
    className: _,
    htmlFor: f,
    ...d
  }) : (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    /* @__PURE__ */ z.jsx(n, {
      ref: m,
      className: _,
      htmlFor: f,
      ...d
    })
  );
});
Kx.displayName = "FormLabel";
const Xx = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  id: o,
  ...u
}, l) => {
  const {
    controlId: f
  } = M.useContext(Ni);
  return n = pt(n, "form-range"), /* @__PURE__ */ z.jsx("input", {
    ...u,
    type: "range",
    ref: l,
    className: Je(a, n),
    id: o || f
  });
});
Xx.displayName = "FormRange";
const Qx = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  size: a,
  htmlSize: o,
  className: u,
  isValid: l = !1,
  isInvalid: f = !1,
  id: d,
  ...m
}, g) => {
  const {
    controlId: y
  } = M.useContext(Ni);
  return n = pt(n, "form-select"), /* @__PURE__ */ z.jsx("select", {
    ...m,
    size: o,
    ref: g,
    className: Je(u, n, a && `${n}-${a}`, l && "is-valid", f && "is-invalid"),
    id: d || y
  });
});
Qx.displayName = "FormSelect";
const Jx = /* @__PURE__ */ M.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: n,
    className: a,
    as: o = "small",
    muted: u,
    ...l
  }, f) => (n = pt(n, "form-text"), /* @__PURE__ */ z.jsx(o, {
    ...l,
    ref: f,
    className: Je(a, n, u && "text-muted")
  }))
);
Jx.displayName = "FormText";
const Zx = /* @__PURE__ */ M.forwardRef((n, a) => /* @__PURE__ */ z.jsx(Np, {
  ...n,
  ref: a,
  type: "switch"
}));
Zx.displayName = "Switch";
const iF = Object.assign(Zx, {
  Input: Np.Input,
  Label: Np.Label
}), ew = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  children: o,
  controlId: u,
  label: l,
  ...f
}, d) => (n = pt(n, "form-floating"), /* @__PURE__ */ z.jsxs(Rb, {
  ref: d,
  className: Je(a, n),
  controlId: u,
  ...f,
  children: [o, /* @__PURE__ */ z.jsx("label", {
    htmlFor: u,
    children: l
  })]
})));
ew.displayName = "FloatingLabel";
const oF = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: Qe.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: Qe.bool,
  as: Qe.elementType
}, xb = /* @__PURE__ */ M.forwardRef(({
  className: n,
  validated: a,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: o = "form",
  ...u
}, l) => /* @__PURE__ */ z.jsx(o, {
  ...u,
  ref: l,
  className: Je(n, a && "was-validated")
}));
xb.displayName = "Form";
xb.propTypes = oF;
const sF = Object.assign(xb, {
  Group: Rb,
  Control: Gx,
  Floating: Wx,
  Check: Np,
  Switch: iF,
  Label: Kx,
  Text: Jx,
  Range: Xx,
  Select: Qx,
  FloatingLabel: ew
}), OR = (n) => !n || typeof n == "function" ? n : (a) => {
  n.current = a;
};
function uF(n, a) {
  const o = OR(n), u = OR(a);
  return (l) => {
    o && o(l), u && u(l);
  };
}
function Xp(n, a) {
  return M.useMemo(() => uF(n, a), [n, a]);
}
const tw = /* @__PURE__ */ M.createContext(null), lF = ["as", "active", "eventKey"];
function cF(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n) if ({}.hasOwnProperty.call(n, u)) {
    if (a.indexOf(u) >= 0) continue;
    o[u] = n[u];
  }
  return o;
}
function nw({
  key: n,
  onClick: a,
  active: o,
  id: u,
  role: l,
  disabled: f
}) {
  const d = M.useContext(kp), m = M.useContext(_b), g = M.useContext(tw);
  let y = o;
  const _ = {
    role: l
  };
  if (m) {
    !l && m.role === "tablist" && (_.role = "tab");
    const R = m.getControllerId(n ?? null), T = m.getControlledId(n ?? null);
    _[Wp("event-key")] = n, _.id = R || u, y = o == null && n != null ? m.activeKey === n : o, (y || !(g != null && g.unmountOnExit) && !(g != null && g.mountOnEnter)) && (_["aria-controls"] = T);
  }
  return _.role === "tab" && (_["aria-selected"] = y, y || (_.tabIndex = -1), f && (_.tabIndex = -1, _["aria-disabled"] = !0)), _.onClick = ki((R) => {
    f || (a == null || a(R), n != null && d && !R.isPropagationStopped() && d(n, R));
  }), [_, {
    isActive: y
  }];
}
const rw = /* @__PURE__ */ M.forwardRef((n, a) => {
  let {
    as: o = kx,
    active: u,
    eventKey: l
  } = n, f = cF(n, lF);
  const [d, m] = nw(Object.assign({
    key: Eb(l, f.href),
    active: u
  }, f));
  return d[Wp("active")] = m.isActive, /* @__PURE__ */ z.jsx(o, Object.assign({}, f, d, {
    ref: a
  }));
});
rw.displayName = "NavItem";
const fF = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function dF(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n) if ({}.hasOwnProperty.call(n, u)) {
    if (a.indexOf(u) >= 0) continue;
    o[u] = n[u];
  }
  return o;
}
const AR = () => {
}, DR = Wp("event-key"), aw = /* @__PURE__ */ M.forwardRef((n, a) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: o = "div",
    onSelect: u,
    activeKey: l,
    role: f,
    onKeyDown: d
  } = n, m = dF(n, fF);
  const g = Kj(), y = M.useRef(!1), _ = M.useContext(kp), R = M.useContext(tw);
  let T, w;
  R && (f = f || "tablist", l = R.activeKey, T = R.getControlledId, w = R.getControllerId);
  const D = M.useRef(null), P = (V) => {
    const ae = D.current;
    if (!ae) return null;
    const oe = ms(ae, `[${DR}]:not([aria-disabled=true])`), de = ae.querySelector("[aria-selected=true]");
    if (!de || de !== document.activeElement) return null;
    const Z = oe.indexOf(de);
    if (Z === -1) return null;
    let Ie = Z + V;
    return Ie >= oe.length && (Ie = 0), Ie < 0 && (Ie = oe.length - 1), oe[Ie];
  }, Y = (V, ae) => {
    V != null && (u == null || u(V, ae), _ == null || _(V, ae));
  }, H = (V) => {
    if (d == null || d(V), !R)
      return;
    let ae;
    switch (V.key) {
      case "ArrowLeft":
      case "ArrowUp":
        ae = P(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        ae = P(1);
        break;
      default:
        return;
    }
    ae && (V.preventDefault(), Y(ae.dataset[eF("EventKey")] || null, V), y.current = !0, g());
  };
  M.useEffect(() => {
    if (D.current && y.current) {
      const V = D.current.querySelector(`[${DR}][aria-selected=true]`);
      V == null || V.focus();
    }
    y.current = !1;
  });
  const Q = Xp(a, D);
  return /* @__PURE__ */ z.jsx(kp.Provider, {
    value: Y,
    children: /* @__PURE__ */ z.jsx(_b.Provider, {
      value: {
        role: f,
        // used by NavLink to determine it's role
        activeKey: Eb(l),
        getControlledId: T || AR,
        getControllerId: w || AR
      },
      children: /* @__PURE__ */ z.jsx(o, Object.assign({}, m, {
        onKeyDown: H,
        ref: Q,
        role: f
      }))
    })
  });
});
aw.displayName = "Nav";
const pF = Object.assign(aw, {
  Item: rw
});
function Og(n) {
  n === void 0 && (n = pb());
  try {
    var a = n.activeElement;
    return !a || !a.nodeName ? null : a;
  } catch {
    return n.body;
  }
}
function hF(n) {
  const a = M.useRef(n);
  return a.current = n, a;
}
function vF(n) {
  const a = hF(n);
  M.useEffect(() => () => a.current(), []);
}
function mF(n = document) {
  const a = n.defaultView;
  return Math.abs(a.innerWidth - n.documentElement.clientWidth);
}
const kR = Wp("modal-open");
class wb {
  constructor({
    ownerDocument: a,
    handleContainerOverflow: o = !0,
    isRTL: u = !1
  } = {}) {
    this.handleContainerOverflow = o, this.isRTL = u, this.modals = [], this.ownerDocument = a;
  }
  getScrollbarWidth() {
    return mF(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(a) {
  }
  removeModalAttributes(a) {
  }
  setContainerStyle(a) {
    const o = {
      overflow: "hidden"
    }, u = this.isRTL ? "paddingLeft" : "paddingRight", l = this.getElement();
    a.style = {
      overflow: l.style.overflow,
      [u]: l.style[u]
    }, a.scrollBarWidth && (o[u] = `${parseInt(Li(l, u) || "0", 10) + a.scrollBarWidth}px`), l.setAttribute(kR, ""), Li(l, o);
  }
  reset() {
    [...this.modals].forEach((a) => this.remove(a));
  }
  removeContainerStyle(a) {
    const o = this.getElement();
    o.removeAttribute(kR), Object.assign(o.style, a.style);
  }
  add(a) {
    let o = this.modals.indexOf(a);
    return o !== -1 || (o = this.modals.length, this.modals.push(a), this.setModalAttributes(a), o !== 0) || (this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), o;
  }
  remove(a) {
    const o = this.modals.indexOf(a);
    o !== -1 && (this.modals.splice(o, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(a));
  }
  isTopModal(a) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === a;
  }
}
const Ag = (n, a) => Yp ? n == null ? (a || pb()).body : (typeof n == "function" && (n = n()), n && "current" in n && (n = n.current), n && ("nodeType" in n || n.getBoundingClientRect) ? n : null) : null;
function yF(n, a) {
  const o = Tb(), [u, l] = M.useState(() => Ag(n, o == null ? void 0 : o.document));
  if (!u) {
    const f = Ag(n);
    f && l(f);
  }
  return M.useEffect(() => {
  }, [a, u]), M.useEffect(() => {
    const f = Ag(n);
    f !== u && l(f);
  }, [n, u]), u;
}
function gF({
  children: n,
  in: a,
  onExited: o,
  mountOnEnter: u,
  unmountOnExit: l
}) {
  const f = M.useRef(null), d = M.useRef(a), m = ki(o);
  M.useEffect(() => {
    a ? d.current = !0 : m(f.current);
  }, [a, m]);
  const g = Xp(f, Gu(n)), y = /* @__PURE__ */ M.cloneElement(n, {
    ref: g
  });
  return a ? y : l || !d.current && u ? null : y;
}
const bF = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function SF(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n) if ({}.hasOwnProperty.call(n, u)) {
    if (a.indexOf(u) >= 0) continue;
    o[u] = n[u];
  }
  return o;
}
function EF(n) {
  let {
    onEnter: a,
    onEntering: o,
    onEntered: u,
    onExit: l,
    onExiting: f,
    onExited: d,
    addEndListener: m,
    children: g
  } = n, y = SF(n, bF);
  const _ = M.useRef(null), R = Xp(_, Gu(g)), T = (ae) => (oe) => {
    ae && _.current && ae(_.current, oe);
  }, w = M.useCallback(T(a), [a]), D = M.useCallback(T(o), [o]), P = M.useCallback(T(u), [u]), Y = M.useCallback(T(l), [l]), H = M.useCallback(T(f), [f]), Q = M.useCallback(T(d), [d]), V = M.useCallback(T(m), [m]);
  return Object.assign({}, y, {
    nodeRef: _
  }, a && {
    onEnter: w
  }, o && {
    onEntering: D
  }, u && {
    onEntered: P
  }, l && {
    onExit: Y
  }, f && {
    onExiting: H
  }, d && {
    onExited: Q
  }, m && {
    addEndListener: V
  }, {
    children: typeof g == "function" ? (ae, oe) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      g(ae, Object.assign({}, oe, {
        ref: R
      }))
    ) : /* @__PURE__ */ M.cloneElement(g, {
      ref: R
    })
  });
}
const _F = ["component"];
function TF(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n) if ({}.hasOwnProperty.call(n, u)) {
    if (a.indexOf(u) >= 0) continue;
    o[u] = n[u];
  }
  return o;
}
const CF = /* @__PURE__ */ M.forwardRef((n, a) => {
  let {
    component: o
  } = n, u = TF(n, _F);
  const l = EF(u);
  return /* @__PURE__ */ z.jsx(o, Object.assign({
    ref: a
  }, l));
});
function RF({
  in: n,
  onTransition: a
}) {
  const o = M.useRef(null), u = M.useRef(!0), l = ki(a);
  return RR(() => {
    if (!o.current)
      return;
    let f = !1;
    return l({
      in: n,
      element: o.current,
      initial: u.current,
      isStale: () => f
    }), () => {
      f = !0;
    };
  }, [n, l]), RR(() => (u.current = !1, () => {
    u.current = !0;
  }), []), o;
}
function xF({
  children: n,
  in: a,
  onExited: o,
  onEntered: u,
  transition: l
}) {
  const [f, d] = M.useState(!a);
  a && f && d(!1);
  const m = RF({
    in: !!a,
    onTransition: (y) => {
      const _ = () => {
        y.isStale() || (y.in ? u == null || u(y.element, y.initial) : (d(!0), o == null || o(y.element)));
      };
      Promise.resolve(l(y)).then(_, (R) => {
        throw y.in || d(!0), R;
      });
    }
  }), g = Xp(m, Gu(n));
  return f && !a ? null : /* @__PURE__ */ M.cloneElement(n, {
    ref: g
  });
}
function LR(n, a, o) {
  return n ? /* @__PURE__ */ z.jsx(CF, Object.assign({}, o, {
    component: n
  })) : a ? /* @__PURE__ */ z.jsx(xF, Object.assign({}, o, {
    transition: a
  })) : /* @__PURE__ */ z.jsx(gF, Object.assign({}, o));
}
const wF = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function OF(n, a) {
  if (n == null) return {};
  var o = {};
  for (var u in n) if ({}.hasOwnProperty.call(n, u)) {
    if (a.indexOf(u) >= 0) continue;
    o[u] = n[u];
  }
  return o;
}
let Dg;
function AF(n) {
  return Dg || (Dg = new wb({
    ownerDocument: n == null ? void 0 : n.document
  })), Dg;
}
function DF(n) {
  const a = Tb(), o = n || AF(a), u = M.useRef({
    dialog: null,
    backdrop: null
  });
  return Object.assign(u.current, {
    add: () => o.add(u.current),
    remove: () => o.remove(u.current),
    isTopModal: () => o.isTopModal(u.current),
    setDialogRef: M.useCallback((l) => {
      u.current.dialog = l;
    }, []),
    setBackdropRef: M.useCallback((l) => {
      u.current.backdrop = l;
    }, [])
  });
}
const iw = /* @__PURE__ */ M.forwardRef((n, a) => {
  let {
    show: o = !1,
    role: u = "dialog",
    className: l,
    style: f,
    children: d,
    backdrop: m = !0,
    keyboard: g = !0,
    onBackdropClick: y,
    onEscapeKeyDown: _,
    transition: R,
    runTransition: T,
    backdropTransition: w,
    runBackdropTransition: D,
    autoFocus: P = !0,
    enforceFocus: Y = !0,
    restoreFocus: H = !0,
    restoreFocusOptions: Q,
    renderDialog: V,
    renderBackdrop: ae = (et) => /* @__PURE__ */ z.jsx("div", Object.assign({}, et)),
    manager: oe,
    container: de,
    onShow: Z,
    onHide: Ie = () => {
    },
    onExit: ft,
    onExited: Lt,
    onExiting: Ot,
    onEnter: rt,
    onEntering: we,
    onEntered: Ze
  } = n, ht = OF(n, wF);
  const Ge = Tb(), Oe = yF(de), Fe = DF(oe), qt = Lj(), X = Nj(o), [ie, se] = M.useState(!o), Ae = M.useRef(null);
  M.useImperativeHandle(a, () => Fe, [Fe]), Yp && !X && o && (Ae.current = Og(Ge == null ? void 0 : Ge.document)), o && ie && se(!1);
  const Se = ki(() => {
    if (Fe.add(), Ne.current = Dp(document, "keydown", $e), ze.current = Dp(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(Be),
      !0
    ), Z && Z(), P) {
      var et, cn;
      const Nn = Og((et = (cn = Fe.dialog) == null ? void 0 : cn.ownerDocument) != null ? et : Ge == null ? void 0 : Ge.document);
      Fe.dialog && Nn && !xR(Fe.dialog, Nn) && (Ae.current = Nn, Fe.dialog.focus());
    }
  }), Ue = ki(() => {
    if (Fe.remove(), Ne.current == null || Ne.current(), ze.current == null || ze.current(), H) {
      var et;
      (et = Ae.current) == null || et.focus == null || et.focus(Q), Ae.current = null;
    }
  });
  M.useEffect(() => {
    !o || !Oe || Se();
  }, [
    o,
    Oe,
    /* should never change: */
    Se
  ]), M.useEffect(() => {
    ie && Ue();
  }, [ie, Ue]), vF(() => {
    Ue();
  });
  const Be = ki(() => {
    if (!Y || !qt() || !Fe.isTopModal())
      return;
    const et = Og(Ge == null ? void 0 : Ge.document);
    Fe.dialog && et && !xR(Fe.dialog, et) && Fe.dialog.focus();
  }), ke = ki((et) => {
    et.target === et.currentTarget && (y == null || y(et), m === !0 && Ie());
  }), $e = ki((et) => {
    g && vj(et) && Fe.isTopModal() && (_ == null || _(et), et.defaultPrevented || Ie());
  }), ze = M.useRef(), Ne = M.useRef(), vt = (...et) => {
    se(!0), Lt == null || Lt(...et);
  };
  if (!Oe)
    return null;
  const ue = Object.assign({
    role: u,
    ref: Fe.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": u === "dialog" ? !0 : void 0
  }, ht, {
    style: f,
    className: l,
    tabIndex: -1
  });
  let xt = V ? V(ue) : /* @__PURE__ */ z.jsx("div", Object.assign({}, ue, {
    children: /* @__PURE__ */ M.cloneElement(d, {
      role: "document"
    })
  }));
  xt = LR(R, T, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!o,
    onExit: ft,
    onExiting: Ot,
    onExited: vt,
    onEnter: rt,
    onEntering: we,
    onEntered: Ze,
    children: xt
  });
  let Tt = null;
  return m && (Tt = ae({
    ref: Fe.setBackdropRef,
    onClick: ke
  }), Tt = LR(w, D, {
    in: !!o,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: Tt
  })), /* @__PURE__ */ z.jsx(z.Fragment, {
    children: /* @__PURE__ */ Fu.createPortal(/* @__PURE__ */ z.jsxs(z.Fragment, {
      children: [Tt, xt]
    }), Oe)
  });
});
iw.displayName = "Modal";
const kF = Object.assign(iw, {
  Manager: wb
});
function LF(n, a) {
  return n.classList ? n.classList.contains(a) : (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + a + " ") !== -1;
}
function NF(n, a) {
  n.classList ? n.classList.add(a) : LF(n, a) || (typeof n.className == "string" ? n.className = n.className + " " + a : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + a));
}
function NR(n, a) {
  return n.replace(new RegExp("(^|\\s)" + a + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function MF(n, a) {
  n.classList ? n.classList.remove(a) : typeof n.className == "string" ? n.className = NR(n.className, a) : n.setAttribute("class", NR(n.className && n.className.baseVal || "", a));
}
const Mu = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class ow extends wb {
  adjustAndStore(a, o, u) {
    const l = o.style[a];
    o.dataset[a] = l, Li(o, {
      [a]: `${parseFloat(Li(o, a)) + u}px`
    });
  }
  restore(a, o) {
    const u = o.dataset[a];
    u !== void 0 && (delete o.dataset[a], Li(o, {
      [a]: u
    }));
  }
  setContainerStyle(a) {
    super.setContainerStyle(a);
    const o = this.getElement();
    if (NF(o, "modal-open"), !a.scrollBarWidth) return;
    const u = this.isRTL ? "paddingLeft" : "paddingRight", l = this.isRTL ? "marginLeft" : "marginRight";
    ms(o, Mu.FIXED_CONTENT).forEach((f) => this.adjustAndStore(u, f, a.scrollBarWidth)), ms(o, Mu.STICKY_CONTENT).forEach((f) => this.adjustAndStore(l, f, -a.scrollBarWidth)), ms(o, Mu.NAVBAR_TOGGLER).forEach((f) => this.adjustAndStore(l, f, a.scrollBarWidth));
  }
  removeContainerStyle(a) {
    super.removeContainerStyle(a);
    const o = this.getElement();
    MF(o, "modal-open");
    const u = this.isRTL ? "paddingLeft" : "paddingRight", l = this.isRTL ? "marginLeft" : "marginRight";
    ms(o, Mu.FIXED_CONTENT).forEach((f) => this.restore(u, f)), ms(o, Mu.STICKY_CONTENT).forEach((f) => this.restore(l, f)), ms(o, Mu.NAVBAR_TOGGLER).forEach((f) => this.restore(l, f));
  }
}
let kg;
function IF(n) {
  return kg || (kg = new ow(n)), kg;
}
const sw = /* @__PURE__ */ M.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
}), UF = /* @__PURE__ */ M.forwardRef(({
  closeLabel: n = "Close",
  closeVariant: a,
  closeButton: o = !1,
  onHide: u,
  children: l,
  ...f
}, d) => {
  const m = M.useContext(sw), g = Gp(() => {
    m == null || m.onHide(), u == null || u();
  });
  return /* @__PURE__ */ z.jsxs("div", {
    ref: d,
    ...f,
    children: [l, o && /* @__PURE__ */ z.jsx(gb, {
      "aria-label": n,
      variant: a,
      onClick: g
    })]
  });
}), uw = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "div",
  ...u
}, l) => (a = pt(a, "nav-item"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
uw.displayName = "NavItem";
const lw = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  as: o = Lx,
  active: u,
  eventKey: l,
  disabled: f = !1,
  ...d
}, m) => {
  n = pt(n, "nav-link");
  const [g, y] = nw({
    key: Eb(l, d.href),
    active: u,
    disabled: f,
    ...d
  });
  return /* @__PURE__ */ z.jsx(o, {
    ...d,
    ...g,
    ref: m,
    disabled: f,
    className: Je(a, n, f && "disabled", y.isActive && "active")
  });
});
lw.displayName = "NavLink";
const cw = /* @__PURE__ */ M.forwardRef((n, a) => {
  const {
    as: o = "div",
    bsPrefix: u,
    variant: l,
    fill: f = !1,
    justify: d = !1,
    navbar: m,
    navbarScroll: g,
    className: y,
    activeKey: _,
    ...R
  } = Tx(n, {
    activeKey: "onSelect"
  }), T = pt(u, "nav");
  let w, D, P = !1;
  const Y = M.useContext(Wu), H = M.useContext(Sb);
  return Y ? (w = Y.bsPrefix, P = m ?? !0) : H && ({
    cardHeaderBsPrefix: D
  } = H), /* @__PURE__ */ z.jsx(pF, {
    as: o,
    ref: a,
    activeKey: _,
    className: Je(y, {
      [T]: !P,
      [`${w}-nav`]: P,
      [`${w}-nav-scroll`]: P && g,
      [`${D}-${l}`]: !!D,
      [`${T}-${l}`]: !!l,
      [`${T}-fill`]: f,
      [`${T}-justified`]: d
    }),
    ...R
  });
});
cw.displayName = "Nav";
const vp = Object.assign(cw, {
  Item: uw,
  Link: lw
}), fw = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  as: o,
  ...u
}, l) => {
  n = pt(n, "navbar-brand");
  const f = o || (u.href ? "a" : "span");
  return /* @__PURE__ */ z.jsx(f, {
    ...u,
    ref: l,
    className: Je(a, n)
  });
});
fw.displayName = "NavbarBrand";
const dw = /* @__PURE__ */ M.forwardRef(({
  children: n,
  bsPrefix: a,
  ...o
}, u) => {
  a = pt(a, "navbar-collapse");
  const l = M.useContext(Wu);
  return /* @__PURE__ */ z.jsx(Aj, {
    in: !!(l && l.expanded),
    ...o,
    children: /* @__PURE__ */ z.jsx("div", {
      ref: u,
      className: a,
      children: n
    })
  });
});
dw.displayName = "NavbarCollapse";
const pw = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  children: o,
  label: u = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: l = "button",
  onClick: f,
  ...d
}, m) => {
  n = pt(n, "navbar-toggler");
  const {
    onToggle: g,
    expanded: y
  } = M.useContext(Wu) || {}, _ = Gp((R) => {
    f && f(R), g && g();
  });
  return l === "button" && (d.type = "button"), /* @__PURE__ */ z.jsx(l, {
    ...d,
    ref: m,
    onClick: _,
    "aria-label": u,
    className: Je(a, n, !y && "collapsed"),
    children: o || /* @__PURE__ */ z.jsx("span", {
      className: `${n}-icon`
    })
  });
});
pw.displayName = "NavbarToggle";
const nb = /* @__PURE__ */ new WeakMap(), MR = (n, a) => {
  if (!n || !a) return;
  const o = nb.get(a) || /* @__PURE__ */ new Map();
  nb.set(a, o);
  let u = o.get(n);
  return u || (u = a.matchMedia(n), u.refCount = 0, o.set(u.media, u)), u;
};
function jF(n, a = typeof window > "u" ? void 0 : window) {
  const o = MR(n, a), [u, l] = M.useState(() => o ? o.matches : !1);
  return rF(() => {
    let f = MR(n, a);
    if (!f)
      return l(!1);
    let d = nb.get(a);
    const m = () => {
      l(f.matches);
    };
    return f.refCount++, f.addListener(m), m(), () => {
      f.removeListener(m), f.refCount--, f.refCount <= 0 && (d == null || d.delete(f.media)), f = void 0;
    };
  }, [n]), u;
}
function FF(n) {
  const a = Object.keys(n);
  function o(m, g) {
    return m === g ? g : m ? `${m} and ${g}` : g;
  }
  function u(m) {
    return a[Math.min(a.indexOf(m) + 1, a.length - 1)];
  }
  function l(m) {
    const g = u(m);
    let y = n[g];
    return typeof y == "number" ? y = `${y - 0.2}px` : y = `calc(${y} - 0.2px)`, `(max-width: ${y})`;
  }
  function f(m) {
    let g = n[m];
    return typeof g == "number" && (g = `${g}px`), `(min-width: ${g})`;
  }
  function d(m, g, y) {
    let _;
    typeof m == "object" ? (_ = m, y = g, g = !0) : (g = g || !0, _ = {
      [m]: g
    });
    let R = M.useMemo(() => Object.entries(_).reduce((T, [w, D]) => ((D === "up" || D === !0) && (T = o(T, f(w))), (D === "down" || D === !0) && (T = o(T, l(w))), T), ""), [JSON.stringify(_)]);
    return jF(R, y);
  }
  return d;
}
const zF = FF({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}), hw = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "div",
  ...u
}, l) => (a = pt(a, "offcanvas-body"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
hw.displayName = "OffcanvasBody";
const PF = {
  [La]: "show",
  [Di]: "show"
}, vw = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  children: o,
  in: u = !1,
  mountOnEnter: l = !1,
  unmountOnExit: f = !1,
  appear: d = !1,
  ...m
}, g) => (n = pt(n, "offcanvas"), /* @__PURE__ */ z.jsx(vb, {
  ref: g,
  addEndListener: hb,
  in: u,
  mountOnEnter: l,
  unmountOnExit: f,
  appear: d,
  ...m,
  childRef: Gu(o),
  children: (y, _) => /* @__PURE__ */ M.cloneElement(o, {
    ..._,
    className: Je(a, o.props.className, (y === La || y === Kc) && `${n}-toggling`, PF[y])
  })
})));
vw.displayName = "OffcanvasToggling";
const mw = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  closeLabel: o = "Close",
  closeButton: u = !1,
  ...l
}, f) => (n = pt(n, "offcanvas-header"), /* @__PURE__ */ z.jsx(UF, {
  ref: f,
  ...l,
  className: Je(a, n),
  closeLabel: o,
  closeButton: u
})));
mw.displayName = "OffcanvasHeader";
const BF = mb("h5"), yw = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = BF,
  ...u
}, l) => (a = pt(a, "offcanvas-title"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
yw.displayName = "OffcanvasTitle";
function $F(n) {
  return /* @__PURE__ */ z.jsx(vw, {
    ...n
  });
}
function HF(n) {
  return /* @__PURE__ */ z.jsx(Nx, {
    ...n
  });
}
const gw = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  children: o,
  "aria-labelledby": u,
  placement: l = "start",
  responsive: f,
  /* BaseModal props */
  show: d = !1,
  backdrop: m = !0,
  keyboard: g = !0,
  scroll: y = !1,
  onEscapeKeyDown: _,
  onShow: R,
  onHide: T,
  container: w,
  autoFocus: D = !0,
  enforceFocus: P = !0,
  restoreFocus: Y = !0,
  restoreFocusOptions: H,
  onEntered: Q,
  onExit: V,
  onExiting: ae,
  onEnter: oe,
  onEntering: de,
  onExited: Z,
  backdropClassName: Ie,
  manager: ft,
  renderStaticNode: Lt = !1,
  ...Ot
}, rt) => {
  const we = M.useRef();
  n = pt(n, "offcanvas");
  const [Ze, ht] = M.useState(!1), Ge = Gp(T), Oe = zF(f || "xs", "up");
  M.useEffect(() => {
    ht(f ? d && !Oe : d);
  }, [d, f, Oe]);
  const Fe = M.useMemo(() => ({
    onHide: Ge
  }), [Ge]);
  function qt() {
    return ft || (y ? (we.current || (we.current = new ow({
      handleContainerOverflow: !1
    })), we.current) : IF());
  }
  const X = (Se, ...Ue) => {
    Se && (Se.style.visibility = "visible"), oe == null || oe(Se, ...Ue);
  }, ie = (Se, ...Ue) => {
    Se && (Se.style.visibility = ""), Z == null || Z(...Ue);
  }, se = M.useCallback((Se) => /* @__PURE__ */ z.jsx("div", {
    ...Se,
    className: Je(`${n}-backdrop`, Ie)
  }), [Ie, n]), Ae = (Se) => /* @__PURE__ */ z.jsx("div", {
    ...Se,
    ...Ot,
    className: Je(a, f ? `${n}-${f}` : n, `${n}-${l}`),
    "aria-labelledby": u,
    children: o
  });
  return /* @__PURE__ */ z.jsxs(z.Fragment, {
    children: [!Ze && (f || Lt) && Ae({}), /* @__PURE__ */ z.jsx(sw.Provider, {
      value: Fe,
      children: /* @__PURE__ */ z.jsx(kF, {
        show: Ze,
        ref: rt,
        backdrop: m,
        container: w,
        keyboard: g,
        autoFocus: D,
        enforceFocus: P && !y,
        restoreFocus: Y,
        restoreFocusOptions: H,
        onEscapeKeyDown: _,
        onShow: R,
        onHide: Ge,
        onEnter: X,
        onEntering: de,
        onEntered: Q,
        onExit: V,
        onExiting: ae,
        onExited: ie,
        manager: qt(),
        transition: $F,
        backdropTransition: HF,
        renderBackdrop: se,
        renderDialog: Ae
      })
    })]
  });
});
gw.displayName = "Offcanvas";
const VF = Object.assign(gw, {
  Body: hw,
  Header: mw,
  Title: yw
}), bw = /* @__PURE__ */ M.forwardRef(({
  onHide: n,
  ...a
}, o) => {
  const u = M.useContext(Wu), l = Gp(() => {
    u == null || u.onToggle == null || u.onToggle(), n == null || n();
  });
  return /* @__PURE__ */ z.jsx(VF, {
    ref: o,
    show: !!(u != null && u.expanded),
    ...a,
    renderStaticNode: !0,
    onHide: l
  });
});
bw.displayName = "NavbarOffcanvas";
const Sw = /* @__PURE__ */ M.forwardRef(({
  className: n,
  bsPrefix: a,
  as: o = "span",
  ...u
}, l) => (a = pt(a, "navbar-text"), /* @__PURE__ */ z.jsx(o, {
  ref: l,
  className: Je(n, a),
  ...u
})));
Sw.displayName = "NavbarText";
const Ew = /* @__PURE__ */ M.forwardRef((n, a) => {
  const {
    bsPrefix: o,
    expand: u = !0,
    variant: l = "light",
    bg: f,
    fixed: d,
    sticky: m,
    className: g,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: y = "nav",
    expanded: _,
    onToggle: R,
    onSelect: T,
    collapseOnSelect: w = !1,
    ...D
  } = Tx(n, {
    expanded: "onToggle"
  }), P = pt(o, "navbar"), Y = M.useCallback((...V) => {
    T == null || T(...V), w && _ && (R == null || R(!1));
  }, [T, w, _, R]);
  D.role === void 0 && y !== "nav" && (D.role = "navigation");
  let H = `${P}-expand`;
  typeof u == "string" && (H = `${H}-${u}`);
  const Q = M.useMemo(() => ({
    onToggle: () => R == null ? void 0 : R(!_),
    bsPrefix: P,
    expanded: !!_,
    expand: u
  }), [P, _, u, R]);
  return /* @__PURE__ */ z.jsx(Wu.Provider, {
    value: Q,
    children: /* @__PURE__ */ z.jsx(kp.Provider, {
      value: Y,
      children: /* @__PURE__ */ z.jsx(y, {
        ref: a,
        ...D,
        className: Je(g, P, u && H, l && `${P}-${l}`, f && `bg-${f}`, m && `sticky-${m}`, d && `fixed-${d}`)
      })
    })
  });
});
Ew.displayName = "Navbar";
const mp = Object.assign(Ew, {
  Brand: fw,
  Collapse: dw,
  Offcanvas: bw,
  Text: Sw,
  Toggle: pw
}), rb = /* @__PURE__ */ M.forwardRef(({
  bsPrefix: n,
  className: a,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: o = "div",
  ...u
}, l) => {
  const f = pt(n, "row"), d = fb(), m = db(), g = `${f}-cols`, y = [];
  return d.forEach((_) => {
    const R = u[_];
    delete u[_];
    let T;
    R != null && typeof R == "object" ? {
      cols: T
    } = R : T = R;
    const w = _ !== m ? `-${_}` : "";
    T != null && y.push(`${g}${w}-${T}`);
  }), /* @__PURE__ */ z.jsx(o, {
    ref: l,
    ...u,
    className: Je(a, f, ...y)
  });
});
rb.displayName = "Row";
function qF(n, a = Cx, o = Rx) {
  const u = [];
  return Object.entries(n).forEach(([l, f]) => {
    f != null && (typeof f == "object" ? a.forEach((d) => {
      const m = f[d];
      if (m != null) {
        const g = d !== o ? `-${d}` : "";
        u.push(`${l}${g}-${m}`);
      }
    }) : u.push(`${l}-${f}`));
  }), u;
}
const _w = /* @__PURE__ */ M.forwardRef(({
  as: n = "div",
  bsPrefix: a,
  className: o,
  direction: u,
  gap: l,
  ...f
}, d) => {
  a = pt(a, u === "horizontal" ? "hstack" : "vstack");
  const m = fb(), g = db();
  return /* @__PURE__ */ z.jsx(n, {
    ...f,
    ref: d,
    className: Je(o, a, ...qF({
      gap: l
    }, m, g))
  });
});
_w.displayName = "Stack";
const yn = {
  log: "log",
  debug: "debug",
  info: "info",
  warn: "warn",
  error: "error"
}, Za = console, gs = {};
Object.keys(yn).forEach((n) => {
  gs[n] = Za[n];
});
const jc = "Datadog Browser SDK:", kt = {
  debug: gs.debug.bind(Za, jc),
  log: gs.log.bind(Za, jc),
  info: gs.info.bind(Za, jc),
  warn: gs.warn.bind(Za, jc),
  error: gs.error.bind(Za, jc)
}, Qp = "https://docs.datadoghq.com", Tw = `${Qp}/real_user_monitoring/browser/troubleshooting`, Jp = "More details:";
function Cw(n, a) {
  return (...o) => {
    try {
      return n(...o);
    } catch (u) {
      kt.error(a, u);
    }
  };
}
function Co(n) {
  return n !== 0 && Math.random() * 100 <= n;
}
function Mp(n, a) {
  return +n.toFixed(a);
}
function YF(n) {
  return rf(n) && n >= 0 && n <= 100;
}
function rf(n) {
  return typeof n == "number";
}
const _r = 1e3, Mr = 60 * _r, Rw = 60 * Mr, GF = 24 * Rw, xw = 365 * GF;
function Zp(n) {
  return { relative: n, timeStamp: KF(n) };
}
function WF(n) {
  return { relative: eh(n), timeStamp: n };
}
function KF(n) {
  const a = da() - performance.now();
  return a > af() ? Math.round(Ku(a, n)) : QF(n);
}
function XF() {
  return Math.round(da() - Ku(af(), performance.now()));
}
function ot(n) {
  return rf(n) ? Mp(n * 1e6, 0) : n;
}
function da() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function nr() {
  return da();
}
function pa() {
  return performance.now();
}
function dr() {
  return { relative: pa(), timeStamp: nr() };
}
function ww() {
  return { relative: 0, timeStamp: af() };
}
function rr(n, a) {
  return a - n;
}
function Ku(n, a) {
  return n + a;
}
function eh(n) {
  return n - af();
}
function QF(n) {
  return Math.round(Ku(af(), n));
}
function JF(n) {
  return n < xw;
}
let Lg;
function af() {
  return Lg === void 0 && (Lg = performance.timing.navigationStart), Lg;
}
const Mi = 1024, Ow = 1024 * Mi, ZF = /[^\u0000-\u007F]/;
function Ob(n) {
  return ZF.test(n) ? window.TextEncoder !== void 0 ? new TextEncoder().encode(n).length : new Blob([n]).size : n.length;
}
function ez(n) {
  const a = n.reduce((l, f) => l + f.length, 0), o = new Uint8Array(a);
  let u = 0;
  for (const l of n)
    o.set(l, u), u += l.length;
  return o;
}
function Xc(n) {
  return { ...n };
}
function Ip(n, a) {
  return Object.keys(n).some((o) => n[o] === a);
}
function Ts(n) {
  return Object.keys(n).length === 0;
}
function tz(n, a) {
  const o = {};
  for (const u of Object.keys(n))
    o[u] = a(n[u]);
  return o;
}
function Ui() {
  if (typeof globalThis == "object")
    return globalThis;
  Object.defineProperty(Object.prototype, "_dd_temp_", {
    get() {
      return this;
    },
    configurable: !0
  });
  let n = _dd_temp_;
  return delete Object.prototype._dd_temp_, typeof n != "object" && (typeof self == "object" ? n = self : typeof window == "object" ? n = window : n = {}), n;
}
function Ro(n, a) {
  const o = Ui();
  let u;
  return o.Zone && typeof o.Zone.__symbol__ == "function" && (u = n[o.Zone.__symbol__(a)]), u || (u = n[a]), u;
}
let Up, Aw = !1;
function nz(n) {
  Up = n;
}
function rz(n) {
  Aw = n;
}
function az(n, a, o) {
  const u = o.value;
  o.value = function(...l) {
    return (Up ? Re(u) : u).apply(this, l);
  };
}
function Re(n) {
  return function() {
    return Cs(n, this, arguments);
  };
}
function Cs(n, a, o) {
  try {
    return n.apply(a, o);
  } catch (u) {
    Dw(u);
  }
}
function Dw(n) {
  if (ab(n), Up)
    try {
      Up(n);
    } catch (a) {
      ab(a);
    }
}
function ab(...n) {
  Aw && kt.error("[MONITOR]", ...n);
}
function fr(n, a) {
  return Ro(Ui(), "setTimeout")(Re(n), a);
}
function fa(n) {
  Ro(Ui(), "clearTimeout")(n);
}
function Xu(n, a) {
  return Ro(Ui(), "setInterval")(Re(n), a);
}
function th(n) {
  Ro(Ui(), "clearInterval")(n);
}
class jt {
  constructor(a) {
    this.onFirstSubscribe = a, this.observers = [];
  }
  subscribe(a) {
    return this.observers.push(a), this.observers.length === 1 && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0), {
      unsubscribe: () => {
        this.observers = this.observers.filter((o) => a !== o), !this.observers.length && this.onLastUnsubscribe && this.onLastUnsubscribe();
      }
    };
  }
  notify(a) {
    this.observers.forEach((o) => o(a));
  }
}
function kw(...n) {
  return new jt((a) => {
    const o = n.map((u) => u.subscribe((l) => a.notify(l)));
    return () => o.forEach((u) => u.unsubscribe());
  });
}
function of(n, a, o) {
  const u = o && o.leading !== void 0 ? o.leading : !0, l = o && o.trailing !== void 0 ? o.trailing : !0;
  let f = !1, d, m;
  return {
    throttled: (...g) => {
      if (f) {
        d = g;
        return;
      }
      u ? n(...g) : d = g, f = !0, m = fr(() => {
        l && d && n(...d), f = !1, d = void 0;
      }, a);
    },
    cancel: () => {
      fa(m), f = !1, d = void 0;
    }
  };
}
function Vt() {
}
function pr(n) {
  return n ? (
    // eslint-disable-next-line  no-bitwise
    (parseInt(n, 10) ^ Math.random() * 16 >> parseInt(n, 10) / 4).toString(16)
  ) : `10000000-1000-4000-8000-${1e11}`.replace(/[018]/g, pr);
}
const jp = /([\w-]+)\s*=\s*([^;]+)/g;
function Qc(n, a) {
  for (jp.lastIndex = 0; ; ) {
    const o = jp.exec(n);
    if (o) {
      if (o[1] === a)
        return o[2];
    } else
      break;
  }
}
function iz(n) {
  const a = /* @__PURE__ */ new Map();
  for (jp.lastIndex = 0; ; ) {
    const o = jp.exec(n);
    if (o)
      a.set(o[1], o[2]);
    else
      break;
  }
  return a;
}
function Lw(n, a, o = "") {
  const u = n.charCodeAt(a - 1), f = u >= 55296 && u <= 56319 ? a + 1 : a;
  return n.length <= f ? n : `${n.slice(0, f)}${o}`;
}
function oz() {
  return Nw() === 0;
}
function F3() {
  return Nw() === 1;
}
let yp;
function Nw() {
  return yp ?? (yp = sz());
}
function sz(n = window) {
  var a;
  const o = n.navigator.userAgent;
  return n.chrome || /HeadlessChrome/.test(o) ? 0 : (
    // navigator.vendor is deprecated, but it is the most resilient way we found to detect
    // "Apple maintained browsers" (AKA Safari). If one day it gets removed, we still have the
    // useragent test as a semi-working fallback.
    ((a = n.navigator.vendor) === null || a === void 0 ? void 0 : a.indexOf("Apple")) === 0 || /safari/i.test(o) && !/chrome|android/i.test(o) ? 1 : 2
  );
}
function sf(n, a, o = 0, u) {
  const l = /* @__PURE__ */ new Date();
  l.setTime(l.getTime() + o);
  const f = `expires=${l.toUTCString()}`, d = u && u.crossSite ? "none" : "strict", m = u && u.domain ? `;domain=${u.domain}` : "", g = u && u.secure ? ";secure" : "", y = u && u.partitioned ? ";partitioned" : "";
  document.cookie = `${n}=${a};${f};path=/;samesite=${d}${m}${g}${y}`;
}
function Ab(n) {
  return Qc(document.cookie, n);
}
let Ng;
function To(n) {
  return Ng || (Ng = iz(document.cookie)), Ng.get(n);
}
function Mw(n, a) {
  sf(n, "", 0, a);
}
function uz(n) {
  if (document.cookie === void 0 || document.cookie === null)
    return !1;
  try {
    const a = `dd_cookie_test_${pr()}`, o = "test";
    sf(a, o, Mr, n);
    const u = Ab(a) === o;
    return Mw(a, n), u;
  } catch (a) {
    return kt.error(a), !1;
  }
}
let Mg;
function lz() {
  if (Mg === void 0) {
    const n = `dd_site_test_${pr()}`, a = "test", o = window.location.hostname.split(".");
    let u = o.pop();
    for (; o.length && !Ab(n); )
      u = `${o.pop()}.${u}`, sf(n, a, _r, { domain: u });
    Mw(n, { domain: u }), Mg = u;
  }
  return Mg;
}
const Qu = "_dd_s";
function cz(n, a) {
  for (let o = n.length - 1; o >= 0; o -= 1) {
    const u = n[o];
    if (a(u, o, n))
      return u;
  }
}
function Fp(n) {
  return Object.values(n);
}
function Db(n) {
  return Object.entries(n);
}
function Oo(n) {
  return n === null ? "null" : Array.isArray(n) ? "array" : typeof n;
}
function zp(n) {
  const a = { ...n };
  return ["id", "name", "email"].forEach((u) => {
    u in a && (a[u] = String(a[u]));
  }), a;
}
function Iw(n) {
  const a = Oo(n) === "object";
  return a || kt.error("Unsupported user:", n), a;
}
function fz() {
  return Math.floor(Math.random() * Math.pow(36, 10)).toString(36).padStart(10, "0");
}
const xs = 4 * Rw, Uw = 15 * Mr, dz = xw, Jc = {
  COOKIE: "cookie",
  LOCAL_STORAGE: "local-storage"
}, jw = /^([a-zA-Z]+)=([a-z0-9-]+)$/, kb = "&";
function pz(n) {
  return !!n && (n.indexOf(kb) !== -1 || jw.test(n));
}
const hz = "1";
function bs(n, a) {
  const o = {
    isExpired: hz
  };
  return a.trackAnonymousUser && (n != null && n.anonymousId ? o.anonymousId = n == null ? void 0 : n.anonymousId : o.anonymousId = fz()), o;
}
function Tp(n) {
  return Ts(n);
}
function Fw(n) {
  return !Tp(n);
}
function Pp(n) {
  return n.isExpired !== void 0 || !vz(n);
}
function vz(n) {
  return (n.created === void 0 || da() - Number(n.created) < xs) && (n.expire === void 0 || da() < Number(n.expire));
}
function zw(n) {
  n.expire = String(da() + Uw);
}
function Lb(n) {
  return Db(n).map(([a, o]) => a === "anonymousId" ? `aid=${o}` : `${a}=${o}`).join(kb);
}
function Pw(n) {
  const a = {};
  return pz(n) && n.split(kb).forEach((o) => {
    const u = jw.exec(o);
    if (u !== null) {
      const [, l, f] = u;
      l === "aid" ? a.anonymousId = f : a[l] = f;
    }
  }), a;
}
const mz = "_dd", yz = "_dd_r", gz = "_dd_l", bz = "rum", Sz = "logs";
function Ez(n) {
  if (!To(Qu)) {
    const o = To(mz), u = To(yz), l = To(gz), f = {};
    o && (f.id = o), l && /^[01]$/.test(l) && (f[Sz] = l), u && /^[012]$/.test(u) && (f[bz] = u), Fw(f) && (zw(f), n.persistSession(f));
  }
}
function IR(n) {
  const a = xz(n);
  return uz(a) ? { type: Jc.COOKIE, cookieOptions: a } : void 0;
}
function _z(n, a) {
  const o = {
    /**
     * Lock strategy allows mitigating issues due to concurrent access to cookie.
     * This issue concerns only chromium browsers and enabling this on firefox increases cookie write failures.
     */
    isLockEnabled: oz(),
    persistSession: Tz(a),
    retrieveSession: Rz,
    expireSession: (u) => Cz(a, u, n)
  };
  return Ez(o), o;
}
function Tz(n) {
  return (a) => {
    sf(Qu, Lb(a), Uw, n);
  };
}
function Cz(n, a, o) {
  const u = bs(a, o);
  sf(Qu, Lb(u), o.trackAnonymousUser ? dz : xs, n);
}
function Rz() {
  const n = Ab(Qu);
  return Pw(n);
}
function xz(n) {
  const a = {};
  return a.secure = !!n.useSecureSessionCookie || !!n.usePartitionedCrossSiteSessionCookie, a.crossSite = !!n.usePartitionedCrossSiteSessionCookie, a.partitioned = !!n.usePartitionedCrossSiteSessionCookie, n.trackSessionAcrossSubdomains && (a.domain = lz()), a;
}
const wz = "_dd_test_";
function UR() {
  try {
    const n = pr(), a = `${wz}${n}`;
    localStorage.setItem(a, n);
    const o = localStorage.getItem(a);
    return localStorage.removeItem(a), n === o ? { type: Jc.LOCAL_STORAGE } : void 0;
  } catch {
    return;
  }
}
function Oz(n) {
  return {
    isLockEnabled: !1,
    persistSession: Bw,
    retrieveSession: Az,
    expireSession: (a) => Dz(a, n)
  };
}
function Bw(n) {
  localStorage.setItem(Qu, Lb(n));
}
function Az() {
  const n = localStorage.getItem(Qu);
  return Pw(n);
}
function Dz(n, a) {
  Bw(bs(n, a));
}
const kz = 10, Lz = 100, $w = [];
let Cp;
function Ss(n, a, o = 0) {
  var u;
  const { isLockEnabled: l, persistSession: f, expireSession: d } = a, m = (T) => f({ ...T, lock: y }), g = () => {
    const T = a.retrieveSession(), w = T.lock;
    return T.lock && delete T.lock, {
      session: T,
      lock: w
    };
  };
  if (Cp || (Cp = n), n !== Cp) {
    $w.push(n);
    return;
  }
  if (l && o >= Lz) {
    jR(a);
    return;
  }
  let y, _ = g();
  if (l) {
    if (_.lock) {
      gp(n, a, o);
      return;
    }
    if (y = pr(), m(_.session), _ = g(), _.lock !== y) {
      gp(n, a, o);
      return;
    }
  }
  let R = n.process(_.session);
  if (l && (_ = g(), _.lock !== y)) {
    gp(n, a, o);
    return;
  }
  if (R && (Pp(R) ? d(R) : (zw(R), l ? m(R) : f(R))), l && !(R && Pp(R))) {
    if (_ = g(), _.lock !== y) {
      gp(n, a, o);
      return;
    }
    f(_.session), R = _.session;
  }
  (u = n.after) === null || u === void 0 || u.call(n, R || _.session), jR(a);
}
function gp(n, a, o) {
  fr(() => {
    Ss(n, a, o + 1);
  }, kz);
}
function jR(n) {
  Cp = void 0;
  const a = $w.shift();
  a && Ss(a, n);
}
const FR = _r;
function Nz(n) {
  switch (n.sessionPersistence) {
    case Jc.COOKIE:
      return IR(n);
    case Jc.LOCAL_STORAGE:
      return UR();
    case void 0: {
      let a = IR(n);
      return !a && n.allowFallbackToLocalStorage && (a = UR()), a;
    }
    default:
      kt.error(`Invalid session persistence '${String(n.sessionPersistence)}'`);
  }
}
function Mz(n, a, o, u) {
  const l = new jt(), f = new jt(), d = new jt(), m = n.type === Jc.COOKIE ? _z(a, n.cookieOptions) : Oz(a), { expireSession: g } = m, y = Xu(D, FR);
  let _;
  Y();
  const { throttled: R, cancel: T } = of(() => {
    Ss({
      process: (Z) => {
        if (Tp(Z))
          return;
        const Ie = P(Z);
        return H(Ie), Ie;
      },
      after: (Z) => {
        Fw(Z) && !Q() && oe(Z), _ = Z;
      }
    }, m);
  }, FR);
  function w() {
    Ss({
      process: (Z) => Q() ? P(Z) : void 0
    }, m);
  }
  function D() {
    Ss({
      process: (Z) => Pp(Z) ? bs(Z, a) : void 0,
      after: P
    }, m);
  }
  function P(Z) {
    return Pp(Z) && (Z = bs(Z, a)), Q() && (V(Z) ? ae() : (d.notify({ previousState: _, newState: Z }), _ = Z)), Z;
  }
  function Y() {
    Ss({
      process: (Z) => {
        if (Tp(Z))
          return bs(Z, a);
      },
      after: (Z) => {
        _ = Z;
      }
    }, m);
  }
  function H(Z) {
    if (Tp(Z))
      return !1;
    const { trackingType: Ie, isTracked: ft } = u(Z[o]);
    Z[o] = Ie, delete Z.isExpired, ft && !Z.id && (Z.id = pr(), Z.created = String(da()));
  }
  function Q() {
    return _[o] !== void 0;
  }
  function V(Z) {
    return _.id !== Z.id || _[o] !== Z[o];
  }
  function ae() {
    _ = bs(_, a), f.notify();
  }
  function oe(Z) {
    _ = Z, l.notify();
  }
  function de(Z) {
    Ss({
      process: (Ie) => ({ ...Ie, ...Z }),
      after: P
    }, m);
  }
  return {
    expandOrRenewSession: R,
    expandSession: w,
    getSession: () => _,
    renewObservable: l,
    expireObservable: f,
    sessionStateUpdateObservable: d,
    restartSession: Y,
    expire: () => {
      T(), g(_), P(bs(_, a));
    },
    stop: () => {
      th(y);
    },
    updateSessionState: de
  };
}
const ib = {
  GRANTED: "granted",
  NOT_GRANTED: "not-granted"
};
function Hw(n) {
  const a = new jt();
  return {
    tryToInit(o) {
      n || (n = o);
    },
    update(o) {
      n = o, a.notify();
    },
    isGranted() {
      return n === ib.GRANTED;
    },
    observable: a
  };
}
function ws(n, a, o) {
  if (typeof n != "object" || n === null)
    return JSON.stringify(n);
  const u = zu(Object.prototype), l = zu(Array.prototype), f = zu(Object.getPrototypeOf(n)), d = zu(n);
  try {
    return JSON.stringify(n, a, o);
  } catch {
    return "<error: unable to serialize object>";
  } finally {
    u(), l(), f(), d();
  }
}
function zu(n) {
  const a = n, o = a.toJSON;
  return o ? (delete a.toJSON, () => {
    a.toJSON = o;
  }) : Vt;
}
function Nb(n) {
  return Mb(n, location.href).href;
}
function Iz(n) {
  try {
    return !!Mb(n);
  } catch {
    return !1;
  }
}
function Uz(n) {
  const a = Mb(n).pathname;
  return a[0] === "/" ? a : `/${a}`;
}
function Mb(n, a) {
  const o = jz();
  if (o)
    try {
      return a !== void 0 ? new o(n, a) : new o(n);
    } catch (f) {
      throw new Error(`Failed to construct URL: ${String(f)} ${ws({ url: n, base: a })}`);
    }
  if (a === void 0 && !/:/.test(n))
    throw new Error(`Invalid URL: '${n}'`);
  let u = document;
  const l = u.createElement("a");
  if (a !== void 0) {
    u = document.implementation.createHTMLDocument("");
    const f = u.createElement("base");
    f.href = a, u.head.appendChild(f), u.body.appendChild(l);
  }
  return l.href = n, l;
}
const zR = URL;
let bp;
function jz() {
  if (bp === void 0)
    try {
      bp = new zR("http://test/path").href === "http://test/path";
    } catch {
      bp = !1;
    }
  return bp ? zR : void 0;
}
const Vw = "datad0g.com", Fz = "dd0g-gov.com", Es = "datadoghq.com", zz = "datadoghq.eu", Pz = "ddog-gov.com", Bz = "pci.browser-intake-datadoghq.com", $z = ["ddsource", "ddtags"];
function Yc(n, a, o) {
  const u = Hz(n, a);
  return {
    build(l, f) {
      const d = Vz(n, a, o, l, f);
      return u(d);
    },
    urlPrefix: u(""),
    trackType: a
  };
}
function Hz(n, a) {
  const o = `/api/v2/${a}`, u = n.proxy;
  if (typeof u == "string") {
    const f = Nb(u);
    return (d) => `${f}?ddforward=${encodeURIComponent(`${o}?${d}`)}`;
  }
  if (typeof u == "function")
    return (f) => u({ path: o, parameters: f });
  const l = qw(a, n);
  return (f) => `https://${l}${o}?${f}`;
}
function qw(n, a) {
  const { site: o = Es, internalAnalyticsSubdomain: u } = a;
  if (n === "logs" && a.usePciIntake && o === Es)
    return Bz;
  if (u && o === Es)
    return `${u}.${Es}`;
  if (o === Fz)
    return `http-intake.logs.${o}`;
  const l = o.split("."), f = l.pop();
  return `browser-intake-${l.join("-")}.${f}`;
}
function Vz({ clientToken: n, internalAnalyticsSubdomain: a }, o, u, l, { retry: f, encoding: d }) {
  const m = ["sdk_version:6.2.0", `api:${l}`].concat(u);
  f && m.push(`retry_count:${f.count}`, `retry_after:${f.lastFailureStatus}`);
  const g = [
    "ddsource=browser",
    `ddtags=${encodeURIComponent(m.join(","))}`,
    `dd-api-key=${n}`,
    `dd-evp-origin-version=${encodeURIComponent("6.2.0")}`,
    "dd-evp-origin=browser",
    `dd-request-id=${pr()}`
  ];
  return d && g.push(`dd-evp-encoding=${d}`), o === "rum" && g.push(`batch_time=${nr()}`), a && g.reverse(), g.join("&");
}
const qz = 200;
function Yz(n) {
  const { env: a, service: o, version: u, datacenter: l } = n, f = [];
  return a && f.push(Sp("env", a)), o && f.push(Sp("service", o)), u && f.push(Sp("version", u)), l && f.push(Sp("datacenter", l)), f;
}
function Sp(n, a) {
  const o = qz - n.length - 1;
  (a.length > o || Gz(a)) && kt.warn(`${n} value doesn't meet tag requirements and will be sanitized. ${Jp} ${Qp}/getting_started/tagging/#defining-tags`);
  const u = a.replace(/,/g, "_");
  return `${n}:${u}`;
}
function Gz(n) {
  return Wz() ? new RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(n) : !1;
}
function Wz() {
  try {
    return new RegExp("[\\p{Ll}]", "u"), !0;
  } catch {
    return !1;
  }
}
function Kz(n) {
  const a = n.site || Es, o = Yz(n), u = Xz(n, o);
  return {
    replica: Qz(n, o),
    site: a,
    ...u
  };
}
function Xz(n, a) {
  return {
    logsEndpointBuilder: Yc(n, "logs", a),
    rumEndpointBuilder: Yc(n, "rum", a),
    sessionReplayEndpointBuilder: Yc(n, "replay", a)
  };
}
function Qz(n, a) {
  if (!n.replica)
    return;
  const o = {
    ...n,
    site: Es,
    clientToken: n.replica.clientToken
  }, u = {
    logsEndpointBuilder: Yc(o, "logs", a),
    rumEndpointBuilder: Yc(o, "rum", a)
  };
  return { applicationId: n.replica.applicationId, ...u };
}
function Yw(n) {
  return $z.every((a) => n.includes(a));
}
const Gc = {
  ALLOW: "allow",
  MASK: "mask",
  MASK_USER_INPUT: "mask-user-input"
}, ob = {
  ALL: "all",
  SAMPLED: "sampled"
};
function Ig(n, a) {
  return n != null && typeof n != "string" ? (kt.error(`${a} must be defined as a string`), !1) : !0;
}
function Jz(n) {
  return n && typeof n == "string" && !/(datadog|ddog|datad0g|dd0g)/.test(n) ? (kt.error(`Site should be a valid Datadog site. ${Jp} ${Qp}/getting_started/site/.`), !1) : !0;
}
function Pu(n, a) {
  return n !== void 0 && !YF(n) ? (kt.error(`${a} Sample Rate should be a number between 0 and 100`), !1) : !0;
}
function Gw(n) {
  var a, o, u, l, f, d;
  if (!n || !n.clientToken) {
    kt.error("Client Token is not configured, we will not send any data.");
    return;
  }
  if (!(!Jz(n.site) || !Pu(n.sessionSampleRate, "Session") || !Pu(n.telemetrySampleRate, "Telemetry") || !Pu(n.telemetryConfigurationSampleRate, "Telemetry Configuration") || !Pu(n.telemetryUsageSampleRate, "Telemetry Usage") || !Ig(n.version, "Version") || !Ig(n.env, "Env") || !Ig(n.service, "Service"))) {
    if (n.trackingConsent !== void 0 && !Ip(ib, n.trackingConsent)) {
      kt.error('Tracking Consent should be either "granted" or "not-granted"');
      return;
    }
    return {
      beforeSend: n.beforeSend && Cw(n.beforeSend, "beforeSend threw an error:"),
      sessionStoreStrategyType: Nz(n),
      sessionSampleRate: (a = n.sessionSampleRate) !== null && a !== void 0 ? a : 100,
      telemetrySampleRate: (o = n.telemetrySampleRate) !== null && o !== void 0 ? o : 20,
      telemetryConfigurationSampleRate: (u = n.telemetryConfigurationSampleRate) !== null && u !== void 0 ? u : 5,
      telemetryUsageSampleRate: (l = n.telemetryUsageSampleRate) !== null && l !== void 0 ? l : 5,
      service: n.service || void 0,
      silentMultipleInit: !!n.silentMultipleInit,
      allowUntrustedEvents: !!n.allowUntrustedEvents,
      trackingConsent: (f = n.trackingConsent) !== null && f !== void 0 ? f : ib.GRANTED,
      trackAnonymousUser: (d = n.trackAnonymousUser) !== null && d !== void 0 ? d : !0,
      storeContextsAcrossPages: !!n.storeContextsAcrossPages,
      /**
       * beacon payload max queue size implementation is 64kb
       * ensure that we leave room for logs, rum and potential other users
       */
      batchBytesLimit: 16 * Mi,
      eventRateLimiterThreshold: 3e3,
      maxTelemetryEventsPerPage: 15,
      /**
       * flush automatically, aim to be lower than ALB connection timeout
       * to maximize connection reuse.
       */
      flushTimeout: 30 * _r,
      /**
       * Logs intake limit
       */
      batchMessagesLimit: 50,
      messageBytesLimit: 256 * Mi,
      ...Kz(n)
    };
  }
}
function Ww(n) {
  return {
    session_sample_rate: n.sessionSampleRate,
    telemetry_sample_rate: n.telemetrySampleRate,
    telemetry_configuration_sample_rate: n.telemetryConfigurationSampleRate,
    telemetry_usage_sample_rate: n.telemetryUsageSampleRate,
    use_before_send: !!n.beforeSend,
    use_partitioned_cross_site_session_cookie: n.usePartitionedCrossSiteSessionCookie,
    use_secure_session_cookie: n.useSecureSessionCookie,
    use_proxy: !!n.proxy,
    silent_multiple_init: n.silentMultipleInit,
    track_session_across_subdomains: n.trackSessionAcrossSubdomains,
    track_anonymous_user: n.trackAnonymousUser,
    session_persistence: n.sessionPersistence,
    allow_fallback_to_local_storage: !!n.allowFallbackToLocalStorage,
    store_contexts_across_pages: !!n.storeContextsAcrossPages,
    allow_untrusted_events: !!n.allowUntrustedEvents,
    tracking_consent: n.trackingConsent
  };
}
var xo;
(function(n) {
  n.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql", n.REMOTE_CONFIGURATION = "remote_configuration", n.ACTION_NAME_MASKING = "action_name_masking", n.CONSISTENT_TRACE_SAMPLING = "consistent_trace_sampling", n.MISSING_URL_CONTEXT_TELEMETRY = "missing_url_context_telemetry";
})(xo || (xo = {}));
const Ib = /* @__PURE__ */ new Set();
function Kw(n) {
  Array.isArray(n) && Zz(n.filter((a) => Ip(xo, a)));
}
function Zz(n) {
  n.forEach((a) => {
    Ib.add(a);
  });
}
function Zc(n) {
  return Ib.has(n);
}
function eP() {
  return Ib;
}
const uf = "?";
function ai(n) {
  const a = [];
  let o = Ug(n, "stack");
  const u = String(n);
  return o && o.startsWith(u) && (o = o.slice(u.length)), o && o.split(`
`).forEach((l) => {
    const f = rP(l) || iP(l) || sP(l) || cP(l);
    f && (!f.func && f.line && (f.func = uf), a.push(f));
  }), {
    message: Ug(n, "message"),
    name: Ug(n, "name"),
    stack: a
  };
}
const Xw = "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)", Hu = "(?::(\\d+))", tP = new RegExp(`^\\s*at (.*?) ?\\(${Xw}${Hu}?${Hu}?\\)?\\s*$`, "i"), nP = new RegExp(`\\((\\S*)${Hu}${Hu}\\)`);
function rP(n) {
  const a = tP.exec(n);
  if (!a)
    return;
  const o = a[2] && a[2].indexOf("native") === 0, u = a[2] && a[2].indexOf("eval") === 0, l = nP.exec(a[2]);
  return u && l && (a[2] = l[1], a[3] = l[2], a[4] = l[3]), {
    args: o ? [a[2]] : [],
    column: a[4] ? +a[4] : void 0,
    func: a[1] || uf,
    line: a[3] ? +a[3] : void 0,
    url: o ? void 0 : a[2]
  };
}
const aP = new RegExp(`^\\s*at ?${Xw}${Hu}?${Hu}??\\s*$`, "i");
function iP(n) {
  const a = aP.exec(n);
  if (a)
    return {
      args: [],
      column: a[3] ? +a[3] : void 0,
      func: uf,
      line: a[2] ? +a[2] : void 0,
      url: a[1]
    };
}
const oP = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function sP(n) {
  const a = oP.exec(n);
  if (a)
    return {
      args: [],
      column: a[4] ? +a[4] : void 0,
      func: a[1] || uf,
      line: +a[3],
      url: a[2]
    };
}
const uP = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, lP = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function cP(n) {
  const a = uP.exec(n);
  if (!a)
    return;
  const o = a[3] && a[3].indexOf(" > eval") > -1, u = lP.exec(a[3]);
  return o && u && (a[3] = u[1], a[4] = u[2], a[5] = void 0), {
    args: a[2] ? a[2].split(",") : [],
    column: a[5] ? +a[5] : void 0,
    func: a[1] || uf,
    line: a[4] ? +a[4] : void 0,
    url: a[3]
  };
}
function Ug(n, a) {
  if (typeof n != "object" || !n || !(a in n))
    return;
  const o = n[a];
  return typeof o == "string" ? o : void 0;
}
function fP(n, a, o, u) {
  const l = [{ url: a, column: u, line: o }], { name: f, message: d } = pP(n);
  return {
    name: f,
    message: d,
    stack: l
  };
}
const dP = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
function pP(n) {
  let a, o;
  return {}.toString.call(n) === "[object String]" && ([, a, o] = dP.exec(n)), { name: a, message: o };
}
function Vu() {
  const a = new Error();
  let o;
  return Cs(() => {
    const u = ai(a);
    u.stack = u.stack.slice(2), o = Os(u);
  }), o;
}
function Os(n) {
  let a = Qw(n);
  return n.stack.forEach((o) => {
    const u = o.func === "?" ? "<anonymous>" : o.func, l = o.args && o.args.length > 0 ? `(${o.args.join(", ")})` : "", f = o.line ? `:${o.line}` : "", d = o.line && o.column ? `:${o.column}` : "";
    a += `
  at ${u}${l} @ ${o.url}${f}${d}`;
  }), a;
}
function Qw(n) {
  return `${n.name || "Error"}: ${n.message}`;
}
function ti(n, a, o, { computeHandlingStack: u } = {}) {
  let l = n[a];
  if (typeof l != "function")
    if (a in n && a.startsWith("on"))
      l = Vt;
    else
      return { stop: Vt };
  let f = !1;
  const d = function() {
    if (f)
      return l.apply(this, arguments);
    const m = Array.from(arguments);
    let g;
    Cs(o, null, [
      {
        target: this,
        parameters: m,
        onPostCall: (_) => {
          g = _;
        },
        handlingStack: u ? Vu() : void 0
      }
    ]);
    const y = l.apply(this, m);
    return g && Cs(g, null, [y]), y;
  };
  return n[a] = d, {
    stop: () => {
      f = !0, n[a] === d && (n[a] = l);
    }
  };
}
function z3(n, a, o) {
  const u = Object.getOwnPropertyDescriptor(n, a);
  if (!u || !u.set || !u.configurable)
    return { stop: Vt };
  const l = Vt;
  let f = (m, g) => {
    fr(() => {
      f !== l && o(m, g);
    }, 0);
  };
  const d = function(m) {
    u.set.call(this, m), f(this, m);
  };
  return Object.defineProperty(n, a, {
    set: d
  }), {
    stop: () => {
      var m;
      ((m = Object.getOwnPropertyDescriptor(n, a)) === null || m === void 0 ? void 0 : m.set) === d && Object.defineProperty(n, a, u), f = l;
    }
  };
}
const hP = 220 * Mi, vP = "$", mP = 3;
function sn(n, a = hP) {
  const o = zu(Object.prototype), u = zu(Array.prototype), l = [], f = /* @__PURE__ */ new WeakMap(), d = jg(n, vP, void 0, l, f), m = JSON.stringify(d);
  let g = m ? m.length : 0;
  if (g > a) {
    Fg(a, "discarded", n);
    return;
  }
  for (; l.length > 0 && g < a; ) {
    const y = l.shift();
    let _ = 0;
    if (Array.isArray(y.source))
      for (let R = 0; R < y.source.length; R++) {
        const T = jg(y.source[R], y.path, R, l, f);
        if (T !== void 0 ? g += JSON.stringify(T).length : g += 4, g += _, _ = 1, g > a) {
          Fg(a, "truncated", n);
          break;
        }
        y.target[R] = T;
      }
    else
      for (const R in y.source)
        if (Object.prototype.hasOwnProperty.call(y.source, R)) {
          const T = jg(y.source[R], y.path, R, l, f);
          if (T !== void 0 && (g += JSON.stringify(T).length + _ + R.length + mP, _ = 1), g > a) {
            Fg(a, "truncated", n);
            break;
          }
          y.target[R] = T;
        }
  }
  return o(), u(), d;
}
function jg(n, a, o, u, l) {
  const f = bP(n);
  if (!f || typeof f != "object")
    return yP(f);
  const d = sb(f);
  if (d !== "[Object]" && d !== "[Array]" && d !== "[Error]")
    return d;
  const m = n;
  if (l.has(m))
    return `[Reference seen at ${l.get(m)}]`;
  const g = o !== void 0 ? `${a}.${o}` : a, y = Array.isArray(f) ? [] : {};
  return l.set(m, g), u.push({ source: f, target: y, path: g }), y;
}
function yP(n) {
  return typeof n == "bigint" ? `[BigInt] ${n.toString()}` : typeof n == "function" ? `[Function] ${n.name || "unknown"}` : typeof n == "symbol" ? `[Symbol] ${n.description || n.toString()}` : n;
}
function sb(n) {
  try {
    if (n instanceof Event)
      return gP(n);
    if (n instanceof RegExp)
      return `[RegExp] ${n.toString()}`;
    const o = Object.prototype.toString.call(n).match(/\[object (.*)\]/);
    if (o && o[1])
      return `[${o[1]}]`;
  } catch {
  }
  return "[Unserializable]";
}
function gP(n) {
  return {
    type: n.type,
    isTrusted: n.isTrusted,
    currentTarget: n.currentTarget ? sb(n.currentTarget) : null,
    target: n.target ? sb(n.target) : null
  };
}
function bP(n) {
  const a = n;
  if (a && typeof a.toJSON == "function")
    try {
      return a.toJSON();
    } catch {
    }
  return n;
}
function Fg(n, a, o) {
  kt.warn(`The data provided has been ${a} as it is over the limit of ${n} characters:`, o);
}
const Jw = "No stack, consider using an instance of Error";
function Ub({ stackTrace: n, originalError: a, handlingStack: o, componentStack: u, startClocks: l, nonErrorPrefix: f, source: d, handling: m }) {
  const g = ji(a), y = SP(n, g, f, a), _ = EP(g, n) ? Os(n) : Jw, R = g ? e0(a, d) : void 0, T = n ? n.name : void 0, w = Zw(a);
  return {
    startClocks: l,
    source: d,
    handling: m,
    handlingStack: o,
    componentStack: u,
    originalError: a,
    type: T,
    message: y,
    stack: _,
    causes: R,
    fingerprint: w
  };
}
function SP(n, a, o, u) {
  return n != null && n.message && (n != null && n.name) ? n.message : a ? "Empty message" : `${o} ${ws(sn(u))}`;
}
function EP(n, a) {
  return a === void 0 ? !1 : n ? !0 : a.stack.length > 0 && (a.stack.length > 1 || a.stack[0].url !== void 0);
}
function Zw(n) {
  return ji(n) && "dd_fingerprint" in n ? String(n.dd_fingerprint) : void 0;
}
function _P(n) {
  var a;
  return (a = /@ (.+)/.exec(n)) === null || a === void 0 ? void 0 : a[1];
}
function ji(n) {
  return n instanceof Error || Object.prototype.toString.call(n) === "[object Error]";
}
function e0(n, a) {
  let o = n;
  const u = [];
  for (; ji(o == null ? void 0 : o.cause) && u.length < 10; ) {
    const l = ai(o.cause);
    u.push({
      message: o.cause.message,
      source: a,
      type: l == null ? void 0 : l.name,
      stack: l && Os(l)
    }), o = o.cause;
  }
  return u.length ? u : void 0;
}
const Ir = {
  AGENT: "agent",
  CONSOLE: "console",
  CUSTOM: "custom",
  LOGGER: "logger",
  NETWORK: "network",
  SOURCE: "source",
  REPORT: "report"
};
function t0(n) {
  const a = (l, f) => {
    const d = Ub({
      stackTrace: l,
      originalError: f,
      startClocks: dr(),
      nonErrorPrefix: "Uncaught",
      source: Ir.SOURCE,
      handling: "unhandled"
    });
    n.notify(d);
  }, { stop: o } = TP(a), { stop: u } = CP(a);
  return {
    stop: () => {
      o(), u();
    }
  };
}
function TP(n) {
  return ti(window, "onerror", ({ parameters: [a, o, u, l, f] }) => {
    let d;
    ji(f) ? d = ai(f) : d = fP(a, o, u, l), n(d, f ?? a);
  });
}
function CP(n) {
  return ti(window, "onunhandledrejection", ({ parameters: [a] }) => {
    const o = a.reason || "Empty reason", u = ai(o);
    n(u, o);
  });
}
function n0(n) {
  const a = {
    version: "6.2.0",
    // This API method is intentionally not monitored, since the only thing executed is the
    // user-provided 'callback'.  All SDK usages executed in the callback should be monitored, and
    // we don't want to interfere with the user uncaught exceptions.
    onReady(o) {
      o();
    },
    ...n
  };
  return Object.defineProperty(a, "_setDebug", {
    get() {
      return rz;
    },
    enumerable: !1
  }), a;
}
function r0(n, a, o) {
  const u = n[a];
  u && !u.q && u.version && kt.warn("SDK is loaded more than once. This is unsupported and might have unexpected behavior."), n[a] = o, u && u.q && u.q.forEach((l) => Cw(l, "onReady callback threw an error:")());
}
function nh(n, a) {
  a.silentMultipleInit || kt.error(`${n} is already initialized.`);
}
function ln(n, a, o, u, l) {
  return wo(n, a, [o], u, l);
}
function wo(n, a, o, u, { once: l, capture: f, passive: d } = {}) {
  const m = Re((T) => {
    !T.isTrusted && !T.__ddIsTrusted && !n.allowUntrustedEvents || (l && R(), u(T));
  }), g = d ? { capture: f, passive: d } : f, y = window.EventTarget && a instanceof EventTarget ? window.EventTarget.prototype : a, _ = Ro(y, "addEventListener");
  o.forEach((T) => _.call(a, T, m, g));
  function R() {
    const T = Ro(y, "removeEventListener");
    o.forEach((w) => T.call(a, w, m, g));
  }
  return {
    stop: R
  };
}
const qu = {
  intervention: "intervention",
  deprecation: "deprecation",
  cspViolation: "csp_violation"
};
function a0(n, a) {
  const o = [];
  a.includes(qu.cspViolation) && o.push(xP(n));
  const u = a.filter((l) => l !== qu.cspViolation);
  return u.length && o.push(RP(u)), kw(...o);
}
function RP(n) {
  return new jt((a) => {
    if (!window.ReportingObserver)
      return;
    const o = Re((l, f) => l.forEach((d) => a.notify(wP(d)))), u = new window.ReportingObserver(o, {
      types: n,
      buffered: !0
    });
    return u.observe(), () => {
      u.disconnect();
    };
  });
}
function xP(n) {
  return new jt((a) => {
    const { stop: o } = ln(n, document, "securitypolicyviolation", (u) => {
      a.notify(OP(u));
    });
    return o;
  });
}
function wP(n) {
  const { type: a, body: o } = n;
  return i0({
    type: o.id,
    message: `${a}: ${o.message}`,
    originalError: n,
    stack: o0(o.id, o.message, o.sourceFile, o.lineNumber, o.columnNumber)
  });
}
function OP(n) {
  const a = `'${n.blockedURI}' blocked by '${n.effectiveDirective}' directive`;
  return i0({
    type: n.effectiveDirective,
    message: `${qu.cspViolation}: ${a}`,
    originalError: n,
    csp: {
      disposition: n.disposition
    },
    stack: o0(n.effectiveDirective, n.originalPolicy ? `${a} of the policy "${Lw(n.originalPolicy, 100, "...")}"` : "no policy", n.sourceFile, n.lineNumber, n.columnNumber)
  });
}
function i0(n) {
  return {
    startClocks: dr(),
    source: Ir.REPORT,
    handling: "unhandled",
    ...n
  };
}
function o0(n, a, o, u, l) {
  return o ? Os({
    name: n,
    message: a,
    stack: [
      {
        func: "?",
        url: o,
        line: u ?? void 0,
        column: l ?? void 0
      }
    ]
  }) : void 0;
}
function jb(n, a) {
  const o = window.__ddBrowserSdkExtensionCallback;
  o && o({ type: n, payload: a });
}
function Bp(n, a, o = AP()) {
  if (a === void 0)
    return n;
  if (typeof a != "object" || a === null)
    return a;
  if (a instanceof Date)
    return new Date(a.getTime());
  if (a instanceof RegExp) {
    const l = a.flags || // old browsers compatibility
    [
      a.global ? "g" : "",
      a.ignoreCase ? "i" : "",
      a.multiline ? "m" : "",
      a.sticky ? "y" : "",
      a.unicode ? "u" : ""
    ].join("");
    return new RegExp(a.source, l);
  }
  if (o.hasAlreadyBeenSeen(a))
    return;
  if (Array.isArray(a)) {
    const l = Array.isArray(n) ? n : [];
    for (let f = 0; f < a.length; ++f)
      l[f] = Bp(l[f], a[f], o);
    return l;
  }
  const u = Oo(n) === "object" ? n : {};
  for (const l in a)
    Object.prototype.hasOwnProperty.call(a, l) && (u[l] = Bp(u[l], a[l], o));
  return u;
}
function rh(n) {
  return Bp(void 0, n);
}
function Wr(...n) {
  let a;
  for (const o of n)
    o != null && (a = Bp(a, o));
  return a;
}
function AP() {
  if (typeof WeakSet < "u") {
    const a = /* @__PURE__ */ new WeakSet();
    return {
      hasAlreadyBeenSeen(o) {
        const u = a.has(o);
        return u || a.add(o), u;
      }
    };
  }
  const n = [];
  return {
    hasAlreadyBeenSeen(a) {
      const o = n.indexOf(a) >= 0;
      return o || n.push(a), o;
    }
  };
}
function s0() {
  var n;
  const a = window.navigator;
  return {
    status: a.onLine ? "connected" : "not_connected",
    interfaces: a.connection && a.connection.type ? [a.connection.type] : void 0,
    effective_type: (n = a.connection) === null || n === void 0 ? void 0 : n.effectiveType
  };
}
function DP(n) {
  const a = /* @__PURE__ */ new Set();
  return n.forEach((o) => a.add(o)), Array.from(a);
}
function u0(n, a) {
  const o = n.indexOf(a);
  o >= 0 && n.splice(o, 1);
}
const kP = 500;
function Fb() {
  const n = [];
  return {
    add: (l) => {
      n.push(l) > kP && n.splice(0, 1);
    },
    remove: (l) => {
      u0(n, l);
    },
    drain: (l) => {
      n.forEach((f) => f(l)), n.length = 0;
    }
  };
}
const _s = {
  log: "log",
  configuration: "configuration",
  usage: "usage"
}, LP = [
  "https://www.datadoghq-browser-agent.com",
  "https://www.datad0g-browser-agent.com",
  "https://d3uc069fcn7uxw.cloudfront.net",
  "https://d20xtzwzcl0ceb.cloudfront.net",
  "http://localhost",
  "<anonymous>"
], NP = [Pz];
let l0 = Fb(), Ju = (n) => {
  l0.add(() => Ju(n));
};
function c0(n, a) {
  let o;
  const u = new jt(), l = /* @__PURE__ */ new Set(), f = !NP.includes(a.site) && Co(a.telemetrySampleRate), d = {
    [_s.log]: f,
    [_s.configuration]: f && Co(a.telemetryConfigurationSampleRate),
    [_s.usage]: f && Co(a.telemetryUsageSampleRate)
  }, m = MP();
  Ju = (y) => {
    const _ = ws(y);
    if (d[y.type] && l.size < a.maxTelemetryEventsPerPage && !l.has(_)) {
      const R = g(n, y, m);
      u.notify(R), jb("telemetry", R), l.add(_);
    }
  }, nz($p);
  function g(y, _, R) {
    return Wr({
      type: "telemetry",
      date: nr(),
      service: y,
      version: "6.2.0",
      source: "browser",
      _dd: {
        format_version: 2
      },
      telemetry: Wr(_, {
        runtime_env: R,
        connectivity: s0(),
        sdk_setup: "npm"
      }),
      experimental_features: Array.from(eP())
    }, o !== void 0 ? o() : {});
  }
  return {
    setContextProvider: (y) => {
      o = y;
    },
    observable: u,
    enabled: f
  };
}
function MP() {
  return {
    is_local_file: window.location.protocol === "file:",
    is_worker: "WorkerGlobalScope" in self
  };
}
function f0() {
  l0.drain();
}
function d0(n) {
  return n.site === Vw;
}
function As(n, a) {
  ab(yn.debug, n, a), Ju({
    type: _s.log,
    message: n,
    status: "debug",
    ...a
  });
}
function $p(n, a) {
  Ju({
    type: _s.log,
    status: "error",
    ...IP(n),
    ...a
  });
}
function p0(n) {
  Ju({
    type: _s.configuration,
    configuration: n
  });
}
function Ln(n) {
  Ju({
    type: _s.usage,
    usage: n
  });
}
function IP(n) {
  if (ji(n)) {
    const a = ai(n);
    return {
      error: {
        kind: a.name,
        stack: Os(UP(a))
      },
      message: a.message
    };
  }
  return {
    error: {
      stack: Jw
    },
    message: `Uncaught ${ws(n)}`
  };
}
function UP(n) {
  return n.stack = n.stack.filter((a) => !a.url || LP.some((o) => a.url.startsWith(o))), n;
}
const Fc = 1 / 0, jP = Mr;
function Zu({ expireDelay: n, maxEntries: a }) {
  let o = [];
  const u = [], l = Xu(() => f(), jP);
  function f() {
    const D = pa() - n;
    for (; o.length > 0 && o[o.length - 1].endTime < D; ) {
      const P = o.pop();
      P && u.push(P.startTime);
    }
  }
  function d(D, P) {
    const Y = {
      value: D,
      startTime: P,
      endTime: Fc,
      remove: () => {
        u0(o, Y);
      },
      close: (H) => {
        Y.endTime = H;
      }
    };
    return a && o.length >= a && o.pop(), o.unshift(Y), Y;
  }
  function m(D = Fc, P = { returnInactive: !1 }) {
    for (const Y of o)
      if (Y.startTime <= D) {
        if (P.returnInactive || D <= Y.endTime)
          return Y.value;
        break;
      }
  }
  function g(D) {
    const P = o[0];
    P && P.endTime === Fc && P.close(D);
  }
  function y(D = Fc, P = 0) {
    const Y = Ku(D, P);
    return o.filter((H) => H.startTime <= Y && D <= H.endTime).map((H) => H.value);
  }
  function _() {
    return o.map(({ startTime: D, endTime: P, value: Y }) => ({
      startTime: D,
      endTime: P === Fc ? "Infinity" : P,
      value: Y
    }));
  }
  function R() {
    return u;
  }
  function T() {
    o = [];
  }
  function w() {
    th(l);
  }
  return { add: d, find: m, closeActive: g, findAll: y, reset: T, stop: w, getAllEntries: _, getDeletedEntries: R };
}
const FP = Mr, zP = xs;
function h0(n, a, o, u) {
  const l = new jt(), f = new jt(), d = Mz(n.sessionStoreStrategyType, n, a, o), m = Zu({
    expireDelay: zP
  });
  d.renewObservable.subscribe(() => {
    m.add(g(), pa()), l.notify();
  }), d.expireObservable.subscribe(() => {
    f.notify(), m.closeActive(pa());
  }), d.expandOrRenewSession(), m.add(g(), ww().relative), u.observable.subscribe(() => {
    u.isGranted() ? d.expandOrRenewSession() : d.expire();
  }), PP(n, () => {
    u.isGranted() && d.expandOrRenewSession();
  }), BP(n, () => d.expandSession()), $P(n, () => d.restartSession());
  function g() {
    return {
      id: d.getSession().id,
      trackingType: d.getSession()[a],
      isReplayForced: !!d.getSession().forcedReplay,
      anonymousId: d.getSession().anonymousId
    };
  }
  return {
    findSession: (y, _) => m.find(y, _),
    renewObservable: l,
    expireObservable: f,
    sessionStateUpdateObservable: d.sessionStateUpdateObservable,
    expire: d.expire,
    updateSessionState: d.updateSessionState
  };
}
function PP(n, a) {
  const { stop: o } = wo(n, window, [
    "click",
    "touchstart",
    "keydown",
    "scroll"
    /* DOM_EVENT.SCROLL */
  ], a, { capture: !0, passive: !0 });
}
function BP(n, a) {
  const o = () => {
    document.visibilityState === "visible" && a();
  }, { stop: u } = ln(n, document, "visibilitychange", o);
  Xu(o, FP);
}
function $P(n, a) {
  const { stop: o } = ln(n, window, "resume", a, { capture: !0 });
}
function v0(n) {
  return n >= 500;
}
function m0(n) {
  try {
    return n.clone();
  } catch {
    return;
  }
}
const HP = 80 * Mi, VP = 32, y0 = 3 * Ow, qP = Mr, g0 = _r;
function b0(n, a, o, u, l) {
  a.transportStatus === 0 && a.queuedPayloads.size() === 0 && a.bandwidthMonitor.canHandle(n) ? E0(n, a, o, {
    onSuccess: () => _0(0, a, o, u, l),
    onFailure: () => {
      a.queuedPayloads.enqueue(n), S0(a, o, u, l);
    }
  }) : a.queuedPayloads.enqueue(n);
}
function S0(n, a, o, u) {
  n.transportStatus === 2 && fr(() => {
    const l = n.queuedPayloads.first();
    E0(l, n, a, {
      onSuccess: () => {
        n.queuedPayloads.dequeue(), n.currentBackoffTime = g0, _0(1, n, a, o, u);
      },
      onFailure: () => {
        n.currentBackoffTime = Math.min(qP, n.currentBackoffTime * 2), S0(n, a, o, u);
      }
    });
  }, n.currentBackoffTime);
}
function E0(n, a, o, { onSuccess: u, onFailure: l }) {
  a.bandwidthMonitor.add(n), o(n, (f) => {
    a.bandwidthMonitor.remove(n), YP(f) ? (a.transportStatus = a.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, n.retry = {
      count: n.retry ? n.retry.count + 1 : 1,
      lastFailureStatus: f.status
    }, l()) : (a.transportStatus = 0, u());
  });
}
function _0(n, a, o, u, l) {
  n === 0 && a.queuedPayloads.isFull() && !a.queueFullReported && (l({
    message: `Reached max ${u} events size queued for upload: ${y0 / Ow}MiB`,
    source: Ir.AGENT,
    startClocks: dr()
  }), a.queueFullReported = !0);
  const f = a.queuedPayloads;
  for (a.queuedPayloads = T0(); f.size() > 0; )
    b0(f.dequeue(), a, o, u, l);
}
function YP(n) {
  return n.type !== "opaque" && (n.status === 0 && !navigator.onLine || n.status === 408 || n.status === 429 || v0(n.status));
}
function GP() {
  return {
    transportStatus: 0,
    currentBackoffTime: g0,
    bandwidthMonitor: WP(),
    queuedPayloads: T0(),
    queueFullReported: !1
  };
}
function T0() {
  const n = [];
  return {
    bytesCount: 0,
    enqueue(a) {
      this.isFull() || (n.push(a), this.bytesCount += a.bytesCount);
    },
    first() {
      return n[0];
    },
    dequeue() {
      const a = n.shift();
      return a && (this.bytesCount -= a.bytesCount), a;
    },
    size() {
      return n.length;
    },
    isFull() {
      return this.bytesCount >= y0;
    }
  };
}
function WP() {
  return {
    ongoingRequestCount: 0,
    ongoingByteCount: 0,
    canHandle(n) {
      return this.ongoingRequestCount === 0 || this.ongoingByteCount + n.bytesCount <= HP && this.ongoingRequestCount < VP;
    },
    add(n) {
      this.ongoingRequestCount += 1, this.ongoingByteCount += n.bytesCount;
    },
    remove(n) {
      this.ongoingRequestCount -= 1, this.ongoingByteCount -= n.bytesCount;
    }
  };
}
function KP(n, a, o) {
  const u = GP(), l = (f, d) => JP(n, a, f, d);
  return {
    send: (f) => {
      b0(f, u, l, n.trackType, o);
    },
    /**
     * Since fetch keepalive behaves like regular fetch on Firefox,
     * keep using sendBeaconStrategy on exit
     */
    sendOnExit: (f) => {
      XP(n, a, f);
    }
  };
}
function XP(n, a, o) {
  if (!!navigator.sendBeacon && o.bytesCount < a)
    try {
      const f = n.build("beacon", o);
      if (navigator.sendBeacon(f, o.data))
        return;
    } catch (f) {
      QP(f);
    }
  const l = n.build("xhr", o);
  ub(l, o.data);
}
let PR = !1;
function QP(n) {
  PR || (PR = !0, $p(n));
}
function JP(n, a, o, u) {
  if (ZP() && o.bytesCount < a) {
    const f = n.build("fetch", o);
    fetch(f, { method: "POST", body: o.data, keepalive: !0, mode: "cors" }).then(Re((d) => u == null ? void 0 : u({ status: d.status, type: d.type })), Re(() => {
      const d = n.build("xhr", o);
      ub(d, o.data, u);
    }));
  } else {
    const f = n.build("xhr", o);
    ub(f, o.data, u);
  }
}
function ZP() {
  try {
    return window.Request && "keepalive" in new Request("http://a");
  } catch {
    return !1;
  }
}
function ub(n, a, o) {
  const u = new XMLHttpRequest();
  u.open("POST", n, !0), a instanceof Blob && u.setRequestHeader("Content-Type", a.type), ln(
    // allow untrusted event to acount for synthetic event dispatched by third party xhr wrapper
    { allowUntrustedEvents: !0 },
    u,
    "loadend",
    () => {
      o == null || o({ status: u.status });
    },
    {
      // prevent multiple onResponse callbacks
      // if the xhr instance is reused by a third party
      once: !0
    }
  ), u.send(a);
}
function Ds() {
  const n = eB();
  if (n)
    return {
      getCapabilities() {
        var a;
        return JSON.parse(((a = n.getCapabilities) === null || a === void 0 ? void 0 : a.call(n)) || "[]");
      },
      getPrivacyLevel() {
        var a;
        return (a = n.getPrivacyLevel) === null || a === void 0 ? void 0 : a.call(n);
      },
      getAllowedWebViewHosts() {
        return JSON.parse(n.getAllowedWebViewHosts());
      },
      send(a, o, u) {
        const l = u ? { id: u } : void 0;
        n.send(JSON.stringify({ eventType: a, event: o, view: l }));
      }
    };
}
function C0(n) {
  const a = Ds();
  return !!a && a.getCapabilities().includes(n);
}
function ni(n) {
  var a;
  n === void 0 && (n = (a = Ui().location) === null || a === void 0 ? void 0 : a.hostname);
  const o = Ds();
  return !!o && o.getAllowedWebViewHosts().some((u) => n === u || n.endsWith(`.${u}`));
}
function eB() {
  return Ui().DatadogEventBridge;
}
const $u = {
  HIDDEN: "visibility_hidden",
  UNLOADING: "before_unload",
  PAGEHIDE: "page_hide",
  FROZEN: "page_frozen"
};
function R0(n) {
  return new jt((a) => {
    const { stop: o } = wo(n, window, [
      "visibilitychange",
      "freeze"
      /* DOM_EVENT.FREEZE */
    ], (l) => {
      l.type === "visibilitychange" && document.visibilityState === "hidden" ? a.notify({ reason: $u.HIDDEN }) : l.type === "freeze" && a.notify({ reason: $u.FROZEN });
    }, { capture: !0 }), u = ln(n, window, "beforeunload", () => {
      a.notify({ reason: $u.UNLOADING });
    }).stop;
    return () => {
      o(), u();
    };
  });
}
function tB(n) {
  return Fp($u).includes(n);
}
function nB({ encoder: n, request: a, flushController: o, messageBytesLimit: u }) {
  let l = {};
  const f = o.flushObservable.subscribe((R) => _(R));
  function d(R, T, w) {
    o.notifyBeforeAddMessage(T), w !== void 0 ? (l[w] = R, o.notifyAfterAddMessage()) : n.write(n.isEmpty ? R : `
${R}`, (D) => {
      o.notifyAfterAddMessage(D - T);
    });
  }
  function m(R) {
    return R !== void 0 && l[R] !== void 0;
  }
  function g(R) {
    const T = l[R];
    delete l[R];
    const w = n.estimateEncodedBytesCount(T);
    o.notifyAfterRemoveMessage(w);
  }
  function y(R, T) {
    const w = ws(R), D = n.estimateEncodedBytesCount(w);
    if (D >= u) {
      kt.warn(`Discarded a message whose size was bigger than the maximum allowed size ${u}KB. ${Jp} ${Tw}/#technical-limitations`);
      return;
    }
    m(T) && g(T), d(w, D, T);
  }
  function _(R) {
    const T = Fp(l).join(`
`);
    l = {};
    const w = tB(R.reason), D = w ? a.sendOnExit : a.send;
    if (w && // Note: checking that the encoder is async is not strictly needed, but it's an optimization:
    // if the encoder is async we need to send two requests in some cases (one for encoded data
    // and the other for non-encoded data). But if it's not async, we don't have to worry about
    // it and always send a single request.
    n.isAsync) {
      const P = n.finishSync();
      P.outputBytesCount && D(BR(P));
      const Y = [P.pendingData, T].filter(Boolean).join(`
`);
      Y && D({
        data: Y,
        bytesCount: Ob(Y)
      });
    } else
      T && n.write(n.isEmpty ? T : `
${T}`), n.finish((P) => {
        D(BR(P));
      });
  }
  return {
    flushController: o,
    add: y,
    upsert: y,
    stop: f.unsubscribe
  };
}
function BR(n) {
  let a;
  return typeof n.output == "string" ? a = n.output : a = new Blob([n.output], {
    // This will set the 'Content-Type: text/plain' header. Reasoning:
    // * The intake rejects the request if there is no content type.
    // * The browser will issue CORS preflight requests if we set it to 'application/json', which
    // could induce higher intake load (and maybe has other impacts).
    // * Also it's not quite JSON, since we are concatenating multiple JSON objects separated by
    // new lines.
    type: "text/plain"
  }), {
    data: a,
    bytesCount: n.outputBytesCount,
    encoding: n.encoding
  };
}
function rB({ messagesLimit: n, bytesLimit: a, durationLimit: o, pageExitObservable: u, sessionExpireObservable: l }) {
  const f = u.subscribe((D) => _(D.reason)), d = l.subscribe(() => _("session_expire")), m = new jt(() => () => {
    f.unsubscribe(), d.unsubscribe();
  });
  let g = 0, y = 0;
  function _(D) {
    if (y === 0)
      return;
    const P = y, Y = g;
    y = 0, g = 0, w(), m.notify({
      reason: D,
      messagesCount: P,
      bytesCount: Y
    });
  }
  let R;
  function T() {
    R === void 0 && (R = fr(() => {
      _("duration_limit");
    }, o));
  }
  function w() {
    fa(R), R = void 0;
  }
  return {
    flushObservable: m,
    get messagesCount() {
      return y;
    },
    /**
     * Notifies that a message will be added to a pool of pending messages waiting to be flushed.
     *
     * This function needs to be called synchronously, right before adding the message, so no flush
     * event can happen after `notifyBeforeAddMessage` and before adding the message.
     *
     * @param estimatedMessageBytesCount: an estimation of the message bytes count once it is
     * actually added.
     */
    notifyBeforeAddMessage(D) {
      g + D >= a && _("bytes_limit"), y += 1, g += D, T();
    },
    /**
     * Notifies that a message *was* added to a pool of pending messages waiting to be flushed.
     *
     * This function can be called asynchronously after the message was added, but in this case it
     * should not be called if a flush event occurred in between.
     *
     * @param messageBytesCountDiff: the difference between the estimated message bytes count and
     * its actual bytes count once added to the pool.
     */
    notifyAfterAddMessage(D = 0) {
      g += D, y >= n ? _("messages_limit") : g >= a && _("bytes_limit");
    },
    /**
     * Notifies that a message was removed from a pool of pending messages waiting to be flushed.
     *
     * This function needs to be called synchronously, right after removing the message, so no flush
     * event can happen after removing the message and before `notifyAfterRemoveMessage`.
     *
     * @param messageBytesCount: the message bytes count that was added to the pool. Should
     * correspond to the sum of bytes counts passed to `notifyBeforeAddMessage` and
     * `notifyAfterAddMessage`.
     */
    notifyAfterRemoveMessage(D) {
      g -= D, y -= 1, y === 0 && w();
    }
  };
}
function zb(n, a, o, u, l, f, d = nB) {
  const m = y(n, a), g = o && y(n, o);
  function y(_, { endpoint: R, encoder: T }) {
    return d({
      encoder: T,
      request: KP(R, _.batchBytesLimit, u),
      flushController: rB({
        messagesLimit: _.batchMessagesLimit,
        bytesLimit: _.batchBytesLimit,
        durationLimit: _.flushTimeout,
        pageExitObservable: l,
        sessionExpireObservable: f
      }),
      messageBytesLimit: _.messageBytesLimit
    });
  }
  return {
    flushObservable: m.flushController.flushObservable,
    add(_, R = !0) {
      m.add(_), g && R && g.add(o.transformMessage ? o.transformMessage(_) : _);
    },
    upsert: (_, R) => {
      m.upsert(_, R), g && g.upsert(o.transformMessage ? o.transformMessage(_) : _, R);
    },
    stop: () => {
      m.stop(), g && g.stop();
    }
  };
}
function ef() {
  let n = "", a = 0;
  return {
    isAsync: !1,
    get isEmpty() {
      return !n;
    },
    write(o, u) {
      const l = Ob(o);
      a += l, n += o, u && u(l);
    },
    finish(o) {
      o(this.finishSync());
    },
    finishSync() {
      const o = {
        output: n,
        outputBytesCount: a,
        rawBytesCount: a,
        pendingData: ""
      };
      return n = "", a = 0, o;
    },
    estimateEncodedBytesCount(o) {
      return o.length;
    }
  };
}
class x0 {
  constructor() {
    this.callbacks = {};
  }
  notify(a, o) {
    const u = this.callbacks[a];
    u && u.forEach((l) => l(o));
  }
  subscribe(a, o) {
    return this.callbacks[a] || (this.callbacks[a] = []), this.callbacks[a].push(o), {
      unsubscribe: () => {
        this.callbacks[a] = this.callbacks[a].filter((u) => o !== u);
      }
    };
  }
}
function Rp(n, a, o) {
  let u = 0, l = !1;
  return {
    isLimitReached() {
      if (u === 0 && fr(() => {
        u = 0;
      }, Mr), u += 1, u <= a || l)
        return l = !1, !1;
      if (u === a + 1) {
        l = !0;
        try {
          o({
            message: `Reached max number of ${n}s by minute: ${a}`,
            source: Ir.AGENT,
            startClocks: dr()
          });
        } finally {
          l = !1;
        }
      }
      return !0;
    }
  };
}
function Pb(n, a, o) {
  return document.readyState === a || document.readyState === "complete" ? (o(), { stop: Vt }) : ln(n, window, a === "complete" ? "load" : "DOMContentLoaded", o, { once: !0 });
}
function aB(n, a) {
  return new Promise((o) => {
    Pb(n, a, o);
  });
}
let zg;
const Bb = /* @__PURE__ */ new WeakMap();
function w0(n) {
  return zg || (zg = iB(n)), zg;
}
function iB(n) {
  return new jt((a) => {
    const { stop: o } = ti(XMLHttpRequest.prototype, "open", oB), { stop: u } = ti(XMLHttpRequest.prototype, "send", (f) => {
      sB(f, n, a);
    }, { computeHandlingStack: !0 }), { stop: l } = ti(XMLHttpRequest.prototype, "abort", uB);
    return () => {
      o(), u(), l();
    };
  });
}
function oB({ target: n, parameters: [a, o] }) {
  Bb.set(n, {
    state: "open",
    method: String(a).toUpperCase(),
    url: Nb(String(o))
  });
}
function sB({ target: n, handlingStack: a }, o, u) {
  const l = Bb.get(n);
  if (!l)
    return;
  const f = l;
  f.state = "start", f.startClocks = dr(), f.isAborted = !1, f.xhr = n, f.handlingStack = a;
  let d = !1;
  const { stop: m } = ti(n, "onreadystatechange", () => {
    n.readyState === XMLHttpRequest.DONE && g();
  }), g = () => {
    if (y(), m(), d)
      return;
    d = !0;
    const _ = l;
    _.state = "complete", _.duration = rr(f.startClocks.timeStamp, nr()), _.status = n.status, u.notify(Xc(_));
  }, { stop: y } = ln(o, n, "loadend", g);
  u.notify(f);
}
function uB({ target: n }) {
  const a = Bb.get(n);
  a && (a.isAborted = !0);
}
let Pg;
function ah() {
  return Pg || (Pg = lB()), Pg;
}
function lB() {
  return new jt((n) => {
    if (!window.fetch)
      return;
    const { stop: a } = ti(window, "fetch", (o) => cB(o, n), {
      computeHandlingStack: !0
    });
    return a;
  });
}
function cB({ parameters: n, onPostCall: a, handlingStack: o }, u) {
  const [l, f] = n;
  let d = f && f.method;
  d === void 0 && l instanceof Request && (d = l.method);
  const m = d !== void 0 ? String(d).toUpperCase() : "GET", g = l instanceof Request ? l.url : Nb(String(l)), y = dr(), _ = {
    state: "start",
    init: f,
    input: l,
    method: m,
    startClocks: y,
    url: g,
    handlingStack: o
  };
  u.notify(_), n[0] = _.input, n[1] = _.init, a((R) => fB(u, R, _));
}
function fB(n, a, o) {
  const u = o;
  function l(f) {
    u.state = "resolve", Object.assign(u, f), n.notify(u);
  }
  a.then(Re((f) => {
    l({
      response: f,
      responseType: f.type,
      status: f.status,
      isAborted: !1
    });
  }), Re((f) => {
    var d, m;
    l({
      status: 0,
      isAborted: ((m = (d = u.init) === null || d === void 0 ? void 0 : d.signal) === null || m === void 0 ? void 0 : m.aborted) || f instanceof DOMException && f.code === DOMException.ABORT_ERR,
      error: f
    });
  }));
}
function dB(n, a) {
  if (window.requestIdleCallback && window.cancelIdleCallback) {
    const o = window.requestIdleCallback(Re(n), a);
    return () => window.cancelIdleCallback(o);
  }
  return hB(n);
}
const pB = 50;
function hB(n) {
  const a = da(), o = fr(() => {
    n({
      didTimeout: !1,
      timeRemaining: () => Math.max(0, pB - (da() - a))
    });
  }, 0);
  return () => fa(o);
}
const vB = _r, mB = 30;
function yB() {
  const n = [];
  function a(u) {
    let l;
    if (u.didTimeout) {
      const f = performance.now();
      l = () => mB - (performance.now() - f);
    } else
      l = u.timeRemaining.bind(u);
    for (; l() > 0 && n.length; )
      n.shift()();
    n.length && o();
  }
  function o() {
    dB(a, { timeout: vB });
  }
  return {
    push(u) {
      n.push(u) === 1 && o();
    }
  };
}
let Bg = {};
function O0(n) {
  const a = n.map((o) => (Bg[o] || (Bg[o] = gB(o)), Bg[o]));
  return kw(...a);
}
function gB(n) {
  return new jt((a) => {
    const o = Za[n];
    return Za[n] = (...u) => {
      o.apply(console, u);
      const l = Vu();
      Cs(() => {
        a.notify(bB(u, n, l));
      });
    }, () => {
      Za[n] = o;
    };
  });
}
function bB(n, a, o) {
  const u = n.map((f) => SB(f)).join(" ");
  let l;
  if (a === yn.error) {
    const f = n.find(ji);
    l = {
      stack: f ? Os(ai(f)) : void 0,
      fingerprint: Zw(f),
      causes: f ? e0(f, "console") : void 0,
      startClocks: dr(),
      message: u,
      source: Ir.CONSOLE,
      handling: "handled",
      handlingStack: o
    };
  }
  return {
    api: a,
    message: u,
    error: l,
    handlingStack: o
  };
}
function SB(n) {
  return typeof n == "string" ? sn(n) : ji(n) ? Qw(ai(n)) : ws(sn(n), void 0, 2);
}
function Yu(n) {
  let a = {};
  const o = new jt(), u = {
    getContext: () => rh(a),
    setContext: (l) => {
      Oo(l) === "object" ? (a = sn(l), n == null || n.updateCustomerData(a)) : u.clearContext(), o.notify();
    },
    setContextProperty: (l, f) => {
      a[l] = sn(f), n == null || n.updateCustomerData(a), o.notify();
    },
    removeContextProperty: (l) => {
      delete a[l], n == null || n.updateCustomerData(a), o.notify();
    },
    clearContext: () => {
      a = {}, n == null || n.resetCustomerData(), o.notify();
    },
    changeObservable: o
  };
  return u;
}
const EB = "_dd_c", _B = [];
function Hp(n, a, o, u) {
  const l = TB(o, u);
  _B.push(ln(n, window, "storage", ({ key: g }) => {
    l === g && f();
  })), a.changeObservable.subscribe(d), a.setContext(Wr(m(), a.getContext()));
  function f() {
    a.setContext(m());
  }
  function d() {
    localStorage.setItem(l, JSON.stringify(a.getContext()));
  }
  function m() {
    const g = localStorage.getItem(l);
    return g !== null ? JSON.parse(g) : {};
  }
}
function TB(n, a) {
  return `${EB}_${n}_${a}`;
}
const CB = 3 * Mi, RB = 16 * Mi, xB = 200;
function A0(n = 2) {
  const a = /* @__PURE__ */ new Map();
  let o = !1;
  function u(l = 0) {
    if (o || n === 0)
      return;
    const f = n === 2 ? CB : RB;
    let d = l;
    a.forEach((m) => {
      d += m.getBytesCount();
    }), d > f && (wB(f), o = !0);
  }
  return {
    /**
     * Creates a detached tracker. The manager will not store a reference to that tracker, and the
     * bytes count will be counted independently from other detached trackers.
     *
     * This is particularly useful when we don't know when the tracker will be unused, so we don't
     * leak memory (ex: when used in Logger instances).
     */
    createDetachedTracker: () => {
      const l = $R(() => u(l.getBytesCount()));
      return l;
    },
    /**
     * Creates a tracker if it doesn't exist, and returns it.
     */
    getOrCreateTracker: (l) => (a.has(l) || a.set(l, $R(u)), a.get(l)),
    setCompressionStatus: (l) => {
      n === 0 && (n = l, u());
    },
    getCompressionStatus: () => n,
    stop: () => {
      a.forEach((l) => l.stop()), a.clear();
    }
  };
}
function $R(n) {
  let a = 0;
  const { throttled: o, cancel: u } = of((f) => {
    a = Ob(ws(f)), n();
  }, xB), l = () => {
    u(), a = 0;
  };
  return {
    updateCustomerData: (f) => {
      Ts(f) ? l() : o(f);
    },
    resetCustomerData: l,
    getBytesCount: () => a,
    stop: () => {
      u();
    }
  };
}
function wB(n) {
  kt.warn(`Customer data exceeds the recommended ${n / Mi}KiB threshold. ${Jp} ${Tw}/#customer-data-exceeds-the-recommended-threshold-warning`);
}
function D0(n, a, o) {
  const u = n.getReader(), l = [];
  let f = 0;
  d();
  function d() {
    u.read().then(Re((g) => {
      if (g.done) {
        m();
        return;
      }
      o.collectStreamBody && l.push(g.value), f += g.value.length, f > o.bytesLimit ? m() : d();
    }), Re((g) => a(g)));
  }
  function m() {
    u.cancel().catch(
      // we don't care if cancel fails, but we still need to catch the error to avoid reporting it
      // as an unhandled rejection
      Vt
    );
    let g, y;
    if (o.collectStreamBody) {
      let _;
      if (l.length === 1)
        _ = l[0];
      else {
        _ = new Uint8Array(f);
        let R = 0;
        l.forEach((T) => {
          _.set(T, R), R += T.length;
        });
      }
      g = _.slice(0, o.bytesLimit), y = _.length > o.bytesLimit;
    }
    a(void 0, g, y);
  }
}
const OB = "datadog-synthetics-public-id", AB = "datadog-synthetics-result-id", DB = "datadog-synthetics-injects-rum";
function ih() {
  return !!(window._DATADOG_SYNTHETICS_INJECTS_RUM || To(DB));
}
function k0() {
  const n = window._DATADOG_SYNTHETICS_PUBLIC_ID || To(OB);
  return typeof n == "string" ? n : void 0;
}
function L0() {
  const n = window._DATADOG_SYNTHETICS_RESULT_ID || To(AB);
  return typeof n == "string" ? n : void 0;
}
function $b(n) {
  const a = Oo(n);
  return a === "string" || a === "function" || n instanceof RegExp;
}
function N0(n, a, o = !1) {
  return n.some((u) => {
    try {
      if (typeof u == "function")
        return u(a);
      if (u instanceof RegExp)
        return u.test(a);
      if (typeof u == "string")
        return o ? a.startsWith(u) : u === a;
    } catch (l) {
      kt.error(l);
    }
    return !1;
  });
}
function kB(n, a, o) {
  return {
    context: n.getContext(),
    user: a.getContext(),
    hasReplay: o.isRecording() ? !0 : void 0
  };
}
function LB() {
  return { vitalsByName: /* @__PURE__ */ new Map(), vitalsByReference: /* @__PURE__ */ new WeakMap() };
}
function NB(n, a, o) {
  function u(f) {
    return !a.wasInPageStateDuringPeriod("frozen", f.startClocks.relative, f.duration);
  }
  function l(f) {
    u(f) && n.notify(12, IB(f));
  }
  return {
    addDurationVital: l,
    startDurationVital: (f, d = {}) => M0(o, f, d),
    stopDurationVital: (f, d = {}) => {
      I0(l, o, f, d);
    }
  };
}
function M0({ vitalsByName: n, vitalsByReference: a }, o, u = {}) {
  const l = {
    name: o,
    startClocks: dr(),
    context: u.context,
    description: u.description
  }, f = { __dd_vital_reference: !0 };
  return n.set(o, l), a.set(f, l), f;
}
function I0(n, { vitalsByName: a, vitalsByReference: o }, u, l = {}) {
  const f = typeof u == "string" ? a.get(u) : o.get(u);
  f && (n(MB(f, f.startClocks, l, dr())), typeof u == "string" ? a.delete(u) : o.delete(u));
}
function MB(n, a, o, u) {
  var l;
  return {
    name: n.name,
    type: "duration",
    startClocks: a,
    duration: rr(a.timeStamp, u.timeStamp),
    context: Wr(n.context, o.context),
    description: (l = o.description) !== null && l !== void 0 ? l : n.description
  };
}
function IB(n, a) {
  const o = {
    date: n.startClocks.timeStamp,
    vital: {
      id: pr(),
      type: n.type,
      name: n.name,
      duration: ot(n.duration),
      description: n.description
    },
    type: "vital"
  };
  return o._dd = {
    vital: {
      computed_value: !0
    }
  }, {
    rawRumEvent: o,
    startTime: n.startClocks.relative,
    customerContext: n.context,
    domainContext: {}
  };
}
function U0(n, a, o) {
  if (n)
    for (const u of n) {
      const l = u[a];
      l && l(o);
    }
}
function j0() {
  return window.crypto || window.msCrypto;
}
function UB() {
  return z0(64);
}
function F0() {
  return z0(63);
}
let $g;
function z0(n) {
  return $g || ($g = Zc(xo.CONSISTENT_TRACE_SAMPLING) && jB() ? FB : zB), $g(n);
}
function jB() {
  try {
    return crypto.getRandomValues(new BigUint64Array(1)), !0;
  } catch {
    return !1;
  }
}
function FB(n) {
  let a = crypto.getRandomValues(new BigUint64Array(1))[0];
  return n === 63 && (a >>= BigInt("1")), a;
}
function zB(n) {
  const a = j0().getRandomValues(new Uint32Array(2));
  return n === 63 && (a[a.length - 1] >>>= 1), {
    toString(o = 10) {
      let u = a[1], l = a[0], f = "";
      do {
        const d = u % o * 4294967296 + l;
        u = Math.floor(u / o), l = Math.floor(d / o), f = (d % o).toString(o) + f;
      } while (u || l);
      return f;
    }
  };
}
function Iu(n) {
  const a = n.toString(16);
  return Array(17 - a.length).join("0") + a;
}
function PB(n, a) {
  if (a === 100)
    return !0;
  if (a === 0)
    return !1;
  if (typeof n != "bigint")
    return Co(a);
  const o = BigInt("1111111111111111111"), u = BigInt("0x10000000000000000"), l = n * o % u;
  return Number(l) <= a / 100 * Number(u);
}
function BB(n) {
  const a = n;
  return Oo(a) === "object" && $b(a.match) && Array.isArray(a.propagatorTypes);
}
function $B(n) {
  n.status === 0 && !n.isAborted && (n.traceId = void 0, n.spanId = void 0, n.traceSampled = void 0);
}
function HB(n, a) {
  return {
    clearTracingIfNeeded: $B,
    traceFetch: (o) => HR(n, o, a, (u) => {
      var l;
      if (o.input instanceof Request && !(!((l = o.init) === null || l === void 0) && l.headers))
        o.input = new Request(o.input), Object.keys(u).forEach((f) => {
          o.input.headers.append(f, u[f]);
        });
      else {
        o.init = Xc(o.init);
        const f = [];
        o.init.headers instanceof Headers ? o.init.headers.forEach((d, m) => {
          f.push([m, d]);
        }) : Array.isArray(o.init.headers) ? o.init.headers.forEach((d) => {
          f.push(d);
        }) : o.init.headers && Object.keys(o.init.headers).forEach((d) => {
          f.push([d, o.init.headers[d]]);
        }), o.init.headers = f.concat(Db(u));
      }
    }),
    traceXhr: (o, u) => HR(n, o, a, (l) => {
      Object.keys(l).forEach((f) => {
        u.setRequestHeader(f, l[f]);
      });
    })
  };
}
function HR(n, a, o, u) {
  if (!VB() || !o.findTrackedSession())
    return;
  const l = n.allowedTracingUrls.find((m) => N0([m.match], a.url, !0));
  if (!l)
    return;
  const f = UB();
  a.traceSampled = PB(f, n.traceSampleRate), (a.traceSampled || n.traceContextInjection === ob.ALL) && (a.traceId = f, a.spanId = F0(), u(qB(a.traceId, a.spanId, a.traceSampled, l.propagatorTypes)));
}
function VB() {
  return j0() !== void 0;
}
function qB(n, a, o, u) {
  const l = {};
  return u.forEach((f) => {
    switch (f) {
      case "datadog": {
        Object.assign(l, {
          "x-datadog-origin": "rum",
          "x-datadog-parent-id": a.toString(),
          "x-datadog-sampling-priority": o ? "1" : "0",
          "x-datadog-trace-id": n.toString()
        });
        break;
      }
      // https://www.w3.org/TR/trace-context/
      case "tracecontext": {
        Object.assign(l, {
          traceparent: `00-0000000000000000${Iu(n)}-${Iu(a)}-0${o ? "1" : "0"}`,
          tracestate: `dd=s:${o ? "1" : "0"};o:rum`
        });
        break;
      }
      // https://github.com/openzipkin/b3-propagation
      case "b3": {
        Object.assign(l, {
          b3: `${Iu(n)}-${Iu(a)}-${o ? "1" : "0"}`
        });
        break;
      }
      case "b3multi": {
        Object.assign(l, {
          "X-B3-TraceId": Iu(n),
          "X-B3-SpanId": Iu(a),
          "X-B3-Sampled": o ? "1" : "0"
        });
        break;
      }
    }
  }), l;
}
const P0 = ["tracecontext", "datadog"];
function YB(n) {
  var a, o, u, l, f, d;
  if (n.trackFeatureFlagsForEvents !== void 0 && !Array.isArray(n.trackFeatureFlagsForEvents) && kt.warn("trackFeatureFlagsForEvents should be an array"), !n.applicationId) {
    kt.error("Application ID is not configured, no RUM data will be collected.");
    return;
  }
  if (!Pu(n.sessionReplaySampleRate, "Session Replay") || !Pu(n.traceSampleRate, "Trace"))
    return;
  if (n.excludedActivityUrls !== void 0 && !Array.isArray(n.excludedActivityUrls)) {
    kt.error("Excluded Activity Urls should be an array");
    return;
  }
  const m = GB(n);
  if (!m)
    return;
  const g = Gw(n);
  if (!g)
    return;
  const y = (a = n.sessionReplaySampleRate) !== null && a !== void 0 ? a : 0;
  return {
    applicationId: n.applicationId,
    version: n.version || void 0,
    actionNameAttribute: n.actionNameAttribute,
    sessionReplaySampleRate: y,
    startSessionReplayRecordingManually: n.startSessionReplayRecordingManually !== void 0 ? !!n.startSessionReplayRecordingManually : y === 0,
    traceSampleRate: (o = n.traceSampleRate) !== null && o !== void 0 ? o : 100,
    rulePsr: rf(n.traceSampleRate) ? n.traceSampleRate / 100 : void 0,
    allowedTracingUrls: m,
    excludedActivityUrls: (u = n.excludedActivityUrls) !== null && u !== void 0 ? u : [],
    workerUrl: n.workerUrl,
    compressIntakeRequests: !!n.compressIntakeRequests,
    trackUserInteractions: !!(!((l = n.trackUserInteractions) !== null && l !== void 0) || l),
    trackViewsManually: !!n.trackViewsManually,
    trackResources: !!(!((f = n.trackResources) !== null && f !== void 0) || f),
    trackLongTasks: !!(!((d = n.trackLongTasks) !== null && d !== void 0) || d),
    subdomain: n.subdomain,
    defaultPrivacyLevel: Ip(Gc, n.defaultPrivacyLevel) ? n.defaultPrivacyLevel : Gc.MASK,
    enablePrivacyForActionName: !!n.enablePrivacyForActionName,
    customerDataTelemetrySampleRate: 1,
    traceContextInjection: Ip(ob, n.traceContextInjection) ? n.traceContextInjection : ob.SAMPLED,
    plugins: n.plugins || [],
    trackFeatureFlagsForEvents: n.trackFeatureFlagsForEvents || [],
    ...g
  };
}
function GB(n) {
  if (n.allowedTracingUrls === void 0)
    return [];
  if (!Array.isArray(n.allowedTracingUrls)) {
    kt.error("Allowed Tracing URLs should be an array");
    return;
  }
  if (n.allowedTracingUrls.length !== 0 && n.service === void 0) {
    kt.error("Service needs to be configured when tracing is enabled");
    return;
  }
  const a = [];
  return n.allowedTracingUrls.forEach((o) => {
    $b(o) ? a.push({ match: o, propagatorTypes: P0 }) : BB(o) ? a.push(o) : kt.warn("Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter", o);
  }), a;
}
function WB(n) {
  const a = /* @__PURE__ */ new Set();
  return Array.isArray(n.allowedTracingUrls) && n.allowedTracingUrls.length > 0 && n.allowedTracingUrls.forEach((o) => {
    $b(o) ? P0.forEach((u) => a.add(u)) : Oo(o) === "object" && Array.isArray(o.propagatorTypes) && o.propagatorTypes.forEach((u) => a.add(u));
  }), Array.from(a);
}
function KB(n) {
  var a;
  const o = Ww(n);
  return {
    session_replay_sample_rate: n.sessionReplaySampleRate,
    start_session_replay_recording_manually: n.startSessionReplayRecordingManually,
    trace_sample_rate: n.traceSampleRate,
    trace_context_injection: n.traceContextInjection,
    action_name_attribute: n.actionNameAttribute,
    use_allowed_tracing_urls: Array.isArray(n.allowedTracingUrls) && n.allowedTracingUrls.length > 0,
    selected_tracing_propagators: WB(n),
    default_privacy_level: n.defaultPrivacyLevel,
    enable_privacy_for_action_name: n.enablePrivacyForActionName,
    use_excluded_activity_urls: Array.isArray(n.excludedActivityUrls) && n.excludedActivityUrls.length > 0,
    use_worker_url: !!n.workerUrl,
    compress_intake_requests: n.compressIntakeRequests,
    track_views_manually: n.trackViewsManually,
    track_user_interactions: n.trackUserInteractions,
    track_resources: n.trackResources,
    track_long_task: n.trackLongTasks,
    plugins: (a = n.plugins) === null || a === void 0 ? void 0 : a.map((u) => {
      var l;
      return {
        name: u.name,
        ...(l = u.getConfigurationTelemetry) === null || l === void 0 ? void 0 : l.call(u)
      };
    }),
    track_feature_flags_for_events: n.trackFeatureFlagsForEvents,
    ...o
  };
}
const XB = "v1";
function QB(n, a) {
  ZB(n, (o) => {
    a(JB(n, o));
  });
}
function JB(n, a) {
  return { ...n, ...a };
}
function ZB(n, a) {
  const o = new XMLHttpRequest();
  ln(n, o, "load", function() {
    if (o.status === 200) {
      const u = JSON.parse(o.responseText);
      a(u.rum);
    } else
      VR();
  }), ln(n, o, "error", function() {
    VR();
  }), o.open("GET", e$(n)), o.send();
}
function e$(n) {
  return `https://sdk-configuration.${qw("rum", n)}/${XB}/${encodeURIComponent(n.remoteConfigurationId)}.json`;
}
function VR() {
  kt.error("Error fetching the remote configuration.");
}
function t$({ ignoreInitIfSyntheticsWillInjectRum: n, startDeflateWorker: a }, o, u, l, f) {
  const d = Fb();
  let m, g, y, _;
  const R = u.observable.subscribe(w), T = {};
  function w() {
    if (!y || !_ || !u.isGranted())
      return;
    R.unsubscribe();
    let H;
    if (_.trackViewsManually) {
      if (!m)
        return;
      d.remove(m.callback), H = m.options;
    }
    const Q = f(_, g, H);
    d.drain(Q);
  }
  function D(H) {
    const Q = ni();
    if (Q && (H = n$(H)), y = H, p0(KB(H)), _) {
      nh("DD_RUM", H);
      return;
    }
    const V = YB(H);
    if (V) {
      if (!Q && !V.sessionStoreStrategyType) {
        kt.warn("No storage available for session. We will not send any data.");
        return;
      }
      V.compressIntakeRequests && !Q && a && (g = a(
        V,
        "Datadog RUM",
        // Worker initialization can fail asynchronously, especially in Firefox where even CSP
        // issues are reported asynchronously. For now, the SDK will continue its execution even if
        // data won't be sent to Datadog. We could improve this behavior in the future.
        Vt
      ), !g) || (_ = V, ah().subscribe(Vt), u.tryToInit(V.trackingConsent), w());
    }
  }
  const P = (H) => {
    d.add((Q) => Q.addDurationVital(H));
  };
  return {
    init(H, Q) {
      if (!H) {
        kt.error("Missing configuration");
        return;
      }
      Kw(H.enableExperimentalFeatures), y = H, !(n && ih()) && (U0(H.plugins, "onInit", { initConfiguration: H, publicApi: Q }), H.remoteConfigurationId && Zc(xo.REMOTE_CONFIGURATION) ? QB(H, D) : D(H));
    },
    get initConfiguration() {
      return y;
    },
    getInternalContext: Vt,
    stopSession: Vt,
    addTiming(H, Q = nr()) {
      d.add((V) => V.addTiming(H, Q));
    },
    startView(H, Q = dr()) {
      const V = (ae) => {
        ae.startView(H, Q);
      };
      d.add(V), m || (m = { options: H, callback: V }, w());
    },
    setViewName(H) {
      d.add((Q) => Q.setViewName(H));
    },
    setViewContext(H) {
      d.add((Q) => Q.setViewContext(H));
    },
    setViewContextProperty(H, Q) {
      d.add((V) => V.setViewContextProperty(H, Q));
    },
    getViewContext: () => T,
    addAction(H, Q = o()) {
      d.add((V) => V.addAction(H, Q));
    },
    addError(H, Q = o()) {
      d.add((V) => V.addError(H, Q));
    },
    addFeatureFlagEvaluation(H, Q) {
      d.add((V) => V.addFeatureFlagEvaluation(H, Q));
    },
    startDurationVital(H, Q) {
      return M0(l, H, Q);
    },
    stopDurationVital(H, Q) {
      I0(P, l, H, Q);
    },
    addDurationVital: P
  };
}
function n$(n) {
  var a, o;
  return {
    ...n,
    applicationId: "00000000-aaaa-0000-aaaa-000000000000",
    clientToken: "empty",
    sessionSampleRate: 100,
    defaultPrivacyLevel: (a = n.defaultPrivacyLevel) !== null && a !== void 0 ? a : (o = Ds()) === null || o === void 0 ? void 0 : o.getPrivacyLevel()
  };
}
const qR = "rum";
function r$(n, a, o = {}) {
  const u = A0(
    0
    /* CustomerDataCompressionStatus.Unknown */
  ), l = Yu(u.getOrCreateTracker(
    2
    /* CustomerDataType.GlobalContext */
  )), f = Yu(u.getOrCreateTracker(
    1
    /* CustomerDataType.User */
  )), d = Hw(), m = LB();
  function g() {
    return kB(l, f, a);
  }
  let y = t$(o, g, d, m, (T, w, D) => {
    T.storeContextsAcrossPages && (Hp(
      T,
      l,
      qR,
      2
      /* CustomerDataType.GlobalContext */
    ), Hp(
      T,
      f,
      qR,
      1
      /* CustomerDataType.User */
    )), u.setCompressionStatus(
      w ? 1 : 2
      /* CustomerDataCompressionStatus.Disabled */
    );
    const P = n(T, a, u, g, D, w && o.createDeflateEncoder ? (Y) => o.createDeflateEncoder(T, w, Y) : ef, d, m);
    return a.onRumStart(P.lifeCycle, T, P.session, P.viewHistory, w), y = a$(y, P), U0(T.plugins, "onRumStart", { strategy: y }), P;
  });
  const _ = Re((T) => {
    const w = typeof T == "object" ? T : { name: T };
    w.context && u.getOrCreateTracker(
      3
      /* CustomerDataType.View */
    ).updateCustomerData(w.context), y.startView(w), Ln({ feature: "start-view" });
  }), R = n0({
    init: Re((T) => {
      y.init(T, R);
    }),
    setTrackingConsent: Re((T) => {
      d.update(T), Ln({ feature: "set-tracking-consent", tracking_consent: T });
    }),
    setViewName: Re((T) => {
      y.setViewName(T), Ln({ feature: "set-view-name" });
    }),
    setViewContext: Re((T) => {
      y.setViewContext(T), Ln({ feature: "set-view-context" });
    }),
    setViewContextProperty: Re((T, w) => {
      y.setViewContextProperty(T, w), Ln({ feature: "set-view-context-property" });
    }),
    getViewContext: Re(() => (Ln({ feature: "set-view-context-property" }), y.getViewContext())),
    setGlobalContext: Re((T) => {
      l.setContext(T), Ln({ feature: "set-global-context" });
    }),
    getGlobalContext: Re(() => l.getContext()),
    setGlobalContextProperty: Re((T, w) => {
      l.setContextProperty(T, w), Ln({ feature: "set-global-context" });
    }),
    removeGlobalContextProperty: Re((T) => l.removeContextProperty(T)),
    clearGlobalContext: Re(() => l.clearContext()),
    getInternalContext: Re((T) => y.getInternalContext(T)),
    getInitConfiguration: Re(() => rh(y.initConfiguration)),
    addAction: (T, w) => {
      const D = Vu();
      Cs(() => {
        y.addAction({
          name: sn(T),
          context: sn(w),
          startClocks: dr(),
          type: "custom",
          handlingStack: D
        }), Ln({ feature: "add-action" });
      });
    },
    addError: (T, w) => {
      const D = Vu();
      Cs(() => {
        y.addError({
          error: T,
          // Do not sanitize error here, it is needed unserialized by computeRawError()
          handlingStack: D,
          context: sn(w),
          startClocks: dr()
        }), Ln({ feature: "add-error" });
      });
    },
    addTiming: Re((T, w) => {
      y.addTiming(sn(T), w);
    }),
    setUser: Re((T) => {
      Iw(T) && f.setContext(zp(T)), Ln({ feature: "set-user" });
    }),
    getUser: Re(() => f.getContext()),
    setUserProperty: Re((T, w) => {
      const D = zp({ [T]: w })[T];
      f.setContextProperty(T, D), Ln({ feature: "set-user" });
    }),
    removeUserProperty: Re((T) => f.removeContextProperty(T)),
    clearUser: Re(() => f.clearContext()),
    startView: _,
    stopSession: Re(() => {
      y.stopSession(), Ln({ feature: "stop-session" });
    }),
    addFeatureFlagEvaluation: Re((T, w) => {
      y.addFeatureFlagEvaluation(sn(T), sn(w)), Ln({ feature: "add-feature-flag-evaluation" });
    }),
    getSessionReplayLink: Re(() => a.getSessionReplayLink()),
    startSessionReplayRecording: Re((T) => {
      a.start(T), Ln({ feature: "start-session-replay-recording", force: T && T.force });
    }),
    stopSessionReplayRecording: Re(() => a.stop()),
    addDurationVital: Re((T, w) => {
      Ln({ feature: "add-duration-vital" }), y.addDurationVital({
        name: sn(T),
        type: "duration",
        startClocks: WF(w.startTime),
        duration: w.duration,
        context: sn(w && w.context),
        description: sn(w && w.description)
      });
    }),
    startDurationVital: Re((T, w) => (Ln({ feature: "start-duration-vital" }), y.startDurationVital(sn(T), {
      context: sn(w && w.context),
      description: sn(w && w.description)
    }))),
    stopDurationVital: Re((T, w) => {
      Ln({ feature: "stop-duration-vital" }), y.stopDurationVital(typeof T == "string" ? sn(T) : T, {
        context: sn(w && w.context),
        description: sn(w && w.description)
      });
    })
  });
  return R;
}
function a$(n, a) {
  return {
    init: (o) => {
      nh("DD_RUM", o);
    },
    initConfiguration: n.initConfiguration,
    ...a
  };
}
function i$() {
  const n = o$();
  return new jt((a) => {
    if (!n)
      return;
    const o = new n(Re(() => a.notify()));
    return o.observe(document, {
      attributes: !0,
      characterData: !0,
      childList: !0,
      subtree: !0
    }), () => o.disconnect();
  });
}
function o$() {
  let n;
  const a = window;
  if (a.Zone && (n = Ro(a, "MutationObserver"), a.MutationObserver && n === a.MutationObserver)) {
    const o = new a.MutationObserver(Vt), u = Ro(o, "originalInstance");
    n = u && u.constructor;
  }
  return n || (n = a.MutationObserver), n;
}
function s$() {
  const n = new jt(), { stop: a } = ti(window, "open", () => n.notify());
  return { observable: n, stop: a };
}
function u$() {
  const n = k0(), a = L0();
  if (n && a)
    return {
      test_id: n,
      result_id: a,
      injected: ih()
    };
}
function l$(n, a, o) {
  const u = rh(n), l = o(u);
  return Db(a).forEach(([f, d]) => {
    const m = c$(u, f), g = Oo(m);
    g === d ? YR(n, f, sn(m)) : d === "object" && (g === "undefined" || g === "null") && YR(n, f, {});
  }), l;
}
function c$(n, a) {
  let o = n;
  for (const u of a.split(".")) {
    if (!f$(o, u))
      return;
    o = o[u];
  }
  return o;
}
function YR(n, a, o) {
  let u = n;
  const l = a.split(".");
  for (let f = 0; f < l.length; f += 1) {
    const d = l[f];
    if (!B0(u))
      return;
    f !== l.length - 1 ? u = u[d] : u[d] = o;
  }
}
function B0(n) {
  return Oo(n) === "object";
}
function f$(n, a) {
  return B0(n) && Object.prototype.hasOwnProperty.call(n, a);
}
const Uu = {
  "view.name": "string",
  "view.url": "string",
  "view.referrer": "string"
}, ju = {
  context: "object"
}, Hg = {
  service: "string",
  version: "string"
};
let $0;
function d$(n, a, o, u, l, f, d, m, g, y, _) {
  $0 = {
    view: { ...ju, ...Uu },
    error: {
      "error.message": "string",
      "error.stack": "string",
      "error.resource.url": "string",
      "error.fingerprint": "string",
      ...ju,
      ...Uu,
      ...Hg
    },
    resource: {
      "resource.url": "string",
      ...Zc(xo.WRITABLE_RESOURCE_GRAPHQL) ? { "resource.graphql": "object" } : {},
      ...ju,
      ...Uu,
      ...Hg
    },
    action: {
      "action.target.name": "string",
      ...ju,
      ...Uu,
      ...Hg
    },
    long_task: {
      ...ju,
      ...Uu
    },
    vital: {
      ...ju,
      ...Uu
    }
  };
  const R = {
    error: Rp("error", n.eventRateLimiterThreshold, _),
    action: Rp("action", n.eventRateLimiterThreshold, _),
    vital: Rp("vital", n.eventRateLimiterThreshold, _)
  }, T = u$();
  a.subscribe(12, ({ startTime: w, rawRumEvent: D, domainContext: P, savedCommonContext: Y, customerContext: H }) => {
    const Q = u.findView(w), V = l.findUrl(w), ae = o.findTrackedSession(w);
    if (ae && Q && !V && Zc(xo.MISSING_URL_CONTEXT_TELEMETRY) && As("Missing URL entry", {
      debug: {
        eventType: D.type,
        startTime: w,
        urlEntries: l.getAllEntries(),
        urlDeletedEntries: l.getDeletedEntries(),
        viewEntries: u.getAllEntries(),
        viewDeletedEntries: u.getDeletedEntries()
      }
    }), ae && Q && V) {
      const oe = Y || y(), de = f.findActionId(w), Z = {
        _dd: {
          format_version: 2,
          drift: XF(),
          configuration: {
            session_sample_rate: Mp(n.sessionSampleRate, 3),
            session_replay_sample_rate: Mp(n.sessionReplaySampleRate, 3)
          },
          browser_sdk_version: ni() ? "6.2.0" : void 0
        },
        application: {
          id: n.applicationId
        },
        date: nr(),
        service: Q.service || n.service,
        version: Q.version || n.version,
        source: "browser",
        session: {
          id: ae.id,
          type: T ? "synthetics" : m.get() ? "ci_test" : "user"
        },
        view: {
          id: Q.id,
          name: Q.name,
          url: V.url,
          referrer: V.referrer
        },
        feature_flags: v$(D, w, n.trackFeatureFlagsForEvents, g),
        action: h$(D) && de ? { id: de } : void 0,
        synthetics: T,
        ci_test: m.get(),
        display: d.get(),
        connectivity: s0()
      }, Ie = Wr(Z, D);
      Ie.context = Wr(oe.context, Q.context, H), "has_replay" in Ie.session || (Ie.session.has_replay = oe.hasReplay), Ie.type === "view" && (Ie.session.sampled_for_replay = ae.sessionReplay === 1), ae.anonymousId && !oe.user.anonymous_id && n.trackAnonymousUser && (oe.user.anonymous_id = ae.anonymousId), Ts(oe.user) || (Ie.usr = oe.user), p$(Ie, n.beforeSend, P, R) && (Ts(Ie.context) && delete Ie.context, a.notify(13, Ie));
    }
  });
}
function p$(n, a, o, u) {
  var l;
  if (a) {
    const d = l$(n, $0[n.type], (m) => a(m, o));
    if (d === !1 && n.type !== "view")
      return !1;
    d === !1 && kt.warn("Can't dismiss view events using beforeSend!");
  }
  return !((l = u[n.type]) === null || l === void 0 ? void 0 : l.isLimitReached());
}
function h$(n) {
  return [
    "error",
    "resource",
    "long_task"
    /* RumEventType.LONG_TASK */
  ].indexOf(n.type) !== -1;
}
function v$(n, a, o, u) {
  const l = n.type === "view" || n.type === "error", f = o.includes(n.type);
  if (l || f) {
    const d = u.findFeatureFlagEvaluations(a);
    if (d && !Ts(d))
      return d;
  }
}
function m$(n, a, o, u, l) {
  return {
    get: (f) => {
      const d = o.findView(f), m = l.findUrl(f), g = a.findTrackedSession(f);
      if (g && d && m) {
        const y = u.findActionId(f);
        return {
          application_id: n,
          session_id: g.id,
          user_action: y ? { id: y } : void 0,
          view: { id: d.id, name: d.name, referrer: m.referrer, url: m.url }
        };
      }
    }
  };
}
const y$ = x0, g$ = xs;
function b$(n) {
  const a = Zu({ expireDelay: g$ });
  n.subscribe(1, (u) => {
    a.add(o(u), u.startClocks.relative);
  }), n.subscribe(6, ({ endClocks: u }) => {
    a.closeActive(u.relative);
  }), n.subscribe(3, (u) => {
    const l = a.find(u.startClocks.relative);
    l && u.name && (l.name = u.name), l && u.context && (l.context = u.context);
  }), n.subscribe(10, () => {
    a.reset();
  });
  function o(u) {
    return {
      service: u.service,
      version: u.version,
      context: u.context,
      id: u.id,
      name: u.name,
      startClocks: u.startClocks
    };
  }
  return {
    findView: (u) => a.find(u),
    getAllEntries: () => a.getAllEntries(),
    getDeletedEntries: () => a.getDeletedEntries(),
    stop: () => {
      a.stop();
    }
  };
}
const H0 = "initial_document", S$ = [
  ["document", (n) => H0 === n],
  ["xhr", (n) => n === "xmlhttprequest"],
  ["fetch", (n) => n === "fetch"],
  ["beacon", (n) => n === "beacon"],
  ["css", (n, a) => /\.css$/i.test(a)],
  ["js", (n, a) => /\.js$/i.test(a)],
  [
    "image",
    (n, a) => ["image", "img", "icon"].includes(n) || /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(a) !== null
  ],
  ["font", (n, a) => /\.(woff|eot|woff2|ttf)$/i.exec(a) !== null],
  [
    "media",
    (n, a) => ["audio", "video"].includes(n) || /\.(mp3|mp4)$/i.exec(a) !== null
  ]
];
function E$(n) {
  const a = n.name;
  if (!Iz(a))
    return As(`Failed to construct URL for "${n.name}"`), "other";
  const o = Uz(a);
  for (const [u, l] of S$)
    if (l(n.initiatorType, o))
      return u;
  return "other";
}
function GR(...n) {
  for (let a = 1; a < n.length; a += 1)
    if (n[a - 1] > n[a])
      return !1;
  return !0;
}
function _$(n) {
  return n.initiatorType === "xmlhttprequest" || n.initiatorType === "fetch";
}
function T$(n) {
  const { duration: a, startTime: o, responseEnd: u } = n;
  return a === 0 && o < u ? ot(rr(o, u)) : ot(a);
}
function C$(n) {
  if (!q0(n))
    return;
  const { startTime: a, fetchStart: o, workerStart: u, redirectStart: l, redirectEnd: f, domainLookupStart: d, domainLookupEnd: m, connectStart: g, secureConnectionStart: y, connectEnd: _, requestStart: R, responseStart: T, responseEnd: w } = n, D = {
    download: vs(a, T, w),
    first_byte: vs(a, R, T)
  };
  return 0 < u && u < o && (D.worker = vs(a, u, o)), o < _ && (D.connect = vs(a, g, _), g <= y && y <= _ && (D.ssl = vs(a, y, _))), o < m && (D.dns = vs(a, d, m)), a < f && (D.redirect = vs(a, l, f)), D;
}
function V0(n) {
  return n.duration >= 0;
}
function q0(n) {
  const a = GR(n.startTime, n.fetchStart, n.domainLookupStart, n.domainLookupEnd, n.connectStart, n.connectEnd, n.requestStart, n.responseStart, n.responseEnd), o = R$(n) ? GR(n.startTime, n.redirectStart, n.redirectEnd, n.fetchStart) : !0;
  return a && o;
}
function R$(n) {
  return n.redirectEnd > n.startTime;
}
function vs(n, a, o) {
  if (n <= a && a <= o)
    return {
      duration: ot(rr(a, o)),
      start: ot(rr(n, a))
    };
}
function Y0(n) {
  return n.nextHopProtocol === "" ? void 0 : n.nextHopProtocol;
}
function G0(n) {
  return n.deliveryType === "" ? "other" : n.deliveryType;
}
function x$(n) {
  if (n.startTime < n.responseStart) {
    const { encodedBodySize: a, decodedBodySize: o, transferSize: u } = n;
    return {
      size: o,
      encoded_body_size: a,
      decoded_body_size: o,
      transfer_size: u
    };
  }
  return {
    size: void 0,
    encoded_body_size: void 0,
    decoded_body_size: void 0,
    transfer_size: void 0
  };
}
function Hb(n) {
  return n && !Yw(n);
}
const w$ = /data:(.+)?(;base64)?,/g, WR = 24e3;
function O$(n) {
  return n.length <= WR ? !1 : n.substring(0, 5) === "data:" ? (n = n.substring(0, WR), !0) : !1;
}
function A$(n) {
  return `${n.match(w$)[0]}[...]`;
}
let KR = 1;
function D$(n, a, o) {
  const u = HB(a, o);
  k$(n, a, u), L$(n, u);
}
function k$(n, a, o) {
  const u = w0(a).subscribe((l) => {
    const f = l;
    if (Hb(f.url))
      switch (f.state) {
        case "start":
          o.traceXhr(f, f.xhr), f.requestIndex = W0(), n.notify(7, {
            requestIndex: f.requestIndex,
            url: f.url
          });
          break;
        case "complete":
          o.clearTracingIfNeeded(f), n.notify(8, {
            duration: f.duration,
            method: f.method,
            requestIndex: f.requestIndex,
            spanId: f.spanId,
            startClocks: f.startClocks,
            status: f.status,
            traceId: f.traceId,
            traceSampled: f.traceSampled,
            type: "xhr",
            url: f.url,
            xhr: f.xhr,
            isAborted: f.isAborted,
            handlingStack: f.handlingStack
          });
          break;
      }
  });
  return { stop: () => u.unsubscribe() };
}
function L$(n, a) {
  const o = ah().subscribe((u) => {
    const l = u;
    if (Hb(l.url))
      switch (l.state) {
        case "start":
          a.traceFetch(l), l.requestIndex = W0(), n.notify(7, {
            requestIndex: l.requestIndex,
            url: l.url
          });
          break;
        case "resolve":
          N$(l, (f) => {
            a.clearTracingIfNeeded(l), n.notify(8, {
              duration: f,
              method: l.method,
              requestIndex: l.requestIndex,
              responseType: l.responseType,
              spanId: l.spanId,
              startClocks: l.startClocks,
              status: l.status,
              traceId: l.traceId,
              traceSampled: l.traceSampled,
              type: "fetch",
              url: l.url,
              response: l.response,
              init: l.init,
              input: l.input,
              isAborted: l.isAborted,
              handlingStack: l.handlingStack
            });
          });
          break;
      }
  });
  return { stop: () => o.unsubscribe() };
}
function W0() {
  const n = KR;
  return KR += 1, n;
}
function N$(n, a) {
  const o = n.response && m0(n.response);
  !o || !o.body ? a(rr(n.startClocks.timeStamp, nr())) : D0(o.body, () => {
    a(rr(n.startClocks.timeStamp, nr()));
  }, {
    bytesLimit: Number.POSITIVE_INFINITY,
    collectStreamBody: !1
  });
}
function K0(n) {
  return rf(n) && n < 0 ? void 0 : n;
}
function X0({ lifeCycle: n, isChildEvent: a, onChange: o = Vt }) {
  const u = {
    errorCount: 0,
    longTaskCount: 0,
    resourceCount: 0,
    actionCount: 0,
    frustrationCount: 0
  }, l = n.subscribe(13, (f) => {
    var d;
    if (!(f.type === "view" || f.type === "vital" || !a(f)))
      switch (f.type) {
        case "error":
          u.errorCount += 1, o();
          break;
        case "action":
          u.actionCount += 1, f.action.frustration && (u.frustrationCount += f.action.frustration.type.length), o();
          break;
        case "long_task":
          u.longTaskCount += 1, o();
          break;
        case "resource":
          !((d = f._dd) === null || d === void 0) && d.discarded || (u.resourceCount += 1, o());
          break;
      }
  });
  return {
    stop: () => {
      l.unsubscribe();
    },
    eventCounts: u
  };
}
function M$(n, a) {
  const o = da();
  let u = !1;
  const { stop: l } = wo(n, window, [
    "click",
    "mousedown",
    "keydown",
    "touchstart",
    "pointerdown"
    /* DOM_EVENT.POINTER_DOWN */
  ], (m) => {
    if (!m.cancelable)
      return;
    const g = {
      entryType: "first-input",
      processingStart: pa(),
      processingEnd: pa(),
      startTime: m.timeStamp,
      duration: 0,
      // arbitrary value to avoid nullable duration and simplify INP logic
      name: "",
      cancelable: !1,
      target: null,
      toJSON: () => ({})
    };
    m.type === "pointerdown" ? f(n, g) : d(g);
  }, { passive: !0, capture: !0 });
  return { stop: l };
  function f(m, g) {
    wo(m, window, [
      "pointerup",
      "pointercancel"
      /* DOM_EVENT.POINTER_CANCEL */
    ], (y) => {
      y.type === "pointerup" && d(g);
    }, { once: !0 });
  }
  function d(m) {
    if (!u) {
      u = !0, l();
      const g = m.processingStart - m.startTime;
      g >= 0 && g < da() - o && a(m);
    }
  }
}
var Kt;
(function(n) {
  n.EVENT = "event", n.FIRST_INPUT = "first-input", n.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint", n.LAYOUT_SHIFT = "layout-shift", n.LONG_TASK = "longtask", n.LONG_ANIMATION_FRAME = "long-animation-frame", n.NAVIGATION = "navigation", n.PAINT = "paint", n.RESOURCE = "resource";
})(Kt || (Kt = {}));
function ri(n, a) {
  return new jt((o) => {
    if (!window.PerformanceObserver)
      return;
    const u = (g) => {
      const y = j$(g);
      y.length > 0 && o.notify(y);
    };
    let l, f = !0;
    const d = new PerformanceObserver(Re((g) => {
      f ? l = fr(() => u(g.getEntries())) : u(g.getEntries());
    }));
    try {
      d.observe(a);
    } catch {
      if ([
        Kt.RESOURCE,
        Kt.NAVIGATION,
        Kt.LONG_TASK,
        Kt.PAINT
      ].includes(a.type)) {
        a.buffered && (l = fr(() => u(performance.getEntriesByType(a.type))));
        try {
          d.observe({ entryTypes: [a.type] });
        } catch {
          return;
        }
      }
    }
    f = !1, I$(n);
    let m;
    return !oh(Kt.FIRST_INPUT) && a.type === Kt.FIRST_INPUT && ({ stop: m } = M$(n, (g) => {
      u([g]);
    })), () => {
      d.disconnect(), m && m(), fa(l);
    };
  });
}
let zc;
function I$(n) {
  return !zc && U$() && "addEventListener" in performance && (zc = ln(n, performance, "resourcetimingbufferfull", () => {
    performance.clearResourceTimings();
  })), () => {
    zc == null || zc.stop();
  };
}
function U$() {
  return window.performance !== void 0 && "getEntries" in performance;
}
function oh(n) {
  return window.PerformanceObserver && PerformanceObserver.supportedEntryTypes !== void 0 && PerformanceObserver.supportedEntryTypes.includes(n);
}
function j$(n) {
  return n.filter((a) => !F$(a));
}
function F$(n) {
  return n.entryType === Kt.RESOURCE && (!Hb(n.name) || !V0(n));
}
const Q0 = 100, z$ = 100;
function Vb(n, a, o, u, l, f) {
  const d = B$(n, a, o, u);
  return P$(d, l, f);
}
function P$(n, a, o) {
  let u, l = !1;
  const f = fr(Re(() => y({ hadActivity: !1 })), Q0), d = o !== void 0 ? fr(Re(() => y({ hadActivity: !0, end: nr() })), o) : void 0, m = n.subscribe(({ isBusy: _ }) => {
    fa(f), fa(u);
    const R = nr();
    _ || (u = fr(Re(() => y({ hadActivity: !0, end: R })), z$));
  }), g = () => {
    l = !0, fa(f), fa(u), fa(d), m.unsubscribe();
  };
  function y(_) {
    l || (g(), a(_));
  }
  return { stop: g };
}
function B$(n, a, o, u) {
  return new jt((l) => {
    const f = [];
    let d, m = 0;
    return f.push(a.subscribe(g), o.subscribe(g), ri(u, { type: Kt.RESOURCE }).subscribe((y) => {
      y.some((_) => !Vg(u, _.name)) && g();
    }), n.subscribe(7, (y) => {
      Vg(u, y.url) || (d === void 0 && (d = y.requestIndex), m += 1, g());
    }), n.subscribe(8, (y) => {
      Vg(u, y.url) || d === void 0 || // If the request started before the tracking start, ignore it
      y.requestIndex < d || (m -= 1, g());
    })), () => {
      f.forEach((y) => y.unsubscribe());
    };
    function g() {
      l.notify({ isBusy: m > 0 });
    }
  });
}
function Vg(n, a) {
  return N0(n.excludedActivityUrls, a);
}
function J0(n) {
  return n.nodeType === Node.TEXT_NODE;
}
function $$(n) {
  return n.nodeType === Node.COMMENT_NODE;
}
function el(n) {
  return n.nodeType === Node.ELEMENT_NODE;
}
function Z0(n) {
  return el(n) && !!n.shadowRoot;
}
function H$(n) {
  const a = n;
  return !!a.host && a.nodeType === Node.DOCUMENT_FRAGMENT_NODE && el(a.host);
}
function P3(n) {
  return n.childNodes.length > 0 || Z0(n);
}
function B3(n, a) {
  let o = n.firstChild;
  for (; o; )
    a(o), o = o.nextSibling;
  Z0(n) && a(n.shadowRoot);
}
function V$(n) {
  return H$(n) ? n.host : n.parentNode;
}
const Ht = {
  IGNORE: "ignore",
  HIDDEN: "hidden",
  ALLOW: Gc.ALLOW,
  MASK: Gc.MASK,
  MASK_USER_INPUT: Gc.MASK_USER_INPUT
}, q$ = "data-dd-privacy", $3 = "hidden", Y$ = "dd-privacy-", qg = "***", H3 = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", G$ = {
  INPUT: !0,
  OUTPUT: !0,
  TEXTAREA: !0,
  SELECT: !0,
  OPTION: !0,
  DATALIST: !0,
  OPTGROUP: !0
}, W$ = "x";
function eO(n, a, o) {
  if (o && o.has(n))
    return o.get(n);
  const u = V$(n), l = u ? eO(u, a, o) : a, f = X$(n), d = K$(f, l);
  return o && o.set(n, d), d;
}
function K$(n, a) {
  switch (a) {
    // These values cannot be overridden
    case Ht.HIDDEN:
    case Ht.IGNORE:
      return a;
  }
  switch (n) {
    case Ht.ALLOW:
    case Ht.MASK:
    case Ht.MASK_USER_INPUT:
    case Ht.HIDDEN:
    case Ht.IGNORE:
      return n;
    default:
      return a;
  }
}
function X$(n) {
  if (el(n)) {
    if (n.tagName === "BASE")
      return Ht.ALLOW;
    if (n.tagName === "INPUT") {
      const a = n;
      if (a.type === "password" || a.type === "email" || a.type === "tel" || a.type === "hidden")
        return Ht.MASK;
      const o = a.getAttribute("autocomplete");
      if (o && (o.startsWith("cc-") || o.endsWith("-password")))
        return Ht.MASK;
    }
    if (n.matches(Bu(Ht.HIDDEN)))
      return Ht.HIDDEN;
    if (n.matches(Bu(Ht.MASK)))
      return Ht.MASK;
    if (n.matches(Bu(Ht.MASK_USER_INPUT)))
      return Ht.MASK_USER_INPUT;
    if (n.matches(Bu(Ht.ALLOW)))
      return Ht.ALLOW;
    if (Z$(n))
      return Ht.IGNORE;
  }
}
function Q$(n, a) {
  switch (a) {
    case Ht.MASK:
    case Ht.HIDDEN:
    case Ht.IGNORE:
      return !0;
    case Ht.MASK_USER_INPUT:
      return J0(n) ? XR(n.parentNode) : XR(n);
    default:
      return !1;
  }
}
function XR(n) {
  if (!n || n.nodeType !== n.ELEMENT_NODE)
    return !1;
  const a = n;
  if (a.tagName === "INPUT")
    switch (a.type) {
      case "button":
      case "color":
      case "reset":
      case "submit":
        return !1;
    }
  return !!G$[a.tagName];
}
const J$ = (n) => n.replace(/\S/g, W$);
function V3(n, a, o) {
  var u;
  const l = (u = n.parentElement) === null || u === void 0 ? void 0 : u.tagName;
  let f = n.textContent || "";
  if (a && !f.trim())
    return;
  const d = o;
  if (l === "SCRIPT")
    f = qg;
  else if (d === Ht.HIDDEN)
    f = qg;
  else if (Q$(n, d))
    if (
      // Scrambling the child list breaks text nodes for DATALIST/SELECT/OPTGROUP
      l === "DATALIST" || l === "SELECT" || l === "OPTGROUP"
    ) {
      if (!f.trim())
        return;
    } else l === "OPTION" ? f = qg : f = J$(f);
  return f;
}
function Z$(n) {
  if (n.nodeName === "SCRIPT")
    return !0;
  if (n.nodeName === "LINK") {
    const o = a("rel");
    return (
      // Link as script - Ignore only when rel=preload, modulepreload or prefetch
      /preload|prefetch/i.test(o) && a("as") === "script" || // Favicons
      o === "shortcut icon" || o === "icon"
    );
  }
  if (n.nodeName === "META") {
    const o = a("name"), u = a("rel"), l = a("property");
    return (
      // Favicons
      /^msapplication-tile(image|color)$/.test(o) || o === "application-name" || u === "icon" || u === "apple-touch-icon" || u === "shortcut icon" || // Description
      o === "keywords" || o === "description" || // Social
      /^(og|twitter|fb):/.test(l) || /^(og|twitter):/.test(o) || o === "pinterest" || // Robots
      o === "robots" || o === "googlebot" || o === "bingbot" || // Http headers. Ex: X-UA-Compatible, Content-Type, Content-Language, cache-control,
      // X-Translated-By
      n.hasAttribute("http-equiv") || // Authorship
      o === "author" || o === "generator" || o === "framework" || o === "publisher" || o === "progid" || /^article:/.test(l) || /^product:/.test(l) || // Verification
      o === "google-site-verification" || o === "yandex-verification" || o === "csrf-token" || o === "p:domain_verify" || o === "verify-v1" || o === "verification" || o === "shopify-checkout-api-token"
    );
  }
  function a(o) {
    return (n.getAttribute(o) || "").toLowerCase();
  }
  return !1;
}
function Bu(n) {
  return `[${q$}="${n}"], .${Y$}${n}`;
}
const qb = "data-dd-action-name", eH = "Masked Element";
function tH(n, { enablePrivacyForActionName: a, actionNameAttribute: o }, u) {
  const l = QR(n, qb) || o && QR(n, o);
  return l ? {
    name: l,
    nameSource: "custom_attribute"
    /* ActionNameSource.CUSTOM_ATTRIBUTE */
  } : u === Ht.MASK ? {
    name: eH,
    nameSource: "mask_placeholder"
    /* ActionNameSource.MASK_PLACEHOLDER */
  } : JR(n, o, nH, a) || JR(n, o, rH, a) || {
    name: "",
    nameSource: "blank"
    /* ActionNameSource.BLANK */
  };
}
function QR(n, a) {
  const o = n.closest(`[${a}]`);
  if (!o)
    return;
  const u = o.getAttribute(a);
  return nO(tO(u.trim()));
}
const nH = [
  // associated LABEL text
  (n, a) => {
    if ("labels" in n && n.labels && n.labels.length > 0)
      return xp(n.labels[0], a);
  },
  // INPUT button (and associated) value
  (n) => {
    if (n.nodeName === "INPUT") {
      const a = n, o = a.getAttribute("type");
      if (o === "button" || o === "submit" || o === "reset")
        return {
          name: a.value,
          nameSource: "text_content"
          /* ActionNameSource.TEXT_CONTENT */
        };
    }
  },
  // BUTTON, LABEL or button-like element text
  (n, a, o) => {
    if (n.nodeName === "BUTTON" || n.nodeName === "LABEL" || n.getAttribute("role") === "button")
      return xp(n, a, o);
  },
  (n) => Pc(n, "aria-label"),
  // associated element text designated by the aria-labelledby attribute
  (n, a, o) => {
    const u = n.getAttribute("aria-labelledby");
    if (u)
      return {
        name: u.split(/\s+/).map((l) => iH(n, l)).filter((l) => !!l).map((l) => rO(l, a, o)).join(" "),
        nameSource: "text_content"
      };
  },
  (n) => Pc(n, "alt"),
  (n) => Pc(n, "name"),
  (n) => Pc(n, "title"),
  (n) => Pc(n, "placeholder"),
  // SELECT first OPTION text
  (n, a) => {
    if ("options" in n && n.options.length > 0)
      return xp(n.options[0], a);
  }
], rH = [
  (n, a, o) => xp(n, a, o)
], aH = 10;
function JR(n, a, o, u) {
  let l = n, f = 0;
  for (; f <= aH && l && l.nodeName !== "BODY" && l.nodeName !== "HTML" && l.nodeName !== "HEAD"; ) {
    for (const d of o) {
      const m = d(l, a, u);
      if (m) {
        const { name: g, nameSource: y } = m, _ = g && g.trim();
        if (_)
          return { name: nO(tO(_)), nameSource: y };
      }
    }
    if (l.nodeName === "FORM")
      break;
    l = l.parentElement, f += 1;
  }
}
function tO(n) {
  return n.replace(/\s+/g, " ");
}
function nO(n) {
  return n.length > 100 ? `${Lw(n, 100)} [...]` : n;
}
function iH(n, a) {
  return n.ownerDocument ? n.ownerDocument.getElementById(a) : null;
}
function Pc(n, a) {
  return {
    name: n.getAttribute(a) || "",
    nameSource: "standard_attribute"
  };
}
function xp(n, a, o) {
  return {
    name: rO(n, a, o) || "",
    nameSource: "text_content"
  };
}
function rO(n, a, o) {
  if (!n.isContentEditable) {
    if ("innerText" in n) {
      let u = n.innerText;
      const l = (f) => {
        const d = n.querySelectorAll(f);
        for (let m = 0; m < d.length; m += 1) {
          const g = d[m];
          if ("innerText" in g) {
            const y = g.innerText;
            y && y.trim().length > 0 && (u = u.replace(y, ""));
          }
        }
      };
      return l(`[${qb}]`), a && l(`[${a}]`), o && l(`${Bu(Ht.HIDDEN)}, ${Bu(Ht.MASK)}`), u;
    }
    return n.textContent;
  }
}
const oH = [
  qb,
  // Common test attributes (list provided by google recorder)
  "data-testid",
  "data-test",
  "data-qa",
  "data-cy",
  "data-test-id",
  "data-qa-id",
  "data-testing",
  // FullStory decorator attributes:
  "data-component",
  "data-element",
  "data-source-file"
], sH = [iO, lH], uH = [
  iO,
  cH,
  fH
];
function lf(n, a) {
  if (!mH(n))
    return;
  let o, u = n;
  for (; u && u.nodeName !== "HTML"; ) {
    const l = ZR(u, sH, pH, a, o);
    if (l)
      return l;
    o = ZR(u, uH, hH, a, o) || tf(dH(u), o), u = u.parentElement;
  }
  return o;
}
function aO(n) {
  return /[0-9]/.test(n);
}
function lH(n) {
  if (n.id && !aO(n.id))
    return `#${CSS.escape(n.id)}`;
}
function cH(n) {
  if (n.tagName === "BODY")
    return;
  const a = n.classList;
  for (let o = 0; o < a.length; o += 1) {
    const u = a[o];
    if (!aO(u))
      return `${CSS.escape(n.tagName)}.${CSS.escape(u)}`;
  }
}
function fH(n) {
  return CSS.escape(n.tagName);
}
function iO(n, a) {
  if (a) {
    const u = o(a);
    if (u)
      return u;
  }
  for (const u of oH) {
    const l = o(u);
    if (l)
      return l;
  }
  function o(u) {
    if (n.hasAttribute(u))
      return `${CSS.escape(n.tagName)}[${u}="${CSS.escape(n.getAttribute(u))}"]`;
  }
}
function dH(n) {
  let a = n.parentElement.firstElementChild, o = 1;
  for (; a && a !== n; )
    a.tagName === n.tagName && (o += 1), a = a.nextElementSibling;
  return `${CSS.escape(n.tagName)}:nth-of-type(${o})`;
}
function ZR(n, a, o, u, l) {
  for (const f of a) {
    const d = f(n, u);
    if (d && o(n, d, l))
      return tf(d, l);
  }
}
function pH(n, a, o) {
  return n.ownerDocument.querySelectorAll(tf(a, o)).length === 1;
}
function hH(n, a, o) {
  let u;
  if (o === void 0)
    u = (d) => d.matches(a);
  else {
    const d = vH() ? tf(`${a}:scope`, o) : tf(a, o);
    u = (m) => m.querySelector(d) !== null;
  }
  let f = n.parentElement.firstElementChild;
  for (; f; ) {
    if (f !== n && u(f))
      return !1;
    f = f.nextElementSibling;
  }
  return !0;
}
function tf(n, a) {
  return a ? `${n}>${a}` : n;
}
let Ep;
function vH() {
  if (Ep === void 0)
    try {
      document.querySelector(":scope"), Ep = !0;
    } catch {
      Ep = !1;
    }
  return Ep;
}
function mH(n) {
  return "isConnected" in // cast is to make sure `element` is not inferred as `never` after the check
  n ? n.isConnected : n.ownerDocument.documentElement.contains(n);
}
const oO = _r, yH = 100;
function gH(n, a) {
  const o = [];
  let u = 0, l;
  f(n);
  function f(g) {
    g.stopObservable.subscribe(d), o.push(g), fa(l), l = fr(m, oO);
  }
  function d() {
    u === 1 && o.every((g) => g.isStopped()) && (u = 2, a(o));
  }
  function m() {
    fa(l), u === 0 && (u = 1, d());
  }
  return {
    tryAppend: (g) => u !== 0 ? !1 : o.length > 0 && !bH(o[o.length - 1].event, g.event) ? (m(), !1) : (f(g), !0),
    stop: () => {
      m();
    }
  };
}
function bH(n, a) {
  return n.target === a.target && SH(n, a) <= yH && n.timeStamp - a.timeStamp <= oO;
}
function SH(n, a) {
  return Math.sqrt(Math.pow(n.clientX - a.clientX, 2) + Math.pow(n.clientY - a.clientY, 2));
}
function EH(n, { onPointerDown: a, onPointerUp: o }) {
  let u, l = {
    selection: !1,
    input: !1,
    scroll: !1
  }, f;
  const d = [
    ln(n, window, "pointerdown", (m) => {
      tx(m) && (u = ex(), l = {
        selection: !1,
        input: !1,
        scroll: !1
      }, f = a(m));
    }, { capture: !0 }),
    ln(n, window, "selectionchange", () => {
      (!u || !ex()) && (l.selection = !0);
    }, { capture: !0 }),
    ln(n, window, "scroll", () => {
      l.scroll = !0;
    }, { capture: !0, passive: !0 }),
    ln(n, window, "pointerup", (m) => {
      if (tx(m) && f) {
        const g = l;
        o(f, m, () => g), f = void 0;
      }
    }, { capture: !0 }),
    ln(n, window, "input", () => {
      l.input = !0;
    }, { capture: !0 })
  ];
  return {
    stop: () => {
      d.forEach((m) => m.stop());
    }
  };
}
function ex() {
  const n = window.getSelection();
  return !n || n.isCollapsed;
}
function tx(n) {
  return n.target instanceof Element && // Only consider 'primary' pointer events for now. Multi-touch support could be implemented in
  // the future.
  n.isPrimary !== !1;
}
const nx = 3;
function _H(n, a) {
  if (TH(n))
    return a.addFrustration(
      "rage_click"
      /* FrustrationType.RAGE_CLICK */
    ), n.some(rx) && a.addFrustration(
      "dead_click"
      /* FrustrationType.DEAD_CLICK */
    ), a.hasError && a.addFrustration(
      "error_click"
      /* FrustrationType.ERROR_CLICK */
    ), { isRage: !0 };
  const o = n.some((u) => u.getUserActivity().selection);
  return n.forEach((u) => {
    u.hasError && u.addFrustration(
      "error_click"
      /* FrustrationType.ERROR_CLICK */
    ), rx(u) && // Avoid considering clicks part of a double-click or triple-click selections as dead clicks
    !o && u.addFrustration(
      "dead_click"
      /* FrustrationType.DEAD_CLICK */
    );
  }), { isRage: !1 };
}
function TH(n) {
  if (n.some((a) => a.getUserActivity().selection || a.getUserActivity().scroll))
    return !1;
  for (let a = 0; a < n.length - (nx - 1); a += 1)
    if (n[a + nx - 1].event.timeStamp - n[a].event.timeStamp <= _r)
      return !0;
  return !1;
}
const CH = (
  // inputs that don't trigger a meaningful event like "input" when clicked, including textual
  // inputs (using a negative selector is shorter here)
  'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *'
);
function rx(n) {
  return n.hasPageActivity || n.getUserActivity().input || n.getUserActivity().scroll ? !1 : !n.event.target.matches(CH);
}
const sO = 10 * _r, Wc = /* @__PURE__ */ new Map();
function RH(n) {
  const a = Wc.get(n);
  return Wc.delete(n), a;
}
function uO(n, a) {
  Wc.set(n, a), Wc.forEach((o, u) => {
    rr(u, pa()) > sO && Wc.delete(u);
  });
}
const xH = 5 * Mr;
function wH(n, a, o, u) {
  const l = Zu({ expireDelay: xH }), f = new jt();
  let d;
  n.subscribe(10, () => {
    l.reset();
  }), n.subscribe(5, _);
  const { stop: m } = EH(u, {
    onPointerDown: (R) => OH(u, n, a, R, o),
    onPointerUp: ({ clickActionBase: R, hadActivityOnPointerDown: T }, w, D) => {
      AH(u, n, a, o, l, f, y, R, w, D, T);
    }
  });
  return {
    stop: () => {
      _(), f.notify(), m();
    },
    actionContexts: {
      findActionId: (R) => l.findAll(R)
    }
  };
  function y(R) {
    if (!d || !d.tryAppend(R)) {
      const T = R.clone();
      d = gH(R, (w) => {
        kH(w, T);
      });
    }
  }
  function _() {
    d && d.stop();
  }
}
function OH(n, a, o, u, l) {
  const f = n.enablePrivacyForActionName ? eO(u.target, n.defaultPrivacyLevel) : Ht.ALLOW;
  if (f === Ht.HIDDEN)
    return;
  const d = DH(u, f, n);
  let m = !1;
  return Vb(
    a,
    o,
    l,
    n,
    (g) => {
      m = g.hadActivity;
    },
    // We don't care about the activity duration, we just want to know whether an activity did happen
    // within the "validation delay" or not. Limit the duration so the callback is called sooner.
    Q0
  ), { clickActionBase: d, hadActivityOnPointerDown: () => m };
}
function AH(n, a, o, u, l, f, d, m, g, y, _) {
  var R;
  const T = lO(a, l, y, m, g);
  d(T);
  const w = (R = m == null ? void 0 : m.target) === null || R === void 0 ? void 0 : R.selector;
  w && uO(g.timeStamp, w);
  const { stop: D } = Vb(a, o, u, n, (H) => {
    H.hadActivity && H.end < T.startClocks.timeStamp ? T.discard() : H.hadActivity ? T.stop(H.end) : _() ? T.stop(
      // using the click start as activity end, so the click will have some activity but its
      // duration will be 0 (as the activity started before the click start)
      T.startClocks.timeStamp
    ) : T.stop();
  }, sO), P = a.subscribe(5, ({ endClocks: H }) => {
    T.stop(H.timeStamp);
  }), Y = f.subscribe(() => {
    T.stop();
  });
  T.stopObservable.subscribe(() => {
    P.unsubscribe(), D(), Y.unsubscribe();
  });
}
function DH(n, a, o) {
  const u = n.target.getBoundingClientRect(), l = lf(n.target, o.actionNameAttribute);
  l && uO(n.timeStamp, l);
  const f = tH(n.target, o, a);
  return {
    type: "click",
    target: {
      width: Math.round(u.width),
      height: Math.round(u.height),
      selector: l
    },
    position: {
      // Use clientX and Y because for SVG element offsetX and Y are relatives to the <svg> element
      x: Math.round(n.clientX - u.left),
      y: Math.round(n.clientY - u.top)
    },
    name: f.name,
    nameSource: f.nameSource
  };
}
function lO(n, a, o, u, l) {
  const f = pr(), d = dr(), m = a.add(f, d.relative), g = X0({
    lifeCycle: n,
    isChildEvent: (D) => D.action !== void 0 && (Array.isArray(D.action.id) ? D.action.id.includes(f) : D.action.id === f)
  });
  let y = 0, _;
  const R = [], T = new jt();
  function w(D) {
    y === 0 && (_ = D, y = 1, _ ? m.close(eh(_)) : m.remove(), g.stop(), T.notify());
  }
  return {
    event: l,
    stop: w,
    stopObservable: T,
    get hasError() {
      return g.eventCounts.errorCount > 0;
    },
    get hasPageActivity() {
      return _ !== void 0;
    },
    getUserActivity: o,
    addFrustration: (D) => {
      R.push(D);
    },
    startClocks: d,
    isStopped: () => y === 1 || y === 2,
    clone: () => lO(n, a, o, u, l),
    validate: (D) => {
      if (w(), y !== 1)
        return;
      const { resourceCount: P, errorCount: Y, longTaskCount: H } = g.eventCounts, Q = {
        duration: _ && rr(d.timeStamp, _),
        startClocks: d,
        id: f,
        frustrationTypes: R,
        counts: {
          resourceCount: P,
          errorCount: Y,
          longTaskCount: H
        },
        events: D ?? [l],
        event: l,
        ...u
      };
      n.notify(0, Q), y = 2;
    },
    discard: () => {
      w(), y = 2;
    }
  };
}
function kH(n, a) {
  const { isRage: o } = _H(n, a);
  o ? (n.forEach((u) => u.discard()), a.stop(nr()), a.validate(n.map((u) => u.event))) : (a.discard(), n.forEach((u) => u.validate()));
}
function LH(n, a, o, u, l) {
  n.subscribe(0, (m) => n.notify(12, ax(m, l)));
  let f = { findActionId: Vt }, d = Vt;
  return u.trackUserInteractions && ({ actionContexts: f, stop: d } = wH(n, a, o, u)), {
    addAction: (m, g) => {
      n.notify(12, {
        savedCommonContext: g,
        ...ax(m, l)
      });
    },
    actionContexts: f,
    stop: d
  };
}
function ax(n, a) {
  const o = _p(n) ? {
    action: {
      id: n.id,
      loading_time: K0(ot(n.duration)),
      frustration: {
        type: n.frustrationTypes
      },
      error: {
        count: n.counts.errorCount
      },
      long_task: {
        count: n.counts.longTaskCount
      },
      resource: {
        count: n.counts.resourceCount
      }
    },
    _dd: {
      action: {
        target: n.target,
        position: n.position,
        name_source: Zc(xo.ACTION_NAME_MASKING) ? n.nameSource : void 0
      }
    }
  } : void 0, u = _p(n) ? void 0 : n.context, l = Wr({
    action: {
      id: pr(),
      target: {
        name: n.name
      },
      type: n.type
    },
    date: n.startClocks.timeStamp,
    type: "action",
    view: { in_foreground: a.wasInPageStateAt("active", n.startClocks.relative) }
  }, o), f = _p(n) ? { events: n.events } : {};
  return !_p(n) && n.handlingStack && (f.handlingStack = n.handlingStack), {
    customerContext: u,
    rawRumEvent: l,
    startTime: n.startClocks.relative,
    domainContext: f
  };
}
function _p(n) {
  return n.type !== "custom";
}
function NH(n) {
  const a = O0([yn.error]).subscribe((o) => n.notify(o.error));
  return {
    stop: () => {
      a.unsubscribe();
    }
  };
}
function MH(n, a) {
  const o = a0(n, [
    qu.cspViolation,
    qu.intervention
  ]).subscribe((u) => a.notify(u));
  return {
    stop: () => {
      o.unsubscribe();
    }
  };
}
function IH(n, a, o) {
  const u = new jt();
  return NH(u), t0(u), MH(a, u), u.subscribe((l) => n.notify(14, { error: l })), UH(n, o);
}
function UH(n, a) {
  return n.subscribe(14, ({ error: o, customerContext: u, savedCommonContext: l }) => {
    n.notify(12, {
      customerContext: u,
      savedCommonContext: l,
      ...jH(o, a)
    });
  }), {
    addError: ({ error: o, handlingStack: u, componentStack: l, startClocks: f, context: d }, m) => {
      const g = ji(o) ? ai(o) : void 0, y = Ub({
        stackTrace: g,
        originalError: o,
        handlingStack: u,
        componentStack: l,
        startClocks: f,
        nonErrorPrefix: "Provided",
        source: Ir.CUSTOM,
        handling: "handled"
      });
      n.notify(14, {
        customerContext: d,
        savedCommonContext: m,
        error: y
      });
    }
  };
}
function jH(n, a) {
  const o = {
    date: n.startClocks.timeStamp,
    error: {
      id: pr(),
      message: n.message,
      source: n.source,
      stack: n.stack,
      handling_stack: n.handlingStack,
      component_stack: n.componentStack,
      type: n.type,
      handling: n.handling,
      causes: n.causes,
      source_type: "browser",
      fingerprint: n.fingerprint,
      csp: n.csp
    },
    type: "error",
    view: { in_foreground: a.wasInPageStateAt("active", n.startClocks.relative) }
  }, u = {
    error: n.originalError,
    handlingStack: n.handlingStack
  };
  return {
    rawRumEvent: o,
    startTime: n.startClocks.relative,
    domainContext: u
  };
}
const ix = /* @__PURE__ */ new WeakSet();
function FH(n) {
  if (!performance || !("getEntriesByName" in performance))
    return;
  const a = performance.getEntriesByName(n.url, "resource");
  if (!a.length || !("toJSON" in a[0]))
    return;
  const o = a.filter((u) => !ix.has(u)).filter((u) => V0(u) && q0(u)).filter((u) => zH(u, n.startClocks.relative, cO({ startTime: n.startClocks.relative, duration: n.duration })));
  if (o.length === 1)
    return ix.add(o[0]), o[0].toJSON();
}
function cO(n) {
  return Ku(n.startTime, n.duration);
}
function zH(n, a, o) {
  return n.startTime >= a - 1 && cO(n) <= Ku(o, 1);
}
const PH = 2 * Mr;
function BH(n) {
  const a = $H(n) || HH(n);
  if (!(!a || a.traceTime <= da() - PH))
    return a.traceId;
}
function $H(n) {
  const a = n.querySelector("meta[name=dd-trace-id]"), o = n.querySelector("meta[name=dd-trace-time]");
  return fO(a && a.content, o && o.content);
}
function HH(n) {
  const a = VH(n);
  if (a)
    return fO(Qc(a, "trace-id"), Qc(a, "trace-time"));
}
function fO(n, a) {
  const o = a && Number(a);
  if (!(!n || !o))
    return {
      traceId: n,
      traceTime: o
    };
}
function VH(n) {
  for (let a = 0; a < n.childNodes.length; a += 1) {
    const o = ox(n.childNodes[a]);
    if (o)
      return o;
  }
  if (n.body)
    for (let a = n.body.childNodes.length - 1; a >= 0; a -= 1) {
      const o = n.body.childNodes[a], u = ox(o);
      if (u)
        return u;
      if (!J0(o))
        break;
    }
}
function ox(n) {
  if (n && $$(n)) {
    const a = /^\s*DATADOG;(.*?)\s*$/.exec(n.data);
    if (a)
      return a[1];
  }
}
function dO() {
  if (oh(Kt.NAVIGATION)) {
    const o = performance.getEntriesByType(Kt.NAVIGATION)[0];
    if (o)
      return o;
  }
  const n = qH(), a = {
    entryType: Kt.NAVIGATION,
    initiatorType: "navigation",
    name: window.location.href,
    startTime: 0,
    duration: n.loadEventEnd,
    decodedBodySize: 0,
    encodedBodySize: 0,
    transferSize: 0,
    workerStart: 0,
    toJSON: () => ({ ...a, toJSON: void 0 }),
    ...n
  };
  return a;
}
function qH() {
  const n = {}, a = performance.timing;
  for (const o in a)
    if (rf(a[o])) {
      const u = o, l = a[u];
      n[u] = l === 0 ? 0 : eh(l);
    }
  return n;
}
function YH(n, a, o = dO) {
  Pb(n, "interactive", () => {
    const u = o(), l = Object.assign(u.toJSON(), {
      entryType: Kt.RESOURCE,
      initiatorType: H0,
      // The ResourceTiming duration entry should be `responseEnd - startTime`. With
      // NavigationTiming entries, `startTime` is always 0, so set it to `responseEnd`.
      duration: u.responseEnd,
      traceId: BH(document),
      toJSON: () => ({ ...l, toJSON: void 0 })
    });
    a(l);
  });
}
function GH(n, a, o, u = yB(), l = YH) {
  n.subscribe(8, (m) => {
    d(() => WH(m, a, o));
  });
  const f = ri(a, {
    type: Kt.RESOURCE,
    buffered: !0
  }).subscribe((m) => {
    for (const g of m)
      _$(g) || d(() => sx(g, a));
  });
  l(a, (m) => {
    d(() => sx(m, a));
  });
  function d(m) {
    u.push(() => {
      const g = m();
      g && n.notify(12, g);
    });
  }
  return {
    stop: () => {
      f.unsubscribe();
    }
  };
}
function WH(n, a, o) {
  const u = FH(n), l = u ? Zp(u.startTime) : n.startClocks, f = KH(n, a);
  if (!a.trackResources && !f)
    return;
  const d = n.type === "xhr" ? "xhr" : "fetch", m = u ? pO(u) : void 0, g = QH(o, l, n.duration), y = Wr({
    date: l.timeStamp,
    resource: {
      id: pr(),
      type: d,
      duration: g,
      method: n.method,
      status_code: n.status,
      protocol: u && Y0(u),
      url: O$(n.url) ? A$(n.url) : n.url,
      delivery_type: u && G0(u)
    },
    type: "resource",
    _dd: {
      discarded: !a.trackResources
    }
  }, f, m);
  return {
    startTime: l.relative,
    rawRumEvent: y,
    domainContext: {
      performanceEntry: u,
      xhr: n.xhr,
      response: n.response,
      requestInput: n.input,
      requestInit: n.init,
      error: n.error,
      isAborted: n.isAborted,
      handlingStack: n.handlingStack
    }
  };
}
function sx(n, a) {
  const o = Zp(n.startTime), u = XH(n, a);
  if (!a.trackResources && !u)
    return;
  const l = E$(n), f = pO(n), d = Wr({
    date: o.timeStamp,
    resource: {
      id: pr(),
      type: l,
      url: n.name,
      status_code: JH(n.responseStatus),
      protocol: Y0(n),
      delivery_type: G0(n)
    },
    type: "resource",
    _dd: {
      discarded: !a.trackResources
    }
  }, u, f);
  return {
    startTime: o.relative,
    rawRumEvent: d,
    domainContext: {
      performanceEntry: n
    }
  };
}
function pO(n) {
  const { renderBlockingStatus: a } = n;
  return {
    resource: {
      duration: T$(n),
      render_blocking_status: a,
      ...x$(n),
      ...C$(n)
    }
  };
}
function KH(n, a) {
  if (n.traceSampled && n.traceId && n.spanId)
    return {
      _dd: {
        span_id: n.spanId.toString(),
        trace_id: n.traceId.toString(),
        rule_psr: a.rulePsr
      }
    };
}
function XH(n, a) {
  if (n.traceId)
    return {
      _dd: {
        trace_id: n.traceId,
        span_id: F0().toString(),
        rule_psr: a.rulePsr
      }
    };
}
function QH(n, a, o) {
  return n.wasInPageStateDuringPeriod("frozen", a.relative, o) ? void 0 : ot(o);
}
function JH(n) {
  return n === 0 ? void 0 : n;
}
function ZH(n, a, o) {
  const { stop: u, eventCounts: l } = X0({
    lifeCycle: n,
    isChildEvent: (f) => f.view.id === a,
    onChange: o
  });
  return {
    stop: u,
    eventCounts: l
  };
}
const eV = 10 * Mr;
function tV(n, a, o) {
  return {
    stop: ri(n, {
      type: Kt.PAINT,
      buffered: !0
    }).subscribe((l) => {
      const f = l.find((d) => d.name === "first-contentful-paint" && d.startTime < a.timeStamp && d.startTime < eV);
      f && o(f.startTime);
    }).unsubscribe
  };
}
function nV(n, a, o) {
  const u = ri(n, {
    type: Kt.FIRST_INPUT,
    buffered: !0
  }).subscribe((l) => {
    const f = l.find((d) => d.startTime < a.timeStamp);
    if (f) {
      const d = rr(f.startTime, f.processingStart);
      let m;
      f.target && el(f.target) && (m = lf(f.target, n.actionNameAttribute)), o({
        // Ensure firstInputDelay to be positive, see
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1185815
        delay: d >= 0 ? d : 0,
        time: f.startTime,
        targetSelector: m
      });
    }
  });
  return {
    stop: () => {
      u.unsubscribe();
    }
  };
}
function rV(n, a, o = dO) {
  return oV(n, () => {
    const u = o();
    iV(u) || a(aV(u));
  });
}
function aV(n) {
  return {
    domComplete: n.domComplete,
    domContentLoaded: n.domContentLoadedEventEnd,
    domInteractive: n.domInteractive,
    loadEvent: n.loadEventEnd,
    // In some cases the value reported is negative or is larger
    // than the current page time. Ignore these cases:
    // https://github.com/GoogleChrome/web-vitals/issues/137
    // https://github.com/GoogleChrome/web-vitals/issues/162
    firstByte: n.responseStart >= 0 && n.responseStart <= pa() ? n.responseStart : void 0
  };
}
function iV(n) {
  return n.loadEventEnd <= 0;
}
function oV(n, a) {
  let o;
  const { stop: u } = Pb(n, "complete", () => {
    o = fr(() => a());
  });
  return {
    stop: () => {
      u(), fa(o);
    }
  };
}
const sV = 10 * Mr;
function uV(n, a, o, u) {
  let l = 1 / 0;
  const { stop: f } = wo(n, o, [
    "pointerdown",
    "keydown"
    /* DOM_EVENT.KEY_DOWN */
  ], (g) => {
    l = g.timeStamp;
  }, { capture: !0, once: !0 });
  let d = 0;
  const m = ri(n, {
    type: Kt.LARGEST_CONTENTFUL_PAINT,
    buffered: !0
  }).subscribe((g) => {
    const y = cz(g, (_) => _.entryType === Kt.LARGEST_CONTENTFUL_PAINT && _.startTime < l && _.startTime < a.timeStamp && _.startTime < sV && // Ensure to get the LCP entry with the biggest size, see
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1516655
    _.size > d);
    if (y) {
      let _;
      y.element && (_ = lf(y.element, n.actionNameAttribute)), u({
        value: y.startTime,
        targetSelector: _,
        resourceUrl: y.url
      }), d = y.size;
    }
  });
  return {
    stop: () => {
      f(), m.unsubscribe();
    }
  };
}
function hO(n, a = window) {
  let o, u;
  return document.visibilityState === "hidden" ? o = 0 : (o = 1 / 0, { stop: u } = wo(n, a, [
    "pagehide",
    "visibilitychange"
    /* DOM_EVENT.VISIBILITY_CHANGE */
  ], (l) => {
    (l.type === "pagehide" || document.visibilityState === "hidden") && (o = l.timeStamp, u());
  }, { capture: !0 })), {
    get timeStamp() {
      return o;
    },
    stop() {
      u == null || u();
    }
  };
}
function lV(n, a, o) {
  const u = {}, { stop: l } = rV(n, (_) => {
    a(_.loadEvent), u.navigationTimings = _, o();
  }), f = hO(n), { stop: d } = tV(n, f, (_) => {
    u.firstContentfulPaint = _, o();
  }), { stop: m } = uV(n, f, window, (_) => {
    u.largestContentfulPaint = _, o();
  }), { stop: g } = nV(n, f, (_) => {
    u.firstInput = _, o();
  });
  function y() {
    l(), d(), m(), g(), f.stop();
  }
  return {
    stop: y,
    initialViewMetrics: u
  };
}
function cV(n, a, o) {
  if (!vV())
    return {
      stop: Vt
    };
  let u = 0, l;
  o({
    value: 0
  });
  const f = hV(), d = ri(n, {
    type: Kt.LAYOUT_SHIFT,
    buffered: !0
  }).subscribe((m) => {
    var g;
    for (const y of m) {
      if (y.hadRecentInput || y.startTime < a)
        continue;
      const { cumulatedValue: _, isMaxValue: R } = f.update(y);
      if (R) {
        const T = fV(y.sources);
        l = {
          target: T != null && T.node ? new WeakRef(T.node) : void 0,
          time: rr(a, y.startTime),
          previousRect: T == null ? void 0 : T.previousRect,
          currentRect: T == null ? void 0 : T.currentRect
        };
      }
      if (_ > u) {
        u = _;
        const T = (g = l == null ? void 0 : l.target) === null || g === void 0 ? void 0 : g.deref();
        o({
          value: Mp(u, 4),
          targetSelector: T && lf(T, n.actionNameAttribute),
          time: l == null ? void 0 : l.time,
          previousRect: l != null && l.previousRect ? ux(l.previousRect) : void 0,
          currentRect: l != null && l.currentRect ? ux(l.currentRect) : void 0
        });
      }
    }
  });
  return {
    stop: () => {
      d.unsubscribe();
    }
  };
}
function fV(n) {
  return n.find((a) => !!a.node && el(a.node));
}
function ux({ x: n, y: a, width: o, height: u }) {
  return { x: n, y: a, width: o, height: u };
}
const dV = 5 * _r, pV = _r;
function hV() {
  let n = 0, a, o, u = 0;
  return {
    update: (l) => {
      const f = a === void 0 || l.startTime - o >= pV || l.startTime - a >= dV;
      let d;
      return f ? (a = o = l.startTime, u = n = l.value, d = !0) : (n += l.value, o = l.startTime, d = l.value > u, d && (u = l.value)), {
        cumulatedValue: n,
        isMaxValue: d
      };
    }
  };
}
function vV() {
  return oh(Kt.LAYOUT_SHIFT) && "WeakRef" in window;
}
let wp, vO = 0, Yg = 1 / 0, Gg = 0;
function mV() {
  "interactionCount" in performance || wp || (wp = new window.PerformanceObserver(Re((n) => {
    n.getEntries().forEach((a) => {
      const o = a;
      o.interactionId && (Yg = Math.min(Yg, o.interactionId), Gg = Math.max(Gg, o.interactionId), vO = (Gg - Yg) / 7 + 1);
    });
  })), wp.observe({ type: "event", buffered: !0, durationThreshold: 0 }));
}
const lx = () => wp ? vO : window.performance.interactionCount || 0, cx = 10, yV = 1 * Mr;
function gV(n, a, o) {
  if (!EV())
    return {
      getInteractionToNextPaint: () => {
      },
      setViewEnd: Vt,
      stop: Vt
    };
  const { getViewInteractionCount: u, stopViewInteractionCount: l } = SV(o);
  let f = 1 / 0;
  const d = bV(u);
  let m = -1, g, y;
  function _(w) {
    for (const P of w)
      P.interactionId && // Check the entry start time is inside the view bounds because some view interactions can be reported after the view end (if long duration).
      P.startTime >= a && P.startTime <= f && d.process(P);
    const D = d.estimateP98Interaction();
    D && D.duration !== m && (m = D.duration, y = rr(a, D.startTime), g = RH(D.startTime), !g && D.target && el(D.target) && (g = lf(D.target, n.actionNameAttribute)));
  }
  const R = ri(n, {
    type: Kt.FIRST_INPUT,
    buffered: !0
  }).subscribe(_), T = ri(n, {
    type: Kt.EVENT,
    // durationThreshold only impact PerformanceEventTiming entries used for INP computation which requires a threshold at 40 (default is 104ms)
    // cf: https://github.com/GoogleChrome/web-vitals/blob/3806160ffbc93c3c4abf210a167b81228172b31c/src/onINP.ts#L202-L210
    durationThreshold: 40,
    buffered: !0
  }).subscribe(_);
  return {
    getInteractionToNextPaint: () => {
      if (m >= 0)
        return {
          value: Math.min(m, yV),
          targetSelector: g,
          time: y
        };
      if (u())
        return {
          value: 0
        };
    },
    setViewEnd: (w) => {
      f = w, l();
    },
    stop: () => {
      T.unsubscribe(), R.unsubscribe();
    }
  };
}
function bV(n) {
  const a = [];
  function o() {
    a.sort((u, l) => l.duration - u.duration).splice(cx);
  }
  return {
    /**
     * Process the performance entry:
     * - if its duration is long enough, add the performance entry to the list of worst interactions
     * - if an entry with the same interaction id exists and its duration is lower than the new one, then replace it in the list of worst interactions
     */
    process(u) {
      const l = a.findIndex((d) => u.interactionId === d.interactionId), f = a[a.length - 1];
      l !== -1 ? u.duration > a[l].duration && (a[l] = u, o()) : (a.length < cx || u.duration > f.duration) && (a.push(u), o());
    },
    /**
     * Compute the p98 longest interaction.
     * For better performance the computation is based on 10 longest interactions and the interaction count of the current view.
     */
    estimateP98Interaction() {
      const u = Math.min(a.length - 1, Math.floor(n() / 50));
      return a[u];
    }
  };
}
function SV(n) {
  mV();
  const a = n === "initial_load" ? 0 : lx();
  let o = { stopped: !1 };
  function u() {
    return lx() - a;
  }
  return {
    getViewInteractionCount: () => o.stopped ? o.interactionCount : u(),
    stopViewInteractionCount: () => {
      o = { stopped: !0, interactionCount: u() };
    }
  };
}
function EV() {
  return oh(Kt.EVENT) && window.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype;
}
function _V(n, a, o, u, l, f, d) {
  let m = l === "initial_load", g = !0;
  const y = [], _ = hO(u);
  function R() {
    if (!g && !m && y.length > 0) {
      const w = Math.max(...y);
      w < _.timeStamp && d(w);
    }
  }
  const { stop: T } = Vb(n, a, o, u, (w) => {
    g && (g = !1, w.hadActivity && y.push(rr(f.timeStamp, w.end)), R());
  });
  return {
    stop: () => {
      T(), _.stop();
    },
    setLoadEvent: (w) => {
      m && (m = !1, y.push(w), R());
    }
  };
}
function q3() {
  let n;
  const a = window.visualViewport;
  return a ? n = a.pageLeft - a.offsetLeft : window.scrollX !== void 0 ? n = window.scrollX : n = window.pageXOffset || 0, Math.round(n);
}
function TV() {
  let n;
  const a = window.visualViewport;
  return a ? n = a.pageTop - a.offsetTop : window.scrollY !== void 0 ? n = window.scrollY : n = window.pageYOffset || 0, Math.round(n);
}
let Wg;
function CV(n) {
  return Wg || (Wg = RV(n)), Wg;
}
function RV(n) {
  return new jt((a) => {
    const { throttled: o } = of(() => {
      a.notify(Yb());
    }, 200);
    return ln(n, window, "resize", o, { capture: !0, passive: !0 }).stop;
  });
}
function Yb() {
  const n = window.visualViewport;
  return n ? {
    width: Number(n.width * n.scale),
    height: Number(n.height * n.scale)
  } : {
    width: Number(window.innerWidth || 0),
    height: Number(window.innerHeight || 0)
  };
}
const xV = _r;
function wV(n, a, o, u = AV(n)) {
  let l = 0, f = 0, d = 0;
  const m = u.subscribe(({ scrollDepth: g, scrollTop: y, scrollHeight: _ }) => {
    let R = !1;
    if (g > l && (l = g, R = !0), _ > f) {
      f = _;
      const T = pa();
      d = rr(a.relative, T), R = !0;
    }
    R && o({
      maxDepth: Math.min(l, f),
      maxDepthScrollTop: y,
      maxScrollHeight: f,
      maxScrollHeightTime: d
    });
  });
  return {
    stop: () => m.unsubscribe()
  };
}
function OV() {
  const n = TV(), { height: a } = Yb(), o = Math.round((document.scrollingElement || document.documentElement).scrollHeight), u = Math.round(a + n);
  return {
    scrollHeight: o,
    scrollDepth: u,
    scrollTop: n
  };
}
function AV(n, a = xV) {
  return new jt((o) => {
    function u() {
      o.notify(OV());
    }
    if (window.ResizeObserver) {
      const l = of(u, a, {
        leading: !1,
        trailing: !0
      }), f = document.scrollingElement || document.documentElement, d = new ResizeObserver(Re(l.throttled));
      f && d.observe(f);
      const m = ln(n, window, "scroll", l.throttled, {
        passive: !0
      });
      return () => {
        l.cancel(), d.disconnect(), m.stop();
      };
    }
  });
}
function DV(n, a, o, u, l, f, d) {
  const m = {}, { stop: g, setLoadEvent: y } = _V(n, a, o, u, f, d, (P) => {
    m.loadingTime = P, l();
  }), { stop: _ } = wV(u, d, (P) => {
    m.scroll = P;
  }), { stop: R } = cV(u, d.relative, (P) => {
    m.cumulativeLayoutShift = P, l();
  }), { stop: T, getInteractionToNextPaint: w, setViewEnd: D } = gV(u, d.relative, f);
  return {
    stop: () => {
      g(), R(), _();
    },
    stopINPTracking: T,
    setLoadEvent: y,
    setViewEnd: D,
    getCommonViewMetrics: () => (m.interactionToNextPaint = w(), m)
  };
}
const kV = 3e3, LV = 5 * Mr, NV = 5 * Mr;
function MV(n, a, o, u, l, f, d, m) {
  const g = /* @__PURE__ */ new Set();
  let y = R("initial_load", ww(), m);
  T();
  let _;
  d && (_ = w(f));
  function R(D, P, Y) {
    const H = IV(a, o, u, l, n, D, P, Y);
    return g.add(H), H.stopObservable.subscribe(() => {
      g.delete(H);
    }), H;
  }
  function T() {
    a.subscribe(10, () => {
      y = R("route_change", void 0, {
        name: y.name,
        service: y.service,
        version: y.version,
        context: y.contextManager.getContext()
      });
    }), a.subscribe(9, () => {
      y.end({ sessionIsActive: !1 });
    }), a.subscribe(11, (D) => {
      D.reason === $u.UNLOADING && y.end();
    });
  }
  function w(D) {
    return D.subscribe(({ oldLocation: P, newLocation: Y }) => {
      jV(P, Y) && (y.end(), y = R(
        "route_change"
        /* ViewLoadingType.ROUTE_CHANGE */
      ));
    });
  }
  return {
    addTiming: (D, P = nr()) => {
      y.addTiming(D, P);
    },
    startView: (D, P) => {
      y.end({ endClocks: P }), y = R("route_change", P, D);
    },
    setViewContext: (D) => {
      y.contextManager.setContext(D);
    },
    setViewContextProperty: (D, P) => {
      y.contextManager.setContextProperty(D, P);
    },
    setViewName: (D) => {
      y.setViewName(D);
    },
    getViewContext: () => y.contextManager.getContext(),
    stop: () => {
      _ && _.unsubscribe(), y.end(), g.forEach((D) => D.stop());
    }
  };
}
function IV(n, a, o, u, l, f, d = dr(), m) {
  const g = pr(), y = new jt(), _ = {};
  let R = 0, T;
  const w = Xc(l), D = Yu();
  let P = !0, Y, H, Q, V;
  m && (Y = m.name, H = m.service || void 0, Q = m.version || void 0, m.context && (V = m.context, D.setContext(V)));
  const ae = {
    id: g,
    name: Y,
    startClocks: d,
    service: H,
    version: Q,
    context: V
  };
  n.notify(1, ae), n.notify(2, ae);
  const { throttled: oe, cancel: de } = of(qt, kV, {
    leading: !1
  }), { setLoadEvent: Z, setViewEnd: Ie, stop: ft, stopINPTracking: Lt, getCommonViewMetrics: Ot } = DV(n, a, o, u, Fe, f, d), { stop: rt, initialViewMetrics: we } = f === "initial_load" ? lV(u, Z, Fe) : { stop: Vt, initialViewMetrics: {} }, { stop: Ze, eventCounts: ht } = ZH(n, g, Fe), Ge = Xu(qt, LV);
  qt(), D.changeObservable.subscribe(Fe);
  function Oe() {
    n.notify(3, {
      id: g,
      name: Y,
      context: D.getContext(),
      startClocks: d
    });
  }
  function Fe() {
    Oe(), oe();
  }
  function qt() {
    de(), Oe(), R += 1;
    const X = T === void 0 ? nr() : T.timeStamp;
    n.notify(4, {
      customTimings: _,
      documentVersion: R,
      id: g,
      name: Y,
      service: H,
      version: Q,
      context: D.getContext(),
      loadingType: f,
      location: w,
      startClocks: d,
      commonViewMetrics: Ot(),
      initialViewMetrics: we,
      duration: rr(d.timeStamp, X),
      isActive: T === void 0,
      sessionIsActive: P,
      eventCounts: ht
    });
  }
  return {
    get name() {
      return Y;
    },
    service: H,
    version: Q,
    contextManager: D,
    stopObservable: y,
    end(X = {}) {
      var ie, se;
      T || (T = (ie = X.endClocks) !== null && ie !== void 0 ? ie : dr(), P = (se = X.sessionIsActive) !== null && se !== void 0 ? se : !0, n.notify(5, { endClocks: T }), n.notify(6, { endClocks: T }), th(Ge), Ie(T.relative), ft(), qt(), fr(() => {
        this.stop();
      }, NV));
    },
    stop() {
      rt(), Ze(), Lt(), y.notify();
    },
    addTiming(X, ie) {
      if (T)
        return;
      const se = JF(ie) ? ie : rr(d.timeStamp, ie);
      _[UV(X)] = se, Fe();
    },
    setViewName(X) {
      Y = X, qt();
    }
  };
}
function UV(n) {
  const a = n.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
  return a !== n && kt.warn(`Invalid timing name: ${n}, sanitized to: ${a}`), a;
}
function jV(n, a) {
  return n.pathname !== a.pathname || !FV(a.hash) && fx(a.hash) !== fx(n.hash);
}
function FV(n) {
  const a = n.substring(1);
  return a !== "" && !!document.getElementById(a);
}
function fx(n) {
  const a = n.indexOf("?");
  return a < 0 ? n : n.slice(0, a);
}
function zV(n, a, o, u, l, f, d, m, g) {
  return n.subscribe(4, (y) => n.notify(12, PV(y, a, m, d))), MV(o, n, u, l, a, f, !a.trackViewsManually, g);
}
function PV(n, a, o, u) {
  var l, f, d, m, g, y, _, R, T, w, D, P, Y, H, Q, V;
  const ae = o.getReplayStats(n.id), oe = u.findAll(n.startClocks.relative, n.duration), de = {
    _dd: {
      document_version: n.documentVersion,
      replay_stats: ae,
      page_states: oe,
      configuration: {
        start_session_replay_recording_manually: a.startSessionReplayRecordingManually
      }
    },
    date: n.startClocks.timeStamp,
    type: "view",
    view: {
      action: {
        count: n.eventCounts.actionCount
      },
      frustration: {
        count: n.eventCounts.frustrationCount
      },
      cumulative_layout_shift: (l = n.commonViewMetrics.cumulativeLayoutShift) === null || l === void 0 ? void 0 : l.value,
      cumulative_layout_shift_time: ot((f = n.commonViewMetrics.cumulativeLayoutShift) === null || f === void 0 ? void 0 : f.time),
      cumulative_layout_shift_target_selector: (d = n.commonViewMetrics.cumulativeLayoutShift) === null || d === void 0 ? void 0 : d.targetSelector,
      first_byte: ot((m = n.initialViewMetrics.navigationTimings) === null || m === void 0 ? void 0 : m.firstByte),
      dom_complete: ot((g = n.initialViewMetrics.navigationTimings) === null || g === void 0 ? void 0 : g.domComplete),
      dom_content_loaded: ot((y = n.initialViewMetrics.navigationTimings) === null || y === void 0 ? void 0 : y.domContentLoaded),
      dom_interactive: ot((_ = n.initialViewMetrics.navigationTimings) === null || _ === void 0 ? void 0 : _.domInteractive),
      error: {
        count: n.eventCounts.errorCount
      },
      first_contentful_paint: ot(n.initialViewMetrics.firstContentfulPaint),
      first_input_delay: ot((R = n.initialViewMetrics.firstInput) === null || R === void 0 ? void 0 : R.delay),
      first_input_time: ot((T = n.initialViewMetrics.firstInput) === null || T === void 0 ? void 0 : T.time),
      first_input_target_selector: (w = n.initialViewMetrics.firstInput) === null || w === void 0 ? void 0 : w.targetSelector,
      interaction_to_next_paint: ot((D = n.commonViewMetrics.interactionToNextPaint) === null || D === void 0 ? void 0 : D.value),
      interaction_to_next_paint_time: ot((P = n.commonViewMetrics.interactionToNextPaint) === null || P === void 0 ? void 0 : P.time),
      interaction_to_next_paint_target_selector: (Y = n.commonViewMetrics.interactionToNextPaint) === null || Y === void 0 ? void 0 : Y.targetSelector,
      is_active: n.isActive,
      name: n.name,
      largest_contentful_paint: ot((H = n.initialViewMetrics.largestContentfulPaint) === null || H === void 0 ? void 0 : H.value),
      largest_contentful_paint_target_selector: (Q = n.initialViewMetrics.largestContentfulPaint) === null || Q === void 0 ? void 0 : Q.targetSelector,
      load_event: ot((V = n.initialViewMetrics.navigationTimings) === null || V === void 0 ? void 0 : V.loadEvent),
      loading_time: K0(ot(n.commonViewMetrics.loadingTime)),
      loading_type: n.loadingType,
      long_task: {
        count: n.eventCounts.longTaskCount
      },
      performance: BV(n.commonViewMetrics, n.initialViewMetrics),
      resource: {
        count: n.eventCounts.resourceCount
      },
      time_spent: ot(n.duration)
    },
    display: n.commonViewMetrics.scroll ? {
      scroll: {
        max_depth: n.commonViewMetrics.scroll.maxDepth,
        max_depth_scroll_top: n.commonViewMetrics.scroll.maxDepthScrollTop,
        max_scroll_height: n.commonViewMetrics.scroll.maxScrollHeight,
        max_scroll_height_time: ot(n.commonViewMetrics.scroll.maxScrollHeightTime)
      }
    } : void 0,
    session: {
      has_replay: ae ? !0 : void 0,
      is_active: n.sessionIsActive ? void 0 : !1
    },
    privacy: {
      replay_level: a.defaultPrivacyLevel
    }
  };
  return Ts(n.customTimings) || (de.view.custom_timings = tz(n.customTimings, ot)), {
    rawRumEvent: de,
    startTime: n.startClocks.relative,
    domainContext: {
      location: n.location
    }
  };
}
function BV({ cumulativeLayoutShift: n, interactionToNextPaint: a }, { firstContentfulPaint: o, firstInput: u, largestContentfulPaint: l }) {
  return {
    cls: n && {
      score: n.value,
      timestamp: ot(n.time),
      target_selector: n.targetSelector,
      previous_rect: n.previousRect,
      current_rect: n.currentRect
    },
    fcp: o && { timestamp: ot(o) },
    fid: u && {
      duration: ot(u.delay),
      timestamp: ot(u.time),
      target_selector: u.targetSelector
    },
    inp: a && {
      duration: ot(a.value),
      timestamp: ot(a.time),
      target_selector: a.targetSelector
    },
    lcp: l && {
      timestamp: ot(l.value),
      target_selector: l.targetSelector,
      resource_url: l.resourceUrl
    }
  };
}
const $V = "rum";
function HV(n, a, o) {
  const u = h0(n, $V, (l) => qV(n, l), o);
  return u.expireObservable.subscribe(() => {
    a.notify(
      9
      /* LifeCycleEventType.SESSION_EXPIRED */
    );
  }), u.renewObservable.subscribe(() => {
    a.notify(
      10
      /* LifeCycleEventType.SESSION_RENEWED */
    );
  }), u.sessionStateUpdateObservable.subscribe(({ previousState: l, newState: f }) => {
    if (!l.forcedReplay && f.forcedReplay) {
      const d = u.findSession();
      d && (d.isReplayForced = !0);
    }
  }), {
    findTrackedSession: (l) => {
      const f = u.findSession(l);
      if (!(!f || !mO(f.trackingType)))
        return {
          id: f.id,
          sessionReplay: f.trackingType === "1" ? 1 : f.isReplayForced ? 2 : 0,
          anonymousId: f.anonymousId
        };
    },
    expire: u.expire,
    expireObservable: u.expireObservable,
    setForcedReplay: () => u.updateSessionState({ forcedReplay: "1" })
  };
}
function VV() {
  const n = {
    id: "00000000-aaaa-0000-aaaa-000000000000",
    sessionReplay: C0(
      "records"
      /* BridgeCapability.RECORDS */
    ) ? 1 : 0
  };
  return {
    findTrackedSession: () => n,
    expire: Vt,
    expireObservable: new jt(),
    setForcedReplay: Vt
  };
}
function qV(n, a) {
  let o;
  return YV(a) ? o = a : Co(n.sessionSampleRate) ? Co(n.sessionReplaySampleRate) ? o = "1" : o = "2" : o = "0", {
    trackingType: o,
    isTracked: mO(o)
  };
}
function YV(n) {
  return n === "0" || n === "1" || n === "2";
}
function mO(n) {
  return n === "2" || n === "1";
}
function GV(n, a, o, u, l, f, d) {
  const m = n.replica, g = zb(n, {
    endpoint: n.rumEndpointBuilder,
    encoder: d(
      2
      /* DeflateEncoderStreamId.RUM */
    )
  }, m && {
    endpoint: m.rumEndpointBuilder,
    transformMessage: (y) => Wr(y, { application: { id: m.applicationId } }),
    encoder: d(
      3
      /* DeflateEncoderStreamId.RUM_REPLICA */
    )
  }, u, l, f);
  return a.subscribe(13, (y) => {
    y.type === "view" ? g.upsert(y, y.view.id) : g.add(y);
  }), o.subscribe((y) => g.add(y, d0(n))), g;
}
function WV(n) {
  const a = Ds();
  n.subscribe(13, (o) => {
    a.send("rum", o);
  });
}
const KV = xs;
function XV(n, a, o) {
  const u = Zu({ expireDelay: KV });
  let l;
  n.subscribe(1, ({ startClocks: m }) => {
    const g = o.href;
    u.add(d({
      url: g,
      referrer: l || document.referrer
    }), m.relative), l = g;
  }), n.subscribe(6, ({ endClocks: m }) => {
    u.closeActive(m.relative);
  });
  const f = a.subscribe(({ newLocation: m }) => {
    const g = u.find();
    if (g) {
      const y = pa();
      u.closeActive(y), u.add(d({
        url: m.href,
        referrer: g.referrer
      }), y);
    }
  });
  function d({ url: m, referrer: g }) {
    return {
      url: m,
      referrer: g
    };
  }
  return {
    findUrl: (m) => u.find(m),
    getAllEntries: () => u.getAllEntries(),
    getDeletedEntries: () => u.getDeletedEntries(),
    stop: () => {
      f.unsubscribe(), u.stop();
    }
  };
}
function QV(n, a) {
  let o = Xc(a);
  return new jt((u) => {
    const { stop: l } = JV(n, d), { stop: f } = ZV(n, d);
    function d() {
      if (o.href === a.href)
        return;
      const m = Xc(a);
      u.notify({
        newLocation: m,
        oldLocation: o
      }), o = m;
    }
    return () => {
      l(), f();
    };
  });
}
function JV(n, a) {
  const { stop: o } = ti(dx("pushState"), "pushState", ({ onPostCall: f }) => {
    f(a);
  }), { stop: u } = ti(dx("replaceState"), "replaceState", ({ onPostCall: f }) => {
    f(a);
  }), { stop: l } = ln(n, window, "popstate", a);
  return {
    stop: () => {
      o(), u(), l();
    }
  };
}
function ZV(n, a) {
  return ln(n, window, "hashchange", a);
}
function dx(n) {
  return Object.prototype.hasOwnProperty.call(history, n) ? history : History.prototype;
}
const eq = xs;
function tq(n, a) {
  const o = Zu({
    expireDelay: eq
  });
  return n.subscribe(1, ({ startClocks: u }) => {
    o.add({}, u.relative), a.resetCustomerData();
  }), n.subscribe(6, ({ endClocks: u }) => {
    o.closeActive(u.relative);
  }), {
    findFeatureFlagEvaluations: (u) => o.find(u),
    addFeatureFlagEvaluation: (u, l) => {
      const f = o.find();
      f && (f[u] = l, a.updateCustomerData(f));
    },
    stop: () => a.stop()
  };
}
const nq = 10 * _r;
let Ai, ys, lb;
function rq(n, a, o, u, l) {
  a.enabled && Co(n.customerDataTelemetrySampleRate) && (yO(), px(), o.subscribe(13, (d) => {
    lb = !0, Bc(ys.globalContextBytes, u.getOrCreateTracker(
      2
      /* CustomerDataType.GlobalContext */
    ).getBytesCount()), Bc(ys.userContextBytes, u.getOrCreateTracker(
      1
      /* CustomerDataType.User */
    ).getBytesCount()), Bc(ys.featureFlagBytes, [
      "view",
      "error"
      /* RumEventType.ERROR */
    ].includes(d.type) ? u.getOrCreateTracker(
      0
      /* CustomerDataType.FeatureFlag */
    ).getBytesCount() : 0);
  }), l.subscribe(({ bytesCount: d, messagesCount: m }) => {
    lb && (Ai.batchCount += 1, Bc(Ai.batchBytesCount, d), Bc(Ai.batchMessagesCount, m), Kg(Ai.globalContextBytes, ys.globalContextBytes), Kg(Ai.userContextBytes, ys.userContextBytes), Kg(Ai.featureFlagBytes, ys.featureFlagBytes), px());
  }), Xu(aq, nq));
}
function aq() {
  Ai.batchCount !== 0 && (As("Customer data measures", Ai), yO());
}
function _o() {
  return { min: 1 / 0, max: 0, sum: 0 };
}
function Bc(n, a) {
  n.sum += a, n.min = Math.min(n.min, a), n.max = Math.max(n.max, a);
}
function Kg(n, a) {
  n.sum += a.sum, n.min = Math.min(n.min, a.min), n.max = Math.max(n.max, a.max);
}
function yO() {
  Ai = {
    batchCount: 0,
    batchBytesCount: _o(),
    batchMessagesCount: _o(),
    globalContextBytes: _o(),
    userContextBytes: _o(),
    featureFlagBytes: _o()
  };
}
function px() {
  lb = !1, ys = {
    globalContextBytes: _o(),
    userContextBytes: _o(),
    featureFlagBytes: _o()
  };
}
const iq = 4e3, oq = 500, sq = xs;
function uq(n, a = oq) {
  const o = Zu({
    expireDelay: sq,
    maxEntries: iq
  });
  let u;
  f(gO(), pa());
  const { stop: l } = wo(n, window, [
    "pageshow",
    "focus",
    "blur",
    "visibilitychange",
    "resume",
    "freeze",
    "pagehide"
  ], (m) => {
    f(lq(m), m.timeStamp);
  }, { capture: !0 });
  function f(m, g = pa()) {
    m !== u && (u = m, o.closeActive(g), o.add({ state: u, startTime: g }, g));
  }
  const d = {
    findAll: (m, g) => {
      const y = o.findAll(m, g);
      if (y.length === 0)
        return;
      const _ = [], R = Math.max(0, y.length - a);
      for (let T = y.length - 1; T >= R; T--) {
        const w = y[T], D = rr(m, w.startTime);
        _.push({
          state: w.state,
          start: ot(D)
        });
      }
      return _;
    },
    wasInPageStateAt: (m, g) => d.wasInPageStateDuringPeriod(m, g, 0),
    wasInPageStateDuringPeriod: (m, g, y) => o.findAll(g, y).some((_) => _.state === m),
    addPageState: f,
    stop: () => {
      l(), o.stop();
    }
  };
  return d;
}
function lq(n) {
  return n.type === "freeze" ? "frozen" : n.type === "pagehide" ? n.persisted ? "frozen" : "terminated" : gO();
}
function gO() {
  return document.visibilityState === "hidden" ? "hidden" : document.hasFocus() ? "active" : "passive";
}
function cq(n) {
  let a;
  const o = requestAnimationFrame(Re(() => {
    a = Yb();
  })), u = CV(n).subscribe((l) => {
    a = l;
  }).unsubscribe;
  return {
    get: () => a ? { viewport: a } : void 0,
    stop: () => {
      u(), o && cancelAnimationFrame(o);
    }
  };
}
function fq(n, a) {
  const o = window.cookieStore ? dq(n) : hq;
  return new jt((u) => o(a, (l) => u.notify(l)));
}
function dq(n) {
  return (a, o) => ln(n, window.cookieStore, "change", (l) => {
    const f = l.changed.find((d) => d.name === a) || l.deleted.find((d) => d.name === a);
    f && o(f.value);
  }).stop;
}
const pq = _r;
function hq(n, a) {
  const o = Qc(document.cookie, n), u = Xu(() => {
    const l = Qc(document.cookie, n);
    l !== o && a(l);
  }, pq);
  return () => {
    th(u);
  };
}
const hx = "datadog-ci-visibility-test-execution-id";
function vq(n, a = fq(n, hx)) {
  var o;
  let u = To(hx) || ((o = window.Cypress) === null || o === void 0 ? void 0 : o.env("traceId"));
  const l = a.subscribe((f) => {
    u = f;
  });
  return {
    get: () => {
      if (typeof u == "string")
        return {
          test_execution_id: u
        };
    },
    stop: () => l.unsubscribe()
  };
}
function mq(n, a) {
  const o = ri(a, {
    type: Kt.LONG_ANIMATION_FRAME,
    buffered: !0
  }).subscribe((u) => {
    for (const l of u) {
      const f = Zp(l.startTime), d = {
        date: f.timeStamp,
        long_task: {
          id: pr(),
          entry_type: "long-animation-frame",
          duration: ot(l.duration),
          blocking_duration: ot(l.blockingDuration),
          first_ui_event_timestamp: ot(l.firstUIEventTimestamp),
          render_start: ot(l.renderStart),
          style_and_layout_start: ot(l.styleAndLayoutStart),
          start_time: ot(l.startTime),
          scripts: l.scripts.map((m) => ({
            duration: ot(m.duration),
            pause_duration: ot(m.pauseDuration),
            forced_style_and_layout_duration: ot(m.forcedStyleAndLayoutDuration),
            start_time: ot(m.startTime),
            execution_start: ot(m.executionStart),
            source_url: m.sourceURL,
            source_function_name: m.sourceFunctionName,
            source_char_position: m.sourceCharPosition,
            invoker: m.invoker,
            invoker_type: m.invokerType,
            window_attribution: m.windowAttribution
          }))
        },
        type: "long_task",
        _dd: {
          discarded: !1
        }
      };
      n.notify(12, {
        rawRumEvent: d,
        startTime: f.relative,
        domainContext: { performanceEntry: l }
      });
    }
  });
  return {
    stop: () => o.unsubscribe()
  };
}
function yq(n, a) {
  const o = ri(a, {
    type: Kt.LONG_TASK,
    buffered: !0
  }).subscribe((u) => {
    for (const l of u) {
      if (l.entryType !== Kt.LONG_TASK || !a.trackLongTasks)
        break;
      const f = Zp(l.startTime), d = {
        date: f.timeStamp,
        long_task: {
          id: pr(),
          entry_type: "long-task",
          duration: ot(l.duration)
        },
        type: "long_task",
        _dd: {
          discarded: !1
        }
      };
      n.notify(12, {
        rawRumEvent: d,
        startTime: f.relative,
        domainContext: { performanceEntry: l }
      });
    }
  });
  return {
    stop() {
      o.unsubscribe();
    }
  };
}
function gq(n, a, o, u, l, f, d, m) {
  var g;
  const y = [], _ = new y$();
  _.subscribe(13, (se) => jb("rum", se));
  const R = bq(n);
  R.setContextProvider(() => {
    var se, Ae;
    return {
      application: {
        id: n.applicationId
      },
      session: {
        id: (se = Y.findTrackedSession()) === null || se === void 0 ? void 0 : se.id
      },
      view: {
        id: (Ae = de.findView()) === null || Ae === void 0 ? void 0 : Ae.id
      },
      action: {
        id: Ie.findActionId()
      }
    };
  });
  const T = (se) => {
    _.notify(14, { error: se }), As("Error reported to customer", { "error.message": se.message });
  }, w = tq(_, o.getOrCreateTracker(
    0
    /* CustomerDataType.FeatureFlag */
  )), D = R0(n), P = D.subscribe((se) => {
    _.notify(11, se);
  });
  y.push(() => P.unsubscribe());
  const Y = ni() ? VV() : HV(n, _, d);
  if (ni())
    WV(_);
  else {
    const se = GV(n, _, R.observable, T, D, Y.expireObservable, f);
    y.push(() => se.stop()), rq(n, R, _, o, se.flushObservable);
  }
  const H = i$(), Q = QV(n, location), V = uq(n), { observable: ae, stop: oe } = s$();
  y.push(oe);
  const { viewHistory: de, urlContexts: Z, actionContexts: Ie, addAction: ft, stop: Lt } = Sq(_, n, location, Y, V, Q, H, w, ae, u, T);
  y.push(Lt), f0();
  const { addTiming: Ot, startView: rt, setViewName: we, setViewContext: Ze, setViewContextProperty: ht, getViewContext: Ge, stop: Oe } = zV(_, n, location, H, ae, Q, V, a, l);
  y.push(Oe);
  const { stop: Fe } = GH(_, n, V);
  if (y.push(Fe), n.trackLongTasks)
    if (!((g = PerformanceObserver.supportedEntryTypes) === null || g === void 0) && g.includes(Kt.LONG_ANIMATION_FRAME)) {
      const { stop: se } = mq(_, n);
      y.push(se);
    } else
      yq(_, n);
  const { addError: qt } = IH(_, n, V);
  D$(_, n, Y);
  const X = NB(_, V, m), ie = m$(n.applicationId, Y, de, Ie, Z);
  return {
    addAction: ft,
    addError: qt,
    addTiming: Ot,
    addFeatureFlagEvaluation: w.addFeatureFlagEvaluation,
    startView: rt,
    setViewContext: Ze,
    setViewContextProperty: ht,
    getViewContext: Ge,
    setViewName: we,
    lifeCycle: _,
    viewHistory: de,
    session: Y,
    stopSession: () => Y.expire(),
    getInternalContext: ie.get,
    startDurationVital: X.startDurationVital,
    stopDurationVital: X.stopDurationVital,
    addDurationVital: X.addDurationVital,
    stop: () => {
      y.forEach((se) => se());
    }
  };
}
function bq(n) {
  const a = c0("browser-rum-sdk", n);
  if (ni()) {
    const o = Ds();
    a.observable.subscribe((u) => o.send("internal_telemetry", u));
  }
  return a;
}
function Sq(n, a, o, u, l, f, d, m, g, y, _) {
  const R = b$(n), T = XV(n, f, o), w = LH(n, d, g, a, l), D = cq(a), P = vq(a);
  return d$(a, n, u, R, T, w.actionContexts, D, P, m, y, _), {
    viewHistory: R,
    pageStateHistory: l,
    urlContexts: T,
    addAction: w.addAction,
    actionContexts: w.actionContexts,
    stop: () => {
      w.stop(), P.stop(), D.stop(), T.stop(), R.stop(), l.stop();
    }
  };
}
function Eq(n, { session: a, viewContext: o, errorType: u }) {
  const l = a ? a.id : "no-session-id", f = [];
  u !== void 0 && f.push(`error-type=${u}`), o && (f.push(`seed=${o.id}`), f.push(`from=${o.startClocks.timeStamp}`));
  const d = _q(n), m = `/rum/replay/sessions/${l}`;
  return `${d}${m}?${f.join("&")}`;
}
function _q(n) {
  const a = n.site, o = n.subdomain || Tq(n);
  return `https://${o ? `${o}.` : ""}${a}`;
}
function Tq(n) {
  switch (n.site) {
    case Es:
    case zz:
      return "app";
    case Vw:
      return "dd";
    default:
      return;
  }
}
const Cq = 10;
let ca;
function Y3(n) {
  return sh(n).segments_count;
}
function G3(n) {
  sh(n).segments_count += 1;
}
function W3(n) {
  sh(n).records_count += 1;
}
function K3(n, a) {
  sh(n).segments_total_raw_size += a;
}
function Rq(n) {
  return ca == null ? void 0 : ca.get(n);
}
function sh(n) {
  ca || (ca = /* @__PURE__ */ new Map());
  let a;
  return ca.has(n) ? a = ca.get(n) : (a = {
    records_count: 0,
    segments_count: 0,
    segments_total_raw_size: 0
  }, ca.set(n, a), ca.size > Cq && xq()), a;
}
function xq() {
  if (!ca)
    return;
  const n = ca.keys().next().value;
  n && ca.delete(n);
}
function bO(n, a, o) {
  let u = 0, l = [], f, d = 0;
  const m = [], { stop: g } = ln(n, a, "message", ({ data: R }) => {
    if (R.type !== "wrote" || R.streamId !== o)
      return;
    u += R.additionalBytesCount, l.push(R.result), f = R.trailer;
    const T = m.shift();
    T && T.id === R.id ? T.writeCallback ? T.writeCallback(R.result.byteLength) : T.finishCallback && T.finishCallback() : (g(), As("Worker responses received out of order."));
  });
  function y() {
    const R = l.length === 0 ? new Uint8Array(0) : ez(l.concat(f)), T = {
      rawBytesCount: u,
      output: R,
      outputBytesCount: R.byteLength,
      encoding: "deflate"
    };
    return u = 0, l = [], T;
  }
  function _() {
    d > 0 && (a.postMessage({
      action: "reset",
      streamId: o
    }), d = 0);
  }
  return {
    isAsync: !0,
    get isEmpty() {
      return d === 0;
    },
    write(R, T) {
      a.postMessage({
        action: "write",
        id: d,
        data: R,
        streamId: o
      }), m.push({
        id: d,
        writeCallback: T,
        data: R
      }), d += 1;
    },
    finish(R) {
      _(), m.length ? (m.forEach((T) => {
        delete T.writeCallback;
      }), m[m.length - 1].finishCallback = () => R(y())) : R(y());
    },
    finishSync() {
      _();
      const R = m.map((T) => (delete T.writeCallback, delete T.finishCallback, T.data)).join("");
      return { ...y(), pendingData: R };
    },
    estimateEncodedBytesCount(R) {
      return R.length / 8;
    },
    stop() {
      g();
    }
  };
}
const wq = 30 * _r;
function SO(n) {
  return new Worker(n.workerUrl || URL.createObjectURL(new Blob(['(()=>{"use strict";function t(t){const e=t.reduce(((t,e)=>t+e.length),0),a=new Uint8Array(e);let n=0;for(const e of t)a.set(e,n),n+=e.length;return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=256,n=286,r=30,i=15,s=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),h=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),l=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),_=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=new Array(576);e(o);var d=new Array(60);e(d);var u=new Array(512);e(u);var f=new Array(256);e(f);var c=new Array(29);e(c);var p,g,w,v=new Array(r);function b(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function m(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(v);var y=function(t){return t<256?u[t]:u[256+(t>>>7)]},k=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},z=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,k(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},x=function(t,e,a){z(t,a[2*e],a[2*e+1])},A=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},U=function(t,e,a){var n,r,s=new Array(16),h=0;for(n=1;n<=i;n++)s[n]=h=h+a[n-1]<<1;for(r=0;r<=e;r++){var l=t[2*r+1];0!==l&&(t[2*r]=A(s[l]++,l))}},I=function(t){var e;for(e=0;e<n;e++)t.dyn_ltree[2*e]=0;for(e=0;e<r;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},B=function(t){t.bi_valid>8?k(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},E=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},S=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&E(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!E(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},C=function(t,e,n){var r,i,l,_,o=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],i=t.pending_buf[t.l_buf+o],o++,0===r?x(t,i,e):(l=f[i],x(t,l+a+1,e),0!==(_=s[l])&&(i-=c[l],z(t,i,_)),r--,l=y(r),x(t,l,n),0!==(_=h[l])&&(r-=v[l],z(t,r,_)))}while(o<t.last_lit);x(t,256,e)},D=function(t,e){var a,n,r,s=e.dyn_tree,h=e.stat_desc.static_tree,l=e.stat_desc.has_stree,_=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<_;a++)0!==s[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):s[2*a+1]=0;for(;t.heap_len<2;)s[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,l&&(t.static_len-=h[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)S(t,s,a);r=_;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,s,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,s[2*r]=s[2*a]+s[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,s[2*a+1]=s[2*n+1]=r,t.heap[1]=r++,S(t,s,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,s,h,l,_=e.dyn_tree,o=e.max_code,d=e.stat_desc.static_tree,u=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(s=0;s<=i;s++)t.bl_count[s]=0;for(_[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(s=_[2*_[2*(n=t.heap[a])+1]+1]+1)>p&&(s=p,g++),_[2*n+1]=s,n>o||(t.bl_count[s]++,h=0,n>=c&&(h=f[n-c]),l=_[2*n],t.opt_len+=l*(s+h),u&&(t.static_len+=l*(d[2*n+1]+h)));if(0!==g){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(s=p;0!==s;s--)for(n=t.bl_count[s];0!==n;)(r=t.heap[--a])>o||(_[2*r+1]!==s&&(t.opt_len+=(s-_[2*r+1])*_[2*r],_[2*r+1]=s),n--)}}(t,e),U(s,o,t.bl_count)},j=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<_?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):h<=10?t.bl_tree[34]++:t.bl_tree[36]++,h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4))},M=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<l&&r===s)){if(h<_)do{x(t,r,t.bl_tree)}while(0!=--h);else 0!==r?(r!==i&&(x(t,r,t.bl_tree),h--),x(t,16,t.bl_tree),z(t,h-3,2)):h<=10?(x(t,17,t.bl_tree),z(t,h-3,3)):(x(t,18,t.bl_tree),z(t,h-11,7));h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4)}},L=!1,T=function(t,e,a,n){z(t,0+(n?1:0),3),function(t,e,a,n){B(t),n&&(k(t,a),k(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a,!0)},H=function(t,e,n,r){var i,s,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),D(t,t.l_desc),D(t,t.d_desc),h=function(t){var e;for(j(t,t.dyn_ltree,t.l_desc.max_code),j(t,t.dyn_dtree,t.d_desc.max_code),D(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*_[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=i&&(i=s)):i=s=n+5,n+4<=i&&-1!==e?T(t,e,n,r):4===t.strategy||s===i?(z(t,2+(r?1:0),3),C(t,o,d)):(z(t,4+(r?1:0),3),function(t,e,a,n){var r;for(z(t,e-257,5),z(t,a-1,5),z(t,n-4,4),r=0;r<n;r++)z(t,t.bl_tree[2*_[r]+1],3);M(t,t.dyn_ltree,e-1),M(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),C(t,t.dyn_ltree,t.dyn_dtree)),I(t),r&&B(t)},R={_tr_init:function(t){L||(!function(){var t,e,a,_,m,y=new Array(16);for(a=0,_=0;_<28;_++)for(c[_]=a,t=0;t<1<<s[_];t++)f[a++]=_;for(f[a-1]=_,m=0,_=0;_<16;_++)for(v[_]=m,t=0;t<1<<h[_];t++)u[m++]=_;for(m>>=7;_<r;_++)for(v[_]=m<<7,t=0;t<1<<h[_]-7;t++)u[256+m++]=_;for(e=0;e<=i;e++)y[e]=0;for(t=0;t<=143;)o[2*t+1]=8,t++,y[8]++;for(;t<=255;)o[2*t+1]=9,t++,y[9]++;for(;t<=279;)o[2*t+1]=7,t++,y[7]++;for(;t<=287;)o[2*t+1]=8,t++,y[8]++;for(U(o,287,y),t=0;t<r;t++)d[2*t+1]=5,d[2*t]=A(t,5);p=new b(o,s,257,n,i),g=new b(d,h,0,r,i),w=new b(new Array(0),l,0,19,7)}(),L=!0),t.l_desc=new m(t.dyn_ltree,p),t.d_desc=new m(t.dyn_dtree,g),t.bl_desc=new m(t.bl_tree,w),t.bi_buf=0,t.bi_valid=0,I(t)},_tr_stored_block:T,_tr_flush_block:H,_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(f[n]+a+1)]++,t.dyn_dtree[2*y(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){z(t,2,3),x(t,256,o),function(t){16===t.bi_valid?(k(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},K=function(t,e,a,n){for(var r=65535&t,i=t>>>16&65535,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16},N=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),O=function(t,e,a,n){var r=N,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return~t},q={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},F=0,G=2,J=3,P=4,Q=0,V=1,W=-1,X=0,Y=8,Z=R._tr_init,$=R._tr_stored_block,tt=R._tr_flush_block,et=R._tr_tally,at=R._tr_align,nt=F,rt=1,it=J,st=P,ht=5,lt=Q,_t=V,ot=-2,dt=-3,ut=-5,ft=W,ct=1,pt=2,gt=3,wt=4,vt=X,bt=2,mt=Y,yt=258,kt=262,zt=103,xt=113,At=666,Ut=function(t,e){return t.msg=q[e],e},It=function(t){return(t<<1)-(t>4?9:0)},Bt=function(t){for(var e=t.length;--e>=0;)t[e]=0},Et=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},St=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},Ct=function(t,e){tt(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,St(t.strm)},Dt=function(t,e){t.pending_buf[t.pending++]=e},jt=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Mt=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-kt?t.strstart-(t.w_size-kt):0,_=t.window,o=t.w_mask,d=t.prev,u=t.strstart+yt,f=_[i+s-1],c=_[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(_[(a=e)+s]===c&&_[a+s-1]===f&&_[a]===_[i]&&_[++a]===_[i+1]){i+=2,a++;do{}while(_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&i<u);if(n=yt-(u-i),i=u-yt,n>s){if(t.match_start=e,s=n,n>=h)break;f=_[i+s-1],c=_[i+s]}}}while((e=d[e&o])>l&&0!=--r);return s<=t.lookahead?s:t.lookahead},Lt=function(t){var e,a,n,r,i,s,h,l,_,o,d=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-kt)){t.window.set(t.window.subarray(d,d+d),0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=d?n-d:0}while(--a);e=a=d;do{n=t.prev[--e],t.prev[e]=n>=d?n-d:0}while(--a);r+=d}if(0===t.strm.avail_in)break;if(s=t.strm,h=t.window,l=t.strstart+t.lookahead,_=r,o=void 0,(o=s.avail_in)>_&&(o=_),a=0===o?0:(s.avail_in-=o,h.set(s.input.subarray(s.next_in,s.next_in+o),l),1===s.state.wrap?s.adler=K(s.adler,h,o,l):2===s.state.wrap&&(s.adler=O(s.adler,h,o,l)),s.next_in+=o,s.total_in+=o,o),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=Et(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=Et(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<kt&&0!==t.strm.avail_in)},Tt=function(t,e){for(var a,n;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a)),t.match_length>=3)if(n=et(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=Et(t,t.ins_h,t.window[t.strstart+1]);else n=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2},Ht=function(t,e){for(var a,n,r;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a),t.match_length<=5&&(t.strategy===ct||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=et(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(Ct(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=et(t,0,t.window[t.strstart-1]))&&Ct(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=et(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2};function Rt(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var Kt=[new Rt(0,0,0,0,(function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Lt(t),0===t.lookahead&&e===nt)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,Ct(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-kt&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(Ct(t,!1),t.strm.avail_out),1)})),new Rt(4,4,8,4,Tt),new Rt(4,5,16,8,Tt),new Rt(4,6,32,32,Tt),new Rt(4,4,16,16,Ht),new Rt(8,16,32,32,Ht),new Rt(8,16,128,128,Ht),new Rt(8,32,128,256,Ht),new Rt(32,128,258,1024,Ht),new Rt(32,258,258,4096,Ht)];function Nt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=mt,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),Bt(this.dyn_ltree),Bt(this.dyn_dtree),Bt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),Bt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),Bt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Ot=function(t){if(!t||!t.state)return Ut(t,ot);t.total_in=t.total_out=0,t.data_type=bt;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:xt,t.adler=2===e.wrap?0:1,e.last_flush=nt,Z(e),lt},qt=function(t){var e,a=Ot(t);return a===lt&&((e=t.state).window_size=2*e.w_size,Bt(e.head),e.max_lazy_match=Kt[e.level].max_lazy,e.good_match=Kt[e.level].good_length,e.nice_match=Kt[e.level].nice_length,e.max_chain_length=Kt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),a},Ft=function(t,e,a,n,r,i){if(!t)return ot;var s=1;if(e===ft&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||a!==mt||n<8||n>15||e<0||e>9||i<0||i>wt)return Ut(t,ot);8===n&&(n=9);var h=new Nt;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+3-1)/3),h.window=new Uint8Array(2*h.w_size),h.head=new Uint16Array(h.hash_size),h.prev=new Uint16Array(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new Uint8Array(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,qt(t)},Gt={deflateInit:function(t,e){return Ft(t,e,mt,15,8,vt)},deflateInit2:Ft,deflateReset:qt,deflateResetKeep:Ot,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?ot:(t.state.gzhead=e,lt):ot},deflate:function(t,e){var a,n;if(!t||!t.state||e>ht||e<0)return t?Ut(t,ot):ot;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===At&&e!==st)return Ut(t,0===t.avail_out?ut:ot);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,Dt(r,31),Dt(r,139),Dt(r,8),r.gzhead?(Dt(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Dt(r,255&r.gzhead.time),Dt(r,r.gzhead.time>>8&255),Dt(r,r.gzhead.time>>16&255),Dt(r,r.gzhead.time>>24&255),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(Dt(r,255&r.gzhead.extra.length),Dt(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=O(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,3),r.status=xt);else{var s=mt+(r.w_bits-8<<4)<<8;s|=(r.strategy>=pt||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=xt,jt(r,s),0!==r.strstart&&(jt(r,t.adler>>>16),jt(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending!==r.pending_buf_size));)Dt(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=zt)}else r.status=zt;if(r.status===zt&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&St(t),r.pending+2<=r.pending_buf_size&&(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),t.adler=0,r.status=xt)):r.status=xt),0!==r.pending){if(St(t),0===t.avail_out)return r.last_flush=-1,lt}else if(0===t.avail_in&&It(e)<=It(i)&&e!==st)return Ut(t,ut);if(r.status===At&&0!==t.avail_in)return Ut(t,ut);if(0!==t.avail_in||0!==r.lookahead||e!==nt&&r.status!==At){var h=r.strategy===pt?function(t,e){for(var a;;){if(0===t.lookahead&&(Lt(t),0===t.lookahead)){if(e===nt)return 1;break}if(t.match_length=0,a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):r.strategy===gt?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=yt){if(Lt(t),t.lookahead<=yt&&e===nt)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+yt;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=yt-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=et(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):Kt[r.level].func(r,e);if(3!==h&&4!==h||(r.status=At),1===h||3===h)return 0===t.avail_out&&(r.last_flush=-1),lt;if(2===h&&(e===rt?at(r):e!==ht&&($(r,0,0,!1),e===it&&(Bt(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),St(t),0===t.avail_out))return r.last_flush=-1,lt}return e!==st?lt:r.wrap<=0?_t:(2===r.wrap?(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),Dt(r,t.adler>>16&255),Dt(r,t.adler>>24&255),Dt(r,255&t.total_in),Dt(r,t.total_in>>8&255),Dt(r,t.total_in>>16&255),Dt(r,t.total_in>>24&255)):(jt(r,t.adler>>>16),jt(r,65535&t.adler)),St(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?lt:_t)},deflateEnd:function(t){if(!t||!t.state)return ot;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==zt&&e!==xt&&e!==At?Ut(t,ot):(t.state=null,e===xt?Ut(t,dt):lt)},deflateSetDictionary:function(t,e){var a=e.length;if(!t||!t.state)return ot;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return ot;if(1===r&&(t.adler=K(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(Bt(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,h=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Lt(n);n.lookahead>=3;){var _=n.strstart,o=n.lookahead-2;do{n.ins_h=Et(n,n.ins_h,n.window[_+3-1]),n.prev[_&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=_,_++}while(--o);n.strstart=_,n.lookahead=2,Lt(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=h,t.input=l,t.avail_in=s,n.wrap=r,lt},deflateInfo:"pako deflate (from Nodeca project)"};for(var Jt=new Uint8Array(256),Pt=0;Pt<256;Pt++)Jt[Pt]=Pt>=252?6:Pt>=248?5:Pt>=240?4:Pt>=224?3:Pt>=192?2:1;Jt[254]=Jt[254]=1;var Qt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Vt=Object.prototype.toString,Wt=F,Xt=G,Yt=J,Zt=P,$t=Q,te=V,ee=W,ae=X,ne=Y;function re(){this.options={level:ee,method:ne,chunkSize:16384,windowBits:15,memLevel:8,strategy:ae};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Qt,this.strm.avail_out=0;var e=Gt.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==$t)throw new Error(q[e]);if(t.header&&Gt.deflateSetHeader(this.strm,t.header),t.dictionary){var a;if(a="[object ArrayBuffer]"===Vt.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(e=Gt.deflateSetDictionary(this.strm,a))!==$t)throw new Error(q[e]);this._dict_set=!0}}function ie(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:String(e),streamId:a})}}function se(t){const e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}re.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?Zt:Wt,"[object ArrayBuffer]"===Vt.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(n===Xt||n===Yt)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if((a=Gt.deflate(r,n))===te)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=Gt.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===$t;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},re.prototype.onData=function(t){this.chunks.push(t)},re.prototype.onEnd=function(t){t===$t&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,h=t.length;i<h;i++){var l=t[i];r.set(l,s),s+=l.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e=self){try{const a=new Map;e.addEventListener("message",(n=>{try{const r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"6.2.0"};case"write":{let n=e.get(a.streamId);n||(n=new re,e.set(a.streamId,n));const r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)a=t.charCodeAt(r),55296==(64512&a)&&r+1<s&&(n=t.charCodeAt(r+1),56320==(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),r++)),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(h),i=0,r=0;i<h;r++)a=t.charCodeAt(r),55296==(64512&a)&&r+1<s&&(n=t.charCodeAt(r+1),56320==(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),r++)),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,G),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:se(n),additionalBytesCount:i.length}}case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){ie(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}}))}catch(t){ie(e,t)}}()})();'])));
}
let gn = {
  status: 0
  /* DeflateWorkerStatus.Nil */
};
function EO(n, a, o, u = SO) {
  switch (gn.status === 0 && Oq(n, a, u), gn.status) {
    case 1:
      return gn.initializationFailureCallbacks.push(o), gn.worker;
    case 3:
      return gn.worker;
  }
}
function vx() {
  return gn.status;
}
function Oq(n, a, o = SO) {
  try {
    const u = o(n), { stop: l } = ln(n, u, "error", (m) => {
      Xg(n, a, m);
    }), { stop: f } = ln(n, u, "message", ({ data: m }) => {
      m.type === "errored" ? Xg(n, a, m.error, m.streamId) : m.type === "initialized" && Dq(m.version);
    });
    u.postMessage({ action: "init" }), fr(() => Aq(a), wq), gn = { status: 1, worker: u, stop: () => {
      l(), f();
    }, initializationFailureCallbacks: [] };
  } catch (u) {
    Xg(n, a, u);
  }
}
function Aq(n) {
  gn.status === 1 && (kt.error(`${n} failed to start: a timeout occurred while initializing the Worker`), gn.initializationFailureCallbacks.forEach((a) => a()), gn = {
    status: 2
    /* DeflateWorkerStatus.Error */
  });
}
function Dq(n) {
  gn.status === 1 && (gn = { status: 3, worker: gn.worker, stop: gn.stop, version: n });
}
function Xg(n, a, o, u) {
  if (gn.status === 1 || gn.status === 0) {
    if (kt.error(`${a} failed to start: an error occurred while creating the Worker:`, o), o instanceof Event || o instanceof Error && kq(o.message)) {
      let l;
      n.workerUrl ? l = `Please make sure the Worker URL ${n.workerUrl} is correct and CSP is correctly configured.` : l = "Please make sure CSP is correctly configured.", kt.error(`${l} See documentation at ${Qp}/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay`);
    } else
      $p(o);
    gn.status === 1 && gn.initializationFailureCallbacks.forEach((l) => l()), gn = {
      status: 2
      /* DeflateWorkerStatus.Error */
    };
  } else
    $p(o, {
      worker_version: gn.status === 3 && gn.version,
      stream_id: u
    });
}
function kq(n) {
  return n.includes("Content Security Policy") || // Related to `require-trusted-types-for` CSP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
  n.includes("requires 'TrustedScriptURL'");
}
function _O() {
  return (
    // Array.from is a bit less supported by browsers than CSSSupportsRule, but has higher chances
    // to be polyfilled. Test for both to be more confident. We could add more things if we find out
    // this test is not sufficient.
    typeof Array.from == "function" && typeof CSSSupportsRule == "function" && typeof URL.createObjectURL == "function" && "forEach" in NodeList.prototype
  );
}
function Lq(n, a, o, u) {
  const l = a.findTrackedSession(), f = Nq(l, u), d = o.findView();
  return Eq(n, {
    viewContext: d,
    errorType: f,
    session: l
  });
}
function Nq(n, a) {
  if (!_O())
    return "browser-not-supported";
  if (!n)
    return "rum-not-tracked";
  if (n.sessionReplay === 0)
    return "incorrect-session-plan";
  if (!a)
    return "replay-not-started";
}
function Mq(n, a, o, u, l, f) {
  let d = 0, m;
  a.subscribe(9, () => {
    (d === 2 || d === 3) && (_(), d = 1);
  }), a.subscribe(11, (R) => {
    R.reason === $u.UNLOADING && _();
  }), a.subscribe(10, () => {
    d === 1 && y();
  });
  const g = async () => {
    const [R] = await Promise.all([l(), aB(n, "interactive")]);
    if (d !== 2)
      return;
    const T = f();
    if (!T || !R) {
      d = 0;
      return;
    }
    ({ stop: m } = R(a, n, o, u, T)), d = 3;
  };
  function y(R) {
    const T = o.findTrackedSession();
    if (Iq(T, R)) {
      d = 1;
      return;
    }
    Uq(d) || (d = 2, g().catch(Dw), jq(T, R) && o.setForcedReplay());
  }
  function _() {
    d === 3 && (m == null || m()), d = 0;
  }
  return {
    start: y,
    stop: _,
    getSessionReplayLink() {
      return Lq(
        n,
        o,
        u,
        d !== 0
        /* RecorderStatus.Stopped */
      );
    },
    isRecording: () => d === 3
  };
}
function Iq(n, a) {
  return !n || n.sessionReplay === 0 && (!a || !a.force);
}
function Uq(n) {
  return n === 2 || n === 3;
}
function jq(n, a) {
  return a && a.force && n.sessionReplay === 0;
}
function Fq() {
  let n = 0;
  return {
    strategy: {
      start() {
        n = 1;
      },
      stop() {
        n = 2;
      },
      isRecording: () => !1,
      getSessionReplayLink: Vt
    },
    shouldStartImmediately(a) {
      return n === 1 || n === 0 && !a.startSessionReplayRecordingManually;
    }
  };
}
function zq(n, a) {
  if (ni() && !C0(
    "records"
    /* BridgeCapability.RECORDS */
  ) || !_O())
    return {
      start: Vt,
      stop: Vt,
      getReplayStats: () => {
      },
      onRumStart: Vt,
      isRecording: () => !1,
      getSessionReplayLink: () => {
      }
    };
  let { strategy: o, shouldStartImmediately: u } = Fq();
  return {
    start: (f) => o.start(f),
    stop: () => o.stop(),
    getSessionReplayLink: () => o.getSessionReplayLink(),
    onRumStart: l,
    isRecording: () => (
      // The worker is started optimistically, meaning we could have started to record but its
      // initialization fails a bit later. This could happen when:
      // * the worker URL (blob or plain URL) is blocked by CSP in Firefox only (Chromium and Safari
      // throw an exception when instantiating the worker, and IE doesn't care about CSP)
      // * the browser fails to load the worker in case the workerUrl is used
      // * an unexpected error occurs in the Worker before initialization, ex:
      //   * a runtime exception collected by monitor()
      //   * a syntax error notified by the browser via an error event
      // * the worker is unresponsive for some reason and timeouts
      //
      // It is not expected to happen often. Nonetheless, the "replayable" status on RUM events is
      // an important part of the Datadog App:
      // * If we have a false positive (we set has_replay: true even if no replay data is present),
      // we might display broken links to the Session Replay player.
      // * If we have a false negative (we don't set has_replay: true even if replay data is
      // available), it is less noticeable because no link will be displayed.
      //
      // Thus, it is better to have false negative, so let's make sure the worker is correctly
      // initialized before advertizing that we are recording.
      //
      // In the future, when the compression worker will also be used for RUM data, this will be
      // less important since no RUM event will be sent when the worker fails to initialize.
      vx() === 3 && o.isRecording()
    ),
    getReplayStats: (f) => vx() === 3 ? Rq(f) : void 0
  };
  function l(f, d, m, g, y) {
    let _;
    function R() {
      return _ || (y ?? (y = EO(d, "Datadog Session Replay", () => {
        o.stop();
      }, a)), y && (_ = bO(
        d,
        y,
        1
        /* DeflateEncoderStreamId.REPLAY */
      ))), _;
    }
    o = Mq(d, f, m, g, n, R), u(d) && o.start();
  }
}
async function Pq() {
  try {
    return (await import(
      /* webpackChunkName: "recorder" */
      "./startRecording-eyaOsNnX.mjs"
    )).startRecording;
  } catch {
  }
}
const Bq = zq(Pq), TO = r$(gq, Bq, { startDeflateWorker: EO, createDeflateEncoder: bO });
r0(Ui(), "DD_RUM", TO);
function Vp(n, a, o) {
  const u = o.getHandler(), l = Array.isArray(u) ? u : [u];
  return mx[n] >= mx[o.getLevel()] && l.includes(a);
}
const ut = {
  ok: "ok",
  debug: "debug",
  info: "info",
  notice: "notice",
  warn: "warn",
  error: "error",
  critical: "critical",
  alert: "alert",
  emerg: "emerg"
}, mx = {
  [ut.ok]: 0,
  [ut.debug]: 1,
  [ut.info]: 2,
  [ut.notice]: 4,
  [ut.warn]: 5,
  [ut.error]: 6,
  [ut.critical]: 7,
  [ut.alert]: 8,
  [ut.emerg]: 9
};
function uh(n, {
  /**
   * Set this to `true` to include the error message in the error field. In most cases, the error
   * message is already included in the log message, so we don't need to include it again.
   */
  includeMessage: a = !1
} = {}) {
  return {
    stack: n.stack,
    kind: n.type,
    message: a ? n.message : void 0,
    causes: n.causes,
    fingerprint: n.fingerprint,
    handling: n.handling
  };
}
var $q = function(n, a, o, u) {
  var l = arguments.length, f = l < 3 ? a : u === null ? u = Object.getOwnPropertyDescriptor(a, o) : u, d;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") f = Reflect.decorate(n, a, o, u);
  else for (var m = n.length - 1; m >= 0; m--) (d = n[m]) && (f = (l < 3 ? d(f) : l > 3 ? d(a, o, f) : d(a, o)) || f);
  return l > 3 && f && Object.defineProperty(a, o, f), f;
};
const nf = {
  console: "console",
  http: "http"
}, Hq = Object.keys(ut);
class ha {
  constructor(a, o, u, l = nf.http, f = ut.debug, d = {}) {
    this.handleLogStrategy = a, this.handlerType = l, this.level = f, this.contextManager = Yu(o), this.contextManager.setContext(d), u && this.contextManager.setContextProperty("logger", { name: u });
  }
  logImplementation(a, o, u = ut.info, l, f) {
    const d = sn(o);
    let m;
    if (l != null) {
      const g = Ub({
        stackTrace: ji(l) ? ai(l) : void 0,
        originalError: l,
        nonErrorPrefix: "Provided",
        source: Ir.LOGGER,
        handling: "handled",
        startClocks: dr()
      });
      m = Wr({
        error: uh(g, { includeMessage: !0 })
      }, d);
    } else
      m = d;
    this.handleLogStrategy({
      message: sn(a),
      context: m,
      status: u
    }, this, f);
  }
  log(a, o, u = ut.info, l) {
    let f;
    Vp(u, nf.http, this) && (f = Vu()), this.logImplementation(a, o, u, l, f);
  }
  setContext(a) {
    this.contextManager.setContext(a);
  }
  getContext() {
    return this.contextManager.getContext();
  }
  setContextProperty(a, o) {
    this.contextManager.setContextProperty(a, o);
  }
  removeContextProperty(a) {
    this.contextManager.removeContextProperty(a);
  }
  clearContext() {
    this.contextManager.clearContext();
  }
  setHandler(a) {
    this.handlerType = a;
  }
  getHandler() {
    return this.handlerType;
  }
  setLevel(a) {
    this.level = a;
  }
  getLevel() {
    return this.level;
  }
}
$q([
  az
], ha.prototype, "logImplementation", null);
ha.prototype.ok = Fi(ut.ok);
ha.prototype.debug = Fi(ut.debug);
ha.prototype.info = Fi(ut.info);
ha.prototype.notice = Fi(ut.notice);
ha.prototype.warn = Fi(ut.warn);
ha.prototype.error = Fi(ut.error);
ha.prototype.critical = Fi(ut.critical);
ha.prototype.alert = Fi(ut.alert);
ha.prototype.emerg = Fi(ut.emerg);
function Fi(n) {
  return function(a, o, u) {
    let l;
    Vp(n, nf.http, this) && (l = Vu()), this.logImplementation(a, o, n, u, l);
  };
}
function Vq(n, a) {
  return {
    view: {
      referrer: document.referrer,
      url: window.location.href
    },
    context: n.getContext(),
    user: a.getContext()
  };
}
const qq = 32 * Mi;
function Yq(n) {
  n.usePciIntake === !0 && n.site && n.site !== "datadoghq.com" && kt.warn("PCI compliance for Logs is only available for Datadog organizations in the US1 site. Default intake will be used.");
  const a = Gw(n), o = yx(n.forwardConsoleLogs, Fp(yn), "Forward Console Logs"), u = yx(n.forwardReports, Fp(qu), "Forward Reports");
  if (!(!a || !o || !u))
    return n.forwardErrorsToLogs && !o.includes(yn.error) && o.push(yn.error), {
      forwardErrorsToLogs: n.forwardErrorsToLogs !== !1,
      forwardConsoleLogs: o,
      forwardReports: u,
      requestErrorResponseLengthLimit: qq,
      ...a
    };
}
function yx(n, a, o) {
  if (n === void 0)
    return [];
  if (!(n === "all" || Array.isArray(n) && n.every((u) => a.includes(u)))) {
    kt.error(`${o} should be "all" or an array with allowed values "${a.join('", "')}"`);
    return;
  }
  return n === "all" ? a : DP(n);
}
function Gq(n) {
  const a = Ww(n);
  return {
    forward_errors_to_logs: n.forwardErrorsToLogs,
    forward_console_logs: n.forwardConsoleLogs,
    forward_reports: n.forwardReports,
    use_pci_intake: n.usePciIntake,
    ...a
  };
}
function Wq(n, a, o) {
  const u = Fb();
  let l, f;
  const d = a.observable.subscribe(m);
  function m() {
    if (!f || !l || !a.isGranted())
      return;
    d.unsubscribe();
    const g = o(l, f);
    u.drain(g);
  }
  return {
    init(g) {
      if (!g) {
        kt.error("Missing configuration");
        return;
      }
      if (Kw(g.enableExperimentalFeatures), ni() && (g = Kq(g)), l = g, f) {
        nh("DD_LOGS", g);
        return;
      }
      const y = Yq(g);
      y && (f = y, ah().subscribe(Vt), a.tryToInit(y.trackingConsent), m());
    },
    get initConfiguration() {
      return l;
    },
    getInternalContext: Vt,
    handleLog(g, y, _, R = n(), T = nr()) {
      u.add((w) => w.handleLog(g, y, _, R, T));
    }
  };
}
function Kq(n) {
  return { ...n, clientToken: "empty" };
}
const gx = "logs";
function Xq(n) {
  const a = A0(), o = Yu(a.getOrCreateTracker(
    2
    /* CustomerDataType.GlobalContext */
  )), u = Yu(a.getOrCreateTracker(
    1
    /* CustomerDataType.User */
  )), l = Hw();
  function f() {
    return Vq(o, u);
  }
  let d = Wq(f, l, (y, _) => {
    y.storeContextsAcrossPages && (Hp(
      _,
      o,
      gx,
      2
      /* CustomerDataType.GlobalContext */
    ), Hp(
      _,
      u,
      gx,
      1
      /* CustomerDataType.User */
    ));
    const R = n(y, _, f, l);
    return d = Qq(y, R), R;
  });
  const m = {}, g = new ha((...y) => d.handleLog(...y), a.createDetachedTracker());
  return n0({
    logger: g,
    init: Re((y) => d.init(y)),
    setTrackingConsent: Re((y) => {
      l.update(y), Ln({ feature: "set-tracking-consent", tracking_consent: y });
    }),
    getGlobalContext: Re(() => o.getContext()),
    setGlobalContext: Re((y) => o.setContext(y)),
    setGlobalContextProperty: Re((y, _) => o.setContextProperty(y, _)),
    removeGlobalContextProperty: Re((y) => o.removeContextProperty(y)),
    clearGlobalContext: Re(() => o.clearContext()),
    createLogger: Re((y, _ = {}) => (m[y] = new ha((...R) => d.handleLog(...R), a.createDetachedTracker(), sn(y), _.handler, _.level, sn(_.context)), m[y])),
    getLogger: Re((y) => m[y]),
    getInitConfiguration: Re(() => rh(d.initConfiguration)),
    getInternalContext: Re((y) => d.getInternalContext(y)),
    setUser: Re((y) => {
      Iw(y) && u.setContext(zp(y));
    }),
    getUser: Re(() => u.getContext()),
    setUserProperty: Re((y, _) => {
      const R = zp({ [y]: _ })[y];
      u.setContextProperty(y, R);
    }),
    removeUserProperty: Re((y) => u.removeContextProperty(y)),
    clearUser: Re(() => u.clearContext())
  });
}
function Qq(n, a) {
  return {
    init: (o) => {
      nh("DD_LOGS", o);
    },
    initConfiguration: n,
    ...a
  };
}
const Jq = "logs";
function Zq(n, a) {
  const o = h0(n, Jq, (u) => t3(n, u), a);
  return {
    findTrackedSession: (u, l = { returnInactive: !1 }) => {
      const f = o.findSession(u, l);
      return f && f.trackingType === "1" ? {
        id: f.id,
        anonymousId: f.anonymousId
      } : void 0;
    },
    expireObservable: o.expireObservable
  };
}
function e3(n) {
  const o = CO(n) === "1" ? {} : void 0;
  return {
    findTrackedSession: () => o,
    expireObservable: new jt()
  };
}
function CO(n) {
  return Co(n.sessionSampleRate) ? "1" : "0";
}
function t3(n, a) {
  const o = n3(a) ? a : CO(n);
  return {
    trackingType: o,
    isTracked: o === "1"
  };
}
function n3(n) {
  return n === "0" || n === "1";
}
let bx = !1;
function Op(n) {
  const a = window;
  if (ih()) {
    const u = o(a.DD_RUM_SYNTHETICS);
    return !u && !bx && (bx = !0, As("Logs sent before RUM is injected by the synthetics worker", {
      testId: k0(),
      resultId: L0()
    })), u;
  }
  return o(a.DD_RUM);
  function o(u) {
    if (u && u.getInternalContext)
      return u.getInternalContext(n);
  }
}
function r3(n, a, o, u, l) {
  const f = Hq.concat(["custom"]), d = {};
  f.forEach((m) => {
    d[m] = Rp(m, a.eventRateLimiterThreshold, l);
  }), o.subscribe(0, ({ rawLogsEvent: m, messageContext: g = void 0, savedCommonContext: y = void 0, domainContext: _ }) => {
    var R, T;
    const w = eh(m.date), D = n.findTrackedSession(w);
    if (!n.findTrackedSession(w, { returnInactive: !0 }))
      return;
    const Y = y || u();
    D && D.anonymousId && !Y.user.anonymous_id && (Y.user.anonymous_id = D.anonymousId);
    const H = Wr({
      service: a.service,
      session_id: D ? D.id : void 0,
      session: D ? { id: D.id } : void 0,
      // Insert user first to allow overrides from global context
      usr: Ts(Y.user) ? void 0 : Y.user,
      view: Y.view
    }, Y.context, Op(w), m, g);
    ((R = a.beforeSend) === null || R === void 0 ? void 0 : R.call(a, H, _)) === !1 || H.origin !== Ir.AGENT && ((T = d[H.status]) !== null && T !== void 0 ? T : d.custom).isLimitReached() || o.notify(1, H);
  });
}
const a3 = {
  [yn.log]: ut.info,
  [yn.debug]: ut.debug,
  [yn.info]: ut.info,
  [yn.warn]: ut.warn,
  [yn.error]: ut.error
};
function i3(n, a) {
  const o = O0(n.forwardConsoleLogs).subscribe((u) => {
    const l = {
      rawLogsEvent: {
        date: nr(),
        message: u.message,
        origin: Ir.CONSOLE,
        error: u.error && uh(u.error),
        status: a3[u.api]
      },
      domainContext: {
        handlingStack: u.handlingStack
      }
    };
    a.notify(0, l);
  });
  return {
    stop: () => {
      o.unsubscribe();
    }
  };
}
function o3(n, a) {
  const o = a0(n, n.forwardReports).subscribe((u) => {
    let l = u.message, f;
    const d = u.originalError.type === "deprecation" ? ut.warn : ut.error;
    d === ut.error ? f = uh(u) : u.stack && (l += ` Found in ${_P(u.stack)}`), a.notify(0, {
      rawLogsEvent: {
        date: nr(),
        message: l,
        origin: Ir.REPORT,
        error: f,
        status: d
      }
    });
  });
  return {
    stop: () => {
      o.unsubscribe();
    }
  };
}
function s3(n, a) {
  if (!n.forwardErrorsToLogs)
    return { stop: Vt };
  const o = w0(n).subscribe((f) => {
    f.state === "complete" && l("xhr", f);
  }), u = ah().subscribe((f) => {
    f.state === "resolve" && l("fetch", f);
  });
  function l(f, d) {
    !Yw(d.url) && (f3(d) || v0(d.status)) && ("xhr" in d ? u3(d.xhr, n, m) : d.response ? c3(d.response, n, m) : d.error && l3(d.error, n, m));
    function m(g) {
      const y = {
        isAborted: d.isAborted,
        handlingStack: d.handlingStack
      };
      a.notify(0, {
        rawLogsEvent: {
          message: `${d3(f)} error ${d.method} ${d.url}`,
          date: d.startClocks.timeStamp,
          error: {
            stack: g || "Failed to load",
            // We don't know if the error was handled or not, so we set it to undefined
            handling: void 0
          },
          http: {
            method: d.method,
            // Cast resource method because of case mismatch cf issue RUMF-1152
            status_code: d.status,
            url: d.url
          },
          status: ut.error,
          origin: Ir.NETWORK
        },
        domainContext: y
      });
    }
  }
  return {
    stop: () => {
      o.unsubscribe(), u.unsubscribe();
    }
  };
}
function u3(n, a, o) {
  typeof n.response == "string" ? o(Gb(n.response, a)) : o(n.response);
}
function l3(n, a, o) {
  o(Gb(Os(ai(n)), a));
}
function c3(n, a, o) {
  const u = m0(n);
  !u || !u.body ? o() : window.TextDecoder ? p3(u.body, a.requestErrorResponseLengthLimit, (l, f) => {
    o(l ? `Unable to retrieve response: ${l}` : f);
  }) : u.text().then(Re((l) => o(Gb(l, a))), Re((l) => o(`Unable to retrieve response: ${l}`)));
}
function f3(n) {
  return n.status === 0 && n.responseType !== "opaque";
}
function Gb(n, a) {
  return n.length > a.requestErrorResponseLengthLimit ? `${n.substring(0, a.requestErrorResponseLengthLimit)}...` : n;
}
function d3(n) {
  return n === "xhr" ? "XHR" : "Fetch";
}
function p3(n, a, o) {
  D0(n, (u, l, f) => {
    if (u)
      o(u);
    else {
      let d = new TextDecoder().decode(l);
      f && (d += "..."), o(void 0, d);
    }
  }, {
    bytesLimit: a,
    collectStreamBody: !0
  });
}
function h3(n, a) {
  if (!n.forwardErrorsToLogs)
    return { stop: Vt };
  const o = new jt(), { stop: u } = t0(o), l = o.subscribe((f) => {
    a.notify(0, {
      rawLogsEvent: {
        message: f.message,
        date: f.startClocks.timeStamp,
        error: uh(f),
        origin: Ir.SOURCE,
        status: ut.error
      }
    });
  });
  return {
    stop: () => {
      u(), l.unsubscribe();
    }
  };
}
const v3 = x0;
function m3(n) {
  function a(o, u, l, f, d) {
    const m = Wr(u.getContext(), o.context);
    if (Vp(o.status, nf.console, u) && g3(o, m), Vp(o.status, nf.http, u)) {
      const g = {
        rawLogsEvent: {
          date: d || nr(),
          message: o.message,
          status: o.status,
          origin: Ir.LOGGER
        },
        messageContext: m,
        savedCommonContext: f
      };
      l && (g.domainContext = { handlingStack: l }), n.notify(0, g);
    }
  }
  return {
    handleLog: a
  };
}
const y3 = {
  [ut.ok]: yn.debug,
  [ut.debug]: yn.debug,
  [ut.info]: yn.info,
  [ut.notice]: yn.info,
  [ut.warn]: yn.warn,
  [ut.error]: yn.error,
  [ut.critical]: yn.error,
  [ut.alert]: yn.error,
  [ut.emerg]: yn.error
};
function g3({ status: n, message: a }, o) {
  gs[y3[n]].call(Za, a, o);
}
function b3(n, a, o, u, l) {
  const f = zb(n, {
    endpoint: n.logsEndpointBuilder,
    encoder: ef()
  }, n.replica && {
    endpoint: n.replica.logsEndpointBuilder,
    encoder: ef()
  }, o, u, l.expireObservable);
  return a.subscribe(1, (d) => {
    f.add(d);
  }), f;
}
function S3(n) {
  const a = Ds();
  n.subscribe(1, (o) => {
    a.send("log", o);
  });
}
function E3(n) {
  return {
    get: (a) => {
      const o = n.findTrackedSession(a);
      if (o)
        return {
          session_id: o.id
        };
    }
  };
}
function _3(n) {
  return (a) => {
    n.notify(0, {
      rawLogsEvent: {
        message: a.message,
        date: a.startClocks.timeStamp,
        origin: Ir.AGENT,
        status: ut.error
      }
    }), As("Error reported to customer", { "error.message": a.message });
  };
}
function T3(n, a, o, u, l) {
  const f = c0("browser-logs-sdk", a);
  f.setContextProvider(() => {
    var m, g, y, _, R, T;
    return {
      application: {
        id: (m = Op()) === null || m === void 0 ? void 0 : m.application_id
      },
      session: {
        id: (g = l.findTrackedSession()) === null || g === void 0 ? void 0 : g.id
      },
      view: {
        id: (_ = (y = Op()) === null || y === void 0 ? void 0 : y.view) === null || _ === void 0 ? void 0 : _.id
      },
      action: {
        id: (T = (R = Op()) === null || R === void 0 ? void 0 : R.user_action) === null || T === void 0 ? void 0 : T.id
      }
    };
  });
  const d = [];
  if (ni()) {
    const m = Ds(), g = f.observable.subscribe((y) => m.send("internal_telemetry", y));
    d.push(() => g.unsubscribe());
  } else {
    const m = zb(a, {
      endpoint: a.rumEndpointBuilder,
      encoder: ef()
    }, a.replica && {
      endpoint: a.replica.rumEndpointBuilder,
      encoder: ef()
    }, o, u, l.expireObservable);
    d.push(() => m.stop());
    const g = f.observable.subscribe((y) => m.add(y, d0(a)));
    d.push(() => g.unsubscribe());
  }
  return f0(), p0(Gq(n)), {
    telemetry: f,
    stop: () => {
      d.forEach((m) => m());
    }
  };
}
function C3(n, a, o, u) {
  const l = new v3(), f = [];
  l.subscribe(1, (T) => jb("logs", T));
  const d = _3(l), m = R0(a), g = a.sessionStoreStrategyType && !ni() && !ih() ? Zq(a, u) : e3(a), { stop: y } = T3(n, a, d, m, g);
  f.push(() => y()), s3(a, l), h3(a, l), i3(a, l), o3(a, l);
  const { handleLog: _ } = m3(l);
  if (r3(g, a, l, o, d), ni())
    S3(l);
  else {
    const { stop: T } = b3(a, l, d, m, g);
    f.push(() => T());
  }
  const R = E3(g);
  return {
    handleLog: _,
    getInternalContext: R.get,
    stop: () => {
      f.forEach((T) => T());
    }
  };
}
const Wb = Xq(C3);
r0(Ui(), "DD_LOGS", Wb);
var Ap = { exports: {} }, R3 = Ap.exports, Sx;
function x3() {
  return Sx || (Sx = 1, function(n, a) {
    var o = { NODE_ENV: '"production"' };
    (function(u, l) {
      n.exports = l();
    })(R3, function() {
      var u = Object.defineProperty, l = Object.defineProperties, f = Object.getOwnPropertyDescriptors, d = Object.getOwnPropertySymbols, m = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable, y = (h) => {
        throw TypeError(h);
      }, _ = (h, E, k) => E in h ? u(h, E, { enumerable: !0, configurable: !0, writable: !0, value: k }) : h[E] = k, R = (h, E) => {
        for (var k in E || (E = {})) m.call(E, k) && _(h, k, E[k]);
        if (d) for (var k of d(E)) g.call(E, k) && _(h, k, E[k]);
        return h;
      }, T = (h, E) => l(h, f(E)), w = (h, E, k) => _(h, typeof E != "symbol" ? E + "" : E, k), D = (h, E, k) => E.has(h) || y("Cannot " + k), P = (h, E, k) => (D(h, E, "read from private field"), k ? k.call(h) : E.get(h)), Y = (h, E, k) => E.has(h) ? y("Cannot add the same private member more than once") : E instanceof WeakSet ? E.add(h) : E.set(h, k), H = (h, E, k, I) => (D(h, E, "write to private field"), E.set(h, k), k), Q = (h, E, k) => (D(h, E, "access private method"), k), V = (h, E, k) => new Promise((I, ne) => {
        var ee = (ce) => {
          try {
            fe(k.next(ce));
          } catch (ct) {
            ne(ct);
          }
        }, he = (ce) => {
          try {
            fe(k.throw(ce));
          } catch (ct) {
            ne(ct);
          }
        }, fe = (ce) => ce.done ? I(ce.value) : Promise.resolve(ce.value).then(ee, he);
        fe((k = k.apply(h, E)).next());
      }), ae, oe, de, Z, Ie = new TextEncoder();
      function ft(h) {
        return Ie.encode(h);
      }
      function Lt(h, E) {
        return new TextDecoder(E).decode(h);
      }
      function Ot(h) {
        return h.buffer.slice(h.byteOffset, h.byteOffset + h.byteLength);
      }
      var rt = Symbol("isPatchedModule"), we = class extends Response {
        static isConfigurableStatusCode(h) {
          return h >= 200 && h <= 599;
        }
        static isRedirectResponse(h) {
          return we.STATUS_CODES_WITH_REDIRECT.includes(h);
        }
        static isResponseWithBody(h) {
          return !we.STATUS_CODES_WITHOUT_BODY.includes(h);
        }
        static setUrl(h, E) {
          h && E.url == "" && Object.defineProperty(E, "url", { value: h, enumerable: !0, configurable: !0, writable: !1 });
        }
        static parseRawHeaders(h) {
          const E = new Headers();
          for (let k = 0; k < h.length; k += 2) E.append(h[k], h[k + 1]);
          return E;
        }
        constructor(h, E = {}) {
          var k;
          const I = (k = E.status) != null ? k : 200, ne = we.isConfigurableStatusCode(I) ? I : 200, ee = we.isResponseWithBody(I) ? h : null;
          if (super(ee, T(R({}, E), { status: ne })), I !== ne) {
            const he = Object.getOwnPropertySymbols(this).find((fe) => fe.description === "state");
            if (he) {
              const fe = Reflect.get(this, he);
              Reflect.set(fe, "status", I);
            } else Object.defineProperty(this, "status", { value: I, enumerable: !0, configurable: !0, writable: !1 });
          }
          we.setUrl(E.url, this);
        }
      }, Ze = we;
      Ze.STATUS_CODES_WITHOUT_BODY = [101, 103, 204, 205, 304], Ze.STATUS_CODES_WITH_REDIRECT = [301, 302, 303, 307, 308];
      function ht() {
        if (typeof navigator < "u" && navigator.product === "ReactNative") return !0;
        if (typeof Ja < "u") {
          const h = Ja.type;
          return h === "renderer" || h === "worker" ? !1 : !!(Ja.versions && Ja.versions.node);
        }
        return !1;
      }
      var Ge = /(%?)(%([sdijo]))/g;
      function Oe(h, E) {
        switch (E) {
          case "s":
            return h;
          case "d":
          case "i":
            return Number(h);
          case "j":
            return JSON.stringify(h);
          case "o": {
            if (typeof h == "string") return h;
            const k = JSON.stringify(h);
            return k === "{}" || k === "[]" || /^\[object .+?\]$/.test(k) ? h : k;
          }
        }
      }
      function Fe(h, ...E) {
        if (E.length === 0) return h;
        let k = 0, I = h.replace(Ge, (ne, ee, he, fe) => {
          const ce = E[k], ct = Oe(ce, fe);
          return ee ? ne : (k++, ct);
        });
        return k < E.length && (I += ` ${E.slice(k).join(" ")}`), I = I.replace(/%{2,2}/g, "%"), I;
      }
      var qt = 2;
      function X(h) {
        if (!h.stack) return;
        const E = h.stack.split(`
`);
        E.splice(1, qt), h.stack = E.join(`
`);
      }
      var ie = class extends Error {
        constructor(h, ...E) {
          super(h), this.message = h, this.name = "Invariant Violation", this.message = Fe(h, ...E), X(this);
        }
      }, se = (h, E, ...k) => {
        if (!h) throw new ie(E, ...k);
      };
      se.as = (h, E, k, ...I) => {
        if (!E) {
          const ne = I.length === 0 ? k : Fe(k, ...I);
          let ee;
          try {
            ee = Reflect.construct(h, [ne]);
          } catch {
            ee = h(ne);
          }
          throw ee;
        }
      };
      var Ae = Object.defineProperty, Se = (h, E) => {
        for (var k in E) Ae(h, k, { get: E[k], enumerable: !0 });
      }, Ue = {};
      Se(Ue, { blue: () => ke, gray: () => $e, green: () => Ne, red: () => ze, yellow: () => Be });
      function Be(h) {
        return `\x1B[33m${h}\x1B[0m`;
      }
      function ke(h) {
        return `\x1B[34m${h}\x1B[0m`;
      }
      function $e(h) {
        return `\x1B[90m${h}\x1B[0m`;
      }
      function ze(h) {
        return `\x1B[31m${h}\x1B[0m`;
      }
      function Ne(h) {
        return `\x1B[32m${h}\x1B[0m`;
      }
      var vt = ht(), ue = class {
        constructor(h) {
          w(this, "prefix"), this.name = h, this.prefix = `[${this.name}]`;
          const E = Kr("DEBUG"), k = Kr("LOG_LEVEL");
          E === "1" || E === "true" || typeof E < "u" && this.name.startsWith(E) ? (this.debug = Hn(k, "debug") ? Tt : this.debug, this.info = Hn(k, "info") ? Tt : this.info, this.success = Hn(k, "success") ? Tt : this.success, this.warning = Hn(k, "warning") ? Tt : this.warning, this.error = Hn(k, "error") ? Tt : this.error) : (this.info = Tt, this.success = Tt, this.warning = Tt, this.error = Tt, this.only = Tt);
        }
        extend(h) {
          return new ue(`${this.name}:${h}`);
        }
        debug(h, ...E) {
          this.logEntry({ level: "debug", message: $e(h), positionals: E, prefix: this.prefix, colors: { prefix: "gray" } });
        }
        info(h, ...E) {
          this.logEntry({ level: "info", message: h, positionals: E, prefix: this.prefix, colors: { prefix: "blue" } });
          const k = new xt();
          return (I, ...ne) => {
            k.measure(), this.logEntry({ level: "info", message: `${I} ${$e(`${k.deltaTime}ms`)}`, positionals: ne, prefix: this.prefix, colors: { prefix: "blue" } });
          };
        }
        success(h, ...E) {
          this.logEntry({ level: "info", message: h, positionals: E, prefix: `✔ ${this.prefix}`, colors: { timestamp: "green", prefix: "green" } });
        }
        warning(h, ...E) {
          this.logEntry({ level: "warning", message: h, positionals: E, prefix: `⚠ ${this.prefix}`, colors: { timestamp: "yellow", prefix: "yellow" } });
        }
        error(h, ...E) {
          this.logEntry({ level: "error", message: h, positionals: E, prefix: `✖ ${this.prefix}`, colors: { timestamp: "red", prefix: "red" } });
        }
        only(h) {
          h();
        }
        createEntry(h, E) {
          return { timestamp: /* @__PURE__ */ new Date(), level: h, message: E };
        }
        logEntry(h) {
          const { level: E, message: k, prefix: I, colors: ne, positionals: ee = [] } = h, he = this.createEntry(E, k), fe = (ne == null ? void 0 : ne.timestamp) || "gray", ce = (ne == null ? void 0 : ne.prefix) || "gray", ct = { timestamp: Ue[fe], prefix: Ue[ce] };
          this.getWriter(E)([ct.timestamp(this.formatTimestamp(he.timestamp))].concat(I != null ? ct.prefix(I) : []).concat(Vn(k)).join(" "), ...ee.map(Vn));
        }
        formatTimestamp(h) {
          return `${h.toLocaleTimeString("en-GB")}:${h.getMilliseconds()}`;
        }
        getWriter(h) {
          switch (h) {
            case "debug":
            case "success":
            case "info":
              return et;
            case "warning":
              return cn;
            case "error":
              return Nn;
          }
        }
      }, xt = class {
        constructor() {
          w(this, "startTime"), w(this, "endTime"), w(this, "deltaTime"), this.startTime = performance.now();
        }
        measure() {
          this.endTime = performance.now();
          const h = this.endTime - this.startTime;
          this.deltaTime = h.toFixed(2);
        }
      }, Tt = () => {
      };
      function et(h, ...E) {
        if (vt) {
          Ja.stdout.write(Fe(h, ...E) + `
`);
          return;
        }
        console.log(h, ...E);
      }
      function cn(h, ...E) {
        if (vt) {
          Ja.stderr.write(Fe(h, ...E) + `
`);
          return;
        }
        console.warn(h, ...E);
      }
      function Nn(h, ...E) {
        if (vt) {
          Ja.stderr.write(Fe(h, ...E) + `
`);
          return;
        }
        console.error(h, ...E);
      }
      function Kr(h) {
        var E;
        return vt ? o[h] : (E = globalThis[h]) == null ? void 0 : E.toString();
      }
      function Hn(h, E) {
        return h !== void 0 && h !== E;
      }
      function Vn(h) {
        return typeof h > "u" ? "undefined" : h === null ? "null" : typeof h == "string" ? h : typeof h == "object" ? JSON.stringify(h) : h.toString();
      }
      var Mn = class extends Error {
        constructor(h, E, k) {
          super(`Possible EventEmitter memory leak detected. ${k} ${E.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`), this.emitter = h, this.type = E, this.count = k, this.name = "MaxListenersExceededWarning";
        }
      }, bn = class {
        static listenerCount(h, E) {
          return h.listenerCount(E);
        }
        constructor() {
          this.events = /* @__PURE__ */ new Map(), this.maxListeners = bn.defaultMaxListeners, this.hasWarnedAboutPotentialMemoryLeak = !1;
        }
        _emitInternalEvent(h, E, k) {
          this.emit(h, E, k);
        }
        _getListeners(h) {
          return Array.prototype.concat.apply([], this.events.get(h)) || [];
        }
        _removeListener(h, E) {
          const k = h.indexOf(E);
          return k > -1 && h.splice(k, 1), [];
        }
        _wrapOnceListener(h, E) {
          const k = (...I) => (this.removeListener(h, k), E.apply(this, I));
          return Object.defineProperty(k, "name", { value: E.name }), k;
        }
        setMaxListeners(h) {
          return this.maxListeners = h, this;
        }
        getMaxListeners() {
          return this.maxListeners;
        }
        eventNames() {
          return Array.from(this.events.keys());
        }
        emit(h, ...E) {
          const k = this._getListeners(h);
          return k.forEach((I) => {
            I.apply(this, E);
          }), k.length > 0;
        }
        addListener(h, E) {
          this._emitInternalEvent("newListener", h, E);
          const k = this._getListeners(h).concat(E);
          if (this.events.set(h, k), this.maxListeners > 0 && this.listenerCount(h) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
            this.hasWarnedAboutPotentialMemoryLeak = !0;
            const I = new Mn(this, h, this.listenerCount(h));
            console.warn(I);
          }
          return this;
        }
        on(h, E) {
          return this.addListener(h, E);
        }
        once(h, E) {
          return this.addListener(h, this._wrapOnceListener(h, E));
        }
        prependListener(h, E) {
          const k = this._getListeners(h);
          if (k.length > 0) {
            const I = [E].concat(k);
            this.events.set(h, I);
          } else this.events.set(h, k.concat(E));
          return this;
        }
        prependOnceListener(h, E) {
          return this.prependListener(h, this._wrapOnceListener(h, E));
        }
        removeListener(h, E) {
          const k = this._getListeners(h);
          return k.length > 0 && (this._removeListener(k, E), this.events.set(h, k), this._emitInternalEvent("removeListener", h, E)), this;
        }
        off(h, E) {
          return this.removeListener(h, E);
        }
        removeAllListeners(h) {
          return h ? this.events.delete(h) : this.events.clear(), this;
        }
        listeners(h) {
          return Array.from(this._getListeners(h));
        }
        listenerCount(h) {
          return this._getListeners(h).length;
        }
        rawListeners(h) {
          return this.listeners(h);
        }
      }, In = bn;
      In.defaultMaxListeners = 10;
      var Xr = "x-interceptors-internal-request-id";
      function dn(h) {
        return globalThis[h] || void 0;
      }
      function qn(h, E) {
        globalThis[h] = E;
      }
      function Ur(h) {
        delete globalThis[h];
      }
      var Qr = class {
        constructor(h) {
          this.symbol = h, this.readyState = "INACTIVE", this.emitter = new In(), this.subscriptions = [], this.logger = new ue(h.description), this.emitter.setMaxListeners(0), this.logger.info("constructing the interceptor...");
        }
        checkEnvironment() {
          return !0;
        }
        apply() {
          const h = this.logger.extend("apply");
          if (h.info("applying the interceptor..."), this.readyState === "APPLIED") {
            h.info("intercepted already applied!");
            return;
          }
          if (!this.checkEnvironment()) {
            h.info("the interceptor cannot be applied in this environment!");
            return;
          }
          this.readyState = "APPLYING";
          const E = this.getInstance();
          if (E) {
            h.info("found a running instance, reusing..."), this.on = (k, I) => (h.info('proxying the "%s" listener', k), E.emitter.addListener(k, I), this.subscriptions.push(() => {
              E.emitter.removeListener(k, I), h.info('removed proxied "%s" listener!', k);
            }), this), this.readyState = "APPLIED";
            return;
          }
          h.info("no running instance found, setting up a new instance..."), this.setup(), this.setInstance(), this.readyState = "APPLIED";
        }
        setup() {
        }
        on(h, E) {
          const k = this.logger.extend("on");
          return this.readyState === "DISPOSING" || this.readyState === "DISPOSED" ? (k.info("cannot listen to events, already disposed!"), this) : (k.info('adding "%s" event listener:', h, E), this.emitter.on(h, E), this);
        }
        once(h, E) {
          return this.emitter.once(h, E), this;
        }
        off(h, E) {
          return this.emitter.off(h, E), this;
        }
        removeAllListeners(h) {
          return this.emitter.removeAllListeners(h), this;
        }
        dispose() {
          const h = this.logger.extend("dispose");
          if (this.readyState === "DISPOSED") {
            h.info("cannot dispose, already disposed!");
            return;
          }
          if (h.info("disposing the interceptor..."), this.readyState = "DISPOSING", !this.getInstance()) {
            h.info("no interceptors running, skipping dispose...");
            return;
          }
          if (this.clearInstance(), h.info("global symbol deleted:", dn(this.symbol)), this.subscriptions.length > 0) {
            h.info("disposing of %d subscriptions...", this.subscriptions.length);
            for (const E of this.subscriptions) E();
            this.subscriptions = [], h.info("disposed of all subscriptions!", this.subscriptions.length);
          }
          this.emitter.removeAllListeners(), h.info("destroyed the listener!"), this.readyState = "DISPOSED";
        }
        getInstance() {
          var h;
          const E = dn(this.symbol);
          return this.logger.info("retrieved global instance:", (h = E == null ? void 0 : E.constructor) == null ? void 0 : h.name), E;
        }
        setInstance() {
          qn(this.symbol, this), this.logger.info("set global instance!", this.symbol.description);
        }
        clearInstance() {
          Ur(this.symbol), this.logger.info("cleared global instance!", this.symbol.description);
        }
      };
      function Jr() {
        return Math.random().toString(16).slice(2);
      }
      var pe = class extends Qr {
        constructor(h) {
          pe.symbol = Symbol(h.name), super(pe.symbol), this.interceptors = h.interceptors;
        }
        setup() {
          const h = this.logger.extend("setup");
          h.info("applying all %d interceptors...", this.interceptors.length);
          for (const E of this.interceptors) h.info('applying "%s" interceptor...', E.constructor.name), E.apply(), h.info("adding interceptor dispose subscription"), this.subscriptions.push(() => E.dispose());
        }
        on(h, E) {
          for (const k of this.interceptors) k.on(h, E);
          return this;
        }
        once(h, E) {
          for (const k of this.interceptors) k.once(h, E);
          return this;
        }
        off(h, E) {
          for (const k of this.interceptors) k.off(h, E);
          return this;
        }
        removeAllListeners(h) {
          for (const E of this.interceptors) E.removeAllListeners(h);
          return this;
        }
      };
      let Le = !1;
      function at(h) {
        Le = h;
      }
      const tt = new Proxy(console, { get: (h, E) => (...k) => {
        var I;
        return Le && ((I = h[E]) == null ? void 0 : I.call(h, "[Datadog Interceptor]:", ...k));
      } });
      function Yt(h) {
        if (!(h instanceof Headers)) throw new Error("The object provided must be an instance of Headers.");
        const E = {};
        for (const [k, I] of h.entries()) E[k] = I;
        return E;
      }
      function Qt(h) {
        if (h.url.includes("datadoghq.com")) return !0;
      }
      function Jt(h) {
        let E = 0;
        for (let k = 0; k < h.length; k++) {
          const I = h.charCodeAt(k);
          E = (E << 5) - E + I, E = E & E;
        }
        return Math.abs(E).toString(16).padStart(32, "0");
      }
      function Un(h) {
        var E;
        try {
          if (!((E = h == null ? void 0 : h.requestInit) != null && E.headers) || !Array.isArray(h.requestInit.headers)) return null;
          const k = h.requestInit.headers.find((I) => Array.isArray(I) && I[0] === "x-datadog-trace-id");
          return k ? k[1] : null;
        } catch (k) {
          return tt.error("Error getting trace ID:", k), null;
        }
      }
      function Zt(h) {
        return V(this, null, function* () {
          const E = yield h.clone();
          return { method: "method" in E ? E.method : null, headers: Yt(E.headers), body: yield Gt(E.body), url: E.url, status: "status" in E ? E.status : null, timestamp: Date.now() };
        });
      }
      function Gt(h) {
        return V(this, null, function* () {
          if (!h) return null;
          const E = typeof Ja < "u" && Ja.versions != null && Ja.versions.node != null;
          let k;
          try {
            if (typeof h == "string") k = h;
            else if (typeof ReadableStream < "u" && h instanceof ReadableStream) k = yield new Response(h).text();
            else if (E && typeof Buffer < "u" && Buffer.isBuffer(h)) k = h.toString("utf-8");
            else return tt.warn("Unsupported body type:", typeof h), null;
            const I = k.trim();
            if (I.startsWith("{") || I.startsWith("[")) try {
              return JSON.parse(I);
            } catch (ne) {
              return tt.warn("Failed to parse JSON body:", ne), k;
            }
            return I;
            if (I.startsWith("<") && !I.toLowerCase().startsWith("<html") && !I.toLowerCase().startsWith("<!doctype html")) try {
              if (typeof DOMParser > "u") {
                const { JSDOM: ne } = require("jsdom"), ee = new ne(), he = new ee.window.DOMParser().parseFromString(I, "text/xml"), fe = he.querySelector("parsererror");
                if (fe) throw new Error(fe.textContent);
                return he;
              } else {
                const ne = new DOMParser().parseFromString(I, "text/xml"), ee = ne.querySelector("parsererror");
                if (ee) throw new Error(ee.textContent);
                return ne;
              }
            } catch (ne) {
              return tt.warn("Failed to parse XML body:", ne), k;
            }
          } catch (I) {
            return tt.error("Error parsing body:", I), null;
          }
        });
      }
      function Wt(h) {
        const E = new Headers();
        return h && h.trim().split(/[\r\n]+/).forEach((k) => {
          const I = k.split(": "), ne = I.shift().trim(), ee = I.join(": ").trim();
          ne && E.append(ne, ee);
        }), E;
      }
      function Na(h) {
        if (!h || typeof h != "object") return "";
        function E(I) {
          return Array.isArray(I) ? I.map(E) : I !== null && typeof I == "object" ? Object.keys(I).sort().reduce((ne, ee) => (ne[ee] = E(I[ee]), ne), {}) : I;
        }
        const k = JSON.stringify(E(h));
        return Jt(k);
      }
      const ar = /* @__PURE__ */ new Map(), hr = /* @__PURE__ */ new Map(), Ma = 5e3;
      function zi(h, E) {
        ar.set(h, E), setTimeout(() => {
          ar.delete(h);
        }, Ma);
      }
      function Pi(h) {
        const E = ar.get(h);
        return ar.delete(h), E || null;
      }
      function ii(h, E) {
        hr.set(h, E);
      }
      function Bi(h) {
        const E = hr.get(h);
        return hr.delete(h), E || null;
      }
      function oi(h, E = "default") {
        if (!h) return null;
        try {
          const k = h.method || "GET", I = h.url || "", ne = h.status || 200, ee = Math.floor(h.timestamp / 1e4), he = Na(h.headers) || "", fe = `${k}:${I}:${ne}:${he}:${ee}`, ce = Jt(fe);
          return tt.log(`Debug fingerprint (${E}):`, { data: h, fingerprintString: fe, fingerprint: ce }), ce;
        } catch (k) {
          return tt.error("Error generating fingerprint:", k), null;
        }
      }
      function jr(h, E) {
        const { debug: k = !1 } = h || {};
        at(k);
        const I = new pe({ name: "datadog-rum-interceptor", interceptors: E });
        I.apply(), I.on("request", (he) => V(this, [he], function* ({ request: fe, requestId: ce }) {
          if (Qt(fe)) return;
          const ct = { method: fe.method, url: fe.url, headers: Object.fromEntries(fe.headers.entries()), timestamp: Date.now() };
          zi(ce, ct), tt.log(`Intercepted Request: ${fe.url}`, ct);
        })), I.on("response", (he) => V(this, [he], function* ({ request: fe, response: ce, requestId: ct }) {
          var wt;
          if (Qt(fe)) return;
          const gt = Pi(ct);
          if (!gt) {
            tt.warn(`No matching request found for response: ${ce.url}`);
            return;
          }
          const Rt = yield Zt(ce);
          Object.keys(Rt).forEach((Rr) => {
            (Rt[Rr] === null || Rt[Rr] === "") && gt[Rr] !== void 0 && (Rt[Rr] = gt[Rr]);
          });
          const ya = (wt = fe.headers.get("x-datadog-trace-id")) != null ? wt : oi(Rt, "interceptor "), Fa = { request: gt, response: Rt };
          ii(ya, Fa), tt.log(`Intercepted Response: ${ce.url}`, Fa);
        }));
        function ne(he) {
          var fe, ce, ct, wt, gt;
          if (!he || typeof he != "object") return console.warn("Invalid beforeSend object provided."), null;
          const { event: Rt, context: ya } = he;
          if (!Rt || !ya) return console.warn("Both `event` and `context` are required."), null;
          const Fa = ((fe = Rt.resource) == null ? void 0 : fe.type) === "xhr" ? Wt(ya.xhr.getAllResponseHeaders()) : ya.response.headers;
          try {
            const Rr = (gt = Un(ya)) != null ? gt : oi({ method: ((ce = Rt.resource) == null ? void 0 : ce.method) || "GET", url: ((ct = Rt.resource) == null ? void 0 : ct.url) || "", status: ((wt = Rt.resource) == null ? void 0 : wt.status_code) || "", timestamp: Rt.date || Date.now(), headers: Yt(Fa) }, "extractor"), Wi = Bi(Rr);
            return Wi || tt.warn("No match found for request:", ya), Wi;
          } catch (Rr) {
            return tt.error("Failed to extract resource data:", Rr), null;
          }
        }
        function ee() {
          I.dispose(), tt.info("Interceptor stopped.");
        }
        return { stop: ee, getPayload: ne };
      }
      function vr() {
        const h = (E, k) => {
          h.state = "pending", h.resolve = (I) => {
            if (h.state !== "pending") return;
            h.result = I;
            const ne = (ee) => (h.state = "fulfilled", ee);
            return E(I instanceof Promise ? I : Promise.resolve(I).then(ne));
          }, h.reject = (I) => {
            if (h.state === "pending") return queueMicrotask(() => {
              h.state = "rejected";
            }), k(h.rejectionReason = I);
          };
        };
        return h;
      }
      var Yn = (Z = class extends Promise {
        constructor(h = null) {
          const E = vr();
          super((k, I) => {
            E(k, I), h == null || h(E.resolve, E.reject);
          }), Y(this, oe), Y(this, ae), w(this, "resolve"), w(this, "reject"), H(this, ae, E), this.resolve = P(this, ae).resolve, this.reject = P(this, ae).reject;
        }
        get state() {
          return P(this, ae).state;
        }
        get rejectionReason() {
          return P(this, ae).rejectionReason;
        }
        then(h, E) {
          return Q(this, oe, de).call(this, super.then(h, E));
        }
        catch(h) {
          return Q(this, oe, de).call(this, super.catch(h));
        }
        finally(h) {
          return Q(this, oe, de).call(this, super.finally(h));
        }
      }, ae = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakSet(), de = function(h) {
        return Object.defineProperties(h, { resolve: { configurable: !0, value: this.resolve }, reject: { configurable: !0, value: this.reject } });
      }, Z), Fr = (h) => V(this, null, function* () {
        try {
          return { error: null, data: yield h().catch((E) => {
            throw E;
          }) };
        } catch (E) {
          return { error: E, data: null };
        }
      }), Zr = class extends Error {
        constructor(h) {
          super(h), this.name = "InterceptorError", Object.setPrototypeOf(this, Zr.prototype);
        }
      }, zr = Symbol("kRequestHandled"), jn = Symbol("kResponsePromise"), A = class {
        constructor(h) {
          this.request = h, this[zr] = !1, this[jn] = new Yn();
        }
        respondWith(h) {
          se.as(Zr, !this[zr], 'Failed to respond to the "%s %s" request: the "request" event has already been handled.', this.request.method, this.request.url), this[zr] = !0, this[jn].resolve(h);
        }
        errorWith(h) {
          se.as(Zr, !this[zr], 'Failed to error the "%s %s" request: the "request" event has already been handled.', this.request.method, this.request.url), this[zr] = !0, this[jn].resolve(h);
        }
      };
      function J(h, E, ...k) {
        return V(this, null, function* () {
          const I = h.listeners(E);
          if (I.length !== 0) for (const ne of I) yield ne.apply(h, k);
        });
      }
      function me(h, E) {
        try {
          return h[E], !0;
        } catch {
          return !1;
        }
      }
      function Te(h) {
        return new Response(JSON.stringify(h instanceof Error ? { name: h.name, message: h.message, stack: h.stack } : h), { status: 500, statusText: "Unhandled Exception", headers: { "Content-Type": "application/json" } });
      }
      function dt(h) {
        return me(h, "type") && h.type === "error";
      }
      function We(h) {
        return h == null || !(h instanceof Error) ? !1 : "code" in h && "errno" in h;
      }
      function lt(h) {
        return V(this, null, function* () {
          const E = (ee) => V(this, null, function* () {
            return ee instanceof Error ? h.onError(ee) : dt(ee) ? h.onRequestError(ee) : yield h.onResponse(ee), !0;
          }), k = (ee) => V(this, null, function* () {
            if (ee instanceof Zr) throw ne.error;
            return We(ee) ? (h.onError(ee), !0) : ee instanceof Response ? yield E(ee) : !1;
          });
          h.emitter.once("request", ({ requestId: ee }) => {
            ee === h.requestId && h.controller[jn].state === "pending" && h.controller[jn].resolve(void 0);
          });
          const I = new Yn();
          h.request.signal && (h.request.signal.aborted ? I.reject(h.request.signal.reason) : h.request.signal.addEventListener("abort", () => {
            I.reject(h.request.signal.reason);
          }, { once: !0 }));
          const ne = yield Fr(() => V(this, null, function* () {
            const ee = J(h.emitter, "request", { requestId: h.requestId, request: h.request, controller: h.controller });
            return yield Promise.race([I, ee, h.controller[jn]]), yield h.controller[jn];
          }));
          if (I.state === "rejected") return h.onError(I.rejectionReason), !0;
          if (ne.error) {
            if (yield k(ne.error)) return !0;
            if (h.emitter.listenerCount("unhandledException") > 0) {
              const ee = new A(h.request);
              yield J(h.emitter, "unhandledException", { error: ne.error, request: h.request, requestId: h.requestId, controller: ee }).then(() => {
                ee[jn].state === "pending" && ee[jn].resolve(void 0);
              });
              const he = yield Fr(() => ee[jn]);
              if (he.error) return k(he.error);
              if (he.data) return E(he.data);
            }
            return h.onResponse(Te(ne.error)), !0;
          }
          return ne.data ? E(ne.data) : !1;
        });
      }
      function it(h) {
        const E = Object.getOwnPropertyDescriptor(globalThis, h);
        return typeof E > "u" || typeof E.get == "function" && typeof E.get() > "u" || typeof E.get > "u" && E.value == null ? !1 : typeof E.set > "u" && !E.configurable ? (console.error(`[MSW] Failed to apply interceptor: the global \`${h}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`), !1) : !0;
      }
      function pn(h) {
        try {
          return new URL(h), !0;
        } catch {
          return !1;
        }
      }
      function Nt(h) {
        return Object.assign(new TypeError("Failed to fetch"), { cause: h });
      }
      var en = ["content-encoding", "content-language", "content-location", "content-type", "content-length"], Sn = Symbol("kRedirectCount");
      function Pr(h, E) {
        return V(this, null, function* () {
          if (E.status !== 303 && h.body != null) return Promise.reject(Nt());
          const k = new URL(h.url);
          let I;
          try {
            I = new URL(E.headers.get("location"), h.url);
          } catch (ee) {
            return Promise.reject(Nt(ee));
          }
          if (!(I.protocol === "http:" || I.protocol === "https:")) return Promise.reject(Nt("URL scheme must be a HTTP(S) scheme"));
          if (Reflect.get(h, Sn) > 20) return Promise.reject(Nt("redirect count exceeded"));
          if (Object.defineProperty(h, Sn, { value: (Reflect.get(h, Sn) || 0) + 1 }), h.mode === "cors" && (I.username || I.password) && !Tr(k, I)) return Promise.reject(Nt('cross origin not allowed for request mode "cors"'));
          const ne = {};
          return ([301, 302].includes(E.status) && h.method === "POST" || E.status === 303 && !["HEAD", "GET"].includes(h.method)) && (ne.method = "GET", ne.body = null, en.forEach((ee) => {
            h.headers.delete(ee);
          })), Tr(k, I) || (h.headers.delete("authorization"), h.headers.delete("proxy-authorization"), h.headers.delete("cookie"), h.headers.delete("host")), ne.headers = h.headers, fetch(new Request(I, ne));
        });
      }
      function Tr(h, E) {
        return h.origin === E.origin && h.origin === "null" || h.protocol === E.protocol && h.hostname === E.hostname && h.port === E.port;
      }
      var tn = class extends TransformStream {
        constructor() {
          console.warn("[Interceptors]: Brotli decompression of response streams is not supported in the browser"), super({ transform(h, E) {
            E.enqueue(h);
          } });
        }
      }, nt = class extends TransformStream {
        constructor(h, ...E) {
          super({}, ...E);
          const k = [super.readable, ...h].reduce((I, ne) => I.pipeThrough(ne));
          Object.defineProperty(this, "readable", { get() {
            return k;
          } });
        }
      };
      function va(h) {
        return h.toLowerCase().split(",").map((E) => E.trim());
      }
      function $i(h) {
        if (h === "") return null;
        const E = va(h);
        if (E.length === 0) return null;
        const k = E.reduceRight((I, ne) => ne === "gzip" || ne === "x-gzip" ? I.concat(new DecompressionStream("gzip")) : ne === "deflate" ? I.concat(new DecompressionStream("deflate")) : ne === "br" ? I.concat(new tn()) : (I.length = 0, I), []);
        return new nt(k);
      }
      function ks(h) {
        if (h.body === null) return null;
        const E = $i(h.headers.get("content-encoding") || "");
        return E ? (h.body.pipeTo(E.writable), E.readable) : null;
      }
      var ma = class extends Qr {
        constructor() {
          super(ma.symbol);
        }
        checkEnvironment() {
          return it("fetch");
        }
        setup() {
          return V(this, null, function* () {
            const h = globalThis.fetch;
            se(!h[rt], 'Failed to patch the "fetch" module: already patched.'), globalThis.fetch = (E, k) => V(this, null, function* () {
              const I = Jr(), ne = typeof E == "string" && typeof location < "u" && !pn(E) ? new URL(E, location.origin) : E, ee = new Request(ne, k), he = new Yn(), fe = new A(ee);
              return this.logger.info("[%s] %s", ee.method, ee.url), this.logger.info("awaiting for the mocked response..."), this.logger.info('emitting the "request" event for %s listener(s)...', this.emitter.listenerCount("request")), (yield lt({ request: ee, requestId: I, emitter: this.emitter, controller: fe, onResponse: (ce) => V(this, null, function* () {
                this.logger.info("received mocked response!", { rawResponse: ce });
                const ct = ks(ce), wt = ct === null ? ce : new Ze(ct, ce);
                if (Ze.setUrl(ee.url, wt), Ze.isRedirectResponse(wt.status)) {
                  if (ee.redirect === "error") {
                    he.reject(Nt("unexpected redirect"));
                    return;
                  }
                  if (ee.redirect === "follow") {
                    Pr(ee, wt).then((gt) => {
                      he.resolve(gt);
                    }, (gt) => {
                      he.reject(gt);
                    });
                    return;
                  }
                }
                this.emitter.listenerCount("response") > 0 && (this.logger.info('emitting the "response" event...'), yield J(this.emitter, "response", { response: wt.clone(), isMockedResponse: !0, request: ee, requestId: I })), he.resolve(wt);
              }), onRequestError: (ce) => {
                this.logger.info("request has errored!", { response: ce }), he.reject(Nt(ce));
              }, onError: (ce) => {
                this.logger.info("request has been aborted!", { error: ce }), he.reject(ce);
              } })) ? (this.logger.info("request has been handled, returning mock promise..."), he) : (this.logger.info("no mocked response received, performing request as-is..."), h(ee).then((ce) => V(this, null, function* () {
                if (this.logger.info("original fetch performed", ce), this.emitter.listenerCount("response") > 0) {
                  this.logger.info('emitting the "response" event...');
                  const ct = ce.clone();
                  yield J(this.emitter, "response", { response: ct, isMockedResponse: !1, request: ee, requestId: I });
                }
                return ce;
              })));
            }), Object.defineProperty(globalThis.fetch, rt, { enumerable: !0, configurable: !0, value: !0 }), this.subscriptions.push(() => {
              Object.defineProperty(globalThis.fetch, rt, { value: void 0 }), globalThis.fetch = h, this.logger.info('restored native "globalThis.fetch"!', globalThis.fetch.name);
            });
          });
        }
      }, Hi = ma;
      Hi.symbol = Symbol("fetch");
      function Ao(h, E) {
        const k = new Uint8Array(h.byteLength + E.byteLength);
        return k.set(h, 0), k.set(E, h.byteLength), k;
      }
      var Vi = class {
        constructor(h, E) {
          this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.type = "", this.srcElement = null, this.currentTarget = null, this.eventPhase = 0, this.isTrusted = !0, this.composed = !1, this.cancelable = !0, this.defaultPrevented = !1, this.bubbles = !0, this.lengthComputable = !0, this.loaded = 0, this.total = 0, this.cancelBubble = !1, this.returnValue = !0, this.type = h, this.target = (E == null ? void 0 : E.target) || null, this.currentTarget = (E == null ? void 0 : E.currentTarget) || null, this.timeStamp = Date.now();
        }
        composedPath() {
          return [];
        }
        initEvent(h, E, k) {
          this.type = h, this.bubbles = !!E, this.cancelable = !!k;
        }
        preventDefault() {
          this.defaultPrevented = !0;
        }
        stopPropagation() {
        }
        stopImmediatePropagation() {
        }
      }, Do = class extends Vi {
        constructor(h, E) {
          super(h), this.lengthComputable = (E == null ? void 0 : E.lengthComputable) || !1, this.composed = (E == null ? void 0 : E.composed) || !1, this.loaded = (E == null ? void 0 : E.loaded) || 0, this.total = (E == null ? void 0 : E.total) || 0;
        }
      }, ko = typeof ProgressEvent < "u";
      function Ls(h, E, k) {
        const I = ["error", "progress", "loadstart", "loadend", "load", "timeout", "abort"], ne = ko ? ProgressEvent : Do;
        return I.includes(E) ? new ne(E, { lengthComputable: !0, loaded: (k == null ? void 0 : k.loaded) || 0, total: (k == null ? void 0 : k.total) || 0 }) : new Vi(E, { target: h, currentTarget: h });
      }
      function Lo(h, E) {
        if (!(E in h)) return null;
        if (Object.prototype.hasOwnProperty.call(h, E)) return h;
        const k = Reflect.getPrototypeOf(h);
        return k ? Lo(k, E) : null;
      }
      function Ia(h, E) {
        return new Proxy(h, No(E));
      }
      function No(h) {
        const { constructorCall: E, methodCall: k, getProperty: I, setProperty: ne } = h, ee = {};
        return typeof E < "u" && (ee.construct = function(he, fe, ce) {
          const ct = Reflect.construct.bind(null, he, fe, ce);
          return E.call(ce, fe, ct);
        }), ee.set = function(he, fe, ce) {
          const ct = () => {
            const wt = Lo(he, fe) || he, gt = Reflect.getOwnPropertyDescriptor(wt, fe);
            return typeof (gt == null ? void 0 : gt.set) < "u" ? (gt.set.apply(he, [ce]), !0) : Reflect.defineProperty(wt, fe, { writable: !0, enumerable: !0, configurable: !0, value: ce });
          };
          return typeof ne < "u" ? ne.call(he, [fe, ce], ct) : ct();
        }, ee.get = function(he, fe, ce) {
          const ct = () => he[fe], wt = typeof I < "u" ? I.call(he, [fe, ce], ct) : ct();
          return typeof wt == "function" ? (...gt) => {
            const Rt = wt.bind(he, ...gt);
            return typeof k < "u" ? k.call(he, [fe, gt], Rt) : Rt();
          } : wt;
        }, ee;
      }
      function ea(h) {
        return ["application/xhtml+xml", "application/xml", "image/svg+xml", "text/html", "text/xml"].some((E) => h.startsWith(E));
      }
      function si(h) {
        try {
          return JSON.parse(h);
        } catch {
          return null;
        }
      }
      function Ua(h, E) {
        const k = Ze.isResponseWithBody(h.status) ? E : null;
        return new Ze(k, { url: h.responseURL, status: h.status, statusText: h.statusText, headers: qi(h.getAllResponseHeaders()) });
      }
      function qi(h) {
        const E = new Headers(), k = h.split(/[\r\n]+/);
        for (const I of k) {
          if (I.trim() === "") continue;
          const [ne, ...ee] = I.split(": "), he = ee.join(": ");
          E.append(ne, he);
        }
        return E;
      }
      function ja(h) {
        return V(this, null, function* () {
          const E = h.headers.get("content-length");
          return E != null && E !== "" ? Number(E) : (yield h.arrayBuffer()).byteLength;
        });
      }
      var ta = Symbol("kIsRequestHandled"), Mo = ht(), Yi = Symbol("kFetchRequest"), Io = class {
        constructor(h, E) {
          this.initialRequest = h, this.logger = E, this.method = "GET", this.url = null, this[ta] = !1, this.events = /* @__PURE__ */ new Map(), this.uploadEvents = /* @__PURE__ */ new Map(), this.requestId = Jr(), this.requestHeaders = new Headers(), this.responseBuffer = new Uint8Array(), this.request = Ia(h, { setProperty: ([k, I], ne) => {
            switch (k) {
              case "ontimeout": {
                const ee = k.slice(2);
                return this.request.addEventListener(ee, I), ne();
              }
              default:
                return ne();
            }
          }, methodCall: ([k, I], ne) => {
            var ee;
            switch (k) {
              case "open": {
                const [he, fe] = I;
                return typeof fe > "u" ? (this.method = "GET", this.url = Ns(he)) : (this.method = he, this.url = Ns(fe)), this.logger = this.logger.extend(`${this.method} ${this.url.href}`), this.logger.info("open", this.method, this.url.href), ne();
              }
              case "addEventListener": {
                const [he, fe] = I;
                return this.registerEvent(he, fe), this.logger.info("addEventListener", he, fe), ne();
              }
              case "setRequestHeader": {
                const [he, fe] = I;
                return this.requestHeaders.set(he, fe), this.logger.info("setRequestHeader", he, fe), ne();
              }
              case "send": {
                const [he] = I;
                this.request.addEventListener("load", () => {
                  if (typeof this.onResponse < "u") {
                    const ct = Ua(this.request, this.request.response);
                    this.onResponse.call(this, { response: ct, isMockedResponse: this[ta], request: ce, requestId: this.requestId });
                  }
                });
                const fe = typeof he == "string" ? ft(he) : he, ce = this.toFetchApiRequest(fe);
                this[Yi] = ce.clone(), (((ee = this.onRequest) == null ? void 0 : ee.call(this, { request: ce, requestId: this.requestId })) || Promise.resolve()).finally(() => {
                  if (!this[ta]) return this.logger.info("request callback settled but request has not been handled (readystate %d), performing as-is...", this.request.readyState), Mo && this.request.setRequestHeader(Xr, this.requestId), ne();
                });
                break;
              }
              default:
                return ne();
            }
          } }), Cr(this.request, "upload", Ia(this.request.upload, { setProperty: ([k, I], ne) => {
            switch (k) {
              case "onloadstart":
              case "onprogress":
              case "onaboart":
              case "onerror":
              case "onload":
              case "ontimeout":
              case "onloadend": {
                const ee = k.slice(2);
                this.registerUploadEvent(ee, I);
              }
            }
            return ne();
          }, methodCall: ([k, I], ne) => {
            switch (k) {
              case "addEventListener": {
                const [ee, he] = I;
                return this.registerUploadEvent(ee, he), this.logger.info("upload.addEventListener", ee, he), ne();
              }
            }
          } }));
        }
        registerEvent(h, E) {
          const k = (this.events.get(h) || []).concat(E);
          this.events.set(h, k), this.logger.info('registered event "%s"', h, E);
        }
        registerUploadEvent(h, E) {
          const k = (this.uploadEvents.get(h) || []).concat(E);
          this.uploadEvents.set(h, k), this.logger.info('registered upload event "%s"', h, E);
        }
        respondWith(h) {
          return V(this, null, function* () {
            if (this[ta] = !0, this[Yi]) {
              const I = yield ja(this[Yi]);
              this.trigger("loadstart", this.request.upload, { loaded: 0, total: I }), this.trigger("progress", this.request.upload, { loaded: I, total: I }), this.trigger("load", this.request.upload, { loaded: I, total: I }), this.trigger("loadend", this.request.upload, { loaded: I, total: I });
            }
            this.logger.info("responding with a mocked response: %d %s", h.status, h.statusText), Cr(this.request, "status", h.status), Cr(this.request, "statusText", h.statusText), Cr(this.request, "responseURL", this.url.href), this.request.getResponseHeader = new Proxy(this.request.getResponseHeader, { apply: (I, ne, ee) => {
              if (this.logger.info("getResponseHeader", ee[0]), this.request.readyState < this.request.HEADERS_RECEIVED) return this.logger.info("headers not received yet, returning null"), null;
              const he = h.headers.get(ee[0]);
              return this.logger.info('resolved response header "%s" to', ee[0], he), he;
            } }), this.request.getAllResponseHeaders = new Proxy(this.request.getAllResponseHeaders, { apply: () => {
              if (this.logger.info("getAllResponseHeaders"), this.request.readyState < this.request.HEADERS_RECEIVED) return this.logger.info("headers not received yet, returning empty string"), "";
              const I = Array.from(h.headers.entries()).map(([ne, ee]) => `${ne}: ${ee}`).join(`\r
`);
              return this.logger.info("resolved all response headers to", I), I;
            } }), Object.defineProperties(this.request, { response: { enumerable: !0, configurable: !1, get: () => this.response }, responseText: { enumerable: !0, configurable: !1, get: () => this.responseText }, responseXML: { enumerable: !0, configurable: !1, get: () => this.responseXML } });
            const E = yield ja(h.clone());
            this.logger.info("calculated response body length", E), this.trigger("loadstart", this.request, { loaded: 0, total: E }), this.setReadyState(this.request.HEADERS_RECEIVED), this.setReadyState(this.request.LOADING);
            const k = () => {
              this.logger.info("finalizing the mocked response..."), this.setReadyState(this.request.DONE), this.trigger("load", this.request, { loaded: this.responseBuffer.byteLength, total: E }), this.trigger("loadend", this.request, { loaded: this.responseBuffer.byteLength, total: E });
            };
            if (h.body) {
              this.logger.info("mocked response has body, streaming...");
              const I = h.body.getReader(), ne = () => V(this, null, function* () {
                const { value: ee, done: he } = yield I.read();
                if (he) {
                  this.logger.info("response body stream done!"), k();
                  return;
                }
                ee && (this.logger.info("read response body chunk:", ee), this.responseBuffer = Ao(this.responseBuffer, ee), this.trigger("progress", this.request, { loaded: this.responseBuffer.byteLength, total: E })), ne();
              });
              ne();
            } else k();
          });
        }
        responseBufferToText() {
          return Lt(this.responseBuffer);
        }
        get response() {
          if (this.logger.info("getResponse (responseType: %s)", this.request.responseType), this.request.readyState !== this.request.DONE) return null;
          switch (this.request.responseType) {
            case "json": {
              const h = si(this.responseBufferToText());
              return this.logger.info("resolved response JSON", h), h;
            }
            case "arraybuffer": {
              const h = Ot(this.responseBuffer);
              return this.logger.info("resolved response ArrayBuffer", h), h;
            }
            case "blob": {
              const h = this.request.getResponseHeader("Content-Type") || "text/plain", E = new Blob([this.responseBufferToText()], { type: h });
              return this.logger.info("resolved response Blob (mime type: %s)", E, h), E;
            }
            default: {
              const h = this.responseBufferToText();
              return this.logger.info('resolving "%s" response type as text', this.request.responseType, h), h;
            }
          }
        }
        get responseText() {
          if (se(this.request.responseType === "" || this.request.responseType === "text", "InvalidStateError: The object is in invalid state."), this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE) return "";
          const h = this.responseBufferToText();
          return this.logger.info('getResponseText: "%s"', h), h;
        }
        get responseXML() {
          if (se(this.request.responseType === "" || this.request.responseType === "document", "InvalidStateError: The object is in invalid state."), this.request.readyState !== this.request.DONE) return null;
          const h = this.request.getResponseHeader("Content-Type") || "";
          return typeof DOMParser > "u" ? (console.warn("Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly."), null) : ea(h) ? new DOMParser().parseFromString(this.responseBufferToText(), h) : null;
        }
        errorWith(h) {
          this[ta] = !0, this.logger.info("responding with an error"), this.setReadyState(this.request.DONE), this.trigger("error", this.request), this.trigger("loadend", this.request);
        }
        setReadyState(h) {
          if (this.logger.info("setReadyState: %d -> %d", this.request.readyState, h), this.request.readyState === h) {
            this.logger.info("ready state identical, skipping transition...");
            return;
          }
          Cr(this.request, "readyState", h), this.logger.info("set readyState to: %d", h), h !== this.request.UNSENT && (this.logger.info('triggerring "readystatechange" event...'), this.trigger("readystatechange", this.request));
        }
        trigger(h, E, k) {
          const I = E[`on${h}`], ne = Ls(E, h, k);
          this.logger.info('trigger "%s"', h, k || ""), typeof I == "function" && (this.logger.info('found a direct "%s" callback, calling...', h), I.call(E, ne));
          const ee = E instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events;
          for (const [he, fe] of ee) he === h && (this.logger.info('found %d listener(s) for "%s" event, calling...', fe.length, h), fe.forEach((ce) => ce.call(E, ne)));
        }
        toFetchApiRequest(h) {
          this.logger.info("converting request to a Fetch API Request...");
          const E = h instanceof Document ? h.documentElement.innerText : h, k = new Request(this.url.href, { method: this.method, headers: this.requestHeaders, credentials: this.request.withCredentials ? "include" : "same-origin", body: ["GET", "HEAD"].includes(this.method.toUpperCase()) ? null : E }), I = Ia(k.headers, { methodCall: ([ne, ee], he) => {
            switch (ne) {
              case "append":
              case "set": {
                const [fe, ce] = ee;
                this.request.setRequestHeader(fe, ce);
                break;
              }
              case "delete": {
                const [fe] = ee;
                console.warn(`XMLHttpRequest: Cannot remove a "${fe}" header from the Fetch API representation of the "${k.method} ${k.url}" request. XMLHttpRequest headers cannot be removed.`);
                break;
              }
            }
            return he();
          } });
          return Cr(k, "headers", I), this.logger.info("converted request to a Fetch API Request!", k), k;
        }
      };
      function Ns(h) {
        return typeof location > "u" ? new URL(h) : new URL(h.toString(), location.href);
      }
      function Cr(h, E, k) {
        Reflect.defineProperty(h, E, { writable: !0, enumerable: !0, value: k });
      }
      function Ms({ emitter: h, logger: E }) {
        return new Proxy(globalThis.XMLHttpRequest, { construct(k, I, ne) {
          E.info("constructed new XMLHttpRequest");
          const ee = Reflect.construct(k, I, ne), he = Object.getOwnPropertyDescriptors(k.prototype);
          for (const ce in he) Reflect.defineProperty(ee, ce, he[ce]);
          const fe = new Io(ee, E);
          return fe.onRequest = function(ce) {
            return V(this, arguments, function* ({ request: ct, requestId: wt }) {
              const gt = new A(ct);
              this.logger.info("awaiting mocked response..."), this.logger.info('emitting the "request" event for %s listener(s)...', h.listenerCount("request")), (yield lt({ request: ct, requestId: wt, controller: gt, emitter: h, onResponse: (Rt) => V(this, null, function* () {
                yield this.respondWith(Rt);
              }), onRequestError: () => {
                this.errorWith(new TypeError("Network error"));
              }, onError: (Rt) => {
                this.logger.info("request errored!", { error: Rt }), Rt instanceof Error && this.errorWith(Rt);
              } })) || this.logger.info("no mocked response received, performing request as-is...");
            });
          }, fe.onResponse = function(ce) {
            return V(this, arguments, function* ({ response: ct, isMockedResponse: wt, request: gt, requestId: Rt }) {
              this.logger.info('emitting the "response" event for %s listener(s)...', h.listenerCount("response")), h.emit("response", { response: ct, isMockedResponse: wt, request: gt, requestId: Rt });
            });
          }, fe.request;
        } });
      }
      var Gi = class extends Qr {
        constructor() {
          super(Gi.interceptorSymbol);
        }
        checkEnvironment() {
          return it("XMLHttpRequest");
        }
        setup() {
          const h = this.logger.extend("setup");
          h.info('patching "XMLHttpRequest" module...');
          const E = globalThis.XMLHttpRequest;
          se(!E[rt], 'Failed to patch the "XMLHttpRequest" module: already patched.'), globalThis.XMLHttpRequest = Ms({ emitter: this.emitter, logger: this.logger }), h.info('native "XMLHttpRequest" module patched!', globalThis.XMLHttpRequest.name), Object.defineProperty(globalThis.XMLHttpRequest, rt, { enumerable: !0, configurable: !0, value: !0 }), this.subscriptions.push(() => {
            Object.defineProperty(globalThis.XMLHttpRequest, rt, { value: void 0 }), globalThis.XMLHttpRequest = E, h.info('native "XMLHttpRequest" module restored!', globalThis.XMLHttpRequest.name);
          });
        }
      }, Ct = Gi;
      Ct.interceptorSymbol = Symbol("xhr");
      function tl(h = {}) {
        const E = [new Hi(), new Ct()];
        return jr(h, E);
      }
      return { init: tl };
    });
  }(Ap)), Ap.exports;
}
var w3 = x3();
const O3 = /* @__PURE__ */ Rs(w3), A3 = O3.init({ debug: !0 });
Wb.init({
  clientToken: "pub067eb57994325a05bf401b11a686e8e3",
  site: "datadoghq.com",
  forwardErrorsToLogs: !0,
  sessionSampleRate: 100
});
TO.init({
  clientToken: "pub067eb57994325a05bf401b11a686e8e3",
  applicationId: "4a79b017-ea18-4839-9153-ce2b058b4db6",
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: "datadoghq.com",
  service: "datadog-demo-app",
  env: "local",
  // Specify a version number to identify the deployed version of your application in Datadog
  version: "1.0.0",
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: !0,
  trackResources: !0,
  trackLongTasks: !0,
  defaultPrivacyLevel: "mask-user-input",
  allowedTracingUrls: [
    (n) => (console.log("allowedTracingUrls", { url: n }), n.includes("localhost"))
  ],
  beforeSend: (n, a) => {
    if (n.type === "resource" && ["xhr", "fetch"].includes(n.resource.type)) {
      console.log("post-resource check", { event: n, context: a });
      const o = A3.getPayload({ event: n, context: a });
      console.log("beforeSend", { data: o }), Wb.logger.log(o);
    }
    return !0;
  }
});
const D3 = () => {
  const [n, a] = M.useState(""), [o, u] = M.useState([]), [l, f] = M.useState([]), [d, m] = M.useState(null), [g, y] = M.useState(null), _ = async (T, w, D = null) => {
    var Y;
    const P = {
      method: T,
      headers: { "Content-Type": "application/json" }
    };
    D && (P.body = JSON.stringify(D));
    try {
      const H = await fetch(w + (w.includes("?") ? "&" : "?") + (g ? `session=${g}` : ""), P), Q = H.clone(), V = await H.json();
      w === "/api/login" && ((Y = V.user) != null && Y.session) && y(V.user.session), m({
        status: H.status,
        url: w,
        body: JSON.stringify(V, null, 2)
      });
    } catch (H) {
      m({
        status: "Error",
        url: w,
        body: H.message
      });
    }
  };
  M.useEffect(() => {
    fetch("/api/products").then((T) => T.json()).then((T) => f(T)).catch((T) => console.error("Error fetching products:", T));
  }, []);
  const R = (T) => {
    a(T), T.length > 2 ? fetch(`/api/search?q=${T}`).then((w) => w.json()).then((w) => u(w)).catch((w) => console.error("Error fetching search results:", w)) : u([]);
  };
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    /* @__PURE__ */ z.jsxs(mp, { bg: "dark", variant: "dark", expand: "lg", className: "px-3", children: [
      /* @__PURE__ */ z.jsx(mp.Brand, { href: "#", children: "Logo" }),
      /* @__PURE__ */ z.jsx(mp.Toggle, { "aria-controls": "basic-navbar-nav" }),
      /* @__PURE__ */ z.jsxs(mp.Collapse, { id: "basic-navbar-nav", children: [
        /* @__PURE__ */ z.jsxs(vp, { className: "me-auto", children: [
          /* @__PURE__ */ z.jsx(vp.Link, { href: "#home", children: "Home" }),
          /* @__PURE__ */ z.jsx(vp.Link, { href: "#about", children: "About" }),
          /* @__PURE__ */ z.jsx(vp.Link, { href: "#contact", children: "Contact" })
        ] }),
        /* @__PURE__ */ z.jsxs(sF, { className: "d-flex position-relative", children: [
          /* @__PURE__ */ z.jsx(
            Gx,
            {
              type: "search",
              placeholder: "Search",
              className: "me-2",
              value: n,
              onChange: (T) => R(T.target.value)
            }
          ),
          o.length > 0 && /* @__PURE__ */ z.jsx("div", { className: "position-absolute bg-white border rounded p-2", style: { top: "100%", left: 0, width: "100%", zIndex: 10 }, children: o.map((T, w) => /* @__PURE__ */ z.jsx("div", { className: "p-1 border-bottom", children: T }, w)) })
        ] }),
        /* @__PURE__ */ z.jsx(Nr, { variant: "outline-light", className: "ms-2", children: "Login" })
      ] })
    ] }),
    /* @__PURE__ */ z.jsx(Vc, { className: "my-4", children: /* @__PURE__ */ z.jsxs(rb, { children: [
      /* @__PURE__ */ z.jsxs(qc, { md: 4, children: [
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("POST", "/api/login", { email: "test@example.com", password: "password" }), children: "Login" }),
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("GET", "/api/user"), children: "Get User" }),
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("GET", "/api/jwt"), children: "Get JWT" }),
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("GET", "/api/products"), children: "Get Products" }),
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("GET", "/api/products/1"), children: "Get Product 1" }),
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("GET", "/api/search?q=chair"), children: "Search Products" }),
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("GET", "http://localhost:3001/api/fast?type=axios&sleep=8"), children: "Chain API (Axios)" }),
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("GET", "http://localhost:3001/api/fast?type=http&sleep=10"), children: "Chain API (HTTP)" }),
        /* @__PURE__ */ z.jsx(Nr, { className: "mb-2 w-100", onClick: () => _("GET", "http://localhost:3001/api/fast?type=fetch&sleep=12"), children: "Chain API (Fetch)" })
      ] }),
      /* @__PURE__ */ z.jsx(qc, { md: 8, children: /* @__PURE__ */ z.jsx("div", { children: d ? /* @__PURE__ */ z.jsxs(Vc, { children: [
        /* @__PURE__ */ z.jsxs(_w, { direction: "horizontal", gap: 3, className: "pb-3", children: [
          /* @__PURE__ */ z.jsxs(tb, { pill: !0, bg: "primary", children: [
            "Status: ",
            d.status
          ] }),
          /* @__PURE__ */ z.jsxs(tb, { pill: !0, bg: "secondary", children: [
            "URL: ",
            d.url
          ] })
        ] }),
        /* @__PURE__ */ z.jsx("pre", { className: "border p-3 bg-light", style: { whiteSpace: "pre-wrap", wordWrap: "break-word" }, children: /* @__PURE__ */ z.jsx("code", { children: /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
          /* @__PURE__ */ z.jsx("strong", { children: "Body:" }),
          " ",
          d.body
        ] }) }) })
      ] }) : /* @__PURE__ */ z.jsx("pre", { className: "well", children: '"Click a button to make an API request"' }) }) })
    ] }) }),
    /* @__PURE__ */ z.jsxs("div", { className: "bg-primary text-white text-center py-5", children: [
      /* @__PURE__ */ z.jsx("h1", { children: "Welcome to Our Store" }),
      /* @__PURE__ */ z.jsx("p", { children: "Find the best products at unbeatable prices." }),
      /* @__PURE__ */ z.jsx(Nr, { variant: "light", className: "m-2", children: "Shop Now" }),
      /* @__PURE__ */ z.jsx(Nr, { variant: "outline-light", children: "Learn More" })
    ] }),
    /* @__PURE__ */ z.jsx(Vc, { className: "my-4", children: /* @__PURE__ */ z.jsx(rb, { children: l.map((T) => /* @__PURE__ */ z.jsx(qc, { md: 4, className: "mb-4", children: /* @__PURE__ */ z.jsxs(Uc, { children: [
      /* @__PURE__ */ z.jsx(Uc.Img, { variant: "top", src: `https://picsum.photos/300/200?random=${T.id}` }),
      /* @__PURE__ */ z.jsxs(Uc.Body, { children: [
        /* @__PURE__ */ z.jsx(Uc.Title, { children: T.name }),
        /* @__PURE__ */ z.jsx(Uc.Text, { children: T.description }),
        /* @__PURE__ */ z.jsxs("h5", { children: [
          "$",
          T.price
        ] }),
        /* @__PURE__ */ z.jsx(Nr, { variant: "primary", children: "Add to Cart" })
      ] })
    ] }) }, T.id)) }) }),
    /* @__PURE__ */ z.jsx("footer", { className: "bg-dark text-white text-center py-3", children: /* @__PURE__ */ z.jsx(Vc, { children: /* @__PURE__ */ z.jsxs("p", { children: [
      "© 2025 Your Store | ",
      /* @__PURE__ */ z.jsx("a", { href: "#privacy", className: "text-white", children: "Privacy Policy" }),
      " | ",
      /* @__PURE__ */ z.jsx("a", { href: "#terms", className: "text-white", children: "Terms of Service" })
    ] }) }) })
  ] });
}, k3 = YU.createRoot(document.getElementById("root"));
k3.render(
  /* @__PURE__ */ z.jsx(ei.StrictMode, { children: /* @__PURE__ */ z.jsx(D3, {}) })
);
export {
  z3 as A,
  dB as B,
  qg as C,
  o$ as D,
  Re as E,
  Yb as F,
  jb as G,
  W3 as H,
  Y3 as I,
  G3 as J,
  K3 as K,
  tB as L,
  fa as M,
  Ht as N,
  fr as O,
  q$ as P,
  _r as Q,
  Ds as R,
  oH as S,
  KP as T,
  ni as U,
  H3 as a,
  Mb as b,
  O$ as c,
  A$ as d,
  F3 as e,
  V3 as f,
  V$ as g,
  X$ as h,
  H$ as i,
  $3 as j,
  P3 as k,
  B3 as l,
  Z0 as m,
  of as n,
  wo as o,
  As as p,
  eO as q,
  K$ as r,
  Q$ as s,
  nr as t,
  TV as u,
  q3 as v,
  ln as w,
  CV as x,
  Vt as y,
  ti as z
};
