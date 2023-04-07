package Collections;

/*
 * Example of Set Collection: Unique Collection of Objects
 */
import java.util.TreeSet;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Comparator;

public class SetExample {
    public static void main(String args[]) {
        HashSet<Object> hashSet = new HashSet<Object>(); // Hash Sets
        hashSet.add("MegNav");

        LinkedHashSet<Object> linkedHashSet = new LinkedHashSet<Object>(hashSet); // Linked Hash Sets
        System.err.println(hashSet.hashCode());
        System.out.println(hashSet);
        System.out.println(linkedHashSet);

        Object arr[] = hashSet.toArray();
        System.out.println(arr);

        TreeSet<Object> sortedSet = new TreeSet<Object>();
        sortedSet.add(45);
        sortedSet.add(12);
        sortedSet.add(78);

        // TreeSet with Comparator
        TreeSet<Object> sortedSet2 = new TreeSet<Object>(new Comparator<Object>() {
            @Override
            public int compare(Object o1, Object o2) {
                return o1.hashCode() - o2.hashCode();
            }
        });

    }
}