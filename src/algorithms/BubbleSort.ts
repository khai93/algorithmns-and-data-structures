import { IComparable } from "../core/IComparable";


export function BubbleSort(arr: IComparable[], length: number = arr.length): IComparable[] {
    let counter = 0;

    for (let i = 0;i < length;i++) {
        if (arr[i+1] == null)
            break;

        if (arr[i].CompareTo(arr[i+1])) {
            const temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            counter++;
        }
    }

    if (counter > 0)
        /**
         * Recursive call to function with its length subtracted by one.
         * We subtract because the last one will always sorted correctly after one iteration.
         */
        return BubbleSort(arr, length--); 

    return arr;
}