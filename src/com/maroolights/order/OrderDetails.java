package com.maroolights.order;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class OrderDetails{
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    

    private String rowId;
    protected String orderId;
    private String productId;
    private Long quantity;
    private float rate;
    private String segment;
    private String hsnId;
    private String cgst;
    private String sgst;
    private String igst;
    private String stage;
    private String status;
    private String priority;
    private int installationChrge;
    private int transportationChrge;
    private int packagingChrge;
    private int serviceTax;
    private int discount;
    private String additionalInfo;
    private String orderItemCreatedBy;
    private String orderItemUpdatedBy;
    
	public String getRowId() {
		return rowId;
	}
	public void setRowId(String rowId) {
		this.rowId = rowId;
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
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getCgst() {
		return cgst;
	}
	public void setCgst(String cgst) {
		this.cgst = cgst;
	}
	public String getSgst() {
		return sgst;
	}
	public void setSgst(String sgst) {
		this.sgst = sgst;
	}
	public String getIgst() {
		return igst;
	}
	public void setIgst(String igst) {
		this.igst = igst;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	public String getStage() {
		return stage;
	}
	public void setStage(String stage) {
		this.stage = stage;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
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
	public String getOrderItemCreatedBy() {
		return orderItemCreatedBy;
	}
	public void setOrderItemCreatedBy(String orderItemCreatedBy) {
		this.orderItemCreatedBy = orderItemCreatedBy;
	}
	public String getOrderItemUpdatedBy() {
		return orderItemUpdatedBy;
	}
	public void setOrderItemUpdatedBy(String orderItemUpdatedBy) {
		this.orderItemUpdatedBy = orderItemUpdatedBy;
	}
	
	public boolean new_Order_Details() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_order_item "
					+ "(rowId, orderId, productId, quantity, rate, segment,"
					+ " hsnId, cgst, sgst, igst, stage, status, priority,"
					+ " installationChrg, transportationChrg, packagingChrg, serviceTax, discount, additionalInfo,"
					+ " createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, rowId);
            stmt.setString(2, orderId);
            stmt.setString(3, productId);
            stmt.setLong(4, quantity);
            stmt.setFloat(5, rate);
            stmt.setString(6, segment);
            stmt.setString(7, hsnId);
            stmt.setString(8, cgst);
            stmt.setString(9, sgst);
            stmt.setString(10, igst);
            stmt.setString(11, stage);
            stmt.setString(12, status);
            stmt.setString(13, priority);
            stmt.setInt(14, installationChrge);
            stmt.setInt(15, transportationChrge);
            stmt.setInt(16, packagingChrge);
            stmt.setInt(17, serviceTax);
            stmt.setInt(18, discount);
            stmt.setString(19, additionalInfo);
            stmt.setTimestamp(20, timestamp);
            stmt.setTimestamp(21, timestamp);
            stmt.setString(22, orderItemCreatedBy);
            stmt.setString(23, orderItemUpdatedBy);
             
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
