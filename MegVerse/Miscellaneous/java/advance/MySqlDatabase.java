package advance;
import java.sql.*;

public class MySqlDatabase {
    private static final String URL = "jdbc:mysql://localhost:3306/mnk";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "MNK@navin*18";

    public static void main(String[] args) {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;
        try {
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
            statement = connection.createStatement();

            // CREATE query
            String createSQL = "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), age INT, PRIMARY KEY (id))";
            statement.executeUpdate(createSQL);

            // SELECT query
            String selectSQL = "SELECT id, name, age FROM users";
            resultSet = statement.executeQuery(selectSQL);
            System.out.println("ID\tName\tAge");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                System.out.println(id + "\t" + name + "\t" + age);
            }

            // INSERT query
            String insertSQL = "INSERT INTO users (name, age) VALUES ('John', 25)";
            int rowsAffected = statement.executeUpdate(insertSQL);
            System.out.println(rowsAffected + " row(s) inserted.");

            // UPDATE query
            String updateSQL = "UPDATE users SET age = 26 WHERE name = 'John'";
            rowsAffected = statement.executeUpdate(updateSQL);
            System.out.println(rowsAffected + " row(s) updated.");

            // DELETE query
            String deleteSQL = "DELETE FROM users WHERE name = 'John'";
            rowsAffected = statement.executeUpdate(deleteSQL);
            System.out.println(rowsAffected + " row(s) deleted.");
        } catch (SQLException e) {
            System.out.println("An error occurred: " + e.getMessage());
        } finally {
            try {
                if (resultSet != null) resultSet.close();
                if (statement != null) statement.close();
                if (connection != null) connection.close();
            } catch (SQLException e) {
                System.out.println("An error occurred while closing resources: " + e.getMessage());
            }
        }
    }
}
