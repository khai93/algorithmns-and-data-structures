import { IComparable } from "../core/IComparable";
import { Node } from "./Node";


export class HeapNode {
    parent: HeapNode | undefined;
    val: IComparable;
    right: HeapNode | undefined;
    left: HeapNode | undefined;

    constructor(val: IComparable, right: HeapNode | undefined, left: HeapNode | undefined, parent: HeapNode | undefined) {
        this.right = right;
        this.left = left;
        this.val = val;
        this.parent = parent;
    }

    public toArray(): IComparable[] {
        const rootNode = get_heap_root(this);
        let out: IComparable[] = [];

        function storeNode(node: HeapNode | undefined, index = 0) {
            if (node == null)
                return;
            
            out[index] = node.val;

            storeNode(node.left, index*2+1);
            storeNode(node.right, index*2+2);
        }

        storeNode(rootNode);

        return out;
    }
}

/**
 * Get the root heap from any point of the tree
 * @param node 
 * @returns 
 */
export function get_heap_root(node: HeapNode): HeapNode {
    let rootNode: HeapNode = node;

    while (rootNode.parent != null) {
        rootNode = rootNode.parent;
    }

    return rootNode;
}


export function get_heap_end(node: HeapNode, level = 0): HeapNode {
    let endNode: HeapNode = node;
    


    return endNode;
}

/**
 * Build a heap structure from a normal array
 * @param arr normal array
 * @returns root of new heap
 */
export function build_heap(arr: IComparable[], index: number, parent?: HeapNode): HeapNode {
    const node = new HeapNode(arr[index], undefined, undefined, parent);

    if (arr.length > index*2+1)
        node.left = build_heap(arr, index*2+1, node);

    if (arr.length > index*2+2)
        node.right = build_heap(arr, index*2+2, node);

    return node;
}

/**
 * Builds a max heap structure from an unordered array
 * Follow Max Heap Property (all children nodes values are less than the parent/current node.)
 * @returns Root of heap
 */
export function build_max_heap(arr: IComparable[]): HeapNode {
    const rootNode = build_heap(arr, 0);

    


    return rootNode;
}

/**
 * Correct a single node to follow the max heap property
 * @param arr The array
 * @param index Index of node
 */
export function max_heapify(node: HeapNode | undefined): void {
    if (node == null)
        return;

    if (node.left?.val.CompareTo(node.val)) {
        const temp = node.val;

        node.val = node.left!.val;
        node.left!.val = temp;

        return max_heapify(node.left);
    }

    if (node.right?.val.CompareTo(node.val)) {
        const temp = node.val;

        node.val = node.right!.val;
        node.right!.val = temp;

        return max_heapify(node.right);
    }
}