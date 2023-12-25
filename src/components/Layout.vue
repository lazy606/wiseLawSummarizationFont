<script setup lang="ts">
import {Button, Flex} from "ant-design-vue";
import {h, ref} from "vue";
import {HistoryOutlined, TeamOutlined, EditOutlined, FileTextOutlined} from "@ant-design/icons-vue"
import Header from "./Header.vue";
import Input from "./Input.vue";
import Output from "./Output.vue";


function getInputMethodItemList() {
  return null;
}

function getOutputMethodItemList() {
  return null;
}
function getSummarization(path: String): String {
  return null;
}

function getHistory() {
  return null;
}

function postAdvice() {
  return null;
}

</script>

<template>
  <div id="globalContainer">
    <Flex vertical gap="large" justify="center"  align="center">
      <div id="headerContainer">
        <Header/>
      </div>

      <div id="functionContainer">
        <Flex gap="large" justify="center" align="center">
          <Input/>
          <Output/>
        </Flex>
      </div>

      <div id="footerContainer" >
        <Flex justify="center" gap="large" align="center">
          <div id="historyContainer">
            <Flex vertical justify="center" align="center" gap="small">
              <Button shape="circle" :icon="h(HistoryOutlined)" size="large"></Button>
              <span>历史记录</span>
            </Flex>
          </div>
          <div id="adviceContainer">
            <Flex vertical justify="center" align="center" gap="small">
              <Button shape="circle" :icon="h(TeamOutlined)" size="large"></Button>
              <span>提供建议</span>
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
  width: 90%;
  height: 45vh;
}

#functionContainer > :first-child {
  width: 100%;
  height: 100%;
}

#ioContainer {
  width: 90%;
}

#ioContainer > :first-child {
  width: 100%;
}

#footerContainer {
  width: 80%;
  height: 15vh;
}

#footerContainer > :first-child {
  width: 100%;
  height: 100%;
}

#historyContainer {
  height: 100%;
}

#historyContainer > :first-child {
  width: 100%;
  height: 100%;
}

#adviceContainer {
  height: 100%;
}

#adviceContainer > :first-child {
  width: 100%;
  height: 100%;
}
</style>


