package com.maroolights.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class ProductLEDStrips implements ProductMethods {
    
   Connection conn = null;
   PreparedStatement stmt = null;
   Timestamp timestamp = new Timestamp(System.currentTimeMillis());
   
   private String productId;
   private String brand;
   private String hsnId;
   private int gold;
   private int silver;
   private int bronze;
   private String additionalInfo;
   private boolean imgUpload = false;
   private String uploadedImgName;
   private String createdBy;
   private String updatedBy;
   
   private String ledBrand;
   private String series;
   private String totalWattage;
   private String wattage;
   private String voltage;
   private String quality;
   private String noOfLed;
   private String lumens;
   private String colour;
   private String width;
   private String waterProof;
   private String IP;
   private String CRI;
   private String warranty;
   private String meter;
   
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getHsnId() {
		return hsnId;
	}
	public void setHsnId(String hsnId) {
		this.hsnId = hsnId;
	}
	public int getGold() {
		return gold;
	}
	public void setGold(int gold) {
		this.gold = gold;
	}
	public int getSilver() {
		return silver;
	}
	public void setSilver(int silver) {
		this.silver = silver;
	}
	public int getBronze() {
		return bronze;
	}
	public void setBronze(int bronze) {
		this.bronze = bronze;
	}
	public String getAdditionalInfo() {
		return additionalInfo;
	}
	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}
	public boolean isImgUpload() {
		return imgUpload;
	}
	public void setImgUpload(boolean imgUpload) {
		this.imgUpload = imgUpload;
	}
	public String getUploadedImgName() {
		return uploadedImgName;
	}
	public void setUploadedImgName(String uploadedImgName) {
		this.uploadedImgName = uploadedImgName;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public String getLedBrand() {
		return ledBrand;
	}
	public void setLedBrand(String ledBrand) {
		this.ledBrand = ledBrand;
	}
	public String getSeries() {
		return series;
	}
	public void setSeries(String series) {
		this.series = series;
	}
	public String getTotalWattage() {
		return totalWattage;
	}
	public void setTotalWattage(String totalWattage) {
		this.totalWattage = totalWattage;
	}
	public String getWattage() {
		return wattage;
	}
	public void setWattage(String wattage) {
		this.wattage = wattage;
	}
	public String getVoltage() {
		return voltage;
	}
	public void setVoltage(String voltage) {
		this.voltage = voltage;
	}
	public String getQuality() {
		return quality;
	}
	public void setQuality(String quality) {
		this.quality = quality;
	}
	public String getNoOfLed() {
		return noOfLed;
	}
	public void setNoOfLed(String noOfLed) {
		this.noOfLed = noOfLed;
	}
	public String getLumens() {
		return lumens;
	}
	public void setLumens(String lumens) {
		this.lumens = lumens;
	}
	public String getColour() {
		return colour;
	}
	public void setColour(String colour) {
		this.colour = colour;
	}
	public String getWidth() {
		return width;
	}
	public void setWidth(String width) {
		this.width = width;
	}
	public String getWaterProof() {
		return waterProof;
	}
	public void setWaterProof(String waterProof) {
		this.waterProof = waterProof;
	}
	public String getIP() {
		return IP;
	}
	public void setIP(String iP) {
		IP = iP;
	}
	public String getCRI() {
		return CRI;
	}
	public void setCRI(String cRI) {
		CRI = cRI;
	}
	public String getWarranty() {
		return warranty;
	}
	public void setWarranty(String warranty) {
		this.warranty = warranty;
	}
	public String getMeter() {
		return meter;
	}
	public void setMeter(String meter) {
		this.meter = meter;
	}

	@Override
	public boolean newProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        
        try {
        	String sql = "INSERT INTO maroo_data.d_productstrips "
					+ "(rowId, brand, ledBrand, series, totalWattage, wattage, voltage, quality,"
					+ " noOfLed, lumens, colour, width, waterProof, IP, CRI, warranty, meter,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ " createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, productId);
            stmt.setString(2, brand);
            stmt.setString(3, ledBrand);
            stmt.setString(4, series);
            stmt.setString(5, totalWattage);
            stmt.setString(6, wattage);
            stmt.setString(7, voltage);
            stmt.setString(8, quality);
            stmt.setString(9, noOfLed);
            stmt.setString(10, lumens);
            stmt.setString(11, colour);
            stmt.setString(12, width);
            stmt.setString(13, waterProof);
            stmt.setString(14, IP);
            stmt.setString(15, CRI);
            stmt.setString(16, warranty);
            stmt.setString(17, meter);
            stmt.setString(18, hsnId);
            stmt.setInt(19, gold);
            stmt.setInt(20, silver);
            stmt.setInt(21, bronze);
            stmt.setString(22, additionalInfo);
            stmt.setString(23, createdBy);
            stmt.setString(24, updatedBy);
            stmt.setTimestamp(25, timestamp);
            stmt.setTimestamp(26, timestamp);
            System.out.println(stmt);
            stmt.executeUpdate();
            returnVal = true;
            conn.close();
            }
        catch (SQLException e) {
            e.printStackTrace();
        	returnVal = false;
        }
        finally {
			try {
				conn.close();
			} catch (SQLException e) {
				
				e.printStackTrace();
			}
		}
        return returnVal;
	}
	@Override
	public boolean updateProduct() {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean deleteProduct() {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean uploadImage() {
		// TODO Auto-generated method stub
		return false;
	}
}
