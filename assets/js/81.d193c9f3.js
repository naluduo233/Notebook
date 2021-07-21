(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1370:function(s,a,t){"use strict";t.r(a);var e=t(44),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),e("p",[s._v("MySQL 是一个关系型数据库管理系统，MySQL 是一种 DBMS，即它是一种数据库软件。由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。MySQL 是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。")]),s._v(" "),e("h2",{attrs:{id:"客户机-服务器软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户机-服务器软件"}},[s._v("#")]),s._v(" 客户机——服务器软件")]),s._v(" "),e("ul",[e("li",[s._v("客户机（用来与 MySQL 打交道，给 MySQL 提供要执行的命令）的一个应用。\n"),e("ul",[e("li",[s._v("mysql 命令行实用程序")])])])]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[s._v("系统环境：mac 10.15")]),s._v(" "),e("h3",{attrs:{id:"基于安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于安装包"}},[s._v("#")]),s._v(" 基于安装包")]),s._v(" "),e("h4",{attrs:{id:"安装-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql"}},[s._v("#")]),s._v(" 安装 MySQL")]),s._v(" "),e("p",[s._v("所有平台的 MySQL 下载地址为： "),e("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 下载"),e("OutboundLink")],1),s._v(" 。 挑选你需要的 MySQL Community Server 版本及对应的平台")]),s._v(" "),e("blockquote",[e("p",[s._v("注意：安装过程我们需要通过开启管理员权限来安装，否则会由于权限不足导致无法安装。")])]),s._v(" "),e("p",[s._v("选择对应的操作系统版本，下载安装即可。在安装过程中，MySQL 会自动创建一个 root 用户，并提示输入 root 口令。")]),s._v(" "),e("p",[s._v("要在 Linux 上安装 MySQL，可以使用发行版的包管理器。例如，Debian 和 Ubuntu 用户可以简单地通过命令 apt-get install mysql-server 安装最新的 MySQL 版本。")]),s._v(" "),e("h4",{attrs:{id:"配置数据目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置数据目录"}},[s._v("#")]),s._v(" 配置数据目录")]),s._v(" "),e("p",[s._v("搜索 Mysql 进行配置管理界面：")]),s._v(" "),e("p",[e("img",{attrs:{src:t(458),alt:""}})]),s._v(" "),e("h4",{attrs:{id:"运行-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-mysql"}},[s._v("#")]),s._v(" 运行 MySQL")]),s._v(" "),e("p",[s._v("MySQL 安装后会自动在后台运行。为了验证 MySQL 安装是否正确，我们需要通过 mysql 这个命令行程序来连接 MySQL 服务器。")]),s._v(" "),e("p",[s._v("在命令提示符下输入 "),e("code",[s._v("mysql -u root -p")]),s._v(" ，然后输入口令，如果一切正确，就会连接到 MySQL 服务器，同时提示符变为 "),e("code",[s._v("mysql>")]),s._v("。")]),s._v(" "),e("p",[s._v("输入 exit 退出 MySQL 命令行。注意，MySQL 服务器仍在后台运行。")]),s._v(" "),e("h3",{attrs:{id:"基于-docker-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装"}},[s._v("#")]),s._v(" 基于 docker 安装")]),s._v(" "),e("h4",{attrs:{id:"首先安装-docker-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先安装-docker-服务"}},[s._v("#")]),s._v(" 首先安装 docker 服务")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"docker-中搜索可用镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-中搜索可用镜像"}},[s._v("#")]),s._v(" docker 中搜索可用镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker search mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"拉取-mysql-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取-mysql-镜像"}},[s._v("#")]),s._v(" 拉取 mysql 镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker pull mysql:5.6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"查看-mysql-镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-mysql-镜像"}},[s._v("#")]),s._v(" 查看 mysql 镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"运行-mysql-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-mysql-2"}},[s._v("#")]),s._v(" 运行 mysql")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker run --name mysql -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" -d -i -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --restart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always  mysql:5.6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("以上参数的含义：")]),s._v(" "),e("ul",[e("li",[s._v("--name mysql 将容器命名为"),e("code",[s._v("mysql")]),s._v("，后面可以用这个 name 进行容器的启动暂停等操作")]),s._v(" "),e("li",[s._v("-e MYSQL_ROOT_PASSWORD=123456 设置 MySQL 密码为 123456")]),s._v(" "),e("li",[s._v("-d 此容器在后台运行，并且返回容器 ID")]),s._v(" "),e("li",[s._v("-i 以交互模式运行容器")]),s._v(" "),e("li",[s._v("-p 进行端口映射，格式为 "),e("code",[s._v("主机（宿主）端口：容器端口")])]),s._v(" "),e("li",[s._v("--restart=always 当 docker 重启时，该容器自动重启")])]),s._v(" "),e("h4",{attrs:{id:"进入-mysql-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入-mysql-容器"}},[s._v("#")]),s._v(" 进入 MySQL 容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mysql "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[s._v("#")]),s._v(" 登录")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql -h 主机名 -u 用户名 -p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("h：指定客户端所要登录的 MySQL 主机名，登录本机（localhost 或 127.0.0.1）该参数可以省略；")]),s._v(" "),e("li",[s._v("-u：登录的用户名；")]),s._v(" "),e("li",[s._v("-p：告诉服务器将会使用一个密码来登录，如果所要登录的用户民密码为空，可以忽略此选项。")])]),s._v(" "),e("p",[s._v("如果我们要登录本机的 MySQL 数据库，只需要输入以下命令即可（docker 容器中登录）")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql -u root -p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("按回车确认，如果安装正确且 MySQL 正在运行，会得到以下响应：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Enter password:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("登录成功后")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("退出")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\nBye\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管理"}},[s._v("#")]),s._v(" 管理")]),s._v(" "),e("p",[s._v("要管理 MySQL，可以使用可视化图形界面 "),e("a",{attrs:{href:"https://dev.mysql.com/downloads/workbench/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL Workbench"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("p",[s._v("MySQL Workbench 可以用可视化的方式查询、创建和修改数据库表，但是，归根到底，MySQL Workbench 是一个图形客户端，"),e("strong",[s._v("它对 MySQL 的操作仍然是发送 SQL 语句并执行")]),s._v("。因此，本质上，MySQL Workbench 和 MySQL Client 命令行都是客户端，和 MySQL 交互，唯一的接口就是 SQL。")]),s._v(" "),e("p",[s._v("因此，MySQL 提供了大量的 SQL 语句用于管理。虽然可以使用 MySQL Workbench 图形界面来直接管理 MySQL，但是，很多时候，通过 SSH 远程连接时，只能使用 SQL 命令，所以，了解并掌握常用的 SQL 管理操作是必须的。")]),s._v(" "),e("h3",{attrs:{id:"用户设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户设置"}},[s._v("#")]),s._v(" 用户设置")]),s._v(" "),e("p",[s._v("如果你需要添加 MySQL 用户，你只需要在 mysql 数据库中的 user 表添加新用户即可。")]),s._v(" "),e("p",[s._v("以下为添加用户的的实例，用户名为 guest，密码为 guest123，并授权用户可进行 SELECT, INSERT 和 UPDATE 操作权限：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("root@host"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql -u root -p")]),s._v("\nEnter password:*******\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDatabase changed\n\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INSERT INTO user\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host, user, password,\n           select_priv, insert_priv, update_priv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n           VALUES "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'guest'")]),s._v(",\n           PASSWORD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'guest123'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Y'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Y'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Y'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.20")]),s._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH PRIVILEGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SELECT host, user, password FROM user WHERE user "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'guest'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+-----------+---------+------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" user    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" password         "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+---------+------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" guest "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 6f8c114b58f2ce9e "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+---------+------------------+\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("在添加用户时，请注意使用 MySQL 提供的 PASSWORD() 函数来对密码进行加密。 你可以在以上实例看到用户密码加密后为： 6f8c114b58f2ce9e.")]),s._v(" "),e("p",[s._v("注意：在 MySQL5.7 中 user 表的 password 已换成了 authentication_string。")]),s._v(" "),e("p",[s._v("注意：password() 加密函数已经在 8.0.11 中移除了，可以使用 MD5() 函数代替。")]),s._v(" "),e("p",[s._v("注意：在注意需要执行 FLUSH PRIVILEGES 语句。 这个命令执行后会重新载入授权表。")]),s._v(" "),e("p",[s._v("如果你不使用该命令，你就无法使用新创建的用户来连接 mysql 服务器，除非你重启 mysql 服务器。")]),s._v(" "),e("ul",[e("li",[s._v("Select_priv")]),s._v(" "),e("li",[s._v("Insert_priv")]),s._v(" "),e("li",[s._v("Update_priv")]),s._v(" "),e("li",[s._v("Delete_priv")]),s._v(" "),e("li",[s._v("Create_priv")]),s._v(" "),e("li",[s._v("Drop_priv")]),s._v(" "),e("li",[s._v("Reload_priv")]),s._v(" "),e("li",[s._v("Shutdown_priv")]),s._v(" "),e("li",[s._v("Process_priv")]),s._v(" "),e("li",[s._v("File_priv")]),s._v(" "),e("li",[s._v("Grant_priv")]),s._v(" "),e("li",[s._v("References_priv")]),s._v(" "),e("li",[s._v("Index_priv")]),s._v(" "),e("li",[s._v("Alter_priv")])]),s._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("h3",{attrs:{id:"创建数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),e("p",[s._v("CREATE DATABASE 数据库名;")]),s._v(" "),e("p",[s._v("使用普通用户登陆 MySQL 服务器，你可能需要特定的权限来创建或者删除 MySQL 数据库，所以我们这边使用 root 用户登录，root 用户拥有最高权限。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql -u root -p\nEnter password: ****** "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录后进入终端")]),s._v("\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create DATABASE jecyuBlog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("使用 xxx 语言脚本创建数据库")]),s._v(" "),e("h3",{attrs:{id:"删除数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[s._v("#")]),s._v(" 删除数据库")]),s._v(" "),e("p",[s._v("drop 命令删除数据库")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("drop database jecyuBlog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"选择数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择数据库"}},[s._v("#")]),s._v(" 选择数据库")]),s._v(" "),e("p",[s._v("选择要操作的 Mysql 数据库，使用该命令后所有 Mysql 命令都只针对该数据库：\nUSE 数据库名：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use jecyuBlog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDatabse changed\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"列出所有数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出所有数据库"}},[s._v("#")]),s._v(" 列出所有数据库")]),s._v(" "),e("p",[s._v("列出 MySQL 数据库管理系统的数据库列表。\nSHOW DATABASES")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SHOW DATABASES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Database           "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" information_schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql              "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" performance_schema "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"显示指定数据库的所有表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示指定数据库的所有表"}},[s._v("#")]),s._v(" 显示指定数据库的所有表")]),s._v(" "),e("p",[s._v("显示指定数据库的所有表，使用改命令前需要使用 use 命令来选择要操作的数据库。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("SHOW TABLES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use jecyuBlog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nDatabase changed\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SHOW TABLES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"gui-工具操作-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gui-工具操作-mysql"}},[s._v("#")]),s._v(" GUI 工具操作 MySQL")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://yq.aliyun.com/articles/5132",target:"_blank",rel:"noopener noreferrer"}},[s._v("最棒的 10 款 MySQL GUI 工具"),e("OutboundLink")],1),s._v(" —— 这里我使用了 "),e("a",{attrs:{href:"https://www.sequelpro.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Sequel Pro"),e("OutboundLink")],1),s._v(" 开源，mac 版本，Sequel Pro 用于管理 MySQL 数据库（本地或在 Internet 上）。您可以使用它来添加删除数据库和表，修改字段和索引，预览和过滤表的内容，添加编辑删除行，执行自定义查询，转储表或整个数据库。它兼容 MySQL 3.x，4，5。")])]),s._v(" "),e("h2",{attrs:{id:"node-js-连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-连接"}},[s._v("#")]),s._v(" Node.js 连接")]),s._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.runoob.com/mysql/mysql-administration.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟网站 MySQL"),e("OutboundLink")],1),s._v(" -- MySQL 通俗读物。")])])])}),[],!1,null,null,null);a.default=r.exports},458:function(s,a,t){s.exports=t.p+"assets/img/2020-10-15-22-42-17.fd71ae7b.png"}}]);