package com.maroonlights.legend;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

import com.maroolights.data.MySqlConnect;

/**
 * Servlet implementation class GetStatusList
 */
@WebServlet("/GetStateList")
public class GetStateList extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
	
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	
    	response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
//	    HttpSession session = request.getSession();
//		if(session.getAttribute("userName") == null || session.getAttribute("userId") == null )
//		{
//				response.sendRedirect("index.html");
//		}
		conn= MySqlConnect.DBConnection();
		
		try
		{
			PreparedStatement stmt = conn.prepareStatement("SELECT * FROM maroo_data.d_states;");
			ResultSet rs = stmt.executeQuery();
			
			while (jArray.length()>0) {
				jArray.remove(0);
			}
			
			while (rs.next()) {
				 JSONObject arrayObj = new JSONObject();
				 
				 arrayObj.put("stateId", rs.getString("rowno"));
				 arrayObj.put("state", rs.getString("state"));
				 arrayObj.put("statetype", rs.getString("statetype"));
				 
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
    	
	}

}
