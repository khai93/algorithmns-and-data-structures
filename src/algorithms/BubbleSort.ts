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
        return BubbleSort(arr, length--); 

    return arr;
}