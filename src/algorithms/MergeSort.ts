import { IComparable } from "../core/IComparable";

export function MergeSort(arr: IComparable[]): IComparable[] {
    const midIndex = arr.length / 2;

    if (arr.length <= 1) 
        return arr;
    
    return merge(MergeSort(arr.splice(0, midIndex)), MergeSort(arr));
}   

function merge(left: IComparable[], right: IComparable[]): IComparable[] {
    let sorted = [];

    while (left.length && right.length) {
        if (right[0].CompareTo(left[0])) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return [...sorted as IComparable[], ...left as IComparable[], ...right as IComparable[]];
}