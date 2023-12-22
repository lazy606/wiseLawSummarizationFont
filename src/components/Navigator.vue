<template>
  <Menu mode="horizontal">
    <MenuItem>文字</MenuItem>
    <MenuItem>文档</MenuItem>
  </Menu>
</template>

<script>
import {Menu, MenuItem} from "ant-design-vue";

export default {
  name: "Navigator",
  components: {Menu, MenuItem}
}
</script>

<style scoped>

</style>