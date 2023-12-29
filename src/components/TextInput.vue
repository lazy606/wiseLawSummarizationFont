<script setup lang="ts">
import {Textarea} from "ant-design-vue";
import {ref, watch} from "vue";
import {useApiStore} from "../store/apiStore.ts";

const inputText = ref('');
let timer = null;
const apiStore = useApiStore();

watch(inputText,(curText, oldText) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    apiStore.setRequestContent(inputText.value);
    apiStore.getAllSummarization();
  }, 5000);
});
</script>


<template>
  <Textarea placeholder="请输入文本..." v-model:value="inputText"></Textarea>
</template>

<style scoped>


</style>