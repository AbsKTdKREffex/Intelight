package com.maroolights.project;

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
 * Servlet implementation class ShortLightPlacementDetails
 */
@WebServlet("/ShortLightPlacementDetails")
public class ShortLightPlacementDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("application/json");
	    PrintWriter out=response.getWriter();
	    /*
	    HttpSession session = request.getSession();
	    
		if(session.getAttribute("userName") == null || session.getAttribute("userId") == null )
		{
				response.sendRedirect("index.jsp");
		}
	    */
	    String sql = "SELECT * FROM maroo_data.shrtlightplacement where projectId = '"+request.getParameter("selectedProjectId")+"';";
		
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
				 
				 arrayObj.put("rowid", rs.getString("rowid")==null?"":rs.getString("rowid"));
				 arrayObj.put("roomName", rs.getString("roomName")==null?"":rs.getString("roomName"));
				 arrayObj.put("electrician", rs.getString("electrician")==null?"":rs.getString("electrician"));
				 arrayObj.put("sizeLBH", rs.getString("sizeLBH")==null?"":rs.getString("sizeLBH"));
				 arrayObj.put("lightPlacements", rs.getString("lightPlacements")==null?"":rs.getString("lightPlacements"));
				 arrayObj.put("measurementDetails", rs.getString("measurementDetails")==null?"":rs.getString("measurementDetails"));
				 arrayObj.put("recommendationsGiven", rs.getString("recommendationsGiven")==null?"":rs.getString("recommendationsGiven"));
				 arrayObj.put("samplesToBrought", rs.getString("samplesToBrought")==null?"":rs.getString("samplesToBrought"));
				 arrayObj.put("samplesGiven", rs.getString("samplesGiven")==null?"":rs.getString("samplesGiven"));
				 arrayObj.put("provisionForDrivers", rs.getString("provisionForDrivers")==null?"":rs.getString("provisionForDrivers"));
				 arrayObj.put("picsTaken", rs.getString("picsTaken")==null?"":rs.getString("picsTaken"));
				 arrayObj.put("picsTakenTable", rs.getString("picsTakenTable")==null?"":rs.getString("picsTakenTable"));
				 arrayObj.put("electricianName", rs.getString("electricianName")==null?"":rs.getString("electricianName"));
				 arrayObj.put("shrt", rs.getString("shrt")==null?"":rs.getString("shrt"));
				 
				 
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
