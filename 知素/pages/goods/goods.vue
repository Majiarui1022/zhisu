<template>
	<view class="goods-box">
		<video id="myVideo" class="myVideo" :src="videoSrc" v-show="isPlayVideo" :show-fullscreen-btn="showFullscreenBtn" :direction="videoDirection" :show-play-btn="showPlayBtn" @pause="videoPause" @fullscreenchange="viderFullscreen">
			<!-- <cover-image class="stopPlayVideoBtn" @click="stopPlayVideo" src="/static/img/close.png"></cover-image> -->
		</video>
		
		<scroll-view :scroll-top="scrollTop"  :style="{'height':windowHeight + 'px','padding-bottom':'100rpx','box-sizing':'border-box','background':'#f8f8f8'}" style="100%" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		@scroll="scroll">
		
			<!-- 轮播图 -->
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item>
								<view class="swiper-item uni-bg-red">A</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-green">B</view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue">C</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			
			<!-- 商品信息 -->
			<view class="info-box introduce-section">
				<!-- 商品名称 -->
				<view class="pro-title">
					<text>2017极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝</text>
				</view>
				<!-- 商品介绍 -->
				<view class="pro-aaaaa">
					<text>极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝</text>
				</view>
				<!-- 商品价格 -->    <!-- 折扣  暂时预留 -->
				<view class="pro-money">
					<view class="new-price"><text>￥341.6</text></view>
					<!-- <view class="old-price"><text>￥488</text></view>
					<view class="pro-discount"><text>8折</text></view> -->
				</view>
				<!-- 销量、库存、运费 -->
				<view class="bot-row">
					<text>运费：包邮</text>
					<text>销量：22222</text>
					<text>库存：999999</text>
				</view>
			</view>
			
			<view class="info-box scpc">
				<!--  分享 -->
				<view class="share-section">
					<view class="share-icon">
						<text class="yticon icon-xingxing"></text>
						 返
					</view>
					<text class="share-titM">该商品分享可领49减10红包</text>
					<text class="yticon icon-bangzhu1"></text>
				</view>
				<view class="border-row">
					<!-- 规格 -->
					<view class="c-row b-b" @click="toggleSpec">
						<text class="share-titM">购买类型</text>
						<view class="con">
							<text class="selected-text">
								燕窝
							</text>
						</view>
						<text class="yticon icon-you"></text>
					</view>
				</view>
			</view>
			
			
			<!-- 商品评价 -->
			<view class="info-box pro-evaluate">
				<view class="row">
					<text class="row-tit">商品评价(102)</text>
					<text class="row-link" @click="goallmassgae('/pages/goods/allmsage')">查看全部<text class="yticon icon-you"></text></text>
				</view>
				<view class="comment">
					<view class="face">
						<image src="../../static/missing-face.png" mode=""></image>
					</view>
					<view class="userinfo">
						<view class="username">大黑哥</view>
						<view class="content">很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！</view>
						<view class="lei-time">
							<view class="lei">购买类型：XL 红色</view>
							<view class="time">2019-04-01 19:21</view>
						</view>
						<view class="evaluate-image-box">
							<!-- 视频列表循环 -->
							<view class="box" @tap="playVideo">
								<image src="../../static/temp/cate14.jpg" mode=""></image>
								<view class="playbtn">
									<view class="icon bofang"></view>
								</view>
							</view>
							<!-- 图片列表循环 -->
							<view class="box" @click="ShowImage">
								<image src="../../static/temp/cate14.jpg" mode=""></image>
							</view>
							<view class="box" @click="ShowImage">
								<image src="../../static/temp/cate14.jpg" mode=""></image>
							</view>
							<view class="box" @click="ShowImage">
								<image src="../../static/temp/cate14.jpg" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 商品详情 -->
			<view class="pro-description">
				<view class="description-tit">———— 商品详情 ————</view>
				<view class="content">
					<view class="iamge-box">
						<image src="../../static/user-bg.jpg" mode=""></image>
						<image src="../../static/user-bg.jpg" mode=""></image>
						<image src="../../static/user-bg.jpg" mode=""></image>
						<image src="../../static/user-bg.jpg" mode=""></image>
						<image src="../../static/user-bg.jpg" mode=""></image>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
			@touchmove.stop.prevent="stopPrevent"
			@click="toggleSpec"
		>
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text">S</text>
						</view>
					</view>
				</view>
				<view class="attr-list">
					<text>中农类</text>
					<view class="item-list">
						<text 
							class="tit"
						>
							<!-- :class="{selected: childItem.selected}" -->
							123
						</text>
						<text
							class="tit"
						>
							456
						</text>
						<text
							class="tit"
						>
							789
						</text>
					</view>
				</view>
				
				<view class="attr-list">
					<text>中农类</text>
					<view class="item-list">
						<text 
							class="tit"
						>
							123
						</text>
						<text
							class="tit"
						>
							456
						</text>
						<text
							class="tit"
						>
							789
						</text>
					</view>
				</view>
				
				<view class="attr-list">
					<text>中农类</text>
					<view class="item-list">
						<text 
							class="tit"
						>
							123
						</text>
						<text
							class="tit"
						>
							456
						</text>
						<text
							class="tit"
						>
							789
						</text>
					</view>
				</view>
				<view class="attr-list">
					<text>数量</text>
					<view class="item-list">
						<view class="rest">-</view>
						<view class="number">{{pronumber}}</view>
						<view class="add">+</view>
					</view>
				</view>
				
				<button class="btn" @click="buy('/pages/payorder/payorder')">完成</button>
			</view>
		</view>
		
		
		<view class="footer">
			<view class="icons">
				<view class="box" @tap="share">
					<button open-type="share" class="button-share" @click=""onShareAppMessage></button>
					<view class="icon fenxiang"></view>
					<view class="text">分享</view>
				</view>
				<view class="box" @tap="toChat('/pages/chat/chat')">
					<view class="icon kefu"></view>
					<view class="text">客服</view>
				</view>
				<!-- <view class="box" @tap="keep">
					<view class="icon" :class="[isKeep?'shoucangsel':'shoucang']"></view>
					<view class="text">{{isKeep?'已':''}}收藏</view>
				</view> -->
			</view>
			<view class="btn">
				<!-- <view class="joinCart" @tap="joinCart">加入购物车</view> -->
				<view class="buy" @click="toggleSpec">立即购买</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				specClass: 'none',
				scrollTop:0,
				navnarwidth:0,
				windowHeight:0,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				isPlayVideo:true,
				videoDirection:0,
				showPlayBtn:true,
				showFullscreenBtn:true,
				// require('../../static/happy.mp4')
				// https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4
				videoSrc:'https://mp4.vjshi.com/2017-06-17/ed1d63669bea39f5ef078c4e194291d6.mp4',
				pronumber:1
			}
		},
		onReady: function (res) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		onShow() {
			var _that = this
			wx.getSystemInfo({
			  success: function(res) {
				  console.log(res.statusBarHeight)
				_that.navnarHeight = res.statusBarHeight
				_that.windowHeight = res.windowHeight
			  }
			})
		},
		methods:{
			upper(){
				
			},
			lower(){
			},
			scroll(){
			
			},
			
			//购买商品
			// buy(){
				
			// },
			//路由跳转
			buy(url){
				// if(!this.hasLogin){
				// 	url = '/pages/public/login';
				// }
				uni.navigateTo({  
					url
				})  
			}, 
			
			toChat(url){
				uni.navigateTo({
					url
				})  
			},	
			goallmassgae(url){
				uni.navigateTo({
					url
				})
			},
			
			
			//规格弹窗开关
			toggleSpec() {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			
			//展示图片
			ShowImage(){
				let src = 'https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg';
				let srclist = [
					'https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg',
					'https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg',
					'https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg'
				]
				uni.previewImage({
					current:src,
					urls: srclist
				});
			},
			
			
			stopPrevent(){},
			
			
			//点击播放视频
			playVideo() {
				console.log(this.videoSrc)
				// this.isPlayVideo = true;
				this.$nextTick(function() {
					this.videoContext.requestFullScreen({direction:0});
				});
				
			},
			stopPlayVideo(){
				this.videoSrc = '';
				this.videoContext.pause();
			},
			
			//@fullscreenchange
			viderFullscreen(e){
				if(e.detail.fullScreen){
					this.videoContext.play();
				}else{
					this.stopPlayVideo();
				}
			},
			//视频暂停
			videoPause(){
				// this.isPlayVideo = false;
				// this.videoSrc = '';
			}, 
			
			
			//分享商品
			onShareAppMessage(res){
				console.log(res)
				if (res.from === 'button') {
				  // 来自页面内转发按钮
				  console.log(res.target)
				}
				return {
				  title: '自定义转发标题',
				  path: '/pages/goods/goods?id=123',
				  imageUrl:'../../static/img/face.jpg'
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	
	.myVideo{
		position: fixed;
		top: 50%;
		right: 100%;
	}
	.goods-box{
		width: 100%;
		height: 100%;
		.uni-padding-wrap{
			width:100%;
			height:750rpx;
			swiper{
				width:100%;
				height:750rpx;
			}
		}
		.info-box{
			width: 100%;
			box-sizing: border-box;
			background: #ffffff;
			margin-bottom: 20rpx;
		}
		.introduce-section{
			padding: 20rpx 30rpx;
			.pro-title{
				width: 100%;
				text{
					font-size:36rpx;
					font-family:SimHei;
					color:rgba(50,50,50,1);
					line-height:54rpx;
				}
			}
			.pro-aaaaa{
				width: 100%;
				text{
					font-size:24rpx;
					font-family:SimHei;
					color:#999999;
					line-height:40rpx;
					display: block;
				}
			}
			.pro-money{
				width: 100%;
				display: flex;
				padding: 10rpx 0;
				align-items: baseline;
				text{
					// line-height:1;
				}
				.new-price{
					text{
						display: block;
						font-size:32rpx;
						color:rgba(115,95,247,1);
					}
				}
				.old-price{
					margin:0 12rpx;
					text{
						font-size: 25rpx;
						color: #909399;
						text-decoration: line-through;
					}
				}
				.pro-discount{
					background:rgba(115,95,247,1);
					font-size:24rpx;
					color: #FFFFFF;
					padding:2rpx 8rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 6rpx;
				}
			}
			.bot-row{
				width: 100%;
				height: 50rpx;
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #909399;
				text{
					flex: 1;
				}
			}
		}
		.scpc{
			/* 分享 */
			.share-section{
				display:flex;
				align-items:center;
				color: $font-color-base;
				background: linear-gradient(left, #fdf5f6, #fbebf6);
				padding: 12rpx 30rpx;
				.share-icon{
					display:flex;
					align-items:center;
					width: 70rpx;
					height: 30rpx;
					line-height: 1;
					border: 1px solid $uni-color-primary;
					border-radius: 4rpx;
					position:relative;
					overflow: hidden;
					font-size: 22rpx;
					color: $uni-color-primary;
					&:after{
						content: '';
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						left: -20rpx;
						top: -12rpx;
						position:absolute;
						background: $uni-color-primary;
					}
				}
				.icon-xingxing{
					position:relative;
					z-index: 1;
					font-size: 24rpx;
					margin-left: 2rpx;
					margin-right: 10rpx;
					color: #fff;
					line-height: 1;
				}
				.share-titM{
					font-size: $font-base;
					margin-left:10rpx;
				}
				.icon-bangzhu1{
					padding: 10rpx;
					font-size: 30rpx;
					line-height: 1;
				}
				.share-btn{
					flex: 1;
					text-align:right;
					font-size: $font-sm;
					color: $uni-color-primary;
				}
				.icon-you{
					font-size: $font-sm;
					margin-left: 4rpx;
					color: $uni-color-primary;
				}
			}
			// 规格
			.border-row{
				&:after{
					position: absolute;
					z-index: 3;
					left: 0;
					right: 0;
					height: 0;
					content: '';
					-webkit-transform: scaleY(0.5);
					-ms-transform: scaleY(0.5);
					transform: scaleY(0.5);
					border-bottom: 1px solid #E4E7ED;
				}
				.c-row{
					display:flex;
					align-items:center;
					padding: 20rpx 30rpx;
					box-sizing: border-box;
					position:relative;
					font-size: 26rpx;
					.share-titM{
						width: 140rpx;
						color: #606266;
					}
					.con{
						flex: 1;
						color: $font-color-dark;
						.selected-text{
							margin-right: 10upx;
						}
					}
				}
			}
			
		}
		
		//商品评价
		.pro-evaluate{
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			.row{
				display: flex;
				align-items: center;
				position: relative;
				margin:0 0 30rpx 0;
				text{
					font-size: 30rpx;
				}
				.row-link{
					color: #17e6a1;
					position: absolute;
					right: 0;
					display: flex;
					.icon-you{
						font-size: 30rpx;
						margin-left: 4rpx;
						color: #17e6a1;
					}
				}
			}
			.comment{
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
				.face{
					width: 80rpx;
					height: 80rpx;
					margin-right: 8rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 50%;
						display: block;
					}
				}
				.userinfo{
					flex: 1;
					padding-left: 26rpx;
					box-sizing: border-box;
					.username{
						font-size: 28rpx;
						color: #999;
					}
					.content{
						padding:10rpx 0;
						font-size: 28rpx;
					}
					.lei-time{
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 24rpx;
						color: #909399;
						padding: 20rpx 0;
					}
					.evaluate-image-box{
						width: 100%;
						display: flex;
						flex-wrap: wrap;
							background: red;
						.box{
							width: 136rpx;
							height: 136rpx;
							margin: 4rpx 4rpx;
							position: relative;
							display: flex;
							align-items: cetner;
							justify-content: center;
							.playbtn{
								position: absolute;
								top: 50%;
								margin-top: -40rpx;
								.icon{
									font-size: 80upx;
									color: rgba(255,255,255,.9)
								}
							}
							image{
								width: 100%;
								height: 100%;
								display: block;
							}
						}
					}
				}
			}
		}
		
		
		
		// 商品详情
		.pro-description{
			width: 100%;
			.description-tit{
				width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 26rpx;
				color: #999;
			}
			.content{
				width: 100%;
				.iamge-box{
					width: 100%;
					image{
						width: 100%;
						display: block;
					}
				}
			}
		}
		
		
		
		
		
		
		
		/* 规格选择弹窗 */
		.attr-content{
			padding: 10upx 30upx;
			box-sizing: border-box;
			.a-t{
				display: flex;
				image{
					width: 170upx;
					height: 170upx;
					flex-shrink: 0;
					margin-top: -40upx;
					border-radius: 8upx;;
				}
				.right{
					display: flex;
					flex-direction: column;
					padding-left: 24upx;
					font-size: $font-sm + 2upx;
					color: $font-color-base;
					line-height: 42upx;
					.price{
						font-size: $font-lg;
						color: $uni-color-primary;
						margin-bottom: 10upx;
					}
					.selected-text{
						margin-right: 10upx;
					}
				}
			}
			.attr-list{
				display: flex;
				flex-direction: column;
				font-size: $font-base + 2upx;
				color: $font-color-base;
				padding-top: 30upx;
				padding-left: 10upx;
			}
			.item-list{
				padding: 20upx 0 0;
				display: flex;
				flex-wrap: wrap;
				text{
					display: flex;
					align-items: center;
					justify-content: center;
					background: #eee;
					margin-right: 20upx;
					margin-bottom: 20upx;
					border-radius: 100upx;
					min-width: 60upx;
					height: 60upx;
					padding: 0 20upx;
					font-size: $font-base;
					color: $font-color-dark;
				}
				.selected{
					background: #fbebee;
					color: $uni-color-primary;
				}
				.rest,.add{
					padding: 0 20upx;
					height: 60upx;
					color: $font-color-dark;
					display: flex;
					align-items: center;
					justify-content: center;
					background: #eee;
				}
				.number{
					width: 100rpx;
					height: 60upx;
					text-align: center;
					line-height: 60upx;
				}
			}
		}
		
		/*  弹出层 */
		.popup {
			position: fixed;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 99;
			
			&.show {
				display: block;
				.mask{
					animation: showPopup 0.2s linear both;
				}
				.layer {
					animation: showLayer 0.2s linear both;
				}
			}
			&.hide {
				.mask{
					animation: hidePopup 0.2s linear both;
				}
				.layer {
					animation: hideLayer 0.2s linear both;
				}
			}
			&.none {
				display: none;
			}
			.mask{
				position: fixed;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: 1;
				background-color: rgba(0, 0, 0, 0.4);
			}
			.layer {
				position: fixed;
				z-index: 99;
				bottom: 0;
				width: 100%;
				min-height: 40vh;
				border-radius: 10upx 10upx 0 0;
				background-color: #fff;
				.btn{
					height: 66upx;
					line-height: 66upx;
					border-radius: 100upx;
					background: $uni-color-primary;
					font-size: $font-base + 2upx;
					color: #fff;
					margin: 30upx auto 20upx;
				}
			}
			@keyframes showPopup {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
			@keyframes hidePopup {
				0% {
					opacity: 1;
				}
				100% {
					opacity: 0;
				}
			}
			@keyframes showLayer {
				0% {
					transform: translateY(120%);
				}
				100% {
					transform: translateY(0%);
				}
			}
			@keyframes hideLayer {
				0% {
					transform: translateY(0);
				}
				100% {
					transform: translateY(120%);
				}
			}
		}
		
		
		.footer{
			width: 92%;
			padding: 0 4%;
			height: 99rpx;
			position: fixed;
			left: 0;
			bottom: 0;
			border-top:1rpx solid #eee;
			background-color: #fff;
			z-index: 2;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.icons {
				display: flex;
				height: 80upx;
				margin-left: -4%;
				.box {
					width: 80upx;
					height: 80upx;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					position: relative;
					.button-share{
						width: 100%;
						height: 100%;
						display: block;
						margin: 0;
						padding: 0;
						position: absolute;
						left: 0;
						top: 0;
						opacity: 0;
					}
					.icon {
						font-size: 40upx;
						color: #828282;
					}
					.text {
						display: flex;
						justify-content: center;
						width: 100%;
						font-size: 22upx;
						color: #666;
					}
				}
			}
			.btn {
				height: 80upx;
				border-radius: 40upx;
				overflow: hidden;
				display: flex;
				margin-right: -2%;
				.joinCart,
				.buy {
					height: 80upx;
					padding: 0 60upx;
					color: #fff;
					display: flex;
					align-items: center;
					font-size: 28upx;
				}
				.joinCart {
					background-color: #f0b46c;
				}
				.buy {
					background-color: #f06c7a;
				}
			}
		}
	}
</style>
