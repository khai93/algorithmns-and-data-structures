import { IComparable } from "../core/IComparable";


/**
 * Builds a max heap structure from an unordered array
 * Follow Max Heap Property (all children nodes values are less than the parent/current node.)
 * Complexity: O(n)
*/
export function build_max_heap(arr: IComparable[]) {
    let i = arr.length;
    
    while (Math.floor(i / 2) >= 0) {
        i = Math.floor(i / 2);
        max_heapify(arr, i); 

        if (i == 0)
            break;
    }
}

export function build_min_heap(arr: IComparable[]) {
    let i = arr.length;
    
    while (Math.floor(i / 2) >= 0) {
        min_heapify(arr, i); 

        if (i == 0)
            break;

        i = Math.floor(i / 2);
    }
}


export function find_max_in_min_heap(arr: IComparable[]) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        
    }
}

/**
 * Correct a single node to follow the max heap property
 * Complexity: O(lg n)
 * @param arr The array
 * @param index Index of node
 */
export function max_heapify(arr: IComparable[], nodeIndex: number): void {
    if (arr[nodeIndex] == null)
        return

    // left children is greater
    // add 1 offset becuase we will use 0-index
    if (arr[nodeIndex*2+1] != null && arr[nodeIndex*2+1].CompareTo(arr[nodeIndex]) && arr[nodeIndex*2+1].CompareTo(arr[nodeIndex*2+2])) {
        const temp = arr[nodeIndex*2+1];
        arr[nodeIndex*2+1] = arr[nodeIndex];
        arr[nodeIndex] = temp;

        return max_heapify(arr, nodeIndex*2+1);
    } 
    
    // right children is greater
    if (arr[nodeIndex*2+2] != null && arr[nodeIndex*2+2].CompareTo(arr[nodeIndex])) {
        const temp = arr[nodeIndex*2+2];
        arr[nodeIndex*2+2] = arr[nodeIndex];
        arr[nodeIndex] = temp;

        return max_heapify(arr, nodeIndex*2+2);
    }
}

export function min_heapify(arr: IComparable[], nodeIndex: number): void {
    if (arr[nodeIndex] == null)
        return;
    
    const leftIndex = nodeIndex * 2 + 1;
    const rightIndex = nodeIndex * 2 + 2;

    if (arr[leftIndex] != null && arr[nodeIndex].CompareTo(arr[leftIndex]) && !arr[nodeIndex].CompareTo(arr[rightIndex])) {
        const temp = arr[nodeIndex];
        arr[nodeIndex] = arr[leftIndex];
        arr[leftIndex] = temp;

        return min_heapify(arr, leftIndex);
    }

    if (arr[rightIndex] && arr[nodeIndex].CompareTo(arr[rightIndex])) {
        const temp = arr[nodeIndex];
        arr[nodeIndex] = arr[rightIndex];
        arr[rightIndex] = temp;

        return min_heapify(arr, rightIndex)
    }
}