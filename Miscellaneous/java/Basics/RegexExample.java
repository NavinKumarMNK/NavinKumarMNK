package Basics;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexExample {
    public static void main(String args[]) {
        Pattern pattern = Pattern.compile("[abc]");
        Matcher m = pattern.matcher("Fake");
        if (m.find())
            System.out.println("true");
        else
            System.out.println("false");
    }
}
