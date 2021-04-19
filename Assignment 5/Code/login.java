import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;
import java.util.*;

//javac -d WEB-INF/classes login.java
public class login extends HttpServlet 
{
  public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException 
  {
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    String password = request.getParameter("password");
    String username = request.getParameter("username");

    //SQL Connection
    String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    String DB_URL="jdbc:mysql://localhost:3306/users";
    String USER = "root";
    String PASS = "mysql";

    try 
    {
      Connection conn = DriverManager.getConnection(DB_URL,USER, PASS);
      Statement stmt = conn.createStatement();
      String query;
      query = "SELECT * FROM `Persons` WHERE `username`='"+username+"'";
      ResultSet rs = stmt.executeQuery(query);
      while(rs.next())
      {
        String pwd = rs.getString("password");
        String name = rs.getString("firstname")+rs.getString("lastname");
        if(password.equals(pwd))
        {
          HttpSession session = request.getSession();
          session.setAttribute("user", username);
          out.println("<html><head><title>Login-Page</title><link rel='stylesheet' href='style.css'></head>"+
          "<body><div class='page'><center><div class='login-button'><h1>Welcome "+name+
          "!</h1><a href='profile'> View Profile</a><div></center></div></body></html>");
        }
        else
        {
          out.println("<html><head><title>Login-Page</title><link rel='stylesheet' href='style.css'></head>"+
          "<body><div class='page'><center><div class='login-button'><h1 style='color:red;'>Invalid Credentials!</h1><a href='index.html'>Try Again</a><div></center></div></body></html>");
        }
      }
      out.close();
      conn.close();
    }
    catch(Exception e) 
    {
      //Handle errors for Class.forName
      e.printStackTrace();
    }
  }
}