import { IComparable } from "../core/IComparable";
import { build_max_heap, build_min_heap, max_heapify, min_heapify } from "../ds/Heap";

/**
 * Sort algorithm that is part of the comparison model
 * Sorts in descending order since it follows the max-heap property.
 * 
 * Complexity: O(nlogn)
 * @param arr normal arr
 * @returns 
 */
export function MaxHeapSort(arr: IComparable[]): IComparable[] {
    build_max_heap(arr);
    const out = [];

    /**
     * Repeat until all nodes are gone
     */
    while (arr[0] != null) {
        /** 
         * push the max of the heap (always at the first element) to the sorted array 
        */
        out.push(arr[0]);

        /**
         * replace the bottom of the heap to the front or placing the smallest to the top.
         */
        arr[0] = arr[arr.length-1];

        /**
         * remove the end of the heap which was the max (we already addded it in the first statement);
         */
        arr.splice(arr.length-1);

        /**
         * run max heapify on the first element to reset the heap so we have the max at the top again.
         */
        max_heapify(arr, 0);
    }

    return out;
}

/**
 * MaxHeapSort but orders in ascending order
 * @param arr 
 * @returns 
 */
export function MinHeapSort(arr: IComparable[]): IComparable[] {
    build_min_heap(arr);
    const out = [];

    throw new Error("Need to learn Depth-first-search to implement a way to find max in a min heap.")

    /**
     * Repeat until all nodes are gone
     */
    while (arr[0] != null) {
        out.push(arr[0]);

        arr[0] = arr[arr.length-1];

        arr.splice(arr.length-1);

        min_heapify(arr, 0);
    }

    return out;
}