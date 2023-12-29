<script setup lang="ts">
import {Textarea} from "ant-design-vue";
import {ref, watch} from "vue";
import {store} from "../store/store.ts";

const inputText = ref('');
let timer = null;

watch(inputText,(curText, oldText) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    store.updateUploadText(inputText);
  }, 5000);
});
</script>


<template>
  <Textarea placeholder="请输入文本..." v-model:value="inputText"></Textarea>
</template>

<style scoped>


</style>