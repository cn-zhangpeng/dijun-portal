<template>
  <div id="project-list">
    <div class="project-item" v-for="p in projectList" @click="toProjectKanban(p.id)">
      <div class="icon"></div>
      <div class="name">{{ p.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/index'
import axios from '@/utils/http-utils'
import {ref, onMounted} from "vue"

interface Project {
    id: number,
    icon?: string,
    name: string
}

let projectList = ref<Project[]>([])

function loadProjectList() {
    axios.get('/projects').then(res => {
        projectList.value = res.data
    })
}

function toProjectKanban(id: number) {
    router.push({path: `/project/${id}/kanban`})
}

onMounted(() => {
    loadProjectList()
})
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
      background-color: rgba(38, 38, 38, 0.4);
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