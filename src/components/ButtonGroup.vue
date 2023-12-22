<template>
    <Flex gap="large" justify="space-around" align="center">
      <Upload>
        <Button>
          <UploadOutlined></UploadOutlined>
          上传文件
        </Button>
      </Upload>
      <Button type="primary" shape="circle">S</Button>
    </Flex>
</template>

<script>
import {Button, Flex, Upload} from "ant-design-vue"
import {UploadOutlined} from "@ant-design/icons-vue"
export default {
  name: "ButtonGroup",
  components: {Button, Flex, Upload, UploadOutlined}
}
</script>

<style scoped>

</style>