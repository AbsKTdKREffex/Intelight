package com.maroolights.quotation;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterQuotation")
public class RegisterQuotation extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		QuotationDetails qtatn = new QuotationDetails();
		boolean checkstatus = false;
		int id = Integer.parseInt(request.getParameter("count"));
		String quotationId =request.getParameter("quotaionId"); 
		
		qtatn.setQuotationId(quotationId);
		qtatn.setProjectId(request.getParameter("projectId"));
		qtatn.setStatus("new");
		qtatn.setRevisedFrom(null);
		qtatn.setQuotationDetailsCreatedBy((String)session.getAttribute("userId"));
		qtatn.setQuotationDetailsUpdatedBy((String)session.getAttribute("userId"));
		
		if(id == 1)
		{
			if (qtatn.new_Quotation_Details())
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
				qtatn.setRowId(request.getParameter("quotationItemId"));
				qtatn.setStage("85528581");
				qtatn.setQStatus("33800135");
				qtatn.setProductId(request.getParameter("prod"));
				qtatn.setHsnId(request.getParameter("hsn"));
				qtatn.setSegment(request.getParameter("seg"));
				qtatn.setQuantity(Long.parseLong(request.getParameter("qty")));
				qtatn.setRate(Float.parseFloat(request.getParameter("rate")));
				qtatn.setTax(Float.parseFloat(request.getParameter("tax")));
				qtatn.setInstallationChrge(Integer.parseInt(request.getParameter("installation")));
				qtatn.setTransportationChrge(Integer.parseInt(request.getParameter("transportation")));
				qtatn.setPackagingChrge(Integer.parseInt(request.getParameter("packaging")));
				qtatn.setServiceTax(Integer.parseInt(request.getParameter("taxforchrges")));
				qtatn.setDiscount(Integer.parseInt(request.getParameter("discount")));
				qtatn.setAdditionalInfo((request.getParameter("additionalInfo")).equals("undefined")?null:request.getParameter("additionalInfo"));
				qtatn.setQuotationCreatedBy((String)session.getAttribute("userId"));
				qtatn.setQuotationUpdatedBy((String)session.getAttribute("userId"));
				
				if (qtatn.new_Quotation()) {
					out.println(quotationId);
				}
				else
				{
					out.println("0");
				}
			}
	}
}
