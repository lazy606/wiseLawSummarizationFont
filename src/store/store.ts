import {reactive, Ref, ref} from "vue";
import {OutputMethodItem} from "../classes";

export const store = reactive({
      uploadText: ref('') ,
      outputMethodItemList: ref<Array<OutputMethodItem>> ([
      {
        key: 'cause',
        title: '案由',
        content: '无'
      },
        {
        key: 'fact',
        title: '事实',
        content: '无'
      },
        {
        key: 'fact2',
        title: '事实2',
        content: '无'
      }
    ]),
    updateUploadText: function (content: Ref<string>): void {
      this.uploadText = content
    },
    updateOutputItemList: function (itemList: Array<OutputMethodItem>): void {
        this.outputMethodItemList = ref(itemList)
    },
})