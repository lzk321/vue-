<template>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4" v-for="item in grid" :key="item.url">

					<router-link :to="item.url">
		                <span class="mui-icon" :class="item.className"></span>
		                <div class="mui-media-body">{{item.title}}</div>
					</router-link>
			</li>
		    
		</ul>
</template>


<script>
    export default{
        data(){
			return{
				grid:[]
			}
		},
		created(){
			this.getGrid();
		},
		methods:{
			getGrid(){
                this.$http.get('getmenus')
                .then((res)=>{
					// console.log(res.data.message)
					if(res.status===200&&res.data.status===0){
						this.grid=res.data.message
					}else{
						console.log('服务器错误')
					}
					
                }).catch((err)=>{
					console.err(err);
				})
            }
		}
    }
</script>


<style scoped>
	.mui-table-view{
		background-color:#fff;
	}
    .icon-news{
		background:url('../../../static/images/menu1.png');
		background-repeat: round;
		width: 50px;
		height: 50px;
		display: inline-block;	
	}
	.icon-share{
		background:url('../../../static/images/menu2.png');
		background-repeat: round;
		width: 50px;
		height: 50px;
		display: inline-block;	
	}
	.icon-buy{
		background:url('../../../static/images/menu3.png');
		background-repeat: round;
		width: 50px;
		height: 50px;
		display: inline-block;		
	}
	.icon-feedback{
		background:url('../../../static/images/menu4.png');
		background-repeat: round;
		width: 50px;
		height: 50px;
		display: inline-block;
	}
	.icon-video{
		background:url('../../../static/images/menu5.png');
		background-repeat: round;
		width: 50px;
		height: 50px;
		display: inline-block;
	}
	.icon-contact{
		background:url('../../../static/images/menu4.png');
		background-repeat: round;
		width: 50px;
		height: 50px;
		display: inline-block;
	}
</style>
