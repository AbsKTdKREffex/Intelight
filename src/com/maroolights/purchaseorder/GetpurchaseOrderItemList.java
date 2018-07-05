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
 * Servlet implementation class GetpurchaseOrderItemList
 */
@WebServlet("/GetpurchaseOrderItemList")
public class GetpurchaseOrderItemList extends HttpServlet {
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
	    String sql = "SELECT * FROM maroo_data.checkbalancedfullfill where purchaseOrderId = '"+ request.getParameter("purchaseOrderId")+"'" ;
	    if(request.getParameter("status") == null)
	    {
	    	sql+= " and status IN ('10701889','04715808','01479101')";
	    }
//	    if(request.getParameter("f") != null)
//	    {
//		    if(!(request.getParameter("f").equals("all")))
//		    {
//		    	sql += " where purchaseOrderId = '"+ request.getParameter("purchaseOrderId") +"' and status IN ('c0e59421-d56a-4e37-811c-3c46822905ab','786fac1c-f70f-4eea-bbbb-d2d5885fd812','0775ca6a-798c-4533-af44-d7e856374831')";
//		    }
//	    }
		while (jArray.length()>0) {
			jArray.remove(0);
		}
		System.out.println(sql);
	    conn= MySqlConnect.DBConnection();
	    
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
			i = 1;
		
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
				 arrayObj.put("status_text", rs.getString("status_text")==null?"":rs.getString("status_text"));
				 arrayObj.put("product_desc", rs.getString("product_desc")==null?"":rs.getString("product_desc"));
				 arrayObj.put("balancedQty", rs.getString("balancedQty")==null?"":rs.getString("balancedQty"));
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
