package com.maroolights.electrician;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.maroolights.architect.ArchitectCompany;

/**
 * Servlet implementation class RegisterStaffServlet
 */
@WebServlet("/RegisterStaffServlet")
public class RegisterStaffServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ElectricianCompany comp = new ElectricianCompany();
		
		String elementID1 = UUID.randomUUID().toString();
		
		comp.setCompanyId(request.getParameter("selectedContractorCompanyIdStaffmod"));
		comp.setStaffId(elementID1);
		comp.setStaffName(request.getParameter("name"));
		comp.setStaffLocation(request.getParameter("locationStaff"));
		comp.setStaffContactNo(Long.parseLong(request.getParameter("contactNoStaff")));
		comp.setStaffAltContactNo(Long.parseLong(request.getParameter("altContactNoStaff")));
		
		if (comp.new_Company_Staff()) {
			out.println(elementID1);
		} else {
			out.println("0");
		}
	}
}
