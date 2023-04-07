package advance;

import javax.swing.JFrame;
import javax.swing.JLabel;

class swing extends JFrame {
    swing() {
        JLabel label = new JLabel("Hello World");
        add(label);
        setSize(300, 300);
        setVisible(true);
    }

    public static void main(String []args){
        swing s = new swing();
        s.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

    