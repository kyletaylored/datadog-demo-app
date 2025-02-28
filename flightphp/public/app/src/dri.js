import { BatchInterceptor as x } from "@mswjs/interceptors";
import { FetchInterceptor as S } from "@mswjs/interceptors/fetch";
import { XMLHttpRequestInterceptor as j } from "@mswjs/interceptors/XMLHttpRequest";
let R = !1;
function q(e) {
    R = e;
}
const u = new Proxy(console, {
    get: (e, r) => (...n) => {
        var t;
        return R && ((t = e[r]) == null ? void 0 : t.call(e, "[Datadog Interceptor]:", ...n));
    }
});
function E(e) {
    if (!(e instanceof Headers))
        throw new Error("The object provided must be an instance of Headers.");
    const r = {};
    for (const [n, t] of e.entries())
        r[n] = t;
    return r;
}
function b(e) {
    if (e.url.includes("datadoghq.com"))
        return !0;
}
function O(e) {
    let r = 0;
    for (let n = 0; n < e.length; n++) {
        const t = e.charCodeAt(n);
        r = (r << 5) - r + t, r = r & r;
    }
    return Math.abs(r).toString(16).padStart(32, "0");
}
function M(e) {
    var r;
    try {
        if (!((r = e == null ? void 0 : e.requestInit) != null && r.headers) || !Array.isArray(e.requestInit.headers))
            return null;
        const n = e.requestInit.headers.find(
            (t) => Array.isArray(t) && t[0] === "x-datadog-trace-id"
        );
        return n ? n[1] : null;
    } catch (n) {
        return u.error("Error getting trace ID:", n), null;
    }
}
async function v(e) {
    const r = await e.clone();
    return {
        method: "method" in r ? r.method : null,
        // Only Requests have a method
        headers: E(r.headers),
        body: await A(r.body),
        url: r.url,
        status: "status" in r ? r.status : null,
        // Only Responses have a status
        timestamp: Date.now()
    };
}
async function A(e) {
    if (!e) return null;
    const r = typeof process < "u" && process.versions != null && process.versions.node != null;
    let n;
    try {
        if (typeof e == "string")
            n = e;
        else if (typeof ReadableStream < "u" && e instanceof ReadableStream)
            n = await new Response(e).text();
        else if (r && typeof Buffer < "u" && Buffer.isBuffer(e))
            n = e.toString("utf-8");
        else
            return u.warn("Unsupported body type:", typeof e), null;
        const t = n.trim();
        if (t.startsWith("{") || t.startsWith("["))
            try {
                return JSON.parse(t);
            } catch (a) {
                return u.warn("Failed to parse JSON body:", a), n;
            }
        return t;
        if (t.startsWith("<") && !t.toLowerCase().startsWith("<html") && !t.toLowerCase().startsWith("<!doctype html"))
            try {
                if (typeof DOMParser > "u") {
                    const { JSDOM: a } = require("jsdom"), c = new a(), s = new c.window.DOMParser().parseFromString(t, "text/xml"), i = s.querySelector("parsererror");
                    if (i)
                        throw new Error(i.textContent);
                    return s;
                } else {
                    const c = new DOMParser().parseFromString(t, "text/xml"), o = c.querySelector("parsererror");
                    if (o)
                        throw new Error(o.textContent);
                    return c;
                }
            } catch (a) {
                return u.warn("Failed to parse XML body:", a), n;
            }
    } catch (t) {
        return u.error("Error parsing body:", t), null;
    }
}
function T(e) {
    const r = new Headers();
    return e && e.trim().split(/[\r\n]+/).forEach((n) => {
        const t = n.split(": "), a = t.shift().trim(), c = t.join(": ").trim();
        a && r.append(a, c);
    }), r;
}
function H(e) {
    if (!e || typeof e != "object") return "";
    function r(t) {
        return Array.isArray(t) ? t.map(r) : t !== null && typeof t == "object" ? Object.keys(t).sort().reduce((a, c) => (a[c] = r(t[c]), a), {}) : t;
    }
    const n = JSON.stringify(r(e));
    return O(n);
}
const m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), $ = 5e3;
function B(e, r) {
    m.set(e, r), setTimeout(() => {
        m.delete(e);
    }, $);
}
function F(e) {
    const r = m.get(e);
    return m.delete(e), r || null;
}
function N(e, r) {
    y.set(e, r);
}
function P(e) {
    const r = y.get(e);
    return y.delete(e), r || null;
}
function I(e, r = "default") {
    if (!e) return null;
    try {
        const n = e.method || "GET", t = e.url || "", a = e.status || 200, c = Math.floor(e.timestamp / 1e4), o = H(e.headers) || "", s = `${n}:${t}:${a}:${o}:${c}`, i = O(s);
        return u.log(`Debug fingerprint (${r}):`, { data: e, fingerprintString: s, fingerprint: i }), i;
    } catch (n) {
        return u.error("Error generating fingerprint:", n), null;
    }
}
function X(e, r) {
    const { debug: n = !1 } = e || {};
    q(n);
    const t = new x({
        name: "datadog-rum-interceptor",
        interceptors: r
    });
    t.apply(), t.on("request", async ({ request: o, requestId: s }) => {
        if (b(o))
            return;
        const i = {
            method: o.method,
            url: o.url,
            headers: Object.fromEntries(o.headers.entries()),
            timestamp: Date.now()
        };
        B(s, i), u.log(`Intercepted Request: ${o.url}`, i);
    }), t.on("response", async ({ request: o, response: s, requestId: i }) => {
        if (b(o))
            return;
        const f = F(i);
        if (!f) {
            u.warn(`No matching request found for response: ${s.url}`);
            return;
        }
        const l = await v(s);
        Object.keys(l).forEach((d) => {
            (l[d] === null || l[d] === "") && f[d] !== void 0 && (l[d] = f[d]);
        });
        const h = o.headers.get("x-datadog-trace-id") ?? I(l, "interceptor "), p = { request: f, response: l };
        N(h, p), u.log(`Intercepted Response: ${s.url}`, p);
    });
    function a(o) {
        var h, p, d, w;
        if (!o || typeof o != "object")
            return console.warn("Invalid beforeSend object provided."), null;
        const { event: s, context: i } = o;
        if (!s || !i)
            return console.warn("Both `event` and `context` are required."), null;
        const l = ((h = s.resource) == null ? void 0 : h.type) === "xhr" ? T(i.xhr.getAllResponseHeaders()) : i.response.headers;
        try {
            const g = M(i) ?? I({
                method: ((p = s.resource) == null ? void 0 : p.method) || "GET",
                url: ((d = s.resource) == null ? void 0 : d.url) || "",
                status: ((w = s.resource) == null ? void 0 : w.status_code) || "",
                timestamp: s.date || Date.now(),
                headers: E(l)
            }, "extractor"), D = P(g);
            return D || u.warn("No match found for request:", i), D;
        } catch (g) {
            return u.error("Failed to extract resource data:", g), null;
        }
    }
    function c() {
        t.dispose(), u.info("Interceptor stopped.");
    }
    return {
        stop: c,
        getPayload: a
    };
}
function C(e = {}) {
    const r = [
        new S(),
        new j()
    ];
    return X(e, r);
}
const _ = { init: C };
export {
    _ as default
};
