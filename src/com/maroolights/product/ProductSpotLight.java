package com.maroolights.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class ProductSpotLight implements ProductMethods {
    
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
   
   private String productName;
   private String wattage;
   private String shape;
   private String fixingType;
   private String rimType;
   private String recessedType;
   private String recessedSubType;
   private String nature;
   private String finishType;
   private String finishColor;
   private String ledChipBrand;
   private String colorTemperature;
   private String beamAngle;
   private String optics;
   private String diffuser;
   private String driver;
   private String dimmType;
   private String dimmSubType;
   private String IPRating;
   private String size;
   private String cutout;
   private String CRI;
   private String warranty;
   
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
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getWattage() {
		return wattage;
	}
	public void setWattage(String wattage) {
		this.wattage = wattage;
	}
	public String getShape() {
		return shape;
	}
	public void setShape(String shape) {
		this.shape = shape;
	}
	public String getFixingType() {
		return fixingType;
	}
	public void setFixingType(String fixingType) {
		this.fixingType = fixingType;
	}
	public String getRimType() {
		return rimType;
	}
	public void setRimType(String rimType) {
		this.rimType = rimType;
	}
	public String getRecessedType() {
		return recessedType;
	}
	public void setRecessedType(String recessedType) {
		this.recessedType = recessedType;
	}
	public String getRecessedSubType() {
		return recessedSubType;
	}
	public void setRecessedSubType(String recessedSubType) {
		this.recessedSubType = recessedSubType;
	}
	public String getNature() {
		return nature;
	}
	public void setNature(String nature) {
		this.nature = nature;
	}
	public String getFinishType() {
		return finishType;
	}
	public void setFinishType(String finishType) {
		this.finishType = finishType;
	}
	public String getFinishColor() {
		return finishColor;
	}
	public void setFinishColor(String finishColor) {
		this.finishColor = finishColor;
	}
	public String getLedChipBrand() {
		return ledChipBrand;
	}
	public void setLedChipBrand(String ledChipBrand) {
		this.ledChipBrand = ledChipBrand;
	}
	public String getColorTemperature() {
		return colorTemperature;
	}
	public void setColorTemperature(String colorTemperature) {
		this.colorTemperature = colorTemperature;
	}
	public String getBeamAngle() {
		return beamAngle;
	}
	public void setBeamAngle(String beamAngle) {
		this.beamAngle = beamAngle;
	}
	public String getOptics() {
		return optics;
	}
	public void setOptics(String optics) {
		this.optics = optics;
	}
	public String getDiffuser() {
		return diffuser;
	}
	public void setDiffuser(String diffuser) {
		this.diffuser = diffuser;
	}
	public String getDriver() {
		return driver;
	}
	public void setDriver(String driver) {
		this.driver = driver;
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
	public String getIPRating() {
		return IPRating;
	}
	public void setIPRating(String iPRating) {
		IPRating = iPRating;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public String getCutout() {
		return cutout;
	}
	public void setCutout(String cutout) {
		this.cutout = cutout;
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
	@Override
	public boolean newProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        
        try {
        	String sql = "INSERT INTO maroo_data.d_productspotlight "
					+ "(rowId, brand, productName, wattage, shape, fixingType,"
					+ " rimType, recessedType, recessedSubType, nature, finishType,"
					+ " finishColor, ledChipBrand, colorTemperature, beamAngle, optics, diffuser,"
					+ " driver, dimmType, dimmSubType, IPRating, size, cutout, CRI, warranty,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ " createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, productId);
            stmt.setString(2, brand);
            stmt.setString(3, productName);
            stmt.setString(4, wattage);
            stmt.setString(5, shape);
            stmt.setString(6, fixingType);
            stmt.setString(7, rimType);
            stmt.setString(8, recessedType);
            stmt.setString(9, recessedSubType);
            stmt.setString(10, nature);
            stmt.setString(11, finishType);
            stmt.setString(12, finishColor);
            stmt.setString(13, ledChipBrand);
            stmt.setString(14, colorTemperature);
            stmt.setString(15, beamAngle);
            stmt.setString(16, optics);
            stmt.setString(17, diffuser);
            stmt.setString(18, driver);
            stmt.setString(19, dimmType);
            stmt.setString(20, dimmSubType);
            stmt.setString(21, IPRating);
            stmt.setString(22, size);
            stmt.setString(23, cutout);
            stmt.setString(24, CRI);
            stmt.setString(25, warranty);
            stmt.setString(26, hsnId);
            stmt.setInt(27, gold);
            stmt.setInt(28, silver);
            stmt.setInt(29, bronze);
            stmt.setString(30, additionalInfo);
            stmt.setString(31, createdBy);
            stmt.setString(32, updatedBy);
            stmt.setTimestamp(33, timestamp);
            stmt.setTimestamp(34, timestamp);
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
