package com.maroolights.quotation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class Quotation {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    

    private String rowId;
    private String quotationId;
    private String projectId;
    private String productId;
    private String hsnId;
    private String segment;
    private Long quantity;
    private float rate;
    private float tax;
    private String stage;
    private String qstatus;
    private int installationChrge;
    private int transportationChrge;
    private int packagingChrge;
    private int serviceTax;
    private int discount;
    private String additionalInfo;
    private String quotationCreatedBy;
    private String quotationUpdatedBy;
    
	public String getRowId() {
		return rowId;
	}
	public void setRowId(String rowId) {
		this.rowId = rowId;
	}
	public String getQuotationId() {
		return quotationId;
	}
	public void setQuotationId(String quotationId) {
		this.quotationId = quotationId;
	}
	public String getProjectId() {
		return projectId;
	}
	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getHsnId() {
		return hsnId;
	}
	public void setHsnId(String hsnId) {
		this.hsnId = hsnId;
	}
	public String getSegment() {
		return segment;
	}
	public void setSegment(String segment) {
		this.segment = segment;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	public float getRate() {
		return rate;
	}
	public void setRate(float rate) {
		this.rate = rate;
	}
	public float getTax() {
		return tax;
	}
	public void setTax(float tax) {
		this.tax = tax;
	}
	public String getStage() {
		return stage;
	}
	public void setStage(String stage) {
		this.stage = stage;
	}
	public String getQStatus() {
		return qstatus;
	}
	public void setQStatus(String status) {
		this.qstatus = status;
	}
	public int getInstallationChrge() {
		return installationChrge;
	}
	public void setInstallationChrge(int installationChrge) {
		this.installationChrge = installationChrge;
	}
	public int getTransportationChrge() {
		return transportationChrge;
	}
	public void setTransportationChrge(int transportationChrge) {
		this.transportationChrge = transportationChrge;
	}
	public int getPackagingChrge() {
		return packagingChrge;
	}
	public void setPackagingChrge(int packagingChrge) {
		this.packagingChrge = packagingChrge;
	}
	public int getServiceTax() {
		return serviceTax;
	}
	public void setServiceTax(int serviceTax) {
		this.serviceTax = serviceTax;
	}
	public String getQstatus() {
		return qstatus;
	}
	public void setQstatus(String qstatus) {
		this.qstatus = qstatus;
	}
	public String getQuotationCreatedBy() {
		return quotationCreatedBy;
	}
	public void setQuotationCreatedBy(String quotationCreatedBy) {
		this.quotationCreatedBy = quotationCreatedBy;
	}
	public String getQuotationUpdatedBy() {
		return quotationUpdatedBy;
	}
	public void setQuotationUpdatedBy(String quotationUpdatedBy) {
		this.quotationUpdatedBy = quotationUpdatedBy;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public String getAdditionalInfo() {
		return additionalInfo;
	}
	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}
	
	public boolean new_Quotation() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_quotation "
					+ "(rowId, quotationId, projectId, productId, hsnId,"
					+ " segment, quantity, rate, tax, stage, status, installationChrg,"
					+ " transportationChrg, packagingChrg, serviceTax, discount, additionalInfo, "
					+ "createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, rowId);
            stmt.setString(2, quotationId);
            stmt.setString(3, projectId);
            stmt.setString(4, productId);
            stmt.setString(5, hsnId);
            stmt.setString(6, segment);
            stmt.setLong(7, quantity);
            stmt.setFloat(8, rate);
            stmt.setFloat(9, tax);
            stmt.setString(10, stage);
            stmt.setString(11, qstatus);
            stmt.setInt(12, installationChrge);
            stmt.setInt(13, transportationChrge);
            stmt.setInt(14, packagingChrge);
            stmt.setInt(15, serviceTax);
            stmt.setInt(16, discount);
            stmt.setString(17, additionalInfo);
            stmt.setTimestamp(18, timestamp);
            stmt.setTimestamp(19, timestamp);
            stmt.setString(20, quotationCreatedBy);
            stmt.setString(21, quotationUpdatedBy);
             
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
}
