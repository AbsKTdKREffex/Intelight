package com.maroolights.architect;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterArchitectServlet")
public class RegisterArchitectServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ArchitectCompany comp = new ArchitectCompany();
		
		comp.setCompanyId(request.getParameter("selectedCompanyIdArchmod"));
		comp.setArchitectId(request.getParameter("newArchitectIdMod"));
		comp.setFirstName(request.getParameter("firstName"));
		comp.setLastName(request.getParameter("lastName"));
		comp.setArchLocation(request.getParameter("locationArch"));
		comp.setArchContactNo(Long.parseLong(request.getParameter("contactNoArch")));
		comp.setArchAltContactNo(Long.parseLong(request.getParameter("altContactNo")));
		comp.setArchEmail(request.getParameter("emailIdArch"));
		comp.setArchAddress(request.getParameter("addressArch"));
		comp.setDesignation(request.getParameter("designationArchList"));
		comp.setArchitectCreatedBy((String)session.getAttribute("userId"));
		comp.setArchitectUpdatedBy((String)session.getAttribute("userId"));
		
		if (comp.new_Architect()) {
			out.println("1");
		} else {
			out.println("0");
		}
		
		
			
	}
}
