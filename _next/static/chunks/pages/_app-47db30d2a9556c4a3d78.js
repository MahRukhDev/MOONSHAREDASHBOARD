(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888, 179],
  {
    3214: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          default: function () {
            return R;
          },
        });
      var r = e(7294),
        c = e.n(r),
        o = e(809),
        u = e.n(o),
        a = e(2447),
        l = e(4047),
        i = e(2700),
        f = e(4706),
        s = e(8127),
        m = e(4102),
        p = e(775),
        d = e(6265),
        v = e(9755),
        _ = e.n(v),
        h = e(7363),
        N = c().createElement;
      function E(t) {
        var n = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var e,
            r = (0, p.Z)(t);
          if (n) {
            var c = (0, p.Z)(this).constructor;
            e = Reflect.construct(r, arguments, c);
          } else e = r.apply(this, arguments);
          return (0, m.Z)(this, e);
        };
      }
      var g = e(7918),
        y = (new g().utils.BN, r.Component, c().createElement);
      function b() {
        return y(
          c().Fragment,
          null,
          y("div", { className: "sidenav-overlay" }),
          y(
            "footer",
            { className: "footer footer-light footer-static" },
            y(
              "div",
              { className: "clearfix mb-0" },
              y(
                "div",
                {
                  className: "d-flex justify-content-center col-12 text-center",
                },
                y(
                  "span",
                  {
                    className: "float-md-start d-block d-md-inline-block mt-25",
                  },
                  y(
                    "b",
                    null,
                    "COPYRIGHT \xa9 2023 ",
                    y("a", { href: "#", target: "_blank" }, "MOONSHARE")
                  )
                )
              )
            )
          ),
          y("div", { className: "scroll-to-top" })
        );
      }
      var k = c().createElement;
      function w(t) {
        var n = t.children;
        return k(c().Fragment, null, n, k(b, null));
      }
      var C = c().createElement;
      var R = function (t) {
        var n = t.Component,
          e = t.pageProps;
        return C(w, null, C(n, e));
      };
    },
    1780: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return e(3214);
        },
      ]);
    },
    6601: function () {},
    9214: function () {},
    5568: function () {},
    4453: function () {},
    2361: function () {},
    4616: function () {},
  },
  function (t) {
    var n = function (n) {
      return t((t.s = n));
    };
    t.O(0, [774, 543, 571, 351, 537, 433], function () {
      return n(1780), n(2441);
    });
    var e = t.O();
    _N_E = e;
  },
]);
