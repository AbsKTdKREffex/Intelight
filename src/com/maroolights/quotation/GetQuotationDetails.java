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
 * Servlet implementation class GetQuotationDetails
 */
@WebServlet("/GetQuotationDetails")
public class GetQuotationDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;

	JSONArray jArray = new JSONArray();
	Connection conn = null;
	PreparedStatement stmt = null;
	PreparedStatement stmt1 = null;
	int state;
	int tax;
    double amount ;
    double totalTax ;
    double totalAmount ;
    boolean isSameState;
       
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
	    String sql = "SELECT * FROM maroo_data.quotaiondetails where quotationId = '"+ request.getParameter("selectedQuotationId") +"';";
	    String sql1 = "SELECT state FROM maroo_data.d_companyinfo;";

	    conn= MySqlConnect.DBConnection();
	    
	    try
		{
			stmt1 = conn.prepareStatement(sql1);
			
			ResultSet rs1 = stmt1.executeQuery();
		
			while (rs1.next()) {
				state = Integer.parseInt(rs1.getString("state")==null?"0":rs1.getString("state"));
			}
			conn.close();
		}
	    
		catch (Exception e) {
			e.printStackTrace();
		}
	    
		while (jArray.length()>0) {
			jArray.remove(0);
		}

	    conn= MySqlConnect.DBConnection();
	    
		try
		{
			stmt = conn.prepareStatement(sql);
			
			ResultSet rs = stmt.executeQuery();
		
			while (rs.next()) {
				 JSONObject arrayObj = new JSONObject();
				 if(state == Integer.parseInt(rs.getString("compState")==null?"0":rs.getString("compState")))
				 {
					 tax = Integer.parseInt(rs.getString("Sgst")==null?"0":rs.getString("Sgst")) + Integer.parseInt(rs.getString("Cgst")==null?"0":rs.getString("Cgst"));
					 isSameState = true;
				 }
				 else
				 {
					 tax = Integer.parseInt(rs.getString("Igst")==null?"0":rs.getString("Igst"));
					 isSameState = false;
				 }
				 
				 totalTax = (Integer.parseInt(rs.getString("rate")==null?"0":rs.getString("rate")) * Integer.parseInt(rs.getString("quantity")==null?"0":rs.getString("quantity")) * tax);
				 totalTax = totalTax /100;
				 totalAmount = totalTax + ((Integer.parseInt(rs.getString("rate")==null?"0":rs.getString("rate"))) * (Integer.parseInt(rs.getString("quantity")==null?"0":rs.getString("quantity"))));
				 amount = (Integer.parseInt(rs.getString("rate")==null?"0":rs.getString("rate"))) * (Integer.parseInt(rs.getString("quantity")==null?"0":rs.getString("quantity")));
				 arrayObj.put("rowid", rs.getString("rowId")==null?"":rs.getString("rowId"));
				 arrayObj.put("quotationId", rs.getString("quotationId")==null?"":rs.getString("quotationId"));
				 arrayObj.put("projectId", rs.getString("projectId")==null?"":rs.getString("projectId"));
				 arrayObj.put("productId", rs.getString("productId")==null?"":rs.getString("productId"));
				 arrayObj.put("hsnId", rs.getString("hsnId")==null?"":rs.getString("hsnId"));
				 arrayObj.put("segment", rs.getString("segment")==null?"":rs.getString("segment"));
				 arrayObj.put("quantity", rs.getString("quantity")==null?"":rs.getString("quantity"));
				 arrayObj.put("rate", rs.getString("rate")==null?"":rs.getString("rate"));
				 arrayObj.put("clientId", rs.getString("clientId")==null?"":rs.getString("clientId"));
				 arrayObj.put("tax", tax);
				 arrayObj.put("totalTax", totalTax);
				 arrayObj.put("amount", amount);
				 arrayObj.put("totalAmount", totalAmount);
				 arrayObj.put("isSameState", isSameState);
				 arrayObj.put("stage", rs.getString("stage")==null?"":rs.getString("stage"));
				 arrayObj.put("status", rs.getString("status")==null?"":rs.getString("status"));
				 arrayObj.put("createdOn", rs.getString("createdOn")==null?"":rs.getString("createdOn"));
				 arrayObj.put("projectName", rs.getString("projectName")==null?"":rs.getString("projectName"));
				 arrayObj.put("clientName", rs.getString("clientName")==null?"":rs.getString("clientName"));
				 arrayObj.put("architectcompanyName", rs.getString("architectcompanyName")==null?"":rs.getString("architectcompanyName"));
				 arrayObj.put("stage_text", rs.getString("stage_text")==null?"":rs.getString("stage_text"));
				 arrayObj.put("status_text", rs.getString("status_text")==null?"":rs.getString("status_text"));
				 arrayObj.put("description", rs.getString("description")==null?"":rs.getString("description"));
				 arrayObj.put("createdDate", rs.getString("createdDate")==null?"":rs.getString("createdDate"));
				 arrayObj.put("HsnName", rs.getString("HsnName")==null?"":rs.getString("HsnName"));
				 arrayObj.put("productName", rs.getString("productName")==null?"":rs.getString("productName"));
				 arrayObj.put("imgName", rs.getString("imgName")==null?"":rs.getString("imgName"));
				 arrayObj.put("Sgst", rs.getString("Sgst")==null?"":rs.getString("Sgst"));
				 arrayObj.put("Cgst", rs.getString("Cgst")==null?"":rs.getString("Cgst"));
				 arrayObj.put("Igst", rs.getString("Igst")==null?"":rs.getString("Igst"));
				 arrayObj.put("gold", rs.getString("gold")==null?"":rs.getString("gold"));
				 arrayObj.put("silver", rs.getString("silver")==null?"":rs.getString("silver"));
				 arrayObj.put("bronze", rs.getString("Igst")==null?"":rs.getString("bronze"));
				 /*arrayObj.put("price", rs.getString("Igst")==null?"":rs.getString("price"));*/
				 arrayObj.put("imgUploaded", rs.getString("imgUploaded")==null?"":rs.getString("imgUploaded"));
				 arrayObj.put("contactPersonName", rs.getString("contactPersonName")==null?"":rs.getString("contactPersonName"));
				 arrayObj.put("clientContactId", rs.getString("clientContactId")==null?"":rs.getString("clientContactId"));
				 arrayObj.put("siteAddress", rs.getString("siteAddress")==null?"":rs.getString("siteAddress"));
				 /*arrayObj.put("ProductDescription", rs.getString("brand_desc")+" "+rs.getString("productName"));*/
				 arrayObj.put("availableQty", rs.getString("availableQty")==null?"0":rs.getString("availableQty"));
				 arrayObj.put("installationChrg", rs.getString("installationChrg")==null?"0":rs.getString("installationChrg"));
				 arrayObj.put("transportationChrg", rs.getString("transportationChrg")==null?"0":rs.getString("transportationChrg"));
				 arrayObj.put("packagingChrg", rs.getString("packagingChrg")==null?"0":rs.getString("packagingChrg"));
				 arrayObj.put("serviceTax", rs.getFloat("serviceTax")==0?0:rs.getFloat("serviceTax"));
				 arrayObj.put("discount", rs.getFloat("discount")==0?0:rs.getFloat("discount"));
				 arrayObj.put("additionalInfo", rs.getString("additionalInfo")==null?"":rs.getString("additionalInfo"));
				 
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
