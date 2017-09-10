/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */
!(function() {
  function e(e, n, t) {
    "use strict";
    var o = window.document.createElement("link"),
      r = n || window.document.getElementsByTagName("script")[0],
      a = window.document.styleSheets;
    return (
      (o.rel = "stylesheet"),
      (o.href = e),
      (o.media = "only x"),
      r.parentNode.insertBefore(o, r),
      (o.onloadcssdefined = function(e) {
        for (var n, t = 0; t < a.length; t++)
          a[t].href && a[t].href === o.href && (n = !0);
        n
          ? e()
          : setTimeout(function() {
              o.onloadcssdefined(e);
            });
      }),
      o.onloadcssdefined(function() {
        o.media = t || "all";
      }),
      o
    );
  }
  function n(e, n) {
    (e.onload = function() {
      (e.onload = null), n && n.call(e);
    }),
      "isApplicationInstalled" in navigator &&
        "onloadcssdefined" in e &&
        e.onloadcssdefined(n);
  }
  !(function(t) {
    var o = function(r, a) {
      "use strict";
      if (r && 3 === r.length) {
        var i = t.navigator,
          c = t.document,
          s = t.Image,
          d = !(
            !c.createElementNS ||
            !c.createElementNS("http://www.w3.org/2000/svg", "svg")
              .createSVGRect ||
            !c.implementation.hasFeature(
              "http://www.w3.org/TR/SVG11/feature#Image",
              "1.1"
            ) ||
            (t.opera && -1 === i.userAgent.indexOf("Chrome")) ||
            -1 !== i.userAgent.indexOf("Series40")
          ),
          l = new s();
        (l.onerror = function() {
          (o.method = "png"), (o.href = r[2]), e(r[2]);
        }),
          (l.onload = function() {
            var t = 1 === l.width && 1 === l.height,
              i = r[t && d ? 0 : t ? 1 : 2];
            t && d
              ? (o.method = "svg")
              : t
                ? (o.method = "datapng")
                : (o.method = "png"),
              (o.href = i),
              n(e(i), a);
          }),
          (l.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
          (c.documentElement.className += " grunticon");
      }
    };
    (o.loadCSS = e), (o.onloadCSS = n), (t.grunticon = o);
  })(this),
    (function(e, n) {
      "use strict";
      var t = n.document,
        o = "grunticon:",
        r = function(e) {
          if (
            t.attachEvent
              ? "complete" === t.readyState
              : "loading" !== t.readyState
          )
            e();
          else {
            var n = !1;
            t.addEventListener(
              "readystatechange",
              function() {
                n || ((n = !0), e());
              },
              !1
            );
          }
        },
        a = function(e) {
          return n.document.querySelector('link[href$="' + e + '"]');
        },
        i = function(e) {
          var n,
            t,
            r,
            a,
            i,
            c,
            s = {};
          if (((n = e.sheet), !n)) return s;
          t = n.cssRules ? n.cssRules : n.rules;
          for (var d = 0; d < t.length; d++)
            (r = t[d].cssText),
              (a = o + t[d].selectorText),
              (i = r.split(");")[0].match(/US\-ASCII\,([^"']+)/)),
              i && i[1] && ((c = decodeURIComponent(i[1])), (s[a] = c));
          return s;
        },
        c = function(e) {
          var n, r, a, i;
          a = "data-grunticon-embed";
          for (var c in e) {
            i = c.slice(o.length);
            try {
              n = t.querySelectorAll(i);
            } catch (s) {
              continue;
            }
            r = [];
            for (var d = 0; d < n.length; d++)
              null !== n[d].getAttribute(a) && r.push(n[d]);
            if (r.length)
              for (d = 0; d < r.length; d++)
                (r[d].innerHTML = e[c]),
                  (r[d].style.backgroundImage = "none"),
                  r[d].removeAttribute(a);
          }
          return r;
        },
        s = function(n) {
          "svg" === e.method &&
            r(function() {
              c(i(a(e.href))), "function" == typeof n && n();
            });
        };
      (e.embedIcons = c),
        (e.getCSS = a),
        (e.getIcons = i),
        (e.ready = r),
        (e.svgLoadedCallback = s),
        (e.embedSVG = s);
    })(grunticon, this);
})();
grunticon(
  [
    "gfx/icons.data.svg.css",
    "gfx/icons.data.png.css",
    "gfx/icons.fallback.css"
  ],
  grunticon.svgLoadedCallback
);
