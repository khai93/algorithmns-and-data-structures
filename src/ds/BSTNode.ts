import { IComparable } from "../core/IComparable";


export class BSTNode {
    value: IComparable;
    left: BSTNode | undefined;
    right: BSTNode | undefined;
    parent: BSTNode | undefined;

    // Child node count
    private size: number;

    // how many duplicates of this same node.
    private count: number;

    constructor(value: IComparable, left?: BSTNode, right?: BSTNode, parent?: BSTNode) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
        this.size = 0;
        this.count = 0;
    }

    public insert(node: BSTNode): void {
        if (node.value.CompareTo(this.value)) {
            this.size++;

            if (this.right != null) {
                return this.right.insert(node);
            }

            this.right = node;
            this.right.parent = this;
        } else if (this.value.CompareTo(node.value)) {
            this.size++;

            if (this.left != null) {
                return this.left.insert(node);
            }

            this.left = node;
            this.left.parent = this;
        } else {
            // it is the same value 
            this.count++;
        }
    }

    public remove(val: IComparable): boolean {
        const node = this.find(val);

        if (node == null || node.parent == null)
            return false;
        
        // decrement all parent sizes
        let currParent: BSTNode | undefined = node.parent;

        while(currParent != null) {
            currParent.size--;
            currParent = currParent.parent;
        }

        const isLessThanParent = node.parent.value.CompareTo(val);
        const hasLeftChild = (node.right == null && node.left != null);
        const hasRightChild = (node.left == null && node.right != null);

        // no children
        if (!hasLeftChild && !hasRightChild) {
            
            if (isLessThanParent) {
                node.parent!.left = undefined;
            } else {
                node.parent!.right = undefined;
            }
        }

        // has one child
        if (hasLeftChild || hasRightChild) {
            let childNode = hasLeftChild ? node.left : node.right;

            if (isLessThanParent) {
                node.parent!.left = childNode;
            } else {
                node.parent!.right = childNode;
            }

            childNode!.parent = node.parent;
        }

        // has both child nodes
        if (node.right != null && node.left != null) {
            const minNode = node.right!.minNode();

            node.value = minNode.value;
            
            const isMinNodeLessThanParent = minNode.parent!.value.CompareTo(minNode.value);

            if (isMinNodeLessThanParent) {
                minNode.parent!.left = undefined;
            } else {
                minNode.parent!.right = undefined;
            }
        }
        
        return true;
    }

    public find(val: IComparable): BSTNode {
        if (this.right == null && this.left == null) 
            return this;

        if (val.CompareTo(this.value) && this.right != null)
            return this.right.find(val);

        if (this.value.CompareTo(val) && this.left != null) 
            return this.left.find(val);

        return this;
    }

    public minNode(): BSTNode {
        if (this.left == null)
            return this;
        else
            return this.left.minNode();
    }

}