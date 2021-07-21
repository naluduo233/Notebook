(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1235:function(t,s,a){t.exports=a.p+"assets/img/2020-06-21-00-28-43-reflow-replaint-browser.c357b8ad.png"},1236:function(t,s,a){t.exports=a.p+"assets/img/2020-06-21-00-29-08-virtual-dom.dfc8a0c4.png"},1237:function(t,s,a){t.exports=a.p+"assets/img/dom-diff.3328ffee.png"},1238:function(t,s,a){t.exports=a.p+"assets/img/2020-06-27-12-22-51-diff.7427c09e.png"},1627:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"virtual-dom-的概念与应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-的概念与应用"}},[t._v("#")]),t._v(" Virtual DOM 的概念与应用")]),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("h2",{attrs:{id:"追根溯源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#追根溯源"}},[t._v("#")]),t._v(" 追根溯源")]),t._v(" "),n("p",[t._v("虚拟 DOM 出现的本质原因是解决直接操作 DOM 导致的重绘和重排的问题。")]),t._v(" "),n("p",[t._v("关于虚拟 DOM：\n为什么要有虚拟 DOM 的出现，因为操作频繁真正 dom 会导致页面重排和重绘这两个性能问题，间接导致卡顿。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1235),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"虚拟-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom"}},[t._v("#")]),t._v(" 虚拟 DOM")]),t._v(" "),n("h3",{attrs:{id:"什么是虚拟-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟-dom"}},[t._v("#")]),t._v(" 什么是虚拟 DOM")]),t._v(" "),n("p",[t._v("所谓的 "),n("code",[t._v("vitural dom")]),t._v("，也就是虚拟节点。它通过 JS 的 Object 对象模拟 DOM 中的节点，然后再通过特定的 "),n("code",[t._v("render")]),t._v(" 方法将其渲染成真实的 DOM 节点。"),n("code",[t._v("dom diff")]),t._v(" 是通过 JS 层面的计算，返回一个 "),n("code",[t._v("patch")]),t._v(" 对象，即补丁对象，再通过特定的操作解析 "),n("code",[t._v("patch")]),t._v(" 对象，完成页面的重新渲染。")]),t._v(" "),n("p",[t._v("那么虚拟 DOM 做了哪些事情?")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1236),alt:""}})]),t._v(" "),n("p",[t._v("思路：将页面的改变的内容应用到虚拟 DOM 上，而不是直接应用到 DOM 上。变化被应用到 虚拟 DOM 上时，虚拟 DOM 并不着急去渲染页面，仅仅是调整虚拟 DOM 的内部状态，这样就不会频繁触发重绘和重排，操作 DOM 的代价也变低。这也是为什么我们提倡在 Vue 中尽量通过改变数据触发 Vue 的虚拟 DOM 更新逻辑，不要直接自己去操作 DOM。在虚拟 DOM 接受到足够的改变时，再把这些变化应用到真实的 DOM 上（直接设置 innerHTML 即可）")]),t._v(" "),n("h3",{attrs:{id:"实现虚拟-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现虚拟-dom"}},[t._v("#")]),t._v(" 实现虚拟 DOM")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1237),alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("详细思路：\n"),n("ul",[n("li",[t._v("用 JavaScript 对象模拟 DOM。")]),t._v(" "),n("li",[t._v("把此虚拟 DOM 转成真实 DOM 并插入页面中。")]),t._v(" "),n("li",[t._v("如果有事件发生修改了虚拟 DOM。")]),t._v(" "),n("li",[t._v("比较两棵虚拟 DOM 树的差异，得到差异对象。")]),t._v(" "),n("li",[t._v("把差异对象应用到真正的 DOM 树上。")])])])]),t._v(" "),n("p",[t._v("具体实现主要通过三个函数：")]),t._v(" "),n("ul",[n("li",[t._v("element（构建虚拟 DOM）")]),t._v(" "),n("li",[t._v("diff（对比新旧虚拟 DOM）")]),t._v(" "),n("li",[t._v("patch（在真正的 DOM 元素应用变更）")])]),t._v(" "),n("p",[t._v("patches 对象的结构记录，")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  patches"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),t._v(" "),n("h4",{attrs:{id:"diff-算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法"}},[t._v("#")]),t._v(" Diff 算法")]),t._v(" "),n("p",[t._v("比较两棵 DOM 树的差异是 Virtual DOM 算法最核心的部分，这也是所谓的 Virtual DOM 的 diff 算法。两个树完全的 diff 算法是一个时间复杂度为 O(n^3) 的问题。但是在前端当中，你很少会跨越层级地移动 DOM 元素（对于跨越层级去移动 DOM 元素的场景，应该如何处理复用呢，没有做处理）。所以 Virtual DOM 只会对同一层级的元素进行对比：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(1238),alt:""}})]),t._v(" "),n("p",[t._v("这也是为什么要给 Vue 建议给子节点绑定 Key 呢？")]),t._v(" "),n("p",[t._v("这是因为如果我们把 div 的子节点重新排序而不是修改的情况下，例如 p，ul，div 的顺序替换成了 div，p，ul。这个该怎么对比呢？"),n("u",[t._v("如果按照同层级进行顺序对比的话，它们都会被替换掉（根据节点标识的 index 不同）。")]),t._v("如 "),n("code",[t._v("p")]),t._v(" 和 "),n("code",[t._v("div")]),t._v(" 的 "),n("code",[t._v("tagName")]),t._v(" 不同，"),n("code",[t._v("p")]),t._v(" 会被 "),n("code",[t._v("div")]),t._v(" 所替代。最终，三个节点都会被替换，这样 DOM 开销就非常大。而实际上是不需要替换节点，而只需要经过移动节点就可以达到，我们只需知道怎么进行移动。")]),t._v(" "),n("p",[t._v("对于重排子节点来说，要想复用旧的子节点，不能使用 tagName 进行对比，因为 tagName 是可重复的。所以需要给子节点添加上唯一标识 key，列表对比的时候，使用 key 进行对比，这样才能复用老的 DOM 树上的节点。")]),t._v(" "),n("p",[n("code",[t._v("var diffs = listDiff(oldChildren, newChildren, 'key')")]),t._v(" 这里的 diffs 获取了")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diffChildren")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldChildren"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newChildren"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" patches"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentPatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" diffs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listDiff")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldChildren"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newChildren"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  newChildren "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" diffs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("diffs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("moves"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reorderPatch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" patch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REORDER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moves"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" diffs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("moves "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    currentPatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reorderPatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" leftNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" currentNodeIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldChildren"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" newChild "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newChildren"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    currentNodeIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      leftNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" leftNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" currentNodeIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" leftNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" currentNodeIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfsWalk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newChild"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentNodeIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" patches"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    leftNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("p",[t._v("在进行 patch 的过程中")]),t._v(" "),n("p",[t._v("oldTree vs newTree -> diffDom -> 应用到真正的 DOM 树上。")]),t._v(" "),n("p",[t._v("上面的 key 性能优化，主要用在 patch 的时候是对原来的 dom 节点进行复用，还是重新 render() 一个 dom 节点出来。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reorderChildren")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moves")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" staticNodeList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" maps "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先把所有旧渲染 DOM 节点的 `key` 做一个映射")]),t._v("\n  _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("staticNodeList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        maps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moves"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("move")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" move"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("move"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remove item")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("staticNodeList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// maybe have been removed for inserting")]),t._v("\n        node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      staticNodeList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("move"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// insert item，在这里可以匹配复用旧节点")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" insertNode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" maps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("move"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" maps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("move"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reuse old item //")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" move"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" move"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("move"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      staticNodeList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" insertNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("insertNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br")])]),n("h2",{attrs:{id:"看看-vue-与-react-框架虚拟-dom-的实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#看看-vue-与-react-框架虚拟-dom-的实现"}},[t._v("#")]),t._v(" 看看 Vue 与 React 框架虚拟 DOM 的实现")]),t._v(" "),n("h3",{attrs:{id:"说说-vue-的-diff-算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#说说-vue-的-diff-算法"}},[t._v("#")]),t._v(" 说说 Vue 的 diff 算法")]),t._v(" "),n("h3",{attrs:{id:"react"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),n("h2",{attrs:{id:"实战应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实战应用"}},[t._v("#")]),t._v(" 实战应用")]),t._v(" "),n("h3",{attrs:{id:"解决-vue-列表更新错乱问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决-vue-列表更新错乱问题"}},[t._v("#")]),t._v(" 解决 Vue 列表更新错乱问题")]),t._v(" "),n("h4",{attrs:{id:"描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),n("h4",{attrs:{id:"分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),n("h4",{attrs:{id:"解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/livoras/blog/issues/13",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度剖析：如何实现一个 Virtual DOM 算法"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/leontrolski/leontrolski.github.io/blob/master/33-line-react-with-comments.js%E3%80%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("33 行代码实现的简版"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5e8694b75188257372503722?utm_source=gold_browser_extension#heading-14",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么 Vue 中不要用 index 作为 key？（diff 算法详解）"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5ad6182df265da23906c8627#heading-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：你了解 vue 的 diff 算法吗？"),n("OutboundLink")],1),t._v(" -- 从虚拟 DOM 到 diff 代码的基本实现，可以大概看看实现。")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/v2/prepare/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js 技术揭秘"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5d5561ebe51d456210163b86#heading-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("从一个日常 bug 看 Vue 的列表 key 及 vnode 更新策略"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("[浏览器工作原理]")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5c8e5e4951882545c109ae9c#heading-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("让虚拟DOM和DOM-diff不再成为你的绊脚石"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5d36cc575188257aea108a74#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析：Vue核心之虚拟DOM"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("《深入浅出 Vue.js》")]),t._v(" "),n("li",[t._v("Vue.js 技术揭秘")])])])}),[],!1,null,null,null);s.default=e.exports}}]);