<template>
  <div>
    <div
      v-for="todo in marksFilter"
      :key="todo.title"
      class="w-full my-4 bg-gray-light flex flex-col items-start justify-around"
    >
      <!-- 未編輯時的 Layout -->
      <div class="p-4 w-full" :class="{ 'bg-yellow-light': todo.mark }">
        <div class="upper w-full flex justify-between items-center">
          <label
            for="todoItem"
            class="title px-2"
            :class="{ 'line-through': todo.isChecked, 'text-gray-delete': todo.isChecked }"
          >
            <input type="checkbox" name="todo" id="todoCheck" :v-model="todo.isChecked" class="mx-2" />
            {{ todo.title }}
          </label>
          <div class="flex">
            <button @click="markToggle(todo)">
              <font-awesome-icon
                :icon="['far', 'star']"
                class="hover:text-primary-white hover:bg-yellow-dark"
                :class="{ 'text-primary-white': todo.mark, 'bg-yellow-dark': todo.mark }"
              />
            </button>
            <button @click="editable">
              <font-awesome-icon :icon="['fas', 'pencil']" class="px-6 text-primary-black hover:text-blue-light" />
            </button>
          </div>
        </div>
        <div class="lower px-12 flex remark bg-gray-light w-full" :class="{ 'bg-yellow-light': todo.mark }">
          <div class="flex">
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
      </div>

      <!-- 正在編輯時的 Layout -->
      <!-- <Edit v-show="todo.isEditing" :currentTodo="todo" :isShowEditMode="todo.isEditing" /> -->

      <!-- Edit Card -->
      <div v-show="todo.isEditing" class="flex flex-col justify-center items-center w-full">
        <div class="card-content bg-gray-light relative w-full">
          <div class="p-6 border-t-4 border-primary-gray">
            <div class="deadline">
              <div class="flex items-center subTitle">
                <font-awesome-icon :icon="['fas', 'calendar-days']" class="" />
                <h4 class="px-2">Deadline</h4>
              </div>
              <div class="flex my-1">
                <div
                  contentEditable="true"
                  data-text="yyyy / mm / dd"
                  class="date w-1/3 bg-primary-white rounded mx-4 px-2 py-1"
                >
                  {{ todo.date || '' }}
                </div>
                <div contentEditable="true" data-text="hh:mm" class="time w-1/3 bg-primary-white rounded px-2 py-1">
                  {{ todo.time || '' }}
                </div>
              </div>
            </div>
            <div class="File my-4">
              <div class="flex items-center subTitle">
                <font-awesome-icon :icon="['far', 'file']" class="" />
                <h4 class="px-2 l">File</h4>
              </div>
              <div class="flex">
                <label for="addFile" class="mx-4 my-2 w-auto">
                  <button class="text-primary-white bg-gray-middleLight w-6 h-6">
                    <font-awesome-icon :icon="['fas', 'plus']" class="" @click="$refs.file.click()" />
                  </button>
                  <input type="file" name="addFile" style="visibility: hidden" />
                </label>
              </div>
            </div>
            <div class="comment">
              <div class="flex items-center my-1 subTitle">
                <font-awesome-icon :icon="['far', 'comment']" class="" />
                <h4 class="px-2">Comment</h4>
              </div>
              <div class="flex">
                <label for="comments" class="mx-4">
                  <textarea
                    name="comments"
                    id=""
                    cols="60"
                    rows="10"
                    placeholder="Type your memo here..."
                    :value="todo.comment || ''"
                    class="p-2 w-full resize-none comments-textarea mb-10"
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="btn flex w-full absolute bottom-0 h-12">
            <button @click="closeEditMode(todo)" class="bg-primary-white w-1/2 text-red text-2xl font-medium">
              <font-awesome-icon :icon="['fas', 'xmark']" class="px-2" />
              Cancel
            </button>
            <button class="bg-blue-light w-1/2 text-primary-white text-2xl font-medium">
              <font-awesome-icon :icon="['fas', 'plus']" class="px-2" />
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>

    <p class="status mx-6">{{ calculatedTasksLeft.length }} tasks {{ taskStatusText }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Edit from '@/components/EditVue.vue';

export default defineComponent({
  name: 'CardsVue',
  components: {},
  props: {
    currentTag: {
      type: String,
      default: ''
    },
    todoLists: { type: Array, default: () => [] }
  },

  data: () => ({
    currentEdit: 0
  }),
  computed: {
    tasksLeft() {
      return this.todoLists.filter((todo: any) => {
        return !todo.isChecked;
      });
    },
    tasksProgress() {
      return this.todoLists.filter((todo: any) => {
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
    },
    marksFilter() {
      const marksArr = this.tagFilter.map((todo) => todo);

      return marksArr.sort((a: any, b: any) => {
        const mileSecondsOfA = +new Date(`${a.date} ${a.time}`) || 0;
        const mileSecondsOfB = +new Date(`${b.date} ${b.time}`) || 0;

        // 如果兩個標記狀態一樣時，比較時間排序
        if (a.mark === b.mark) {
          return mileSecondsOfB - mileSecondsOfA;
        }

        // 以標記為排序優先
        return a.mark === true ? -1 : 1;
      });
    }
  },
  methods: {
    closeEditMode(todo: object) {
      console.log('cards', todo);
      this.$emit('closeEditMode', todo);
    }
  }
});
</script>

<style lang="scss"></style>
