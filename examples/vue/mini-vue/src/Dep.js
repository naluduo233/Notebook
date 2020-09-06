// 如何收集依赖
// 在 getter 中收集依赖，在 setter 中触发依赖
// 1. 把依赖收集的代码封装成一个类，它专门帮助我们管理依赖。
// 2. 使用这个类，我们可以收集依赖、删除依赖或者向依赖发送通知等

class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    remove(this.subs, sub);
  }

  depend() {
    if (global.target) {
      this.addSub(global.target);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i ++) {
      subs[i].update();
    }
  }
}

module.exports = Dep;