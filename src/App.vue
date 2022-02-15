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
      <Edit class="my-8" />
      <Cards :currentTag="currentTag" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Edit from '@/components/EditVue.vue';
import Cards from '@/components/CardsVue.vue';

export default defineComponent({
  name: 'App',
  components: { Edit, Cards },
  data: () => ({
    currentTag: 'myTasks'
  }),
  computed: {}
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
