import { ISortable } from "./ISortable";

class CharecterGroup implements ISortable{
    get length() {
        return 5;
    }
    compare(leftPos: number, rightPos: number): boolean {
        throw new Error("Method not implemented.");
    }
    swap(leftPost: number, rightPos: number): void {
        throw new Error("Method not implemented.");
    }
    
}