<script setup lang="ts">
import {UploadDragger} from "ant-design-vue";
import {InboxOutlined} from "@ant-design/icons-vue"

</script>

<template>
  <div id="fileInputContainer">
      <UploadDragger name="file" :multiple="true">
        <p>
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="upload-text">Click or drag file to this area to upload</p>
        <p class="upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
    </UploadDragger>
  </div>
</template>

<style scoped>
#fileInputContainer {
  height: 30vh;
  width: 100%;
}

#fileInputContainer > :first-child {
  height: 100%;
  width: 100%;
}

</style>