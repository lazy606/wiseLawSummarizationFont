<script setup lang="ts">

import {h, ref} from "vue";
import {OutputMethodItem} from "developer-library";
import {EditOutlined, FileTextOutlined} from "@ant-design/icons-vue";
import {Tabs, TabPane} from "ant-design-vue";
import TextOutput from "./TextOutput.vue";
import QAOutput from "./QAOutput.vue";

const outputMethodItemList = ref<ArrayLike<OutputMethodItem>> ([
  {
    key: 'summarization',
    icon: () => h(EditOutlined),
    label: '摘要',
    title: '摘要',
    component: TextOutput
  },
    {
    key: 'qa',
    icon: () => h(FileTextOutlined),
    label: '问答',
    title: '问答',
    component: QAOutput
  }
]);

const activeKey = ref('summarization');
</script>

<template>
  <div id="oContainer">
    <Tabs v-model:activeKey="activeKey">
        <TabPane v-for="item in outputMethodItemList" :key="item.key" :tab="item.title">
          <component :is="item.component"/>
        </TabPane>
    </Tabs>
  </div>
</template>


<style scoped>
#oContainer {
  height: 100%;
  width: 50%;
}

#oContainer > :first-child {
  height: 100%;
  width: 100%;
}
</style>