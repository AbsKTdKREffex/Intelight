package com.maroolights.product;

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
 * Servlet implementation class GetNullImgList
 */
@WebServlet("/GetNullImgList")
public class GetNullImgList extends HttpServlet {
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
	    String sql = "SELECT * FROM maroo_data.productdesc where imgUploaded is null";
		
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
				 arrayObj.put("productId", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("brand", rs.getString("brand")==null?"":rs.getString("brand"));
				 arrayObj.put("type", rs.getString("type")==null?"":rs.getString("type"));
				 arrayObj.put("hsnId", rs.getString("hsnId")==null?"":rs.getString("hsnId"));
				 arrayObj.put("productName", rs.getString("productName")==null?"":rs.getString("productName"));
				 arrayObj.put("watt", rs.getString("watt")==null?"":rs.getString("watt"));
				 arrayObj.put("color", rs.getString("color")==null?"":rs.getString("color"));
				 arrayObj.put("nature", rs.getString("nature")==null?"":rs.getString("nature"));
				 arrayObj.put("degree", rs.getString("degree")==null?"":rs.getString("degree"));
				 arrayObj.put("size", rs.getString("size")==null?"":rs.getString("size"));
				 arrayObj.put("finish", rs.getString("finish")==null?"":rs.getString("finish"));
				 arrayObj.put("driver", rs.getString("driver")==null?"":rs.getString("driver"));
				 arrayObj.put("driver_type", rs.getString("driver_type")==null?"":rs.getString("driver_type"));
				 arrayObj.put("brand_desc", rs.getString("brand_desc")==null?"":rs.getString("brand_desc"));
				 arrayObj.put("type_desc", rs.getString("type_desc")==null?"":rs.getString("type_desc"));
				 arrayObj.put("hsn_desc", rs.getString("hsn_desc")==null?"":rs.getString("hsn_desc"));
				 arrayObj.put("price", rs.getString("price")==null?"":rs.getString("price"));
				 arrayObj.put("Sgst", rs.getString("Sgst")==null?"":rs.getString("Sgst"));
				 arrayObj.put("Cgst", rs.getString("Cgst")==null?"":rs.getString("Cgst"));
				 arrayObj.put("Igst", rs.getString("Igst")==null?"":rs.getString("Igst"));
				 arrayObj.put("Ugst", rs.getString("Ugst")==null?"":rs.getString("Ugst"));
				 	 
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
