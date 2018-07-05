package com.maroolights.electrician;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/ContractorCompanyUpdateServlet")
public class ContractorCompanyUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ElectricianCompany comp = new ElectricianCompany();
		
		comp.setCompanyId(request.getParameter("selectedContractorCompanyIdContrctmod"));
		comp.setContractorCompanyName(request.getParameter("companyName"));
		comp.setContractorName(request.getParameter("contractorName"));
		comp.setCompanyLocation(request.getParameter("location"));
		comp.setCompanyContactNo(Long.parseLong(request.getParameter("contactNo")));
		comp.setCompanyAltContactNo(Long.parseLong(request.getParameter("altContactNo")));
		comp.setGstNo(request.getParameter("gstNo"));
		comp.setCompanyEmail(request.getParameter("email"));
		comp.setState(request.getParameter("state"));
		comp.setType(request.getParameter("type"));
		comp.setCompanyUpdatedBy((String)session.getAttribute("userId"));
		
		if (comp.update_Company()) {
			out.println("1");
		} else {
			out.println("0");
		}
		
		
			
	}
}
