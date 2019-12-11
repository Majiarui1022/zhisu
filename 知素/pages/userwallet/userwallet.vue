<template>
	<view class="wallet-box">
		<!-- 顶部选项卡 -->
		<scroll-view id="nav-bar" class="nav-bar" scroll-x scroll-with-animation :scroll-left="scrollLeft">
			<view 
				v-for="(item,index) in tabBars" :key="item.id"
				class="nav-item"
				:class="{current: index === tabCurrentIndex}"
				:id="'tab'+index"
				@click="changeTab(index)"
			>{{item.name}}</view>
		</scroll-view>
		<view class="payka">
			<view class="pay-tit">当前余额</view>
			<view class="pay-price">￥2563</view>
			<view class="money">
				<view class="income pire">
					<view class="income-icn">
						<image src="../../static/add.png" mode=""></image>
					</view>
					<view class="income-info">
						<text class="inc-tit">收入</text>
						<text class="inc-price">￥6004</text>
					</view>
				</view>
				<view class="expenditure pire">
					<view class="income-icn">
						<image src="../../static/rest.png" mode=""></image>
					</view>
					<view class="income-info">
						<text class="inc-tit">收入</text>
						<text class="inc-price">￥6004</text>
					</view>
				</view>
			</view>
		</view>
		<view class="scroll-y-box" :style="{'height':windowHeight - 160 + 'px','padding':'247rpx 48rpx 10rpx 48rpx','box-sizing':'border-box'}">
			<scroll-view scroll-y="true" :style="{'height':'100%'}">
				<view class="row">
					<view class="time">9月16日</view>
					<view class="paylist">
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="row">
					<view class="time">9月16日</view>
					<view class="paylist">
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="row">
					<view class="time">9月16日</view>
					<view class="paylist">
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="row">
					<view class="time">9月16日</view>
					<view class="paylist">
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
						<view class="day-list">
							<view class="image-box"></view>
							<view class="info">
								<view class="user-box">
									<text class="operation">提现</text>
									<text class="name">大大大</text>
								</view>
								<view class="price-box">￥34</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	let windowWidth = 0, scrollTimer = false, tabBar;
	export default{
		data(){
			return{
				tabBars:[
					{
						name:'2018年12月',
						id:1
					},
					{
						name:'2019年1月',
						id:2
					},
					{
						name:'2019年2月',
						id:3
					},
					{
						name:'2019年3月',
						id:4
					},
					{
						name:'2019年4月',
						id:5
					},
					{
						name:'2019年5月',
						id:6
					},
					{
						name:'2019年6月',
						id:7
					},
					{
						name:'2019年7月',
						id:8
					},
					{
						name:'2019年8月',
						id:9
					},
					{
						name:'2019年9月',
						id:10
					},
					{
						name:'2019年10月',
						id:11
					},
					{
						name:'2019年11月',
						id:12
					},
					{
						name:'2019年12月',
						id:13
					}
				],
				scrollLeft: 0,      		//顶部选项卡左滑距离
				tabCurrentIndex: 0, 		//当前选项卡索引
				navnarwidth:0,
				windowHeight:0
				
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
			
			windowWidth = uni.getSystemInfoSync().windowWidth;
			this.loadNewsList('add');
		},
		methods:{
			loadNewsList(type){
				let tabItem = this.tabBars[this.tabCurrentIndex];
				
				//type add 加载更多 refresh下拉刷新
				if(type === 'add'){
					if(tabItem.loadMoreStatus === 2){
						return;
					}
					tabItem.loadMoreStatus = 1;
				}
				// #ifdef APP-PLUS
				else if(type === 'refresh'){
					tabItem.refreshing = true;
				}
				// #endif
				
				//setTimeout模拟异步请求数据
				setTimeout(()=>{
					// let list = json.newsList;
					// list.sort((a,b)=>{
					// 	return Math.random() > .5 ? -1 : 1; //静态数据打乱顺序
					// })
					// if(type === 'refresh'){
					// 	tabItem.newsList = []; //刷新前清空数组
					// }
					// list.forEach(item=>{
					// 	item.id = parseInt(Math.random() * 10000);
					// 	tabItem.newsList.push(item);
					// })
					//下拉刷新 关闭刷新动画
					// if(type === 'refresh'){
					// 	this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
					// 	// #ifdef APP-PLUS
					// 	tabItem.refreshing = false;
					// 	// #endif
					// 	tabItem.loadMoreStatus = 0;
					// }
					// //上滑加载 处理状态
					// if(type === 'add'){
					// 	tabItem.loadMoreStatus = tabItem.newsList.length > 40 ? 2: 0;
					// }
				}, 600)
			},
			
			//tab切换
			async changeTab(e){
				console.log(e)
				if(scrollTimer){
					//多次切换只执行最后一次
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				let index = e;
				//e=number为点击切换，e=object为swiper滑动切换
				if(typeof e === 'object'){
					index = e.detail.current
				}
				if(typeof tabBar !== 'object'){
					tabBar = await this.getElSize("nav-bar")
				}
				//计算宽度相关
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0; 
				let nowWidth = 0;
				//获取可滑动总宽度
				for (let i = 0; i <= index; i++) {
					let result = await this.getElSize('tab' + i);
					width += result.width;
					if(i === index){
						nowWidth = result.width;
					}
				}
				if(typeof e === 'number'){
					//点击切换时先切换再滚动tabbar，避免同时切换视觉错位
					this.tabCurrentIndex = index; 
				}
				//延迟300ms,等待swiper动画结束再修改tabbar
				scrollTimer = setTimeout(()=>{
					if (width - nowWidth/2 > windowWidth / 2) {
						//如果当前项越过中心点，将其放在屏幕中心
						this.scrollLeft = width - nowWidth/2 - windowWidth / 2;
					}else{
						this.scrollLeft = 0;
					}
					if(typeof e === 'object'){
						this.tabCurrentIndex = index; 
					}
					this.tabCurrentIndex = index; 
					
					
					//第一次切换tab，动画结束后需要加载数据
					let tabItem = this.tabBars[this.tabCurrentIndex];
					if(this.tabCurrentIndex !== 0 && tabItem.loaded !== true){
						this.loadNewsList('add');
						tabItem.loaded = true;
					}
				}, 300)
				
			},
			
			//获得元素的size
			getElSize(id) { 
				return new Promise((res, rej) => {
					let el = uni.createSelectorQuery().select('#' + id);
					el.fields({
						size: true,
						scrollOffset: true,
						rect: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
		}
	}
</script>

<style lang="scss">
	.wallet-box{
		width: 100%;
		overflow: hidden;
		background: #EEF3F8;
	}
	/* 顶部tabbar */
	.nav-bar{
		position: relative;
		z-index: 10;
		height: 320upx;
		white-space: nowrap;
		box-shadow: 0 2upx 8upx rgba(0,0,0,.06);
		background-color: #fff;
		.nav-item{
			display: inline-block;
			width: 260upx;
			height: 90upx;
			text-align: center;
			line-height: 90upx;
			font-size: 30upx;
			color: #303133;
			position: relative;
			&:after{
				content: '';
				width: 0;
				height: 0;
				border-bottom: 4upx solid #007aff;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				transition: .3s;
			}
		}
		.current{
			color: #007aff;
			&:after{
				width: 50%;
			}
		}
	}
	
	.swiper-box{
		height: 100%;
	}
	
	.panel-scroll-box{
		height: 100%;
		
		.panel-item{
			background: #fff;
			padding: 30px 0;
			border-bottom: 2px solid #000;
		}
	}
	/*卡片*/
	.payka{
		width: 650rpx;
		height: 350rpx;
		position: fixed;
		top:150rpx;
		left: 48rpx;
		box-shadow:0px 8rpx 32rpx 0px rgba(132,183,250,0.48);
		border-radius:15rpx 15rpx 15rpx 15rpx;
		z-index: 9999;
		background: #735FF7;
		padding-left: 50rpx;
		padding-top: 52rpx;
		box-sizing: border-box;
		.pay-tit{
			font-size:28rpx;
			font-family:SimHei;
			color:rgba(255,255,255,1);
			margin-bottom: 40rpx;
			line-height: 28rpx;
		}
		.pay-price{
			font-size:64rpx;
			color:rgba(255,255,255,1);
			margin-bottom: 68rpx;
			line-height: 64rpx;
		}
		.money{
			display: flex;
			align-items: center;
			.pire{
				display: flex;
				align-items: center;
				margin-right: 108rpx;
				.income-icn{
					width:48rpx;
					height:48rpx;
					border-radius:50%;
					image{
						width: 100%;
						height: 100%;
						display: block;
					}
				}
				.income-info{
					margin-left: 20rpx;
					text{
						display: block;
					}
					.inc-tit{
						font-size:20rpx;
						font-family:SimHei;
						color:rgba(255,255,255,1);
					}
					.inc-price{
						font-size:28rpx;
						font-family:SimHei;
						color:rgba(255,255,255,1);
						margin-top: 15rpx;
					}
				}
			}
		}
	}
	
	.scroll-y-box{
		overflow: hidden;
		.row{
			width: 100%;
			.time{
				padding: 26rpx;
				font-size:20rpx;
				font-family:SourceHanSansCN;
				color:rgba(158,166,173,1);
				line-height: 20rpx;
			}
			.paylist{
				width: 100%;
				background: #FFFFFF;
				padding:0 30rpx;
				box-sizing: border-box;
				.day-list{
					width: 100%;
					padding: 30rpx 0;
					display: flex;
					align-items: center;
					.image-box{
						width:64rpx;
						height:64rpx;
						background:rgba(242,228,224,1);
						border-radius:50%;
					}
					.info{
						flex: 1;
						padding-left:17rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.user-box{
							text{
								display: block;
							}
							.operation{
								font-size:28rpx;
								font-family:SimHei;
								color:rgba(108,115,121,1);
							}
							.name{
								font-size:20rpx;
								font-family:SimHei;
								color:rgba(158,166,173,1);
								margin-top: 8rpx;
							}
						}
						.price-box{
							font-size:40rpx;
							font-family:PingFang SC;
							color:rgba(108,115,121,1);
						}
					}
				}
			}
		}
	}
</style>
