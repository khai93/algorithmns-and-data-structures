import { IComparable } from "./IComparable";

export class ComparableNumber implements IComparable {
    constructor(
        public val: number
    ) { }

    public CompareTo(obj: unknown): boolean {
        if (!(obj instanceof ComparableNumber))
            return false;

        return this.val > obj.val;
    }
}
