import { IComparable } from "./IComparable";

export class ComparableNumber implements IComparable {
    constructor(
        public val: number
    ) { }

    CompareTo(obj: ComparableNumber): boolean {
        return this.val > obj.val;
    }
}
