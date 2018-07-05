package com.maroolights.data;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/CheckIsLogged")
public class CheckIsLogged extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@SuppressWarnings("static-access")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session=request.getSession();
		PrintWriter out=response.getWriter();
		 if(session.getAttribute("userName") != null){
			 out.println("1");
		} else {
			response.setStatus(response.SC_MOVED_TEMPORARILY);
			/*response.sendRedirect("HomePage.jsp");*/
			out.println("0");
		}
	}
}
