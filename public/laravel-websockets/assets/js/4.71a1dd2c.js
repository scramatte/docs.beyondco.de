(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"custom-client-providers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-client-providers","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom Client Providers")]),t._v(" "),n("p",[t._v("With the multi-tenancy support of Laravel WebSockets, the default way of storing and retrieving the clients is by using the "),n("code",[t._v("websockets.php")]),t._v(" config file.")]),t._v(" "),n("p",[t._v("Depending on your setup, you might have your client stored elsewhere and having to keep the configuration in sync with your client storage can be tedious. To simplify this, you can create your own "),n("code",[t._v("ClientProvider")]),t._v(" class that will take care of retrieving the WebSocket credentials for a specific WebSocket application.")]),t._v(" "),n("p",[t._v("In order to create your custom "),n("code",[t._v("ClientProvider")]),t._v(", create a class that implements the "),n("code",[t._v("BeyondCode\\LaravelWebSockets\\ClientProviders\\ClientProvider")]),t._v(" interface.")]),t._v(" "),n("p",[t._v("This is what it looks like:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ClientProvider")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("/**  @return array[BeyondCode\\LaravelWebSockets\\ClientProviders\\Client] */")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("all")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("array")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("findByAppId")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("int "),n("span",{attrs:{class:"token variable"}},[t._v("$appId")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("Client"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("findByAppKey")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string "),n("span",{attrs:{class:"token variable"}},[t._v("$appKey")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("Client"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Once you have implemented your own ClientProvider, you need to set it in the "),n("code",[t._v("websockets.php")]),t._v(" configuration file:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**\n * This class is responsible for finding the clients. The default provider\n * will use the clients defined in this config file.\n *\n * You can create a custom provider by implementing the\n * `ClientProvier` interface.\n */")]),t._v("\n"),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'client_provider'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" MyCustomClientProvider"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}],!1,null,null,null);a.options.__file="clientproviders.md";s.default=a.exports}}]);