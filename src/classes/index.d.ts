import {Component} from "vue";

interface MethodItem {
    key: string,
    icon: Function,
    label: string,
    title: string
}

interface InputMethodItem extends MethodItem{
    component: string
}

interface OutputMethodItem {
    key: string,
    title: string,
    content: string
}
