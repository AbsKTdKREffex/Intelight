package com.maroolights.quotation;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.maroolights.data.MySqlConnect;

/**
 * Servlet implementation class GetQuotationList
 */
@WebServlet("/GetQuotationList")
public class GetQuotationList extends HttpServlet {
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
	    String sql = "SELECT * FROM maroo_data.uniquequotaiondetails";
	    
//	    if(request.getParameter("cid")!="") {
//	    	sql+=" where quotationId='"+request.getParameter("cid")+"'";
//	    }
	    sql+=" order by createdOn desc"; //out.print(sql+"  "+ request.getParameter("cid"));
	    
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
				 
				 String dateString = rs.getString("createdOn")==null ? "":rs.getString("createdOn");
				 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
				 Date date = sdf.parse(dateString);
				 
				 arrayObj.put("quotationId", rs.getString("quotationId")==null?"":rs.getString("quotationId"));
				 arrayObj.put("projectName", rs.getString("projectName")==null?"":rs.getString("projectName"));
				 arrayObj.put("clientCompany", rs.getString("clientCompany")==null?"":rs.getString("clientCompany"));
				 arrayObj.put("ArchitectCompany", rs.getString("ArchitectCompany")==null?"":rs.getString("ArchitectCompany"));
				 arrayObj.put("revisedFrom", rs.getString("revisedFrom")==null?rs.getString("quotationId"):rs.getString("revisedFrom"));
				 arrayObj.put("createdOn", sdf.format(date));
				 arrayObj.put("createdBy", rs.getString("createdBy")==null ? "":rs.getString("createdBy"));

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
