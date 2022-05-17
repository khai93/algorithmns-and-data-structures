class TrieNode {
    neighbors: {[key: string]: TrieNode};
    endNode: boolean;
    constructor(endNode?: boolean) {
        this.neighbors = {};
        this.endNode = !!endNode;
    }
}
class Trie {
    private root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let curr: TrieNode = this.root;
        for (let i = 0;i < word.length;i++) {
            if (curr) {
                if (curr.neighbors[word[i]] == null) {
                    curr.neighbors[word[i]] = new TrieNode(i === word.length - 1);
                } else if (!curr.neighbors[word[i]].endNode) {
                    curr.neighbors[word[i]].endNode = i === word.length - 1;
                }
                curr = curr.neighbors[word[i]];
            }
        }
    }

    search(word: string): boolean {
        let curr: TrieNode = this.root;
        for (let i = 0;i < word.length;i++) {
            if (curr) {
                if (curr.neighbors[word[i]] == null) return false;
                if (i === word.length - 1 && !curr.neighbors[word[i]].endNode) {
                    console.log(curr.neighbors);
                    return false;
                }
                curr = curr.neighbors[word[i]];
            }
        }
        return true;
    }

    startsWith(prefix: string): boolean {
        let curr: TrieNode = this.root;
        for (let i = 0;i < prefix.length;i++) {
            if (curr) {
                if (curr.neighbors[prefix[i]] == null) return false;
                curr = curr.neighbors[prefix[i]];
            }
        }
        return true;
    }
}
