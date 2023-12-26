<script setup lang="ts">
import {Textarea} from "ant-design-vue";
import {post} from '../apis/api'



</script>


<template>
  <div id="inputContainer">
    <Textarea placeholder="请输入要进行摘要的文本或上传文件" @pressEnter=""></Textarea>
  </div>
</template>

<style scoped>
#inputContainer {
  height: 30vh;
  width: 100%;
}

#inputContainer > :first-child {
  height: 100%;
  width: 100%;
}

</style>