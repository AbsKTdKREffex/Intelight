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

/**
 * Servlet implementation class GetUniqueOrder
 */
@WebServlet("/GetUniqueOrder")
public class GetUniqueOrder extends HttpServlet {
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
    	String sql = "SELECT * FROM maroo_data.incompleteorders";
    	
		if(request.getParameter("type")!=null) {
			if(request.getParameter("type").equals("pending")) {
				sql +=" where status='Received'";
			}if(request.getParameter("type").equals("comp")) {
				sql +=" where status='Completed'";
			}
			if(request.getParameter("type").equals("null")) {
				sql +=" GROUP BY orderId";
			}
		}
		else
		{
			sql +=" GROUP BY orderId";
		}
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
				 
				 arrayObj.put("rowId", rs.getString("orderId")==null?"":rs.getString("orderId"));
				 arrayObj.put("deliveryAddressId", rs.getString("deliveryAddressId")==null?"":rs.getString("deliveryAddressId"));
				 arrayObj.put("expectedDeilvery", rs.getString("expectedDeilvery")==null?"":rs.getString("expectedDeilvery"));
				 arrayObj.put("clientName", rs.getString("companyName")==null?"":rs.getString("companyName"));
				 
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
