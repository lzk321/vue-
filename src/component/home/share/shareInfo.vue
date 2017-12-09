<template>
  <div class="mui-content">
          <div class="title">
            <h4>{{imgOther.title}}</h4>
            <span>{{imgOther.add_time | fmt}}</span> &nbsp;&nbsp;&nbsp;&nbsp; <span>{{imgOther.click}}</span>
        </div>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in imgInfo" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                   <img :src="item.img">
                </a>
            </li>
           
        </ul> 

        <p class="content" v-html="imgOther.content">
          
        </p>

        <!-- 评论--> 
        <comment :id="id"></comment>
  </div>
</template>

<script>
    import comment from "../../common/comment.vue";
    export default{
        data(){
            return{
                imgInfo:[],
                imgOther:{}
            }
        },
        props:['id'],
        created(){
            this.getInfo()
            this.getOther();
        },
        methods:{
            getInfo(){//获取缩略图
                // console.log(this.id)
                let url='getthumimages/'+this.id;
                this.$http.get(url).then((res)=>{
                    // console.log(res)
                    if(res.status===200&&res.data.status===0){
                        this.imgInfo=res.data.message;
                        // console.log(this.imgInfo)
                    }
                }).catch((err)=>{
                    console.error(err)
                })
            },
            getOther(){//获取图片的详细信息

                this.$http.get('getimageInfo/'+this.id).then((res)=>{
                    // console.log(res)
                    if(res.status===200&&res.data.status===0){
                        this.imgOther=res.data.message[0];
                    }else{
                        console.log('服务器错误')
                    }
                }).catch((err)=>{
                    console.error(err)
                })
            }
        },
        components:{
            comment
        }
    }
</script>

<style scoped> 
    .mui-content {
    background-color: #fff;
  }
  .title {
        margin: 15px 5px;
    }
    
    .title h4 {
        color: dodgerblue;
    }
    
    .title span {
        font-size: 13px;
        color: rgba(92, 92, 92, 0.6);
    }
    /*9宫格样式*/
    
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border-left: 0px;
    }
    
    .mui-table-view-cell img {
        height: 100px;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0px;
        border-bottom: 0px;
        padding: 0;
        margin: 0;
    }
    
    .mui-grid-view.mui-grid-9 .mui-table-view-cell>a:not(.mui-btn) {
        padding: 0;
    }
</style>




