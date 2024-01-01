import {defineStore} from "pinia";
import {OutputMethodItem} from "../classes";
import {ref} from "vue";
import {getCause, getFact, getLaws} from "../apis/api.ts";


export const useApiStore = defineStore('api', {
    state: () => {
        return {
            requestContent: ref(''),
            isRequesting: ref(false),
            responseContent: ref<Array<OutputMethodItem | void>> ([]),
            uploadFileDisplayItem: ref({uploadFileFormat: '', uploadFileContent: File})
        }
    },
    actions: {
        setRequestContent(text: string): void {
            this.requestContent = text
        },
        switchIsRequesting(): void{
            this.isRequesting = !this.isRequesting;
        },
        async getAllSummarization(): Promise<void> {
            this.responseContent = [];
            this.switchIsRequesting();
            getCause(this.requestContent)
                .then(data => {
                    this.responseContent.push(data);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    getFact(this.requestContent)
                        .then(data => {
                            this.responseContent.push(data);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                        .finally(() => {
                            getLaws(this.requestContent)
                                .then(data => {
                                    this.responseContent.push(data);
                                })
                                .catch(err => {
                                    console.log(err);
                                })
                                .finally(() => {
                                     this.switchIsRequesting();
                                })
                        })
                })


        },
        setUploadFileDisplayItem(format: string, content: File): void {
            this.uploadFileDisplayItem.uploadFileFormat = format;
            this.uploadFileDisplayItem.uploadFileContent = content;
        },
    }
})