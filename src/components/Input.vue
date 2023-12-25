<script setup lang="ts">
import {h, ref} from "vue";
import {Tabs, TabPane} from "ant-design-vue";
import {EditOutlined, FileTextOutlined} from "@ant-design/icons-vue";
import {InputMethodItem} from "developer-library";
import TextInput from "./TextInput.vue";
import FileInput from "./FileInput.vue";


const inputMethodItemList = ref<ArrayLike<InputMethodItem>> ([
  {
    key: 'text',
    icon: () => h(EditOutlined),
    label: '文本',
    title: '文本',
    component: TextInput
  },
    {
    key: 'file',
    icon: () => h(FileTextOutlined),
    label: '文件',
    title: '文件',
    component: FileInput
  }
]);

const activeKey = ref('text');
</script>

<template>
  <div id="iContainer">
    <Tabs v-model:activeKey="activeKey">
      <TabPane class="item-class"  v-for="item in inputMethodItemList" :key="item.key" :tab="item.title">
          <component :is="item.component"/>
      </TabPane>
    </Tabs>
  </div>
</template>



<style scoped>
#iContainer {
  height: 100%;
  width: 50%;
}

#iContainer > :first-child {
  height: 100%;
  width: 100%;
}

.item-class {
  height: 100%;
  width: 100%;
}
</style>