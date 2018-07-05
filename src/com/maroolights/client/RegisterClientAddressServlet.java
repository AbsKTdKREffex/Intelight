package com.maroolights.client;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class RegisterAddressServlet
 */
@WebServlet("/RegisterAddressServlet")
public class RegisterClientAddressServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ClientAddress add = new ClientAddress();
		
		add.setAddressId(request.getParameter("newAddressPId"));
		add.setClientId(request.getParameter("selectedClientIdAddressmod"));
		add.setLocation(request.getParameter("locationAdd"));
		add.setBranchName(request.getParameter("branchName"));
		add.setAddress(request.getParameter("address"));
		add.setContactNo(Long.parseLong(request.getParameter("contactNoAdd")));
		add.setGstNo(request.getParameter("gstNo"));
		add.setState(request.getParameter("state"));
		add.setPincode(Integer.parseInt(request.getParameter("pincode")));
		add.setClientAddCreatedBy((String)session.getAttribute("userId"));
		add.setClientAddUpdatedBy((String)session.getAttribute("userId"));
		
		if (add.new_Address()) {
			out.println("1");
		} else {
			out.println("0");
		}
		
		
			
	}
}
