import type { RouteParamsRawGeneric } from "vue-router";

export interface RouterLink {
    name: string;
    path: string;
    component: any;
    props?: any;
    title: string;
    visible: boolean;
    icon: string;
}