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

/**
 * Servlet implementation class GetSpecificProduct
 */
@WebServlet("/GetSpecificProduct")
public class GetSpecificProduct extends HttpServlet {
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
	    String sql = "SELECT * FROM maroo_data.productdesc where rowId = '"+request.getParameter("ProductId")+"';";
	    
	    conn= MySqlConnect.DBConnection();
		
		while (jArray.length()>0) {
			jArray.remove(0);
		}
		
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
			
			int rate ;
			Float finalRate;
		
			while (rs.next()) {
				 String category = request.getParameter("categoryId");
				 String gold = "18888989",silver="77191199",bronze="33989950";
				 JSONObject arrayObj = new JSONObject();
				 if(category.equals(gold))
				 {
					 rate = Integer.parseInt(rs.getString("gold")==null?"":rs.getString("gold"));
					 arrayObj.put("rate", rate);
					 finalRate = Float.parseFloat(String.valueOf(rate * Integer.parseInt(request.getParameter("qty"))));
					 arrayObj.put("stdrate", finalRate);
				 }
				 else if (category.equals(silver))
				 {
					 rate = Integer.parseInt(rs.getString("silver")==null?"":rs.getString("silver"));
					 arrayObj.put("rate", rate);
					 finalRate = Float.parseFloat(String.valueOf(rate * Integer.parseInt(request.getParameter("qty"))));
					 arrayObj.put("stdrate", finalRate);
				 }
				 else if (category.equals(bronze))
				 {
					 rate = Integer.parseInt(rs.getString("bronze")==null?"":rs.getString("bronze"));
					 arrayObj.put("rate", rate);
					 finalRate = Float.parseFloat(String.valueOf(rate * Integer.parseInt(request.getParameter("qty"))));
					 arrayObj.put("stdrate", finalRate);
				 }
				 arrayObj.put("gst", rs.getString("Igst")==null?"":rs.getString("Igst"));
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
