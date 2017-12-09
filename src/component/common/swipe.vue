<template>
    <mt-swipe :auto="4000">
  			<mt-swipe-item v-for="(item,index) in img" :key="index">
                  <a href="#">
                  <img :src="item.img">
                   </a>
            </mt-swipe-item>	
	</mt-swipe>
</template>

<script>
    // 全局已经引入了mint-ui
    // import Vue from "vue";
    // import { Swipe, SwipeItem } from 'mint-ui';
    //  import "mint-ui/lib/style.css"
    //  Vue.component(Swipe.name, Swipe);
    //  Vue.component(SwipeItem.name, SwipeItem);
    export default{
        data(){
            return{
                img:[] 
            }
        },
        props:["homeUrl"],
        created(){
            this.getSwipe();
        },
        methods:{
            getSwipe(){
                this.$http.get(this.homeUrl)
                .then((response) => {
                    // console.log(response.data.message)
                    // console.log(response.data)
                    if(response.status===200&&response.data.status===0){
                        this.img=response.data.message
                    }
                })
            }
            
        }
    }
</script>


<style scoped>
    .mint-swipe{
        height:250px;
    }
    .mint-swipe img{
        width: 100%;
        height: 100%;
    }
</style>
