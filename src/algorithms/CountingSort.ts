import { IComparable } from "../core/IComparable";

/**
 * A Linear-time sorting algorithum or Integer sorting.
 * 
 * Uses an array index as the sorting mechanism. Counts each number that appears and adds to the counter of it's value as its index.  
 * Complexity: O (n + k)
*/
export function CountingSort(inputs: number[]): number[] {
    const counts: number[] = [];

    for (const n of inputs) {
        if (counts[n] == null)
            counts[n] = 0;
        counts[n]++;
    }

    let out = [];

    for (let i = 0;i < counts.length;i++) {
        for (let y = 0;y < counts[i]; y++) {
            out.push(i);
        }
    }

    return out;
}