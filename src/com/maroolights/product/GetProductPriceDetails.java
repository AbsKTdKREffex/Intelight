package com.maroolights.product;



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
import org.json.JSONArray;
import org.json.JSONObject;

import com.maroolights.data.MySqlConnect;

/**
 * Servlet implementation class getClientJson
 */
@WebServlet("/GetProductPriceDetails")
public class GetProductPriceDetails extends HttpServlet {
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
				response.sendRedirect("index.html");
		}*/
	    String SelectedProdId = request.getParameter("SelectedProdId");
		conn= MySqlConnect.DBConnection();
		
		try
		{
			PreparedStatement stmt = conn.prepareStatement("SELECT * FROM maroo_data.d_product_price where productId ='" + SelectedProdId + "';");
			ResultSet rs = stmt.executeQuery();
			
			while (jArray.length()>0) {
				jArray.remove(0);
			}
			
			while (rs.next()) {
				 JSONObject arrayObj = new JSONObject();
				 
				 arrayObj.put("rowId", rs.getString("rowId")=="0"?"":rs.getString("rowId"));
				 arrayObj.put("productId", rs.getString("productId")=="0"?"":rs.getString("productId"));
				 arrayObj.put("segment", rs.getString("segment")=="0"?"":rs.getString("segment"));
				 arrayObj.put("category", rs.getString("category")=="0"?"":rs.getString("category"));
				 arrayObj.put("quantity", rs.getString("quantity")=="0"?"":rs.getString("quantity"));
				 arrayObj.put("price", rs.getString("price")=="0"?"":rs.getString("price"));
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
