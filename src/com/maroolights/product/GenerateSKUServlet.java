package com.maroolights.product;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.maroolights.data.MySqlConnect;

@WebServlet("/GenerateSKUServlet")
public class GenerateSKUServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out=response.getWriter();
		String skuCode = "";
	    
	    String sql = "SELECT code FROM maroo_data.d_productlegend where rowId in(''";
	    conn= MySqlConnect.DBConnection();
	    System.out.println(sql);
		if(request.getParameter("for") != null)
		{
			switch (request.getParameter("for")) {
			case "profile":
				sql += ","+request.getParameter("brand")+","+request.getParameter("productName")+","+
						request.getParameter("width")+","+request.getParameter("depth")+","+
						request.getParameter("wattage")+","+request.getParameter("totalWattage")+","+
						request.getParameter("ledName")+","+request.getParameter("ledType")+","+
						request.getParameter("deepTop")+","+request.getParameter("fixtureType")+","+
						request.getParameter("mountingType")+","+request.getParameter("trim")+","+
						request.getParameter("color")+","+request.getParameter("finish")+","+
						request.getParameter("finishType")+","+request.getParameter("diffuser")+","+
						request.getParameter("driver")+","+request.getParameter("driverDetail")+","+
						request.getParameter("warranty")+","+request.getParameter("length")+")";
				
				sql += " ORDER BY FIELD(rowId,"+request.getParameter("brand")+","+request.getParameter("productName")+","+
						request.getParameter("width")+","+request.getParameter("depth")+","+
						request.getParameter("wattage")+","+request.getParameter("totalWattage")+","+
						request.getParameter("ledName")+","+request.getParameter("ledType")+","+
						request.getParameter("deepTop")+","+request.getParameter("fixtureType")+","+
						request.getParameter("mountingType")+","+request.getParameter("trim")+","+
						request.getParameter("color")+","+request.getParameter("finish")+","+
						request.getParameter("finishType")+","+request.getParameter("diffuser")+","+
						request.getParameter("driver")+","+request.getParameter("driverDetail")+","+
						request.getParameter("warranty")+","+request.getParameter("length")+")";
				skuCode = "PR";
			break;
				
			case "spotLight":
				sql += ","+request.getParameter("brand")+","+request.getParameter("productName")+","+
						request.getParameter("wattage")+","+request.getParameter("shape")+","+
						request.getParameter("fixingType")+","+request.getParameter("rimType")+","+
						request.getParameter("recessedType")+","+request.getParameter("recessedSubType")+","+
						request.getParameter("nature")+","+request.getParameter("finishType")+","+
						request.getParameter("finishColor")+","+request.getParameter("LEDChipBrand")+","+
						request.getParameter("colorTemperature")+","+request.getParameter("beamAngle")+","+
						request.getParameter("optics")+","+request.getParameter("diffuser")+","+
						request.getParameter("driver")+","+request.getParameter("dimmType")+","+
						request.getParameter("dimmSubType")+","+request.getParameter("IPRating")+","+
						request.getParameter("size")+","+request.getParameter("cutout")+","+
						request.getParameter("CRI")+","+request.getParameter("warranty")+")";
				
				sql += " ORDER BY FIELD(rowId,"+request.getParameter("brand")+","+request.getParameter("productName")+","+
						request.getParameter("wattage")+","+request.getParameter("shape")+","+
						request.getParameter("fixingType")+","+request.getParameter("rimType")+","+
						request.getParameter("recessedType")+","+request.getParameter("recessedSubType")+","+
						request.getParameter("nature")+","+request.getParameter("finishType")+","+
						request.getParameter("finishColor")+","+request.getParameter("LEDChipBrand")+","+
						request.getParameter("colorTemperature")+","+request.getParameter("beamAngle")+","+
						request.getParameter("optics")+","+request.getParameter("diffuser")+","+
						request.getParameter("driver")+","+request.getParameter("dimmType")+","+
						request.getParameter("dimmSubType")+","+request.getParameter("IPRating")+","+
						request.getParameter("size")+","+request.getParameter("cutout")+","+
						request.getParameter("CRI")+","+request.getParameter("warranty")+")";
				
				skuCode = "SL";
			break;
				
			case "ledStrips":
				sql += ","+request.getParameter("brand")+","+request.getParameter("LEDBrand")+","+
						request.getParameter("series")+","+request.getParameter("totalWattage")+","+
						request.getParameter("wattage")+","+request.getParameter("voltage")+","+
						request.getParameter("quality")+","+request.getParameter("noOfLED")+","+
						request.getParameter("lumens")+","+request.getParameter("colour")+","+
						request.getParameter("width")+","+request.getParameter("waterProof")+","+
						request.getParameter("IP")+","+request.getParameter("CRI")+","+
						request.getParameter("warranty")+","+request.getParameter("meter")+")";
				
				sql += " ORDER BY FIELD(rowId,"+request.getParameter("brand")+","+request.getParameter("LEDBrand")+","+
						request.getParameter("series")+","+request.getParameter("totalWattage")+","+
						request.getParameter("wattage")+","+request.getParameter("voltage")+","+
						request.getParameter("quality")+","+request.getParameter("noOfLED")+","+
						request.getParameter("lumens")+","+request.getParameter("colour")+","+
						request.getParameter("width")+","+request.getParameter("waterProof")+","+
						request.getParameter("IP")+","+request.getParameter("CRI")+","+
						request.getParameter("warranty")+","+request.getParameter("meter")+")";
				skuCode = "LS";
			break;
				
			case "drivers":
				sql += ","+request.getParameter("brand")+","+request.getParameter("outputVoltage")+","+
						request.getParameter("outputWattage")+","+request.getParameter("mA")+","+
						request.getParameter("type")+","+request.getParameter("subType")+","+
						request.getParameter("IP")+","+request.getParameter("warranty")+","+
						request.getParameter("vendor")+","+request.getParameter("ledWattage")+","+
						request.getParameter("dimension")+","+request.getParameter("PF")+")";
				
				sql += " ORDER BY FIELD(rowId,"+request.getParameter("brand")+","+request.getParameter("outputVoltage")+","+
						request.getParameter("outputWattage")+","+request.getParameter("mA")+","+
						request.getParameter("type")+","+request.getParameter("subType")+","+
						request.getParameter("IP")+","+request.getParameter("warranty")+","+
						request.getParameter("vendor")+","+request.getParameter("ledWattage")+","+
						request.getParameter("dimension")+","+request.getParameter("PF")+")";
				skuCode = "DR";
			break;
				
			case "SMPS":
				sql += ","+request.getParameter("brand")+","+request.getParameter("voltage")+","+
						request.getParameter("wattage")+","+request.getParameter("AMPR")+","+
						request.getParameter("IP")+","+request.getParameter("warranty")+","+
						request.getParameter("dimmType")+","+request.getParameter("dimmSubType")+","+
						request.getParameter("casing")+","+request.getParameter("size")+")";
				
				sql += " ORDER BY FIELD(rowId,"+request.getParameter("brand")+","+request.getParameter("voltage")+","+
						request.getParameter("wattage")+","+request.getParameter("AMPR")+","+
						request.getParameter("IP")+","+request.getParameter("warranty")+","+
						request.getParameter("dimmType")+","+request.getParameter("dimmSubType")+","+
						request.getParameter("casing")+","+request.getParameter("size")+")";
				skuCode = "PS";
			break;

			default:
				break;
			}
		}
		System.out.println(sql);
		
		try
		{
            stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
		
			while (rs.next()) {
				skuCode += "-"+rs.getString("code");
			}
			
			switch (request.getParameter("for")) {
			case "profile":
			    	sql = "SELECT count(*) as nos FROM maroo_data.productprofilesdesc where skuId ='"+skuCode+"'";
			break;
			case "SMPS":
		    	sql = "SELECT count(*) as nos FROM maroo_data.productsmpsdesc where skuId ='"+skuCode+"'";
		    break;
			case "ledStrips":
		    	sql = "SELECT count(*) as nos FROM maroo_data.productstripsdesc where skuId ='"+skuCode+"'";
		    break;
			case "drivers":
		    	sql = "SELECT count(*) as nos FROM maroo_data.productdriverdesc where skuId ='"+skuCode+"'";
		    break;
			case "spotLight":
		    	sql = "SELECT count(*) as nos FROM maroo_data.productspotlightdesc where skuId ='"+skuCode+"'";
		    break;

			default:
				break;
			}
			rs = stmt.executeQuery(sql);
			System.out.println(sql);
		
			while (rs.next()) {
				if(rs.getString("nos").equals("0"))
				{
					out.println("1");
				}
				else
				{
					out.println("0");
				}
			}
		}
		catch (Exception e) {
			System.out.println(e);
		}
		finally {
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println(skuCode);
	}
}
