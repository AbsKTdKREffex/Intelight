package com.maroolights.architect;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/ArchitectCompanyUpdateServlet")
public class ArchitectCompanyUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ArchitectCompany comp = new ArchitectCompany();
		
		comp.setCompanyId(request.getParameter("selectedCompanyIdCompmod"));
		comp.setCompanyName(request.getParameter("companyName"));
		comp.setCompanyLocation(request.getParameter("location"));
		comp.setCompanyWebsite(request.getParameter("website"));
		comp.setCompanyContactNo(Long.parseLong(request.getParameter("contactNo")));
		comp.setCompanyEmail(request.getParameter("emailId"));
		comp.setCompanyAddress(request.getParameter("address"));
		comp.setSource(request.getParameter("source"));
		comp.setState(request.getParameter("state"));
		comp.setGstNo(request.getParameter("gstNo"));
		comp.setCompanyUpdatedBy((String)session.getAttribute("userId"));
		
		if (comp.update_Company()) {
			out.println("1");
		} else {
			out.println("0");
		}
		
		
			
	}
}
