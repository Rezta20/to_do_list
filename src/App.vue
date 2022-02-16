<template>
  <div class="bg-primary-gray w-full min-h-screen">
    <!-- Navbar -->
    <div class="bg-blue-light w-full flex justify-around items-center">
      <div class="navbar flex items-center text-2xl text-blue-dark text-center font-bold">
        <button
          @click="currentTag = 'myTasks'"
          class="navbar-items navbar-items-hover w-1/3"
          :class="{
            'navbar-border-bottom': currentTag === 'myTasks',
            'text-primary-white': currentTag === 'myTasks'
          }"
        >
          My Tasks
        </button>
        <button
          @click="currentTag = 'inProgress'"
          class="navbar-items navbar-items-hover w-1/3"
          :class="{
            'navbar-border-bottom': currentTag === 'inProgress',
            'text-primary-white': currentTag === 'inProgress'
          }"
        >
          In Progress
        </button>
        <button
          @click="currentTag = 'completed'"
          class="navbar-items navbar-items-hover w-1/3"
          :class="{
            'navbar-border-bottom': currentTag === 'completed',
            'text-primary-white': currentTag === 'completed'
          }"
        >
          Completed
        </button>
      </div>
    </div>

    <!-- Lists -->
    <div class="flex flex-col items-center card-width mx-auto">
      <div class="w-full">
        <button
          @click="isShowEditMode = true"
          v-if="!isShowEditMode"
          class="bg-primary-white w-full h-14 border-2 border-gray-middleLight rounded text-left title text-gray-middleLight px-4 my-4"
        >
          <font-awesome-icon :icon="['fas', 'plus']" class="" />
          Add Task
        </button>
        <Cards :isShowEditMode="isShowEditMode" class="my-4" :todoLists="newTodo" />
      </div>
      <Cards
        class="w-full"
        :currentTag="currentTag"
        :todoLists="todoLists"
        @markToggle="markToggle(todo)"
        :isShowEditMode="isShowEditMode"
      />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { defineComponent } from 'vue';
import Cards from '@/components/CardsVue.vue';

export default defineComponent({
  name: 'App',
  components: { Cards },
  data: () => ({
    currentTag: 'myTasks',
    isShowEditMode: false,
    todoLists: [
      {
        isChecked: true,
        title: ' 111111111',
        mark: true,
        date: '2022/05/12',
        time: '08:38',
        file: true,
        comment: ' 滾去運動，動起乃，連滾帶動',
        isEditing: false
      },
      {
        isChecked: false,
        title: ' 2222222',
        mark: true,
        date: '2022/09/05',
        time: '22:38',
        file: false,
        comment: '',
        isEditing: true
      },
      {
        isChecked: true,
        title: ' 333333',
        mark: false,
        date: '',
        time: '19:20',
        file: true,
        comment: ' 跟那個誰吃飯啊，要不要吃飯',
        isEditing: false
      },
      {
        isChecked: false,
        title: ' 444444',
        mark: false,
        date: '2022/05/12',
        time: '08:38',
        file: true,
        comment: ' 滾去運動，動起乃，連滾帶動',
        isEditing: true
      },
      {
        isChecked: false,
        title: ' 5555555',
        mark: true,
        date: '2022/09/05',
        time: '22:38',
        file: false,
        comment: '',
        isEditing: false
      },
      {
        isChecked: true,
        title: ' 66666e',
        mark: false,
        date: '',
        time: '19:20',
        file: true,
        comment: ' 跟那個誰吃飯啊，要不要吃飯',
        isEditing: true
      }
    ],
    newTodo: [
      {
        isChecked: true,
        title: ' new notessss',
        mark: false,
        date: '',
        time: '19:20',
        file: true,
        comment: ' 跟那個誰吃飯啊，要不要吃飯',
        isEditing: true
      }
    ]
  }),
  computed: {},
  methods: {
    markToggle(todo: object) {
      console.log('App', todo);
    }
  }
});
</script>

<style lang="scss">
/* Font-family Roboto  */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* Basic Tailwind Import  */
@tailwind base;
@tailwind components;
@tailwind utilities;

// root
html {
  font-size: 16px;
}

// Customized
// fonts
.title {
  @apply font-bold text-2xl;
}

.subTitle {
  @apply font-bold text-xl text-primary-black;
}

.paragraph {
  @apply font-normal text-base text-primary-black;
}

.remark {
  @apply font-semibold text-base text-gray-dark;
}

.placeholder {
  @apply font-normal text-base text-gray-dark;
}

.status {
  @apply font-medium italic text-2xl text-gray-middleLight;
}

// nav
.navbar {
  height: 76px;
  width: 620px;
}

.navbar-items {
  @apply h-full flex items-center justify-center;
  border-bottom: solid 5px #4a90e2;
}

.navbar-border-bottom {
  border-bottom: solid 5px #00408b;
}

.navbar-items-hover {
  @apply hover:border-blue-dark hover:text-primary-white;
}

.card-width {
  width: 620px;
}
</style>
