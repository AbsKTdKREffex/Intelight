package com.maroolights.employee;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.maroolights.data.MySqlConnect;

@WebServlet("/EmployeeRegisterServlet")
public class EmployeeRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		
		Employee emp = new Employee();
		
		emp.setEmployeeId(request.getParameter("selectedEmployeeId"));
		emp.setFirstName(request.getParameter("firstName"));
		emp.setLastName(request.getParameter("lastName"));
		emp.setDepartment(request.getParameter("department"));
		emp.setDesignation(request.getParameter("designation"));
		emp.setLocation(request.getParameter("location"));
		emp.setMobileNo(Long.parseLong(request.getParameter("mobileno")));
		try {
			emp.setAltContactNo(Long.parseLong(request.getParameter("altContactNo")));
		} catch (Exception e) {
			emp.setAltContactNo(Long.parseLong("0"));
		}
		emp.setEmailId(request.getParameter("emailId"));
		emp.setUserIdEmp(request.getParameter("UserId"));
		emp.setReportTo(request.getParameter("reportTo"));
		try {
			emp.setBirthday(MySqlConnect.convertToSqlDate(request.getParameter("birthDate")));
		} catch (Exception e) {
			
		}
		try {
			emp.setJoinDate(MySqlConnect.convertToSqlDate(request.getParameter("joinDate")));
		} catch (Exception e) {
		}

		emp.setCreatedby((String)session.getAttribute("userId"));
		emp.setUpdatedby((String)session.getAttribute("userId"));
		
		if (emp.new_Employee()) {
			out.println("1");
		}
		else {
			out.println("0");
		}
	}
	
}
