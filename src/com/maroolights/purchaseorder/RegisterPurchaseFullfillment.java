package com.maroolights.purchaseorder;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterPurchaseFullfillment")
public class RegisterPurchaseFullfillment extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		PurchaseOrder prchsOrdr = new PurchaseOrder();
		
		prchsOrdr.setRowId(request.getParameter("orderfullfillmentId"));
		prchsOrdr.setPurchaseOrderItemId(request.getParameter("poitemid"));
		prchsOrdr.setQuantity(Long.parseLong(request.getParameter("qty")));
		prchsOrdr.setAmount(Long.parseLong(request.getParameter("rate")));
		prchsOrdr.setReceipt(request.getParameter("receiptNo"));
		prchsOrdr.setIsEditable(1);
		prchsOrdr.setOrderUpdatedBy((String)session.getAttribute("userId"));
		prchsOrdr.setCreatedBy((String)session.getAttribute("userId"));
		prchsOrdr.setUpdatedBy((String)session.getAttribute("userId"));
		if(request.getParameter("fullfilled").equals("yes"))
		{
			prchsOrdr.setOrderStatus("18606461");
		}
		else
		{
			prchsOrdr.setOrderStatus("01479101");
		}
		prchsOrdr.update_PurchaseOrder_Status(request.getParameter("poitemid"));
		prchsOrdr.make_purchaseOrderNotEditable(request.getParameter("purchaseOrderId"));
		if (prchsOrdr.new_PurchaseDetail())
		{
			out.println("1");
		}
		else
		{
			out.println("0");
		}
	}
}
