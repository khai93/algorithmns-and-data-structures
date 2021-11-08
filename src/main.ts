import { ComparableNumber } from "./core/Number";
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

const heap = build_heap(baseArray, 0);
const max_heap = build_max_heap(baseArray);
console.log(get_heap_end(heap).parent);
