(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1364:function(e,o,t){"use strict";t.r(o);var s=t(44),l=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_2021-年"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2021-年"}},[e._v("#")]),e._v(" 2021 年")]),e._v(" "),t("h2",{attrs:{id:"一月"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一月"}},[e._v("#")]),e._v(" 一月")]),e._v(" "),t("h3",{attrs:{id:"cookie-无法自动携带问题排查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie-无法自动携带问题排查"}},[e._v("#")]),e._v(" cookie 无法自动携带问题排查")]),e._v(" "),t("ol",[t("li",[e._v("是否设置了 withCredentials")]),e._v(" "),t("li",[e._v("检查请求报文")]),e._v(" "),t("li",[e._v("确认后台的配置是否正确，这个可以通过查看请求的响应报文来判断。\n如果是跨域请求，后端的请求是要配置 cors 的。这块后端具体要怎么写代码，我是不熟悉的，但是这并不影响我们进行判断。\n首先请确认跨域请求是否正常，预检是否返回 200。查看报文，复杂请求，在请求前还有一个 options 请求，看看他是否返回了 200，如果没有就证明它的配置存在问题。\n大体上后端涉及配置请求头如下：\nAccess-Control-Allow-Origin: "),t("origin",[e._v(" | _ // 授权的访问源\nAccess-Control-Max-Age: "),t("delta-seconds",[e._v(" // 预检授权的有效期，单位：秒\nAccess-Control-Allow-Credentials: true | false // 是否允许携带 Cookie\nAccess-Control-Allow-Methods: "),t("method",[e._v("[, "),t("method",[e._v("]_ // 允许的请求动词\nAccess-Control-Allow-Headers: "),t("field-name",[e._v("[, "),t("field-name",[e._v("]_ // 额外允许携带的请求头\nAccess-Control-Expose-Headers: "),t("field-name",[e._v("[, "),t("field-name",[e._v("]_ // 额外允许访问的响应头")])],1)],1)],1)],1)],1)],1)],1)],1)]),e._v(" "),t("p",[e._v("重点留意")]),e._v(" "),t("p",[e._v("Access-Control-Allow-Credentials 是否配置了 true\nAccess-Control-Allow-Origin 必须要配置，而且不能是*\n尤其是第二点，很多时候，尤其是开发阶段，后端往往喜欢将 Access-Control-Allow-Origin 配置为*，但是如果要携带 cookie 的话就不可以这样子配置了")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("浏览器是可以禁用 cookie 的，请确认一下你的浏览器有没有禁用了 cookie,或者是否设置了阻止外部所有 cookie")]),e._v(" "),t("li",[e._v("你的浏览器是不是装了许多插件，会不会是你的插件导致的问题")]),e._v(" "),t("li",[e._v("你有没有用什么工具模拟请求，会不会是其中的设置有问题")]),e._v(" "),t("li",[e._v("cookie 其实还有一些属性的，例如 domain、path、失效时间、大小等。其中，path 有设置什么值吗？如果设置了就只会向指定路径发送 cookie 了，（domain、path 这里的设置效果是，假如要请求的地址跟 set-cookie 时的地址一致，那么请求时就会携带上改请求。）")]),e._v(" "),t("li",[e._v("还有一点，后台返回的 cookie 是有可能被浏览器隐藏无法在控制台显示的，你可以在这里确认 cookie 是否已经设置了")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/haishangfeie/article/details/103848588",target:"_blank",rel:"noopener noreferrer"}},[e._v("cookie 无法自动携带问题排查"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=l.exports}}]);