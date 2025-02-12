# 思维

安全性 > 可用性 > 可维护性 > 代码简洁 > 性能

## 写程序

拥抱错误，错误是因为你描述得不够精确，计算机不理解，从这个角度去想，写代码需要有动机。

## 背面

理解一个东西，不仅仅停留在表面，还要知道它的背面。例如一个页面渲染是浏览器的表面，而为什么渲染、如何渲染则是浏览器的背面。

![](../.vuepress/public/images/2020-06-04-10-09-03-why.png)

## 学习新东西

理论知识4成，动手实践6成。

先去参考寻找常见用法、核心重点的文章介绍。至于高级的用法，更多的是通过看别人代码，做项目获取经验。

## 实践与理论

1. 大致浏览某个主题的书，当你看不懂理论时，就立刻实践、试错。
2. 这时候你实践过，并积累乐一些问题，再反过来看理论时，犹如拔开云雾见青天。
3. 最后，你可以将自己所学的打包教给别人。
4. 学习新技术时，思考其在项目上的实践。

### 提出正确问题

“我无法弄明白它失效的原因是因为我不理解它究竟如何开始运转的。”

### 工具化思想

- 时刻都要想着，当前的这个工作内容，是否能够用工具、技术等手段，减少重复，提高效率。

### 流程化思想

同样的话，你对一个人说，没有问题，对两个人、三个人、五个人可能都没有问题，但十个人呢？二十个人呢？若干个人呢？

在实际的工作中，会发现，最不可控的因素其实是人，而能够控制或者说解决的手段，就是把事情、把工作内容，流程化、规范化、制度化。

### 迭代与协同思想

利用迭代达到

- 学习或工作进程中，能够融入前面的技能技巧，综合运用解决实际问题。

利用协同思想达到：

- 明白标准与规范的重要性
- 项目分工、管理与协作
- 适应真正的工作场景

### 注重应用模式及应用架构，不要受限于软件产品与功能级别

## 优先做重要紧急的事情

## 逆向思维

在思考某个问题的主体思路时，先提出要实现的效果。再根据效果，来思考为每个效果提出问题，最后再分别解决这些问题。

举个例子，TCP 拥塞控制所采用的方法是让每一个发送方根据所感知到的网络拥塞程度来限制其能向连接发送流量的速率。如果一个 TCP 发送方感知沿着该路径有拥塞，则发送方就会降低其发送速率。但是这种方法提出了三个问题，第一，一个 TCP 发送方如何限制它向其连接发送流量的速率呢？第二，一个 TCP 发送方如何感知从它到目的地之间的路径上存在拥塞呢？第三，当发送方感知到端到端的拥塞时，采用何种算法来改变其发送速率呢？

## 分解思维

把复杂问题分解为简单问题

应用例子：想通过创建一棵树结构 JSON，不是一开始就想着直接通过程序构建。
第一步：可以先实现一个一维数组，里面的节点均是带有 id 及父 id 的；
第二步：根据这个一维数组，生成一棵树结构。

可以使用函数组成伪代码，先主体后细节。

在你创建自己的代码时，这是一个很好的方式：实现一个容易编写的小功能并测试，然后再实现另一个小功能。

## 核心思维

利用分解思维拆分目标，然后构建主要的核心路标，连接成一条路线到达目标，再逐步实现每一个路标逻辑。

## 极限思维

横向+纵向考虑。

你开的单页面应用是几十个页面，如果增加到几百个能够性能扛得住么？3s 加载完成的页面能在 1s 内加载完成么？一个人负责的项目，如果要是有 10 个前端项目一起开发，现在的开发模式和代码管理方式还能适用么？

## 框架思考

只有我们对这些库、框架解决的问题有深入的了解和思考以后，我们才能得心应手地使用它们，并且有新的框架出来也不会太过迷茫————因为其实它们解决都是同一个问题。

## 系统架构

总体架构，前端架构，后端架构

- 总体架构
  - 数据层（数据获取、数据处理、数据存储）
  - 应用支撑层（ArcGIS Sever、Web 后端）
  - 业务逻辑层（）
  - 表现层（浏览器、小程序、手机 APP）

## 编码心法

- 怎么添加代码注释
- 异常与返回值有什么不同
- 什么时候需要抛出异常（宁愿终止程序也不要带错运行下去）
- 异常需要携带什么信息
- 参数校验的作用
- 什么时候需要进行参数校验
- 参数检验需要做到什么程度
- 异常处理
- promise 优先（给定一个明确的等待）
- 先在代码注释中列出代码要实现的动作，然后再逐步添加功能代码，这种方法非常实用。

## 学习源码

### 学习源码的好处

学习是为了更好的工作，工作中难免会遇到一些问题，学习源码最直接的好处是能帮你直接定位问题的根本原因，从而帮助你解决问题。很多人抱怨加班多，不妨问问自己，有多少时间是在写业务，多少时间是在写业务，多少时间是子啊写（找）bug。快速定位问题解决 bug，可以有效地提升你的工作效率，很可能就不用加班了，甚至会多出学习的时间，形成一个良性的循环。

学习源码可以很好地巩固基础，修炼内功，提升技术。前端几乎都会学习 JS 的基础知识，如类型、变量、函数、作用域、闭包、原型链、event loop 等知识。但很多人很难把这些知识在实践中运用自如，主要原因还是实践的少了，大部分时间都是在写业务的胶水代码。学习 Vue.js 这类框架的源码，会不断去巩固这些知识点，如果你源码看熟练了，那么你的 JS 基础就会更扎实。

学习源码有助于你更好地理解所用的技术栈，更熟练地在工作中运用。比如你深入学习了 Vue.js 的核心源码，你会理解 Vue.js 框架产生的意义、Vue.js 的职责边界、数据驱动的本质；你还会知道如何实现的组件化，在什么生命周期应该做什么事情，如何编写 Vue.js 的插件，如何和其它第三方 JS 库深度结合。你再也不会问“如何用 Vue 实现 XXX” 的傻问题了。

### 学习源码的时机

通常我们去学习一个技术栈的源码的时机是在我们对他的使用已经很熟练的情况，这时候应该系统的学习。
第二种是工作中使用某一个新框架的时候，遇到某个问题去看源码。

### 如何看源码

主：输入输出。
辅：函数+数据结构。

#### 先跑起来

- 全盘了解

#### 主线优先

关心核心流程，查看输入和输出，看函数以及数据，略过条件分支和循环分支以及一些边界情况的考虑。因为一个程序主要是由算法+数据组成，算法通常是函数组成，采用特殊的数据结构存储数据。

#### 问题驱动。

如数据驱动和组件化

#### 阅读技巧。

- 断点。
- 单元测试。
- 画图。

#### 利用好测试用例

测试用例往往是针对某个单一的场景，独自构造出一些数据来对程序的流程进行验证。

## 开源贡献

- 当你没有能力或者没有想法构建一个新的轮子时，积极参与贡献别人的轮子是个很好参与开源的方法。
- [【译】如何为开源软件做出贡献](https://juejin.im/post/5e30dff75188254c257c48d9?utm_source=gold_browser_extension)

## 技术骨干身上的几个特征

### 技术底子扎实

万丈高楼平地起，靠的就是深厚的地基，团队楠哥语录。

技术底子是工程师能力的核心基础，技术栈语言栈的广度深度，工程框架设计、原理的理解和运用的程度，这些方面不够扎实基本上与技术骨干无缘了。

至于说广度要多广，深度要多深反而没有一些清晰的指标。现在前端技术栈本身就是上下越来越厚，左右越来越宽，在 PC Web 的 Javascript 的单一技术栈上，如果积淀够深也足以支撑一个骨干的长成，同样在 ReactNative/Node 方面都如此，并不是前端的主要技术栈每一样都逐一掌握的足够好才能成为技术骨干，反倒是只要满足一专多长，这一专成立甚至是多个擅长项成立，那么就具备成为技术骨干的实力硬件基础了，接下来就要看软件实力了。

小案例：团队有个小伙伴 A，喜欢思考，关于 React 全家桶的知识储备非常扎实，从框架设计到内部运行原理以及同类型数据流方案的优缺点，所有人与他交谈都能有所收获，甚至醍醐灌顶。

### 善于独立解决难题

无论是在业务的技术架构中，还是纯技术性的攻坚中，我们知道工程实现会遇到五花八门各种各样的问题和难点，这些问题的解决和难点的突破，有许许多多可以尝试的办法，其中一个快捷键就是去请教团队里更资深的人，也就是场外求助迅速解决，但一个技术骨干在这方面往往能独立性的快速推进。

这里强调独立性并不是说他也不去咨询团队内外的人，而是说他不依赖团队内外的人，通过咨询是给他提供更多分析问题的视角，最终的解决依然是靠他个人。

问题解决的过程也因人而异，有的会快速的 Github/StackOverflow/Google 甚至百度/搜狗微信参考和 review 各种开源实现，有人会直接进入框架代码的阅读和逐行 Debug，有人会拿一支笔在画板上反复勾勒推理，无论哪一种，最终都是靠个人的能力解决问题，而每次解决问题后，能看到他征服困难后的成就感，用各种表情写到了脸上，身边的人也会受他感染共享征服感，大家可以设想下如果身边好多个技术骨干，每天都连续上演征服成功的案例，这对于团队士气提升是非常有益的。

小案例：团队有个小伙伴 B，喜欢独辟蹊径，无论多难受的问题到了他这里，总能独立以异于常人的方式把问题解决掉，这种问题解决的越来越多，功力也日渐增长，每次解决完都要在团队里炫耀吹嘘一下自己多牛逼，所有人都跟着开心片刻，这种氛围最终会影响到身边人。

### 不畏惧陌生领域的挑战

在一家增长型的公司，除了能感受到组织架构和业务上每个季度的变化外，还有一块技术人最看重的东西，那就是业务进程内外潜在的巨大技术机会与挑战，所谓技术成长空间。

这种机会通常是伴随业务的快速发展和大胆试错而来的，它有可能是业务驱动、运营驱动或者产品驱动，也有可能是技术驱动，无论哪种都可能会在原有的团队技术栈里面炸开一个口子，这个口子可能就是所有团队的工程师都不熟悉的领域，大家都不熟悉怎么办，除了快速招人外，就必须有技术骨干顶上去硬啃，至少能支撑项目的 1.0 粗糙版跑出来。

那么这时候技术骨干身上的不畏惧等于什么？怎么才叫不畏惧？一句 “都闪开，老子来” 口号算不算，我觉得只能算一半，前一半是刚开始时的勇气，另外一半是持续去挑战所带来的征服欲，征服欲越强或者兴趣越浓，越有驱动力去想法设法钻研，征服欲越弱，眼前的问题就会变成枯燥的任务，就算解决了，带来的征服快感也随之变弱。

小案例：团队有个小伙伴 C，遇到的一个技术领域上黑盒，在我们团队决定花精力去钻研个初步方案后，小伙伴自费搞了必要的设备，甚至整个过年期间都在强攻技术难点，终于春节后，带着可行性的方案来公司，为业务带来了极大的想象空间，驱动他的不仅仅是任务，更是征服欲所带来的满足感。

### 极少让别人失望

这个更多是在说结果，这个别人可能是合作方，可能是你的主管。为什么把这个单独拎出来，是因为不是所有技术好的同学都具备这样一个使命必达的执行力，只要允诺下来的事情，无论多难无论成败，都能拿出一定的成果来让等待的一方有所收获，这是一个技术好的同学走向技术骨干最重要的一个特征之一。

技术骨干的同学技术一定好，但技术好的同学未必是技术骨干，这一点往往被忽视，也是童鞋们在工作中最容易想当然的一件事情，如果你让别人失望的次数到了一定数量，那么距离技术骨干也还有一段距离了，因为骨干脱离了公司脱离了团队就会失去实际意义。而一个团队一定有它特定的定位和目标，目标的达成是衡量这个团队战斗力非常核心的标杆，也是主管脑海中的骨干的画像特征，定义骨干与非骨干的分水岭就在于此了。

## 如何快速成长为技术骨干

上面我们聊了技术骨干存在于我们大脑中的投影，也知道了他身上具备的显著特征，那怎么成为技术骨干呢？可以从下面几种路径入手：

### 1. 问清楚任务的 what 和 why

任何一个任务都有特定的背景和目的，比如老板让你去预研下 Electron 开发客户端软件的可行性，这是一定要问清楚这个可行性的软件客户端开发方案是为了承载什么场景的需求？为什么要用客户端而不是网页的方式来实现？

这就是任务的 what 和 why，需要你跟老板明确对焦，有可能他需要的仅仅是一个可以收发消息的聊天功能实现方案，这时候一个 socket 的聊天室网页版可能就能满足需求，应该是去调研 socket 更有价值而非是 Electron。一旦真的是去调研了，即便调研过程很漂亮，但对于最终问题的解决不是最优解，损失的不仅仅是老板对你的信任，更是失去了一次独立最优解拿下问题的机会。

有了这样的一个任务的对焦过程，我们会更了解到自己做这件事情的价值，对于结果也会更有期待，原始的驱动力天然就存在了。

### 2. 从过程中而不是从结果中学习

在微信群和社区经常看到提问的同学，非常焦急的等待一个问题的答案，或者是自己独立解决问题的过程中各种快捷方式求结果，拿到结果或答案后便迅速用到项目中，之后便丢到脑后，这是非常不可取的学习方式，每一次丢弃都丧失了一次成长的机会，要知道结果的价值是相对于业务和项目而言，而过程的价值才是相对于自己而言。

每一次拿到结果后，可以写一篇博客记录，也可以记个笔记，也可以弄张纸 review 一下，也可以讲给别人听，本质上是让自己重新播放刚才解决问题的过程，从中观察是什么样有意无意的动作和思考方式，启发了自己最终找到关键线索和路径，这样的一个思考过程反复锤炼会形成一个解决问题的套路库，比如什么问题直接 Google 就可以，什么问题要深入到代码中去深究，什么症状大概率是人为使用错误而非程序设计 Bug，从外向内再从内向外，让自己不仅仅对于技术框架或方案的细节更了解，也对于它们宏观上的特征更了解，最终让自己的问题解决能力越来越高效。

### 3. 以开放的视角看待一切技术存在

如今互联网所有上层的繁荣集市都是建立在各色各样的技术底层之上，无论是从 ASP 到 Go 这样的语言层面，还是 jQuery 到 React 这样的框架层面，从硬件到软件的方方面面杂糅在一个无限复杂的网络中执行着自己 0 和 1 的信号逻辑，任何一只能抓老鼠的猫都是一只有用的猫，技术同样如此，合理存在必然有特定场景下的价值，我们可以打开胸怀去观察甚至去接纳。

但开放到什么程度呢，是无限开放么？答案肯定不是。我们凡胎肉身不可能把目前极度细分的技术领域都摸过来，只能在特定的工程背景下做必要的心态开放，在未见到一个技术的真正价值之前不轻易否定它，在未评估好在自己项目中落地可能性之前不轻易使用它，这是两个层面的接收和拒绝，前者是价值与合理性的接收，后者是可行性落地与成本评估的拒绝。

聊这么多，跟技术骨干有什么关系呢？是因为技术骨干永远不知道自己接下来会面临一个来自什么领域的挑战，而保持视界的开阔和心态开放会给自己注入足够多的信息线索，有选择性的尝鲜，保持试错的好奇心，总是尝试去琢磨一个技术方案的核心价值点和设计策略，这样即便面临陌生领域的挑战，也可以用各种参照比对的方法为自己快速构建一个解决问题的路径坐标系，在这个坐标系里面，上下左右延展总会碰到之前大脑中索引的一些信息线索，从而触发一些灵感的产生，这些灵感的产生可能就是问题得到有效解决的关键。

### 4. 坚持高强度的学习和持续性的总结

当我们可以正确的认知一个任务的特征，也能有一个开放的心态和开阔的视野观察问题，也能从问题解决过程中回收套路进行索引的时候，我们距离一个技术骨干就差一个习惯了，这个习惯就是高强度的学习和持续性总结的习惯，为什么学习要高强度，而总结要持续性呢？

学习是为了输入，知识体系变得有力量一定需要足够的输入，而输入从哪里来，连续做两年 React 框架内的业务代码可以带来沉淀么？其实也未必，如果常年做业务但没有深入框架内部学习，也没有对框架之内的设计（如数据、状态、交互、异步、更新等等实现原理）更没有对框架之外的意义（组件、API、工具链、维护与封装等成本与效率）有足够的认识，那么所谓的内修基本功是站不住脚的。

至于说高强度，是因为低烈度的输入会伴随着遗忘，更会导致整个学习周期过长，更容易看不到质变而感觉枯燥无味甚至弃坑而去，这尤其在新人身上容易发生。如果让我建议一个学习的周期，我觉得 1~2 个月的高强度学习，分成 2 ~ 4 个小阶段是可取的，如果 2 个月没有明显进阶，那么需要推倒重来从 0 开始，而不是续命。

伴随着学习的一定是总结，所有的美食入口到胃，长长的肠道蠕动很久后，营养成分才能被机体充分吸收，最终再合成为新的动力之源要么燃烧要么存储备用，这时候的摄入才转成自己身体的一部分。无论是项目开发还是单纯的学习，都要给自己建立一套 review 机制，通过 review 把自己摄入的零碎的知识点进行重组串联，反反复复的理解消化，并重新输入一套新的知识蓝图把它刻到自己的记忆硬盘中，通过这样的持续性的总结归纳，自己的记忆硬盘会的不断的升级调整，最终对于所有知识的理解会越来越立体。

## 参考资料

- [如何写代码 —— 编程内功心法](https://zhuanlan.zhihu.com/p/30697209) —— 如何写出更严谨的代码的一些想法
- [如何阅读一份源代码？](https://www.codedump.info/post/20190324-how-to-read-code/#%E5%88%A9%E7%94%A8%E5%A5%BD%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B)
- [Vue 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/v3/guide/#%E6%88%91%E5%BA%94%E8%AF%A5%E5%AD%A6%E4%B9%A0%E6%BA%90%E7%A0%81%E5%90%97)
- [优秀的前端团队是如何炼成的](https://juejin.im/book/5cb56b7be51d456e3267e400/section/5cb56d89e51d456e6f45c6e5) 掘金小册
- [怎样成为大家口中的「好前端」？](https://zhuanlan.zhihu.com/p/28275428)