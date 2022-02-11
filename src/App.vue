<template>
  <div class="">
    <navbar class="">
      <div class="">My Tasks</div>
      <div class="">In Progress</div>
      <div class="">Completed</div>
    </navbar>
  </div>
  <Card />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/CardVue.vue';

export default defineComponent({
  name: 'App',
  components: { Card },

  computed: {
    currentMode() {
      return 'myTasks';
    }
  }
});
</script>

<style lang="scss"></style>
