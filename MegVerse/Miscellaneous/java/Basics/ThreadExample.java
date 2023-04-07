package Basics;

class thread extends Thread {
    static int i = 0;

    @Override
    public void run() {
        synchronized (this) {
            System.out.println("Inside Custom Thread class");

            for (; i < 10; i++) {
                System.out.println(this.toString() + i);
                this.notify();
            }
        }
    }

}

public class ThreadExample {
    public static void main(String args[]) throws InterruptedException {
        thread t1 = new thread();
        synchronized (t1) {
            System.out.println("Main Thread after notifed");
        }
        System.out.println("Main Class" + t1);

        thread t2 = new thread();

        synchronized (t2) {
            System.out.println("Thread 2");
        }
        System.out.println("Main Class" + t2);

        t2.start();
        t1.start();
        t1.join();
        t2.join();

    }
}
