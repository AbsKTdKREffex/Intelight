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
 * Servlet implementation class GetPOFullfillmentList
 */
@WebServlet("/GetPOFullfillmentList")
public class GetPOFullfillmentList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
	private int i;
       
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
	    String sql = "SELECT * FROM maroo_data.pofulfillmentdetail where inInventory = 0";
		while (jArray.length()>0) {
			jArray.remove(0);
		}

	    conn= MySqlConnect.DBConnection();
	    System.out.println(sql);
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
			i = 1;
		
			while (rs.next()) {
				 JSONObject arrayObj = new JSONObject();
				 
				 arrayObj.put("rowId", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("itemId", rs.getString("itemId")==null?"":rs.getString("itemId"));
				 arrayObj.put("quantity", rs.getString("quantity")==null?"":rs.getString("quantity"));
				 arrayObj.put("amount", rs.getString("amount")==null?"":rs.getString("amount"));
				 arrayObj.put("receipt", rs.getString("receipt")==null?"":rs.getString("receipt"));
				 arrayObj.put("inInventory", rs.getString("inInventory")==null?"":rs.getString("inInventory"));
				 arrayObj.put("createdBy", rs.getString("createdBy")==null?"":rs.getString("createdBy"));
				 arrayObj.put("createdOn", rs.getString("createdOn")==null?"":rs.getString("createdOn"));
				 arrayObj.put("purchaseOrderId", rs.getString("purchaseOrderId")==null?"":rs.getString("purchaseOrderId"));
				 arrayObj.put("vendorId", rs.getString("vendorId")==null?"":rs.getString("vendorId"));
				 arrayObj.put("productId", rs.getString("productId")==null?"":rs.getString("productId"));
				 arrayObj.put("vendorName", rs.getString("vendorName")==null?"":rs.getString("vendorName"));
				 arrayObj.put("formattedCreatedOn", rs.getString("formattedCreatedOn")==null?"":rs.getString("formattedCreatedOn"));
				 arrayObj.put("product_desc", rs.getString("product_desc")==null?"":rs.getString("product_desc"));
				 arrayObj.put("i",i);
				 
				 jArray.put(arrayObj);
				 i++;
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
