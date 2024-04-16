(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ir(e, t) {
  const n = new Set(e.split(","));
  return t ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const Q = {},
  _t = [],
  pe = () => {},
  Qi = () => !1,
  xn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Pr = (e) => e.startsWith("onUpdate:"),
  ee = Object.assign,
  Br = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Hi = Object.prototype.hasOwnProperty,
  M = (e, t) => Hi.call(e, t),
  I = Array.isArray,
  yt = (e) => $t(e) === "[object Map]",
  Ot = (e) => $t(e) === "[object Set]",
  ps = (e) => $t(e) === "[object Date]",
  B = (e) => typeof e == "function",
  X = (e) => typeof e == "string",
  $e = (e) => typeof e == "symbol",
  H = (e) => e !== null && typeof e == "object",
  uo = (e) => (H(e) || B(e)) && B(e.then) && B(e.catch),
  ao = Object.prototype.toString,
  $t = (e) => ao.call(e),
  Ki = (e) => $t(e).slice(8, -1),
  fo = (e) => $t(e) === "[object Object]",
  Ur = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Lt = Ir(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  On = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  qi = /-(\w)/g,
  ot = On((e) => e.replace(qi, (t, n) => (n ? n.toUpperCase() : ""))),
  $i = /\B([A-Z])/g,
  lt = On((e) => e.replace($i, "-$1").toLowerCase()),
  ho = On((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Yn = On((e) => (e ? `on${ho(e)}` : "")),
  Ie = (e, t) => !Object.is(e, t),
  an = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  _n = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Dt = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ms;
const po = () =>
  ms ||
  (ms =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Nr(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = X(r) ? Yi(r) : Nr(r);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else if (X(e) || H(e)) return e;
}
const zi = /;(?![^(]*\))/g,
  Wi = /:([^]+)/,
  Gi = /\/\*[^]*?\*\//g;
function Yi(e) {
  const t = {};
  return (
    e
      .replace(Gi, "")
      .split(zi)
      .forEach((n) => {
        if (n) {
          const r = n.split(Wi);
          r.length > 1 && (t[r[0].trim()] = r[1].trim());
        }
      }),
    t
  );
}
function Tn(e) {
  let t = "";
  if (X(e)) t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const r = Tn(e[n]);
      r && (t += r + " ");
    }
  else if (H(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Xi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Zi = Ir(Xi);
function mo(e) {
  return !!e || e === "";
}
function ec(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++) n = it(e[r], t[r]);
  return n;
}
function it(e, t) {
  if (e === t) return !0;
  let n = ps(e),
    r = ps(t);
  if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
  if (((n = $e(e)), (r = $e(t)), n || r)) return e === t;
  if (((n = I(e)), (r = I(t)), n || r)) return n && r ? ec(e, t) : !1;
  if (((n = H(e)), (r = H(t)), n || r)) {
    if (!n || !r) return !1;
    const s = Object.keys(e).length,
      o = Object.keys(t).length;
    if (s !== o) return !1;
    for (const i in e) {
      const c = e.hasOwnProperty(i),
        l = t.hasOwnProperty(i);
      if ((c && !l) || (!c && l) || !it(e[i], t[i])) return !1;
    }
  }
  return String(e) === String(t);
}
function Lr(e, t) {
  return e.findIndex((n) => it(n, t));
}
const At = (e) =>
    X(e)
      ? e
      : e == null
      ? ""
      : I(e) || (H(e) && (e.toString === ao || !B(e.toString)))
      ? JSON.stringify(e, go, 2)
      : String(e),
  go = (e, t) =>
    t && t.__v_isRef
      ? go(e, t.value)
      : yt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s], o) => ((n[Xn(r, o) + " =>"] = s), n),
            {}
          ),
        }
      : Ot(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Xn(n)) }
      : $e(t)
      ? Xn(t)
      : H(t) && !I(t) && !fo(t)
      ? String(t)
      : t,
  Xn = (e, t = "") => {
    var n;
    return $e(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ye;
class _o {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ye),
      !t && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ye;
      try {
        return (ye = this), t();
      } finally {
        ye = n;
      }
    }
  }
  on() {
    ye = this;
  }
  off() {
    ye = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function tc(e) {
  return new _o(e);
}
function nc(e, t = ye) {
  t && t.active && t.effects.push(e);
}
function rc() {
  return ye;
}
let rt;
class Fr {
  constructor(t, n, r, s) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      nc(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), ut();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (sc(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), at();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = He,
      n = rt;
    try {
      return (He = !0), (rt = this), this._runnings++, gs(this), this.fn();
    } finally {
      _s(this), this._runnings--, (rt = n), (He = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (gs(this),
      _s(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function sc(e) {
  return e.value;
}
function gs(e) {
  e._trackId++, (e._depsLength = 0);
}
function _s(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) yo(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function yo(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let He = !0,
  fr = 0;
const Ao = [];
function ut() {
  Ao.push(He), (He = !1);
}
function at() {
  const e = Ao.pop();
  He = e === void 0 ? !0 : e;
}
function kr() {
  fr++;
}
function Mr() {
  for (fr--; !fr && dr.length; ) dr.shift()();
}
function bo(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && yo(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const dr = [];
function Eo(e, t, n) {
  kr();
  for (const r of e.keys()) {
    let s;
    r._dirtyLevel < t &&
      (s ?? (s = e.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
      (r._dirtyLevel = t)),
      r._shouldSchedule &&
        (s ?? (s = e.get(r) === r._trackId)) &&
        (r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 2 &&
          ((r._shouldSchedule = !1), r.scheduler && dr.push(r.scheduler)));
  }
  Mr();
}
const So = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  hr = new WeakMap(),
  st = Symbol(""),
  pr = Symbol("");
function le(e, t, n) {
  if (He && rt) {
    let r = hr.get(e);
    r || hr.set(e, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = So(() => r.delete(n)))), bo(rt, s);
  }
}
function Le(e, t, n, r, s, o) {
  const i = hr.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && I(e)) {
    const l = Number(r);
    i.forEach((f, a) => {
      (a === "length" || (!$e(a) && a >= l)) && c.push(f);
    });
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case "add":
        I(e)
          ? Ur(n) && c.push(i.get("length"))
          : (c.push(i.get(st)), yt(e) && c.push(i.get(pr)));
        break;
      case "delete":
        I(e) || (c.push(i.get(st)), yt(e) && c.push(i.get(pr)));
        break;
      case "set":
        yt(e) && c.push(i.get(st));
        break;
    }
  kr();
  for (const l of c) l && Eo(l, 4);
  Mr();
}
const oc = Ir("__proto__,__v_isRef,__isVue"),
  wo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter($e)
  ),
  ys = ic();
function ic() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = J(this);
        for (let o = 0, i = this.length; o < i; o++) le(r, "get", o + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(J)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        ut(), kr();
        const r = J(this)[t].apply(this, n);
        return Mr(), at(), r;
      };
    }),
    e
  );
}
function cc(e) {
  const t = J(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class Co {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, r) {
    const s = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return r === (s ? (o ? bc : To) : o ? Oo : xo).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0;
    const i = I(t);
    if (!s) {
      if (i && M(ys, n)) return Reflect.get(ys, n, r);
      if (n === "hasOwnProperty") return cc;
    }
    const c = Reflect.get(t, n, r);
    return ($e(n) ? wo.has(n) : oc(n)) || (s || le(t, "get", n), o)
      ? c
      : ue(c)
      ? i && Ur(n)
        ? c
        : c.value
      : H(c)
      ? s
        ? Ro(c)
        : In(c)
      : c;
  }
}
class vo extends Co {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = wt(o);
      if (
        (!yn(r) && !wt(r) && ((o = J(o)), (r = J(r))), !I(t) && ue(o) && !ue(r))
      )
        return l ? !1 : ((o.value = r), !0);
    }
    const i = I(t) && Ur(n) ? Number(n) < t.length : M(t, n),
      c = Reflect.set(t, n, r, s);
    return (
      t === J(s) && (i ? Ie(r, o) && Le(t, "set", n, r) : Le(t, "add", n, r)), c
    );
  }
  deleteProperty(t, n) {
    const r = M(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Le(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!$e(n) || !wo.has(n)) && le(t, "has", n), r;
  }
  ownKeys(t) {
    return le(t, "iterate", I(t) ? "length" : st), Reflect.ownKeys(t);
  }
}
class lc extends Co {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const uc = new vo(),
  ac = new lc(),
  fc = new vo(!0),
  jr = (e) => e,
  Rn = (e) => Reflect.getPrototypeOf(e);
function tn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = J(e),
    o = J(t);
  n || (Ie(t, o) && le(s, "get", t), le(s, "get", o));
  const { has: i } = Rn(s),
    c = r ? jr : n ? Vr : Vt;
  if (i.call(s, t)) return c(e.get(t));
  if (i.call(s, o)) return c(e.get(o));
  e !== s && e.get(t);
}
function nn(e, t = !1) {
  const n = this.__v_raw,
    r = J(n),
    s = J(e);
  return (
    t || (Ie(e, s) && le(r, "has", e), le(r, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function rn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && le(J(e), "iterate", st), Reflect.get(e, "size", e)
  );
}
function As(e) {
  e = J(e);
  const t = J(this);
  return Rn(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function bs(e, t) {
  t = J(t);
  const n = J(this),
    { has: r, get: s } = Rn(n);
  let o = r.call(n, e);
  o || ((e = J(e)), (o = r.call(n, e)));
  const i = s.call(n, e);
  return (
    n.set(e, t), o ? Ie(t, i) && Le(n, "set", e, t) : Le(n, "add", e, t), this
  );
}
function Es(e) {
  const t = J(this),
    { has: n, get: r } = Rn(t);
  let s = n.call(t, e);
  s || ((e = J(e)), (s = n.call(t, e))), r && r.call(t, e);
  const o = t.delete(e);
  return s && Le(t, "delete", e, void 0), o;
}
function Ss() {
  const e = J(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Le(e, "clear", void 0, void 0), n;
}
function sn(e, t) {
  return function (r, s) {
    const o = this,
      i = o.__v_raw,
      c = J(i),
      l = t ? jr : e ? Vr : Vt;
    return (
      !e && le(c, "iterate", st), i.forEach((f, a) => r.call(s, l(f), l(a), o))
    );
  };
}
function on(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = J(s),
      i = yt(o),
      c = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      f = s[e](...r),
      a = n ? jr : t ? Vr : Vt;
    return (
      !t && le(o, "iterate", l ? pr : st),
      {
        next() {
          const { value: d, done: y } = f.next();
          return y
            ? { value: d, done: y }
            : { value: c ? [a(d[0]), a(d[1])] : a(d), done: y };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Me(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dc() {
  const e = {
      get(o) {
        return tn(this, o);
      },
      get size() {
        return rn(this);
      },
      has: nn,
      add: As,
      set: bs,
      delete: Es,
      clear: Ss,
      forEach: sn(!1, !1),
    },
    t = {
      get(o) {
        return tn(this, o, !1, !0);
      },
      get size() {
        return rn(this);
      },
      has: nn,
      add: As,
      set: bs,
      delete: Es,
      clear: Ss,
      forEach: sn(!1, !0),
    },
    n = {
      get(o) {
        return tn(this, o, !0);
      },
      get size() {
        return rn(this, !0);
      },
      has(o) {
        return nn.call(this, o, !0);
      },
      add: Me("add"),
      set: Me("set"),
      delete: Me("delete"),
      clear: Me("clear"),
      forEach: sn(!0, !1),
    },
    r = {
      get(o) {
        return tn(this, o, !0, !0);
      },
      get size() {
        return rn(this, !0);
      },
      has(o) {
        return nn.call(this, o, !0);
      },
      add: Me("add"),
      set: Me("set"),
      delete: Me("delete"),
      clear: Me("clear"),
      forEach: sn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = on(o, !1, !1)),
        (n[o] = on(o, !0, !1)),
        (t[o] = on(o, !1, !0)),
        (r[o] = on(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [hc, pc, mc, gc] = dc();
function Jr(e, t) {
  const n = t ? (e ? gc : mc) : e ? pc : hc;
  return (r, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? r
      : Reflect.get(M(n, s) && s in r ? n : r, s, o);
}
const _c = { get: Jr(!1, !1) },
  yc = { get: Jr(!1, !0) },
  Ac = { get: Jr(!0, !1) },
  xo = new WeakMap(),
  Oo = new WeakMap(),
  To = new WeakMap(),
  bc = new WeakMap();
function Ec(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Sc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ec(Ki(e));
}
function In(e) {
  return wt(e) ? e : Dr(e, !1, uc, _c, xo);
}
function wc(e) {
  return Dr(e, !1, fc, yc, Oo);
}
function Ro(e) {
  return Dr(e, !0, ac, Ac, To);
}
function Dr(e, t, n, r, s) {
  if (!H(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const i = Sc(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? r : n);
  return s.set(e, c), c;
}
function bt(e) {
  return wt(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
  return !!(e && e.__v_isReadonly);
}
function yn(e) {
  return !!(e && e.__v_isShallow);
}
function Io(e) {
  return bt(e) || wt(e);
}
function J(e) {
  const t = e && e.__v_raw;
  return t ? J(t) : e;
}
function Po(e) {
  return Object.isExtensible(e) && _n(e, "__v_skip", !0), e;
}
const Vt = (e) => (H(e) ? In(e) : e),
  Vr = (e) => (H(e) ? Ro(e) : e);
class Bo {
  constructor(t, n, r, s) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Fr(
        () => t(this._value),
        () => Ft(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const t = J(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Ie(t._value, (t._value = t.effect.run())) &&
        Ft(t, 4),
      Qr(t),
      t.effect._dirtyLevel >= 2 && Ft(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function Cc(e, t, n = !1) {
  let r, s;
  const o = B(e);
  return (
    o ? ((r = e), (s = pe)) : ((r = e.get), (s = e.set)),
    new Bo(r, s, o || !s, n)
  );
}
function Qr(e) {
  var t;
  He &&
    rt &&
    ((e = J(e)),
    bo(
      rt,
      (t = e.dep) != null
        ? t
        : (e.dep = So(() => (e.dep = void 0), e instanceof Bo ? e : void 0))
    ));
}
function Ft(e, t = 4, n) {
  e = J(e);
  const r = e.dep;
  r && Eo(r, t);
}
function ue(e) {
  return !!(e && e.__v_isRef === !0);
}
function vc(e) {
  return xc(e, !1);
}
function xc(e, t) {
  return ue(e) ? e : new Oc(e, t);
}
class Oc {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : J(t)),
      (this._value = n ? t : Vt(t));
  }
  get value() {
    return Qr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || yn(t) || wt(t);
    (t = n ? t : J(t)),
      Ie(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Vt(t)), Ft(this, 4));
  }
}
function Pn(e) {
  return ue(e) ? e.value : e;
}
const Tc = {
  get: (e, t, n) => Pn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return ue(s) && !ue(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Uo(e) {
  return bt(e) ? e : new Proxy(e, Tc);
}
class Rc {
  constructor(t) {
    (this.dep = void 0), (this.__v_isRef = !0);
    const { get: n, set: r } = t(
      () => Qr(this),
      () => Ft(this)
    );
    (this._get = n), (this._set = r);
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Ic(e) {
  return new Rc(e);
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ke(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Bn(s, t, n);
  }
}
function Ee(e, t, n, r) {
  if (B(e)) {
    const o = Ke(e, t, n, r);
    return (
      o &&
        uo(o) &&
        o.catch((i) => {
          Bn(i, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(Ee(e[o], t, n, r));
  return s;
}
function Bn(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let a = 0; a < f.length; a++) if (f[a](e, i, c) === !1) return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ke(l, null, 10, [e, i, c]);
      return;
    }
  }
  Pc(e, n, s, r);
}
function Pc(e, t, n, r = !0) {
  console.error(e);
}
let Qt = !1,
  mr = !1;
const te = [];
let Te = 0;
const Et = [];
let De = null,
  tt = 0;
const No = Promise.resolve();
let Hr = null;
function Lo(e) {
  const t = Hr || No;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bc(e) {
  let t = Te + 1,
    n = te.length;
  for (; t < n; ) {
    const r = (t + n) >>> 1,
      s = te[r],
      o = Ht(s);
    o < e || (o === e && s.pre) ? (t = r + 1) : (n = r);
  }
  return t;
}
function Kr(e) {
  (!te.length || !te.includes(e, Qt && e.allowRecurse ? Te + 1 : Te)) &&
    (e.id == null ? te.push(e) : te.splice(Bc(e.id), 0, e), Fo());
}
function Fo() {
  !Qt && !mr && ((mr = !0), (Hr = No.then(Mo)));
}
function Uc(e) {
  const t = te.indexOf(e);
  t > Te && te.splice(t, 1);
}
function Nc(e) {
  I(e)
    ? Et.push(...e)
    : (!De || !De.includes(e, e.allowRecurse ? tt + 1 : tt)) && Et.push(e),
    Fo();
}
function ws(e, t, n = Qt ? Te + 1 : 0) {
  for (; n < te.length; n++) {
    const r = te[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue;
      te.splice(n, 1), n--, r();
    }
  }
}
function ko(e) {
  if (Et.length) {
    const t = [...new Set(Et)].sort((n, r) => Ht(n) - Ht(r));
    if (((Et.length = 0), De)) {
      De.push(...t);
      return;
    }
    for (De = t, tt = 0; tt < De.length; tt++) De[tt]();
    (De = null), (tt = 0);
  }
}
const Ht = (e) => (e.id == null ? 1 / 0 : e.id),
  Lc = (e, t) => {
    const n = Ht(e) - Ht(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Mo(e) {
  (mr = !1), (Qt = !0), te.sort(Lc);
  try {
    for (Te = 0; Te < te.length; Te++) {
      const t = te[Te];
      t && t.active !== !1 && Ke(t, null, 14);
    }
  } finally {
    (Te = 0),
      (te.length = 0),
      ko(),
      (Qt = !1),
      (Hr = null),
      (te.length || Et.length) && Mo();
  }
}
function Fc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Q;
  let s = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in r) {
    const a = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: d, trim: y } = r[a] || Q;
    y && (s = n.map((x) => (X(x) ? x.trim() : x))), d && (s = n.map(Dt));
  }
  let c,
    l = r[(c = Yn(t))] || r[(c = Yn(ot(t)))];
  !l && o && (l = r[(c = Yn(lt(t)))]), l && Ee(l, e, 6, s);
  const f = r[c + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), Ee(f, e, 6, s);
  }
}
function jo(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let i = {},
    c = !1;
  if (!B(e)) {
    const l = (f) => {
      const a = jo(f, t, !0);
      a && ((c = !0), ee(i, a));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !c
    ? (H(e) && r.set(e, null), null)
    : (I(o) ? o.forEach((l) => (i[l] = null)) : ee(i, o),
      H(e) && r.set(e, i),
      i);
}
function Un(e, t) {
  return !e || !xn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      M(e, t[0].toLowerCase() + t.slice(1)) || M(e, lt(t)) || M(e, t));
}
let ce = null,
  Nn = null;
function An(e) {
  const t = ce;
  return (ce = e), (Nn = (e && e.type.__scopeId) || null), t;
}
function qr(e) {
  Nn = e;
}
function $r() {
  Nn = null;
}
function kc(e, t = ce, n) {
  if (!t || e._n) return e;
  const r = (...s) => {
    r._d && Bs(-1);
    const o = An(t);
    let i;
    try {
      i = e(...s);
    } finally {
      An(o), r._d && Bs(1);
    }
    return i;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Zn(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: l,
    emit: f,
    render: a,
    renderCache: d,
    data: y,
    setupState: x,
    ctx: v,
    inheritAttrs: w,
  } = e;
  let U, L;
  const G = An(e);
  try {
    if (n.shapeFlag & 4) {
      const z = s || r,
        he = z;
      (U = Oe(a.call(he, z, d, o, x, y, v))), (L = l);
    } else {
      const z = t;
      (U = Oe(
        z.length > 1 ? z(o, { attrs: l, slots: c, emit: f }) : z(o, null)
      )),
        (L = t.props ? l : Mc(l));
    }
  } catch (z) {
    (Jt.length = 0), Bn(z, e, 1), (U = de(ct));
  }
  let F = U;
  if (L && w !== !1) {
    const z = Object.keys(L),
      { shapeFlag: he } = F;
    z.length && he & 7 && (i && z.some(Pr) && (L = jc(L, i)), (F = Ct(F, L)));
  }
  return (
    n.dirs && ((F = Ct(F)), (F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (F.transition = n.transition),
    (U = F),
    An(G),
    U
  );
}
const Mc = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || xn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  jc = (e, t) => {
    const n = {};
    for (const r in e) (!Pr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
function Jc(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: i, children: c, patchFlag: l } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return r ? Cs(r, i, f) : !!i;
    if (l & 8) {
      const a = t.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        const y = a[d];
        if (i[y] !== r[y] && !Un(f, y)) return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable)
      ? !0
      : r === i
      ? !1
      : r
      ? i
        ? Cs(r, i, f)
        : !0
      : !!i;
  return !1;
}
function Cs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !Un(n, o)) return !0;
  }
  return !1;
}
function Dc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Vc = Symbol.for("v-ndc"),
  Qc = (e) => e.__isSuspense;
function Hc(e, t) {
  t && t.pendingBranch
    ? I(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Nc(e);
}
const Kc = Symbol.for("v-scx"),
  qc = () => jt(Kc);
function $c(e, t) {
  return zr(e, null, { flush: "sync" });
}
const cn = {};
function St(e, t, n) {
  return zr(e, t, n);
}
function zr(
  e,
  t,
  { immediate: n, deep: r, flush: s, once: o, onTrack: i, onTrigger: c } = Q
) {
  if (t && o) {
    const j = t;
    t = (...Be) => {
      j(...Be), he();
    };
  }
  const l = ne,
    f = (j) => (r === !0 ? j : nt(j, r === !1 ? 1 : void 0));
  let a,
    d = !1,
    y = !1;
  if (
    (ue(e)
      ? ((a = () => e.value), (d = yn(e)))
      : bt(e)
      ? ((a = () => f(e)), (d = !0))
      : I(e)
      ? ((y = !0),
        (d = e.some((j) => bt(j) || yn(j))),
        (a = () =>
          e.map((j) => {
            if (ue(j)) return j.value;
            if (bt(j)) return f(j);
            if (B(j)) return Ke(j, l, 2);
          })))
      : B(e)
      ? t
        ? (a = () => Ke(e, l, 2))
        : (a = () => (x && x(), Ee(e, l, 3, [v])))
      : (a = pe),
    t && r)
  ) {
    const j = a;
    a = () => nt(j());
  }
  let x,
    v = (j) => {
      x = F.onStop = () => {
        Ke(j, l, 4), (x = F.onStop = void 0);
      };
    },
    w;
  if (Mn)
    if (
      ((v = pe),
      t ? n && Ee(t, l, 3, [a(), y ? [] : void 0, v]) : a(),
      s === "sync")
    ) {
      const j = qc();
      w = j.__watcherHandles || (j.__watcherHandles = []);
    } else return pe;
  let U = y ? new Array(e.length).fill(cn) : cn;
  const L = () => {
    if (!(!F.active || !F.dirty))
      if (t) {
        const j = F.run();
        (r || d || (y ? j.some((Be, we) => Ie(Be, U[we])) : Ie(j, U))) &&
          (x && x(),
          Ee(t, l, 3, [j, U === cn ? void 0 : y && U[0] === cn ? [] : U, v]),
          (U = j));
      } else F.run();
  };
  L.allowRecurse = !!t;
  let G;
  s === "sync"
    ? (G = L)
    : s === "post"
    ? (G = () => ie(L, l && l.suspense))
    : ((L.pre = !0), l && (L.id = l.uid), (G = () => Kr(L)));
  const F = new Fr(a, pe, G),
    z = rc(),
    he = () => {
      F.stop(), z && Br(z.effects, F);
    };
  return (
    t
      ? n
        ? L()
        : (U = F.run())
      : s === "post"
      ? ie(F.run.bind(F), l && l.suspense)
      : F.run(),
    w && w.push(he),
    he
  );
}
function zc(e, t, n) {
  const r = this.proxy,
    s = X(e) ? (e.includes(".") ? Jo(r, e) : () => r[e]) : e.bind(r, r);
  let o;
  B(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = zt(this),
    c = zr(s, o.bind(r), n);
  return i(), c;
}
function Jo(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function nt(e, t, n = 0, r) {
  if (!H(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((r = r || new Set()), r.has(e))) return e;
  if ((r.add(e), ue(e))) nt(e.value, t, n, r);
  else if (I(e)) for (let s = 0; s < e.length; s++) nt(e[s], t, n, r);
  else if (Ot(e) || yt(e))
    e.forEach((s) => {
      nt(s, t, n, r);
    });
  else if (fo(e)) for (const s in e) nt(e[s], t, n, r);
  return e;
}
function Wc(e, t) {
  if (ce === null) return e;
  const n = jn(ce) || ce.proxy,
    r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, c, l = Q] = t[s];
    o &&
      (B(o) && (o = { mounted: o, updated: o }),
      o.deep && nt(i),
      r.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: c,
        modifiers: l,
      }));
  }
  return e;
}
function Xe(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    o && (c.oldValue = o[i].value);
    let l = c.dir[r];
    l && (ut(), Ee(l, n, 8, [e.el, c, e, t]), at());
  }
}
const fn = (e) => !!e.type.__asyncLoader,
  Do = (e) => e.type.__isKeepAlive;
function Gc(e, t) {
  Vo(e, "a", t);
}
function Yc(e, t) {
  Vo(e, "da", t);
}
function Vo(e, t, n = ne) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((Ln(t, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Do(s.parent.vnode) && Xc(r, t, n, s), (s = s.parent);
  }
}
function Xc(e, t, n, r) {
  const s = Ln(t, e, r, !0);
  Qo(() => {
    Br(r[t], s);
  }, n);
}
function Ln(e, t, n = ne, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          ut();
          const c = zt(n),
            l = Ee(t, n, e, i);
          return c(), at(), l;
        });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const ke =
    (e) =>
    (t, n = ne) =>
      (!Mn || e === "sp") && Ln(e, (...r) => t(...r), n),
  Zc = ke("bm"),
  el = ke("m"),
  tl = ke("bu"),
  nl = ke("u"),
  rl = ke("bum"),
  Qo = ke("um"),
  sl = ke("sp"),
  ol = ke("rtg"),
  il = ke("rtc");
function cl(e, t = ne) {
  Ln("ec", e, t);
}
function Ho(e, t, n, r) {
  let s;
  const o = n && n[r];
  if (I(e) || X(e)) {
    s = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      s[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (H(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (i, c) => t(i, c, void 0, o && o[c]));
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let c = 0, l = i.length; c < l; c++) {
        const f = i[c];
        s[c] = t(e[f], f, c, o && o[c]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
const gr = (e) => (e ? (ni(e) ? jn(e) || e.proxy : gr(e.parent)) : null),
  kt = ee(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gr(e.parent),
    $root: (e) => gr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Wr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), Kr(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Lo.bind(e.proxy)),
    $watch: (e) => zc.bind(e),
  }),
  er = (e, t) => e !== Q && !e.__isScriptSetup && M(e, t),
  ll = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: i,
        type: c,
        appContext: l,
      } = e;
      let f;
      if (t[0] !== "$") {
        const x = i[t];
        if (x !== void 0)
          switch (x) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (er(r, t)) return (i[t] = 1), r[t];
          if (s !== Q && M(s, t)) return (i[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && M(f, t)) return (i[t] = 3), o[t];
          if (n !== Q && M(n, t)) return (i[t] = 4), n[t];
          _r && (i[t] = 0);
        }
      }
      const a = kt[t];
      let d, y;
      if (a) return t === "$attrs" && le(e, "get", t), a(e);
      if ((d = c.__cssModules) && (d = d[t])) return d;
      if (n !== Q && M(n, t)) return (i[t] = 4), n[t];
      if (((y = l.config.globalProperties), M(y, t))) return y[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return er(s, t)
        ? ((s[t] = n), !0)
        : r !== Q && M(r, t)
        ? ((r[t] = n), !0)
        : M(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      i
    ) {
      let c;
      return (
        !!n[i] ||
        (e !== Q && M(e, i)) ||
        er(t, i) ||
        ((c = o[0]) && M(c, i)) ||
        M(r, i) ||
        M(kt, i) ||
        M(s.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : M(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function bn(e) {
  return I(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
function ul(e, t) {
  return !e || !t ? e || t : I(e) && I(t) ? e.concat(t) : ee({}, bn(e), bn(t));
}
let _r = !0;
function al(e) {
  const t = Wr(e),
    n = e.proxy,
    r = e.ctx;
  (_r = !1), t.beforeCreate && vs(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: i,
    watch: c,
    provide: l,
    inject: f,
    created: a,
    beforeMount: d,
    mounted: y,
    beforeUpdate: x,
    updated: v,
    activated: w,
    deactivated: U,
    beforeDestroy: L,
    beforeUnmount: G,
    destroyed: F,
    unmounted: z,
    render: he,
    renderTracked: j,
    renderTriggered: Be,
    errorCaptured: we,
    serverPrefetch: qn,
    expose: We,
    inheritAttrs: It,
    components: Yt,
    directives: Xt,
    filters: $n,
  } = t;
  if ((f && fl(f, r, null), i))
    for (const $ in i) {
      const V = i[$];
      B(V) && (r[$] = V.bind(n));
    }
  if (s) {
    const $ = s.call(n, n);
    H($) && (e.data = In($));
  }
  if (((_r = !0), o))
    for (const $ in o) {
      const V = o[$],
        Ge = B(V) ? V.bind(n, n) : B(V.get) ? V.get.bind(n, n) : pe,
        Zt = !B(V) && B(V.set) ? V.set.bind(n) : pe,
        Ye = qe({ get: Ge, set: Zt });
      Object.defineProperty(r, $, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: (Ce) => (Ye.value = Ce),
      });
    }
  if (c) for (const $ in c) Ko(c[$], r, n, $);
  if (l) {
    const $ = B(l) ? l.call(n) : l;
    Reflect.ownKeys($).forEach((V) => {
      _l(V, $[V]);
    });
  }
  a && vs(a, e, "c");
  function re($, V) {
    I(V) ? V.forEach((Ge) => $(Ge.bind(n))) : V && $(V.bind(n));
  }
  if (
    (re(Zc, d),
    re(el, y),
    re(tl, x),
    re(nl, v),
    re(Gc, w),
    re(Yc, U),
    re(cl, we),
    re(il, j),
    re(ol, Be),
    re(rl, G),
    re(Qo, z),
    re(sl, qn),
    I(We))
  )
    if (We.length) {
      const $ = e.exposed || (e.exposed = {});
      We.forEach((V) => {
        Object.defineProperty($, V, {
          get: () => n[V],
          set: (Ge) => (n[V] = Ge),
        });
      });
    } else e.exposed || (e.exposed = {});
  he && e.render === pe && (e.render = he),
    It != null && (e.inheritAttrs = It),
    Yt && (e.components = Yt),
    Xt && (e.directives = Xt);
}
function fl(e, t, n = pe) {
  I(e) && (e = yr(e));
  for (const r in e) {
    const s = e[r];
    let o;
    H(s)
      ? "default" in s
        ? (o = jt(s.from || r, s.default, !0))
        : (o = jt(s.from || r))
      : (o = jt(s)),
      ue(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[r] = o);
  }
}
function vs(e, t, n) {
  Ee(I(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ko(e, t, n, r) {
  const s = r.includes(".") ? Jo(n, r) : () => n[r];
  if (X(e)) {
    const o = t[e];
    B(o) && St(s, o);
  } else if (B(e)) St(s, e.bind(n));
  else if (H(e))
    if (I(e)) e.forEach((o) => Ko(o, t, n, r));
    else {
      const o = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(o) && St(s, o, e);
    }
}
function Wr(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = o.get(t);
  let l;
  return (
    c
      ? (l = c)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((f) => En(l, f, i, !0)), En(l, t, i)),
    H(t) && o.set(t, l),
    l
  );
}
function En(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && En(e, o, n, !0), s && s.forEach((i) => En(e, i, n, !0));
  for (const i in t)
    if (!(r && i === "expose")) {
      const c = dl[i] || (n && n[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const dl = {
  data: xs,
  props: Os,
  emits: Os,
  methods: Nt,
  computed: Nt,
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  components: Nt,
  directives: Nt,
  watch: pl,
  provide: xs,
  inject: hl,
};
function xs(e, t) {
  return t
    ? e
      ? function () {
          return ee(
            B(e) ? e.call(this, this) : e,
            B(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function hl(e, t) {
  return Nt(yr(e), yr(t));
}
function yr(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Nt(e, t) {
  return e ? ee(Object.create(null), e, t) : t;
}
function Os(e, t) {
  return e
    ? I(e) && I(t)
      ? [...new Set([...e, ...t])]
      : ee(Object.create(null), bn(e), bn(t ?? {}))
    : t;
}
function pl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ee(Object.create(null), e);
  for (const r in t) n[r] = se(e[r], t[r]);
  return n;
}
function qo() {
  return {
    app: null,
    config: {
      isNativeTag: Qi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ml = 0;
function gl(e, t) {
  return function (r, s = null) {
    B(r) || (r = ee({}, r)), s != null && !H(s) && (s = null);
    const o = qo(),
      i = new WeakSet();
    let c = !1;
    const l = (o.app = {
      _uid: ml++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Hl,
      get config() {
        return o.config;
      },
      set config(f) {},
      use(f, ...a) {
        return (
          i.has(f) ||
            (f && B(f.install)
              ? (i.add(f), f.install(l, ...a))
              : B(f) && (i.add(f), f(l, ...a))),
          l
        );
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), l;
      },
      component(f, a) {
        return a ? ((o.components[f] = a), l) : o.components[f];
      },
      directive(f, a) {
        return a ? ((o.directives[f] = a), l) : o.directives[f];
      },
      mount(f, a, d) {
        if (!c) {
          const y = de(r, s);
          return (
            (y.appContext = o),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            a && t ? t(y, f) : e(y, f, d),
            (c = !0),
            (l._container = f),
            (f.__vue_app__ = l),
            jn(y.component) || y.component.proxy
          );
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(f, a) {
        return (o.provides[f] = a), l;
      },
      runWithContext(f) {
        const a = Mt;
        Mt = l;
        try {
          return f();
        } finally {
          Mt = a;
        }
      },
    });
    return l;
  };
}
let Mt = null;
function _l(e, t) {
  if (ne) {
    let n = ne.provides;
    const r = ne.parent && ne.parent.provides;
    r === n && (n = ne.provides = Object.create(r)), (n[e] = t);
  }
}
function jt(e, t, n = !1) {
  const r = ne || ce;
  if (r || Mt) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Mt._context.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && B(t) ? t.call(r && r.proxy) : t;
  }
}
function yl(e, t, n, r = !1) {
  const s = {},
    o = {};
  _n(o, kn, 1), (e.propsDefaults = Object.create(null)), $o(e, t, s, o);
  for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
  n ? (e.props = r ? s : wc(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function Al(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    c = J(s),
    [l] = e.propsOptions;
  let f = !1;
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let d = 0; d < a.length; d++) {
        let y = a[d];
        if (Un(e.emitsOptions, y)) continue;
        const x = t[y];
        if (l)
          if (M(o, y)) x !== o[y] && ((o[y] = x), (f = !0));
          else {
            const v = ot(y);
            s[v] = Ar(l, c, v, x, e, !1);
          }
        else x !== o[y] && ((o[y] = x), (f = !0));
      }
    }
  } else {
    $o(e, t, s, o) && (f = !0);
    let a;
    for (const d in c)
      (!t || (!M(t, d) && ((a = lt(d)) === d || !M(t, a)))) &&
        (l
          ? n &&
            (n[d] !== void 0 || n[a] !== void 0) &&
            (s[d] = Ar(l, c, d, void 0, e, !0))
          : delete s[d]);
    if (o !== c) for (const d in o) (!t || !M(t, d)) && (delete o[d], (f = !0));
  }
  f && Le(e, "set", "$attrs");
}
function $o(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let l in t) {
      if (Lt(l)) continue;
      const f = t[l];
      let a;
      s && M(s, (a = ot(l)))
        ? !o || !o.includes(a)
          ? (n[a] = f)
          : ((c || (c = {}))[a] = f)
        : Un(e.emitsOptions, l) ||
          ((!(l in r) || f !== r[l]) && ((r[l] = f), (i = !0)));
    }
  if (o) {
    const l = J(n),
      f = c || Q;
    for (let a = 0; a < o.length; a++) {
      const d = o[a];
      n[d] = Ar(s, l, d, f[d], e, !M(f, d));
    }
  }
  return i;
}
function Ar(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const c = M(i, "default");
    if (c && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && B(l)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const a = zt(s);
          (r = f[n] = l.call(null, t)), a();
        }
      } else r = l;
    }
    i[0] &&
      (o && !c ? (r = !1) : i[1] && (r === "" || r === lt(n)) && (r = !0));
  }
  return r;
}
function zo(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e);
  if (s) return s;
  const o = e.props,
    i = {},
    c = [];
  let l = !1;
  if (!B(e)) {
    const a = (d) => {
      l = !0;
      const [y, x] = zo(d, t, !0);
      ee(i, y), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  if (!o && !l) return H(e) && r.set(e, _t), _t;
  if (I(o))
    for (let a = 0; a < o.length; a++) {
      const d = ot(o[a]);
      Ts(d) && (i[d] = Q);
    }
  else if (o)
    for (const a in o) {
      const d = ot(a);
      if (Ts(d)) {
        const y = o[a],
          x = (i[d] = I(y) || B(y) ? { type: y } : ee({}, y));
        if (x) {
          const v = Ps(Boolean, x.type),
            w = Ps(String, x.type);
          (x[0] = v > -1),
            (x[1] = w < 0 || v < w),
            (v > -1 || M(x, "default")) && c.push(d);
        }
      }
    }
  const f = [i, c];
  return H(e) && r.set(e, f), f;
}
function Ts(e) {
  return e[0] !== "$" && !Lt(e);
}
function Rs(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Is(e, t) {
  return Rs(e) === Rs(t);
}
function Ps(e, t) {
  return I(t) ? t.findIndex((n) => Is(n, e)) : B(t) && Is(t, e) ? 0 : -1;
}
const Wo = (e) => e[0] === "_" || e === "$stable",
  Gr = (e) => (I(e) ? e.map(Oe) : [Oe(e)]),
  bl = (e, t, n) => {
    if (t._n) return t;
    const r = kc((...s) => Gr(t(...s)), n);
    return (r._c = !1), r;
  },
  Go = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Wo(s)) continue;
      const o = e[s];
      if (B(o)) t[s] = bl(s, o, r);
      else if (o != null) {
        const i = Gr(o);
        t[s] = () => i;
      }
    }
  },
  Yo = (e, t) => {
    const n = Gr(t);
    e.slots.default = () => n;
  },
  El = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = J(t)), _n(t, "_", n)) : Go(t, (e.slots = {}));
    } else (e.slots = {}), t && Yo(e, t);
    _n(e.slots, kn, 1);
  },
  Sl = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = !0,
      i = Q;
    if (r.shapeFlag & 32) {
      const c = t._;
      c
        ? n && c === 1
          ? (o = !1)
          : (ee(s, t), !n && c === 1 && delete s._)
        : ((o = !t.$stable), Go(t, s)),
        (i = t);
    } else t && (Yo(e, t), (i = { default: 1 }));
    if (o) for (const c in s) !Wo(c) && i[c] == null && delete s[c];
  };
function br(e, t, n, r, s = !1) {
  if (I(e)) {
    e.forEach((y, x) => br(y, t && (I(t) ? t[x] : t), n, r, s));
    return;
  }
  if (fn(r) && !s) return;
  const o = r.shapeFlag & 4 ? jn(r.component) || r.component.proxy : r.el,
    i = s ? null : o,
    { i: c, r: l } = e,
    f = t && t.r,
    a = c.refs === Q ? (c.refs = {}) : c.refs,
    d = c.setupState;
  if (
    (f != null &&
      f !== l &&
      (X(f)
        ? ((a[f] = null), M(d, f) && (d[f] = null))
        : ue(f) && (f.value = null)),
    B(l))
  )
    Ke(l, c, 12, [i, a]);
  else {
    const y = X(l),
      x = ue(l);
    if (y || x) {
      const v = () => {
        if (e.f) {
          const w = y ? (M(d, l) ? d[l] : a[l]) : l.value;
          s
            ? I(w) && Br(w, o)
            : I(w)
            ? w.includes(o) || w.push(o)
            : y
            ? ((a[l] = [o]), M(d, l) && (d[l] = a[l]))
            : ((l.value = [o]), e.k && (a[e.k] = l.value));
        } else
          y
            ? ((a[l] = i), M(d, l) && (d[l] = i))
            : x && ((l.value = i), e.k && (a[e.k] = i));
      };
      i ? ((v.id = -1), ie(v, n)) : v();
    }
  }
}
const ie = Hc;
function wl(e) {
  return Cl(e);
}
function Cl(e, t) {
  const n = po();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: i,
      createText: c,
      createComment: l,
      setText: f,
      setElementText: a,
      parentNode: d,
      nextSibling: y,
      setScopeId: x = pe,
      insertStaticContent: v,
    } = e,
    w = (
      u,
      h,
      p,
      g = null,
      _ = null,
      E = null,
      C = void 0,
      b = null,
      S = !!h.dynamicChildren
    ) => {
      if (u === h) return;
      u && !Bt(u, h) && ((g = en(u)), Ce(u, _, E, !0), (u = null)),
        h.patchFlag === -2 && ((S = !1), (h.dynamicChildren = null));
      const { type: A, ref: O, shapeFlag: R } = h;
      switch (A) {
        case Fn:
          U(u, h, p, g);
          break;
        case ct:
          L(u, h, p, g);
          break;
        case nr:
          u == null && G(h, p, g, C);
          break;
        case Ae:
          Yt(u, h, p, g, _, E, C, b, S);
          break;
        default:
          R & 1
            ? he(u, h, p, g, _, E, C, b, S)
            : R & 6
            ? Xt(u, h, p, g, _, E, C, b, S)
            : (R & 64 || R & 128) && A.process(u, h, p, g, _, E, C, b, S, ht);
      }
      O != null && _ && br(O, u && u.ref, E, h || u, !h);
    },
    U = (u, h, p, g) => {
      if (u == null) r((h.el = c(h.children)), p, g);
      else {
        const _ = (h.el = u.el);
        h.children !== u.children && f(_, h.children);
      }
    },
    L = (u, h, p, g) => {
      u == null ? r((h.el = l(h.children || "")), p, g) : (h.el = u.el);
    },
    G = (u, h, p, g) => {
      [u.el, u.anchor] = v(u.children, h, p, g, u.el, u.anchor);
    },
    F = ({ el: u, anchor: h }, p, g) => {
      let _;
      for (; u && u !== h; ) (_ = y(u)), r(u, p, g), (u = _);
      r(h, p, g);
    },
    z = ({ el: u, anchor: h }) => {
      let p;
      for (; u && u !== h; ) (p = y(u)), s(u), (u = p);
      s(h);
    },
    he = (u, h, p, g, _, E, C, b, S) => {
      h.type === "svg" ? (C = "svg") : h.type === "math" && (C = "mathml"),
        u == null ? j(h, p, g, _, E, C, b, S) : qn(u, h, _, E, C, b, S);
    },
    j = (u, h, p, g, _, E, C, b) => {
      let S, A;
      const { props: O, shapeFlag: R, transition: T, dirs: P } = u;
      if (
        ((S = u.el = i(u.type, E, O && O.is, O)),
        R & 8
          ? a(S, u.children)
          : R & 16 && we(u.children, S, null, g, _, tr(u, E), C, b),
        P && Xe(u, null, g, "created"),
        Be(S, u, u.scopeId, C, g),
        O)
      ) {
        for (const D in O)
          D !== "value" &&
            !Lt(D) &&
            o(S, D, null, O[D], E, u.children, g, _, Ue);
        "value" in O && o(S, "value", null, O.value, E),
          (A = O.onVnodeBeforeMount) && xe(A, g, u);
      }
      P && Xe(u, null, g, "beforeMount");
      const N = vl(_, T);
      N && T.beforeEnter(S),
        r(S, h, p),
        ((A = O && O.onVnodeMounted) || N || P) &&
          ie(() => {
            A && xe(A, g, u), N && T.enter(S), P && Xe(u, null, g, "mounted");
          }, _);
    },
    Be = (u, h, p, g, _) => {
      if ((p && x(u, p), g)) for (let E = 0; E < g.length; E++) x(u, g[E]);
      if (_) {
        let E = _.subTree;
        if (h === E) {
          const C = _.vnode;
          Be(u, C, C.scopeId, C.slotScopeIds, _.parent);
        }
      }
    },
    we = (u, h, p, g, _, E, C, b, S = 0) => {
      for (let A = S; A < u.length; A++) {
        const O = (u[A] = b ? Ve(u[A]) : Oe(u[A]));
        w(null, O, h, p, g, _, E, C, b);
      }
    },
    qn = (u, h, p, g, _, E, C) => {
      const b = (h.el = u.el);
      let { patchFlag: S, dynamicChildren: A, dirs: O } = h;
      S |= u.patchFlag & 16;
      const R = u.props || Q,
        T = h.props || Q;
      let P;
      if (
        (p && Ze(p, !1),
        (P = T.onVnodeBeforeUpdate) && xe(P, p, h, u),
        O && Xe(h, u, p, "beforeUpdate"),
        p && Ze(p, !0),
        A
          ? We(u.dynamicChildren, A, b, p, g, tr(h, _), E)
          : C || V(u, h, b, null, p, g, tr(h, _), E, !1),
        S > 0)
      ) {
        if (S & 16) It(b, h, R, T, p, g, _);
        else if (
          (S & 2 && R.class !== T.class && o(b, "class", null, T.class, _),
          S & 4 && o(b, "style", R.style, T.style, _),
          S & 8)
        ) {
          const N = h.dynamicProps;
          for (let D = 0; D < N.length; D++) {
            const K = N[D],
              Z = R[K],
              _e = T[K];
            (_e !== Z || K === "value") &&
              o(b, K, Z, _e, _, u.children, p, g, Ue);
          }
        }
        S & 1 && u.children !== h.children && a(b, h.children);
      } else !C && A == null && It(b, h, R, T, p, g, _);
      ((P = T.onVnodeUpdated) || O) &&
        ie(() => {
          P && xe(P, p, h, u), O && Xe(h, u, p, "updated");
        }, g);
    },
    We = (u, h, p, g, _, E, C) => {
      for (let b = 0; b < h.length; b++) {
        const S = u[b],
          A = h[b],
          O =
            S.el && (S.type === Ae || !Bt(S, A) || S.shapeFlag & 70)
              ? d(S.el)
              : p;
        w(S, A, O, null, g, _, E, C, !0);
      }
    },
    It = (u, h, p, g, _, E, C) => {
      if (p !== g) {
        if (p !== Q)
          for (const b in p)
            !Lt(b) && !(b in g) && o(u, b, p[b], null, C, h.children, _, E, Ue);
        for (const b in g) {
          if (Lt(b)) continue;
          const S = g[b],
            A = p[b];
          S !== A && b !== "value" && o(u, b, A, S, C, h.children, _, E, Ue);
        }
        "value" in g && o(u, "value", p.value, g.value, C);
      }
    },
    Yt = (u, h, p, g, _, E, C, b, S) => {
      const A = (h.el = u ? u.el : c("")),
        O = (h.anchor = u ? u.anchor : c(""));
      let { patchFlag: R, dynamicChildren: T, slotScopeIds: P } = h;
      P && (b = b ? b.concat(P) : P),
        u == null
          ? (r(A, p, g), r(O, p, g), we(h.children || [], p, O, _, E, C, b, S))
          : R > 0 && R & 64 && T && u.dynamicChildren
          ? (We(u.dynamicChildren, T, p, _, E, C, b),
            (h.key != null || (_ && h === _.subTree)) && Xo(u, h, !0))
          : V(u, h, p, O, _, E, C, b, S);
    },
    Xt = (u, h, p, g, _, E, C, b, S) => {
      (h.slotScopeIds = b),
        u == null
          ? h.shapeFlag & 512
            ? _.ctx.activate(h, p, g, C, S)
            : $n(h, p, g, _, E, C, S)
          : ls(u, h, S);
    },
    $n = (u, h, p, g, _, E, C) => {
      const b = (u.component = Fl(u, g, _));
      if ((Do(u) && (b.ctx.renderer = ht), Ml(b), b.asyncDep)) {
        if ((_ && _.registerDep(b, re), !u.el)) {
          const S = (b.subTree = de(ct));
          L(null, S, h, p);
        }
      } else re(b, u, h, p, _, E, C);
    },
    ls = (u, h, p) => {
      const g = (h.component = u.component);
      if (Jc(u, h, p))
        if (g.asyncDep && !g.asyncResolved) {
          $(g, h, p);
          return;
        } else (g.next = h), Uc(g.update), (g.effect.dirty = !0), g.update();
      else (h.el = u.el), (g.vnode = h);
    },
    re = (u, h, p, g, _, E, C) => {
      const b = () => {
          if (u.isMounted) {
            let { next: O, bu: R, u: T, parent: P, vnode: N } = u;
            {
              const pt = Zo(u);
              if (pt) {
                O && ((O.el = N.el), $(u, O, C)),
                  pt.asyncDep.then(() => {
                    u.isUnmounted || b();
                  });
                return;
              }
            }
            let D = O,
              K;
            Ze(u, !1),
              O ? ((O.el = N.el), $(u, O, C)) : (O = N),
              R && an(R),
              (K = O.props && O.props.onVnodeBeforeUpdate) && xe(K, P, O, N),
              Ze(u, !0);
            const Z = Zn(u),
              _e = u.subTree;
            (u.subTree = Z),
              w(_e, Z, d(_e.el), en(_e), u, _, E),
              (O.el = Z.el),
              D === null && Dc(u, Z.el),
              T && ie(T, _),
              (K = O.props && O.props.onVnodeUpdated) &&
                ie(() => xe(K, P, O, N), _);
          } else {
            let O;
            const { el: R, props: T } = h,
              { bm: P, m: N, parent: D } = u,
              K = fn(h);
            if (
              (Ze(u, !1),
              P && an(P),
              !K && (O = T && T.onVnodeBeforeMount) && xe(O, D, h),
              Ze(u, !0),
              R && Gn)
            ) {
              const Z = () => {
                (u.subTree = Zn(u)), Gn(R, u.subTree, u, _, null);
              };
              K
                ? h.type.__asyncLoader().then(() => !u.isUnmounted && Z())
                : Z();
            } else {
              const Z = (u.subTree = Zn(u));
              w(null, Z, p, g, u, _, E), (h.el = Z.el);
            }
            if ((N && ie(N, _), !K && (O = T && T.onVnodeMounted))) {
              const Z = h;
              ie(() => xe(O, D, Z), _);
            }
            (h.shapeFlag & 256 ||
              (D && fn(D.vnode) && D.vnode.shapeFlag & 256)) &&
              u.a &&
              ie(u.a, _),
              (u.isMounted = !0),
              (h = p = g = null);
          }
        },
        S = (u.effect = new Fr(b, pe, () => Kr(A), u.scope)),
        A = (u.update = () => {
          S.dirty && S.run();
        });
      (A.id = u.uid), Ze(u, !0), A();
    },
    $ = (u, h, p) => {
      h.component = u;
      const g = u.vnode.props;
      (u.vnode = h),
        (u.next = null),
        Al(u, h.props, g, p),
        Sl(u, h.children, p),
        ut(),
        ws(u),
        at();
    },
    V = (u, h, p, g, _, E, C, b, S = !1) => {
      const A = u && u.children,
        O = u ? u.shapeFlag : 0,
        R = h.children,
        { patchFlag: T, shapeFlag: P } = h;
      if (T > 0) {
        if (T & 128) {
          Zt(A, R, p, g, _, E, C, b, S);
          return;
        } else if (T & 256) {
          Ge(A, R, p, g, _, E, C, b, S);
          return;
        }
      }
      P & 8
        ? (O & 16 && Ue(A, _, E), R !== A && a(p, R))
        : O & 16
        ? P & 16
          ? Zt(A, R, p, g, _, E, C, b, S)
          : Ue(A, _, E, !0)
        : (O & 8 && a(p, ""), P & 16 && we(R, p, g, _, E, C, b, S));
    },
    Ge = (u, h, p, g, _, E, C, b, S) => {
      (u = u || _t), (h = h || _t);
      const A = u.length,
        O = h.length,
        R = Math.min(A, O);
      let T;
      for (T = 0; T < R; T++) {
        const P = (h[T] = S ? Ve(h[T]) : Oe(h[T]));
        w(u[T], P, p, null, _, E, C, b, S);
      }
      A > O ? Ue(u, _, E, !0, !1, R) : we(h, p, g, _, E, C, b, S, R);
    },
    Zt = (u, h, p, g, _, E, C, b, S) => {
      let A = 0;
      const O = h.length;
      let R = u.length - 1,
        T = O - 1;
      for (; A <= R && A <= T; ) {
        const P = u[A],
          N = (h[A] = S ? Ve(h[A]) : Oe(h[A]));
        if (Bt(P, N)) w(P, N, p, null, _, E, C, b, S);
        else break;
        A++;
      }
      for (; A <= R && A <= T; ) {
        const P = u[R],
          N = (h[T] = S ? Ve(h[T]) : Oe(h[T]));
        if (Bt(P, N)) w(P, N, p, null, _, E, C, b, S);
        else break;
        R--, T--;
      }
      if (A > R) {
        if (A <= T) {
          const P = T + 1,
            N = P < O ? h[P].el : g;
          for (; A <= T; )
            w(null, (h[A] = S ? Ve(h[A]) : Oe(h[A])), p, N, _, E, C, b, S), A++;
        }
      } else if (A > T) for (; A <= R; ) Ce(u[A], _, E, !0), A++;
      else {
        const P = A,
          N = A,
          D = new Map();
        for (A = N; A <= T; A++) {
          const fe = (h[A] = S ? Ve(h[A]) : Oe(h[A]));
          fe.key != null && D.set(fe.key, A);
        }
        let K,
          Z = 0;
        const _e = T - N + 1;
        let pt = !1,
          fs = 0;
        const Pt = new Array(_e);
        for (A = 0; A < _e; A++) Pt[A] = 0;
        for (A = P; A <= R; A++) {
          const fe = u[A];
          if (Z >= _e) {
            Ce(fe, _, E, !0);
            continue;
          }
          let ve;
          if (fe.key != null) ve = D.get(fe.key);
          else
            for (K = N; K <= T; K++)
              if (Pt[K - N] === 0 && Bt(fe, h[K])) {
                ve = K;
                break;
              }
          ve === void 0
            ? Ce(fe, _, E, !0)
            : ((Pt[ve - N] = A + 1),
              ve >= fs ? (fs = ve) : (pt = !0),
              w(fe, h[ve], p, null, _, E, C, b, S),
              Z++);
        }
        const ds = pt ? xl(Pt) : _t;
        for (K = ds.length - 1, A = _e - 1; A >= 0; A--) {
          const fe = N + A,
            ve = h[fe],
            hs = fe + 1 < O ? h[fe + 1].el : g;
          Pt[A] === 0
            ? w(null, ve, p, hs, _, E, C, b, S)
            : pt && (K < 0 || A !== ds[K] ? Ye(ve, p, hs, 2) : K--);
        }
      }
    },
    Ye = (u, h, p, g, _ = null) => {
      const { el: E, type: C, transition: b, children: S, shapeFlag: A } = u;
      if (A & 6) {
        Ye(u.component.subTree, h, p, g);
        return;
      }
      if (A & 128) {
        u.suspense.move(h, p, g);
        return;
      }
      if (A & 64) {
        C.move(u, h, p, ht);
        return;
      }
      if (C === Ae) {
        r(E, h, p);
        for (let R = 0; R < S.length; R++) Ye(S[R], h, p, g);
        r(u.anchor, h, p);
        return;
      }
      if (C === nr) {
        F(u, h, p);
        return;
      }
      if (g !== 2 && A & 1 && b)
        if (g === 0) b.beforeEnter(E), r(E, h, p), ie(() => b.enter(E), _);
        else {
          const { leave: R, delayLeave: T, afterLeave: P } = b,
            N = () => r(E, h, p),
            D = () => {
              R(E, () => {
                N(), P && P();
              });
            };
          T ? T(E, N, D) : D();
        }
      else r(E, h, p);
    },
    Ce = (u, h, p, g = !1, _ = !1) => {
      const {
        type: E,
        props: C,
        ref: b,
        children: S,
        dynamicChildren: A,
        shapeFlag: O,
        patchFlag: R,
        dirs: T,
      } = u;
      if ((b != null && br(b, null, p, u, !0), O & 256)) {
        h.ctx.deactivate(u);
        return;
      }
      const P = O & 1 && T,
        N = !fn(u);
      let D;
      if ((N && (D = C && C.onVnodeBeforeUnmount) && xe(D, h, u), O & 6))
        Vi(u.component, p, g);
      else {
        if (O & 128) {
          u.suspense.unmount(p, g);
          return;
        }
        P && Xe(u, null, h, "beforeUnmount"),
          O & 64
            ? u.type.remove(u, h, p, _, ht, g)
            : A && (E !== Ae || (R > 0 && R & 64))
            ? Ue(A, h, p, !1, !0)
            : ((E === Ae && R & 384) || (!_ && O & 16)) && Ue(S, h, p),
          g && us(u);
      }
      ((N && (D = C && C.onVnodeUnmounted)) || P) &&
        ie(() => {
          D && xe(D, h, u), P && Xe(u, null, h, "unmounted");
        }, p);
    },
    us = (u) => {
      const { type: h, el: p, anchor: g, transition: _ } = u;
      if (h === Ae) {
        Di(p, g);
        return;
      }
      if (h === nr) {
        z(u);
        return;
      }
      const E = () => {
        s(p), _ && !_.persisted && _.afterLeave && _.afterLeave();
      };
      if (u.shapeFlag & 1 && _ && !_.persisted) {
        const { leave: C, delayLeave: b } = _,
          S = () => C(p, E);
        b ? b(u.el, E, S) : S();
      } else E();
    },
    Di = (u, h) => {
      let p;
      for (; u !== h; ) (p = y(u)), s(u), (u = p);
      s(h);
    },
    Vi = (u, h, p) => {
      const { bum: g, scope: _, update: E, subTree: C, um: b } = u;
      g && an(g),
        _.stop(),
        E && ((E.active = !1), Ce(C, u, h, p)),
        b && ie(b, h),
        ie(() => {
          u.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    Ue = (u, h, p, g = !1, _ = !1, E = 0) => {
      for (let C = E; C < u.length; C++) Ce(u[C], h, p, g, _);
    },
    en = (u) =>
      u.shapeFlag & 6
        ? en(u.component.subTree)
        : u.shapeFlag & 128
        ? u.suspense.next()
        : y(u.anchor || u.el);
  let zn = !1;
  const as = (u, h, p) => {
      u == null
        ? h._vnode && Ce(h._vnode, null, null, !0)
        : w(h._vnode || null, u, h, null, null, null, p),
        zn || ((zn = !0), ws(), ko(), (zn = !1)),
        (h._vnode = u);
    },
    ht = {
      p: w,
      um: Ce,
      m: Ye,
      r: us,
      mt: $n,
      mc: we,
      pc: V,
      pbc: We,
      n: en,
      o: e,
    };
  let Wn, Gn;
  return (
    t && ([Wn, Gn] = t(ht)), { render: as, hydrate: Wn, createApp: gl(as, Wn) }
  );
}
function tr({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Ze({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function vl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Xo(e, t, n = !1) {
  const r = e.children,
    s = t.children;
  if (I(r) && I(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let c = s[o];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = s[o] = Ve(s[o])), (c.el = i.el)),
        n || Xo(i, c)),
        c.type === Fn && (c.el = i.el);
    }
}
function xl(e) {
  const t = e.slice(),
    n = [0];
  let r, s, o, i, c;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        (t[r] = s), n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (c = (o + i) >> 1), e[n[c]] < f ? (o = c + 1) : (i = c);
      f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function Zo(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Zo(t);
}
const Ol = (e) => e.__isTeleport,
  Ae = Symbol.for("v-fgt"),
  Fn = Symbol.for("v-txt"),
  ct = Symbol.for("v-cmt"),
  nr = Symbol.for("v-stc"),
  Jt = [];
let be = null;
function Y(e = !1) {
  Jt.push((be = e ? null : []));
}
function Tl() {
  Jt.pop(), (be = Jt[Jt.length - 1] || null);
}
let Kt = 1;
function Bs(e) {
  Kt += e;
}
function ei(e) {
  return (
    (e.dynamicChildren = Kt > 0 ? be || _t : null),
    Tl(),
    Kt > 0 && be && be.push(e),
    e
  );
}
function oe(e, t, n, r, s, o) {
  return ei(q(e, t, n, r, s, o, !0));
}
function Sn(e, t, n, r, s) {
  return ei(de(e, t, n, r, s, !0));
}
function Rl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kn = "__vInternal",
  ti = ({ key: e }) => e ?? null,
  dn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? X(e) || ue(e) || B(e)
        ? { i: ce, r: e, k: t, f: !!n }
        : e
      : null
  );
function q(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === Ae ? 0 : 1,
  i = !1,
  c = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ti(t),
    ref: t && dn(t),
    scopeId: Nn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ce,
  };
  return (
    c
      ? (Yr(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= X(n) ? 8 : 16),
    Kt > 0 &&
      !i &&
      be &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      be.push(l),
    l
  );
}
const de = Il;
function Il(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Vc) && (e = ct), Rl(e))) {
    const c = Ct(e, t, !0);
    return (
      n && Yr(c, n),
      Kt > 0 &&
        !o &&
        be &&
        (c.shapeFlag & 6 ? (be[be.indexOf(e)] = c) : be.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if ((Vl(e) && (e = e.__vccOpts), t)) {
    t = Pl(t);
    let { class: c, style: l } = t;
    c && !X(c) && (t.class = Tn(c)),
      H(l) && (Io(l) && !I(l) && (l = ee({}, l)), (t.style = Nr(l)));
  }
  const i = X(e) ? 1 : Qc(e) ? 128 : Ol(e) ? 64 : H(e) ? 4 : B(e) ? 2 : 0;
  return q(e, t, n, r, s, i, o, !0);
}
function Pl(e) {
  return e ? (Io(e) || kn in e ? ee({}, e) : e) : null;
}
function Ct(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e,
    c = t ? Ul(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ti(c),
    ref:
      t && t.ref ? (n && s ? (I(s) ? s.concat(dn(t)) : [s, dn(t)]) : dn(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ae ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ct(e.ssContent),
    ssFallback: e.ssFallback && Ct(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function Bl(e = " ", t = 0) {
  return de(Fn, null, e, t);
}
function Er(e = "", t = !1) {
  return t ? (Y(), Sn(ct, null, e)) : de(ct, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean"
    ? de(ct)
    : I(e)
    ? de(Ae, null, e.slice())
    : typeof e == "object"
    ? Ve(e)
    : de(Fn, null, String(e));
}
function Ve(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ct(e);
}
function Yr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (I(t)) n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Yr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(kn in t)
        ? (t._ctx = ce)
        : s === 3 &&
          ce &&
          (ce.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    B(t)
      ? ((t = { default: t, _ctx: ce }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [Bl(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ul(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Tn([t.class, r.class]));
      else if (s === "style") t.style = Nr([t.style, r.style]);
      else if (xn(s)) {
        const o = t[s],
          i = r[s];
        i &&
          o !== i &&
          !(I(o) && o.includes(i)) &&
          (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function xe(e, t, n, r = null) {
  Ee(e, t, 7, [n, r]);
}
const Nl = qo();
let Ll = 0;
function Fl(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Nl,
    o = {
      uid: Ll++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new _o(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: zo(r, s),
      emitsOptions: jo(r, s),
      emit: null,
      emitted: null,
      propsDefaults: Q,
      inheritAttrs: r.inheritAttrs,
      ctx: Q,
      data: Q,
      props: Q,
      attrs: Q,
      slots: Q,
      refs: Q,
      setupState: Q,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Fc.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ne = null;
const kl = () => ne || ce;
let wn, Sr;
{
  const e = po(),
    t = (n, r) => {
      let s;
      return (
        (s = e[n]) || (s = e[n] = []),
        s.push(r),
        (o) => {
          s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
        }
      );
    };
  (wn = t("__VUE_INSTANCE_SETTERS__", (n) => (ne = n))),
    (Sr = t("__VUE_SSR_SETTERS__", (n) => (Mn = n)));
}
const zt = (e) => {
    const t = ne;
    return (
      wn(e),
      e.scope.on(),
      () => {
        e.scope.off(), wn(t);
      }
    );
  },
  Us = () => {
    ne && ne.scope.off(), wn(null);
  };
function ni(e) {
  return e.vnode.shapeFlag & 4;
}
let Mn = !1;
function Ml(e, t = !1) {
  t && Sr(t);
  const { props: n, children: r } = e.vnode,
    s = ni(e);
  yl(e, n, s, t), El(e, r);
  const o = s ? jl(e, t) : void 0;
  return t && Sr(!1), o;
}
function jl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = Po(new Proxy(e.ctx, ll)));
  const { setup: r } = n;
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Dl(e) : null),
      o = zt(e);
    ut();
    const i = Ke(r, e, 0, [e.props, s]);
    if ((at(), o(), uo(i))) {
      if ((i.then(Us, Us), t))
        return i
          .then((c) => {
            Ns(e, c, t);
          })
          .catch((c) => {
            Bn(c, e, 0);
          });
      e.asyncDep = i;
    } else Ns(e, i, t);
  } else ri(e, t);
}
function Ns(e, t, n) {
  B(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : H(t) && (e.setupState = Uo(t)),
    ri(e, n);
}
let Ls;
function ri(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ls && !r.render) {
      const s = r.template || Wr(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = r,
          f = ee(ee({ isCustomElement: o, delimiters: c }, i), l);
        r.render = Ls(s, f);
      }
    }
    e.render = r.render || pe;
  }
  {
    const s = zt(e);
    ut();
    try {
      al(e);
    } finally {
      at(), s();
    }
  }
}
function Jl(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return le(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function Dl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Jl(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function jn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Uo(Po(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in kt) return kt[n](e);
        },
        has(t, n) {
          return n in t || n in kt;
        },
      }))
    );
}
function Vl(e) {
  return B(e) && "__vccOpts" in e;
}
const qe = (e, t) => Cc(e, t, Mn);
function Ql(e, t, n = Q) {
  const r = kl(),
    s = ot(t),
    o = lt(t),
    i = Ic((l, f) => {
      let a;
      return (
        $c(() => {
          const d = e[t];
          Ie(a, d) && ((a = d), f());
        }),
        {
          get() {
            return l(), n.get ? n.get(a) : a;
          },
          set(d) {
            const y = r.vnode.props;
            !(
              y &&
              (t in y || s in y || o in y) &&
              (`onUpdate:${t}` in y ||
                `onUpdate:${s}` in y ||
                `onUpdate:${o}` in y)
            ) &&
              Ie(d, a) &&
              ((a = d), f()),
              r.emit(`update:${t}`, n.set ? n.set(d) : d);
          },
        }
      );
    }),
    c = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
  return (
    (i[Symbol.iterator] = () => {
      let l = 0;
      return {
        next() {
          return l < 2
            ? { value: l++ ? e[c] || {} : i, done: !1 }
            : { done: !0 };
        },
      };
    }),
    i
  );
}
const Hl = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Kl = "http://www.w3.org/2000/svg",
  ql = "http://www.w3.org/1998/Math/MathML",
  Qe = typeof document < "u" ? document : null,
  Fs = Qe && Qe.createElement("template"),
  $l = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s =
        t === "svg"
          ? Qe.createElementNS(Kl, e)
          : t === "mathml"
          ? Qe.createElementNS(ql, e)
          : Qe.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (e) => Qe.createTextNode(e),
    createComment: (e) => Qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        Fs.innerHTML =
          r === "svg"
            ? `<svg>${e}</svg>`
            : r === "mathml"
            ? `<math>${e}</math>`
            : e;
        const c = Fs.content;
        if (r === "svg" || r === "mathml") {
          const l = c.firstChild;
          for (; l.firstChild; ) c.appendChild(l.firstChild);
          c.removeChild(l);
        }
        t.insertBefore(c, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  zl = Symbol("_vtc");
function Wl(e, t, n) {
  const r = e[zl];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const ks = Symbol("_vod"),
  Gl = Symbol("_vsh"),
  Yl = Symbol(""),
  Xl = /(^|;)\s*display\s*:/;
function Zl(e, t, n) {
  const r = e.style,
    s = X(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (X(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && hn(r, c, "");
        }
      else for (const i in t) n[i] == null && hn(r, i, "");
    for (const i in n) i === "display" && (o = !0), hn(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[Yl];
      i && (n += ";" + i), (r.cssText = n), (o = Xl.test(n));
    }
  } else t && e.removeAttribute("style");
  ks in e && ((e[ks] = o ? r.display : ""), e[Gl] && (r.display = "none"));
}
const Ms = /\s*!important$/;
function hn(e, t, n) {
  if (I(n)) n.forEach((r) => hn(e, t, r));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = eu(e, t);
    Ms.test(n)
      ? e.setProperty(lt(r), n.replace(Ms, ""), "important")
      : (e[r] = n);
  }
}
const js = ["Webkit", "Moz", "ms"],
  rr = {};
function eu(e, t) {
  const n = rr[t];
  if (n) return n;
  let r = ot(t);
  if (r !== "filter" && r in e) return (rr[t] = r);
  r = ho(r);
  for (let s = 0; s < js.length; s++) {
    const o = js[s] + r;
    if (o in e) return (rr[t] = o);
  }
  return t;
}
const Js = "http://www.w3.org/1999/xlink";
function tu(e, t, n, r, s) {
  if (r && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Js, t.slice(6, t.length))
      : e.setAttributeNS(Js, t, n);
  else {
    const o = Zi(t);
    n == null || (o && !mo(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function nu(e, t, n, r, s, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, s, o), (e[t] = n ?? "");
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
    const f = c === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = n ?? "";
    (f !== a || !("_value" in e)) && (e.value = a),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean"
      ? (n = mo(n))
      : n == null && f === "string"
      ? ((n = ""), (l = !0))
      : f === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function Ne(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ru(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ds = Symbol("_vei");
function su(e, t, n, r, s = null) {
  const o = e[Ds] || (e[Ds] = {}),
    i = o[t];
  if (r && i) i.value = r;
  else {
    const [c, l] = ou(t);
    if (r) {
      const f = (o[t] = lu(r, s));
      Ne(e, c, f, l);
    } else i && (ru(e, c, i, l), (o[t] = void 0));
  }
}
const Vs = /(?:Once|Passive|Capture)$/;
function ou(e) {
  let t;
  if (Vs.test(e)) {
    t = {};
    let r;
    for (; (r = e.match(Vs)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : lt(e.slice(2)), t];
}
let sr = 0;
const iu = Promise.resolve(),
  cu = () => sr || (iu.then(() => (sr = 0)), (sr = Date.now()));
function lu(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    Ee(uu(r, n.value), t, 5, [r]);
  };
  return (n.value = e), (n.attached = cu()), n;
}
function uu(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return t;
}
const Qs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  au = (e, t, n, r, s, o, i, c, l) => {
    const f = s === "svg";
    t === "class"
      ? Wl(e, r, f)
      : t === "style"
      ? Zl(e, n, r)
      : xn(t)
      ? Pr(t) || su(e, t, n, r, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : fu(e, t, r, f)
        )
      ? nu(e, t, r, o, i, c, l)
      : (t === "true-value"
          ? (e._trueValue = r)
          : t === "false-value" && (e._falseValue = r),
        tu(e, t, r, f));
  };
function fu(e, t, n, r) {
  if (r)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Qs(t) && B(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Qs(t) && X(n) ? !1 : t in e;
}
const ze = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => an(t, n) : t;
};
function du(e) {
  e.target.composing = !0;
}
function Hs(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const me = Symbol("_assign"),
  Ks = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[me] = ze(s);
      const o = r || (s.props && s.props.type === "number");
      Ne(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let c = e.value;
        n && (c = c.trim()), o && (c = Dt(c)), e[me](c);
      }),
        n &&
          Ne(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Ne(e, "compositionstart", du),
          Ne(e, "compositionend", Hs),
          Ne(e, "change", Hs));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: r, number: s } },
      o
    ) {
      if (((e[me] = ze(o)), e.composing)) return;
      const i = s || e.type === "number" ? Dt(e.value) : e.value,
        c = t ?? "";
      i !== c &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          (n || (r && e.value.trim() === c))) ||
          (e.value = c));
    },
  },
  hu = {
    deep: !0,
    created(e, t, n) {
      (e[me] = ze(n)),
        Ne(e, "change", () => {
          const r = e._modelValue,
            s = vt(e),
            o = e.checked,
            i = e[me];
          if (I(r)) {
            const c = Lr(r, s),
              l = c !== -1;
            if (o && !l) i(r.concat(s));
            else if (!o && l) {
              const f = [...r];
              f.splice(c, 1), i(f);
            }
          } else if (Ot(r)) {
            const c = new Set(r);
            o ? c.add(s) : c.delete(s), i(c);
          } else i(si(e, o));
        });
    },
    mounted: qs,
    beforeUpdate(e, t, n) {
      (e[me] = ze(n)), qs(e, t, n);
    },
  };
function qs(e, { value: t, oldValue: n }, r) {
  (e._modelValue = t),
    I(t)
      ? (e.checked = Lr(t, r.props.value) > -1)
      : Ot(t)
      ? (e.checked = t.has(r.props.value))
      : t !== n && (e.checked = it(t, si(e, !0)));
}
const pu = {
    created(e, { value: t }, n) {
      (e.checked = it(t, n.props.value)),
        (e[me] = ze(n)),
        Ne(e, "change", () => {
          e[me](vt(e));
        });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      (e[me] = ze(r)), t !== n && (e.checked = it(t, r.props.value));
    },
  },
  mu = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = Ot(t);
      Ne(e, "change", () => {
        const o = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? Dt(vt(i)) : vt(i)));
        e[me](e.multiple ? (s ? new Set(o) : o) : o[0]),
          (e._assigning = !0),
          Lo(() => {
            e._assigning = !1;
          });
      }),
        (e[me] = ze(r));
    },
    mounted(e, { value: t, modifiers: { number: n } }) {
      $s(e, t, n);
    },
    beforeUpdate(e, t, n) {
      e[me] = ze(n);
    },
    updated(e, { value: t, modifiers: { number: n } }) {
      e._assigning || $s(e, t, n);
    },
  };
function $s(e, t, n) {
  const r = e.multiple,
    s = I(t);
  if (!(r && !s && !Ot(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const c = e.options[o],
        l = vt(c);
      if (r)
        if (s) {
          const f = typeof l;
          f === "string" || f === "number"
            ? (c.selected = t.includes(n ? Dt(l) : l))
            : (c.selected = Lr(t, l) > -1);
        } else c.selected = t.has(l);
      else if (it(vt(c), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function vt(e) {
  return "_value" in e ? e._value : e.value;
}
function si(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const gu = {
  created(e, t, n) {
    ln(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    ln(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, r) {
    ln(e, t, n, r, "beforeUpdate");
  },
  updated(e, t, n, r) {
    ln(e, t, n, r, "updated");
  },
};
function _u(e, t) {
  switch (e) {
    case "SELECT":
      return mu;
    case "TEXTAREA":
      return Ks;
    default:
      switch (t) {
        case "checkbox":
          return hu;
        case "radio":
          return pu;
        default:
          return Ks;
      }
  }
}
function ln(e, t, n, r, s) {
  const i = _u(e.tagName, n.props && n.props.type)[s];
  i && i(e, t, n, r);
}
const yu = ee({ patchProp: au }, $l);
let zs;
function Au() {
  return zs || (zs = wl(yu));
}
const bu = (...e) => {
  const t = Au().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (r) => {
      const s = Su(r);
      if (!s) return;
      const o = t._component;
      !B(o) && !o.render && !o.template && (o.template = s.innerHTML),
        (s.innerHTML = "");
      const i = n(s, !1, Eu(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Eu(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Su(e) {
  return X(e) ? document.querySelector(e) : e;
}
function wu() {
  return oi().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function oi() {
  return typeof navigator < "u" && typeof window < "u"
    ? window
    : typeof globalThis < "u"
    ? globalThis
    : {};
}
const Cu = typeof Proxy == "function",
  vu = "devtools-plugin:setup",
  xu = "plugin:settings:set";
let mt, wr;
function Ou() {
  var e;
  return (
    mt !== void 0 ||
      (typeof window < "u" && window.performance
        ? ((mt = !0), (wr = window.performance))
        : typeof globalThis < "u" &&
          !((e = globalThis.perf_hooks) === null || e === void 0) &&
          e.performance
        ? ((mt = !0), (wr = globalThis.perf_hooks.performance))
        : (mt = !1)),
    mt
  );
}
function Tu() {
  return Ou() ? wr.now() : Date.now();
}
class Ru {
  constructor(t, n) {
    (this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n);
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const c = t.settings[i];
        r[i] = c.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, r);
    try {
      const i = localStorage.getItem(s),
        c = JSON.parse(i);
      Object.assign(o, c);
    } catch {}
    (this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch {}
        o = i;
      },
      now() {
        return Tu();
      },
    }),
      n &&
        n.on(xu, (i, c) => {
          i === this.plugin.id && this.fallbacks.setSettings(c);
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (i, c) =>
            this.target
              ? this.target.on[c]
              : (...l) => {
                  this.onQueue.push({ method: c, args: l });
                },
        }
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (i, c) =>
            this.target
              ? this.target[c]
              : c === "on"
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(c)
              ? (...l) => (
                  this.targetQueue.push({
                    method: c,
                    args: l,
                    resolve: () => {},
                  }),
                  this.fallbacks[c](...l)
                )
              : (...l) =>
                  new Promise((f) => {
                    this.targetQueue.push({ method: c, args: l, resolve: f });
                  }),
        }
      ));
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue) this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Iu(e, t) {
  const n = e,
    r = oi(),
    s = wu(),
    o = Cu && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o)) s.emit(vu, e, t);
  else {
    const i = o ? new Ru(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i,
    }),
      i && t(i.proxiedTarget);
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */ var ii = "store";
function Xr(e) {
  return e === void 0 && (e = null), jt(e !== null ? e : ii);
}
function Tt(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n);
  });
}
function Pu(e) {
  return e !== null && typeof e == "object";
}
function Bu(e) {
  return e && typeof e.then == "function";
}
function Uu(e, t) {
  return function () {
    return e(t);
  };
}
function ci(e, t, n) {
  return (
    t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var r = t.indexOf(e);
      r > -1 && t.splice(r, 1);
    }
  );
}
function li(e, t) {
  (e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null));
  var n = e.state;
  Jn(e, n, [], e._modules.root, !0), Zr(e, n, t);
}
function Zr(e, t, n) {
  var r = e._state,
    s = e._scope;
  (e.getters = {}), (e._makeLocalGettersCache = Object.create(null));
  var o = e._wrappedGetters,
    i = {},
    c = {},
    l = tc(!0);
  l.run(function () {
    Tt(o, function (f, a) {
      (i[a] = Uu(f, e)),
        (c[a] = qe(function () {
          return i[a]();
        })),
        Object.defineProperty(e.getters, a, {
          get: function () {
            return c[a].value;
          },
          enumerable: !0,
        });
    });
  }),
    (e._state = In({ data: t })),
    (e._scope = l),
    e.strict && Mu(e),
    r &&
      n &&
      e._withCommit(function () {
        r.data = null;
      }),
    s && s.stop();
}
function Jn(e, t, n, r, s) {
  var o = !n.length,
    i = e._modules.getNamespace(n);
  if (
    (r.namespaced &&
      (e._modulesNamespaceMap[i], (e._modulesNamespaceMap[i] = r)),
    !o && !s)
  ) {
    var c = es(t, n.slice(0, -1)),
      l = n[n.length - 1];
    e._withCommit(function () {
      c[l] = r.state;
    });
  }
  var f = (r.context = Nu(e, i, n));
  r.forEachMutation(function (a, d) {
    var y = i + d;
    Lu(e, y, a, f);
  }),
    r.forEachAction(function (a, d) {
      var y = a.root ? d : i + d,
        x = a.handler || a;
      Fu(e, y, x, f);
    }),
    r.forEachGetter(function (a, d) {
      var y = i + d;
      ku(e, y, a, f);
    }),
    r.forEachChild(function (a, d) {
      Jn(e, t, n.concat(d), a, s);
    });
}
function Nu(e, t, n) {
  var r = t === "",
    s = {
      dispatch: r
        ? e.dispatch
        : function (o, i, c) {
            var l = Cn(o, i, c),
              f = l.payload,
              a = l.options,
              d = l.type;
            return (!a || !a.root) && (d = t + d), e.dispatch(d, f);
          },
      commit: r
        ? e.commit
        : function (o, i, c) {
            var l = Cn(o, i, c),
              f = l.payload,
              a = l.options,
              d = l.type;
            (!a || !a.root) && (d = t + d), e.commit(d, f, a);
          },
    };
  return (
    Object.defineProperties(s, {
      getters: {
        get: r
          ? function () {
              return e.getters;
            }
          : function () {
              return ui(e, t);
            },
      },
      state: {
        get: function () {
          return es(e.state, n);
        },
      },
    }),
    s
  );
}
function ui(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {},
      r = t.length;
    Object.keys(e.getters).forEach(function (s) {
      if (s.slice(0, r) === t) {
        var o = s.slice(r);
        Object.defineProperty(n, o, {
          get: function () {
            return e.getters[s];
          },
          enumerable: !0,
        });
      }
    }),
      (e._makeLocalGettersCache[t] = n);
  }
  return e._makeLocalGettersCache[t];
}
function Lu(e, t, n, r) {
  var s = e._mutations[t] || (e._mutations[t] = []);
  s.push(function (i) {
    n.call(e, r.state, i);
  });
}
function Fu(e, t, n, r) {
  var s = e._actions[t] || (e._actions[t] = []);
  s.push(function (i) {
    var c = n.call(
      e,
      {
        dispatch: r.dispatch,
        commit: r.commit,
        getters: r.getters,
        state: r.state,
        rootGetters: e.getters,
        rootState: e.state,
      },
      i
    );
    return (
      Bu(c) || (c = Promise.resolve(c)),
      e._devtoolHook
        ? c.catch(function (l) {
            throw (e._devtoolHook.emit("vuex:error", l), l);
          })
        : c
    );
  });
}
function ku(e, t, n, r) {
  e._wrappedGetters[t] ||
    (e._wrappedGetters[t] = function (o) {
      return n(r.state, r.getters, o.state, o.getters);
    });
}
function Mu(e) {
  St(
    function () {
      return e._state.data;
    },
    function () {},
    { deep: !0, flush: "sync" }
  );
}
function es(e, t) {
  return t.reduce(function (n, r) {
    return n[r];
  }, e);
}
function Cn(e, t, n) {
  return (
    Pu(e) && e.type && ((n = t), (t = e), (e = e.type)),
    { type: e, payload: t, options: n }
  );
}
var ju = "vuex bindings",
  Ws = "vuex:mutations",
  or = "vuex:actions",
  gt = "vuex",
  Ju = 0;
function Du(e, t) {
  Iu(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [ju],
    },
    function (n) {
      n.addTimelineLayer({ id: Ws, label: "Vuex Mutations", color: Gs }),
        n.addTimelineLayer({ id: or, label: "Vuex Actions", color: Gs }),
        n.addInspector({
          id: gt,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores...",
        }),
        n.on.getInspectorTree(function (r) {
          if (r.app === e && r.inspectorId === gt)
            if (r.filter) {
              var s = [];
              hi(s, t._modules.root, r.filter, ""), (r.rootNodes = s);
            } else r.rootNodes = [di(t._modules.root, "")];
        }),
        n.on.getInspectorState(function (r) {
          if (r.app === e && r.inspectorId === gt) {
            var s = r.nodeId;
            ui(t, s),
              (r.state = Hu(
                qu(t._modules, s),
                s === "root" ? t.getters : t._makeLocalGettersCache,
                s
              ));
          }
        }),
        n.on.editInspectorState(function (r) {
          if (r.app === e && r.inspectorId === gt) {
            var s = r.nodeId,
              o = r.path;
            s !== "root" && (o = s.split("/").filter(Boolean).concat(o)),
              t._withCommit(function () {
                r.set(t._state.data, o, r.state.value);
              });
          }
        }),
        t.subscribe(function (r, s) {
          var o = {};
          r.payload && (o.payload = r.payload),
            (o.state = s),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(gt),
            n.sendInspectorState(gt),
            n.addTimelineEvent({
              layerId: Ws,
              event: { time: Date.now(), title: r.type, data: o },
            });
        }),
        t.subscribeAction({
          before: function (r, s) {
            var o = {};
            r.payload && (o.payload = r.payload),
              (r._id = Ju++),
              (r._time = Date.now()),
              (o.state = s),
              n.addTimelineEvent({
                layerId: or,
                event: {
                  time: r._time,
                  title: r.type,
                  groupId: r._id,
                  subtitle: "start",
                  data: o,
                },
              });
          },
          after: function (r, s) {
            var o = {},
              i = Date.now() - r._time;
            (o.duration = {
              _custom: {
                type: "duration",
                display: i + "ms",
                tooltip: "Action duration",
                value: i,
              },
            }),
              r.payload && (o.payload = r.payload),
              (o.state = s),
              n.addTimelineEvent({
                layerId: or,
                event: {
                  time: Date.now(),
                  title: r.type,
                  groupId: r._id,
                  subtitle: "end",
                  data: o,
                },
              });
          },
        });
    }
  );
}
var Gs = 8702998,
  Vu = 6710886,
  Qu = 16777215,
  ai = { label: "namespaced", textColor: Qu, backgroundColor: Vu };
function fi(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function di(e, t) {
  return {
    id: t || "root",
    label: fi(t),
    tags: e.namespaced ? [ai] : [],
    children: Object.keys(e._children).map(function (n) {
      return di(e._children[n], t + n + "/");
    }),
  };
}
function hi(e, t, n, r) {
  r.includes(n) &&
    e.push({
      id: r || "root",
      label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
      tags: t.namespaced ? [ai] : [],
    }),
    Object.keys(t._children).forEach(function (s) {
      hi(e, t._children[s], n, r + s + "/");
    });
}
function Hu(e, t, n) {
  t = n === "root" ? t : t[n];
  var r = Object.keys(t),
    s = {
      state: Object.keys(e.state).map(function (i) {
        return { key: i, editable: !0, value: e.state[i] };
      }),
    };
  if (r.length) {
    var o = Ku(t);
    s.getters = Object.keys(o).map(function (i) {
      return {
        key: i.endsWith("/") ? fi(i) : i,
        editable: !1,
        value: Cr(function () {
          return o[i];
        }),
      };
    });
  }
  return s;
}
function Ku(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var r = n.split("/");
      if (r.length > 1) {
        var s = t,
          o = r.pop();
        r.forEach(function (i) {
          s[i] ||
            (s[i] = {
              _custom: {
                value: {},
                display: i,
                tooltip: "Module",
                abstract: !0,
              },
            }),
            (s = s[i]._custom.value);
        }),
          (s[o] = Cr(function () {
            return e[n];
          }));
      } else
        t[n] = Cr(function () {
          return e[n];
        });
    }),
    t
  );
}
function qu(e, t) {
  var n = t.split("/").filter(function (r) {
    return r;
  });
  return n.reduce(
    function (r, s, o) {
      var i = r[s];
      if (!i)
        throw new Error('Missing module "' + s + '" for path "' + t + '".');
      return o === n.length - 1 ? i : i._children;
    },
    t === "root" ? e : e.root._children
  );
}
function Cr(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var Se = function (t, n) {
    (this.runtime = n),
      (this._children = Object.create(null)),
      (this._rawModule = t);
    var r = t.state;
    this.state = (typeof r == "function" ? r() : r) || {};
  },
  pi = { namespaced: { configurable: !0 } };
pi.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};
Se.prototype.addChild = function (t, n) {
  this._children[t] = n;
};
Se.prototype.removeChild = function (t) {
  delete this._children[t];
};
Se.prototype.getChild = function (t) {
  return this._children[t];
};
Se.prototype.hasChild = function (t) {
  return t in this._children;
};
Se.prototype.update = function (t) {
  (this._rawModule.namespaced = t.namespaced),
    t.actions && (this._rawModule.actions = t.actions),
    t.mutations && (this._rawModule.mutations = t.mutations),
    t.getters && (this._rawModule.getters = t.getters);
};
Se.prototype.forEachChild = function (t) {
  Tt(this._children, t);
};
Se.prototype.forEachGetter = function (t) {
  this._rawModule.getters && Tt(this._rawModule.getters, t);
};
Se.prototype.forEachAction = function (t) {
  this._rawModule.actions && Tt(this._rawModule.actions, t);
};
Se.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && Tt(this._rawModule.mutations, t);
};
Object.defineProperties(Se.prototype, pi);
var ft = function (t) {
  this.register([], t, !1);
};
ft.prototype.get = function (t) {
  return t.reduce(function (n, r) {
    return n.getChild(r);
  }, this.root);
};
ft.prototype.getNamespace = function (t) {
  var n = this.root;
  return t.reduce(function (r, s) {
    return (n = n.getChild(s)), r + (n.namespaced ? s + "/" : "");
  }, "");
};
ft.prototype.update = function (t) {
  mi([], this.root, t);
};
ft.prototype.register = function (t, n, r) {
  var s = this;
  r === void 0 && (r = !0);
  var o = new Se(n, r);
  if (t.length === 0) this.root = o;
  else {
    var i = this.get(t.slice(0, -1));
    i.addChild(t[t.length - 1], o);
  }
  n.modules &&
    Tt(n.modules, function (c, l) {
      s.register(t.concat(l), c, r);
    });
};
ft.prototype.unregister = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1],
    s = n.getChild(r);
  s && s.runtime && n.removeChild(r);
};
ft.prototype.isRegistered = function (t) {
  var n = this.get(t.slice(0, -1)),
    r = t[t.length - 1];
  return n ? n.hasChild(r) : !1;
};
function mi(e, t, n) {
  if ((t.update(n), n.modules))
    for (var r in n.modules) {
      if (!t.getChild(r)) return;
      mi(e.concat(r), t.getChild(r), n.modules[r]);
    }
}
function $u(e) {
  return new ae(e);
}
var ae = function (t) {
    var n = this;
    t === void 0 && (t = {});
    var r = t.plugins;
    r === void 0 && (r = []);
    var s = t.strict;
    s === void 0 && (s = !1);
    var o = t.devtools;
    (this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new ft(t)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._scope = null),
      (this._devtools = o);
    var i = this,
      c = this,
      l = c.dispatch,
      f = c.commit;
    (this.dispatch = function (y, x) {
      return l.call(i, y, x);
    }),
      (this.commit = function (y, x, v) {
        return f.call(i, y, x, v);
      }),
      (this.strict = s);
    var a = this._modules.root.state;
    Jn(this, a, [], this._modules.root),
      Zr(this, a),
      r.forEach(function (d) {
        return d(n);
      });
  },
  ts = { state: { configurable: !0 } };
ae.prototype.install = function (t, n) {
  t.provide(n || ii, this), (t.config.globalProperties.$store = this);
  var r = this._devtools !== void 0 ? this._devtools : !1;
  r && Du(t, this);
};
ts.state.get = function () {
  return this._state.data;
};
ts.state.set = function (e) {};
ae.prototype.commit = function (t, n, r) {
  var s = this,
    o = Cn(t, n, r),
    i = o.type,
    c = o.payload,
    l = { type: i, payload: c },
    f = this._mutations[i];
  f &&
    (this._withCommit(function () {
      f.forEach(function (d) {
        d(c);
      });
    }),
    this._subscribers.slice().forEach(function (a) {
      return a(l, s.state);
    }));
};
ae.prototype.dispatch = function (t, n) {
  var r = this,
    s = Cn(t, n),
    o = s.type,
    i = s.payload,
    c = { type: o, payload: i },
    l = this._actions[o];
  if (l) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (a) {
          return a.before;
        })
        .forEach(function (a) {
          return a.before(c, r.state);
        });
    } catch {}
    var f =
      l.length > 1
        ? Promise.all(
            l.map(function (a) {
              return a(i);
            })
          )
        : l[0](i);
    return new Promise(function (a, d) {
      f.then(
        function (y) {
          try {
            r._actionSubscribers
              .filter(function (x) {
                return x.after;
              })
              .forEach(function (x) {
                return x.after(c, r.state);
              });
          } catch {}
          a(y);
        },
        function (y) {
          try {
            r._actionSubscribers
              .filter(function (x) {
                return x.error;
              })
              .forEach(function (x) {
                return x.error(c, r.state, y);
              });
          } catch {}
          d(y);
        }
      );
    });
  }
};
ae.prototype.subscribe = function (t, n) {
  return ci(t, this._subscribers, n);
};
ae.prototype.subscribeAction = function (t, n) {
  var r = typeof t == "function" ? { before: t } : t;
  return ci(r, this._actionSubscribers, n);
};
ae.prototype.watch = function (t, n, r) {
  var s = this;
  return St(
    function () {
      return t(s.state, s.getters);
    },
    n,
    Object.assign({}, r)
  );
};
ae.prototype.replaceState = function (t) {
  var n = this;
  this._withCommit(function () {
    n._state.data = t;
  });
};
ae.prototype.registerModule = function (t, n, r) {
  r === void 0 && (r = {}),
    typeof t == "string" && (t = [t]),
    this._modules.register(t, n),
    Jn(this, this.state, t, this._modules.get(t), r.preserveState),
    Zr(this, this.state);
};
ae.prototype.unregisterModule = function (t) {
  var n = this;
  typeof t == "string" && (t = [t]),
    this._modules.unregister(t),
    this._withCommit(function () {
      var r = es(n.state, t.slice(0, -1));
      delete r[t[t.length - 1]];
    }),
    li(this);
};
ae.prototype.hasModule = function (t) {
  return typeof t == "string" && (t = [t]), this._modules.isRegistered(t);
};
ae.prototype.hotUpdate = function (t) {
  this._modules.update(t), li(this, !0);
};
ae.prototype._withCommit = function (t) {
  var n = this._committing;
  (this._committing = !0), t(), (this._committing = n);
};
Object.defineProperties(ae.prototype, ts);
const Je = {
  __search: "users__search",
  __fetch: "users__fetch",
  __success: "users__success",
  __error: "users__error",
};
function gi(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: zu } = Object.prototype,
  { getPrototypeOf: ns } = Object,
  Dn = ((e) => (t) => {
    const n = zu.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Pe = (e) => ((e = e.toLowerCase()), (t) => Dn(t) === e),
  Vn = (e) => (t) => typeof t === e,
  { isArray: Rt } = Array,
  qt = Vn("undefined");
function Wu(e) {
  return (
    e !== null &&
    !qt(e) &&
    e.constructor !== null &&
    !qt(e.constructor) &&
    ge(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const _i = Pe("ArrayBuffer");
function Gu(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _i(e.buffer)),
    t
  );
}
const Yu = Vn("string"),
  ge = Vn("function"),
  yi = Vn("number"),
  Qn = (e) => e !== null && typeof e == "object",
  Xu = (e) => e === !0 || e === !1,
  pn = (e) => {
    if (Dn(e) !== "object") return !1;
    const t = ns(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Zu = Pe("Date"),
  ea = Pe("File"),
  ta = Pe("Blob"),
  na = Pe("FileList"),
  ra = (e) => Qn(e) && ge(e.pipe),
  sa = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ge(e.append) &&
          ((t = Dn(e)) === "formdata" ||
            (t === "object" &&
              ge(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  oa = Pe("URLSearchParams"),
  ia = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Rt(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function Ai(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const bi =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Ei = (e) => !qt(e) && e !== bi;
function vr() {
  const { caseless: e } = (Ei(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Ai(t, s)) || s;
      pn(t[o]) && pn(r)
        ? (t[o] = vr(t[o], r))
        : pn(r)
        ? (t[o] = vr({}, r))
        : Rt(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Wt(arguments[r], n);
  return t;
}
const ca = (e, t, n, { allOwnKeys: r } = {}) => (
    Wt(
      t,
      (s, o) => {
        n && ge(s) ? (e[o] = gi(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  la = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  ua = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  aa = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && ns(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  fa = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  da = (e) => {
    if (!e) return null;
    if (Rt(e)) return e;
    let t = e.length;
    if (!yi(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ha = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ns(Uint8Array)),
  pa = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  ma = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  ga = Pe("HTMLFormElement"),
  _a = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  Ys = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  ya = Pe("RegExp"),
  Si = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Wt(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Aa = (e) => {
    Si(e, (t, n) => {
      if (ge(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ge(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ba = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return Rt(e) ? r(e) : r(String(e).split(t)), n;
  },
  Ea = () => {},
  Sa = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  ir = "abcdefghijklmnopqrstuvwxyz",
  Xs = "0123456789",
  wi = { DIGIT: Xs, ALPHA: ir, ALPHA_DIGIT: ir + ir.toUpperCase() + Xs },
  wa = (e = 16, t = wi.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Ca(e) {
  return !!(
    e &&
    ge(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const va = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Qn(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = Rt(r) ? [] : {};
            return (
              Wt(r, (i, c) => {
                const l = n(i, s + 1);
                !qt(l) && (o[c] = l);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  xa = Pe("AsyncFunction"),
  Oa = (e) => e && (Qn(e) || ge(e)) && ge(e.then) && ge(e.catch),
  m = {
    isArray: Rt,
    isArrayBuffer: _i,
    isBuffer: Wu,
    isFormData: sa,
    isArrayBufferView: Gu,
    isString: Yu,
    isNumber: yi,
    isBoolean: Xu,
    isObject: Qn,
    isPlainObject: pn,
    isUndefined: qt,
    isDate: Zu,
    isFile: ea,
    isBlob: ta,
    isRegExp: ya,
    isFunction: ge,
    isStream: ra,
    isURLSearchParams: oa,
    isTypedArray: ha,
    isFileList: na,
    forEach: Wt,
    merge: vr,
    extend: ca,
    trim: ia,
    stripBOM: la,
    inherits: ua,
    toFlatObject: aa,
    kindOf: Dn,
    kindOfTest: Pe,
    endsWith: fa,
    toArray: da,
    forEachEntry: pa,
    matchAll: ma,
    isHTMLForm: ga,
    hasOwnProperty: Ys,
    hasOwnProp: Ys,
    reduceDescriptors: Si,
    freezeMethods: Aa,
    toObjectSet: ba,
    toCamelCase: _a,
    noop: Ea,
    toFiniteNumber: Sa,
    findKey: Ai,
    global: bi,
    isContextDefined: Ei,
    ALPHABET: wi,
    generateString: wa,
    isSpecCompliantForm: Ca,
    toJSONObject: va,
    isAsyncFn: xa,
    isThenable: Oa,
  };
function k(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
m.inherits(k, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: m.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Ci = k.prototype,
  vi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  vi[e] = { value: e };
});
Object.defineProperties(k, vi);
Object.defineProperty(Ci, "isAxiosError", { value: !0 });
k.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ci);
  return (
    m.toFlatObject(
      e,
      i,
      function (l) {
        return l !== Error.prototype;
      },
      (c) => c !== "isAxiosError"
    ),
    k.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Ta = null;
function xr(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function xi(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zs(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = xi(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Ra(e) {
  return m.isArray(e) && !e.some(xr);
}
const Ia = m.toFlatObject(m, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Hn(e, t, n) {
  if (!m.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = m.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, U) {
        return !m.isUndefined(U[w]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || a,
    o = n.dots,
    i = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && m.isSpecCompliantForm(t);
  if (!m.isFunction(s)) throw new TypeError("visitor must be a function");
  function f(v) {
    if (v === null) return "";
    if (m.isDate(v)) return v.toISOString();
    if (!l && m.isBlob(v))
      throw new k("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(v) || m.isTypedArray(v)
      ? l && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function a(v, w, U) {
    let L = v;
    if (v && !U && typeof v == "object") {
      if (m.endsWith(w, "{}"))
        (w = r ? w : w.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (m.isArray(v) && Ra(v)) ||
        ((m.isFileList(v) || m.endsWith(w, "[]")) && (L = m.toArray(v)))
      )
        return (
          (w = xi(w)),
          L.forEach(function (F, z) {
            !(m.isUndefined(F) || F === null) &&
              t.append(
                i === !0 ? Zs([w], z, o) : i === null ? w : w + "[]",
                f(F)
              );
          }),
          !1
        );
    }
    return xr(v) ? !0 : (t.append(Zs(U, w, o), f(v)), !1);
  }
  const d = [],
    y = Object.assign(Ia, {
      defaultVisitor: a,
      convertValue: f,
      isVisitable: xr,
    });
  function x(v, w) {
    if (!m.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      d.push(v),
        m.forEach(v, function (L, G) {
          (!(m.isUndefined(L) || L === null) &&
            s.call(t, L, m.isString(G) ? G.trim() : G, w, y)) === !0 &&
            x(L, w ? w.concat(G) : [G]);
        }),
        d.pop();
    }
  }
  if (!m.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function eo(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function rs(e, t) {
  (this._pairs = []), e && Hn(e, this, t);
}
const Oi = rs.prototype;
Oi.append = function (t, n) {
  this._pairs.push([t, n]);
};
Oi.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, eo);
      }
    : eo;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Pa(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ti(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Pa,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = m.isURLSearchParams(t) ? t.toString() : new rs(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class to {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    m.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ri = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ba = typeof URLSearchParams < "u" ? URLSearchParams : rs,
  Ua = typeof FormData < "u" ? FormData : null,
  Na = typeof Blob < "u" ? Blob : null,
  La = {
    isBrowser: !0,
    classes: { URLSearchParams: Ba, FormData: Ua, Blob: Na },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ii = typeof window < "u" && typeof document < "u",
  Fa = ((e) => Ii && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  ka =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Ma = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ii,
        hasStandardBrowserEnv: Fa,
        hasStandardBrowserWebWorkerEnv: ka,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Re = { ...Ma, ...La };
function ja(e, t) {
  return Hn(
    e,
    new Re.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return Re.isNode && m.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Ja(e) {
  return m
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Da(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Pi(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i),
      l = o >= n.length;
    return (
      (i = !i && m.isArray(s) ? s.length : i),
      l
        ? (m.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !m.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && m.isArray(s[i]) && (s[i] = Da(s[i])),
          !c)
    );
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    const n = {};
    return (
      m.forEachEntry(e, (r, s) => {
        t(Ja(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Va(e, t, n) {
  if (m.isString(e))
    try {
      return (t || JSON.parse)(e), m.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ss = {
  transitional: Ri,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = m.isObject(t);
      if ((o && m.isHTMLForm(t) && (t = new FormData(t)), m.isFormData(t)))
        return s ? JSON.stringify(Pi(t)) : t;
      if (
        m.isArrayBuffer(t) ||
        m.isBuffer(t) ||
        m.isStream(t) ||
        m.isFile(t) ||
        m.isBlob(t)
      )
        return t;
      if (m.isArrayBufferView(t)) return t.buffer;
      if (m.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let c;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ja(t, this.formSerializer).toString();
        if ((c = m.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Hn(
            c ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Va(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ss.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && m.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === "SyntaxError"
              ? k.from(c, k.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Re.classes.FormData, Blob: Re.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
m.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ss.headers[e] = {};
});
const os = ss,
  Qa = m.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ha = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Qa[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  no = Symbol("internals");
function Ut(e) {
  return e && String(e).trim().toLowerCase();
}
function mn(e) {
  return e === !1 || e == null ? e : m.isArray(e) ? e.map(mn) : String(e);
}
function Ka(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const qa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function cr(e, t, n, r, s) {
  if (m.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!m.isString(t))) {
    if (m.isString(r)) return t.indexOf(r) !== -1;
    if (m.isRegExp(r)) return r.test(t);
  }
}
function $a(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function za(e, t) {
  const n = m.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class Kn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, l, f) {
      const a = Ut(l);
      if (!a) throw new Error("header name must be a non-empty string");
      const d = m.findKey(s, a);
      (!d || s[d] === void 0 || f === !0 || (f === void 0 && s[d] !== !1)) &&
        (s[d || l] = mn(c));
    }
    const i = (c, l) => m.forEach(c, (f, a) => o(f, a, l));
    return (
      m.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : m.isString(t) && (t = t.trim()) && !qa(t)
        ? i(Ha(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Ut(t)), t)) {
      const r = m.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Ka(s);
        if (m.isFunction(n)) return n.call(this, s, r);
        if (m.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ut(t)), t)) {
      const r = m.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || cr(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = Ut(i)), i)) {
        const c = m.findKey(r, i);
        c && (!n || cr(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return m.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || cr(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      m.forEach(this, (s, o) => {
        const i = m.findKey(r, o);
        if (i) {
          (n[i] = mn(s)), delete n[o];
          return;
        }
        const c = t ? $a(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = mn(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      m.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && m.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[no] = this[no] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = Ut(i);
      r[c] || (za(s, i), (r[c] = !0));
    }
    return m.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Kn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
m.reduceDescriptors(Kn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
m.freezeMethods(Kn);
const Fe = Kn;
function lr(e, t) {
  const n = this || os,
    r = t || n,
    s = Fe.from(r.headers);
  let o = r.data;
  return (
    m.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Bi(e) {
  return !!(e && e.__CANCEL__);
}
function Gt(e, t, n) {
  k.call(this, e ?? "canceled", k.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
m.inherits(Gt, k, { __CANCEL__: !0 });
function Wa(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new k(
          "Request failed with status code " + n.status,
          [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Ga = Re.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        m.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          m.isString(r) && i.push("path=" + r),
          m.isString(s) && i.push("domain=" + s),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Ya(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Xa(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ui(e, t) {
  return e && !Ya(t) ? Xa(e, t) : t;
}
const Za = Re.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const c = m.isString(i) ? s(i) : i;
          return c.protocol === r.protocol && c.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function ef(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function tf(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const f = Date.now(),
        a = r[o];
      i || (i = f), (n[s] = l), (r[s] = f);
      let d = o,
        y = 0;
      for (; d !== s; ) (y += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), f - i < t)) return;
      const x = a && f - a;
      return x ? Math.round((y * 1e3) / x) : void 0;
    }
  );
}
function ro(e, t) {
  let n = 0;
  const r = tf(50, 250);
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      c = o - n,
      l = r(c),
      f = o <= i;
    n = o;
    const a = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && i && f ? (i - o) / l : void 0,
      event: s,
    };
    (a[t ? "download" : "upload"] = !0), e(a);
  };
}
const nf = typeof XMLHttpRequest < "u",
  rf =
    nf &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const o = Fe.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: c } = e,
          l;
        function f() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let a;
        if (m.isFormData(s)) {
          if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((a = o.getContentType()) !== !1) {
            const [w, ...U] = a
              ? a
                  .split(";")
                  .map((L) => L.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([w || "multipart/form-data", ...U].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const w = e.auth.username || "",
            U = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(w + ":" + U));
        }
        const y = Ui(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), Ti(y, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function x() {
          if (!d) return;
          const w = Fe.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            L = {
              data:
                !i || i === "text" || i === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: w,
              config: e,
              request: d,
            };
          Wa(
            function (F) {
              n(F), f();
            },
            function (F) {
              r(F), f();
            },
            L
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = x)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(x);
              }),
          (d.onabort = function () {
            d &&
              (r(new k("Request aborted", k.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new k("Network Error", k.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let U = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const L = e.transitional || Ri;
            e.timeoutErrorMessage && (U = e.timeoutErrorMessage),
              r(
                new k(
                  U,
                  L.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          Re.hasStandardBrowserEnv &&
            (c && m.isFunction(c) && (c = c(e)), c || (c !== !1 && Za(y))))
        ) {
          const w =
            e.xsrfHeaderName && e.xsrfCookieName && Ga.read(e.xsrfCookieName);
          w && o.set(e.xsrfHeaderName, w);
        }
        s === void 0 && o.setContentType(null),
          "setRequestHeader" in d &&
            m.forEach(o.toJSON(), function (U, L) {
              d.setRequestHeader(L, U);
            }),
          m.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          i && i !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", ro(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", ro(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (w) => {
              d &&
                (r(!w || w.type ? new Gt(null, e, d) : w),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const v = ef(y);
        if (v && Re.protocols.indexOf(v) === -1) {
          r(new k("Unsupported protocol " + v + ":", k.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(s || null);
      });
    },
  Or = { http: Ta, xhr: rf };
m.forEach(Or, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const so = (e) => `- ${e}`,
  sf = (e) => m.isFunction(e) || e === null || e === !1,
  Ni = {
    getAdapter: (e) => {
      e = m.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !sf(n) && ((r = Or[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new k(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, l]) =>
            `adapter ${c} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(so).join(`
`)
            : " " + so(o[0])
          : "as no adapter specified";
        throw new k(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Or,
  };
function ur(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Gt(null, e);
}
function oo(e) {
  return (
    ur(e),
    (e.headers = Fe.from(e.headers)),
    (e.data = lr.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ni.getAdapter(e.adapter || os.adapter)(e).then(
      function (r) {
        return (
          ur(e),
          (r.data = lr.call(e, e.transformResponse, r)),
          (r.headers = Fe.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Bi(r) ||
            (ur(e),
            r &&
              r.response &&
              ((r.response.data = lr.call(e, e.transformResponse, r.response)),
              (r.response.headers = Fe.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const io = (e) => (e instanceof Fe ? { ...e } : e);
function xt(e, t) {
  t = t || {};
  const n = {};
  function r(f, a, d) {
    return m.isPlainObject(f) && m.isPlainObject(a)
      ? m.merge.call({ caseless: d }, f, a)
      : m.isPlainObject(a)
      ? m.merge({}, a)
      : m.isArray(a)
      ? a.slice()
      : a;
  }
  function s(f, a, d) {
    if (m.isUndefined(a)) {
      if (!m.isUndefined(f)) return r(void 0, f, d);
    } else return r(f, a, d);
  }
  function o(f, a) {
    if (!m.isUndefined(a)) return r(void 0, a);
  }
  function i(f, a) {
    if (m.isUndefined(a)) {
      if (!m.isUndefined(f)) return r(void 0, f);
    } else return r(void 0, a);
  }
  function c(f, a, d) {
    if (d in t) return r(f, a);
    if (d in e) return r(void 0, f);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (f, a) => s(io(f), io(a), !0),
  };
  return (
    m.forEach(Object.keys(Object.assign({}, e, t)), function (a) {
      const d = l[a] || s,
        y = d(e[a], t[a], a);
      (m.isUndefined(y) && d !== c) || (n[a] = y);
    }),
    n
  );
}
const Li = "1.6.8",
  is = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    is[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const co = {};
is.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      Li +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, c) => {
    if (t === !1)
      throw new k(
        s(i, " has been removed" + (n ? " in " + n : "")),
        k.ERR_DEPRECATED
      );
    return (
      n &&
        !co[i] &&
        ((co[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, c) : !0
    );
  };
};
function of(e, t, n) {
  if (typeof e != "object")
    throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        l = c === void 0 || i(c, o, e);
      if (l !== !0)
        throw new k("option " + o + " must be " + l, k.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new k("Unknown option " + o, k.ERR_BAD_OPTION);
  }
}
const Tr = { assertOptions: of, validators: is },
  je = Tr.validators;
class vn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new to(), response: new to() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? o &&
            !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + o)
          : (r.stack = o);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = xt(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      Tr.assertOptions(
        r,
        {
          silentJSONParsing: je.transitional(je.boolean),
          forcedJSONParsing: je.transitional(je.boolean),
          clarifyTimeoutError: je.transitional(je.boolean),
        },
        !1
      ),
      s != null &&
        (m.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Tr.assertOptions(
              s,
              { encode: je.function, serialize: je.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && m.merge(o.common, o[n.method]);
    o &&
      m.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete o[v];
        }
      ),
      (n.headers = Fe.concat(i, o));
    const c = [];
    let l = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
        ((l = l && w.synchronous), c.unshift(w.fulfilled, w.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (w) {
      f.push(w.fulfilled, w.rejected);
    });
    let a,
      d = 0,
      y;
    if (!l) {
      const v = [oo.bind(this), void 0];
      for (
        v.unshift.apply(v, c),
          v.push.apply(v, f),
          y = v.length,
          a = Promise.resolve(n);
        d < y;

      )
        a = a.then(v[d++], v[d++]);
      return a;
    }
    y = c.length;
    let x = n;
    for (d = 0; d < y; ) {
      const v = c[d++],
        w = c[d++];
      try {
        x = v(x);
      } catch (U) {
        w.call(this, U);
        break;
      }
    }
    try {
      a = oo.call(this, x);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, y = f.length; d < y; ) a = a.then(f[d++], f[d++]);
    return a;
  }
  getUri(t) {
    t = xt(this.defaults, t);
    const n = Ui(t.baseURL, t.url);
    return Ti(n, t.params, t.paramsSerializer);
  }
}
m.forEach(["delete", "get", "head", "options"], function (t) {
  vn.prototype[t] = function (n, r) {
    return this.request(
      xt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
m.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        xt(c || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (vn.prototype[t] = n()), (vn.prototype[t + "Form"] = n(!0));
});
const gn = vn;
class cs {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, c) {
        r.reason || ((r.reason = new Gt(o, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new cs(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const cf = cs;
function lf(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function uf(e) {
  return m.isObject(e) && e.isAxiosError === !0;
}
const Rr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Rr).forEach(([e, t]) => {
  Rr[t] = e;
});
const af = Rr;
function Fi(e) {
  const t = new gn(e),
    n = gi(gn.prototype.request, t);
  return (
    m.extend(n, gn.prototype, t, { allOwnKeys: !0 }),
    m.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Fi(xt(e, s));
    }),
    n
  );
}
const W = Fi(os);
W.Axios = gn;
W.CanceledError = Gt;
W.CancelToken = cf;
W.isCancel = Bi;
W.VERSION = Li;
W.toFormData = Hn;
W.AxiosError = k;
W.Cancel = W.CanceledError;
W.all = function (t) {
  return Promise.all(t);
};
W.spread = lf;
W.isAxiosError = uf;
W.mergeConfig = xt;
W.AxiosHeaders = Fe;
W.formToJSON = (e) => Pi(m.isHTMLForm(e) ? new FormData(e) : e);
W.getAdapter = Ni.getAdapter;
W.HttpStatusCode = af;
W.default = W;
const lo = W.create({ baseURL: "https://jsonplaceholder.typicode.com/" }),
  ff = {
    async searchUsers(e) {
      try {
        return (await lo.get(`users?${e}`)).data;
      } catch (t) {
        throw new Error(t);
      }
    },
    async getUser(e) {
      try {
        return (await lo.get("user")).data;
      } catch (t) {
        throw new Error(t);
      }
    },
  };
function df(e) {
  const t = e
      .split(",")
      .map((c) => c.trim())
      .filter((c) => c),
    n = t.filter((c) => !isNaN(+c)),
    r = t.filter((c) => isNaN(+c)),
    s = n.length ? "id=" + n.join("&id=") : "",
    o = "name=" + r.join("&name="),
    i = n.length && r.length ? "&" + o : !n.length && r.length ? o : "";
  return s + i;
}
const ki = { users: { __search: "users__search" } },
  hf = {
    state: { users: { data: [], search: "", fetching: !1, error: void 0 } },
    mutations: {
      [`${Je.__fetch}`](e) {
        (e.users.fetching = !0), (e.users.error = void 0);
      },
      [`${Je.__success}`](e, t) {
        (e.users.fetching = !1), (e.users.data = t), (e.users.error = void 0);
      },
      [`${Je.__error}`](e, t) {
        (e.users.fetching = !1), (e.users.error = t);
      },
      [`${Je.__search}`](e, t) {
        e.users.search = t;
      },
    },
    actions: {
      async [`${ki.users.__search}`](e) {
        try {
          e.commit(Je.__fetch);
          const t = df(e.state.users.search),
            n = await ff.searchUsers(t);
          e.commit(Je.__success, n);
        } catch (t) {
          throw (e.commit(Je.__error, t), new Error(t));
        }
      },
    },
    getters: {
      users: (e) => () => e.users.data,
      search: (e) => () => e.users.search,
      fetchUsers: (e) => () => e.users.fetching,
      hasError: (e) => () => e.users.error,
    },
  },
  et = {
    __fetch: "user__fetch",
    __success: "user__success",
    __error: "user__error",
  },
  pf = {
    state: { data: void 0, fetching: !1, error: void 0 },
    getters: { user: (e) => () => e.data },
    mutations: {
      [`${et.__fetch}`](e) {
        (e.fetching = !0), (e.error = void 0);
      },
      [`${et.__success}`](e, t) {
        (e.fetching = !1), (e.data = t), (e.error = void 0);
      },
      [`${et.__error}`](e, t) {
        (e.fetching = !1), (e.error = t);
      },
    },
    actions: {
      async fetchUser(e, t) {
        try {
          e.commit(et.__fetch);
          const n = await usersAPI.getUser(t);
          e.commit(et.__success, n);
        } catch (n) {
          e.commit(et.__error, n);
        }
      },
    },
  },
  mf = $u({ modules: { users: hf, user: pf } }),
  dt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  },
  gf = {},
  Mi = (e) => (qr("data-v-5650ef54"), (e = e()), $r(), e),
  _f = { class: "header" },
  yf = Mi(() => q("h1", { class: "header__title" }, "Жилфонд", -1)),
  Af = Mi(() => q("span", { class: "header__user" }, "Пользователь", -1)),
  bf = [yf, Af];
function Ef(e, t) {
  return Y(), oe("header", _f, bf);
}
const Sf = dt(gf, [
    ["render", Ef],
    ["__scopeId", "data-v-5650ef54"],
  ]),
  un = vc(void 0);
function wf(e, t) {
  un.value && (un.value = clearTimeout(un.value)),
    (un.value = setTimeout(e, t));
}
const ar = { users: Je, user: et },
  Cf = ["type", "placeholder"],
  vf = {
    __name: "Input",
    props: ul(
      { type: "text", placeholder: "" },
      { modelValue: {}, modelModifiers: {} }
    ),
    emits: ["update:modelValue"],
    setup(e) {
      const t = Ql(e, "modelValue");
      return (n, r) =>
        Wc(
          (Y(),
          oe(
            "input",
            {
              class: "input",
              type: e.type,
              "onUpdate:modelValue": r[0] || (r[0] = (s) => (t.value = s)),
              placeholder: e.placeholder,
            },
            null,
            8,
            Cf
          )),
          [[gu, t.value]]
        );
    },
  },
  xf = dt(vf, [["__scopeId", "data-v-87b1433b"]]),
  Of =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI1SURBVHgB7ZlLS+RAFIWPzjjv52KeMIMzMAyoIOrCtyvRvX/TrWt/gKAguBLBxoULN4Ki4Nt7SYKP7iOF5lYrnA8OVDqd7vSXqluVNCCaaDQaF50QLZEYgsQQJIYgMQSJIUgMQWIIEkOQGILEECSGIDEEiSFIDEFiCBJDkBiCxBAkhiAxBIkhSAzhOerHP/M18nJkOUaNRIgZtfyynCEPzyx7lgXUSIQYP9F1yyry0G35j5qJEONcWE7KdpflheUAMZwigCgxFT6kplAU+Q3LEvINsQcROSt1WIZQDC1v/7N8wBMherruuLXdhTQ60ealROSXe51ZtpyX25uWnYTj/JxmLXNoYw+LrjFblnkUw+kw8Zhhy5eyPWJZRFCBvYsc3dUXX6lS/qCoRRXfLX1oA4/pluAjit5yGxfzE5nJLcaLr//Id2g+jzEU6x2QfW+RkdxiBizTlhnLm2uv9+OqrrTC3zuGjOQU4z2lqh/eY/rLdjfS6sgPSy8yET0rVbiISRSzU4VL2rf0oHm9w3CZu5ZtBJOjx7iMCcvLFvsGLa+Qjl9In8JTF4r3JocY7/5fUR/e+8YRTLSYb4hZh/zGzfVO7USK8SHiVzaqjvkw/IwgIovve8saYgl7hBohxm8e/6IYRjnwQlz7M54IMSuWT8hL6r1YMhFi9ss8afS/EkFiCBJDkBiCxBAkhiAxBIkhSAxBYggSQ5AYgsQQJIYgMQSJIUgMQWIIEkOQGILEECSGIDGES8JrL3butWEgAAAAAElFTkSuQmCC",
  Tf = { class: "sidebar__user" },
  Rf = ["src"],
  If = { class: "sidebar-user__info" },
  Pf = ["title"],
  Bf = ["title"],
  Uf = {
    __name: "UserItem",
    props: { user: {} },
    setup(e) {
      return (t, n) => (
        Y(),
        oe("li", Tf, [
          q(
            "img",
            { class: "sidebar-user__photo", src: Pn(Of), alt: "user photo" },
            null,
            8,
            Rf
          ),
          q("div", If, [
            q(
              "p",
              { class: "sidebar-user__title", title: e.user.name },
              At(e.user.name),
              9,
              Pf
            ),
            q(
              "p",
              { class: "sidebar-user__email", title: e.user.email },
              At(e.user.email),
              9,
              Bf
            ),
          ]),
        ])
      );
    },
  },
  Nf = dt(Uf, [["__scopeId", "data-v-85068c2f"]]),
  ji = (e) => (qr("data-v-2b9c13be"), (e = e()), $r(), e),
  Lf = { class: "sidebar" },
  Ff = { class: "sidebar__top" },
  kf = ji(() =>
    q("h2", { class: "sidebar__subtitle" }, "Поиск сотрудников", -1)
  ),
  Mf = ji(() => q("h2", { class: "sidebar__subtitle" }, "Результаты", -1)),
  jf = { class: "sidebar__bottom" },
  Jf = { key: 0, class: "sidebar__placeholder" },
  Df = { key: 1, class: "sidebar__placeholder" },
  Vf = { key: 2, class: "sidebar__list" },
  Qf = {
    __name: "Sidebar",
    setup(e) {
      const t = Xr(),
        n = qe({ get: t.getters.users }),
        r = qe({
          get: t.getters.search,
          set: (i) => {
            wf(() => t.commit(ar.users.__search, i), 400);
          },
        }),
        s = qe({ get: t.getters.fetchUsers });
      function o(i) {
        t.commit(ar.user.__success, i);
      }
      return (
        St(
          r,
          async (i) => {
            i
              ? await t.dispatch(ki.users.__search)
              : t.commit(ar.user.__success, void 0);
          },
          { deep: !0 }
        ),
        (i, c) => (
          Y(),
          oe("aside", Lf, [
            q("div", Ff, [
              kf,
              de(
                xf,
                {
                  class: "sidebar__input",
                  modelValue: r.value,
                  "onUpdate:modelValue": c[0] || (c[0] = (l) => (r.value = l)),
                  placeholder: "Введите id или имя",
                },
                null,
                8,
                ["modelValue"]
              ),
            ]),
            Mf,
            q("div", jf, [
              r.value
                ? r.value && !n.value.length && !s.value
                  ? (Y(), oe("p", Df, " ничего не найдено "))
                  : r.value && n.value.length
                  ? (Y(),
                    oe("ul", Vf, [
                      (Y(!0),
                      oe(
                        Ae,
                        null,
                        Ho(
                          n.value,
                          (l) => (
                            Y(),
                            Sn(
                              Nf,
                              { key: l.id, user: l, onClick: () => o(l) },
                              null,
                              8,
                              ["user", "onClick"]
                            )
                          )
                        ),
                        128
                      )),
                    ]))
                  : Er("", !0)
                : (Y(), oe("p", Jf, "начните поиск")),
            ]),
          ])
        )
      );
    },
  },
  Hf = dt(Qf, [["__scopeId", "data-v-2b9c13be"]]),
  Kf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAAEeCAYAAADfIYGoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAx7SURBVHgB7d1pj1VV2sfhBVXIoBGnQBxSBodEfcELUYOaqN/bN6BBUQunwgEcoHACRAVUoByf/E9yniYdbaDOPufce5/rSsq0abSq27J+7LXWXveW06dP/90AoJjl/OHhhx9uAFDF+vp629oAoCCBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoCSBAqAkgQKgJIECoKTlBh34448/Rh+//fZbY7Ht2LGj3XbbbQ0mJVBM7K+//mpra2vt5MmTbWNjo7HYEqiDBw+2lZWVBpOwxMfEzp071z7++GNxYuTatWttdXW1/frrrw0mIVBM7OLFi+3PP/9sMHblypXRB0xCoJjY33//3eC/+b5gUvagmIqlpSUb5Qvk6tWrDbomUEzF3r1724EDBxqL4dVXXx3tPUGXBIqpyNPT3Xff3VgMW7faLaB7vqsAKEmgAChJoAAoSaAAKEmgAChJoAAoyTFzysils5cuXRpdnZRrcvLn27Zta3fccUe79957286dOxuwOASKucuVOD/++GM7ceLE6OLZXDKaOI3lnaq77rqrPfDAA+2xxx5ru3btasDwCRRzlRlSx48fH92Gnv/8TzJj6vz58+37779vX331Vdu/f3978MEHvRwKA+ffcOYmN6AfO3ZsFKh/i9P18qT1ww8/tKNHj7ZvvvmmAcMmUMxNhhxmWe/65bybkYtJM2/op59+asBwCRRzkX2mjz76qG3Wzz//3N5///0GDJdAMReJ06RDDrMflUMVwDAJFDOXvaRTp061LnT19wHqEShm7vLly21jY6N1IYcmgGESKGYuL+N25ZdffmnAMAkUMzfp3tP1bvUEINAfAsXMdXll0fbt2xswTALFzOXaoq5ugdi9e3cDhkmgmLkdO3a0PXv2tC489NBDDRgmgWIu9u3b1ya1vLzcVlZWWp/liqfcMZjTiF3uzcEQuCyWuXj00Ufbp59+uunrirJEeODAgd6O4EiYchPG559/ProMN/Jk+dRTT7Unn3yyLS0tNVh0nqCYiwTmhRdeGI3S2Iws7T3++OOtjxKnI0eOjG5wH8cprl271t5999126NAhT1PQBIo5yhDCl19+ud155503/dckbHn6eu6553o7buPtt99uZ86c+df/Pje159f8/vvvDRaZQDFX999/f3vllVdGT0Q3WtbKct4zzzzTnn322d4OLVxfX29ffPHF6Lqn/yVLf5999pn3vFho9qCYuxw7f+mll/5/IGGm6+YqpPwQz1NSwpQBhZmom2PlW7ZsaX2UWy/eeeedG8Yp8muyBHjfffd1duIR+kagKCEn8vI0lY/s0eQjTw95qso+VV+jNJa9psOHD7crV67c9F+TX/vee++1gwcPet+LhWSJj3ISq5xoyzJeboroe5zyNJTxIpu52DbjRD788MObeuqCoREomKKE5csvvxwt121W9q2yHyVSLBqBgikaT/6d5Nh4ljrX1tbahQsXGiwSgYIpyTHxHIrIePtJ5e9x9OjRzuZoQR8IFEzJJ5980r799tvWldy6kacxWBQCBVOQ4/LHjx/vfN8o70edPHmywSIQKOhYrizK0l6Oyncte1nHjh0b7W3B0AkUdChReuONN6Y6ij57W9mPmkYAoRKBgg7lhvavv/66Tdt33303+lyuQmLIBAo6khdx81LtrORz5WJZGCqBgg5kbyhLe7Ncdsvnyl7X1atXGwyRQMGEssz21ltvbXr44iSy15UZUkZzMEQCBRPK+Ix8zEuuUspdf65CYmgECiaQ0SB5eXaecRiP5jh//nyDIREoBifLXjk8kJdlp7nsls+TybcV9oCyH5WvZZrH22HWzINiMLIXlJsWstyVaOTPM7rjkUceafv37x+N8Ojyc+UqowxZrCIxzn7Uiy++eMPpxNAHnqAYhATjgw8+aKurq6NbFsYDDzMoMO8LHTp0qNMlsLzrlBhW2/fJk2NGc8AQCBSDkJlJufvu3455J05d3Sx+8eLF0XJaxZNz+ZrsRzEUAkXvZU5SRqPf6GkmL9LmKWuS2Ux5IstdeLcyun3Wsg+Vq5DytUKfCRS9ltgcOXLkpg8H5Dh4lvw2K/tOuWaoujzlJdrQZwJFr+WH8KVLl2761+cpK0uBmznckP2dPIH15f67jOU4ffp0g74SKHorL6hmv+VWZSrtrR7JzqnAPKn1SWKcpb4sbUIfCRS9NOl02fF+1M08DWUvJwcsMuepb/K15/8n+1H0kUDRO3kCykGFSV9KzRPYja4oGr/vlFOCfZWx81nWNJqDvhEoemUcjC4OKoyvCPpfS2C5yqjv99zla8/BkNysAX0iUPTKmTNnRlHpKhg5YJExGf+0BJaTcLMeoTEt+d9wqwdKYN4Eit7ID9cM6es6GOP9rOujl2DlcyVSQ3H58uVRpLJECn0gUPRCgpGltmkF48SJE6Ons8gy4qlTpwa5JJYrmrJEajQHfSBQ9EJ+qCYa0zI+kp2njOw75VDBJDdOVJX4Zj/q7NmzDaoTKMrLS7XZd5p2MLL09eabb47ed+rizr6qxtc1GRVPdQJFabnzLk82s7qY9dy5cwtxkCBPia+//rqlPkoTKErLC7LTHDq4yBJjozmoTKAo6/qDC3QvT09Z6jOag6oEipJyWCFXEVmCmq4snWYKb4Y8QjUCRTk5rHD48OFe3n3XR3mCyiGUigMYWWwCRSnjcRj2nWYr4+szTgQqESjKyDs6kw4UZHNyhN9oDqoRKMrIPkiuHBriC7J9kPejchWSpT6qEChKyA/FDBHMe0/MT0ZzJFIOp1CBQDF3+WGYH4pdjNBgchkVnz0pmDeBYu5yKasfiHVkLzA3uU86EBImJVDMVfadclvEEGYuDUnuInzttdeMimeuBIq5SZSy7zTki1n77MKFC6MRJzAvAsXcrK2tefemuLzAm4MTMA8CxVzkd+eZ8URtOfK/urpqqY+5EChmLj/sMnPJvlM/ZIqxf17Mg0AxU+PfkS/CzKUhyaj4aU40hn8iUMxUrjJypLx/xqM5Mt0YZkWgmJnc85arjOin8dKsW+aZFYFiJvLSZ46U++HWb5nTlVs/8jIvTNtygxnYvn17e/rpp93xNgBbtmwZBWrrVr+/ZboEipnYtm1b27t3bwO4WX4LBEBJnqCYiuw1nT17trEYzPBiGgSKqUicBAqYhCU+AEoSKCbmNBf/Ld8Tvi+YlO8gJrZnz562vGy1mP/YvXt327VrV4NJ+KnCxO655572/PPPj64w2tjYaCy222+/vT3xxBNt586dDSYhUHRi3759bWVlxQ0DjF7k9URNF3wX0ZmlpaXRB0AX7EEBUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQkkABUJJAAVCSQAFQ0nL+sL6+3gCgkv8D9XNltadjwsMAAAAASUVORK5CYII=",
  qf = (e) => (qr("data-v-06d70ec0"), (e = e()), $r(), e),
  $f = { key: 0, class: "card__placeholder" },
  zf = { key: 1, class: "card__content" },
  Wf = ["src"],
  Gf = { class: "card__info" },
  Yf = { class: "card__title" },
  Xf = { class: "card__contact" },
  Zf = { class: "card-contact__type" },
  ed = ["href"],
  td = qf(() =>
    q(
      "div",
      { class: "card__about" },
      [
        q("p", { class: "card-about__title" }, "О себе:"),
        q(
          "p",
          { class: "card-about__value" },
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quasi sint, vitae aperiam sed consequatur voluptate ipsa voluptatem, quas nihil ab neque tempora optio officia a reiciendis quia eos? In, ut rem nisi sapiente, repellendus neque placeat autem repudiandae vitae laboriosam a omnis consequatur necessitatibus officiis molestiae modi fuga non? "
        ),
      ],
      -1
    )
  ),
  nd = {
    __name: "Card",
    setup(e) {
      const t = Xr(),
        n = qe({ get: t.getters.user }),
        r = [{ type: "email" }, { type: "phone" }];
      return (s, o) => {
        var i;
        return (
          Y(),
          oe(
            "div",
            { class: Tn(["card", { empty: !n.value }]) },
            [
              n.value
                ? (Y(),
                  oe("div", zf, [
                    q(
                      "img",
                      {
                        class: "card__img",
                        src: Pn(Kf),
                        alt: "card placeholder",
                      },
                      null,
                      8,
                      Wf
                    ),
                    q("div", Gf, [
                      q(
                        "h2",
                        Yf,
                        At((i = n.value) == null ? void 0 : i.name),
                        1
                      ),
                      q("div", Xf, [
                        (Y(),
                        oe(
                          Ae,
                          null,
                          Ho(r, (c, l) =>
                            q(
                              "p",
                              { key: l + "-contact", class: "card-contact" },
                              [
                                q("span", Zf, At(c.type) + ": ", 1),
                                q(
                                  "a",
                                  {
                                    href:
                                      (l === 0 ? "mailto:" : "tel:") +
                                      n.value[c.type],
                                    class: "card-contact__value",
                                  },
                                  At(n.value[c.type]),
                                  9,
                                  ed
                                ),
                              ]
                            )
                          ),
                          64
                        )),
                      ]),
                      td,
                    ]),
                  ]))
                : (Y(),
                  oe(
                    "p",
                    $f,
                    " Выберите сотрудника, чтобы посмотреть его профиль "
                  )),
            ],
            2
          )
        );
      };
    },
  },
  rd = dt(nd, [["__scopeId", "data-v-06d70ec0"]]),
  sd = "./spiner-DDlwA9LL.png",
  od = { class: "preloader" },
  id = ["src"],
  cd = {
    __name: "Preloader",
    setup(e) {
      return (t, n) => (
        Y(),
        oe("div", od, [
          q(
            "img",
            { class: "preloader__img", src: Pn(sd), alt: "spiner" },
            null,
            8,
            id
          ),
        ])
      );
    },
  },
  ld = dt(cd, [["__scopeId", "data-v-e663452c"]]),
  ud = { class: "error" },
  ad = {
    __name: "Error",
    props: { error: {} },
    setup(e) {
      return (t, n) => (Y(), oe("div", ud, At(e.error.message), 1));
    },
  },
  fd = { class: "wrapper" },
  dd = { class: "wrapper__content" },
  hd = {
    __name: "App",
    setup(e) {
      const t = Xr(),
        n = qe({ get: t.getters.fetchUsers }),
        r = qe({ get: t.getters.hasError });
      return (s, o) => (
        Y(),
        oe("div", fd, [
          de(Sf),
          q("main", dd, [de(Hf), de(rd)]),
          n.value ? (Y(), Sn(ld, { key: 0 })) : Er("", !0),
          r.value
            ? (Y(), Sn(ad, { key: 1, error: r.value }, null, 8, ["error"]))
            : Er("", !0),
        ])
      );
    },
  },
  pd = dt(hd, [["__scopeId", "data-v-14e7b95f"]]),
  Ji = bu(pd);
Ji.use(mf);
Ji.mount("#app");
