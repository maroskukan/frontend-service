const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BKvSUMRb.js","app":"_app/immutable/entry/app.CITC7Sab.js","imports":["_app/immutable/entry/start.BKvSUMRb.js","_app/immutable/chunks/entry.DrDctZvM.js","_app/immutable/chunks/scheduler.KIPEeUFd.js","_app/immutable/entry/app.CITC7Sab.js","_app/immutable/chunks/scheduler.KIPEeUFd.js","_app/immutable/chunks/index.D7uWRICJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-C6Mtcsb9.js')),
			__memo(() => import('./chunks/1-9Axltw_K.js')),
			__memo(() => import('./chunks/2-Br6WF0KV.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
