declare module 'developer-library' {

    import {Component} from "vue";

    interface MethodItem {
        key: string,
        icon: Function,
        label: string,
        title: string
    }

    interface InputMethodItem extends MethodItem{
        component: Component
    }

    interface OutputMethodItem extends MethodItem{
        component: Component
    }
}