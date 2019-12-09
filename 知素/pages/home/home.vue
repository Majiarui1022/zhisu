<template>
	<view class="home-box">
		<view class="home-header" :style="{'height': 202 + navnarwidth + 'px'}">
			<view class="image-bj">
				<image src="../../static/homebj.png" mode=""></image>
			</view>
			<view class="index-navbar" :style="{'height':navnarwidth + 44 + 'px','padding-top':navnarwidth + 'px','line-height':44 + 'px'}">我的</view>
			<view class="userinfo">
				<view class="userheader-img"></view>
				<view class="user-info-menu">
					<view class="user-name">听说</view>
					<view class="user-ID">ID:998998998</view>
				</view>
			</view>

			<view class="home-nav">
				<view class="coupon-box">
					<view class="number">5</view>
					<view>优惠券</view>
				</view>
				<view class="manney-box">
					<view class="number">1365</view>
					<view>返现</view>
				</view>
			</view>
		</view>

		<!-- 主体 -->
		<view class="menu">
			<view class="contents">
				<view class="order-tit-box">
					<view class="order-tit">我的订单</view>
					<view class="order-all">全部订单<text class="yticon icon-you"></text></view>
				</view>
				<view class="order-nav-list">
					<view class="row">
						<view class="num">1</view>
						<view class="name"  @click="navTo('/pages/order/order?state=0')" >全部订单</view>
					</view>
					<view class="row">
						<view class="num">2</view>
						<view class="name"  @click="navTo('/pages/order/order?state=1')" >待付款</view>
					</view>
					<view class="row">
						<view class="num">3</view>
						<view class="name" @click="navTo('/pages/order/order?state=2')" >待收货</view>
					</view>
					<view class="row">
						<view class="num">4</view>
						<view class="name" @click="navTo('/pages/order/order?state=4')" >退款/售后</view>
					</view>
				</view>
				<view class="order-tit-box">
					<view class="order-tit">我的服务</view>
				</view>
				<view class="tab-list">
					<view class="row">
						<view class="row-image"></view>
						<view class="row-con"  @eventClick="navTo('/pages/address/address')">
							<view class="cal-name">收货地址</view>
						</view>
					</view>
					<view class="row">
						<view class="row-image"></view>
						<view class="row-con">
							<view class="cal-name">客户服务</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight: null,
				navnarwidth: null,
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
		onLoad() {

		},
		methods: {
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				// if(!this.hasLogin){
				// 	url = '/pages/public/login';
				// }
				uni.navigateTo({  
					url
				})  
			}, 
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.home-box,page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.home-header {
			position: relative;
			.image-bj {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: -1;

				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}

			.index-navbar {
				width: 100%;
				font-size: 32rpx;
				font-family: SimHei;
				color: rgba(51, 51, 51, 1);
				box-sizing: border-box;
				text-align: center;
			}

			.userinfo {
				overflow: hidden;
				padding-left: 50rpx;
				box-sizing: border-box;
				width: 100%;
				margin: 35rpx 0;

				.userheader-img {
					width: 100rpx;
					height: 100rpx;
					float: left;
					border-radius: 50%;
					background: red;
					margin-right: 24rpx;
				}

				.user-info-menu {
					float: left;

					.user-name {
						font-size: 32rpx;
						font-family: SimHei;
						color: rgba(58, 58, 58, 1);
						line-height: 56rpx;
					}

					.user-ID {
						font-size: 26rpx;
						font-family: SimHei;
						line-height: 50rpx;
						color: rgba(143, 125, 109, 1);
					}
				}
			}

			.home-nav {
				width: 100%;
				height: 140rpx;
				background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.2) 100%);
				box-shadow: 0px -1px 5px 0px rgba(126, 126, 126, 0.11);
				&>view{
					width: 50%;
					height: 100%;
					float: left;
					padding-top: 18rpx;
					box-sizing: border-box;
					view{
						color: #313131;
						font-size:36rpx;
						text-align: center;
						font-family:SimHei;
					}
					.number{
						margin-bottom: 26rpx;
					}
				}
			}
		}

		.menu {
			width: 100%;
			flex: 1;
			.contents{
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				background: #F3F3F3;
				.order-tit-box{
					width: 100%;
					display: flex;
					justify-content: space-between;
					padding:18rpx 30rpx 8rpx;
					background: #FFFFFF;
					font-size:30rpx;
					color:rgba(49,49,49,1);
					box-sizing: border-box;
					.order-all{
						color: #ACACAC;
					}
				}
				.order-nav-list{
					width: 100%;
					height: 132rpx;
					display: flex;
					background: #FFFFFF;
					&>view{
						width: 25%;
						height: 100%;
						color:rgba(49,49,49,1);
						padding: 32rpx 0;
						box-sizing: border-box;
						.num{
							text-align: center;
							font-size:26rpx;
							font-family:SimHei;
							margin-bottom: 16rpx ;
						}
						.name{
							text-align: center;
							font-size:26rpx;
							font-family:SimHei;
						}
					}
				}
				.tab-list{
					width: 100%;
					padding-left: 26rpx;
					box-sizing: border-box;
					background: #FFFFFF;
					.row{
						width: 100%;
						height: 91rpx;
						display: flex;
						align-items: center;
						.row-image{
							width: 54rpx;
						}
						.row-con{
							flex: 1;
							height: 100%;
							border-bottom: 2rpx solid #ECECEC;
							display: flex;
							align-items: center;
							justify-content: space-between;
							.cal-name{
								width:100%;
								font-size:28rpx;
								font-family:SimHei;
								color:rgba(79,79,79,1);
							}
						}
					}
				}
			}
		}



	}
</style>
