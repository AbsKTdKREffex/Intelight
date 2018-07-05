package com.maroolights.project;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/UpdateProjectRoomDetails")
public class UpdateProjectRoomDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		ProjectRoom ob = new ProjectRoom();
		
		ob.setRoomId(request.getParameter("selectedRoomId"));
		ob.setRoomName(request.getParameter("roomName"));
//		ob.setElectrician(request.getParameter("electricianID"));
		ob.setSizeLBH(request.getParameter("sizeLBH"));
		ob.setLightPlacements(request.getParameter("lightPlacements"));
		ob.setMeasurementDetails(request.getParameter("measurementDetails"));
		ob.setRecommendationsGiven(request.getParameter("recommendationsGiven"));
//		ob.setSamplesToBrought(request.getParameter("samplesToBrought"));
//		ob.setSamplesGiven(request.getParameter("samplesGiven"));
		ob.setProvisionForDrivers(request.getParameter("provisionForDrivers"));
		
		if (request.getParameter("picsTaken") != null) {
			ob.setPicsTaken(true);
		} else {
			ob.setPicsTaken(false);
		}
		ob.setRoomUpdatedBy((String)session.getAttribute("userId"));
		
		if (ob.update_ProjectRoom()) {
			out.println("1");
		} else {
			out.println("0");
		}
			
	}
	
}
