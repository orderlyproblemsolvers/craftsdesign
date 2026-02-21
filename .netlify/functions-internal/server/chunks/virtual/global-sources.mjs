const sources = [
    {
        "sourceType": "user",
        "fetch": "/api/sitemap-urls"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/",
                "lastmod": "2026-02-21T11:07:42.785Z"
            },
            {
                "loc": "/about",
                "lastmod": "2026-02-21T11:31:52.655Z"
            },
            {
                "loc": "/admin",
                "lastmod": "2026-02-21T11:36:51.079Z"
            },
            {
                "loc": "/admin/login",
                "lastmod": "2026-02-21T06:02:15.621Z"
            },
            {
                "loc": "/collections",
                "lastmod": "2026-02-21T11:32:17.353Z"
            },
            {
                "loc": "/admin/products",
                "lastmod": "2026-02-21T11:35:49.826Z"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:route-rules",
            "description": "Generated from your route rules config.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:route-rules'] }`."
            ]
        },
        "urls": [
            "/confirm"
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
