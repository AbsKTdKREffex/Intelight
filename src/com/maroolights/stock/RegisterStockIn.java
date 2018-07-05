package com.maroolights.stock;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.maroolights.purchaseorder.PurchaseOrderDetails;

@WebServlet("/RegisterStockIn")
public class RegisterStockIn extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		Stock stck = new Stock();
		PurchaseOrderDetails pod = new PurchaseOrderDetails();
		
		pod.setRowId(request.getParameter("rowId"));
		pod.setInInventory(1);
		stck.setRowId(request.getParameter("stockId"));
		stck.setProductId(request.getParameter("productId"));
		stck.setVendorName(request.getParameter("vendorId"));
		stck.setReferenceNo(request.getParameter("rowId"));
		stck.setQuantity(Integer.parseInt(request.getParameter("qty")));
		stck.setActionType("In");
		stck.setCreatedBy((String)session.getAttribute("userId"));
		stck.setUpdatedBy((String)session.getAttribute("userId"));

		if (pod.update_PurchaseDetail())
		{
			if (stck.new_Stock_In())
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
