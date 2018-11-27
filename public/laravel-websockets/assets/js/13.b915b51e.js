(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{169:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),n("p",[t._v("Laravel WebSockets can be installed via composer:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("composer require beyondcode/laravel-websockets\n")])])]),n("p",[t._v("The package will automatically register a service provider.")]),t._v(" "),n("p",[t._v("Next, you need to publish the WebSocket configuration file:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("php artisan vendor:publish --provider"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"BeyondCode\\LaravelWebSockets\\WebSocketsServiceProvider"')]),t._v(" --tag"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"config"')]),t._v("\n")])])]),n("p",[t._v("This is the default content of the config file that will be published as  "),n("code",[t._v("config/websockets.php")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n     * This package comes with multi tenancy out of the box. Here you can\n     * configure the different clients that can use the webSockets server.\n     *\n     * You should make sure that the app id is numeric.\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'clients'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("env")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'APP_NAME'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_id'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("env")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_ID'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_key'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("env")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_KEY'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'app_secret'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("env")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'PUSHER_APP_SECRET'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n     * This class is responsible for finding the clients. The default provider\n     * will use the clients defined in this config file.\n     *\n     * You can create a custom provider by implementing the\n     * `ClientProvier` interface.\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'client_provider'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" ConfigClientProvider"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/*\n     * This array contains the hosts of which you want to allow incoming requests.\n     * Leave this empty if you want to accepts requests from all hosts.\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'allowedOrigins'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/*\n     * The maximum request size in kilobytes that is allowed for an incoming websocket request.\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'maxRequestSizeInKb'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("250")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/*\n     * Define the optional SSL context for your websocket connections.\n     * You can see all available options at: http://php.net/manual/en/context.ssl.php\n     */")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ssl'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("/*\n         * Path to local certificate file on filesystem. It must be a PEM encoded file which\n         * contains your certificate and private key. It can optionally contain the\n         * certificate chain of issuers. The private key also may be contained\n         * in a separate file specified by local_pk.\n         */")]),t._v("\n        "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'local_cert'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("/*\n         * Path to local private key file on filesystem in case of separate files for\n         * certificate (local_cert) and private key.\n         */")]),t._v("\n        "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'local_pk'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("/*\n         * Passphrase with which your local_cert file was encoded.\n         */")]),t._v("\n        "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'passphrase'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="installation.md";s.default=e.exports}}]);