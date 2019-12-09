<template>
	<view class="index-box">
		<view class="index-navbar" :style="{'height':navnarwidth + 44 + 'px','padding-top':navnarwidth + 'px','line-height':44 + 'px'}" >首页</view>
		<scroll-view :scroll-top="scrollTop" :style="{'height':windowHeight - navnarwidth - 44 + 'px','background':'#F3F3F3'}" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower">
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
			
			<!-- 热门产品 -->
			<view class="hot-products-content">
				<view class="hot-products">
					<view class="hor-product-tit">热门产品</view>
					<view class="hot-product-list">
						<scroll-view style="width: 100%;" scroll-x="true" class="scroll-X">
							<view style="width: 100%;display: flex;">
								<view class="hot-row">
									<view class="hot-image"></view>
									<view class="pro-name">精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝精品燕窝</view>
									<view class="pro-price-box">
										<view class="price">￥89</view>
									</view>
								</view>
								<view class="hot-row">
									<view class="hot-image"></view>
									<view class="pro-name">精品燕窝</view>
									<view class="pro-price-box">
										<view class="price">￥89</view>
									</view>
								</view>
								<view class="hot-row">
									<view class="hot-image"></view>
									<view class="pro-name">精品燕窝</view>
									<view class="pro-price-box">
										<view class="price">￥89</view>
									</view>
								</view>
								<view class="hot-row">
									<view class="hot-image"></view>
									<view class="pro-name">精品燕窝</view>
									<view class="pro-price-box">
										<view class="price">￥89</view>
									</view>
								</view>
								<view class="hot-row">
									<view class="hot-image"></view>
									<view class="pro-name">精品燕窝</view>
									<view class="pro-price-box">
										<view class="price">￥89</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
			
			
			<!-- 主打产品 -->
			<view class="index-content">
				<view class="con-title">主打产品</view>
				<view class="con-menu">
					<view class="product">
						<view class="product-image"></view>
						<view class="name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</view>
						<view class="info">
							<view class="price">￥168</view>
							<view class="slogan">1235人付款</view>
						</view>
					</view>
					<view class="product">
						<view class="product-image"></view>
						<view class="name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</view>
						<view class="info">
							<view class="price">￥168</view>
							<view class="slogan">1235人付款</view>
						</view>
					</view>
					<view class="product">
						<view class="product-image"></view>
						<view class="name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</view>
						<view class="info">
							<view class="price">￥168</view>
							<view class="slogan">1235人付款</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="loading-text">{{ loadingText }}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:0,
				windowHeight:null,
				navnarwidth:null,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				loadingText: '正在加载...'
			}
			
		},
		onShow() {
			var _that = this
			wx.getSystemInfo({
			  success: function(res) {
				  console.log(res.statusBarHeight)
				_that.navnarwidth = res.statusBarHeight
				_that.windowHeight = res.windowHeight
			  }
			})
		},
		
		onReachBottom() {
			// uni.showToast({ title: '触发上拉加载' });
			
		},
		
		onLoad() {

		},
		methods: {
			//滚动到顶部/左边触发
			upper(e){
				console.log('顶部')
				// console.log(e)
			},
			//滚动到底部/右边触发
			lower(e){
				console.log('到底了')
				// console.log(e)
				// uni.showLoading({
				// 	mask:true,
				// 	title:'加载中'
				// })
				setTimeout(()=>{
					// uni.hideLoading()
					this.loadingText = '到底了';
				},1000)
			},
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	.index-box{
		width: 100%;
		height: 100%;
		.index-navbar{
			width: 100%;
			background:linear-gradient(130deg,rgba(115,95,247,1),rgba(83,122,251,1));
			box-shadow:1rpx 1rpx 1rpx 0px rgba(26,25,26,0.15);
			font-size:32rpx;
			font-family:SimHei;
			color:rgba(255,255,255,1);
			box-sizing: border-box;
			text-align: center;
		}
		.uni-padding-wrap{
			width:100%;
			height:750rpx;
			swiper{
				width:100%;
				height:750rpx;
				background: #ffffff;
			}
		}
		.hot-products-content{
			width: 100%;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			background: #F3F3F3;
			.hot-products{
				width: 100%;
				background:rgba(255,255,255,1);
				border-radius:10rpx;
				padding-top: 20rpx;
				box-sizing: border-box;
				.hor-product-tit{
					width:120rpx;
					height:40rpx;
					background:linear-gradient(270deg,rgba(81,123,251,1),rgba(118,92,247,1));
					border-radius:0px 20rpx 20rpx 2rpx;
					font-size:24rpx;
					font-weight:normal;
					color:rgba(255,255,255,1);
					line-height:40rpx;
					text-align: center;
					margin-bottom: 20rpx;
				}
				.hot-product-list{
					width: 100%;
					padding: 0 15rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					.hot-row{
						width: 190rpx;
						margin:0 15rpx;
						flex-shrink: 0;
						.hot-image{
							width: 190rpx;
							height: 190rpx;
							background: red;
						}
						.pro-name{
							width: 92%;
							padding: 10rpx 4%;
							font-size:28rpx;
							font-family:SimHei;
							color:rgba(51,51,51,1);
							line-height: 40rpx;
							width: 100%;
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}
						.pro-price-box{
							width: 100%;
							display: flex;
							justify-content: space-between;
							.price{
								font-size:28rpx;
								color:rgba(246,58,0,1);
								padding: 10rpx 0;
							}
						}
					}
				}
			}
		}
		.index-content{
			width: 100%;
			.con-title{
				width:100%;
				height:70rpx;
				background:rgba(255,255,255,1);
				margin-bottom: 20rpx;
				text-align: center;
				line-height: 70rpx;
				color: #000000;
			}
			.con-menu{
				width: 92%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding: 0 4% 3vw 4%;
				.product{
					width: 48%;
					border-radius: 20rpx;
					background-color: #fff;
					margin: 0 0 14rpx 0;
					box-shadow: 0px 4rpx 24rpx rgba(0, 0, 0, 0.1);
					.product-image{
						width: 100%;
						height: 330rpx;
						border-radius: 20rpx 20rpx 0 0;
						background: blue;
					}
					.name{
						width: 92%;
						padding: 10rpx 4%;
						font-size:28rpx;
						font-family:SimHei;
						color:rgba(51,51,51,1);
						line-height: 40rpx;
						width: 100%;
						text-overflow: -o-ellipsis-lastline;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.info{
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						width: 92%;
						padding: 10rpx 4% 10rpx 4%;
						.price{
							color: #e65339;
							font-size: 30rpx;
							font-weight: 600;
						}
						.slogan{
							color: #807c87;
							font-size: 24rpx;
						}
					}
				}
			}
		}
		
		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60rpx;
			color: #979797;
			font-size: 24upx;
		}
	}
</style>
