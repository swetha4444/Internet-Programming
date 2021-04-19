import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;
import java.util.*;

//javac -d WEB-INF/classes logout.java
public class logout extends HttpServlet
{
    public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException
    {
  
      response.setContentType("text/html");
      PrintWriter out = response.getWriter();
  
      HttpSession session = request.getSession(false);
      String username = (String)session.getAttribute("user");
      session.invalidate();
      
      out.println("<html><head><title>LogOut-Page</title><link rel='stylesheet' href='style.css'></head>"+
          "<body><div class='page'><center><div><h1 style='color:green;'><center>Sucessfully Logged Out "+username+"<center></h1><a href='index.html'> Go Back to Home </a><div></center></div></body></html>");
      out.close();
  
    }
  
  }