<script setup lang="ts">
import {Textarea} from "ant-design-vue";
import {ref} from "vue";
import {OutputMethodItem} from "../classes";

const inputText = ref('');

const getOutput = function (input: String): Array<OutputMethodItem> | null {
  console.log(input)
  return null;
}
</script>


<template>
  <Textarea placeholder="请输入文本，按回车查询内容..." v-model:value="inputText"></Textarea>
</template>

<style scoped>


</style>