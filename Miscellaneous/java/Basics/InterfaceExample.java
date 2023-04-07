package Basics;

/*
 * Exmaple of Implementing Interface
 */

interface MyInterface {
    public void stdout();

    class item {
        public int value;

        public item(int value) {
            this.value = value;
        }
    }
}

class InterfaceExample implements MyInterface {
    static int i = 0;
    item a = new item(++i);

    public void stdout() {
        System.out.println("Hello World " + a.value);
    }

    public static void main(String[] args) {
        InterfaceExample obj = new InterfaceExample();
        obj.stdout();
    }
}
