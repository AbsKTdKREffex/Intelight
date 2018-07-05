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

@WebServlet("/GetSpotLightList")
public class GetSpotLightList extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    
	    String sql = "SELECT * FROM maroo_data.productspotlightdesc ";
	    
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
				 arrayObj.put("wattage", rs.getString("wattage")==null?"":rs.getString("wattage"));
				 arrayObj.put("shape", rs.getString("shape")==null?"":rs.getString("shape"));
				 arrayObj.put("fixingType", rs.getString("fixingType")==null?"":rs.getString("fixingType"));
				 arrayObj.put("rimType", rs.getString("rimType")==null?"":rs.getString("rimType"));
				 arrayObj.put("recessedType", rs.getString("recessedType")==null?"":rs.getString("recessedType"));
				 arrayObj.put("recessedSubType", rs.getString("recessedSubType")==null?"":rs.getString("recessedSubType"));
				 arrayObj.put("nature", rs.getString("nature")==null?"":rs.getString("nature"));
				 arrayObj.put("finishType", rs.getString("finishType")==null?"":rs.getString("finishType"));
				 arrayObj.put("finishColor", rs.getString("finishColor")==null?"":rs.getString("finishColor"));
				 arrayObj.put("ledChipBrand", rs.getString("ledChipBrand")==null?"":rs.getString("ledChipBrand"));
				 arrayObj.put("colorTemperature", rs.getString("colorTemperature")==null?"":rs.getString("colorTemperature"));
				 arrayObj.put("beamAngle", rs.getString("beamAngle")==null?"":rs.getString("beamAngle"));
				 arrayObj.put("optics", rs.getString("optics")==null?"":rs.getString("optics"));
				 arrayObj.put("diffuser", rs.getString("diffuser")==null?"":rs.getString("diffuser"));
				 arrayObj.put("driver", rs.getString("driver")==null?"":rs.getString("driver"));
				 arrayObj.put("dimmType", rs.getString("dimmType")==null?"":rs.getString("dimmType"));
				 arrayObj.put("dimmSubType", rs.getString("dimmSubType")==null?"":rs.getString("dimmSubType"));
				 arrayObj.put("IPRating", rs.getString("IPRating")==null?"":rs.getString("IPRating"));
				 arrayObj.put("size", rs.getString("size")==null?"":rs.getString("size"));
				 arrayObj.put("cutout", rs.getString("cutout")==null?"":rs.getString("cutout"));
				 arrayObj.put("CRI", rs.getString("CRI")==null?"":rs.getString("CRI"));
				 arrayObj.put("warranty", rs.getString("warranty")==null?"":rs.getString("warranty"));

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
				 arrayObj.put("wattage_desc", rs.getString("wattage_desc")==null?"":rs.getString("wattage_desc"));
				 arrayObj.put("shape_desc", rs.getString("shape_desc")==null?"":rs.getString("shape_desc"));
				 arrayObj.put("fixingType_desc", rs.getString("fixingType_desc")==null?"":rs.getString("fixingType_desc"));
				 arrayObj.put("rimType_desc", rs.getString("rimType_desc")==null?"":rs.getString("rimType_desc"));
				 arrayObj.put("recessedType_desc", rs.getString("recessedType_desc")==null?"":rs.getString("recessedType_desc"));
				 arrayObj.put("recessedSubType_desc", rs.getString("recessedSubType_desc")==null?"":rs.getString("recessedSubType_desc"));
				 arrayObj.put("nature_desc", rs.getString("nature_desc")==null?"":rs.getString("nature_desc"));
				 arrayObj.put("finishType_desc", rs.getString("finishType_desc")==null?"":rs.getString("finishType_desc"));
				 arrayObj.put("finishColor_desc", rs.getString("finishColor_desc")==null?"":rs.getString("finishColor_desc"));
				 arrayObj.put("ledChipBrand_desc", rs.getString("ledChipBrand_desc")==null?"":rs.getString("ledChipBrand_desc"));
				 arrayObj.put("colorTemperature_desc", rs.getString("colorTemperature_desc")==null?"":rs.getString("colorTemperature_desc"));
				 arrayObj.put("beamAngle_desc", rs.getString("beamAngle_desc")==null?"":rs.getString("beamAngle_desc"));
				 arrayObj.put("optics_desc", rs.getString("optics_desc")==null?"":rs.getString("optics_desc"));
				 arrayObj.put("diffuser_desc", rs.getString("diffuser_desc")==null?"":rs.getString("diffuser_desc"));
				 arrayObj.put("driver_desc", rs.getString("driver_desc")==null?"":rs.getString("driver_desc"));
				 arrayObj.put("dimmType_desc", rs.getString("dimmType_desc")==null?"":rs.getString("dimmType_desc"));
				 arrayObj.put("dimmSubType_desc", rs.getString("dimmSubType_desc")==null?"":rs.getString("dimmSubType_desc"));
				 arrayObj.put("IPRating_desc", rs.getString("IPRating_desc")==null?"":rs.getString("IPRating_desc"));
				 arrayObj.put("size_desc", rs.getString("size_desc")==null?"":rs.getString("size_desc"));
				 arrayObj.put("cutout_desc", rs.getString("cutout_desc")==null?"":rs.getString("cutout_desc"));
				 arrayObj.put("CRI_desc", rs.getString("CRI_desc")==null?"":rs.getString("CRI_desc"));
				 arrayObj.put("warranty_desc", rs.getString("warranty_desc")==null?"":rs.getString("warranty_desc"));
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
