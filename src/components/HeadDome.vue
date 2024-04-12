<template>
  <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="首页" name="first">
      <!-- 轮播图 -->
      <div class="block text-center">
        <el-carousel height="300px" motion-blur>
          <el-carousel-item v-for="item in bannerImg" :key="item">
            <el-image style="width: 100%;" :src="item.url" :fit="fit" />
          </el-carousel-item>
        </el-carousel>
      </div>

    </el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>


</template>

<script>

export default {
  data() {
    return {
      activeName: 'first',
      bannerImg: [
      { url: require('@/img/banner (1).png') },
      { url: require('@/img/banner (2).png') },
      { url: require('@/img/banner (3).png') }, 
      { url: require('@/img/banner (4).png') }
      ],
    }
  },

}
</script>


<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.flex-grow {
  flex-grow: 1;
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>