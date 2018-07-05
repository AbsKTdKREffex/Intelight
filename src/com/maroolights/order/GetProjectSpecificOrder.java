package com.maroolights.order;

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

@WebServlet("/GetProjectSpecificOrder")
public class GetProjectSpecificOrder extends HttpServlet {
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
    	String sql = "SELECT * FROM maroo_data.ordedesc where projectId = "+request.getParameter("projectid")+";";
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
				 
				 arrayObj.put("rowId", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("projectId", rs.getString("projectId")==null?"":rs.getString("projectId"));
				 arrayObj.put("quotationId", rs.getString("quotationId")==null?"":rs.getString("quotationId"));
				 arrayObj.put("billingAddressId", rs.getString("billingAddressId")==null?"":rs.getString("billingAddressId"));
				 arrayObj.put("gstNo", rs.getString("gstNo")==null?"":rs.getString("gstNo"));
				 arrayObj.put("state", rs.getString("state")==null?"":rs.getString("state"));
				 arrayObj.put("contactPersonId", rs.getString("contactPersonId")==null?"":rs.getString("contactPersonId"));
				 arrayObj.put("deliveryAddressId", rs.getString("deliveryAddressId")==null?"":rs.getString("deliveryAddressId"));
				 arrayObj.put("modeOfPayment", rs.getString("modeOfPayment")==null?"":rs.getString("modeOfPayment"));
				 arrayObj.put("invoiceType", rs.getString("invoiceType")==null?"":rs.getString("invoiceType"));
				 arrayObj.put("salesDepartment", rs.getString("salesDepartment")==null?"":rs.getString("salesDepartment"));
				 arrayObj.put("expectedDeilvery", rs.getString("expectedDeilvery")==null?"":rs.getString("expectedDeilvery"));
				 arrayObj.put("formattedCreatedOn", rs.getString("formattedCreatedOn")==null?"":rs.getString("formattedCreatedOn"));
				 arrayObj.put("clientName", rs.getString("clientName")==null?"":rs.getString("clientName"));
				 
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
