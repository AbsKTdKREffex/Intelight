package com.maroolights.purchaseorder;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterPurchaseOrder")
public class RegisterPurchaseOrder extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		String purchaseOrderId = request.getParameter("purchaseOrderId");
		PurchaseOrder prchsOrdr = new PurchaseOrder();
		boolean checkstatus = false;
		int id = Integer.parseInt(request.getParameter("count"));
		
		prchsOrdr.setPurchaseOrderId(purchaseOrderId);
		prchsOrdr.setVendorId(request.getParameter("selectedVendorId"));
		prchsOrdr.setOrderStatus("10701889");
		prchsOrdr.setOrderCreatedBy((String)session.getAttribute("userId"));
		prchsOrdr.setOrderUpdatedBy((String)session.getAttribute("userId"));
		
		if(id == 1)
		{
			if (prchsOrdr.new_PurchaseOrder())
			{
				checkstatus = true;
			}
			else
			{
				out.println("0");
			}
		}
		else
		{
			checkstatus = true;
		}

			if (checkstatus)
			{
				prchsOrdr.setRowId(request.getParameter("purchaseOrderItemId"));
				prchsOrdr.setStatus("10701889");
				prchsOrdr.setProductId(request.getParameter("productId"));
				prchsOrdr.setQuantity(Long.parseLong(request.getParameter("qty")));
				prchsOrdr.setCreatedBy((String)session.getAttribute("userId"));
				prchsOrdr.setUpdatedBy((String)session.getAttribute("userId"));
				if (prchsOrdr.new_PurchaseOrder_Details()) {
					out.println(purchaseOrderId);
				}
				else
				{
					out.println("0");
				}
			}
	}
}
