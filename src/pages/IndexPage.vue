<template>
  <div class="container">
    <div class="search">
        <el-input placeholder="请输入关键字" v-model="searchKeyword" class="input_select">
            <el-button 
                slot="append" 
                icon="el-icon-search"
                >搜索
            </el-button>
        </el-input>
    </div>
    <div class="history">历史记录: {{ searchHistory }}</div>
    <div class="dataAbstract">
        <div class="item"> 
            <div class="title">开放数据集</div>
            <div class="gap"></div>
            <div class="content">{{ dataSetNum }}
                <label >个</label>
            </div>
        </div>
          <div class="item"> 
            <div class="title">开放文件</div>
            <div class="gap"></div>
            <div class="content">{{ dataFileNum }}
                <label >个</label>
            </div>
        </div>
          <div class="item"> 
            <div class="title">省/直辖市</div>
            <div class="gap"></div>
            <div class="content">{{ regionNum }}
                <label >个</label>
            </div>
        </div>
    </div>
    <div class="regionList">
        <div class="regionItem" v-for=" (item, index) in  regionList" :key="index" @click="jumpToListPage(item)">
            <div class="img"> <img v-bind:src='require(`../assets/regionicons/${item[0]}.png`)' ></div>
            <div class="name">{{ item[0] }}</div>
        </div>
    </div>
    
  </div>
</template>

<style lang="scss" >
.container{
    display: flex;
    flex-direction: column;
    align-items: center;        /* 垂直居中 */
    justify-content: center;    /* 水平居中 */
    line-height: auto;
    .search {
        width: 60%;
        height: 50px;
        margin-top: 50px;
        .el-input__inner{
            height: 50px;
        }
        .el-input-group__append, .el-input-group__prepend  {
            background-color: #4698ff;
            color: white;
        }
    }
    .history{
        width: 60%;
        height: auto;
        margin-top: 10px;
        margin-bottom: 25px;
        text-align: left;
        font-size: 14px;
        color:#888;
    } 
    .dataAbstract{
        display: inline-flex;
        align-items: center;        /* 垂直居中 */
        justify-content: center;    /* 水平居中 */
        text-align: center;
        background-color:aliceblue;
        width: 100%;
        height: 180px;
        .item{
            display: flex;
            align-items: center;        /* 垂直居中 */
            justify-content: center;    /* 水平居中 */
            flex-direction: column;
            width: 30%;
            height: 150px;
            .title {
                font-family: "微软雅黑";
                font-size: 16px;
                color: #7e94b1;
                font-weight: bold;
                letter-spacing: 3px;
                margin-bottom: 8px;
            }
            .gap {
                width: 25%;
                border-bottom: 3px solid black;
                margin-bottom: 8px;
            }
            .content{
                font-size: 16px;
                color: #ff7569;
                font-weight: bolder;
                label{
                    color:dimgrey;
                    font-size: 14px;
                }
            }
        }
    }
    .regionList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;    
        width: 100%;
        margin-top: 50px;
        .regionItem {
            display: flex;
            flex-direction: column;
            align-items: center;        /* 垂直居中 */
            justify-content: center;    /* 水平居中 */
            width: 10%;
            height: 120px;
            cursor: pointer;
            .img {
                width: 65px;
                height: 65px;
                margin-bottom: 12px;
                img{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}

</style>

<script>
import { getDataApi } from '../api/IndexPageApi.js';
export default {
  name: 'IndexPage',
  data() {
    return {
        searchHistory: '贵州省新型冠状病毒数据  贵州省教育机构数据汇总  贵州省失信黑名单' ,
        searchKeyword: '',
        dataSetNum: 0,
        dataFileNum: 0,
        regionNum: 0,
        regionList: [
            // "北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省",      
            // "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省",      
            // "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省",   
            // "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", 
        ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
        jumpToListPage(government) {
            this.$router.push({path: `${government[0]}`, query: {id: government[2]}}, )
        },
        async getData(){
            try{
                const res = await getDataApi()
                this.dataSetNum = res.data.dataset_num
                this.dataFileNum = res.data.file_num
                this.regionNum = res.data.governmentList.length
                this.regionList = res.data.governmentList

            }catch (e) {
                this.$message.error(e)
            }
           
        }
  }
}
</script>
