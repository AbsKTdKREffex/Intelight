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
 * Servlet implementation class GetOrderList
 */
@WebServlet("/GetOrderList")
public class GetOrderList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
	private int i;
	int tax;
    double amount ;
    double totalTax ;
    double totalAmount ;
       
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
    	String sql = "SELECT * FROM maroo_data.order_details where orderId = "+request.getParameter("oid");
    	if(request.getParameter("type")!=null)
    	{
    		if(request.getParameter("type").equals("pending"))
    		{
    			sql+=" and status='85528581'";
    		}
    		if(request.getParameter("type").equals("comp"))
    		{
    			sql+=" and status='75565110'";
    		}
    	}
    		
	    conn= MySqlConnect.DBConnection();
		
		while (jArray.length()>0) {
			jArray.remove(0);
		}
		
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
			i = 1;
			while (rs.next()) {
				
				 JSONObject arrayObj = new JSONObject();

				 if(rs.getString("state_check").equals("same"))
				 {
					 tax = Integer.parseInt(rs.getString("sgst")==null?"0":rs.getString("sgst")) + Integer.parseInt(rs.getString("cgst")==null?"0":rs.getString("cgst"));
				 }
				 else
				 {
					 tax = Integer.parseInt(rs.getString("igst")==null?"0":rs.getString("igst"));
				 }

				 totalTax = (Integer.parseInt(rs.getString("rate")==null?"0":rs.getString("rate")) * Integer.parseInt(rs.getString("quantity")==null?"0":rs.getString("quantity")) * tax);
				 totalTax = totalTax /100;
				 totalAmount = totalTax + ((Integer.parseInt(rs.getString("rate")==null?"0":rs.getString("rate"))) * (Integer.parseInt(rs.getString("quantity")==null?"0":rs.getString("quantity"))));
				 amount = (Integer.parseInt(rs.getString("rate")==null?"0":rs.getString("rate"))) * (Integer.parseInt(rs.getString("quantity")==null?"0":rs.getString("quantity")));
//				 System.out.println(amount);
				 arrayObj.put("rowId", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("orderId", rs.getString("orderId")==null?"":rs.getString("orderId"));
				 arrayObj.put("productId", rs.getString("productId")==null?"":rs.getString("productId"));
				 arrayObj.put("quantity", rs.getString("quantity")==null?"":rs.getString("quantity"));
				 arrayObj.put("rate", rs.getString("rate")==null?"":rs.getString("rate"));
				 arrayObj.put("segment", rs.getString("segment")==null?"":rs.getString("segment"));
				 arrayObj.put("hsnId", rs.getString("hsnId")==null?"":rs.getString("hsnId"));
				 arrayObj.put("cgst", rs.getString("cgst")==null?"":rs.getString("cgst"));
				 arrayObj.put("sgst", rs.getString("sgst")==null?"":rs.getString("sgst"));
				 arrayObj.put("igst", rs.getString("igst")==null?"":rs.getString("igst"));
				 arrayObj.put("stage", rs.getString("stage")==null?"":rs.getString("stage"));
				 arrayObj.put("status", rs.getString("status")==null?"":rs.getString("status"));
				 arrayObj.put("priority", rs.getString("priority")==null?"":rs.getString("priority"));
				 arrayObj.put("formattedCreatedOn", rs.getString("formattedCreatedOn")==null?"":rs.getString("formattedCreatedOn"));
				 arrayObj.put("clientName", rs.getString("clientName")==null?"":rs.getString("clientName"));
				 arrayObj.put("state_check", rs.getString("state_check")==null?"":rs.getString("state_check"));
				 arrayObj.put("availableQty", rs.getString("availableQty")==null?"0":rs.getString("availableQty"));
				 arrayObj.put("balanceQty", rs.getString("status_text")==null?"":(rs.getString("status_text").equals("Completed")?"0":rs.getString("quantity")));
				 arrayObj.put("status_text", rs.getString("status_text")==null?"":rs.getString("status_text"));
				 arrayObj.put("skuId", rs.getString("skuId")==null?"":rs.getString("skuId"));
				 arrayObj.put("product_desc", rs.getString("product_desc")==null?"":rs.getString("product_desc"));
				 arrayObj.put("installationChrg", rs.getString("installationChrg")==null?"":rs.getString("installationChrg"));
				 arrayObj.put("transportationChrg", rs.getString("transportationChrg")==null?"":rs.getString("transportationChrg"));
				 arrayObj.put("packagingChrg", rs.getString("packagingChrg")==null?"":rs.getString("packagingChrg"));
				 arrayObj.put("serviceTax", rs.getFloat("serviceTax")==0?0:rs.getFloat("serviceTax"));
				 arrayObj.put("discount", rs.getFloat("discount")==0?0:rs.getFloat("discount"));
				 arrayObj.put("additionalInfo", rs.getString("additionalInfo")==null?"":rs.getString("additionalInfo"));
				 arrayObj.put("i",i);
				 arrayObj.put("tax", tax);
				 arrayObj.put("amount", amount);
				 arrayObj.put("totalTax", totalTax);
				 arrayObj.put("totalAmount", totalAmount);
				 
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
				e.printStackTrace();
			}
		}
	}

}
