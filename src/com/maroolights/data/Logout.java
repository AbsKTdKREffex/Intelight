package com.maroolights.data;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;

@SuppressWarnings("serial")
@WebServlet(description = "UserLogOut", urlPatterns = { "/LogOut" })
public class Logout extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		session.removeAttribute("userName");
		session.removeAttribute("userId");
		session.removeAttribute("password");
		session.removeAttribute("Department");
		session.removeAttribute("Designation");
		session.removeAttribute("DepartmentDesc");
		session.removeAttribute("DesignationDesc");
		session.invalidate();
		response.sendRedirect("http://localhost:8080/intelight/index.html");
	}
}