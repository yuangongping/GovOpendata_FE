<template>
<div class="detailInfoContainer">
    <div class="title"><span>{{ title }}</span></div>
    <div class="resourceInfo">
        <div class="tip"><span>资源信息</span></div>
        <div  class="items">
            <div class="item" v-for="(item, key, index) of resourceInfo" :key="'resourceInfo_'+index">
                <div class="lable"><span>{{ key }}</span></div>
                <div class="value"><span>{{ item }}</span></div>
            </div>
        </div>
    </div>
    <div class="dataInfo">
        <div class="tip"><span>数据信息</span></div>
            <div  class="items">
                <div class="item" v-for="(item, index) of dataInfo[0]" :key="'dataInfo1_'+index">
                    <div class="lable"><span>{{ item }}</span></div>
                </div>
                <div v-for="(item, index) of dataInfo.slice(1, -1)" :key="'dataInfo2_'+index">
                    <div class="item" v-for="(item, index) of item" :key="'dataInfo3_'+index">
                        <div class="value"><span>{{ item }}</span></div>
                    </div>
                </div>
               
            </div>
    </div>
    <div class="fileDownload">
        <div class="tip"><span>数据下载</span></div>
        <div class="items">
            <div class="fileList">
                <el-table
                    :data="fileList"
                    style="width: 100%">
                        <el-table-column
                            label="序号"
                            width="100"
                            type="index"
                            :index="indexMethod">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="文件名"
                            min-width=580>
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="格式"
                            min-width=180>
                        </el-table-column>
                        <el-table-column
                            prop="size"
                            label="大小"
                            min-width=180>
                        </el-table-column>
                        <el-table-column
                            label="操作"
                            width="180">
                            <template slot-scope="scope">
                                <el-button
                                    size="mini"
                                    @click="handleEdit(scope.$index, scope.row)">
                                    下载
                                </el-button>
                            </template>
                        </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" >
.detailInfoContainer{
    background-color: #eff3f7;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    .title{
        background-color: white;
        width: 70%;
        height: 80px;
        margin: 15px 0px;
        display: flex;
        align-items: center;        
        justify-content: center;
        padding: 15px 0px;
        span{
            text-align: center;
            font-size: 24px;
            color: #2b72c3;
            font-weight: bold;
        }
       

    }
    .resourceInfo{
        background-color: white;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 15px;
        .tip{
            width: 10%;
            height: 50px;
            background-color: #2b72c3;
            display: flex;
            flex-direction: column;
            align-items: center;        /* 垂直居中 */
            justify-content: center;    /* 水平居中 */
            margin-bottom: 15px;
            span{
                width: 100%;
                font-size: 18px;
                color: #2b72c3;
                font-weight: bold;
                color: white;
            }
        }
        .items{
            display: flex;
            flex-direction: row;
            justify-content: center;    /* 水平居中 */
            flex-wrap: wrap;
            padding: 0px 20px 20px 20px;
            .item{
                display: inline-flex;
                align-items: center;        /* 垂直居中 */
                justify-content: center;    /* 水平居中 */
                .lable{
                    display: flex;
                    flex-direction: column;
                    align-items: center;        /* 垂直居中 */
                    justify-content: center;    /* 水平居中 */
                    width: 120px;
                    background-color: #F5F9FD;
                    border: 1px solid #a6caf3;
                    white-space: nowrap;
                    margin: 0px 0.5px 0.5px 0.5px;
                    height: 50px;
                    span{
                        width: 100%;
                        font-size: 14px;
                        overflow: hidden;
                        text-overflow : ellipsis;
                    }
                }
                .lable span:hover{
                    text-overflow:inherit; 
                    overflow: visible; 
                    white-space: pre-line;
                }
                .value{
                    display: flex;
                    flex-direction: row;
                    align-items: center;        /* 垂直居中 */
                    justify-content: center;    /* 水平居中 */
                    width: 200px;
                    height: 50px;
                    border: 1px solid #a6caf3;
                    margin: 0px 0.5px 0.5px 0.5px;
                    span{
                        width: 100%;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow : ellipsis;
                    }
                }
                .value span:hover{
                    text-overflow:inherit; 
                    overflow: visible; 
                    white-space: pre-line;
                }
            }
        }
        
    }

    .dataInfo{
        background-color: white;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        margin-bottom: 15px;
        .tip{
            width: 10%;
            height: 50px;
            background-color: #2b72c3;
            display: flex;
            flex-direction: column;
            align-items: center;        /* 垂直居中 */
            justify-content: center;    /* 水平居中 */
            margin-bottom: 15px;
            span{
                width: 100%;
                font-size: 18px;
                color: #2b72c3;
                font-weight: bold;
                color: white;
            }
        }
        .items{
            display: flex;
            flex-direction: row;
            justify-content: center;    /* 水平居中 */
            flex-wrap: wrap;
            padding: 0px 20px 20px 20px;
            .item{
                display: inline-flex;
                align-items: center;        /* 垂直居中 */
                justify-content: center;    /* 水平居中 */
                .lable{
                    display: flex;
                    flex-direction: column;
                    align-items: center;        /* 垂直居中 */
                    justify-content: center;    /* 水平居中 */
                    width: 130px;
                    background-color: #F5F9FD;
                    border: 1px solid #a6caf3;
                    white-space: nowrap;
                    margin: 0px 0.5px 0.5px 0.5px;
                    height: 50px;
                    span{
                        width: 100%;
                        font-size: 14px;
                        overflow: hidden;
                        text-overflow : ellipsis;
                    }
                }
                .lable span:hover{
                    text-overflow:inherit; 
                    overflow: visible; 
                    white-space: pre-line;
                }
                .value{
                    display: flex;
                    flex-direction: row;
                    align-items: center;        /* 垂直居中 */
                    justify-content: center;    /* 水平居中 */
                    width: 130px;
                    height: 50px;
                    border: 1px solid #a6caf3;
                    margin: 0px 0.5px 0.5px 0.5px;
                    span{
                        width: 100%;
                        font-size: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow : ellipsis;
                    }
                }
                .value span:hover{
                    text-overflow:inherit; 
                    overflow: visible; 
                    white-space: pre-line;
                }
            }
        }
        
    }

    .fileDownload{
        background-color: white;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        margin-bottom: 30px;
        .tip{
            width: 10%;
            height: 50px;
            background-color: #2b72c3;
            display: flex;
            flex-direction: column;
            align-items: center;        /* 垂直居中 */
            justify-content: center;    /* 水平居中 */
            margin-bottom: 15px;
            span{
                width: 100%;
                font-size: 18px;
                color: #2b72c3;
                font-weight: bold;
                color: white;
            }
        }
        .items{
            display: flex;
            flex-direction: row;
            align-items: flex-start;        /* 垂直居中 */
            justify-content: flex-start;    /* 水平居中 */
            flex-wrap: wrap;
            padding: 0px 20px 20px 50px;
        }
    }


}

</style>

<script>
export default {
    name: 'DetailInfo',
    data() {
        return {
            title: "贵州省磷石膏建材生产企业汇总表",
            resourceInfo:  {
                    "数据来源（部委/地方政府）": "省卫生健康委员会",
                    "开放方式":	"无条件开放",
                    "所属主题":	"医疗卫生",
                    "更新时间":	"2020-2-21 9:29:23",
                    "来源部门":	"省卫生健康委员会",
                    "部门地址": "",
                    "标签":	"疫情,冠状病毒,市州,肺炎",
                    "更新频率":	"每天",
                    "数据格式":	"数据集",
                    "发布时间":	"2020-2-14 18:02:47",
                    "所属行业":	"卫生和社会工作",
                    "简介":	"四川省新型冠状病毒肺炎疫情情况（按市州统计），包括统计时间、市州、确诊病例、治愈、死亡、更新时间等内容。，包括统计时间、市州、确诊病例、治愈、死亡、更新时间等内容。"
            },
            dataInfo: [
                [
                    '序号',
                    '英文名称',
                    '中文名称',
                    '数据格式',
                    '是否统计项',
                    '是否展现项',
                    '是否搜索项',
                    '是否排序项',
                    '中文描述'
                ],
                [
                    "1",
                    "TJSJ",
                    "统计时间",
                    "字符串型C",
                    "√",
                    "√",
                    "√",
                    "√",
                    "统计时间"
                ],
                [
                    "2",
                    "QZBL",
                    "确诊病例",
                    "整型I",
                    "√",
                    "√",
                    "√",
                    "√",
                    "确诊病例"
                ],
                [
                    "3",
                    "WZRS",
                    "危重人数",
                    "整型I",
                    "√",
                    "√",
                    "√",
                    "√",
                    "危重人数"
                ],
                [
                    "4",
                    "SWRS",
                    "死亡人数",
                    "整型I",
                    "√",
                    "√",
                    "√",
                    "√",
                    "死亡人数"
                ],
                [
                    "5",
                    "ZYRS",
                    "治愈人数",
                    "整型I",
                    "√",
                    "√",
                    "√",
                    "√",
                    "治愈人数"
                ],
                [
                    "6",
                    "YXGC",
                    "医学观察",
                    "整型I",
                    "√",
                    "√",
                    "√",
                    "√",
                    "医学观察"
                ],
                [
                    "7",
                    "JCGC",
                    "解除观察",
                    "整型I",
                    "√",
                    "√",
                    "√",
                    "√",
                    "解除观察"
                ],
                [
                    "8",
                    "GXSJ",
                    "更新时间",
                    "日期时间型T",
                    "√",
                    "√",
                    "√",
                    "√",
                    "更新时间"
                ]
            ],
            fileList: [
                {
                    name:  '四川省新型冠状病毒肺炎疫情情况（按市州统计）2020-02-21_csv',
                    type: 'csv',
                    size: '1 KB',
                },
                {
                    name:  '四川省新型冠状病毒肺炎疫情情况（按市州统计）2020-02-21_csv',
                    type: 'csv',
                    size: '1 KB',
                },
                {
                    name:  '四川省新型冠状病毒肺炎疫情情况（按市州统计）2020-02-21_csv',
                    type: 'csv',
                    size: '1 KB',
                }
               
            ]
        }
            
    },
    methods: {
        indexMethod(index) {
            return index + 1;
        }
    }

}
</script>