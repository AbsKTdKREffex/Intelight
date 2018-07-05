package com.maroolights.data;

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
import javax.servlet.http.HttpSession;

@WebServlet("/ChangePasswordServlet")
public class ChangePasswordServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		Connection conn = MySqlConnect.DBConnection();
		PreparedStatement stmt;
		try {
			stmt = conn.prepareStatement("update maroo_data.d_employee set password = '"+request.getParameter("cnfrmPass")+"' where rowId ='"+ (String)session.getAttribute("userId") +"';");
			System.out.println(stmt);
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
