<template>
  <div id="outputContainer">
      <Textarea value="总结的文本"></Textarea>
  </div>
</template>

<script lang="ts">
import {Textarea, Flex} from "ant-design-vue";

export default {
  name: "TextOutput",
  components: {Textarea, Flex}
}
</script>

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