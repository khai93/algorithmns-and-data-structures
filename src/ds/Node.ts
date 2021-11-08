export class Node<T> {
    right: Node<T>;
    left: Node<T>;
    val: T;

    constructor(val, right, left) {
        this.right = right;
        this.left = left;
        this.val = val;
    }
}