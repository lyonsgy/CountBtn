<template>
  <span :class="activeClass" @click="runtime">{{text}}</span>
</template>
<script>
let config = {
  startText: '获取验证码', // 开始时候的文本
  endText: '再次获取', // 获取验证码结束后文本
  totalTime: 60, // 验证码倒计时总时间(秒)
  tickTime: 1, // 验证码每次隔多久变一次(秒)
  activeClass: 'isRun', // 倒计时执行期添加的class 默认 isRun
  // 自定义倒计时期间文本的显示内容
  computeText (num) {
    // num 倒计时时间
    return '重新获取 ' + num + 's'
  },
  // 是否可以发送
  canTodo: () => true,
  // canTode验证成功后执行 发送短信验证码
  todo: () => { },
  // 发送完成后的回调
  endCallback () { },
  // 每次点击都会被调用
  click () { },
  // 是否可用   默认ture
  canUse: true,
  // 不可用时的类名  默认no-can
  noCanClass: 'no-can'
}
let countBtn = {
  name: 'GYCountBtn',
  props: {
    config: {
      type: Object
    }
  },
  data: () => {
    return {
      time: '',
      isRun: false,
      isFirst: true,
      firstText: '',
      totalTime: 60,
      tickTime: 1
    }
  },
  mounted () { },
  methods: {
    runtime () {
      let config = this._config
      config.click(this.isRun)
      if (config.canUse && !this.isRun && config.canTodo()) {
        this.isFirst = false
        this.isRun = true
        this.time = config.totalTime
        config.todo(config)
        this.timer = setInterval(() => {
          if (this.time <= config.tickTime) {
            this.stop(0)
          } else {
            this.time -= config.tickTime
          }
        }, 1000 * config.tickTime)
      }
    },
    stop (type) {
      let config = this._config
      if (this.isRun) config.endCallback(type, config)
      this.isRun = false
      clearInterval(this.timer)
    }
  },
  computed: {
    _config () {
      return Object.assign({}, config, this.config || {})
    },
    text () {
      let config = this._config
      if (this.isFirst) {
        return config.startText
      } else {
        if (this.isRun) {
          return config.computeText(this.time)
        } else {
          return config.endText
        }
      }
    },
    activeClass () {
      let config = this._config
      return (
        (!config.canUse ? config.noCanClass + ' ' : '') +
        (this.isRun ? config.activeClass : '')
      )
    }
  }
}
countBtn.options = config
export default countBtn
</script>
