package com.maroonlights.hsn;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/HsnRegisterServlet")
public class HsnRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		Hsn hsn = new Hsn();
		
		hsn.setRowId(request.getParameter("selectedHsnRowId"));
		hsn.setHsnId(request.getParameter("hsnId"));
		hsn.setSgst(request.getParameter("sgst"));
		hsn.setCgst(request.getParameter("cgst"));
		hsn.setIgst(request.getParameter("igst"));
		hsn.setCreatedBy((String)session.getAttribute("userId"));
		hsn.setUpdatedBy((String)session.getAttribute("userId"));
		
		if (hsn.new_Hsn()) {
			out.println("1");
		} else {
			out.println("0");
		}
			
	}
}
