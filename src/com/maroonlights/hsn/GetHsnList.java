package com.maroonlights.hsn;

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
 * Servlet implementation class GetHsnList
 */
@WebServlet("/GetHsnList")
public class GetHsnList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    
	    String sql = "SELECT * FROM maroo_data.d_hsn;";
		
	    conn = MySqlConnect.DBConnection();
		
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
				 arrayObj.put("Hsnid", rs.getString("Hsnid")==null?"":rs.getString("Hsnid").toUpperCase());
				 arrayObj.put("Sgst", rs.getString("Sgst")==null?"":rs.getString("Sgst"));
				 arrayObj.put("Cgst", rs.getString("Cgst")==null?"":rs.getString("Cgst"));
				 arrayObj.put("Igst", rs.getString("Igst")==null?"":rs.getString("Igst"));
				 arrayObj.put("Sgstper", rs.getString("Sgst")==null?"":rs.getString("Sgst")+'%');
				 arrayObj.put("Cgstper", rs.getString("Cgst")==null?"":rs.getString("Cgst")+'%');
				 arrayObj.put("Igstper", rs.getString("Igst")==null?"":rs.getString("Igst")+'%');
				 
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
