package Collections;

/*
 * ArrayList is a resizable array. It is similar to Vector but it is not synchronized.
 * Example of Accessing ArrayList Elements
 */

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

class ArrayListExample {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        int arr[] = new int[5];
        // ArrayList <object> variable = new ArrayList<object>(size);
        ArrayList<Integer> arrayList = new ArrayList<Integer>();
        // Heterogeneours Array
        ArrayList<Object> arrayList1 = new ArrayList<Object>();
        System.out.println("Empty Array " + arrayList1.isEmpty());
        arrayList1.add(1);
        arrayList1.add("Hello");
        arrayList1.add(1.2);
        // Modify list
        arrayList1.set(1, "World");
        System.out.println("Heterogeneous array : " + arrayList1);

        System.out.print("Enter the elements : ");
        for (int i = 0; i < 5; i++) {
            int temp = sc.nextInt();
            arr[i] = temp;
            // add element to arrayList : arrayList.add(element);
            arrayList.add(temp);
        }

        // shuffling the list
        Collections.shuffle(arrayList);

        // Contains Check
        boolean check = arrayList.contains(0);
        System.out.println("Contains 0 : " + check);
        boolean check1 = arrayList.containsAll(arrayList);
        System.out.println("Contains all : " + check1);

        // List Elements
        System.out.println("Arrays Traditional : " + Arrays.toString(arr));
        System.out.println("Array List : " + arrayList);

        // Sorting ArrayList
        int i = 0;
        for (int firstTerm : arrayList) {
            i++;
            // Slice the array : arrayList.subList(start, end);
            for (int secondTerm : arrayList.subList(i, arrayList.size())) {
                if (firstTerm > secondTerm) {
                    // Collections.swap(ArrayList, index1, index2);
                    // index = arrayList.indexOf(element); | arrayList.lastIndexOf(element);
                    Collections.swap(arrayList, arrayList.indexOf(firstTerm), arrayList.indexOf(secondTerm));
                    firstTerm = arrayList.get(i - 1);
                }
            }
        }
        System.err.println("Sorted Array List : ");
        arrayList.forEach((element) -> System.out.print(element + " "));

        // sort reverse order
        Collections.sort(arrayList, Collections.reverseOrder());
        System.out.println("\nReverse Sorted Array List : " + arrayList);

    }
}
