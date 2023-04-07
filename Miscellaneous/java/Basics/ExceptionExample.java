package Basics;
/*
 * 1. ArithmeticException
 * 2. NullPointer Exception
 * 3. NumberFormatException
 * 4. ArrayIndexOutOfBound
 */

class ArithmeticException {
    public static void main(String[] args) {
        try {
            int i = 10;
            int j = 0;
            int k = i / j;
        } catch (Exception e) {
            System.out.println(e);
        }
        System.out.println("Hello World!");
    }
}

class NullPointerException {
    public static void main(String[] args) {
        try {
            String s = null;
            System.out.println(s.length());
        } catch (Exception e) {
            System.out.println(e);
        }
        System.out.println("HOoei!");
    }
}

class ArrayIndexOutOfBound {
    public static void main(String args[]) {
        int a[] = new int[5];
        try {
            System.out.println(a[7]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println(e);
        } finally {
            System.out.println("Finally printed");
        }
        System.out.println("Ndkfes");
    }

}

class CustomException extends Exception {
    public CustomException(String s) {
        super(s);
    }
}

class ThrowsException {
    public void call(int a) throws CustomException {
        try {
            if (a < 0) {
                throw new CustomException("Hello");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void main(String args[]) {
        ThrowsException a = new ThrowsException();
        try {
            a.call(-1);
        } catch (Exception e) {
            System.out.println(e);
        }
        System.out.println("Hello");
    }
}

// Area of circle
class NegativeRadiusException extends Exception {
    public NegativeRadiusException(String s) {
        super(s);
    }
}

class AOC {
    public double calc(float radius) throws NegativeRadiusException {
        double area;
        System.out.println(radius);
        if (radius < 0) {
            throw new NegativeRadiusException("Radius should be positive");
        } else {
            area = ((0.5) * radius * radius * 3.14);
        }
        return area;
    }

    public static void main(String[] args) {
        float radius = 5;
        AOC area = new AOC();
        try {
            double a = area.calc(radius);
            System.out.println(a);
        } catch (NegativeRadiusException e) {
            System.out.println(e);
        }

    }

}