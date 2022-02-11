<template>
  <div class="outside-wrapper">
    <div class="title-wrapper title">
      <div class="label-wrapper">
        <label for="task" class="label">
          <input type="checkbox" name="task" id="task" v-model="isChecked" />
          <input type="text" name="" id="" placeholder="Type Something Here..." />
        </label>
      </div>
      <div class="icons-wrapper">
        <div class="star">
          <font-awesome-icon icon="user-secret" />
        </div>
        <div class="edit-pencil">X</div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="deadline"></div>
      <div class="file"></div>
      <div class="comment"></div>
      <div class="btn-wrapper">
        <div class="btn cancel">x cancel</div>
        <div class="btn add">+ add Task</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardsVue',
  data() {
    return {
      isChecked: false
    };
  }
});
</script>

<style lang="scss">
.outside-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;

  .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .label {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icons-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .content-wrapper {
    .btn-wrapper {
      display: flex;
    }
  }
}
</style>
