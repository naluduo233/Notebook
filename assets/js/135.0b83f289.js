(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1372:function(s,t,a){"use strict";a.r(t);var n=a(44),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mogodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mogodb"}},[s._v("#")]),s._v(" mogodb")]),s._v(" "),a("p",[s._v("MongoDB 是一个面向文档，schema 无关（schema-less）（没有表、字段类型声明之类）的数据库，它非常适合于 Node.js 应用以及云端部署。")]),s._v(" "),a("p",[s._v("与 MySQL 及 PostgreSQL 是根据"),a("code",[s._v("固定的结构设计（schema）")]),s._v("将数据存储在表中不同，MongoDB 可以将任意类型的文档数据存储到集合中（schema 无关），这也是 MongoDB 最有意思的特性之一。（也就是非关系型，没有表与表之间的关联关系）。")]),s._v(" "),a("p",[s._v("例如，创建下面这张为 Web 应用保存用户信息的表 ：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("First")]),s._v(" "),a("th",[s._v("Last")]),s._v(" "),a("th",[s._v("Email")]),s._v(" "),a("th",[s._v("Twitter")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("Guillermo")]),s._v(" "),a("td",[s._v("Rauch")]),s._v(" "),a("td",[s._v("rauchg@gmail.com")]),s._v(" "),a("td",[s._v("rauchg")])])])]),s._v(" "),a("p",[s._v("在构建应用时，决定将用户信息按照上面这样的结构设计进行存储。需要如下这些信息 first name、last name、email 以及 Twitter ID。")]),s._v(" "),a("p",[s._v("随着应用的发展】需求发生了改变，或者随着时间的推移，又有了新的需求，可能需要增加或者删除表中的某些列。")]),s._v(" "),a("p",[s._v("然而，这样一个基础性问题，若要通过传统的 （SQL）数据库来实现，从操作上和性能来讲都需要耗费非常高的成本来修改表设计。")]),s._v(" "),a("p",[s._v("比如，在 MySQL 中，每一次修改表的设计结构，都需要运行如下这个命令才能实现添加一个新的列：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" students "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" birth "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对于删除一列或多列的情况也是如此。")]),s._v(" "),a("p",[s._v("在 MongoDB 中，则可以将数据都看作文档，其设计非常灵活。当有数据存储后，这些文档就会以一种非常接近（或者说在绝大多数情况下就是 JSON 格式）JSON 格式的形式存储：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Guillermo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"last"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Rauch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rauchg@gmail.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"twitter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rauchg"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("MongoDB 还有一个非常重要的特性，能够将其与其他"),a("code",[s._v("键——值")]),s._v("形式的 NoSQL 数据库区别开来，就是"),a("u",[s._v("文档可以是任意深度的。")])]),s._v(" "),a("p",[s._v("例如，可以将社交信息以如下结构进行存储，而不是全部将它们直接作为文档的键来存储：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Guillermo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"last"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Rauch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rauchg@gmail.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"social_networks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"twitter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rauchg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"facebook"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rauchg@gmail.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"linkedin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27760647")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("如上述代码所示，数据类型可以混用。这里，twitter 和 facebook 信息都是字符串类型的，而 linkedin 是数字类型。当通过 Node.js 获取到存储的文档数据后，拿到的数据类型也是和存储时一模一样的。")]),s._v(" "),a("p",[s._v("mongoDB 可以将任意类型的文档数据存储到集合中，这也是为什么会将二进制文件存到 mongoDB 数据库中，一些图片、文件、office 文件等。")]),s._v(" "),a("p",[s._v("MongoDB 更适合打辅助，MySQL 表之间的关联，查询起来更方便、也更加解耦。")]),s._v(" "),a("h2",{attrs:{id:"docker-安装-mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-mongodb"}},[s._v("#")]),s._v(" Docker 安装 MongoDB")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("查看可用的 MongoDB 版本\n访问 MongoDB 镜像库地址： https://hub.docker.com/_/mongo?tab=tags&page=1。\n我们还可以用 "),a("code",[s._v("docker search mongo")]),s._v(" 命令来查看可用版本：")])]),s._v(" "),a("li",[a("p",[s._v("取最新版的 MongoDB 镜像")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker pull mongo:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("查看本地影像")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("运行容器\n安装完成后，我们可以使用以下命令来运行 mongo 容器：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -itd --name mongo -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(":27017 mongo --auth\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("参数说明：")]),s._v(" "),a("p",[s._v("-p 27017:27017 ：映射容器服务的 27017 端口到宿主机的 27017 端口。外部可以直接通过 宿主机 ip:27017 访问到 mongo 的服务。\n--auth：需要密码才能访问容器服务。")]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("使用")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mongo mongo admin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个名为 admin，密码为 123456 的用户。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  db.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" user:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(",pwd:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(",roles:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" role:"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'userAdminAnyDatabase'")]),s._v(", db: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尝试使用上面创建的用户信息进行连接。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Successfully added user: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),s._v(",\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[s._v("#")]),s._v(" 应用")]),s._v(" "),a("h3",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[s._v("#")]),s._v(" 场景")]),s._v(" "),a("h3",{attrs:{id:"特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特征"}},[s._v("#")]),s._v(" 特征")]),s._v(" "),a("ul",[a("li",[s._v("适用于表结构容易变化，且不需要每个表都有主键。")]),s._v(" "),a("li",[s._v("文本查询、地位置查询。")])]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[s._v("《了不起的 Node.js》")])])])}),[],!1,null,null,null);t.default=e.exports}}]);