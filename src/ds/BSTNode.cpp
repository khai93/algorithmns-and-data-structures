// LC code
struct BSTNode {
    int val;
    BSTNode* left;
    BSTNode* right;
    BSTNode(int value) {
        val = value;
        left = nullptr;
        right = nullptr;
    }
    
    void add(BSTNode* node) {
        if (node == NULL) return;
        if (node->val == val) return;
        if (node->val > val) {
            if (right == NULL) {
                right = node;
            } else {
                right->add(node);
            }
        } else {
            if (left == NULL) {
                left = node;
            } else {
                left->add(node);
            }
        }
    } 
};
