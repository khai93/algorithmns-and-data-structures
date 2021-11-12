import { IComparable } from "../core/IComparable";
import { ComparableNumber } from "../core/Number";

export function InsertionSort(arr: IComparable[]) {
    for (let n = 0; n < arr.length;n++) {
        for (let i = n;i >= 0;i--) {
            if (arr[i+1] == null) 
                continue;

            if (!arr[i+1].CompareTo(new ComparableNumber(i))) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
}