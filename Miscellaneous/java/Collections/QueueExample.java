package Collections;

/*
 * Queue Examples
 */
import java.util.PriorityQueue;
import java.util.Iterator;
import java.util.ArrayDeque;

public class QueueExample {
    public static void main(String args[]) {
        PriorityQueue<Integer> queue = new PriorityQueue<Integer>();
        queue.add(10);
        queue.add(20);
        queue.add(15);
        System.out.println("Head: " + queue.peek());
        System.out.println("Queue elements: " + queue);
        queue.remove();
        System.out.println("AFter removing an element with remove function: " + queue);
        queue.poll();
        System.out.println("After removing two elements: " + queue);

        // Iterator
        Iterator<Integer> iter = queue.iterator();
        while (iter.hasNext()) {
            System.out.println("Iterating the queue elements: " + iter.next());
        }

        // Array Deque
        ArrayDeque<Integer> arrayDeque = new ArrayDeque<Integer>();
        arrayDeque.add(10);
        arrayDeque.addFirst(20);
        arrayDeque.offerLast(15);
        System.out.println("Array Deque: " + arrayDeque);

        arrayDeque.removeLast();
        arrayDeque.pollFirst();
        System.out.println("Array Deque: " + arrayDeque);

        Object arr[] = arrayDeque.toArray();
        for (int i = 0; i < arr.length; i++) {
            System.out.println("Array Deque: " + arr[i]);
        }

        Object arr1[] = arrayDeque.stream().map(x -> x).toArray();
        for (int i = 0; i < arr.length; i++) {
            System.out.println("Array Deque: " + arr1[i]);
        }

        System.out.println();
    }
}
