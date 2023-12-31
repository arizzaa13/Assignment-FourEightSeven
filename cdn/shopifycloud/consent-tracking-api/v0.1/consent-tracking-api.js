! function(n) {
    "use strict";
    let e;
    ! function(n) {
        n.TRACKING_ACCEPTED = "trackingConsentAccepted", n.TRACKING_DECLINED = "trackingConsentDeclined", n.FIRST_PARTY_MARKETING_ACCEPTED = "firstPartyMarketingConsentAccepted", n.THIRD_PARTY_MARKETING_ACCEPTED = "thirdPartyMarketingConsentAccepted", n.ANALYTICS_ACCEPTED = "analyticsConsentAccepted", n.PREFERENCES_ACCEPTED = "preferencesConsentAccepted", n.FIRST_PARTY_MARKETING_DECLINED = "firstPartyMarketingConsentDeclined", n.THIRD_PARTY_MARKETING_DECLINED = "thirdPartyMarketingConsentDeclined", n.ANALYTICS_DECLINED = "analyticsConsentDeclined", n.PREFERENCES_DECLINED = "preferencesConsentDeclined", n.CONSENT_COLLECTED = "visitorConsentCollected", n.CONSENT_TRACKING_API_LOADED = "consentTrackingApiLoaded"
    }(e || (e = {}));
    let t, r, o, i, c, s, u;
    ! function(n) {
        n.ACCEPTED = "yes", n.DECLINED = "no", n.NO_INTERACTION = "no_interaction", n.NO_VALUE = ""
    }(t || (t = {})),
    function(n) {
        n.NO_VALUE = "", n.ACCEPTED = "1", n.DECLINED = "0"
    }(r || (r = {})),
    function(n) {
        n.GDPR = "GDPR", n.CCPA = "CCPA", n.NO_VALUE = ""
    }(o || (o = {})),
    function(n) {
        n.PREFERENCES = "p", n.ANALYTICS = "a", n.FIRST_PARTY_MARKETING = "m", n.THIRD_PARTY_MARKETING = "t"
    }(i || (i = {})),
    function(n) {
        n.GDPR = "GDPR", n.GDPR_BLOCK_ALL = "GDPR_BLOCK_ALL", n.CCPA = "CCPA"
    }(c || (c = {})),
    function(n) {
        n.MARKETING = "m", n.ANALYTICS = "a", n.PREFERENCES = "p", n.SALE_OF_DATA = "s"
    }(s || (s = {})),
    function(n) {
        n.MARKETING = "marketing", n.ANALYTICS = "analytics", n.PREFERENCES = "preferences", n.SALE_OF_DATA = "sale_of_data", n.EMAIL = "email"
    }(u || (u = {}));
    const a = ["lim", "v", "con", "reg"];
    let E = {};

    function C(n) {
        if (n in E) return E[n];
        const e = document.cookie ? document.cookie.split("; ") : [];
        E[n] = void 0;
        for (let t = 0; t < e.length; t++) {
            const [r, o] = e[t].split("=");
            if (n === decodeURIComponent(r)) {
                E[n] = JSON.parse(decodeURIComponent(o));
                break
            }
        }
        return E[n]
    }

    function A(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(n);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), t.push.apply(t, r)
        }
        return t
    }

    function l(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? A(Object(t), !0).forEach((function(e) {
                f(n, e, t[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach((function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
            }))
        }
        return n
    }

    function f(n, e, t) {
        return e in n ? Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[e] = t, n
    }

    function T() {
        const n = C("_tracking_consent");
        if (void 0 !== n && ! function(n) {
                if ("2.1" !== n.v) return !0;
                return ! function(n, e) {
                    const t = e.slice().sort();
                    return n.length === e.length && n.slice().sort().every((n, e) => n === t[e])
                }(Object.keys(n).filter(n => "region" !== n), a)
            }(n)) return n
    }

    function R(n, e) {
        function t(n) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.NO_VALUE;
            return !0 === n ? r.ACCEPTED : !1 === n ? r.DECLINED : e
        }
        const i = {
                [s.ANALYTICS]: t(n[u.ANALYTICS], r.DECLINED),
                [s.MARKETING]: t(n[u.MARKETING], r.DECLINED),
                [s.PREFERENCES]: t(n[u.PREFERENCES], r.DECLINED),
                [s.SALE_OF_DATA]: t(n[u.SALE_OF_DATA])
            },
            a = {
                v: "2.1",
                reg: o.NO_VALUE,
                lim: [c.GDPR_BLOCK_ALL, c.CCPA],
                con: {
                    CMP: i
                }
            };
        ! function(n, e, t, r) {
            let o = "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(JSON.stringify(r)));
            o += "; path=/", o += "; domain=".concat(e), o += "; expires=".concat(new Date((new Date).getTime() + t).toUTCString()), o += "; secure", document.cookie = o, E[n] = r
        }("_tracking_consent", n.rootDomain, 31536e6, a), e(null)
    }

    function N() {
        try {
            let n = T();
            if (!n) return;
            return n
        } catch (n) {
            return
        }
    }

    function P() {
        return {
            m: g(s.MARKETING),
            a: g(s.ANALYTICS),
            p: g(s.PREFERENCES),
            s: g(s.SALE_OF_DATA)
        }
    }

    function _() {
        return P()[s.SALE_OF_DATA]
    }

    function d() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null === n && (n = N()), void 0 === n
    }

    function D(n) {
        switch (n) {
            case r.ACCEPTED:
                return t.ACCEPTED;
            case r.DECLINED:
                return t.DECLINED;
            default:
                return t.NO_VALUE
        }
    }

    function I(n) {
        switch (n) {
            case s.ANALYTICS:
                return u.ANALYTICS;
            case s.MARKETING:
                return u.MARKETING;
            case s.PREFERENCES:
                return u.PREFERENCES;
            case s.SALE_OF_DATA:
                return u.SALE_OF_DATA
        }
    }

    function g(n) {
        const e = N();
        if (!e) return r.NO_VALUE;
        const t = e.con.CMP;
        return t ? t[n] : r.NO_VALUE
    }

    function p() {
        return C("_cmp_a")
    }

    function L(n) {
        const e = p();
        if (!e) return !0;
        const t = e.purposes[n];
        return "boolean" != typeof t || t
    }

    function S() {
        return L(i.PREFERENCES)
    }

    function h() {
        return L(i.ANALYTICS)
    }

    function y() {
        return L(i.FIRST_PARTY_MARKETING)
    }

    function O() {
        return L(i.THIRD_PARTY_MARKETING)
    }
    const w = {
        "": [],
        GDPR: [c.GDPR, c.GDPR_BLOCK_ALL],
        CCPA: [c.CCPA]
    };

    function G(n, e) {
        document.dispatchEvent(new CustomEvent(n, {
            detail: e || {}
        }))
    }

    function b(n) {
        const t = n[i.FIRST_PARTY_MARKETING],
            r = n[i.THIRD_PARTY_MARKETING],
            o = n[i.ANALYTICS],
            c = n[i.PREFERENCES];
        !0 === t ? G(e.FIRST_PARTY_MARKETING_ACCEPTED) : !1 === t && G(e.FIRST_PARTY_MARKETING_DECLINED), !0 === r ? G(e.THIRD_PARTY_MARKETING_ACCEPTED) : !1 === r && G(e.THIRD_PARTY_MARKETING_DECLINED), !0 === o ? G(e.ANALYTICS_ACCEPTED) : !1 === o && G(e.ANALYTICS_DECLINED), !0 === c ? G(e.PREFERENCES_ACCEPTED) : !1 === c && G(e.PREFERENCES_DECLINED);
        const s = function(n) {
            return {
                firstPartyMarketingAllowed: n[i.FIRST_PARTY_MARKETING],
                thirdPartyMarketingAllowed: n[i.THIRD_PARTY_MARKETING],
                analyticsAllowed: n[i.ANALYTICS],
                preferencesAllowed: n[i.PREFERENCES]
            }
        }(n);
        G(e.CONSENT_COLLECTED, s);
        const u = [o, c, t, r];
        u.every(n => !0 === n) && G(e.TRACKING_ACCEPTED), u.every(n => !1 === n) && G(e.TRACKING_DECLINED)
    }

    function m(n, e) {
        const t = new XMLHttpRequest,
            r = JSON.stringify(n);
        t.open("POST", "/set_tracking_consent.json", !0), t.setRequestHeader("Content-Type", "application/json"), t.onreadystatechange = function() {
            if (4 !== t.readyState) return;
            E = {};
            const r = function(n) {
                try {
                    return JSON.parse(n)
                } catch (n) {
                    return {
                        error: "Unknown error"
                    }
                }
            }(t.responseText);
            var o;
            0 === (o = t.status) || 200 >= o && o < 400 ? (! function(n) {
                void 0 !== n.consent ? b({
                    [i.PREFERENCES]: n.consent,
                    [i.ANALYTICS]: n.consent,
                    [i.FIRST_PARTY_MARKETING]: n.consent,
                    [i.THIRD_PARTY_MARKETING]: n.consent
                }) : void 0 !== n.granular_consent && b({
                    [i.PREFERENCES]: S(),
                    [i.ANALYTICS]: h(),
                    [i.FIRST_PARTY_MARKETING]: y(),
                    [i.THIRD_PARTY_MARKETING]: O()
                })
            }(n), e(null, r)) : e(r)
        }, t.send(r)
    }

    function M() {
        if (d()) return t.NO_VALUE;
        const n = P();
        return n[s.MARKETING] === r.ACCEPTED && n[s.ANALYTICS] === r.ACCEPTED ? t.ACCEPTED : n[s.MARKETING] === r.DECLINED || n[s.ANALYTICS] === r.DECLINED ? t.DECLINED : t.NO_INTERACTION
    }

    function k() {
        const n = function() {
            const n = N();
            return d(n) ? o.NO_VALUE : n.reg
        }();
        return n in o ? n : o.NO_VALUE
    }

    function v() {
        return function() {
            const n = N();
            return d(n) ? {
                limit: []
            } : {
                limit: n.lim
            }
        }()
    }

    function K(n) {
        return V(c.GDPR_BLOCK_ALL) && n ? F() ? document.referrer : "" : null
    }

    function Y(n) {
        return V(c.GDPR_BLOCK_ALL) && n ? F() ? window.location.pathname + window.location.search : "/" : null
    }

    function F() {
        if ("" === document.referrer) return !0;
        const n = document.createElement("a");
        return n.href = document.referrer, window.location.hostname != n.hostname
    }

    function j() {
        if (!V(c.GDPR) && !V(c.GDPR_BLOCK_ALL)) return !0;
        const n = P();
        if (n[s.MARKETING] === r.ACCEPTED && n[s.ANALYTICS] === r.ACCEPTED) return !0;
        if (n[s.MARKETING] === r.DECLINED || n[s.ANALYTICS] === r.DECLINED) return !1;
        return k() !== o.GDPR
    }

    function B() {
        const n = k();
        if (n === o.NO_VALUE) return !1;
        const e = v();
        return 0 !== e.limit.length && e.limit.some(e => function(n, e) {
            return w[n].includes(e)
        }(n, e))
    }

    function U() {
        return !!d() || j()
    }

    function V(n) {
        return v().limit.includes(n)
    }

    function H() {
        return k() !== o.CCPA ? null : V(c.CCPA) ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
    }

    function q() {
        return !1 === H() ? t.DECLINED : (n = _(), d() ? t.NO_VALUE : n === r.NO_VALUE ? t.NO_INTERACTION : D(n));
        var n
    }
    const x = {
        getTrackingConsent: M,
        setTrackingConsent: function(n, e) {
            if (d()) {
                const n = "Shop is not configured to block privacy regulation in online store settings.";
                return console.warn(n), e({
                    error: n
                })
            }
            if (function(n) {
                    if ("boolean" != typeof n && "object" != typeof n) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                    if ("object" == typeof n) {
                        const e = Object.keys(n);
                        if (0 === e.length) throw TypeError("The submitted consent object is empty.");
                        const t = [u.MARKETING, u.ANALYTICS, u.PREFERENCES, u.SALE_OF_DATA, u.EMAIL];
                        for (const n of e)
                            if (!t.includes(n)) throw TypeError("The submitted consent object should only contain the following keys: ".concat(t.join(", "), "."))
                    }
                }(n), "function" != typeof e) throw TypeError("setTrackingConsent must be called with a callback function");
            if ("object" == typeof n) {
                const t = K(n.analytics),
                    r = Y(n.analytics);
                return m(l(l({
                    granular_consent: n
                }, null !== t && {
                    referrer: t
                }), null !== r && {
                    landing_page: r
                }), e)
            } {
                const t = K(n),
                    r = Y(n);
                return m(l(l({
                    consent: n
                }, null !== t && {
                    referrer: t
                }), null !== r && {
                    landing_page: r
                }), e)
            }
        },
        userCanBeTracked: U,
        getRegulation: k,
        isRegulationEnforced: B,
        getShopPrefs: v,
        shouldShowGDPRBanner: function() {
            return k() === o.GDPR && B() && M() === t.NO_INTERACTION
        },
        userDataCanBeSold: function() {
            const n = H(),
                e = function() {
                    if (V(c.CCPA)) {
                        return _() !== r.DECLINED
                    }
                    return !0
                }();
            return null !== n && !1 !== e ? n : !!d() || !1 !== U() && e
        },
        setCCPAConsent: function(n, e) {
            if ("boolean" != typeof n) throw TypeError("setCCPAConsent must be called with a boolean consent value");
            if ("function" != typeof e) throw TypeError("setCCPAConsent must be called with a callback function");
            return m({
                ccpa_consent: n
            }, e)
        },
        getCCPAConsent: q,
        GPCSignal: H,
        shouldShowCCPABanner: function() {
            return k() === o.CCPA && v().limit.includes(c.CCPA) && q() === t.NO_INTERACTION
        },
        haveAnalyticsConsent: function() {
            return h()
        },
        havePreferencesConsent: function() {
            return S()
        },
        haveFirstPartyMarketingConsent: function() {
            return y()
        },
        haveThirdPartyMarketingConsent: function() {
            return O()
        },
        getCCPAConsentValue: _,
        merchantEnforcingRegulationLimit: V,
        shouldShowBanner: function() {
            return function() {
                const n = p();
                return !!n && ("boolean" == typeof n.display_banner && n.display_banner)
            }() && g(s.ANALYTICS) === r.NO_VALUE && g(s.MARKETING) === r.NO_VALUE && g(s.PREFERENCES) === r.NO_VALUE
        },
        saleOfDataRegion: function() {
            return function() {
                const n = p();
                return n && n.sale_of_data_region || !1
            }()
        }
    };

    function J(n, e, t) {
        try {
            var r;
            ! function(n) {
                const e = new XMLHttpRequest;
                e.open("POST", "https://notify.bugsnag.com/", !0), e.setRequestHeader("Content-Type", "application/json"), e.setRequestHeader("Bugsnag-Api-Key", "95ba910bcec4542ef2a0b64cd7ca666c"), e.setRequestHeader("Bugsnag-Payload-Version", "5");
                const t = function(n) {
                    const e = function(n) {
                            return n.stackTrace || n.stack || n.description || n.name
                        }(n.error),
                        [t, r] = (e || "unknown error").split("\n")[0].split(":");
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "ConsentTrackingAPI",
                            version: "latest",
                            url: "-"
                        },
                        events: [{
                            exceptions: [{
                                errorClass: (t || "").trim(),
                                message: (r || "").trim(),
                                stacktrace: [{
                                    file: "consent-tracking-api.js",
                                    lineNumber: "1",
                                    method: e
                                }],
                                type: "browserjs"
                            }],
                            context: n.context || "general",
                            app: {
                                id: "ConsentTrackingAPI",
                                version: "latest"
                            },
                            metaData: {
                                request: {
                                    shopId: n.shopId,
                                    shopUrl: window.location.href
                                },
                                device: {
                                    userAgent: window.navigator.userAgent
                                },
                                "Additional Notes": n.notes
                            },
                            unhandled: !1
                        }]
                    })
                }(n);
                e.send(t)
            }({
                error: n,
                context: e,
                shopId: z() || (null === (r = window.Shopify) || void 0 === r ? void 0 : r.shop),
                notes: t
            })
        } catch (n) {}
    }

    function X(n) {
        return function() {
            try {
                return n(...arguments)
            } catch (n) {
                throw J(n), n
            }
        }
    }

    function z() {
        try {
            const n = document.getElementById("shopify-features").textContent;
            return JSON.parse(n).shopId
        } catch (n) {
            return null
        }
    }

    function Q() {
        return x.getTrackingConsent()
    }

    function W(n, e) {
        return "object" == typeof n && n.headlessStorefront ? R(n, e) : x.setTrackingConsent(n, e)
    }

    function Z() {
        return x.userCanBeTracked()
    }

    function $() {
        return x.getRegulation()
    }

    function nn() {
        return x.isRegulationEnforced()
    }

    function en() {
        return x.getShopPrefs()
    }

    function tn() {
        return x.shouldShowGDPRBanner()
    }

    function rn() {
        return x.userDataCanBeSold()
    }

    function on(n, e) {
        return x.setCCPAConsent(n, e)
    }

    function cn() {
        return x.getCCPAConsent()
    }

    function sn() {
        return x.shouldShowCCPABanner()
    }

    function un() {
        return x.haveAnalyticsConsent()
    }

    function an() {
        return x.havePreferencesConsent()
    }

    function En() {
        return x.haveFirstPartyMarketingConsent()
    }

    function Cn() {
        return x.haveThirdPartyMarketingConsent()
    }

    function An() {
        return x.shouldShowBanner()
    }

    function ln() {
        return x.saleOfDataRegion()
    }

    function fn() {
        return !0
    }

    function Tn() {
        const n = {},
            e = P();
        for (const t of Object.keys(e)) n[I(t)] = D(e[t]);
        return n
    }

    function Rn() {
        x.getCCPAConsentValue() != r.DECLINED && !1 === x.GPCSignal() && on(!1, () => !1);
        return {
            getTrackingConsent: X(Q),
            setTrackingConsent: X(W),
            userCanBeTracked: X(Z),
            getRegulation: X($),
            isRegulationEnforced: X(nn),
            getShopPrefs: X(en),
            shouldShowGDPRBanner: X(tn),
            userDataCanBeSold: X(rn),
            setCCPAConsent: X(on),
            getCCPAConsent: X(cn),
            shouldShowCCPABanner: X(sn),
            doesMerchantSupportGranularConsent: X(fn),
            analyticsProcessingAllowed: X(un),
            preferencesProcessingAllowed: X(an),
            firstPartyMarketingAllowed: X(En),
            thirdPartyMarketingAllowed: X(Cn),
            currentVisitorConsent: X(Tn),
            shouldShowBanner: X(An),
            saleOfDataRegion: X(ln),
            unstable: {
                analyticsProcessingAllowed: un,
                preferencesProcessingAllowed: an,
                firstPartyMarketingAllowed: En,
                thirdPartyMarketingAllowed: Cn,
                currentVisitorConsent: Tn,
                shouldShowBanner: An,
                saleOfDataRegion: ln
            }
        }
    }

    function Nn() {
        window.Shopify.customerPrivacy = window.Shopify.trackingConsent = Rn(), G(e.CONSENT_TRACKING_API_LOADED)
    }
    window.Shopify = window.Shopify ? window.Shopify : {}, Nn(), n.default = Rn, n.setGlobalObject = Nn, Object.defineProperty(n, "__esModule", {
        value: !0
    })
}({});
//# sourceMappingURL=consent-tracking-api.js.map