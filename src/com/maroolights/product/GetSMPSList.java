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

@WebServlet("/GetSMPSList")
public class GetSMPSList extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    
	    String sql = "SELECT * FROM maroo_data.productsmpsdesc ";
	    
		System.out.println(sql);
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
				 arrayObj.put("brand", rs.getString("brand")==null?"":rs.getString("brand"));
				 arrayObj.put("voltage", rs.getString("voltage")==null?"":rs.getString("voltage"));
				 arrayObj.put("wattage", rs.getString("wattage")==null?"":rs.getString("wattage"));
				 arrayObj.put("AMPR", rs.getString("AMPR")==null?"":rs.getString("AMPR"));
				 arrayObj.put("IP", rs.getString("IP")==null?"":rs.getString("IP"));
				 arrayObj.put("warranty", rs.getString("warranty")==null?"":rs.getString("warranty"));
				 arrayObj.put("dimmType", rs.getString("dimmType")==null?"":rs.getString("dimmType"));
				 arrayObj.put("dimmSubType", rs.getString("dimmSubType")==null?"":rs.getString("dimmSubType"));
				 arrayObj.put("casing", rs.getString("casing")==null?"":rs.getString("casing"));
				 arrayObj.put("size", rs.getString("size")==null?"":rs.getString("size"));

				 arrayObj.put("hsnId", rs.getString("hsnId")==null?"":rs.getString("hsnId"));
				 arrayObj.put("gold", rs.getString("gold")==null?"":rs.getString("gold"));
				 arrayObj.put("silver", rs.getString("silver")==null?"":rs.getString("silver"));
				 arrayObj.put("bronze", rs.getString("bronze")==null?"":rs.getString("bronze"));
				 arrayObj.put("additionalInfo", rs.getString("additionalInfo")==null?"":rs.getString("additionalInfo"));
				 arrayObj.put("rate", rs.getString("bronze")==null?"":rs.getString("bronze"));
				 arrayObj.put("imgUploaded", rs.getString("imgUploaded")==null?"":rs.getString("imgUploaded"));
				 arrayObj.put("uploadedImgName", rs.getString("uploadedImgName")==null?"":rs.getString("uploadedImgName"));
				 
				 arrayObj.put("brand_desc", rs.getString("brand_desc")==null?"":rs.getString("brand_desc"));
				 arrayObj.put("voltage_desc", rs.getString("voltage_desc")==null?"":rs.getString("voltage_desc"));
				 arrayObj.put("wattage_desc", rs.getString("wattage_desc")==null?"":rs.getString("wattage_desc"));
				 arrayObj.put("AMPR_desc", rs.getString("AMPR_desc")==null?"":rs.getString("AMPR_desc"));
				 arrayObj.put("IP_desc", rs.getString("IP_desc")==null?"":rs.getString("IP_desc"));
				 arrayObj.put("warranty_desc", rs.getString("warranty_desc")==null?"":rs.getString("warranty_desc"));
				 arrayObj.put("dimmType_desc", rs.getString("dimmType_desc")==null?"":rs.getString("dimmType_desc"));
				 arrayObj.put("dimmSubType_desc", rs.getString("dimmSubType_desc")==null?"":rs.getString("dimmSubType_desc"));
				 arrayObj.put("casing_desc", rs.getString("casing_desc")==null?"":rs.getString("casing_desc"));
				 arrayObj.put("size_desc", rs.getString("size_desc")==null?"":rs.getString("size_desc"));
				 arrayObj.put("skuId", rs.getString("skuId")==null?"":rs.getString("skuId"));
				 arrayObj.put("productDesc", rs.getString("productDesc")==null?"":rs.getString("productDesc"));
				 	 
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
