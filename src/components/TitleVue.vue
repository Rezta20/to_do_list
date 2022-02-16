<template>
  <div class="upper w-full flex justify-between items-center bg-yellow-light">
    <label
      for="todoItem"
      class="title px-2"
      :class="{ 'line-through': currentTodo.isChecked, 'text-gray-delete': currentTodo.isChecked }"
    >
      <input type="checkbox" name="todo" id="todoCheck" :v-model="currentTodo.isChecked" class="mx-2" />
      {{ currentTodo.title }}
    </label>
    <div class="flex">
      <button @click="markToggle(currentTodo)">
        <font-awesome-icon
          :icon="['far', 'star']"
          class="hover:text-primary-white hover:bg-yellow-dark"
          :class="{ 'text-primary-white': currentTodo.mark, 'bg-yellow-dark': currentTodo.mark }"
        />
      </button>
      <button @click="editable">
        <font-awesome-icon :icon="['fas', 'pencil']" class="px-6 text-primary-black hover:text-blue-light" />
      </button>
    </div>
  </div>
  <div class="lower px-12 flex justify-around remark bg-yellow-light w-full">
    <div>
      <div v-if="currentTodo.date" class="date-wrapper flex items-center">
        <font-awesome-icon :icon="['fas', 'calendar-days']" class="" />
        <p class="px-1">5/12</p>
      </div>
      <div v-if="currentTodo.file" class="file-wrapper px-2">
        <font-awesome-icon :icon="['far', 'file']" class="" />
      </div>
      <div v-if="currentTodo.comment" class="comment-wrapper px-2">
        <font-awesome-icon :icon="['far', 'comment']" class="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleVue',
  props: {
    currentTodo: {
      default: Object
    }
  },
  methods: {
    markToggle(currentTodo: object) {
      console.log('title', currentTodo);
      this.$emit('markToggle', currentTodo);
    },
    editable() {
      //   this.currentTodo.isEditing = true;
    }
  }
});
</script>
<style lang="scss"></style>
