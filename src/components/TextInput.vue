<template>
  <div id="inputContainer">
    <Textarea placeholder="请输入要进行摘要的文本或上传文件" allowClear></Textarea>
  </div>
</template>

<script lang="ts">
import {Textarea, Flex} from "ant-design-vue";


export default {
  name: "TextInput",
  components: {Textarea, Flex}
}
</script>

<style scoped>
#inputContainer {
  height: 30vh;
  width: 50%;
}

#inputContainer > :first-child {
  height: 100%;
  width: 100%;
}

</style>