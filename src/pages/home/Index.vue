<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <span class="top-title">帝俊</span>
      </el-col>
      <el-divider />
      <el-col :span="24">
        <router-link to="/project">项目管理</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
  .home {
    padding: 0 20px;
    .top-title {
      font-size: 3em;
      color: #F00;
      font-weight: 400;
    }
  }
</style>
