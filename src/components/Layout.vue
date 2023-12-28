<script setup lang="ts">
import {Button, Flex, Menu, Tabs, TabPane} from "ant-design-vue";
import {h, ref} from "vue";
import {HistoryOutlined, TeamOutlined, EditOutlined, FileTextOutlined} from "@ant-design/icons-vue"
import Header from "./Header.vue";
import Input from "./Input.vue";
import Output from "./Output.vue";
import {InputMethodItem, OutputMethodItem} from "../classes";
import TextInput from "./TextInput.vue";
import FileInput from "./FileInput.vue";
import TextOutput from "./TextOutput.vue";
import QAOutput from "./QAOutput.vue";


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

const outputMethodItemList = ref<ArrayLike<OutputMethodItem>> ([
  {
    key: 'cause',
    icon: () => h(EditOutlined),
    label: '案由',
    title: '案由',
    component: TextOutput
  },
    {
    key: 'fact',
    icon: () => h(FileTextOutlined),
    label: '事实',
    title: '事实',
    component: QAOutput
  }
]);

const inputActiveKey = ref('text');
const outputActiveKey =  ref('summarization');
</script>

<template>
  <div id="globalContainer">
    <Flex vertical justify="flex-start" align="center">
      <div id="headerContainer">
        <Header/>
      </div>

      <div id="functionContainer">
        <Flex justify="space-between" align="flex-start" gap="large">
            <div id="inputContainer">
              <Tabs v-model:activeKey="inputActiveKey" tabPosition="left">
                <TabPane v-for="item in inputMethodItemList" :key="item.key" :tab="item.title" >
                  <component :is="item.component"/>
                </TabPane>
              </Tabs>
            </div>

            <div id="buttonGroupContainer">

            </div>

          <div id="outputContainer">

          </div>
        </Flex>
      </div>

    </Flex>
  </div>
</template>

<style scoped>
#globalContainer {
  width: 100%;
  height: 100%;
}

#globalContainer > :first-child {
  width: 100%;
  height: 100%;
}

#headerContainer {
  width: 100%;
  height: 15%;
}

#headerContainer > :first-child {
  width: 100%;
  height: 100%;
}

#functionContainer {
  width: 100%;
  height: 85vh;
}

#functionContainer > :first-child {
  width: 100%;
  height: 100%;
}

#inputContainer {
  height: 100%;
  width: 70%;
}

#inputContainer > :first-child {
  height: 100%;
  width: 100%;
}

#buttonGroupContainer {
  height: 100%;
  width: 5%;
}

#buttonGroupContainer > :first-child {
  height: 100%;
  width: 100%;
}

#outputContainer {
  height: 100%;
  width: 30%;
}

#outputContainer > :first-child {
  height: 100%;
  width: 100%;
}
</style>


