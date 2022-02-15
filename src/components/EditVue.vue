<template>
  <button
    @click="isShowEditMode = true"
    v-if="!isShowEditMode"
    class="bg-primary-white w-full h-14 border-2 border-gray-middleLight rounded text-left title text-gray-middleLight px-4 my-4"
  >
    <font-awesome-icon :icon="['fas', 'plus']" class="" />
    Add Task
  </button>
  <!-- Edit Card -->
  <div v-if="isShowEditMode" class="flex flex-col justify-center items-center w-full my-4">
    <div class="card-upper-title bg-gray-light flex items-center justify-between p-4 w-full">
      <label for="todoItem" class="title px-2">
        <input type="checkbox" name="todo" id="todoCheck" v-model="check" class="mx-2" />
        <input
          type="text"
          name="todo"
          id="todoItem"
          placeholder="Type Something Here..."
          class="placeholder-dark-gray title p-2 mx-1.5 bg-gray-light focus:outline-none"
        />
      </label>
      <div>
        <font-awesome-icon :icon="['far', 'star']" class="hover:text-primary-white hover:bg-yellow-dark" />
        <font-awesome-icon :icon="['fas', 'pencil']" class="px-6 text-primary-black hover:text-blue-light" />
      </div>
    </div>
    <div class="card-lower-content bg-gray-light my-1 relative w-full">
      <div class="content mx-8 p-4">
        <div class="deadline">
          <div class="flex items-center subTitle">
            <font-awesome-icon :icon="['fas', 'calendar-days']" class="" />
            <h4 class="px-2">Deadline</h4>
          </div>
          <div class="flex my-1">
            <div
              contentEditable="true"
              data-text="yyyy/mm/dd"
              class="date w-1/3 bg-primary-white rounded mx-4 px-2 py-1"
            ></div>
            <div contentEditable="true" data-text="hh:mm" class="time w-1/3 bg-primary-white rounded px-2 py-1"></div>
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
                class="p-2 w-full resize-none comments-textarea"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
      <div class="btn flex w-full absolute bottom-0 h-12">
        <button @click="isShowEditMode = false" class="bg-primary-white w-1/2 text-red text-2xl font-medium">
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
  data() {
    return {
      isShowEditMode: false,
      check: false
    };
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

.card-lower-content {
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
