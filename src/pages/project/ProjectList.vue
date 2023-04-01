<template>
  <div id="project-list">
    <div class="project-item" @click="toProjectKanban()">
      <div class="icon"></div>
      <div class="name">自研会议平台</div>
    </div>
    <div class="project-item">
      <div class="icon"></div>
      <div class="name">前台会议平台</div>
    </div>
    <div class="project-item">
      <div class="icon"></div>
      <div class="name">业务中心</div>
    </div>
    <div class="project-item">
      <div class="icon"></div>
      <div class="name">运管平台</div>
    </div>
    <div class="project-item">
        <div class="icon"></div>
        <div class="name">运管平台</div>
    </div>
    <div class="project-item">
        <div class="icon"></div>
        <div class="name">运管平台</div>
    </div>
    <div class="project-item">
        <div class="icon"></div>
        <div class="name">运管平台</div>
    </div>
    <div class="project-item">
        <div class="icon"></div>
        <div class="name">运管平台</div>
    </div>
    <div class="project-item">
        <div class="icon"></div>
        <div class="name">运管平台</div>
    </div>
  </div>
</template>

<script setup>
import router from '/src/router/index'

function toProjectKanban() {
  router.push({name: 'ProjectKanban', query: {id: '1'}})
}
</script>

<style lang="scss">
#project-list {
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
}
.project-item {
  width: 180px;
  height: 120px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-right: 16px;
  margin-top: 16px;
  background-image: url("https://tcs.teambition.net/thumbnail/111u93bfbb33e78185286352914f734004ae/w/200/h/100");
  box-shadow: 0 1px 5px rgb(38 38 38 / 10%);
  overflow: hidden;
  &:hover {
    box-shadow: 0 1px 5px rgb(38 38 38 / 50%);
    cursor: pointer;
    .icon {
      background-color: #000;
      opacity: 0.5;
      background-color: rgba(38,38,38,0.4);
    }
  }

  .icon {
    flex: 1;
  }
  .name {
    background: #FFF;
    height: 25px;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding: 5px 10px;
  }
}
</style>