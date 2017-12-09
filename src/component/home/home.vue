<template>
   <div class="mui-content">
	<!-- 轮播图 -->
	<swipe :homeUrl="img_url"></swipe>
        <!-- 九宫格 -->
	<grid></grid> 
   </div> 
</template>

<script>
    import Grid from "./grid.vue";
    import Swipe from "../common/swipe.vue";
    export default{
        data(){
            return{
                img_url:'getlunbo'    
            }    
        },
       components:{
	     Grid ,
	     swipe:Swipe	
       }
	}
	
</script>

<style scoped>
	

</style>
