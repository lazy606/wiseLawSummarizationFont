<script setup lang="ts">
import {Textarea} from "ant-design-vue";

</script>

<template>
  <div id="outputContainer">
      <Textarea value="总结的文本"></Textarea>
  </div>
</template>

<style scoped>
#outputContainer {
    height: 30vh;
    width: 50%;
}

#outputContainer > :first-child {
  height: 100%;
  width: 100%;
}
</style>