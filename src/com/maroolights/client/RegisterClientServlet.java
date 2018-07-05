package com.maroolights.client;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterClientServlet")
public class RegisterClientServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		Client clnt = new Client();
		ClientContactPerson cntprsn = new ClientContactPerson();
		ClientAddress adrs = new ClientAddress();
		
		clnt.setClientId(request.getParameter("newClientId"));
		clnt.setCompanyName(request.getParameter("companyName"));
		clnt.setIndustry(request.getParameter("industry"));
		clnt.setLocation(request.getParameter("location"));
		clnt.setCreditTime(Integer.parseInt(request.getParameter("creditTime")));
		clnt.setCreditLimit(Integer.parseInt(request.getParameter("creditLimit")));
		clnt.setClientCreatedBy((String)session.getAttribute("userId"));
		clnt.setClientUpdatedBy((String)session.getAttribute("userId"));
		
		cntprsn.setContactPersonId(request.getParameter("newContactPersonId"));
		cntprsn.setClientId(request.getParameter("newClientId"));
		cntprsn.setFirstName(request.getParameter("firstName"));
		cntprsn.setLastName(request.getParameter("lastName"));
		cntprsn.setContactNo(Long.parseLong(request.getParameter("contactNoCP")));
		cntprsn.setAltContactNo(Long.parseLong(request.getParameter("altContactNo")));
		cntprsn.setEmail(request.getParameter("emailId"));
		cntprsn.setDesignation(request.getParameter("designation"));
		cntprsn.setLocation(request.getParameter("locationcontct"));
		cntprsn.setClientCPCreatedBy((String)session.getAttribute("userId"));
		cntprsn.setClientCPUpdatedBy((String)session.getAttribute("userId"));

		adrs.setAddressId(request.getParameter("newClientAddressId"));
		adrs.setClientId(request.getParameter("newClientId"));
		adrs.setLocation(request.getParameter("locationAdd"));
		adrs.setBranchName(request.getParameter("branchName"));
		adrs.setAddress(request.getParameter("address"));
		adrs.setGstNo(request.getParameter("gstNo"));
		adrs.setContactNo(Long.parseLong(request.getParameter("contactNoAdd")));
		adrs.setState(request.getParameter("state"));
		adrs.setPincode(Integer.parseInt(request.getParameter("pincode")));
		adrs.setClientAddCreatedBy((String)session.getAttribute("userId"));
		adrs.setClientAddUpdatedBy((String)session.getAttribute("userId"));
		
		if (clnt.new_Client()) {
			if (cntprsn.new_ContactPerson()) {
				if (adrs.new_Address()) {
					out.println("1");
				}
				else {
					out.println("0");
				}
			}
			else {
				out.println("0");
			}
		}
		else {
			out.println("0");
		}
	}
}
