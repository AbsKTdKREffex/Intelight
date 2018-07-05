package com.maroolights.client;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterContactPServlet")
public class RegisterContactPServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ClientContactPerson cntp = new ClientContactPerson();
		
		cntp.setClientId(request.getParameter("selectedClientIdCntctPmod"));
		cntp.setContactPersonId(request.getParameter("newContctPId"));
		cntp.setFirstName(request.getParameter("firstName"));
		cntp.setLastName(request.getParameter("lastName"));
		cntp.setLocation(request.getParameter("locationcontct"));
		cntp.setContactNo(Long.parseLong(request.getParameter("contactNoCP")));
		cntp.setAltContactNo(Long.parseLong(request.getParameter("altContactNo")));
		cntp.setEmail(request.getParameter("emailId"));
		cntp.setDesignation(request.getParameter("designationContactP"));
		cntp.setClientCPCreatedBy((String)session.getAttribute("userId"));
		cntp.setClientCPUpdatedBy((String)session.getAttribute("userId"));
		
		if (cntp.new_ContactPerson()){
			out.println("1");
		} else {
			out.println("0");
		}
		
		
			
	}
}
