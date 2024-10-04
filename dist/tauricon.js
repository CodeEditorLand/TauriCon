import { createRequire as p } from "module";
import i, { dirname as c, resolve as s } from "path";
import { IcnsImage as d, Icns as h } from "@fiahfy/icns";
import l from "chalk";
import * as e from "fs-extra";
import n from "imagemin";
import t from "imagemin-optipng";
import r from "imagemin-zopfli";
import o from "is-png";
import f from "ms";
import { readChunk as a } from "read-chunk";
import u from "sharp";

function g(e, n, t, r) {
	return new (t || (t = Promise))(function (o, i) {
		function s(e) {
			try {
				a(r.next(e));
			} catch (e) {
				i(e);
			}
		}
		function c(e) {
			try {
				a(r.throw(e));
			} catch (e) {
				i(e);
			}
		}
		function a(e) {
			var n;
			e.done
				? o(e.value)
				: ((n = e.value),
					n instanceof t
						? n
						: new t(function (e) {
								e(n);
							})).then(s, c);
		}
		a((r = r.apply(e, n || [])).next());
	});
}
function v(e, n) {
	var t,
		r,
		o,
		i,
		s = {
			label: 0,
			sent: function () {
				if (1 & o[0]) throw o[1];
				return o[1];
			},
			trys: [],
			ops: [],
		};
	return (
		(i = { next: c(0), throw: c(1), return: c(2) }),
		"function" == typeof Symbol &&
			(i[Symbol.iterator] = function () {
				return this;
			}),
		i
	);
	function c(i) {
		return function (c) {
			return (function (i) {
				if (t) throw new TypeError("Generator is already executing.");
				for (; s; )
					try {
						if (
							((t = 1),
							r &&
								(o =
									2 & i[0]
										? r.return
										: i[0]
											? r.throw ||
												((o = r.return) && o.call(r), 0)
											: r.next) &&
								!(o = o.call(r, i[1])).done)
						)
							return o;
						switch (
							((r = 0), o && (i = [2 & i[0], o.value]), i[0])
						) {
							case 0:
							case 1:
								o = i;
								break;
							case 4:
								return s.label++, { value: i[1], done: !1 };
							case 5:
								s.label++, (r = i[1]), (i = [0]);
								continue;
							case 7:
								(i = s.ops.pop()), s.trys.pop();
								continue;
							default:
								if (
									!((o = s.trys),
									(o = o.length > 0 && o[o.length - 1]) ||
										(6 !== i[0] && 2 !== i[0]))
								) {
									s = 0;
									continue;
								}
								if (
									3 === i[0] &&
									(!o || (i[1] > o[0] && i[1] < o[3]))
								) {
									s.label = i[1];
									break;
								}
								if (6 === i[0] && s.label < o[1]) {
									(s.label = o[1]), (o = i);
									break;
								}
								if (o && s.label < o[2]) {
									(s.label = o[2]), s.ops.push(i);
									break;
								}
								o[2] && s.ops.pop(), s.trys.pop();
								continue;
						}
						i = n.call(e, s);
					} catch (e) {
						(i = [6, e]), (r = 0);
					} finally {
						t = o = 0;
					}
				if (5 & i[0]) throw i[1];
				return { value: i[0] ? i[1] : void 0, done: !0 };
			})([i, c]);
		};
	}
}
var b,
	m,
	x = function (e, n) {
		return (
			void 0 === n && (n = l.green),
			function (t) {
				var r = +new Date(),
					o = r - (b || r);
				(b = r),
					t
						? console.log(
								" "
									.concat(n(String(e)), " ")
									.concat(t, " ")
									.concat(l.green("+".concat(f(o)))),
							)
						: console.log();
			}
		);
	},
	w = x("tauri", l.red),
	y = p(import.meta.url)("glob"),
	_ = function () {
		var e,
			n =
				null !== (e = process.env.__TAURI_TEST_APP_DIR) && void 0 !== e
					? e
					: process.cwd(),
			t = y.sync("**/tauri.conf.json", {
				cwd: n,
				ignore: ["**/node_modules/**", "**/target/**"],
			});
		return 0 === t.length
			? (w(
					"Couldn't recognize the current folder as a part of a Tauri project. It must contain a `tauri.conf.json` file in any subfolder.",
				),
				process.exit(1),
				"")
			: c(s(n, t[0]));
	},
	k =
		null !==
			(m = (function () {
				var e,
					n =
						null !== (e = process.env.__TAURI_TEST_APP_DIR) &&
						void 0 !== e
							? e
							: process.cwd(),
					t = y.sync("**/package.json", {
						cwd: n,
						ignore: ["**/node_modules/**", "**/target/**"],
					});
				return 0 === t.length ? null : c(s(n, t[0]));
			})()) && void 0 !== m
			? m
			: s(_(), ".."),
	z = _(),
	R = {
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
	S = e.default,
	I = S.access,
	T = S.ensureDir,
	j = S.ensureFileSync,
	E = S.writeFileSync,
	O = p(import.meta.url),
	P = O("../package.json").version,
	F = O("../src/helpers/icns.json"),
	A = O("png-to-ico"),
	B = x("app:spawn"),
	D = x("app:spawn", l.red),
	L = !1,
	q = null,
	N = function (e) {
		return g(this, void 0, void 0, function () {
			return v(this, function (n) {
				switch (n.label) {
					case 0:
						return n.trys.push([0, 2, , 3]), [4, I(e)];
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
	C = function (e) {
		return g(void 0, void 0, void 0, function () {
			var n, t;
			return v(this, function (r) {
				switch (r.label) {
					case 0:
						return !1 === L ? [3, 1] : [2, L];
					case 1:
						return [4, N(e)];
					case 2:
						return r.sent()
							? [3, 3]
							: ((L = !1),
								q && clearInterval(q),
								D(
									"[ERROR] Source image for tauricon not found",
								),
								process.exit(1),
								[3, 8]);
					case 3:
						return [4, a(e, { startPosition: 0, length: 8 })];
					case 4:
						return (
							(n = r.sent()),
							o(n) || ".svg" === i.extname(e)
								? [4, (L = u(e)).metadata()]
								: [3, 7]
						);
					case 5:
						return (
							((t = r.sent()).hasAlpha && 4 === t.channels) ||
								(q && clearInterval(q),
								D(
									"[ERROR] Source image for tauricon is not transparent",
								),
								process.exit(1)),
							[4, L.stats()]
						);
					case 6:
						return (
							r.sent().isOpaque &&
								(q && clearInterval(q),
								D(
									"[ERROR] Source image for tauricon could not be detected as transparent",
								),
								process.exit(1)),
							[2, L]
						);
					case 7:
						(L = !1),
							q && clearInterval(q),
							D(
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
	G = function (e) {
		var n = [];
		for (var t in e) {
			var r = e[String(t)];
			r.folder && n.push(r.folder);
		}
		return (n = n.sort().filter(function (e, n, t) {
			return !n || e !== t[n - 1];
		}));
	},
	M = function (e) {
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
	U = function (e, n) {
		return g(void 0, void 0, void 0, function () {
			return v(this, function (t) {
				switch (t.label) {
					case 0:
						return void 0 === n ? [3, 2] : [4, T(n)];
					case 1:
						t.sent(), (t.label = 2);
					case 2:
						return [4, C(e)];
					case 3:
						return [2, t.sent()];
				}
			});
		});
	},
	$ = function (e) {
		process.stdout.write("  ".concat(e, "                       \r"));
	},
	H = {
		validate: function (e, n) {
			return g(this, void 0, void 0, function () {
				return v(this, function (t) {
					switch (t.label) {
						case 0:
							return [4, U(e, n)];
						case 1:
							return t.sent(), [2, "object" == typeof L];
					}
				});
			});
		},
		version: function () {
			return P;
		},
		make: function (e, n, t, r) {
			return (
				void 0 === n && (n = i.resolve(z, "icons")),
				g(this, void 0, void 0, function () {
					return v(this, function (o) {
						switch (o.label) {
							case 0:
								return (
									e || (e = i.resolve(k, "app-icon.png")),
									(q =
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
									(r = r || R.tauri),
									$(
										'Building Tauri icns and ico from "'.concat(
											e,
											'"',
										),
									),
									[4, this.validate(e, n)]
								);
							case 1:
								return o.sent(), [4, this.icns(e, n, r, t)];
							case 2:
								return (
									o.sent(),
									$("Building Tauri png icons"),
									[4, this.build(e, n, r)]
								);
							case 3:
								return (
									o.sent(),
									t
										? ($(
												"Minifying assets with ".concat(
													t,
												),
											),
											[4, this.minify(n, r, t, "batch")])
										: [3, 5]
								);
							case 4:
								return o.sent(), [3, 6];
							case 5:
								B("no minify strategy"), (o.label = 6);
							case 6:
								return (
									$("Tauricon Finished"),
									q && clearInterval(q),
									[2, !0]
								);
						}
					});
				})
			);
		},
		build: function (e, n, t) {
			return g(this, void 0, void 0, function () {
				var r, o, s, c, a, l, f, p, d, h, b, m, x, w, y, _, k, z;
				return v(this, function (R) {
					switch (R.label) {
						case 0:
							return [4, this.validate(e, n)];
						case 1:
							for (a in (R.sent(),
							(r = u(e)),
							(o = function (e) {
								return g(this, void 0, void 0, function () {
									var n, o, i;
									return v(this, function (s) {
										switch (s.label) {
											case 0:
												return (
													s.trys.push([0, 2, , 3]),
													(n = r.resize(e[1], e[1])),
													e[2] &&
														((o = M(
															t.background_color,
														) || {
															r: void 0,
															g: void 0,
															b: void 0,
														}),
														n.flatten({
															background: {
																r: o.r,
																g: o.g,
																b: o.b,
																alpha: 1,
															},
														})),
													n.png(),
													[4, n.toFile(e[0])]
												);
											case 1:
												return s.sent(), [3, 3];
											case 2:
												return (
													(i = s.sent()), D(i), [3, 3]
												);
											case 3:
												return [2];
										}
									});
								});
							}),
							(c = G(t))))
								(l = c[Number(a)]),
									T("".concat(n).concat(i.sep).concat(l));
							for (p in ((f = []), t)) f.push(p);
							(d = 0), (R.label = 2);
						case 2:
							if (!(d < f.length)) return [3, 7];
							for (x in ((h = f[d]),
							(b = t[String(h)]),
							(m = []),
							b.sizes))
								m.push(x);
							(w = 0), (R.label = 3);
						case 3:
							return w < m.length
								? ((y = m[w]),
									(_ = b.sizes[String(y)]),
									b.splash
										? [3, 5]
										: ((k = ""
												.concat(n, "/")
												.concat(b.folder)),
											(s =
												!0 === b.infix
													? ""
															.concat(k)
															.concat(i.sep)
															.concat(b.prefix)
															.concat(_, "x")
															.concat(_)
															.concat(b.suffix)
													: ""
															.concat(k)
															.concat(i.sep)
															.concat(b.prefix)
															.concat(b.suffix)),
											(z = [s, _, b.background]),
											[4, o(z)]))
								: [3, 6];
						case 4:
							R.sent(), (R.label = 5);
						case 5:
							return w++, [3, 3];
						case 6:
							return d++, [3, 2];
						case 7:
							return [2];
					}
				});
			});
		},
		splash: function (e, n, t, r) {
			return g(this, void 0, void 0, function () {
				var o, s, c, a, l, f, p, d, h, g, b, m, x, w, y, _, k;
				return v(this, function (v) {
					switch (v.label) {
						case 0:
							return (
								(s = !1),
								(c = M(r.background_color) || {
									r: void 0,
									g: void 0,
									b: void 0,
								}),
								n === e && (s = !0),
								s || "generate" === r.splashscreen_type
									? [4, this.validate(e, t)]
									: [3, 2]
							);
						case 1:
							return (
								v.sent(),
								L || process.exit(1),
								(a = u(e))
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
								a = u(n)
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
								a = u(n).flatten({
									background: {
										r: c.r,
										g: c.g,
										b: c.b,
										alpha: 1,
									},
								});
							}
							v.label = 3;
						case 3:
							return [4, a.toBuffer()];
						case 4:
							for (p in ((l = v.sent()), (f = []), r)) f.push(p);
							(d = 0), (v.label = 5);
						case 5:
							if (!(d < f.length)) return [3, 11];
							for (m in ((h = f[d]),
							(g = r[String(h)]),
							(b = []),
							g.sizes))
								b.push(m);
							(x = 0), (v.label = 6);
						case 6:
							return x < b.length
								? ((w = b[x]),
									(y = g.sizes[String(w)]),
									g.splash
										? ((_ = ""
												.concat(t)
												.concat(i.sep)
												.concat(g.folder)),
											[4, T(_)])
										: [3, 9])
								: [3, 10];
						case 7:
							return (
								v.sent(),
								(o =
									!0 === g.infix
										? ""
												.concat(_)
												.concat(i.sep)
												.concat(g.prefix)
												.concat(y, "x")
												.concat(y)
												.concat(g.suffix)
										: ""
												.concat(_)
												.concat(i.sep)
												.concat(g.prefix)
												.concat(g.suffix)),
								(k = [o, y]),
								[4, u(l).resize(k[1][0], k[1][1]).toFile(k[0])]
							);
						case 8:
							v.sent(), (v.label = 9);
						case 9:
							return x++, [3, 6];
						case 10:
							return d++, [3, 5];
						case 11:
							return [2];
					}
				});
			});
		},
		minify: function (e, o, s, c) {
			return g(this, void 0, void 0, function () {
				var a,
					u,
					l,
					f,
					p,
					d,
					h,
					b,
					m,
					x = this;
				return v(this, function (w) {
					switch (w.label) {
						case 0:
							switch (
								((u = R.minify).available.find(function (e) {
									return e === s;
								}) || (s = u.type),
								s)
							) {
								case "optipng":
									a = t(u.optipngOptions);
									break;
								case "zopfli":
									a = r(u.zopfliOptions);
									break;
								default:
									throw new Error("unknown strategy" + s);
							}
							switch (
								((l = function (e, t) {
									return g(x, void 0, void 0, function () {
										return v(this, function (r) {
											switch (r.label) {
												case 0:
													return [
														4,
														n([e[0]], {
															destination: e[1],
															plugins: [t],
														}).catch(function (e) {
															D(e);
														}),
													];
												case 1:
													return r.sent(), [2];
											}
										});
									});
								}),
								c)
							) {
								case "singlefile":
									return [3, 1];
								case "batch":
									return [3, 3];
							}
							return [3, 8];
						case 1:
							return [4, l([e, i.dirname(e)], a)];
						case 2:
							return w.sent(), [3, 9];
						case 3:
							for (d in ((f = G(o)), (p = []), f)) p.push(d);
							(h = 0), (w.label = 4);
						case 4:
							return h < p.length
								? ((b = p[h]),
									(m = f[Number(b)]),
									B("batch minify:" + String(m)),
									[
										4,
										l(
											[
												""
													.concat(e)
													.concat(i.sep)
													.concat(m)
													.concat(i.sep, "*.png"),
												""
													.concat(e)
													.concat(i.sep)
													.concat(m),
											],
											a,
										),
									])
								: [3, 7];
						case 5:
							w.sent(), (w.label = 6);
						case 6:
							return h++, [3, 4];
						case 7:
							return [3, 9];
						case 8:
							D(
								"[ERROR] Minify mode must be one of [ singlefile | batch]",
							),
								process.exit(1),
								(w.label = 9);
						case 9:
							return [2, "minified"];
					}
				});
			});
		},
		icns: function (e, n, t, r) {
			return g(this, void 0, void 0, function () {
				var t, r, o, s, c, a, l, f, p, g, b, m;
				return v(this, function (v) {
					switch (v.label) {
						case 0:
							return (
								v.trys.push([0, 8, , 9]),
								L || process.exit(1),
								[4, this.validate(e, n)]
							);
						case 1:
							return (
								v.sent(),
								[4, (t = u(e)).resize(32, 32).toBuffer()]
							);
						case 2:
							for (c in ((r = v.sent()),
							(o = new h()),
							(s = []),
							F))
								s.push(c);
							(a = 0), (v.label = 3);
						case 3:
							return a < s.length
								? ((l = s[a]),
									(f = F[l]),
									[
										4,
										t
											.resize(f.size, f.size)
											.png({
												compressionLevel: 9,
												effort: 10,
											})
											.toBuffer(),
									])
								: [3, 6];
						case 4:
							(p = v.sent()),
								(g = d.fromPNG(p, f.ostype)),
								o.append(g),
								(v.label = 5);
						case 5:
							return a++, [3, 3];
						case 6:
							return (
								j(i.join(n, "/icon.icns")),
								E(i.join(n, "/icon.icns"), o.data),
								[4, A([r])]
							);
						case 7:
							if (null === (b = v.sent()))
								throw new Error("Failed to create icon.ico");
							return (
								j(i.join(n, "/icon.ico")),
								E(i.join(n, "/icon.ico"), b),
								[3, 9]
							);
						case 8:
							throw ((m = v.sent()), console.error(m), m);
						case 9:
							return [2];
					}
				});
			});
		},
	};
export { H as default };
