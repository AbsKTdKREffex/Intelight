package com.maroolights.product;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/ProductRegisterServlet")
public class ProductRegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		
		switch (request.getParameter("for")) {
			case "profile":
				ProductProfile obj = new ProductProfile();
				
				obj.setProductId(request.getParameter("skuId"));
				obj.setBrand(request.getParameter("brand"));
				obj.setHsnId(request.getParameter("hsnId"));
				obj.setGold(Integer.parseInt(request.getParameter("gold")));
				obj.setSilver(Integer.parseInt(request.getParameter("silver")));
				obj.setBronze(Integer.parseInt(request.getParameter("bronze")));
				obj.setAdditionalInfo(request.getParameter("additionalInformation"));
				obj.setCreatedBy((String)session.getAttribute("userId"));
				obj.setUpdatedBy((String)session.getAttribute("userId"));
				
				obj.setProductName(request.getParameter("productName"));
				obj.setWidth(request.getParameter("width"));
				obj.setDepth(request.getParameter("depth"));
				obj.setWattage(request.getParameter("wattage"));
				obj.setTotalWattage(request.getParameter("totalWattage"));
				obj.setLedName(request.getParameter("ledName"));
				obj.setLedType(request.getParameter("ledType"));
				obj.setDeepTop(request.getParameter("deepTop"));
				obj.setFixtureType(request.getParameter("fixtureType"));
				obj.setMountingType(request.getParameter("mountingType"));
				obj.setTrim(request.getParameter("trim"));
				obj.setColor(request.getParameter("color"));
				obj.setFinish(request.getParameter("finish"));
				obj.setFinishType(request.getParameter("finishType"));
				obj.setDiffuser(request.getParameter("diffuser"));
				obj.setDriver(request.getParameter("driver"));
				obj.setDriverDetail(request.getParameter("driverDetail"));
				obj.setWarranty(request.getParameter("warranty"));
				obj.setLength(request.getParameter("length"));
				
				if (obj.newProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
				
				break;
				
			case "SMPS":
				ProductSMPS objSMPS = new ProductSMPS();
				
				objSMPS.setProductId(request.getParameter("skuId"));
				objSMPS.setBrand(request.getParameter("brand"));
				objSMPS.setHsnId(request.getParameter("hsnId"));
				objSMPS.setGold(Integer.parseInt(request.getParameter("gold")));
				objSMPS.setSilver(Integer.parseInt(request.getParameter("silver")));
				objSMPS.setBronze(Integer.parseInt(request.getParameter("bronze")));
				objSMPS.setAdditionalInfo(request.getParameter("additionalInformation"));
				objSMPS.setCreatedBy((String)session.getAttribute("userId"));
				objSMPS.setUpdatedBy((String)session.getAttribute("userId"));

				objSMPS.setVoltage(request.getParameter("voltage"));
				objSMPS.setWattage(request.getParameter("wattage"));
				objSMPS.setAMPR(request.getParameter("AMPR"));
				objSMPS.setWattage(request.getParameter("wattage"));
				objSMPS.setIP(request.getParameter("IP"));
				objSMPS.setWarranty(request.getParameter("warranty"));
				objSMPS.setDimmType(request.getParameter("dimmType"));
				objSMPS.setDimmSubType(request.getParameter("dimmSubType"));
				objSMPS.setCasing(request.getParameter("casing"));
				objSMPS.setSize(request.getParameter("size"));
				
				if (objSMPS.newProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
				
				break;
				
			case "ledStrips":
				ProductLEDStrips objStrip = new ProductLEDStrips();
				
				objStrip.setProductId(request.getParameter("skuId"));
				objStrip.setBrand(request.getParameter("brand"));
				objStrip.setHsnId(request.getParameter("hsnId"));
				objStrip.setGold(Integer.parseInt(request.getParameter("gold")));
				objStrip.setSilver(Integer.parseInt(request.getParameter("silver")));
				objStrip.setBronze(Integer.parseInt(request.getParameter("bronze")));
				objStrip.setAdditionalInfo(request.getParameter("additionalInformation"));
				objStrip.setCreatedBy((String)session.getAttribute("userId"));
				objStrip.setUpdatedBy((String)session.getAttribute("userId"));

				objStrip.setLedBrand(request.getParameter("LEDBrand"));
				objStrip.setSeries(request.getParameter("series"));
				objStrip.setTotalWattage(request.getParameter("totalWattage"));
				objStrip.setWattage(request.getParameter("wattage"));
				objStrip.setVoltage(request.getParameter("voltage"));
				objStrip.setWarranty(request.getParameter("warranty"));
				objStrip.setQuality(request.getParameter("quality"));
				objStrip.setNoOfLed(request.getParameter("noOfLED"));
				objStrip.setLumens(request.getParameter("lumens"));
				objStrip.setColour(request.getParameter("colour"));
				objStrip.setWidth(request.getParameter("width"));
				objStrip.setWaterProof(request.getParameter("waterProof"));
				objStrip.setIP(request.getParameter("IP"));
				objStrip.setCRI(request.getParameter("CRI"));
				objStrip.setWarranty(request.getParameter("warranty"));
				objStrip.setMeter(request.getParameter("meter"));
				
				if (objStrip.newProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
				
				break;
				
			case "drivers":
				ProductDrivers objDrv = new ProductDrivers();
				
				objDrv.setProductId(request.getParameter("skuId"));
				objDrv.setBrand(request.getParameter("brand"));
				objDrv.setHsnId(request.getParameter("hsnId"));
				objDrv.setGold(Integer.parseInt(request.getParameter("gold")));
				objDrv.setSilver(Integer.parseInt(request.getParameter("silver")));
				objDrv.setBronze(Integer.parseInt(request.getParameter("bronze")));
				objDrv.setAdditionalInfo(request.getParameter("additionalInformation"));
				objDrv.setCreatedBy((String)session.getAttribute("userId"));
				objDrv.setUpdatedBy((String)session.getAttribute("userId"));

				objDrv.setOutputVoltage(request.getParameter("outputVoltage"));
				objDrv.setOutputWattage(request.getParameter("outputWattage"));
				objDrv.setmA(request.getParameter("mA"));
				objDrv.setType(request.getParameter("type"));
				objDrv.setSubType(request.getParameter("subType"));
				objDrv.setIP(request.getParameter("IP"));
				objDrv.setWarranty(request.getParameter("warranty"));
				objDrv.setVendor(request.getParameter("vendor"));
				objDrv.setLedWattage(request.getParameter("ledWattage"));
				objDrv.setDimension(request.getParameter("dimension"));
				objDrv.setPF(request.getParameter("PF"));
				
				if (objDrv.newProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
				
				break;
				
			case "spotLight":
				ProductSpotLight objSpL = new ProductSpotLight();
				
				objSpL.setProductId(request.getParameter("skuId"));
				objSpL.setBrand(request.getParameter("brand"));
				objSpL.setHsnId(request.getParameter("hsnId"));
				objSpL.setGold(Integer.parseInt(request.getParameter("gold")));
				objSpL.setSilver(Integer.parseInt(request.getParameter("silver")));
				objSpL.setBronze(Integer.parseInt(request.getParameter("bronze")));
				objSpL.setAdditionalInfo(request.getParameter("additionalInformation"));
				objSpL.setCreatedBy((String)session.getAttribute("userId"));
				objSpL.setUpdatedBy((String)session.getAttribute("userId"));

				objSpL.setProductName(request.getParameter("productName"));
				objSpL.setWattage(request.getParameter("wattage"));
				objSpL.setShape(request.getParameter("shape"));
				objSpL.setFixingType(request.getParameter("fixingType"));
				objSpL.setRimType(request.getParameter("rimType"));
				objSpL.setRecessedType(request.getParameter("recessedType"));
				objSpL.setRecessedSubType(request.getParameter("recessedSubType"));
				objSpL.setNature(request.getParameter("nature"));
				objSpL.setFinishType(request.getParameter("finishType"));
				objSpL.setFinishColor(request.getParameter("finishColor"));
				objSpL.setLedChipBrand(request.getParameter("LEDChipBrand"));
				objSpL.setColorTemperature(request.getParameter("colorTemperature"));
				objSpL.setBeamAngle(request.getParameter("beamAngle"));
				objSpL.setOptics(request.getParameter("optics"));
				objSpL.setDiffuser(request.getParameter("diffuser"));
				objSpL.setDriver(request.getParameter("driver"));
				objSpL.setDimmType(request.getParameter("dimmType"));
				objSpL.setDimmSubType(request.getParameter("dimmSubType"));
				objSpL.setIPRating(request.getParameter("IPRating"));
				objSpL.setSize(request.getParameter("size"));
				objSpL.setCutout(request.getParameter("cutout"));
				objSpL.setCRI(request.getParameter("CRI"));
				objSpL.setWarranty(request.getParameter("warranty"));
				
				if (objSpL.newProduct()) {
					out.println("1");
				} else {
					out.println("0");
				}
				
				break;
	
			default:
				break;
		}
	}
		
}
