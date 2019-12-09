<template>
	<view class="shopping-box">
		<view class="shopping-navbar" :style="{'height':navnarwidth + 44 + 'px','padding-top':navnarwidth + 'px','line-height':44 + 'px'}">商城</view>
		 <!-- :style="{'height':100% - (navnarwidth + 64) + 'px'}"  -->
		<view class="content" :style="{'height':windowHeight - navnarwidth - 44 + 'px'}">
			<scroll-view scroll-y class="left-aside">
				<view v-for="item in flist" :key="item.id" class="f-item b-b" :class="{active: item.id === currentId}" @click="tabtap(item)">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view scroll-with-animation scroll-y class="right-aside" @scroll="asideScroll" :scroll-top="tabScrollTop">
				<view v-for="item in slist" :key="item.id" class="s-list" :id="'main-'+item.id">
					<text class="s-item">{{item.name}}</text>
					<view class="t-list">
						<view @click="navToList(item.id, titem.id)" v-if="titem.pid === item.id" class="t-item" v-for="titem in tlist" :key="titem.id">
							<image :src="titem.picture"></image>
							<text>{{titem.name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
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
				
				
					sizeCalcState: false,
					tabScrollTop: 0,
					currentId: 1,
					flist: [],
					slist: [],
					tlist: [],
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
			this.loadData()
		},
		methods: {
			async loadData(){
			let list = await this.$api.json('cateList');
			console.log(list)
				list.forEach(item=>{
					if(!item.pid){
						this.flist.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
					}else if(!item.picture){
						this.slist.push(item); //没有图的是2级分类
						console.log(this.slist)
					}else{
						this.tlist.push(item); //3级分类
					}
				}) 
			},
			//一级分类点击
			tabtap(item){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				
				this.currentId = item.id;
				let index = this.slist.findIndex(sitem=>sitem.pid === item.id);
				this.tabScrollTop = this.slist[index].top;
			},
			//右侧栏滚动
			asideScroll(e){
				if(!this.sizeCalcState){
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				console.log(this.slist)
				let tabs = this.slist.filter(item=>item.top <= scrollTop).reverse();
				console.log(tabs)
				if(tabs.length > 0){
					this.currentId = tabs[0].pid;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize(){
				console.log('执行了')
				this.slist.forEach(item=>{
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			navToList(sid, tid){
				// uni.navigateTo({
				// 	url: `/pages/product/list?fid=${this.currentId}&sid=${sid}&tid=${tid}`
				// })
			}
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	.shopping-box{
		width: 100%;
		height: 100%;
		.shopping-navbar{
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
		.content {
			background-color: #f8f8f8;
		}
		.content {
			display: flex;
		}
		.left-aside {
			flex-shrink: 0;
			width: 200rpx;
			height: 100%;
			background-color: #fff;
		}
		.f-item {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100rpx;
			font-size: 28rpx;
			color: $font-color-base;
			position: relative;
			&.active{
				color: $base-color;
				background: #f8f8f8;
				&:before{
					content: '';
					position: absolute;
					left: 0;
					top: 50%;
					transform: translateY(-50%);
					height: 36rpx;
					width: 8rpx;
					background-color: $base-color;
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
		
		.right-aside{
			flex: 1;
			overflow: hidden;
			padding-left: 20rpx;
		}
		.s-item{
			display: flex;
			align-items: center;
			height: 70rpx;
			padding-top: 8rpx;
			font-size: 28rpx;
			color: $font-color-dark;
		}
		.t-list{
			width: 100%;
			background: #fff;
			padding-top: 12rpx;
			&:after{
				content: '';
				flex: 99;
				height: 0;
			}
		}
		.t-item{
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 176rpx;
			font-size: 26rpx;
			color: #666;
			padding-bottom: 20rpx;
			
			image{
				width: 140rpx;
				height: 140rpx;
			}
		}
	}
</style>
