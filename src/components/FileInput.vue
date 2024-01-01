<script setup lang="ts">
import {Flex, UploadDragger} from "ant-design-vue";
import {InboxOutlined} from "@ant-design/icons-vue";
import {useApiStore} from "../store/apiStore.ts";
import * as PDF from "pdfjs-dist";
PDF.GlobalWorkerOptions.workerSrc = '../../../node_modules/pdfjs-dist/build/pdf.worker.js'
import mammoth from 'mammoth';


const apiStore = useApiStore();

const  getPostfix = function (filename: string) {
  let indexOfSeperator = filename.lastIndexOf('.');
  console.log("输入文件后缀为"+indexOfSeperator);
  return filename.slice(indexOfSeperator);
}

const resolveFile = async function (file: File): Promise<string> {
  let postfix = getPostfix(file.name);
  switch (postfix) {
    case '.txt':
      apiStore.setUploadFileDisplayItem('.txt', file);
      file.text().then(result => {
        return result
      });
      break;
    // PDF.js默认使用URL方式获取文件内容，所以要进行base64编码
    case '.pdf':
      apiStore.setUploadFileDisplayItem('.pdf', file);
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
      apiStore.setUploadFileDisplayItem('.docx', file);
      const getDOCX = () => {
        return new Promise<String>(function (resolve, reject) {
            let fullText;
            let fileReader = new FileReader();
            fileReader.onload = async e => {
              let result = <ArrayBuffer>e.target.result;
              fullText = (await mammoth.extractRawText({arrayBuffer: result})).value;
              resolve(fullText);
            }
            fileReader.readAsArrayBuffer(file);
        });
      }
      return await getDOCX();
  }
}

const uploadRequestContent = async function (uploadFile) {
  let file: File = uploadFile.file;
  console.log(await resolveFile(file));
  apiStore.setRequestContent(await resolveFile(file));
  await apiStore.getAllSummarization();
}
</script>

<template>
  <div id="uploadContainer">
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
</style>