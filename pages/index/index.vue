<template>
	<view class="content">
		<view class="head">
			<div class="title">AI-Fit<br>居家锻炼智能助手</div>
		</view>
		<view class="body">
			<div class="video_link">
				<img src="../static/链接.png" alt="" class="lj_img">
				<div class="lj_div">视频链接</div>
			</div>
			<div class="link_input">
				<input type="text" name="" id="" placeholder="请粘贴视频链接">
				<img src="../static/打开视频.png" alt="" class="open_video" @click="toggleVideoVisibility"/>
			</div>
			<div class="video_show">
						<img src="../static/刘畊宏.png" alt="" class="video_show_img"  v-if="isVideoVisible"/>
					</div>
			<div class="start_btn">
				<img src="../static/开始锻炼.png" alt="" class="start_btn_img" @click="start_exercise"/>
			</div>
			<div class="suggest">
				<img src="../static/为您推荐.png" alt="" class="suggest_img" />
			</div>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';

	// 定义一个响应式变量来控制视频图片的显示与隐藏
	const isVideoVisible = ref(false);

	// 定义事件处理函数来切换视频图片的显示状态
	const toggleVideoVisibility = () => {
		uni.showLoading({
			title:'加载中...'
		})
		setTimeout(()=>{
			uni.hideLoading();
			isVideoVisible.value = !isVideoVisible.value;
		},1500);
		console.log(10)
	};
	const start_exercise =()=>{
		uni.navigateTo({
			url:"/pages/exercise/index"
		})
	}
</script>



<style lang="scss">
	html {
	  overflow: -moz-scrollbars-none;
	}
	::-webkit-scrollbar {
	  width: 0;
	  height: 0;
	  color: transparent;
	}
	.content{
		overflow: hidden;
		-ms-overflow-style: none;
	}
	.head {
		/* 背景颜色 */
		position: absolute;
		width: 430px;
		height: 15vh;
		left: 0%;
		right: 0%;
		top: 0%;
		bottom: -29.91%;
		box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
		background: rgb(255, 209, 65);
	}

	.title {
		position: relative;
		top: 13vw;
		left: 20px;
		font-size: 20px;
		color: rgb(0, 0, 0);

		font-weight: 900;
		letter-spacing: 2px;
	}

	.video_link {
		position: absolute;
		top: 17vh;
	}

	.lj_img {
		/* 链接 */
		position: absolute;
		width: 28px;
		height: 28px;
		left: 18px;
		right: 335px;
	}

	.lj_div {
		position: relative;
		left: 50px;
		font-weight: bold;
	}

	.link_input {
		position: absolute;
		top: 21vh;
		left: 18px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.link_input>input {
		box-sizing: border-box;
		border: 1px solid rgb(0, 0, 0);
		border-radius: 5px;
		background: rgb(255, 255, 255);
		// width: 65vw;
		// height: 8vh;
		width: 285px;
		height: 49.66px;
		text-indent: 1rem;
		margin-right: 10px;
	}

	.open_video {
		width: 71px;
		height: 57px;
		position: relative;
		left: 20px;
	}

	.video_show {
		/* 链接视频 */
		position: absolute;
		top: 30vh;
		width: 100%;
		margin: 0 auto;

		display: flex;

	}

	.video_show_img {

		width: 90%;
		margin: 0 auto;
		border: 1px solid black;
		border-radius: 3px;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		// display: none;
	}

	.start_btn {
		position: absolute;
		top: 60vh;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		// margin: 0 auto;
	}

	.start_btn_img {
		width: 251px;
		height: 57px;

	}

	.suggest {
		position: absolute;
		top: 70vh;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.suggest_img {
		width: 85%;
		// height: 70%;

	}
</style>