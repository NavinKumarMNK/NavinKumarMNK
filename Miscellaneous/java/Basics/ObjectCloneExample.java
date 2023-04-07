package Basics;

class Employee implements Cloneable {
    float Salary;
    String name;

    Employee(float Salary, String name) {
        this.Salary = Salary;
        this.name = name;
    }

    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public class ObjectCloneExample {
    public static void main(String args[]) throws CloneNotSupportedException {
        Employee s1 = new Employee(35000, "Veera");
        Employee s2 = (Employee) s1.clone();
        System.out.println(s1.Salary + " " + s1.name);
        System.out.println(s2.Salary + " " + s2.name);
    }
}
