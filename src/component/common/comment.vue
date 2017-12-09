<template>
    <!--  评论 -->
      <div class="comment">
        <!--添加评论-->
        <h4>提交评论</h4>

        <div class="submitcomment">
            <textarea placeholder="请输入评论内容" v-model='value'></textarea>
            <button class="mui-btn mui-btn-primary" @click="postcomment">发表</button>
        </div>
            
        <div class="title">
            <h4>评论列表</h4>
        </div>    
        
        <!--评论列表-->
        
        <div class="item" v-for="(item,index) in message" :key="index">
            <div class="content">{{item.content}}</div>
            <div>
                <span class="user">{{item.user_name}}</span>  <span>{{item.add_time|fmt}}</span>
            </div>
        </div>

        <div class="more">
            <button class="mui-btn mui-btn-primary mui-btn-outlined" @click="loadmore">加载更多</button>
        </div>

    </div>
  
</template>



<script>
 import qs from 'qs'
    export default{
        data(){
            return{
                 message:[],
                value:'',
                pageindex:1
            }
        },
        props:['id'],
        created(){
             this.getcomments();
        },
        methods:{
            getcomments(){//获取评论内容
                var url='getcomments/'+this.id+'?pageindex='+this.pageindex;
                this.$http.get(url).then((res)=>{
                    
                    if(res.status===200&&res.data.status===0){
                        this.message=this.message.concat(res.data.message);
                        
                        // this.message=res.data.message;
                        // console.log(this.message)
                    }else{
                        console.log('服务器错误')
                    }
                }).catch((err)=>{
                    console.error(err);
                })
            } ,
            postcomment(){//提交评论内容
                if(this.value.length===0){
                    this.$toast('请输入内容')
                    return
                }
                var url='postcomment/'+this.id
                const content=this.value
                this.$http.post(url,qs.stringify({'content':content})).then((res)=>{
                    if(res.status===200&&res.data.status===0){
                         this.$toast(res.data.message);
                    }else{
                        this.$toast(res.data.message);
                    } 
                    // console.log(res)
                    // 重新加载评论列表
                    // this.getcomments();
                    // 直接把添加的内容放到列表数组中的第一个位置上
                     this.message.unshift({
                         user_name:'匿名用户',
                         add_time:new Date,
                         content:this.value
                     })
                    this.value='';
                }).catch((err)=>{
                    console.error(err)
                })
            },
            loadmore(){//加载更多
                this.pageindex++;
                this.getcomments();
            }   
        }
    }
    
</script>

<style scoped>
     /*  评论的样式 */
    .submitcomment {
        text-align: center;
    }
    
    .submitcomment textarea {
        margin-top: 10px;
        padding: 0;
        width: 96%;
        height: 60px;
    }
    
    .submitcomment button {
        width: 96%;
    }
    
    .comment .title {
        border-top: 1px solid rgba(92, 92, 92, 0.4);
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
        margin: 20px 0 0 0;
        vertical-align: middle;
        padding: 10px 0;
    }
    
    .item {
        padding: 15px 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
    }
    
    .item div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }
    
    .item span {
        font-size: 15px;
    }
    
    .item .user {
        color: skyblue;
    }
    
    .more {
        margin: 10px 0;
        text-align: center;
    }
    
    .more>button {
        width: 96%;
    }
</style>
