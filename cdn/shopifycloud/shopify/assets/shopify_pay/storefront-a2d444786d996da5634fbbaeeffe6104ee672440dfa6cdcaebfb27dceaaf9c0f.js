! function() {
    var t = function(t) {
            var e = {
                exports: {}
            };
            return t.call(e.exports, e, e.exports), e.exports
        },
        e = function(t) {
            return function() {
                var e = t.apply(this, arguments);
                return new Promise((function(t, r) {
                    function n(i, o) {
                        try {
                            var s = e[i](o),
                                a = s.value
                        } catch (t) {
                            return void r(t)
                        }
                        if (!s.done) return Promise.resolve(a).then((function(t) {
                            n("next", t)
                        }), (function(t) {
                            n("throw", t)
                        }));
                        t(a)
                    }
                    return n("next")
                }))
            }
        },
        r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        },
        n = t((function(t) {
            var e = {}.toString;
            t.exports = function(t) {
                return e.call(t).slice(8, -1)
            }
        })),
        i = t((function(t) {
            var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        })),
        o = t((function(t) {
            var e = "__core-js_shared__",
                r = i[e] || (i[e] = {});
            t.exports = function(t) {
                return r[t] || (r[t] = {})
            }
        })),
        s = t((function(t) {
            var e = 0,
                r = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
            }
        })),
        a = t((function(t) {
            var e = o("wks"),
                r = i.Symbol,
                n = "function" == typeof r;
            (t.exports = function(t) {
                return e[t] || (e[t] = n && r[t] || (n ? r : s)("Symbol." + t))
            }).store = e
        })),
        u = t((function(t) {
            var e = a("toStringTag"),
                r = "Arguments" == n(function() {
                    return arguments
                }()),
                i = function(t, e) {
                    try {
                        return t[e]
                    } catch (t) {}
                };
            t.exports = function(t) {
                var o, s, a;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(s = i(o = Object(t), e)) ? s : r ? n(o) : "Object" == (a = n(o)) && "function" == typeof o.callee ? "Arguments" : a
            }
        })),
        c = t((function(t) {
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        })),
        f = t((function(t) {
            t.exports = function(t) {
                if (!c(t)) throw TypeError(t + " is not an object!");
                return t
            }
        })),
        l = t((function(t) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        })),
        d = t((function(t) {
            t.exports = !l((function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        })),
        h = t((function(t) {
            var e = i.document,
                r = c(e) && c(e.createElement);
            t.exports = function(t) {
                return r ? e.createElement(t) : {}
            }
        })),
        p = t((function(t) {
            t.exports = !d && !l((function() {
                return 7 != Object.defineProperty(h("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        })),
        w = t((function(t) {
            t.exports = function(t, e) {
                if (!c(t)) return t;
                var r, n;
                if (e && "function" == typeof(r = t.toString) && !c(n = r.call(t))) return n;
                if ("function" == typeof(r = t.valueOf) && !c(n = r.call(t))) return n;
                if (!e && "function" == typeof(r = t.toString) && !c(n = r.call(t))) return n;
                throw TypeError("Can't convert object to primitive value")
            }
        })),
        y = t((function(t, e) {
            var r = Object.defineProperty;
            e.f = d ? Object.defineProperty : function(t, e, n) {
                if (f(t), e = w(e, !0), f(n), p) try {
                    return r(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t
            }
        })),
        v = t((function(t) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        })),
        m = t((function(t) {
            t.exports = d ? function(t, e, r) {
                return y.f(t, e, v(1, r))
            } : function(t, e, r) {
                return t[e] = r, t
            }
        })),
        b = t((function(t) {
            var e = {}.hasOwnProperty;
            t.exports = function(t, r) {
                return e.call(t, r)
            }
        })),
        g = t((function(t) {
            var e = t.exports = {
                version: "2.5.1"
            };
            "number" == typeof __e && (__e = e)
        })),
        x = t((function(t) {
            var e = s("src"),
                r = "toString",
                n = Function[r],
                o = ("" + n).split(r);
            g.inspectSource = function(t) {
                return n.call(t)
            }, (t.exports = function(t, r, n, s) {
                var a = "function" == typeof n;
                a && (b(n, "name") || m(n, "name", r)), t[r] !== n && (a && (b(n, e) || m(n, e, t[r] ? "" + t[r] : o.join(String(r)))), t === i ? t[r] = n : s ? t[r] ? t[r] = n : m(t, r, n) : (delete t[r], m(t, r, n)))
            })(Function.prototype, r, (function() {
                return "function" == typeof this && this[e] || n.call(this)
            }))
        })),
        _ = (t((function() {
            "use strict";
            var t = {};
            t[a("toStringTag")] = "z", t + "" != "[object z]" && x(Object.prototype, "toString", (function() {
                return "[object " + u(this) + "]"
            }), !0)
        })), t((function(t) {
            var e = Math.ceil,
                r = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
            }
        }))),
        k = t((function(t) {
            t.exports = function(t) {
                if (null == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        })),
        S = t((function(t) {
            t.exports = function(t) {
                return function(e, r) {
                    var n, i, o = String(k(e)),
                        s = _(r),
                        a = o.length;
                    return s < 0 || s >= a ? t ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? o.charAt(s) : n : t ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
                }
            }
        })),
        A = t((function(t) {
            t.exports = !1
        })),
        T = t((function(t) {
            t.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        })),
        E = t((function(t) {
            t.exports = function(t, e, r) {
                if (T(t), void 0 === e) return t;
                switch (r) {
                    case 1:
                        return function(r) {
                            return t.call(e, r)
                        };
                    case 2:
                        return function(r, n) {
                            return t.call(e, r, n)
                        };
                    case 3:
                        return function(r, n, i) {
                            return t.call(e, r, n, i)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        })),
        O = t((function(t) {
            var e = "prototype",
                r = function(t, n, o) {
                    var s, a, u, c, f = t & r.F,
                        l = t & r.G,
                        d = t & r.S,
                        h = t & r.P,
                        p = t & r.B,
                        w = l ? i : d ? i[n] || (i[n] = {}) : (i[n] || {})[e],
                        y = l ? g : g[n] || (g[n] = {}),
                        v = y[e] || (y[e] = {});
                    for (s in l && (o = n), o) u = ((a = !f && w && void 0 !== w[s]) ? w : o)[s], c = p && a ? E(u, i) : h && "function" == typeof u ? E(Function.call, u) : u, w && x(w, s, u, t & r.U), y[s] != u && m(y, s, c), h && v[s] != u && (v[s] = u)
                };
            i.core = g, r.F = 1, r.G = 2, r.S = 4, r.P = 8, r.B = 16, r.W = 32, r.U = 64, r.R = 128, t.exports = r
        })),
        j = t((function(t) {
            t.exports = {}
        })),
        P = t((function(t) {
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == n(t) ? t.split("") : Object(t)
            }
        })),
        L = t((function(t) {
            t.exports = function(t) {
                return P(k(t))
            }
        })),
        B = t((function(t) {
            var e = Math.min;
            t.exports = function(t) {
                return t > 0 ? e(_(t), 9007199254740991) : 0
            }
        })),
        M = t((function(t) {
            var e = Math.max,
                r = Math.min;
            t.exports = function(t, n) {
                return (t = _(t)) < 0 ? e(t + n, 0) : r(t, n)
            }
        })),
        R = t((function(t) {
            t.exports = function(t) {
                return function(e, r, n) {
                    var i, o = L(e),
                        s = B(o.length),
                        a = M(n, s);
                    if (t && r != r) {
                        for (; s > a;)
                            if ((i = o[a++]) != i) return !0
                    } else
                        for (; s > a; a++)
                            if ((t || a in o) && o[a] === r) return t || a || 0;
                    return !t && -1
                }
            }
        })),
        N = t((function(t) {
            var e = o("keys");
            t.exports = function(t) {
                return e[t] || (e[t] = s(t))
            }
        })),
        F = t((function(t) {
            var e = R(!1),
                r = N("IE_PROTO");
            t.exports = function(t, n) {
                var i, o = L(t),
                    s = 0,
                    a = [];
                for (i in o) i != r && b(o, i) && a.push(i);
                for (; n.length > s;) b(o, i = n[s++]) && (~e(a, i) || a.push(i));
                return a
            }
        })),
        C = t((function(t) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        })),
        I = t((function(t) {
            t.exports = Object.keys || function(t) {
                return F(t, C)
            }
        })),
        U = t((function(t) {
            t.exports = d ? Object.defineProperties : function(t, e) {
                f(t);
                for (var r, n = I(e), i = n.length, o = 0; i > o;) y.f(t, r = n[o++], e[r]);
                return t
            }
        })),
        D = t((function(t) {
            var e = i.document;
            t.exports = e && e.documentElement
        })),
        G = t((function(t) {
            var e = N("IE_PROTO"),
                r = function() {},
                n = "prototype",
                i = function() {
                    var t, e = h("iframe"),
                        r = C.length,
                        o = "<",
                        s = ">";
                    for (e.style.display = "none", D.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write(o + "script" + s + "document.F=Object" + o + "/script" + s), t.close(), i = t.F; r--;) delete i[n][C[r]];
                    return i()
                };
            t.exports = Object.create || function(t, o) {
                var s;
                return null !== t ? (r[n] = f(t), s = new r, r[n] = null, s[e] = t) : s = i(), void 0 === o ? s : U(s, o)
            }
        })),
        z = t((function(t) {
            var e = y.f,
                r = a("toStringTag");
            t.exports = function(t, n, i) {
                t && !b(t = i ? t : t.prototype, r) && e(t, r, {
                    configurable: !0,
                    value: n
                })
            }
        })),
        V = t((function(t) {
            "use strict";
            var e = {};
            m(e, a("iterator"), (function() {
                return this
            })), t.exports = function(t, r, n) {
                t.prototype = G(e, {
                    next: v(1, n)
                }), z(t, r + " Iterator")
            }
        })),
        q = t((function(t) {
            t.exports = function(t) {
                return Object(k(t))
            }
        })),
        H = t((function(t) {
            var e = N("IE_PROTO"),
                r = Object.prototype;
            t.exports = Object.getPrototypeOf || function(t) {
                return t = q(t), b(t, e) ? t[e] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? r : null
            }
        })),
        W = t((function(t) {
            "use strict";
            var e = a("iterator"),
                r = !([].keys && "next" in [].keys()),
                n = "@@iterator",
                i = "keys",
                o = "values",
                s = function() {
                    return this
                };
            t.exports = function(t, a, u, c, f, l, d) {
                V(u, a, c);
                var h, p, w, y = function(t) {
                        if (!r && t in k) return k[t];
                        switch (t) {
                            case i:
                            case o:
                                return function() {
                                    return new u(this, t)
                                }
                        }
                        return function() {
                            return new u(this, t)
                        }
                    },
                    v = a + " Iterator",
                    g = f == o,
                    _ = !1,
                    k = t.prototype,
                    S = k[e] || k[n] || f && k[f],
                    T = S || y(f),
                    E = f ? g ? y("entries") : T : void 0,
                    P = "Array" == a && k.entries || S;
                if (P && (w = H(P.call(new t))) !== Object.prototype && w.next && (z(w, v, !0), A || b(w, e) || m(w, e, s)), g && S && S.name !== o && (_ = !0, T = function() {
                        return S.call(this)
                    }), A && !d || !r && !_ && k[e] || m(k, e, T), j[a] = T, j[v] = s, f)
                    if (h = {
                            values: g ? T : y(o),
                            keys: l ? T : y(i),
                            entries: E
                        }, d)
                        for (p in h) p in k || x(k, p, h[p]);
                    else O(O.P + O.F * (r || _), a, h);
                return h
            }
        })),
        X = (t((function() {
            "use strict";
            var t = S(!0);
            W(String, "String", (function(t) {
                this._t = String(t), this._i = 0
            }), (function() {
                var e, r = this._t,
                    n = this._i;
                return n >= r.length ? {
                    value: void 0,
                    done: !0
                } : (e = t(r, n), this._i += e.length, {
                    value: e,
                    done: !1
                })
            }))
        })), t((function(t) {
            var e = a("unscopables"),
                r = Array.prototype;
            null == r[e] && m(r, e, {}), t.exports = function(t) {
                r[e][t] = !0
            }
        }))),
        $ = t((function(t) {
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        })),
        K = t((function(t) {
            "use strict";
            t.exports = W(Array, "Array", (function(t, e) {
                this._t = L(t), this._i = 0, this._k = e
            }), (function() {
                var t = this._t,
                    e = this._k,
                    r = this._i++;
                return !t || r >= t.length ? (this._t = void 0, $(1)) : $(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
            }), "values"), j.Arguments = j.Array, X("keys"), X("values"), X("entries")
        })),
        Q = (t((function() {
            for (var t = a("iterator"), e = a("toStringTag"), r = j.Array, n = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1
                }, o = I(n), s = 0; s < o.length; s++) {
                var u, c = o[s],
                    f = n[c],
                    l = i[c],
                    d = l && l.prototype;
                if (d && (d[t] || m(d, t, r), d[e] || m(d, e, c), j[c] = r, f))
                    for (u in K) d[u] || x(d, u, K[u], !0)
            }
        })), t((function(t) {
            t.exports = function(t, e, r, n) {
                if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(r + ": incorrect invocation!");
                return t
            }
        }))),
        Y = t((function(t) {
            t.exports = function(t, e, r, n) {
                try {
                    return n ? e(f(r)[0], r[1]) : e(r)
                } catch (e) {
                    var i = t.return;
                    throw void 0 !== i && f(i.call(t)), e
                }
            }
        })),
        Z = t((function(t) {
            var e = a("iterator"),
                r = Array.prototype;
            t.exports = function(t) {
                return void 0 !== t && (j.Array === t || r[e] === t)
            }
        })),
        J = t((function(t) {
            var e = a("iterator");
            t.exports = g.getIteratorMethod = function(t) {
                if (null != t) return t[e] || t["@@iterator"] || j[u(t)]
            }
        })),
        tt = t((function(t, e) {
            var r = {},
                n = {};
            (e = t.exports = function(t, e, i, o, s) {
                var a, u, c, l, d = s ? function() {
                        return t
                    } : J(t),
                    h = E(i, o, e ? 2 : 1),
                    p = 0;
                if ("function" != typeof d) throw TypeError(t + " is not iterable!");
                if (Z(d)) {
                    for (a = B(t.length); a > p; p++)
                        if ((l = e ? h(f(u = t[p])[0], u[1]) : h(t[p])) === r || l === n) return l
                } else
                    for (c = d.call(t); !(u = c.next()).done;)
                        if ((l = Y(c, h, u.value, e)) === r || l === n) return l
            }).BREAK = r, e.RETURN = n
        })),
        et = t((function(t) {
            var e = a("species");
            t.exports = function(t, r) {
                var n, i = f(t).constructor;
                return void 0 === i || null == (n = f(i)[e]) ? r : T(n)
            }
        })),
        rt = t((function(t) {
            t.exports = function(t, e, r) {
                var n = void 0 === r;
                switch (e.length) {
                    case 0:
                        return n ? t() : t.call(r);
                    case 1:
                        return n ? t(e[0]) : t.call(r, e[0]);
                    case 2:
                        return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
                    case 3:
                        return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
                    case 4:
                        return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
                }
                return t.apply(r, e)
            }
        })),
        nt = t((function(t) {
            var e, r, o, s = i.process,
                a = i.setImmediate,
                u = i.clearImmediate,
                c = i.MessageChannel,
                f = i.Dispatch,
                l = 0,
                d = {},
                p = "onreadystatechange",
                w = function() {
                    var t = +this;
                    if (d.hasOwnProperty(t)) {
                        var e = d[t];
                        delete d[t], e()
                    }
                },
                y = function(t) {
                    w.call(t.data)
                };
            a && u || (a = function(t) {
                for (var r = [], n = 1; arguments.length > n;) r.push(arguments[n++]);
                return d[++l] = function() {
                    rt("function" == typeof t ? t : Function(t), r)
                }, e(l), l
            }, u = function(t) {
                delete d[t]
            }, "process" == n(s) ? e = function(t) {
                s.nextTick(E(w, t, 1))
            } : f && f.now ? e = function(t) {
                f.now(E(w, t, 1))
            } : c ? (o = (r = new c).port2, r.port1.onmessage = y, e = E(o.postMessage, o, 1)) : i.addEventListener && "function" == typeof postMessage && !i.importScripts ? (e = function(t) {
                i.postMessage(t + "", "*")
            }, i.addEventListener("message", y, !1)) : e = p in h("script") ? function(t) {
                D.appendChild(h("script"))[p] = function() {
                    D.removeChild(this), w.call(t)
                }
            } : function(t) {
                setTimeout(E(w, t, 1), 0)
            }), t.exports = {
                set: a,
                clear: u
            }
        })),
        it = t((function(t) {
            var e = nt.set,
                r = i.MutationObserver || i.WebKitMutationObserver,
                o = i.process,
                s = i.Promise,
                a = "process" == n(o);
            t.exports = function() {
                var t, n, u, c = function() {
                    var e, r;
                    for (a && (e = o.domain) && e.exit(); t;) {
                        r = t.fn, t = t.next;
                        try {
                            r()
                        } catch (e) {
                            throw t ? u() : n = void 0, e
                        }
                    }
                    n = void 0, e && e.enter()
                };
                if (a) u = function() {
                    o.nextTick(c)
                };
                else if (r) {
                    var f = !0,
                        l = document.createTextNode("");
                    new r(c).observe(l, {
                        characterData: !0
                    }), u = function() {
                        l.data = f = !f
                    }
                } else if (s && s.resolve) {
                    var d = s.resolve();
                    u = function() {
                        d.then(c)
                    }
                } else u = function() {
                    e.call(i, c)
                };
                return function(e) {
                    var r = {
                        fn: e,
                        next: void 0
                    };
                    n && (n.next = r), t || (t = r, u()), n = r
                }
            }
        })),
        ot = t((function(t) {
            "use strict";

            function e(t) {
                var e, r;
                this.promise = new t((function(t, n) {
                    if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
                    e = t, r = n
                })), this.resolve = T(e), this.reject = T(r)
            }
            t.exports.f = function(t) {
                return new e(t)
            }
        })),
        st = t((function(t) {
            t.exports = function(t) {
                try {
                    return {
                        e: !1,
                        v: t()
                    }
                } catch (t) {
                    return {
                        e: !0,
                        v: t
                    }
                }
            }
        })),
        at = t((function(t) {
            t.exports = function(t, e) {
                if (f(t), c(e) && e.constructor === t) return e;
                var r = ot.f(t);
                return (0, r.resolve)(e), r.promise
            }
        })),
        ut = t((function(t) {
            t.exports = function(t, e, r) {
                for (var n in e) x(t, n, e[n], r);
                return t
            }
        })),
        ct = t((function(t) {
            "use strict";
            var e = a("species");
            t.exports = function(t) {
                var r = i[t];
                d && r && !r[e] && y.f(r, e, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        })),
        ft = t((function(t) {
            var e = a("iterator"),
                r = !1;
            try {
                var n = [7][e]();
                n.return = function() {
                    r = !0
                }, Array.from(n, (function() {
                    throw 2
                }))
            } catch (t) {}
            t.exports = function(t, n) {
                if (!n && !r) return !1;
                var i = !1;
                try {
                    var o = [7],
                        s = o[e]();
                    s.next = function() {
                        return {
                            done: i = !0
                        }
                    }, o[e] = function() {
                        return s
                    }, t(o)
                } catch (t) {}
                return i
            }
        }));
    t((function() {
        "use strict";
        var t, e, r, n, o = nt.set,
            s = it(),
            f = "Promise",
            l = i.TypeError,
            d = i.process,
            h = i[f],
            p = "process" == u(d),
            w = function() {},
            y = e = ot.f,
            v = !! function() {
                try {
                    var t = h.resolve(1),
                        e = (t.constructor = {})[a("species")] = function(t) {
                            t(w, w)
                        };
                    return (p || "function" == typeof PromiseRejectionEvent) && t.then(w) instanceof e
                } catch (t) {}
            }(),
            m = function(t) {
                var e;
                return !(!c(t) || "function" != typeof(e = t.then)) && e
            },
            b = function(t, e) {
                if (!t._n) {
                    t._n = !0;
                    var r = t._c;
                    s((function() {
                        for (var n = t._v, i = 1 == t._s, o = 0, s = function(e) {
                                var r, o, s = i ? e.ok : e.fail,
                                    a = e.resolve,
                                    u = e.reject,
                                    c = e.domain;
                                try {
                                    s ? (i || (2 == t._h && k(t), t._h = 1), !0 === s ? r = n : (c && c.enter(), r = s(n), c && c.exit()), r === e.promise ? u(l("Promise-chain cycle")) : (o = m(r)) ? o.call(r, a, u) : a(r)) : u(n)
                                } catch (t) {
                                    u(t)
                                }
                            }; r.length > o;) s(r[o++]);
                        t._c = [], t._n = !1, e && !t._h && x(t)
                    }))
                }
            },
            x = function(t) {
                o.call(i, (function() {
                    var e, r, n, o = t._v,
                        s = _(t);
                    if (s && (e = st((function() {
                            p ? d.emit("unhandledRejection", o, t) : (r = i.onunhandledrejection) ? r({
                                promise: t,
                                reason: o
                            }) : (n = i.console) && n.error && n.error("Unhandled promise rejection", o)
                        })), t._h = p || _(t) ? 2 : 1), t._a = void 0, s && e.e) throw e.v
                }))
            },
            _ = function(t) {
                if (1 == t._h) return !1;
                for (var e, r = t._a || t._c, n = 0; r.length > n;)
                    if ((e = r[n++]).fail || !_(e.promise)) return !1;
                return !0
            },
            k = function(t) {
                o.call(i, (function() {
                    var e;
                    p ? d.emit("rejectionHandled", t) : (e = i.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                }))
            },
            S = function(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), b(e, !0))
            },
            j = function(t) {
                var e, r = this;
                if (!r._d) {
                    r._d = !0, r = r._w || r;
                    try {
                        if (r === t) throw l("Promise can't be resolved itself");
                        (e = m(t)) ? s((function() {
                            var n = {
                                _w: r,
                                _d: !1
                            };
                            try {
                                e.call(t, E(j, n, 1), E(S, n, 1))
                            } catch (t) {
                                S.call(n, t)
                            }
                        })): (r._v = t, r._s = 1, b(r, !1))
                    } catch (t) {
                        S.call({
                            _w: r,
                            _d: !1
                        }, t)
                    }
                }
            };
        v || (h = function(e) {
            Q(this, h, f, "_h"), T(e), t.call(this);
            try {
                e(E(j, this, 1), E(S, this, 1))
            } catch (t) {
                S.call(this, t)
            }
        }, (t = function() {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = ut(h.prototype, {
            then: function(t, e) {
                var r = y(et(this, h));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = p ? d.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && b(this, !1), r.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), r = function() {
            var e = new t;
            this.promise = e, this.resolve = E(j, e, 1), this.reject = E(S, e, 1)
        }, ot.f = y = function(t) {
            return t === h || t === n ? new r(t) : e(t)
        }), O(O.G + O.W + O.F * !v, {
            Promise: h
        }), z(h, f), ct(f), n = g[f], O(O.S + O.F * !v, f, {
            reject: function(t) {
                var e = y(this);
                return (0, e.reject)(t), e.promise
            }
        }), O(O.S + O.F * (A || !v), f, {
            resolve: function(t) {
                return at(A && this === n ? h : this, t)
            }
        }), O(O.S + O.F * !(v && ft((function(t) {
            h.all(t).catch(w)
        }))), f, {
            all: function(t) {
                var e = this,
                    r = y(e),
                    n = r.resolve,
                    i = r.reject,
                    o = st((function() {
                        var r = [],
                            o = 0,
                            s = 1;
                        tt(t, !1, (function(t) {
                            var a = o++,
                                u = !1;
                            r.push(void 0), s++, e.resolve(t).then((function(t) {
                                u || (u = !0, r[a] = t, --s || n(r))
                            }), i)
                        })), --s || n(r)
                    }));
                return o.e && i(o.v), r.promise
            },
            race: function(t) {
                var e = this,
                    r = y(e),
                    n = r.reject,
                    i = st((function() {
                        tt(t, !1, (function(t) {
                            e.resolve(t).then(r.resolve, n)
                        }))
                    }));
                return i.e && n(i.v), r.promise
            }
        })
    })), t((function(t) {
        t.exports = g.Promise
    }));
    ! function(t) {
        "use strict";

        function e(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function r(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function n(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return v.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function i(t) {
            this.map = {}, t instanceof i ? t.forEach((function(t, e) {
                this.append(e, t)
            }), this) : Array.isArray(t) ? t.forEach((function(t) {
                this.append(t[0], t[1])
            }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                this.append(e, t[e])
            }), this)
        }

        function o(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function s(t) {
            return new Promise((function(e, r) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    r(t.error)
                }
            }))
        }

        function a(t) {
            var e = new FileReader,
                r = s(e);
            return e.readAsArrayBuffer(t), r
        }

        function u(t) {
            var e = new FileReader,
                r = s(e);
            return e.readAsText(t), r
        }

        function c(t) {
            for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
            return r.join("")
        }

        function f(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function l() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (v.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (v.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (v.arrayBuffer && v.blob && b(t)) this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !g(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = f(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, v.blob && (this.blob = function() {
                var t = o(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? o(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
            }), this.text = function() {
                var t = o(this);
                if (t) return t;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, v.formData && (this.formData = function() {
                return this.text().then(p)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function d(t) {
            var e = t.toUpperCase();
            return x.indexOf(e) > -1 ? e : t
        }

        function h(t, e) {
            var r = (e = e || {}).body;
            if (t instanceof h) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new i(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new i(e.headers)), this.method = d(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r)
        }

        function p(t) {
            var e = new FormData;
            return t.trim().split("&").forEach((function(t) {
                if (t) {
                    var r = t.split("="),
                        n = r.shift().replace(/\+/g, " "),
                        i = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(i))
                }
            })), e
        }

        function w(t) {
            var e = new i;
            return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                var r = t.split(":"),
                    n = r.shift().trim();
                if (n) {
                    var i = r.join(":").trim();
                    e.append(n, i)
                }
            })), e
        }

        function y(t, e) {
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new i(e.headers), this.url = e.url || "", this._initBody(t)
        }
        if (!t.fetch) {
            var v = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (v.arrayBuffer) var m = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                b = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                g = ArrayBuffer.isView || function(t) {
                    return t && m.indexOf(Object.prototype.toString.call(t)) > -1
                };
            i.prototype.append = function(t, n) {
                t = e(t), n = r(n);
                var i = this.map[t];
                this.map[t] = i ? i + "," + n : n
            }, i.prototype.delete = function(t) {
                delete this.map[e(t)]
            }, i.prototype.get = function(t) {
                return t = e(t), this.has(t) ? this.map[t] : null
            }, i.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }, i.prototype.set = function(t, n) {
                this.map[e(t)] = r(n)
            }, i.prototype.forEach = function(t, e) {
                for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
            }, i.prototype.keys = function() {
                var t = [];
                return this.forEach((function(e, r) {
                    t.push(r)
                })), n(t)
            }, i.prototype.values = function() {
                var t = [];
                return this.forEach((function(e) {
                    t.push(e)
                })), n(t)
            }, i.prototype.entries = function() {
                var t = [];
                return this.forEach((function(e, r) {
                    t.push([r, e])
                })), n(t)
            }, v.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            h.prototype.clone = function() {
                return new h(this, {
                    body: this._bodyInit
                })
            }, l.call(h.prototype), l.call(y.prototype), y.prototype.clone = function() {
                return new y(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new i(this.headers),
                    url: this.url
                })
            }, y.error = function() {
                var t = new y(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var _ = [301, 302, 303, 307, 308];
            y.redirect = function(t, e) {
                if (-1 === _.indexOf(e)) throw new RangeError("Invalid status code");
                return new y(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = i, t.Request = h, t.Response = y, t.fetch = function(t, e) {
                return new Promise((function(r, n) {
                    var i = new h(t, e),
                        o = new XMLHttpRequest;
                    o.onload = function() {
                        var t = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: w(o.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL" in o ? o.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in o ? o.response : o.responseText;
                        r(new y(e, t))
                    }, o.onerror = function() {
                        n(new TypeError("Network request failed"))
                    }, o.ontimeout = function() {
                        n(new TypeError("Network request failed"))
                    }, o.open(i.method, i.url, !0), "include" === i.credentials ? o.withCredentials = !0 : "omit" === i.credentials && (o.withCredentials = !1), "responseType" in o && v.blob && (o.responseType = "blob"), i.headers.forEach((function(t, e) {
                        o.setRequestHeader(e, t)
                    })), o.send(void 0 === i._bodyInit ? null : i._bodyInit)
                }))
            }, t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this),
    function(t) {
        "use strict";

        function e(t, e, r, i) {
            var o = e && e.prototype instanceof n ? e : n,
                s = Object.create(o.prototype),
                a = new d(i || []);
            return s._invoke = u(t, r, a), s
        }

        function r(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }

        function n() {}

        function i() {}

        function o() {}

        function s(t) {
            ["next", "throw", "return"].forEach((function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            }))
        }

        function a(t) {
            function e(n, i, o, s) {
                var a = r(t[n], t, i);
                if ("throw" !== a.type) {
                    var u = a.arg,
                        c = u.value;
                    return c && "object" == typeof c && v.call(c, "__await") ? Promise.resolve(c.__await).then((function(t) {
                        e("next", t, o, s)
                    }), (function(t) {
                        e("throw", t, o, s)
                    })) : Promise.resolve(c).then((function(t) {
                        u.value = t, o(u)
                    }), (function(t) {
                        return e("throw", t, o, s)
                    }))
                }
                s(a.arg)
            }

            function n(t, r) {
                function n() {
                    return new Promise((function(n, i) {
                        e(t, r, n, i)
                    }))
                }
                return i = i ? i.then(n, n) : n()
            }
            var i;
            this._invoke = n
        }

        function u(t, e, n) {
            var i = S;
            return function(o, s) {
                if (i === T) throw new Error("Generator is already running");
                if (i === E) {
                    if ("throw" === o) throw s;
                    return p()
                }
                for (n.method = o, n.arg = s;;) {
                    var a = n.delegate;
                    if (a) {
                        var u = c(a, n);
                        if (u) {
                            if (u === O) continue;
                            return u
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (i === S) throw i = E, n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    i = T;
                    var f = r(t, e, n);
                    if ("normal" === f.type) {
                        if (i = n.done ? E : A, f.arg === O) continue;
                        return {
                            value: f.arg,
                            done: n.done
                        }
                    }
                    "throw" === f.type && (i = E, n.method = "throw", n.arg = f.arg)
                }
            }
        }

        function c(t, e) {
            var n = t.iterator[e.method];
            if (n === w) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = w, c(t, e), "throw" === e.method)) return O;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return O
            }
            var i = r(n, t.iterator, e.arg);
            if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, O;
            var o = i.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = w), e.delegate = null, O) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, O)
        }

        function f(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function l(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function d(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(f, this), this.reset(!0)
        }

        function h(t) {
            if (t) {
                var e = t[b];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                        n = function e() {
                            for (; ++r < t.length;)
                                if (v.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = w, e.done = !0, e
                        };
                    return n.next = n
                }
            }
            return {
                next: p
            }
        }

        function p() {
            return {
                value: w,
                done: !0
            }
        }
        var w, y = Object.prototype,
            v = y.hasOwnProperty,
            m = "function" == typeof Symbol ? Symbol : {},
            b = m.iterator || "@@iterator",
            g = m.asyncIterator || "@@asyncIterator",
            x = m.toStringTag || "@@toStringTag",
            _ = "object" == typeof module,
            k = t.regeneratorRuntime;
        if (k) _ && (module.exports = k);
        else {
            (k = t.regeneratorRuntime = _ ? module.exports : {}).wrap = e;
            var S = "suspendedStart",
                A = "suspendedYield",
                T = "executing",
                E = "completed",
                O = {},
                j = {};
            j[b] = function() {
                return this
            };
            var P = Object.getPrototypeOf,
                L = P && P(P(h([])));
            L && L !== y && v.call(L, b) && (j = L);
            var B = o.prototype = n.prototype = Object.create(j);
            i.prototype = B.constructor = o, o.constructor = i, o[x] = i.displayName = "GeneratorFunction", k.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === i || "GeneratorFunction" === (e.displayName || e.name))
            }, k.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : (t.__proto__ = o, x in t || (t[x] = "GeneratorFunction")), t.prototype = Object.create(B), t
            }, k.awrap = function(t) {
                return {
                    __await: t
                }
            }, s(a.prototype), a.prototype[g] = function() {
                return this
            }, k.AsyncIterator = a, k.async = function(t, r, n, i) {
                var o = new a(e(t, r, n, i));
                return k.isGeneratorFunction(r) ? o : o.next().then((function(t) {
                    return t.done ? t.value : o.next()
                }))
            }, s(B), B[x] = "Generator", B[b] = function() {
                return this
            }, B.toString = function() {
                return "[object Generator]"
            }, k.keys = function(t) {
                var e = [];
                for (var r in t) e.push(r);
                return e.reverse(),
                    function r() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in t) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, k.values = h, d.prototype = {
                constructor: d,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = w, this.done = !1, this.delegate = null, this.method = "next", this.arg = w, this.tryEntries.forEach(l), !t)
                        for (var e in this) "t" === e.charAt(0) && v.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = w)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    function e(e, n) {
                        return o.type = "throw", o.arg = t, r.next = e, n && (r.method = "next", r.arg = w), !!n
                    }
                    if (this.done) throw t;
                    for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n],
                            o = i.completion;
                        if ("root" === i.tryLoc) return e("end");
                        if (i.tryLoc <= this.prev) {
                            var s = v.call(i, "catchLoc"),
                                a = v.call(i, "finallyLoc");
                            if (s && a) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r];
                        if (n.tryLoc <= this.prev && v.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var i = n;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, O) : this.complete(o)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), O
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), l(r), O
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                l(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: h(t),
                        resultName: e,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = w), O
                }
            }
        }
    }(function() {
        return this || "object" == typeof self && self
    }() || Function("return this")());
    var lt = t((function(t, e) {
            ! function(r, n) {
                "use strict";
                var i = "0.7.23",
                    o = "",
                    s = "?",
                    a = "function",
                    u = "undefined",
                    c = "object",
                    f = "string",
                    l = "major",
                    d = "model",
                    h = "name",
                    p = "type",
                    w = "vendor",
                    y = "version",
                    v = "architecture",
                    m = "console",
                    b = "mobile",
                    g = "tablet",
                    x = "smarttv",
                    _ = "wearable",
                    k = "embedded",
                    S = {
                        extend: function(t, e) {
                            var r = {};
                            for (var n in t) e[n] && e[n].length % 2 == 0 ? r[n] = e[n].concat(t[n]) : r[n] = t[n];
                            return r
                        },
                        has: function(t, e) {
                            return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
                        },
                        lowerize: function(t) {
                            return t.toLowerCase()
                        },
                        major: function(t) {
                            return typeof t === f ? t.replace(/[^\d\.]/g, "").split(".")[0] : n
                        },
                        trim: function(t) {
                            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                        }
                    },
                    A = {
                        rgx: function(t, e) {
                            for (var r, i, o, s, u, f, l = 0; l < e.length && !u;) {
                                var d = e[l],
                                    h = e[l + 1];
                                for (r = i = 0; r < d.length && !u;)
                                    if (u = d[r++].exec(t))
                                        for (o = 0; o < h.length; o++) f = u[++i], typeof(s = h[o]) === c && s.length > 0 ? 2 == s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, f) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = f ? f.replace(s[1], s[2]) : n : this[s[0]] = f ? s[1].call(this, f, s[2]) : n : 4 == s.length && (this[s[0]] = f ? s[3].call(this, f.replace(s[1], s[2])) : n) : this[s] = f || n;
                                l += 2
                            }
                        },
                        str: function(t, e) {
                            for (var r in e)
                                if (typeof e[r] === c && e[r].length > 0) {
                                    for (var i = 0; i < e[r].length; i++)
                                        if (S.has(e[r][i], t)) return r === s ? n : r
                                } else if (S.has(e[r], t)) return r === s ? n : r;
                            return t
                        }
                    },
                    T = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    E = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [h, y],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [
                                [h, "Opera Mini"], y
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [h, "Opera"], y
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                            [h, y],
                            [/(konqueror)\/([\w\.]+)/i],
                            [
                                [h, "Konqueror"], y
                            ],
                            [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
                            [
                                [h, "IE"], y
                            ],
                            [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                            [
                                [h, "Edge"], y
                            ],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [h, "Yandex"], y
                            ],
                            [/(Avast)\/([\w\.]+)/i],
                            [
                                [h, "Avast Secure Browser"], y
                            ],
                            [/(AVG)\/([\w\.]+)/i],
                            [
                                [h, "AVG Secure Browser"], y
                            ],
                            [/(puffin)\/([\w\.]+)/i],
                            [
                                [h, "Puffin"], y
                            ],
                            [/(focus)\/([\w\.]+)/i],
                            [
                                [h, "Firefox Focus"], y
                            ],
                            [/(opt)\/([\w\.]+)/i],
                            [
                                [h, "Opera Touch"], y
                            ],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [h, "UCBrowser"], y
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [h, /_/g, " "], y
                            ],
                            [/(windowswechat qbcore)\/([\w\.]+)/i],
                            [
                                [h, "WeChat(Win) Desktop"], y
                            ],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [
                                [h, "WeChat"], y
                            ],
                            [/(brave)\/([\w\.]+)/i],
                            [
                                [h, "Brave"], y
                            ],
                            [/(whale)\/([\w\.]+)/i],
                            [
                                [h, "Whale"], y
                            ],
                            [/(qqbrowserlite)\/([\w\.]+)/i],
                            [h, y],
                            [/(QQ)\/([\d\.]+)/i],
                            [h, y],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [h, y],
                            [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                            [h, y],
                            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                            [h, y],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i],
                            [h],
                            [/(LBBROWSER)/i],
                            [h],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [y, [h, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [y, [h, "Facebook"]],
                            [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                            [
                                [h, "Facebook"]
                            ],
                            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                            [h, y],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [y, [h, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [h, /(.+)/, "$1 WebView"], y
                            ],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [
                                [h, /(.+(?:g|us))(.+)/, "$1 $2"], y
                            ],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [y, [h, "Android Browser"]],
                            [/(sailfishbrowser)\/([\w\.]+)/i],
                            [
                                [h, "Sailfish Browser"], y
                            ],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [h, y],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [h, "Dolphin"], y
                            ],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [
                                [h, "360 Browser"]
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [h, "Chrome"], y
                            ],
                            [/(coast)\/([\w\.]+)/i],
                            [
                                [h, "Opera Coast"], y
                            ],
                            [/fxios\/([\w\.-]+)/i],
                            [y, [h, "Firefox"]],
                            [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                            [y, [h, "Mobile Safari"]],
                            [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                            [y, h],
                            [/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [
                                [h, "GSA"], y
                            ],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [h, [y, A.str, T.browser.oldsafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [h, y],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [h, "Netscape"], y
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [h, y]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [v, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [v, S.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [v, "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [v, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [v, /ower/, "", S.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [v, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                [v, S.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                            [d, w, [p, g]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [d, [w, "Apple"],
                                [p, g]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [d, "Apple TV"],
                                [w, "Apple"],
                                [p, x]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [w, d, [p, g]],
                            [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
                            [d, [w, "Amazon"],
                                [p, g]
                            ],
                            [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                            [
                                [d, A.str, T.device.amazon.model],
                                [w, "Amazon"],
                                [p, b]
                            ],
                            [/android.+aft([bms])\sbuild/i],
                            [d, [w, "Amazon"],
                                [p, x]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [d, w, [p, b]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [d, [w, "Apple"],
                                [p, b]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [w, d, [p, b]],
                            [/\(bb10;\s(\w+)/i],
                            [d, [w, "BlackBerry"],
                                [p, b]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                            [d, [w, "Asus"],
                                [p, g]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [w, "Sony"],
                                [d, "Xperia Tablet"],
                                [p, g]
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [w, "Sony"],
                                [p, b]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [w, d, [p, m]],
                            [/android.+;\s(shield)\sbuild/i],
                            [d, [w, "Nvidia"],
                                [p, m]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [d, [w, "Sony"],
                                [p, m]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [w, A.str, T.device.sprint.vendor],
                                [d, A.str, T.device.sprint.model],
                                [p, b]
                            ],
                            [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [w, [d, /_/g, " "],
                                [p, b]
                            ],
                            [/(nexus\s9)/i],
                            [d, [w, "HTC"],
                                [p, g]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],
                            [d, [w, "Huawei"],
                                [p, b]
                            ],
                            [/android.+(bah2?-a?[lw]\d{2})/i],
                            [d, [w, "Huawei"],
                                [p, g]
                            ],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [w, d, [p, b]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [d, [w, "Microsoft"],
                                [p, m]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [w, "Microsoft"],
                                [p, b]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [d, [w, "Motorola"],
                                [p, b]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [d, [w, "Motorola"],
                                [p, g]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [w, S.trim],
                                [d, S.trim],
                                [p, x]
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [w, "Samsung"],
                                [p, x]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [d, [w, "Sharp"],
                                [p, x]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [w, "Samsung"], d, [p, g]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [w, [p, x], d],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                            [
                                [w, "Samsung"], d, [p, b]
                            ],
                            [/sie-(\w*)/i],
                            [d, [w, "Siemens"],
                                [p, b]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                            [
                                [w, "Nokia"], d, [p, b]
                            ],
                            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [d, [w, "Acer"],
                                [p, g]
                            ],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [d, [w, "LG"],
                                [p, g]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [w, "LG"], d, [p, g]
                            ],
                            [/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i],
                            [
                                [w, "LG"], d, [p, x]
                            ],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [d, [w, "LG"],
                                [p, b]
                            ],
                            [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                            [w, d, [p, g]],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [d, [w, "Lenovo"],
                                [p, g]
                            ],
                            [/(lenovo)[_\s-]?([\w-]+)/i],
                            [w, d, [p, b]],
                            [/linux;.+((jolla));/i],
                            [w, d, [p, b]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [w, d, [p, _]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [w, d, [p, b]],
                            [/crkey/i],
                            [
                                [d, "Chromecast"],
                                [w, "Google"],
                                [p, x]
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [d, [w, "Google"],
                                [p, _]
                            ],
                            [/android.+;\s(pixel c)[\s)]/i],
                            [d, [w, "Google"],
                                [p, g]
                            ],
                            [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
                            [d, [w, "Google"],
                                [p, b]
                            ],
                            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i, /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                            [
                                [d, /_/g, " "],
                                [w, "Xiaomi"],
                                [p, b]
                            ],
                            [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],
                            [
                                [d, /_/g, " "],
                                [w, "Xiaomi"],
                                [p, g]
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [d, [w, "Meizu"],
                                [p, b]
                            ],
                            [/(mz)-([\w-]{2,})/i],
                            [
                                [w, "Meizu"], d, [p, b]
                            ],
                            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                            [d, [w, "OnePlus"],
                                [p, b]
                            ],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [d, [w, "RCA"],
                                [p, g]
                            ],
                            [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
                            [d, [w, "Dell"],
                                [p, g]
                            ],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [d, [w, "Verizon"],
                                [p, g]
                            ],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [
                                [w, "Barnes & Noble"], d, [p, g]
                            ],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [d, [w, "NuVision"],
                                [p, g]
                            ],
                            [/android.+;\s(k88)\sbuild/i],
                            [d, [w, "ZTE"],
                                [p, g]
                            ],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [d, [w, "Swiss"],
                                [p, b]
                            ],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [d, [w, "Swiss"],
                                [p, g]
                            ],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [d, [w, "Zeki"],
                                [p, g]
                            ],
                            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                            [
                                [w, "Dragon Touch"], d, [p, g]
                            ],
                            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                            [d, [w, "Insignia"],
                                [p, g]
                            ],
                            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                            [d, [w, "NextBook"],
                                [p, g]
                            ],
                            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [
                                [w, "Voice"], d, [p, b]
                            ],
                            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                            [
                                [w, "LvTel"], d, [p, b]
                            ],
                            [/android.+;\s(PH-1)\s/i],
                            [d, [w, "Essential"],
                                [p, b]
                            ],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [d, [w, "Envizen"],
                                [p, g]
                            ],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                            [w, d, [p, g]],
                            [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
                            [d, [w, "MachSpeed"],
                                [p, g]
                            ],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [w, d, [p, g]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [d, [w, "Rotor"],
                                [p, g]
                            ],
                            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                            [w, d, [p, g]],
                            [/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                            [d, [p, b]],
                            [/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                            [d, [p, g]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [p, S.lowerize], w, d
                            ],
                            [/[\s\/\(](smart-?tv)[;\)]/i],
                            [
                                [p, x]
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [d, [w, "Generic"]]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [y, [h, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [y, [h, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [h, y],
                            [/rv\:([\w\.]{1,9}).+(gecko)/i],
                            [y, h]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [h, y],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [h, [y, A.str, T.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [h, "Windows"],
                                [y, A.str, T.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [h, "BlackBerry"], y
                            ],
                            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                            [h, y],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                            [
                                [h, "Symbian"], y
                            ],
                            [/\((series40);/i],
                            [h],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [h, "Firefox OS"], y
                            ],
                            [/crkey\/([\d\.]+)/i],
                            [y, [h, "Chromecast"]],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                            [h, y],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [h, "Chromium OS"], y
                            ],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [h, "Solaris"], y
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                            [h, y],
                            [/(haiku)\s(\w+)/i],
                            [h, y],
                            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                            [
                                [y, /_/g, "."],
                                [h, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [h, "Mac OS"],
                                [y, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [h, y]
                        ]
                    },
                    O = function(t, e) {
                        if ("object" == typeof t && (e = t, t = n), !(this instanceof O)) return new O(t, e).getResult();
                        var i = t || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : o),
                            s = e ? S.extend(E, e) : E;
                        return this.getBrowser = function() {
                            var t = {
                                name: n,
                                version: n
                            };
                            return A.rgx.call(t, i, s.browser), t.major = S.major(t.version), t
                        }, this.getCPU = function() {
                            var t = {
                                architecture: n
                            };
                            return A.rgx.call(t, i, s.cpu), t
                        }, this.getDevice = function() {
                            var t = {
                                vendor: n,
                                model: n,
                                type: n
                            };
                            return A.rgx.call(t, i, s.device), t
                        }, this.getEngine = function() {
                            var t = {
                                name: n,
                                version: n
                            };
                            return A.rgx.call(t, i, s.engine), t
                        }, this.getOS = function() {
                            var t = {
                                name: n,
                                version: n
                            };
                            return A.rgx.call(t, i, s.os), t
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return i
                        }, this.setUA = function(t) {
                            return i = t, this
                        }, this
                    };
                O.VERSION = i, O.BROWSER = {
                    NAME: h,
                    MAJOR: l,
                    VERSION: y
                }, O.CPU = {
                    ARCHITECTURE: v
                }, O.DEVICE = {
                    MODEL: d,
                    VENDOR: w,
                    TYPE: p,
                    CONSOLE: m,
                    MOBILE: b,
                    SMARTTV: x,
                    TABLET: g,
                    WEARABLE: _,
                    EMBEDDED: k
                }, O.ENGINE = {
                    NAME: h,
                    VERSION: y
                }, O.OS = {
                    NAME: h,
                    VERSION: y
                }, "object" !== u ? ("object" !== u && t.exports && (e = t.exports = O), e.UAParser = O) : "function" == typeof define && define.amd ? define((function() {
                    return O
                })) : r && (r.UAParser = O);
                var j = r && (r.jQuery || r.Zepto);
                if (j && !j.ua) {
                    var P = new O;
                    j.ua = P.getResult(), j.ua.get = function() {
                        return P.getUA()
                    }, j.ua.set = function(t) {
                        P.setUA(t);
                        var e = P.getResult();
                        for (var r in e) j.ua[r] = e[r]
                    }
                }
            }("object" == typeof window ? window : this)
        })),
        dt = t((function(t, e) {
            "use strict";

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function i(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }

            function o(t) {
                return null == t ? {} : {
                    name: t.name,
                    version: t.version,
                    isMobile: t.isMobile,
                    isNativeApp: t.isNativeApp,
                    isDesktop: t.isDesktop
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.asPlainObject = o, e.Browser = void 0;
            var s = ["mobile", "tablet"],
                a = function() {
                    function t(e) {
                        var n = e.userAgent,
                            i = e.supported,
                            o = void 0 === i || i;
                        r(this, t), this.userAgent = void 0, this.supported = void 0, this.ua = void 0, this.userAgent = n, this.supported = o, this.ua = new lt.UAParser(n)
                    }
                    return i(t, [{
                        key: "name",
                        get: function() {
                            return this.ua.getBrowser().name || ""
                        }
                    }, {
                        key: "version",
                        get: function() {
                            return this.ua.getBrowser().version || ""
                        }
                    }, {
                        key: "majorVersion",
                        get: function() {
                            var t = this.version;
                            if ("" !== t) {
                                var e = parseInt(t.split(".")[0], 10);
                                return Number.isNaN(e) ? void 0 : e
                            }
                        }
                    }, {
                        key: "unknown",
                        get: function() {
                            return "" === this.name
                        }
                    }, {
                        key: "isMobile",
                        get: function() {
                            return s.includes(this.ua.getDevice().type)
                        }
                    }, {
                        key: "isDesktop",
                        get: function() {
                            return !this.isMobile
                        }
                    }, {
                        key: "isNativeApp",
                        get: function() {
                            return this.ua.getUA().includes("Shopify Mobile/", 0)
                        }
                    }, {
                        key: "os",
                        get: function() {
                            return this.ua.getOS().name || ""
                        }
                    }, {
                        key: "isWindows",
                        get: function() {
                            return this.os.includes("Windows")
                        }
                    }, {
                        key: "isMac",
                        get: function() {
                            return this.os.includes("Mac OS")
                        }
                    }, {
                        key: "isSafari",
                        get: function() {
                            return this.name.includes("Safari")
                        }
                    }, {
                        key: "isChrome",
                        get: function() {
                            return this.name.includes("Chrome")
                        }
                    }, {
                        key: "isAndroidChrome",
                        get: function() {
                            return this.ua.getUA().includes("Android") && this.name.includes("Chrome")
                        }
                    }, {
                        key: "isFirefox",
                        get: function() {
                            return "Firefox" === this.name
                        }
                    }, {
                        key: "isIE",
                        get: function() {
                            return this.name.includes("IE")
                        }
                    }, {
                        key: "isEdge",
                        get: function() {
                            return "Edge" === this.name
                        }
                    }, {
                        key: "isIOS",
                        get: function() {
                            var t = this.ua.getOS(),
                                e = t.name && t.name.includes("iOS"),
                                r = /Shopify Mobile|Shopify POS|Shopify Ping/.test(this.userAgent) && this.userAgent.includes("iOS");
                            return e || r
                        }
                    }]), t
                }();
            e.Browser = a
        })),
        ht = t((function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Browser", {
                enumerable: !0,
                get: function() {
                    return dt.Browser
                }
            }), Object.defineProperty(e, "asPlainObject", {
                enumerable: !0,
                get: function() {
                    return dt.asPlainObject
                }
            })
        })),
        pt = t((function(t) {
            t.exports = ht
        })),
        wt = t((function(t, r) {
            "use strict";

            function n() {
                var t = new RegExp(l + "=([^;]+)").exec(document.cookie);
                return t ? decodeURIComponent(t[1]).toLowerCase() : null
            }

            function i() {
                var t = new RegExp(d + "=([^;]+)").exec(document.cookie);
                return t ? t[1] : null
            }

            function o() {
                return window.ShopifyAnalytics && window.ShopifyAnalytics.lib && window.ShopifyAnalytics.lib.config && window.ShopifyAnalytics.lib.config.Trekkie && window.ShopifyAnalytics.lib.config.Trekkie.defaultAttributes && window.ShopifyAnalytics.lib.config.Trekkie.defaultAttributes.shopId ? ShopifyAnalytics.lib.config.Trekkie.defaultAttributes.shopId : null
            }

            function s(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8760,
                    r = (new Date).getTime(),
                    n = new Date(r + 60 * e * 60 * 1e3);
                document.cookie = l + "=" + t + "; expires=" + n.toGMTString() + "; path=/"
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var a, u, c = (a = e(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!0 !== new pt.Browser({
                                        userAgent: navigator.userAgent
                                    }).isSafari) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                if (null === n()) {
                                    t.next = 6;
                                    break
                                }
                                return t.abrupt("return");
                            case 6:
                                return t.next = 8, f();
                            case 8:
                                !0 === t.sent ? s("true") : s("pending", 1);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function() {
                    return a.apply(this, arguments)
                }),
                f = (u = e(regeneratorRuntime.mark((function t() {
                    var e, r, n, s, a, u;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, e = "https://" + window.ShopifyPay.apiHost + "/session?v=1", r = i(), n = o(), null !== r && null !== n && (e += "&token=" + r + "&shop_id=" + n), t.next = 7, fetch(e, {
                                    credentials: "include"
                                });
                            case 7:
                                return s = t.sent, t.next = 10, s.json();
                            case 10:
                                return a = t.sent, u = a.eligible, t.abrupt("return", u);
                            case 15:
                                return t.prev = 15, t.t0 = t.catch(0), t.abrupt("return", !1);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [0, 15]
                    ])
                }))), function() {
                    return u.apply(this, arguments)
                });
            r.setRedirectState = s;
            var l = "shopify_pay_redirect",
                d = "_shopify_y";
            r.default = c
        }));
    t((function() {
        "use strict";
        (0, r(wt).default)()
    }))
}("undefined" != typeof global ? global : "undefined" != typeof window && window);