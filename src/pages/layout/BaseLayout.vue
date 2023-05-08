<template>
  <div class="base-layout">
    <el-container>
      <el-aside class="aside">
        <div class="avatar">
          <img alt="头像" src="https://internal-api-lark-file.feishu.cn/api/avatar/v1/v2_5f85ead8-7f38-4a9f-b8d8-a9acbe62aa5g/72x72_q70.image" />
        </div>
      </el-aside>
      <el-main class="main"><router-view/></el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.aside {
  width: 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #465069;
  .avatar {
    width: 40px;
    height: 40px;
    background: #FFF;
    border-radius: 50%;
    margin-top: 30px;
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin: 2px;
    }
  }
}
.main {
  min-height: 100vh;
  padding: 0;
}
</style>