export interface IComparable {
    // Compares to other object to see if it is greater than the object
    CompareTo(obj: unknown): boolean;
}