<template>
  <div id="project-list">
    <ul>
      <li class="project-item" @click="toProjectKanban()">
        <div class="icon"></div>
        <div class="name">自研会议平台</div>
      </li>
      <li class="project-item">
        <div class="icon"></div>
        <div class="name">前台会议平台</div>
      </li>
      <li class="project-item">
        <div class="icon"></div>
        <div class="name">业务中心</div>
      </li>
      <li class="project-item">
        <div class="icon"></div>
        <div class="name">运管平台</div>
      </li>
    </ul>
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
  min-height: 300px;
  padding: 50px;
  border: 1px solid red;
}
.project-item {
  width: 200px;
  height: 125px;
  border-radius: 12px;
  margin-right: 16px;
  float: left;
  background-image: url("https://tcs.teambition.net/thumbnail/111u93bfbb33e78185286352914f734004ae/w/200/h/100");
  overflow: hidden;
  box-shadow: 0 1px 5px rgb(38 38 38 / 10%);
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
    height: 80px;
  }
  .name {
    background: #FFF;
    height: 25px;
    line-height: 25px;
    font-weight: bold;
    padding: 10px 12px;
  }
}
</style>