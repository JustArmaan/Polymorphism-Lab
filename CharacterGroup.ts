import { ISortable } from "./ISortable";

export class CharecterGroup implements ISortable{
    data: string;
    constructor (data: string){
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftPos: number, rightPos: number): boolean {
        return this.data.charCodeAt(leftPos) > this.data.charCodeAt(rightPos);
    }
    swap(leftPost: number, rightPos: number): void {
        let stringArray = this.data.split("");

        let tempLeft = stringArray[leftPost];
        let tempRight = stringArray[rightPos];

        let tmp = tempLeft;
        tempLeft = tempRight;
        tempRight = tmp;

        this.data = stringArray.join("");
    }

}