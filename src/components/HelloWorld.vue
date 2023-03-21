<script setup lang="ts">
import { ref } from 'vue'
import { ElConfigProvider } from 'element-plus'

let value1 = ref<boolean>(true)
let value2 = ref<boolean>(false)

</script>

<template>
  <el-switch v-model="value1" />
  <el-switch
      v-model="value2"
      class="ml-2"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
