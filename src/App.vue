<template>
  <div class="app">
    <GYCountBtn class="countBtn" :config="config" ref="countBtn"></GYCountBtn>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      config: {
        startText: '发送验证码',
        endText: '再次发送',
        totalTime: 60,
        tickTime: 1,
        activeClass: 'isRun',
        computeText (num) {
          return num + 's'
        },
        canTodo: () => {
          // 返回值判定是否可以发送
          return true
        },
        todo: () => {
          // 发送验证码请求
          // const that = this
          // const data = {
          //   mobile: Encrypt(that.form.phone)
          // }
          // sendVerifiCode(data)
          //   // 请求失败时暂停计时
          //   .then(res => {
          //     if (res.status == false) {
          //       store.state.isHidden = true
          //       store.state.popupText = res.msg
          //       if (res.data) {
          //         that.$refs.getCode.time = res.data
          //       } else {
          //         that.$refs.getCode.stop()
          //       }
          //     }
          //   })
          //   .catch(error => {
          //     that.$refs.getCode.stop()
          //   })
        },
        canUse: true,
        noCanClass: 'no-can'
      },
    }
  },
  methods: {

  }
}
</script>

<style scope lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .countBtn {
    width: 130px !important;
    height: 40px !important;
    text-align: center;
    font-size: 18px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    background-color: #5aa2ff;
    color: #fff;
    line-height: 40px;
  }
}
</style>
