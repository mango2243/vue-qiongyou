<template>
    <div>
        <el-carousel arrow="always" class="carousel">
            <el-carousel-item>
                <img src="@/assets/images/b2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/images/b1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/images/b3.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/images/b4.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name:'Banner',
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
.carousel{
    width: 100%;
    max-height: 640px;
   /deep/ .el-carousel__container{
        max-height: 640px;
        height: 528px;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>