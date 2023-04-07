package advance;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class PostgresDatabase {

  private static final String DRIVER = "org.postgresql.Driver";
  private static final String URL = "jdbc:postgresql://localhost:5432/mnk";
  private static final String USERNAME = "mnk";
  private static final String PASSWORD = "MNK@navin*18";

  public static void main(String[] args) {

    try {
      Class.forName(DRIVER);
      Connection con = DriverManager.getConnection(URL, USERNAME, PASSWORD);

      // create table
      String createTableSQL = "CREATE TABLE users("
                            + "column1 datatype1, "
                            + "column2 datatype2, "
                            + "column3 datatype3, "
                            + "PRIMARY KEY (column1)"
                            + ")";
      Statement statement = con.createStatement();
      statement.execute(createTableSQL);

      // insert data
      String insertTableSQL = "INSERT INTO users"
                            + "(column1, column2, column3) "
                            + "VALUES"
                            + "(value1, value2, value3)";
      PreparedStatement preparedStatement = con.prepareStatement(insertTableSQL);
      preparedStatement.executeUpdate();

      // select data
      String selectTableSQL = "SELECT * from table_name";
      statement = con.createStatement();
      ResultSet rs = statement.executeQuery(selectTableSQL);
      while (rs.next()) {
        String column1 = rs.getString("column1");
        String column2 = rs.getString("column2");
        String column3 = rs.getString("column3");
        // process the result set
      }

      // update data
      String updateTableSQL = "UPDATE table_name "
                            + "SET column2 = ? "
                            + "WHERE column1 = ?";
      preparedStatement = con.prepareStatement(updateTableSQL);
      preparedStatement.setString(1, "new_value");
      preparedStatement.setString(2, "value1");
      preparedStatement.executeUpdate();

      // close connections
      con.close();
    } catch (ClassNotFoundException | SQLException e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}
