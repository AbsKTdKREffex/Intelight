package com.maroolights.electrician;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/StaffUpdateServlet")
public class StaffUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ElectricianCompany comp = new ElectricianCompany();
		
		comp.setStaffId(request.getParameter("selectedStaffId"));
		comp.setStaffName(request.getParameter("name"));
		comp.setStaffLocation(request.getParameter("locationStaff"));
		comp.setStaffContactNo(Long.parseLong(request.getParameter("contactNoStaff")));
		comp.setStaffAltContactNo(Long.parseLong(request.getParameter("altContactNoStaff")));
		comp.setElectricianUpdatedBy((String)session.getAttribute("userId"));
		
		if (comp.update_Company_Staff()) {
			out.println("1");
		} else {
			out.println("0");
		}
	}
}
