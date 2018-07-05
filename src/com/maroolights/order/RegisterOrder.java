package com.maroolights.order;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterOrder")
public class RegisterOrder extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		String orderId = request.getParameter("orderId");
		Order ordr = new Order();
		boolean checkstatus = false;
		int id = Integer.parseInt(request.getParameter("count"));
		
		ordr.setOrderId(orderId);
		ordr.setProjectId(request.getParameter("projectId"));
		ordr.setQuotationId(request.getParameter("quotationId"));
		ordr.setBillingAddressId(request.getParameter("billingAddressId"));
		ordr.setGstNo(request.getParameter("gstNo"));
		ordr.setState(request.getParameter("stateId"));
		ordr.setContactPersonId(request.getParameter("contactPersonId"));
		ordr.setDeliveryAddressId(request.getParameter("deliveryAddress"));
		ordr.setModeOfPayment(request.getParameter("modeOfPay"));
		ordr.setInvoiceType(request.getParameter("invoiceType"));
		ordr.setSalesDepartment(request.getParameter("salesDept"));
		ordr.setExpectedDeilvery(request.getParameter("expectedDelivery"));
		ordr.setOrderCreatedBy((String)session.getAttribute("userId"));
		ordr.setOrderUpdatedBy((String)session.getAttribute("userId"));
		
		if(id == 1)
		{
			if (ordr.new_Order())
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
				ordr.setRowId(request.getParameter("orderItemId"));
				ordr.setProductId(request.getParameter("prod"));
				ordr.setQuantity(Long.parseLong(request.getParameter("qty")));
				ordr.setRate(Float.parseFloat(request.getParameter("rate")));
				ordr.setSegment(request.getParameter("seg"));
				ordr.setHsnId(request.getParameter("hsn"));
				ordr.setCgst(request.getParameter("cgst"));
				ordr.setSgst(request.getParameter("sgst"));
				ordr.setIgst(request.getParameter("igst"));
				ordr.setStage("33800135");
				ordr.setStatus("85528581");
				ordr.setPriority(request.getParameter("priority"));
				ordr.setInstallationChrge(Integer.parseInt(request.getParameter("installation")));
				ordr.setTransportationChrge(Integer.parseInt(request.getParameter("transportation")));
				ordr.setPackagingChrge(Integer.parseInt(request.getParameter("packaging")));
				ordr.setServiceTax(Integer.parseInt(request.getParameter("taxforchrges")));
				ordr.setDiscount(Integer.parseInt(request.getParameter("discount")));
				ordr.setAdditionalInfo((request.getParameter("additionalInfo")).equals("undefined")?null:request.getParameter("additionalInfo"));
				ordr.setOrderItemCreatedBy((String)session.getAttribute("userId"));
				ordr.setOrderItemUpdatedBy((String)session.getAttribute("userId"));
				
				if (ordr.new_Order_Details())
				{
					out.println(orderId);
				}
				else
				{
					out.println("0");
				}
			}
	}
}
