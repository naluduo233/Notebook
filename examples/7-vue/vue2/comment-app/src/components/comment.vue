<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      state: {
        // 使用 state 区分比直接 this.xxx 要好一点
        timeString: "",
      },
    };
  },
  created() {
    this._updateTimeString();
    // _timer 不需要响应式
    this._timer = setInterval(this._updateTimeString.bind(this), 5000);
  },
  beforeDestroy() {
    clearInterval(this._timer);
  },
  methods: {
    _updateTimeString() {
      const comment = this.comment;
      const duration = (+Date.now() - comment.createdTime) / 1000;
      this.state.timeString =
        duration > 60
          ? `${Math.round(duration / 60)} 分钟前`
          : `${Math.round(Math.max(duration, 1))}秒前`;
    },
    _getProcessedContent(content) {
      return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039")
        .replace(/`([\S\s]+?)`/g, "<code>$1</code>");
    },
    handleDeleteComment() {
      this.$emit("onDeleteComment", this.index);
    },
  },
  render() {
    return (
      <div class="comment">
        <div class="comment-user">
          <span>{this.comment.username}</span>
        </div>
        <p
          domPropsInnerHTML={this._getProcessedContent(this.comment.content)}
        ></p>
        <span class="comment-createdtime">{this.state.timeString}</span>
        <span
          class="comment-delete"
          onClick={this.handleDeleteComment.bind(this)}
        >
          删除
        </span>
      </div>
    );
  },
};
// import React, { Component } from "react";
// class Comment extends Component {
//   constructor() {
//     super();
//     this.state = { timeString: "" };
//   }

//   componentWillMount() {
//     this._updateTimeString();
//     this._timer = setInterval(this._updateTimeString.bind(this), 5000);
//   }

//   componentWillUnmount() {
//     clearInterval(this._timer);
//   }

//   _updateTimeString() {
//     const comment = this.props.comment;
//     const duration = (+Date.now() - comment.createdTime) / 1000;
//     this.setState({
//       timeString:
//         duration > 60
//           ? `${Math.round(duration / 60)} 分钟前`
//           : `${Math.round(Math.max(duration, 1))}秒前`,
//     });
//   }

//   _getProcessedContent(content) {
//     return content
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&#039")
//       .replace(/`([\S\s]+?)`/g, "<code>$1</code>");
//   }

//   handleDeleteComment() {
//     if (this.props.onDeleteComment) {
//       this.props.onDeleteComment(this.props.index);
//     }
//   }

//   render() {
//     return (
//       <div class="comment">
//         <div class="comment-user">
//           <span>{this.props.comment.username}</span>
//           <p
//             dangerouslySetInnerHTML={{
//               __html: this._getProcessedContent(this.props.comment.content),
//             }}
//           ></p>
//         </div>
//         <span class="comment-createdtime">{this.state.timeString}</span>
//         <span
//           class="comment-delete"
//           onClick={this.handleDeleteComment.bind(this)}
//         >
//           删除
//         </span>
//       </div>
//     );
//   }
// }
// export default Comment;
</script>
