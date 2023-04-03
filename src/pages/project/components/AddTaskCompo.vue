<template>
  <button class="add" v-show="buttonVisible" @click="addTaskVue()">+</button>

  <div class="add-panel" v-show="panelVisible">
    <div class="content">
      <el-input type="textarea" rows="3" v-model="taskInfo.name"/>
      <div class="executor">
        <img alt="default image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABGlBMVEWmpqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqapqamtra2zs7O6urrAwMDCwsLDw8PExMTFxcXGxsbKysrMzMzS0tLY2Nje3t7f39/i4uLk5OTm5ubp6ent7e3v7+/x8fH09PT5+fn6+vr9/f3+/v7///9sumsYAAAAQHRSTlMABAUGExQWFxkaGxwlJikqTk9QUVdYW1xmaXBxcnV2enuNjo+TlJW2t7jLzM7P0NjZ2+zt7vHy8/T19vj5+vz+SWi1rwAAAhZJREFUGBmFwQ1b0mAUBuATirYyJZMCib6WikIqqUwxt6e5aeEGCoQ4Pf//byS6C8/7buB9U8LcilnZ2Ts+3tupmCtz9IzZ0pYDwdkqzdJkL78eIuHou0HpXpQtpLLKGUqxUMNEP5Yo4e0BprCWSVOwMZVdIEURzyqSkLOh8IMwDH0Xkp2jsUULgtuJ+FHXg2AtUiyzDcGL+EkAYTtDj8oQ3CFLHoRP9MCwILRZMYBgGTSyBsGNWOVDWKd72SYEnzUhhGaWiFYh+awJIa0SURWSz5oQ0hbRnAPJZY0PyTEoD1XEKg+K92RC4Q5Z5UFhUgWKkDVdKDaoDkXImj4UdWpAEbCmA0WDoHIHrIg8qAi6PguRC9UvakATstCF5ifVoTllIYCmThXo2jw2gG6DTCQMOBadQmdSHgktjrWR8IHmHeh8joXQOQZRFbqQY13oqkS0Cl2fY5ELzUciyjahCnisA1UzS/fWoQhZ6LiQ1mnEsPDE77NiGOCJZdCDMmJu0OeEYXiK2Cd6lKlhxOtEnK7bwkgtQ7GFAyAY8BTD8Dcab2gsZ+OSp7qEnSOhCFzwFBdAkRQFG61bnuCuBbtAmuUDeD1O1fNgvaOEhRrw5x8nDP4C20uUYuZzEzi7umPh7uoMaH6ZoXSvvh0COG/3rm9ub2+ue+1zAEdrr2mybKnqQHCqpSw9Yz5vbu7un5zs726a+XnS/QfUNwZ8HxlD9AAAAABJRU5ErkJggg=="/>
        <span class="name">待认领</span>
      </div>
    </div>
    <div class="footer">
      <el-button type="primary" text bg @click="cancelTaskVue()">取消</el-button>
      <el-button type="primary">确认</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"

const buttonVisible = ref<boolean>(true)
const panelVisible = ref<boolean>(false)

interface TaskInfo {
    name: string,
    executorId: string
}

const taskInfo = ref<TaskInfo>({
    name: '测试任务',
    executorId: '1'
})

function addTaskVue() {
    buttonVisible.value = false;
    panelVisible.value = true;
}
function cancelTaskVue() {
    buttonVisible.value = true;
    panelVisible.value = false;
}
</script>

<style lang="scss">
.add {
  height: 30px;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 20px;
}

.add-panel {
  display: flex;
  flex-direction: column;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
  margin-bottom: 8px;
  .content {
    padding: 12px 12px 16px;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    flex-direction: column;
    .executor {
      margin-top: 14px;
      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        margin-left: 2px;
        margin-right: 6px;
      }
    }
  }
  .footer {
    padding: 12px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>