<template>
	<view class="send-msg">
		<scroll-view :scroll-top="scrollTop" style="flex: 1;padding: 0 30rpx 98rpx;" scroll-y="true" class="scroll-Y">
			<view class="pro-box">
				<view class="pro-iamge-box"></view>
				<view class="info">
					<view class="name">极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝</view>
					<view class="guige">规格：XL</view>
				</view>
			</view>
			
			<view class="message">
				<textarea value="" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给朋友吧。" />
			</view>
			
			<view  class="addphoto-box">
				<ul>
					<li class="kuang photo"></li>
					<li class="kuang photo"></li>
					<li class="kuang photo"></li>
					<li class="kuang photo"></li>
					<li class="kuang but">
					</li>
				</ul>
			</view>
		</scroll-view>
		<view class="send-but">发布</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				scrollTop:0
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	.send-msg{
		width: 100%;
		height: 100%;
		display: flex;
		.send-but{
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height:98rpx;
			background:rgba(115,95,247,1);
			text-align: center;
			color: #FFFFFF;
		}
		.pro-box{
			padding:36rpx 44rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			.pro-iamge-box{
				width: 152rpx;
				height: 152rpx;
				background: red;
			}
			.info{
				padding-left: 20rpx;
				flex: 1;
				height: 152rpx;
				.name{
					font-size:26rpx;
					font-family:SimHei;
					color:rgba(51,51,51,1);
					line-height:30rpx;
					width: 100%;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.guige{
					padding: 4rpx;
					color: #a7a7a7;
					font-size: 24rpx;
				}
			}
			&:after{
				content: ' ';
				width: 100%;
				height: 2rpx;
				left: 0;
				bottom: 5rpx;
				position:absolute;
				background: #D5D5D5;
			}
		}
		
		.message{
			width: 100%;
			height: 350rpx;
			padding: 15rpx 0;
			textarea{
				width: auto;
				height: 100%;
				display: block;
				padding: 0 10rpx;
				font-size:26rpx;
				font-family:SimHei;
				font-weight:400;
				line-height:34rpx;
				&::placeholder{
					color:rgba(180,180,180,1);
				}
			}
		}
		.addphoto-box{
			width: 100%;
			ul{
				display: flex;
				flex-wrap: wrap;
				li{
					width:200rpx;
					height:200rpx;
					background: red;
					margin: 10rpx;
				}
				.kuang{
					border:1rpx dashed rgba(144,144,144,1);
				}
			}
			
		}
	}
</style>
