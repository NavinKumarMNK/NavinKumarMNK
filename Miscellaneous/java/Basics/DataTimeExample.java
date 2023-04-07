package Basics;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.GregorianCalendar;

public class DataTimeExample {
    public static void main(String[] args) {
        Date date = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        System.out.println(ft.format(date));
        long nowTime = System.currentTimeMillis();
        System.out.println(nowTime);

        GregorianCalendar calendar = new GregorianCalendar();
        System.out.println(calendar.get(GregorianCalendar.YEAR));
        System.out.println(calendar.get(GregorianCalendar.MONTH));
        System.out.println(calendar.get(GregorianCalendar.DAY_OF_MONTH));
    }
}
