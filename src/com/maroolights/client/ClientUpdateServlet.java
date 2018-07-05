package com.maroolights.client;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/ClientUpdateServlet")
public class ClientUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		Client clnt = new Client();
		
		clnt.setClientId(request.getParameter("selectedClientIdClntmod"));
		clnt.setCompanyName(request.getParameter("companyName"));
		clnt.setIndustry(request.getParameter("industry"));
		clnt.setLocation(request.getParameter("location"));
		clnt.setCreditTime(Integer.parseInt(request.getParameter("creditTime")));
		clnt.setCreditLimit(Integer.parseInt(request.getParameter("creditLimit")));
		clnt.setClientCreatedBy((String)session.getAttribute("userId"));
		clnt.setClientUpdatedBy((String)session.getAttribute("userId"));
		
		if (clnt.update_Client()) {
			out.println("1");
		} else {
			out.println("0");
		}
	}
}
