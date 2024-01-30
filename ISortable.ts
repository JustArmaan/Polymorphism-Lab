export interface ISortable {
  length: number;
  compare(leftPos: number, rightPos: number): boolean;
  swap(leftPost: number, rightPos: number): void;
}
