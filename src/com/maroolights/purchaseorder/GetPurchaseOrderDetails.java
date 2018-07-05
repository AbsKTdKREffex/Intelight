package com.maroolights.purchaseorder;

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
 * Servlet implementation class GetPurchaseOrderDetails
 */
@WebServlet("/GetPurchaseOrderDetails")
public class GetPurchaseOrderDetails extends HttpServlet {
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
	    String sql = "SELECT * FROM maroo_data.purchasedetails where purchaseOrderId = '"+ request.getParameter("selectedPurchaseOrderId") +"'";
	    if(request.getParameter("flag") != null)
	    {
	    	if(request.getParameter("flag").equals("fromEdit"))
	    	{
		    	sql += " group by rowId";
	    	}
	    }
		while (jArray.length()>0) {
			jArray.remove(0);
		}

	    conn= MySqlConnect.DBConnection();
	    
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
		
			while (rs.next()) {
				 JSONObject arrayObj = new JSONObject();
				 
				 arrayObj.put("rowId", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("purchaseOrderId", rs.getString("purchaseOrderId")==null?"":rs.getString("purchaseOrderId"));
				 arrayObj.put("status", rs.getString("status")==null?"":rs.getString("status"));
				 arrayObj.put("productId", rs.getString("productId")==null?"":rs.getString("productId"));
				 arrayObj.put("quantity", rs.getString("quantity")==null?"":rs.getString("quantity"));
				 arrayObj.put("vendorId", rs.getString("vendorId")==null?"":rs.getString("vendorId"));
				 arrayObj.put("companyName", rs.getString("companyName")==null?"":rs.getString("companyName"));
				 arrayObj.put("location", rs.getString("location")==null?"":rs.getString("location"));
				 arrayObj.put("contactPerson", rs.getString("contactPerson")==null?"":rs.getString("contactPerson"));
				 arrayObj.put("contactNo", rs.getString("contactNo")==null?"":rs.getString("contactNo"));
				 arrayObj.put("altContactNo", rs.getString("altContactNo")==null?"":rs.getString("altContactNo"));
				 arrayObj.put("product_desc", rs.getString("product_desc")==null?"":rs.getString("product_desc"));
				 
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
