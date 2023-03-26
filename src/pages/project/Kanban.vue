<template>
  <div id="project-kanban">
    <ul class="kanban">
      <li class="kanban-item">
        <div class="header">
          <span class="name">待处理</span>
          <button>...</button>
        </div>
        <AddTaskCompo />
        <ul class="task">
          <li class="task-item">
            <span class="name">【信令后台】框架搭建</span>
<!--            <span><img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200"></span>-->
          </li>
          <li class="task-item">
            <span class="name">【信令后台】业务相关表结构设计</span>
          </li>
        </ul>
      </li>
      <li class="kanban-item">
        <div class="header">
          <span class="name">待处理</span>
          <button>...</button>
        </div>
        <AddTaskCompo />
        <ul class="task">
          <li class="task-item">
            <span class="name">【信令后台】框架搭建</span>
            <!--            <span><img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200"></span>-->
          </li>
          <li class="task-item">
            <span class="name">【信令后台】业务相关表结构设计</span>
          </li>
        </ul>
      </li>
      <li class="kanban-item">
        <div class="header">
          <span class="name">待处理</span>
          <button>...</button>
        </div>
        <button class="add">+</button>
        <ul class="task">
          <li class="task-item">
            <span class="name">【信令后台】框架搭建</span>
            <!--            <span><img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200"></span>-->
          </li>
          <li class="task-item">
            <span class="name">【信令后台】业务相关表结构设计</span>
          </li>
        </ul>
      </li>
      <li class="kanban-item">
        <div class="header">
          <span class="name">待处理</span>
          <button>...</button>
        </div>
        <button class="add">+</button>
        <ul class="task">
          <li class="task-item">
            <span class="name">【信令后台】框架搭建</span>
            <!--            <span><img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200"></span>-->
          </li>
          <li class="task-item">
            <span class="name">【信令后台】业务相关表结构设计</span>
          </li>
        </ul>
      </li>
      <li class="kanban-item">
        <div class="header">
          <span class="name">待处理</span>
          <button>...</button>
        </div>
        <button class="add">+</button>
        <ul class="task">
          <li class="task-item">
            <span class="name">【信令后台】框架搭建</span>
            <!--            <span><img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200"></span>-->
          </li>
          <li class="task-item">
            <span class="name">【信令后台】业务相关表结构设计</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import AddTaskCompo from './components/AddTaskCompo.vue'
</script>

<style lang="scss">
#project-kanban {
  min-height: 300px;
  padding: 20px;
  background: #F7F7F7;
}
.kanban {
  display: flex;
  align-items: flex-start;
  background: #F7F7F7;
  .kanban-item {
    width: 300px;
    min-height: 100px;
    padding: 12px;
    flex-shrink: 0;
    .header {
      height: 40px;
      .name {
        font-weight: bold;
        line-height: 40px;
      }
    }
  }
}
.task {
  .task-item {
    width: 100%;
    height: 48px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    margin-bottom: 8px;
    cursor: pointer;
    .name {
      line-height: 48px;
    }
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}

</style>
