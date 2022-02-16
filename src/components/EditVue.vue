<template>
  <!-- Edit Card -->
  <div v-if="isShowEditMode" class="flex flex-col justify-center items-center w-full">
    <div class="card-content bg-gray-light relative w-full">
      <div class="p-6">
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
                class="p-2 w-full resize-none comments-textarea"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="btn flex w-full absolute bottom-0 h-12">
        <button @click="closeEditMode" class="bg-primary-white w-1/2 text-red text-2xl font-medium">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EditVue',
  props: {
    isShowEditMode: { default: Boolean },
    currentTodo: { default: Object }
  },

  mounted() {
    this.todo = this.currentTodo;
  },

  data() {
    return {
      check: false,
      todo: {
        isChecked: true,
        title: ' 111111111',
        mark: true,
        date: '2022/05/12',
        time: '08:38',
        file: true,
        comment: ' 滾去運動，動起乃，連滾帶動'
      }
    };
  },
  methods: {
    closeEditMode() {
      this.$emit('isShowEditMode', false);
    }
  }
});
</script>

<style lang="scss">
input[type='checkbox'] {
  transform: scale(1.5);
}

.card-upper-title {
  height: 76px;
}

.card-content {
  height: 443px;

  .date,
  .time {
    &[contentEditable='true']:empty:not(:focus):before {
      content: attr(data-text);
      color: #c8c8c8;
      width: 162px;
      height: 35pxl;
    }
  }

  .comments-textarea {
    width: 413px;
    height: 104px;
  }
}
</style>
