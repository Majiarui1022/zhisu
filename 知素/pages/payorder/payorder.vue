<template>
	<view class="play-order">
		<scroll-view :scroll-top="scrollTop" :style="{'height':windowHeight - 45 + 'px','background':'#F3F3F3'}" scroll-y="true" class="scroll-Y">
			<!-- 地址 -->
			<navigator url="/pages/address/address?type=select" class="address-section">
				<view class="order-content">
					<text class="yticon icon-shouhuodizhi"></text>
					<view class="cen">
						<view class="top">
							<text class="name">{{addressData.name}}</text>
							<text class="mobile">{{addressData.mobile}}</text>
						</view>
						<text class="address">{{addressData.addressName}} {{addressData.address}} {{addressData.area}}</text>
					</view>
					<text class="yticon icon-you"></text>
				</view>
			</navigator>
		
		
			<view class="goods-section">
				<!-- 商品列表 -->
				<view class="g-item">
					<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg"></image>
					<view class="right">
						<text class="title clamp">古黛妃 短袖t恤女夏装2019新款</text>
						<text class="spec">春装款 L</text>
						<view class="price-box">
							<text class="price">￥17.8</text>
							<text class="number">x 1</text>
						</view>
					</view>
				</view>
				<view class="g-item">
					<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg"></image>
					<view class="right">
						<text class="title clamp">韩版于是洞洞拖鞋 夏季浴室防滑简约居家【新人专享，限选意见】</text>
						<text class="spec">春装款 L</text>
						<view class="price-box">
							<text class="price">￥17.8</text>
							<text class="number">x 1</text>
						</view>
					</view>
				</view>
			</view>
			
			
			<!-- 优惠明细 -->
			<view class="yt-list">
				<view class="yt-list-cell b-b" @click="toggleMask('show')">
					<view class="cell-icon">
						券
					</view>
					<text class="cell-tit clamp">优惠券</text>
					<text class="cell-tip active">
						选择优惠券
					</text>
					<text class="cell-more wanjia wanjia-gengduo-d"></text>
				</view>
				<view class="yt-list-cell b-b">
					<text class="cell-tit clamp">商品金额</text>
					<text class="cell-tip">￥179.88</text>
				</view>
				<view class="yt-list-cell b-b">
					<text class="cell-tit clamp">优惠金额</text>
					<text class="cell-tip red">-￥35</text>
				</view>
				<view class="yt-list-cell b-b">
					<text class="cell-tit clamp">运费</text>
					<text class="cell-tip">免运费</text>
				</view>
				<view class="yt-list-cell desc-cell">
					<text class="cell-tit clamp">备注</text>
					<input class="desc" type="text" v-model="desc" placeholder="请填写备注信息" placeholder-class="placeholder" />
				</view>
			</view>
			
			<!-- 底部 -->
			<view class="footer">
				<view class="price-content">
					<text>实付款</text>
					<text class="price-tip">￥</text>
					<text class="price">475</text>
				</view>
				<text class="submit" @click="submit">提交订单</text>
			</view>
			
			
			<!-- 优惠券面板 -->
			<view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">
				<view class="mask-content" @click.stop.prevent="stopPrevent">
					<!-- 优惠券页面，仿mt -->
					<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
						<view class="con">
							<view class="left">
								<text class="title">{{item.title}}</text>
								<text class="time">有效期至2019-06-30</text>
							</view>
							<view class="right">
								<text class="price">{{item.price}}</text>
								<text>满30可用</text>
							</view>
							
							<view class="circle l"></view>
							<view class="circle r"></view>
						</view>
						<text class="tips">限新用户使用</text>
					</view>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				scrollTop:0,
				windowHeight:0,
				navnarwidth:0,
				maskState:0, 							//优惠券面板显示状态
				desc:'',								//备注
				couponList: [
					{
						title: '新用户专享优惠券',
						price: 5,
					},
					{
						title: '庆五一发一波优惠券',
						price: 10,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					}
				],
				addressData: {
					name: '派大星',
					mobile: '13853989563',
					addressName: '张江路',
					address: '上海市浦东新区',
					area: '149号',
					default: false,
				}
			}
		},
		onShow() {
			console.log(this.scrollTop)
			var _that = this
			wx.getSystemInfo({
			  success: function(res) {
				  console.log(res.statusBarHeight)
				_that.navnarwidth = res.statusBarHeight
				_that.windowHeight = res.windowHeight
			  }
			})
		},
		methods:{
			//显示优惠券面板
			toggleMask(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.maskState = 2;
				setTimeout(()=>{
					this.maskState = state;
				}, timer)
			},
			//点击了优惠券
			stopPrevent(){
				console.log('我点击了优惠券')
			}
		}
	}
</script>

<style lang="scss">
	.play-order{
		width: 100%;
		height: 100%;
		.clamp {
		    overflow: hidden;
		    -o-text-overflow: ellipsis;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    display: block;
		}
		.address-section {
			padding: 30upx 0;
			background: #fff;
			position: relative;
		
			.order-content {
				display: flex;
				align-items: center;
			}
		
			.icon-shouhuodizhi {
				flex-shrink: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 90upx;
				color: #888;
				font-size: 44upx;
			}
		
			.cen {
				display: flex;
				flex-direction: column;
				flex: 1;
				font-size: 28upx;
				color: $font-color-dark;
			}
		
			.name {
				font-size: 34upx;
				margin-right: 24upx;
			}
		
			.address {
				margin-top: 16upx;
				margin-right: 20upx;
				color: $font-color-light;
			}
		
			.icon-you {
				font-size: 32upx;
				color: $font-color-light;
				margin-right: 30upx;
			}
		
			.a-bg {
				position: absolute;
				left: 0;
				bottom: 0;
				display: block;
				width: 100%;
				height: 5upx;
			}
		}
		
		
		.goods-section {
			margin-top: 16upx;
			background: #fff;
			padding-bottom: 1px;
		
			.logo {
				display: block;
				width: 50upx;
				height: 50upx;
				border-radius: 100px;
			}
		
			.name {
				font-size: 30upx;
				color: $font-color-base;
				margin-left: 24upx;
			}
		
			.g-item {
				display: flex;
				margin: 20upx 30upx;
				position: relative;
				padding: 20rpx 0;
				image {
					flex-shrink: 0;
					display: block;
					width: 140upx;
					height: 140upx;
					border-radius: 4upx;
				}
		
				.right {
					flex: 1;
					padding-left: 24upx;
					overflow: hidden;
				}
		
				.title {
					font-size: 30upx;
					color: $font-color-dark;
				}
		
				.spec {
					font-size: 26upx;
					color: $font-color-light;
				}
		
				.price-box {
					display: flex;
					align-items: center;
					font-size: 32upx;
					color: $font-color-dark;
					padding-top: 10upx;
		
					.price {
						margin-bottom: 4upx;
					}
					.number{
						font-size: 26upx;
						color: $font-color-base;
						margin-left: 20upx;
					}
				}
		
				.step-box {
					position: relative;
				}
				&:after{
					position: absolute;
					z-index: 3;
					left: 0;
					right: 0;
					height: 0;
					bottom: 0;
					content: '';
					-webkit-transform: scaleY(0.5);
					-ms-transform: scaleY(0.5);
					transform: scaleY(0.5);
					border-bottom: 1px solid #E4E7ED;
				}
			}
		}
		
		
		.yt-list {
			margin-top: 16upx;
			background: #fff;
		}
		.yt-list-cell {
			display: flex;
			align-items: center;
			padding: 10upx 30upx 10upx 40upx;
			line-height: 70upx;
			position: relative;
		
			&.cell-hover {
				background: #fafafa;
			}
		
			&.b-b:after {
				left: 30upx;
			}
		
			.cell-icon {
				height: 32upx;
				width: 32upx;
				font-size: 22upx;
				color: #fff;
				text-align: center;
				line-height: 32upx;
				background: #f85e52;
				border-radius: 4upx;
				margin-right: 12upx;
		
				&.hb {
					background: #ffaa0e;
				}
		
				&.lpk {
					background: #3ab54a;
				}
		
			}
		
			.cell-more {
				align-self: center;
				font-size: 24upx;
				color: $font-color-light;
				margin-left: 8upx;
				margin-right: -10upx;
			}
		
			.cell-tit {
				flex: 1;
				font-size: 26upx;
				color: $font-color-light;
				margin-right: 10upx;
			}
		
			.cell-tip {
				font-size: 26upx;
				color: $font-color-dark;
		
				&.disabled {
					color: $font-color-light;
				}
		
				&.active {
					color: #735FF7;
				}
				&.red{
					color: #735FF7;
				}
			}
		
			&.desc-cell {
				.cell-tit {
					max-width: 90upx;
				}
			}
		
			.desc {
				flex: 1;
				font-size: $font-base;
				color: $font-color-dark;
			}
		}
		
		
		.footer{
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 995;
			display: flex;
			align-items: center;
			width: 100%;
			height: 90upx;
			justify-content: space-between;
			font-size: 30upx;
			background-color: #fff;
			z-index: 998;
			color: $font-color-base;
			box-shadow: 0 -1px 5px rgba(0,0,0,.1);
			.price-content{
				padding-left: 30upx;
			}
			.price-tip{
				color:#735FF7;
				margin-left: 8upx;
			}
			.price{
				font-size: 36upx;
				color: #735FF7;
			}
			.submit{
				display:flex;
				align-items:center;
				justify-content: center;
				width: 280upx;
				height: 100%;
				color: #fff;
				font-size: 32upx;
				background-color: #735FF7;
			}
		}
		
		/* 优惠券面板 */
		.mask{
			display: flex;
			align-items: flex-end;
			position: fixed;
			left: 0;
			top: var(--window-top);
			bottom: 0;
			width: 100%;
			background: rgba(0,0,0,0);
			z-index: 9995;
			transition: .3s;
			
			.mask-content{
				width: 100%;
				min-height: 30vh;
				max-height: 70vh;
				background: #f3f3f3;
				transform: translateY(100%);
				transition: .3s;
				overflow-y:scroll;
			}
			&.none{
				display: none;
			}
			&.show{
				background: rgba(0,0,0,.4);
				
				.mask-content{
					transform: translateY(0);
				}
			}
		}
		/* 优惠券列表 */
		.coupon-item{
			display: flex;
			flex-direction: column;
			margin: 20upx 24upx;
			background: #fff;
			.con{
				display: flex;
				align-items: center;
				position: relative;
				height: 120upx;
				padding: 0 30upx;
				&:after{
					position: absolute;
					left: 0;
					bottom: 0;
					content: '';
					width: 100%;
					height: 0;
					border-bottom: 1px dashed #f3f3f3;
					transform: scaleY(50%);
				}
			}
			.left{
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex: 1;
				overflow: hidden;
				height: 100upx;
			}
			.title{
				font-size: 32upx;
				color: $font-color-dark;
				margin-bottom: 10upx;
			}
			.time{
				font-size: 24upx;
				color: $font-color-light;
			}
			.right{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 26upx;
				color: $font-color-base;
				height: 100upx;
			}
			.price{
				font-size: 44upx;
				color: $base-color;
				&:before{
					content: '￥';
					font-size: 34upx;
				}
			}
			.tips{
				font-size: 24upx;
				color: $font-color-light;
				line-height: 60upx;
				padding-left: 30upx;
			}
			.circle{
				position: absolute;
				left: -6upx;
				bottom: -10upx;
				z-index: 10;
				width: 20upx;
				height: 20upx;
				background: #f3f3f3;
				border-radius: 100px;
				&.r{
					left: auto;
					right: -6upx;
				}
			}
		}
	}
</style>
