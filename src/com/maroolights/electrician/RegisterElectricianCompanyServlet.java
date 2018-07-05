package com.maroolights.electrician;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterElectricianCompanyServlet")
public class RegisterElectricianCompanyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ElectricianCompany comp = new ElectricianCompany();
		
		comp.setCompanyId(request.getParameter("newCompanyId"));
		comp.setStaffId(request.getParameter("selectedElectricianId"));
		comp.setContractorCompanyName(request.getParameter("companyName"));
		comp.setContractorName(request.getParameter("contractorName"));
		comp.setCompanyLocation(request.getParameter("location"));
		comp.setCompanyContactNo(Long.parseLong(request.getParameter("contactNo")));
		comp.setCompanyAltContactNo(Long.parseLong(request.getParameter("altContactNo")));
		comp.setCompanyEmail(request.getParameter("email"));
		comp.setType(request.getParameter("type"));
		comp.setState(request.getParameter("state"));
		comp.setGstNo(request.getParameter("gstNo"));
		comp.setStaffName(request.getParameter("name"));
		comp.setStaffLocation(request.getParameter("locationStaff"));
		comp.setStaffContactNo(Long.parseLong(request.getParameter("contactNoStaff")));
		comp.setStaffAltContactNo(Long.parseLong(request.getParameter("altContactNoStaff")));
		comp.setCompanyCreatedBy((String)session.getAttribute("userId"));
		comp.setCompanyUpdatedBy((String)session.getAttribute("userId"));
		comp.setElectricianCreatedBy((String)session.getAttribute("userId"));
		comp.setElectricianUpdatedBy((String)session.getAttribute("userId"));

		if (comp.new_Company()) {
			if (comp.new_Company_Staff()) {
				out.println("1");
			} else {
				out.println("0");
			}
		} else {
			out.println("0");
		}
	}
}
