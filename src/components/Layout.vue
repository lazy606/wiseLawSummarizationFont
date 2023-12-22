<template>
  <div id="globalContainer">
    <Flex vertical gap="large" justify="center"  align="center">
      <div id="headerContainer">
        <Header/>
      </div>

      <div id="functionContainer">
        <Flex vertical justify="flex-start">
          <div id="navigatorContainer">
            <Navigator/>
          </div>
          <div id="ioContainer">
            <Flex gap="large" justify="center" align="center">
              <TextInput/>
              <TextOutput/>
            </Flex>
          </div>
        </Flex>
      </div>

    </Flex>
  </div>
</template>

<script>
import {Button, Flex} from "ant-design-vue";
import TextInput from "./TextInput.vue";
import TextOutput from "./TextOutput.vue";
import Header from "./Header.vue";
import Navigator from "./Navigator.vue";
export default {
  name: "Layout",
  components: {Navigator, Header, TextOutput, TextInput, Button, Flex}
}
</script>

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
}

#functionContainer > :first-child {
  width: 100%;
}

#navigatorContainer {
  width: 100%;
}

#navigatorContainer > :first-child {
  width: 100%;
}

#ioContainer {
  width: 90%;
}

#ioContainer > :first-child {
  width: 100%;
}
</style>


