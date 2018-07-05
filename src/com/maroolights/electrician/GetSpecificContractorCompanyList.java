package com.maroolights.electrician;

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
 * Servlet implementation class GetSpecificContractorCompanyList
 */
@WebServlet("/GetSpecificContractorCompanyList")
public class GetSpecificContractorCompanyList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    
	    String sql = "SELECT * FROM maroo_data.contractorcompanylist where rowId='"+request.getParameter("companyId")+"';";
		
	    conn = MySqlConnect.DBConnection();
		
		while (jArray.length()>0) {
			jArray.remove(0);
		}
		
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
		
			while (rs.next()) {
				 JSONObject arrayObj = new JSONObject();
				 
				 arrayObj.put("contractorcompanyId", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("contractorCompanyName", rs.getString("contractorCompanyName")==null?"":rs.getString("contractorCompanyName"));
				 arrayObj.put("contractorName", rs.getString("contractorName")==null?"":rs.getString("contractorName"));
				 arrayObj.put("location", rs.getString("location")==null?"":rs.getString("location"));
				 arrayObj.put("contactNo", rs.getString("contactNo")==null?"":rs.getString("contactNo"));
				 arrayObj.put("altContactNo", rs.getString("altContactNo")==null?"":rs.getString("altContactNo"));
				 arrayObj.put("email", rs.getString("email")==null?"":rs.getString("email"));
				 arrayObj.put("type", rs.getString("type")==null?"":rs.getString("type"));
				 arrayObj.put("type_text", rs.getString("type_text")==null?"":rs.getString("type_text"));
				 arrayObj.put("state", rs.getString("state")==null?"":rs.getString("state"));
				 arrayObj.put("state_text", rs.getString("state_text")==null?"":rs.getString("state_text"));
				 arrayObj.put("gstNo", rs.getString("gstNo")==null?"":rs.getString("gstNo"));
				 
				 jArray.put(arrayObj);
			}
			JSONObject jsonFinal = new JSONObject();
			jsonFinal.putOnce("data", jArray);
			out.print(jsonFinal);
			}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
