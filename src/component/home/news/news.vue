<template>
  <div class="mui-content">
      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
					
                    <router-link :to="{name:'newsDetail', params: {id: item.id}}">    
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body  mui-ellipsis">
							{{item.title}}
							<p class='time'>
                                <span>发表时间：{{item.add_time | fmt}}</span>
                                <span>点击次数{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			

			</ul>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                news:[]
            }
        },
        created(){
            this.getNews();
        },
        methods:{
            getNews(){
                this.$http('getnewslist')
                 .then((res)=>{
                    //  console.log(res);
                    //  console.log(res.data);
                     if(res.status===200&&res.data.status===0){
                         this.news=res.data.message;
                        //  console.log(this.news)
                     }
                    })
            }
        }
    }
</script>

<style scoped>
    .mui-content > .mui-table-view:first-child{
        margin-top: 0px;
    }
    .mui-media-body{
        font-size: 15px;
    }
    .time{
        color:#002299;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
</style>
