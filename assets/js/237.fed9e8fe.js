(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{1506:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端系统架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端系统架构"}},[t._v("#")]),t._v(" 前端系统架构")]),t._v(" "),a("h2",{attrs:{id:"状态管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[t._v("#")]),t._v(" 状态管理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("某一状态能够被有效记录")]),t._v(" "),a("ul",[a("li",[t._v("dom attribute")]),t._v(" "),a("li",[t._v("jq（事件 dom）")])])]),t._v(" "),a("li",[a("p",[t._v("状态的变化能被有效感知和响应")]),t._v(" "),a("ul",[a("li",[t._v("backbone（事件 model）")])])]),t._v(" "),a("li",[a("p",[t._v("状态的改变能驱动界面的变化")]),t._v(" "),a("ul",[a("li",[t._v("angular（脏检查机制）")]),t._v(" "),a("li",[t._v("单向数据流")])])]),t._v(" "),a("li",[a("p",[t._v("界面是状态的映射")]),t._v(" "),a("ul",[a("li",[t._v("vue")]),t._v(" "),a("li",[t._v("集中管理")])])]),t._v(" "),a("li",[a("p",[t._v("集中管理状态")]),t._v(" "),a("ul",[a("li",[t._v("观察者")]),t._v(" "),a("li",[t._v("mobx、redux、vuex")]),t._v(" "),a("li",[t._v("框架层、UI层只是应用的壳，而状态以及状态的驱动才是应用的魂")]),t._v(" "),a("li",[t._v("一旦进入中心化状态管理器，那么就遇到内存持久不能释放，还要解决数据重置等问题。（不一定是共享状态，共享一个函数，共享一个模块，共享一个类的实例，都会遇到）")]),t._v(" "),a("li",[t._v("简单是对使用者说的，而扩展性则是对开发者说的。通过扩展性，简单工具可以变成功能强大的功能，扩展性设计是考验能力的，并非每个开发者都能做到，但是，这是基本面。")])])]),t._v(" "),a("li",[a("p",[t._v("性能的改变")])]),t._v(" "),a("li",[a("p",[t._v("效率的改变")])]),t._v(" "),a("li",[a("p",[t._v("编程范式")]),t._v(" "),a("ul",[a("li",[t._v("直接对DOM节点操作")]),t._v(" "),a("li",[t._v("单向数据流")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onNodeExpand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" evt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变 model 状态")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("treeModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNodeModelVisible")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步子节点的 visible 状态")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接改变 dom 的展开、收缩")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到当前节点 dom的父亲的兄弟元素，进行显示处理，这里不得不使用 attribute 作为状态的管理。这样后续维护困难，没有用上 model 的状态管理 view 的更新")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" evt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tagName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" treeNodeCon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tagName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" childrenDom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" treeNodeCon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextElementSibling"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("treeNodeCon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expand"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      treeNodeCon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cl-icon-unfold"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      treeNodeCon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expand"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      childrenDom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      treeNodeCon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cl-icon-unfold"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      childrenDom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      treeNodeCon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expand"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO 后续看看是否需要通过 model 改变来更新视图。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("jquery 中只针对 DOM 的事件系统，而 backbone 可以脱离DOM，对数据变化进行监听。")]),t._v(" "),a("ul",[a("li",[t._v("jquery")]),t._v(" "),a("li",[t._v("backbone")]),t._v(" "),a("li",[t._v("事件派发与更新")])]),t._v(" "),a("h2",{attrs:{id:"分布式系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统"}},[t._v("#")]),t._v(" 分布式系统")]),t._v(" "),a("h2",{attrs:{id:"mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[t._v("#")]),t._v(" MVC")]),t._v(" "),a("ul",[a("li",[t._v("Model（除了数据，里面也有 controller，用于控制数据变化的业务逻辑。）")]),t._v(" "),a("li",[t._v("View（渲染视图的逻辑，数据依赖于 Model）")]),t._v(" "),a("li",[t._v("Controller（用于控制视图变化的交互逻辑）")])]),t._v(" "),a("p",[t._v("通常 controller 通常分为两部分，很少把 controller 单独抽离出来的。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一部分是位于 Model 里")])]),t._v(" "),a("li",[a("p",[t._v("一部分位于 view 里\n像一个业务 vue 组件，操作业务数据与视图交互的逻辑明显是混合在一起了。")])]),t._v(" "),a("li",[a("p",[t._v("model 改变，触发 view 里的 controller 进行视图更新。")])]),t._v(" "),a("li",[a("p",[t._v("view 交互，触发 model 里的 controller 进行数据改变。")])]),t._v(" "),a("li",[a("p",[t._v("view 的显示依赖于 model。")])])]),t._v(" "),a("h3",{attrs:{id:"事件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件系统"}},[t._v("#")]),t._v(" 事件系统")]),t._v(" "),a("h3",{attrs:{id:"virtual-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" virtual dom")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("前端架构 101系列\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/145441907",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端架构 101（一）：在谈论它们之前我们需要达成的共识"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/145443596",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端架构 101（三）：MVC 启示录：模块的职责，作用域和通信"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("《前端框架设计》")]),t._v(" "),a("li",[t._v("状态管理\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://cdc.tencent.com/2020/05/22/frontend-state-management-research/",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端状态管理"),a("OutboundLink")],1),t._v(" 挺有深度的文章，值得精读。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25800767",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈前端状态管理（上）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25908872",target:"_blank",rel:"noopener noreferrer"}},[t._v("浅谈前端状态管理（下）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29237682",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue 状态管理的一点思考"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/63207283",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trie 树与不可变数据结构"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);