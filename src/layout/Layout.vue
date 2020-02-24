<template>
    <div id="container">
        <el-container direction="vertical">
            <el-header>
                <Header />
            </el-header>
            <div v-bind:style="{minHeight: Height+'px'}">
                <el-main>
                    <router-view></router-view>
                </el-main> 
            </div>
            
            <el-footer>
                <Footer />
            </el-footer>
        </el-container>
    </div>
    
</template>

<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            Height: 0
        };
    },
    mounted() {
        this.Height = document.documentElement.clientHeight - 120;
        window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
body{
    margin:0;
    padding:0;
}
.el-header, .el-footer {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0 0px;
  }
  .el-main {
    background-color: #eff3f7;
    color: #333;
    text-align: center;
    padding: 0px;
  }
  
  body > .el-container {
    margin-bottom: 0px;
  }
</style>

