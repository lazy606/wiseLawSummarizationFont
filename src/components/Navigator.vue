<script setup lang="ts">
import {Menu, MenuItem} from "ant-design-vue";

</script>

<template>
  <Menu mode="horizontal">
    <MenuItem>
      <RouterLink to="/">
        文字
      </RouterLink>
    </MenuItem>
    <MenuItem>
      <RouterLink to="/fileInput">
        文档
      </RouterLink>
    </MenuItem>
  </Menu>
</template>

<style scoped>

</style>