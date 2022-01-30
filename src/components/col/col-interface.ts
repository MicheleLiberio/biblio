import { TemplateRef } from "@angular/core";

export interface ColInterface {
    id: string
    title: string
    field: string
    sort:  boolean
    typeSort: string
    img: string
    template: TemplateRef<any>
}
