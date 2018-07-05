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

@WebServlet("/GetLedStripsList")
public class GetLedStripsList extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    
	    String sql = "SELECT * FROM maroo_data.productstripsdesc ";
	    
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
				 arrayObj.put("ledBrand", rs.getString("ledBrand")==null?"":rs.getString("ledBrand"));
				 arrayObj.put("series", rs.getString("series")==null?"":rs.getString("series"));
				 arrayObj.put("totalWattage", rs.getString("totalWattage")==null?"":rs.getString("totalWattage"));
				 arrayObj.put("wattage", rs.getString("wattage")==null?"":rs.getString("wattage"));
				 arrayObj.put("voltage", rs.getString("voltage")==null?"":rs.getString("voltage"));
				 arrayObj.put("quality", rs.getString("quality")==null?"":rs.getString("quality"));
				 arrayObj.put("noOfLed", rs.getString("noOfLed")==null?"":rs.getString("noOfLed"));
				 arrayObj.put("lumens", rs.getString("lumens")==null?"":rs.getString("lumens"));
				 arrayObj.put("colour", rs.getString("colour")==null?"":rs.getString("colour"));
				 arrayObj.put("width", rs.getString("width")==null?"":rs.getString("width"));
				 arrayObj.put("waterProof", rs.getString("waterProof")==null?"":rs.getString("waterProof"));
				 arrayObj.put("IP", rs.getString("IP")==null?"":rs.getString("IP"));
				 arrayObj.put("CRI", rs.getString("CRI")==null?"":rs.getString("CRI"));
				 arrayObj.put("warranty", rs.getString("warranty")==null?"":rs.getString("warranty"));
				 arrayObj.put("meter", rs.getString("meter")==null?"":rs.getString("meter"));

				 arrayObj.put("hsnId", rs.getString("hsnId")==null?"":rs.getString("hsnId"));
				 arrayObj.put("gold", rs.getString("gold")==null?"":rs.getString("gold"));
				 arrayObj.put("silver", rs.getString("silver")==null?"":rs.getString("silver"));
				 arrayObj.put("bronze", rs.getString("bronze")==null?"":rs.getString("bronze"));
				 arrayObj.put("additionalInfo", rs.getString("additionalInfo")==null?"":rs.getString("additionalInfo"));
				 arrayObj.put("rate", rs.getString("bronze")==null?"":rs.getString("bronze"));
				 arrayObj.put("imgUploaded", rs.getString("imgUploaded")==null?"":rs.getString("imgUploaded"));
				 arrayObj.put("uploadedImgName", rs.getString("uploadedImgName")==null?"":rs.getString("uploadedImgName"));
				 
				 arrayObj.put("brand_desc", rs.getString("brand_desc")==null?"":rs.getString("brand_desc"));
				 arrayObj.put("ledBrand_desc", rs.getString("ledBrand_desc")==null?"":rs.getString("ledBrand_desc"));
				 arrayObj.put("series_desc", rs.getString("series_desc")==null?"":rs.getString("series_desc"));
				 arrayObj.put("totalWattage_desc", rs.getString("totalWattage_desc")==null?"":rs.getString("totalWattage_desc"));
				 arrayObj.put("wattage_desc", rs.getString("wattage_desc")==null?"":rs.getString("wattage_desc"));
				 arrayObj.put("voltage_desc", rs.getString("voltage_desc")==null?"":rs.getString("voltage_desc"));
				 arrayObj.put("quality_desc", rs.getString("quality_desc")==null?"":rs.getString("quality_desc"));
				 arrayObj.put("noOfLed_desc", rs.getString("noOfLed_desc")==null?"":rs.getString("noOfLed_desc"));
				 arrayObj.put("lumens_desc", rs.getString("lumens_desc")==null?"":rs.getString("lumens_desc"));
				 arrayObj.put("colour_desc", rs.getString("colour_desc")==null?"":rs.getString("colour_desc"));
				 arrayObj.put("width_desc", rs.getString("width_desc")==null?"":rs.getString("width_desc"));
				 arrayObj.put("waterProof_desc", rs.getString("waterProof_desc")==null?"":rs.getString("waterProof_desc"));
				 arrayObj.put("IP_desc", rs.getString("IP_desc")==null?"":rs.getString("IP_desc"));
				 arrayObj.put("CRI_desc", rs.getString("CRI_desc")==null?"":rs.getString("CRI_desc"));
				 arrayObj.put("warranty_desc", rs.getString("warranty_desc")==null?"":rs.getString("warranty_desc"));
				 arrayObj.put("meter_desc", rs.getString("meter_desc")==null?"":rs.getString("meter_desc"));
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
