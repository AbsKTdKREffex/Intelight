package com.maroolights.purchaseorder;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.maroolights.data.MySqlConnect;

/**
 * Servlet implementation class UpdatePurchaseOrder
 */
@WebServlet("/UpdatePurchaseOrder")
public class UpdatePurchaseOrder extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private boolean deleteresult;
	private boolean check;
	private boolean result;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		String purchaseOrderId = request.getParameter("purchaseOrderId");
		PurchaseOrder prchsOrdr = new PurchaseOrder();
		boolean checkstatus = false;
		int id = Integer.parseInt(request.getParameter("count"));
		
		prchsOrdr.setPurchaseOrderId(purchaseOrderId);
		prchsOrdr.setVendorId(request.getParameter("selectedVendorId"));
		prchsOrdr.setOrderStatus("c0e59421-d56a-4e37-811c-3c46822905ab");
		prchsOrdr.setOrderUpdatedBy((String)session.getAttribute("userId"));
		
		if(id == 1)
		{
			if (prchsOrdr.update_PurchaseOrder())
			{
				checkstatus = true;
			}
			else
			{
				out.println("0");
			}

			if(request.getParameter("deleteidCount")!=null)
			{
				int deleteidCount=Integer.parseInt(request.getParameter("deleteidCount"));
				for(int i=0;i<deleteidCount;i++) {
					deleteresult=prchsOrdr.PurchaseOrder_delete(request.getParameter("deleteid["+i+"]"),request.getParameter("purchaseOrderId"));
				}
			}
		}
		else
		{
			checkstatus = true;
		}

			if (checkstatus)
			{
				String elementID = UUID.randomUUID().toString();
				prchsOrdr.setRowId(elementID);
				prchsOrdr.setProductId(request.getParameter("productId"));
				prchsOrdr.setQuantity(Long.parseLong(request.getParameter("qty")));
				prchsOrdr.setUpdatedBy((String)session.getAttribute("userId"));
				check=prchsOrdr.PurchaseOrder_Details_check(request.getParameter("productId"),request.getParameter("purchaseOrderId"));
				if(check)
				{
					prchsOrdr.setStatus("c0e59421-d56a-4e37-811c-3c46822905ab");
					result=prchsOrdr.PurchaseOrder_Details_update(request.getParameter("productId"),request.getParameter("purchaseOrderId"));
				}	
				else
				{
					result=prchsOrdr.new_PurchaseOrder_Details();
				}
			}
	}
}
