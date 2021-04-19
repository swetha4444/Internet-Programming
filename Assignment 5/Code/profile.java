import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;
import java.util.*;

//javac -d WEB-INF/classes profile.java
public class profile extends HttpServlet 
{
    public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException 
    {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession();
        String username = (String) session.getAttribute("user"); 

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
                String fname = rs.getString("firstname");
                String lname = rs.getString("lastname");
                String age = rs.getString("age");
                String prof = rs.getString("prof");

                out.println("<html><head><title>Login-Page</title><link rel='stylesheet' href='style.css'></head>"+
                            "<body><div class='page'><center><div><h1>"+fname+" "+lname+"'s Profile Page</h1>");
                out.println("<div class='cont'><div class='top-container'>"+
                            "<a href='logout'>Log Out</a></div><div class='bottom-container'>" +
                            "<p><em style="color:grey">First Name:</em>\t\t"+fname+"</td></tr>"+
                            "<p><em style="color:grey">Last Name:</em>\t\t"+lname+"</td></tr>"+
                            "<p><em style="color:grey">Age:</em>\t\t"+age+"</td></tr>"+
                            "<p><em style="color:grey">Profession:</em>\t\t"+prof+"</td></tr>"+
                            "</div></div>");
                out.println("</center></div></body></html>");
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
    