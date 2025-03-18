<template>
  <div id="project-kanban">
    <div class="kanban-item" v-for="k in kanbanList">
      <div class="header">
        <span class="name">{{ k.name }}</span>
        <button>...</button>
      </div>
      <AddTaskCompo/>
      <div class="task">
        <div class="task-item" v-for="t in k.taskList" @click="viewTaskDetail(t.id)">
          <span class="name">{{ t.name }}</span>
          <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
        </div>
      </div>
    </div>
  </div>

  <TaskDetailCompo :id="curTaskId" v-show="taskDialogVisible"/>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"
import {useRoute} from 'vue-router'
import 'dayjs/locale/zh-cn'
import AddTaskCompo from './components/AddTaskCompo.vue'
import TaskDetailCompo from './components/TaskDetailCompo.vue'
import axios from "@/utils/http-utils";

const taskDialogVisible = ref<boolean>(false)

interface TaskList {
  id: number
  name: string,
  executorId: string,
  status: boolean,
  startTime: string,
  endTime: string,
  priority: any,
  description: string
}

interface Kanban {
  id: number,
  name: string,
  taskList: TaskList[]
}
let kanbanList = ref<Kanban[]>([])

let projectId = useRoute().params.id
onMounted(() => {
  axios.get(`/projects/${projectId}/kanbans`).then(res => {
    kanbanList.value = res.data

    kanbanList.value.forEach(k => {
      axios.get(`/projects/kanbans/${k.id}/tasks`, {params: {page: 1, pageSize: 10}}).then(res => {
        k.taskList = res.data.data
      })
    })
  })
})

let curTaskId = ref<number>()

function viewTaskDetail(taskId: number) {
  curTaskId.value = taskId
  taskDialogVisible.value = true
}


</script>

<style scoped lang="scss">
#project-kanban {
  min-height: 100vh;
  padding: 20px;
  background: #F7F7F7;
  box-sizing: border-box;
  display: flex;
}

.kanban-item {
  width: 300px;
  box-sizing: border-box;
  padding: 12px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  .header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.task {
  display: flex;
  flex-direction: column;

  .task-item {
    height: 48px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
    padding: 0 16px;
    margin-bottom: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 24px;
      border-radius: 50%;
    }
  }
}
</style>
