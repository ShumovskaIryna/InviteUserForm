<template>
  <div class="footer">
    <SubmitButtonVue />
  </div>
</template>

<script>
import SubmitButtonVue from './SubmitButton.vue';
export default {
    components: {SubmitButtonVue},
}
</script>

<style>
.footer {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 40px;
  padding-top: 10px;
  border-top: 2px solid rgb(225, 225, 225);
}
</style>