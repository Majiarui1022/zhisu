<template>
	<view class="send-msg">
		<scroll-view :scroll-top="scrollTop" style="flex: 1;height: 100%;" scroll-y="true" class="scroll-Y">
			<view class="send-pad">
				<view class="pro-box">
					<view class="pro-iamge-box"></view>
					<view class="info">
						<view class="name">极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝极品燕窝</view>
						<view class="guige">规格：XL</view>
					</view>
				</view>
				
				<view class="message">
					<textarea value="" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给朋友吧。" :maxlength="-1"/>
				</view>
				
				<view  class="addphoto-box">
					<ul>
						<li class="kuang photo" v-for="(item,index) in imagelist" :key="index">
							<image :src="imagelist[index]" mode=""></image>
						</li>
						<li class="kuang but" @click="openPopup">
							<image src="../../static/addphoto.png" mode=""></image>
						</li>
					</ul>
				</view>
			</view>
		</scroll-view>
		<view class="send-but">发布</view>
		
		
		<uni-popup ref="popup" type="bottom" maskClick="true" class="piker-box">
			<view class="piker-content">
				<view class="select-photo-box">
					<ul>
						<li @click="selectphoto('camera')">拍照</li>
						<li @click="selectphoto('album')">从手机相册选择</li>
					</ul>
				</view>
				<view class="close-piker" @click="closePopup">取消</view>
			</view>
		</uni-popup>
		
		
	</view>
</template>

<script>
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	export default {
	  components: {uniPopup},
		data(){
			return{
				scrollTop:0,
				imagelist:[
					
				]
			}
		},
		methods:{
			selectphoto(val){
				var _that = this
				console.log(_that.headerImg)
				this.closePopup()
				uni.chooseImage({
				    count: 9, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: [val], //从相册选择
				    success: function (res) {
						//单个文件提交的为  res.tempFilePaths[0]
				        console.log(res.tempFilePaths);
				        console.log(res.tempFiles[0]);
						// _that.imagelist.push(res.tempFiles[0].path)
						_that.imagelist = _that.imagelist.concat(res.tempFilePaths);
						
						
						// uni.uploadFile({
						//     url: 'http://10.102.100.120:8000/users/head/', //仅为示例，非真实的接口地址
						//     filePath: res.tempFilePaths[0],
						//     name: 'head_img_url',
						// 	header:{
						// 		"content-type" : "multipart/form-data",
						// 		'Authorization': uni.getStorageSync('storage_user').token ? 'JWT ' + uni.getStorageSync('storage_user').token : '' 
						// 	},
						//     success: (uploadFileRes) => {
						// 		let storeobj = uni.getStorageSync('storage_user')
						// 		storeobj.head_img_url =  JSON.parse(uploadFileRes.data).head_img_url
						// 		_that.headerImg = JSON.parse(uploadFileRes.data).head_img_url
						// 		console.log(_that.headerImg)
						// 		uni.setStorageSync('storage_user',storeobj);
						//     }
						// });
						
						
				    }
				});
			},
			//打开底部弹窗
			openPopup(){
				this.$refs.popup.open()
			},
			
			//关闭底部弹窗
			closePopup(){
				this.$refs.popup.close()
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
		height: calc(100% - 98rpx);
		.send-pad{
			width: 100%;
			height: 100%;
			padding: 0 30rpx 0;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
		}
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
			overflow: hidden;
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
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				li{
					width:200rpx;
					height:200rpx;
					margin: 10rpx;
				}
				.kuang{
					border:1rpx dashed rgba(144,144,144,1);
					image{
						width: 100%;
						height: 100%;
						display: block;
					}
				}
				.but{
					border: 0;
				}
			
			}
			
		}
		
		// 去掉弹出层padding
		.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{
			padding: 0;
		}
		/*弹出层*/
		.piker-box{
			// width: 100%;
			// height:312rpx;
			// background:#ECECEC;
			// border-radius:15px 15px 0px 0px;
			.piker-content{
				width: 100%;
				height:100%;
				background:#ECECEC;
				.select-photo-box{
					width: 100%;
					height: 196rpx;
					background: #FFFFFF;
					ul{
						width: 100%;
						li{
							width: 100%;
							height: 98rpx;
							border-bottom: 1rpx solid #ECECEC;
							box-sizing: border-box;
							text-align: center;
							font-size:28rpx;
							color:rgba(51,51,51,1);
							line-height:98rpx;
						}
					}
				}
				.close-piker{
					width: 100%;
					height: 96rpx;
					background: #FFFFFF;
					text-align: center;
					font-size:28rpx;
					color:rgba(51,51,51,1);
					line-height:96rpx;
					margin-top:20rpx;
				}
			}
		}
	}
</style>
