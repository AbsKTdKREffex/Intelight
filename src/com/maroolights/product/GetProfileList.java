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

@WebServlet("/GetProfileList")
public class GetProfileList extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    
	    String sql = "SELECT * FROM maroo_data.productprofilesdesc ";
	    
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
				 arrayObj.put("productName", rs.getString("productName")==null?"":rs.getString("productName"));
				 arrayObj.put("width", rs.getString("width")==null?"":rs.getString("width"));
				 arrayObj.put("depth", rs.getString("depth")==null?"":rs.getString("depth"));
				 arrayObj.put("wattage", rs.getString("wattage")==null?"":rs.getString("wattage"));
				 arrayObj.put("totalWattage", rs.getString("totalWattage")==null?"":rs.getString("totalWattage"));
				 arrayObj.put("ledName", rs.getString("ledName")==null?"":rs.getString("ledName"));
				 arrayObj.put("ledType", rs.getString("ledType")==null?"":rs.getString("ledType"));
				 arrayObj.put("deepTop", rs.getString("deepTop")==null?"":rs.getString("deepTop"));
				 arrayObj.put("fixtureType", rs.getString("fixtureType")==null?"":rs.getString("fixtureType"));
				 arrayObj.put("mountingType", rs.getString("mountingType")==null?"":rs.getString("mountingType"));
				 arrayObj.put("trim", rs.getString("trim")==null?"":rs.getString("trim"));
				 arrayObj.put("color", rs.getString("color")==null?"":rs.getString("color"));
				 arrayObj.put("finish", rs.getString("finish")==null?"":rs.getString("finish"));
				 arrayObj.put("finishType", rs.getString("finishType")==null?"":rs.getString("finishType"));
				 arrayObj.put("diffuser", rs.getString("diffuser")==null?"":rs.getString("diffuser"));
				 arrayObj.put("driver", rs.getString("driver")==null?"":rs.getString("driver"));
				 arrayObj.put("driverDetail", rs.getString("driverDetail")==null?"":rs.getString("driverDetail"));
				 arrayObj.put("warranty", rs.getString("warranty")==null?"":rs.getString("warranty"));
				 arrayObj.put("length", rs.getString("length")==null?"":rs.getString("length"));

				 arrayObj.put("hsnId", rs.getString("hsnId")==null?"":rs.getString("hsnId"));
				 arrayObj.put("gold", rs.getString("gold")==null?"":rs.getString("gold"));
				 arrayObj.put("silver", rs.getString("silver")==null?"":rs.getString("silver"));
				 arrayObj.put("bronze", rs.getString("bronze")==null?"":rs.getString("bronze"));
				 arrayObj.put("additionalInfo", rs.getString("additionalInfo")==null?"":rs.getString("additionalInfo"));
				 arrayObj.put("rate", rs.getString("bronze")==null?"":rs.getString("bronze"));
				 arrayObj.put("imgUploaded", rs.getString("imgUploaded")==null?"":rs.getString("imgUploaded"));
				 arrayObj.put("uploadedImgName", rs.getString("uploadedImgName")==null?"":rs.getString("uploadedImgName"));
				 
				 arrayObj.put("brand_desc", rs.getString("brand_desc")==null?"":rs.getString("brand_desc"));
				 arrayObj.put("productName_desc", rs.getString("productName_desc")==null?"":rs.getString("productName_desc"));
				 arrayObj.put("width_desc", rs.getString("width_desc")==null?"":rs.getString("width_desc"));
				 arrayObj.put("depth_desc", rs.getString("depth_desc")==null?"":rs.getString("depth_desc"));
				 arrayObj.put("wattage_desc", rs.getString("wattage_desc")==null?"":rs.getString("wattage_desc"));
				 arrayObj.put("totalWattage_desc", rs.getString("totalWattage_desc")==null?"":rs.getString("totalWattage_desc"));
				 arrayObj.put("ledName_desc", rs.getString("ledName_desc")==null?"":rs.getString("ledName_desc"));
				 arrayObj.put("ledType_desc", rs.getString("ledType_desc")==null?"":rs.getString("ledType_desc"));
				 arrayObj.put("deepTop_desc", rs.getString("deepTop_desc")==null?"":rs.getString("deepTop_desc"));
				 arrayObj.put("fixtureType_desc", rs.getString("fixtureType_desc")==null?"":rs.getString("fixtureType_desc"));
				 arrayObj.put("mountingType_desc", rs.getString("mountingType_desc")==null?"":rs.getString("mountingType_desc"));
				 arrayObj.put("trim_desc", rs.getString("trim_desc")==null?"":rs.getString("trim_desc"));
				 arrayObj.put("color_desc", rs.getString("color_desc")==null?"":rs.getString("color_desc"));
				 arrayObj.put("finish_desc", rs.getString("finish_desc")==null?"":rs.getString("finish_desc"));
				 arrayObj.put("finishType_desc", rs.getString("finishType_desc")==null?"":rs.getString("finishType_desc"));
				 arrayObj.put("diffuser_desc", rs.getString("diffuser_desc")==null?"":rs.getString("diffuser_desc"));
				 arrayObj.put("driver_desc", rs.getString("driver_desc")==null?"":rs.getString("driver_desc"));
				 arrayObj.put("driverDetail_desc", rs.getString("driverDetail_desc")==null?"":rs.getString("driverDetail_desc"));
				 arrayObj.put("warranty_desc", rs.getString("warranty_desc")==null?"":rs.getString("warranty_desc"));
				 arrayObj.put("length_desc", rs.getString("length_desc")==null?"":rs.getString("length_desc"));
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
