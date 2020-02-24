<template>
  <div class="result-page">
    <div class="result-container">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="result"
      >
        <p class="title" @click="jumpToDetailPage('dsadsadsa')">{{ item.title }}</p>
        <el-row :gutter="24">
          <el-col :span="7">
            来源：{{ item.from }}
          </el-col>
          <el-col :span="7">
            更新时间：{{ item.update_time }}
          </el-col>
          <el-col :span="10">
            采集时间：{{ item.get_time }}
          </el-col>
        </el-row>
        <p class="content">{{ item.content }}</p>
        <div class="tools">
          <i class="el-icon-download" />
          {{ item.download_count }}
          <i class="el-icon-view" />
          {{ item.view_count }}
        </div>
      </div>
    </div>
    <el-pagination
      background
      :current-page.sync="listQuery.page"
      :page-size.sync="listQuery.limit"
      layout="total, prev, pager, next, jumper"
      :total="listQuery.total">
    </el-pagination>
  </div>
</template>

<style lang="scss">
.result-page {
  margin-top: 15px;
  .result {
    background-color: white;
    text-align: left;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    color: #999;
    .title {
      color: rgb(77, 112, 185);
      cursor: pointer;
    }
    .tools {
      background-color: transparent;
      //   background-color: white;
      width: 120px;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
    }
  }
  .pagination-container {
    width: 60%;
    margin: auto;
    text-align: center;
  }
}
.el-pagination {
  background-color: rgb(241, 245, 244);
  padding: 20px 10px;
  width: 60%;
  margin: auto;
}
.el-pager {
  .number.active {
    background-color: rgb(86, 191, 162) !important;
  }
}
</style>



<script>
import { getDatasetListApi } from '../api/ListPageApi.js';
export default {
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 2,
        total: 100
      },
      items: [
          {
          title: '贵州省磷石膏建材生产企业汇总表',
          from: '贵州省住房和城乡建设厅',
          update_time: '2020-01-01',
          get_time: '2020-02-20',
          content: '为方便建材使用方采购而刊登的服务信息，提供的名称、地址、主要产品等信息，仅供采购方参考，不代表我厅对所提到企业的产品存在任何行政确认行为',
          download_count: 273,
          view_count: 374
          },
          {
          title: '贵州省磷石膏建材生产企业汇总表',
          from: '贵州省住房和城乡建设厅',
          update_time: '2020-01-01',
          get_time: '2020-02-20',
          content: '为方便建材使用方采购而刊登的服务信息，提供的名称、地址、主要产品等信息，仅供采购方参考，不代表我厅对所提到企业的产品存在任何行政确认行为',
          download_count: 273,
          view_count: 374
          }
      ]
    }
  },
  created(){
    this.getDatasetList()
    
  },
  methods: {
    jumpToDetailPage(datasetName) {
      this.$router.push(`${this.$route.path}/${datasetName}`)
    },

    async getDatasetList(){
      try{
        const res = await getDatasetListApi(this.$route.query.id)
        console.log(res)


      }catch(e) {
        this.$message.error(e)
      }
    }

  }
}
</script>