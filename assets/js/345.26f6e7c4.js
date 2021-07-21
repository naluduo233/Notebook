(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{1664:function(e,t,a){"use strict";a.r(t);var r=a(44),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"wireshark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wireshark"}},[e._v("#")]),e._v(" wireshark")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#chapter-3-user-interface"}},[e._v("Chapter 3. User Interface")]),a("ul",[a("li",[a("a",{attrs:{href:"#_3-3-1-main-window-navigation"}},[e._v("3.3.1. Main Window Navigation")])]),a("li",[a("a",{attrs:{href:"#_3-4-the-menu"}},[e._v("3.4. The Menu")])]),a("li",[a("a",{attrs:{href:"#_3-5-the-file-menu"}},[e._v("3.5. The “File” Menu")])])])]),a("li",[a("a",{attrs:{href:"#实验"}},[e._v("实验")]),a("ul",[a("li",[a("a",{attrs:{href:"#用-wireshark-做一次运行测试"}},[e._v("用 Wireshark 做一次运行测试")])])])]),a("li",[a("a",{attrs:{href:"#fqa"}},[e._v("FQA")]),a("ul",[a("li",[a("a",{attrs:{href:"#wireshark-无法抓包"}},[e._v("wireshark 无法抓包")])])])]),a("li",[a("a",{attrs:{href:"#参考资料"}},[e._v("参考资料")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"chapter-3-user-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-3-user-interface"}},[e._v("#")]),e._v(" Chapter 3. User Interface")]),e._v(" "),a("p",[e._v("3.1. Introduction\n3.2. Start Wireshark\n3.3. The Main window")]),e._v(" "),a("p",[e._v("Wireshark抓包和分析时的用户界面")]),e._v(" "),a("p",[e._v("Wireshark界面有五个主要组件：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("**命令菜单(command menus)**是位于窗口顶部的标准下拉菜单。我们现在感兴趣的是文件和捕获菜单。文件菜单允许您保存捕获的分组数据或打开先前捕获的分组数据的文件，并退出Wireshark应用程序。捕获菜单允许您开始分组捕获。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Wireshark界面的顶部是分组显示过滤器(packet display filter field)")]),e._v("，可以向其中输入协议名称或其他信息，以过滤分组列表窗口中显示的信息（分组首部窗口和分组内容窗口同理）。")])]),e._v(" "),a("li",[a("p",[e._v("**分组列表窗口(packet-listing window)**为每个捕获的分组显示一行摘要，包括分组编号（由Wireshark分配；任何协议首部并不包含该编号），分组的时间，源地址和目的地址，协议类型以及分组中包含的协议特定信息。可以通过单击列名称或者其他类似栏目对分组列表进行排序。协议类型字段列出了发送或接收该分组的最高级协议，即作为该分组的源或最终接收的协议。")])]),e._v(" "),a("li",[a("p",[e._v("**分组首部详细信息窗口(packet-header details window)**提供分组列表窗口中被选中（高亮显示）分组的详细信息。 （要在分组列表窗口中选择分组，请将光标放在分组列表窗口中的单行摘要中，然后单击鼠标左键。）这些细节包括有关以太网帧的信息（假定分组通过以太网接口发送/接收）和包含该分组的IP数据报。通过在分组详细信息窗口中单击以太网帧左侧的加减号框或IP数据报行，可以扩展或最小化显示的以太网和IP层详细信息。如果分组通过TCP或UDP传输，TCP或UDP的详细信息也将被显示，同样可以扩展或最小化。最后还提供了有关发送或接收此分组的最高级别协议的详细信息。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("分组正文窗口(packet-contents window)以ASCII和十六进制格式显示捕获帧的全部内容。")])])])]),e._v(" "),a("h3",{attrs:{id:"_3-3-1-main-window-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-main-window-navigation"}},[e._v("#")]),e._v(" 3.3.1. Main Window Navigation")]),e._v(" "),a("p",[e._v("Wireshark抓包和分析时的用户界面")]),e._v(" "),a("ul",[a("li",[e._v("The menu (see Section 3.4, “The Menu”) is used to start actions.")]),e._v(" "),a("li",[e._v("The main toolbar (see Section 3.16, “The “Main” Toolbar”) provides quick access to frequently used items from the menu.")]),e._v(" "),a("li",[e._v("The filter toolbar (see Section 3.17, “The “Filter” Toolbar”) allows users to set display filters to filter which packets are displayed (see Section 6.3, “Filtering Packets While Viewing”).")]),e._v(" "),a("li",[e._v("The packet list pane (see Section 3.18, “The “Packet List” Pane”) displays a summary of each packet captured. By clicking on packets in this pane you control what is displayed in the other two panes.")]),e._v(" "),a("li",[e._v("The packet details pane (see Section 3.19, “The “Packet Details” Pane”) displays the packet selected in the packet list pane in more detail.")]),e._v(" "),a("li",[e._v("The packet bytes pane (see Section 3.20, “The “Packet Bytes” Pane”) displays the data from the packet selected in the packet list pane, and highlights the field selected in the packet details pane.")]),e._v(" "),a("li",[e._v("The statusbar (see Section 3.21, “The Statusbar”) shows some detailed information about the current program state and the captured data.")])]),e._v(" "),a("h3",{attrs:{id:"_3-4-the-menu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-the-menu"}},[e._v("#")]),e._v(" 3.4. The Menu")]),e._v(" "),a("ul",[a("li",[e._v("File")]),e._v(" "),a("li",[e._v("Edit")]),e._v(" "),a("li",[e._v("View")]),e._v(" "),a("li",[e._v("Go")]),e._v(" "),a("li",[e._v("Capture")]),e._v(" "),a("li",[e._v("Aanalyze")]),e._v(" "),a("li",[e._v("Statistics")]),e._v(" "),a("li",[e._v("Telephony")]),e._v(" "),a("li",[e._v("Wireless")]),e._v(" "),a("li",[e._v("Tools")]),e._v(" "),a("li",[e._v("Help")])]),e._v(" "),a("h3",{attrs:{id:"_3-5-the-file-menu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-the-file-menu"}},[e._v("#")]),e._v(" 3.5. The “File” Menu")]),e._v(" "),a("p",[e._v("3.6. The “Edit” Menu\n3.7. The “View” Menu\n3.8. The “Go” Menu\n3.9. The “Capture” Menu\n3.10. The “Analyze” Menu\n3.11. The “Statistics” Menu\n3.12. The “Telephony” Menu\n3.13. The “Wireless” Menu\n3.14. The “Tools” Menu\n3.15. The “Help” Menu\n3.16. The “Main” Toolbar\n3.17. The “Filter” Toolbar\n3.18. The “Packet List” Pane\n3.19. The “Packet Details” Pane\n3.20. The “Packet Bytes” Pane\n3.21. The Statusbar")]),e._v(" "),a("h2",{attrs:{id:"实验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验"}},[e._v("#")]),e._v(" 实验")]),e._v(" "),a("h3",{attrs:{id:"用-wireshark-做一次运行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-wireshark-做一次运行测试"}},[e._v("#")]),e._v(" 用 Wireshark 做一次运行测试")]),e._v(" "),a("h2",{attrs:{id:"fqa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fqa"}},[e._v("#")]),e._v(" FQA")]),e._v(" "),a("h3",{attrs:{id:"wireshark-无法抓包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wireshark-无法抓包"}},[e._v("#")]),e._v(" wireshark 无法抓包")]),e._v(" "),a("ol",[a("li",[e._v("排查接口是否选择正确，例如 wifi 、以太网。还有要注意 vpn 的影响。")])]),e._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/zam183/article/details/103783785",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wireshark网络抓包(九)——为什么我的 Wireshark 抓不到/抓不全 HTTP 数据包"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.wireshark.org/docs/wsug_html_chunked/ChUseMainWindowSection.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("wireShark 官方文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES/blob/master/WiresharkLab/Wireshark%E5%AE%9E%E9%AA%8C-Intro/Wireshark%E5%AE%9E%E9%AA%8C-Intro.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Wireshark实验 》"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);