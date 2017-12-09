<template>
  <div class="mui-content">
    <div class="title">
      <h3>{{details.title}}</h3>
      <span>{{details.add_time|fmt}}&nbsp;&nbsp;&nbsp;&nbsp;{{details.click}}次浏览</span>
    </div>
    <div class="details" v-html='details.content'>
   
    </div>

    <!--评论 -->
    <comment :id="commentId"></comment>
  </div>

</template>

<script>
// 引入Toast 提示框//不需要引入了因为在全局已经引入
// import { Toast } from 'mint-ui';

   import comment from "../../common/comment.vue"
    export default{
        props:['id'],
        data(){
            return{
                details:{},
               commentId:this.id
            }
        },
        components:{
            comment
        },
        created(){
           this.getDetails();
        },
        methods:{
            getDetails(){//获取详细内容
                this.$http.get('getnew/'+this.id).then((res)=>{
                    // console.log(res)
                    if(res.status===200&&res.data.status===0){
                        // console.log(res.data.message[0])
                        this.details=res.data.message[0];
                    }else{
                        console.log('数据库错误')
                    }
                    // 
                }).catch((err)=>{
                    console.error(err)
                })
            }
          
        }
    }
</script>


<style scoped>
  .mui-content {
    background-color: #fff;
  }
  .title {
    padding: 10px 5px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.1);
  }
  .title h3 {
    font-size: 16px;
    font-weight: bold;
    color: #0094ff;
  }
  .title span {
    color: rgba(92, 92, 92, 0.7);
    font-size: 12px;
  }
  .details {
    padding: 5px 5px;
    overflow: hidden;;

  }
 
</style>
