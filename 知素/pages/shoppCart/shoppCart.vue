<template>
	<view class="shoppCart-box">
			<!-- <view class="shoppCart-navbar" :style="{'height':navnarwidth + 64 + 'px','padding-top':navnarwidth + 'px'}" >购物车</view> -->
		<scroll-view 
			:scroll-top="scrollTop" 
			:style="{'height':windowHeight - 1 + 'px','padding-bottom':'90rpx','box-sizing':'border-box'}" 
			scroll-y="true" 
			class="scroll-Y" 
			@scrolltoupper="upper" 
			@scrolltolower="lower"
			@scroll="scroll">
			<view class="shoppcart-list-box">
				<view class="shoppCart-list">
					<view class="goods-list" v-for="(item,index) in list" :key="index">
						<view class="menu"  @tap.stop="deleteGoods">删除</view>
						<view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']" @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
							<!-- 单选 -->
							<view class="checkbox-box">
								<view class="checkbox">
									<view class="on"></view>
								</view>
							</view>
							<!-- 商品信息 -->
							<view class="pro-content">
								<!-- 商品图片 -->
								<view class="pro-iamge"></view>
								<!-- 商品介绍 -->
								<view class="pro-info">
									
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</scroll-view>
		
		<!-- 脚部菜单 -->
		<view class="footer-box">
			<view class="checkbox-box">
				<view class="checkbox">
					<view class="on"></view>
				</view>
				<view class="text">全选</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:0,
				windowHeight:null,
				navnarwidth:null,
				list:[
					{
						
					},
					{
						
					},
					{
						
					},
					{
						
					},
					{
						
					},
					{
						
					},
					{
						
					},
					{
						
					}
				],
				//控制滑动效果
				theIndex:null,
				oldIndex:null,
				isStop:false,
			}
		},
		onShow() {
			//获取导航栏高度
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
			upper(e){
				console.log(e)
			},
			lower(e){
				console.log(e)
			},
			deleteGoods(){
				console.log('我点击了删除')
			},
			scroll(){
				
			},
			//控制左滑删除效果-begin
			touchStart(index,event){
				//多点触控不触发
				if(event.touches.length>1){
					this.isStop = true;
					return ;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX,event.touches[0].pageY];
			},
			touchMove(index,event){
				//多点触控不触发
				if(event.touches.length>1){
					this.isStop = true;
					return ;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];
				
				if(this.isStop||Math.abs(moveX)<5){
					return ;
				}
				if (Math.abs(moveY) > Math.abs(moveX)){
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}
				
				if(moveX<0){
					this.theIndex = index;
					this.isStop = true;
				}else if(moveX>0){
					if(this.theIndex!=null&&this.oldIndex==this.theIndex){
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(()=>{
							this.oldIndex = null;
						},150)
					}
				}
			},
			touchEnd(index,$event){
				//结束禁止触发效果
				this.isStop = false;
			},
			//控制左滑删除效果-end
			
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	.shoppCart-box{
		width: 100%;
		height: 100%;
		position: relative;
		.shoppCart-navbar{
			width: 100%;
			background:linear-gradient(130deg,rgba(115,95,247,1),rgba(83,122,251,1));
			box-shadow:1rpx 1rpx 1rpx 0px rgba(26,25,26,0.15);
			font-size:32rpx;
			font-family:SimHei;
			color:rgba(255,255,255,1);
			line-height:128rpx;
			box-sizing: border-box;
			text-align: center;
		}
		.shoppcart-list-box{
			width: 100%;
			height: 100%;
			position: relative;
			.shoppCart-list{
				width: 100%;
				height: 100%;
				.goods-list{
					width: 100%;
					height: 236rpx;
					border-bottom: 2rpx solid #E3E3E3;
					position: relative;
					overflow: hidden;
					z-index: 4;
					.menu{
						position: absolute;
						width: 122rpx;
						height: 100%;
						right: 0;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: red;
						color: #fff;
						z-index: 2;
					}
					.carrier{
						@keyframes showMenu {
							0% {transform: translateX(0);}100% {transform: translateX(-122rpx);}
						}
						@keyframes closeMenu {
							0% {transform: translateX(-122rpx);}100% {transform: translateX(0);}
						}
						&.open{
							animation: showMenu 0.25s linear both;
						}
						&.close{
							animation: closeMenu 0.15s linear both;
						}
						background-color: #fff;
						position: absolute;
						width: 100%;
						padding:22rpx;
						box-sizing: border-box;
						height: 100%;
						z-index: 3;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.pro-content{
							width: 648rpx;
							height: 100%;
							background: red;
							display: flex;
							justify-content: space-between;
							align-items: center;
							.pro-iamge{
								width: 176rpx;
								height: 100%;
								background: blue;
							}
							.pro-info{
								width: 446rpx;
								height: 100%;
							}
						}
					}
				}
			}
		}
		/*多选框*/
		.checkbox-box{
			display: flex;
			align-items: center;
			.checkbox{
				width: 34rpx;
				height: 34rpx;
				border-radius: 50%;
				border:2rpx solid #DEDEDE;
				display: flex;
				justify-content: center;
				align-items: center;
				.on{
					width: 70%;
					height: 70%;
					border-radius: 50%;
					background-color: #735FF7;
				}
			}
			.text{
				font-size: 30rpx;
				margin-left: 12rpx;
				color: #333333;
			}
		}
		.footer-box{
			width: 100%;
			height: 98rpx;
			position: absolute;
			left: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
