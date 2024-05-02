function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
      __vite__mapDeps.viteFileDeps = ["assets/dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-KR-9kfls.js", "assets/react-qTuFlYP0.js", "assets/lottie-DCavrAAS.js", "assets/dotlottie-audio-75C54RUV-C4ThZgkY.js", "assets/chunk-HDDX7F4A-DsTJlkT1.js", "assets/lottie_worker-Q23FJ6ZR-YP5OKMTN-Dl7j5H7l.js", "assets/lottie_light-KMJEUZFY-TNG7ODX7-Cz6KFPKl.js", "assets/lottie_svg-MJGYILXD-NRTSROOT-Ci_7qTj4.js", "assets/lottie_light_canvas-B5UTTNXA-PRI6IBWW-CV9yTcpO.js", "assets/lottie_canvas-CDSUBMCL-MZNYH5VV-iWywsrJi.js", "assets/lottie_light_html-SLCECTRT-SYWXEBDN-Bl2Og0kV.js", "assets/lottie_html-X3TYKVQI-L6774NQS-DBjbmfli.js"]
  }
  return indexes.map((i)=>__vite__mapDeps.viteFileDeps[i])
}
var zs = Object.defineProperty;
var Us = (e,t,n)=>t in e ? zs(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var x = (e,t,n)=>(Us(e, typeof t != "symbol" ? t + "" : t, n),
n);
import {r as O, a as jt, R as P, g as Ln, c as Hs, b as pn} from "./react-qTuFlYP0.js";
import {P as S} from "./lottie-DCavrAAS.js";
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
      return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
  new MutationObserver(i=>{
      for (const o of i)
          if (o.type === "childList")
              for (const s of o.addedNodes)
                  s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function n(i) {
      const o = {};
      return i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
      o
  }
  function r(i) {
      if (i.ep)
          return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o)
  }
}
)();
var fo = {
  exports: {}
}
, An = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ws = O
, Vs = Symbol.for("react.element")
, qs = Symbol.for("react.fragment")
, Gs = Object.prototype.hasOwnProperty
, Js = Ws.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
, Ks = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function ho(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n),
  t.key !== void 0 && (o = "" + t.key),
  t.ref !== void 0 && (s = t.ref);
  for (r in t)
      Gs.call(t, r) && !Ks.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
      for (r in t = e.defaultProps,
      t)
          i[r] === void 0 && (i[r] = t[r]);
  return {
      $$typeof: Vs,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Js.current
  }
}
An.Fragment = qs;
An.jsx = ho;
An.jsxs = ho;
fo.exports = An;
var N = fo.exports
, Ys = {
  exports: {}
};
(function(e) {
  var t = function(n) {
      var r = Object.prototype, i = r.hasOwnProperty, o = Object.defineProperty || function(C, w, E) {
          C[w] = E.value
      }
      , s, l = typeof Symbol == "function" ? Symbol : {}, a = l.iterator || "@@iterator", u = l.asyncIterator || "@@asyncIterator", d = l.toStringTag || "@@toStringTag";
      function c(C, w, E) {
          return Object.defineProperty(C, w, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }),
          C[w]
      }
      try {
          c({}, "")
      } catch {
          c = function(w, E, B) {
              return w[E] = B
          }
      }
      function p(C, w, E, B) {
          var L = w && w.prototype instanceof _ ? w : _
            , U = Object.create(L.prototype)
            , K = new ce(B || []);
          return o(U, "_invoke", {
              value: W(C, E, K)
          }),
          U
      }
      n.wrap = p;
      function f(C, w, E) {
          try {
              return {
                  type: "normal",
                  arg: C.call(w, E)
              }
          } catch (B) {
              return {
                  type: "throw",
                  arg: B
              }
          }
      }
      var m = "suspendedStart"
        , h = "suspendedYield"
        , b = "executing"
        , g = "completed"
        , v = {};
      function _() {}
      function I() {}
      function D() {}
      var j = {};
      c(j, a, function() {
          return this
      });
      var F = Object.getPrototypeOf
        , T = F && F(F(se([])));
      T && T !== r && i.call(T, a) && (j = T);
      var k = D.prototype = _.prototype = Object.create(j);
      I.prototype = D,
      o(k, "constructor", {
          value: D,
          configurable: !0
      }),
      o(D, "constructor", {
          value: I,
          configurable: !0
      }),
      I.displayName = c(D, d, "GeneratorFunction");
      function J(C) {
          ["next", "throw", "return"].forEach(function(w) {
              c(C, w, function(E) {
                  return this._invoke(w, E)
              })
          })
      }
      n.isGeneratorFunction = function(C) {
          var w = typeof C == "function" && C.constructor;
          return w ? w === I || (w.displayName || w.name) === "GeneratorFunction" : !1
      }
      ,
      n.mark = function(C) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(C, D) : (C.__proto__ = D,
          c(C, d, "GeneratorFunction")),
          C.prototype = Object.create(k),
          C
      }
      ,
      n.awrap = function(C) {
          return {
              __await: C
          }
      }
      ;
      function R(C, w) {
          function E(U, K, ne, ae) {
              var ue = f(C[U], C, K);
              if (ue.type === "throw")
                  ae(ue.arg);
              else {
                  var pt = ue.arg
                    , et = pt.value;
                  return et && typeof et == "object" && i.call(et, "__await") ? w.resolve(et.__await).then(function(Re) {
                      E("next", Re, ne, ae)
                  }, function(Re) {
                      E("throw", Re, ne, ae)
                  }) : w.resolve(et).then(function(Re) {
                      pt.value = Re,
                      ne(pt)
                  }, function(Re) {
                      return E("throw", Re, ne, ae)
                  })
              }
          }
          var B;
          function L(U, K) {
              function ne() {
                  return new w(function(ae, ue) {
                      E(U, K, ae, ue)
                  }
                  )
              }
              return B = B ? B.then(ne, ne) : ne()
          }
          o(this, "_invoke", {
              value: L
          })
      }
      J(R.prototype),
      c(R.prototype, u, function() {
          return this
      }),
      n.AsyncIterator = R,
      n.async = function(C, w, E, B, L) {
          L === void 0 && (L = Promise);
          var U = new R(p(C, w, E, B),L);
          return n.isGeneratorFunction(w) ? U : U.next().then(function(K) {
              return K.done ? K.value : U.next()
          })
      }
      ;
      function W(C, w, E) {
          var B = m;
          return function(U, K) {
              if (B === b)
                  throw new Error("Generator is already running");
              if (B === g) {
                  if (U === "throw")
                      throw K;
                  return ye()
              }
              for (E.method = U,
              E.arg = K; ; ) {
                  var ne = E.delegate;
                  if (ne) {
                      var ae = ee(ne, E);
                      if (ae) {
                          if (ae === v)
                              continue;
                          return ae
                      }
                  }
                  if (E.method === "next")
                      E.sent = E._sent = E.arg;
                  else if (E.method === "throw") {
                      if (B === m)
                          throw B = g,
                          E.arg;
                      E.dispatchException(E.arg)
                  } else
                      E.method === "return" && E.abrupt("return", E.arg);
                  B = b;
                  var ue = f(C, w, E);
                  if (ue.type === "normal") {
                      if (B = E.done ? g : h,
                      ue.arg === v)
                          continue;
                      return {
                          value: ue.arg,
                          done: E.done
                      }
                  } else
                      ue.type === "throw" && (B = g,
                      E.method = "throw",
                      E.arg = ue.arg)
              }
          }
      }
      function ee(C, w) {
          var E = w.method
            , B = C.iterator[E];
          if (B === s)
              return w.delegate = null,
              E === "throw" && C.iterator.return && (w.method = "return",
              w.arg = s,
              ee(C, w),
              w.method === "throw") || E !== "return" && (w.method = "throw",
              w.arg = new TypeError("The iterator does not provide a '" + E + "' method")),
              v;
          var L = f(B, C.iterator, w.arg);
          if (L.type === "throw")
              return w.method = "throw",
              w.arg = L.arg,
              w.delegate = null,
              v;
          var U = L.arg;
          if (!U)
              return w.method = "throw",
              w.arg = new TypeError("iterator result is not an object"),
              w.delegate = null,
              v;
          if (U.done)
              w[C.resultName] = U.value,
              w.next = C.nextLoc,
              w.method !== "return" && (w.method = "next",
              w.arg = s);
          else
              return U;
          return w.delegate = null,
          v
      }
      J(k),
      c(k, d, "Generator"),
      c(k, a, function() {
          return this
      }),
      c(k, "toString", function() {
          return "[object Generator]"
      });
      function te(C) {
          var w = {
              tryLoc: C[0]
          };
          1 in C && (w.catchLoc = C[1]),
          2 in C && (w.finallyLoc = C[2],
          w.afterLoc = C[3]),
          this.tryEntries.push(w)
      }
      function X(C) {
          var w = C.completion || {};
          w.type = "normal",
          delete w.arg,
          C.completion = w
      }
      function ce(C) {
          this.tryEntries = [{
              tryLoc: "root"
          }],
          C.forEach(te, this),
          this.reset(!0)
      }
      n.keys = function(C) {
          var w = Object(C)
            , E = [];
          for (var B in w)
              E.push(B);
          return E.reverse(),
          function L() {
              for (; E.length; ) {
                  var U = E.pop();
                  if (U in w)
                      return L.value = U,
                      L.done = !1,
                      L
              }
              return L.done = !0,
              L
          }
      }
      ;
      function se(C) {
          if (C != null) {
              var w = C[a];
              if (w)
                  return w.call(C);
              if (typeof C.next == "function")
                  return C;
              if (!isNaN(C.length)) {
                  var E = -1
                    , B = function L() {
                      for (; ++E < C.length; )
                          if (i.call(C, E))
                              return L.value = C[E],
                              L.done = !1,
                              L;
                      return L.value = s,
                      L.done = !0,
                      L
                  };
                  return B.next = B
              }
          }
          throw new TypeError(typeof C + " is not iterable")
      }
      n.values = se;
      function ye() {
          return {
              value: s,
              done: !0
          }
      }
      return ce.prototype = {
          constructor: ce,
          reset: function(C) {
              if (this.prev = 0,
              this.next = 0,
              this.sent = this._sent = s,
              this.done = !1,
              this.delegate = null,
              this.method = "next",
              this.arg = s,
              this.tryEntries.forEach(X),
              !C)
                  for (var w in this)
                      w.charAt(0) === "t" && i.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = s)
          },
          stop: function() {
              this.done = !0;
              var C = this.tryEntries[0]
                , w = C.completion;
              if (w.type === "throw")
                  throw w.arg;
              return this.rval
          },
          dispatchException: function(C) {
              if (this.done)
                  throw C;
              var w = this;
              function E(ae, ue) {
                  return U.type = "throw",
                  U.arg = C,
                  w.next = ae,
                  ue && (w.method = "next",
                  w.arg = s),
                  !!ue
              }
              for (var B = this.tryEntries.length - 1; B >= 0; --B) {
                  var L = this.tryEntries[B]
                    , U = L.completion;
                  if (L.tryLoc === "root")
                      return E("end");
                  if (L.tryLoc <= this.prev) {
                      var K = i.call(L, "catchLoc")
                        , ne = i.call(L, "finallyLoc");
                      if (K && ne) {
                          if (this.prev < L.catchLoc)
                              return E(L.catchLoc, !0);
                          if (this.prev < L.finallyLoc)
                              return E(L.finallyLoc)
                      } else if (K) {
                          if (this.prev < L.catchLoc)
                              return E(L.catchLoc, !0)
                      } else if (ne) {
                          if (this.prev < L.finallyLoc)
                              return E(L.finallyLoc)
                      } else
                          throw new Error("try statement without catch or finally")
                  }
              }
          },
          abrupt: function(C, w) {
              for (var E = this.tryEntries.length - 1; E >= 0; --E) {
                  var B = this.tryEntries[E];
                  if (B.tryLoc <= this.prev && i.call(B, "finallyLoc") && this.prev < B.finallyLoc) {
                      var L = B;
                      break
                  }
              }
              L && (C === "break" || C === "continue") && L.tryLoc <= w && w <= L.finallyLoc && (L = null);
              var U = L ? L.completion : {};
              return U.type = C,
              U.arg = w,
              L ? (this.method = "next",
              this.next = L.finallyLoc,
              v) : this.complete(U)
          },
          complete: function(C, w) {
              if (C.type === "throw")
                  throw C.arg;
              return C.type === "break" || C.type === "continue" ? this.next = C.arg : C.type === "return" ? (this.rval = this.arg = C.arg,
              this.method = "return",
              this.next = "end") : C.type === "normal" && w && (this.next = w),
              v
          },
          finish: function(C) {
              for (var w = this.tryEntries.length - 1; w >= 0; --w) {
                  var E = this.tryEntries[w];
                  if (E.finallyLoc === C)
                      return this.complete(E.completion, E.afterLoc),
                      X(E),
                      v
              }
          },
          catch: function(C) {
              for (var w = this.tryEntries.length - 1; w >= 0; --w) {
                  var E = this.tryEntries[w];
                  if (E.tryLoc === C) {
                      var B = E.completion;
                      if (B.type === "throw") {
                          var L = B.arg;
                          X(E)
                      }
                      return L
                  }
              }
              throw new Error("illegal catch attempt")
          },
          delegateYield: function(C, w, E) {
              return this.delegate = {
                  iterator: se(C),
                  resultName: w,
                  nextLoc: E
              },
              this.method === "next" && (this.arg = s),
              v
          }
      },
      n
  }(e.exports);
  try {
      regeneratorRuntime = t
  } catch {
      typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
  }
}
)(Ys);
var rr = {}
, Jr = jt;
rr.createRoot = Jr.createRoot,
rr.hydrateRoot = Jr.hydrateRoot;
var fn = window, Sr = fn.ShadowRoot && (fn.ShadyCSS === void 0 || fn.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype, Pr = Symbol(), Kr = new WeakMap, mo = class {
  constructor(t, n, r) {
      if (this._$cssResult$ = !0,
      r !== Pr)
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t,
      this.t = n
  }
  get styleSheet() {
      let t = this.o
        , n = this.t;
      if (Sr && t === void 0) {
          let r = n !== void 0 && n.length === 1;
          r && (t = Kr.get(n)),
          t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
          r && Kr.set(n, t))
      }
      return t
  }
  toString() {
      return this.cssText
  }
}
, Zs = e=>new mo(typeof e == "string" ? e : e + "",void 0,Pr), Xs = (e,...t)=>{
  let n = e.length === 1 ? e[0] : t.reduce((r,i,o)=>r + (s=>{
      if (s._$cssResult$ === !0)
          return s.cssText;
      if (typeof s == "number")
          return s;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
  }
  )(i) + e[o + 1], e[0]);
  return new mo(n,e,Pr)
}
, Qs = (e,t)=>{
  Sr ? e.adoptedStyleSheets = t.map(n=>n instanceof CSSStyleSheet ? n : n.styleSheet) : t.forEach(n=>{
      let r = document.createElement("style")
        , i = fn.litNonce;
      i !== void 0 && r.setAttribute("nonce", i),
      r.textContent = n.cssText,
      e.appendChild(r)
  }
  )
}
, Yr = Sr ? e=>e : e=>e instanceof CSSStyleSheet ? (t=>{
  let n = "";
  for (let r of t.cssRules)
      n += r.cssText;
  return Zs(n)
}
)(e) : e, Hn, yn = window, Zr = yn.trustedTypes, ea = Zr ? Zr.emptyScript : "", Xr = yn.reactiveElementPolyfillSupport, ir = {
  toAttribute(e, t) {
      switch (t) {
      case Boolean:
          e = e ? ea : null;
          break;
      case Object:
      case Array:
          e = e == null ? e : JSON.stringify(e)
      }
      return e
  },
  fromAttribute(e, t) {
      let n = e;
      switch (t) {
      case Boolean:
          n = e !== null;
          break;
      case Number:
          n = e === null ? null : Number(e);
          break;
      case Object:
      case Array:
          try {
              n = JSON.parse(e)
          } catch {
              n = null
          }
      }
      return n
  }
}, vo = (e,t)=>t !== e && (t == t || e == e), Wn = {
  attribute: !0,
  type: String,
  converter: ir,
  reflect: !1,
  hasChanged: vo
}, or = "finalized", mt = class extends HTMLElement {
  constructor() {
      super(),
      this._$Ei = new Map,
      this.isUpdatePending = !1,
      this.hasUpdated = !1,
      this._$El = null,
      this._$Eu()
  }
  static addInitializer(t) {
      var n;
      this.finalize(),
      ((n = this.h) !== null && n !== void 0 ? n : this.h = []).push(t)
  }
  static get observedAttributes() {
      this.finalize();
      let t = [];
      return this.elementProperties.forEach((n,r)=>{
          let i = this._$Ep(r, n);
          i !== void 0 && (this._$Ev.set(i, r),
          t.push(i))
      }
      ),
      t
  }
  static createProperty(t, n=Wn) {
      if (n.state && (n.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, n),
      !n.noAccessor && !this.prototype.hasOwnProperty(t)) {
          let r = typeof t == "symbol" ? Symbol() : "__" + t
            , i = this.getPropertyDescriptor(t, r, n);
          i !== void 0 && Object.defineProperty(this.prototype, t, i)
      }
  }
  static getPropertyDescriptor(t, n, r) {
      return {
          get() {
              return this[n]
          },
          set(i) {
              let o = this[t];
              this[n] = i,
              this.requestUpdate(t, o, r)
          },
          configurable: !0,
          enumerable: !0
      }
  }
  static getPropertyOptions(t) {
      return this.elementProperties.get(t) || Wn
  }
  static finalize() {
      if (this.hasOwnProperty(or))
          return !1;
      this[or] = !0;
      let t = Object.getPrototypeOf(this);
      if (t.finalize(),
      t.h !== void 0 && (this.h = [...t.h]),
      this.elementProperties = new Map(t.elementProperties),
      this._$Ev = new Map,
      this.hasOwnProperty("properties")) {
          let n = this.properties
            , r = [...Object.getOwnPropertyNames(n), ...Object.getOwnPropertySymbols(n)];
          for (let i of r)
              this.createProperty(i, n[i])
      }
      return this.elementStyles = this.finalizeStyles(this.styles),
      !0
  }
  static finalizeStyles(t) {
      let n = [];
      if (Array.isArray(t)) {
          let r = new Set(t.flat(1 / 0).reverse());
          for (let i of r)
              n.unshift(Yr(i))
      } else
          t !== void 0 && n.push(Yr(t));
      return n
  }
  static _$Ep(t, n) {
      let r = n.attribute;
      return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0
  }
  _$Eu() {
      var t;
      this._$E_ = new Promise(n=>this.enableUpdating = n),
      this._$AL = new Map,
      this._$Eg(),
      this.requestUpdate(),
      (t = this.constructor.h) === null || t === void 0 || t.forEach(n=>n(this))
  }
  addController(t) {
      var n, r;
      ((n = this._$ES) !== null && n !== void 0 ? n : this._$ES = []).push(t),
      this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) === null || r === void 0 || r.call(t))
  }
  removeController(t) {
      var n;
      (n = this._$ES) === null || n === void 0 || n.splice(this._$ES.indexOf(t) >>> 0, 1)
  }
  _$Eg() {
      this.constructor.elementProperties.forEach((t,n)=>{
          this.hasOwnProperty(n) && (this._$Ei.set(n, this[n]),
          delete this[n])
      }
      )
  }
  createRenderRoot() {
      var t;
      let n = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return Qs(n, this.constructor.elementStyles),
      n
  }
  connectedCallback() {
      var t;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$ES) === null || t === void 0 || t.forEach(n=>{
          var r;
          return (r = n.hostConnected) === null || r === void 0 ? void 0 : r.call(n)
      }
      )
  }
  enableUpdating(t) {}
  disconnectedCallback() {
      var t;
      (t = this._$ES) === null || t === void 0 || t.forEach(n=>{
          var r;
          return (r = n.hostDisconnected) === null || r === void 0 ? void 0 : r.call(n)
      }
      )
  }
  attributeChangedCallback(t, n, r) {
      this._$AK(t, r)
  }
  _$EO(t, n, r=Wn) {
      var i;
      let o = this.constructor._$Ep(t, r);
      if (o !== void 0 && r.reflect === !0) {
          let s = (((i = r.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? r.converter : ir).toAttribute(n, r.type);
          this._$El = t,
          s == null ? this.removeAttribute(o) : this.setAttribute(o, s),
          this._$El = null
      }
  }
  _$AK(t, n) {
      var r;
      let i = this.constructor
        , o = i._$Ev.get(t);
      if (o !== void 0 && this._$El !== o) {
          let s = i.getPropertyOptions(o)
            , l = typeof s.converter == "function" ? {
              fromAttribute: s.converter
          } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : ir;
          this._$El = o,
          this[o] = l.fromAttribute(n, s.type),
          this._$El = null
      }
  }
  requestUpdate(t, n, r) {
      let i = !0;
      t !== void 0 && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || vo)(this[t], n) ? (this._$AL.has(t) || this._$AL.set(t, n),
      r.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = new Map),
      this._$EC.set(t, r))) : i = !1),
      !this.isUpdatePending && i && (this._$E_ = this._$Ej())
  }
  async _$Ej() {
      this.isUpdatePending = !0;
      try {
          await this._$E_
      } catch (n) {
          Promise.reject(n)
      }
      let t = this.scheduleUpdate();
      return t != null && await t,
      !this.isUpdatePending
  }
  scheduleUpdate() {
      return this.performUpdate()
  }
  performUpdate() {
      var t;
      if (!this.isUpdatePending)
          return;
      this.hasUpdated,
      this._$Ei && (this._$Ei.forEach((i,o)=>this[o] = i),
      this._$Ei = void 0);
      let n = !1
        , r = this._$AL;
      try {
          n = this.shouldUpdate(r),
          n ? (this.willUpdate(r),
          (t = this._$ES) === null || t === void 0 || t.forEach(i=>{
              var o;
              return (o = i.hostUpdate) === null || o === void 0 ? void 0 : o.call(i)
          }
          ),
          this.update(r)) : this._$Ek()
      } catch (i) {
          throw n = !1,
          this._$Ek(),
          i
      }
      n && this._$AE(r)
  }
  willUpdate(t) {}
  _$AE(t) {
      var n;
      (n = this._$ES) === null || n === void 0 || n.forEach(r=>{
          var i;
          return (i = r.hostUpdated) === null || i === void 0 ? void 0 : i.call(r)
      }
      ),
      this.hasUpdated || (this.hasUpdated = !0,
      this.firstUpdated(t)),
      this.updated(t)
  }
  _$Ek() {
      this._$AL = new Map,
      this.isUpdatePending = !1
  }
  get updateComplete() {
      return this.getUpdateComplete()
  }
  getUpdateComplete() {
      return this._$E_
  }
  shouldUpdate(t) {
      return !0
  }
  update(t) {
      this._$EC !== void 0 && (this._$EC.forEach((n,r)=>this._$EO(r, this[r], n)),
      this._$EC = void 0),
      this._$Ek()
  }
  updated(t) {}
  firstUpdated(t) {}
}
;
mt[or] = !0,
mt.elementProperties = new Map,
mt.elementStyles = [],
mt.shadowRootOptions = {
  mode: "open"
},
Xr == null || Xr({
  ReactiveElement: mt
}),
((Hn = yn.reactiveElementVersions) !== null && Hn !== void 0 ? Hn : yn.reactiveElementVersions = []).push("1.6.3");
var Vn, gn = window, bt = gn.trustedTypes, Qr = bt ? bt.createPolicy("lit-html", {
  createHTML: e=>e
}) : void 0, sr = "$lit$", Ge = `lit$${(Math.random() + "").slice(9)}$`, yo = "?" + Ge, ta = `<${yo}>`, st = document, zt = ()=>st.createComment(""), Ut = e=>e === null || typeof e != "object" && typeof e != "function", go = Array.isArray, na = e=>go(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", qn = `[ 	
\f\r]`, Lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ei = /-->/g, ti = />/g, tt = RegExp(`>|${qn}(?:([^\\s"'>=/]+)(${qn}*=${qn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ni = /'/g, ri = /"/g, bo = /^(?:script|style|textarea|title)$/i, ra = e=>(t,...n)=>({
  _$litType$: e,
  strings: t,
  values: n
}), V = ra(1), _t = Symbol.for("lit-noChange"), fe = Symbol.for("lit-nothing"), ii = new WeakMap, nt = st.createTreeWalker(st, 129, null, !1);
function _o(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
  return Qr !== void 0 ? Qr.createHTML(t) : t
}
var ia = (e,t)=>{
  let n = e.length - 1, r = [], i, o = t === 2 ? "<svg>" : "", s = Lt;
  for (let l = 0; l < n; l++) {
      let a = e[l], u, d, c = -1, p = 0;
      for (; p < a.length && (s.lastIndex = p,
      d = s.exec(a),
      d !== null); )
          p = s.lastIndex,
          s === Lt ? d[1] === "!--" ? s = ei : d[1] !== void 0 ? s = ti : d[2] !== void 0 ? (bo.test(d[2]) && (i = RegExp("</" + d[2], "g")),
          s = tt) : d[3] !== void 0 && (s = tt) : s === tt ? d[0] === ">" ? (s = i ?? Lt,
          c = -1) : d[1] === void 0 ? c = -2 : (c = s.lastIndex - d[2].length,
          u = d[1],
          s = d[3] === void 0 ? tt : d[3] === '"' ? ri : ni) : s === ri || s === ni ? s = tt : s === ei || s === ti ? s = Lt : (s = tt,
          i = void 0);
      let f = s === tt && e[l + 1].startsWith("/>") ? " " : "";
      o += s === Lt ? a + ta : c >= 0 ? (r.push(u),
      a.slice(0, c) + sr + a.slice(c) + Ge + f) : a + Ge + (c === -2 ? (r.push(void 0),
      l) : f)
  }
  return [_o(e, o + (e[n] || "<?>") + (t === 2 ? "</svg>" : "")), r]
}
, ar = class wo {
  constructor({strings: t, _$litType$: n}, r) {
      let i;
      this.parts = [];
      let o = 0
        , s = 0
        , l = t.length - 1
        , a = this.parts
        , [u,d] = ia(t, n);
      if (this.el = wo.createElement(u, r),
      nt.currentNode = this.el.content,
      n === 2) {
          let c = this.el.content
            , p = c.firstChild;
          p.remove(),
          c.append(...p.childNodes)
      }
      for (; (i = nt.nextNode()) !== null && a.length < l; ) {
          if (i.nodeType === 1) {
              if (i.hasAttributes()) {
                  let c = [];
                  for (let p of i.getAttributeNames())
                      if (p.endsWith(sr) || p.startsWith(Ge)) {
                          let f = d[s++];
                          if (c.push(p),
                          f !== void 0) {
                              let m = i.getAttribute(f.toLowerCase() + sr).split(Ge)
                                , h = /([.?@])?(.*)/.exec(f);
                              a.push({
                                  type: 1,
                                  index: o,
                                  name: h[2],
                                  strings: m,
                                  ctor: h[1] === "." ? sa : h[1] === "?" ? la : h[1] === "@" ? ca : In
                              })
                          } else
                              a.push({
                                  type: 6,
                                  index: o
                              })
                      }
                  for (let p of c)
                      i.removeAttribute(p)
              }
              if (bo.test(i.tagName)) {
                  let c = i.textContent.split(Ge)
                    , p = c.length - 1;
                  if (p > 0) {
                      i.textContent = bt ? bt.emptyScript : "";
                      for (let f = 0; f < p; f++)
                          i.append(c[f], zt()),
                          nt.nextNode(),
                          a.push({
                              type: 2,
                              index: ++o
                          });
                      i.append(c[p], zt())
                  }
              }
          } else if (i.nodeType === 8)
              if (i.data === yo)
                  a.push({
                      type: 2,
                      index: o
                  });
              else {
                  let c = -1;
                  for (; (c = i.data.indexOf(Ge, c + 1)) !== -1; )
                      a.push({
                          type: 7,
                          index: o
                      }),
                      c += Ge.length - 1
              }
          o++
      }
  }
  static createElement(t, n) {
      let r = st.createElement("template");
      return r.innerHTML = t,
      r
  }
}
;
function wt(e, t, n=e, r) {
  var i, o, s, l;
  if (t === _t)
      return t;
  let a = r !== void 0 ? (i = n._$Co) === null || i === void 0 ? void 0 : i[r] : n._$Cl
    , u = Ut(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== u && ((o = a == null ? void 0 : a._$AO) === null || o === void 0 || o.call(a, !1),
  u === void 0 ? a = void 0 : (a = new u(e),
  a._$AT(e, n, r)),
  r !== void 0 ? ((s = (l = n)._$Co) !== null && s !== void 0 ? s : l._$Co = [])[r] = a : n._$Cl = a),
  a !== void 0 && (t = wt(e, a._$AS(e, t.values), a, r)),
  t
}
var oa = class {
  constructor(t, n) {
      this._$AV = [],
      this._$AN = void 0,
      this._$AD = t,
      this._$AM = n
  }
  get parentNode() {
      return this._$AM.parentNode
  }
  get _$AU() {
      return this._$AM._$AU
  }
  u(t) {
      var n;
      let {el: {content: r}, parts: i} = this._$AD
        , o = ((n = t == null ? void 0 : t.creationScope) !== null && n !== void 0 ? n : st).importNode(r, !0);
      nt.currentNode = o;
      let s = nt.nextNode()
        , l = 0
        , a = 0
        , u = i[0];
      for (; u !== void 0; ) {
          if (l === u.index) {
              let d;
              u.type === 2 ? d = new xr(s,s.nextSibling,this,t) : u.type === 1 ? d = new u.ctor(s,u.name,u.strings,this,t) : u.type === 6 && (d = new ua(s,this,t)),
              this._$AV.push(d),
              u = i[++a]
          }
          l !== (u == null ? void 0 : u.index) && (s = nt.nextNode(),
          l++)
      }
      return nt.currentNode = st,
      o
  }
  v(t) {
      let n = 0;
      for (let r of this._$AV)
          r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, n),
          n += r.strings.length - 2) : r._$AI(t[n])),
          n++
  }
}
, xr = class Co {
  constructor(t, n, r, i) {
      var o;
      this.type = 2,
      this._$AH = fe,
      this._$AN = void 0,
      this._$AA = t,
      this._$AB = n,
      this._$AM = r,
      this.options = i,
      this._$Cp = (o = i == null ? void 0 : i.isConnected) === null || o === void 0 || o
  }
  get _$AU() {
      var t, n;
      return (n = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && n !== void 0 ? n : this._$Cp
  }
  get parentNode() {
      let t = this._$AA.parentNode
        , n = this._$AM;
      return n !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = n.parentNode),
      t
  }
  get startNode() {
      return this._$AA
  }
  get endNode() {
      return this._$AB
  }
  _$AI(t, n=this) {
      t = wt(this, t, n),
      Ut(t) ? t === fe || t == null || t === "" ? (this._$AH !== fe && this._$AR(),
      this._$AH = fe) : t !== this._$AH && t !== _t && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : na(t) ? this.T(t) : this._(t)
  }
  k(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB)
  }
  $(t) {
      this._$AH !== t && (this._$AR(),
      this._$AH = this.k(t))
  }
  _(t) {
      this._$AH !== fe && Ut(this._$AH) ? this._$AA.nextSibling.data = t : this.$(st.createTextNode(t)),
      this._$AH = t
  }
  g(t) {
      var n;
      let {values: r, _$litType$: i} = t
        , o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = ar.createElement(_o(i.h, i.h[0]), this.options)),
      i);
      if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === o)
          this._$AH.v(r);
      else {
          let s = new oa(o,this)
            , l = s.u(this.options);
          s.v(r),
          this.$(l),
          this._$AH = s
      }
  }
  _$AC(t) {
      let n = ii.get(t.strings);
      return n === void 0 && ii.set(t.strings, n = new ar(t)),
      n
  }
  T(t) {
      go(this._$AH) || (this._$AH = [],
      this._$AR());
      let n = this._$AH, r, i = 0;
      for (let o of t)
          i === n.length ? n.push(r = new Co(this.k(zt()),this.k(zt()),this,this.options)) : r = n[i],
          r._$AI(o),
          i++;
      i < n.length && (this._$AR(r && r._$AB.nextSibling, i),
      n.length = i)
  }
  _$AR(t=this._$AA.nextSibling, n) {
      var r;
      for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, n); t && t !== this._$AB; ) {
          let i = t.nextSibling;
          t.remove(),
          t = i
      }
  }
  setConnected(t) {
      var n;
      this._$AM === void 0 && (this._$Cp = t,
      (n = this._$AP) === null || n === void 0 || n.call(this, t))
  }
}
, In = class {
  constructor(t, n, r, i, o) {
      this.type = 1,
      this._$AH = fe,
      this._$AN = void 0,
      this.element = t,
      this.name = n,
      this._$AM = i,
      this.options = o,
      r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String),
      this.strings = r) : this._$AH = fe
  }
  get tagName() {
      return this.element.tagName
  }
  get _$AU() {
      return this._$AM._$AU
  }
  _$AI(t, n=this, r, i) {
      let o = this.strings
        , s = !1;
      if (o === void 0)
          t = wt(this, t, n, 0),
          s = !Ut(t) || t !== this._$AH && t !== _t,
          s && (this._$AH = t);
      else {
          let l = t, a, u;
          for (t = o[0],
          a = 0; a < o.length - 1; a++)
              u = wt(this, l[r + a], n, a),
              u === _t && (u = this._$AH[a]),
              s || (s = !Ut(u) || u !== this._$AH[a]),
              u === fe ? t = fe : t !== fe && (t += (u ?? "") + o[a + 1]),
              this._$AH[a] = u
      }
      s && !i && this.j(t)
  }
  j(t) {
      t === fe ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "")
  }
}
, sa = class extends In {
  constructor() {
      super(...arguments),
      this.type = 3
  }
  j(t) {
      this.element[this.name] = t === fe ? void 0 : t
  }
}
, aa = bt ? bt.emptyScript : ""
, la = class extends In {
  constructor() {
      super(...arguments),
      this.type = 4
  }
  j(t) {
      t && t !== fe ? this.element.setAttribute(this.name, aa) : this.element.removeAttribute(this.name)
  }
}
, ca = class extends In {
  constructor(t, n, r, i, o) {
      super(t, n, r, i, o),
      this.type = 5
  }
  _$AI(t, n=this) {
      var r;
      if ((t = (r = wt(this, t, n, 0)) !== null && r !== void 0 ? r : fe) === _t)
          return;
      let i = this._$AH
        , o = t === fe && i !== fe || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive
        , s = t !== fe && (i === fe || o);
      o && this.element.removeEventListener(this.name, this, i),
      s && this.element.addEventListener(this.name, this, t),
      this._$AH = t
  }
  handleEvent(t) {
      var n, r;
      typeof this._$AH == "function" ? this._$AH.call((r = (n = this.options) === null || n === void 0 ? void 0 : n.host) !== null && r !== void 0 ? r : this.element, t) : this._$AH.handleEvent(t)
  }
}
, ua = class {
  constructor(t, n, r) {
      this.element = t,
      this.type = 6,
      this._$AN = void 0,
      this._$AM = n,
      this.options = r
  }
  get _$AU() {
      return this._$AM._$AU
  }
  _$AI(t) {
      wt(this, t)
  }
}
, oi = gn.litHtmlPolyfillSupport;
oi == null || oi(ar, xr),
((Vn = gn.litHtmlVersions) !== null && Vn !== void 0 ? Vn : gn.litHtmlVersions = []).push("2.8.0");
var da = (e,t,n)=>{
  var r, i;
  let o = (r = n == null ? void 0 : n.renderBefore) !== null && r !== void 0 ? r : t
    , s = o._$litPart$;
  if (s === void 0) {
      let l = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : null;
      o._$litPart$ = s = new xr(t.insertBefore(zt(), l),l,void 0,n ?? {})
  }
  return s._$AI(e),
  s
}
, Gn, Jn, Rt = class extends mt {
  constructor() {
      super(...arguments),
      this.renderOptions = {
          host: this
      },
      this._$Do = void 0
  }
  createRenderRoot() {
      var t, n;
      let r = super.createRenderRoot();
      return (t = (n = this.renderOptions).renderBefore) !== null && t !== void 0 || (n.renderBefore = r.firstChild),
      r
  }
  update(t) {
      let n = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      this._$Do = da(n, this.renderRoot, this.renderOptions)
  }
  connectedCallback() {
      var t;
      super.connectedCallback(),
      (t = this._$Do) === null || t === void 0 || t.setConnected(!0)
  }
  disconnectedCallback() {
      var t;
      super.disconnectedCallback(),
      (t = this._$Do) === null || t === void 0 || t.setConnected(!1)
  }
  render() {
      return _t
  }
}
;
Rt.finalized = !0,
Rt._$litElement$ = !0,
(Gn = globalThis.litElementHydrateSupport) === null || Gn === void 0 || Gn.call(globalThis, {
  LitElement: Rt
});
var si = globalThis.litElementPolyfillSupport;
si == null || si({
  LitElement: Rt
});
((Jn = globalThis.litElementVersions) !== null && Jn !== void 0 ? Jn : globalThis.litElementVersions = []).push("3.3.3");
var pa = Xs`
@font-face {
  font-family: 'Karla';
  font-weight: regular;
  src: url('./fonts/Karla-regular.woff') format('woff');
}

:host {
  --lottie-player-toolbar-height: 35px;
  --lottie-player-toolbar-background-color: transparent;
  --lottie-player-toolbar-hover-background-color: #f3f6f8;
  --lottie-player-toolbar-icon-color: #20272c;
  --lottie-player-toolbar-icon-hover-color: #f3f6f8;
  --lottie-player-toolbar-icon-active-color: #00ddb3;
  --lottie-player-seeker-track-color: #00ddb3;
  --lottie-player-seeker-accent-color: #00c1a2;
  --lottie-player-seeker-thumb-color: #00c1a2;
  --lottie-player-options-separator: #d9e0e6;

  display: block;
  width: 100%;
  height: 100%;

  font-family: 'Karla', sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:host * {
  box-sizing: border-box;
}

.active {
  color: var(--lottie-player-toolbar-icon-active-color) !important;
}

.main {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.animation {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}
.animation.controls {
  height: calc(100% - var(--lottie-player-toolbar-height));
}

.toolbar {
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: var(--lottie-player-toolbar-background-color);
  margin: 0 8px;
  height: var(--lottie-player-toolbar-height);
}

.btn-spacing-left {
  margin-right: 4px;
  margin-left: 8px;
}

.btn-spacing-center {
  margin-right: 4px;
  margin-left: 4px;
}

.btn-spacing-right {
  margin-right: 8px;
  margin-left: 4px;
}

.toolbar button {
  color: #20272c;
  cursor: pointer;
  fill: var(--lottie-player-toolbar-icon-color);
  display: flex;
  background: none;
  border: 0px;
  border-radius: 4px;
  padding: 4px;
  outline: none;
  width: 24px;
  height: 24px;
  align-items: center;
}

.toolbar button:hover {
  background-color: var(--lottie-player-toolbar-icon-hover-color);
  border-style: solid;
  border-radius: 2px;
}

.toolbar button.active {
  fill: var(--lottie-player-toolbar-icon-active-color);
}

.toolbar button.active:hover {
  fill: var(--lottie-player-toolbar-icon-hover-color);
  border-radius: 4px;
}

.toolbar button:focus-visible {
  outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
  border-radius: 4px;
  box-sizing: border-box;
}

.toolbar button svg {
  width: 16px;
  height: 16px;
}

.toolbar button.disabled svg {
  display: none;
}

.popover {
  position: absolute;
  bottom: 40px;
  left: calc(100% - 239px);
  width: 224px;
  min-height: 84px;
  max-height: 300px;
  background-color: #ffffff;
  box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
    0px 0px 1px 0px rgba(61, 72, 83, 0.36);
  border-radius: 8px;
  padding: 8px;
  z-index: 100;
  overflow-y: scroll;
  scrollbar-width: none;
}
.popover:focus-visible {
  outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
  border-radius: 4px;
  box-sizing: border-box;
}

.popover::-webkit-scrollbar {
  width: 0px;
}

.popover-button {
  background: none;
  border: none;
  font-family: inherit;
  width: 100%;
  flex-direction: row;
  cursor: pointer;
  height: 32px;
  color: #20272c;
  justify-content: space-between;
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 4px;
}

.popover-button:focus-visible {
  outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
  border-radius: 4px;
  box-sizing: border-box;
}

.popover-button:hover {
  background-color: var(--lottie-player-toolbar-hover-background-color);
}

.popover-button-text {
  display: flex;
  color: #20272c;
  flex-direction: column;
  align-self: stretch;
  justify-content: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.28px;
}

.reset-btn {
  font-size: 12px;
  cursor: pointer;
  font-family: inherit;
  background: none;
  border: none;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #63727e;
  padding: 0;
  width: 31px;
  height: 18px;
}
.reset-btn:focus-visible {
  outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
  border-radius: 4px;
  box-sizing: border-box;
}
.reset-btn:hover {
  color: #20272c;
}

.option-title-button {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 32px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  cursor: pointer;
  color: var(--lottie-player-toolbar-icon-color);
  border: none;
  background: none;
  padding: 4px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.32px;
}
.option-title-button.themes {
  width: auto;
  padding: 0;
}
.option-title-button:hover {
  background-color: var(--lottie-player-toolbar-icon-hover-color);
}

.option-title-themes-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
}
.option-title-themes-row:hover {
  background-color: var(--lottie-player-toolbar-icon-hover-color);
}

.option-title-button:focus-visible {
  outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
  border-radius: 4px;
  box-sizing: border-box;
}

.option-title-text {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.32px;
}

.option-title-separator {
  margin: 8px -8px;
  border-bottom: 1px solid var(--lottie-player-options-separator);
}

.option-title-chevron {
  display: flex;
  padding: 4px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.option-row {
  display: flex;
  flex-direction: column;
}
.option-row > ul {
  padding: 0;
  margin: 0;
}

.option-button {
  width: 100%;
  background: none;
  border: none;
  font-family: inherit;
  display: flex;
  padding: 4px 8px;
  color: #20272c;
  overflow: hidden;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  cursor: pointer;
  height: 32px;
  font-family: inherit;
  font-size: 14px;
  border-radius: 4px;
}
.option-button:hover {
  background-color: var(--lottie-player-toolbar-hover-background-color);
}
.option-button:focus-visible {
  outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
  border-radius: 4px;
  box-sizing: border-box;
}

.option-tick {
  display: flex;
  width: 24px;
  height: 24px;
  align-items: flex-start;
  gap: 8px;
}

.seeker {
  height: 4px;
  width: 95%;
  outline: none;
  -webkit-appearance: none;
  -moz-apperance: none;
  border-radius: 9999px;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    rgb(0, 221, 179) calc(var(--seeker) * 1%),
    rgb(217, 224, 230) calc(var(--seeker) * 1%)
  );
}
.seeker.to-left {
  background-image: linear-gradient(
    to right,
    rgb(217, 224, 230) calc(var(--seeker) * 1%),
    rgb(0, 221, 179) calc(var(--seeker) * 1%)
  );
}
.seeker::-webkit-slider-runnable-track:focus-visible {
  color: #f07167;
  accent-color: #00ddb3;
}

.seeker::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
}
.seeker::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: var(--lottie-player-seeker-thumb-color);
  cursor: pointer;
  margin-top: -5px;
}
.seeker:focus-visible::-webkit-slider-thumb {
  background: var(--lottie-player-seeker-thumb-color);
  outline: 2px solid var(--lottie-player-seeker-track-color);
  border: 1.5px solid #ffffff;
}
.seeker::-webkit-slider-thumb:hover {
  background: #019d91;
}
.seeker::-moz-range-thumb {
  appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: var(--lottie-player-seeker-thumb-color);
  cursor: pointer;
  margin-top: -5px;
  border-color: transparent;
}
.seeker:focus-visible::-moz-range-thumb {
  background: var(--lottie-player-seeker-thumb-color);
  outline: 2px solid var(--lottie-player-seeker-track-color);
  border: 1.5px solid #ffffff;
}

.error {
  display: flex;
  justify-content: center;
  margin: auto;
  height: 100%;
  align-items: center;
}
`;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
(**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/reactive-element.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

lit-html/lit-html.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

lit-element/lit-element.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

lit-html/is-server.js:
(**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)
*/
const fa = "modulepreload"
, ha = function(e) {
  return "/" + e
}
, ai = {}
, We = function(t, n, r) {
  let i = Promise.resolve();
  if (n && n.length > 0) {
      const o = document.getElementsByTagName("link");
      i = Promise.all(n.map(s=>{
          if (s = ha(s),
          s in ai)
              return;
          ai[s] = !0;
          const l = s.endsWith(".css")
            , a = l ? '[rel="stylesheet"]' : "";
          if (!!r)
              for (let c = o.length - 1; c >= 0; c--) {
                  const p = o[c];
                  if (p.href === s && (!l || p.rel === "stylesheet"))
                      return
              }
          else if (document.querySelector(`link[href="${s}"]${a}`))
              return;
          const d = document.createElement("link");
          if (d.rel = l ? "stylesheet" : fa,
          l || (d.as = "script",
          d.crossOrigin = ""),
          d.href = s,
          document.head.appendChild(d),
          l)
              return new Promise((c,p)=>{
                  d.addEventListener("load", c),
                  d.addEventListener("error", ()=>p(new Error(`Unable to preload CSS for ${s}`)))
              }
              )
      }
      ))
  }
  return i.then(()=>t()).catch(o=>{
      const s = new Event("vite:preloadError",{
          cancelable: !0
      });
      if (s.payload = o,
      window.dispatchEvent(s),
      !s.defaultPrevented)
          throw o
  }
  )
};
var li = {}
, ma = function(e, t, n, r, i) {
  var o = new Worker(li[t] || (li[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{
      type: "text/javascript"
  }))));
  return o.onmessage = function(s) {
      var l = s.data
        , a = l.$e$;
      if (a) {
          var u = new Error(a[0]);
          u.code = a[1],
          u.stack = a[2],
          i(u, null)
      } else
          i(null, l)
  }
  ,
  o.postMessage(n, r),
  o
}
, be = Uint8Array
, rt = Uint16Array
, Oo = Int32Array
, Tr = new be([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0])
, kr = new be([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0])
, Eo = new be([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
, So = function(e, t) {
  for (var n = new rt(31), r = 0; r < 31; ++r)
      n[r] = t += 1 << e[r - 1];
  for (var i = new Oo(n[30]), r = 1; r < 30; ++r)
      for (var o = n[r]; o < n[r + 1]; ++o)
          i[o] = o - n[r] << 5 | r;
  return {
      b: n,
      r: i
  }
}
, Po = So(Tr, 2)
, Lr = Po.b
, va = Po.r;
Lr[28] = 258,
va[258] = 28;
var ya = So(kr, 0)
, xo = ya.b
, bn = new rt(32768);
for (Z = 0; Z < 32768; ++Z)
  He = (Z & 43690) >> 1 | (Z & 21845) << 1,
  He = (He & 52428) >> 2 | (He & 13107) << 2,
  He = (He & 61680) >> 4 | (He & 3855) << 4,
  bn[Z] = ((He & 65280) >> 8 | (He & 255) << 8) >> 1;
var He, Z, yt = function(e, t, n) {
  for (var r = e.length, i = 0, o = new rt(t); i < r; ++i)
      e[i] && ++o[e[i] - 1];
  var s = new rt(t);
  for (i = 1; i < t; ++i)
      s[i] = s[i - 1] + o[i - 1] << 1;
  var l;
  if (n) {
      l = new rt(1 << t);
      var a = 15 - t;
      for (i = 0; i < r; ++i)
          if (e[i])
              for (var u = i << 4 | e[i], d = t - e[i], c = s[e[i] - 1]++ << d, p = c | (1 << d) - 1; c <= p; ++c)
                  l[bn[c] >> a] = u
  } else
      for (l = new rt(r),
      i = 0; i < r; ++i)
          e[i] && (l[i] = bn[s[e[i] - 1]++] >> 15 - e[i]);
  return l
}, Jt = new be(288);
for (Z = 0; Z < 144; ++Z)
  Jt[Z] = 8;
var Z;
for (Z = 144; Z < 256; ++Z)
  Jt[Z] = 9;
var Z;
for (Z = 256; Z < 280; ++Z)
  Jt[Z] = 7;
var Z;
for (Z = 280; Z < 288; ++Z)
  Jt[Z] = 8;
var Z, To = new be(32);
for (Z = 0; Z < 32; ++Z)
  To[Z] = 5;
var Z, ko = yt(Jt, 9, 1), Lo = yt(To, 5, 1), hn = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
      e[n] > t && (t = e[n]);
  return t
}, Pe = function(e, t, n) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8) >> (t & 7) & n
}, mn = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7)
}, Ao = function(e) {
  return (e + 7) / 8 | 0
}, $n = function(e, t, n) {
  return (t == null || t < 0) && (t = 0),
  (n == null || n > e.length) && (n = e.length),
  new be(e.subarray(t, n))
}, Io = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], ge = function(e, t, n) {
  var r = new Error(t || Io[e]);
  if (r.code = e,
  Error.captureStackTrace && Error.captureStackTrace(r, ge),
  !n)
      throw r;
  return r
}, $o = function(e, t, n, r) {
  var i = e.length
    , o = r ? r.length : 0;
  if (!i || t.f && !t.l)
      return n || new be(0);
  var s = !n
    , l = s || t.i != 2
    , a = t.i;
  s && (n = new be(i * 3));
  var u = function(Re) {
      var qr = n.length;
      if (Re > qr) {
          var Gr = new be(Math.max(qr * 2, Re));
          Gr.set(n),
          n = Gr
      }
  }
    , d = t.f || 0
    , c = t.p || 0
    , p = t.b || 0
    , f = t.l
    , m = t.d
    , h = t.m
    , b = t.n
    , g = i * 8;
  do {
      if (!f) {
          d = Pe(e, c, 1);
          var v = Pe(e, c + 1, 3);
          if (c += 3,
          v)
              if (v == 1)
                  f = ko,
                  m = Lo,
                  h = 9,
                  b = 5;
              else if (v == 2) {
                  var _ = Pe(e, c, 31) + 257
                    , I = Pe(e, c + 10, 15) + 4
                    , D = _ + Pe(e, c + 5, 31) + 1;
                  c += 14;
                  for (var j = new be(D), F = new be(19), T = 0; T < I; ++T)
                      F[Eo[T]] = Pe(e, c + T * 3, 7);
                  c += I * 3;
                  for (var k = hn(F), J = (1 << k) - 1, R = yt(F, k, 1), T = 0; T < D; ) {
                      var W = R[Pe(e, c, J)];
                      c += W & 15;
                      var ee = W >> 4;
                      if (ee < 16)
                          j[T++] = ee;
                      else {
                          var te = 0
                            , X = 0;
                          for (ee == 16 ? (X = 3 + Pe(e, c, 3),
                          c += 2,
                          te = j[T - 1]) : ee == 17 ? (X = 3 + Pe(e, c, 7),
                          c += 3) : ee == 18 && (X = 11 + Pe(e, c, 127),
                          c += 7); X--; )
                              j[T++] = te
                      }
                  }
                  var ce = j.subarray(0, _)
                    , se = j.subarray(_);
                  h = hn(ce),
                  b = hn(se),
                  f = yt(ce, h, 1),
                  m = yt(se, b, 1)
              } else
                  ge(1);
          else {
              var ee = Ao(c) + 4
                , ye = e[ee - 4] | e[ee - 3] << 8
                , C = ee + ye;
              if (C > i) {
                  a && ge(0);
                  break
              }
              l && u(p + ye),
              n.set(e.subarray(ee, C), p),
              t.b = p += ye,
              t.p = c = C * 8,
              t.f = d;
              continue
          }
          if (c > g) {
              a && ge(0);
              break
          }
      }
      l && u(p + 131072);
      for (var w = (1 << h) - 1, E = (1 << b) - 1, B = c; ; B = c) {
          var te = f[mn(e, c) & w]
            , L = te >> 4;
          if (c += te & 15,
          c > g) {
              a && ge(0);
              break
          }
          if (te || ge(2),
          L < 256)
              n[p++] = L;
          else if (L == 256) {
              B = c,
              f = null;
              break
          } else {
              var U = L - 254;
              if (L > 264) {
                  var T = L - 257
                    , K = Tr[T];
                  U = Pe(e, c, (1 << K) - 1) + Lr[T],
                  c += K
              }
              var ne = m[mn(e, c) & E]
                , ae = ne >> 4;
              ne || ge(3),
              c += ne & 15;
              var se = xo[ae];
              if (ae > 3) {
                  var K = kr[ae];
                  se += mn(e, c) & (1 << K) - 1,
                  c += K
              }
              if (c > g) {
                  a && ge(0);
                  break
              }
              l && u(p + 131072);
              var ue = p + U;
              if (p < se) {
                  var pt = o - se
                    , et = Math.min(se, ue);
                  for (pt + p < 0 && ge(3); p < et; ++p)
                      n[p] = r[pt + p]
              }
              for (; p < ue; ++p)
                  n[p] = n[p - se]
          }
      }
      t.l = f,
      t.p = B,
      t.b = p,
      t.f = d,
      f && (d = 1,
      t.m = h,
      t.d = m,
      t.n = b)
  } while (!d);
  return p != n.length && s ? $n(n, 0, p) : n.subarray(0, p)
}, ga = new be(0), ba = function(e, t) {
  var n = {};
  for (var r in e)
      n[r] = e[r];
  for (var r in t)
      n[r] = t[r];
  return n
}, ci = function(e, t, n) {
  for (var r = e(), i = e.toString(), o = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(","), s = 0; s < r.length; ++s) {
      var l = r[s]
        , a = o[s];
      if (typeof l == "function") {
          t += ";" + a + "=";
          var u = l.toString();
          if (l.prototype)
              if (u.indexOf("[native code]") != -1) {
                  var d = u.indexOf(" ", 8) + 1;
                  t += u.slice(d, u.indexOf("(", d))
              } else {
                  t += u;
                  for (var c in l.prototype)
                      t += ";" + a + ".prototype." + c + "=" + l.prototype[c].toString()
              }
          else
              t += u
      } else
          n[a] = l
  }
  return t
}, an = [], _a = function(e) {
  var t = [];
  for (var n in e)
      e[n].buffer && t.push((e[n] = new e[n].constructor(e[n])).buffer);
  return t
}, wa = function(e, t, n, r) {
  if (!an[n]) {
      for (var i = "", o = {}, s = e.length - 1, l = 0; l < s; ++l)
          i = ci(e[l], i, o);
      an[n] = {
          c: ci(e[s], i, o),
          e: o
      }
  }
  var a = ba({}, an[n].e);
  return ma(an[n].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + t.toString() + "}", n, a, _a(a), r)
}, Ca = function() {
  return [be, rt, Oo, Tr, kr, Eo, Lr, xo, ko, Lo, bn, Io, yt, hn, Pe, mn, Ao, $n, ge, $o, Ar, Mo, No]
}, Mo = function(e) {
  return postMessage(e, [e.buffer])
}, No = function(e) {
  return e && {
      out: e.size && new be(e.size),
      dictionary: e.dictionary
  }
}, Oa = function(e, t, n, r, i, o) {
  var s = wa(n, r, i, function(l, a) {
      s.terminate(),
      o(l, a)
  });
  return s.postMessage([e, t], t.consume ? [e.buffer] : []),
  function() {
      s.terminate()
  }
}, Fe = function(e, t) {
  return e[t] | e[t + 1] << 8
}, Le = function(e, t) {
  return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
}, Kn = function(e, t) {
  return Le(e, t) + Le(e, t + 4) * 4294967296
};
function Ea(e, t, n) {
  return n || (n = t,
  t = {}),
  typeof n != "function" && ge(7),
  Oa(e, t, [Ca], function(r) {
      return Mo(Ar(r.data[0], No(r.data[1])))
  }, 1, n)
}
function Ar(e, t) {
  return $o(e, {
      i: 2
  }, t && t.out, t && t.dictionary)
}
var lr = typeof TextDecoder < "u" && new TextDecoder
, Sa = 0;
try {
  lr.decode(ga, {
      stream: !0
  }),
  Sa = 1
} catch {}
var Pa = function(e) {
  for (var t = "", n = 0; ; ) {
      var r = e[n++]
        , i = (r > 127) + (r > 223) + (r > 239);
      if (n + i > e.length)
          return {
              s: t,
              r: $n(e, n - 1)
          };
      i ? i == 3 ? (r = ((r & 15) << 18 | (e[n++] & 63) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) - 65536,
      t += String.fromCharCode(55296 | r >> 10, 56320 | r & 1023)) : i & 1 ? t += String.fromCharCode((r & 31) << 6 | e[n++] & 63) : t += String.fromCharCode((r & 15) << 12 | (e[n++] & 63) << 6 | e[n++] & 63) : t += String.fromCharCode(r)
  }
};
function Pt(e, t) {
  if (t) {
      for (var n = "", r = 0; r < e.length; r += 16384)
          n += String.fromCharCode.apply(null, e.subarray(r, r + 16384));
      return n
  } else {
      if (lr)
          return lr.decode(e);
      var i = Pa(e)
        , o = i.s
        , n = i.r;
      return n.length && ge(8),
      o
  }
}
var xa = function(e, t) {
  return t + 30 + Fe(e, t + 26) + Fe(e, t + 28)
}
, Ta = function(e, t, n) {
  var r = Fe(e, t + 28)
    , i = Pt(e.subarray(t + 46, t + 46 + r), !(Fe(e, t + 8) & 2048))
    , o = t + 46 + r
    , s = Le(e, t + 20)
    , l = n && s == 4294967295 ? ka(e, o) : [s, Le(e, t + 24), Le(e, t + 42)]
    , a = l[0]
    , u = l[1]
    , d = l[2];
  return [Fe(e, t + 10), a, u, i, o + Fe(e, t + 30) + Fe(e, t + 32), d]
}
, ka = function(e, t) {
  for (; Fe(e, t) != 1; t += 4 + Fe(e, t + 2))
      ;
  return [Kn(e, t + 12), Kn(e, t + 4), Kn(e, t + 20)]
}
, ui = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
  e()
}
;
function La(e, t, n) {
  n || (n = t,
  t = {}),
  typeof n != "function" && ge(7);
  var r = []
    , i = function() {
      for (var b = 0; b < r.length; ++b)
          r[b]()
  }
    , o = {}
    , s = function(b, g) {
      ui(function() {
          n(b, g)
      })
  };
  ui(function() {
      s = n
  });
  for (var l = e.length - 22; Le(e, l) != 101010256; --l)
      if (!l || e.length - l > 65558)
          return s(ge(13, 0, 1), null),
          i;
  var a = Fe(e, l + 8);
  if (a) {
      var u = a
        , d = Le(e, l + 16)
        , c = d == 4294967295 || u == 65535;
      if (c) {
          var p = Le(e, l - 12);
          c = Le(e, p) == 101075792,
          c && (u = a = Le(e, p + 32),
          d = Le(e, p + 48))
      }
      for (var f = t && t.filter, m = function(b) {
          var g = Ta(e, d, c)
            , v = g[0]
            , _ = g[1]
            , I = g[2]
            , D = g[3]
            , j = g[4]
            , F = g[5]
            , T = xa(e, F);
          d = j;
          var k = function(R, W) {
              R ? (i(),
              s(R, null)) : (W && (o[D] = W),
              --a || s(null, o))
          };
          if (!f || f({
              name: D,
              size: _,
              originalSize: I,
              compression: v
          }))
              if (!v)
                  k(null, $n(e, T, T + _));
              else if (v == 8) {
                  var J = e.subarray(T, T + _);
                  if (_ < 32e4)
                      try {
                          k(null, Ar(J, {
                              out: new be(I)
                          }))
                      } catch (R) {
                          k(R, null)
                      }
                  else
                      r.push(Ea(J, {
                          size: I
                      }, k))
              } else
                  k(ge(14, "unknown compression type " + v, 1), null);
          else
              k(null, null)
      }, h = 0; h < u; ++h)
          m(h)
  } else
      s(null, {});
  return i
}
function Aa(e) {
  return (Array.isArray(e) ? e : e.issues).reduce((t,n)=>{
      if (n.path) {
          let r = n.path.map(({key: i})=>i).join(".");
          t.nested[r] = [...t.nested[r] || [], n.message]
      } else
          t.root = [...t.root || [], n.message];
      return t
  }
  , {
      nested: {}
  })
}
var Ia = class extends Error {
  constructor(t) {
      super(t[0].message);
      x(this, "issues");
      this.name = "ValiError",
      this.issues = t
  }
}
;
function $a(e, t) {
  return {
      reason: e == null ? void 0 : e.reason,
      validation: t.validation,
      origin: (e == null ? void 0 : e.origin) || "value",
      message: t.message,
      input: t.input,
      abortEarly: e == null ? void 0 : e.abortEarly,
      abortPipeEarly: e == null ? void 0 : e.abortPipeEarly
  }
}
function Ma(e, t) {
  return {
      reason: t,
      origin: e == null ? void 0 : e.origin,
      abortEarly: e == null ? void 0 : e.abortEarly,
      abortPipeEarly: e == null ? void 0 : e.abortPipeEarly
  }
}
function Qe(e, t, n, r) {
  if (!t || !t.length)
      return {
          output: e
      };
  let i, o, s = e;
  for (let l of t) {
      let a = l(s);
      if (a.issue) {
          i = i || Ma(n, r);
          let u = $a(i, a.issue);
          if (o ? o.push(u) : o = [u],
          i.abortEarly || i.abortPipeEarly)
              break
      } else
          s = a.output
  }
  return o ? {
      issues: o
  } : {
      output: s
  }
}
function Me(e, t) {
  return !e || typeof e == "string" ? [e, t] : [void 0, e]
}
function Ue(e, t, n, r, i, o) {
  return {
      issues: [{
          reason: t,
          validation: n,
          origin: (e == null ? void 0 : e.origin) || "value",
          message: r,
          input: i,
          issues: o,
          abortEarly: e == null ? void 0 : e.abortEarly,
          abortPipeEarly: e == null ? void 0 : e.abortPipeEarly
      }]
  }
}
function Na(e=[]) {
  return {
      schema: "any",
      async: !1,
      _parse(t, n) {
          return Qe(t, e, n, "any")
      }
  }
}
function Dt(e, t, n) {
  let[r,i] = Me(t, n);
  return {
      schema: "array",
      array: {
          item: e
      },
      async: !1,
      _parse(o, s) {
          if (!Array.isArray(o))
              return Ue(s, "type", "array", r || "Invalid type", o);
          let l, a = [];
          for (let u = 0; u < o.length; u++) {
              let d = o[u]
                , c = e._parse(d, s);
              if (c.issues) {
                  let p = {
                      schema: "array",
                      input: o,
                      key: u,
                      value: d
                  };
                  for (let f of c.issues)
                      f.path ? f.path.unshift(p) : f.path = [p],
                      l == null || l.push(f);
                  if (l || (l = c.issues),
                  s != null && s.abortEarly)
                      break
              } else
                  a.push(c.output)
          }
          return l ? {
              issues: l
          } : Qe(a, i, s, "array")
      }
  }
}
function Yn(e, t) {
  let[n,r] = Me(e, t);
  return {
      schema: "boolean",
      async: !1,
      _parse(i, o) {
          return typeof i != "boolean" ? Ue(o, "type", "boolean", n || "Invalid type", i) : Qe(i, r, o, "boolean")
      }
  }
}
function di(e, t) {
  return {
      schema: "literal",
      literal: e,
      async: !1,
      _parse(n, r) {
          return n !== e ? Ue(r, "type", "literal", t || "Invalid type", n) : {
              output: n
          }
      }
  }
}
function ja(e, t) {
  return {
      schema: "native_enum",
      nativeEnum: e,
      async: !1,
      _parse(n, r) {
          return Object.values(e).includes(n) ? {
              output: n
          } : Ue(r, "type", "native_enum", t || "Invalid type", n)
      }
  }
}
function Ie(e, t) {
  let[n,r] = Me(e, t);
  return {
      schema: "number",
      async: !1,
      _parse(i, o) {
          return typeof i != "number" ? Ue(o, "type", "number", n || "Invalid type", i) : Qe(i, r, o, "number")
      }
  }
}
function Te(e, t, n) {
  let[r,i] = Me(t, n), o;
  return {
      schema: "object",
      object: e,
      async: !1,
      _parse(s, l) {
          if (!s || typeof s != "object")
              return Ue(l, "type", "object", r || "Invalid type", s);
          o = o || Object.entries(e);
          let a, u = {};
          for (let[d,c] of o) {
              let p = s[d]
                , f = c._parse(p, l);
              if (f.issues) {
                  let m = {
                      schema: "object",
                      input: s,
                      key: d,
                      value: p
                  };
                  for (let h of f.issues)
                      h.path ? h.path.unshift(m) : h.path = [m],
                      a == null || a.push(h);
                  if (a || (a = f.issues),
                  l != null && l.abortEarly)
                      break
              } else
                  u[d] = f.output
          }
          return a ? {
              issues: a
          } : Qe(u, i, l, "object")
      }
  }
}
function Q(e) {
  return {
      schema: "optional",
      wrapped: e,
      async: !1,
      _parse(t, n) {
          return t === void 0 ? {
              output: t
          } : e._parse(t, n)
      }
  }
}
function me(e, t) {
  let[n,r] = Me(e, t);
  return {
      schema: "string",
      async: !1,
      _parse(i, o) {
          return typeof i != "string" ? Ue(o, "type", "string", n || "Invalid type", i) : Qe(i, r, o, "string")
      }
  }
}
function Ra(e, t, n, r) {
  if (typeof t == "object" && !Array.isArray(t)) {
      let[s,l] = Me(n, r);
      return [e, t, s, l]
  }
  let[i,o] = Me(t, n);
  return [me(), e, i, o]
}
var Da = ["__proto__", "prototype", "constructor"];
function Fa(e, t, n, r) {
  let[i,o,s,l] = Ra(e, t, n, r);
  return {
      schema: "record",
      record: {
          key: i,
          value: o
      },
      async: !1,
      _parse(a, u) {
          if (!a || typeof a != "object")
              return Ue(u, "type", "record", s || "Invalid type", a);
          let d, c = {};
          for (let[p,f] of Object.entries(a))
              if (!Da.includes(p)) {
                  let m, h = i._parse(p, {
                      origin: "key",
                      abortEarly: u == null ? void 0 : u.abortEarly,
                      abortPipeEarly: u == null ? void 0 : u.abortPipeEarly
                  });
                  if (h.issues) {
                      m = {
                          schema: "record",
                          input: a,
                          key: p,
                          value: f
                      };
                      for (let g of h.issues)
                          g.path = [m],
                          d == null || d.push(g);
                      if (d || (d = h.issues),
                      u != null && u.abortEarly)
                          break
                  }
                  let b = o._parse(f, u);
                  if (b.issues) {
                      m = m || {
                          schema: "record",
                          input: a,
                          key: p,
                          value: f
                      };
                      for (let g of b.issues)
                          g.path ? g.path.unshift(m) : g.path = [m],
                          d == null || d.push(g);
                      if (d || (d = b.issues),
                      u != null && u.abortEarly)
                          break
                  }
                  !h.issues && !b.issues && (c[h.output] = b.output)
              }
          return d ? {
              issues: d
          } : Qe(c, l, u, "record")
      }
  }
}
function Ba(e, t, n) {
  if (typeof e == "object" && !Array.isArray(e)) {
      let[o,s] = Me(t, n);
      return [e, o, s]
  }
  let[r,i] = Me(e, t);
  return [void 0, r, i]
}
function pi(e, t, n, r) {
  let[i,o,s] = Ba(t, n, r);
  return {
      schema: "tuple",
      tuple: {
          items: e,
          rest: i
      },
      async: !1,
      _parse(l, a) {
          if (!Array.isArray(l) || !i && e.length !== l.length || i && e.length > l.length)
              return Ue(a, "type", "tuple", o || "Invalid type", l);
          let u, d = [];
          for (let c = 0; c < e.length; c++) {
              let p = l[c]
                , f = e[c]._parse(p, a);
              if (f.issues) {
                  let m = {
                      schema: "tuple",
                      input: l,
                      key: c,
                      value: p
                  };
                  for (let h of f.issues)
                      h.path ? h.path.unshift(m) : h.path = [m],
                      u == null || u.push(h);
                  if (u || (u = f.issues),
                  a != null && a.abortEarly)
                      break
              } else
                  d[c] = f.output
          }
          if (i)
              for (let c = e.length; c < l.length; c++) {
                  let p = l[c]
                    , f = i._parse(p, a);
                  if (f.issues) {
                      let m = {
                          schema: "tuple",
                          input: l,
                          key: c,
                          value: p
                      };
                      for (let h of f.issues)
                          h.path ? h.path.unshift(m) : h.path = [m],
                          u == null || u.push(h);
                      if (u || (u = f.issues),
                      a != null && a.abortEarly)
                          break
                  } else
                      d[c] = f.output
              }
          return u ? {
              issues: u
          } : Qe(d, s, a, "tuple")
      }
  }
}
function cr(e, t) {
  return {
      schema: "union",
      union: e,
      async: !1,
      _parse(n, r) {
          let i, o;
          for (let s of e) {
              let l = s._parse(n, r);
              if (l.issues)
                  if (i)
                      for (let a of l.issues)
                          i.push(a);
                  else
                      i = l.issues;
              else {
                  o = [l.output];
                  break
              }
          }
          return o ? {
              output: o[0]
          } : Ue(r, "type", "union", t || "Invalid type", n, i)
      }
  }
}
function Kt(e, t, n) {
  let[r,i] = Me(t, n);
  return Te(e.reduce((o,s)=>({
      ...o,
      ...s.object
  }), {}), r, i)
}
function za(e, t, n, r) {
  let[i,o] = Me(n, r);
  return Te(Object.entries(e.object).reduce((s,[l,a])=>t.includes(l) ? s : {
      ...s,
      [l]: a
  }, {}), i, o)
}
function Ua(e, t, n) {
  let r = e._parse(t, n);
  return r.issues ? {
      success: !1,
      error: new Ia(r.issues),
      issues: r.issues
  } : {
      success: !0,
      data: r.output,
      output: r.output
  }
}
function ur(e, t) {
  return n=>n > e ? {
      issue: {
          validation: "max_value",
          message: t || "Invalid value",
          input: n
      }
  } : {
      output: n
  }
}
function dr(e, t) {
  return n=>n < e ? {
      issue: {
          validation: "min_value",
          message: t || "Invalid value",
          input: n
      }
  } : {
      output: n
  }
}
var Ha = Object.create
, Ir = Object.defineProperty
, Wa = Object.getOwnPropertyDescriptor
, jo = Object.getOwnPropertyNames
, Va = Object.getPrototypeOf
, qa = Object.prototype.hasOwnProperty
, Ga = (e,t,n)=>t in e ? Ir(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n
, Yt = (e,t)=>function() {
  return t || (0,
  e[jo(e)[0]])((t = {
      exports: {}
  }).exports, t),
  t.exports
}
, Ja = (e,t,n,r)=>{
  if (t && typeof t == "object" || typeof t == "function")
      for (let i of jo(t))
          !qa.call(e, i) && i !== n && Ir(e, i, {
              get: ()=>t[i],
              enumerable: !(r = Wa(t, i)) || r.enumerable
          });
  return e
}
, Ka = (e,t,n)=>(n = e != null ? Ha(Va(e)) : {},
Ja(t || !e || !e.__esModule ? Ir(n, "default", {
  value: e,
  enumerable: !0
}) : n, e))
, Ya = (e,t,n)=>(Ga(e, typeof t != "symbol" ? t + "" : t, n),
n)
, Za = Yt({
  "../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.copy = void 0;
      var t = (n,r,i=0,o=0,s=n.width - i,l=n.height - o,a=0,u=0)=>{
          if (i = i | 0,
          o = o | 0,
          s = s | 0,
          l = l | 0,
          a = a | 0,
          u = u | 0,
          s <= 0 || l <= 0)
              return;
          let d = new Uint32Array(n.data.buffer)
            , c = new Uint32Array(r.data.buffer);
          for (let p = 0; p < l; p++) {
              let f = o + p;
              if (f < 0 || f >= n.height)
                  continue;
              let m = u + p;
              if (!(m < 0 || m >= r.height))
                  for (let h = 0; h < s; h++) {
                      let b = i + h;
                      if (b < 0 || b >= n.width)
                          continue;
                      let g = a + h;
                      if (g < 0 || g >= r.width)
                          continue;
                      let v = f * n.width + b
                        , _ = m * r.width + g;
                      c[_] = d[v]
                  }
          }
      }
      ;
      e.copy = t
  }
})
, Xa = Yt({
  "../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.CreateImageFactory = (t=[0, 0, 0, 0],n=4)=>{
          if (n = Math.floor(n),
          isNaN(n) || n < 1)
              throw TypeError("channels should be a positive non-zero number");
          if (!("length"in t) || t.length < n)
              throw TypeError(`fill should be iterable with at least ${n} members`);
          t = new Uint8ClampedArray(t).slice(0, n);
          let r = t.every(i=>i === 0);
          return (i,o,s)=>{
              if (i === void 0 || o === void 0)
                  throw TypeError("Not enough arguments");
              if (i = Math.floor(i),
              o = Math.floor(o),
              isNaN(i) || i < 1 || isNaN(o) || o < 1)
                  throw TypeError("Index or size is negative or greater than the allowed amount");
              let l = i * o * n;
              if (s === void 0 && (s = new Uint8ClampedArray(l)),
              s instanceof Uint8ClampedArray) {
                  if (s.length !== l)
                      throw TypeError("Index or size is negative or greater than the allowed amount");
                  if (!r)
                      for (let a = 0; a < o; a++)
                          for (let u = 0; u < i; u++) {
                              let d = (a * i + u) * n;
                              for (let c = 0; c < n; c++)
                                  s[d + c] = t[c]
                          }
                  return {
                      get width() {
                          return i
                      },
                      get height() {
                          return o
                      },
                      get data() {
                          return s
                      }
                  }
              }
              throw TypeError("Expected data to be Uint8ClampedArray or undefined")
          }
      }
      ,
      e.createImage = e.CreateImageFactory()
  }
})
, Qa = Yt({
  "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.filters = void 0;
      var t = 14
        , n = (o,s)=>{
          if (o <= -s || o >= s || o == 0)
              return 0;
          let l = o * Math.PI;
          return Math.sin(l) / l * Math.sin(l / s) / (l / s)
      }
        , r = o=>Math.round(o * ((1 << t) - 1))
        , i = (o,s,l,a,u)=>{
          let d = u ? 2 : 3
            , c = 1 / l
            , p = Math.min(1, l)
            , f = d / p
            , m = Math.floor((f + 1) * 2)
            , h = new Int16Array((m + 2) * s)
            , b = 0;
          for (let g = 0; g < s; g++) {
              let v = (g + .5) * c + a
                , _ = Math.max(0, Math.floor(v - f))
                , I = Math.min(o - 1, Math.ceil(v + f))
                , D = I - _ + 1
                , j = new Float32Array(D)
                , F = new Int16Array(D)
                , T = 0
                , k = 0;
              for (let X = _; X <= I; X++) {
                  let ce = n((X + .5 - v) * p, d);
                  T += ce,
                  j[k] = ce,
                  k++
              }
              let J = 0;
              for (let X = 0; X < j.length; X++) {
                  let ce = j[X] / T;
                  J += ce,
                  F[X] = r(ce)
              }
              F[s >> 1] += r(1 - J);
              let R = 0;
              for (; R < F.length && F[R] === 0; )
                  R++;
              let W = F.length - 1;
              for (; W > 0 && F[W] === 0; )
                  W--;
              let ee = _ + R
                , te = W - R + 1;
              h[b++] = ee,
              h[b++] = te,
              h.set(F.subarray(R, W + 1), b),
              b += te
          }
          return h
      }
      ;
      e.filters = i
  }
})
, el = Yt({
  "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.convolve = void 0;
      var t = 14
        , n = (r,i,o,s,l,a)=>{
          let u = 0
            , d = 0;
          for (let c = 0; c < s; c++) {
              let p = 0;
              for (let f = 0; f < l; f++) {
                  let m = a[p++]
                    , h = u + m * 4 | 0
                    , b = 0
                    , g = 0
                    , v = 0
                    , _ = 0;
                  for (let I = a[p++]; I > 0; I--) {
                      let D = a[p++];
                      b = b + D * r[h] | 0,
                      g = g + D * r[h + 1] | 0,
                      v = v + D * r[h + 2] | 0,
                      _ = _ + D * r[h + 3] | 0,
                      h = h + 4 | 0
                  }
                  i[d] = b + 8192 >> t,
                  i[d + 1] = g + 8192 >> t,
                  i[d + 2] = v + 8192 >> t,
                  i[d + 3] = _ + 8192 >> t,
                  d = d + s * 4 | 0
              }
              d = (c + 1) * 4 | 0,
              u = (c + 1) * o * 4 | 0
          }
      }
      ;
      e.convolve = n
  }
})
, tl = Yt({
  "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.lanczos2 = e.lanczos = void 0;
      var t = Za()
        , n = Xa()
        , r = Qa()
        , i = el()
        , o = (a,u,d=!1)=>{
          let c = u.width / a.width
            , p = u.height / a.height
            , f = r.filters(a.width, u.width, c, 0, d)
            , m = r.filters(a.height, u.height, p, 0, d)
            , h = new Uint8ClampedArray(u.width * a.height * 4);
          i.convolve(a.data, h, a.width, a.height, u.width, f),
          i.convolve(h, u.data, a.height, u.width, u.height, m)
      }
        , s = (a,u,d=0,c=0,p=a.width - d,f=a.height - c,m=0,h=0,b=u.width - m,g=u.height - h)=>{
          if (d = d | 0,
          c = c | 0,
          p = p | 0,
          f = f | 0,
          m = m | 0,
          h = h | 0,
          b = b | 0,
          g = g | 0,
          p <= 0 || f <= 0 || b <= 0 || g <= 0)
              return;
          if (d === 0 && c === 0 && p === a.width && f === a.height && m === 0 && h === 0 && b === u.width && g === u.height) {
              o(a, u);
              return
          }
          let v = n.createImage(p, f)
            , _ = n.createImage(b, g);
          t.copy(a, v, d, c),
          o(v, _),
          t.copy(_, u, 0, 0, _.width, _.height, m, h)
      }
      ;
      e.lanczos = s;
      var l = (a,u,d=0,c=0,p=a.width - d,f=a.height - c,m=0,h=0,b=u.width - m,g=u.height - h)=>{
          if (d = d | 0,
          c = c | 0,
          p = p | 0,
          f = f | 0,
          m = m | 0,
          h = h | 0,
          b = b | 0,
          g = g | 0,
          p <= 0 || f <= 0 || b <= 0 || g <= 0)
              return;
          if (d === 0 && c === 0 && p === a.width && f === a.height && m === 0 && h === 0 && b === u.width && g === u.height) {
              o(a, u, !0);
              return
          }
          let v = n.createImage(p, f)
            , _ = n.createImage(b, g);
          t.copy(a, v, d, c),
          o(v, _, !0),
          t.copy(_, u, 0, 0, _.width, _.height, m, h)
      }
      ;
      e.lanczos2 = l
  }
})
, Ro = (e=>(e.Bounce = "bounce",
e.Normal = "normal",
e))(Ro || {})
, nl = ja(Ro)
, Do = Te({
  autoplay: Q(Yn()),
  defaultTheme: Q(me()),
  direction: Q(cr([di(1), di(-1)])),
  hover: Q(Yn()),
  id: me(),
  intermission: Q(Ie()),
  loop: Q(cr([Yn(), Ie()])),
  playMode: Q(nl),
  speed: Q(Ie()),
  themeColor: Q(me())
})
, rl = Te({
  animations: Dt(me()),
  id: me()
})
, il = Te({
  activeAnimationId: Q(me()),
  animations: Dt(Do),
  author: Q(me()),
  custom: Q(Fa(me(), Na())),
  description: Q(me()),
  generator: Q(me()),
  keywords: Q(me()),
  revision: Q(Ie()),
  themes: Q(Dt(rl)),
  states: Q(Dt(me())),
  version: Q(me())
})
, Fo = za(Do, ["id"])
, lt = Te({
  state: me()
})
, ol = lt
, sl = Kt([lt, Te({
  ms: Ie()
})])
, al = Kt([lt, Te({
  count: Ie()
})])
, ll = lt
, cl = lt
, ul = lt
, dl = Kt([lt, Te({
  threshold: Q(Dt(Ie([dr(0), ur(1)])))
})])
, pl = Te({
  onAfter: Q(sl),
  onClick: Q(ol),
  onComplete: Q(ul),
  onEnter: Q(al),
  onMouseEnter: Q(ll),
  onMouseLeave: Q(cl),
  onShow: Q(dl)
})
, fl = Kt([Fo, Te({
  playOnScroll: Q(pi([Ie([dr(0), ur(1)]), Ie([dr(0), ur(1)])])),
  segments: Q(cr([pi([Ie(), Ie()]), me()]))
})]);
Kt([pl, Te({
  animationId: Q(me()),
  playbackSettings: fl
})]);
var hl = {
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  bmp: "image/bmp",
  svg: "image/svg+xml",
  webp: "image/webp",
  mpeg: "audio/mpeg",
  mp3: "audio/mp3"
}
, fi = {
  jpeg: [255, 216, 255],
  png: [137, 80, 78, 71, 13, 10, 26, 10],
  gif: [71, 73, 70],
  bmp: [66, 77],
  webp: [82, 73, 70, 70, 87, 69, 66, 80],
  svg: [60, 63, 120],
  mp3: [73, 68, 51, 3, 0, 0, 0, 0],
  mpeg: [73, 68, 51, 3, 0, 0, 0, 0]
}
, ml = e=>{
  let t = null
    , n = [];
  if (!e)
      return null;
  let r = e.substring(e.indexOf(",") + 1);
  typeof window > "u" ? t = Buffer.from(r, "base64").toString("binary") : t = atob(r);
  let i = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o += 1)
      i[o] = t.charCodeAt(o);
  n = Array.from(i.subarray(0, 8));
  for (let o in fi) {
      let s = fi[o];
      if (s && n.every((l,a)=>l === s[a]))
          return hl[o]
  }
  return null
}
, $r = class extends Error {
  constructor(e, t) {
      super(e),
      Ya(this, "code"),
      this.name = "[dotlottie-js]",
      this.code = t
  }
}
;
function Bo(e) {
  let t;
  if (typeof window > "u")
      t = Buffer.from(e).toString("base64");
  else {
      let n = Array.prototype.map.call(e, r=>String.fromCharCode(r)).join("");
      t = window.btoa(n)
  }
  return `data:${ml(t)};base64,${t}`
}
function hi(e) {
  return "w"in e && "h"in e && !("xt"in e) && "p"in e
}
function pr(e) {
  return !("h"in e) && !("w"in e) && "p"in e && "e"in e && "u"in e && "id"in e
}
async function Zt(e, t=()=>!0) {
  if (!(e instanceof Uint8Array))
      throw new $r("DotLottie not found","INVALID_DOTLOTTIE");
  return await new Promise((n,r)=>{
      La(e, {
          filter: t
      }, (i,o)=>{
          i && r(i),
          n(o)
      }
      )
  }
  )
}
async function Mr(e, t, n) {
  if (!(e instanceof Uint8Array))
      throw new $r("DotLottie not found","INVALID_DOTLOTTIE");
  return (await Zt(e, r=>r.name === t && (!n || n(r))))[t]
}
async function fr(e) {
  let t = "manifest.json"
    , n = (await Zt(e, r=>r.name === t))[t];
  if (!(typeof n > "u"))
      return JSON.parse(Pt(n, !1))
}
async function vl(e) {
  if (!(e instanceof Uint8Array))
      return {
          success: !1,
          error: "DotLottie not found"
      };
  let t = await fr(e);
  if (typeof t > "u")
      return {
          success: !1,
          error: "Invalid .lottie file, manifest.json is missing"
      };
  let n = Ua(il, t);
  return n.success ? {
      success: !0
  } : {
      success: !1,
      error: `Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(Aa(n.error).nested, null, 2)}`
  }
}
async function mi(e) {
  let t = new Uint8Array(e)
    , n = await vl(t);
  if (n.error)
      throw new $r(n.error,"INVALID_DOTLOTTIE");
  return t
}
async function yl(e, t) {
  let n = await Zt(e, i=>{
      let o = i.name.replace("audio/", "");
      return i.name.startsWith("audio/") && (!t || t({
          ...i,
          name: o
      }))
  }
  )
    , r = {};
  for (let i in n) {
      let o = n[i];
      if (o instanceof Uint8Array) {
          let s = i.replace("audio/", "");
          r[s] = Bo(o)
      }
  }
  return r
}
async function gl(e, t) {
  var n;
  let r = new Map;
  for (let[o,s] of Object.entries(t))
      for (let l of s.assets || [])
          if (pr(l)) {
              let a = l.p;
              r.has(a) || r.set(a, new Set),
              (n = r.get(a)) == null || n.add(o)
          }
  let i = await yl(e, o=>r.has(o.name));
  for (let[o,s] of r) {
      let l = i[o];
      if (l)
          for (let a of s) {
              let u = t[a];
              for (let d of (u == null ? void 0 : u.assets) || [])
                  pr(d) && d.p === o && (d.p = l,
                  d.u = "",
                  d.e = 1)
          }
  }
}
async function bl(e, t) {
  let n = await Zt(e, i=>{
      let o = i.name.replace("images/", "");
      return i.name.startsWith("images/") && (!t || t({
          ...i,
          name: o
      }))
  }
  )
    , r = {};
  for (let i in n) {
      let o = n[i];
      if (o instanceof Uint8Array) {
          let s = i.replace("images/", "");
          r[s] = Bo(o)
      }
  }
  return r
}
async function _l(e, t) {
  var n;
  let r = new Map;
  for (let[o,s] of Object.entries(t))
      for (let l of s.assets || [])
          if (hi(l)) {
              let a = l.p;
              r.has(a) || r.set(a, new Set),
              (n = r.get(a)) == null || n.add(o)
          }
  let i = await bl(e, o=>r.has(o.name));
  for (let[o,s] of r) {
      let l = i[o];
      if (l)
          for (let a of s) {
              let u = t[a];
              for (let d of (u == null ? void 0 : u.assets) || [])
                  hi(d) && d.p === o && (d.p = l,
                  d.u = "",
                  d.e = 1)
          }
  }
}
async function wl(e, t, {inlineAssets: n}={}, r) {
  let i = `animations/${t}.json`
    , o = await Mr(e, i, r);
  if (typeof o > "u")
      return;
  let s = JSON.parse(Pt(o, !1));
  if (!n)
      return s;
  let l = {
      [t]: s
  };
  return await _l(e, l),
  await gl(e, l),
  s
}
async function Cl(e, t, n) {
  let r = `themes/${t}.json`
    , i = await Mr(e, r, n);
  if (!(typeof i > "u"))
      return JSON.parse(Pt(i, !1))
}
async function Ol(e, t) {
  let n = {}
    , r = await Zt(e, i=>{
      let o = i.name.replace("states/", "").replace(".json", "");
      return i.name.startsWith("states/") && (!t || t({
          ...i,
          name: o
      }))
  }
  );
  for (let i in r) {
      let o = r[i];
      if (o instanceof Uint8Array) {
          let s = i.replace("states/", "").replace(".json", "");
          n[s] = Pt(o, !1)
      }
  }
  return n
}
async function El(e, t, n) {
  let r = `states/${t}.json`
    , i = await Mr(e, r, n);
  return typeof i > "u" ? void 0 : JSON.parse(Pt(i, !1))
}
Ka(tl());
function Y(e, t="dotLottie-common") {
  return new Error(`[${t}]: ${e}`)
}
function ft(e, t="dotLottie-common", ...n) {
  console.error(`[${t}]:`, e, ...n)
}
function ie(e, t="dotLottie-common", ...n) {
  console.warn(`[${t}]:`, e, ...n)
}
function Sl(e="") {
  let t = e.trim()
    , n = t.lastIndexOf("/")
    , r = t.substring(n + 1)
    , i = r.indexOf(".");
  return i !== -1 ? r.substring(0, i) : r
}
function _n(e) {
  return ["v", "ip", "op", "layers", "fr", "w", "h"].every(t=>Object.prototype.hasOwnProperty.call(e, t))
}
function Pl(e) {
  let t = e.assets;
  return t ? t.some(n=>pr(n)) : !1
}
function xl(e) {
  try {
      let t = JSON.parse(e);
      return _n(t)
  } catch {
      return !1
  }
}
function Lp(e, t) {
  let n = Object.keys(e).find(r=>e[r] === t);
  if (n === void 0)
      throw new Error("Value not found in the object.");
  return n
}
function Zn(e) {
  return JSON.parse(JSON.stringify(e))
}
var Tl = class {
  constructor() {
      x(this, "_dotLottie");
      x(this, "_animationsMap", new Map);
      x(this, "_themeMap", new Map);
      x(this, "_stateMachinesMap", new Map);
      x(this, "_manifest")
  }
  get dotLottie() {
      return this._dotLottie
  }
  get animationsMap() {
      return this._animationsMap
  }
  get themeMap() {
      return this._themeMap
  }
  get stateMachinesMap() {
      return this._stateMachinesMap
  }
  get manifest() {
      return this._manifest
  }
  async loadFromUrl(e) {
      let t = await fetch(e, {
          method: "GET",
          mode: "cors"
      });
      if (!t.ok)
          throw new Error(`Failed to load dotLottie from ${e} with status ${t.status}`);
      let n = t.headers.get("content-type");
      if (n != null && n.includes("application/json")) {
          let r = await t.json();
          if (!_n(r))
              throw new Error(`Invalid lottie JSON at ${e}`);
          let i = Sl(e);
          this._animationsMap.set(i, r);
          let o = {
              activeAnimationId: i,
              animations: [{
                  id: i
              }]
          };
          this._manifest = o
      } else {
          this._dotLottie = await mi(await t.arrayBuffer());
          let r = await fr(this._dotLottie);
          if (!r)
              throw new Error("Manifest not found");
          this._manifest = r
      }
  }
  loadFromLottieJSON(e) {
      if (!_n(e))
          throw new Error("Invalid lottie JSON");
      let t = "my-animation";
      this._animationsMap.set(t, e);
      let n = {
          activeAnimationId: t,
          animations: [{
              id: t
          }]
      };
      this._manifest = n
  }
  async loadFromArrayBuffer(e) {
      this._dotLottie = await mi(e);
      let t = await fr(this._dotLottie);
      if (!t)
          throw new Error("Manifest not found");
      this._manifest = t
  }
  async getAnimation(e) {
      if (this._animationsMap.get(e))
          return this._animationsMap.get(e);
      if (!this._dotLottie)
          return;
      let t = await wl(this._dotLottie, e, {
          inlineAssets: !0
      });
      return t && this._animationsMap.set(e, t),
      t
  }
  async getTheme(e) {
      if (this._themeMap.get(e))
          return this._themeMap.get(e);
      if (!this._dotLottie)
          return;
      let t = await Cl(this._dotLottie, e);
      return t && this._themeMap.set(e, t),
      t
  }
  async getStateMachines() {
      if (!this._dotLottie)
          return;
      let e = await Ol(this._dotLottie);
      for (let t in e)
          if (t) {
              let n = e[t];
              if (n) {
                  let r = JSON.parse(n);
                  if (r) {
                      let i = r.descriptor.id;
                      this._stateMachinesMap.get(i) || this._stateMachinesMap.set(i, r)
                  }
              }
          }
      return Array.from(this._stateMachinesMap.values())
  }
  async getStateMachine(e) {
      if (this._stateMachinesMap.get(e))
          return this._stateMachinesMap.get(e);
      if (!this._dotLottie)
          return;
      let t = await El(this._dotLottie, e);
      return t && this._stateMachinesMap.set(t.descriptor.id, t),
      t
  }
}
;
function Mn() {
  throw new Error("Cycle detected")
}
function Nr() {
  if (gt > 1)
      gt--;
  else {
      for (var e, t = !1; Ft !== void 0; ) {
          var n = Ft;
          for (Ft = void 0,
          hr++; n !== void 0; ) {
              var r = n.o;
              if (n.o = void 0,
              n.f &= -3,
              !(8 & n.f) && Uo(n))
                  try {
                      n.c()
                  } catch (i) {
                      t || (e = i,
                      t = !0)
                  }
              n = r
          }
      }
      if (hr = 0,
      gt--,
      t)
          throw e
  }
}
var le = void 0
, Ft = void 0
, gt = 0
, hr = 0
, wn = 0;
function zo(e) {
  if (le !== void 0) {
      var t = e.n;
      if (t === void 0 || t.t !== le)
          return t = {
              i: 0,
              S: e,
              p: le.s,
              n: void 0,
              t: le,
              e: void 0,
              x: void 0,
              r: t
          },
          le.s !== void 0 && (le.s.n = t),
          le.s = t,
          e.n = t,
          32 & le.f && e.S(t),
          t;
      if (t.i === -1)
          return t.i = 0,
          t.n !== void 0 && (t.n.p = t.p,
          t.p !== void 0 && (t.p.n = t.n),
          t.p = le.s,
          t.n = void 0,
          le.s.n = t,
          le.s = t),
          t
  }
}
function Oe(e) {
  this.v = e,
  this.i = 0,
  this.n = void 0,
  this.t = void 0
}
Oe.prototype.h = function() {
  return !0
}
;
Oe.prototype.S = function(e) {
  this.t !== e && e.e === void 0 && (e.x = this.t,
  this.t !== void 0 && (this.t.e = e),
  this.t = e)
}
;
Oe.prototype.U = function(e) {
  if (this.t !== void 0) {
      var t = e.e
        , n = e.x;
      t !== void 0 && (t.x = n,
      e.e = void 0),
      n !== void 0 && (n.e = t,
      e.x = void 0),
      e === this.t && (this.t = n)
  }
}
;
Oe.prototype.subscribe = function(e) {
  var t = this;
  return Al(function() {
      var n = t.value
        , r = 32 & this.f;
      this.f &= -33;
      try {
          e(n)
      } finally {
          this.f |= r
      }
  })
}
;
Oe.prototype.valueOf = function() {
  return this.value
}
;
Oe.prototype.toString = function() {
  return this.value + ""
}
;
Oe.prototype.toJSON = function() {
  return this.value
}
;
Oe.prototype.peek = function() {
  return this.v
}
;
Object.defineProperty(Oe.prototype, "value", {
  get: function() {
      var e = zo(this);
      return e !== void 0 && (e.i = this.i),
      this.v
  },
  set: function(e) {
      if (le instanceof ct && function() {
          throw new Error("Computed cannot have side-effects")
      }(),
      e !== this.v) {
          hr > 100 && Mn(),
          this.v = e,
          this.i++,
          wn++,
          gt++;
          try {
              for (var t = this.t; t !== void 0; t = t.x)
                  t.t.N()
          } finally {
              Nr()
          }
      }
  }
});
function kl(e) {
  return new Oe(e)
}
function Uo(e) {
  for (var t = e.s; t !== void 0; t = t.n)
      if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
          return !0;
  return !1
}
function Ho(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
      var n = t.S.n;
      if (n !== void 0 && (t.r = n),
      t.S.n = t,
      t.i = -1,
      t.n === void 0) {
          e.s = t;
          break
      }
  }
}
function Wo(e) {
  for (var t = e.s, n = void 0; t !== void 0; ) {
      var r = t.p;
      t.i === -1 ? (t.S.U(t),
      r !== void 0 && (r.n = t.n),
      t.n !== void 0 && (t.n.p = r)) : n = t,
      t.S.n = t.r,
      t.r !== void 0 && (t.r = void 0),
      t = r
  }
  e.s = n
}
function ct(e) {
  Oe.call(this, void 0),
  this.x = e,
  this.s = void 0,
  this.g = wn - 1,
  this.f = 4
}
(ct.prototype = new Oe).h = function() {
  if (this.f &= -3,
  1 & this.f)
      return !1;
  if ((36 & this.f) == 32 || (this.f &= -5,
  this.g === wn))
      return !0;
  if (this.g = wn,
  this.f |= 1,
  this.i > 0 && !Uo(this))
      return this.f &= -2,
      !0;
  var e = le;
  try {
      Ho(this),
      le = this;
      var t = this.x();
      (16 & this.f || this.v !== t || this.i === 0) && (this.v = t,
      this.f &= -17,
      this.i++)
  } catch (n) {
      this.v = n,
      this.f |= 16,
      this.i++
  }
  return le = e,
  Wo(this),
  this.f &= -2,
  !0
}
;
ct.prototype.S = function(e) {
  if (this.t === void 0) {
      this.f |= 36;
      for (var t = this.s; t !== void 0; t = t.n)
          t.S.S(t)
  }
  Oe.prototype.S.call(this, e)
}
;
ct.prototype.U = function(e) {
  if (this.t !== void 0 && (Oe.prototype.U.call(this, e),
  this.t === void 0)) {
      this.f &= -33;
      for (var t = this.s; t !== void 0; t = t.n)
          t.S.U(t)
  }
}
;
ct.prototype.N = function() {
  if (!(2 & this.f)) {
      this.f |= 6;
      for (var e = this.t; e !== void 0; e = e.x)
          e.t.N()
  }
}
;
ct.prototype.peek = function() {
  if (this.h() || Mn(),
  16 & this.f)
      throw this.v;
  return this.v
}
;
Object.defineProperty(ct.prototype, "value", {
  get: function() {
      1 & this.f && Mn();
      var e = zo(this);
      if (this.h(),
      e !== void 0 && (e.i = this.i),
      16 & this.f)
          throw this.v;
      return this.v
  }
});
function Vo(e) {
  var t = e.u;
  if (e.u = void 0,
  typeof t == "function") {
      gt++;
      var n = le;
      le = void 0;
      try {
          t()
      } catch (r) {
          throw e.f &= -2,
          e.f |= 8,
          jr(e),
          r
      } finally {
          le = n,
          Nr()
      }
  }
}
function jr(e) {
  for (var t = e.s; t !== void 0; t = t.n)
      t.S.U(t);
  e.x = void 0,
  e.s = void 0,
  Vo(e)
}
function Ll(e) {
  if (le !== this)
      throw new Error("Out-of-order effect");
  Wo(this),
  le = e,
  this.f &= -2,
  8 & this.f && jr(this),
  Nr()
}
function Xt(e) {
  this.x = e,
  this.u = void 0,
  this.s = void 0,
  this.o = void 0,
  this.f = 32
}
Xt.prototype.c = function() {
  var e = this.S();
  try {
      if (8 & this.f || this.x === void 0)
          return;
      var t = this.x();
      typeof t == "function" && (this.u = t)
  } finally {
      e()
  }
}
;
Xt.prototype.S = function() {
  1 & this.f && Mn(),
  this.f |= 1,
  this.f &= -9,
  Vo(this),
  Ho(this),
  gt++;
  var e = le;
  return le = this,
  Ll.bind(this, e)
}
;
Xt.prototype.N = function() {
  2 & this.f || (this.f |= 2,
  this.o = Ft,
  Ft = this)
}
;
Xt.prototype.d = function() {
  this.f |= 8,
  1 & this.f || jr(this)
}
;
function Al(e) {
  var t = new Xt(e);
  try {
      t.c()
  } catch (n) {
      throw t.d(),
      n
  }
  return t.d.bind(t)
}
var Il = class {
  constructor(e) {
      x(this, "_state");
      x(this, "_prevState");
      this._prevState = e,
      this._state = kl(e)
  }
  setState(e) {
      this._prevState = this._state.value,
      this._state.value = e
  }
  subscribe(e) {
      return this._state.subscribe(t=>e(t, this._prevState))
  }
}
;
async function $l(e, t) {
  let[{DotLottieStateMachineManager: n}] = await Promise.all([We(()=>import("./dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-KR-9kfls.js"), __vite__mapDeps([0, 1, 2]))]);
  if (!e.length)
      throw Y("No state machines available inside this .lottie!");
  return new n(e,t)
}
var Ml = {
  name: "@dotlottie/common",
  version: "0.7.11",
  type: "module",
  description: "",
  author: "Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",
  license: "MIT",
  engines: {
      node: ">18.0.0"
  },
  module: "dist/index.js",
  main: "dist/index.js",
  types: "dist/index.d.ts",
  files: ["dist"],
  keywords: [],
  scripts: {
      build: "tsup",
      dev: "tsup --watch",
      lint: "eslint .",
      "type-check": "tsc --noEmit"
  },
  dependencies: {
      "@dotlottie/dotlottie-js": "^0.7.0",
      "@preact/signals-core": "^1.2.3",
      howler: "^2.2.3",
      "lottie-web": "^5.12.2",
      xstate: "^4.38.1"
  },
  devDependencies: {
      "@lottiefiles/lottie-types": "^1.2.0",
      "@types/howler": "^2.2.8",
      tsup: "^7.2.0",
      typescript: "^4.7.4"
  },
  publishConfig: {
      access: "public"
  }
}
, qe = (e=>(e.Complete = "complete",
e.DataFail = "data_fail",
e.DataReady = "data_ready",
e.Error = "error",
e.Frame = "frame",
e.Freeze = "freeze",
e.LoopComplete = "loopComplete",
e.Pause = "pause",
e.Play = "play",
e.Ready = "ready",
e.Stop = "stop",
e.VisibilityChange = "visibilityChange",
e))(qe || {})
, vt = (e=>(e.Completed = "completed",
e.Error = "error",
e.Fetching = "fetching",
e.Frozen = "frozen",
e.Initial = "initial",
e.Loading = "loading",
e.Paused = "paused",
e.Playing = "playing",
e.Ready = "ready",
e.Stopped = "stopped",
e))(vt || {})
, qo = (e=>(e.Bounce = "bounce",
e.Normal = "normal",
e))(qo || {})
, Se = {
  autoplay: !1,
  direction: 1,
  hover: !1,
  intermission: 0,
  loop: !1,
  playMode: "normal",
  speed: 1,
  defaultTheme: ""
}
, Go = {
  activeStateId: "",
  autoplay: !1,
  currentState: "initial",
  frame: 0,
  seeker: 0,
  direction: 1,
  hover: !1,
  loop: !1,
  playMode: "normal",
  speed: 1,
  background: "transparent",
  intermission: 0,
  currentAnimationId: void 0,
  visibilityPercentage: 0
}
, vi = class {
  constructor(e, t, n) {
      x(this, "_lottie");
      x(this, "_src");
      x(this, "_animationConfig");
      x(this, "_prevUserPlaybackOptions", {});
      x(this, "_userPlaybackOptions");
      x(this, "_hover", !1);
      x(this, "_loop", !1);
      x(this, "_counter", 0);
      x(this, "_intermission", 0);
      x(this, "_counterInterval", null);
      x(this, "_container", null);
      x(this, "_name");
      x(this, "_mode", "normal");
      x(this, "_background", "transparent");
      x(this, "_animation");
      x(this, "_defaultTheme");
      x(this, "_activeAnimationId");
      x(this, "_currentAnimationId");
      x(this, "_testId");
      x(this, "_listeners", new Map);
      x(this, "_currentState", "initial");
      x(this, "_stateBeforeFreeze", "initial");
      x(this, "state", new Il(Go));
      x(this, "_light", !1);
      x(this, "_worker", !1);
      x(this, "_dotLottieLoader", new Tl);
      x(this, "_activeStateId");
      x(this, "_inInteractiveMode", !1);
      x(this, "_scrollTicking", !1);
      x(this, "_scrollCallback");
      x(this, "_onShowIntersectionObserver");
      x(this, "_visibilityPercentage", 0);
      x(this, "_audios", []);
      x(this, "_stateMachineManager");
      typeof e == "string" ? this._src = e : this._src = Zn(e),
      n != null && n.testId && (this._testId = n.testId),
      this._defaultTheme = (n == null ? void 0 : n.defaultTheme) || "",
      this._userPlaybackOptions = this._validatePlaybackOptions(n || {}),
      typeof (n == null ? void 0 : n.activeAnimationId) == "string" && (this._activeAnimationId = n.activeAnimationId),
      this._container = t || null,
      typeof (n == null ? void 0 : n.background) == "string" && this.setBackground(n.background),
      typeof (n == null ? void 0 : n.activeStateId) < "u" && (this._activeStateId = n.activeStateId);
      let {rendererSettings: r, ...i} = n || {};
      this._animationConfig = {
          loop: !1,
          autoplay: !1,
          renderer: "svg",
          rendererSettings: {
              clearCanvas: !0,
              progressiveLoad: !0,
              hideOnTransparent: !0,
              filterSize: {
                  width: "200%",
                  height: "200%",
                  x: "-50%",
                  y: "-50%"
              },
              ...r
          },
          ...i
      },
      n != null && n.light && (this._light = n.light),
      n != null && n.worker && (this._worker = n.worker),
      this._listenToHover(),
      this._listenToVisibilityChange()
  }
  _listenToHover() {
      var e, t, n, r;
      let i = ()=>{
          this._hover && this.currentState !== "playing" && this.play()
      }
        , o = ()=>{
          this._hover && this.currentState === "playing" && this.stop()
      }
      ;
      (e = this._container) == null || e.removeEventListener("mouseenter", i),
      (t = this._container) == null || t.removeEventListener("mouseleave", o),
      (n = this._container) == null || n.addEventListener("mouseleave", o),
      (r = this._container) == null || r.addEventListener("mouseenter", i)
  }
  _onVisibilityChange() {
      !this._lottie || typeof document > "u" || (document.hidden && this.currentState === "playing" ? this.freeze() : this.currentState === "frozen" && this.unfreeze())
  }
  _listenToVisibilityChange() {
      typeof document < "u" && typeof document.hidden < "u" && document.addEventListener("visibilitychange", ()=>this._onVisibilityChange())
  }
  _getOption(e) {
      var t;
      if (typeof this._userPlaybackOptions[e] < "u")
          return this._userPlaybackOptions[e];
      let n = (t = this._dotLottieLoader.manifest) == null ? void 0 : t.animations.find(r=>r.id === this._currentAnimationId);
      return n && typeof n[e] < "u" ? n[e] : Se[e]
  }
  _getPlaybackOptions() {
      let e = {};
      for (let t in Se)
          typeof Se[t] < "u" && (e[t] = this._getOption(t));
      return e
  }
  _setPlayerState(e) {
      var t, n, r;
      let i = e(this._getPlaybackOptions());
      try {
          Fo._parse(i)
      } catch {
          ie(`Invalid PlaybackOptions, ${JSON.stringify(i, null, 2)}`);
          return
      }
      typeof i.defaultTheme < "u" && (this._defaultTheme = i.defaultTheme),
      typeof i.playMode < "u" && (this._mode = i.playMode),
      typeof i.intermission < "u" && (this._intermission = i.intermission),
      typeof i.hover < "u" && (this._hover = i.hover),
      typeof i.loop < "u" && (this.clearCountTimer(),
      this._loop = i.loop,
      this._counter = 0,
      (t = this._lottie) == null || t.setLoop(typeof i.loop == "number" ? !0 : i.loop)),
      typeof i.speed < "u" && ((n = this._lottie) == null || n.setSpeed(i.speed)),
      typeof i.autoplay < "u" && this._lottie && (this._lottie.autoplay = i.autoplay),
      typeof i.direction < "u" && ((r = this._lottie) == null || r.setDirection(i.direction))
  }
  _getOptionsFromAnimation(e) {
      let {id: t, ...n} = e;
      return {
          ...Se,
          ...n
      }
  }
  _updateTestData() {
      !this._testId || !this._lottie || (window.dotLottiePlayer || (window.dotLottiePlayer = {
          [this._testId]: {}
      }),
      window.dotLottiePlayer[this._testId] = {
          direction: this._lottie.playDirection,
          currentState: this._currentState,
          loop: this.loop,
          mode: this._mode,
          speed: this._lottie.playSpeed
      })
  }
  setContainer(e) {
      e !== this._container && (this._container = e,
      this.setBackground(this._background),
      this._listenToHover())
  }
  get currentState() {
      return this._currentState
  }
  clearCountTimer() {
      this._counterInterval && clearInterval(this._counterInterval)
  }
  setCurrentState(e) {
      this._currentState = e,
      this._notify(),
      this._updateTestData()
  }
  static isPathJSON(e) {
      var t;
      return ((t = e.split(".").pop()) == null ? void 0 : t.toLowerCase()) === "json"
  }
  get src() {
      return this._src
  }
  updateSrc(e) {
      this._src !== e && (typeof e == "string" ? this._src = e : this._src = Zn(e),
      this._activeAnimationId = void 0,
      this._currentAnimationId = void 0,
      this.load())
  }
  get intermission() {
      return this._intermission
  }
  get hover() {
      return this._hover
  }
  setHover(e) {
      typeof e == "boolean" && (this._hover = e,
      this._userPlaybackOptions.hover = e,
      this._notify())
  }
  setIntermission(e) {
      this._intermission = e,
      this._userPlaybackOptions.intermission = e,
      this._notify()
  }
  get mode() {
      return this._mode
  }
  get animations() {
      return this._dotLottieLoader.animationsMap
  }
  get themes() {
      return this._dotLottieLoader.themeMap
  }
  setMode(e) {
      typeof e == "string" && (this._mode = e,
      this._userPlaybackOptions.playMode = e,
      this._setPlayerState(()=>({
          playMode: e
      })),
      this._notify(),
      this._updateTestData())
  }
  get container() {
      if (this._container)
          return this._container
  }
  goToAndPlay(e, t, n) {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("goToAndPlay() Can't use whilst loading.");
          return
      }
      this._lottie.goToAndPlay(e, t, n),
      this.setCurrentState("playing")
  }
  goToAndStop(e, t, n) {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("goToAndStop() Can't use whilst loading.");
          return
      }
      this._lottie.goToAndStop(e, t, n),
      this.setCurrentState("stopped")
  }
  seek(e) {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("seek() Can't use whilst loading.");
          return
      }
      let t = e;
      typeof t == "number" && (t = Math.round(t));
      let n = /^(\d+)(%?)$/u.exec(t.toString());
      if (!n)
          return;
      let r = n[2] === "%" ? this.totalFrames * Number(n[1]) / 100 : n[1];
      r !== void 0 && (this._lottie.goToAndPlay(r, !0),
      this.currentState === "playing" ? this.play() : this.currentState === "frozen" ? this.freeze() : this.pause())
  }
  _areNumbersInRange(e, t) {
      return e >= 0 && e <= 1 && t >= 0 && t <= 1
  }
  _updatePosition(e, t, n) {
      let[r,i] = e ?? [0, this.totalFrames - 1]
        , [o,s] = t ?? [0, 1];
      if (!this._areNumbersInRange(o, s)) {
          ft("threshold values must be between 0 and 1");
          return
      }
      if (this.container) {
          let {height: l, top: a} = this.container.getBoundingClientRect()
            , u = window.innerHeight - a
            , d = window.innerHeight + l
            , c = u / d
            , p = r + Math.round((c - o) / (s - o) * (i - r));
          n && n(c),
          this.goToAndStop(p, !0),
          (p >= i || c >= s) && this._handleAnimationComplete()
      }
      this._scrollTicking = !1
  }
  _requestTick(e, t, n) {
      this._scrollTicking || (requestAnimationFrame(()=>this._updatePosition(e, t, n)),
      this._scrollTicking = !0)
  }
  playOnScroll(e) {
      this.stop(),
      this._scrollCallback && this.stopPlayOnScroll(),
      this._scrollCallback = ()=>this._requestTick(e == null ? void 0 : e.segments, e == null ? void 0 : e.threshold, e == null ? void 0 : e.positionCallback),
      window.addEventListener("scroll", this._scrollCallback)
  }
  stopPlayOnScroll() {
      this._scrollCallback && (window.removeEventListener("scroll", this._scrollCallback),
      this._scrollCallback = void 0)
  }
  stopPlayOnShow() {
      this._onShowIntersectionObserver && (this._onShowIntersectionObserver.disconnect(),
      this._onShowIntersectionObserver = void 0)
  }
  addIntersectionObserver(e) {
      if (!this.container)
          throw Y("Can't play on show, player container element not available.");
      let t = {
          root: null,
          rootMargin: "0px",
          threshold: e != null && e.threshold ? e.threshold : [0, 1]
      }
        , n = r=>{
          r.forEach(i=>{
              var o, s;
              this._visibilityPercentage = i.intersectionRatio * 100,
              i.isIntersecting ? (e != null && e.callbackOnIntersect && e.callbackOnIntersect(this._visibilityPercentage),
              (o = this._container) == null || o.dispatchEvent(new Event("visibilityChange"))) : e != null && e.callbackOnIntersect && (e.callbackOnIntersect(0),
              (s = this._container) == null || s.dispatchEvent(new Event("visibilityChange")))
          }
          )
      }
      ;
      this._onShowIntersectionObserver = new IntersectionObserver(n,t),
      this._onShowIntersectionObserver.observe(this.container)
  }
  playOnShow(e) {
      var t;
      if (this.stop(),
      !this.container)
          throw Y("Can't play on show, player container element not available.");
      this._onShowIntersectionObserver && this.stopPlayOnShow(),
      this.addIntersectionObserver({
          threshold: (t = e == null ? void 0 : e.threshold) != null ? t : [],
          callbackOnIntersect: n=>{
              n === 0 ? this.pause() : this.play()
          }
      })
  }
  _validatePlaybackOptions(e) {
      if (!e)
          return {};
      let t = {};
      for (let[n,r] of Object.entries(e))
          switch (n) {
          case "autoplay":
              typeof r == "boolean" && (t.autoplay = r);
              break;
          case "direction":
              typeof r == "number" && [1, -1].includes(r) && (t.direction = r);
              break;
          case "loop":
              (typeof r == "boolean" || typeof r == "number") && (t.loop = r);
              break;
          case "playMode":
              typeof r == "string" && ["normal", "bounce"].includes(r) && (t.playMode = r);
              break;
          case "speed":
              typeof r == "number" && (t.speed = r);
              break;
          case "themeColor":
              typeof r == "string" && (t.themeColor = r);
              break;
          case "hover":
              typeof r == "boolean" && (t.hover = r);
              break;
          case "intermission":
              typeof r == "number" && (t.intermission = r);
              break;
          case "defaultTheme":
              typeof r == "string" && (t.defaultTheme = r);
              break
          }
      return this._requireValidPlaybackOptions(t),
      t
  }
  _requireAnimationsInTheManifest() {
      var e;
      if (!((e = this._dotLottieLoader.manifest) != null && e.animations.length))
          throw Y("No animations found in manifest.")
  }
  _requireAnimationsToBeLoaded() {
      if (this._dotLottieLoader.animationsMap.size === 0)
          throw Y("No animations have been loaded.")
  }
  async play(e, t) {
      var n, r;
      if (["initial", "loading"].includes(this._currentState)) {
          ie("Player unable to play whilst loading.");
          return
      }
      if (this._requireAnimationsInTheManifest(),
      this._requireAnimationsToBeLoaded(),
      this._lottie && !e) {
          this._lottie.playDirection === -1 && this._lottie.currentFrame === 0 ? this._lottie.goToAndPlay(this._lottie.totalFrames, !0) : this._lottie.play(),
          this.setCurrentState("playing");
          return
      }
      if (typeof e == "number") {
          let i = (n = this._dotLottieLoader.manifest) == null ? void 0 : n.animations[e];
          if (!i)
              throw Y("animation not found.");
          typeof t == "function" ? await this.render({
              id: i.id,
              ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
          }) : await this.render({
              id: i.id
          })
      }
      if (typeof e == "string") {
          let i = (r = this._dotLottieLoader.manifest) == null ? void 0 : r.animations.find(o=>o.id === e);
          if (!i)
              throw Y("animation not found.");
          typeof t == "function" ? await this.render({
              id: i.id,
              ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(i))
          }) : await this.render({
              id: i.id
          })
      }
  }
  playSegments(e, t) {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("playSegments() Can't use whilst loading.");
          return
      }
      this._lottie.playSegments(e, t),
      this.setCurrentState("playing")
  }
  resetSegments(e) {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("resetSegments() Can't use whilst loading.");
          return
      }
      this._lottie.resetSegments(e)
  }
  togglePlay() {
      this.currentState === "playing" ? this.pause() : this.play()
  }
  _getAnimationByIdOrIndex(e) {
      var t, n;
      if (this._requireAnimationsInTheManifest(),
      this._requireAnimationsToBeLoaded(),
      typeof e == "number") {
          let r = (t = this._dotLottieLoader.manifest) == null ? void 0 : t.animations[e];
          if (!r)
              throw Y("animation not found.");
          return r
      }
      if (typeof e == "string") {
          let r = (n = this._dotLottieLoader.manifest) == null ? void 0 : n.animations.find(i=>i.id === e);
          if (!r)
              throw Y("animation not found.");
          return r
      }
      throw Y("first param must be a number or string")
  }
  get activeAnimationId() {
      return this._getActiveAnimationId()
  }
  get currentAnimationId() {
      return this._currentAnimationId
  }
  get activeStateId() {
      return this._activeStateId
  }
  async _startInteractivity(e) {
      if (!this._inInteractiveMode) {
          ft("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");
          return
      }
      if (this._dotLottieLoader.stateMachinesMap.size === 0 && await this._dotLottieLoader.getStateMachines(),
      this._dotLottieLoader.stateMachinesMap.size === 0)
          throw Y("No interactivity states are available.");
      if (e === "undefined")
          throw Y("stateId is not specified.");
      this._stateMachineManager || (this._stateMachineManager = await $l(Array.from(this._dotLottieLoader.stateMachinesMap.values()), this)),
      this._stateMachineManager.start(e)
  }
  enterInteractiveMode(e) {
      var t;
      if (e)
          this._inInteractiveMode || (this._prevUserPlaybackOptions = {
              ...this._userPlaybackOptions
          }),
          this._inInteractiveMode && ((t = this._stateMachineManager) == null || t.stop()),
          this._activeStateId = e,
          this._inInteractiveMode = !0,
          this._startInteractivity(e);
      else
          throw Y("stateId must be a non-empty string.")
  }
  exitInteractiveMode() {
      var e;
      this._inInteractiveMode && (this._inInteractiveMode = !1,
      this._activeStateId = "",
      (e = this._stateMachineManager) == null || e.stop(),
      this._userPlaybackOptions = {},
      this._userPlaybackOptions = {
          ...this._prevUserPlaybackOptions
      },
      this._prevUserPlaybackOptions = {},
      this.reset())
  }
  reset() {
      var e;
      let t = this._getActiveAnimationId()
        , n = (e = this._dotLottieLoader.manifest) == null ? void 0 : e.animations.find(r=>r.id === t);
      if (this._inInteractiveMode && this.exitInteractiveMode(),
      !n)
          throw Y("animation not found.");
      this.play(t)
  }
  previous(e) {
      if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length)
          throw Y("manifest not found.");
      if (this._inInteractiveMode) {
          ie("previous() is not supported in interactive mode.");
          return
      }
      let t = this._dotLottieLoader.manifest.animations.findIndex(r=>r.id === this._currentAnimationId);
      if (t === -1)
          throw Y("animation not found.");
      let n = this._dotLottieLoader.manifest.animations[(t - 1 + this._dotLottieLoader.manifest.animations.length) % this._dotLottieLoader.manifest.animations.length];
      if (!n || !n.id)
          throw Y("animation not found.");
      typeof e == "function" ? this.render({
          id: n.id,
          ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(n))
      }) : this.render({
          id: n.id
      })
  }
  next(e) {
      if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length)
          throw Y("manifest not found.");
      if (this._inInteractiveMode) {
          ie("next() is not supported in interactive mode.");
          return
      }
      let t = this._dotLottieLoader.manifest.animations.findIndex(r=>r.id === this._currentAnimationId);
      if (t === -1)
          throw Y("animation not found.");
      let n = this._dotLottieLoader.manifest.animations[(t + 1) % this._dotLottieLoader.manifest.animations.length];
      if (!n || !n.id)
          throw Y("animation not found.");
      typeof e == "function" ? this.render({
          id: n.id,
          ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(n))
      }) : this.render({
          id: n.id
      })
  }
  getManifest() {
      return this._dotLottieLoader.manifest
  }
  resize() {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("resize() Can't use whilst loading.");
          return
      }
      this._lottie.resize()
  }
  stop() {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("stop() Can't use whilst loading.");
          return
      }
      this.clearCountTimer(),
      this._counter = 0,
      this._setPlayerState(()=>({
          direction: this._getOption("direction")
      })),
      this._lottie.stop(),
      this.setCurrentState("stopped")
  }
  pause() {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("pause() Can't use whilst loading.");
          return
      }
      this.clearCountTimer(),
      this._lottie.pause(),
      this.setCurrentState("paused")
  }
  freeze() {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("freeze() Can't use whilst loading.");
          return
      }
      this.currentState !== "frozen" && (this._stateBeforeFreeze = this.currentState),
      this._lottie.pause(),
      this.setCurrentState("frozen")
  }
  unfreeze() {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("unfreeze() Can't use whilst loading.");
          return
      }
      this._stateBeforeFreeze === "playing" ? this.play() : this.pause()
  }
  destroy() {
      var e, t;
      (e = this._container) != null && e.__lottie && (this._container.__lottie.destroy(),
      this._container.__lottie = null),
      this._audios.length && (this._audios.forEach(n=>{
          n.unload()
      }
      ),
      this._audios = []),
      this.clearCountTimer(),
      typeof document < "u" && document.removeEventListener("visibilitychange", ()=>this._onVisibilityChange()),
      this._counter = 0,
      (t = this._lottie) == null || t.destroy(),
      this._lottie = void 0
  }
  getAnimationInstance() {
      return this._lottie
  }
  static getLottieWebVersion() {
      return `${Ml.dependencies["lottie-web"]}`
  }
  addEventListener(e, t) {
      var n, r, i;
      this._listeners.has(e) || this._listeners.set(e, new Set),
      (n = this._listeners.get(e)) == null || n.add(t);
      try {
          e === "complete" ? (r = this._container) == null || r.addEventListener(e, t) : (i = this._lottie) == null || i.addEventListener(e, t)
      } catch (o) {
          ft(`addEventListener ${o}`)
      }
  }
  getState() {
      var e, t, n, r, i, o, s;
      return {
          autoplay: (t = (e = this._lottie) == null ? void 0 : e.autoplay) != null ? t : !1,
          currentState: this._currentState,
          frame: this._frame,
          visibilityPercentage: this._visibilityPercentage,
          seeker: this._seeker,
          direction: (r = (n = this._lottie) == null ? void 0 : n.playDirection) != null ? r : 1,
          hover: this._hover,
          loop: this._loop || !1,
          playMode: this._mode,
          speed: (o = (i = this._lottie) == null ? void 0 : i.playSpeed) != null ? o : 1,
          background: this._background,
          intermission: this._intermission,
          defaultTheme: this._defaultTheme,
          currentAnimationId: this._currentAnimationId,
          activeStateId: (s = this._activeStateId) != null ? s : ""
      }
  }
  _notify() {
      this.state.setState(this.getState())
  }
  get totalFrames() {
      var e;
      return ((e = this._lottie) == null ? void 0 : e.totalFrames) || 0
  }
  get direction() {
      return this._lottie ? this._lottie.playDirection : 1
  }
  setDirection(e) {
      this._requireValidDirection(e),
      this._setPlayerState(()=>({
          direction: e
      })),
      this._userPlaybackOptions.direction = e
  }
  get speed() {
      var e;
      return ((e = this._lottie) == null ? void 0 : e.playSpeed) || 1
  }
  setSpeed(e) {
      this._requireValidSpeed(e),
      this._setPlayerState(()=>({
          speed: e
      })),
      this._userPlaybackOptions.speed = e
  }
  get autoplay() {
      var e, t;
      return (t = (e = this._lottie) == null ? void 0 : e.autoplay) != null ? t : !1
  }
  setAutoplay(e) {
      if (this._requireValidAutoplay(e),
      !this._lottie || ["loading"].includes(this._currentState)) {
          ie("setAutoplay() Can't use whilst loading.");
          return
      }
      this._setPlayerState(()=>({
          autoplay: e
      })),
      this._userPlaybackOptions.autoplay = e
  }
  toggleAutoplay() {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("toggleAutoplay() Can't use whilst loading.");
          return
      }
      this.setAutoplay(!this._lottie.autoplay)
  }
  get defaultTheme() {
      return this._defaultTheme
  }
  setDefaultTheme(e) {
      this._setPlayerState(()=>({
          defaultTheme: e
      })),
      this._userPlaybackOptions.defaultTheme = e,
      this._animation && this.render()
  }
  get loop() {
      return this._loop
  }
  setLoop(e) {
      this._requireValidLoop(e),
      this._setPlayerState(()=>({
          loop: e
      })),
      this._userPlaybackOptions.loop = e
  }
  toggleLoop() {
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("toggleLoop() Can't use whilst loading.");
          return
      }
      this.setLoop(!this._loop)
  }
  get background() {
      return this._background
  }
  setBackground(e) {
      this._requireValidBackground(e),
      this._background = e,
      this._container && (this._container.style.backgroundColor = e)
  }
  get _frame() {
      return this._lottie ? this.currentState === "completed" ? this.direction === -1 ? 0 : this._lottie.totalFrames : this._lottie.currentFrame : 0
  }
  get _seeker() {
      return this._lottie ? this._frame / this._lottie.totalFrames * 100 : 0
  }
  async revertToManifestValues(e) {
      var t;
      let n;
      !Array.isArray(e) || e.length === 0 ? n = ["autoplay", "defaultTheme", "direction", "hover", "intermission", "loop", "playMode", "speed", "activeAnimationId"] : n = e;
      let r = !1;
      if (n.includes("activeAnimationId")) {
          let i = (t = this._dotLottieLoader.manifest) == null ? void 0 : t.activeAnimationId
            , o = this._getAnimationByIdOrIndex(i || 0);
          this._activeAnimationId = i,
          await this._setCurrentAnimation(o.id),
          r = !0
      }
      n.forEach(i=>{
          switch (i) {
          case "autoplay":
              delete this._userPlaybackOptions.autoplay,
              this.setAutoplay(this._getOption("autoplay"));
              break;
          case "defaultTheme":
              delete this._userPlaybackOptions.defaultTheme,
              this.setDefaultTheme(this._getOption("defaultTheme"));
              break;
          case "direction":
              delete this._userPlaybackOptions.direction,
              this.setDirection(this._getOption("direction"));
              break;
          case "hover":
              delete this._userPlaybackOptions.hover,
              this.setHover(this._getOption("hover"));
              break;
          case "intermission":
              delete this._userPlaybackOptions.intermission,
              this.setIntermission(this._getOption("intermission"));
              break;
          case "loop":
              delete this._userPlaybackOptions.loop,
              this.setLoop(this._getOption("loop"));
              break;
          case "playMode":
              delete this._userPlaybackOptions.playMode,
              this.setMode(this._getOption("playMode")),
              this.setDirection(this._getOption("direction"));
              break;
          case "speed":
              delete this._userPlaybackOptions.speed,
              this.setSpeed(this._getOption("speed"));
              break
          }
      }
      ),
      r && this.render()
  }
  removeEventListener(e, t) {
      var n, r, i;
      try {
          e === "complete" ? (n = this._container) == null || n.removeEventListener(e, t) : (r = this._lottie) == null || r.removeEventListener(e, t),
          (i = this._listeners.get(e)) == null || i.delete(t)
      } catch (o) {
          ft("removeEventListener", o)
      }
  }
  _handleAnimationComplete() {
      var e;
      typeof this._loop == "number" && this.stop();
      let t = this.direction === -1 ? 0 : this.totalFrames - 1;
      this.goToAndStop(t, !0),
      this._counter = 0,
      this.clearCountTimer(),
      this.setCurrentState("completed"),
      (e = this._container) == null || e.dispatchEvent(new Event("complete"))
  }
  addEventListeners() {
      var e;
      if (!this._lottie || ["loading"].includes(this._currentState)) {
          ie("addEventListeners() Can't use whilst loading.");
          return
      }
      this._lottie.addEventListener("enterFrame", ()=>{
          var t;
          if (!this._lottie) {
              ie("enterFrame event : Lottie is undefined.");
              return
          }
          Math.floor(this._lottie.currentFrame) === 0 && this.direction === -1 && ((t = this._container) == null || t.dispatchEvent(new Event("complete")),
          this.loop || this.setCurrentState("completed")),
          this._notify()
      }
      ),
      this._lottie.addEventListener("loopComplete", ()=>{
          var t;
          if (!this._lottie) {
              ie("loopComplete event : Lottie is undefined.");
              return
          }
          (t = this._container) == null || t.dispatchEvent(new Event("loopComplete")),
          this.intermission > 0 && this.pause();
          let n = this._lottie.playDirection;
          if (typeof this._loop == "number" && this._loop > 0 && (this._counter += this._mode === "bounce" ? .5 : 1,
          this._counter >= this._loop)) {
              this._handleAnimationComplete();
              return
          }
          this._mode === "bounce" && typeof n == "number" && (n = Number(n) * -1);
          let r = n === -1 ? this._lottie.totalFrames - 1 : 0;
          this.intermission ? (this.goToAndPlay(r, !0),
          this.pause(),
          this._counterInterval = window.setTimeout(()=>{
              this._lottie && (this._setPlayerState(()=>({
                  direction: n
              })),
              this.goToAndPlay(r, !0))
          }
          , this._intermission)) : (this._setPlayerState(()=>({
              direction: n
          })),
          this.goToAndPlay(n === -1 ? this.totalFrames - 1 : 0, !0))
      }
      ),
      this._lottie.addEventListener("complete", ()=>{
          if (this._lottie && this._loop === !1 && this._mode === "bounce") {
              if (this._counter += .5,
              this._counter >= 1) {
                  this._handleAnimationComplete();
                  return
              }
              this._counterInterval = window.setTimeout(()=>{
                  if (!this._lottie)
                      return;
                  let t = this._lottie.playDirection;
                  this._mode === "bounce" && typeof t == "number" && (t = Number(t) * -1);
                  let n = t === -1 ? this.totalFrames - 1 : 0;
                  this._setPlayerState(()=>({
                      direction: t
                  })),
                  this.goToAndPlay(n, !0)
              }
              , this._intermission)
          } else
              this._handleAnimationComplete()
      }
      );
      for (let[t,n] of this._listeners)
          if (t === "complete")
              for (let r of n)
                  (e = this._container) == null || e.addEventListener(t, r);
          else
              for (let r of n)
                  this._lottie.addEventListener(t, r)
  }
  async _setCurrentAnimation(e) {
      this._currentState = "loading";
      let t = await this._dotLottieLoader.getAnimation(e);
      this._currentAnimationId = e,
      this._animation = t,
      this._currentState = "ready"
  }
  async _getAudioFactory() {
      if (this._animation && Pl(this._animation)) {
          let {DotLottieAudio: e} = await We(()=>import("./dotlottie-audio-75C54RUV-C4ThZgkY.js"), __vite__mapDeps([3, 4]));
          return t=>{
              let n = new e({
                  src: [t]
              });
              return this._audios.push(n),
              n
          }
      }
      return null
  }
  async render(e) {
      var t, n, r, i, o, s, l, a, u, d, c, p, f, m, h, b, g, v;
      if (e != null && e.id)
          await this._setCurrentAnimation(e.id);
      else if (!this._animation)
          throw Y("no animation selected");
      let _ = (t = Se.loop) != null ? t : !1
        , I = (n = Se.autoplay) != null ? n : !1
        , D = (r = Se.playMode) != null ? r : "normal"
        , j = (i = Se.intermission) != null ? i : 0
        , F = (o = Se.hover) != null ? o : !1
        , T = (s = Se.direction) != null ? s : 1
        , k = (l = Se.speed) != null ? l : 1
        , J = (a = Se.defaultTheme) != null ? a : "";
      _ = (u = e == null ? void 0 : e.loop) != null ? u : this._getOption("loop"),
      I = (d = e == null ? void 0 : e.autoplay) != null ? d : this._getOption("autoplay"),
      D = (c = e == null ? void 0 : e.playMode) != null ? c : this._getOption("playMode"),
      j = (p = e == null ? void 0 : e.intermission) != null ? p : this._getOption("intermission"),
      F = (f = e == null ? void 0 : e.hover) != null ? f : this._getOption("hover"),
      T = (m = e == null ? void 0 : e.direction) != null ? m : this._getOption("direction"),
      k = (h = e == null ? void 0 : e.speed) != null ? h : this._getOption("speed"),
      J = (b = e == null ? void 0 : e.defaultTheme) != null ? b : this._getOption("defaultTheme");
      let R = {
          ...this._animationConfig,
          autoplay: F ? !1 : I,
          loop: typeof _ == "number" ? !0 : _,
          renderer: this._worker ? "svg" : (g = this._animationConfig.renderer) != null ? g : "svg"
      }
        , [W,ee,te] = await Promise.all([this._dotLottieLoader.getTheme(J), this._getLottiePlayerInstance(), this._getAudioFactory()]);
      if (W && this._animation ? (this._animation = Zn(this._animation),
      this._animation.slots = W) : this._animation = await this._dotLottieLoader.getAnimation((v = this._currentAnimationId) != null ? v : ""),
      this._activeStateId && !this._inInteractiveMode) {
          this.enterInteractiveMode(this._activeStateId);
          return
      }
      this.destroy(),
      this._setPlayerState(()=>({
          defaultTheme: J,
          playMode: D,
          intermission: j,
          hover: F,
          loop: _
      })),
      te ? this._lottie = ee.loadAnimation({
          ...R,
          container: this._container,
          animationData: this._animation,
          audioFactory: te
      }) : this._lottie = ee.loadAnimation({
          ...R,
          container: this._container,
          animationData: this._animation
      }),
      typeof this._lottie.resetSegments > "u" && (this._lottie.resetSegments = ()=>{
          var X;
          (X = this._lottie) == null || X.playSegments([0, this._lottie.totalFrames], !0)
      }
      ),
      this.addEventListeners(),
      this._container && (this._container.__lottie = this._lottie),
      this._setPlayerState(()=>({
          direction: T,
          speed: k
      })),
      I && !F && (_ === !1 && T === -1 ? this.play() : this.setCurrentState("playing")),
      this._updateTestData()
  }
  async _getLottiePlayerInstance() {
      var e;
      let t = (e = this._animationConfig.renderer) != null ? e : "svg", n;
      if (this._worker)
          return t !== "svg" && ie("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),
          n = await We(()=>import("./lottie_worker-Q23FJ6ZR-YP5OKMTN-Dl7j5H7l.js"), __vite__mapDeps([5, 4])),
          n.default;
      switch (t) {
      case "svg":
          {
              this._light ? n = await We(()=>import("./lottie_light-KMJEUZFY-TNG7ODX7-Cz6KFPKl.js"), __vite__mapDeps([6, 4])) : n = await We(()=>import("./lottie_svg-MJGYILXD-NRTSROOT-Ci_7qTj4.js"), __vite__mapDeps([7, 4]));
              break
          }
      case "canvas":
          {
              this._light ? n = await We(()=>import("./lottie_light_canvas-B5UTTNXA-PRI6IBWW-CV9yTcpO.js"), __vite__mapDeps([8, 4])) : n = await We(()=>import("./lottie_canvas-CDSUBMCL-MZNYH5VV-iWywsrJi.js"), __vite__mapDeps([9, 4]));
              break
          }
      case "html":
          {
              this._light ? n = await We(()=>import("./lottie_light_html-SLCECTRT-SYWXEBDN-Bl2Og0kV.js"), __vite__mapDeps([10, 4])) : n = await We(()=>import("./lottie_html-X3TYKVQI-L6774NQS-DBjbmfli.js"), __vite__mapDeps([11, 4]));
              break
          }
      default:
          throw new Error(`Invalid renderer: ${t}`)
      }
      return n.default
  }
  _getActiveAnimationId() {
      var e, t, n, r;
      let i = this._dotLottieLoader.manifest;
      return (r = (n = (e = this._activeAnimationId) != null ? e : i == null ? void 0 : i.activeAnimationId) != null ? n : (t = i == null ? void 0 : i.animations[0]) == null ? void 0 : t.id) != null ? r : void 0
  }
  async load(e) {
      if (this._currentState === "loading") {
          ie("Loading in progress..");
          return
      }
      try {
          if (this.setCurrentState("loading"),
          typeof this._src == "string")
              if (xl(this._src)) {
                  let n = JSON.parse(this._src);
                  this._dotLottieLoader.loadFromLottieJSON(n)
              } else {
                  let n = new URL(this._src,window.location.href);
                  await this._dotLottieLoader.loadFromUrl(n.toString())
              }
          else if (typeof this._src == "object" && _n(this._src))
              this._dotLottieLoader.loadFromLottieJSON(this._src);
          else
              throw Y("Invalid src provided");
          if (!this._dotLottieLoader.manifest)
              throw Y("No manifest found");
          let t = this._getActiveAnimationId();
          if (!t)
              throw Y("No active animation found");
          await this._setCurrentAnimation(t),
          await this.render(e)
      } catch (t) {
          this.setCurrentState("error"),
          t instanceof Error && ft(`Error loading animation: ${t.message}`)
      }
  }
  setErrorState(e) {
      this.setCurrentState("error"),
      ft(e)
  }
  _requireValidDirection(e) {
      if (e !== -1 && e !== 1)
          throw Y("Direction can only be -1 (backwards) or 1 (forwards)")
  }
  _requireValidIntermission(e) {
      if (e < 0 || !Number.isInteger(e))
          throw Y("intermission must be a positive number")
  }
  _requireValidLoop(e) {
      if (typeof e == "number" && (!Number.isInteger(e) || e < 0))
          throw Y("loop must be a positive number or boolean")
  }
  _requireValidSpeed(e) {
      if (typeof e != "number")
          throw Y("speed must be a number")
  }
  _requireValidBackground(e) {
      if (typeof e != "string")
          throw Y("background must be a string")
  }
  _requireValidAutoplay(e) {
      if (typeof e != "boolean")
          throw Y("autoplay must be a boolean")
  }
  _requireValidPlaybackOptions(e) {
      e.direction && this._requireValidDirection(e.direction),
      e.intermission && this._requireValidIntermission(e.intermission),
      e.loop && this._requireValidLoop(e.loop),
      e.speed && this._requireValidSpeed(e.speed)
  }
}
, Nl = Object.defineProperty
, jl = Object.getOwnPropertyDescriptor
, pe = (e,t,n,r)=>{
  for (var i = r > 1 ? void 0 : r ? jl(t, n) : t, o = e.length - 1, s; o >= 0; o--)
      (s = e[o]) && (i = (r ? s(t, n, i) : s(i)) || i);
  return r && i && Nl(t, n, i),
  i
}
, Rl = (e,t)=>t.kind === "method" && t.descriptor && !("value"in t.descriptor) ? {
  ...t,
  finisher(n) {
      n.createProperty(t.key, e)
  }
} : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  originalKey: t.key,
  initializer() {
      typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this))
  },
  finisher(n) {
      n.createProperty(t.key, e)
  }
}
, Dl = (e,t,n)=>{
  t.constructor.createProperty(n, e)
}
;
function he(e) {
  return (t,n)=>n !== void 0 ? Dl(e, t, n) : Rl(e, t)
}
function Fl(e) {
  return he({
      ...e,
      state: !0
  })
}
var Bl = ({finisher: e, descriptor: t})=>(n,r)=>{
  var i;
  if (r === void 0) {
      let o = (i = n.originalKey) !== null && i !== void 0 ? i : n.key
        , s = t != null ? {
          kind: "method",
          placement: "prototype",
          key: o,
          descriptor: t(n.key)
      } : {
          ...n,
          key: o
      };
      return e != null && (s.finisher = function(l) {
          e(l, o)
      }
      ),
      s
  }
  {
      let o = n.constructor;
      t !== void 0 && Object.defineProperty(n, r, t(r)),
      e == null || e(o, r)
  }
}
;
function zl(e, t) {
  return Bl({
      descriptor: n=>{
          let r = {
              get() {
                  var i, o;
                  return (o = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(e)) !== null && o !== void 0 ? o : null
              },
              enumerable: !0,
              configurable: !0
          };
          if (t) {
              let i = typeof n == "symbol" ? Symbol() : "__" + n;
              r.get = function() {
                  var o, s;
                  return this[i] === void 0 && (this[i] = (s = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(e)) !== null && s !== void 0 ? s : null),
                  this[i]
              }
          }
          return r
      }
  })
}
var Xn;
((Xn = window.HTMLSlotElement) === null || Xn === void 0 ? void 0 : Xn.prototype.assignedElements) != null;
var Ul = {
  name: "@dotlottie/player-component",
  version: "2.7.12",
  description: "dotLottie animation player web component.",
  repository: "https://github.com/dotlottie/player-component.git",
  homepage: "https://dotlottie.io/players",
  bugs: "https://github.com/dotlottie/player-component/issues",
  author: "Jawish Hameed <jawish@lottiefiles.com>",
  license: "MIT",
  main: "dist/dotlottie-player.js",
  module: "dist/dotlottie-player.mjs",
  types: "dist/dotlottie-player.d.ts",
  files: ["dist"],
  keywords: ["dotlottie", "animation", "web component", "component", "lit-element", "player"],
  scripts: {
      build: "tsup",
      "cypress:open": "cypress open --component",
      dev: "tsup --watch",
      lint: "eslint .",
      "lint:fix": "eslint --fix",
      test: "cypress run --component",
      "type-check": "tsc --noEmit"
  },
  dependencies: {
      "@dotlottie/common": "workspace:*",
      lit: "^2.7.5"
  },
  devDependencies: {
      "@vitejs/plugin-legacy": "^4.1.0",
      "axe-core": "^4.7.2",
      cypress: "^12.11.0",
      "cypress-axe": "^1.4.0",
      "cypress-ct-lit": "^0.3.2",
      "lottie-web": "^5.12.2",
      terser: "^5.19.0",
      tsup: "^7.2.0",
      typescript: "^4.7.4",
      vite: "^4.3.9"
  },
  publishConfig: {
      access: "public"
  },
  browserslist: ["> 3%"]
}
, yi = "dotlottie-player"
, de = class extends Rt {
  constructor() {
      super(...arguments);
      x(this, "defaultTheme", "");
      x(this, "container");
      x(this, "playMode", qo.Normal);
      x(this, "autoplay", !1);
      x(this, "background", "transparent");
      x(this, "controls", !1);
      x(this, "direction", 1);
      x(this, "hover", !1);
      x(this, "loop");
      x(this, "renderer", "svg");
      x(this, "speed", 1);
      x(this, "src");
      x(this, "intermission", 0);
      x(this, "activeAnimationId", null);
      x(this, "light", !1);
      x(this, "worker", !1);
      x(this, "activeStateId");
      x(this, "_seeker", 0);
      x(this, "_dotLottieCommonPlayer");
      x(this, "_io");
      x(this, "_loop");
      x(this, "_renderer", "svg");
      x(this, "_unsubscribeListeners");
      x(this, "_hasMultipleAnimations", !1);
      x(this, "_hasMultipleThemes", !1);
      x(this, "_hasMultipleStates", !1);
      x(this, "_popoverIsOpen", !1);
      x(this, "_animationsTabIsOpen", !1);
      x(this, "_statesTabIsOpen", !1);
      x(this, "_styleTabIsOpen", !1);
      x(this, "_themesForCurrentAnimation", []);
      x(this, "_statesForCurrentAnimation", [])
  }
  _parseLoop(t) {
      let n = parseInt(t, 10);
      return Number.isInteger(n) && n > 0 ? (this._loop = n,
      n) : typeof t == "string" && ["true", "false"].includes(t) ? (this._loop = t === "true",
      this._loop) : (ie("loop must be a positive integer or a boolean"),
      !1)
  }
  _handleSeekChange(t) {
      let n = t.currentTarget;
      try {
          let r = parseInt(n.value, 10);
          if (!this._dotLottieCommonPlayer)
              return;
          let i = r / 100 * this._dotLottieCommonPlayer.totalFrames;
          this.seek(i)
      } catch {
          throw Y("Error while seeking animation")
      }
  }
  _initListeners() {
      let t = this._dotLottieCommonPlayer;
      if (t === void 0) {
          ie("player not initialized - cannot add event listeners", "dotlottie-player-component");
          return
      }
      this._unsubscribeListeners = t.state.subscribe((n,r)=>{
          this._seeker = n.seeker,
          this.requestUpdate(),
          r.currentState !== n.currentState && this.dispatchEvent(new CustomEvent(n.currentState)),
          this.dispatchEvent(new CustomEvent(qe.Frame,{
              detail: {
                  frame: n.frame,
                  seeker: n.seeker
              }
          })),
          this.dispatchEvent(new CustomEvent(qe.VisibilityChange,{
              detail: {
                  visibilityPercentage: n.visibilityPercentage
              }
          }))
      }
      ),
      t.addEventListener("complete", ()=>{
          this.dispatchEvent(new CustomEvent(qe.Complete))
      }
      ),
      t.addEventListener("loopComplete", ()=>{
          this.dispatchEvent(new CustomEvent(qe.LoopComplete))
      }
      ),
      t.addEventListener("DOMLoaded", ()=>{
          let n = this.getManifest();
          n && n.themes && (this._themesForCurrentAnimation = n.themes.filter(r=>r.animations.includes(this.getCurrentAnimationId() || ""))),
          n && n.states && (this._hasMultipleStates = n.states.length > 0,
          this._statesForCurrentAnimation = [],
          n.states.forEach(r=>{
              this._statesForCurrentAnimation.push(r)
          }
          )),
          this.dispatchEvent(new CustomEvent(qe.Ready))
      }
      ),
      t.addEventListener("data_ready", ()=>{
          this.dispatchEvent(new CustomEvent(qe.DataReady))
      }
      ),
      t.addEventListener("data_failed", ()=>{
          this.dispatchEvent(new CustomEvent(qe.DataFail))
      }
      ),
      window && window.addEventListener("click", n=>this._clickOutListener(n))
  }
  async load(t, n, r) {
      if (!this.shadowRoot)
          return;
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.destroy(),
      this._dotLottieCommonPlayer = new vi(t,this.container,{
          rendererSettings: n ?? {
              scaleMode: "noScale",
              clearCanvas: !0,
              progressiveLoad: !0,
              hideOnTransparent: !0
          },
          hover: this.hasAttribute("hover") ? this.hover : void 0,
          renderer: this.hasAttribute("renderer") ? this._renderer : void 0,
          loop: this.hasAttribute("loop") ? this._loop : void 0,
          direction: this.hasAttribute("direction") ? this.direction === 1 ? 1 : -1 : void 0,
          speed: this.hasAttribute("speed") ? this.speed : void 0,
          intermission: this.hasAttribute("intermission") ? Number(this.intermission) : void 0,
          playMode: this.hasAttribute("playMode") ? this.playMode : void 0,
          autoplay: this.hasAttribute("autoplay") ? this.autoplay : void 0,
          activeAnimationId: this.hasAttribute("activeAnimationId") ? this.activeAnimationId : void 0,
          defaultTheme: this.hasAttribute("defaultTheme") ? this.defaultTheme : void 0,
          light: this.light,
          worker: this.worker,
          activeStateId: this.hasAttribute("activeStateId") ? this.activeStateId : void 0
      }),
      await this._dotLottieCommonPlayer.load(r);
      let i = this.getManifest();
      this._hasMultipleAnimations = this.animationCount() > 1,
      i && (i.themes && (this._themesForCurrentAnimation = i.themes.filter(o=>o.animations.includes(this.getCurrentAnimationId() || "")),
      this._hasMultipleThemes = i.themes.length > 0),
      i.states && (this._hasMultipleStates = i.states.length > 0,
      this._statesForCurrentAnimation = [],
      i.states.forEach(o=>{
          this._statesForCurrentAnimation.push(o)
      }
      ))),
      this._initListeners()
  }
  getCurrentAnimationId() {
      var t;
      return (t = this._dotLottieCommonPlayer) == null ? void 0 : t.currentAnimationId
  }
  animationCount() {
      var t;
      return this._dotLottieCommonPlayer && ((t = this._dotLottieCommonPlayer.getManifest()) == null ? void 0 : t.animations.length) || 0
  }
  animations() {
      if (!this._dotLottieCommonPlayer)
          return [];
      let t = this._dotLottieCommonPlayer.getManifest();
      return (t == null ? void 0 : t.animations.map(n=>n.id)) || []
  }
  currentAnimation() {
      return !this._dotLottieCommonPlayer || !this._dotLottieCommonPlayer.currentAnimationId ? "" : this._dotLottieCommonPlayer.currentAnimationId
  }
  getState() {
      return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.getState() : Go
  }
  getManifest() {
      var t;
      return (t = this._dotLottieCommonPlayer) == null ? void 0 : t.getManifest()
  }
  getLottie() {
      var t;
      return (t = this._dotLottieCommonPlayer) == null ? void 0 : t.getAnimationInstance()
  }
  getVersions() {
      return {
          lottieWebVersion: vi.getLottieWebVersion(),
          dotLottiePlayerVersion: `${Ul.version}`
      }
  }
  previous(t) {
      var n;
      (n = this._dotLottieCommonPlayer) == null || n.previous(t)
  }
  next(t) {
      var n;
      (n = this._dotLottieCommonPlayer) == null || n.next(t)
  }
  reset() {
      var t;
      (t = this._dotLottieCommonPlayer) == null || t.reset()
  }
  play(t, n) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.play(t, n)
  }
  pause() {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.pause()
  }
  stop() {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stop()
  }
  playOnShow(t) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.playOnShow(t)
  }
  stopPlayOnShow() {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stopPlayOnShow()
  }
  playOnScroll(t) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.playOnScroll(t)
  }
  stopPlayOnScroll() {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.stopPlayOnScroll()
  }
  seek(t) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.seek(t)
  }
  snapshot(t=!0) {
      if (!this.shadowRoot)
          return "";
      let n = this.shadowRoot.querySelector(".animation svg")
        , r = new XMLSerializer().serializeToString(n);
      if (t) {
          let i = document.createElement("a");
          i.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`,
          i.download = `download_${this._seeker}.svg`,
          document.body.appendChild(i),
          i.click(),
          document.body.removeChild(i)
      }
      return r
  }
  setTheme(t) {
      var n;
      (n = this._dotLottieCommonPlayer) == null || n.setDefaultTheme(t)
  }
  themes() {
      var t;
      if (!this._dotLottieCommonPlayer)
          return [];
      let n = this._dotLottieCommonPlayer.getManifest();
      return ((t = n == null ? void 0 : n.themes) == null ? void 0 : t.map(r=>r.id)) || []
  }
  getDefaultTheme() {
      return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.defaultTheme : ""
  }
  getActiveStateMachine() {
      return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.activeStateId : ""
  }
  _freeze() {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.freeze()
  }
  setSpeed(t=1) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setSpeed(t)
  }
  setDirection(t) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setDirection(t)
  }
  setLooping(t) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setLoop(t)
  }
  isLooping() {
      return this._dotLottieCommonPlayer ? this._dotLottieCommonPlayer.loop : !1
  }
  togglePlay() {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.togglePlay()
  }
  toggleLooping() {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.toggleLoop()
  }
  setPlayMode(t) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.setMode(t)
  }
  enterInteractiveMode(t) {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.enterInteractiveMode(t)
  }
  exitInteractiveMode() {
      this._dotLottieCommonPlayer && this._dotLottieCommonPlayer.exitInteractiveMode()
  }
  revertToManifestValues(t) {
      var n;
      (n = this._dotLottieCommonPlayer) == null || n.revertToManifestValues(t)
  }
  static get styles() {
      return pa
  }
  async firstUpdated() {
      var t;
      this.container = (t = this.shadowRoot) == null ? void 0 : t.querySelector("#animation"),
      "IntersectionObserver"in window && (this._io = new IntersectionObserver(n=>{
          var r, i;
          n[0] !== void 0 && n[0].isIntersecting ? ((r = this._dotLottieCommonPlayer) == null ? void 0 : r.currentState) === vt.Frozen && this.play() : ((i = this._dotLottieCommonPlayer) == null ? void 0 : i.currentState) === vt.Playing && this._freeze()
      }
      ),
      this._io.observe(this.container)),
      this.loop ? this._parseLoop(this.loop) : this.hasAttribute("loop") && this._parseLoop("true"),
      this.renderer === "svg" ? this._renderer = "svg" : this.renderer === "canvas" ? this._renderer = "canvas" : this.renderer === "html" && (this._renderer = "html"),
      this.src && await this.load(this.src)
  }
  disconnectedCallback() {
      var t, n;
      this._io && (this._io.disconnect(),
      this._io = void 0),
      (t = this._dotLottieCommonPlayer) == null || t.destroy(),
      (n = this._unsubscribeListeners) == null || n.call(this),
      window && window.removeEventListener("click", r=>this._clickOutListener(r))
  }
  _clickOutListener(t) {
      !t.composedPath().some(n=>n instanceof HTMLElement ? n.classList.contains("popover") || n.id === "lottie-animation-options" : !1) && this._popoverIsOpen && (this._popoverIsOpen = !1,
      this.requestUpdate())
  }
  renderControls() {
      var t, n, r, i, o;
      let s = ((t = this._dotLottieCommonPlayer) == null ? void 0 : t.currentState) === vt.Playing
        , l = ((n = this._dotLottieCommonPlayer) == null ? void 0 : n.currentState) === vt.Paused;
      return V`
    <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
      ${this._hasMultipleAnimations ? V`
            <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                  fill="#20272C"
                />
              </svg>
            </button>
          ` : V``}
      <button
        id="lottie-play-button"
        @click=${()=>{
          this.togglePlay()
      }
      }
        class=${s || l ? `active ${this._hasMultipleAnimations ? "btn-spacing-center" : "btn-spacing-right"}` : `${this._hasMultipleAnimations ? "btn-spacing-center" : "btn-spacing-right"}`}
        aria-label="play / pause animation"
      >
        ${s ? V`
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                  fill="#20272C"
                />
                <path
                  d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                  fill="#20272C"
                />
              </svg>
            ` : V`
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                  fill="#20272C"
                />
              </svg>
            `}
      </button>
      ${this._hasMultipleAnimations ? V`
            <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                  fill="#20272C"
                />
              </svg>
            </button>
          ` : V``}
      <input
        id="lottie-seeker-input"
        class="seeker ${((r = this._dotLottieCommonPlayer) == null ? void 0 : r.direction) === -1 ? "to-left" : ""}"
        type="range"
        min="0"
        step="1"
        max="100"
        .value=${this._seeker}
        @input=${a=>this._handleSeekChange(a)}
        @mousedown=${()=>{
          this._freeze()
      }
      }
        @mouseup=${()=>{
          var a;
          (a = this._dotLottieCommonPlayer) == null || a.unfreeze()
      }
      }
        aria-valuemin="1"
        aria-valuemax="100"
        role="slider"
        aria-valuenow=${this._seeker}
        aria-label="lottie-seek-input"
        style=${`--seeker: ${this._seeker}`}
      />
      <button
        id="lottie-loop-toggle"
        @click=${()=>this.toggleLooping()}
        class=${(i = this._dotLottieCommonPlayer) != null && i.loop ? "active btn-spacing-left" : "btn-spacing-left"}
        aria-label="loop-toggle"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
            fill="currentColor"
          />
          <path
            d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
            fill="currentColor"
          />
        </svg>
      </button>
      ${this._hasMultipleAnimations || this._hasMultipleThemes || this._hasMultipleStates ? V`
            <button
              id="lottie-animation-options"
              @click=${()=>{
          this._popoverIsOpen = !this._popoverIsOpen,
          this.requestUpdate()
      }
      }
              aria-label="options"
              class="btn-spacing-right"
              style=${`background-color: ${this._popoverIsOpen ? "var(--lottie-player-toolbar-icon-hover-color)" : ""}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                  fill="#20272C"
                />
                <path
                  d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                  fill="#20272C"
                />
                <path
                  d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                  fill="#20272C"
                />
              </svg>
            </button>
          ` : V``}
    </div>
    ${this._popoverIsOpen ? V`
          <div
            id="popover"
            class="popover"
            tabindex="0"
            aria-label="lottie animations themes popover"
            style="min-height: ${this.themes().length > 0 ? "84px" : "auto"}"
          >
            ${!this._animationsTabIsOpen && !this._styleTabIsOpen && !this._statesTabIsOpen ? V`
                  <button
                    class="popover-button"
                    tabindex="0"
                    aria-label="animations"
                    @click=${()=>{
          this._animationsTabIsOpen = !this._animationsTabIsOpen,
          this.requestUpdate()
      }
      }
                    @keydown=${a=>{
          (a.code === "Space" || a.code === "Enter") && (this._animationsTabIsOpen = !this._animationsTabIsOpen,
          this.requestUpdate())
      }
      }
                  >
                    <div class="popover-button-text">Animations</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>
                ` : V``}
            ${this._hasMultipleThemes && !this._styleTabIsOpen && !this._animationsTabIsOpen && !this._statesTabIsOpen ? V` <button
                  class="popover-button"
                  aria-label="Themes"
                  @click=${()=>{
          this._styleTabIsOpen = !this._styleTabIsOpen,
          this.requestUpdate()
      }
      }
                  @keydown=${a=>{
          (a.code === "Space" || a.code === "Enter") && (this._styleTabIsOpen = !this._styleTabIsOpen,
          this.requestUpdate())
      }
      }
                >
                  <div class="popover-button-text">Themes</div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                        fill="#4C5863"
                      />
                    </svg>
                  </div>
                </button>` : ""}
            ${this._hasMultipleStates && !this._styleTabIsOpen && !this._animationsTabIsOpen && !this._statesTabIsOpen ? V` <button
                  class="popover-button"
                  aria-label="States"
                  @click=${()=>{
          this._statesTabIsOpen = !this._statesTabIsOpen,
          this.requestUpdate()
      }
      }
                  @keydown=${a=>{
          (a.code === "Space" || a.code === "Enter") && (this._statesTabIsOpen = !this._statesTabIsOpen,
          this.requestUpdate())
      }
      }
                >
                  <div class="popover-button-text">States</div>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                        fill="#4C5863"
                      />
                    </svg>
                  </div>
                </button>` : ""}
            ${this._animationsTabIsOpen ? V`<button
                    class="option-title-button"
                    aria-label="Back to main popover menu"
                    @click=${()=>{
          this._animationsTabIsOpen = !this._animationsTabIsOpen,
          this.requestUpdate()
      }
      }
                  >
                    <div class="option-title-chevron">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                          fill="#20272C"
                        />
                      </svg>
                    </div>
                    <div>Animations</div>
                  </button>
                  <div class="option-title-separator"></div>
                  <div class="option-row">
                    <ul>
                      ${this.animations().map(a=>V`
                          <li>
                            <button
                              class="option-button"
                              aria-label=${`${a}`}
                              @click=${()=>{
          this._animationsTabIsOpen = !this._animationsTabIsOpen,
          this._popoverIsOpen = !this._popoverIsOpen,
          this.play(a),
          this.requestUpdate()
      }
      }
                              @keydown=${u=>{
          (u.code === "Space" || u.code === "Enter") && (this._animationsTabIsOpen = !this._animationsTabIsOpen,
          this._popoverIsOpen = !this._popoverIsOpen,
          this.play(a),
          this.requestUpdate())
      }
      }
                            >
                              <div class="option-tick">
                                ${this.currentAnimation() === a ? V`
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                          fill="#20272C"
                                        />
                                      </svg>
                                    ` : V`<div style="width: 24px; height: 24px"></div>`}
                              </div>
                              <div>${a}</div>
                            </button>
                          </li>
                        `)}
                    </ul>
                  </div> ` : V``}
            ${this._styleTabIsOpen ? V`<div class="option-title-themes-row">
                    <button
                      class="option-title-button themes"
                      aria-label="Back to main popover menu"
                      @click=${()=>{
          this._styleTabIsOpen = !this._styleTabIsOpen,
          this.requestUpdate()
      }
      }
                    >
                      <div class="option-title-chevron">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div class="option-title-text">Themes</div>
                      ${((o = this._dotLottieCommonPlayer) == null ? void 0 : o.defaultTheme) === "" ? V`` : V`
                            <button
                              class="reset-btn"
                              @click=${()=>{
          this.setTheme(""),
          this.requestUpdate()
      }
      }
                            >
                              Reset
                            </button>
                          `}
                    </button>
                  </div>
                  <div class="option-title-separator"></div>
                  <div class="option-row">
                    <ul>
                      ${this._themesForCurrentAnimation.map(a=>V`
                          <li>
                            <button
                              class="option-button"
                              aria-label="${a.id}"
                              @click=${()=>{
          this.setTheme(a.id)
      }
      }
                              @keydown=${u=>{
          (u.code === "Space" || u.code === "Enter") && this.setTheme(a.id)
      }
      }
                            >
                              <div class="option-tick">
                                ${this.getDefaultTheme() === a.id ? V`
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                          fill="#20272C"
                                        />
                                      </svg>
                                    ` : V`<div style="width: 24px; height: 24px"></div>`}
                              </div>
                              <div>${a.id}</div>
                            </button>
                          </li>
                        `)}
                    </ul>
                  </div>` : V``}
            ${this._statesTabIsOpen ? V`<div class="option-title-themes-row">
                    <button
                      class="option-title-button themes"
                      aria-label="Back to main popover menu"
                      @click=${()=>{
          this._statesTabIsOpen = !this._statesTabIsOpen,
          this.requestUpdate()
      }
      }
                    >
                      <div class="option-title-chevron">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div class="option-title-text">States</div>
                      <button
                        class="reset-btn"
                        @click=${()=>{
          this.exitInteractiveMode(),
          this.requestUpdate()
      }
      }
                      >
                        Reset
                      </button>
                    </button>
                  </div>
                  <div class="option-title-separator"></div>
                  <div class="option-row">
                    <ul>
                      ${this._statesForCurrentAnimation.map(a=>V`
                          <li>
                            <button
                              class="option-button"
                              aria-label="${a}"
                              @click=${()=>{
          this.enterInteractiveMode(a)
      }
      }
                              @keydown=${u=>{
          (u.code === "Space" || u.code === "Enter") && this.enterInteractiveMode(a)
      }
      }
                            >
                              <div class="option-tick">
                                ${this.getActiveStateMachine() === a ? V`
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                          fill="#20272C"
                                        />
                                      </svg>
                                    ` : V`<div style="width: 24px; height: 24px"></div>`}
                              </div>
                              <div>${a}</div>
                            </button>
                          </li>
                        `)}
                    </ul>
                  </div>` : V``}
          </div>
        ` : V``}
  `
  }
  render() {
      var t;
      let n = this.controls ? "main controls" : "main"
        , r = this.controls ? "animation controls" : "animation";
      return V`
    <div id="animation-container" class=${n} lang="en" role="img" aria-label="lottie-animation-container">
      <div id="animation" class=${r} style="background:${this.background};">
        ${((t = this._dotLottieCommonPlayer) == null ? void 0 : t.currentState) === vt.Error ? V` <div class="error">⚠️</div> ` : void 0}
      </div>
      ${this.controls ? this.renderControls() : void 0}
    </div>
  `
  }
}
;
pe([he({
  type: String
})], de.prototype, "defaultTheme", 2),
pe([zl("#animation")], de.prototype, "container", 2),
pe([he()], de.prototype, "playMode", 2),
pe([he({
  type: Boolean
})], de.prototype, "autoplay", 2),
pe([he({
  type: String
})], de.prototype, "background", 2),
pe([he({
  type: Boolean
})], de.prototype, "controls", 2),
pe([he({
  type: Number
})], de.prototype, "direction", 2),
pe([he({
  type: Boolean
})], de.prototype, "hover", 2),
pe([he({
  type: String
})], de.prototype, "loop", 2),
pe([he({
  type: String
})], de.prototype, "renderer", 2),
pe([he({
  type: Number
})], de.prototype, "speed", 2),
pe([he({
  type: String
})], de.prototype, "src", 2),
pe([he()], de.prototype, "intermission", 2),
pe([he({
  type: String
})], de.prototype, "activeAnimationId", 2),
pe([he({
  type: Boolean
})], de.prototype, "light", 2),
pe([he({
  type: Boolean
})], de.prototype, "worker", 2),
pe([he({
  type: String
})], de.prototype, "activeStateId", 2),
pe([Fl()], de.prototype, "_seeker", 2);
customElements.get(yi) || customElements.define(yi, de);
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/property.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/state.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/base.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/event-options.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/query.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/query-all.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/query-async.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/query-assigned-elements.js:
(**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
(**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *)
*/
const Hl = ({candleVisible: e})=>N.jsxs("div", {
  className: "cake",
  children: [N.jsx("div", {
      className: "plate"
  }), N.jsx("div", {
      className: "layer layer-bottom"
  }), N.jsx("div", {
      className: "layer layer-middle"
  }), N.jsx("div", {
      className: "layer layer-top"
  }), N.jsx("div", {
      className: "icing"
  }), N.jsx("div", {
      className: "drip drip1"
  }), N.jsx("div", {
      className: "drip drip2"
  }), N.jsx("div", {
      className: "drip drip3"
  }), N.jsx("div", {
      id: "candle",
      className: "candle",
      children: e ? N.jsx("div", {
          className: "flame"
      }) : null
  })]
});
var Jo = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}
, gi = P.createContext && P.createContext(Jo)
, Wl = ["attr", "size", "title"];
function Vl(e, t) {
  if (e == null)
      return {};
  var n = ql(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
          r = o[i],
          !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
function ql(e, t) {
  if (e == null)
      return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
      i = r[o],
      !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n
}
function Cn() {
  return Cn = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  Cn.apply(this, arguments)
}
function bi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function On(e) {
  for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? bi(Object(n), !0).forEach(function(r) {
          Gl(e, r, n[r])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bi(Object(n)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
      })
  }
  return e
}
function Gl(e, t, n) {
  return t = Jl(t),
  t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : e[t] = n,
  e
}
function Jl(e) {
  var t = Kl(e, "string");
  return typeof t == "symbol" ? t : String(t)
}
function Kl(e, t) {
  if (typeof e != "object" || e === null)
      return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (typeof r != "object")
          return r;
      throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}
function Ko(e) {
  return e && e.map((t,n)=>P.createElement(t.tag, On({
      key: n
  }, t.attr), Ko(t.child)))
}
function ut(e) {
  return t=>P.createElement(Yl, Cn({
      attr: On({}, e.attr)
  }, t), Ko(e.child))
}
function Yl(e) {
  var t = n=>{
      var {attr: r, size: i, title: o} = e, s = Vl(e, Wl), l = i || n.size || "1em", a;
      return n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      P.createElement("svg", Cn({
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0"
      }, n.attr, r, s, {
          className: a,
          style: On(On({
              color: e.color || n.color
          }, n.style), e.style),
          height: l,
          width: l,
          xmlns: "http://www.w3.org/2000/svg"
      }), o && P.createElement("title", null, o), e.children)
  }
  ;
  return gi !== void 0 ? P.createElement(gi.Consumer, null, n=>t(n)) : t(Jo)
}
function _i(e) {
  return ut({
      tag: "svg",
      attr: {
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round"
      },
      child: [{
          tag: "path",
          attr: {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M8.973 8.974c-.335 .378 -.67 .716 -.973 1.026c-1.226 1.26 -2 3.24 -2 5a6 6 0 0 0 11.472 2.466m.383 -3.597c-.32 -1.409 -1.122 -3.045 -1.855 -3.869c-.281 .472 -.543 .87 -.79 1.202m-2.358 -2.35c-.068 -2.157 -1.182 -4.184 -1.852 -4.852c0 .968 -.18 1.801 -.465 2.527"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M3 3l18 18"
          },
          child: []
      }]
  })(e)
}
function wi(e) {
  return ut({
      tag: "svg",
      attr: {
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round"
      },
      child: [{
          tag: "path",
          attr: {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"
          },
          child: []
      }]
  })(e)
}
function Zl(e) {
  return ut({
      tag: "svg",
      attr: {
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round"
      },
      child: [{
          tag: "path",
          attr: {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z",
              strokeWidth: "0",
              fill: "currentColor"
          },
          child: []
      }]
  })(e)
}
function Ci(e) {
  return ut({
      tag: "svg",
      attr: {
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round"
      },
      child: [{
          tag: "path",
          attr: {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",
              strokeWidth: "0",
              fill: "currentColor"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",
              strokeWidth: "0",
              fill: "currentColor"
          },
          child: []
      }]
  })(e)
}
function Oi(e) {
  return ut({
      tag: "svg",
      attr: {
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round"
      },
      child: [{
          tag: "path",
          attr: {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",
              strokeWidth: "0",
              fill: "currentColor"
          },
          child: []
      }]
  })(e)
}
function Ei(e) {
  return ut({
      tag: "svg",
      attr: {
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round"
      },
      child: [{
          tag: "path",
          attr: {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z",
              strokeWidth: "0",
              fill: "currentColor"
          },
          child: []
      }]
  })(e)
}
function Si(e) {
  return ut({
      tag: "svg",
      attr: {
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round"
      },
      child: [{
          tag: "path",
          attr: {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
          },
          child: []
      }, {
          tag: "path",
          attr: {
              d: "M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z"
          },
          child: []
      }]
  })(e)
}
var Nn = {}
, Xl = function() {
  var e = document.getSelection();
  if (!e.rangeCount)
      return function() {}
      ;
  for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
      n.push(e.getRangeAt(r));
  switch (t.tagName.toUpperCase()) {
  case "INPUT":
  case "TEXTAREA":
      t.blur();
      break;
  default:
      t = null;
      break
  }
  return e.removeAllRanges(),
  function() {
      e.type === "Caret" && e.removeAllRanges(),
      e.rangeCount || n.forEach(function(i) {
          e.addRange(i)
      }),
      t && t.focus()
  }
}
, Ql = Xl
, Pi = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}
, ec = "Copy to clipboard: #{key}, Enter";
function tc(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t)
}
function nc(e, t) {
  var n, r, i, o, s, l, a = !1;
  t || (t = {}),
  n = t.debug || !1;
  try {
      i = Ql(),
      o = document.createRange(),
      s = document.getSelection(),
      l = document.createElement("span"),
      l.textContent = e,
      l.ariaHidden = "true",
      l.style.all = "unset",
      l.style.position = "fixed",
      l.style.top = 0,
      l.style.clip = "rect(0, 0, 0, 0)",
      l.style.whiteSpace = "pre",
      l.style.webkitUserSelect = "text",
      l.style.MozUserSelect = "text",
      l.style.msUserSelect = "text",
      l.style.userSelect = "text",
      l.addEventListener("copy", function(d) {
          if (d.stopPropagation(),
          t.format)
              if (d.preventDefault(),
              typeof d.clipboardData > "u") {
                  n && console.warn("unable to use e.clipboardData"),
                  n && console.warn("trying IE specific stuff"),
                  window.clipboardData.clearData();
                  var c = Pi[t.format] || Pi.default;
                  window.clipboardData.setData(c, e)
              } else
                  d.clipboardData.clearData(),
                  d.clipboardData.setData(t.format, e);
          t.onCopy && (d.preventDefault(),
          t.onCopy(d.clipboardData))
      }),
      document.body.appendChild(l),
      o.selectNodeContents(l),
      s.addRange(o);
      var u = document.execCommand("copy");
      if (!u)
          throw new Error("copy command was unsuccessful");
      a = !0
  } catch (d) {
      n && console.error("unable to copy using execCommand: ", d),
      n && console.warn("trying IE specific stuff");
      try {
          window.clipboardData.setData(t.format || "text", e),
          t.onCopy && t.onCopy(window.clipboardData),
          a = !0
      } catch (c) {
          n && console.error("unable to copy using clipboardData: ", c),
          n && console.error("falling back to prompt"),
          r = tc("message"in t ? t.message : ec),
          window.prompt(r, e)
      }
  } finally {
      s && (typeof s.removeRange == "function" ? s.removeRange(o) : s.removeAllRanges()),
      l && document.body.removeChild(l),
      i()
  }
  return a
}
var rc = nc;
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t
  }
  : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  }
  ,
  mr(e)
}
Object.defineProperty(Nn, "__esModule", {
  value: !0
});
Nn.CopyToClipboard = void 0;
var ln = Yo(O)
, ic = Yo(rc)
, oc = ["text", "onCopy", "options", "children"];
function Yo(e) {
  return e && e.__esModule ? e : {
      default: e
  }
}
function xi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Ti(e) {
  for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? xi(Object(n), !0).forEach(function(r) {
          Rr(e, r, n[r])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xi(Object(n)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
      })
  }
  return e
}
function sc(e, t) {
  if (e == null)
      return {};
  var n = ac(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
          r = o[i],
          !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
function ac(e, t) {
  if (e == null)
      return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
      i = r[o],
      !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n
}
function lc(e, t) {
  if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function")
}
function ki(e, t) {
  for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1,
      r.configurable = !0,
      "value"in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r)
  }
}
function cc(e, t, n) {
  return t && ki(e.prototype, t),
  n && ki(e, n),
  Object.defineProperty(e, "prototype", {
      writable: !1
  }),
  e
}
function uc(e, t) {
  if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
      constructor: {
          value: e,
          writable: !0,
          configurable: !0
      }
  }),
  Object.defineProperty(e, "prototype", {
      writable: !1
  }),
  t && vr(e, t)
}
function vr(e, t) {
  return vr = Object.setPrototypeOf || function(r, i) {
      return r.__proto__ = i,
      r
  }
  ,
  vr(e, t)
}
function dc(e) {
  var t = fc();
  return function() {
      var r = En(e), i;
      if (t) {
          var o = En(this).constructor;
          i = Reflect.construct(r, arguments, o)
      } else
          i = r.apply(this, arguments);
      return pc(this, i)
  }
}
function pc(e, t) {
  if (t && (mr(t) === "object" || typeof t == "function"))
      return t;
  if (t !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
  return Zo(e)
}
function Zo(e) {
  if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
function fc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
  if (typeof Proxy == "function")
      return !0;
  try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
      !0
  } catch {
      return !1
  }
}
function En(e) {
  return En = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
      return n.__proto__ || Object.getPrototypeOf(n)
  }
  ,
  En(e)
}
function Rr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : e[t] = n,
  e
}
var Xo = function(e) {
  uc(n, e);
  var t = dc(n);
  function n() {
      var r;
      lc(this, n);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
          o[s] = arguments[s];
      return r = t.call.apply(t, [this].concat(o)),
      Rr(Zo(r), "onClick", function(l) {
          var a = r.props
            , u = a.text
            , d = a.onCopy
            , c = a.children
            , p = a.options
            , f = ln.default.Children.only(c)
            , m = (0,
          ic.default)(u, p);
          d && d(u, m),
          f && f.props && typeof f.props.onClick == "function" && f.props.onClick(l)
      }),
      r
  }
  return cc(n, [{
      key: "render",
      value: function() {
          var i = this.props;
          i.text,
          i.onCopy,
          i.options;
          var o = i.children
            , s = sc(i, oc)
            , l = ln.default.Children.only(o);
          return ln.default.cloneElement(l, Ti(Ti({}, s), {}, {
              onClick: this.onClick
          }))
      }
  }]),
  n
}(ln.default.PureComponent);
Nn.CopyToClipboard = Xo;
Rr(Xo, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var hc = Nn
, yr = hc.CopyToClipboard;
yr.CopyToClipboard = yr;
var mc = yr;
function Qo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
      r += e;
  else if (typeof e == "object")
      if (Array.isArray(e)) {
          var i = e.length;
          for (t = 0; t < i; t++)
              e[t] && (n = Qo(e[t])) && (r && (r += " "),
              r += n)
      } else
          for (n in e)
              e[n] && (r && (r += " "),
              r += n);
  return r
}
function Ye() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
      (e = arguments[n]) && (t = Qo(e)) && (r && (r += " "),
      r += t);
  return r
}
const Ht = e=>typeof e == "number" && !isNaN(e)
, ot = e=>typeof e == "string"
, Ee = e=>typeof e == "function"
, vn = e=>ot(e) || Ee(e) ? e : null
, gr = e=>O.isValidElement(e) || ot(e) || Ee(e) || Ht(e);
function vc(e, t, n) {
  n === void 0 && (n = 300);
  const {scrollHeight: r, style: i} = e;
  requestAnimationFrame(()=>{
      i.minHeight = "initial",
      i.height = r + "px",
      i.transition = `all ${n}ms`,
      requestAnimationFrame(()=>{
          i.height = "0",
          i.padding = "0",
          i.margin = "0",
          setTimeout(t, n)
      }
      )
  }
  )
}
function jn(e) {
  let {enter: t, exit: n, appendPosition: r=!1, collapse: i=!0, collapseDuration: o=300} = e;
  return function(s) {
      let {children: l, position: a, preventExitTransition: u, done: d, nodeRef: c, isIn: p, playToast: f} = s;
      const m = r ? `${t}--${a}` : t
        , h = r ? `${n}--${a}` : n
        , b = O.useRef(0);
      return O.useLayoutEffect(()=>{
          const g = c.current
            , v = m.split(" ")
            , _ = I=>{
              I.target === c.current && (f(),
              g.removeEventListener("animationend", _),
              g.removeEventListener("animationcancel", _),
              b.current === 0 && I.type !== "animationcancel" && g.classList.remove(...v))
          }
          ;
          g.classList.add(...v),
          g.addEventListener("animationend", _),
          g.addEventListener("animationcancel", _)
      }
      , []),
      O.useEffect(()=>{
          const g = c.current
            , v = ()=>{
              g.removeEventListener("animationend", v),
              i ? vc(g, d, o) : d()
          }
          ;
          p || (u ? v() : (b.current = 1,
          g.className += ` ${h}`,
          g.addEventListener("animationend", v)))
      }
      , [p]),
      P.createElement(P.Fragment, null, l)
  }
}
function Li(e, t) {
  return e != null ? {
      content: e.content,
      containerId: e.props.containerId,
      id: e.props.toastId,
      theme: e.props.theme,
      type: e.props.type,
      data: e.props.data || {},
      isLoading: e.props.isLoading,
      icon: e.props.icon,
      status: t
  } : {}
}
const _e = new Map;
let Wt = [];
const br = new Set
, yc = e=>br.forEach(t=>t(e))
, es = ()=>_e.size > 0;
function ts(e, t) {
  var n;
  if (t)
      return !((n = _e.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return _e.forEach(i=>{
      i.isToastActive(e) && (r = !0)
  }
  ),
  r
}
function ns(e, t) {
  gr(e) && (es() || Wt.push({
      content: e,
      options: t
  }),
  _e.forEach(n=>{
      n.buildToast(e, t)
  }
  ))
}
function Ai(e, t) {
  _e.forEach(n=>{
      t != null && t != null && t.containerId ? (t == null ? void 0 : t.containerId) === n.id && n.toggle(e, t == null ? void 0 : t.id) : n.toggle(e, t == null ? void 0 : t.id)
  }
  )
}
function gc(e) {
  const {subscribe: t, getSnapshot: n, setProps: r} = O.useRef(function(o) {
      const s = o.containerId || 1;
      return {
          subscribe(l) {
              const a = function(d, c, p) {
                  let f = 1
                    , m = 0
                    , h = []
                    , b = []
                    , g = []
                    , v = c;
                  const _ = new Map
                    , I = new Set
                    , D = ()=>{
                      g = Array.from(_.values()),
                      I.forEach(T=>T())
                  }
                    , j = T=>{
                      b = T == null ? [] : b.filter(k=>k !== T),
                      D()
                  }
                    , F = T=>{
                      const {toastId: k, onOpen: J, updateId: R, children: W} = T.props
                        , ee = R == null;
                      T.staleId && _.delete(T.staleId),
                      _.set(k, T),
                      b = [...b, T.props.toastId].filter(te=>te !== T.staleId),
                      D(),
                      p(Li(T, ee ? "added" : "updated")),
                      ee && Ee(J) && J(O.isValidElement(W) && W.props)
                  }
                  ;
                  return {
                      id: d,
                      props: v,
                      observe: T=>(I.add(T),
                      ()=>I.delete(T)),
                      toggle: (T,k)=>{
                          _.forEach(J=>{
                              k != null && k !== J.props.toastId || Ee(J.toggle) && J.toggle(T)
                          }
                          )
                      }
                      ,
                      removeToast: j,
                      toasts: _,
                      clearQueue: ()=>{
                          m -= h.length,
                          h = []
                      }
                      ,
                      buildToast: (T,k)=>{
                          if ((B=>{
                              let {containerId: L, toastId: U, updateId: K} = B;
                              const ne = L ? L !== d : d !== 1
                                , ae = _.has(U) && K == null;
                              return ne || ae
                          }
                          )(k))
                              return;
                          const {toastId: J, updateId: R, data: W, staleId: ee, delay: te} = k
                            , X = ()=>{
                              j(J)
                          }
                            , ce = R == null;
                          ce && m++;
                          const se = {
                              ...v,
                              style: v.toastStyle,
                              key: f++,
                              ...Object.fromEntries(Object.entries(k).filter(B=>{
                                  let[L,U] = B;
                                  return U != null
                              }
                              )),
                              toastId: J,
                              updateId: R,
                              data: W,
                              closeToast: X,
                              isIn: !1,
                              className: vn(k.className || v.toastClassName),
                              bodyClassName: vn(k.bodyClassName || v.bodyClassName),
                              progressClassName: vn(k.progressClassName || v.progressClassName),
                              autoClose: !k.isLoading && (ye = k.autoClose,
                              C = v.autoClose,
                              ye === !1 || Ht(ye) && ye > 0 ? ye : C),
                              deleteToast() {
                                  const B = _.get(J)
                                    , {onClose: L, children: U} = B.props;
                                  Ee(L) && L(O.isValidElement(U) && U.props),
                                  p(Li(B, "removed")),
                                  _.delete(J),
                                  m--,
                                  m < 0 && (m = 0),
                                  h.length > 0 ? F(h.shift()) : D()
                              }
                          };
                          var ye, C;
                          se.closeButton = v.closeButton,
                          k.closeButton === !1 || gr(k.closeButton) ? se.closeButton = k.closeButton : k.closeButton === !0 && (se.closeButton = !gr(v.closeButton) || v.closeButton);
                          let w = T;
                          O.isValidElement(T) && !ot(T.type) ? w = O.cloneElement(T, {
                              closeToast: X,
                              toastProps: se,
                              data: W
                          }) : Ee(T) && (w = T({
                              closeToast: X,
                              toastProps: se,
                              data: W
                          }));
                          const E = {
                              content: w,
                              props: se,
                              staleId: ee
                          };
                          v.limit && v.limit > 0 && m > v.limit && ce ? h.push(E) : Ht(te) ? setTimeout(()=>{
                              F(E)
                          }
                          , te) : F(E)
                      }
                      ,
                      setProps(T) {
                          v = T
                      },
                      setToggle: (T,k)=>{
                          _.get(T).toggle = k
                      }
                      ,
                      isToastActive: T=>b.some(k=>k === T),
                      getSnapshot: ()=>v.newestOnTop ? g.reverse() : g
                  }
              }(s, o, yc);
              _e.set(s, a);
              const u = a.observe(l);
              return Wt.forEach(d=>ns(d.content, d.options)),
              Wt = [],
              ()=>{
                  u(),
                  _e.delete(s)
              }
          },
          setProps(l) {
              var a;
              (a = _e.get(s)) == null || a.setProps(l)
          },
          getSnapshot() {
              var l;
              return (l = _e.get(s)) == null ? void 0 : l.getSnapshot()
          }
      }
  }(e)).current;
  r(e);
  const i = O.useSyncExternalStore(t, n, n);
  return {
      getToastToRender: function(o) {
          if (!i)
              return [];
          const s = new Map;
          return i.forEach(l=>{
              const {position: a} = l.props;
              s.has(a) || s.set(a, []),
              s.get(a).push(l)
          }
          ),
          Array.from(s, l=>o(l[0], l[1]))
      },
      isToastActive: ts,
      count: i == null ? void 0 : i.length
  }
}
function bc(e) {
  const [t,n] = O.useState(!1)
    , [r,i] = O.useState(!1)
    , o = O.useRef(null)
    , s = O.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1
  }).current
    , {autoClose: l, pauseOnHover: a, closeToast: u, onClick: d, closeOnClick: c} = e;
  var p, f;
  function m() {
      n(!0)
  }
  function h() {
      n(!1)
  }
  function b(_) {
      const I = o.current;
      s.canDrag && I && (s.didMove = !0,
      t && h(),
      s.delta = e.draggableDirection === "x" ? _.clientX - s.start : _.clientY - s.start,
      s.start !== _.clientX && (s.canCloseOnClick = !1),
      I.style.transform = `translate3d(${e.draggableDirection === "x" ? `${s.delta}px, var(--y)` : `0, calc(${s.delta}px + var(--y))`},0)`,
      I.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance)))
  }
  function g() {
      document.removeEventListener("pointermove", b),
      document.removeEventListener("pointerup", g);
      const _ = o.current;
      if (s.canDrag && s.didMove && _) {
          if (s.canDrag = !1,
          Math.abs(s.delta) > s.removalDistance)
              return i(!0),
              e.closeToast(),
              void e.collapseAll();
          _.style.transition = "transform 0.2s, opacity 0.2s",
          _.style.removeProperty("transform"),
          _.style.removeProperty("opacity")
      }
  }
  (f = _e.get((p = {
      id: e.toastId,
      containerId: e.containerId,
      fn: n
  }).containerId || 1)) == null || f.setToggle(p.id, p.fn),
  O.useEffect(()=>{
      if (e.pauseOnFocusLoss)
          return document.hasFocus() || h(),
          window.addEventListener("focus", m),
          window.addEventListener("blur", h),
          ()=>{
              window.removeEventListener("focus", m),
              window.removeEventListener("blur", h)
          }
  }
  , [e.pauseOnFocusLoss]);
  const v = {
      onPointerDown: function(_) {
          if (e.draggable === !0 || e.draggable === _.pointerType) {
              s.didMove = !1,
              document.addEventListener("pointermove", b),
              document.addEventListener("pointerup", g);
              const I = o.current;
              s.canCloseOnClick = !0,
              s.canDrag = !0,
              I.style.transition = "none",
              e.draggableDirection === "x" ? (s.start = _.clientX,
              s.removalDistance = I.offsetWidth * (e.draggablePercent / 100)) : (s.start = _.clientY,
              s.removalDistance = I.offsetHeight * (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent) / 100)
          }
      },
      onPointerUp: function(_) {
          const {top: I, bottom: D, left: j, right: F} = o.current.getBoundingClientRect();
          _.nativeEvent.type !== "touchend" && e.pauseOnHover && _.clientX >= j && _.clientX <= F && _.clientY >= I && _.clientY <= D ? h() : m()
      }
  };
  return l && a && (v.onMouseEnter = h,
  e.stacked || (v.onMouseLeave = m)),
  c && (v.onClick = _=>{
      d && d(_),
      s.canCloseOnClick && u()
  }
  ),
  {
      playToast: m,
      pauseToast: h,
      isRunning: t,
      preventExitTransition: r,
      toastRef: o,
      eventHandlers: v
  }
}
function _c(e) {
  let {delay: t, isRunning: n, closeToast: r, type: i="default", hide: o, className: s, style: l, controlledProgress: a, progress: u, rtl: d, isIn: c, theme: p} = e;
  const f = o || a && u === 0
    , m = {
      ...l,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused"
  };
  a && (m.transform = `scaleX(${u})`);
  const h = Ye("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${p}`, `Toastify__progress-bar--${i}`, {
      "Toastify__progress-bar--rtl": d
  })
    , b = Ee(s) ? s({
      rtl: d,
      type: i,
      defaultClassName: h
  }) : Ye(h, s)
    , g = {
      [a && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && u < 1 ? null : ()=>{
          c && r()
      }
  };
  return P.createElement("div", {
      className: "Toastify__progress-bar--wrp",
      "data-hidden": f
  }, P.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${i}`
  }), P.createElement("div", {
      role: "progressbar",
      "aria-hidden": f ? "true" : "false",
      "aria-label": "notification timer",
      className: b,
      style: m,
      ...g
  }))
}
let wc = 1;
const rs = ()=>"" + wc++;
function Cc(e) {
  return e && (ot(e.toastId) || Ht(e.toastId)) ? e.toastId : rs()
}
function Bt(e, t) {
  return ns(e, t),
  t.toastId
}
function Sn(e, t) {
  return {
      ...t,
      type: t && t.type || e,
      toastId: Cc(t)
  }
}
function cn(e) {
  return (t,n)=>Bt(t, Sn(e, n))
}
function re(e, t) {
  return Bt(e, Sn("default", t))
}
re.loading = (e,t)=>Bt(e, Sn("default", {
  isLoading: !0,
  autoClose: !1,
  closeOnClick: !1,
  closeButton: !1,
  draggable: !1,
  ...t
})),
re.promise = function(e, t, n) {
  let r, {pending: i, error: o, success: s} = t;
  i && (r = ot(i) ? re.loading(i, n) : re.loading(i.render, {
      ...n,
      ...i
  }));
  const l = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null
  }
    , a = (d,c,p)=>{
      if (c == null)
          return void re.dismiss(r);
      const f = {
          type: d,
          ...l,
          ...n,
          data: p
      }
        , m = ot(c) ? {
          render: c
      } : c;
      return r ? re.update(r, {
          ...f,
          ...m
      }) : re(m.render, {
          ...f,
          ...m
      }),
      p
  }
    , u = Ee(e) ? e() : e;
  return u.then(d=>a("success", s, d)).catch(d=>a("error", o, d)),
  u
}
,
re.success = cn("success"),
re.info = cn("info"),
re.error = cn("error"),
re.warning = cn("warning"),
re.warn = re.warning,
re.dark = (e,t)=>Bt(e, Sn("default", {
  theme: "dark",
  ...t
})),
re.dismiss = function(e) {
  (function(t) {
      var n;
      if (es()) {
          if (t == null || ot(n = t) || Ht(n))
              _e.forEach(r=>{
                  r.removeToast(t)
              }
              );
          else if (t && ("containerId"in t || "id"in t)) {
              const r = _e.get(t.containerId);
              r ? r.removeToast(t.id) : _e.forEach(i=>{
                  i.removeToast(t.id)
              }
              )
          }
      } else
          Wt = Wt.filter(r=>t != null && r.options.toastId !== t)
  }
  )(e)
}
,
re.clearWaitingQueue = function(e) {
  e === void 0 && (e = {}),
  _e.forEach(t=>{
      !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue()
  }
  )
}
,
re.isActive = ts,
re.update = function(e, t) {
  t === void 0 && (t = {});
  const n = ((r,i)=>{
      var o;
      let {containerId: s} = i;
      return (o = _e.get(s || 1)) == null ? void 0 : o.toasts.get(r)
  }
  )(e, t);
  if (n) {
      const {props: r, content: i} = n
        , o = {
          delay: 100,
          ...r,
          ...t,
          toastId: t.toastId || e,
          updateId: rs()
      };
      o.toastId !== e && (o.staleId = e);
      const s = o.render || i;
      delete o.render,
      Bt(s, o)
  }
}
,
re.done = e=>{
  re.update(e, {
      progress: 1
  })
}
,
re.onChange = function(e) {
  return br.add(e),
  ()=>{
      br.delete(e)
  }
}
,
re.play = e=>Ai(!0, e),
re.pause = e=>Ai(!1, e);
const Oc = typeof window < "u" ? O.useLayoutEffect : O.useEffect
, un = e=>{
  let {theme: t, type: n, isLoading: r, ...i} = e;
  return P.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i
  })
}
, Qn = {
  info: function(e) {
      return P.createElement(un, {
          ...e
      }, P.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
      }))
  },
  warning: function(e) {
      return P.createElement(un, {
          ...e
      }, P.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
      }))
  },
  success: function(e) {
      return P.createElement(un, {
          ...e
      }, P.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
      }))
  },
  error: function(e) {
      return P.createElement(un, {
          ...e
      }, P.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
      }))
  },
  spinner: function() {
      return P.createElement("div", {
          className: "Toastify__spinner"
      })
  }
}
, Ec = e=>{
  const {isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: i, playToast: o} = bc(e)
    , {closeButton: s, children: l, autoClose: a, onClick: u, type: d, hideProgressBar: c, closeToast: p, transition: f, position: m, className: h, style: b, bodyClassName: g, bodyStyle: v, progressClassName: _, progressStyle: I, updateId: D, role: j, progress: F, rtl: T, toastId: k, deleteToast: J, isIn: R, isLoading: W, closeOnClick: ee, theme: te} = e
    , X = Ye("Toastify__toast", `Toastify__toast-theme--${te}`, `Toastify__toast--${d}`, {
      "Toastify__toast--rtl": T
  }, {
      "Toastify__toast--close-on-click": ee
  })
    , ce = Ee(h) ? h({
      rtl: T,
      position: m,
      type: d,
      defaultClassName: X
  }) : Ye(X, h)
    , se = function(E) {
      let {theme: B, type: L, isLoading: U, icon: K} = E
        , ne = null;
      const ae = {
          theme: B,
          type: L
      };
      return K === !1 || (Ee(K) ? ne = K({
          ...ae,
          isLoading: U
      }) : O.isValidElement(K) ? ne = O.cloneElement(K, ae) : U ? ne = Qn.spinner() : (ue=>ue in Qn)(L) && (ne = Qn[L](ae))),
      ne
  }(e)
    , ye = !!F || !a
    , C = {
      closeToast: p,
      type: d,
      theme: te
  };
  let w = null;
  return s === !1 || (w = Ee(s) ? s(C) : O.isValidElement(s) ? O.cloneElement(s, C) : function(E) {
      let {closeToast: B, theme: L, ariaLabel: U="close"} = E;
      return P.createElement("button", {
          className: `Toastify__close-button Toastify__close-button--${L}`,
          type: "button",
          onClick: K=>{
              K.stopPropagation(),
              B(K)
          }
          ,
          "aria-label": U
      }, P.createElement("svg", {
          "aria-hidden": "true",
          viewBox: "0 0 14 16"
      }, P.createElement("path", {
          fillRule: "evenodd",
          d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
      })))
  }(C)),
  P.createElement(f, {
      isIn: R,
      done: J,
      position: m,
      preventExitTransition: n,
      nodeRef: r,
      playToast: o
  }, P.createElement("div", {
      id: k,
      onClick: u,
      "data-in": R,
      className: ce,
      ...i,
      style: b,
      ref: r
  }, P.createElement("div", {
      ...R && {
          role: j
      },
      className: Ee(g) ? g({
          type: d
      }) : Ye("Toastify__toast-body", g),
      style: v
  }, se != null && P.createElement("div", {
      className: Ye("Toastify__toast-icon", {
          "Toastify--animate-icon Toastify__zoom-enter": !W
      })
  }, se), P.createElement("div", null, l)), w, P.createElement(_c, {
      ...D && !ye ? {
          key: `pb-${D}`
      } : {},
      rtl: T,
      theme: te,
      delay: a,
      isRunning: t,
      isIn: R,
      closeToast: p,
      hide: c,
      type: d,
      style: I,
      className: _,
      controlledProgress: ye,
      progress: F || 0
  })))
}
, Rn = function(e, t) {
  return t === void 0 && (t = !1),
  {
      enter: `Toastify--animate Toastify__${e}-enter`,
      exit: `Toastify--animate Toastify__${e}-exit`,
      appendPosition: t
  }
}
, Sc = jn(Rn("bounce", !0));
jn(Rn("slide", !0));
jn(Rn("zoom"));
jn(Rn("flip"));
const Pc = {
  position: "top-right",
  transition: Sc,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light"
};
function xc(e) {
  let t = {
      ...Pc,
      ...e
  };
  const n = e.stacked
    , [r,i] = O.useState(!0)
    , o = O.useRef(null)
    , {getToastToRender: s, isToastActive: l, count: a} = gc(t)
    , {className: u, style: d, rtl: c, containerId: p} = t;
  function f(h) {
      const b = Ye("Toastify__toast-container", `Toastify__toast-container--${h}`, {
          "Toastify__toast-container--rtl": c
      });
      return Ee(u) ? u({
          position: h,
          rtl: c,
          defaultClassName: b
      }) : Ye(b, vn(u))
  }
  function m() {
      n && (i(!0),
      re.play())
  }
  return Oc(()=>{
      if (n) {
          var h;
          const b = o.current.querySelectorAll('[data-in="true"]')
            , g = 12
            , v = (h = t.position) == null ? void 0 : h.includes("top");
          let _ = 0
            , I = 0;
          Array.from(b).reverse().forEach((D,j)=>{
              const F = D;
              F.classList.add("Toastify__toast--stacked"),
              j > 0 && (F.dataset.collapsed = `${r}`),
              F.dataset.pos || (F.dataset.pos = v ? "top" : "bot");
              const T = _ * (r ? .2 : 1) + (r ? 0 : g * j);
              F.style.setProperty("--y", `${v ? T : -1 * T}px`),
              F.style.setProperty("--g", `${g}`),
              F.style.setProperty("--s", "" + (1 - (r ? I : 0))),
              _ += F.offsetHeight,
              I += .025
          }
          )
      }
  }
  , [r, a, n]),
  P.createElement("div", {
      ref: o,
      className: "Toastify",
      id: p,
      onMouseEnter: ()=>{
          n && (i(!1),
          re.pause())
      }
      ,
      onMouseLeave: m
  }, s((h,b)=>{
      const g = b.length ? {
          ...d
      } : {
          ...d,
          pointerEvents: "none"
      };
      return P.createElement("div", {
          className: f(h),
          style: g,
          key: `container-${h}`
      }, b.map(v=>{
          let {content: _, props: I} = v;
          return P.createElement(Ec, {
              ...I,
              stacked: n,
              collapseAll: m,
              isIn: l(I.toastId, I.containerId),
              style: I.style,
              key: `toast-${I.key}`
          }, _)
      }
      ))
  }
  ))
}
const ke = {
  color: "#ffffff",
  opacity: .9,
  borderWidth: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000000"
}
, Tc = ({run: e, start: t, pause: n, stop: r, toggleLightCandle: i, setRun: o, playing: s, paused: l, candleVisible: a})=>{
  const u = O.useCallback(()=>o(!0), [o])
    , d = O.useCallback(()=>N.jsxs(N.Fragment, {
      children: [!s || l ? N.jsx("button", {
          id: "start",
          style: ke,
          onClick: t,
          children: N.jsx(Oi, {})
      }) : null, s && !l ? N.jsx("button", {
          id: "pause",
          style: ke,
          onClick: n,
          children: N.jsx(Ci, {})
      }) : null, s ? N.jsx("button", {
          id: "stop",
          style: ke,
          onClick: r,
          children: N.jsx(Ei, {})
      }) : null, N.jsx("button", {
          id: "toggle-candle",
          style: ke,
          onClick: i,
          children: a ? N.jsx(_i, {}) : N.jsx(wi, {})
      }), s ? null : N.jsx("button", {
          id: "user-guide",
          style: ke,
          onClick: u,
          children: N.jsx(Zl, {})
      }), N.jsx(mc.CopyToClipboard, {
          text: [window.location.href, "shared=true"].join("&"),
          onCopy: ()=>re("Copied to clipboard!"),
          children: N.jsx("button", {
              id: "share",
              style: ke,
              children: N.jsx(Si, {})
          })
      })]
  }), [a, u, n, l, s, t, r, i])
    , c = O.useCallback(()=>N.jsxs(N.Fragment, {
      children: [N.jsx("button", {
          id: "start",
          style: ke,
          onClick: t,
          disabled: e,
          children: N.jsx(Oi, {})
      }), N.jsx("button", {
          id: "pause",
          style: ke,
          onClick: n,
          disabled: e,
          children: N.jsx(Ci, {})
      }), N.jsx("button", {
          id: "stop",
          style: ke,
          onClick: r,
          disabled: e,
          children: N.jsx(Ei, {})
      }), N.jsx("button", {
          id: "toggle-candle",
          style: ke,
          onClick: i,
          disabled: e,
          children: a ? N.jsx(_i, {}) : N.jsx(wi, {})
      }), N.jsx("button", {
          id: "share",
          style: ke,
          children: N.jsx(Si, {})
      })]
  }), [a, n, e, t, r, i]);
  return N.jsx("div", {
      style: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 16,
          padding: 16,
          height: 50
      },
      children: e ? c() : d()
  })
}
, kc = O.forwardRef(({name: e, setName: t, shareMode: n, playing: r, run: i, ...o},s)=>{
  console.log("🚀 ~ playing:", r),
  console.log("🚀 ~ shareMode:", n);
  const l = O.useCallback(a=>{
      t(a.target.value),
      window.history.pushState({}, "", `?name=${a.target.value}`)
  }
  , [t]);
  return O.useEffect(()=>{
      const a = window.location.search
        , d = new URLSearchParams(a).get("name");
      d !== null && t(d)
  }
  , [t]),
  N.jsx("div", {
      style: {
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          width: "100dvw",
          zIndex: 40
      },
      children: N.jsx("input", {
          id: "name",
          ref: s,
          style: {
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#f0e4d0",
              opacity: .9,
              border: 0,
              outline: 0,
              backgroundColor: "#000000",
              width: 400,
              ...n || r ? {
                  appearance: "none",
                  backgroundColor: "transparent",
                  textAlign: "center",
                  display: e.length > 0 ? "block" : "none"
              } : {}
          },
          value: e,
          onChange: l,
          disabled: n || r || i,
          readOnly: n || r || i,
          spellCheck: !1,
          autoFocus: !0,
          placeholder: "Enter your name",
          ...o
      })
  })
}
);
function is(e) {
  return t=>typeof t === e
}
var Lc = is("function")
, Ac = e=>e === null
, Ii = e=>Object.prototype.toString.call(e).slice(8, -1) === "RegExp"
, $i = e=>!Ic(e) && !Ac(e) && (Lc(e) || typeof e == "object")
, Ic = is("undefined");
function $c(e, t) {
  const {length: n} = e;
  if (n !== t.length)
      return !1;
  for (let r = n; r-- !== 0; )
      if (!we(e[r], t[r]))
          return !1;
  return !0
}
function Mc(e, t) {
  if (e.byteLength !== t.byteLength)
      return !1;
  const n = new DataView(e.buffer)
    , r = new DataView(t.buffer);
  let i = e.byteLength;
  for (; i--; )
      if (n.getUint8(i) !== r.getUint8(i))
          return !1;
  return !0
}
function Nc(e, t) {
  if (e.size !== t.size)
      return !1;
  for (const n of e.entries())
      if (!t.has(n[0]))
          return !1;
  for (const n of e.entries())
      if (!we(n[1], t.get(n[0])))
          return !1;
  return !0
}
function jc(e, t) {
  if (e.size !== t.size)
      return !1;
  for (const n of e.entries())
      if (!t.has(n[0]))
          return !1;
  return !0
}
function we(e, t) {
  if (e === t)
      return !0;
  if (e && $i(e) && t && $i(t)) {
      if (e.constructor !== t.constructor)
          return !1;
      if (Array.isArray(e) && Array.isArray(t))
          return $c(e, t);
      if (e instanceof Map && t instanceof Map)
          return Nc(e, t);
      if (e instanceof Set && t instanceof Set)
          return jc(e, t);
      if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
          return Mc(e, t);
      if (Ii(e) && Ii(t))
          return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf)
          return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString)
          return e.toString() === t.toString();
      const n = Object.keys(e)
        , r = Object.keys(t);
      if (n.length !== r.length)
          return !1;
      for (let i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i]))
              return !1;
      for (let i = n.length; i-- !== 0; ) {
          const o = n[i];
          if (!(o === "_owner" && e.$$typeof) && !we(e[o], t[o]))
              return !1
      }
      return !0
  }
  return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t
}
var Rc = ["Array", "ArrayBuffer", "AsyncFunction", "AsyncGenerator", "AsyncGeneratorFunction", "Date", "Error", "Function", "Generator", "GeneratorFunction", "HTMLElement", "Map", "Object", "Promise", "RegExp", "Set", "WeakMap", "WeakSet"]
, Dc = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"];
function Dn(e) {
  const t = Object.prototype.toString.call(e).slice(8, -1);
  if (/HTML\w+Element/.test(t))
      return "HTMLElement";
  if (Fc(t))
      return t
}
function Ne(e) {
  return t=>Dn(t) === e
}
function Fc(e) {
  return Rc.includes(e)
}
function xt(e) {
  return t=>typeof t === e
}
function Bc(e) {
  return Dc.includes(e)
}
var zc = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
function A(e) {
  if (e === null)
      return "null";
  switch (typeof e) {
  case "bigint":
      return "bigint";
  case "boolean":
      return "boolean";
  case "number":
      return "number";
  case "string":
      return "string";
  case "symbol":
      return "symbol";
  case "undefined":
      return "undefined"
  }
  if (A.array(e))
      return "Array";
  if (A.plainFunction(e))
      return "Function";
  const t = Dn(e);
  return t || "Object"
}
A.array = Array.isArray;
A.arrayOf = (e,t)=>!A.array(e) && !A.function(t) ? !1 : e.every(n=>t(n));
A.asyncGeneratorFunction = e=>Dn(e) === "AsyncGeneratorFunction";
A.asyncFunction = Ne("AsyncFunction");
A.bigint = xt("bigint");
A.boolean = e=>e === !0 || e === !1;
A.date = Ne("Date");
A.defined = e=>!A.undefined(e);
A.domElement = e=>A.object(e) && !A.plainObject(e) && e.nodeType === 1 && A.string(e.nodeName) && zc.every(t=>t in e);
A.empty = e=>A.string(e) && e.length === 0 || A.array(e) && e.length === 0 || A.object(e) && !A.map(e) && !A.set(e) && Object.keys(e).length === 0 || A.set(e) && e.size === 0 || A.map(e) && e.size === 0;
A.error = Ne("Error");
A.function = xt("function");
A.generator = e=>A.iterable(e) && A.function(e.next) && A.function(e.throw);
A.generatorFunction = Ne("GeneratorFunction");
A.instanceOf = (e,t)=>!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
A.iterable = e=>!A.nullOrUndefined(e) && A.function(e[Symbol.iterator]);
A.map = Ne("Map");
A.nan = e=>Number.isNaN(e);
A.null = e=>e === null;
A.nullOrUndefined = e=>A.null(e) || A.undefined(e);
A.number = e=>xt("number")(e) && !A.nan(e);
A.numericString = e=>A.string(e) && e.length > 0 && !Number.isNaN(Number(e));
A.object = e=>!A.nullOrUndefined(e) && (A.function(e) || typeof e == "object");
A.oneOf = (e,t)=>A.array(e) ? e.indexOf(t) > -1 : !1;
A.plainFunction = Ne("Function");
A.plainObject = e=>{
  if (Dn(e) !== "Object")
      return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.getPrototypeOf({})
}
;
A.primitive = e=>A.null(e) || Bc(typeof e);
A.promise = Ne("Promise");
A.propertyOf = (e,t,n)=>{
  if (!A.object(e) || !t)
      return !1;
  const r = e[t];
  return A.function(n) ? n(r) : A.defined(r)
}
;
A.regexp = Ne("RegExp");
A.set = Ne("Set");
A.string = xt("string");
A.symbol = xt("symbol");
A.undefined = xt("undefined");
A.weakMap = Ne("WeakMap");
A.weakSet = Ne("WeakSet");
var $ = A;
function Uc(...e) {
  return e.every(t=>$.string(t) || $.array(t) || $.plainObject(t))
}
function Hc(e, t, n) {
  return os(e, t) ? [e, t].every($.array) ? !e.some(Di(n)) && t.some(Di(n)) : [e, t].every($.plainObject) ? !Object.entries(e).some(Ri(n)) && Object.entries(t).some(Ri(n)) : t === n : !1
}
function Mi(e, t, n) {
  const {actual: r, key: i, previous: o, type: s} = n
    , l = Be(e, i)
    , a = Be(t, i);
  let u = [l, a].every($.number) && (s === "increased" ? l < a : l > a);
  return $.undefined(r) || (u = u && a === r),
  $.undefined(o) || (u = u && l === o),
  u
}
function Ni(e, t, n) {
  const {key: r, type: i, value: o} = n
    , s = Be(e, r)
    , l = Be(t, r)
    , a = i === "added" ? s : l
    , u = i === "added" ? l : s;
  if (!$.nullOrUndefined(o)) {
      if ($.defined(a)) {
          if ($.array(a) || $.plainObject(a))
              return Hc(a, u, o)
      } else
          return we(u, o);
      return !1
  }
  return [s, l].every($.array) ? !u.every(Dr(a)) : [s, l].every($.plainObject) ? Wc(Object.keys(a), Object.keys(u)) : ![s, l].every(d=>$.primitive(d) && $.defined(d)) && (i === "added" ? !$.defined(s) && $.defined(l) : $.defined(s) && !$.defined(l))
}
function ji(e, t, {key: n}={}) {
  let r = Be(e, n)
    , i = Be(t, n);
  if (!os(r, i))
      throw new TypeError("Inputs have different types");
  if (!Uc(r, i))
      throw new TypeError("Inputs don't have length");
  return [r, i].every($.plainObject) && (r = Object.keys(r),
  i = Object.keys(i)),
  [r, i]
}
function Ri(e) {
  return ([t,n])=>$.array(e) ? we(e, n) || e.some(r=>we(r, n) || $.array(n) && Dr(n)(r)) : $.plainObject(e) && e[t] ? !!e[t] && we(e[t], n) : we(e, n)
}
function Wc(e, t) {
  return t.some(n=>!e.includes(n))
}
function Di(e) {
  return t=>$.array(e) ? e.some(n=>we(n, t) || $.array(t) && Dr(t)(n)) : we(e, t)
}
function At(e, t) {
  return $.array(e) ? e.some(n=>we(n, t)) : we(e, t)
}
function Dr(e) {
  return t=>e.some(n=>we(n, t))
}
function os(...e) {
  return e.every($.array) || e.every($.number) || e.every($.plainObject) || e.every($.string)
}
function Be(e, t) {
  return $.plainObject(e) || $.array(e) ? $.string(t) ? t.split(".").reduce((r,i)=>r && r[i], e) : $.number(t) ? e[t] : e : e
}
function Pn(e, t) {
  if ([e, t].some($.nullOrUndefined))
      throw new Error("Missing required parameters");
  if (![e, t].every(d=>$.plainObject(d) || $.array(d)))
      throw new Error("Expected plain objects or array");
  return {
      added: (d,c)=>{
          try {
              return Ni(e, t, {
                  key: d,
                  type: "added",
                  value: c
              })
          } catch {
              return !1
          }
      }
      ,
      changed: (d,c,p)=>{
          try {
              const f = Be(e, d)
                , m = Be(t, d)
                , h = $.defined(c)
                , b = $.defined(p);
              if (h || b) {
                  const g = b ? At(p, f) : !At(c, f)
                    , v = At(c, m);
                  return g && v
              }
              return [f, m].every($.array) || [f, m].every($.plainObject) ? !we(f, m) : f !== m
          } catch {
              return !1
          }
      }
      ,
      changedFrom: (d,c,p)=>{
          if (!$.defined(d))
              return !1;
          try {
              const f = Be(e, d)
                , m = Be(t, d)
                , h = $.defined(p);
              return At(c, f) && (h ? At(p, m) : !h)
          } catch {
              return !1
          }
      }
      ,
      decreased: (d,c,p)=>{
          if (!$.defined(d))
              return !1;
          try {
              return Mi(e, t, {
                  key: d,
                  actual: c,
                  previous: p,
                  type: "decreased"
              })
          } catch {
              return !1
          }
      }
      ,
      emptied: d=>{
          try {
              const [c,p] = ji(e, t, {
                  key: d
              });
              return !!c.length && !p.length
          } catch {
              return !1
          }
      }
      ,
      filled: d=>{
          try {
              const [c,p] = ji(e, t, {
                  key: d
              });
              return !c.length && !!p.length
          } catch {
              return !1
          }
      }
      ,
      increased: (d,c,p)=>{
          if (!$.defined(d))
              return !1;
          try {
              return Mi(e, t, {
                  key: d,
                  actual: c,
                  previous: p,
                  type: "increased"
              })
          } catch {
              return !1
          }
      }
      ,
      removed: (d,c)=>{
          try {
              return Ni(e, t, {
                  key: d,
                  type: "removed",
                  value: c
              })
          } catch {
              return !1
          }
      }
  }
}
var Vc = new Error("Element already at target scroll position")
, qc = new Error("Scroll cancelled")
, Gc = Math.min
, Fi = Date.now
, Jc = {
  left: Bi("scrollLeft"),
  top: Bi("scrollTop")
};
function Bi(e) {
  return function(n, r, i, o) {
      i = i || {},
      typeof i == "function" && (o = i,
      i = {}),
      typeof o != "function" && (o = Yc);
      var s = Fi()
        , l = n[e]
        , a = i.ease || Kc
        , u = isNaN(i.duration) ? 350 : +i.duration
        , d = !1;
      return l === r ? o(Vc, n[e]) : requestAnimationFrame(p),
      c;
      function c() {
          d = !0
      }
      function p(f) {
          if (d)
              return o(qc, n[e]);
          var m = Fi()
            , h = Gc(1, (m - s) / u)
            , b = a(h);
          n[e] = b * (r - l) + l,
          h < 1 ? requestAnimationFrame(p) : requestAnimationFrame(function() {
              o(null, n[e])
          })
      }
  }
}
function Kc(e) {
  return .5 * (1 - Math.cos(Math.PI * e))
}
function Yc() {}
const Zc = Ln(Jc);
var ss = {
  exports: {}
};
(function(e) {
  (function(t, n) {
      e.exports ? e.exports = n() : t.Scrollparent = n()
  }
  )(Hs, function() {
      function t(r) {
          var i = getComputedStyle(r, null).getPropertyValue("overflow");
          return i.indexOf("scroll") > -1 || i.indexOf("auto") > -1
      }
      function n(r) {
          if (r instanceof HTMLElement || r instanceof SVGElement) {
              for (var i = r.parentNode; i.parentNode; ) {
                  if (t(i))
                      return i;
                  i = i.parentNode
              }
              return document.scrollingElement || document.documentElement
          }
      }
      return n
  })
}
)(ss);
var Xc = ss.exports;
const as = Ln(Xc);
var Qc = function(t) {
  return eu(t) && !tu(t)
};
function eu(e) {
  return !!e && typeof e == "object"
}
function tu(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || iu(e)
}
var nu = typeof Symbol == "function" && Symbol.for
, ru = nu ? Symbol.for("react.element") : 60103;
function iu(e) {
  return e.$$typeof === ru
}
function ou(e) {
  return Array.isArray(e) ? [] : {}
}
function Vt(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Ct(ou(e), e, t) : e
}
function su(e, t, n) {
  return e.concat(t).map(function(r) {
      return Vt(r, n)
  })
}
function au(e, t) {
  if (!t.customMerge)
      return Ct;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Ct
}
function lu(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.propertyIsEnumerable.call(e, t)
  }) : []
}
function zi(e) {
  return Object.keys(e).concat(lu(e))
}
function ls(e, t) {
  try {
      return t in e
  } catch {
      return !1
  }
}
function cu(e, t) {
  return ls(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
}
function uu(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && zi(e).forEach(function(i) {
      r[i] = Vt(e[i], n)
  }),
  zi(t).forEach(function(i) {
      cu(e, i) || (ls(e, i) && n.isMergeableObject(t[i]) ? r[i] = au(i, n)(e[i], t[i], n) : r[i] = Vt(t[i], n))
  }),
  r
}
function Ct(e, t, n) {
  n = n || {},
  n.arrayMerge = n.arrayMerge || su,
  n.isMergeableObject = n.isMergeableObject || Qc,
  n.cloneUnlessOtherwiseSpecified = Vt;
  var r = Array.isArray(t)
    , i = Array.isArray(e)
    , o = r === i;
  return o ? r ? n.arrayMerge(e, t, n) : uu(e, t, n) : Vt(t, n)
}
Ct.all = function(t, n) {
  if (!Array.isArray(t))
      throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
      return Ct(r, i, n)
  }, {})
}
;
var du = Ct
, pu = du;
const $e = Ln(pu);
/**!
* @fileOverview Kickass library to create and place poppers near their reference elements.
* @version 1.16.1
* @license
* Copyright (c) 2016 Federico Zivolo and contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
var Qt = typeof window < "u" && typeof document < "u" && typeof navigator < "u"
, fu = function() {
  for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
      if (Qt && navigator.userAgent.indexOf(e[t]) >= 0)
          return 1;
  return 0
}();
function hu(e) {
  var t = !1;
  return function() {
      t || (t = !0,
      window.Promise.resolve().then(function() {
          t = !1,
          e()
      }))
  }
}
function mu(e) {
  var t = !1;
  return function() {
      t || (t = !0,
      setTimeout(function() {
          t = !1,
          e()
      }, fu))
  }
}
var vu = Qt && window.Promise
, yu = vu ? hu : mu;
function cs(e) {
  var t = {};
  return e && t.toString.call(e) === "[object Function]"
}
function dt(e, t) {
  if (e.nodeType !== 1)
      return [];
  var n = e.ownerDocument.defaultView
    , r = n.getComputedStyle(e, null);
  return t ? r[t] : r
}
function Fr(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host
}
function en(e) {
  if (!e)
      return document.body;
  switch (e.nodeName) {
  case "HTML":
  case "BODY":
      return e.ownerDocument.body;
  case "#document":
      return e.body
  }
  var t = dt(e)
    , n = t.overflow
    , r = t.overflowX
    , i = t.overflowY;
  return /(auto|scroll|overlay)/.test(n + i + r) ? e : en(Fr(e))
}
function us(e) {
  return e && e.referenceNode ? e.referenceNode : e
}
var Ui = Qt && !!(window.MSInputMethodContext && document.documentMode)
, Hi = Qt && /MSIE 10/.test(navigator.userAgent);
function Tt(e) {
  return e === 11 ? Ui : e === 10 ? Hi : Ui || Hi
}
function Ot(e) {
  if (!e)
      return document.documentElement;
  for (var t = Tt(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
      n = (e = e.nextElementSibling).offsetParent;
  var r = n && n.nodeName;
  return !r || r === "BODY" || r === "HTML" ? e ? e.ownerDocument.documentElement : document.documentElement : ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 && dt(n, "position") === "static" ? Ot(n) : n
}
function gu(e) {
  var t = e.nodeName;
  return t === "BODY" ? !1 : t === "HTML" || Ot(e.firstElementChild) === e
}
function _r(e) {
  return e.parentNode !== null ? _r(e.parentNode) : e
}
function xn(e, t) {
  if (!e || !e.nodeType || !t || !t.nodeType)
      return document.documentElement;
  var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
    , r = n ? e : t
    , i = n ? t : e
    , o = document.createRange();
  o.setStart(r, 0),
  o.setEnd(i, 0);
  var s = o.commonAncestorContainer;
  if (e !== s && t !== s || r.contains(i))
      return gu(s) ? s : Ot(s);
  var l = _r(e);
  return l.host ? xn(l.host, t) : xn(e, _r(t).host)
}
function Et(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top"
    , n = t === "top" ? "scrollTop" : "scrollLeft"
    , r = e.nodeName;
  if (r === "BODY" || r === "HTML") {
      var i = e.ownerDocument.documentElement
        , o = e.ownerDocument.scrollingElement || i;
      return o[n]
  }
  return e[n]
}
function bu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
    , r = Et(t, "top")
    , i = Et(t, "left")
    , o = n ? -1 : 1;
  return e.top += r * o,
  e.bottom += r * o,
  e.left += i * o,
  e.right += i * o,
  e
}
function Wi(e, t) {
  var n = t === "x" ? "Left" : "Top"
    , r = n === "Left" ? "Right" : "Bottom";
  return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
}
function Vi(e, t, n, r) {
  return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Tt(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(r["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0)
}
function ds(e) {
  var t = e.body
    , n = e.documentElement
    , r = Tt(10) && getComputedStyle(n);
  return {
      height: Vi("Height", t, n, r),
      width: Vi("Width", t, n, r)
  }
}
var _u = function(e, t) {
  if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function")
}
, wu = function() {
  function e(t, n) {
      for (var r = 0; r < n.length; r++) {
          var i = n[r];
          i.enumerable = i.enumerable || !1,
          i.configurable = !0,
          "value"in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i)
      }
  }
  return function(t, n, r) {
      return n && e(t.prototype, n),
      r && e(t, r),
      t
  }
}()
, St = function(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : e[t] = n,
  e
}
, xe = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
  }
  return e
}
;
function Xe(e) {
  return xe({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
  })
}
function wr(e) {
  var t = {};
  try {
      if (Tt(10)) {
          t = e.getBoundingClientRect();
          var n = Et(e, "top")
            , r = Et(e, "left");
          t.top += n,
          t.left += r,
          t.bottom += n,
          t.right += r
      } else
          t = e.getBoundingClientRect()
  } catch {}
  var i = {
      left: t.left,
      top: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top
  }
    , o = e.nodeName === "HTML" ? ds(e.ownerDocument) : {}
    , s = o.width || e.clientWidth || i.width
    , l = o.height || e.clientHeight || i.height
    , a = e.offsetWidth - s
    , u = e.offsetHeight - l;
  if (a || u) {
      var d = dt(e);
      a -= Wi(d, "x"),
      u -= Wi(d, "y"),
      i.width -= a,
      i.height -= u
  }
  return Xe(i)
}
function Br(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
    , r = Tt(10)
    , i = t.nodeName === "HTML"
    , o = wr(e)
    , s = wr(t)
    , l = en(e)
    , a = dt(t)
    , u = parseFloat(a.borderTopWidth)
    , d = parseFloat(a.borderLeftWidth);
  n && i && (s.top = Math.max(s.top, 0),
  s.left = Math.max(s.left, 0));
  var c = Xe({
      top: o.top - s.top - u,
      left: o.left - s.left - d,
      width: o.width,
      height: o.height
  });
  if (c.marginTop = 0,
  c.marginLeft = 0,
  !r && i) {
      var p = parseFloat(a.marginTop)
        , f = parseFloat(a.marginLeft);
      c.top -= u - p,
      c.bottom -= u - p,
      c.left -= d - f,
      c.right -= d - f,
      c.marginTop = p,
      c.marginLeft = f
  }
  return (r && !n ? t.contains(l) : t === l && l.nodeName !== "BODY") && (c = bu(c, t)),
  c
}
function Cu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    , n = e.ownerDocument.documentElement
    , r = Br(e, n)
    , i = Math.max(n.clientWidth, window.innerWidth || 0)
    , o = Math.max(n.clientHeight, window.innerHeight || 0)
    , s = t ? 0 : Et(n)
    , l = t ? 0 : Et(n, "left")
    , a = {
      top: s - r.top + r.marginTop,
      left: l - r.left + r.marginLeft,
      width: i,
      height: o
  };
  return Xe(a)
}
function ps(e) {
  var t = e.nodeName;
  if (t === "BODY" || t === "HTML")
      return !1;
  if (dt(e, "position") === "fixed")
      return !0;
  var n = Fr(e);
  return n ? ps(n) : !1
}
function fs(e) {
  if (!e || !e.parentElement || Tt())
      return document.documentElement;
  for (var t = e.parentElement; t && dt(t, "transform") === "none"; )
      t = t.parentElement;
  return t || document.documentElement
}
function zr(e, t, n, r) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    , o = {
      top: 0,
      left: 0
  }
    , s = i ? fs(e) : xn(e, us(t));
  if (r === "viewport")
      o = Cu(s, i);
  else {
      var l = void 0;
      r === "scrollParent" ? (l = en(Fr(t)),
      l.nodeName === "BODY" && (l = e.ownerDocument.documentElement)) : r === "window" ? l = e.ownerDocument.documentElement : l = r;
      var a = Br(l, s, i);
      if (l.nodeName === "HTML" && !ps(s)) {
          var u = ds(e.ownerDocument)
            , d = u.height
            , c = u.width;
          o.top += a.top - a.marginTop,
          o.bottom = d + a.top,
          o.left += a.left - a.marginLeft,
          o.right = c + a.left
      } else
          o = a
  }
  n = n || 0;
  var p = typeof n == "number";
  return o.left += p ? n : n.left || 0,
  o.top += p ? n : n.top || 0,
  o.right -= p ? n : n.right || 0,
  o.bottom -= p ? n : n.bottom || 0,
  o
}
function Ou(e) {
  var t = e.width
    , n = e.height;
  return t * n
}
function hs(e, t, n, r, i) {
  var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (e.indexOf("auto") === -1)
      return e;
  var s = zr(n, r, o, i)
    , l = {
      top: {
          width: s.width,
          height: t.top - s.top
      },
      right: {
          width: s.right - t.right,
          height: s.height
      },
      bottom: {
          width: s.width,
          height: s.bottom - t.bottom
      },
      left: {
          width: t.left - s.left,
          height: s.height
      }
  }
    , a = Object.keys(l).map(function(p) {
      return xe({
          key: p
      }, l[p], {
          area: Ou(l[p])
      })
  }).sort(function(p, f) {
      return f.area - p.area
  })
    , u = a.filter(function(p) {
      var f = p.width
        , m = p.height;
      return f >= n.clientWidth && m >= n.clientHeight
  })
    , d = u.length > 0 ? u[0].key : a[0].key
    , c = e.split("-")[1];
  return d + (c ? "-" + c : "")
}
function ms(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null
    , i = r ? fs(t) : xn(t, us(n));
  return Br(n, i, r)
}
function vs(e) {
  var t = e.ownerDocument.defaultView
    , n = t.getComputedStyle(e)
    , r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0)
    , i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0)
    , o = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + r
  };
  return o
}
function Tn(e) {
  var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
  };
  return e.replace(/left|right|bottom|top/g, function(n) {
      return t[n]
  })
}
function ys(e, t, n) {
  n = n.split("-")[0];
  var r = vs(e)
    , i = {
      width: r.width,
      height: r.height
  }
    , o = ["right", "left"].indexOf(n) !== -1
    , s = o ? "top" : "left"
    , l = o ? "left" : "top"
    , a = o ? "height" : "width"
    , u = o ? "width" : "height";
  return i[s] = t[s] + t[a] / 2 - r[a] / 2,
  n === l ? i[l] = t[l] - r[u] : i[l] = t[Tn(l)],
  i
}
function tn(e, t) {
  return Array.prototype.find ? e.find(t) : e.filter(t)[0]
}
function Eu(e, t, n) {
  if (Array.prototype.findIndex)
      return e.findIndex(function(i) {
          return i[t] === n
      });
  var r = tn(e, function(i) {
      return i[t] === n
  });
  return e.indexOf(r)
}
function gs(e, t, n) {
  var r = n === void 0 ? e : e.slice(0, Eu(e, "name", n));
  return r.forEach(function(i) {
      i.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var o = i.function || i.fn;
      i.enabled && cs(o) && (t.offsets.popper = Xe(t.offsets.popper),
      t.offsets.reference = Xe(t.offsets.reference),
      t = o(t, i))
  }),
  t
}
function Su() {
  if (!this.state.isDestroyed) {
      var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {}
      };
      e.offsets.reference = ms(this.state, this.popper, this.reference, this.options.positionFixed),
      e.placement = hs(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
      e.originalPlacement = e.placement,
      e.positionFixed = this.options.positionFixed,
      e.offsets.popper = ys(this.popper, e.offsets.reference, e.placement),
      e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
      e = gs(this.modifiers, e),
      this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
      this.options.onCreate(e))
  }
}
function bs(e, t) {
  return e.some(function(n) {
      var r = n.name
        , i = n.enabled;
      return i && r === t
  })
}
function Ur(e) {
  for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
      var i = t[r]
        , o = i ? "" + i + n : e;
      if (typeof document.body.style[o] < "u")
          return o
  }
  return null
}
function Pu() {
  return this.state.isDestroyed = !0,
  bs(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
  this.popper.style.position = "",
  this.popper.style.top = "",
  this.popper.style.left = "",
  this.popper.style.right = "",
  this.popper.style.bottom = "",
  this.popper.style.willChange = "",
  this.popper.style[Ur("transform")] = ""),
  this.disableEventListeners(),
  this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
  this
}
function _s(e) {
  var t = e.ownerDocument;
  return t ? t.defaultView : window
}
function ws(e, t, n, r) {
  var i = e.nodeName === "BODY"
    , o = i ? e.ownerDocument.defaultView : e;
  o.addEventListener(t, n, {
      passive: !0
  }),
  i || ws(en(o.parentNode), t, n, r),
  r.push(o)
}
function xu(e, t, n, r) {
  n.updateBound = r,
  _s(e).addEventListener("resize", n.updateBound, {
      passive: !0
  });
  var i = en(e);
  return ws(i, "scroll", n.updateBound, n.scrollParents),
  n.scrollElement = i,
  n.eventsEnabled = !0,
  n
}
function Tu() {
  this.state.eventsEnabled || (this.state = xu(this.reference, this.options, this.state, this.scheduleUpdate))
}
function ku(e, t) {
  return _s(e).removeEventListener("resize", t.updateBound),
  t.scrollParents.forEach(function(n) {
      n.removeEventListener("scroll", t.updateBound)
  }),
  t.updateBound = null,
  t.scrollParents = [],
  t.scrollElement = null,
  t.eventsEnabled = !1,
  t
}
function Lu() {
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
  this.state = ku(this.reference, this.state))
}
function Hr(e) {
  return e !== "" && !isNaN(parseFloat(e)) && isFinite(e)
}
function Cr(e, t) {
  Object.keys(t).forEach(function(n) {
      var r = "";
      ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !== -1 && Hr(t[n]) && (r = "px"),
      e.style[n] = t[n] + r
  })
}
function Au(e, t) {
  Object.keys(t).forEach(function(n) {
      var r = t[n];
      r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
  })
}
function Iu(e) {
  return Cr(e.instance.popper, e.styles),
  Au(e.instance.popper, e.attributes),
  e.arrowElement && Object.keys(e.arrowStyles).length && Cr(e.arrowElement, e.arrowStyles),
  e
}
function $u(e, t, n, r, i) {
  var o = ms(i, t, e, n.positionFixed)
    , s = hs(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
  return t.setAttribute("x-placement", s),
  Cr(t, {
      position: n.positionFixed ? "fixed" : "absolute"
  }),
  n
}
function Mu(e, t) {
  var n = e.offsets
    , r = n.popper
    , i = n.reference
    , o = Math.round
    , s = Math.floor
    , l = function(g) {
      return g
  }
    , a = o(i.width)
    , u = o(r.width)
    , d = ["left", "right"].indexOf(e.placement) !== -1
    , c = e.placement.indexOf("-") !== -1
    , p = a % 2 === u % 2
    , f = a % 2 === 1 && u % 2 === 1
    , m = t ? d || c || p ? o : s : l
    , h = t ? o : l;
  return {
      left: m(f && !c && t ? r.left - 1 : r.left),
      top: h(r.top),
      bottom: h(r.bottom),
      right: m(r.right)
  }
}
var Nu = Qt && /Firefox/i.test(navigator.userAgent);
function ju(e, t) {
  var n = t.x
    , r = t.y
    , i = e.offsets.popper
    , o = tn(e.instance.modifiers, function(_) {
      return _.name === "applyStyle"
  }).gpuAcceleration;
  o !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var s = o !== void 0 ? o : t.gpuAcceleration
    , l = Ot(e.instance.popper)
    , a = wr(l)
    , u = {
      position: i.position
  }
    , d = Mu(e, window.devicePixelRatio < 2 || !Nu)
    , c = n === "bottom" ? "top" : "bottom"
    , p = r === "right" ? "left" : "right"
    , f = Ur("transform")
    , m = void 0
    , h = void 0;
  if (c === "bottom" ? l.nodeName === "HTML" ? h = -l.clientHeight + d.bottom : h = -a.height + d.bottom : h = d.top,
  p === "right" ? l.nodeName === "HTML" ? m = -l.clientWidth + d.right : m = -a.width + d.right : m = d.left,
  s && f)
      u[f] = "translate3d(" + m + "px, " + h + "px, 0)",
      u[c] = 0,
      u[p] = 0,
      u.willChange = "transform";
  else {
      var b = c === "bottom" ? -1 : 1
        , g = p === "right" ? -1 : 1;
      u[c] = h * b,
      u[p] = m * g,
      u.willChange = c + ", " + p
  }
  var v = {
      "x-placement": e.placement
  };
  return e.attributes = xe({}, v, e.attributes),
  e.styles = xe({}, u, e.styles),
  e.arrowStyles = xe({}, e.offsets.arrow, e.arrowStyles),
  e
}
function Cs(e, t, n) {
  var r = tn(e, function(l) {
      var a = l.name;
      return a === t
  })
    , i = !!r && e.some(function(l) {
      return l.name === n && l.enabled && l.order < r.order
  });
  if (!i) {
      var o = "`" + t + "`"
        , s = "`" + n + "`";
      console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
  }
  return i
}
function Ru(e, t) {
  var n;
  if (!Cs(e.instance.modifiers, "arrow", "keepTogether"))
      return e;
  var r = t.element;
  if (typeof r == "string") {
      if (r = e.instance.popper.querySelector(r),
      !r)
          return e
  } else if (!e.instance.popper.contains(r))
      return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
      e;
  var i = e.placement.split("-")[0]
    , o = e.offsets
    , s = o.popper
    , l = o.reference
    , a = ["left", "right"].indexOf(i) !== -1
    , u = a ? "height" : "width"
    , d = a ? "Top" : "Left"
    , c = d.toLowerCase()
    , p = a ? "left" : "top"
    , f = a ? "bottom" : "right"
    , m = vs(r)[u];
  l[f] - m < s[c] && (e.offsets.popper[c] -= s[c] - (l[f] - m)),
  l[c] + m > s[f] && (e.offsets.popper[c] += l[c] + m - s[f]),
  e.offsets.popper = Xe(e.offsets.popper);
  var h = l[c] + l[u] / 2 - m / 2
    , b = dt(e.instance.popper)
    , g = parseFloat(b["margin" + d])
    , v = parseFloat(b["border" + d + "Width"])
    , _ = h - e.offsets.popper[c] - g - v;
  return _ = Math.max(Math.min(s[u] - m, _), 0),
  e.arrowElement = r,
  e.offsets.arrow = (n = {},
  St(n, c, Math.round(_)),
  St(n, p, ""),
  n),
  e
}
function Du(e) {
  return e === "end" ? "start" : e === "start" ? "end" : e
}
var Os = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
, er = Os.slice(3);
function qi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    , n = er.indexOf(e)
    , r = er.slice(n + 1).concat(er.slice(0, n));
  return t ? r.reverse() : r
}
var tr = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function Fu(e, t) {
  if (bs(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement)
      return e;
  var n = zr(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
    , r = e.placement.split("-")[0]
    , i = Tn(r)
    , o = e.placement.split("-")[1] || ""
    , s = [];
  switch (t.behavior) {
  case tr.FLIP:
      s = [r, i];
      break;
  case tr.CLOCKWISE:
      s = qi(r);
      break;
  case tr.COUNTERCLOCKWISE:
      s = qi(r, !0);
      break;
  default:
      s = t.behavior
  }
  return s.forEach(function(l, a) {
      if (r !== l || s.length === a + 1)
          return e;
      r = e.placement.split("-")[0],
      i = Tn(r);
      var u = e.offsets.popper
        , d = e.offsets.reference
        , c = Math.floor
        , p = r === "left" && c(u.right) > c(d.left) || r === "right" && c(u.left) < c(d.right) || r === "top" && c(u.bottom) > c(d.top) || r === "bottom" && c(u.top) < c(d.bottom)
        , f = c(u.left) < c(n.left)
        , m = c(u.right) > c(n.right)
        , h = c(u.top) < c(n.top)
        , b = c(u.bottom) > c(n.bottom)
        , g = r === "left" && f || r === "right" && m || r === "top" && h || r === "bottom" && b
        , v = ["top", "bottom"].indexOf(r) !== -1
        , _ = !!t.flipVariations && (v && o === "start" && f || v && o === "end" && m || !v && o === "start" && h || !v && o === "end" && b)
        , I = !!t.flipVariationsByContent && (v && o === "start" && m || v && o === "end" && f || !v && o === "start" && b || !v && o === "end" && h)
        , D = _ || I;
      (p || g || D) && (e.flipped = !0,
      (p || g) && (r = s[a + 1]),
      D && (o = Du(o)),
      e.placement = r + (o ? "-" + o : ""),
      e.offsets.popper = xe({}, e.offsets.popper, ys(e.instance.popper, e.offsets.reference, e.placement)),
      e = gs(e.instance.modifiers, e, "flip"))
  }),
  e
}
function Bu(e) {
  var t = e.offsets
    , n = t.popper
    , r = t.reference
    , i = e.placement.split("-")[0]
    , o = Math.floor
    , s = ["top", "bottom"].indexOf(i) !== -1
    , l = s ? "right" : "bottom"
    , a = s ? "left" : "top"
    , u = s ? "width" : "height";
  return n[l] < o(r[a]) && (e.offsets.popper[a] = o(r[a]) - n[u]),
  n[a] > o(r[l]) && (e.offsets.popper[a] = o(r[l])),
  e
}
function zu(e, t, n, r) {
  var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
    , o = +i[1]
    , s = i[2];
  if (!o)
      return e;
  if (s.indexOf("%") === 0) {
      var l = void 0;
      switch (s) {
      case "%p":
          l = n;
          break;
      case "%":
      case "%r":
      default:
          l = r
      }
      var a = Xe(l);
      return a[t] / 100 * o
  } else if (s === "vh" || s === "vw") {
      var u = void 0;
      return s === "vh" ? u = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : u = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      u / 100 * o
  } else
      return o
}
function Uu(e, t, n, r) {
  var i = [0, 0]
    , o = ["right", "left"].indexOf(r) !== -1
    , s = e.split(/(\+|\-)/).map(function(d) {
      return d.trim()
  })
    , l = s.indexOf(tn(s, function(d) {
      return d.search(/,|\s/) !== -1
  }));
  s[l] && s[l].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var a = /\s*,\s*|\s+/
    , u = l !== -1 ? [s.slice(0, l).concat([s[l].split(a)[0]]), [s[l].split(a)[1]].concat(s.slice(l + 1))] : [s];
  return u = u.map(function(d, c) {
      var p = (c === 1 ? !o : o) ? "height" : "width"
        , f = !1;
      return d.reduce(function(m, h) {
          return m[m.length - 1] === "" && ["+", "-"].indexOf(h) !== -1 ? (m[m.length - 1] = h,
          f = !0,
          m) : f ? (m[m.length - 1] += h,
          f = !1,
          m) : m.concat(h)
      }, []).map(function(m) {
          return zu(m, p, t, n)
      })
  }),
  u.forEach(function(d, c) {
      d.forEach(function(p, f) {
          Hr(p) && (i[c] += p * (d[f - 1] === "-" ? -1 : 1))
      })
  }),
  i
}
function Hu(e, t) {
  var n = t.offset
    , r = e.placement
    , i = e.offsets
    , o = i.popper
    , s = i.reference
    , l = r.split("-")[0]
    , a = void 0;
  return Hr(+n) ? a = [+n, 0] : a = Uu(n, o, s, l),
  l === "left" ? (o.top += a[0],
  o.left -= a[1]) : l === "right" ? (o.top += a[0],
  o.left += a[1]) : l === "top" ? (o.left += a[0],
  o.top -= a[1]) : l === "bottom" && (o.left += a[0],
  o.top += a[1]),
  e.popper = o,
  e
}
function Wu(e, t) {
  var n = t.boundariesElement || Ot(e.instance.popper);
  e.instance.reference === n && (n = Ot(n));
  var r = Ur("transform")
    , i = e.instance.popper.style
    , o = i.top
    , s = i.left
    , l = i[r];
  i.top = "",
  i.left = "",
  i[r] = "";
  var a = zr(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
  i.top = o,
  i.left = s,
  i[r] = l,
  t.boundaries = a;
  var u = t.priority
    , d = e.offsets.popper
    , c = {
      primary: function(f) {
          var m = d[f];
          return d[f] < a[f] && !t.escapeWithReference && (m = Math.max(d[f], a[f])),
          St({}, f, m)
      },
      secondary: function(f) {
          var m = f === "right" ? "left" : "top"
            , h = d[m];
          return d[f] > a[f] && !t.escapeWithReference && (h = Math.min(d[m], a[f] - (f === "right" ? d.width : d.height))),
          St({}, m, h)
      }
  };
  return u.forEach(function(p) {
      var f = ["left", "top"].indexOf(p) !== -1 ? "primary" : "secondary";
      d = xe({}, d, c[f](p))
  }),
  e.offsets.popper = d,
  e
}
function Vu(e) {
  var t = e.placement
    , n = t.split("-")[0]
    , r = t.split("-")[1];
  if (r) {
      var i = e.offsets
        , o = i.reference
        , s = i.popper
        , l = ["bottom", "top"].indexOf(n) !== -1
        , a = l ? "left" : "top"
        , u = l ? "width" : "height"
        , d = {
          start: St({}, a, o[a]),
          end: St({}, a, o[a] + o[u] - s[u])
      };
      e.offsets.popper = xe({}, s, d[r])
  }
  return e
}
function qu(e) {
  if (!Cs(e.instance.modifiers, "hide", "preventOverflow"))
      return e;
  var t = e.offsets.reference
    , n = tn(e.instance.modifiers, function(r) {
      return r.name === "preventOverflow"
  }).boundaries;
  if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
      if (e.hide === !0)
          return e;
      e.hide = !0,
      e.attributes["x-out-of-boundaries"] = ""
  } else {
      if (e.hide === !1)
          return e;
      e.hide = !1,
      e.attributes["x-out-of-boundaries"] = !1
  }
  return e
}
function Gu(e) {
  var t = e.placement
    , n = t.split("-")[0]
    , r = e.offsets
    , i = r.popper
    , o = r.reference
    , s = ["left", "right"].indexOf(n) !== -1
    , l = ["top", "left"].indexOf(n) === -1;
  return i[s ? "left" : "top"] = o[n] - (l ? i[s ? "width" : "height"] : 0),
  e.placement = Tn(t),
  e.offsets.popper = Xe(i),
  e
}
var Ju = {
  shift: {
      order: 100,
      enabled: !0,
      fn: Vu
  },
  offset: {
      order: 200,
      enabled: !0,
      fn: Hu,
      offset: 0
  },
  preventOverflow: {
      order: 300,
      enabled: !0,
      fn: Wu,
      priority: ["left", "right", "top", "bottom"],
      padding: 5,
      boundariesElement: "scrollParent"
  },
  keepTogether: {
      order: 400,
      enabled: !0,
      fn: Bu
  },
  arrow: {
      order: 500,
      enabled: !0,
      fn: Ru,
      element: "[x-arrow]"
  },
  flip: {
      order: 600,
      enabled: !0,
      fn: Fu,
      behavior: "flip",
      padding: 5,
      boundariesElement: "viewport",
      flipVariations: !1,
      flipVariationsByContent: !1
  },
  inner: {
      order: 700,
      enabled: !1,
      fn: Gu
  },
  hide: {
      order: 800,
      enabled: !0,
      fn: qu
  },
  computeStyle: {
      order: 850,
      enabled: !0,
      fn: ju,
      gpuAcceleration: !0,
      x: "bottom",
      y: "right"
  },
  applyStyle: {
      order: 900,
      enabled: !0,
      fn: Iu,
      onLoad: $u,
      gpuAcceleration: void 0
  }
}
, Ku = {
  placement: "bottom",
  positionFixed: !1,
  eventsEnabled: !0,
  removeOnDestroy: !1,
  onCreate: function() {},
  onUpdate: function() {},
  modifiers: Ju
}
, Fn = function() {
  function e(t, n) {
      var r = this
        , i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      _u(this, e),
      this.scheduleUpdate = function() {
          return requestAnimationFrame(r.update)
      }
      ,
      this.update = yu(this.update.bind(this)),
      this.options = xe({}, e.Defaults, i),
      this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
      },
      this.reference = t && t.jquery ? t[0] : t,
      this.popper = n && n.jquery ? n[0] : n,
      this.options.modifiers = {},
      Object.keys(xe({}, e.Defaults.modifiers, i.modifiers)).forEach(function(s) {
          r.options.modifiers[s] = xe({}, e.Defaults.modifiers[s] || {}, i.modifiers ? i.modifiers[s] : {})
      }),
      this.modifiers = Object.keys(this.options.modifiers).map(function(s) {
          return xe({
              name: s
          }, r.options.modifiers[s])
      }).sort(function(s, l) {
          return s.order - l.order
      }),
      this.modifiers.forEach(function(s) {
          s.enabled && cs(s.onLoad) && s.onLoad(r.reference, r.popper, r.options, s, r.state)
      }),
      this.update();
      var o = this.options.eventsEnabled;
      o && this.enableEventListeners(),
      this.state.eventsEnabled = o
  }
  return wu(e, [{
      key: "update",
      value: function() {
          return Su.call(this)
      }
  }, {
      key: "destroy",
      value: function() {
          return Pu.call(this)
      }
  }, {
      key: "enableEventListeners",
      value: function() {
          return Tu.call(this)
      }
  }, {
      key: "disableEventListeners",
      value: function() {
          return Lu.call(this)
      }
  }]),
  e
}();
Fn.Utils = (typeof window < "u" ? window : global).PopperUtils;
Fn.placements = Os;
Fn.Defaults = Ku;
const Gi = Fn;
var Yu = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"]
, Zu = ["Array", "ArrayBuffer", "AsyncFunction", "AsyncGenerator", "AsyncGeneratorFunction", "Date", "Error", "Function", "Generator", "GeneratorFunction", "HTMLElement", "Map", "Object", "Promise", "RegExp", "Set", "WeakMap", "WeakSet"]
, Xu = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"];
function Bn(e) {
  var t = Object.prototype.toString.call(e).slice(8, -1);
  if (/HTML\w+Element/.test(t))
      return "HTMLElement";
  if (Qu(t))
      return t
}
function je(e) {
  return function(t) {
      return Bn(t) === e
  }
}
function Qu(e) {
  return Zu.includes(e)
}
function kt(e) {
  return function(t) {
      return typeof t === e
  }
}
function ed(e) {
  return Xu.includes(e)
}
function y(e) {
  if (e === null)
      return "null";
  switch (typeof e) {
  case "bigint":
      return "bigint";
  case "boolean":
      return "boolean";
  case "number":
      return "number";
  case "string":
      return "string";
  case "symbol":
      return "symbol";
  case "undefined":
      return "undefined"
  }
  if (y.array(e))
      return "Array";
  if (y.plainFunction(e))
      return "Function";
  var t = Bn(e);
  return t || "Object"
}
y.array = Array.isArray;
y.arrayOf = function(e, t) {
  return !y.array(e) && !y.function(t) ? !1 : e.every(function(n) {
      return t(n)
  })
}
;
y.asyncGeneratorFunction = function(e) {
  return Bn(e) === "AsyncGeneratorFunction"
}
;
y.asyncFunction = je("AsyncFunction");
y.bigint = kt("bigint");
y.boolean = function(e) {
  return e === !0 || e === !1
}
;
y.date = je("Date");
y.defined = function(e) {
  return !y.undefined(e)
}
;
y.domElement = function(e) {
  return y.object(e) && !y.plainObject(e) && e.nodeType === 1 && y.string(e.nodeName) && Yu.every(function(t) {
      return t in e
  })
}
;
y.empty = function(e) {
  return y.string(e) && e.length === 0 || y.array(e) && e.length === 0 || y.object(e) && !y.map(e) && !y.set(e) && Object.keys(e).length === 0 || y.set(e) && e.size === 0 || y.map(e) && e.size === 0
}
;
y.error = je("Error");
y.function = kt("function");
y.generator = function(e) {
  return y.iterable(e) && y.function(e.next) && y.function(e.throw)
}
;
y.generatorFunction = je("GeneratorFunction");
y.instanceOf = function(e, t) {
  return !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype
}
;
y.iterable = function(e) {
  return !y.nullOrUndefined(e) && y.function(e[Symbol.iterator])
}
;
y.map = je("Map");
y.nan = function(e) {
  return Number.isNaN(e)
}
;
y.null = function(e) {
  return e === null
}
;
y.nullOrUndefined = function(e) {
  return y.null(e) || y.undefined(e)
}
;
y.number = function(e) {
  return kt("number")(e) && !y.nan(e)
}
;
y.numericString = function(e) {
  return y.string(e) && e.length > 0 && !Number.isNaN(Number(e))
}
;
y.object = function(e) {
  return !y.nullOrUndefined(e) && (y.function(e) || typeof e == "object")
}
;
y.oneOf = function(e, t) {
  return y.array(e) ? e.indexOf(t) > -1 : !1
}
;
y.plainFunction = je("Function");
y.plainObject = function(e) {
  if (Bn(e) !== "Object")
      return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.getPrototypeOf({})
}
;
y.primitive = function(e) {
  return y.null(e) || ed(typeof e)
}
;
y.promise = je("Promise");
y.propertyOf = function(e, t, n) {
  if (!y.object(e) || !t)
      return !1;
  var r = e[t];
  return y.function(n) ? n(r) : y.defined(r)
}
;
y.regexp = je("RegExp");
y.set = je("Set");
y.string = kt("string");
y.symbol = kt("symbol");
y.undefined = kt("undefined");
y.weakMap = je("WeakMap");
y.weakSet = je("WeakSet");
function Es(e) {
  return function(t) {
      return typeof t === e
  }
}
var td = Es("function")
, nd = function(e) {
  return e === null
}
, Ji = function(e) {
  return Object.prototype.toString.call(e).slice(8, -1) === "RegExp"
}
, Ki = function(e) {
  return !rd(e) && !nd(e) && (td(e) || typeof e == "object")
}
, rd = Es("undefined")
, Or = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , n = t && e[t]
    , r = 0;
  if (n)
      return n.call(e);
  if (e && typeof e.length == "number")
      return {
          next: function() {
              return e && r >= e.length && (e = void 0),
              {
                  value: e && e[r++],
                  done: !e
              }
          }
      };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
};
function id(e, t) {
  var n = e.length;
  if (n !== t.length)
      return !1;
  for (var r = n; r-- !== 0; )
      if (!Ce(e[r], t[r]))
          return !1;
  return !0
}
function od(e, t) {
  if (e.byteLength !== t.byteLength)
      return !1;
  for (var n = new DataView(e.buffer), r = new DataView(t.buffer), i = e.byteLength; i--; )
      if (n.getUint8(i) !== r.getUint8(i))
          return !1;
  return !0
}
function sd(e, t) {
  var n, r, i, o;
  if (e.size !== t.size)
      return !1;
  try {
      for (var s = Or(e.entries()), l = s.next(); !l.done; l = s.next()) {
          var a = l.value;
          if (!t.has(a[0]))
              return !1
      }
  } catch (c) {
      n = {
          error: c
      }
  } finally {
      try {
          l && !l.done && (r = s.return) && r.call(s)
      } finally {
          if (n)
              throw n.error
      }
  }
  try {
      for (var u = Or(e.entries()), d = u.next(); !d.done; d = u.next()) {
          var a = d.value;
          if (!Ce(a[1], t.get(a[0])))
              return !1
      }
  } catch (c) {
      i = {
          error: c
      }
  } finally {
      try {
          d && !d.done && (o = u.return) && o.call(u)
      } finally {
          if (i)
              throw i.error
      }
  }
  return !0
}
function ad(e, t) {
  var n, r;
  if (e.size !== t.size)
      return !1;
  try {
      for (var i = Or(e.entries()), o = i.next(); !o.done; o = i.next()) {
          var s = o.value;
          if (!t.has(s[0]))
              return !1
      }
  } catch (l) {
      n = {
          error: l
      }
  } finally {
      try {
          o && !o.done && (r = i.return) && r.call(i)
      } finally {
          if (n)
              throw n.error
      }
  }
  return !0
}
function Ce(e, t) {
  if (e === t)
      return !0;
  if (e && Ki(e) && t && Ki(t)) {
      if (e.constructor !== t.constructor)
          return !1;
      if (Array.isArray(e) && Array.isArray(t))
          return id(e, t);
      if (e instanceof Map && t instanceof Map)
          return sd(e, t);
      if (e instanceof Set && t instanceof Set)
          return ad(e, t);
      if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t))
          return od(e, t);
      if (Ji(e) && Ji(t))
          return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf)
          return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString)
          return e.toString() === t.toString();
      var n = Object.keys(e)
        , r = Object.keys(t);
      if (n.length !== r.length)
          return !1;
      for (var i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i]))
              return !1;
      for (var i = n.length; i-- !== 0; ) {
          var o = n[i];
          if (!(o === "_owner" && e.$$typeof) && !Ce(e[o], t[o]))
              return !1
      }
      return !0
  }
  return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t
}
function ld() {
  for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
  return e.every(function(n) {
      return y.string(n) || y.array(n) || y.plainObject(n)
  })
}
function cd(e, t, n) {
  return Ss(e, t) ? [e, t].every(y.array) ? !e.some(eo(n)) && t.some(eo(n)) : [e, t].every(y.plainObject) ? !Object.entries(e).some(Qi(n)) && Object.entries(t).some(Qi(n)) : t === n : !1
}
function Yi(e, t, n) {
  var r = n.actual
    , i = n.key
    , o = n.previous
    , s = n.type
    , l = ze(e, i)
    , a = ze(t, i)
    , u = [l, a].every(y.number) && (s === "increased" ? l < a : l > a);
  return y.undefined(r) || (u = u && a === r),
  y.undefined(o) || (u = u && l === o),
  u
}
function Zi(e, t, n) {
  var r = n.key
    , i = n.type
    , o = n.value
    , s = ze(e, r)
    , l = ze(t, r)
    , a = i === "added" ? s : l
    , u = i === "added" ? l : s;
  if (!y.nullOrUndefined(o)) {
      if (y.defined(a)) {
          if (y.array(a) || y.plainObject(a))
              return cd(a, u, o)
      } else
          return Ce(u, o);
      return !1
  }
  return [s, l].every(y.array) ? !u.every(Wr(a)) : [s, l].every(y.plainObject) ? ud(Object.keys(a), Object.keys(u)) : ![s, l].every(function(d) {
      return y.primitive(d) && y.defined(d)
  }) && (i === "added" ? !y.defined(s) && y.defined(l) : y.defined(s) && !y.defined(l))
}
function Xi(e, t, n) {
  var r = n === void 0 ? {} : n
    , i = r.key
    , o = ze(e, i)
    , s = ze(t, i);
  if (!Ss(o, s))
      throw new TypeError("Inputs have different types");
  if (!ld(o, s))
      throw new TypeError("Inputs don't have length");
  return [o, s].every(y.plainObject) && (o = Object.keys(o),
  s = Object.keys(s)),
  [o, s]
}
function Qi(e) {
  return function(t) {
      var n = t[0]
        , r = t[1];
      return y.array(e) ? Ce(e, r) || e.some(function(i) {
          return Ce(i, r) || y.array(r) && Wr(r)(i)
      }) : y.plainObject(e) && e[n] ? !!e[n] && Ce(e[n], r) : Ce(e, r)
  }
}
function ud(e, t) {
  return t.some(function(n) {
      return !e.includes(n)
  })
}
function eo(e) {
  return function(t) {
      return y.array(e) ? e.some(function(n) {
          return Ce(n, t) || y.array(t) && Wr(t)(n)
      }) : Ce(e, t)
  }
}
function It(e, t) {
  return y.array(e) ? e.some(function(n) {
      return Ce(n, t)
  }) : Ce(e, t)
}
function Wr(e) {
  return function(t) {
      return e.some(function(n) {
          return Ce(n, t)
      })
  }
}
function Ss() {
  for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
  return e.every(y.array) || e.every(y.number) || e.every(y.plainObject) || e.every(y.string)
}
function ze(e, t) {
  if (y.plainObject(e) || y.array(e)) {
      if (y.string(t)) {
          var n = t.split(".");
          return n.reduce(function(r, i) {
              return r && r[i]
          }, e)
      }
      return y.number(t) ? e[t] : e
  }
  return e
}
function dd(e, t) {
  if ([e, t].some(y.nullOrUndefined))
      throw new Error("Missing required parameters");
  if (![e, t].every(function(c) {
      return y.plainObject(c) || y.array(c)
  }))
      throw new Error("Expected plain objects or array");
  var n = function(c, p) {
      try {
          return Zi(e, t, {
              key: c,
              type: "added",
              value: p
          })
      } catch {
          return !1
      }
  }
    , r = function(c, p, f) {
      try {
          var m = ze(e, c)
            , h = ze(t, c)
            , b = y.defined(p)
            , g = y.defined(f);
          if (b || g) {
              var v = g ? It(f, m) : !It(p, m)
                , _ = It(p, h);
              return v && _
          }
          return [m, h].every(y.array) || [m, h].every(y.plainObject) ? !Ce(m, h) : m !== h
      } catch {
          return !1
      }
  }
    , i = function(c, p, f) {
      if (!y.defined(c))
          return !1;
      try {
          var m = ze(e, c)
            , h = ze(t, c)
            , b = y.defined(f);
          return It(p, m) && (b ? It(f, h) : !b)
      } catch {
          return !1
      }
  }
    , o = function(c, p) {
      return y.defined(c) ? r(c, p) : !1
  }
    , s = function(c, p, f) {
      if (!y.defined(c))
          return !1;
      try {
          return Yi(e, t, {
              key: c,
              actual: p,
              previous: f,
              type: "decreased"
          })
      } catch {
          return !1
      }
  }
    , l = function(c) {
      try {
          var p = Xi(e, t, {
              key: c
          })
            , f = p[0]
            , m = p[1];
          return !!f.length && !m.length
      } catch {
          return !1
      }
  }
    , a = function(c) {
      try {
          var p = Xi(e, t, {
              key: c
          })
            , f = p[0]
            , m = p[1];
          return !f.length && !!m.length
      } catch {
          return !1
      }
  }
    , u = function(c, p, f) {
      if (!y.defined(c))
          return !1;
      try {
          return Yi(e, t, {
              key: c,
              actual: p,
              previous: f,
              type: "increased"
          })
      } catch {
          return !1
      }
  }
    , d = function(c, p) {
      try {
          return Zi(e, t, {
              key: c,
              type: "removed",
              value: p
          })
      } catch {
          return !1
      }
  };
  return {
      added: n,
      changed: r,
      changedFrom: i,
      changedTo: o,
      decreased: s,
      emptied: l,
      filled: a,
      increased: u,
      removed: d
  }
}
function to(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? to(Object(n), !0).forEach(function(r) {
          ve(e, r, n[r])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : to(Object(n)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
      })
  }
  return e
}
function nn(e, t) {
  if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function")
}
function no(e, t) {
  for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1,
      r.configurable = !0,
      "value"in r && (r.writable = !0),
      Object.defineProperty(e, xs(r.key), r)
  }
}
function rn(e, t, n) {
  return t && no(e.prototype, t),
  n && no(e, n),
  Object.defineProperty(e, "prototype", {
      writable: !1
  }),
  e
}
function ve(e, t, n) {
  return t = xs(t),
  t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : e[t] = n,
  e
}
function on(e, t) {
  if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
      constructor: {
          value: e,
          writable: !0,
          configurable: !0
      }
  }),
  Object.defineProperty(e, "prototype", {
      writable: !1
  }),
  t && Er(e, t)
}
function kn(e) {
  return kn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
      return n.__proto__ || Object.getPrototypeOf(n)
  }
  ,
  kn(e)
}
function Er(e, t) {
  return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
      return r.__proto__ = i,
      r
  }
  ,
  Er(e, t)
}
function pd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
  if (typeof Proxy == "function")
      return !0;
  try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
      !0
  } catch {
      return !1
  }
}
function fd(e, t) {
  if (e == null)
      return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
      i = r[o],
      !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n
}
function Ps(e, t) {
  if (e == null)
      return {};
  var n = fd(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++)
          r = o[i],
          !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
function Ve(e) {
  if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
function hd(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
      return t;
  if (t !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
  return Ve(e)
}
function sn(e) {
  var t = pd();
  return function() {
      var r = kn(e), i;
      if (t) {
          var o = kn(this).constructor;
          i = Reflect.construct(r, arguments, o)
      } else
          i = r.apply(this, arguments);
      return hd(this, i)
  }
}
function md(e, t) {
  if (typeof e != "object" || e === null)
      return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (typeof r != "object")
          return r;
      throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}
function xs(e) {
  var t = md(e, "string");
  return typeof t == "symbol" ? t : String(t)
}
var vd = {
  flip: {
      padding: 20
  },
  preventOverflow: {
      padding: 10
  }
}
, yd = "The typeValidator argument must be a function with the signature function(props, propName, componentName)."
, gd = "The error message is optional, but must be a string if provided.";
function bd(e, t, n, r) {
  return typeof e == "boolean" ? e : typeof e == "function" ? e(t, n, r) : e ? !!e : !1
}
function _d(e, t) {
  return Object.hasOwnProperty.call(e, t)
}
function wd(e, t, n, r) {
  return r ? new Error(r) : new Error("Required ".concat(e[t], " `").concat(t, "` was not specified in `").concat(n, "`."))
}
function Cd(e, t) {
  if (typeof e != "function")
      throw new TypeError(yd);
  if (t && typeof t != "string")
      throw new TypeError(gd)
}
function ro(e, t, n) {
  return Cd(e, n),
  function(r, i, o) {
      for (var s = arguments.length, l = new Array(s > 3 ? s - 3 : 0), a = 3; a < s; a++)
          l[a - 3] = arguments[a];
      return bd(t, r, i, o) ? _d(r, i) ? e.apply(void 0, [r, i, o].concat(l)) : wd(r, i, o, n) : e.apply(void 0, [r, i, o].concat(l))
  }
}
var q = {
  INIT: "init",
  IDLE: "idle",
  OPENING: "opening",
  OPEN: "open",
  CLOSING: "closing",
  ERROR: "error"
}
, $t = pn.createPortal !== void 0;
function De() {
  return !!(typeof window < "u" && window.document && window.document.createElement)
}
function nr() {
  return "ontouchstart"in window && /Mobi/.test(navigator.userAgent)
}
function dn(e) {
  var t = e.title
    , n = e.data
    , r = e.warn
    , i = r === void 0 ? !1 : r
    , o = e.debug
    , s = o === void 0 ? !1 : o
    , l = i ? console.warn || console.error : console.log;
  s && t && n && (console.groupCollapsed("%creact-floater: ".concat(t), "color: #9b00ff; font-weight: bold; font-size: 12px;"),
  Array.isArray(n) ? n.forEach(function(a) {
      y.plainObject(a) && a.key ? l.apply(console, [a.key, a.value]) : l.apply(console, [a])
  }) : l.apply(console, [n]),
  console.groupEnd())
}
function Od(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  e.addEventListener(t, n, r)
}
function Ed(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  e.removeEventListener(t, n, r)
}
function Sd(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i;
  i = function(s) {
      n(s),
      Ed(e, t, i)
  }
  ,
  Od(e, t, i, r)
}
function io() {}
var Ts = function(e) {
  on(n, e);
  var t = sn(n);
  function n() {
      return nn(this, n),
      t.apply(this, arguments)
  }
  return rn(n, [{
      key: "componentDidMount",
      value: function() {
          De() && (this.node || this.appendNode(),
          $t || this.renderPortal())
      }
  }, {
      key: "componentDidUpdate",
      value: function() {
          De() && ($t || this.renderPortal())
      }
  }, {
      key: "componentWillUnmount",
      value: function() {
          !De() || !this.node || ($t || pn.unmountComponentAtNode(this.node),
          this.node && this.node.parentNode === document.body && (document.body.removeChild(this.node),
          this.node = void 0))
      }
  }, {
      key: "appendNode",
      value: function() {
          var i = this.props
            , o = i.id
            , s = i.zIndex;
          this.node || (this.node = document.createElement("div"),
          o && (this.node.id = o),
          s && (this.node.style.zIndex = s),
          document.body.appendChild(this.node))
      }
  }, {
      key: "renderPortal",
      value: function() {
          if (!De())
              return null;
          var i = this.props
            , o = i.children
            , s = i.setRef;
          if (this.node || this.appendNode(),
          $t)
              return pn.createPortal(o, this.node);
          var l = pn.unstable_renderSubtreeIntoContainer(this, o.length > 1 ? P.createElement("div", null, o) : o[0], this.node);
          return s(l),
          null
      }
  }, {
      key: "renderReact16",
      value: function() {
          var i = this.props
            , o = i.hasChildren
            , s = i.placement
            , l = i.target;
          return o ? this.renderPortal() : l || s === "center" ? this.renderPortal() : null
      }
  }, {
      key: "render",
      value: function() {
          return $t ? this.renderReact16() : null
      }
  }]),
  n
}(P.Component);
ve(Ts, "propTypes", {
  children: S.oneOfType([S.element, S.array]),
  hasChildren: S.bool,
  id: S.oneOfType([S.string, S.number]),
  placement: S.string,
  setRef: S.func.isRequired,
  target: S.oneOfType([S.object, S.string]),
  zIndex: S.number
});
var ks = function(e) {
  on(n, e);
  var t = sn(n);
  function n() {
      return nn(this, n),
      t.apply(this, arguments)
  }
  return rn(n, [{
      key: "parentStyle",
      get: function() {
          var i = this.props
            , o = i.placement
            , s = i.styles
            , l = s.arrow.length
            , a = {
              pointerEvents: "none",
              position: "absolute",
              width: "100%"
          };
          return o.startsWith("top") ? (a.bottom = 0,
          a.left = 0,
          a.right = 0,
          a.height = l) : o.startsWith("bottom") ? (a.left = 0,
          a.right = 0,
          a.top = 0,
          a.height = l) : o.startsWith("left") ? (a.right = 0,
          a.top = 0,
          a.bottom = 0) : o.startsWith("right") && (a.left = 0,
          a.top = 0),
          a
      }
  }, {
      key: "render",
      value: function() {
          var i = this.props, o = i.placement, s = i.setArrowRef, l = i.styles, a = l.arrow, u = a.color, d = a.display, c = a.length, p = a.margin, f = a.position, m = a.spread, h = {
              display: d,
              position: f
          }, b, g = m, v = c;
          return o.startsWith("top") ? (b = "0,0 ".concat(g / 2, ",").concat(v, " ").concat(g, ",0"),
          h.bottom = 0,
          h.marginLeft = p,
          h.marginRight = p) : o.startsWith("bottom") ? (b = "".concat(g, ",").concat(v, " ").concat(g / 2, ",0 0,").concat(v),
          h.top = 0,
          h.marginLeft = p,
          h.marginRight = p) : o.startsWith("left") ? (v = m,
          g = c,
          b = "0,0 ".concat(g, ",").concat(v / 2, " 0,").concat(v),
          h.right = 0,
          h.marginTop = p,
          h.marginBottom = p) : o.startsWith("right") && (v = m,
          g = c,
          b = "".concat(g, ",").concat(v, " ").concat(g, ",0 0,").concat(v / 2),
          h.left = 0,
          h.marginTop = p,
          h.marginBottom = p),
          P.createElement("div", {
              className: "__floater__arrow",
              style: this.parentStyle
          }, P.createElement("span", {
              ref: s,
              style: h
          }, P.createElement("svg", {
              width: g,
              height: v,
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg"
          }, P.createElement("polygon", {
              points: b,
              fill: u
          }))))
      }
  }]),
  n
}(P.Component);
ve(ks, "propTypes", {
  placement: S.string.isRequired,
  setArrowRef: S.func.isRequired,
  styles: S.object.isRequired
});
var Pd = ["color", "height", "width"];
function Ls(e) {
  var t = e.handleClick
    , n = e.styles
    , r = n.color
    , i = n.height
    , o = n.width
    , s = Ps(n, Pd);
  return P.createElement("button", {
      "aria-label": "close",
      onClick: t,
      style: s,
      type: "button"
  }, P.createElement("svg", {
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      viewBox: "0 0 18 18",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid"
  }, P.createElement("g", null, P.createElement("path", {
      d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
      fill: r
  }))))
}
Ls.propTypes = {
  handleClick: S.func.isRequired,
  styles: S.object.isRequired
};
function As(e) {
  var t = e.content
    , n = e.footer
    , r = e.handleClick
    , i = e.open
    , o = e.positionWrapper
    , s = e.showCloseButton
    , l = e.title
    , a = e.styles
    , u = {
      content: P.isValidElement(t) ? t : P.createElement("div", {
          className: "__floater__content",
          style: a.content
      }, t)
  };
  return l && (u.title = P.isValidElement(l) ? l : P.createElement("div", {
      className: "__floater__title",
      style: a.title
  }, l)),
  n && (u.footer = P.isValidElement(n) ? n : P.createElement("div", {
      className: "__floater__footer",
      style: a.footer
  }, n)),
  (s || o) && !y.boolean(i) && (u.close = P.createElement(Ls, {
      styles: a.close,
      handleClick: r
  })),
  P.createElement("div", {
      className: "__floater__container",
      style: a.container
  }, u.close, u.title, u.content, u.footer)
}
As.propTypes = {
  content: S.node.isRequired,
  footer: S.node,
  handleClick: S.func.isRequired,
  open: S.bool,
  positionWrapper: S.bool.isRequired,
  showCloseButton: S.bool.isRequired,
  styles: S.object.isRequired,
  title: S.node
};
var Is = function(e) {
  on(n, e);
  var t = sn(n);
  function n() {
      return nn(this, n),
      t.apply(this, arguments)
  }
  return rn(n, [{
      key: "style",
      get: function() {
          var i = this.props
            , o = i.disableAnimation
            , s = i.component
            , l = i.placement
            , a = i.hideArrow
            , u = i.status
            , d = i.styles
            , c = d.arrow.length
            , p = d.floater
            , f = d.floaterCentered
            , m = d.floaterClosing
            , h = d.floaterOpening
            , b = d.floaterWithAnimation
            , g = d.floaterWithComponent
            , v = {};
          return a || (l.startsWith("top") ? v.padding = "0 0 ".concat(c, "px") : l.startsWith("bottom") ? v.padding = "".concat(c, "px 0 0") : l.startsWith("left") ? v.padding = "0 ".concat(c, "px 0 0") : l.startsWith("right") && (v.padding = "0 0 0 ".concat(c, "px"))),
          [q.OPENING, q.OPEN].indexOf(u) !== -1 && (v = oe(oe({}, v), h)),
          u === q.CLOSING && (v = oe(oe({}, v), m)),
          u === q.OPEN && !o && (v = oe(oe({}, v), b)),
          l === "center" && (v = oe(oe({}, v), f)),
          s && (v = oe(oe({}, v), g)),
          oe(oe({}, p), v)
      }
  }, {
      key: "render",
      value: function() {
          var i = this.props
            , o = i.component
            , s = i.handleClick
            , l = i.hideArrow
            , a = i.setFloaterRef
            , u = i.status
            , d = {}
            , c = ["__floater"];
          return o ? P.isValidElement(o) ? d.content = P.cloneElement(o, {
              closeFn: s
          }) : d.content = o({
              closeFn: s
          }) : d.content = P.createElement(As, this.props),
          u === q.OPEN && c.push("__floater__open"),
          l || (d.arrow = P.createElement(ks, this.props)),
          P.createElement("div", {
              ref: a,
              className: c.join(" "),
              style: this.style
          }, P.createElement("div", {
              className: "__floater__body"
          }, d.content, d.arrow))
      }
  }]),
  n
}(P.Component);
ve(Is, "propTypes", {
  component: S.oneOfType([S.func, S.element]),
  content: S.node,
  disableAnimation: S.bool.isRequired,
  footer: S.node,
  handleClick: S.func.isRequired,
  hideArrow: S.bool.isRequired,
  open: S.bool,
  placement: S.string.isRequired,
  positionWrapper: S.bool.isRequired,
  setArrowRef: S.func.isRequired,
  setFloaterRef: S.func.isRequired,
  showCloseButton: S.bool,
  status: S.string.isRequired,
  styles: S.object.isRequired,
  title: S.node
});
var $s = function(e) {
  on(n, e);
  var t = sn(n);
  function n() {
      return nn(this, n),
      t.apply(this, arguments)
  }
  return rn(n, [{
      key: "render",
      value: function() {
          var i = this.props, o = i.children, s = i.handleClick, l = i.handleMouseEnter, a = i.handleMouseLeave, u = i.setChildRef, d = i.setWrapperRef, c = i.style, p = i.styles, f;
          if (o)
              if (P.Children.count(o) === 1)
                  if (!P.isValidElement(o))
                      f = P.createElement("span", null, o);
                  else {
                      var m = y.function(o.type) ? "innerRef" : "ref";
                      f = P.cloneElement(P.Children.only(o), ve({}, m, u))
                  }
              else
                  f = o;
          return f ? P.createElement("span", {
              ref: d,
              style: oe(oe({}, p), c),
              onClick: s,
              onMouseEnter: l,
              onMouseLeave: a
          }, f) : null
      }
  }]),
  n
}(P.Component);
ve($s, "propTypes", {
  children: S.node,
  handleClick: S.func.isRequired,
  handleMouseEnter: S.func.isRequired,
  handleMouseLeave: S.func.isRequired,
  setChildRef: S.func.isRequired,
  setWrapperRef: S.func.isRequired,
  style: S.object,
  styles: S.object.isRequired
});
var xd = {
  zIndex: 100
};
function Td(e) {
  var t = $e(xd, e.options || {});
  return {
      wrapper: {
          cursor: "help",
          display: "inline-flex",
          flexDirection: "column",
          zIndex: t.zIndex
      },
      wrapperPosition: {
          left: -1e3,
          position: "absolute",
          top: -1e3,
          visibility: "hidden"
      },
      floater: {
          display: "inline-block",
          filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
          maxWidth: 300,
          opacity: 0,
          position: "relative",
          transition: "opacity 0.3s",
          visibility: "hidden",
          zIndex: t.zIndex
      },
      floaterOpening: {
          opacity: 1,
          visibility: "visible"
      },
      floaterWithAnimation: {
          opacity: 1,
          transition: "opacity 0.3s, transform 0.2s",
          visibility: "visible"
      },
      floaterWithComponent: {
          maxWidth: "100%"
      },
      floaterClosing: {
          opacity: 0,
          visibility: "visible"
      },
      floaterCentered: {
          left: "50%",
          position: "fixed",
          top: "50%",
          transform: "translate(-50%, -50%)"
      },
      container: {
          backgroundColor: "#fff",
          color: "#666",
          minHeight: 60,
          minWidth: 200,
          padding: 20,
          position: "relative",
          zIndex: 10
      },
      title: {
          borderBottom: "1px solid #555",
          color: "#555",
          fontSize: 18,
          marginBottom: 5,
          paddingBottom: 6,
          paddingRight: 18
      },
      content: {
          fontSize: 15
      },
      close: {
          backgroundColor: "transparent",
          border: 0,
          borderRadius: 0,
          color: "#555",
          fontSize: 0,
          height: 15,
          outline: "none",
          padding: 10,
          position: "absolute",
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: "none"
      },
      footer: {
          borderTop: "1px solid #ccc",
          fontSize: 13,
          marginTop: 10,
          paddingTop: 5
      },
      arrow: {
          color: "#fff",
          display: "inline-flex",
          length: 16,
          margin: 8,
          position: "absolute",
          spread: 32
      },
      options: t
  }
}
var kd = ["arrow", "flip", "offset"]
, Ld = ["position", "top", "right", "bottom", "left"]
, Vr = function(e) {
  on(n, e);
  var t = sn(n);
  function n(r) {
      var i;
      return nn(this, n),
      i = t.call(this, r),
      ve(Ve(i), "setArrowRef", function(o) {
          i.arrowRef = o
      }),
      ve(Ve(i), "setChildRef", function(o) {
          i.childRef = o
      }),
      ve(Ve(i), "setFloaterRef", function(o) {
          i.floaterRef = o
      }),
      ve(Ve(i), "setWrapperRef", function(o) {
          i.wrapperRef = o
      }),
      ve(Ve(i), "handleTransitionEnd", function() {
          var o = i.state.status
            , s = i.props.callback;
          i.wrapperPopper && i.wrapperPopper.instance.update(),
          i.setState({
              status: o === q.OPENING ? q.OPEN : q.IDLE
          }, function() {
              var l = i.state.status;
              s(l === q.OPEN ? "open" : "close", i.props)
          })
      }),
      ve(Ve(i), "handleClick", function() {
          var o = i.props
            , s = o.event
            , l = o.open;
          if (!y.boolean(l)) {
              var a = i.state
                , u = a.positionWrapper
                , d = a.status;
              (i.event === "click" || i.event === "hover" && u) && (dn({
                  title: "click",
                  data: [{
                      event: s,
                      status: d === q.OPEN ? "closing" : "opening"
                  }],
                  debug: i.debug
              }),
              i.toggle())
          }
      }),
      ve(Ve(i), "handleMouseEnter", function() {
          var o = i.props
            , s = o.event
            , l = o.open;
          if (!(y.boolean(l) || nr())) {
              var a = i.state.status;
              i.event === "hover" && a === q.IDLE && (dn({
                  title: "mouseEnter",
                  data: [{
                      key: "originalEvent",
                      value: s
                  }],
                  debug: i.debug
              }),
              clearTimeout(i.eventDelayTimeout),
              i.toggle())
          }
      }),
      ve(Ve(i), "handleMouseLeave", function() {
          var o = i.props
            , s = o.event
            , l = o.eventDelay
            , a = o.open;
          if (!(y.boolean(a) || nr())) {
              var u = i.state
                , d = u.status
                , c = u.positionWrapper;
              i.event === "hover" && (dn({
                  title: "mouseLeave",
                  data: [{
                      key: "originalEvent",
                      value: s
                  }],
                  debug: i.debug
              }),
              l ? [q.OPENING, q.OPEN].indexOf(d) !== -1 && !c && !i.eventDelayTimeout && (i.eventDelayTimeout = setTimeout(function() {
                  delete i.eventDelayTimeout,
                  i.toggle()
              }, l * 1e3)) : i.toggle(q.IDLE))
          }
      }),
      i.state = {
          currentPlacement: r.placement,
          needsUpdate: !1,
          positionWrapper: r.wrapperOptions.position && !!r.target,
          status: q.INIT,
          statusWrapper: q.INIT
      },
      i._isMounted = !1,
      i.hasMounted = !1,
      De() && window.addEventListener("load", function() {
          i.popper && i.popper.instance.update(),
          i.wrapperPopper && i.wrapperPopper.instance.update()
      }),
      i
  }
  return rn(n, [{
      key: "componentDidMount",
      value: function() {
          if (De()) {
              var i = this.state.positionWrapper
                , o = this.props
                , s = o.children
                , l = o.open
                , a = o.target;
              this._isMounted = !0,
              dn({
                  title: "init",
                  data: {
                      hasChildren: !!s,
                      hasTarget: !!a,
                      isControlled: y.boolean(l),
                      positionWrapper: i,
                      target: this.target,
                      floater: this.floaterRef
                  },
                  debug: this.debug
              }),
              this.hasMounted || (this.initPopper(),
              this.hasMounted = !0),
              !s && a && y.boolean(l)
          }
      }
  }, {
      key: "componentDidUpdate",
      value: function(i, o) {
          if (De()) {
              var s = this.props
                , l = s.autoOpen
                , a = s.open
                , u = s.target
                , d = s.wrapperOptions
                , c = dd(o, this.state)
                , p = c.changedFrom
                , f = c.changed;
              if (i.open !== a) {
                  var m;
                  y.boolean(a) && (m = a ? q.OPENING : q.CLOSING),
                  this.toggle(m)
              }
              (i.wrapperOptions.position !== d.position || i.target !== u) && this.changeWrapperPosition(this.props),
              f("status", q.IDLE) && a ? this.toggle(q.OPEN) : p("status", q.INIT, q.IDLE) && l && this.toggle(q.OPEN),
              this.popper && f("status", q.OPENING) && this.popper.instance.update(),
              this.floaterRef && (f("status", q.OPENING) || f("status", q.CLOSING)) && Sd(this.floaterRef, "transitionend", this.handleTransitionEnd),
              f("needsUpdate", !0) && this.rebuildPopper()
          }
      }
  }, {
      key: "componentWillUnmount",
      value: function() {
          De() && (this._isMounted = !1,
          this.popper && this.popper.instance.destroy(),
          this.wrapperPopper && this.wrapperPopper.instance.destroy())
      }
  }, {
      key: "initPopper",
      value: function() {
          var i = this
            , o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.target
            , s = this.state.positionWrapper
            , l = this.props
            , a = l.disableFlip
            , u = l.getPopper
            , d = l.hideArrow
            , c = l.offset
            , p = l.placement
            , f = l.wrapperOptions
            , m = p === "top" || p === "bottom" ? "flip" : ["right", "bottom-end", "top-end", "left", "top-start", "bottom-start"];
          if (p === "center")
              this.setState({
                  status: q.IDLE
              });
          else if (o && this.floaterRef) {
              var h = this.options
                , b = h.arrow
                , g = h.flip
                , v = h.offset
                , _ = Ps(h, kd);
              new Gi(o,this.floaterRef,{
                  placement: p,
                  modifiers: oe({
                      arrow: oe({
                          enabled: !d,
                          element: this.arrowRef
                      }, b),
                      flip: oe({
                          enabled: !a,
                          behavior: m
                      }, g),
                      offset: oe({
                          offset: "0, ".concat(c, "px")
                      }, v)
                  }, _),
                  onCreate: function(j) {
                      var F;
                      if (i.popper = j,
                      !((F = i.floaterRef) !== null && F !== void 0 && F.isConnected)) {
                          i.setState({
                              needsUpdate: !0
                          });
                          return
                      }
                      u(j, "floater"),
                      i._isMounted && i.setState({
                          currentPlacement: j.placement,
                          status: q.IDLE
                      }),
                      p !== j.placement && setTimeout(function() {
                          j.instance.update()
                      }, 1)
                  },
                  onUpdate: function(j) {
                      i.popper = j;
                      var F = i.state.currentPlacement;
                      i._isMounted && j.placement !== F && i.setState({
                          currentPlacement: j.placement
                      })
                  }
              })
          }
          if (s) {
              var I = y.undefined(f.offset) ? 0 : f.offset;
              new Gi(this.target,this.wrapperRef,{
                  placement: f.placement || p,
                  modifiers: {
                      arrow: {
                          enabled: !1
                      },
                      offset: {
                          offset: "0, ".concat(I, "px")
                      },
                      flip: {
                          enabled: !1
                      }
                  },
                  onCreate: function(j) {
                      i.wrapperPopper = j,
                      i._isMounted && i.setState({
                          statusWrapper: q.IDLE
                      }),
                      u(j, "wrapper"),
                      p !== j.placement && setTimeout(function() {
                          j.instance.update()
                      }, 1)
                  }
              })
          }
      }
  }, {
      key: "rebuildPopper",
      value: function() {
          var i = this;
          this.floaterRefInterval = setInterval(function() {
              var o;
              (o = i.floaterRef) !== null && o !== void 0 && o.isConnected && (clearInterval(i.floaterRefInterval),
              i.setState({
                  needsUpdate: !1
              }),
              i.initPopper())
          }, 50)
      }
  }, {
      key: "changeWrapperPosition",
      value: function(i) {
          var o = i.target
            , s = i.wrapperOptions;
          this.setState({
              positionWrapper: s.position && !!o
          })
      }
  }, {
      key: "toggle",
      value: function(i) {
          var o = this.state.status
            , s = o === q.OPEN ? q.CLOSING : q.OPENING;
          y.undefined(i) || (s = i),
          this.setState({
              status: s
          })
      }
  }, {
      key: "debug",
      get: function() {
          var i = this.props.debug;
          return i || De() && "ReactFloaterDebug"in window && !!window.ReactFloaterDebug
      }
  }, {
      key: "event",
      get: function() {
          var i = this.props
            , o = i.disableHoverToClick
            , s = i.event;
          return s === "hover" && nr() && !o ? "click" : s
      }
  }, {
      key: "options",
      get: function() {
          var i = this.props.options;
          return $e(vd, i || {})
      }
  }, {
      key: "styles",
      get: function() {
          var i = this
            , o = this.state
            , s = o.status
            , l = o.positionWrapper
            , a = o.statusWrapper
            , u = this.props.styles
            , d = $e(Td(u), u);
          if (l) {
              var c;
              [q.IDLE].indexOf(s) === -1 || [q.IDLE].indexOf(a) === -1 ? c = d.wrapperPosition : c = this.wrapperPopper.styles,
              d.wrapper = oe(oe({}, d.wrapper), c)
          }
          if (this.target) {
              var p = window.getComputedStyle(this.target);
              this.wrapperStyles ? d.wrapper = oe(oe({}, d.wrapper), this.wrapperStyles) : ["relative", "static"].indexOf(p.position) === -1 && (this.wrapperStyles = {},
              l || (Ld.forEach(function(f) {
                  i.wrapperStyles[f] = p[f]
              }),
              d.wrapper = oe(oe({}, d.wrapper), this.wrapperStyles),
              this.target.style.position = "relative",
              this.target.style.top = "auto",
              this.target.style.right = "auto",
              this.target.style.bottom = "auto",
              this.target.style.left = "auto"))
          }
          return d
      }
  }, {
      key: "target",
      get: function() {
          if (!De())
              return null;
          var i = this.props.target;
          return i ? y.domElement(i) ? i : document.querySelector(i) : this.childRef || this.wrapperRef
      }
  }, {
      key: "render",
      value: function() {
          var i = this.state
            , o = i.currentPlacement
            , s = i.positionWrapper
            , l = i.status
            , a = this.props
            , u = a.children
            , d = a.component
            , c = a.content
            , p = a.disableAnimation
            , f = a.footer
            , m = a.hideArrow
            , h = a.id
            , b = a.open
            , g = a.showCloseButton
            , v = a.style
            , _ = a.target
            , I = a.title
            , D = P.createElement($s, {
              handleClick: this.handleClick,
              handleMouseEnter: this.handleMouseEnter,
              handleMouseLeave: this.handleMouseLeave,
              setChildRef: this.setChildRef,
              setWrapperRef: this.setWrapperRef,
              style: v,
              styles: this.styles.wrapper
          }, u)
            , j = {};
          return s ? j.wrapperInPortal = D : j.wrapperAsChildren = D,
          P.createElement("span", null, P.createElement(Ts, {
              hasChildren: !!u,
              id: h,
              placement: o,
              setRef: this.setFloaterRef,
              target: _,
              zIndex: this.styles.options.zIndex
          }, P.createElement(Is, {
              component: d,
              content: c,
              disableAnimation: p,
              footer: f,
              handleClick: this.handleClick,
              hideArrow: m || o === "center",
              open: b,
              placement: o,
              positionWrapper: s,
              setArrowRef: this.setArrowRef,
              setFloaterRef: this.setFloaterRef,
              showCloseButton: g,
              status: l,
              styles: this.styles,
              title: I
          }), j.wrapperInPortal), j.wrapperAsChildren)
      }
  }]),
  n
}(P.Component);
ve(Vr, "propTypes", {
  autoOpen: S.bool,
  callback: S.func,
  children: S.node,
  component: ro(S.oneOfType([S.func, S.element]), function(e) {
      return !e.content
  }),
  content: ro(S.node, function(e) {
      return !e.component
  }),
  debug: S.bool,
  disableAnimation: S.bool,
  disableFlip: S.bool,
  disableHoverToClick: S.bool,
  event: S.oneOf(["hover", "click"]),
  eventDelay: S.number,
  footer: S.node,
  getPopper: S.func,
  hideArrow: S.bool,
  id: S.oneOfType([S.string, S.number]),
  offset: S.number,
  open: S.bool,
  options: S.object,
  placement: S.oneOf(["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "auto", "center"]),
  showCloseButton: S.bool,
  style: S.object,
  styles: S.object,
  target: S.oneOfType([S.object, S.string]),
  title: S.node,
  wrapperOptions: S.shape({
      offset: S.number,
      placement: S.oneOf(["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "auto"]),
      position: S.bool
  })
});
ve(Vr, "defaultProps", {
  autoOpen: !1,
  callback: io,
  debug: !1,
  disableAnimation: !1,
  disableFlip: !1,
  disableHoverToClick: !1,
  event: "click",
  eventDelay: .4,
  getPopper: io,
  hideArrow: !1,
  offset: 15,
  placement: "bottom",
  showCloseButton: !1,
  styles: {},
  target: null,
  wrapperOptions: {
      position: !1
  }
});
var Ad = function(e) {
  return Object.prototype.hasOwnProperty.call(e, "props")
}
, Id = function(e, t) {
  return e + qt(t)
}
, qt = function(e) {
  return e === null || typeof e == "boolean" || typeof e > "u" ? "" : typeof e == "number" ? e.toString() : typeof e == "string" ? e : Array.isArray(e) ? e.reduce(Id, "") : Ad(e) && Object.prototype.hasOwnProperty.call(e.props, "children") ? qt(e.props.children) : ""
};
qt.default = qt;
var $d = qt;
const Md = Ln($d);
var Nd = Object.defineProperty
, jd = (e,t,n)=>t in e ? Nd(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n
, M = (e,t,n)=>(jd(e, typeof t != "symbol" ? t + "" : t, n),
n)
, G = {
  INIT: "init",
  START: "start",
  STOP: "stop",
  RESET: "reset",
  PREV: "prev",
  NEXT: "next",
  GO: "go",
  CLOSE: "close",
  SKIP: "skip",
  UPDATE: "update"
}
, Ae = {
  TOUR_START: "tour:start",
  STEP_BEFORE: "step:before",
  BEACON: "beacon",
  TOOLTIP: "tooltip",
  STEP_AFTER: "step:after",
  TOUR_END: "tour:end",
  TOUR_STATUS: "tour:status",
  TARGET_NOT_FOUND: "error:target_not_found",
  ERROR: "error"
}
, z = {
  INIT: "init",
  READY: "ready",
  BEACON: "beacon",
  TOOLTIP: "tooltip",
  COMPLETE: "complete",
  ERROR: "error"
}
, H = {
  IDLE: "idle",
  READY: "ready",
  WAITING: "waiting",
  RUNNING: "running",
  PAUSED: "paused",
  SKIPPED: "skipped",
  FINISHED: "finished",
  ERROR: "error"
};
function Je() {
  return !!(typeof window < "u" && window.document && window.document.createElement)
}
function Ms(e) {
  return e ? e.getBoundingClientRect() : null
}
function Rd(e=!0) {
  const {body: t, documentElement: n} = document;
  if (!t || !n)
      return 0;
  if (e) {
      const r = [t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight].sort((o,s)=>o - s)
        , i = Math.floor(r.length / 2);
      return r.length % 2 === 0 ? (r[i - 1] + r[i]) / 2 : r[i]
  }
  return Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
}
function Ze(e) {
  return typeof e == "string" ? document.querySelector(e) : e
}
function Dd(e) {
  return !e || e.nodeType !== 1 ? null : getComputedStyle(e)
}
function zn(e, t, n) {
  if (!e)
      return it();
  const r = as(e);
  if (r) {
      if (r.isSameNode(it()))
          return n ? document : it();
      if (!(r.scrollHeight > r.offsetHeight) && !t)
          return r.style.overflow = "initial",
          it()
  }
  return r
}
function Un(e, t) {
  if (!e)
      return !1;
  const n = zn(e, t);
  return n ? !n.isSameNode(it()) : !1
}
function Fd(e) {
  return e.offsetParent !== document.body
}
function Gt(e, t="fixed") {
  if (!e || !(e instanceof HTMLElement))
      return !1;
  const {nodeName: n} = e
    , r = Dd(e);
  return n === "BODY" || n === "HTML" ? !1 : r && r.position === t ? !0 : e.parentNode ? Gt(e.parentNode, t) : !1
}
function Bd(e) {
  var t;
  if (!e)
      return !1;
  let n = e;
  for (; n && n !== document.body; ) {
      if (n instanceof HTMLElement) {
          const {display: r, visibility: i} = getComputedStyle(n);
          if (r === "none" || i === "hidden")
              return !1
      }
      n = (t = n.parentElement) != null ? t : null
  }
  return !0
}
function zd(e, t, n) {
  var r;
  const i = Ms(e)
    , o = zn(e, n)
    , s = Un(e, n);
  let l = 0
    , a = (r = i == null ? void 0 : i.top) != null ? r : 0;
  return o instanceof HTMLElement && (l = o.scrollTop,
  !s && !Gt(e) && (a += l),
  o.isSameNode(it()) || (a += it().scrollTop)),
  Math.floor(a - t)
}
function Ud(e, t, n) {
  var r;
  if (!e)
      return 0;
  const {offsetTop: i=0, scrollTop: o=0} = (r = as(e)) != null ? r : {};
  let s = e.getBoundingClientRect().top + o;
  i && (Un(e, n) || Fd(e)) && (s -= i);
  const l = Math.floor(s - t);
  return l < 0 ? 0 : l
}
function it() {
  var e;
  return (e = document.scrollingElement) != null ? e : document.documentElement
}
function Hd(e, t) {
  const {duration: n, element: r} = t;
  return new Promise((i,o)=>{
      const {scrollTop: s} = r
        , l = e > s ? e - s : s - e;
      Zc.top(r, e, {
          duration: l < 100 ? 50 : n
      }, a=>a && a.message !== "Element already at target scroll position" ? o(a) : i())
  }
  )
}
var Mt = jt.createPortal !== void 0;
function Ns(e=navigator.userAgent) {
  let t = e;
  return typeof window > "u" ? t = "node" : document.documentMode ? t = "ie" : /Edge/.test(e) ? t = "edge" : window.opera || e.includes(" OPR/") ? t = "opera" : typeof window.InstallTrigger < "u" ? t = "firefox" : window.chrome ? t = "chrome" : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) && (t = "safari"),
  t
}
function Ke(e) {
  const t = []
    , n = r=>{
      if (typeof r == "string" || typeof r == "number")
          t.push(r);
      else if (Array.isArray(r))
          r.forEach(i=>n(i));
      else if (O.isValidElement(r)) {
          const {children: i} = r.props;
          Array.isArray(i) ? i.forEach(o=>n(o)) : n(i)
      }
  }
  ;
  return n(e),
  t.join(" ").trim()
}
function Wd(e, t) {
  return !$.plainObject(e) || !$.array(t) ? !1 : Object.keys(e).every(n=>t.includes(n))
}
function Vd(e) {
  const t = /^#?([\da-f])([\da-f])([\da-f])$/i
    , n = e.replace(t, (i,o,s,l)=>o + o + s + s + l + l)
    , r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
  return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : []
}
function oo(e) {
  return e.disableBeacon || e.placement === "center"
}
function so() {
  return !["chrome", "safari", "firefox", "opera"].includes(Ns())
}
function at({data: e, debug: t=!1, title: n, warn: r=!1}) {
  const i = r ? console.warn || console.error : console.log;
  t && (n && e ? (console.groupCollapsed(`%creact-joyride: ${n}`, "color: #ff0044; font-weight: bold; font-size: 12px;"),
  Array.isArray(e) ? e.forEach(o=>{
      $.plainObject(o) && o.key ? i.apply(console, [o.key, o.value]) : i.apply(console, [o])
  }
  ) : i.apply(console, [e]),
  console.groupEnd()) : console.error("Missing title or data props"))
}
function qd(e) {
  return Object.keys(e)
}
function js(e, ...t) {
  if (!$.plainObject(e))
      throw new TypeError("Expected an object");
  const n = {};
  for (const r in e)
      ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
  return n
}
function Gd(e, ...t) {
  if (!$.plainObject(e))
      throw new TypeError("Expected an object");
  if (!t.length)
      return e;
  const n = {};
  for (const r in e)
      ({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r]);
  return n
}
function Jd(e) {
  const {isFirstStep: t, lifecycle: n, previousLifecycle: r, scrollToFirstStep: i, step: o, target: s} = e;
  return !o.disableScrolling && (!t || i || n === z.TOOLTIP) && o.placement !== "center" && (!o.isFixed || !Gt(s)) && r !== n && [z.BEACON, z.TOOLTIP].includes(n)
}
var Kd = {
  options: {
      preventOverflow: {
          boundariesElement: "scrollParent"
      }
  },
  wrapperOptions: {
      offset: -18,
      position: !0
  }
}
, Rs = {
  back: "Back",
  close: "Close",
  last: "Last",
  next: "Next",
  open: "Open the dialog",
  skip: "Skip"
}
, Yd = {
  event: "click",
  placement: "bottom",
  offset: 10,
  disableBeacon: !1,
  disableCloseOnEsc: !1,
  disableOverlay: !1,
  disableOverlayClose: !1,
  disableScrollParentFix: !1,
  disableScrolling: !1,
  hideBackButton: !1,
  hideCloseButton: !1,
  hideFooter: !1,
  isFixed: !1,
  locale: Rs,
  showProgress: !1,
  showSkipButton: !1,
  spotlightClicks: !1,
  spotlightPadding: 10
}
, Zd = {
  continuous: !1,
  debug: !1,
  disableCloseOnEsc: !1,
  disableOverlay: !1,
  disableOverlayClose: !1,
  disableScrolling: !1,
  disableScrollParentFix: !1,
  getHelpers: void 0,
  hideBackButton: !1,
  run: !0,
  scrollOffset: 20,
  scrollDuration: 300,
  scrollToFirstStep: !1,
  showSkipButton: !1,
  showProgress: !1,
  spotlightClicks: !1,
  spotlightPadding: 10,
  steps: []
}
, Xd = {
  arrowColor: "#fff",
  backgroundColor: "#fff",
  beaconSize: 36,
  overlayColor: "rgba(0, 0, 0, 0.5)",
  primaryColor: "#f04",
  spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
  textColor: "#333",
  width: 380,
  zIndex: 100
}
, Nt = {
  backgroundColor: "transparent",
  border: 0,
  borderRadius: 0,
  color: "#555",
  cursor: "pointer",
  fontSize: 16,
  lineHeight: 1,
  padding: 8,
  WebkitAppearance: "none"
}
, ao = {
  borderRadius: 4,
  position: "absolute"
};
function Qd(e, t) {
  var n, r, i, o, s;
  const {floaterProps: l, styles: a} = e
    , u = $e((n = t == null ? void 0 : t.floaterProps) != null ? n : {}, l ?? {})
    , d = $e(a ?? {}, (r = t == null ? void 0 : t.styles) != null ? r : {})
    , c = $e(Xd, d.options || {});
  let {width: p} = c;
  window.innerWidth > 480 && (p = 380),
  "width"in c && (p = typeof c.width == "number" && window.innerWidth < c.width ? window.innerWidth - 30 : c.width);
  const f = {
      bottom: 0,
      left: 0,
      overflow: "hidden",
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: c.zIndex
  }
    , m = {
      beacon: {
          ...Nt,
          display: "inline-block",
          height: c.beaconSize,
          position: "relative",
          width: c.beaconSize,
          zIndex: c.zIndex
      },
      beaconInner: {
          animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
          backgroundColor: c.primaryColor,
          borderRadius: "50%",
          display: "block",
          height: "50%",
          left: "50%",
          opacity: .7,
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%"
      },
      beaconOuter: {
          animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
          backgroundColor: `rgba(${Vd(c.primaryColor).join(",")}, 0.2)`,
          border: `2px solid ${c.primaryColor}`,
          borderRadius: "50%",
          boxSizing: "border-box",
          display: "block",
          height: "100%",
          left: 0,
          opacity: .9,
          position: "absolute",
          top: 0,
          transformOrigin: "center",
          width: "100%"
      },
      tooltip: {
          backgroundColor: c.backgroundColor,
          borderRadius: 5,
          boxSizing: "border-box",
          color: c.textColor,
          fontSize: 16,
          maxWidth: "100%",
          padding: 15,
          position: "relative",
          width: p
      },
      tooltipContainer: {
          lineHeight: 1.4,
          textAlign: "center"
      },
      tooltipTitle: {
          fontSize: 18,
          margin: 0
      },
      tooltipContent: {
          padding: "20px 10px"
      },
      tooltipFooter: {
          alignItems: "center",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 15
      },
      tooltipFooterSpacer: {
          flex: 1
      },
      buttonNext: {
          ...Nt,
          backgroundColor: c.primaryColor,
          borderRadius: 4,
          color: "#fff"
      },
      buttonBack: {
          ...Nt,
          color: c.primaryColor,
          marginLeft: "auto",
          marginRight: 5
      },
      buttonClose: {
          ...Nt,
          color: c.textColor,
          height: 14,
          padding: 15,
          position: "absolute",
          right: 0,
          top: 0,
          width: 14
      },
      buttonSkip: {
          ...Nt,
          color: c.textColor,
          fontSize: 14
      },
      overlay: {
          ...f,
          backgroundColor: c.overlayColor,
          mixBlendMode: "hard-light"
      },
      overlayLegacy: {
          ...f
      },
      overlayLegacyCenter: {
          ...f,
          backgroundColor: c.overlayColor
      },
      spotlight: {
          ...ao,
          backgroundColor: "gray"
      },
      spotlightLegacy: {
          ...ao,
          boxShadow: `0 0 0 9999px ${c.overlayColor}, ${c.spotlightShadow}`
      },
      floaterStyles: {
          arrow: {
              color: (s = (o = (i = u == null ? void 0 : u.styles) == null ? void 0 : i.arrow) == null ? void 0 : o.color) != null ? s : c.arrowColor
          },
          options: {
              zIndex: c.zIndex + 100
          }
      },
      options: c
  };
  return $e(m, d)
}
function ep(e) {
  return Gd(e, "beaconComponent", "disableCloseOnEsc", "disableOverlay", "disableOverlayClose", "disableScrolling", "disableScrollParentFix", "floaterProps", "hideBackButton", "hideCloseButton", "locale", "showProgress", "showSkipButton", "spotlightClicks", "spotlightPadding", "styles", "tooltipComponent")
}
function ht(e, t) {
  var n, r, i, o, s, l;
  const a = t ?? {}
    , u = $e.all([Yd, ep(e), a], {
      isMergeableObject: $.plainObject
  })
    , d = Qd(e, u)
    , c = Un(Ze(u.target), u.disableScrollParentFix)
    , p = $e.all([Kd, (n = e.floaterProps) != null ? n : {}, (r = u.floaterProps) != null ? r : {}]);
  return p.offset = u.offset,
  p.styles = $e((i = p.styles) != null ? i : {}, d.floaterStyles),
  p.offset += (s = (o = e.spotlightPadding) != null ? o : u.spotlightPadding) != null ? s : 0,
  u.placementBeacon && p.wrapperOptions && (p.wrapperOptions.placement = u.placementBeacon),
  c && p.options.preventOverflow && (p.options.preventOverflow.boundariesElement = "window"),
  {
      ...u,
      locale: $e.all([Rs, (l = e.locale) != null ? l : {}, u.locale || {}]),
      floaterProps: p,
      styles: js(d, "floaterStyles")
  }
}
function Ds(e, t=!1) {
  return $.plainObject(e) ? e.target ? !0 : (at({
      title: "validateStep",
      data: "target is missing from the step",
      warn: !0,
      debug: t
  }),
  !1) : (at({
      title: "validateStep",
      data: "step must be an object",
      warn: !0,
      debug: t
  }),
  !1)
}
function lo(e, t=!1) {
  return $.array(e) ? e.every(n=>Ds(n, t)) : (at({
      title: "validateSteps",
      data: "steps must be an array",
      warn: !0,
      debug: t
  }),
  !1)
}
var Fs = {
  action: "init",
  controlled: !1,
  index: 0,
  lifecycle: z.INIT,
  origin: null,
  size: 0,
  status: H.IDLE
}
, co = qd(js(Fs, "controlled", "size"))
, tp = class {
  constructor(e) {
      M(this, "beaconPopper"),
      M(this, "tooltipPopper"),
      M(this, "data", new Map),
      M(this, "listener"),
      M(this, "store", new Map),
      M(this, "addListener", i=>{
          this.listener = i
      }
      ),
      M(this, "setSteps", i=>{
          const {size: o, status: s} = this.getState()
            , l = {
              size: i.length,
              status: s
          };
          this.data.set("steps", i),
          s === H.WAITING && !o && i.length && (l.status = H.RUNNING),
          this.setState(l)
      }
      ),
      M(this, "getPopper", i=>i === "beacon" ? this.beaconPopper : this.tooltipPopper),
      M(this, "setPopper", (i,o)=>{
          i === "beacon" ? this.beaconPopper = o : this.tooltipPopper = o
      }
      ),
      M(this, "cleanupPoppers", ()=>{
          this.beaconPopper = null,
          this.tooltipPopper = null
      }
      ),
      M(this, "close", (i=null)=>{
          const {index: o, status: s} = this.getState();
          s === H.RUNNING && this.setState({
              ...this.getNextState({
                  action: G.CLOSE,
                  index: o + 1,
                  origin: i
              })
          })
      }
      ),
      M(this, "go", i=>{
          const {controlled: o, status: s} = this.getState();
          if (o || s !== H.RUNNING)
              return;
          const l = this.getSteps()[i];
          this.setState({
              ...this.getNextState({
                  action: G.GO,
                  index: i
              }),
              status: l ? s : H.FINISHED
          })
      }
      ),
      M(this, "info", ()=>this.getState()),
      M(this, "next", ()=>{
          const {index: i, status: o} = this.getState();
          o === H.RUNNING && this.setState(this.getNextState({
              action: G.NEXT,
              index: i + 1
          }))
      }
      ),
      M(this, "open", ()=>{
          const {status: i} = this.getState();
          i === H.RUNNING && this.setState({
              ...this.getNextState({
                  action: G.UPDATE,
                  lifecycle: z.TOOLTIP
              })
          })
      }
      ),
      M(this, "prev", ()=>{
          const {index: i, status: o} = this.getState();
          o === H.RUNNING && this.setState({
              ...this.getNextState({
                  action: G.PREV,
                  index: i - 1
              })
          })
      }
      ),
      M(this, "reset", (i=!1)=>{
          const {controlled: o} = this.getState();
          o || this.setState({
              ...this.getNextState({
                  action: G.RESET,
                  index: 0
              }),
              status: i ? H.RUNNING : H.READY
          })
      }
      ),
      M(this, "skip", ()=>{
          const {status: i} = this.getState();
          i === H.RUNNING && this.setState({
              action: G.SKIP,
              lifecycle: z.INIT,
              status: H.SKIPPED
          })
      }
      ),
      M(this, "start", i=>{
          const {index: o, size: s} = this.getState();
          this.setState({
              ...this.getNextState({
                  action: G.START,
                  index: $.number(i) ? i : o
              }, !0),
              status: s ? H.RUNNING : H.WAITING
          })
      }
      ),
      M(this, "stop", (i=!1)=>{
          const {index: o, status: s} = this.getState();
          [H.FINISHED, H.SKIPPED].includes(s) || this.setState({
              ...this.getNextState({
                  action: G.STOP,
                  index: o + (i ? 1 : 0)
              }),
              status: H.PAUSED
          })
      }
      ),
      M(this, "update", i=>{
          var o, s;
          if (!Wd(i, co))
              throw new Error(`State is not valid. Valid keys: ${co.join(", ")}`);
          this.setState({
              ...this.getNextState({
                  ...this.getState(),
                  ...i,
                  action: (o = i.action) != null ? o : G.UPDATE,
                  origin: (s = i.origin) != null ? s : null
              }, !0)
          })
      }
      );
      const {continuous: t=!1, stepIndex: n, steps: r=[]} = e ?? {};
      this.setState({
          action: G.INIT,
          controlled: $.number(n),
          continuous: t,
          index: $.number(n) ? n : 0,
          lifecycle: z.INIT,
          origin: null,
          status: r.length ? H.READY : H.IDLE
      }, !0),
      this.beaconPopper = null,
      this.tooltipPopper = null,
      this.listener = null,
      this.setSteps(r)
  }
  getState() {
      return this.store.size ? {
          action: this.store.get("action") || "",
          controlled: this.store.get("controlled") || !1,
          index: parseInt(this.store.get("index"), 10),
          lifecycle: this.store.get("lifecycle") || "",
          origin: this.store.get("origin") || null,
          size: this.store.get("size") || 0,
          status: this.store.get("status") || ""
      } : {
          ...Fs
      }
  }
  getNextState(e, t=!1) {
      var n, r, i, o, s;
      const {action: l, controlled: a, index: u, size: d, status: c} = this.getState()
        , p = $.number(e.index) ? e.index : u
        , f = a && !t ? u : Math.min(Math.max(p, 0), d);
      return {
          action: (n = e.action) != null ? n : l,
          controlled: a,
          index: f,
          lifecycle: (r = e.lifecycle) != null ? r : z.INIT,
          origin: (i = e.origin) != null ? i : null,
          size: (o = e.size) != null ? o : d,
          status: f === d ? H.FINISHED : (s = e.status) != null ? s : c
      }
  }
  getSteps() {
      const e = this.data.get("steps");
      return Array.isArray(e) ? e : []
  }
  hasUpdatedState(e) {
      const t = JSON.stringify(e)
        , n = JSON.stringify(this.getState());
      return t !== n
  }
  setState(e, t=!1) {
      const n = this.getState()
        , {action: r, index: i, lifecycle: o, origin: s=null, size: l, status: a} = {
          ...n,
          ...e
      };
      this.store.set("action", r),
      this.store.set("index", i),
      this.store.set("lifecycle", o),
      this.store.set("origin", s),
      this.store.set("size", l),
      this.store.set("status", a),
      t && (this.store.set("controlled", e.controlled),
      this.store.set("continuous", e.continuous)),
      this.listener && this.hasUpdatedState(n) && this.listener(this.getState())
  }
  getHelpers() {
      return {
          close: this.close,
          go: this.go,
          info: this.info,
          next: this.next,
          open: this.open,
          prev: this.prev,
          reset: this.reset,
          skip: this.skip
      }
  }
}
;
function np(e) {
  return new tp(e)
}
function rp({styles: e}) {
  return O.createElement("div", {
      key: "JoyrideSpotlight",
      className: "react-joyride__spotlight",
      "data-test-id": "spotlight",
      style: e
  })
}
var ip = rp
, op = class extends O.Component {
  constructor() {
      super(...arguments),
      M(this, "isActive", !1),
      M(this, "resizeTimeout"),
      M(this, "scrollTimeout"),
      M(this, "scrollParent"),
      M(this, "state", {
          isScrolling: !1,
          mouseOverSpotlight: !1,
          showSpotlight: !0
      }),
      M(this, "hideSpotlight", ()=>{
          const {continuous: e, disableOverlay: t, lifecycle: n} = this.props
            , r = [z.BEACON, z.COMPLETE, z.ERROR];
          return t || (e ? r.includes(n) : n !== z.TOOLTIP)
      }
      ),
      M(this, "handleMouseMove", e=>{
          const {mouseOverSpotlight: t} = this.state
            , {height: n, left: r, position: i, top: o, width: s} = this.spotlightStyles
            , l = i === "fixed" ? e.clientY : e.pageY
            , a = i === "fixed" ? e.clientX : e.pageX
            , u = l >= o && l <= o + n
            , c = a >= r && a <= r + s && u;
          c !== t && this.updateState({
              mouseOverSpotlight: c
          })
      }
      ),
      M(this, "handleScroll", ()=>{
          const {target: e} = this.props
            , t = Ze(e);
          if (this.scrollParent !== document) {
              const {isScrolling: n} = this.state;
              n || this.updateState({
                  isScrolling: !0,
                  showSpotlight: !1
              }),
              clearTimeout(this.scrollTimeout),
              this.scrollTimeout = window.setTimeout(()=>{
                  this.updateState({
                      isScrolling: !1,
                      showSpotlight: !0
                  })
              }
              , 50)
          } else
              Gt(t, "sticky") && this.updateState({})
      }
      ),
      M(this, "handleResize", ()=>{
          clearTimeout(this.resizeTimeout),
          this.resizeTimeout = window.setTimeout(()=>{
              this.isActive && this.forceUpdate()
          }
          , 100)
      }
      )
  }
  componentDidMount() {
      const {debug: e, disableScrolling: t, disableScrollParentFix: n=!1, target: r} = this.props
        , i = Ze(r);
      this.scrollParent = zn(i ?? document.body, n, !0),
      this.isActive = !0,
      window.addEventListener("resize", this.handleResize)
  }
  componentDidUpdate(e) {
      var t;
      const {lifecycle: n, spotlightClicks: r} = this.props
        , {changed: i} = Pn(e, this.props);
      i("lifecycle", z.TOOLTIP) && ((t = this.scrollParent) == null || t.addEventListener("scroll", this.handleScroll, {
          passive: !0
      }),
      setTimeout(()=>{
          const {isScrolling: o} = this.state;
          o || this.updateState({
              showSpotlight: !0
          })
      }
      , 100)),
      (i("spotlightClicks") || i("disableOverlay") || i("lifecycle")) && (r && n === z.TOOLTIP ? window.addEventListener("mousemove", this.handleMouseMove, !1) : n !== z.TOOLTIP && window.removeEventListener("mousemove", this.handleMouseMove))
  }
  componentWillUnmount() {
      var e;
      this.isActive = !1,
      window.removeEventListener("mousemove", this.handleMouseMove),
      window.removeEventListener("resize", this.handleResize),
      clearTimeout(this.resizeTimeout),
      clearTimeout(this.scrollTimeout),
      (e = this.scrollParent) == null || e.removeEventListener("scroll", this.handleScroll)
  }
  get overlayStyles() {
      const {mouseOverSpotlight: e} = this.state
        , {disableOverlayClose: t, placement: n, styles: r} = this.props;
      let i = r.overlay;
      return so() && (i = n === "center" ? r.overlayLegacyCenter : r.overlayLegacy),
      {
          cursor: t ? "default" : "pointer",
          height: Rd(),
          pointerEvents: e ? "none" : "auto",
          ...i
      }
  }
  get spotlightStyles() {
      var e, t, n;
      const {showSpotlight: r} = this.state
        , {disableScrollParentFix: i=!1, spotlightClicks: o, spotlightPadding: s=0, styles: l, target: a} = this.props
        , u = Ze(a)
        , d = Ms(u)
        , c = Gt(u)
        , p = zd(u, s, i);
      return {
          ...so() ? l.spotlightLegacy : l.spotlight,
          height: Math.round(((e = d == null ? void 0 : d.height) != null ? e : 0) + s * 2),
          left: Math.round(((t = d == null ? void 0 : d.left) != null ? t : 0) - s),
          opacity: r ? 1 : 0,
          pointerEvents: o ? "none" : "auto",
          position: c ? "fixed" : "absolute",
          top: p,
          transition: "opacity 0.2s",
          width: Math.round(((n = d == null ? void 0 : d.width) != null ? n : 0) + s * 2)
      }
  }
  updateState(e) {
      this.isActive && this.setState(t=>({
          ...t,
          ...e
      }))
  }
  render() {
      const {showSpotlight: e} = this.state
        , {onClickOverlay: t, placement: n} = this.props
        , {hideSpotlight: r, overlayStyles: i, spotlightStyles: o} = this;
      if (r())
          return null;
      let s = n !== "center" && e && O.createElement(ip, {
          styles: o
      });
      if (Ns() === "safari") {
          const {mixBlendMode: l, zIndex: a, ...u} = i;
          s = O.createElement("div", {
              style: {
                  ...u
              }
          }, s),
          delete i.backgroundColor
      }
      return O.createElement("div", {
          className: "react-joyride__overlay",
          "data-test-id": "overlay",
          onClick: t,
          role: "presentation",
          style: i
      }, s)
  }
}
, sp = class extends O.Component {
  constructor() {
      super(...arguments),
      M(this, "node", null)
  }
  componentDidMount() {
      const {id: e} = this.props;
      Je() && (this.node = document.createElement("div"),
      this.node.id = e,
      document.body.appendChild(this.node),
      Mt || this.renderReact15())
  }
  componentDidUpdate() {
      Je() && (Mt || this.renderReact15())
  }
  componentWillUnmount() {
      !Je() || !this.node || (Mt || jt.unmountComponentAtNode(this.node),
      this.node.parentNode === document.body && (document.body.removeChild(this.node),
      this.node = null))
  }
  renderReact15() {
      if (!Je())
          return;
      const {children: e} = this.props;
      this.node && jt.unstable_renderSubtreeIntoContainer(this, e, this.node)
  }
  renderReact16() {
      if (!Je() || !Mt)
          return null;
      const {children: e} = this.props;
      return this.node ? jt.createPortal(e, this.node) : null
  }
  render() {
      return Mt ? this.renderReact16() : null
  }
}
, ap = class {
  constructor(e, t) {
      if (M(this, "element"),
      M(this, "options"),
      M(this, "canBeTabbed", n=>{
          const {tabIndex: r} = n;
          return r === null || r < 0 ? !1 : this.canHaveFocus(n)
      }
      ),
      M(this, "canHaveFocus", n=>{
          const r = /input|select|textarea|button|object/
            , i = n.nodeName.toLowerCase();
          return (r.test(i) && !n.getAttribute("disabled") || i === "a" && !!n.getAttribute("href")) && this.isVisible(n)
      }
      ),
      M(this, "findValidTabElements", ()=>[].slice.call(this.element.querySelectorAll("*"), 0).filter(this.canBeTabbed)),
      M(this, "handleKeyDown", n=>{
          const {code: r="Tab"} = this.options;
          n.code === r && this.interceptTab(n)
      }
      ),
      M(this, "interceptTab", n=>{
          n.preventDefault();
          const r = this.findValidTabElements()
            , {shiftKey: i} = n;
          if (!r.length)
              return;
          let o = document.activeElement ? r.indexOf(document.activeElement) : 0;
          o === -1 || !i && o + 1 === r.length ? o = 0 : i && o === 0 ? o = r.length - 1 : o += i ? -1 : 1,
          r[o].focus()
      }
      ),
      M(this, "isHidden", n=>{
          const r = n.offsetWidth <= 0 && n.offsetHeight <= 0
            , i = window.getComputedStyle(n);
          return r && !n.innerHTML ? !0 : r && i.getPropertyValue("overflow") !== "visible" || i.getPropertyValue("display") === "none"
      }
      ),
      M(this, "isVisible", n=>{
          let r = n;
          for (; r; )
              if (r instanceof HTMLElement) {
                  if (r === document.body)
                      break;
                  if (this.isHidden(r))
                      return !1;
                  r = r.parentNode
              }
          return !0
      }
      ),
      M(this, "removeScope", ()=>{
          window.removeEventListener("keydown", this.handleKeyDown)
      }
      ),
      M(this, "checkFocus", n=>{
          document.activeElement !== n && (n.focus(),
          window.requestAnimationFrame(()=>this.checkFocus(n)))
      }
      ),
      M(this, "setFocus", ()=>{
          const {selector: n} = this.options;
          if (!n)
              return;
          const r = this.element.querySelector(n);
          r && window.requestAnimationFrame(()=>this.checkFocus(r))
      }
      ),
      !(e instanceof HTMLElement))
          throw new TypeError("Invalid parameter: element must be an HTMLElement");
      this.element = e,
      this.options = t,
      window.addEventListener("keydown", this.handleKeyDown, !1),
      this.setFocus()
  }
}
, lp = class extends O.Component {
  constructor(e) {
      if (super(e),
      M(this, "beacon", null),
      M(this, "setBeaconRef", i=>{
          this.beacon = i
      }
      ),
      e.beaconComponent)
          return;
      const t = document.head || document.getElementsByTagName("head")[0]
        , n = document.createElement("style");
      n.id = "joyride-beacon-animation",
      e.nonce && n.setAttribute("nonce", e.nonce),
      n.appendChild(document.createTextNode(`
      @keyframes joyride-beacon-inner {
        20% {
          opacity: 0.9;
        }
      
        90% {
          opacity: 0.7;
        }
      }
      
      @keyframes joyride-beacon-outer {
        0% {
          transform: scale(1);
        }
      
        45% {
          opacity: 0.7;
          transform: scale(0.75);
        }
      
        100% {
          opacity: 0.9;
          transform: scale(1);
        }
      }
    `)),
      t.appendChild(n)
  }
  componentDidMount() {
      const {shouldFocus: e} = this.props;
      setTimeout(()=>{
          $.domElement(this.beacon) && e && this.beacon.focus()
      }
      , 0)
  }
  componentWillUnmount() {
      const e = document.getElementById("joyride-beacon-animation");
      e != null && e.parentNode && e.parentNode.removeChild(e)
  }
  render() {
      const {beaconComponent: e, continuous: t, index: n, isLastStep: r, locale: i, onClickOrHover: o, size: s, step: l, styles: a} = this.props
        , u = $.string(i.open) ? i.open : Md(i.open)
        , d = {
          "aria-label": u,
          onClick: o,
          onMouseEnter: o,
          ref: this.setBeaconRef,
          title: u
      };
      let c;
      if (e) {
          const p = e;
          c = O.createElement(p, {
              continuous: t,
              index: n,
              isLastStep: r,
              size: s,
              step: l,
              ...d
          })
      } else
          c = O.createElement("button", {
              key: "JoyrideBeacon",
              className: "react-joyride__beacon",
              "data-test-id": "button-beacon",
              style: a.beacon,
              type: "button",
              ...d
          }, O.createElement("span", {
              style: a.beaconInner
          }), O.createElement("span", {
              style: a.beaconOuter
          }));
      return c
  }
}
;
function cp({styles: e, ...t}) {
  const {color: n, height: r, width: i, ...o} = e;
  return P.createElement("button", {
      style: o,
      type: "button",
      ...t
  }, P.createElement("svg", {
      height: typeof r == "number" ? `${r}px` : r,
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 18 18",
      width: typeof i == "number" ? `${i}px` : i,
      xmlns: "http://www.w3.org/2000/svg"
  }, P.createElement("g", null, P.createElement("path", {
      d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
      fill: n
  }))))
}
var up = cp;
function dp(e) {
  const {backProps: t, closeProps: n, continuous: r, index: i, isLastStep: o, primaryProps: s, size: l, skipProps: a, step: u, tooltipProps: d} = e
    , {content: c, hideBackButton: p, hideCloseButton: f, hideFooter: m, locale: h, showProgress: b, showSkipButton: g, styles: v, title: _} = u
    , {back: I, close: D, last: j, next: F, skip: T} = h
    , k = {
      primary: D
  };
  return r && (k.primary = o ? j : F,
  b && (k.primary = O.createElement("span", null, k.primary, " (", i + 1, "/", l, ")"))),
  k.primary && (k.primary = O.createElement("button", {
      "data-test-id": "button-primary",
      style: v.buttonNext,
      type: "button",
      ...s
  }, k.primary)),
  g && !o && (k.skip = O.createElement("button", {
      "aria-live": "off",
      "data-test-id": "button-skip",
      style: v.buttonSkip,
      type: "button",
      ...a
  }, T)),
  !p && i > 0 && (k.back = O.createElement("button", {
      "data-test-id": "button-back",
      style: v.buttonBack,
      type: "button",
      ...t
  }, I)),
  k.close = !f && O.createElement(up, {
      "data-test-id": "button-close",
      styles: v.buttonClose,
      ...n
  }),
  O.createElement("div", {
      key: "JoyrideTooltip",
      "aria-label": Ke(_) || Ke(c),
      className: "react-joyride__tooltip",
      style: v.tooltip,
      ...d
  }, O.createElement("div", {
      style: v.tooltipContainer
  }, _ && O.createElement("h1", {
      "aria-label": Ke(_),
      style: v.tooltipTitle
  }, _), O.createElement("div", {
      style: v.tooltipContent
  }, c)), !m && O.createElement("div", {
      style: v.tooltipFooter
  }, O.createElement("div", {
      style: v.tooltipFooterSpacer
  }, k.skip), k.back, k.primary), k.close)
}
var pp = dp
, fp = class extends O.Component {
  constructor() {
      super(...arguments),
      M(this, "handleClickBack", e=>{
          e.preventDefault();
          const {helpers: t} = this.props;
          t.prev()
      }
      ),
      M(this, "handleClickClose", e=>{
          e.preventDefault();
          const {helpers: t} = this.props;
          t.close("button_close")
      }
      ),
      M(this, "handleClickPrimary", e=>{
          e.preventDefault();
          const {continuous: t, helpers: n} = this.props;
          if (!t) {
              n.close("button_primary");
              return
          }
          n.next()
      }
      ),
      M(this, "handleClickSkip", e=>{
          e.preventDefault();
          const {helpers: t} = this.props;
          t.skip()
      }
      ),
      M(this, "getElementsProps", ()=>{
          const {continuous: e, isLastStep: t, setTooltipRef: n, step: r} = this.props
            , i = Ke(r.locale.back)
            , o = Ke(r.locale.close)
            , s = Ke(r.locale.last)
            , l = Ke(r.locale.next)
            , a = Ke(r.locale.skip);
          let u = e ? l : o;
          return t && (u = s),
          {
              backProps: {
                  "aria-label": i,
                  "data-action": "back",
                  onClick: this.handleClickBack,
                  role: "button",
                  title: i
              },
              closeProps: {
                  "aria-label": o,
                  "data-action": "close",
                  onClick: this.handleClickClose,
                  role: "button",
                  title: o
              },
              primaryProps: {
                  "aria-label": u,
                  "data-action": "primary",
                  onClick: this.handleClickPrimary,
                  role: "button",
                  title: u
              },
              skipProps: {
                  "aria-label": a,
                  "data-action": "skip",
                  onClick: this.handleClickSkip,
                  role: "button",
                  title: a
              },
              tooltipProps: {
                  "aria-modal": !0,
                  ref: n,
                  role: "alertdialog"
              }
          }
      }
      )
  }
  render() {
      const {continuous: e, index: t, isLastStep: n, setTooltipRef: r, size: i, step: o} = this.props
        , {beaconComponent: s, tooltipComponent: l, ...a} = o;
      let u;
      if (l) {
          const d = {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: a,
              setTooltipRef: r
          }
            , c = l;
          u = O.createElement(c, {
              ...d
          })
      } else
          u = O.createElement(pp, {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: o
          });
      return u
  }
}
, hp = class extends O.Component {
  constructor() {
      super(...arguments),
      M(this, "scope", null),
      M(this, "tooltip", null),
      M(this, "handleClickHoverBeacon", e=>{
          const {step: t, store: n} = this.props;
          e.type === "mouseenter" && t.event !== "hover" || n.update({
              lifecycle: z.TOOLTIP
          })
      }
      ),
      M(this, "setTooltipRef", e=>{
          this.tooltip = e
      }
      ),
      M(this, "setPopper", (e,t)=>{
          var n;
          const {action: r, lifecycle: i, step: o, store: s} = this.props;
          t === "wrapper" ? s.setPopper("beacon", e) : s.setPopper("tooltip", e),
          s.getPopper("beacon") && s.getPopper("tooltip") && i === z.INIT && s.update({
              action: r,
              lifecycle: z.READY
          }),
          (n = o.floaterProps) != null && n.getPopper && o.floaterProps.getPopper(e, t)
      }
      ),
      M(this, "renderTooltip", e=>{
          const {continuous: t, helpers: n, index: r, size: i, step: o} = this.props;
          return O.createElement(fp, {
              continuous: t,
              helpers: n,
              index: r,
              isLastStep: r + 1 === i,
              setTooltipRef: this.setTooltipRef,
              size: i,
              step: o,
              ...e
          })
      }
      )
  }
  componentDidMount() {
      const {debug: e, index: t} = this.props;
      at({
          title: `step:${t}`,
          data: [{
              key: "props",
              value: this.props
          }],
          debug: e
      })
  }
  componentDidUpdate(e) {
      var t;
      const {action: n, callback: r, continuous: i, controlled: o, debug: s, helpers: l, index: a, lifecycle: u, status: d, step: c, store: p} = this.props
        , {changed: f, changedFrom: m} = Pn(e, this.props)
        , h = l.info()
        , b = i && n !== G.CLOSE && (a > 0 || n === G.PREV)
        , g = f("action") || f("index") || f("lifecycle") || f("status")
        , v = m("lifecycle", [z.TOOLTIP, z.INIT], z.INIT)
        , _ = f("action", [G.NEXT, G.PREV, G.SKIP, G.CLOSE])
        , I = o && a === e.index;
      if (_ && (v || I) && r({
          ...h,
          index: e.index,
          lifecycle: z.COMPLETE,
          step: e.step,
          type: Ae.STEP_AFTER
      }),
      c.placement === "center" && d === H.RUNNING && f("index") && n !== G.START && u === z.INIT && p.update({
          lifecycle: z.READY
      }),
      g) {
          const D = Ze(c.target)
            , j = !!D;
          j && Bd(D) ? (m("status", H.READY, H.RUNNING) || m("lifecycle", z.INIT, z.READY)) && r({
              ...h,
              step: c,
              type: Ae.STEP_BEFORE
          }) : (console.warn(j ? "Target not visible" : "Target not mounted", c),
          r({
              ...h,
              type: Ae.TARGET_NOT_FOUND,
              step: c
          }),
          o || p.update({
              index: a + (n === G.PREV ? -1 : 1)
          }))
      }
      m("lifecycle", z.INIT, z.READY) && p.update({
          lifecycle: oo(c) || b ? z.TOOLTIP : z.BEACON
      }),
      f("index") && at({
          title: `step:${u}`,
          data: [{
              key: "props",
              value: this.props
          }],
          debug: s
      }),
      f("lifecycle", z.BEACON) && r({
          ...h,
          step: c,
          type: Ae.BEACON
      }),
      f("lifecycle", z.TOOLTIP) && (r({
          ...h,
          step: c,
          type: Ae.TOOLTIP
      }),
      this.tooltip && (this.scope = new ap(this.tooltip,{
          selector: "[data-action=primary]"
      }),
      this.scope.setFocus())),
      m("lifecycle", [z.TOOLTIP, z.INIT], z.INIT) && ((t = this.scope) == null || t.removeScope(),
      p.cleanupPoppers())
  }
  componentWillUnmount() {
      var e;
      (e = this.scope) == null || e.removeScope()
  }
  get open() {
      const {lifecycle: e, step: t} = this.props;
      return oo(t) || e === z.TOOLTIP
  }
  render() {
      const {continuous: e, debug: t, index: n, nonce: r, shouldScroll: i, size: o, step: s} = this.props
        , l = Ze(s.target);
      return !Ds(s) || !$.domElement(l) ? null : O.createElement("div", {
          key: `JoyrideStep-${n}`,
          className: "react-joyride__step"
      }, O.createElement(Vr, {
          ...s.floaterProps,
          component: this.renderTooltip,
          debug: t,
          getPopper: this.setPopper,
          id: `react-joyride-step-${n}`,
          open: this.open,
          placement: s.placement,
          target: s.target
      }, O.createElement(lp, {
          beaconComponent: s.beaconComponent,
          continuous: e,
          index: n,
          isLastStep: n + 1 === o,
          locale: s.locale,
          nonce: r,
          onClickOrHover: this.handleClickHoverBeacon,
          shouldFocus: i,
          size: o,
          step: s,
          styles: s.styles
      })))
  }
}
, Bs = class extends O.Component {
  constructor(e) {
      super(e),
      M(this, "helpers"),
      M(this, "store"),
      M(this, "callback", s=>{
          const {callback: l} = this.props;
          $.function(l) && l(s)
      }
      ),
      M(this, "handleKeyboard", s=>{
          const {index: l, lifecycle: a} = this.state
            , {steps: u} = this.props
            , d = u[l];
          a === z.TOOLTIP && s.code === "Escape" && d && !d.disableCloseOnEsc && this.store.close("keyboard")
      }
      ),
      M(this, "handleClickOverlay", ()=>{
          const {index: s} = this.state
            , {steps: l} = this.props;
          ht(this.props, l[s]).disableOverlayClose || this.helpers.close("overlay")
      }
      ),
      M(this, "syncState", s=>{
          this.setState(s)
      }
      );
      const {debug: t, getHelpers: n, run: r, stepIndex: i} = e;
      this.store = np({
          ...e,
          controlled: r && $.number(i)
      }),
      this.helpers = this.store.getHelpers();
      const {addListener: o} = this.store;
      at({
          title: "init",
          data: [{
              key: "props",
              value: this.props
          }, {
              key: "state",
              value: this.state
          }],
          debug: t
      }),
      o(this.syncState),
      n && n(this.helpers),
      this.state = this.store.getState()
  }
  componentDidMount() {
      if (!Je())
          return;
      const {debug: e, disableCloseOnEsc: t, run: n, steps: r} = this.props
        , {start: i} = this.store;
      lo(r, e) && n && i(),
      t || document.body.addEventListener("keydown", this.handleKeyboard, {
          passive: !0
      })
  }
  componentDidUpdate(e, t) {
      if (!Je())
          return;
      const {action: n, controlled: r, index: i, lifecycle: o, status: s} = this.state
        , {debug: l, run: a, stepIndex: u, steps: d} = this.props
        , {stepIndex: c, steps: p} = e
        , {reset: f, setSteps: m, start: h, stop: b, update: g} = this.store
        , {changed: v} = Pn(e, this.props)
        , {changed: _, changedFrom: I} = Pn(t, this.state)
        , D = ht(this.props, d[i])
        , j = !we(p, d)
        , F = $.number(u) && v("stepIndex")
        , T = Ze(D.target);
      if (j && (lo(d, l) ? m(d) : console.warn("Steps are not valid", d)),
      v("run") && (a ? h(u) : b()),
      F) {
          let R = $.number(c) && c < u ? G.NEXT : G.PREV;
          n === G.STOP && (R = G.START),
          [H.FINISHED, H.SKIPPED].includes(s) || g({
              action: n === G.CLOSE ? G.CLOSE : R,
              index: u,
              lifecycle: z.INIT
          })
      }
      !r && s === H.RUNNING && i === 0 && !T && (this.store.update({
          index: i + 1
      }),
      this.callback({
          ...this.state,
          type: Ae.TARGET_NOT_FOUND,
          step: D
      }));
      const k = {
          ...this.state,
          index: i,
          step: D
      };
      if (_("action", [G.NEXT, G.PREV, G.SKIP, G.CLOSE]) && _("status", H.PAUSED)) {
          const R = ht(this.props, d[t.index]);
          this.callback({
              ...k,
              index: t.index,
              lifecycle: z.COMPLETE,
              step: R,
              type: Ae.STEP_AFTER
          })
      }
      if (_("status", [H.FINISHED, H.SKIPPED])) {
          const R = ht(this.props, d[t.index]);
          r || this.callback({
              ...k,
              index: t.index,
              lifecycle: z.COMPLETE,
              step: R,
              type: Ae.STEP_AFTER
          }),
          this.callback({
              ...k,
              type: Ae.TOUR_END,
              step: R,
              index: t.index
          }),
          f()
      } else
          I("status", [H.IDLE, H.READY], H.RUNNING) ? this.callback({
              ...k,
              type: Ae.TOUR_START
          }) : (_("status") || _("action", G.RESET)) && this.callback({
              ...k,
              type: Ae.TOUR_STATUS
          });
      this.scrollToStep(t),
      D.placement === "center" && s === H.RUNNING && o === z.INIT && this.store.update({
          lifecycle: z.READY
      })
  }
  componentWillUnmount() {
      const {disableCloseOnEsc: e} = this.props;
      e || document.body.removeEventListener("keydown", this.handleKeyboard)
  }
  scrollToStep(e) {
      const {index: t, lifecycle: n, status: r} = this.state
        , {debug: i, disableScrollParentFix: o=!1, scrollDuration: s, scrollOffset: l=20, scrollToFirstStep: a=!1, steps: u} = this.props
        , d = ht(this.props, u[t])
        , c = Ze(d.target)
        , p = Jd({
          isFirstStep: t === 0,
          lifecycle: n,
          previousLifecycle: e.lifecycle,
          scrollToFirstStep: a,
          step: d,
          target: c
      });
      if (r === H.RUNNING && p) {
          const f = Un(c, o)
            , m = zn(c, o);
          let h = Math.floor(Ud(c, l, o)) || 0;
          at({
              title: "scrollToStep",
              data: [{
                  key: "index",
                  value: t
              }, {
                  key: "lifecycle",
                  value: n
              }, {
                  key: "status",
                  value: r
              }],
              debug: i
          });
          const b = this.store.getPopper("beacon")
            , g = this.store.getPopper("tooltip");
          if (n === z.BEACON && b) {
              const {offsets: v, placement: _} = b;
              !["bottom"].includes(_) && !f && (h = Math.floor(v.popper.top - l))
          } else if (n === z.TOOLTIP && g) {
              const {flipped: v, offsets: _, placement: I} = g;
              ["top", "right", "left"].includes(I) && !v && !f ? h = Math.floor(_.popper.top - l) : h -= d.spotlightPadding
          }
          h = h >= 0 ? h : 0,
          r === H.RUNNING && Hd(h, {
              element: m,
              duration: s
          }).then(()=>{
              setTimeout(()=>{
                  var v;
                  (v = this.store.getPopper("tooltip")) == null || v.instance.update()
              }
              , 10)
          }
          )
      }
  }
  render() {
      if (!Je())
          return null;
      const {index: e, lifecycle: t, status: n} = this.state
        , {continuous: r=!1, debug: i=!1, nonce: o, scrollToFirstStep: s=!1, steps: l} = this.props
        , a = n === H.RUNNING
        , u = {};
      if (a && l[e]) {
          const d = ht(this.props, l[e]);
          u.step = O.createElement(hp, {
              ...this.state,
              callback: this.callback,
              continuous: r,
              debug: i,
              helpers: this.helpers,
              nonce: o,
              shouldScroll: !d.disableScrolling && (e !== 0 || s),
              step: d,
              store: this.store
          }),
          u.overlay = O.createElement(sp, {
              id: "react-joyride-portal"
          }, O.createElement(op, {
              ...d,
              continuous: r,
              debug: i,
              lifecycle: t,
              onClickOverlay: this.handleClickOverlay
          }))
      }
      return O.createElement("div", {
          className: "react-joyride"
      }, u.step, u.overlay)
  }
}
;
M(Bs, "defaultProps", Zd);
var uo = Bs;
const po = new URL("/assets/hbd2.mp3",import.meta.url).href
, mp = [{
  target: "#name",
  content: "This is the input to enter the name.",
  placement: "bottom",
  disableBeacon: !0
}, {
  target: "#candle",
  content: "Blow on the Lightning port to extinguish the candle.",
  placement: "bottom"
}, {
  target: "#start",
  content: "Press start to play music and light the candle.",
  placement: "top"
}, {
  target: "#pause",
  content: "Press pause if you want the music to pause temporarily.",
  placement: "top"
}, {
  target: "#stop",
  content: "Press stop if you want to cancel temporarily.",
  placement: "top"
}, {
  target: "#toggle-candle",
  content: "Press button if you want to light or blow out the candle.",
  placement: "top"
}, {
  target: "#share",
  content: "Change the name and click 'Share' to send the gift to anyone.",
  placement: "top"
}]
, vp = [{
  target: "#start",
  content: "Click here",
  placement: "top",
  disableBeacon: !0
}];
function yp() {
  const [e,t] = O.useState(!1)
    , n = O.useRef(new Audio(po))
    , r = O.useRef(void 0)
    , [i,o] = O.useState(!1)
    , [s,l] = O.useState(!1)
    , [a,u] = O.useState(!0)
    , [d,c] = O.useState(!1)
    , [p,f] = O.useState("")
    , m = O.useRef(null)
    , h = O.useCallback(()=>t(!0), [])
    , b = O.useCallback(()=>t(!1), [])
    , g = O.useCallback(()=>t(R=>!R), [])
    , v = O.useCallback(()=>{
      o(!0),
      n.current.load(),
      n.current.play(),
      l(!1)
  }
  , [])
    , _ = O.useCallback(()=>{
      n.current.pause(),
      l(!0)
  }
  , [])
    , I = O.useCallback(()=>{
      o(!1),
      n.current.pause(),
      n.current.currentTime = 0,
      l(!1)
  }
  , [])
    , D = O.useCallback(()=>{
      v(),
      h()
  }
  , [h, v])
    , j = O.useCallback(()=>{
      I(),
      b(),
      setTimeout(()=>{
          m.current && m.current.focus()
      }
      , 0)
  }
  , [I, b])
    , F = O.useCallback(async R=>{
      try {
          r.current = R;
          const W = new AudioContext
            , ee = W.createMediaStreamSource(R)
            , te = W.createAnalyser();
          ee.connect(te),
          te.fftSize = 2048;
          const X = te.frequencyBinCount
            , ce = new Uint8Array(X);
          setInterval(()=>{
              te.getByteFrequencyData(ce),
              ce.reduce((w,E)=>w + E, 0) / X > 10 && t(!1)
          }
          , 100)
      } catch (W) {
          console.error("Error accessing microphone:", W)
      }
  }
  , [])
    , T = O.useCallback(R=>{
      const {action: W} = R;
      (W === G.RESET || W === G.CLOSE) && (u(!1),
      setTimeout(()=>{
          m.current && m.current.focus()
      }
      , 0))
  }
  , [u])
    , k = O.useCallback(()=>{}
  , [])
    , J = R=>{
      R.key === "Enter" && setTimeout(()=>{
          m.current && m.current.blur()
      }
      , 0)
  }
  ;
  return O.useEffect(()=>((async()=>{
      try {
          const R = await navigator.mediaDevices.getUserMedia({
              audio: !0
          });
          R && F(R)
      } catch (R) {
          console.error("Error accessing microphone:", R)
      }
  }
  )(),
  ()=>{
      r.current && r.current.getTracks().forEach(R=>R.stop())
  }
  ), [F]),
  O.useLayoutEffect(()=>{
      const R = window.location.search;
      new URLSearchParams(R).get("shared") && (t(!0),
      c(!0))
  }
  , []),
  N.jsxs("div", {
      style: {
          display: "flex",
          flexDirection: "column",
          height: "100dvh",
          justifyContent: "space-between"
      },
      children: [N.jsx(uo, {
          styles: {
              options: {
                  zIndex: d ? 1e4 : -1e4
              },
              buttonSkip: {
                  outline: 0
              },
              buttonNext: {
                  outline: 0
              },
              buttonBack: {
                  outline: 0
              },
              buttonClose: {
                  outline: 0
              }
          },
          steps: vp,
          run: a,
          showSkipButton: !0,
          continuous: !0,
          callback: T,
          hideBackButton: !0,
          hideCloseButton: !0,
          showProgress: !0,
          spotlightClicks: !0
      }), N.jsx(uo, {
          styles: {
              options: {
                  zIndex: d ? -1e4 : 1e4
              },
              buttonSkip: {
                  outline: 0
              },
              buttonNext: {
                  outline: 0
              },
              buttonBack: {
                  outline: 0
              },
              buttonClose: {
                  outline: 0
              }
          },
          steps: mp,
          run: a,
          showSkipButton: !0,
          continuous: !0,
          callback: T,
          hideBackButton: !0,
          hideCloseButton: !0,
          showProgress: !0,
          spotlightClicks: !0
      }), N.jsx("audio", {
          src: po,
          ref: n,
          preload: "auto",
          onEnded: k
      }), N.jsxs("div", {
          children: [N.jsx(kc, {
              ref: m,
              name: p,
              setName: f,
              shareMode: d,
              playing: i,
              run: a,
              onKeyPress: J
          }), N.jsx(Hl, {
              candleVisible: e
          })]
      }), N.jsx("div", {
          style: {
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)"
          },
          children: N.jsx("dotlottie-player", {
              src: "/assets/hbd.lottie",
              autoplay: !0,
              loop: !0,
              style: {
                  zIndex: 20,
                  visibility: d || i ? "visible" : "hidden",
                  width: 400
              }
          })
      }), N.jsx("div", {
          style: {
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translateX(-50%)"
          },
          children: N.jsx("dotlottie-player", {
              src: "/assets/confetti.lottie",
              autoplay: !0,
              loop: !0,
              style: {
                  zIndex: 30,
                  visibility: d || i ? "visible" : "hidden",
                  width: 400
              }
          })
      }), N.jsx("div", {
          style: {
              position: "absolute",
              bottom: "1.25%",
              left: "50%",
              transform: "translateX(-50%)"
          },
          children: N.jsx(Tc, {
              run: a,
              start: D,
              pause: _,
              stop: j,
              toggleLightCandle: g,
              setRun: u,
              playing: i,
              paused: s,
              candleVisible: e
          })
      })]
  })
}
rr.createRoot(document.getElementById("root")).render(N.jsxs(P.StrictMode, {
  children: [N.jsx(yp, {}), N.jsx(xc, {})]
}));
export {ft as e, Y as g, Se as q, Lp as r};
