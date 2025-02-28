import { s as A, C, b as ft, i as Y, g as V, N as h, P as X, S as pt, a as B, c as ht, d as mt, e as St, f as q, r as gt, h as Et, j as yt, k as Nt, l as j, m as J, t as _, n as x, o as M, p as K, q as T, u as Q, v as Z, w as Tt, x as vt, y as b, z as L, A as R, B as wt, D as Mt, E as It, F as Rt, G as Ct, H as bt, I as _t, J as Dt, K as Lt, L as xt, M as Ot, O as At, Q as Vt, R as Pt, T as kt, U as zt } from "./index-D8BN1Iq1.mjs";
const P = /* @__PURE__ */ new WeakMap();
function N(t) {
  return P.has(t);
}
function Ft(t) {
  let e = t;
  for (; e; ) {
    if (!N(e) && !Y(e))
      return !1;
    e = V(e);
  }
  return !0;
}
function m(t) {
  return P.get(t);
}
function Bt(t, e) {
  P.set(t, e);
}
function k(t, e) {
  const n = t.tagName, r = t.value;
  if (A(t, e)) {
    const s = t.type;
    return n === "INPUT" && (s === "button" || s === "submit" || s === "reset") ? r : !r || n === "OPTION" ? void 0 : C;
  }
  if (n === "OPTION" || n === "SELECT")
    return t.value;
  if (!(n !== "INPUT" && n !== "TEXTAREA"))
    return r;
}
const Ut = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm, Ht = /^[A-Za-z]+:|^\/\//, Gt = /^data:.*,/i;
function Wt(t, e) {
  return t.replace(Ut, (n, r, s, o, u, i) => {
    const a = s || u || i;
    if (!e || !a || Ht.test(a) || Gt.test(a))
      return n;
    const d = r || o || "";
    return `url(${d}${$t(a, e)}${d})`;
  });
}
function $t(t, e) {
  try {
    return ft(t, e).href;
  } catch {
    return t;
  }
}
const Yt = /[^a-z1-6-_]/;
function tt(t) {
  const e = t.toLowerCase().trim();
  return Yt.test(e) ? "div" : e;
}
function U(t, e) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${e}' style='background-color:silver'%3E%3C/svg%3E`;
}
const y = {
  FullSnapshot: 2,
  IncrementalSnapshot: 3,
  Meta: 4,
  Focus: 6,
  ViewEnd: 7,
  VisualViewport: 8,
  FrustrationRecord: 9
}, w = {
  Document: 0,
  DocumentType: 1,
  Element: 2,
  Text: 3,
  CDATA: 4,
  DocumentFragment: 11
}, S = {
  Mutation: 0,
  MouseMove: 1,
  MouseInteraction: 2,
  Scroll: 3,
  ViewportResize: 4,
  Input: 5,
  TouchMove: 6,
  MediaInteraction: 7,
  StyleSheetRule: 8
  // CanvasMutation : 9,
  // Font : 10,
}, g = {
  MouseUp: 0,
  MouseDown: 1,
  Click: 2,
  ContextMenu: 3,
  DblClick: 4,
  Focus: 5,
  Blur: 6,
  TouchStart: 7,
  TouchEnd: 9
}, H = {
  Play: 0,
  Pause: 1
};
function et(t) {
  if (!(t === void 0 || t.length === 0))
    return t.map((e) => {
      const n = e.cssRules || e.rules;
      return {
        cssRules: Array.from(n, (o) => o.cssText),
        disabled: e.disabled || void 0,
        media: e.media.length > 0 ? Array.from(e.media) : void 0
      };
    });
}
function nt(t, e, n, r) {
  if (e === h.HIDDEN)
    return null;
  const s = t.getAttribute(n);
  if (e === h.MASK && n !== X && !pt.includes(n) && n !== r.actionNameAttribute) {
    const o = t.tagName;
    switch (n) {
      // Mask Attribute text content
      case "title":
      case "alt":
      case "placeholder":
        return C;
    }
    if (o === "IMG" && (n === "src" || n === "srcset")) {
      const u = t;
      if (u.naturalWidth > 0)
        return U(u.naturalWidth, u.naturalHeight);
      const { width: i, height: a } = t.getBoundingClientRect();
      return i > 0 || a > 0 ? U(i, a) : B;
    }
    if (o === "SOURCE" && (n === "src" || n === "srcset"))
      return B;
    if (o === "A" && n === "href")
      return C;
    if (s && n.startsWith("data-"))
      return C;
    if (o === "IFRAME" && n === "srcdoc")
      return C;
  }
  return !s || typeof s != "string" ? s : ht(s) ? mt(s) : s;
}
function Xt(t, e, n) {
  if (e === h.HIDDEN)
    return {};
  const r = {}, s = tt(t.tagName), o = t.ownerDocument;
  for (let c = 0; c < t.attributes.length; c += 1) {
    const f = t.attributes.item(c).name, p = nt(t, e, f, n.configuration);
    p !== null && (r[f] = p);
  }
  if (t.value && (s === "textarea" || s === "select" || s === "option" || s === "input")) {
    const c = k(t, e);
    c !== void 0 && (r.value = c);
  }
  if (s === "option" && e === h.ALLOW) {
    const c = t;
    c.selected && (r.selected = c.selected);
  }
  if (s === "link") {
    const c = Array.from(o.styleSheets).find((f) => f.href === t.href), l = O(c);
    l && c && (r._cssText = l);
  }
  if (s === "style" && t.sheet) {
    const c = O(t.sheet);
    c && (r._cssText = c);
  }
  const u = t;
  if (s === "input" && (u.type === "radio" || u.type === "checkbox") && (e === h.ALLOW ? r.checked = !!u.checked : A(u, e) && delete r.checked), s === "audio" || s === "video") {
    const c = t;
    r.rr_mediaState = c.paused ? "paused" : "played";
  }
  let i, a;
  const d = n.serializationContext;
  switch (d.status) {
    case 0:
      i = Math.round(t.scrollTop), a = Math.round(t.scrollLeft), (i || a) && d.elementsScrollPositions.set(t, { scrollTop: i, scrollLeft: a });
      break;
    case 1:
      d.elementsScrollPositions.has(t) && ({ scrollTop: i, scrollLeft: a } = d.elementsScrollPositions.get(t));
      break;
  }
  return a && (r.rr_scrollLeft = a), i && (r.rr_scrollTop = i), r;
}
function O(t) {
  if (!t)
    return null;
  let e;
  try {
    e = t.rules || t.cssRules;
  } catch {
  }
  if (!e)
    return null;
  const n = Array.from(e, St() ? qt : st).join("");
  return Wt(n, t.href);
}
function qt(t) {
  if (Jt(t) && t.selectorText.includes(":")) {
    const e = /(\[[\w-]+[^\\])(:[^\]]+\])/g;
    return t.cssText.replace(e, "$1\\$2");
  }
  return st(t);
}
function st(t) {
  return jt(t) && O(t.styleSheet) || t.cssText;
}
function jt(t) {
  return "styleSheet" in t;
}
function Jt(t) {
  return "selectorText" in t;
}
function z(t, e) {
  const n = Zt(t, e);
  if (!n)
    return null;
  const r = m(t) || Qt(), s = n;
  return s.id = r, Bt(t, r), e.serializedNodeIds && e.serializedNodeIds.add(r), s;
}
let Kt = 1;
function Qt() {
  return Kt++;
}
function F(t, e) {
  const n = [];
  return j(t, (r) => {
    const s = z(r, e);
    s && n.push(s);
  }), n;
}
function Zt(t, e) {
  switch (t.nodeType) {
    case t.DOCUMENT_NODE:
      return te(t, e);
    case t.DOCUMENT_FRAGMENT_NODE:
      return ee(t, e);
    case t.DOCUMENT_TYPE_NODE:
      return ne(t);
    case t.ELEMENT_NODE:
      return se(t, e);
    case t.TEXT_NODE:
      return oe(t, e);
    case t.CDATA_SECTION_NODE:
      return ie();
  }
}
function te(t, e) {
  return {
    type: w.Document,
    childNodes: F(t, e),
    adoptedStyleSheets: et(t.adoptedStyleSheets)
  };
}
function ee(t, e) {
  const n = Y(t);
  return n && e.serializationContext.shadowRootsController.addShadowRoot(t), {
    type: w.DocumentFragment,
    childNodes: F(t, e),
    isShadowRoot: n,
    adoptedStyleSheets: n ? et(t.adoptedStyleSheets) : void 0
  };
}
function ne(t) {
  return {
    type: w.DocumentType,
    name: t.name,
    publicId: t.publicId,
    systemId: t.systemId
  };
}
function se(t, e) {
  const n = tt(t.tagName), r = re(t) || void 0, s = gt(Et(t), e.parentNodePrivacyLevel);
  if (s === h.HIDDEN) {
    const { width: i, height: a } = t.getBoundingClientRect();
    return {
      type: w.Element,
      tagName: n,
      attributes: {
        rr_width: `${i}px`,
        rr_height: `${a}px`,
        [X]: yt
      },
      childNodes: [],
      isSVG: r
    };
  }
  if (s === h.IGNORE)
    return;
  const o = Xt(t, s, e);
  let u = [];
  if (Nt(t) && // Do not serialize style children as the css rules are already in the _cssText attribute
  n !== "style") {
    let i;
    e.parentNodePrivacyLevel === s && e.ignoreWhiteSpace === (n === "head") ? i = e : i = {
      ...e,
      parentNodePrivacyLevel: s,
      ignoreWhiteSpace: n === "head"
    }, u = F(t, i);
  }
  return {
    type: w.Element,
    tagName: n,
    attributes: o,
    childNodes: u,
    isSVG: r
  };
}
function re(t) {
  return t.tagName === "svg" || t instanceof SVGElement;
}
function oe(t, e) {
  const n = q(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
  if (n !== void 0)
    return {
      type: w.Text,
      textContent: n
    };
}
function ie() {
  return {
    type: w.CDATA,
    textContent: ""
  };
}
function ae(t, e, n) {
  return z(t, {
    serializationContext: n,
    parentNodePrivacyLevel: e.defaultPrivacyLevel,
    configuration: e
  });
}
function rt(t) {
  return !!t.changedTouches;
}
function D(t) {
  return t.composed === !0 && J(t.target) ? t.composedPath()[0] : t.target;
}
const G = 25;
function ue(t) {
  return Math.abs(t.pageTop - t.offsetTop - window.scrollY) > G || Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > G;
}
const ce = (t, e) => {
  const n = window.visualViewport, r = {
    layoutViewportX: t,
    layoutViewportY: e,
    visualViewportX: t,
    visualViewportY: e
  };
  if (n)
    ue(n) ? (r.layoutViewportX = Math.round(t + n.offsetLeft), r.layoutViewportY = Math.round(e + n.offsetTop)) : (r.visualViewportX = Math.round(t - n.offsetLeft), r.visualViewportY = Math.round(e - n.offsetTop));
  else return r;
  return r;
}, ot = (t) => ({
  scale: t.scale,
  offsetLeft: t.offsetLeft,
  offsetTop: t.offsetTop,
  pageLeft: t.pageLeft,
  pageTop: t.pageTop,
  height: t.height,
  width: t.width
});
function E(t, e) {
  return {
    data: {
      source: t,
      ...e
    },
    type: y.IncrementalSnapshot,
    timestamp: _()
  };
}
const le = 50;
function de(t, e) {
  const { throttled: n, cancel: r } = x((o) => {
    const u = D(o);
    if (N(u)) {
      const i = it(o);
      if (!i)
        return;
      const a = {
        id: m(u),
        timeOffset: 0,
        x: i.x,
        y: i.y
      };
      e(E(rt(o) ? S.TouchMove : S.MouseMove, { positions: [a] }));
    }
  }, le, {
    trailing: !1
  }), { stop: s } = M(t, document, [
    "mousemove",
    "touchmove"
    /* DOM_EVENT.TOUCH_MOVE */
  ], n, {
    capture: !0,
    passive: !0
  });
  return {
    stop: () => {
      s(), r();
    }
  };
}
function it(t) {
  let { clientX: e, clientY: n } = rt(t) ? t.changedTouches[0] : t;
  if (window.visualViewport) {
    const { visualViewportX: r, visualViewportY: s } = ce(e, n);
    e = r, n = s;
  }
  if (!Number.isFinite(e) || !Number.isFinite(n)) {
    t.isTrusted && K("mouse/touch event without x/y");
    return;
  }
  return { x: e, y: n };
}
const W = {
  // Listen for pointerup DOM events instead of mouseup for MouseInteraction/MouseUp records. This
  // allows to reference such records from Frustration records.
  //
  // In the context of supporting Mobile Session Replay, we introduced `PointerInteraction` records
  // used by the Mobile SDKs in place of `MouseInteraction`. In the future, we should replace
  // `MouseInteraction` by `PointerInteraction` in the Browser SDK so we have an uniform way to
  // convey such interaction. This would cleanly solve the issue since we would have
  // `PointerInteraction/Up` records that we could reference from `Frustration` records.
  pointerup: g.MouseUp,
  mousedown: g.MouseDown,
  click: g.Click,
  contextmenu: g.ContextMenu,
  dblclick: g.DblClick,
  focus: g.Focus,
  blur: g.Blur,
  touchstart: g.TouchStart,
  touchend: g.TouchEnd
};
function fe(t, e, n) {
  const r = (s) => {
    const o = D(s);
    if (T(o, t.defaultPrivacyLevel) === h.HIDDEN || !N(o))
      return;
    const u = m(o), i = W[s.type];
    let a;
    if (i !== g.Blur && i !== g.Focus) {
      const c = it(s);
      if (!c)
        return;
      a = { id: u, type: i, x: c.x, y: c.y };
    } else
      a = { id: u, type: i };
    const d = {
      id: n.getIdForEvent(s),
      ...E(S.MouseInteraction, a)
    };
    e(d);
  };
  return M(t, document, Object.keys(W), r, {
    capture: !0,
    passive: !0
  });
}
const pe = 100;
function at(t, e, n, r = document) {
  const { throttled: s, cancel: o } = x((i) => {
    const a = D(i);
    if (!a || T(a, t.defaultPrivacyLevel) === h.HIDDEN || !N(a))
      return;
    const d = m(a), c = a === document ? {
      scrollTop: Q(),
      scrollLeft: Z()
    } : {
      scrollTop: Math.round(a.scrollTop),
      scrollLeft: Math.round(a.scrollLeft)
    };
    n.set(a, c), e(E(S.Scroll, {
      id: d,
      x: c.scrollLeft,
      y: c.scrollTop
    }));
  }, pe), { stop: u } = Tt(t, r, "scroll", s, {
    capture: !0,
    passive: !0
  });
  return {
    stop: () => {
      u(), o();
    }
  };
}
const he = 200;
function me(t, e) {
  const n = vt(t).subscribe((r) => {
    e(E(S.ViewportResize, r));
  });
  return {
    stop: () => {
      n.unsubscribe();
    }
  };
}
function Se(t, e) {
  const n = window.visualViewport;
  if (!n)
    return { stop: b };
  const { throttled: r, cancel: s } = x(() => {
    e({
      data: ot(n),
      type: y.VisualViewport,
      timestamp: _()
    });
  }, he, {
    trailing: !1
  }), { stop: o } = M(t, n, [
    "resize",
    "scroll"
    /* DOM_EVENT.SCROLL */
  ], r, {
    capture: !0,
    passive: !0
  });
  return {
    stop: () => {
      o(), s();
    }
  };
}
function ge(t, e) {
  return M(t, document, [
    "play",
    "pause"
    /* DOM_EVENT.PAUSE */
  ], (n) => {
    const r = D(n);
    !r || T(r, t.defaultPrivacyLevel) === h.HIDDEN || !N(r) || e(E(S.MediaInteraction, {
      id: m(r),
      type: n.type === "play" ? H.Play : H.Pause
    }));
  }, {
    capture: !0,
    passive: !0
  });
}
function Ee(t) {
  function e(s, o) {
    s && N(s.ownerNode) && o(m(s.ownerNode));
  }
  const n = [
    L(CSSStyleSheet.prototype, "insertRule", ({ target: s, parameters: [o, u] }) => {
      e(s, (i) => t(E(S.StyleSheetRule, {
        id: i,
        adds: [{ rule: o, index: u }]
      })));
    }),
    L(CSSStyleSheet.prototype, "deleteRule", ({ target: s, parameters: [o] }) => {
      e(s, (u) => t(E(S.StyleSheetRule, {
        id: u,
        removes: [{ index: o }]
      })));
    })
  ];
  typeof CSSGroupingRule < "u" ? r(CSSGroupingRule) : (r(CSSMediaRule), r(CSSSupportsRule));
  function r(s) {
    n.push(L(s.prototype, "insertRule", ({ target: o, parameters: [u, i] }) => {
      e(o.parentStyleSheet, (a) => {
        const d = $(o);
        d && (d.push(i || 0), t(E(S.StyleSheetRule, {
          id: a,
          adds: [{ rule: u, index: d }]
        })));
      });
    }), L(s.prototype, "deleteRule", ({ target: o, parameters: [u] }) => {
      e(o.parentStyleSheet, (i) => {
        const a = $(o);
        a && (a.push(u), t(E(S.StyleSheetRule, {
          id: i,
          removes: [{ index: a }]
        })));
      });
    }));
  }
  return {
    stop: () => {
      n.forEach((s) => s.stop());
    }
  };
}
function $(t) {
  const e = [];
  let n = t;
  for (; n.parentRule; ) {
    const u = Array.from(n.parentRule.cssRules).indexOf(n);
    e.unshift(u), n = n.parentRule;
  }
  if (!n.parentStyleSheet)
    return;
  const s = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
  return e.unshift(s), e;
}
function ye(t, e) {
  return M(t, window, [
    "focus",
    "blur"
    /* DOM_EVENT.BLUR */
  ], () => {
    e({
      data: { has_focus: document.hasFocus() },
      type: y.Focus,
      timestamp: _()
    });
  });
}
function Ne(t, e, n) {
  const r = t.subscribe(12, (s) => {
    var o, u;
    s.rawRumEvent.type === "action" && s.rawRumEvent.action.type === "click" && (!((u = (o = s.rawRumEvent.action.frustration) === null || o === void 0 ? void 0 : o.type) === null || u === void 0) && u.length) && "events" in s.domainContext && s.domainContext.events && s.domainContext.events.length && e({
      timestamp: s.rawRumEvent.date,
      type: y.FrustrationRecord,
      data: {
        frustrationTypes: s.rawRumEvent.action.frustration.type,
        recordIds: s.domainContext.events.map((i) => n.getIdForEvent(i))
      }
    });
  });
  return {
    stop: () => {
      r.unsubscribe();
    }
  };
}
function Te(t, e) {
  const n = t.subscribe(5, () => {
    e({
      timestamp: _(),
      type: y.ViewEnd
    });
  });
  return {
    stop: () => {
      n.unsubscribe();
    }
  };
}
function ut(t, e, n = document) {
  const r = t.defaultPrivacyLevel, s = /* @__PURE__ */ new WeakMap(), o = n !== document, { stop: u } = M(
    t,
    n,
    // The 'input' event bubbles across shadow roots, so we don't have to listen for it on shadow
    // roots since it will be handled by the event listener that we did add to the document. Only
    // the 'change' event is blocked and needs to be handled on shadow roots.
    o ? [
      "change"
      /* DOM_EVENT.CHANGE */
    ] : [
      "input",
      "change"
      /* DOM_EVENT.CHANGE */
    ],
    (c) => {
      const l = D(c);
      (l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement || l instanceof HTMLSelectElement) && a(l);
    },
    {
      capture: !0,
      passive: !0
    }
  );
  let i;
  if (o)
    i = b;
  else {
    const c = [
      R(HTMLInputElement.prototype, "value", a),
      R(HTMLInputElement.prototype, "checked", a),
      R(HTMLSelectElement.prototype, "value", a),
      R(HTMLTextAreaElement.prototype, "value", a),
      R(HTMLSelectElement.prototype, "selectedIndex", a)
    ];
    i = () => {
      c.forEach((l) => l.stop());
    };
  }
  return {
    stop: () => {
      i(), u();
    }
  };
  function a(c) {
    const l = T(c, r);
    if (l === h.HIDDEN)
      return;
    const f = c.type;
    let p;
    if (f === "radio" || f === "checkbox") {
      if (A(c, l))
        return;
      p = { isChecked: c.checked };
    } else {
      const v = k(c, l);
      if (v === void 0)
        return;
      p = { text: v };
    }
    d(c, p);
    const I = c.name;
    f === "radio" && I && c.checked && document.querySelectorAll(`input[type="radio"][name="${CSS.escape(I)}"]`).forEach((v) => {
      v !== c && d(v, { isChecked: !1 });
    });
  }
  function d(c, l) {
    if (!N(c))
      return;
    const f = s.get(c);
    (!f || f.text !== l.text || f.isChecked !== l.isChecked) && (s.set(c, l), e(E(S.Input, {
      id: m(c),
      ...l
    })));
  }
}
const ve = 100, we = 16;
function Me(t) {
  let e = b, n = [];
  function r() {
    e(), t(n), n = [];
  }
  const { throttled: s, cancel: o } = x(r, we, {
    leading: !1
  });
  return {
    addMutations: (u) => {
      n.length === 0 && (e = wt(s, { timeout: ve })), n.push(...u);
    },
    flush: r,
    stop: () => {
      e(), o();
    }
  };
}
function ct(t, e, n, r) {
  const s = Mt();
  if (!s)
    return { stop: b, flush: b };
  const o = Me((i) => {
    Ie(i.concat(u.takeRecords()), t, e, n);
  }), u = new s(It(o.addMutations));
  return u.observe(r, {
    attributeOldValue: !0,
    attributes: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
  }), {
    stop: () => {
      u.disconnect(), o.stop();
    },
    flush: () => {
      o.flush();
    }
  };
}
function Ie(t, e, n, r) {
  const s = /* @__PURE__ */ new Map();
  t.filter((l) => l.type === "childList").forEach((l) => {
    l.removedNodes.forEach((f) => {
      lt(f, r.removeShadowRoot);
    });
  });
  const o = t.filter((l) => l.target.isConnected && Ft(l.target) && T(l.target, n.defaultPrivacyLevel, s) !== h.HIDDEN), { adds: u, removes: i, hasBeenSerialized: a } = Re(o.filter((l) => l.type === "childList"), n, r, s), d = Ce(o.filter((l) => l.type === "characterData" && !a(l.target)), n, s), c = be(o.filter((l) => l.type === "attributes" && !a(l.target)), n, s);
  !d.length && !c.length && !i.length && !u.length || e(E(S.Mutation, { adds: u, removes: i, texts: d, attributes: c }));
}
function Re(t, e, n, r) {
  const s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  for (const f of t)
    f.addedNodes.forEach((p) => {
      s.add(p);
    }), f.removedNodes.forEach((p) => {
      s.has(p) || o.set(p, f.target), s.delete(p);
    });
  const u = Array.from(s);
  _e(u);
  const i = /* @__PURE__ */ new Set(), a = [];
  for (const f of u) {
    if (c(f))
      continue;
    const p = T(f.parentNode, e.defaultPrivacyLevel, r);
    if (p === h.HIDDEN || p === h.IGNORE)
      continue;
    const I = z(f, {
      serializedNodeIds: i,
      parentNodePrivacyLevel: p,
      serializationContext: { status: 2, shadowRootsController: n },
      configuration: e
    });
    if (!I)
      continue;
    const v = V(f);
    a.push({
      nextId: l(f),
      parentId: m(v),
      node: I
    });
  }
  const d = [];
  return o.forEach((f, p) => {
    N(p) && d.push({
      parentId: m(f),
      id: m(p)
    });
  }), { adds: a, removes: d, hasBeenSerialized: c };
  function c(f) {
    return N(f) && i.has(m(f));
  }
  function l(f) {
    let p = f.nextSibling;
    for (; p; ) {
      if (N(p))
        return m(p);
      p = p.nextSibling;
    }
    return null;
  }
}
function Ce(t, e, n) {
  var r;
  const s = [], o = /* @__PURE__ */ new Set(), u = t.filter((i) => o.has(i.target) ? !1 : (o.add(i.target), !0));
  for (const i of u) {
    if (i.target.textContent === i.oldValue)
      continue;
    const d = T(V(i.target), e.defaultPrivacyLevel, n);
    d === h.HIDDEN || d === h.IGNORE || s.push({
      id: m(i.target),
      // TODO: pass a valid "ignoreWhiteSpace" argument
      value: (r = q(i.target, !1, d)) !== null && r !== void 0 ? r : null
    });
  }
  return s;
}
function be(t, e, n) {
  const r = [], s = /* @__PURE__ */ new Map(), o = t.filter((i) => {
    const a = s.get(i.target);
    return a && a.has(i.attributeName) ? !1 : (a ? a.add(i.attributeName) : s.set(i.target, /* @__PURE__ */ new Set([i.attributeName])), !0);
  }), u = /* @__PURE__ */ new Map();
  for (const i of o) {
    if (i.target.getAttribute(i.attributeName) === i.oldValue)
      continue;
    const d = T(i.target, e.defaultPrivacyLevel, n), c = nt(i.target, d, i.attributeName, e);
    let l;
    if (i.attributeName === "value") {
      const p = k(i.target, d);
      if (p === void 0)
        continue;
      l = p;
    } else typeof c == "string" ? l = c : l = null;
    let f = u.get(i.target);
    f || (f = {
      id: m(i.target),
      attributes: {}
    }, r.push(f), u.set(i.target, f)), f.attributes[i.attributeName] = l;
  }
  return r;
}
function _e(t) {
  t.sort((e, n) => {
    const r = e.compareDocumentPosition(n);
    return r & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : r & Node.DOCUMENT_POSITION_CONTAINS || r & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : r & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
  });
}
function lt(t, e) {
  J(t) && e(t.shadowRoot), j(t, (n) => lt(n, e));
}
function De() {
  const t = /* @__PURE__ */ new WeakMap();
  return {
    set(e, n) {
      e === document && !document.scrollingElement || t.set(e === document ? document.scrollingElement : e, n);
    },
    get(e) {
      return t.get(e);
    },
    has(e) {
      return t.has(e);
    }
  };
}
const Le = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    addShadowRoot: (o) => {
      if (r.has(o))
        return;
      const u = ct(e, t, s, o), i = ut(t, e, o), a = at(t, e, n, o);
      r.set(o, {
        flush: () => u.flush(),
        stop: () => {
          u.stop(), i.stop(), a.stop();
        }
      });
    },
    removeShadowRoot: (o) => {
      const u = r.get(o);
      u && (u.stop(), r.delete(o));
    },
    stop: () => {
      r.forEach(({ stop: o }) => o());
    },
    flush: () => {
      r.forEach(({ flush: o }) => o());
    }
  };
  return s;
};
function xe(t, e, n, r, s, o) {
  const u = (a = _(), d = {
    status: 0,
    elementsScrollPositions: t,
    shadowRootsController: e
  }) => {
    const { width: c, height: l } = Rt(), f = [
      {
        data: {
          height: l,
          href: window.location.href,
          width: c
        },
        type: y.Meta,
        timestamp: a
      },
      {
        data: {
          has_focus: document.hasFocus()
        },
        type: y.Focus,
        timestamp: a
      },
      {
        data: {
          node: ae(document, r, d),
          initialOffset: {
            left: Z(),
            top: Q()
          }
        },
        type: y.FullSnapshot,
        timestamp: a
      }
    ];
    return window.visualViewport && f.push({
      data: ot(window.visualViewport),
      type: y.VisualViewport,
      timestamp: a
    }), f;
  };
  o(u());
  const { unsubscribe: i } = n.subscribe(2, (a) => {
    s(), o(u(a.startClocks.timeStamp, {
      shadowRootsController: e,
      status: 1,
      elementsScrollPositions: t
    }));
  });
  return {
    stop: i
  };
}
function Oe() {
  const t = /* @__PURE__ */ new WeakMap();
  let e = 1;
  return {
    getIdForEvent(n) {
      return t.has(n) || t.set(n, e++), t.get(n);
    }
  };
}
function Ae(t) {
  const { emit: e, configuration: n, lifeCycle: r } = t;
  if (!e)
    throw new Error("emit function is required");
  const s = (f) => {
    e(f), Ct("record", { record: f });
    const p = t.viewHistory.findView();
    bt(p.id);
  }, o = De(), u = Le(n, s, o), { stop: i } = xe(o, u, r, n, a, (f) => f.forEach((p) => s(p)));
  function a() {
    u.flush(), c.flush();
  }
  const d = Oe(), c = ct(s, n, u, document), l = [
    c,
    de(n, s),
    fe(n, s, d),
    at(n, s, o, document),
    me(n, s),
    ut(n, s),
    ge(n, s),
    Ee(s),
    ye(n, s),
    Se(n, s),
    Ne(r, s, d),
    Te(r, (f) => {
      a(), s(f);
    })
  ];
  return {
    stop: () => {
      u.stop(), l.forEach((f) => f.stop()), i();
    },
    flushMutations: a,
    shadowRootsController: u
  };
}
function Ve(t, e, n) {
  const r = new FormData();
  r.append("segment", new Blob([t], {
    type: "application/octet-stream"
  }), `${e.session.id}-${e.start}`);
  const s = {
    raw_segment_size: n,
    compressed_segment_size: t.byteLength,
    ...e
  }, o = JSON.stringify(s);
  return r.append("event", new Blob([o], { type: "application/json" })), { data: r, bytesCount: t.byteLength };
}
function Pe({ context: t, creationReason: e, encoder: n }) {
  let r = 0;
  const s = t.view.id, o = {
    start: 1 / 0,
    end: -1 / 0,
    creation_reason: e,
    records_count: 0,
    has_full_snapshot: !1,
    index_in_view: _t(s),
    source: "browser",
    ...t
  };
  Dt(s);
  function u(a, d) {
    o.start = Math.min(o.start, a.timestamp), o.end = Math.max(o.end, a.timestamp), o.records_count += 1, o.has_full_snapshot || (o.has_full_snapshot = a.type === y.FullSnapshot);
    const c = n.isEmpty ? '{"records":[' : ",";
    n.write(c + JSON.stringify(a), (l) => {
      r += l, d(r);
    });
  }
  function i(a) {
    if (n.isEmpty)
      throw new Error("Empty segment flushed");
    n.write(`],${JSON.stringify(o).slice(1)}
`), n.finish((d) => {
      Lt(o.view.id, d.rawBytesCount), a(o, d);
    });
  }
  return { addRecord: u, flush: i };
}
const ke = 5 * Vt;
let dt = 6e4;
function ze(t, e, n, r, s, o) {
  return Fe(t, () => Be(e.applicationId, n, r), s, o);
}
function Fe(t, e, n, r) {
  let s = {
    status: 0,
    nextSegmentCreationReason: "init"
  };
  const { unsubscribe: o } = t.subscribe(2, () => {
    i("view_change");
  }), { unsubscribe: u } = t.subscribe(11, (a) => {
    i(a.reason);
  });
  function i(a) {
    s.status === 1 && (s.segment.flush((d, c) => {
      const l = Ve(c.output, d, c.rawBytesCount);
      xt(a) ? n.sendOnExit(l) : n.send(l);
    }), Ot(s.expirationTimeoutId)), a !== "stop" ? s = {
      status: 0,
      nextSegmentCreationReason: a
    } : s = {
      status: 2
    };
  }
  return {
    addRecord: (a) => {
      if (s.status !== 2) {
        if (s.status === 0) {
          const d = e();
          if (!d)
            return;
          s = {
            status: 1,
            segment: Pe({ encoder: r, context: d, creationReason: s.nextSegmentCreationReason }),
            expirationTimeoutId: At(() => {
              i("segment_duration_limit");
            }, ke)
          };
        }
        s.segment.addRecord(a, (d) => {
          d > dt && i("segment_bytes_limit");
        });
      }
    },
    stop: () => {
      i("stop"), o(), u();
    }
  };
}
function Be(t, e, n) {
  const r = e.findTrackedSession(), s = n.findView();
  if (!(!r || !s))
    return {
      application: {
        id: t
      },
      session: {
        id: r.id
      },
      view: {
        id: s.id
      }
    };
}
function Ue(t) {
  const e = Pt();
  return {
    addRecord: (n) => {
      const r = t.findView();
      e.send("record", n, r.id);
    }
  };
}
function Ge(t, e, n, r, s, o) {
  const u = [], i = (l) => {
    t.notify(14, { error: l }), K("Error reported to customer", { "error.message": l.message });
  }, a = o || kt(e.sessionReplayEndpointBuilder, dt, i);
  let d;
  if (zt())
    ({ addRecord: d } = Ue(r));
  else {
    const l = ze(t, e, n, r, a, s);
    d = l.addRecord, u.push(l.stop);
  }
  const { stop: c } = Ae({
    emit: d,
    configuration: e,
    lifeCycle: t,
    viewHistory: r
  });
  return u.push(c), {
    stop: () => {
      u.forEach((l) => l());
    }
  };
}
export {
  Ge as startRecording
};
