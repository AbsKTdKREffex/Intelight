package com.maroolights.order;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class Order extends OrderDetails {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());

    private String projectId;
    private String quotationId;
    private String billingAddressId;
    private String gstNo;
    private String state;
    private String contactPersonId;
    private String deliveryAddressId;
    private String modeOfPayment;
    private String invoiceType;
    private String salesDepartment;
    private String expectedDeilvery;
    private String orderCreatedBy;
    private String orderUpdatedBy;
    
	public String getProjectId() {
		return projectId;
	}
	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
	public String getQuotationId() {
		return quotationId;
	}
	public void setQuotationId(String quotationId) {
		this.quotationId = quotationId;
	}
	public String getBillingAddressId() {
		return billingAddressId;
	}
	public void setBillingAddressId(String billingAddressId) {
		this.billingAddressId = billingAddressId;
	}
	public String getGstNo() {
		return gstNo;
	}
	public void setGstNo(String gstNo) {
		this.gstNo = gstNo;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getContactPersonId() {
		return contactPersonId;
	}
	public void setContactPersonId(String contactPersonId) {
		this.contactPersonId = contactPersonId;
	}
	public String getDeliveryAddressId() {
		return deliveryAddressId;
	}
	public void setDeliveryAddressId(String deliveryAddressId) {
		this.deliveryAddressId = deliveryAddressId;
	}
	public String getModeOfPayment() {
		return modeOfPayment;
	}
	public void setModeOfPayment(String modeOfPayment) {
		this.modeOfPayment = modeOfPayment;
	}
	public String getInvoiceType() {
		return invoiceType;
	}
	public void setInvoiceType(String invoiceType) {
		this.invoiceType = invoiceType;
	}
	public String getSalesDepartment() {
		return salesDepartment;
	}
	public void setSalesDepartment(String salesDepartment) {
		this.salesDepartment = salesDepartment;
	}
	public String getExpectedDeilvery() {
		return expectedDeilvery;
	}
	public void setExpectedDeilvery(String expectedDeilvery) {
		this.expectedDeilvery = expectedDeilvery;
	}
	public String getOrderCreatedBy() {
		return orderCreatedBy;
	}
	public void setOrderCreatedBy(String orderCreatedBy) {
		this.orderCreatedBy = orderCreatedBy;
	}
	public String getOrderUpdatedBy() {
		return orderUpdatedBy;
	}
	public void setOrderUpdatedBy(String orderUpdatedBy) {
		this.orderUpdatedBy = orderUpdatedBy;
	}
	
	public boolean new_Order() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_order "
					+ "(rowId, projectId, quotationId, billingAddressId, gstNo,"
					+ " state, contactPersonId, deliveryAddressId, modeOfPayment,"
					+ " invoiceType, salesDepartment, expectedDeilvery,"
					+ "createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, orderId);
            stmt.setString(2, projectId);
            stmt.setString(3, quotationId);
            stmt.setString(4, billingAddressId);
            stmt.setString(5, gstNo);
            stmt.setString(6, state);
            stmt.setString(7, contactPersonId);
            stmt.setString(8, deliveryAddressId);
            stmt.setString(9, modeOfPayment);
            stmt.setString(10, invoiceType);
            stmt.setString(11, salesDepartment);
            stmt.setString(12, expectedDeilvery);
            stmt.setTimestamp(13, timestamp);
            stmt.setTimestamp(14, timestamp);
            stmt.setString(15, orderCreatedBy);
            stmt.setString(16, orderUpdatedBy);
            
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
