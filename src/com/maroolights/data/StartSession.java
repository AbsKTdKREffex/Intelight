package com.maroolights.data;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class StartSession
 */
@WebServlet("/StartSession")
public class StartSession extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		Integer dept = Integer.parseInt(request.getParameter("department"));
//		switch (dept) {
//		case 101:
//			response.sendRedirect("UserHome.jsp");
//			//session.setAttribute("DepartmentSelected", "0");
//			session.setAttribute("userHomePage", "HomePage.jsp");
//			break;
//		case 103:
//			response.sendRedirect("UserHome.jsp");
//			session.setAttribute("userHomePage", "HomePage.jsp");
//			//session.setAttribute("DepartmentSelected", "121");
//			break;
//		default:
			response.sendRedirect("HomePage.jsp");
//			break;
//		}
		
	}

}
