<template>
  <div id="project-kanban">
    <div class="kanban-item">
      <div class="header">
        <span class="name">待处理</span>
        <button>...</button>
      </div>
      <AddTaskCompo/>
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
      <AddTaskCompo/>
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
      <AddTaskCompo/>
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
      <AddTaskCompo/>
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
      <AddTaskCompo/>
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
      <AddTaskCompo/>
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

  <el-dialog id="task-detail" v-model="dialogVisible" :title="taskDetail.name" top="48px">
    <div class="content">
      <div class="left">
        <div class="info">
          <div class="item state">
            <svg t="1680434799567" class="item-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2657" width="20" height="20"><path d="M726.976697 393.184142c-12.54369-12.447359-32.831716-12.320065-45.248112 0.25631L448.447252 629.248757l-103.26354-106.112189c-12.352748-12.703669-32.60809-12.927295-45.248112-0.639914-12.672705 12.320065-12.959978 32.60809-0.639914 45.248112l126.016611 129.503454c0.063647 0.096331 0.192662 0.096331 0.25631 0.192662 0.063647 0.063647 0.096331 0.192662 0.159978 0.25631 2.016073 1.983389 4.512082 3.19957 6.880796 4.544765 1.247144 0.672598 2.239699 1.792447 3.519527 2.303346 3.872168 1.599785 8.000645 2.399677 12.096439 2.399677 4.06483 0 8.12794-0.799892 11.967424-2.33603 1.247144-0.512619 2.208735-1.536138 3.392232-2.176052 2.399677-1.343475 4.895686-2.528692 6.944443-4.544765 0.063647-0.063647 0.096331-0.192662 0.192662-0.25631 0.063647-0.096331 0.159978-0.127295 0.25631-0.192662l256.223626-259.008628C739.647682 425.888563 739.520387 405.631501 726.976697 393.184142z" fill="#575B66" p-id="2658"></path><path d="M832 928.00086l-640 0c-52.9288 0-96.00086-43.07206-96.00086-95.99914l0-640c0-52.9288 43.07206-96.00086 96.00086-96.00086l640 0c52.92708 0 95.99914 43.07206 95.99914 96.00086l0 640C928.00086 884.9288 884.9288 928.00086 832 928.00086zM192 160.00086c-17.632039 0-32.00086 14.368821-32.00086 32.00086l0 640c0 17.664722 14.368821 31.99914 32.00086 31.99914l640 0c17.664722 0 31.99914-14.336138 31.99914-31.99914l0-640c0-17.632039-14.336138-32.00086-31.99914-32.00086L192 160.00086z" fill="#575B66" p-id="2659"></path></svg>
            <span class="item-name">状态</span>
            <div class="item-content">
              <el-checkbox v-model="taskDetail.status" />
              <span></span>
            </div>
          </div>
          <div class="item executor">
            <svg t="1680435922106" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2829" width="20" height="20"><path d="M511.913993 941.605241c-255.612968 0-385.311608-57.452713-385.311608-170.810012 0-80.846632 133.654964-133.998992 266.621871-151.88846L393.224257 602.049387c-79.986561-55.904586-118.86175-153.436587-118.86175-297.240383 0-139.33143 87.211154-222.586259 233.423148-222.586259l7.912649 0c146.211994 0 233.423148 83.254829 233.423148 222.586259 0 54.184445 0 214.67361-117.829666 297.412397l-0.344028 16.685369c132.966907 18.061482 266.105829 71.041828 266.105829 151.716445C897.225601 884.152528 767.526961 941.605241 511.913993 941.605241zM507.957668 141.567613c-79.470519 0-174.250294 28.382328-174.250294 163.241391 0 129.698639 34.230808 213.469511 104.584579 255.784982 8.944734 5.332437 14.277171 14.965228 14.277171 25.286074l0 59.344868c0 15.309256-11.524945 28.0383-26.662187 29.414413-144.319839 14.449185-239.959684 67.429531-239.959684 95.983874 0 92.199563 177.346548 111.637158 325.966739 111.637158 148.792206 0 325.966739-19.26558 325.966739-111.637158 0-28.726356-95.639845-81.534688-239.959684-95.983874-15.48127-1.548127-27.006215-14.621199-26.662187-30.102469l1.376113-59.344868c0.172014-10.148833 5.676466-19.437594 14.277171-24.770032 70.525785-42.487485 103.208466-123.678145 103.208466-255.784982 0-135.031077-94.779775-163.241391-174.250294-163.241391L507.957668 141.567613 507.957668 141.567613z" fill="#575B66" p-id="2830"></path></svg>
            <span class="item-name">执行者</span>
            <div class="item-content executor-content">
              <el-avatar class="avatar" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200"/>
              <el-avatar class="avatar" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200"/>
              <el-avatar class="avatar" src="https://tcs.teambition.net/thumbnail/111t8f70348037f544d170620cc0b9202e9c/w/200/h/200"/>
            </div>
          </div>
          <div class="item end-time">
            <svg t="1680444424032" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3922" width="20" height="20"><path d="M896 448H128v447.957333l477.738667 0.021334L896 895.957333V448z m0-42.666667V192.042667C896 192 768 192 768 192V149.333333h128.042667A42.666667 42.666667 0 0 1 938.666667 192.042667v703.914666A42.624 42.624 0 0 1 896.064 938.666667H127.936A42.666667 42.666667 0 0 1 85.333333 895.957333V192.042667C85.333333 168.469333 104.256 149.333333 127.957333 149.333333H256v42.666667l-128 0.042667V405.333333h768zM298.666667 85.333333h42.666666v170.666667h-42.666666V85.333333z m384 0h42.666666v170.666667h-42.666666V85.333333zM384 149.333333h256v42.666667H384V149.333333z" fill="#575B66" p-id="3923"></path></svg>
            <span class="item-name">时间</span>
            <div class="item-content">
              <el-date-picker
                      v-model="taskDetail.endTime"
                      type="datetime"
                      format="M月D日 H:m"
                      placeholder="Select date and time"
              />
            </div>
          </div>
          <div class="item priority">
            <svg t="1680445480007" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3760" id="mx_n_1680445480010" width="20" height="20"><path d="M294.5 877.4c-18.4 0-33.3-14.9-33.3-33.3V191.7c0-18.4 14.9-33.3 33.3-33.3s33.3 14.9 33.3 33.3v652.4c-0.1 18.4-15 33.3-33.3 33.3z" fill="#575B66" p-id="3761"></path><path d="M361.8 885.7H224.2c-18.4 0-33.3-14.9-33.3-33.3s14.9-33.3 33.3-33.3h137.6c18.4 0 33.3 14.9 33.3 33.3s-14.9 33.3-33.3 33.3zM465.3 193.9c48.1 0 93.7 18.7 137.7 36.7 37.8 15.5 73.4 30.1 110.6 32.9 7 0.5 14.2 0.8 21.5 0.8 27.5 0 55.5-3.5 79.6-6.9v274.1c-13.2 12.6-44.2 33.8-75.9 33.8-2.1 0-4.1-0.1-6.2-0.3-19.5-1.9-45.6-11.5-75.8-22.7-52.7-19.5-118.4-43.8-201.7-47.3-5.5-0.2-11.2-0.3-16.9-0.3-41.7 0-81.9 5.9-110.5 11.5V246.1c11.8-17.5 70.5-52.2 137.6-52.2m0-66.6c-102.2 0-204.1 61.3-204.1 113.6v356.7c0-9.2 95.6-36.6 177.1-36.5 4.7 0 9.5 0.1 14.1 0.3 122.8 5.2 204.9 63.1 273.9 69.8 4.2 0.4 8.4 0.6 12.6 0.6 75.2 0 142.4-63.1 142.4-83.2V191.8c0-5.5-6.1-7.4-16.4-7.4-26.7 0-81.4 13.3-129.8 13.3-5.6 0-11.2-0.2-16.6-0.6-64.1-4.8-148.6-69.8-253.2-69.8z" fill="#575B66" p-id="3762"></path></svg>
            <span class="item-name">优先级</span>
            <div class="item-content">
              <el-radio-group v-model="taskDetail.priority" class="ml-4">
                <el-radio v-for="(v, k) in TaskPriority" :label="k">{{v}}</el-radio>
              </el-radio-group>
            </div>
          </div>
          <div class="item description">
            <div class="item-title">
              <svg t="1680445624534" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4457" id="mx_n_1680445624536" width="20" height="20"><path d="M96 122m35.8 0l760.4 0q35.8 0 35.8 35.8l0 6.4q0 35.8-35.8 35.8l-760.4 0q-35.8 0-35.8-35.8l0-6.4q0-35.8 35.8-35.8Z" fill="#575B66" p-id="4458"></path><path d="M135 434h546a39 39 0 0 0 0-78H135a39 39 0 0 0 0 78z" fill="#575B66" p-id="4459"></path><path d="M96 590m36.5 0l655 0q36.5 0 36.5 36.5l0 5q0 36.5-36.5 36.5l-655 0q-36.5 0-36.5-36.5l0-5q0-36.5 36.5-36.5Z" fill="#575B66" p-id="4460"></path><path d="M473 824H135a39 39 0 0 0 0 78h338a39 39 0 0 0 0-78z" fill="#575B66" p-id="4461"></path></svg>
              <span class="item-name">描述</span>
            </div>
            <div class="item-content">
              <el-input type="textarea" rows="3" v-model="taskDetail.description"/>
            </div>
          </div>
          <div class="item child-task">
            <svg t="1680445778756" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4793" id="mx_n_1680445778758" width="20" height="20"><path d="M624 652.8h280c24 0 43.2-19.2 43.2-41.6V420.8c0-22.4-19.2-41.6-43.2-41.6H624c-24 0-43.2 19.2-43.2 41.6v65.6H289.6V297.6H400c24 0 43.2-19.2 43.2-41.6V65.6c0-22.4-19.2-41.6-43.2-41.6H120C96 24 76.8 43.2 76.8 65.6V256c0 22.4 19.2 41.6 43.2 41.6h110.4v595.2h348.8v65.6c0 22.4 19.2 41.6 43.2 41.6h280c24 0 43.2-19.2 43.2-41.6V768c0-22.4-19.2-41.6-43.2-41.6H624c-24 0-43.2 19.2-43.2 41.6v65.6H289.6v-288h291.2v65.6c0 22.4 19.2 41.6 43.2 41.6z m12.8-222.4h252.8v171.2H636.8V430.4zM132.8 246.4V73.6h252.8v171.2H132.8z m504 531.2h252.8v171.2H636.8V777.6z" fill="#575B66" p-id="4794"></path></svg>
            <span class="item-name">子任务</span>
            <div class="item-content">
              <el-checkbox />
            </div>
          </div>
        </div>
        <div class="child-task">

        </div>
      </div>
      <div class="right">123</div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue"
import AddTaskCompo from './components/AddTaskCompo.vue'

const dialogVisible = ref<boolean>(true)

interface TaskDetail {
    name: string,
    executorId: string,
    status: boolean,
    startTime: string,
    endTime: string,
    priority: TaskPriority,
    description: string
}
enum TaskPriority {
    LOWER = '较低',
    ORDINARY = '普通',
    URGENT = '重要',
    VERY_URGENT = '非常重要'
}
const taskDetail = ref<TaskDetail>({
    name: '测试任务',
    executorId: '1',
    status: true,
    startTime: '',
    endTime: '',
    priority: TaskPriority.ORDINARY,
    description: ''
})
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

#task-detail {
  width: 1360px;
  .el-dialog__body {
    padding: 0;
  }
  .content {
    display: flex;
    border-top: 1px solid #E5E5E5;
    .left {
      width: 800px;
      border-right: 1px solid #E5E5E5;
      padding: 28px;
      .info {
        display: flex;
        flex-direction: column;
        .item {
          height: 36px;
          padding: 20px 0;
          display: flex;
          align-items: center;
          .item-name {
            width: 140px;
            padding-left: 8px;
          }
          .executor-content {
            .avatar {
              width: 24px;
              height: 24px;
              margin-right: 8px;
            }
          }
        }
        .description {
          display: flex;
          flex-direction: column;
          .item-title {
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .right {
      flex: 1;
    }
  }
}

</style>
