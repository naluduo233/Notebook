(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1382:function(s,a,t){"use strict";t.r(a);var e=t(44),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[s._v("#")]),s._v(" mac")]),s._v(" "),e("p",[s._v("类 linux 系统")]),s._v(" "),e("h2",{attrs:{id:"macos-显示隐藏文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-显示隐藏文件夹"}},[s._v("#")]),s._v(" Macos 显示隐藏文件夹")]),s._v(" "),e("p",[s._v('Finder Command+shift+. 可以显示/隐藏以". "开头的文件或者文件夹')]),s._v(" "),e("h2",{attrs:{id:"查看进程信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看进程信息"}},[s._v("#")]),s._v(" 查看进程信息")]),s._v(" "),e("p",[s._v("1、查看进程号")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 进程名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、查看端口被哪个进程监听")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i :端口\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3、查看进程监听的端口")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -nP -p 进程号 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" LISTEN\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -nP "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" LISTEN "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 进程号\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、查看监听端口的进程")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -nP "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" LISTEN "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" 端口号\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"mac-系统软件被阻止载入点允许没反应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-系统软件被阻止载入点允许没反应"}},[s._v("#")]),s._v(" mac 系统软件被阻止载入点允许没反应")]),s._v(" "),e("p",[s._v("临时解决方案：\n1，打开偏好设置，选择键盘，点击快捷键选项，点击下方全部控制\n2，回到安全与隐私，先解锁，用 tab 移动到 允许上，点空格允许")]),s._v(" "),e("h2",{attrs:{id:"缩放"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缩放"}},[s._v("#")]),s._v(" 缩放")]),s._v(" "),e("p",[s._v("macOS缩放")]),s._v(" "),e("p",[s._v("在macOS Sierra中，“缩放”窗格位于“辅助功能系统偏好设置”中 - 转至Apple菜单）>系统偏好设置>辅助功能>缩放。")]),s._v(" "),e("p",[s._v("这是激活键盘快捷键的地方，比如Option + Command + [自动缩放等号]，Option + Command + [减号]缩小，Option + Command + 8完全打开和关闭缩放。您还可以设置缩放样式：缩放整个屏幕或放大窗口（苹果公司称之为画中画）")]),s._v(" "),e("h2",{attrs:{id:"启动程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动程序"}},[s._v("#")]),s._v(" 启动程序")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Applications/Google Chrome 60.app/Contents/MacOS/Google Chrome"')]),s._v(" --user-data-dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/linjy/Library/Application Support/Google/Chrome60"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2119")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   Done                  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"文件权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[s._v("#")]),s._v(" 文件权限")]),s._v(" "),e("h2",{attrs:{id:"如何通过终端验证文件的-md5-和-sha-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何通过终端验证文件的-md5-和-sha-1"}},[s._v("#")]),s._v(" 如何通过终端验证文件的 MD5 和 SHA-1")]),s._v(" "),e("p",[s._v("Mac OS X 系统的终端内置了 MD5 和 SHA1 的校验工具，打开终端，在终端上输入：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("md5 文件的路径\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("shasum 文件的路径\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(466),alt:"mac-terminal-md5-validate"}})]),s._v(" "),e("h2",{attrs:{id:"mac-os-下三种修改hosts文件的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-os-下三种修改hosts文件的方法"}},[s._v("#")]),s._v(" Mac OS 下三种修改Hosts文件的方法")]),s._v(" "),e("h3",{attrs:{id:"二-终端命令行修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-终端命令行修改"}},[s._v("#")]),s._v(" 二.终端命令行修改")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/hosts\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("1.输入本机密码后，打开hosts文件，键盘输入 i （插入），修改hosts文件后，按 esc 键退出,再按shift+：键，再输入w和q，保存退出")]),s._v(" "),e("p",[s._v("2.不保存退出，则按q和！键")]),s._v(" "),e("p",[s._v("参考资料：https://www.jianshu.com/p/752211238c1b")]),s._v(" "),e("h2",{attrs:{id:"macos-系统占用你储存空间太大怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-系统占用你储存空间太大怎么办"}},[s._v("#")]),s._v(" macOS 系统占用你储存空间太大怎么办")]),s._v(" "),e("p",[s._v("两种清理系统的方法")]),s._v(" "),e("h3",{attrs:{id:"第一种：找到需要清理的文件目录手动清理在-系统-中，各应用的缓存及日志文件可放心清理，找到对应的目录直接删除即可；"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一种：找到需要清理的文件目录手动清理在-系统-中，各应用的缓存及日志文件可放心清理，找到对应的目录直接删除即可；"}},[s._v("#")]),s._v(" 第一种：找到需要清理的文件目录手动清理在“系统”中，各应用的缓存及日志文件可放心清理，找到对应的目录直接删除即可；")]),s._v(" "),e("p",[s._v("而应用的其他文件，在磁盘空间不够时，大家可选择性清除数据文件。另外，卸载不常使用的应用也可以增加磁盘空间。")]),s._v(" "),e("ul",[e("li",[s._v("系统缓存及日志文件位置：\n"),e("ul",[e("li",[s._v("系统缓存保存在：~/Library/Caches系统")]),s._v(" "),e("li",[s._v("日志保存在：~/Library/Logs")])])]),s._v(" "),e("li",[s._v("应用缓存及日志文件位置：\n"),e("ul",[e("li",[s._v("App Store下载的应用：\n"),e("ul",[e("li",[s._v("缓存文件保存在：~/Library/Containers/com.xx.xx(应用名称)/Data/Library/Caches")]),s._v(" "),e("li",[s._v("日志文件保存在：~/Library/Containers/com.xx.xx(应用名称)/Data/Library/Logs")])])]),s._v(" "),e("li",[s._v("其它第三方下载的应用：\n"),e("ul",[e("li",[s._v("缓存文件保存在：~/Library/Caches日志文件保存在：~/Library/Logs")])])])])])]),s._v(" "),e("p",[s._v("此外，可以使用命令：“sudo du -sh * ”查看当前文件夹下各个文件和文件夹占用的空间大小，进而一步步找到占用磁盘空间较多的文件。\n扫描系统所有文件的大小")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh *\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" 24K\tAdlm\n174M\tAlien Skin\n 13M\tApplications\n388K\tCreative Cloud Files\n 40M\tDB_Storage\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(".0K\tDesktop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"第二种：下载-omnidisksweeper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二种：下载-omnidisksweeper"}},[s._v("#")]),s._v(" 第二种：下载 OmniDiskSweeper")]),s._v(" "),e("p",[s._v("To Run these examples you need to add the below entry inside your "),e("code",[s._v("/etc/hosts")]),s._v(" file in linux")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("127.0.0.1   sso.ankuranand.com\n127.0.0.1   consumer.ankuranand.in\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("You need to clean the browser cache and close your VPN for modifying the computer's hosts file work."),e("a",{attrs:{href:"https://www.cnblogs.com/hustskyking/p/hosts-modify.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("修改 hosts 为何不生效，是 DNS 缓存？"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"在中文输入法的情况下，如何快速输入英文字母？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在中文输入法的情况下，如何快速输入英文字母？"}},[s._v("#")]),s._v(" 在中文输入法的情况下，如何快速输入英文字母？")]),s._v(" "),e("p",[s._v("在输入中文输入法时，我们知道按下空格键就是输出中文，可以通过按下"),e("code",[s._v("enter")]),s._v("键即可输出英文字母。")]),s._v(" "),e("h2",{attrs:{id:"输入直角符号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入直角符号"}},[s._v("#")]),s._v(" 输入直角符号")]),s._v(" "),e("ul",[e("li",[s._v("方括号 + shift -> 「」")])]),s._v(" "),e("h2",{attrs:{id:"mac-电脑如何输入数学符号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-电脑如何输入数学符号"}},[s._v("#")]),s._v(" mac 电脑如何输入数学符号")]),s._v(" "),e("ul",[e("li",[s._v("输入≈，按【option+x】，那么即可输入。")]),s._v(" "),e("li",[s._v("输入度数，那么按键盘【shift+option+8】。")]),s._v(" "),e("li",[s._v("要输小于或者等于，或者是大于等于，那么分别按【option+，】【option+。】，即可输入对应的符号。")]),s._v(" "),e("li",[s._v("输入不等于，则按【option+=】即可输入。")]),s._v(" "),e("li",[s._v("输入除号则输入【option+/】，那么即可输入。")]),s._v(" "),e("li",[s._v("输入无穷大符号，则按【option+5】，那么即可输入了。")]),s._v(" "),e("li",[s._v("输入圆周率的，则按【option+p】即可输入")]),s._v(" "),e("li",[s._v("输入正负号，则按键盘【shift+option+=】，那么即可输入了。")]),s._v(" "),e("li",[s._v("要输入开方符号，那么按键盘【option+v】，即可输入【√】。")]),s._v(" "),e("li",[s._v("输入求和符号则按【option+w】，就能够输入了的【∑】。")])]),s._v(" "),e("p",[s._v("更多符号操作如下⬇️：")]),s._v(" "),e("ol",[e("li",[s._v("将输入法切换至 【简体拼音】。\n"),e("img",{attrs:{src:t(467),alt:"mac-symbol1"}})]),s._v(" "),e("li",[s._v("切换后，再点击输入法图吧，显示下拉菜单，选择【显示文字表情与符号】。\n"),e("img",{attrs:{src:t(468),alt:"mac-symbol2"}})]),s._v(" "),e("li",[s._v("弹出窗口。\n"),e("img",{attrs:{src:t(469),alt:"mac-symbol3"}})]),s._v(" "),e("li",[s._v("选择【符号】，下拉菜单选择对应的符号。\n"),e("img",{attrs:{src:t(470),alt:"mac-symbol4"}})]),s._v(" "),e("li",[s._v("即可完成在苹果系统自带输入法下单位符号的输入。")])]),s._v(" "),e("h2",{attrs:{id:"电脑上如何输入-emoji-表情"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#电脑上如何输入-emoji-表情"}},[s._v("#")]),s._v(" 电脑上如何输入 Emoji 表情?")]),s._v(" "),e("p",[e("code",[s._v("control + command + 空格")])]),s._v(" "),e("h2",{attrs:{id:"mac-下自带的预览程序查看图片的时候如何连续翻页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-下自带的预览程序查看图片的时候如何连续翻页"}},[s._v("#")]),s._v(" Mac 下自带的预览程序查看图片的时候如何连续翻页")]),s._v(" "),e("h3",{attrs:{id:"导语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导语"}},[s._v("#")]),s._v(" 导语")]),s._v(" "),e("p",[s._v("只能单张单张的点开看，不能像 win 里面那样直接翻看同一个文件夹里的下一张。")]),s._v(" "),e("h3",{attrs:{id:"解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),e("p",[s._v("把图片全部放在统一个文件夹内，然后 command + a 全部选中，右键点击打开。切换图片，用方向键。")]),s._v(" "),e("h2",{attrs:{id:"命令行tree命令生成文件树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行tree命令生成文件树"}},[s._v("#")]),s._v(" 命令行tree命令生成文件树")]),s._v(" "),e("p",[s._v("可以通过 "),e("code",[s._v("tree --help")]),s._v(" 查看更多命令")]),s._v(" "),e("p",[s._v("为了方便查看文件内容以及相关目录，我们一般用文件树进行操作，在windows系统下，我们可以直接使用tree命令进行操作：\n"),e("code",[s._v("->")]),s._v("是输出到 list.txt 文件中。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("tree -"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" list.txt  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("那么对于Mac OS或者Linux系统，可以通过以下命令安装tree这个生成插件，打开终端并输入：（没有安装brew请先输入brew install）")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tree\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后进入文件夹下，在命令行输入：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("tree -a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接着我们就可以在终端看到当前的目录树。除此之外，我们还有其他的参数可以设置：\n"),e("table",[e("thead",[e("tr",[e("td",[s._v("命令行")]),s._v(" "),e("td",[s._v("效果")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("tree -d")]),s._v(" "),e("td",[s._v("只显示文件夹")])]),s._v(" "),e("tr",[e("td",[s._v("tree -D")]),s._v(" "),e("td",[s._v("显示文件的最后修改时间")])]),s._v(" "),e("tr",[e("td",[s._v("tree -L")]),s._v(" "),e("td",[s._v("n 表示显示项目的层级，n=3 即只显示项目的三层结构")])]),s._v(" "),e("tr",[e("td",[s._v("tree -I pattern")]),s._v(" "),e("td",[s._v('pattern 表示想要过滤的目录，例如 tree -I "node_modules" 可以过滤掉 node_modules 这个文件夹')])])])]),s._v("\n这里，这里的参数 "),e("code",[s._v("-d")]),s._v("、"),e("code",[s._v("-D")]),s._v("区分大小写。")]),s._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")])])}),[],!1,null,null,null);a.default=r.exports},466:function(s,a,t){s.exports=t.p+"assets/img/2020-05-09-09-10-33-mac-terminal-md5-validate.9f76b8ac.png"},467:function(s,a,t){s.exports=t.p+"assets/img/mac-symbol1.24f21362.png"},468:function(s,a,t){s.exports=t.p+"assets/img/mac-symbol2.5adbef81.png"},469:function(s,a,t){s.exports=t.p+"assets/img/mac-symbol3.200d8aee.png"},470:function(s,a,t){s.exports=t.p+"assets/img/mac-symbol4.be47e537.png"}}]);