package Collections;

class Node {
    int value;
    Node left, right;
    
    public Node(int value) {
        this.value = value;
        left = null;
        right = null;
    }
}

class BinaryTree {
    Node root;
    
    public BinaryTree() {
        root = null;
    }
    
    public void add(int value) {
        root = addRecursive(root, value);
    }
    
    private Node addRecursive(Node current, int value) {
        if (current == null) {
            return new Node(value);
        }
        
        if (value < current.value) {
            current.left = addRecursive(current.left, value);
        } else if (value > current.value) {
            current.right = addRecursive(current.right, value);
        }
        
        return current;
    }
    
    public void inorder() {
        inorderRecursive(root);
    }
    
    private void inorderRecursive(Node current) {
        if (current != null) {
            inorderRecursive(current.left);
            System.out.print(current.value + " ");
            inorderRecursive(current.right);
        }
    }
    
    public void postorder() {
        postorderRecursive(root);
    }
    
    private void postorderRecursive(Node current) {
        if (current != null) {
            postorderRecursive(current.left);
            postorderRecursive(current.right);
            System.out.print(current.value + " ");
        }
    }
    
    public void preorder() {
        preorderRecursive(root);
    }
    
    private void preorderRecursive(Node current) {
        if (current != null) {
            System.out.print(current.value + " ");
            preorderRecursive(current.left);
            preorderRecursive(current.right);
        }
    }
}

public class BinaryTreeExample {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(1);
        tree.add(4);
        tree.add(6);
        tree.add(8);
        
        System.out.print("Inorder traversal: ");
        tree.inorder();
        
        System.out.print("\nPostorder traversal: ");
        tree.postorder();
        
        System.out.print("\nPreorder traversal: ");
        tree.preorder();
    }
}
