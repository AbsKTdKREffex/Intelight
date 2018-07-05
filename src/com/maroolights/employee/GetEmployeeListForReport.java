package com.maroolights.employee;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.maroolights.data.MySqlConnect;

/**
 * Servlet implementation class GetEmployeeListForReport
 */
@WebServlet("/GetEmployeeListForReport")
public class GetEmployeeListForReport extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    /*
	    HttpSession session = request.getSession();
	    
		if(session.getAttribute("userName") == null || session.getAttribute("userId") == null )
		{
				response.sendRedirect("index.jsp");
		}
	    */
	    String sql = "SELECT *, concat(firstName,' ',lastName) as empname, date_format(DOB,'%e %M, %Y') as birthday, date_format(joiningDate,'%e %M, %Y') as joindate FROM maroo_data.allemployeelist;";
		
	    conn= MySqlConnect.DBConnection();
		
		while (jArray.length()>0) {
			jArray.remove(0);
		}
		
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
		
			while (rs.next()) {
				 JSONObject arrayObj = new JSONObject();
				 
				 arrayObj.put("employeeId", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("employeeName", rs.getString("empname")==null?"":rs.getString("empname"));
				 arrayObj.put("firstName", rs.getString("firstName")==null?"":rs.getString("firstName"));
				 arrayObj.put("lastName", rs.getString("lastName")==null?"":rs.getString("lastName"));
				 arrayObj.put("department", rs.getString("department")==null?"":rs.getString("department"));
				 arrayObj.put("designation", rs.getString("designation")==null?"":rs.getString("designation"));
				 arrayObj.put("mobileNo", rs.getString("contactNo")==null?"":rs.getString("contactNo"));
				 arrayObj.put("altContactNo", rs.getString("altcontactNo")==null?"":rs.getString("altcontactNo"));
				 arrayObj.put("emailId", rs.getString("emailId")==null?"":rs.getString("emailId"));
				 arrayObj.put("location", rs.getString("location")==null?"":rs.getString("location"));
				 arrayObj.put("birthdaydate", rs.getString("birthday")==null?"":rs.getString("birthday"));
				 arrayObj.put("joiningdate", rs.getString("joindate")==null?"":rs.getString("joindate"));
				 arrayObj.put("reportTo", rs.getString("reportTo")==null?"":rs.getString("reportTo"));
				 arrayObj.put("reporttext", rs.getString("reporttext")==null?"":rs.getString("reporttext"));
				 arrayObj.put("userId", rs.getString("userId")==null?"":rs.getString("userId"));
				 arrayObj.put("status", rs.getString("status")==null?"":rs.getString("status"));
				 arrayObj.put("password", rs.getString("password")==null?"":rs.getString("password"));
				 arrayObj.put("department_text", rs.getString("deptText")==null?"":rs.getString("deptText"));
				 arrayObj.put("designation_text", rs.getString("desigText")==null?"":rs.getString("desigText"));
				 arrayObj.put("status_text", rs.getString("statustext")==null?"":rs.getString("statustext"));
				 
				 jArray.put(arrayObj);
			}
			JSONObject jsonFinal = new JSONObject();
			jsonFinal.putOnce("data", jArray);
			out.print(jsonFinal);
			conn.close();
			}
		catch (Exception e) {
			System.out.println("In Exception");
			e.printStackTrace();
		}
		finally {
			try {
				System.out.println();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
