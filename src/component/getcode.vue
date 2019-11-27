<template>
  <div class='getCodeBox' :style='{background:!isGet?bgColorNoGet:bgColorGet,color:!isGet?fontColorNoGet:fontColorGet}' @click='onClick()'>
    <span v-if='!isGet'>获取验证码</span>
    <span v-if='isGet'>{{time}}秒后重发</span>
  </div>

</template>

<script>
	export default {
	  name:'Getcode',
		data() {
			return {
				time: 60,
				isGet: false
			}
		},
		destroyed() {
			clearInterval(this.timer)
		},
		methods: {
			onClick() {
				let self = this
				if (!this.isGet) {
					this.getCode()
					this.isGet = true
					this.timer = setInterval(function () {
						self.time--
						if (self.time === 0) {
							clearInterval(self.timer)
							self.time = 60
							self.isGet = false
						}
					}, 1000)
				}

			}
		},
		props: {
			// 获取验证码方法
			getCode: {
				type: Function
			},
			// 获取前背景色
			bgColorNoGet: {
				type: String,
				default: '#000'
			},
			// 获取后背景色
			bgColorGet: {
				type: String,
				default: 'rgb(221,221,221)'
			},
			// 获取前字体颜色
			fontColorNoGet: {
				type: String,
				default: 'white'
			},
			// 获取后字体颜色
			fontColorGet: {
				type: String,
				default: 'white'
			}
		}
	}
</script>

<style scoped>
  .getCodeBox {
    font-size: 14px;
    width: 80px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    border-radius: 2px;
    margin-top: 7px;
  }
</style>
