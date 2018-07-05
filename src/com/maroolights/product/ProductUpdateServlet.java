package com.maroolights.product;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/ProductUpdateServlet")
public class ProductUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		Product obj = new Product();

		obj.setProductId(request.getParameter("selectedProductId"));
		obj.setBrand(request.getParameter("brand"));
		obj.setWattage(request.getParameter("wattage"));
		obj.setShape(request.getParameter("shape"));
		obj.setFixingType(request.getParameter("fixingType"));
		obj.setRimType(request.getParameter("rimType"));
		obj.setRecessedType(request.getParameter("recessedType"));
		obj.setRecessedSubType(request.getParameter("recessedSubType"));
		obj.setNature(request.getParameter("nature"));
		obj.setFinishType(request.getParameter("finishType"));
		obj.setFinishColor(request.getParameter("finishColor"));
		obj.setLEDChipBrand(request.getParameter("LEDChipBrand"));
		obj.setColorTemperature(request.getParameter("colorTemperature"));
		obj.setBeamAngle(request.getParameter("beamAngle"));
		obj.setOptics(request.getParameter("optics"));
		obj.setDiffuser(request.getParameter("diffuser"));
		obj.setDriver(request.getParameter("driver"));
		obj.setDimmType(request.getParameter("dimmType"));
		obj.setDimmSubType(request.getParameter("dimmSubType"));
		obj.setIPRating(request.getParameter("IPRating"));
		obj.setSize(request.getParameter("size"));
		obj.setCutout(request.getParameter("cutout"));
		obj.setCRI(request.getParameter("CRI"));
		obj.setWarranty(request.getParameter("warranty"));
		
		obj.setHsnId(request.getParameter("hsnId"));
		obj.setGold(Integer.parseInt(request.getParameter("gold")));
		obj.setSilver(Integer.parseInt(request.getParameter("silver")));
		obj.setBronze(Integer.parseInt(request.getParameter("bronze")));
		obj.setAdditionalInfo(request.getParameter("additionalInformation"));
		obj.setCreatedBy((String)session.getAttribute("userId"));
		obj.setUpdatedBy((String)session.getAttribute("userId"));
		
		if(request.getParameter("for") != null)
		{
			if(request.getParameter("for").equals("spotLight"))
			{
				if (obj.update_SpotLightProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
			}
			/*if(request.getParameter("for").equals("profile"))
			{
				obj.setBrand(request.getParameter("brandInProfileDD"));
				obj.setType(request.getParameter("typeInProfileDD"));
				obj.setShape(request.getParameter("shapeInProfileDD"));
				if (obj.update_ProfileProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
			}
			else if(request.getParameter("for").equals("ledLights"))
			{
				obj.setBrand(request.getParameter("brandInLedLightsDD"));
				obj.setType(request.getParameter("typeInLedProfileDD"));
				obj.setShape(request.getParameter("shapeInLedProfileDD"));
				obj.setColor(request.getParameter("colorInLedLights"));
				if (obj.update_LedLightsProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
			}
			else if(request.getParameter("for").equals("ledStrips"))
			{
				obj.setBrand(request.getParameter("brandInLedStripsDD"));
				obj.setColor(request.getParameter("colorInLedStrips"));
				obj.setWattage(request.getParameter("wattageInLedStrips"));
				if (obj.update_LedStripsProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
			}
			else if(request.getParameter("for").equals("drivers"))
			{
				obj.setBrand(request.getParameter("brandInDriversDD"));
				obj.setWattage(request.getParameter("wattageInDrivers"));
				if (obj.update_DriversProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
			}*/
		}
		}
		
	}
