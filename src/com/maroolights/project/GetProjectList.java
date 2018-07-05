package com.maroolights.project;


import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.*;

import com.maroolights.data.MySqlConnect;


/**
 * Servlet implementation class getClientJson
 */
@WebServlet("/GetProjectList")
public class GetProjectList extends HttpServlet {
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
	    String sql = "SELECT * FROM maroo_data.allprojectlistmain;";
		
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
				 arrayObj.put("clientId", rs.getString("clientId")==null?"":rs.getString("clientId"));
				 arrayObj.put("clientContactId", rs.getString("clientContactId")==null?"":rs.getString("clientContactId"));
				 arrayObj.put("architectCompanyId", rs.getString("architectCompanyId")==null?"":rs.getString("architectCompanyId"));
				 arrayObj.put("architectId", rs.getString("architectId")==null?"":rs.getString("architectId"));
				 arrayObj.put("assArchitectId", rs.getString("assArchitectId")==null?"":rs.getString("assArchitectId"));
				 arrayObj.put("projectName", rs.getString("projectName")==null?"":rs.getString("projectName"));
				 arrayObj.put("siteIncharge", rs.getString("siteIncharge")==null?"":rs.getString("siteIncharge"));
				 arrayObj.put("siteInchargeNo", rs.getString("siteInchargeNo")==null?"":rs.getString("siteInchargeNo"));
				 arrayObj.put("overallHeight", rs.getString("overallHeight")==null?"":rs.getString("overallHeight"));
				 arrayObj.put("siteArea", rs.getString("siteArea")==null?"":rs.getString("siteArea"));
				 arrayObj.put("noOfRooms", rs.getString("noOfRooms")==null?"":rs.getString("noOfRooms"));
				 arrayObj.put("siteAddress", rs.getString("siteAddress")==null?"":rs.getString("siteAddress"));
				 arrayObj.put("projcategory", rs.getString("projcategory")==null?"":rs.getString("projcategory"));
				 arrayObj.put("projsubcategory", rs.getString("projsubcategory")==null?"":rs.getString("projsubcategory"));
				 arrayObj.put("clientName", rs.getString("clientName")==null?"":rs.getString("clientName"));
				 arrayObj.put("compState", rs.getString("compState")==null?"":rs.getString("compState"));
				 arrayObj.put("conactPersonName", rs.getString("conactPersonName")==null?"":rs.getString("conactPersonName"));
				 arrayObj.put("architectName", rs.getString("architectName")==null?"":rs.getString("architectName"));
				 arrayObj.put("architectCompanyName", rs.getString("architectCompanyName")==null?"":rs.getString("architectCompanyName"));
				 arrayObj.put("architectAssisName", rs.getString("architectAssisName")==null?"":rs.getString("architectAssisName"));
				 arrayObj.put("projectManagerName", rs.getString("projectManagerName")==null?"":rs.getString("projectManagerName"));
				 
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
