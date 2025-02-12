# 系统架构

- 前端技术
  - 性能优化
    - 首先是如何发现问题
    - 发现问题之后，是如何分析其中原因
    - 找到原因之后，采用的解决方法
    - 解决之后，是否真实的对用户体验有所提升
  - 对框架的理解
  - 深入 Node.js 领域（编写一些 Webpack 插件）
  - Canvas 与 WebGL（）
- 通往架构师之路
  - 跨界
  - 尝鲜（微服务、微前端）
  - 工具和平台化建设
  - 流程和规范化
  - 方法论
  - 安全意识
  - 团队合作

## BS 架构与 CS 架构

C/S 是双向的通讯，建立连接后会一直保持，任何一方都可以随时向对方发送信息。比如 QQ 客户端登录后，腾讯的服务器可以随时把新的消息发给客户端，客户端也可以随时向腾讯的服务器发送信息、B/S 是「查询」式的通讯，客户端向服务器查询一些信息，在服务器回应之后，(逻辑上)会立刻断开连接。只有客户端向服务器查询时，服务器才能向客户端发送信息，服务器不能主动地向客户端发送信息。比如通过浏览器访问网站时，只有当你访问一个网站时，网站才可以向你提供信息。「访问」是一个瞬间的行为，当网页加载完成以后，网站就无法再发送额外的信息。简而言之，`C/S 是双向通讯，B/S 是一问一答`。有人可能想到一些反例，比如 Web QQ, 事实上(根据我前一阵的试验) Web QQ 会通过「阻塞长连接」的方式获取新的聊天消息，依然还是 B/S 的模式。当然现在也有 WebSocket, 可以在浏览器上实现 C/S 通讯，不过目前应用还不够广泛。

作者：王子亭
链接：https://www.zhihu.com/question/21803672/answer/19373740
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 消息队列

## MVC

- Model（除了数据，里面也有 controller，用于控制数据变化的业务逻辑。）
- View（渲染视图的逻辑，数据依赖于 Model）
- Controller（用于控制视图变化的交互逻辑）

通常 controller 通常分为两部分，很少把 controller 单独抽离出来的。

- 一部分是位于 Model 里
- 一部分位于 view 里
  像一个业务 vue 组件，操作业务数据与视图交互的逻辑明显是混合在一起了。

- model 改变，触发 view 里的 controller 进行视图更新。
- view 交互，触发 model 里的 controller 进行数据改变。
- view 的显示依赖于 model。

### 同步

同步不仅仅是同步的`读取`数据，还包括`回写`。假设一份数据被三个视图所用，如果其他一个视图对数据发生了修改，那么修改应该也同时反馈到另外两个视图上。

关于数据我们应该存一份，还是存在 N 个视图中都保存一份副本（Vue 则是每个视图都有一份副本）

### 多个消费者

数据的消费放不一定是视图，还有可能是 selector。它不一定被展示，还有可能被用于计算。

### 通信

有模块存在的地方它们之间就需要通信。

通信要解决的问题总结起来就是：我把数据传递给别人，或者别人又把数据传递给我。

可以使用的手段：

- 主动 pull：调用模块的获取数据方法，例如 `store.getData()`
- 主动 push
- Broadcast：也就是 pub/ sub 模式，向外广播事件/主题，可是它不知道谁订阅了当前广播的主题。
- Command：命令模式，command 就是显式的调用，指示去即将完成一件事，结果是可以预见的。而 event 则是通知而已。 Redux 中的 aciton/ dispatch 就是 command 机制。
- 被 push：监听事件的发生，Backbone.js 的 `this.listenTo(app.todos, "add", this.addOne)` 就是在监听 todos 集合里“添加”事件的发生。

但是有一些场景中，这些模式可能是组合使用的，比如：

- todos 发生了修改稿，广播 update 事件，但事件信息中并不包含最新数据。
- view 监听 update 事件的发生，但是需要手动调用接口获取最新的数据。

### MVC 带来的问题

#### MVVM

## 参考

- [阿里技术——架构](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIzOTU0NTQ0MA==&action=getalbum&album_id=1442497572832346113&scene=173&from_msgid=2247498117&from_itemidx=1&count=10#wechat_redirect&scene=178&subscene=&sessionid=svr_db5bea1da1f&enterid=1603238869)
- [实现领域驱动设计](https://book.douban.com/subject/25844633/)
- [IDDD_Samples](https://github.com/VaughnVernon/IDDD_Samples)
- [前端开发与架构师](https://mp.weixin.qq.com/s/LSOtald-laf29su_qN4luA)
- [Model-View-ViewModel 简单实现](https://github.com/sobird/mvvm)
