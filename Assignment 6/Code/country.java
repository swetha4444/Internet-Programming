import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;
import java.util.*;


//javac -d WEB-INF/classes country.java
public class country extends HttpServlet
{
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
  {
    String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    String DB_URL= "jdbc:mysql://localhost:3306/autocomplete";

    String USER ="root";
    String PASS="mysql";

    try
    {
      response.setContentType("text/html");
      PrintWriter pw = response.getWriter();
      Connection conn = DriverManager.getConnection(DB_URL,USER,PASS);

      String country_name = request.getParameter("country");

      String search = "SELECT `country_name` FROM `countries` WHERE `country_name` like '"+country_name+"%' ;";
      Statement stmt = conn.createStatement();

      ResultSet rs = stmt.executeQuery(search);

      while(rs.next())
      {
        String country = rs.getString("country_name");
        pw.println("<option name='"+country+"'>"+country+"</option>");
      }
    }
    catch(Exception E)
    {
      E.printStackTrace();
    }
  }
}
