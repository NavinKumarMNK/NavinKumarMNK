package Collections;
/*
 * Custom java LinkedList Creation
*/

import java.util.Scanner;
import java.util.Iterator;

class Node<T> {
    public T data;
    public Node<?> next;

    Node(T data) {
        this.data = data;
        this.next = null;
    }

    public void setNextNode(Node<?> next) {
        this.next = next;
    }

    public Node<?> getNextNode() {
        return this.next;
    }
}

class LinkedList<T> implements Iterable<T> {
    public Node<?> head;
    public Node<?> tail;
    public int size;

    LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public void addNode(Node<?> node) {
        node.getClass();
        if (this.head == null) {
            this.head = node;
            this.tail = node;

        } else {
            this.tail.setNextNode(node);
            this.tail = node;
        }
        this.size++;
    }

    public void removeNode(int position) {
        if (position == 0) {
            this.head = this.head.getNextNode();
        } else {
            Node<?> currentNode = this.head;
            for (int i = 0; i < position - 1; i++) {
                currentNode = currentNode.getNextNode();
            }
            currentNode.setNextNode(currentNode.getNextNode().getNextNode());
        }
        this.size--;
    }

    @Override
    public Iterator<T> iterator() {
        return new Iterator<T>() {
            Node<?> currentNode = head;

            @Override
            public boolean hasNext() {
                return currentNode != null;
            }

            @Override
            public T next() {
                try {
                    T data = (T) currentNode.data;
                    currentNode = currentNode.getNextNode();
                    return data;
                } catch (Exception e) {
                    System.out.println(e);

                }
                return (T) null;

            }
        };
    }
}

class Element {
    public int no;
    public String name;

    public Element(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public void display() {
        System.out.println("No: " + no + " Name: " + name);
    }
}

class Block {
    public Element two;
    public Element one;

    public Block(Element one, Element two) {
        this.one = one;
        this.two = two;
    }

    public void display() {
        System.out.println("Block: ");
        this.one.display();
        this.two.display();
    }
}

public class LinkedListCustomExample {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String args[]) {
        LinkedList<Object> linkedList = new LinkedList<Object>();
        System.out.print(" Enter the number of elements to be added to the list : ");
        for (int i = 0; i < 5; i++) {
            String temp = sc.next();
            Element tempobj = new Element(i, temp);
            Node<Element> tempnode = new Node<Element>(tempobj);
            linkedList.addNode(tempnode);
        }

        // Using Iterable
        System.out.println("The linked list is: ");
        for (Object temp : linkedList) {
            Element tempobj = (Element) temp;
            tempobj.display();
        }

        // Manual Iteration
        System.out.println("The linked list is: ");
        for (Node<?> temp = linkedList.head; temp != null; temp = temp.getNextNode()) {
            Element tempobj = (Element) temp.data;
            tempobj.display();
        }

        // Hetero geneous LinkedList
        System.out.println("HeteroGeneous LinkedList");
        LinkedList<Object> linkedList2 = new LinkedList<Object>();
        Node<Element> node1 = new Node<Element>(new Element(1, "One"));
        Node<Block> node2 = new Node<Block>(new Block(new Element(2, "Two"), new Element(3, "Three")));
        linkedList2.addNode(node1);
        linkedList2.addNode(node2);

        for (Object temp : linkedList2) {
            if (temp instanceof Element) {
                Element tempobj = (Element) temp;
                tempobj.display();
            } else if (temp instanceof Block) {
                Block tempobj = (Block) temp;
                tempobj.display();
            }
        }
    }
}
