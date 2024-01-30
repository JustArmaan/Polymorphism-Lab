import { CharecterGroup } from "./CharacterGroup";
import { LinkedListGroup } from "./LinkedListGroup";
import { NumberGroup } from "./NumberGroup";
import { SortUtil } from "./app";

const linkedList1 = new LinkedListGroup();
linkedList1.add(4);
linkedList1.add(2);
linkedList1.add(3);
linkedList1.add(1);

const numberList1 = new NumberGroup([4, 2, 3, 1]);
const string1 = new CharecterGroup("xyzabc");

const test1 = new SortUtil(linkedList1);
test1.sort();
console.log(test1.collection)

const test2 = new SortUtil(numberList1);
test2.sort();
console.log(test2.collection)

const test3 = new SortUtil(string1);
test3.sort();
console.log(test3.collection)