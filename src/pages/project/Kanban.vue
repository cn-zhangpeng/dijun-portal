<template>
  <div id="project-kanban">
    <div class="kanban-item">
      <div class="header">
        <span class="name">待处理</span>
        <button>...</button>
      </div>
      <AddTaskCompo />
      <div class="task">
        <div class="task-item">
          <span class="name">【信令后台】框架搭建</span>
          <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
        </div>
        <div class="task-item">
          <span class="name">【信令后台】业务相关表结构设计</span>
            <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
        </div>
      </div>
    </div>
    <div class="kanban-item">
        <div class="header">
            <span class="name">待处理</span>
            <button>...</button>
        </div>
        <AddTaskCompo />
        <div class="task">
            <div class="task-item">
                <span class="name">【信令后台】框架搭建</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
            <div class="task-item">
                <span class="name">【信令后台】业务相关表结构设计</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
        </div>
    </div>
    <div class="kanban-item">
        <div class="header">
            <span class="name">待处理</span>
            <button>...</button>
        </div>
        <AddTaskCompo />
        <div class="task">
            <div class="task-item">
                <span class="name">【信令后台】框架搭建</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
            <div class="task-item">
                <span class="name">【信令后台】业务相关表结构设计</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
        </div>
    </div>
    <div class="kanban-item">
        <div class="header">
            <span class="name">待处理</span>
            <button>...</button>
        </div>
        <AddTaskCompo />
        <div class="task">
            <div class="task-item">
                <span class="name">【信令后台】框架搭建</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
            <div class="task-item">
                <span class="name">【信令后台】业务相关表结构设计</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
        </div>
    </div>
    <div class="kanban-item">
        <div class="header">
            <span class="name">待处理</span>
            <button>...</button>
        </div>
        <AddTaskCompo />
        <div class="task">
            <div class="task-item">
                <span class="name">【信令后台】框架搭建</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
            <div class="task-item">
                <span class="name">【信令后台】业务相关表结构设计</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
        </div>
    </div>
    <div class="kanban-item">
        <div class="header">
            <span class="name">待处理</span>
            <button>...</button>
        </div>
        <AddTaskCompo />
        <div class="task">
            <div class="task-item">
                <span class="name">【信令后台】框架搭建</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
            <div class="task-item">
                <span class="name">【信令后台】业务相关表结构设计</span>
                <img alt="头像" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200">
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import AddTaskCompo from './components/AddTaskCompo.vue'
</script>

<style lang="scss">
#project-kanban {
  min-height: 100vh;
  padding: 20px;
  background: #F7F7F7;
  display: inline-flex;
}
.kanban-item {
  width: 300px;
  min-height: 100vh;
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
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
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
