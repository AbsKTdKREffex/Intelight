package com.maroolights.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class ProductDrivers implements ProductMethods {
    
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
   
   private String outputVoltage;
   private String outputWattage;
   private String mA;
   private String type;
   private String subType;
   private String IP;
   private String warranty;
   private String vendor;
   private String ledWattage;
   private String dimension;
   private String PF;
   
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
	public String getOutputVoltage() {
		return outputVoltage;
	}
	public void setOutputVoltage(String outputVoltage) {
		this.outputVoltage = outputVoltage;
	}
	public String getOutputWattage() {
		return outputWattage;
	}
	public void setOutputWattage(String outputWattage) {
		this.outputWattage = outputWattage;
	}
	public String getmA() {
		return mA;
	}
	public void setmA(String mA) {
		this.mA = mA;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSubType() {
		return subType;
	}
	public void setSubType(String subType) {
		this.subType = subType;
	}
	public String getIP() {
		return IP;
	}
	public void setIP(String iP) {
		IP = iP;
	}
	public String getWarranty() {
		return warranty;
	}
	public void setWarranty(String warranty) {
		this.warranty = warranty;
	}
	public String getVendor() {
		return vendor;
	}
	public void setVendor(String vendor) {
		this.vendor = vendor;
	}
	public String getLedWattage() {
		return ledWattage;
	}
	public void setLedWattage(String ledWattage) {
		this.ledWattage = ledWattage;
	}
	public String getDimension() {
		return dimension;
	}
	public void setDimension(String dimension) {
		this.dimension = dimension;
	}
	public String getPF() {
		return PF;
	}
	public void setPF(String pF) {
		PF = pF;
	}
	
	@Override
	public boolean newProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        
        try {
        	String sql = "INSERT INTO maroo_data.d_productdriver "
					+ "(rowId, brand, outputVoltage, outputWattage, mA, type,"
					+ " subType, IP, warranty, vendor, ledWattage, dimension, PF,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ " createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, productId);
            stmt.setString(2, brand);
            stmt.setString(3, outputVoltage);
            stmt.setString(4, outputWattage);
            stmt.setString(5, mA);
            stmt.setString(6, type);
            stmt.setString(7, subType);
            stmt.setString(8, IP);
            stmt.setString(9, warranty);
            stmt.setString(10, vendor);
            stmt.setString(11, ledWattage);
            stmt.setString(12, dimension);
            stmt.setString(13, PF);
            stmt.setString(14, hsnId);
            stmt.setInt(15, gold);
            stmt.setInt(16, silver);
            stmt.setInt(17, bronze);
            stmt.setString(18, additionalInfo);
            stmt.setString(19, createdBy);
            stmt.setString(20, updatedBy);
            stmt.setTimestamp(21, timestamp);
            stmt.setTimestamp(22, timestamp);
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
