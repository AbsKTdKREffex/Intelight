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
 * Servlet implementation class GetPurchaseOrderList
 */
@WebServlet("/GetPurchaseOrderList")
public class GetPurchaseOrderList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    
	    String sql = "SELECT * FROM maroo_data.purchaseorder_details";
	    
	    if(request.getParameter("flag1")!=null) {
    	   if((request.getParameter("flag1").equals("forpurchasefullfillment")))
    	   {
    	    sql +=" where itemstatus_text!='Completed'";
    	   }
	    }
	    sql +="  Group by rowId";
	    System.out.println(sql);
	    conn = MySqlConnect.DBConnection();
		
		while (jArray.length()>0) {
			jArray.remove(0);
		}
		
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
		
			while (rs.next()) {
				if(!(request.getParameter("flag").equals("forpurchasefullfillment") || request.getParameter("flag").equals("forpurchaseorderstatus")))
				{
					if(Integer.parseInt(rs.getString("isEditable"))==1)
					{
						continue;
					}
				}
				 JSONObject arrayObj = new JSONObject();
				 
				 arrayObj.put("rowId", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("vendorId", rs.getString("vendorId")==null?"":rs.getString("vendorId"));
				 arrayObj.put("status", rs.getString("status")==null?"":rs.getString("status"));
				 arrayObj.put("isEditable", rs.getString("isEditable")==null?"":rs.getString("isEditable"));
				 arrayObj.put("companyName", rs.getString("companyName")==null?"":rs.getString("companyName"));
				 arrayObj.put("status_text", rs.getString("status_text")==null?"":rs.getString("status_text"));
				 arrayObj.put("formattedCreatedOn", rs.getString("formattedCreatedOn")==null?"":rs.getString("formattedCreatedOn"));
				 
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
