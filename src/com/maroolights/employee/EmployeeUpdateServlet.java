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

@WebServlet("/EmployeeUpdateServlet")
public class EmployeeUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private String permissions;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		Employee emp = new Employee();
		
		emp.setEmployeeId(request.getParameter("selectedEmployeeId"));
		emp.setFirstName(request.getParameter("firstName"));
		emp.setLastName(request.getParameter("lastName"));
		emp.setDepartment(request.getParameter("department"));
		emp.setDesignation(request.getParameter("designation"));
		emp.setLocation(request.getParameter("location"));
		try {
			emp.setMobileNo(Long.parseLong(request.getParameter("mobileno")));
		} catch (Exception e) {
			emp.setMobileNo(Long.parseLong("0"));
		}
		try {
			emp.setAltContactNo(Long.parseLong(request.getParameter("altContactNo")));
		} catch (Exception e) {
			emp.setAltContactNo(Long.parseLong("0"));
		}
		emp.setEmailId(request.getParameter("emailId"));
		emp.setUserIdEmp(request.getParameter("UserId"));
		emp.setUserId(request.getParameter("UserId"));
		emp.setLocation(request.getParameter("location"));
		if (request.getParameter("statuscheckbox") != null) {
			emp.setStatus("87515515");
		} else {
			emp.setStatus("98798779");
		}
		
		try {
			emp.setBirthday(MySqlConnect.convertToSqlDate(request.getParameter("birthDate")));
		} catch (Exception e) {
			
		}
		try {
			emp.setJoinDate(MySqlConnect.convertToSqlDate(request.getParameter("joinDate")));
		} catch (Exception e) {
			
		}
		emp.setReportTo(request.getParameter("reportTo"));
		emp.setUpdatedby((String)session.getAttribute("userId"));

		if(request.getParameter("flag") != null)
		{
			if(request.getParameter("flag").equals("selfUpdate"))
			{
				if (emp.selfupdate_Employee()) {
					out.println("1");
				} else {
					out.println("0");
				}
			}
			else if(request.getParameter("flag").equals("assigningPer"))
			{
				permissions="";
				for(int i=0;i<Integer.parseInt(request.getParameter("count"));i++) {
					if(i == 0)
					{
						permissions+=request.getParameter("permission["+i+"]");
					}
					else
					{
						permissions+=","+request.getParameter("permission["+i+"]");
					}
				}
				emp.setPermissions(permissions);
				if (emp.assigningPermissions()) {
					out.println("1");
				} else {
					out.println("0");
				}
			}
		}
		else 
		{
			if (emp.update_Employee()) {
				out.println("1");
			} else {
				out.println("0");
			}
		}
	}
}
