package com.maroolights.stock;

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

@WebServlet("/GetAvailableStock")
public class GetAvailableStock extends HttpServlet {
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
    	String sql = "SELECT * FROM maroo_data.availablestock;";
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
				 
				 arrayObj.put("productid", rs.getString("productid")==null?"":rs.getString("productid"));
				 arrayObj.put("qtyIn", rs.getString("qtyIn")==null?"":rs.getString("qtyIn"));
				 arrayObj.put("qtyOut", rs.getString("qtyOut")==null?"":rs.getString("qtyOut"));
				 arrayObj.put("productType", rs.getString("productType")==null?"":rs.getString("productType"));
				 arrayObj.put("skuId", rs.getString("skuId")==null?"":rs.getString("skuId"));
				 arrayObj.put("product_desc", rs.getString("product_desc")==null?"":rs.getString("product_desc"));
				 arrayObj.put("availableQty", rs.getString("availableQty")==null?"":rs.getString("availableQty"));
				 arrayObj.put("i", i);
				 i++;
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
