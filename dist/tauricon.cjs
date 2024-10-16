"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("fs-extra"),
	n = require("imagemin"),
	t = require("imagemin-optipng"),
	r = require("imagemin-zopfli"),
	i = require("is-png"),
	a = require("path"),
	c = require("read-chunk"),
	o = require("sharp"),
	s = require("chalk"),
	u = require("ms"),
	l = require("module"),
	f = require("@fiahfy/icns");
function p(e) {
	return e && "object" == typeof e && "default" in e ? e : { default: e };
}
function d(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	return (
		e &&
			Object.keys(e).forEach(function (t) {
				if ("default" !== t) {
					var r = Object.getOwnPropertyDescriptor(e, t);
					Object.defineProperty(
						n,
						t,
						r.get
							? r
							: {
									enumerable: !0,
									get: function () {
										return e[t];
									},
								},
					);
				}
			}),
		(n.default = e),
		Object.freeze(n)
	);
}
var h,
	g = d(e),
	v = p(n),
	b = p(t),
	m = p(r),
	w = p(i),
	x = p(a),
	y = p(o),
	_ = p(s),
	R = p(u);
function k(e, n, t, r) {
	return new (t || (t = Promise))(function (i, a) {
		function c(e) {
			try {
				s(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function o(e) {
			try {
				s(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			var n;
			e.done
				? i(e.value)
				: ((n = e.value),
					n instanceof t
						? n
						: new t(function (e) {
								e(n);
							})).then(c, o);
		}
		s((r = r.apply(e, n || [])).next());
	});
}
function z(e, n) {
	var t,
		r,
		i,
		a,
		c = {
			label: 0,
			sent: function () {
				if (1 & i[0]) throw i[1];
				return i[1];
			},
			trys: [],
			ops: [],
		};
	return (
		(a = { next: o(0), throw: o(1), return: o(2) }),
		"function" == typeof Symbol &&
			(a[Symbol.iterator] = function () {
				return this;
			}),
		a
	);
	function o(a) {
		return function (o) {
			return (function (a) {
				if (t) throw new TypeError("Generator is already executing.");
				for (; c; )
					try {
						if (
							((t = 1),
							r &&
								(i =
									2 & a[0]
										? r.return
										: a[0]
											? r.throw ||
												((i = r.return) && i.call(r), 0)
											: r.next) &&
								!(i = i.call(r, a[1])).done)
						)
							return i;
						switch (
							((r = 0), i && (a = [2 & a[0], i.value]), a[0])
						) {
							case 0:
							case 1:
								i = a;
								break;
							case 4:
								return c.label++, { value: a[1], done: !1 };
							case 5:
								c.label++, (r = a[1]), (a = [0]);
								continue;
							case 7:
								(a = c.ops.pop()), c.trys.pop();
								continue;
							default:
								if (
									!((i = c.trys),
									(i = i.length > 0 && i[i.length - 1]) ||
										(6 !== a[0] && 2 !== a[0]))
								) {
									c = 0;
									continue;
								}
								if (
									3 === a[0] &&
									(!i || (a[1] > i[0] && a[1] < i[3]))
								) {
									c.label = a[1];
									break;
								}
								if (6 === a[0] && c.label < i[1]) {
									(c.label = i[1]), (i = a);
									break;
								}
								if (i && c.label < i[2]) {
									(c.label = i[2]), c.ops.push(a);
									break;
								}
								i[2] && c.ops.pop(), c.trys.pop();
								continue;
						}
						a = n.call(e, c);
					} catch (e) {
						(a = [6, e]), (r = 0);
					} finally {
						t = i = 0;
					}
				if (5 & a[0]) throw a[1];
				return { value: a[0] ? a[1] : void 0, done: !0 };
			})([a, o]);
		};
	}
}
var S,
	j = function (e, n) {
		return (
			void 0 === n && (n = _.default.green),
			function (t) {
				var r = +new Date(),
					i = r - (h || r);
				(h = r),
					t
						? console.log(
								" "
									.concat(n(String(e)), " ")
									.concat(t, " ")
									.concat(
										_.default.green(
											"+".concat(R.default(i)),
										),
									),
							)
						: console.log();
			}
		);
	},
	I = j("tauri", _.default.red),
	q = l.createRequire(
		"undefined" == typeof document
			? new (require("url").URL)("file:" + __filename).href
			: (document.currentScript && document.currentScript.src) ||
					new URL("tauricon.cjs", document.baseURI).href,
	)("glob"),
	O = function () {
		var e,
			n =
				null !== (e = process.env.__TAURI_TEST_APP_DIR) && void 0 !== e
					? e
					: process.cwd(),
			t = q.sync("**/tauri.conf.json", {
				cwd: n,
				ignore: ["**/node_modules/**", "**/target/**"],
			});
		return 0 === t.length
			? (I(
					"Couldn't recognize the current folder as a part of a Tauri project. It must contain a `tauri.conf.json` file in any subfolder.",
				),
				process.exit(1),
				"")
			: a.dirname(a.resolve(n, t[0]));
	},
	T =
		null !==
			(S = (function () {
				var e,
					n =
						null !== (e = process.env.__TAURI_TEST_APP_DIR) &&
						void 0 !== e
							? e
							: process.cwd(),
					t = q.sync("**/package.json", {
						cwd: n,
						ignore: ["**/node_modules/**", "**/target/**"],
					});
				return 0 === t.length ? null : a.dirname(a.resolve(n, t[0]));
			})()) && void 0 !== S
			? S
			: a.resolve(O(), ".."),
	E = O(),
	P = {
		background_color: "#000074",
		theme_color: "#02aa9b",
		sharp: "kernel: sharp.kernel.lanczos3",
		minify: {
			batch: !1,
			overwrite: !0,
			available: ["optipng", "zopfli"],
			type: "optipng",
			optipngOptions: { optimizationLevel: 4, colorTypeReduction: !1 },
			zopfliOptions: { transparent: !0, more: !0 },
		},
		splash_type: "generate",
		tauri: {
			linux: {
				folder: ".",
				prefix: "",
				infix: !0,
				suffix: ".png",
				sizes: [32, 128],
			},
			linux_2x: {
				folder: ".",
				prefix: "128x128@2x",
				infix: !1,
				suffix: ".png",
				sizes: [256],
			},
			defaults: {
				folder: ".",
				prefix: "icon",
				infix: !1,
				suffix: ".png",
				sizes: [512],
			},
			appx_logo: {
				folder: ".",
				prefix: "StoreLogo",
				infix: !1,
				suffix: ".png",
				sizes: [50],
			},
			appx_square: {
				folder: ".",
				prefix: "Square",
				infix: !0,
				suffix: "Logo.png",
				sizes: [30, 44, 71, 89, 107, 142, 150, 284, 310],
			},
		},
	},
	L = g.default,
	U = L.access,
	F = L.ensureDir,
	A = L.ensureFileSync,
	B = L.writeFileSync,
	D = l.createRequire(
		"undefined" == typeof document
			? new (require("url").URL)("file:" + __filename).href
			: (document.currentScript && document.currentScript.src) ||
					new URL("tauricon.cjs", document.baseURI).href,
	),
	M = D("../package.json").version,
	C = D("../src/helpers/icns.json"),
	N = D("png-to-ico"),
	G = j("app:spawn"),
	$ = j("app:spawn", _.default.red),
	H = !1,
	J = null,
	K = function (e) {
		return k(this, void 0, void 0, function () {
			return z(this, function (n) {
				switch (n.label) {
					case 0:
						return n.trys.push([0, 2, , 3]), [4, U(e)];
					case 1:
						return n.sent(), [2, !0];
					case 2:
						return n.sent(), [2, !1];
					case 3:
						return [2];
				}
			});
		});
	},
	Q = function (e) {
		return k(void 0, void 0, void 0, function () {
			var n, t;
			return z(this, function (r) {
				switch (r.label) {
					case 0:
						return !1 === H ? [3, 1] : [2, H];
					case 1:
						return [4, K(e)];
					case 2:
						return r.sent()
							? [3, 3]
							: ((H = !1),
								J && clearInterval(J),
								$(
									"[ERROR] Source image for tauricon not found",
								),
								process.exit(1),
								[3, 8]);
					case 3:
						return [
							4,
							c.readChunk(e, { startPosition: 0, length: 8 }),
						];
					case 4:
						return (
							(n = r.sent()),
							w.default(n) || ".svg" === x.default.extname(e)
								? [4, (H = y.default(e)).metadata()]
								: [3, 7]
						);
					case 5:
						return (
							((t = r.sent()).hasAlpha && 4 === t.channels) ||
								(J && clearInterval(J),
								$(
									"[ERROR] Source image for tauricon is not transparent",
								),
								process.exit(1)),
							[4, H.stats()]
						);
					case 6:
						return (
							r.sent().isOpaque &&
								(J && clearInterval(J),
								$(
									"[ERROR] Source image for tauricon could not be detected as transparent",
								),
								process.exit(1)),
							[2, H]
						);
					case 7:
						(H = !1),
							J && clearInterval(J),
							$(
								"[ERROR] Source image for tauricon is not a png or svg file",
							),
							process.exit(1),
							(r.label = 8);
					case 8:
						return [2];
				}
			});
		});
	},
	V = function (e) {
		var n = [];
		for (var t in e) {
			var r = e[String(t)];
			r.folder && n.push(r.folder);
		}
		return (n = n.sort().filter(function (e, n, t) {
			return !n || e !== t[n - 1];
		}));
	},
	W = function (e) {
		e = e.replace(
			/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
			function (e, n, t, r) {
				return n + n + t + t + r + r;
			},
		);
		var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
		return n
			? {
					r: parseInt(n[1], 16),
					g: parseInt(n[2], 16),
					b: parseInt(n[3], 16),
				}
			: void 0;
	},
	X = function (e, n) {
		return k(void 0, void 0, void 0, function () {
			return z(this, function (t) {
				switch (t.label) {
					case 0:
						return void 0 === n ? [3, 2] : [4, F(n)];
					case 1:
						t.sent(), (t.label = 2);
					case 2:
						return [4, Q(e)];
					case 3:
						return [2, t.sent()];
				}
			});
		});
	},
	Y = function (e) {
		process.stdout.write("  ".concat(e, "                       \r"));
	},
	Z = {
		validate: function (e, n) {
			return k(this, void 0, void 0, function () {
				return z(this, function (t) {
					switch (t.label) {
						case 0:
							return [4, X(e, n)];
						case 1:
							return t.sent(), [2, "object" == typeof H];
					}
				});
			});
		},
		version: function () {
			return M;
		},
		make: function (e, n, t, r) {
			return (
				void 0 === n && (n = x.default.resolve(E, "icons")),
				k(this, void 0, void 0, function () {
					return z(this, function (i) {
						switch (i.label) {
							case 0:
								return (
									e ||
										(e = x.default.resolve(
											T,
											"app-icon.png",
										)),
									(J =
										"CI" in process.env ||
										process.argv.some(function (e) {
											return "--ci" === e;
										})
											? null
											: setInterval(function () {
													process.stdout.write(
														"/ \r",
													),
														setTimeout(function () {
															process.stdout.write(
																"- \r",
															),
																setTimeout(
																	function () {
																		process.stdout.write(
																			"\\ \r",
																		),
																			setTimeout(
																				function () {
																					process.stdout.write(
																						"| \r",
																					);
																				},
																				100,
																			);
																	},
																	100,
																);
														}, 100);
												}, 500)),
									(r = r || P.tauri),
									Y(
										'Building Tauri icns and ico from "'.concat(
											e,
											'"',
										),
									),
									[4, this.validate(e, n)]
								);
							case 1:
								return i.sent(), [4, this.icns(e, n, r, t)];
							case 2:
								return (
									i.sent(),
									Y("Building Tauri png icons"),
									[4, this.build(e, n, r)]
								);
							case 3:
								return (
									i.sent(),
									t
										? (Y(
												"Minifying assets with ".concat(
													t,
												),
											),
											[4, this.minify(n, r, t, "batch")])
										: [3, 5]
								);
							case 4:
								return i.sent(), [3, 6];
							case 5:
								G("no minify strategy"), (i.label = 6);
							case 6:
								return (
									Y("Tauricon Finished"),
									J && clearInterval(J),
									[2, !0]
								);
						}
					});
				})
			);
		},
		build: function (e, n, t) {
			return k(this, void 0, void 0, function () {
				var r, i, a, c, o, s, u, l, f, p, d, h, g, v, b, m, w, _;
				return z(this, function (R) {
					switch (R.label) {
						case 0:
							return [4, this.validate(e, n)];
						case 1:
							for (o in (R.sent(),
							(r = y.default(e)),
							(i = function (e) {
								return k(this, void 0, void 0, function () {
									var n, i, a;
									return z(this, function (c) {
										switch (c.label) {
											case 0:
												return (
													c.trys.push([0, 2, , 3]),
													(n = r.resize(e[1], e[1])),
													e[2] &&
														((i = W(
															t.background_color,
														) || {
															r: void 0,
															g: void 0,
															b: void 0,
														}),
														n.flatten({
															background: {
																r: i.r,
																g: i.g,
																b: i.b,
																alpha: 1,
															},
														})),
													n.png(),
													[4, n.toFile(e[0])]
												);
											case 1:
												return c.sent(), [3, 3];
											case 2:
												return (
													(a = c.sent()), $(a), [3, 3]
												);
											case 3:
												return [2];
										}
									});
								});
							}),
							(c = V(t))))
								(s = c[Number(o)]),
									F(
										""
											.concat(n)
											.concat(x.default.sep)
											.concat(s),
									);
							for (l in ((u = []), t)) u.push(l);
							(f = 0), (R.label = 2);
						case 2:
							if (!(f < u.length)) return [3, 7];
							for (g in ((p = u[f]),
							(d = t[String(p)]),
							(h = []),
							d.sizes))
								h.push(g);
							(v = 0), (R.label = 3);
						case 3:
							return v < h.length
								? ((b = h[v]),
									(m = d.sizes[String(b)]),
									d.splash
										? [3, 5]
										: ((w = ""
												.concat(n, "/")
												.concat(d.folder)),
											(a =
												!0 === d.infix
													? ""
															.concat(w)
															.concat(
																x.default.sep,
															)
															.concat(d.prefix)
															.concat(m, "x")
															.concat(m)
															.concat(d.suffix)
													: ""
															.concat(w)
															.concat(
																x.default.sep,
															)
															.concat(d.prefix)
															.concat(d.suffix)),
											(_ = [a, m, d.background]),
											[4, i(_)]))
								: [3, 6];
						case 4:
							R.sent(), (R.label = 5);
						case 5:
							return v++, [3, 3];
						case 6:
							return f++, [3, 2];
						case 7:
							return [2];
					}
				});
			});
		},
		splash: function (e, n, t, r) {
			return k(this, void 0, void 0, function () {
				var i, a, c, o, s, u, l, f, p, d, h, g, v, b, m, w, _;
				return z(this, function (R) {
					switch (R.label) {
						case 0:
							return (
								(a = !1),
								(c = W(r.background_color) || {
									r: void 0,
									g: void 0,
									b: void 0,
								}),
								n === e && (a = !0),
								a || "generate" === r.splashscreen_type
									? [4, this.validate(e, t)]
									: [3, 2]
							);
						case 1:
							return (
								R.sent(),
								H || process.exit(1),
								(o = y.default(e))
									.extend({
										top: 726,
										bottom: 726,
										left: 726,
										right: 726,
										background: {
											r: c.r,
											g: c.g,
											b: c.b,
											alpha: 1,
										},
									})
									.flatten({
										background: {
											r: c.r,
											g: c.g,
											b: c.b,
											alpha: 1,
										},
									}),
								[3, 3]
							);
						case 2:
							if ("overlay" === r.splashscreen_type)
								o = y
									.default(n)
									.flatten({
										background: {
											r: c.r,
											g: c.g,
											b: c.b,
											alpha: 1,
										},
									})
									.composite([{ input: e }]);
							else {
								if ("pure" !== r.splashscreen_type)
									throw new Error(
										"unknown options.splashscreen_type: ".concat(
											r.splashscreen_type,
										),
									);
								o = y.default(n).flatten({
									background: {
										r: c.r,
										g: c.g,
										b: c.b,
										alpha: 1,
									},
								});
							}
							R.label = 3;
						case 3:
							return [4, o.toBuffer()];
						case 4:
							for (l in ((s = R.sent()), (u = []), r)) u.push(l);
							(f = 0), (R.label = 5);
						case 5:
							if (!(f < u.length)) return [3, 11];
							for (g in ((p = u[f]),
							(d = r[String(p)]),
							(h = []),
							d.sizes))
								h.push(g);
							(v = 0), (R.label = 6);
						case 6:
							return v < h.length
								? ((b = h[v]),
									(m = d.sizes[String(b)]),
									d.splash
										? ((w = ""
												.concat(t)
												.concat(x.default.sep)
												.concat(d.folder)),
											[4, F(w)])
										: [3, 9])
								: [3, 10];
						case 7:
							return (
								R.sent(),
								(i =
									!0 === d.infix
										? ""
												.concat(w)
												.concat(x.default.sep)
												.concat(d.prefix)
												.concat(m, "x")
												.concat(m)
												.concat(d.suffix)
										: ""
												.concat(w)
												.concat(x.default.sep)
												.concat(d.prefix)
												.concat(d.suffix)),
								(_ = [i, m]),
								[
									4,
									y
										.default(s)
										.resize(_[1][0], _[1][1])
										.toFile(_[0]),
								]
							);
						case 8:
							R.sent(), (R.label = 9);
						case 9:
							return v++, [3, 6];
						case 10:
							return f++, [3, 5];
						case 11:
							return [2];
					}
				});
			});
		},
		minify: function (e, n, t, r) {
			return k(this, void 0, void 0, function () {
				var i,
					a,
					c,
					o,
					s,
					u,
					l,
					f,
					p,
					d = this;
				return z(this, function (h) {
					switch (h.label) {
						case 0:
							switch (
								((a = P.minify).available.find(function (e) {
									return e === t;
								}) || (t = a.type),
								t)
							) {
								case "optipng":
									i = b.default(a.optipngOptions);
									break;
								case "zopfli":
									i = m.default(a.zopfliOptions);
									break;
								default:
									throw new Error("unknown strategy" + t);
							}
							switch (
								((c = function (e, n) {
									return k(d, void 0, void 0, function () {
										return z(this, function (t) {
											switch (t.label) {
												case 0:
													return [
														4,
														v
															.default([e[0]], {
																destination:
																	e[1],
																plugins: [n],
															})
															.catch(
																function (e) {
																	$(e);
																},
															),
													];
												case 1:
													return t.sent(), [2];
											}
										});
									});
								}),
								r)
							) {
								case "singlefile":
									return [3, 1];
								case "batch":
									return [3, 3];
							}
							return [3, 8];
						case 1:
							return [4, c([e, x.default.dirname(e)], i)];
						case 2:
							return h.sent(), [3, 9];
						case 3:
							for (u in ((o = V(n)), (s = []), o)) s.push(u);
							(l = 0), (h.label = 4);
						case 4:
							return l < s.length
								? ((f = s[l]),
									(p = o[Number(f)]),
									G("batch minify:" + String(p)),
									[
										4,
										c(
											[
												""
													.concat(e)
													.concat(x.default.sep)
													.concat(p)
													.concat(
														x.default.sep,
														"*.png",
													),
												""
													.concat(e)
													.concat(x.default.sep)
													.concat(p),
											],
											i,
										),
									])
								: [3, 7];
						case 5:
							h.sent(), (h.label = 6);
						case 6:
							return l++, [3, 4];
						case 7:
							return [3, 9];
						case 8:
							$(
								"[ERROR] Minify mode must be one of [ singlefile | batch]",
							),
								process.exit(1),
								(h.label = 9);
						case 9:
							return [2, "minified"];
					}
				});
			});
		},
		icns: function (e, n, t, r) {
			return k(this, void 0, void 0, function () {
				var t, r, i, a, c, o, s, u, l, p, d, h;
				return z(this, function (g) {
					switch (g.label) {
						case 0:
							return (
								g.trys.push([0, 8, , 9]),
								H || process.exit(1),
								[4, this.validate(e, n)]
							);
						case 1:
							return (
								g.sent(),
								[
									4,
									(t = y.default(e))
										.resize(32, 32)
										.toBuffer(),
								]
							);
						case 2:
							for (c in ((r = g.sent()),
							(i = new f.Icns()),
							(a = []),
							C))
								a.push(c);
							(o = 0), (g.label = 3);
						case 3:
							return o < a.length
								? ((s = a[o]),
									(u = C[s]),
									[
										4,
										t
											.resize(u.size, u.size)
											.png({
												compressionLevel: 9,
												effort: 10,
											})
											.toBuffer(),
									])
								: [3, 6];
						case 4:
							(l = g.sent()),
								(p = f.IcnsImage.fromPNG(l, u.ostype)),
								i.append(p),
								(g.label = 5);
						case 5:
							return o++, [3, 3];
						case 6:
							return (
								A(x.default.join(n, "/icon.icns")),
								B(x.default.join(n, "/icon.icns"), i.data),
								[4, N([r])]
							);
						case 7:
							if (null === (d = g.sent()))
								throw new Error("Failed to create icon.ico");
							return (
								A(x.default.join(n, "/icon.ico")),
								B(x.default.join(n, "/icon.ico"), d),
								[3, 9]
							);
						case 8:
							throw ((h = g.sent()), console.error(h), h);
						case 9:
							return [2];
					}
				});
			});
		},
	};
exports.default = Z;
