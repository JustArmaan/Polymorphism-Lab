import { ISortable } from "./ISortable";

class Node {
    next: Node | null = null;
    data: number;
    constructor(data: number) {
      this.data = data;
    }
  }
  
  export class LinkedListGroup implements ISortable {
    head: Node | null = null;
  
    // Create Node out of data and attach to end of list
    add(data: number): void {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
  
    // Should return number of Nodes in List
    get length(): number {
      // implement this part yourself
      let n = 0;
      if (!this.head) {
        return n;
      } 
      let node: Node | null = this.head;
      while (node) {
        n = n + 1
        node = node.next;
      }
      return n;
    }
  
   // Convenience method that returns a Node at a given index
    at(index: number): Node {
      if (!this.head) {
        throw new Error("Error: Index out of bounds");
      }
      let counter = 0;
      let node: Node | null = this.head;
      while (node) {
        if (counter === index) {
          return node;
        }
        counter++;
        node = node.next;
      }
      throw new Error("Error: Index out of bounds");
    }
  
    compare(leftPos: number, rightPos: number): boolean {
      return this.at(leftPos).data > this.at(rightPos).data;
    }
  
    swap(leftPos: number, rightPos: number): void {
        if (this.compare(leftPos, rightPos)) {
            let leftData = this.at(leftPos).data;
            let rightData = this.at(rightPos).data;

            this.at(leftPos).data = rightData;
            this.at(rightPos).data = leftData;
        }
    }
  
    print(): void {
      if (!this.head) {
        return;
      }
      let node: Node | null = this.head;
      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }

  const l1 = new LinkedListGroup()
  l1.add(1)
  l1.add(2)
  console.log(l1.length)