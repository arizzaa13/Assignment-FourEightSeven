(() => {
    var e = {
            747: function(e, t, n) {
                var o, i, r;
                ! function(a, s) {
                    "use strict";
                    i = [n(18)], void 0 === (r = "function" == typeof(o = function(e) {
                        var t = /(^|@)\S+:\d+/,
                            n = /^\s*at .*(\S+:\d+|\(native\))/m,
                            o = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(e) {
                                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                                if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                                if (e.stack) return this.parseFFOrSafari(e);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(e) {
                                if (-1 === e.indexOf(":")) return [e];
                                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                                return [t[1], t[2] || void 0, t[3] || void 0]
                            },
                            parseV8OrIE: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !!e.match(n)
                                }), this).map((function(t) {
                                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                    var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                                        o = n.match(/ (\(.+\)$)/);
                                    n = o ? n.replace(o[0], "") : n;
                                    var i = this.extractLocation(o ? o[1] : n),
                                        r = o && n || void 0,
                                        a = ["eval", "<anonymous>"].indexOf(i[0]) > -1 ? void 0 : i[0];
                                    return new e({
                                        functionName: r,
                                        fileName: a,
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseFFOrSafari: function(t) {
                                return t.stack.split("\n").filter((function(e) {
                                    return !e.match(o)
                                }), this).map((function(t) {
                                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                        functionName: t
                                    });
                                    var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        o = t.match(n),
                                        i = o && o[1] ? o[1] : void 0,
                                        r = this.extractLocation(t.replace(n, ""));
                                    return new e({
                                        functionName: i,
                                        fileName: r[0],
                                        lineNumber: r[1],
                                        columnNumber: r[2],
                                        source: t
                                    })
                                }), this)
                            },
                            parseOpera: function(e) {
                                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                            },
                            parseOpera9: function(t) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, o = t.message.split("\n"), i = [], r = 2, a = o.length; r < a; r += 2) {
                                    var s = n.exec(o[r]);
                                    s && i.push(new e({
                                        fileName: s[2],
                                        lineNumber: s[1],
                                        source: o[r]
                                    }))
                                }
                                return i
                            },
                            parseOpera10: function(t) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, o = t.stacktrace.split("\n"), i = [], r = 0, a = o.length; r < a; r += 2) {
                                    var s = n.exec(o[r]);
                                    s && i.push(new e({
                                        functionName: s[3] || void 0,
                                        fileName: s[2],
                                        lineNumber: s[1],
                                        source: o[r]
                                    }))
                                }
                                return i
                            },
                            parseOpera11: function(n) {
                                return n.stack.split("\n").filter((function(e) {
                                    return !!e.match(t) && !e.match(/^Error created at/)
                                }), this).map((function(t) {
                                    var n, o = t.split("@"),
                                        i = this.extractLocation(o.pop()),
                                        r = o.shift() || "",
                                        a = r.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    r.match(/\(([^)]*)\)/) && (n = r.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                    return new e({
                                        functionName: a,
                                        args: s,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: t
                                    })
                                }), this)
                            }
                        }
                    }) ? o.apply(t, i) : o) || (e.exports = r)
                }()
            },
            18: function(e, t) {
                var n, o, i;
                ! function(r, a) {
                    "use strict";
                    o = [], void 0 === (i = "function" == typeof(n = function() {
                        function e(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }

                        function t(e) {
                            return function() {
                                return this[e]
                            }
                        }
                        var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            o = ["columnNumber", "lineNumber"],
                            i = ["fileName", "functionName", "source"],
                            r = n.concat(o, i, ["args"], ["evalOrigin"]);

                        function a(t) {
                            if (t)
                                for (var n = 0; n < r.length; n++) void 0 !== t[r[n]] && this["set" + e(r[n])](t[r[n]])
                        }
                        a.prototype = {
                            getArgs: function() {
                                return this.args
                            },
                            setArgs: function(e) {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                                this.args = e
                            },
                            getEvalOrigin: function() {
                                return this.evalOrigin
                            },
                            setEvalOrigin: function(e) {
                                if (e instanceof a) this.evalOrigin = e;
                                else {
                                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new a(e)
                                }
                            },
                            toString: function() {
                                var e = this.getFileName() || "",
                                    t = this.getLineNumber() || "",
                                    n = this.getColumnNumber() || "",
                                    o = this.getFunctionName() || "";
                                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + n + ")" : "[eval]:" + t + ":" + n : o ? o + " (" + e + ":" + t + ":" + n + ")" : e + ":" + t + ":" + n
                            }
                        }, a.fromString = function(e) {
                            var t = e.indexOf("("),
                                n = e.lastIndexOf(")"),
                                o = e.substring(0, t),
                                i = e.substring(t + 1, n).split(","),
                                r = e.substring(n + 1);
                            if (0 === r.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(r, ""),
                                c = s[1],
                                l = s[2],
                                u = s[3];
                            return new a({
                                functionName: o,
                                args: i || void 0,
                                fileName: c,
                                lineNumber: l || void 0,
                                columnNumber: u || void 0
                            })
                        };
                        for (var s = 0; s < n.length; s++) a.prototype["get" + e(n[s])] = t(n[s]), a.prototype["set" + e(n[s])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(n[s]);
                        for (var c = 0; c < o.length; c++) a.prototype["get" + e(o[c])] = t(o[c]), a.prototype["set" + e(o[c])] = function(e) {
                            return function(t) {
                                if (n = t, isNaN(parseFloat(n)) || !isFinite(n)) throw new TypeError(e + " must be a Number");
                                var n;
                                this[e] = Number(t)
                            }
                        }(o[c]);
                        for (var l = 0; l < i.length; l++) a.prototype["get" + e(i[l])] = t(i[l]), a.prototype["set" + e(i[l])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(i[l]);
                        return a
                    }) ? n.apply(t, o) : n) || (e.exports = i)
                }()
            },
            700: function(e, t, n) {
                var o;
                ! function(i, r) {
                    "use strict";
                    var a = "function",
                        s = "undefined",
                        c = "object",
                        l = "string",
                        u = "major",
                        d = "model",
                        f = "name",
                        p = "type",
                        m = "vendor",
                        h = "version",
                        b = "architecture",
                        w = "console",
                        v = "mobile",
                        g = "tablet",
                        y = "smarttv",
                        E = "wearable",
                        _ = "embedded",
                        x = "Amazon",
                        C = "Apple",
                        A = "ASUS",
                        T = "BlackBerry",
                        S = "Browser",
                        k = "Chrome",
                        I = "Firefox",
                        N = "Google",
                        R = "Huawei",
                        O = "LG",
                        P = "Microsoft",
                        D = "Motorola",
                        L = "Opera",
                        M = "Samsung",
                        j = "Sharp",
                        U = "Sony",
                        $ = "Xiaomi",
                        B = "Zebra",
                        F = "Facebook",
                        G = "Chromium OS",
                        K = "Mac OS",
                        V = function(e) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                            return t
                        },
                        q = function(e, t) {
                            return typeof e === l && -1 !== z(t).indexOf(z(e))
                        },
                        z = function(e) {
                            return e.toLowerCase()
                        },
                        H = function(e, t) {
                            if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 350)
                        },
                        Y = function(e, t) {
                            for (var n, o, i, s, l, u, d = 0; d < t.length && !l;) {
                                var f = t[d],
                                    p = t[d + 1];
                                for (n = o = 0; n < f.length && !l && f[n];)
                                    if (l = f[n++].exec(e))
                                        for (i = 0; i < p.length; i++) u = l[++o], typeof(s = p[i]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : r : this[s[0]] = u ? s[1].call(this, u, s[2]) : r : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : r) : this[s] = u || r;
                                d += 2
                            }
                        },
                        X = function(e, t) {
                            for (var n in t)
                                if (typeof t[n] === c && t[n].length > 0) {
                                    for (var o = 0; o < t[n].length; o++)
                                        if (q(t[n][o], e)) return "?" === n ? r : n
                                } else if (q(t[n], e)) return "?" === n ? r : n;
                            return e
                        },
                        W = {
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
                        },
                        J = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [h, [f, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [h, [f, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [f, h],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [h, [f, L + " Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [h, [f, L]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [f, h],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [h, [f, "UC" + S]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                [h, [f, "WeChat(Win) Desktop"]],
                                [/micromessenger\/([\w\.]+)/i],
                                [h, [f, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [h, [f, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [h, [f, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [h, [f, "Yandex"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 Secure " + S], h
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [h, [f, I + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [h, [f, L + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [h, [f, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [h, [f, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [h, [f, L + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [h, [f, "MIUI " + S]],
                                [/fxios\/([-\w\.]+)/i],
                                [h, [f, I]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [f, "360 " + S]
                                ],
                                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                [
                                    [f, /(.+)/, "$1 " + S], h
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [f, /_/g, " "], h
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [f, h],
                                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [f],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [f, F], h
                                ],
                                [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                [f, h],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [h, [f, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [h, [f, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [h, [f, k + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [f, k + " WebView"], h
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [h, [f, "Android " + S]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [f, h],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [h, [f, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [h, f],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [f, [h, X, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [f, h],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [f, "Netscape"], h
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [h, [f, I + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [f, h],
                                [/(cobalt)\/([\w\.]+)/i],
                                [f, [h, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [b, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [b, z]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [b, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [b, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [b, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [b, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [b, /ower/, "", z]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [b, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [b, z]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [d, [m, M],
                                    [p, g]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [d, [m, M],
                                    [p, v]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [d, [m, C],
                                    [p, v]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [d, [m, C],
                                    [p, g]
                                ],
                                [/(macintosh);/i],
                                [d, [m, C]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [d, [m, j],
                                    [p, v]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [d, [m, R],
                                    [p, g]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [d, [m, R],
                                    [p, v]
                                ],
                                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [m, $],
                                    [p, v]
                                ],
                                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [d, /_/g, " "],
                                    [m, $],
                                    [p, g]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [d, [m, "OPPO"],
                                    [p, v]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [d, [m, "Vivo"],
                                    [p, v]
                                ],
                                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                [d, [m, "Realme"],
                                    [p, v]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [d, [m, D],
                                    [p, v]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [d, [m, D],
                                    [p, g]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [d, [m, O],
                                    [p, g]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [d, [m, O],
                                    [p, v]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [d, [m, "Lenovo"],
                                    [p, g]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [d, /_/g, " "],
                                    [m, "Nokia"],
                                    [p, v]
                                ],
                                [/(pixel c)\b/i],
                                [d, [m, N],
                                    [p, g]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [d, [m, N],
                                    [p, v]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [d, [m, U],
                                    [p, v]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [d, "Xperia Tablet"],
                                    [m, U],
                                    [p, g]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [d, [m, "OnePlus"],
                                    [p, v]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [d, [m, x],
                                    [p, g]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [d, /(.+)/g, "Fire Phone $1"],
                                    [m, x],
                                    [p, v]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [d, m, [p, g]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [d, [m, T],
                                    [p, v]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [d, [m, A],
                                    [p, g]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [d, [m, A],
                                    [p, v]
                                ],
                                [/(nexus 9)/i],
                                [d, [m, "HTC"],
                                    [p, g]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [m, [d, /_/g, " "],
                                    [p, v]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [d, [m, "Acer"],
                                    [p, g]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [d, [m, "Meizu"],
                                    [p, v]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [m, d, [p, v]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [m, d, [p, g]],
                                [/(surface duo)/i],
                                [d, [m, P],
                                    [p, g]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [d, [m, "Fairphone"],
                                    [p, v]
                                ],
                                [/(u304aa)/i],
                                [d, [m, "AT&T"],
                                    [p, v]
                                ],
                                [/\bsie-(\w*)/i],
                                [d, [m, "Siemens"],
                                    [p, v]
                                ],
                                [/\b(rct\w+) b/i],
                                [d, [m, "RCA"],
                                    [p, g]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [d, [m, "Dell"],
                                    [p, g]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [d, [m, "Verizon"],
                                    [p, g]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [d, [m, "Barnes & Noble"],
                                    [p, g]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [d, [m, "NuVision"],
                                    [p, g]
                                ],
                                [/\b(k88) b/i],
                                [d, [m, "ZTE"],
                                    [p, g]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [d, [m, "ZTE"],
                                    [p, v]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [d, [m, "Swiss"],
                                    [p, v]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [d, [m, "Swiss"],
                                    [p, g]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [d, [m, "Zeki"],
                                    [p, g]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [m, "Dragon Touch"], d, [p, g]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [d, [m, "Insignia"],
                                    [p, g]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [d, [m, "NextBook"],
                                    [p, g]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [m, "Voice"], d, [p, v]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [m, "LvTel"], d, [p, v]
                                ],
                                [/\b(ph-1) /i],
                                [d, [m, "Essential"],
                                    [p, v]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [d, [m, "Envizen"],
                                    [p, g]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [d, [m, "MachSpeed"],
                                    [p, g]
                                ],
                                [/\btu_(1491) b/i],
                                [d, [m, "Rotor"],
                                    [p, g]
                                ],
                                [/(shield[\w ]+) b/i],
                                [d, [m, "Nvidia"],
                                    [p, g]
                                ],
                                [/(sprint) (\w+)/i],
                                [m, d, [p, v]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [d, /\./g, " "],
                                    [m, P],
                                    [p, v]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [d, [m, B],
                                    [p, g]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [d, [m, B],
                                    [p, v]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [m, [p, y]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [d, /^/, "SmartTV"],
                                    [m, M],
                                    [p, y]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [m, O],
                                    [p, y]
                                ],
                                [/(apple) ?tv/i],
                                [m, [d, C + " TV"],
                                    [p, y]
                                ],
                                [/crkey/i],
                                [
                                    [d, k + "cast"],
                                    [m, N],
                                    [p, y]
                                ],
                                [/droid.+aft(\w+)( bui|\))/i],
                                [d, [m, x],
                                    [p, y]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [d, [m, j],
                                    [p, y]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [d, [m, U],
                                    [p, y]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [d, [m, $],
                                    [p, y]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [m, d, [p, y]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [m, H],
                                    [d, H],
                                    [p, y]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [p, y]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [m, d, [p, w]],
                                [/droid.+; (shield) bui/i],
                                [d, [m, "Nvidia"],
                                    [p, w]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [d, [m, U],
                                    [p, w]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [d, [m, P],
                                    [p, w]
                                ],
                                [/((pebble))app/i],
                                [m, d, [p, E]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [d, [m, C],
                                    [p, E]
                                ],
                                [/droid.+; (glass) \d/i],
                                [d, [m, N],
                                    [p, E]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [d, [m, B],
                                    [p, E]
                                ],
                                [/(quest( 2| pro)?)/i],
                                [d, [m, F],
                                    [p, E]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [m, [p, _]],
                                [/(aeobc)\b/i],
                                [d, [m, x],
                                    [p, _]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                [d, [p, v]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [d, [p, g]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [p, g]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [p, v]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [d, [m, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [h, [f, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [h, [f, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [f, h],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [h, f]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [f, h],
                                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                [f, [h, X, W]],
                                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [f, "Windows"],
                                    [h, X, W]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [h, /_/g, "."],
                                    [f, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [f, K],
                                    [h, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [h, f],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [f, h],
                                [/\(bb(10);/i],
                                [h, [f, T]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [h, [f, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [h, [f, I + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [h, [f, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [h, [f, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [h, [f, k + "cast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [f, G], h
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [f, h],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [f, "Solaris"], h
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [f, h]
                            ]
                        },
                        Z = function(e, t) {
                            if (typeof e === c && (t = e, e = r), !(this instanceof Z)) return new Z(e, t).getResult();
                            var n = typeof i !== s && i.navigator ? i.navigator : r,
                                o = e || (n && n.userAgent ? n.userAgent : ""),
                                w = n && n.userAgentData ? n.userAgentData : r,
                                y = t ? function(e, t) {
                                    var n = {};
                                    for (var o in e) t[o] && t[o].length % 2 == 0 ? n[o] = t[o].concat(e[o]) : n[o] = e[o];
                                    return n
                                }(J, t) : J,
                                E = n && n.userAgent == o;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t[f] = r, t[h] = r, Y.call(t, o, y.browser), t[u] = typeof(e = t[h]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : r, E && n && n.brave && typeof n.brave.isBrave == a && (t[f] = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e[b] = r, Y.call(e, o, y.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[m] = r, e[d] = r, e[p] = r, Y.call(e, o, y.device), E && !e[p] && w && w.mobile && (e[p] = v), E && "Macintosh" == e[d] && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[d] = "iPad", e[p] = g), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[f] = r, e[h] = r, Y.call(e, o, y.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[f] = r, e[h] = r, Y.call(e, o, y.os), E && !e[f] && w && "Unknown" != w.platform && (e[f] = w.platform.replace(/chrome os/i, G).replace(/macos/i, K)), e
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
                                return o
                            }, this.setUA = function(e) {
                                return o = typeof e === l && e.length > 350 ? H(e, 350) : e, this
                            }, this.setUA(o), this
                        };
                    Z.VERSION = "1.0.36", Z.BROWSER = V([f, h, u]), Z.CPU = V([b]), Z.DEVICE = V([d, m, p, w, v, y, g, E, _]), Z.ENGINE = Z.OS = V([f, h]), typeof t !== s ? (e.exports && (t = e.exports = Z), t.UAParser = Z) : n.amdO ? (o = function() {
                        return Z
                    }.call(t, n, t, e)) === r || (e.exports = o) : typeof i !== s && (i.UAParser = Z);
                    var Q = typeof i !== s && (i.jQuery || i.Zepto);
                    if (Q && !Q.ua) {
                        var ee = new Z;
                        Q.ua = ee.getResult(), Q.ua.get = function() {
                            return ee.getUA()
                        }, Q.ua.set = function(e) {
                            ee.setUA(e);
                            var t = ee.getResult();
                            for (var n in t) Q.ua[n] = t[n]
                        }
                    }
                }("object" == typeof window ? window : this)
            }
        },
        t = {};

    function n(o) {
        var i = t[o];
        if (void 0 !== i) return i.exports;
        var r = t[o] = {
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.exports
    }
    n.amdO = {}, (() => {
        "use strict";
        const e = "product_added_to_cart",
            t = "product_removed_from_cart",
            o = "payment_info_submitted";

        function i() {
            return window
        }
        let r, a = "OFF";

        function s(e, t, n) {
            const {
                jQuery: o
            } = i();
            o && o(e).bind ? o(e).bind(t, n) : e.addEventListener && e.addEventListener(t, n)
        }

        function c(e, t) {
            "ON" === a && console && console.warn && console.warn(`[pixel_shop_events_listener] Error in ${e}:  ${t.message}`)
        }

        function l(e) {
            s(window, "load", (() => {
                for (const t of document.forms) e(t)
            }))
        }

        function u(e, t, n) {
            if (t.length !== n.length) throw Error("Payload body and response have different number of items");
            t.forEach(((t, o) => {
                let i = 1;
                try {
                    i = parseInt(n[o].quantity, 10) || 1
                } catch (r) {
                    c("handleBulkItemCartAddResponse", r)
                }
                f(e, t, i)
            }))
        }

        function d(e, t, n, o, r) {
            const a = ((null === (c = null === (l = i()) || void 0 === l ? void 0 : l.ShopifyAnalytics) || void 0 === c ? void 0 : c.meta) || {}).currency,
                s = {
                    id: String(t.id),
                    image: {
                        src: t.image
                    },
                    price: {
                        amount: t.price / ("add" === r ? 100 : 1),
                        currencyCode: a
                    },
                    product: {
                        id: String(t.product_id),
                        title: t.title,
                        vendor: t.vendor,
                        type: t.product_type,
                        untranslatedTitle: t.untranslated_product_title,
                        url: t.url
                    },
                    sku: t.sku,
                    title: t.variant_title,
                    untranslatedTitle: t.untranslated_variant_title
                };
            var c, l;
            e(o, {
                cartLine: {
                    cost: {
                        totalAmount: {
                            amount: s.price.amount * n,
                            currencyCode: a
                        }
                    },
                    merchandise: s,
                    quantity: n
                }
            })
        }

        function f(t, n, o, i = "add") {
            d(t, n, o, e, i)
        }

        function p(e, n) {
            const o = n.items_added,
                i = n.items_removed;
            o.forEach((t => {
                f(e, t, null == t ? void 0 : t.quantity, "change")
            })), i.forEach((n => {
                ! function(e, n, o, i) {
                    d(e, n, o, t, "change")
                }(e, n, null == n ? void 0 : n.quantity)
            }))
        }

        function m(e) {
            if (!e) return 1;
            try {
                return JSON.parse(e).quantity || 1
            } catch (t) {
                if (e instanceof FormData) {
                    if (e.has("quantity")) return Number(e.get("quantity"))
                } else {
                    const t = e.split("&");
                    for (const e of t) {
                        const t = e.split("=");
                        if ("quantity" === t[0]) return Number(t[1])
                    }
                }
            }
            return 1
        }
        class h {
            static handleXhrOpen() {}
            static handleXhrDone(e) {
                try {
                    const t = document.createElement("a");
                    t.href = e.url;
                    const n = t.pathname ? t.pathname : e.url;
                    h.ADD_TO_CART_REGEX.test(n) ? h.parsePayloadResponse(e, (t => {
                        const n = Object.keys(t);
                        if (1 === n.length && "items" === n[0]) {
                            const n = t.items;
                            let i;
                            try {
                                i = JSON.parse(e.body).items
                            } catch (o) {
                                i = function(e, t) {
                                    const n = new Array(t);
                                    for (let o = 0; o < t; o++) n[o] = {};
                                    for (const o of decodeURI(e).split("&")) {
                                        const e = o.split("="),
                                            t = e[0].match(/items\[(\d+)\]\[(\w+)\].*/);
                                        if (t) {
                                            const o = Number(t[1]),
                                                i = t[2];
                                            "quantity" === i ? n[o].quantity = e[1] : "id" === i && (n[o].id = e[1])
                                        }
                                    }
                                    return n
                                }(e.body, n.length)
                            }
                            u(e.publish, n, i)
                        } else f(e.publish, t, m(e.body))
                    })) : h.CHANGE_TO_CART_REGEX.test(n) && h.parsePayloadResponse(e, (t => {
                        p(e.publish, t)
                    }))
                } catch (t) {
                    c("handleXhrDone", t)
                }
            }
            static parseBlobToJson(e, t) {
                const n = new FileReader;
                n.addEventListener("loadend", (() => {
                    t(JSON.parse(String.fromCharCode(...new Uint8Array(n.result))))
                })), n.readAsArrayBuffer(e)
            }
            static parsePayloadResponse(e, t) {
                e.xhr.response instanceof Blob ? h.parseBlobToJson(e.xhr.response, t) : e.xhr.responseText && t(JSON.parse(e.xhr.responseText))
            }
            constructor(e, t, n, o, i) {
                this.oldOnReadyStateChange = void 0, this.xhr = void 0, this.url = void 0, this.method = void 0, this.body = void 0, this.publish = void 0, this.xhr = e, this.url = t, this.method = n, this.body = o, this.publish = i
            }
            onReadyStateChange() {
                this.xhr.readyState === XMLHttpRequest.DONE && h.handleXhrDone({
                    method: this.method,
                    url: this.url,
                    body: this.body,
                    xhr: this.xhr,
                    publish: this.publish
                }), this.oldOnReadyStateChange && this.oldOnReadyStateChange.call(this.xhr, new Event("oldOnReadyStateChange"))
            }
        }

        function b(t, n) {
            ! function(e, t) {
                const n = e.prototype.open,
                    o = e.prototype.send;
                e.prototype.open = function(e, t) {
                    this._url = t, this._method = e, n.apply(this, arguments)
                }, e.prototype.send = function(e) {
                    if (!(e instanceof Document)) {
                        const n = new h(this, this._url, this._method, e || "", t);
                        this.addEventListener ? this.addEventListener("readystatechange", n.onReadyStateChange.bind(n), !1) : (n.oldOnReadyStateChange = this.onreadystatechange, this.onreadystatechange = n.onReadyStateChange)
                    }
                    o.call(this, e)
                }
            }(XMLHttpRequest, t),
            function(e, t) {
                const n = e.fetch;

                function o(e) {
                    c("handleFetchRequest", e)
                }
                "function" == typeof n && (e.fetch = function(...e) {
                    return n.apply(this, Array.prototype.slice.call(e)).then((e => {
                        if (!e.ok) return e;
                        const n = document.createElement("a");
                        n.href = e.url;
                        const i = n.pathname ? n.pathname : e.url;
                        try {
                            if (h.ADD_TO_CART_REGEX.test(i)) {
                                try {
                                    const n = JSON.parse(arguments[1].body);
                                    if (Object.keys(n).includes("items")) return function(e, n) {
                                        e.clone().json().then((e => {
                                            const o = n.items,
                                                i = e.items;
                                            return u(t, i, o), e
                                        })).catch(o)
                                    }(e, n), e
                                } catch (r) {
                                    o(r)
                                }! function(e, n) {
                                    const i = m(n);
                                    e.clone().json().then((e => f(t, e, i))).catch(o)
                                }(e, arguments[1].body)
                            } else h.CHANGE_TO_CART_REGEX.test(i) && function(e) {
                                e.clone().json().then((e => {
                                    p(t, e)
                                })).catch(o)
                            }(e)
                        } catch (r) {
                            o(r)
                        }
                        return e
                    }))
                })
            }(i(), t), l((o => {
                const i = o.getAttribute("action");
                i && i.indexOf("/cart/add") >= 0 && s(o, "submit", (o => {
                    ! function(t, n, o) {
                        const i = n || window.event;
                        if (i.defaultPrevented || i.isDefaultPrevented && i.isDefaultPrevented()) return;
                        const r = i.currentTarget || i.srcElement;
                        if (r && r instanceof Element && (r.getAttribute("action") || r.getAttribute("href"))) try {
                            const n = function(e) {
                                let t;
                                const n = e.querySelector('[name="id"]');
                                return n instanceof HTMLSelectElement && n.options ? t = n.options[n.selectedIndex] : (n instanceof HTMLOptionElement || n instanceof HTMLInputElement) && (t = n), t
                            }(r);
                            if (!n) return;
                            const i = n.value,
                                a = function(e) {
                                    const t = e.querySelector('[name="quantity"]');
                                    return t instanceof HTMLInputElement ? Number(t.value) : 1
                                }(r),
                                s = function(e, t) {
                                    var n;
                                    let o;
                                    const i = null === (n = t.productVariants) || void 0 === n ? void 0 : n.filter((t => t.id === e));
                                    if (!i || !i.length) throw new Error("Product variant not found");
                                    return o = { ...i[0]
                                    }, o
                                }(i, o),
                                c = {
                                    cost: {
                                        totalAmount: {
                                            amount: s.price.amount * a,
                                            currencyCode: s.price.currencyCode
                                        }
                                    },
                                    merchandise: s,
                                    quantity: a
                                };
                            t(e, {
                                cartLine: c
                            })
                        } catch (a) {
                            c("handleSubmitCartAdd", a)
                        }
                    }(t, o, n)
                }))
            }))
        }

        function w(e, t, n) {
            var i;
            null != n && n.logLevel && (i = n.logLevel, a = i), b(e, t),
                function(e, t) {
                    l((n => {
                        const i = n.querySelector('[name="previous_step"]');
                        i && i instanceof HTMLInputElement && "payment_method" === i.value && s(document.body, "submit", (n => {
                            ! function(e, t, n) {
                                const i = t || window.event,
                                    r = i.target || i.srcElement;
                                if (r && r instanceof HTMLFormElement && r.getAttribute("action") && null !== r.getAttribute("data-payment-form")) try {
                                    const t = n.checkout;
                                    if (!t) throw new Error("Checkout data not found");
                                    e(o, {
                                        checkout: t
                                    })
                                } catch (a) {
                                    c("handleSubmitToPaymentAdd", a)
                                }
                            }(e, n, t)
                        }))
                    }))
                }(e, t)
        }
        var v;
        h.ADD_TO_CART_REGEX = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/add(?:\.js|\.json)?$/, h.CHANGE_TO_CART_REGEX = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/cart\/change(?:\.js|\.json)?$/, (v = r || (r = {})).TRACKING_ACCEPTED = "trackingConsentAccepted", v.TRACKING_DECLINED = "trackingConsentDeclined", v.FIRST_PARTY_MARKETING_ACCEPTED = "firstPartyMarketingConsentAccepted", v.THIRD_PARTY_MARKETING_ACCEPTED = "thirdPartyMarketingConsentAccepted", v.ANALYTICS_ACCEPTED = "analyticsConsentAccepted", v.PREFERENCES_ACCEPTED = "preferencesConsentAccepted", v.FIRST_PARTY_MARKETING_DECLINED = "firstPartyMarketingConsentDeclined", v.THIRD_PARTY_MARKETING_DECLINED = "thirdPartyMarketingConsentDeclined", v.ANALYTICS_DECLINED = "analyticsConsentDeclined", v.PREFERENCES_DECLINED = "preferencesConsentDeclined", v.CONSENT_COLLECTED = "visitorConsentCollected", v.CONSENT_TRACKING_API_LOADED = "consentTrackingApiLoaded";
        const g = "2.1";
        let y, E, _, x, C, A, T, S;
        var k, I, N, R, O;
        ! function(e) {
            e.ACCEPTED = "yes", e.DECLINED = "no", e.NO_INTERACTION = "no_interaction", e.NO_VALUE = ""
        }(y || (y = {})), (O = E || (E = {})).NO_VALUE = "", O.ACCEPTED = "1", O.DECLINED = "0", (R = _ || (_ = {})).GDPR = "GDPR", R.CCPA = "CCPA", R.NO_VALUE = "",
            function(e) {
                e.PREFERENCES = "p", e.ANALYTICS = "a", e.FIRST_PARTY_MARKETING = "m", e.THIRD_PARTY_MARKETING = "t"
            }(x || (x = {})), (N = C || (C = {})).GDPR = "GDPR", N.GDPR_BLOCK_ALL = "GDPR_BLOCK_ALL", N.CCPA = "CCPA", (I = A || (A = {})).MARKETING = "m", I.ANALYTICS = "a", I.PREFERENCES = "p", I.SALE_OF_DATA = "s", (k = T || (T = {})).MARKETING = "marketing", k.ANALYTICS = "analytics", k.PREFERENCES = "preferences", k.SALE_OF_DATA = "sale_of_data", k.EMAIL = "email",
            function(e) {
                e.HEADLESS_STOREFRONT = "headlessStorefront", e.ROOT_DOMAIN = "rootDomain", e.CHECKOUT_ROOT_DOMAIN = "checkoutRootDomain", e.STOREFRONT_ROOT_DOMAIN = "storefrontRootDomain", e.STOREFRONT_ACCESS_TOKEN = "storefrontAccessToken"
            }(S || (S = {}));
        const P = ["lim", "v", "con", "reg"];
        let D = {};

        function L(e, t = null) {
            return e in D || function(e) {
                const t = document.cookie ? document.cookie.split("; ") : [];
                D[e] = void 0;
                for (let n = 0; n < t.length; n++) {
                    const [o, i] = t[n].split("=");
                    if (e === decodeURIComponent(o)) return D[e] = JSON.parse(decodeURIComponent(i)), D[e]
                }
            }(e) || function(e, t) {
                if (null === t) return;
                D[e] = void 0;
                let n, o, i = document.head.querySelector(`meta[name=${t}]`);
                if (i instanceof HTMLMetaElement) {
                    n = i.content;
                    try {
                        const e = n.replace(/1/g, "true").replace(/0/g, "false").split(";").map((e => e.trim())).map((e => e.split("=").map((e => e.trim()))));
                        if (o = Object.fromEntries(e), o.purposes) {
                            const e = o.purposes.split(/(true|false)/).filter(Boolean),
                                t = {};
                            for (let n = 0; n < e.length; n += 2) t[e[n]] = JSON.parse(e[n + 1]);
                            o.purposes = t
                        }
                        for (let [t, n] of Object.entries(o)) "true" === n && (o[t] = !0), "false" === n && (o[t] = !1)
                    } catch (r) {
                        return
                    }
                    D[e] = o
                }
            }(e, t), D[e]
        }

        function M(e) {
            return e === encodeURIComponent(decodeURIComponent(e))
        }

        function j(e, t, n, o) {
            if (!M(o)) throw new TypeError("Cookie value is not correctly URI encoded.");
            if (!M(e)) throw new TypeError("Cookie name is not correctly URI encoded.");
            let i = `${e}=${o}`;
            i += "; path=/", i += `; domain=${t}`, i += `; expires=${new Date((new Date).getTime()+n).toUTCString()}`, i += "; secure", document.cookie = i, D[e] = JSON.parse(decodeURIComponent(o))
        }

        function U() {
            D = {}
        }

        function $(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function B(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $(Object(n), !0).forEach((function(t) {
                    F(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function F(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        const G = "_tracking_consent";

        function K() {
            try {
                let e = function() {
                    const e = L(G);
                    if (void 0 !== e && (t = e).v === g && function(e, t) {
                            const n = t.slice().sort();
                            return e.length === t.length && e.slice().sort().every(((e, t) => e === n[t]))
                        }(Object.keys(t).filter((e => "region" !== e)), P)) return e;
                    var t
                }();
                if (!e) return;
                return e
            } catch (e) {
                return
            }
        }

        function V() {
            return {
                m: H(A.MARKETING),
                a: H(A.ANALYTICS),
                p: H(A.PREFERENCES),
                s: H(A.SALE_OF_DATA)
            }
        }

        function q() {
            return V()[A.SALE_OF_DATA]
        }

        function z(e = null) {
            return null === e && (e = K()), void 0 === e
        }

        function H(e) {
            const t = K();
            if (!t) return E.NO_VALUE;
            const n = t.con.CMP;
            return n ? n[e] : E.NO_VALUE
        }
        const Y = "_cmp_a",
            X = "shopify-cmp-metadata";

        function W() {
            return L(Y, X)
        }

        function J(e) {
            const t = W();
            if (!t) return !0;
            const n = t.purposes[e];
            return "boolean" != typeof n || n
        }

        function Z() {
            return J(x.PREFERENCES)
        }

        function Q() {
            return J(x.ANALYTICS)
        }

        function ee() {
            return J(x.FIRST_PARTY_MARKETING)
        }

        function te() {
            return J(x.THIRD_PARTY_MARKETING)
        }
        const ne = {
            "": [],
            GDPR: [C.GDPR, C.GDPR_BLOCK_ALL],
            CCPA: [C.CCPA]
        };

        function oe(e) {
            void 0 !== e.consent ? re({
                [x.PREFERENCES]: e.consent,
                [x.ANALYTICS]: e.consent,
                [x.FIRST_PARTY_MARKETING]: e.consent,
                [x.THIRD_PARTY_MARKETING]: e.consent
            }) : void 0 !== e.granular_consent && re({
                [x.PREFERENCES]: Z(),
                [x.ANALYTICS]: Q(),
                [x.FIRST_PARTY_MARKETING]: ee(),
                [x.THIRD_PARTY_MARKETING]: te()
            })
        }

        function ie(e, t) {
            document.dispatchEvent(new CustomEvent(e, {
                detail: t || {}
            }))
        }

        function re(e) {
            const t = e[x.FIRST_PARTY_MARKETING],
                n = e[x.THIRD_PARTY_MARKETING],
                o = e[x.ANALYTICS],
                i = e[x.PREFERENCES];
            !0 === t ? ie(r.FIRST_PARTY_MARKETING_ACCEPTED) : !1 === t && ie(r.FIRST_PARTY_MARKETING_DECLINED), !0 === n ? ie(r.THIRD_PARTY_MARKETING_ACCEPTED) : !1 === n && ie(r.THIRD_PARTY_MARKETING_DECLINED), !0 === o ? ie(r.ANALYTICS_ACCEPTED) : !1 === o && ie(r.ANALYTICS_DECLINED), !0 === i ? ie(r.PREFERENCES_ACCEPTED) : !1 === i && ie(r.PREFERENCES_DECLINED);
            const a = function(e) {
                return {
                    firstPartyMarketingAllowed: e[x.FIRST_PARTY_MARKETING],
                    thirdPartyMarketingAllowed: e[x.THIRD_PARTY_MARKETING],
                    analyticsAllowed: e[x.ANALYTICS],
                    preferencesAllowed: e[x.PREFERENCES]
                }
            }(e);
            ie(r.CONSENT_COLLECTED, a);
            const s = [o, i, t, n];
            s.every((e => !0 === e)) && ie(r.TRACKING_ACCEPTED), s.every((e => !1 === e)) && ie(r.TRACKING_DECLINED)
        }

        function ae(e, t) {
            const n = new XMLHttpRequest,
                o = JSON.stringify(e);
            n.open("POST", "/set_tracking_consent.json", !0), n.setRequestHeader("Content-Type", "application/json"), n.onreadystatechange = function() {
                if (4 !== n.readyState) return;
                U();
                const o = function(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return {
                            error: "Unknown error"
                        }
                    }
                }(n.responseText);
                var i;
                0 === (i = n.status) || 200 >= i && i < 400 ? (oe(e), t(null, o)) : t(o)
            }, n.send(o)
        }

        function se(e) {
            return {
                query: `query { consentManagement { cookies(visitorConsent: ${JSON.stringify({marketing:e.marketing,analytics:e.analytics,preferences:e.preferences,saleOfData:e.sale_of_data}).replace(/"/g,"")}) { answersCookie trackingConsentCookie } } }`,
                variables: {}
            }
        }

        function ce(e, t) {
            const n = e.granular_consent,
                o = {
                    headers: {
                        "content-type": "application/json",
                        "x-shopify-storefront-access-token": n.storefrontAccessToken
                    },
                    body: JSON.stringify(se(n)),
                    method: "POST"
                };
            fetch(`https://${n.checkoutRootDomain}/api/unstable/graphql.json`, o).then((e => {
                if (e.ok) return e.json();
                throw new Error("Server error")
            })).then((o => {
                const i = 31536e6,
                    r = "." + (n.checkoutRootDomain || window.location.hostname),
                    a = "." + (n.storefrontRootDomain || window.location.hostname),
                    s = o.data.consentManagement.cookies.trackingConsentCookie,
                    c = o.data.consentManagement.cookies.answersCookie;
                j(G, r, i, s), j(Y, r, i, c), a !== r && (j(G, a, i, s), j(Y, a, i, c)), oe(e), t(null, o)
            })).catch((e => {
                t({
                    error: "Error while setting headless consent: " + e.message
                })
            }))
        }

        function le() {
            if (z()) return y.NO_VALUE;
            const e = V();
            return e[A.MARKETING] === E.ACCEPTED && e[A.ANALYTICS] === E.ACCEPTED ? y.ACCEPTED : e[A.MARKETING] === E.DECLINED || e[A.ANALYTICS] === E.DECLINED ? y.DECLINED : y.NO_INTERACTION
        }

        function ue() {
            const e = function() {
                const e = K();
                return z(e) ? _.NO_VALUE : e.reg
            }();
            return e in _ ? e : _.NO_VALUE
        }

        function de() {
            return function() {
                const e = K();
                return z(e) ? {
                    limit: []
                } : {
                    limit: e.lim
                }
            }()
        }

        function fe(e) {
            return we(C.GDPR_BLOCK_ALL) && e ? me() ? document.referrer : "" : null
        }

        function pe(e) {
            return we(C.GDPR_BLOCK_ALL) && e ? me() ? window.location.pathname + window.location.search : "/" : null
        }

        function me() {
            if ("" === document.referrer) return !0;
            const e = document.createElement("a");
            return e.href = document.referrer, window.location.hostname != e.hostname
        }

        function he() {
            const e = ue();
            if (e === _.NO_VALUE) return !1;
            const t = de();
            return 0 !== t.limit.length && t.limit.some((t => function(e, t) {
                return ne[e].includes(t)
            }(e, t)))
        }

        function be() {
            return !!z() || function() {
                if (!we(C.GDPR) && !we(C.GDPR_BLOCK_ALL)) return !0;
                const e = V();
                return e[A.MARKETING] === E.ACCEPTED && e[A.ANALYTICS] === E.ACCEPTED || e[A.MARKETING] !== E.DECLINED && e[A.ANALYTICS] !== E.DECLINED && ue() !== _.GDPR
            }()
        }

        function we(e) {
            return de().limit.includes(e)
        }

        function ve() {
            return ue() !== _.CCPA ? null : we(C.CCPA) ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
        }

        function ge() {
            return !1 === ve() ? y.DECLINED : (e = q(), z() ? y.NO_VALUE : e === E.NO_VALUE ? y.NO_INTERACTION : function(e) {
                switch (e) {
                    case E.ACCEPTED:
                        return y.ACCEPTED;
                    case E.DECLINED:
                        return y.DECLINED;
                    default:
                        return y.NO_VALUE
                }
            }(e));
            var e
        }
        const ye = {
            getTrackingConsent: le,
            setTrackingConsent: function(e, t) {
                if (z() && console.warn("Shop is not configured to block privacy regulation in online store settings."), function(e) {
                        if ("boolean" != typeof e && "object" != typeof e) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                        if ("object" == typeof e) {
                            const t = Object.keys(e);
                            if (0 === t.length) throw TypeError("The submitted consent object is empty.");
                            const n = [T.MARKETING, T.ANALYTICS, T.PREFERENCES, T.SALE_OF_DATA, T.EMAIL, S.ROOT_DOMAIN, S.CHECKOUT_ROOT_DOMAIN, S.STOREFRONT_ROOT_DOMAIN, S.STOREFRONT_ACCESS_TOKEN, S.HEADLESS_STOREFRONT];
                            for (const e of t)
                                if (!n.includes(e)) throw TypeError(`The submitted consent object should only contain the following keys: ${n.join(", ")}. Extraneous key: ${e}.`)
                        }
                    }(e), "function" != typeof t) throw TypeError("setTrackingConsent must be called with a callback function");
                if ("object" == typeof e) {
                    const n = fe(e.analytics),
                        o = pe(e.analytics);
                    return (e.storefrontAccessToken ? ce : ae)(B(B({
                        granular_consent: e
                    }, null !== n && {
                        referrer: n
                    }), null !== o && {
                        landing_page: o
                    }), t)
                } {
                    const n = fe(e),
                        o = pe(e);
                    return ae(B(B({
                        consent: e
                    }, null !== n && {
                        referrer: n
                    }), null !== o && {
                        landing_page: o
                    }), t)
                }
            },
            userCanBeTracked: be,
            getRegulation: ue,
            isRegulationEnforced: he,
            getShopPrefs: de,
            shouldShowGDPRBanner: function() {
                return ue() === _.GDPR && he() && le() === y.NO_INTERACTION
            },
            userDataCanBeSold: function() {
                const e = ve(),
                    t = !we(C.CCPA) || q() !== E.DECLINED;
                return null !== e && !1 !== t ? e : !!z() || !1 !== be() && t
            },
            setCCPAConsent: function(e, t) {
                if ("boolean" != typeof e) throw TypeError("setCCPAConsent must be called with a boolean consent value");
                if ("function" != typeof t) throw TypeError("setCCPAConsent must be called with a callback function");
                return ae({
                    ccpa_consent: e
                }, t)
            },
            getCCPAConsent: ge,
            GPCSignal: ve,
            shouldShowCCPABanner: function() {
                return ue() === _.CCPA && de().limit.includes(C.CCPA) && ge() === y.NO_INTERACTION
            },
            haveAnalyticsConsent: function() {
                return Q()
            },
            havePreferencesConsent: function() {
                return Z()
            },
            haveFirstPartyMarketingConsent: function() {
                return ee()
            },
            haveThirdPartyMarketingConsent: function() {
                return te()
            },
            getCCPAConsentValue: q,
            merchantEnforcingRegulationLimit: we,
            shouldShowBanner: function() {
                return function() {
                    const e = W();
                    return !!e && "boolean" == typeof e.display_banner && e.display_banner
                }() && H(A.ANALYTICS) === E.NO_VALUE && H(A.MARKETING) === E.NO_VALUE && H(A.PREFERENCES) === E.NO_VALUE
            },
            saleOfDataRegion: function() {
                return function() {
                    const e = W();
                    return e && e.sale_of_data_region || !1
                }()
            }
        };

        function Ee() {
            return ye.userCanBeTracked()
        }
        const _e = "sh",
            xe = "shu",
            Ce = "wpm",
            Ae = "trekkie";
        let Te, Se;

        function ke(e) {
            return `${e||_e}-${function(){const e="xxxx-4xxx-xxxx-xxxxxxxxxxxx";let t="";try{const n=window.crypto,o=new Uint16Array(31);n.getRandomValues(o);let i=0;t=e.replace(/[x]/g,(e=>{const t=o[i]%16;return i++,("x"===e?t:3&t|8).toString(16)})).toUpperCase()}catch(n){t=e.replace(/[x]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})).toUpperCase()}return`
            $ {
                function() {
                    let e = 0,
                        t = 0;
                    e = (new Date).getTime() >>> 0;
                    try {
                        t = performance.now() >>> 0
                    } catch (n) {
                        t = 0
                    }
                    return Math.abs(e + t).toString(16).toLowerCase().padStart(8, "0")
                }()
            } - $ {
                t
            }
            `}()}`
        }

        function Ie() {
            const e = window;
            e.Shopify = e.Shopify || {}, e.Shopify.evids || (Te = {
                page_viewed: {},
                collection_viewed: {},
                product_viewed: {},
                product_variant_viewed: {},
                search_submitted: {},
                product_added_to_cart: {},
                checkout_started: {},
                checkout_completed: {},
                payment_info_submitted: {},
                session_started: {},
                checkout_contact_step_started: {},
                checkout_contact_info_submitted: {},
                checkout_address_info_submitted: {},
                checkout_shipping_step_started: {},
                checkout_shipping_info_submitted: {},
                checkout_payment_step_started: {}
            }, Se = {
                wpm: {},
                trekkie: {}
            }, e.Shopify.evids = (e, t) => function(e, t) {
                if (!Te[e] || (null == t ? void 0 : t.analyticsFramework) !== Ae && (null == t ? void 0 : t.analyticsFramework) !== Ce) return ke(xe);
                const n = "string" == typeof(o = t.cacheKey) && o ? o : "default";
                var o;
                const i = function(e, t, n) {
                    const o = Se[t];
                    return void 0 === o[e] && (o[e] = {}), void 0 === o[e][n] ? o[e][n] = 0 : o[e][n] += 1, o[e][n]
                }(e, t.analyticsFramework, n);
                return function(e, t, n) {
                    const o = Te[e];
                    if (void 0 === o[n]) {
                        const e = ke();
                        o[n] = [e]
                    } else if (void 0 === o[n][t]) {
                        const e = ke();
                        o[n].push(e)
                    }
                    return o[n][t]
                }(e, i, n)
            }(e, t))
        }
        const Ne = new Set;
        var Re = {
            setBetaFlags: function(e) {
                (e || []).forEach((e => Ne.add(e)))
            },
            isEnabled: function(e) {
                return Ne.has(e)
            },
            resetBetas: function() {
                Ne.clear()
            }
        };
        const Oe = "production",
            Pe = "0.0.400",
            De = "modern",
            Le = "8cdbea80w54e9ed17p4eb8965em48d1f985",
            Me = "b8cdbea80w54e9ed17p4eb8965em48d1f985m.js",
            je = "loggedConversion2",
            Ue = {
                test: "edge_test_click/1.0",
                load: "web_pixels_manager_load/3.1",
                init: "web_pixels_manager_init/3.2",
                register: "web_pixels_manager_pixel_register/3.6",
                subscriberEventEmit: "web_pixels_manager_subscriber_event_emit/3.4",
                eventPublish: "web_pixels_manager_event_publish/1.6",
                consentAccepted: "web_pixels_manager_consent_accepted/1.2",
                unload: "web_pixels_manager_unload/1.2",
                visitor: "web_pixels_manager_visitor/1.0"
            };

        function $e(e, t) {
            return {
                schemaId: Ue[e],
                payload: t
            }
        }
        var Be = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        let Fe;
        const Ge = new Uint8Array(16);

        function Ke() {
            if (!Fe && (Fe = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Fe)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return Fe(Ge)
        }
        const Ve = [];
        for (let n = 0; n < 256; ++n) Ve.push((n + 256).toString(16).slice(1));
        var qe = function(e, t, n) {
            if (Be.randomUUID && !t && !e) return Be.randomUUID();
            const o = (e = e || {}).random || (e.rng || Ke)();
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = o[e];
                return t
            }
            return function(e, t = 0) {
                return Ve[e[t + 0]] + Ve[e[t + 1]] + Ve[e[t + 2]] + Ve[e[t + 3]] + "-" + Ve[e[t + 4]] + Ve[e[t + 5]] + "-" + Ve[e[t + 6]] + Ve[e[t + 7]] + "-" + Ve[e[t + 8]] + Ve[e[t + 9]] + "-" + Ve[e[t + 10]] + Ve[e[t + 11]] + Ve[e[t + 12]] + Ve[e[t + 13]] + Ve[e[t + 14]] + Ve[e[t + 15]]
            }(o)
        };
        let ze;

        function He() {
            return ze || (ze = function() {
                let e;
                try {
                    var t, n;
                    e = null !== (t = window.Shopify) && void 0 !== t && t.evids ? null === (n = window.Shopify) || void 0 === n ? void 0 : n.evids("session_started", {
                        analyticsFramework: "wpm"
                    }) : qe()
                } catch (o) {
                    e = qe()
                }
                return e
            }()), ze
        }

        function Ye(e) {
            return e.replace(/\/$/, "")
        }
        const Xe = {},
            We = {
                "pixel:register": {
                    start: {
                        name: "pixel:register:started",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    },
                    end: {
                        name: "pixel:register:completed",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    }
                },
                "page:session": {
                    start: {
                        name: "start",
                        params: Xe
                    },
                    end: {
                        name: "page:unload",
                        params: Xe
                    }
                },
                completed: {
                    start: {
                        name: "start",
                        params: Xe
                    },
                    end: {
                        name: "pixels:resolved",
                        params: Xe
                    }
                }
            };

        function Je(e, t = Xe) {
            const n = Ze(e, "end", t),
                o = function(e, t) {
                    try {
                        const n = Qe(e, "start", t),
                            o = Qe(e, "end", t),
                            i = function(e, t) {
                                return et(e, t)
                            }(e, t),
                            r = self.performance.measure(i, n, o);
                        return { ...r,
                            duration: Math.round(r.duration),
                            startTime: Math.round(r.startTime)
                        }
                    } catch (n) {
                        return null
                    }
                }(e, t);
            return {
                mark: n,
                measurement: o
            }
        }

        function Ze(e, t, n) {
            try {
                const o = Qe(e, t, n);
                return self.performance.mark(o), {
                    name: o,
                    params: n
                }
            } catch (o) {
                return {
                    name: null,
                    params: n
                }
            }
        }

        function Qe(e, t, n) {
            return et(We[e][t].name, n)
        }

        function et(e, t) {
            const n = ["wpm", e];
            return t && Object.keys(t).forEach((e => {
                n.push(t[e])
            })), n.join(":")
        }

        function tt(e) {
            const t = {};
            for (const n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    const o = n.replace(/[A-Z]/g, (e => `_${e}`)).toLowerCase(),
                        i = e[n];
                    t[o] = null !== i && "object" == typeof i ? tt(i) : i
                }
            return t
        }
        var nt = n(747);
        class ot extends Error {
            constructor(...e) {
                super(...e), this.message = "Excessive Stacktrace: May indicate infinite loop forming"
            }
        }
        var it = n(700);
        class rt extends Error {
            constructor(...e) {
                super(...e), Error.captureStackTrace && Error.captureStackTrace(this, rt)
            }
        }
        const at = {
                production: "https://notify.bugsnag.com",
                test: "https://localhost"
            },
            st = {
                severity: "error",
                context: "",
                unhandled: !0,
                library: "browser"
            },
            ct = {
                notify: (e, t) => {
                    try {
                        var n;
                        if (null != t && null !== (n = t.options) && void 0 !== n && n.sampleRate && ! function(e) {
                                if (e <= 0 || e > 100) throw new Error("Invalid sampling percent");
                                return 100 * Math.random() <= e
                            }(t.options.sampleRate)) return;
                        const a = { ...st,
                            ...t
                        };
                        let s = {
                            errorClass: null == e ? void 0 : e.name,
                            message: null == e ? void 0 : e.message,
                            stacktrace: [],
                            type: "browserjs"
                        };
                        try {
                            s = function(e) {
                                if ("string" != typeof((null == (t = e) ? void 0 : t.stack) || (null == t ? void 0 : t.stacktrace) || (null == t ? void 0 : t["opera#sourceloc"])) || t.stack === `${t.name}: ${t.message}`) throw new Error("Error incompatible with error-stack-parser");
                                var t;
                                const n = nt.parse(e).reduce(((e, t) => {
                                    const n = function({
                                        functionName: e,
                                        lineNumber: t,
                                        columnNumber: n
                                    }) {
                                        const o = /^global code$/i.test((i = e) || "") ? "global code" : i;
                                        var i;
                                        return {
                                            file: `https://cdn.shopify.com/cdn/wpm/${Me}`,
                                            method: o,
                                            lineNumber: t,
                                            columnNumber: n
                                        }
                                    }(t);
                                    try {
                                        return "{}" === JSON.stringify(n) ? e : e.concat(n)
                                    } catch (o) {
                                        return e
                                    }
                                }), []);
                                return {
                                    errorClass: null == e ? void 0 : e.name,
                                    message: null == e ? void 0 : e.message,
                                    stacktrace: n,
                                    type: "browserjs"
                                }
                            }(e)
                        } catch (i) {
                            try {
                                s = function(e, t) {
                                    let n = "";
                                    const o = {
                                        lineNumber: "1",
                                        columnNumber: "1",
                                        method: t.context,
                                        file: `https://cdn.shopify.com/cdn/wpm/${Me}`
                                    };
                                    if (e.stackTrace || e.stack || e.description) {
                                        n = e.stack.split("\n")[0];
                                        const t = e.stack.match(/([0-9]+):([0-9]+)/);
                                        if (t && t.length > 2 && (o.lineNumber = t[1], o.columnNumber = t[2], parseInt(o.lineNumber, 10) > 1e5)) throw new ot
                                    }
                                    return {
                                        errorClass: (null == e ? void 0 : e.name) || n,
                                        message: (null == e ? void 0 : e.message) || n,
                                        stacktrace: [o],
                                        type: "browserjs"
                                    }
                                }(e, a)
                            } catch (r) {
                                if (r instanceof ot) return
                            }
                        }
                        const c = function(t, {
                                userAgent: n,
                                context: o,
                                severity: i,
                                unhandled: r,
                                library: a,
                                hashVersionSandbox: s,
                                sandboxUrl: c,
                                pixelId: l,
                                pixelType: u,
                                runtimeContext: d,
                                shopId: f,
                                initConfig: p,
                                notes: m
                            }) {
                                var h, b;
                                const {
                                    device: w,
                                    os: v,
                                    browser: g,
                                    engine: y
                                } = function(t) {
                                    try {
                                        return new it.UAParser(t).getResult()
                                    } catch (e) {
                                        return {
                                            ua: "",
                                            browser: {
                                                name: "",
                                                version: "",
                                                major: ""
                                            },
                                            engine: {
                                                name: "",
                                                version: ""
                                            },
                                            os: {
                                                name: "",
                                                version: ""
                                            },
                                            device: {
                                                model: "",
                                                type: "",
                                                vendor: ""
                                            },
                                            cpu: {
                                                architecture: ""
                                            }
                                        }
                                    }
                                }(n || (null === (h = self.navigator) || void 0 === h ? void 0 : h.userAgent));
                                return {
                                    payloadVersion: 5,
                                    notifier: {
                                        name: "web-pixel-manager",
                                        version: Pe,
                                        url: "-"
                                    },
                                    events: [{
                                        exceptions: [t],
                                        context: o,
                                        severity: i,
                                        unhandled: r,
                                        app: {
                                            version: Pe
                                        },
                                        device: {
                                            manufacturer: w.vendor,
                                            model: w.model,
                                            osName: v.name,
                                            osVersion: v.version,
                                            browserName: g.name,
                                            browserVersion: g.version
                                        },
                                        metaData: {
                                            app: {
                                                library: a,
                                                browserTarget: De,
                                                env: Oe,
                                                hashVersion: Le,
                                                hashVersionSandbox: s || "N/A",
                                                sandboxUrl: c || "N/A"
                                            },
                                            device: {
                                                userAgent: n || (null === (b = self.navigator) || void 0 === b ? void 0 : b.userAgent),
                                                renderingEngineName: y.name,
                                                renderingEngineVersion: y.version
                                            },
                                            request: {
                                                shopId: f,
                                                shopUrl: self.location.href,
                                                pixelId: l,
                                                pixelType: u,
                                                runtimeContext: d
                                            },
                                            "Additional Notes": {
                                                initConfig: JSON.stringify(p),
                                                notes: m
                                            }
                                        }
                                    }]
                                }
                            }(s, a),
                            l = at[Oe];
                        var o;
                        if (!l) return void(null === (o = console) || void 0 === o || o.log(`[${Oe}]`, "Bugsnag notify:", c));
                        fetch(l, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Bugsnag-Api-Key": "bcbc9f6762da195561967577c2d74ff8",
                                "Bugsnag-Payload-Version": "5"
                            },
                            body: JSON.stringify(c)
                        }).catch((() => {}))
                    } catch (a) {}
                }
            };
        let lt = "";

        function ut(e = "") {
            lt = Ye(e)
        }
        const dt = "/unstable/produce_batch",
            ft = 500;
        let pt = "wellKnown";
        const mt = new Array;
        let ht;

        function bt(e, t = !1) {
            const n = {
                schema_id: e.schemaId,
                payload: tt(e.payload),
                metadata: {
                    event_created_at_ms: gt()
                }
            };
            mt.push(n), t ? vt() : void 0 === ht && (ht = setTimeout(vt, ft))
        }

        function wt(e, t, n = !1) {
            bt($e(e, t), n)
        }

        function vt({
            skipXhr: e
        } = {
            skipXhr: !1
        }) {
            if (ht = void 0, 0 === mt.length) return;
            const t = [...mt];
            mt.length = 0,
                function(e, t) {
                    if (0 === e.length) return !1;
                    const n = {
                        metadata: {
                            event_sent_at_ms: gt()
                        },
                        events: e
                    };
                    ! function(e, t) {
                        const n = `${{global:"https://monorail-edge.shopifysvc.com",wellKnown:`${lt}/.well-known/shopify/monorail`,staging:"https://monorail-edge-staging.shopifycloud.com",test:"https://localhost"}[pt]}${dt}`;
                        try {
                            if (self.navigator.sendBeacon.bind(self.navigator)(n, e)) return !0
                        } catch (o) {}
                        if (!t) {
                            const t = new XMLHttpRequest;
                            try {
                                t.open("POST", n, !0), t.setRequestHeader("Content-Type", "text/plain"), t.send(e)
                            } catch (i) {
                                ct.notify(i, {
                                    context: "v0/utilities/monorail/sendRequest",
                                    unhandled: !1
                                })
                            }
                        }
                    }(JSON.stringify(n), t)
                }(t, e)
        }

        function gt() {
            return (new Date).getTime()
        }
        class yt extends Set {
            constructor(e, t) {
                if (super(), this.maxSize = void 0, this.keep = void 0, Number.isFinite(e) && !Number.isInteger(e) || e <= 0) throw new Error("Invalid maxSize specified");
                this.maxSize = e, this.keep = t
            }
            push(e) {
                if ("oldest" === this.keep) this.size < this.maxSize && this.add(e);
                else if ("newest" === this.keep && (this.add(e), this.size > this.maxSize))
                    for (const t of this)
                        if (this.delete(t), this.size <= this.maxSize) break;
                return this
            }
        }
        const Et = (e, t, n) => !0;
        class _t {
            constructor({
                bufferSize: e = 50,
                replayKeep: t = "oldest",
                subscribeAllKey: n,
                eligibility: o
            } = {}) {
                this.channelSubscribers = new Map, this.replayQueue = void 0, this.bufferSize = void 0, this.replayKeep = void 0, this.subscribeAllKey = void 0, this.eligibility = void 0, this.bufferSize = e, this.replayKeep = t, this.subscribeAllKey = n, this.replayQueue = new yt(e, t), this.eligibility = null != o ? o : Et
            }
            publish(e, t, n = {}) {
                var o;
                if (this.subscribeAllKey && e === this.subscribeAllKey) throw new Error(`Cannot publish to ${String(e)}`);
                this.replayQueue.push({
                    name: e,
                    payload: t,
                    options: n
                });
                const i = (o, i) => {
                    this.eligibility(n, o, e) && i.call({}, { ...t
                    })
                };
                var r;
                return null === (o = this.channelSubscribers.get(e)) || void 0 === o || o.forEach(i), this.subscribeAllKey && (null === (r = this.channelSubscribers.get(this.subscribeAllKey)) || void 0 === r || r.forEach(i)), !0
            }
            subscribe(e, t, n = {}) {
                const o = this.channelSubscribers.get(e) || new Map;
                return this.channelSubscribers.set(e, o.set(t, n)), this.replayQueue.forEach((({
                    name: o,
                    payload: i,
                    options: r
                }) => {
                    this.eligibility(r, n, e) && (e === o || this.subscribeAllKey && e === this.subscribeAllKey) && t.call({}, { ...i
                    })
                })), () => o.delete(t)
            }
        }
        let xt = function(e) {
            return e.Meta = "meta", e.Standard = "standard", e.Dom = "dom", e.Custom = "custom", e
        }({});
        const Ct = {
            all_events: xt.Meta,
            all_standard_events: xt.Meta,
            all_custom_events: xt.Meta,
            all_dom_events: xt.Meta,
            checkout_address_info_submitted: xt.Standard,
            checkout_completed: xt.Standard,
            checkout_started: xt.Standard,
            payment_info_submitted: xt.Standard,
            collection_viewed: xt.Standard,
            checkout_contact_info_submitted: xt.Standard,
            page_viewed: xt.Standard,
            product_added_to_cart: xt.Standard,
            product_removed_from_cart: xt.Standard,
            product_viewed: xt.Standard,
            product_variant_viewed: xt.Standard,
            search_submitted: xt.Standard,
            cart_viewed: xt.Standard,
            checkout_shipping_info_submitted: xt.Standard,
            input_changed: xt.Dom,
            input_blurred: xt.Dom,
            input_focused: xt.Dom,
            form_submitted: xt.Dom,
            clicked: xt.Dom,
            custom_event: xt.Custom
        };

        function At(e) {
            return function(e) {
                return Boolean(Ct[e])
            }(e) ? Ct[e] : xt.Custom
        }

        function Tt(e) {
            return At(e) === xt.Standard
        }

        function St(e) {
            return At(e) === xt.Dom
        }
        const kt = (e, t, n) => {
            const {
                pixelRuntimeConfig: o
            } = t || {}, {
                apiClientId: i,
                restrictions: r
            } = o || {}, {
                allowedEvents: a,
                disallowedEvents: s
            } = r || {}, {
                sendTo: c
            } = e || {}, l = c && String(c) === String(i), u = c && !l, d = !a || a.includes(n), f = s && s.includes(n);
            return Boolean(d && !f && !u || l)
        };

        function It() {
            return /checkouts\/(.+)\/(thank_you|thank-you|post_purchase)$/.test(self.location.pathname)
        }
        const Nt = {
                string: "[object String]",
                number: "[object Number]",
                boolean: "[object Boolean]",
                undefined: "[object Undefined]",
                null: "[object Null]",
                object: "[object Object]"
            },
            Rt = [Nt.string, Nt.number, Nt.boolean, Nt.undefined, Nt.null];

        function Ot(e) {
            let t = null;

            function n(e) {
                return Object.prototype.toString.call(e) === Nt.object
            }
            return void 0 === e || n(e) ? {
                isValid: function e(o) {
                    if (Array.isArray(o)) return o.every(e);
                    if (n(o)) return Object.keys(o).every((t => e(o[t])));
                    const i = Rt.includes(Object.prototype.toString.call(o));
                    return i || (t = `${o} must be one of the following types: ${Rt.join(", ")}`), i
                }(e),
                error: t
            } : (t = `${e} must be an object`, {
                isValid: !1,
                error: t
            })
        }

        function Pt() {
            return {
                document: {
                    location: {
                        href: window.location.href,
                        hash: window.location.hash,
                        host: window.location.host,
                        hostname: window.location.hostname,
                        origin: window.location.origin,
                        pathname: window.location.pathname,
                        port: window.location.port,
                        protocol: window.location.protocol,
                        search: window.location.search
                    },
                    referrer: document.referrer,
                    characterSet: document.characterSet,
                    title: document.title
                },
                navigator: {
                    language: navigator.language,
                    cookieEnabled: navigator.cookieEnabled,
                    languages: navigator.languages,
                    userAgent: navigator.userAgent
                },
                window: {
                    innerHeight: window.innerHeight,
                    innerWidth: window.innerWidth,
                    outerHeight: window.outerHeight,
                    outerWidth: window.outerWidth,
                    pageXOffset: window.pageXOffset,
                    pageYOffset: window.pageYOffset,
                    location: {
                        href: window.location.href,
                        hash: window.location.hash,
                        host: window.location.host,
                        hostname: window.location.hostname,
                        origin: window.location.origin,
                        pathname: window.location.pathname,
                        port: window.location.port,
                        protocol: window.location.protocol,
                        search: window.location.search
                    },
                    origin: window.origin,
                    screen: {
                        height: window.screen.height,
                        width: window.screen.width
                    },
                    screenX: window.screenX,
                    screenY: window.screenY,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY
                }
            }
        }

        function Dt(e) {
            const t = {};
            for (const o of e.split(/ *; */)) {
                const e = o.split("=");
                try {
                    t[decodeURIComponent(e[0])] = decodeURIComponent(e[1] || "")
                } catch (n) {
                    continue
                }
            }
            return t
        }
        const Lt = e => ({ ...e,
            clientId: Dt(document.cookie)._shopify_y,
            timestamp: (new Date).toISOString(),
            context: Pt(),
            id: "string" == typeof e.id && e.id.length > 0 ? e.id : qe()
        });

        function Mt() {
            const e = ye.getShopPrefs();
            return e.limit.includes(C.GDPR) ? "gdpr" : e.limit.includes(C.GDPR_BLOCK_ALL) ? "gdpr_block_all" : "unknown"
        }
        let jt = !1;

        function Ut() {
            return new Promise(((e, t) => {
                if (Ee()) return void e(!0);
                const n = t => {
                    U(),
                        function(e) {
                            const t = e.detail;
                            return !0 === (null == t ? void 0 : t.firstPartyMarketingAllowed) && !0 === (null == t ? void 0 : t.thirdPartyMarketingAllowed) && !0 === (null == t ? void 0 : t.analyticsAllowed)
                        }(t) && (document.removeEventListener(r.CONSENT_COLLECTED, n), e(!0))
                };
                document.addEventListener(r.CONSENT_COLLECTED, n)
            }))
        }
        const $t = new Set;
        let Bt = function(e) {
                return e.App = "APP", e.Custom = "CUSTOM", e
            }({}),
            Ft = function(e) {
                return e.Strict = "STRICT", e.Lax = "LAX", e.Unsandboxed = "UNSANDBOXED", e
            }({});

        function Gt(e) {
            return "shopify-custom-pixel" === e.id ? "shopify-pixel" : e.type === Bt.Custom ? "-1" : e.apiClientId ? `${e.apiClientId}` : void 0
        }
        const Kt = "all_standard_events",
            Vt = "all_custom_events",
            qt = "all_dom_events";
        class zt extends Error {
            constructor(e) {
                super(e), this.name = "PublishDomEventError"
            }
        }

        function Ht(e) {
            const t = new _t({
                    bufferSize: Number.POSITIVE_INFINITY,
                    subscribeAllKey: Kt,
                    eligibility: kt
                }),
                n = new _t({
                    bufferSize: 1e3,
                    subscribeAllKey: Vt,
                    eligibility: kt
                }),
                o = new _t({
                    bufferSize: 1e3,
                    replayKeep: "newest",
                    subscribeAllKey: qt,
                    eligibility: kt
                });
            e.initData;
            let i = !1;
            return {
                publish(n, o, r) {
                    var a, s, c, l, u;
                    if ("string" != typeof n) throw new Error("Expected event name to be a string, but got " + typeof n);
                    if (!Tt(n)) return !1;
                    if ("checkout_completed" === n && It() && -1 !== document.cookie.indexOf(`${je}=1`)) return !1;
                    const d = Ot(o);
                    if (!d.isValid) return console.error(d.error), !1;
                    const f = function(e, t, n) {
                            let o;
                            const i = {
                                analyticsFramework: "wpm"
                            };
                            try {
                                var r, a;
                                "product_added_to_cart" === e && "cartLine" in n && (i.cacheKey = function({
                                    cartLine: e
                                } = {
                                    cartLine: null
                                }) {
                                    const t = null == e ? void 0 : e.merchandise.product.id,
                                        n = null == e ? void 0 : e.merchandise.id;
                                    if (t && n) return `${t}-${n}`
                                }(n)), o = null === (r = window.Shopify) || void 0 === r || null === (a = r.evids) || void 0 === a ? void 0 : a.call(r, e, i)
                            } catch {}
                            return Lt({
                                id: o,
                                name: e,
                                data: n
                            })
                        }(n, 0, o),
                        p = null === (a = f.data) || void 0 === a || null === (s = a.checkout) || void 0 === s ? void 0 : s.token;
                    return wt("eventPublish", {
                            version: Pe,
                            bundleTarget: De,
                            pageUrl: self.location.href,
                            shopId: e.shopId,
                            surface: e.surface || "unknown",
                            eventName: f.name,
                            eventType: "standard",
                            extensionId: null == r || null === (c = r.extension) || void 0 === c ? void 0 : c.extensionId,
                            extensionAppId: null == r || null === (l = r.extension) || void 0 === l ? void 0 : l.appId,
                            extensionType: null == r || null === (u = r.extension) || void 0 === u ? void 0 : u.type,
                            userCanBeTracked: Ee().toString(),
                            shopPrefs: Mt(),
                            eventId: f.id,
                            checkoutToken: p,
                            serverEventId: null == r ? void 0 : r.eventId
                        }),
                        function(e) {
                            "checkout_completed" === e && function() {
                                if (It()) {
                                    const e = self.location.pathname.split("/").slice(0, -1).join("/"),
                                        t = new Date(Date.now());
                                    t.setMonth(t.getMonth() + 2), document.cookie = `${je}=1; expires=${t}; path=${e}`
                                }
                            }()
                        }(n), i || Ee() || (i = !0, m = e.shopId, h = e.surface || "unknown", $t.add((() => function(e, t) {
                            jt || (jt = !0, wt("consentAccepted", {
                                version: Pe,
                                bundleTarget: De,
                                shopId: e,
                                surface: t,
                                shopPrefs: Mt()
                            }))
                        }(m, h)))), t.publish(n, f);
                    var m, h
                },
                publishCustomEvent(t, o, i) {
                    var r, a, s;
                    if ("string" != typeof t) throw new Error("Expected event name to be a string, but got " + typeof t);
                    if (! function(e) {
                            return At(e) === xt.Custom
                        }(t)) return !1;
                    const c = Ot(o);
                    if (!c.isValid) return console.error(c.error), !1;
                    const l = function(e, t, n = null) {
                        return Lt({
                            name: e,
                            customData: n
                        })
                    }(t, 0, o);
                    return wt("eventPublish", {
                        version: Pe,
                        bundleTarget: De,
                        pageUrl: self.location.href,
                        shopId: e.shopId,
                        surface: e.surface || "unknown",
                        eventName: l.name,
                        eventType: "custom",
                        extensionId: null == i || null === (r = i.extension) || void 0 === r ? void 0 : r.extensionId,
                        extensionAppId: null == i || null === (a = i.extension) || void 0 === a ? void 0 : a.appId,
                        extensionType: null == i || null === (s = i.extension) || void 0 === s ? void 0 : s.type,
                        eventId: l.id
                    }), n.publish(t, l, i)
                },
                publishDomEvent(e, t, n) {
                    if (!Re.isEnabled("web_pixels_dom_analytics")) throw new zt("This feature is disabled");
                    if ("string" != typeof e) {
                        const t = JSON.stringify(e);
                        throw new zt(`Expected event name "${t}" to be a string, but got ${typeof e}`)
                    }
                    if (!St(e)) throw new zt(`Event name "${e}" is not a supported DOM Event`);
                    const i = Ot(t);
                    if (!i.isValid) throw new zt(`Input Validation Error: ${i.error}`);
                    const r = function(e, t) {
                        return Lt({
                            name: e,
                            data: t
                        })
                    }(e, t);
                    return o.publish(e, r)
                },
                subscribe(e, i, r = {}) {
                    const a = e => {
                        var t;
                        const n = r.schemaVersion || r.pixelRuntimeConfig.eventPayloadVersion;
                        i.call(e, e);
                        const o = At(e.name);
                        let a;
                        var s, c;
                        Tt(e.name) && (a = null == e || null === (s = e.data) || void 0 === s || null === (c = s.checkout) || void 0 === c ? void 0 : c.token), wt("subscriberEventEmit", {
                            version: Pe,
                            bundleTarget: De,
                            pageUrl: self.location.href,
                            shopId: r.shopId,
                            surface: r.surface,
                            pixelId: r.pixelRuntimeConfig.id,
                            pixelAppId: Gt(r.pixelRuntimeConfig),
                            pixelSource: r.pixelRuntimeConfig.type,
                            pixelRuntimeContext: r.pixelRuntimeConfig.runtimeContext,
                            pixelScriptVersion: r.pixelRuntimeConfig.scriptVersion,
                            pixelConfiguration: null === (t = r.pixelRuntimeConfig) || void 0 === t ? void 0 : t.configuration,
                            pixelEventSchemaVersion: n,
                            eventName: e.name,
                            eventType: o,
                            eventId: e.id,
                            checkoutToken: a
                        })
                    };
                    if ("all_events" === e) {
                        const e = t.subscribe(Kt, a, r),
                            i = n.subscribe(Vt, a, r),
                            s = o.subscribe(qt, a, r);
                        return () => {
                            const t = e(),
                                n = i(),
                                o = s();
                            return t && n && o
                        }
                    }
                    return e === Vt ? n.subscribe(Vt, a, r) : e === Kt || Tt(e) ? t.subscribe(e, a, r) : Re.isEnabled("web_pixels_dom_analytics") && (e === qt || St(e)) ? o.subscribe(e, a, r) : n.subscribe(e, a, r)
                }
            }
        }

        function Yt(e) {
            try {
                return new URL(e), !0
            } catch (t) {
                return function(e) {
                    const t = new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)*[a-z]{1,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                    return Boolean(t.test(e))
                }(e)
            }
        }
        const Xt = ["31014027265", "28638674945", "44186959873"];
        const Wt = Symbol.for("RemoteUi::Retain"),
            Jt = Symbol.for("RemoteUi::Release"),
            Zt = Symbol.for("RemoteUi::RetainedBy");
        class Qt {
            constructor() {
                this.memoryManaged = new Set
            }
            add(e) {
                this.memoryManaged.add(e), e[Zt].add(this), e[Wt]()
            }
            release() {
                for (const e of this.memoryManaged) e[Zt].delete(this), e[Jt]();
                this.memoryManaged.clear()
            }
        }

        function en(e) {
            return Boolean(e && e[Wt] && e[Jt])
        }

        function tn(e, {
            deep: t = !0
        } = {}) {
            return nn(e, t, new Map)
        }

        function nn(e, t, n) {
            const o = n.get(e);
            if (null != o) return o;
            const i = en(e);
            if (i && e[Wt](), n.set(e, i), t) {
                if (Array.isArray(e)) {
                    const o = e.reduce(((e, o) => nn(o, t, n) || e), i);
                    return n.set(e, o), o
                }
                if (on(e)) {
                    const o = Object.keys(e).reduce(((o, i) => nn(e[i], t, n) || o), i);
                    return n.set(e, o), o
                }
            }
            return n.set(e, i), i
        }

        function on(e) {
            if (null == e || "object" != typeof e) return !1;
            const t = Object.getPrototypeOf(e);
            return null == t || t === Object.prototype
        }
        const rn = "_@f";

        function an(e) {
            const t = new Map,
                n = new Map,
                o = new Map;
            return {
                encode: function o(i, r = new Map) {
                    if (null == i) return [i];
                    const a = r.get(i);
                    if (a) return a;
                    if ("object" == typeof i) {
                        if (Array.isArray(i)) {
                            r.set(i, [void 0]);
                            const e = [],
                                t = [i.map((t => {
                                    const [n, i = []] = o(t, r);
                                    return e.push(...i), n
                                })), e];
                            return r.set(i, t), t
                        }
                        if (on(i)) {
                            r.set(i, [void 0]);
                            const e = [],
                                t = [Object.keys(i).reduce(((t, n) => {
                                    const [a, s = []] = o(i[n], r);
                                    return e.push(...s), { ...t,
                                        [n]: a
                                    }
                                }), {}), e];
                            return r.set(i, t), t
                        }
                    }
                    if ("function" == typeof i) {
                        if (t.has(i)) {
                            const e = t.get(i),
                                n = [{
                                    [rn]: e
                                }];
                            return r.set(i, n), n
                        }
                        const o = e.uuid();
                        t.set(i, o), n.set(o, i);
                        const a = [{
                            [rn]: o
                        }];
                        return r.set(i, a), a
                    }
                    const s = [i];
                    return r.set(i, s), s
                },
                decode: i,
                async call(e, t) {
                    const o = new Qt,
                        r = n.get(e);
                    if (null == r) throw new Error("You attempted to call a function that was already released.");
                    try {
                        const e = en(r) ? [o, ...r[Zt]] : [o];
                        return await r(...i(t, e))
                    } finally {
                        o.release()
                    }
                },
                release(e) {
                    const o = n.get(e);
                    o && (n.delete(e), t.delete(o))
                },
                terminate() {
                    t.clear(), n.clear(), o.clear()
                }
            };

            function i(t, n) {
                if ("object" == typeof t) {
                    if (null == t) return t;
                    if (t instanceof ArrayBuffer) return t;
                    if (Array.isArray(t)) return t.map((e => i(e, n)));
                    if (rn in t) {
                        const i = t[rn];
                        if (o.has(i)) return o.get(i);
                        let r = 0,
                            a = !1;
                        const s = () => {
                                r -= 1, 0 === r && (a = !0, o.delete(i), e.release(i))
                            },
                            c = () => {
                                r += 1
                            },
                            l = new Set(n),
                            u = (...t) => {
                                if (a) throw new Error("You attempted to call a function that was already released.");
                                if (!o.has(i)) throw new Error("You attempted to call a function that was already revoked.");
                                return e.call(i, t)
                            };
                        Object.defineProperties(u, {
                            [Jt]: {
                                value: s,
                                writable: !1
                            },
                            [Wt]: {
                                value: c,
                                writable: !1
                            },
                            [Zt]: {
                                value: l,
                                writable: !1
                            }
                        });
                        for (const e of l) e.add(u);
                        return o.set(i, u), u
                    }
                    return Object.keys(t).reduce(((e, o) => ({ ...e,
                        [o]: i(t[o], n)
                    })), {})
                }
                return t
            }
        }
        const sn = 0,
            cn = 1,
            ln = 2,
            un = 3,
            dn = 5,
            fn = 6;

        function pn() {
            return `${mn()}-${mn()}-${mn()}-${mn()}`
        }

        function mn() {
            return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
        }
        const hn = "remote-ui::ready";
        async function bn({
            sandboxId: e,
            webPixelConfig: t,
            storefrontBaseUrl: n
        }) {
            const {
                search: o
            } = self.location, i = t.id, r = [Ye(n), "/wpm", `@${Le}`, `/web-pixel-${i}`, `@${t.scriptVersion}`, "/sandbox", `/${De}`, /\.(js|json|xml)$/.test(self.location.pathname) ? "" : self.location.pathname, o];
            if (n.match(/spin\.dev\/?/)) {
                const e = o.length ? "&" : "?";
                r.push(`${o}${e}fast_storefront_renderer=1`)
            }
            return function(e, {
                terminate: t = !0,
                targetOrigin: n = "*"
            } = {}) {
                var o;
                if ("undefined" == typeof window) throw new Error("You can only run fromIframe() in a browser context, but no window was found.");
                const i = new WeakMap;
                let r;

                function a(t) {
                    t.source === e.contentWindow && t.data === hn && (window.removeEventListener("message", a), r())
                }
                null === (o = e.contentWindow) || void 0 === o || o.postMessage(hn, n);
                const s = new Promise((e => {
                    r = e, window.addEventListener("message", a)
                }));
                return {
                    async postMessage(t, o) {
                        var i;
                        await s, null === (i = e.contentWindow) || void 0 === i || i.postMessage(t, n, o)
                    },
                    addEventListener(t, n) {
                        const o = t => {
                            t.source === e.contentWindow && n(t)
                        };
                        i.set(n, o), self.addEventListener(t, o)
                    },
                    removeEventListener(e, t) {
                        const n = i.get(t);
                        null != n && (i.delete(t), self.removeEventListener(e, n))
                    },
                    terminate() {
                        window.removeEventListener("message", a), t && e.remove()
                    }
                }
            }(await async function({
                id: e,
                src: t,
                privileges: n
            }) {
                const o = document.querySelector(`iframe#${e}`);
                if (o && "IFRAME" === o.tagName) return o;
                const i = document.createElement("iframe");
                if (!t) {
                    const e = new rt("src or srcdoc must be provided");
                    throw ct.notify(e, {
                        context: "v0/createIframe",
                        unhandled: !1,
                        severity: "warning"
                    }), e
                }
                if (i.setAttribute("src", t), i.setAttribute("id", e), i.setAttribute("name", e), i.setAttribute("sandbox", n.join(" ")), i.setAttribute("tabIndex", "-1"), i.setAttribute("aria-hidden", "true"), ! function(e) {
                        return "sandbox" in e
                    }(i)) {
                    const e = new rt("browser does not support the sandbox attribute on IFrames");
                    throw ct.notify(e, {
                        context: "v0/createIframe",
                        unhandled: !1,
                        severity: "warning"
                    }), e
                }
                return i.setAttribute("style", "display:none; height:0; width:0; visibility: hidden;"), await
                function(e) {
                    return new Promise(((t, n) => {
                        const o = () => {
                            try {
                                let n = document.querySelector("#WebPixelsManagerSandboxContainer");
                                null == n && (n = document.createElement("div"), n.setAttribute("id", "WebPixelsManagerSandboxContainer"), document.body.appendChild(n)), document.querySelector(`#${e.id}`) || n.appendChild(e), t(e)
                            } catch (o) {
                                n(o)
                            }
                        };
                        if (Re.isEnabled("web_pixels_manager_performance_improvement"))
                            if (document.body) o();
                            else {
                                const e = () => {
                                    "loading" !== document.readyState && (o(), document.removeEventListener("readystatechange", e))
                                };
                                document.addEventListener("readystatechange", e)
                            }
                        else if ("interactive" === document.readyState || "complete" === document.readyState) o();
                        else {
                            const e = () => {
                                "interactive" !== document.readyState && "complete" !== document.readyState || (o(), document.removeEventListener("readystatechange", e))
                            };
                            document.addEventListener("readystatechange", e)
                        }
                    }))
                }(i), i
            }({
                id: e,
                src: r.join(""),
                privileges: ["allow-scripts", "allow-forms"]
            }))
        }
        let wn, vn;

        function gn() {
            if (void 0 !== wn) return wn;
            try {
                return window.localStorage.setItem("local-storage-test", "test"), window.localStorage.removeItem("local-storage-test"), wn = !0, !0
            } catch (e) {
                return wn = !1, !1
            }
        }

        function yn() {
            if (void 0 !== vn) return vn;
            try {
                return window.sessionStorage.setItem("session-storage-test", "test"), window.sessionStorage.removeItem("session-storage-test"), vn = !0, !0
            } catch (e) {
                return vn = !1, !1
            }
        }
        const En = new Map;

        function _n() {
            var e, t;
            const n = (null === (e = self) || void 0 === e || null === (t = e.location) || void 0 === t ? void 0 : t.hostname) || "",
                o = En.get(n);
            if (o) return o;
            const i = n.split("."),
                r = [];
            return i.reverse().reduce(((e, t) => {
                const n = "" === e ? t : `${t}.${e}`;
                return function(e) {
                        document.cookie = `wpm-domain-test=1; path=/; domain=${e}`
                    }(n), document.cookie.split(";").find((e => e.includes("wpm-domain-test"))) || r.push(n),
                    function(e) {
                        document.cookie = `wpm-domain-test=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${e}`
                    }(n), n
            }), ""), En.set(n, r), r
        }
        class xn extends Error {
            constructor(...e) {
                super(...e), this.name = "SandboxAlreadyCreatedError", this.message = "Sandbox already created."
            }
        }
        async function Cn({
            webPixelConfig: e,
            eventBus: t,
            shopId: n,
            storefrontBaseUrl: o,
            surface: i,
            initData: r
        }) {
            let a;
            const s = `web-pixel-sandbox-${e.type}-${e.id}-${e.runtimeContext}-${Le}`;
            if (e.runtimeContext === Ft.Lax && document.getElementById(s)) {
                const t = new xn;
                return ct.notify(t, {
                    pixelId: e.id,
                    pixelType: e.type,
                    runtimeContext: e.runtimeContext,
                    shopId: n,
                    context: "v0/createWebPixelSandbox/alreadyCreatedError",
                    userAgent: self.navigator.userAgent,
                    hashVersionSandbox: Le,
                    sandboxUrl: self.location.href || "unknown",
                    options: {
                        sampleRate: 15
                    }
                }), !1
            }
            switch (e.runtimeContext) {
                case Ft.Strict:
                    a = await async function({
                        sandboxId: e,
                        webPixelConfig: t,
                        storefrontBaseUrl: n
                    }) {
                        const o = t.id,
                            i = [Ye(n), "/wpm", `@${Le}`, `/web-pixel-${o}`, `@${t.scriptVersion}`, "/sandbox", `/worker.${De}.js`];
                        return n.match(/spin\.dev\/?/) && i.push("?fast_storefront_renderer=1"), new Worker(i.join(""), {
                            name: e,
                            type: "classic",
                            credentials: "omit"
                        })
                    }({
                        sandboxId: s,
                        webPixelConfig: e,
                        storefrontBaseUrl: o
                    });
                    break;
                case Ft.Lax:
                    a = await bn({
                        sandboxId: s,
                        webPixelConfig: e,
                        storefrontBaseUrl: o
                    });
                    break;
                default:
                    throw new Error(`Unsupported runtime context: ${e.runtimeContext}`)
            }
            const c = function(e, {
                    uuid: t = pn,
                    createEncoder: n = an,
                    callable: o
                } = {}) {
                    let i = !1,
                        r = e;
                    const a = new Map,
                        s = new Map,
                        c = function(e, t) {
                            let n;
                            if (null == t) {
                                if ("function" != typeof Proxy) throw new Error("You must pass an array of callable methods in environments without Proxies.");
                                const t = new Map;
                                n = new Proxy({}, {
                                    get(n, o) {
                                        if (t.has(o)) return t.get(o);
                                        const i = e(o);
                                        return t.set(o, i), i
                                    }
                                })
                            } else {
                                n = {};
                                for (const o of t) Object.defineProperty(n, o, {
                                    value: e(o),
                                    writable: !1,
                                    configurable: !0,
                                    enumerable: !0
                                })
                            }
                            return n
                        }(f, o),
                        l = n({
                            uuid: t,
                            release(e) {
                                u(un, [e])
                            },
                            call(e, n, o) {
                                const i = t(),
                                    r = p(i, o),
                                    [a, s] = l.encode(n);
                                return u(dn, [i, e, a], s), r
                            }
                        });
                    return r.addEventListener("message", d), {
                        call: c,
                        replace(e) {
                            const t = r;
                            r = e, t.removeEventListener("message", d), e.addEventListener("message", d)
                        },
                        expose(e) {
                            for (const t of Object.keys(e)) {
                                const n = e[t];
                                "function" == typeof n ? a.set(t, n) : a.delete(t)
                            }
                        },
                        callable(...e) {
                            if (null != o)
                                for (const t of e) Object.defineProperty(c, t, {
                                    value: f(t),
                                    writable: !1,
                                    configurable: !0,
                                    enumerable: !0
                                })
                        },
                        terminate() {
                            u(ln, void 0), m(), r.terminate && r.terminate()
                        }
                    };

                    function u(e, t, n) {
                        i || r.postMessage(t ? [e, t] : [e], n)
                    }
                    async function d(e) {
                        const {
                            data: t
                        } = e;
                        if (null != t && Array.isArray(t)) switch (t[0]) {
                            case ln:
                                m();
                                break;
                            case sn:
                                {
                                    const e = new Qt,
                                        [o, i, r] = t[1],
                                        s = a.get(i);
                                    try {
                                        if (null == s) throw new Error(`No '${i}' method is exposed on this endpoint`);
                                        const [t, n] = l.encode(await s(...l.decode(r, [e])));
                                        u(cn, [o, void 0, t], n)
                                    } catch (n) {
                                        const {
                                            name: e,
                                            message: t,
                                            stack: i
                                        } = n;
                                        throw u(cn, [o, {
                                            name: e,
                                            message: t,
                                            stack: i
                                        }]), n
                                    } finally {
                                        e.release()
                                    }
                                    break
                                }
                            case cn:
                                {
                                    const [e] = t[1];s.get(e)(...t[1]),
                                    s.delete(e);
                                    break
                                }
                            case un:
                                {
                                    const [e] = t[1];l.release(e);
                                    break
                                }
                            case fn:
                                {
                                    const [e] = t[1];s.get(e)(...t[1]),
                                    s.delete(e);
                                    break
                                }
                            case dn:
                                {
                                    const [e, o, i] = t[1];
                                    try {
                                        const t = await l.call(o, i),
                                            [n, r] = l.encode(t);
                                        u(fn, [e, void 0, n], r)
                                    } catch (n) {
                                        const {
                                            name: t,
                                            message: o,
                                            stack: i
                                        } = n;
                                        throw u(fn, [e, {
                                            name: t,
                                            message: o,
                                            stack: i
                                        }]), n
                                    }
                                    break
                                }
                        }
                    }

                    function f(e) {
                        return (...n) => {
                            if (i) return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));
                            if ("string" != typeof e && "number" != typeof e) return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));
                            const o = t(),
                                r = p(o),
                                [a, s] = l.encode(n);
                            return u(sn, [o, e, a], s), r
                        }
                    }

                    function p(e, t) {
                        return new Promise(((n, o) => {
                            s.set(e, ((e, i, r) => {
                                if (null == i) n(r && l.decode(r, t));
                                else {
                                    const e = new Error;
                                    Object.assign(e, i), o(e)
                                }
                            }))
                        }))
                    }

                    function m() {
                        var e;
                        i = !0, a.clear(), s.clear(), null === (e = l.terminate) || void 0 === e || e.call(l), r.removeEventListener("message", d)
                    }
                }(a, {
                    callable: ["initialize"]
                }),
                l = function({
                    eventBus: e,
                    webPixelConfig: t,
                    shopId: n,
                    surface: o,
                    initData: i,
                    forRPC: r = !1
                }) {
                    let a = {};
                    try {
                        a = t.configuration ? JSON.parse(t.configuration) : {}
                    } catch (m) {}
                    return {
                        analytics: {
                            subscribe: (i, a, s) => (r && tn(a), e.subscribe(i, a, { ...s,
                                pixelRuntimeConfig: t,
                                shopId: n,
                                surface: o
                            }))
                        },
                        browser: {
                            cookie: {
                                get: async e => {
                                    if (!e) return document.cookie;
                                    let t = "";
                                    const n = document.cookie.split("; ");
                                    for (const o of n) {
                                        const [n, i] = o.split("=");
                                        if (n === e) {
                                            t = i;
                                            break
                                        }
                                    }
                                    return t
                                },
                                set: async (e, t) => {
                                    if (t) {
                                        const n = `${e}=${t}`;
                                        document.cookie = n
                                    } else document.cookie = e;
                                    return document.cookie
                                }
                            },
                            sendBeacon: async (e, t = "") => {
                                if (e.includes(self.location.origin) && !e.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/)) return !1;
                                const n = new window.Blob([t], {
                                    type: "text/plain"
                                });
                                return window.navigator.sendBeacon(e, n)
                            },
                            localStorage: {
                                setItem: async (e, t) => gn() ? window.localStorage.setItem(e, t) : Promise.resolve(),
                                getItem: async e => gn() ? window.localStorage.getItem(e) : Promise.resolve(null),
                                key: async e => gn() ? window.localStorage.key(e) : Promise.resolve(null),
                                removeItem: async e => gn() ? window.localStorage.removeItem(e) : Promise.resolve(),
                                clear: async () => gn() ? window.localStorage.clear() : Promise.resolve(),
                                length: async () => gn() ? window.localStorage.length : Promise.resolve(0)
                            },
                            sessionStorage: {
                                setItem: async (e, t) => yn() ? window.sessionStorage.setItem(e, t) : Promise.resolve(),
                                getItem: async e => yn() ? window.sessionStorage.getItem(e) : Promise.resolve(null),
                                key: async e => yn() ? window.sessionStorage.key(e) : Promise.resolve(null),
                                removeItem: async e => yn() ? window.sessionStorage.removeItem(e) : Promise.resolve(),
                                clear: async () => yn() ? window.sessionStorage.clear() : Promise.resolve(),
                                length: async () => yn() ? window.sessionStorage.length : Promise.resolve(0)
                            }
                        },
                        settings: a,
                        init: (s = i, {
                            context: Pt(),
                            data: {
                                customer: (p = null == s ? void 0 : s.customer, p ? {
                                    email: p.email,
                                    firstName: p.firstName,
                                    id: p.id,
                                    lastName: p.lastName,
                                    phone: p.phone,
                                    ordersCount: p.ordersCount
                                } : null),
                                cart: (c = null == s ? void 0 : s.cart, c ? {
                                    id: null == c ? void 0 : c.id,
                                    cost: {
                                        totalAmount: {
                                            amount: null == c || null === (l = c.cost) || void 0 === l || null === (u = l.totalAmount) || void 0 === u ? void 0 : u.amount,
                                            currencyCode: null == c || null === (d = c.cost) || void 0 === d || null === (f = d.totalAmount) || void 0 === f ? void 0 : f.currencyCode
                                        }
                                    },
                                    lines: null == c ? void 0 : c.lines,
                                    totalQuantity: null == c ? void 0 : c.totalQuantity
                                } : null)
                            }
                        }),
                        _pixelInfo: { ...t,
                            surface: o
                        }
                    };
                    var s, c, l, u, d, f, p
                }({
                    eventBus: t,
                    webPixelConfig: e,
                    shopId: n,
                    surface: i,
                    initData: r,
                    forRPC: !0
                }),
                u = {
                    self: {
                        origin: {
                            get: async () => self.origin
                        }
                    },
                    document: {
                        referrer: {
                            get: async () => document.referrer
                        }
                    }
                },
                d = Pt();
            let f = {
                status: "unknown",
                hashVersion: "unknown",
                sandboxUrl: "unknown"
            };
            try {
                f = await c.call.initialize({
                    pageTitle: self.document.title,
                    webPixelConfig: e,
                    shopId: n,
                    webPixelApi: l,
                    internalApi: u,
                    cookie: self.document.cookie,
                    cookieRestrictedDomains: _n(),
                    origin: self.origin,
                    referrer: self.document.referrer,
                    localStorageItems: { ...self.localStorage
                    },
                    sessionStorageItems: { ...self.sessionStorage
                    }
                })
            } catch (p) {
                return !1
            }
            if (Le !== f.hashVersion) {
                const t = new Error(`The main bundle hash (${Le}) does not match the sandbox hash (${f.hashVersion})`);
                ct.notify(t, {
                    severity: "warning",
                    pixelId: e.id,
                    pixelType: e.type,
                    runtimeContext: e.runtimeContext,
                    context: "v0/createSandbox/hashMismatch",
                    shopId: n,
                    userAgent: d.navigator.userAgent || self.navigator.userAgent,
                    hashVersionSandbox: f.hashVersion,
                    sandboxUrl: f.sandboxUrl
                })
            }
            return !0
        }
        async function An(e) {
            var t;
            let n = !1;
            const {
                webPixelConfig: o,
                eventBus: i,
                shopId: r,
                surface: a
            } = e, s = o.id, c = o.type.toLowerCase();
            var l, u;
            switch (o.restrictions || (o.restrictions = function(e, t) {
                if (!e) return {};
                const n = function(e) {
                    return Xt.includes(String(e))
                }(e);
                return n && "storefront-renderer" !== t ? {
                    allowedEvents: [],
                    preventLoadingBeforeEvent: `shopify:app:pixels:load:${e}`
                } : n ? {
                    allowedEvents: []
                } : {}
            }(String(o.apiClientId), a)), await Promise.all([Ut(), (l = (e, t) => i.subscribe(e, t, {
                pixelRuntimeConfig: {
                    apiClientId: "PIXEL-LOADER"
                }
            }), u = null === (t = o.restrictions) || void 0 === t ? void 0 : t.preventLoadingBeforeEvent, new Promise(((e, t) => {
                void 0 === u ? e(!0) : l(u, (() => {
                    e(!0)
                }))
            })))]), Ze("pixel:register", "start", {
                pixelId: s,
                source: c
            }), o.runtimeContext) {
                case Ft.Lax:
                case Ft.Strict:
                    n = await Cn(e);
                    break;
                default:
                    throw new Error(`Invalid runtimeContext: ${o.runtimeContext}`)
            }
            const d = Gt(o),
                {
                    measurement: f
                } = Je("pixel:register", {
                    pixelId: s,
                    source: c
                });
            return wt("register", {
                version: Pe,
                pageUrl: self.location.href,
                shopId: r,
                surface: a,
                pixelId: s,
                pixelAppId: d,
                pixelSource: o.type,
                pixelRuntimeContext: o.runtimeContext,
                pixelScriptVersion: o.scriptVersion,
                pixelConfiguration: null == o ? void 0 : o.configuration,
                pixelEventSchemaVersion: o.eventPayloadVersion,
                status: "registered",
                userCanBeTracked: Ee().toString(),
                shopPrefs: Mt(),
                bundleTarget: De,
                errorMsg: "N/A",
                duration: null == f ? void 0 : f.duration,
                startTime: null == f ? void 0 : f.startTime,
                sessionId: He()
            }), n
        }
        const Tn = {
            capture: !0,
            passive: !0
        };

        function Sn(e, t, n, o = {}) {
            try {
                const i = e => {
                    try {
                        t(e)
                    } catch (n) {
                        ct.notify(n, {
                            context: "v0/createDomEventsListener/createEventListener/handler",
                            unhandled: !1,
                            options: {
                                sampleRate: o.sampleRate || 50
                            }
                        })
                    }
                };
                self.addEventListener(e, i, n)
            } catch (i) {
                ct.notify(i, {
                    context: "v0/createDomEventsListener/createEventListener",
                    unhandled: !1
                })
            }
        }

        function kn(e) {
            return {
                id: null == e ? void 0 : e.id,
                name: null == e ? void 0 : e.name,
                tagName: null == e ? void 0 : e.tagName,
                type: null == e ? void 0 : e.type,
                value: null == e ? void 0 : e.value
            }
        }
        class In extends Error {
            constructor(e) {
                super(e), this.name = "VisitorError"
            }
        }
        const Nn = function() {
            const e = null !== (t = self.Shopify) && void 0 !== t && t.Checkout ? "shopify" : null !== (n = self.Shopify) && void 0 !== n && null !== (o = n.analytics) && void 0 !== o && o.replayQueue ? "storefront-renderer" : "checkout-one";
            var t, n, o;
            const i = self.location.href,
                r = $e("load", {
                    version: Pe,
                    bundleTarget: De,
                    pageUrl: i,
                    status: "loading",
                    surface: e
                }),
                a = {
                    publish: () => !1,
                    publishCustomEvent: () => !1,
                    publishDomEvent: () => !1,
                    visitor: () => !1
                };
            try {
                const e = He();
                return r.payload.status = "loaded", bt(r), {
                    init(t) {
                        if (null !== self.location.href.match(/\/wpm@(.+)\/sandbox/)) return a;
                        const {
                            shopId: n,
                            cdnBaseUrl: o,
                            webPixelsConfigList: r,
                            surface: s = "unknown",
                            initData: c,
                            enabledBetaFlags: l
                        } = t || {};
                        Ie();
                        const u = self.location.origin;
                        ut(u), Re.setBetaFlags(l);
                        const d = Ee().toString(),
                            f = $e("unload", {
                                version: Pe,
                                bundleTarget: De,
                                pageUrl: i,
                                shopId: n,
                                surface: s,
                                isCompleted: "false",
                                runtimeErrorCaught: "false",
                                userCanBeTracked: d,
                                sessionId: e
                            });
                        var p;
                        p = f, window.addEventListener("pagehide", (() => {
                            var e, t;
                            p.payload.pageDuration = null === (e = Je("page:session")) || void 0 === e || null === (t = e.measurement) || void 0 === t ? void 0 : t.duration, bt(p), vt({
                                skipXhr: !0
                            })
                        }));
                        const m = Ht(t),
                            h = {
                                severity: "warning",
                                context: "v0/createWebPixelsManager/init",
                                unhandled: !1,
                                shopId: n,
                                initConfig: t
                            },
                            b = $e("init", {
                                version: Pe,
                                bundleTarget: De,
                                pageUrl: i,
                                shopId: n,
                                surface: s,
                                status: "initializing",
                                userCanBeTracked: d
                            });
                        try {
                            if (self.Shopify && !0 === self.Shopify.designMode) return self.console && console.log("[WebPixelsManager] Prevented from executing in the Theme Editor"), a;
                            if (/^web-pixel-sandbox/.test(self.name)) {
                                const e = new rt("WebPixelsManager: browser library is being run in a sandbox");
                                throw h.library = "browser", ct.notify(e, h), e
                            }
                            if (!n) {
                                const e = new rt("WebPixelsManager: shopId is required");
                                throw ct.notify(e, h), e
                            }
                            if (!u) {
                                const e = new rt("WebPixelsManager: storefrontBaseUrl is required");
                                throw ct.notify(e, h), e
                            }
                            if (!Yt(u)) {
                                const e = new rt(`WebPixelsManager: storefrontBaseUrl is not a valid absolute URL: ${u}`);
                                throw ct.notify(e, h), e
                            }
                            if (!o) {
                                const e = new rt("WebPixelsManager: cdnBaseUrl is required");
                                throw ct.notify(e, h), e
                            }
                            if (!Yt(o)) {
                                const e = new rt(`WebPixelsManager: cdnBaseUrl is not a valid absolute URL: ${o}`);
                                throw ct.notify(e, h), e
                            }
                            const e = r.reduce(((e, t) => {
                                var i, r;
                                t.type = t.type.toUpperCase(), t.runtimeContext = null === (i = t.runtimeContext) || void 0 === i ? void 0 : i.toUpperCase();
                                const a = An({
                                    webPixelConfig: t,
                                    eventBus: m,
                                    shopId: n,
                                    storefrontBaseUrl: u,
                                    cdnBaseUrl: o,
                                    surface: s,
                                    initData: c
                                }).catch((e => {
                                    self.console && console.error("[Web Pixels]", e)
                                }));
                                return null !== (r = t.restrictions) && void 0 !== r && r.preventLoadingBeforeEvent ? e.waiting.push(a) : e.ready.push(a), e
                            }), {
                                ready: [],
                                waiting: []
                            });
                            Promise.all(e.ready).then((() => function(e) {
                                const {
                                    measurement: t
                                } = Je("completed");
                                e.payload.isCompleted = "true", e.payload.runTimeDuration = null == t ? void 0 : t.duration, e.payload.startTime = null == t ? void 0 : t.startTime
                            }(f))).catch((() => {})), Promise.all(e.waiting).catch((() => {})), "checkout-one" !== s && (w(m.publish, c), Re.isEnabled("web_pixels_dom_analytics") && function(e) {
                                const t = function() {
                                    let e = !1;
                                    try {
                                        const t = {
                                                get passive() {
                                                    return e = !0, !1
                                                }
                                            },
                                            n = () => {};
                                        self.addEventListener("test", n, t), self.removeEventListener("test", n, t)
                                    } catch (t) {
                                        e = !1
                                    }
                                    return !e || Tn
                                }();
                                ! function(e, t) {
                                    Sn("blur", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = kn(n);
                                        e.publishDomEvent("input_blurred", {
                                            element: o
                                        })
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Sn("change", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = {
                                            element: kn(n)
                                        };
                                        e.publishDomEvent("input_changed", o)
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Sn("click", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof Element)) return;
                                        const o = function(e) {
                                            var t, n, o, i;
                                            return {
                                                id: e.id,
                                                tagName: e.tagName,
                                                href: null !== (t = e.href) && void 0 !== t ? t : null,
                                                name: null !== (n = e.name) && void 0 !== n ? n : null,
                                                type: null !== (o = e.type) && void 0 !== o ? o : null,
                                                value: null !== (i = e.value) && void 0 !== i ? i : null
                                            }
                                        }(n);
                                        e.publishDomEvent("clicked", {
                                            element: o
                                        })
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Sn("focus", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement)) return;
                                        const o = kn(n);
                                        e.publishDomEvent("input_focused", {
                                            element: o
                                        })
                                    }), t)
                                }(e, t),
                                function(e, t) {
                                    Sn("submit", (t => {
                                        const n = null == t ? void 0 : t.target;
                                        if (!(n instanceof HTMLFormElement)) return;
                                        const o = [];
                                        for (let e = 0; e < n.elements.length; e++) {
                                            const t = n.elements[e];
                                            (t instanceof HTMLInputElement || t instanceof HTMLSelectElement || t instanceof HTMLTextAreaElement || t instanceof HTMLButtonElement) && o.push(kn(t))
                                        }
                                        e.publishDomEvent("form_submitted", {
                                            element: {
                                                action: null == n ? void 0 : n.action,
                                                id: null == n ? void 0 : n.id,
                                                elements: o
                                            }
                                        })
                                    }), t)
                                }(e, t)
                            }(m)), b.payload.status = "initialized", bt(b);
                            const t = {
                                publish: (e, t, n = {}) => m.publish(e, t, n),
                                publishCustomEvent: (e, t, n = {}) => m.publishCustomEvent(e, t, n),
                                publishDomEvent: (e, t, n = {}) => m.publishDomEvent(e, t, n),
                                visitor: () => !1
                            };
                            if (Re.isEnabled("web_pixels_visitor_api")) {
                                var v;
                                const e = (g = {
                                    shopId: n,
                                    surface: s,
                                    pageUrl: i,
                                    clientId: Dt(document.cookie)._shopify_y,
                                    version: Pe,
                                    customerId: null == c || null === (v = c.customer) || void 0 === v ? void 0 : v.id
                                }, {
                                    visitor: (e, t) => function(e, t, n) {
                                        const o = function(e, t) {
                                            return e && (e.email || e.phone) ? null != e && e.email && "string" != typeof e.email ? {
                                                valid: !1,
                                                error: "Email must be of type string"
                                            } : null != e && e.phone && "string" != typeof e.phone ? {
                                                valid: !1,
                                                error: "Phone must be of type string"
                                            } : null != t && t.appId && "string" != typeof t.appId ? {
                                                valid: !1,
                                                error: "appId must be of type string"
                                            } : null != t && t.apiClientId && "string" != typeof t.apiClientId ? {
                                                valid: !1,
                                                error: "apiClientId must be of type string"
                                            } : {
                                                valid: !0
                                            } : {
                                                valid: !1,
                                                error: "Visitor must have one of phone or email"
                                            }
                                        }(t, n);
                                        if (!o.valid) throw new In(o.error || "Invalid input payload to visitorApi");
                                        const i = { ...e,
                                            ...t,
                                            apiClientId: (null == n ? void 0 : n.appId) || (null == n ? void 0 : n.apiClientId)
                                        };
                                        return Ut().then((() => wt("visitor", i))).catch((() => ct.notify("visitor error", {
                                            severity: "error",
                                            context: `v0/visitor-${e.surface}`,
                                            unhandled: !1,
                                            shopId: e.shopId
                                        }))), !0
                                    }(g, e, t)
                                });
                                t.visitor = e.visitor
                            }
                            return t
                        } catch (y) {
                            return y instanceof rt || ct.notify(y, {
                                context: "v0/init",
                                shopId: n,
                                initConfig: t
                            }), self.console && console.error(y), b.payload.status = "failed", b.payload.errorMsg = null == y ? void 0 : y.message, bt(b), f.payload.runtimeErrorCaught = "true", a
                        }
                        var g
                    }
                }
            } catch (s) {
                return s instanceof rt || ct.notify(s, {
                    context: "v0/createWebPixelsManager"
                }), self.console && console.error(s), r.payload.status = "manager-create-error", r.payload.errorMsg = null == s ? void 0 : s.message, bt(r, !0), {
                    init: () => a
                }
            }
        }();
        self.webPixelsManager = Nn
    })()
})();