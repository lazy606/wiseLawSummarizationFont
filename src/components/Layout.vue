<script setup lang="ts">
import {Empty, Flex, Card, Tabs, TabPane, Spin} from "ant-design-vue";
import {h, ref} from "vue";
import {HistoryOutlined, TeamOutlined, EditOutlined, FileTextOutlined} from "@ant-design/icons-vue"
import Header from "./Header.vue";
import {InputMethodItem, OutputMethodItem} from "../classes";
import TextInput from "./TextInput.vue";
import FileInput from "./FileInput.vue";
import {useApiStore} from "../store/apiStore.ts";


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

const inputActiveKey = ref('text');

const apiStore = useApiStore()
</script>

<template>
  <div id="globalContainer">
    <Flex vertical justify="flex-start" align="center">
      <div id="headerContainer">
        <Header/>
      </div>

      <div id="functionContainer">
        <Flex justify="space-around" align="flex-start" gap="large">
            <div id="inputContainer">
              <Tabs v-model:activeKey="inputActiveKey" tabPosition="left">
                <TabPane v-for="item in inputMethodItemList" :key="item.key" :tab="item.title">
                  <component :is="item.component" class="inputItem"/>
                </TabPane>
              </Tabs>
            </div>

          <div id="outputContainer">
            
            <Flex vertical justify="space-around" gap="large" >
              <div id="emptyStatusContainer" v-if="apiStore.responseContent.length == 0 && !apiStore.isRequesting">
                <Empty/>
              </div>
              <div id="spinContainer" v-else-if="apiStore.responseContent == 0 && apiStore.isRequesting">
                <Spin size="large"/>
              </div>
              <div class="outputItem" v-for="item in apiStore.responseContent" :key="item.key" v-else-if="!apiStore.responseContent == 0">
                <Card :title="item.title" hoverable :headStyle="{'text-align': 'left'}" :bodyStyle="{'text-align': 'start'}">
                  {{item.content}}
                </Card>
              </div>
            </Flex>
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
  margin-top: 2vh;
}

#inputContainer {
  height: 100%;
  width: 65%;
}

#inputContainer > :first-child {
  height: 100%;
  width: 100%;
}

.inputItem {
  height: 85vh;
}

#outputContainer {
  height: 100%;
  width: 30%;
}

#outputContainer > :first-child {
  height: 100%;
  width: 100%;
}

.outputItem {
  height: 20vh;
}

.outputItem > :first-child {
  width: 100%;
  height: 100%;
}
</style>


