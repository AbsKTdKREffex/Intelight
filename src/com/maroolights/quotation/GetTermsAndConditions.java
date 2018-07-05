package com.maroolights.quotation;

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
 * Servlet implementation class GetTermsAndConditions
 */
@WebServlet("/GetTermsAndConditions")
public class GetTermsAndConditions extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Connection conn;
	JSONArray jArray = new JSONArray();
	private PreparedStatement stmt;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)throws IOException, ServletException{
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    String sql = "SELECT * FROM maroo_data.d_termsandcondition"; 
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
				 arrayObj.put("value", rs.getString("value")==null?"":rs.getString("value"));
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
