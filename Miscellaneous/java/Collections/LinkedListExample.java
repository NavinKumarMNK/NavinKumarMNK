package Collections;
/*
 * LinkedList is a doubly linked list implementation of the List interface.
 * Linkiedlist Example
 */

import java.util.LinkedList;
import java.util.Iterator;
import java.util.Collections;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Comparator;

class Element {
    private int no;
    public String name;

    Element(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public void display() {
        System.out.println("No: " + no + " Name: " + name);
    }

    public String getName() {
        return name;
    }

    public int getNo() {
        return no;
    }
}

public class LinkedListExample {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String args[]) {
        LinkedList<Element> linkedList = new LinkedList<Element>();
        System.out.print("LinkedListExample.main() Enter the number of elements to be added to the list : ");
        for (int i = 0; i < 5; i++) {
            String temp = sc.next();
            Element tempobj = new Element(i, temp);
            linkedList.add(tempobj);
        }
        System.out.println("The linked list is: ");

        // Iterating LinkedList through linked list iterable :
        // variable.listIterator(index) | descedingIterator()
        Iterator<Element> p = linkedList.iterator();
        while (p.hasNext()) {
            Element temp = p.next();
            temp.display();
        }

        // Convert LinkedList to ArrayList
        ArrayList<Element> arrayList = new ArrayList<Element>(linkedList);
        System.out.println("The array list is : ");
        for (Element temp : arrayList) {
            temp.display();
        }

        // Add Linked List Elements
        linkedList.addAll(4, linkedList);

        // search name
        System.out.print("Enter the name to be searched : ");
        String name = sc.next();
        Iterator<Element> descIter = linkedList.descendingIterator();
        while (descIter.hasNext()) {
            Element temp = descIter.next();
            if (temp.name == name) {
                System.out.println("The element is found at " + linkedList.get(linkedList.indexOf(temp)));
                break;
            }
        }

        // peeking
        System.out.println("The first element is : " + linkedList.peekFirst());
        System.out.println("The last element is : " + linkedList.peekLast());

        // Custom Sorting using lambda expressions
        Comparator<Element> comparator = (Element e1, Element e2) -> {
            return e1.name.compareTo(e2.name);
        };
        Collections.sort(linkedList, comparator);
        System.out.println("The sorted linked list is : ");
        for (Element temp : linkedList) {
            temp.display();
        }

        // Clear Screen
        try {
            Runtime.getRuntime().exec("cls");
        } catch (Exception e) {
            System.out.println("Cannot Clear Screen");
        }

        // Replace element
        Element tempElement = new Element(1, "kumar");
        Element tempElement2 = new Element(1, "muruviji");
        linkedList.set(linkedList.indexOf((tempElement)), tempElement2);
        System.out.println("The replaced linked list is : ");
        for (Element temp : linkedList) {
            temp.display();
        }

    }
}
