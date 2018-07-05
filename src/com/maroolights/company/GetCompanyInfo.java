package com.maroolights.company;

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
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import com.maroolights.data.MySqlConnect;

/**
 * Servlet implementation class GetCompanyInfo
 */
@WebServlet("/GetCompanyInfo")
public class GetCompanyInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JSONArray jArray = new JSONArray(); 
	Connection conn = null;
	PreparedStatement stmt = null;
	private String logoImage;
	protected void doGet(HttpServletRequest request, HttpServletResponse response)throws IOException, ServletException {
		HttpSession session = request.getSession();
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    String sql="SELECT * FROM maroo_data.d_companyinfo";
	    conn=  MySqlConnect.DBConnection();	//out.print(sql);	
		while (jArray.length()>0) {
			jArray.remove(0);
		}		
		try
		{
			stmt = conn.prepareStatement(sql);			
			ResultSet rs = stmt.executeQuery();		
			while (rs.next()) {
				JSONObject arrayObj = new JSONObject();
				session.setAttribute("comapnyState", rs.getString("state"));
			    arrayObj.put("companyName", rs.getString("companyName")==null ? "":rs.getString("companyName"));
			    arrayObj.put("location", rs.getString("location")==null ? " ":rs.getString("location"));
			    arrayObj.put("city", rs.getString("city")==null ? " ":rs.getString("city"));
			    arrayObj.put("state", rs.getString("state")==null ? " ":rs.getString("state"));
				arrayObj.put("website", rs.getString("website")==null ? " ":rs.getString("website"));
				arrayObj.put("landlineNo", rs.getString("landlineNo")==null ? " ":rs.getString("landlineNo"));
				arrayObj.put("altContactNumber", rs.getString("altContactNumber")==null ? " ":rs.getString("altContactNumber"));
				arrayObj.put("emailid", rs.getString("emailid")==null ? " ":rs.getString("emailid"));
				arrayObj.put("GSTNumber", rs.getString("GSTNumber")==null ? " ":rs.getString("GSTNumber"));
				arrayObj.put("Bank", rs.getString("Bank")==null ? " ":rs.getString("Bank"));
				arrayObj.put("BankAddress", rs.getString("BankAddress")==null ? " ":rs.getString("BankAddress"));
				arrayObj.put("AccountNo", rs.getString("AccountNo")==null ? " ":rs.getString("AccountNo"));
				arrayObj.put("IFSCCode", rs.getString("IFSCCode")==null ? " ":rs.getString("IFSCCode"));
				arrayObj.put("MIRCCode", rs.getString("MIRCCode")==null ? " ":rs.getString("MIRCCode"));
				arrayObj.put("createdBy", rs.getString("createdBy")==null ? " ":rs.getString("createdBy"));
				arrayObj.put("createdOn", rs.getString("createdOn")==null ? " ":rs.getString("createdOn"));
				jArray.put(arrayObj);
			}
			JSONObject jsonFinal = new JSONObject();
			jsonFinal.putOnce("data", jArray);
			out.print(jsonFinal);
			conn.close();
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
