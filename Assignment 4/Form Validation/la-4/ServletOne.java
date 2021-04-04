import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class ServletOne extends HttpServlet {
 
    public void doGet(HttpServletRequest request, HttpServletResponse response)
       throws ServletException, IOException {
       
       // Set response content type
       response.setContentType("text/html");
 
       PrintWriter out = response.getWriter();
       String title = "Grey Sloan Memorial Hospital";
       String welcome = "Welcome "+request.getParameter("emp_name") +"!";
	   int basic = Integer.parseInt(request.getParameter("basic"));
	   int gross = 0;
	   int hra=0,oa=0;
	   String desig = request.getParameter("desig");


	   // Calc Gross pay: Gross = Basic + HRA + Other Allowances
	   if(desig.equals("Chief"))
	   {
		   hra = 50000;
		   oa = 10000;
	   }
	   else if(desig.equals("Attending"))
	   {
		   hra = 40000;
		   oa = 5000;
	   }
	   else if(desig.equals("Resident"))
	   {
		   hra = 30000;
		   oa = 2500;
	   }

	   gross = basic+hra+oa;

       out.println(
          "<html>\n" +

             "<head>"+
               "<title>" + title + "</title>"+
               "<style>"+
                  "div{box-sizing: border-box;padding: 3vw;background: rgba(0, 0, 0, 0.78);max-width: 700px;margin: 0 auto;height:700px;}"+
                  "table td{color:#82bb3b;font-size:25px;}"+
                  "h1,h2{color:white;font-size: 3vw;}"+
				  "body {background: url(emp.jpg)no-repeat center top;background-size: cover;background-position: center;}"+
               "</style>"+
              "</head>\n" +

             "<body>\n" +
                "<div align = \"center\"><h1 align = \"center\">" + title + "</h1>\n" +
                "<h2 align = \"center\">" + welcome + "</h1>\n" +
                "<table>\n" +
                  "<tr>\n" +
                     "<td><b>Employee ID:</b>: </td>"+
                     "<td style=\"color:white\">"+ request.getParameter("emp_id") +"</td>\n" +
                  "</tr>\n" +

				  "<tr>\n" +
                     "<td><b>Employee Name:</b>: </td>"+
                     "<td style=\"color:white\">"+ request.getParameter("emp_name") +"</td>\n" +
                  "</tr>\n" +

				  "<tr>\n" +
                     "<td><b>Designation:</b>: </td>"+
                     "<td style=\"color:white\">"+ desig +"</td>\n" +
                  "</tr>\n" +

				  "<tr>\n" +
                     "<td><b>Department:</b>: </td>"+
                     "<td style=\"color:white\">"+ request.getParameter("dept") +"</td>\n" +
                  "</tr>\n" +

				  "<tr>\n" +
                     "<td><b>Basic Pay:</b>: </td>"+
                     "<td style=\"color:white\">"+ basic +"</td>\n" +
                  "</tr>\n" +

				  "<tr>\n" +
                     "<td><b>Gross Pay:</b>: </td>"+
                     "<td style=\"color:white\">"+ gross +"</td>\n" +
                  "</tr>\n" +

				  "<tr>\n" +
                     "<td><b>Phone No.:</b>: </td>"+
                     "<td style=\"color:white\">"+ request.getParameter("Phone") +"</td>\n" +
                  "</tr>\n" +

				  "<tr>\n" +
                     "<td><b>DOB:</b>: </td>"+
                     "<td style=\"color:white\">"+ request.getParameter("DOB") +"</td>\n" +
                  "</tr>\n" +

				  "<tr>\n" +
                     "<td><b>Address:</b>: </td>"+
                     "<td style=\"color:white\">"+ request.getParameter("Message") +"</td>\n" +
                  "</tr>\n"+

                  "<tr>" +
                     "<td><b>Marital Status:</b>: </td>"+
                     "<td style=\"color:white\">"+ request.getParameter("Marital") + "</td>\n" +
                  "</tr>\n" +
               "</table>\n</div>" +

             "</body>" +
          "</html>"
       );
    }
 }