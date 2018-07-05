package com.maroonlights.legend;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LegendRegisterServlet")
public class LegendRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		Legend lgnd = new Legend();
		
		lgnd.setRowId(request.getParameter("selectedLegendId"));
		lgnd.setLegendGroup(request.getParameter("legendGroup"));
		lgnd.setCategory(request.getParameter("category"));
		lgnd.setSubCategory(request.getParameter("subCategory"));
		lgnd.setDescription(request.getParameter("description"));
		
		if (lgnd.new_Customer()) {
			out.println("1");
		} else {
			out.println("0");
		}
	}

}
