package com.maroolights.vendor;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/VendorRegisterServlet")
public class VendorRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		Vendor vendor = new Vendor();
		
		vendor.setRowId(request.getParameter("vendorId"));
		vendor.setCompanyName(request.getParameter("companyName"));
		vendor.setLocation(request.getParameter("location"));
		vendor.setContactPerson(request.getParameter("contactPerson"));
		vendor.setContactNo(Long.parseLong(request.getParameter("contactNo")));
		vendor.setAltContactNo(Long.parseLong(request.getParameter("altContactNo")));
		vendor.setEmailId(request.getParameter("emailId"));
		vendor.setGstNo(request.getParameter("gstNo"));
		vendor.setState(Integer.parseInt(request.getParameter("state")));
		vendor.setWebsite(request.getParameter("website"));
		vendor.setCreditLimit(Long.parseLong(request.getParameter("creditLimit")));
		vendor.setCreditTime(Integer.parseInt(request.getParameter("creditTime")));
		vendor.setAddress(request.getParameter("address"));
		vendor.setCreatedBy((String)session.getAttribute("userId"));
		vendor.setUpdatedBy((String)session.getAttribute("userId"));
		
		if (vendor.new_Vendor()) {
			out.println("1");
		} else {
			out.println("0");
		}
			
	}
}
