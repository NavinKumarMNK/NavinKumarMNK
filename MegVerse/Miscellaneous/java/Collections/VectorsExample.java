package Collections;

/*
 * Java Vector Examples => Synchronized array implmentation
*/
import java.util.Vector;
import java.util.Scanner;
import java.util.Iterator;
import java.util.Enumeration;

public class VectorsExample {
    public static Scanner sc = new Scanner(System.in);

    @SuppressWarnings("unchecked")
    public static void main(String args[]) {
        Vector<Integer> vector = new Vector<Integer>();
        vector.add(5);
        vector.add(4);
        vector.set(1, 3);
        vector.addElement(2); // addElement() is synchronized!
        System.err.println("Capacity" + vector.capacity());

        // iterator
        Iterator<Integer> iter = vector.iterator();
        while (iter.hasNext()) {
            System.out.println(iter.next());
        }

        // Enumeration
        Enumeration<Integer> enm = vector.elements();
        while (enm.hasMoreElements()) {
            System.out.println(enm.nextElement());
        }

        // vector copy
        Vector<Integer> vector2 = new Vector<Integer>();
        vector2 = (Vector<Integer>) vector.clone();
        System.out.println(vector2);
        vector2.clear();
    }
}
