package com.maroolights.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class ProductSMPS implements ProductMethods {
    
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
   
   private String voltage;
   private String wattage;
   private String AMPR;
   private String IP;
   private String warranty;
   private String dimmType;
   private String dimmSubType;
   private String casing;
   private String size;
   
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
	public String getVoltage() {
		return voltage;
	}
	public void setVoltage(String voltage) {
		this.voltage = voltage;
	}
	public String getWattage() {
		return wattage;
	}
	public void setWattage(String wattage) {
		this.wattage = wattage;
	}
	public String getAMPR() {
		return AMPR;
	}
	public void setAMPR(String aMPR) {
		AMPR = aMPR;
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
	public String getDimmType() {
		return dimmType;
	}
	public void setDimmType(String dimmType) {
		this.dimmType = dimmType;
	}
	public String getDimmSubType() {
		return dimmSubType;
	}
	public void setDimmSubType(String dimmSubType) {
		this.dimmSubType = dimmSubType;
	}
	public String getCasing() {
		return casing;
	}
	public void setCasing(String casing) {
		this.casing = casing;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	
	@Override
	public boolean newProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        
        try {
        	String sql = "INSERT INTO maroo_data.d_productsmps "
					+ "(rowId, brand, voltage, wattage, AMPR, IP,"
					+ " warranty, dimmType, dimmSubType, casing, size,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ " createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, productId);
            stmt.setString(2, brand);
            stmt.setString(3, voltage);
            stmt.setString(4, wattage);
            stmt.setString(5, AMPR);
            stmt.setString(6, IP);
            stmt.setString(7, warranty);
            stmt.setString(8, dimmType);
            stmt.setString(9, dimmSubType);
            stmt.setString(10, casing);
            stmt.setString(11, size);
            stmt.setString(12, hsnId);
            stmt.setInt(13, gold);
            stmt.setInt(14, silver);
            stmt.setInt(15, bronze);
            stmt.setString(16, additionalInfo);
            stmt.setString(17, createdBy);
            stmt.setString(18, updatedBy);
            stmt.setTimestamp(19, timestamp);
            stmt.setTimestamp(20, timestamp);
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
