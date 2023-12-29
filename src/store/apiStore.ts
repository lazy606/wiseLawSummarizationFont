import {defineStore} from "pinia";
import {OutputMethodItem} from "../classes";
import {ref} from "vue";
import {getCause, getFact, getLaws} from "../apis/api.ts";

export const useApiStore = defineStore('api', {
    state: () => {
        return {
            requestContent: ref(''),
            isRequesting: ref(false),
            responseContent: ref<Array<OutputMethodItem | void>> ([
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
            let cause = await getCause(this.requestContent);
            let fact = await getFact(this.requestContent);
            let laws = await getLaws(this.requestContent);
            this.responseContent.concat([cause, fact, laws]);
            this.switchIsRequesting();
        }
    }
})