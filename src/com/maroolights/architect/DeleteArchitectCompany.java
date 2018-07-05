package com.maroolights.architect;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.maroolights.data.MySqlConnect;

/**
 * Servlet implementation class DeleteCompany
 */
@WebServlet("/DeleteCompany")
public class DeleteArchitectCompany extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
		PrintWriter out = response.getWriter();
		
		//Delete Employee
		
		Connection conn = MySqlConnect.DBConnection();;
		PreparedStatement stmt;
		try {
			stmt = conn.prepareStatement("DELETE FROM maroo_data.d_company where rowId ='"+ request.getParameter("DeleteEmpId") +"';");
			int i= stmt.executeUpdate();
			if(i > 0)
			{
				
				out.println("1");
			}
			else 
			{
				out.println("0");
				
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
