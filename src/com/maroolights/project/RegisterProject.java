package com.maroolights.project;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/RegisterProject")
public class RegisterProject extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		Project ob = new Project();
		
		ob.setProjectId(request.getParameter("selectedProjectId"));
		ob.setClientId(request.getParameter("clientID"));
		ob.setArchitectCompanyId(request.getParameter("architectID"));
		ob.setClientContactId(request.getParameter("contactPersonID"));
		ob.setArchitectId(request.getParameter("acrhitectNameID"));
		ob.setAssArchitectId(request.getParameter("asstArchitectID"));
		ob.setProjectName(request.getParameter("projectName"));
		ob.setSiteIncharge(request.getParameter("siteIncharge"));
		try {
			ob.setSiteInchargeNo(Long.parseLong(request.getParameter("siteInchargeNo")));
		} catch (Exception e) {
			ob.setSiteInchargeNo(Long.parseLong("0"));
		}
		ob.setOverallHeight(request.getParameter("overallHeight"));
		ob.setElectrician(request.getParameter("electrician"));
		ob.setElectricianNo(Long.parseLong(request.getParameter("electricianNo")));
		ob.setContractorElectrician(request.getParameter("contractorElectrician"));
		ob.setContractorElectricianNo(Long.parseLong(request.getParameter("contractorElectricianNo")));
		ob.setSiteArea(request.getParameter("siteArea"));
		ob.setNoOfRooms(request.getParameter("noOfRooms"));
		ob.setSiteAddress(request.getParameter("siteAddress"));
		ob.setProjectCategory(request.getParameter("category"));
		ob.setProjectSubCategory(request.getParameter("subCategory"));
		ob.setProjectManager(request.getParameter("managerID"));
		ob.setSiteTiming(request.getParameter("siteTiming"));
		ob.setProjectUpdatedBy((String)session.getAttribute("userId"));
		ob.setProjectCreatedBy((String)session.getAttribute("userId"));
		
		if (ob.new_Project()) {
			out.println("1");
		} else {
			out.println("0");
		}		
	}
}
