<template>
  <button class="add" @click="addTaskVue()">+</button>

  <el-dialog
      v-model="dialogVisible"
      title="添加任务"
      width="30%"
  >
    <el-form label-width="80px">
      <el-form-item label="任务名称">
        <el-input type="textarea" v-model="taskInfo.name" />
      </el-form-item>
      <el-form-item label="认领人">
        <el-select v-model="taskInfo.executorId">
          <el-option label="张三" value="1" />
          <el-option label="李四" value="2" />
          <el-option label="王五" value="3" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";

const dialogVisible = ref<boolean>(false)

interface TaskInfo {
    name: string,
    executorId: string
}
const taskInfo = ref<TaskInfo>({
  name: '测试任务',
  executorId: '1'
})

function addTaskVue() {
  dialogVisible.value = true
}
</script>

<style lang="scss">
.add {
  height: 30px;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 20px;
}
</style>