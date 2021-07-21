(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1536:function(v,_,i){"use strict";i.r(_);var t=i(44),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"如何开发企业级脚手架-node-cli"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何开发企业级脚手架-node-cli"}},[v._v("#")]),v._v(" 如何开发企业级脚手架 Node CLI")]),v._v(" "),i("p",[v._v("目标读者")]),v._v(" "),i("p",[v._v("写作目的")]),v._v(" "),i("p",[v._v("头脑风暴")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("为什么要搭建")])]),v._v(" "),i("li",[i("p",[v._v("如何搭建")])]),v._v(" "),i("li",[i("p",[v._v("如何在企业中推广使用")])]),v._v(" "),i("li",[i("p",[v._v("调试、开发的流程跟普通的项目有什么区别吗？")])]),v._v(" "),i("li",[i("p",[v._v("不使用任何依赖")])]),v._v(" "),i("li",[i("p",[v._v("使用依赖 commander 等解决一些问题")])]),v._v(" "),i("li",[i("p",[v._v("vue-cli 的命令怎么寻找的、webpack-cli")])]),v._v(" "),i("li",[i("p",[v._v("个人 cli")]),v._v(" "),i("ul",[i("li",[v._v("zip，构建 mycli，放到 npm")]),v._v(" "),i("li",[v._v("集成天气预报")])])])]),v._v(" "),i("p",[v._v("为什么")]),v._v(" "),i("ul",[i("li",[v._v("减少重复性的工作，不需要复制其他项目再删除无关代码，或者从零创建一个项目和文件")]),v._v(" "),i("li",[v._v("可以根据交互动态生成特定的项目结构和配置文件")]),v._v(" "),i("li",[v._v("多人协作更为方便，不需要把文件传来传去；")]),v._v(" "),i("li",[v._v("跟 npm scripts 的对比")])]),v._v(" "),i("p",[v._v("如何推广：")]),v._v(" "),i("ol",[i("li",[v._v("对于旧项目，从自动化脚本、工具类代码片段入手、"),i("code",[v._v("yarn commit")]),v._v(" 给旧项目处理，不用装依赖。")]),v._v(" "),i("li",[v._v("对于新项目：包括产品项目、基建项目都可以通过模版，比如还可以把搭建知识库的项目模版拿过去")]),v._v(" "),i("li",[v._v("✨ 增加图片处理命令 meet comp [path]，用于压缩，生成 webp 这个可以加速推广（TODO 计划）")]),v._v(" "),i("li",[v._v("生成 gitignore 文件命令")]),v._v(" "),i("li",[v._v("生成 eslint 配置")]),v._v(" "),i("li",[v._v("与 multipages-generator 合并，形成完整的 h5 开发工作流")]),v._v(" "),i("li",[v._v("✨ 类似 vue-cli 通过网页操作替代 cli 交互，这样就可以把代码片段嵌入其中，搜索查询。")]),v._v(" "),i("li",[v._v("✨ 格式化代码，不需要，参考 chrome 插件的前端所需要的东西。例如 JSON 格式化。后端人员也可以用。不需要打开浏览器就可以用。")])]),v._v(" "),i("p",[v._v("本地开发时，直接 "),i("code",[v._v("yarn link")]),v._v(" 也行。")]),v._v(" "),i("p",[v._v("可以通过读取 gitlab api 组名，不需要单个添加 github。")]),v._v(" "),i("p",[i("code",[v._v("listr")]),v._v(" 管理任务队列。")]),v._v(" "),i("p",[v._v("版本发布")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("常用的 yarn、npm、git 都可以用 xcli、精简命令，可以把 xcli 替代掉 yarn、npm、git 等一些功能。")])]),v._v(" "),i("li",[i("p",[v._v("新创建的 Vue 组件")])]),v._v(" "),i("li",[i("p",[v._v("也可以做一个脚手架给自己，把 tomcat、monogo 等提效。")])])]),v._v(" "),i("h2",{attrs:{id:"mycli"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mycli"}},[v._v("#")]),v._v(" mycli")]),v._v(" "),i("ul",[i("li",[v._v("[ ] 一键部署脚本，lmnp")]),v._v(" "),i("li",[v._v("[ ] 通过爬取免费的电子书网站进行搜索下载。")])]),v._v(" "),i("p",[v._v("搭建 xcli 项目。")]),v._v(" "),i("h2",{attrs:{id:"核心库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#核心库"}},[v._v("#")]),v._v(" 核心库")]),v._v(" "),i("ul",[i("li",[v._v("chalk: 控制终端输出字符串的样式。")]),v._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/tj/commander.js/",target:"_blank",rel:"noopener noreferrer"}},[v._v("commander"),i("OutboundLink")],1),v._v(": 命令行核心库，提供了用户命令行输入和参数解析的强大功能，可以简化命令行开发。")]),v._v(" "),i("li",[v._v("cross-spawn: 跨平台处理子进程系统命令。")]),v._v(" "),i("li",[v._v("download-git-repo: 通过git方式下载 repository 。")]),v._v(" "),i("li",[v._v("fs-extra: 增强Node.js的fs模块。")]),v._v(" "),i("li",[v._v("inquirer: Node.js 命令行交互工具，提供通用的命令行用户界面集合，用于和用户进行交互。")]),v._v(" "),i("li",[v._v("npm-check-updates: 检查 packages 是否需要更新。\nora: 提供 loading 的样式。")]),v._v(" "),i("li",[v._v("request: Node.js的 http 请求库。")]),v._v(" "),i("li",[v._v("semver: semver版本规范，提供版本的判断。")]),v._v(" "),i("li",[v._v("validate-npm-package-name: 校验是否符合 npm package的命名规范。")])]),v._v(" "),i("h2",{attrs:{id:"调试方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#调试方式"}},[v._v("#")]),v._v(" 调试方式")]),v._v(" "),i("h2",{attrs:{id:"参考资料"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.zhihu.com/question/24007365",target:"_blank",rel:"noopener noreferrer"}},[v._v("有哪些免费好用的电子书下载网站？"),i("OutboundLink")],1)]),v._v(" "),i("li",[v._v("作者：Chersquwn\n链接：https://juejin.im/post/6844903866635386887\n来源：掘金\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);