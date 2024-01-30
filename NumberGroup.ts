import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable {
  data: number[]; // [5,2,3,4]
  constructor(data: number[]) {
    this.data = data;
  }
  get length() {
    return this.data.length;
  } 
  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos] > this.data[rightPos];
  }
  swap(leftPost: number, rightPos: number): void {
    let tempLeft = this.data[leftPost];
    tempLeft = this.data[rightPos];
    this.data[rightPos] = tempLeft;
  }
}
