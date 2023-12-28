import {reactive, ref} from "vue";
import {OutputMethodItem} from "../classes";

export const store = reactive({
    outputMethodItemList: ref<Array<OutputMethodItem>>([]),
    addOutputMethodItemList: function (itemList: Array<OutputMethodItem>): void {
        this.outputMethodItemList.value.concat(itemList)
    }
})