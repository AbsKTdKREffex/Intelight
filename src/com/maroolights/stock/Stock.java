package com.maroolights.stock;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class Stock {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());

    private String rowId;
    private String productId;
    private String vendorName;
    private String referenceNo;
    private int quantity;
    private String actionType;
    private String status;
    private String createdBy;
    private String updatedBy;
    
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
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	public String getReferenceNo() {
		return referenceNo;
	}
	public void setReferenceNo(String referenceNo) {
		this.referenceNo = referenceNo;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getActionType() {
		return actionType;
	}
	public void setActionType(String actionType) {
		this.actionType = actionType;
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public boolean new_Stock_In() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_stockdetails "
					+ "(rowId, productId, vendorName, referenceNo, quantity, actionType,"
					+ "createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, rowId);
            stmt.setString(2, productId);
            stmt.setString(3, vendorName);
            stmt.setString(4, referenceNo);
            stmt.setInt(5, quantity);
            stmt.setString(6, actionType);
            stmt.setTimestamp(7, timestamp);
            stmt.setTimestamp(8, timestamp);
            stmt.setString(9, createdBy);
            stmt.setString(10, updatedBy);
            
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

	public boolean new_Stock_Out() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        String sql;
        try {
        	
        	sql = "INSERT INTO maroo_data.d_stockdetails "
					+ "(rowId, productId, referenceNo, quantity, actionType,"
					+ "createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, rowId);
            stmt.setString(2, productId);
            stmt.setString(3, referenceNo);
            stmt.setInt(4, quantity);
            stmt.setString(5, actionType);
            stmt.setTimestamp(6, timestamp);
            stmt.setTimestamp(7, timestamp);
            stmt.setString(8, createdBy);
            stmt.setString(9, updatedBy);
            
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

	public boolean update_Order_Item() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        String sql;
        try {

			sql = "update maroo_data.d_order_item  set"
					+ " status = ? where productId = ? AND orderId= ?";
			stmt = conn.prepareStatement(sql);
			
				stmt.setString(1, status);
	            stmt.setString(2, productId);
	            stmt.setString(3, referenceNo);
	            stmt.executeUpdate();
	            returnVal = true;
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
