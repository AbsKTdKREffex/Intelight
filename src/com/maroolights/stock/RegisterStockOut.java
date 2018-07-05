package com.maroolights.stock;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class RegisterStockOut
 */
@WebServlet("/RegisterStockOut")
public class RegisterStockOut extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		Stock stck = new Stock();
		
		stck.setRowId(request.getParameter("stockId"));
		stck.setProductId(request.getParameter("productId"));
		stck.setReferenceNo(request.getParameter("orderItemId"));
		stck.setQuantity(Integer.parseInt(request.getParameter("qty")));
		stck.setActionType("Out");
		stck.setStatus("75565110");
		stck.setCreatedBy((String)session.getAttribute("userId"));
		stck.setUpdatedBy((String)session.getAttribute("userId"));
		
			if (stck.new_Stock_Out())
			{
				if (stck.update_Order_Item())
				{
					out.println("1");
				}
				else
				{
					out.println("0");
				}
			}
			else
			{
				out.println("0");
			}
	}
}
