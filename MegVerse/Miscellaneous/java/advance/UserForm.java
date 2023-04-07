package advance;
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class UserForm extends JFrame {

    private static final String DB_URL = "jdbc:mysql://localhost/mydatabase";
    private static final String DB_USER = "myuser";
    private static final String DB_PASSWORD = "mypassword";

    private JTextField nameField;
    private JTextField emailField;
    private JLabel messageLabel;

    public UserForm() {
        super("User Form");

        nameField = new JTextField(20);
        emailField = new JTextField(20);

        JButton saveButton = new JButton("Save");
        saveButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                saveData();
            }
        });

        JPanel formPanel = new JPanel();
        formPanel.add(new JLabel("Name: "));
        formPanel.add(nameField);
        formPanel.add(new JLabel("Email: "));
        formPanel.add(emailField);
        formPanel.add(saveButton);

        messageLabel = new JLabel(" ");

        add(formPanel, BorderLayout.CENTER);
        add(messageLabel, BorderLayout.SOUTH);

        pack();
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
    }

    private void saveData() {
        String name = nameField.getText();
        String email = emailField.getText();

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
            PreparedStatement statement = conn.prepareStatement("INSERT INTO users (name, email) VALUES (?, ?)");
            statement.setString(1, name);
            statement.setString(2, email);
            statement.executeUpdate();

            messageLabel.setText("Data saved successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
            messageLabel.setText("Error saving data");
        }
    }

    public static void main(String[] args) {
        UserForm form = new UserForm();
        form.setVisible(true);
    }

}
