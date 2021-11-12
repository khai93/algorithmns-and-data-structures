import { BubbleSort } from "./algorithms/BubbleSort";
import { InsertionSort } from "./algorithms/InsertionSort";
import { MergeSort } from "./algorithms/MergeSort";
import { ComparableNumber } from "./core/Number";
import { BSTNode } from "./ds/BSTNode";
import { build_heap, build_max_heap, get_heap_end, max_heapify } from "./ds/Heap";

const baseArray = [
    new ComparableNumber(8),
    new ComparableNumber(14),
    new ComparableNumber(10),
    new ComparableNumber(8),
    new ComparableNumber(7),
    new ComparableNumber(9),
    new ComparableNumber(3),
    new ComparableNumber(2),
    new ComparableNumber(4),
    new ComparableNumber(1)
]

const headNode = new BSTNode(new ComparableNumber(49));
headNode.insert(new BSTNode(new ComparableNumber(79)));
headNode.insert(new BSTNode(new ComparableNumber(46)));
headNode.insert(new BSTNode(new ComparableNumber(41)));
headNode.insert(new BSTNode(new ComparableNumber(79)));
headNode.insert(new BSTNode(new ComparableNumber(79)));
headNode.insert(new BSTNode(new ComparableNumber(49)));
console.log(headNode);
console.log("------------------------------");
headNode.remove(new ComparableNumber(46));
console.log(headNode);