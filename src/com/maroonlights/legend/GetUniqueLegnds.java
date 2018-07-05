package com.maroonlights.legend;

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

@WebServlet("/GetUniqueLegnds")
public class GetUniqueLegnds extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    
	    conn= MySqlConnect.DBConnection();
		
		try
		{
			PreparedStatement stmt = conn.prepareStatement("SELECT distinct legendgroup as legendtype, 'Legend Group' as category FROM maroo_data.d_legend\r\n" + 
					"union\r\n" + 
					"SELECT distinct category, 'Category' as category FROM maroo_data.d_legend\r\n" + 
					"union\r\n" + 
					"SELECT distinct subcategory, 'Sub Category' as category FROM maroo_data.d_legend;");
			ResultSet rs = stmt.executeQuery();
			
			while (jArray.length()>0) {
				jArray.remove(0);
			}
			
			while (rs.next()) {
				 JSONObject arrayObj = new JSONObject();
				 
				 arrayObj.put("legendtype", rs.getString("legendtype"));
				 arrayObj.put("category", rs.getString("category"));
				 
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
