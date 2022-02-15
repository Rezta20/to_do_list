<template>
  <div>
    <div
      v-for="todo in tagFilter"
      :key="todo.title"
      class="markCard my-4 bg-gray-light flex flex-col items-start justify-around p-4"
      :class="{ 'bg-yellow-light': todo.mark }"
    >
      <div class="upper w-full flex justify-between items-center">
        <label
          for="todoItem"
          class="title px-2"
          :class="{ 'line-through': todo.isChecked, 'text-gray-delete': todo.isChecked }"
        >
          <input type="checkbox" name="todo" id="todoCheck" v-model="todo.isChecked" class="mx-2" />
          {{ todo.title }}
        </label>
        <div class="flex">
          <button @click="todo.mark = !todo.mark">
            <font-awesome-icon
              :icon="['far', 'star']"
              class="hover:text-primary-white hover:bg-yellow-dark"
              :class="{ 'text-primary-white': todo.mark, 'bg-yellow-dark': todo.mark }"
            />
          </button>
          <div>
            <font-awesome-icon :icon="['fas', 'pencil']" class="px-6 text-primary-black hover:text-blue-light" />
          </div>
        </div>
      </div>
      <div class="lower px-12 flex justify-around remark">
        <div v-if="todo.date" class="date-wrapper flex items-center">
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="" />
          <p class="px-1">5/12</p>
        </div>
        <div v-if="todo.file" class="file-wrapper px-2">
          <font-awesome-icon :icon="['far', 'file']" class="" />
        </div>
        <div v-if="todo.comment" class="comment-wrapper px-2">
          <font-awesome-icon :icon="['far', 'comment']" class="" />
        </div>
      </div>
    </div>
    <p class="status mx-6">{{ calculatedTasksLeft.length }} tasks {{ taskStatusText }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardsVue',
  props: {
    currentTag: {
      default: String
    }
  },
  data: () => ({
    todoLists: [
      {
        isChecked: true,
        title: ' 111111111',
        mark: true,
        date: '2022/05/12',
        time: '08:38',
        file: true,
        comment: ' 滾去運動，動起乃，連滾帶動'
      },
      {
        isChecked: false,
        title: ' 2222222',
        mark: true,
        date: '2022/09/05',
        time: '22:38',
        file: false,
        comment: ''
      },
      {
        isChecked: true,
        title: ' 333333',
        mark: false,
        date: '',
        time: '19:20',
        file: true,
        comment: ' 跟那個誰吃飯啊，要不要吃飯'
      },
      {
        isChecked: false,
        title: ' 444444',
        mark: false,
        date: '2022/05/12',
        time: '08:38',
        file: true,
        comment: ' 滾去運動，動起乃，連滾帶動'
      },
      {
        isChecked: false,
        title: ' 5555555',
        mark: true,
        date: '2022/09/05',
        time: '22:38',
        file: false,
        comment: ''
      },
      {
        isChecked: true,
        title: ' 66666e',
        mark: false,
        date: '',
        time: '19:20',
        file: true,
        comment: ' 跟那個誰吃飯啊，要不要吃飯'
      }
    ]
  }),
  computed: {
    tasksLeft() {
      return this.todoLists.filter((todo) => {
        return !todo.isChecked;
      });
    },
    tasksProgress() {
      return this.todoLists.filter((todo) => {
        return todo.isChecked;
      });
    },
    tagFilter() {
      const tag = this.currentTag;

      if (tag === 'inProgress') {
        return this.tasksLeft;
      }

      if (tag === 'completed') {
        return this.tasksProgress;
      }

      return this.todoLists;
    },
    calculatedTasksLeft() {
      const tag = this.currentTag;

      if (tag === 'myTasks') {
        return this.tasksLeft;
      }

      return this.tagFilter;
    },
    taskStatusText() {
      const tag = this.currentTag;

      switch (tag) {
        case 'myTasks':
          return 'left';

        case 'inProgress':
          return 'left';

        case 'completed':
          return 'completed';

        default:
          return 'left';
      }
    }
  }
});
</script>

<style lang="scss">
.markCard {
  width: 620px;
  height: 102px;
}
</style>
