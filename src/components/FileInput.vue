<script setup lang="ts">
import {Flex, UploadDragger, Button} from "ant-design-vue";
import {InboxOutlined} from "@ant-design/icons-vue";
import {useApiStore} from "../store/apiStore.ts";
import * as PDF from "pdfjs-dist";
import VuePdfApp from 'vue3-pdf-app'
import 'vue3-pdf-app/dist/icons/main.css'
PDF.GlobalWorkerOptions.workerSrc = '../../../node_modules/pdfjs-dist/build/pdf.worker.js'
import mammoth from 'mammoth';
import {ref} from "vue";


const apiStore = useApiStore();
const fileFormat = ref('');
const renderContent = ref('');

const renderFileContent = async function (file: File) {
  let postfix = getPostfix(file.name);
  fileFormat.value = postfix;
  switch (postfix) {
    case '.txt':
      renderContent.value = await file.text();
      break;
    case '.pdf':
      const getPDFRenderContent = () => {
        return new Promise<string>(function (resolve) {
          let fileReader = new FileReader();
          fileReader.onload = e => {
            let readRes = <string>fileReader.result;
            let data = atob(readRes.substring(readRes.indexOf(',') + 1));
            resolve(data);
          }
          fileReader.readAsDataURL(file);
        })
      }
      renderContent.value = await getPDFRenderContent();
      break;
    case '.docx':
      const getRenderContent = () => {
        return new Promise<String>(function (resolve) {
          let fileReader = new FileReader();
          fileReader.onload = async e => {
            let result = <ArrayBuffer>fileReader.result;
            resolve((await mammoth.convertToHtml({arrayBuffer: result})).value);
          }
          fileReader.readAsArrayBuffer(file);
        })
      };
      renderContent.value = await getRenderContent();
  }
}

const  getPostfix = function (filename: string) {
  let indexOfSeperator = filename.lastIndexOf('.');
  console.log("输入文件后缀为"+filename.slice(indexOfSeperator));
  return filename.slice(indexOfSeperator);
}

const resolveFile = async function (file: File): Promise<string> {
  let postfix = getPostfix(file.name);
  switch (postfix) {
    case '.txt':
      return await file.text();
    // PDF.js默认使用URL方式获取文件内容，所以要进行base64编码
    case '.pdf':
      const getPDF = () => {
        return new Promise<String>(function (resolve) {
            let fileReader = new FileReader();
            fileReader.onload = async e => {
              let readRes = <string>fileReader.result;
              let data = atob(readRes.substring(readRes.indexOf(',') + 1));
              let pdfData = PDF.getDocument({
                data: data,
                cMapUrl: '',
                cMapPacked: true
            });
            let fullText = '';
            let pdf = await pdfData.promise;
            for (let i = 1; i < pdf.numPages; i++) {
              let page = await pdf.getPage(i);
              let textContent = await page.getTextContent();
              fullText += textContent.items.map((item: any) => item.str.trim()).join();
            }
            resolve(fullText);
          }
          fileReader.readAsDataURL(file);
        });
      };
      return await getPDF();
    // mammoth.js默认读取二进制字节流， 所以要将文本编码为二进制字节流
    case '.docx':
      const getDOCX = () => {
        return new Promise<String>(function (resolve) {
            let fullText;
            let fileReader = new FileReader();
            fileReader.onload = async e => {
              let result = <ArrayBuffer>e.target.result;
              fullText = (await mammoth.extractRawText({arrayBuffer: result})).value;
              resolve(fullText);
            };
            fileReader.readAsArrayBuffer(file);
        });
      }
      return await getDOCX();
  }
}

const uploadRequestContent = async function (uploadFile) {
  let file: File = uploadFile.file;
  await renderFileContent(file);
  apiStore.setRequestContent(await resolveFile(file));
  console.log(apiStore.requestContent);
  await apiStore.getAllSummarization();
}
</script>

<template>
  <div id="uploadContainer" v-if="fileFormat.length == 0">
    <UploadDragger name="file" :multiple="false" :customRequest="uploadRequestContent"  accept=".txt, .docx, .pdf">
      <div id="uploadHintContainer">
        <Flex vertical justify="center" align="center">
          <inbox-outlined style="font-size: 12vh;" />
          <p>点击或拖动上传文件</p>
          <p>
            支持上传.txt\.docx\.pdf类型文件，一次只支持上传一个文件
          </p>
        </Flex>
      </div>
    </UploadDragger>
  </div>
  <div v-else-if="fileFormat == '.txt'" id="txtContainer">
    <div>
      {{renderContent}}
    </div>
  </div>
  <div v-else-if="fileFormat == '.pdf'" id="pdfContainer">
    <VuePdfApp pdf="https://dbgroup.cs.tsinghua.edu.cn/ligl/papers/joc19-ai4db-cn.pdf"></VuePdfApp>
  </div>
  <div v-else-if="fileFormat == '.docx'" id="docxContainer">
    <div v-html="renderContent"></div>
  </div>
  <div v-if="fileFormat.length !== 0" id="buttonContainer">
    <Flex gap="large" justify="center">
      <Button type="primary" @click="() => {fileFormat = ''; renderContent = '';}" :disabled="apiStore.isRequesting">
        清除文件
      </Button>
    </Flex>
  </div>
</template>

<style scoped>
#uploadContainer {
  height: 100%;
  width: 100%;
  margin-top: 15vh;
}

#uploadHintContainer {
  width: 100%;
  height: 100%;
}

#uploadHintContainer > :first-child {
  width: 100%;
  height: 100%;
}

#txtContainer {
  width: 100%;
}

#pdfContainer {
  width: 100%;
}

#txtContainer {
  width: 100%;
}

#txtContainer > :first-child {
  height: 75vh;
  overflow-y: auto;
}

#pdfContainer {
  width: 100%;
}

#docxContainer {
  width: 100%;
}

#docxContainer > :first-child {
  height: 75vh;
  overflow-y: auto;
}

#buttonContainer {
  width: 100%;
  margin-top: 3vh;
}
</style>