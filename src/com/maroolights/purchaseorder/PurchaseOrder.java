package com.maroolights.purchaseorder;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class PurchaseOrder extends PurchaseOrderDetails {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());

    private String vendorId;
    private String orderStatus;
    private String orderCreatedBy;
    private String orderUpdatedBy;
    private int isEditable;
    
	public String getVendorId() {
		return vendorId;
	}
	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
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
	public int getIsEditable() {
		return isEditable;
	}
	public void setIsEditable(int isEditable) {
		this.isEditable = isEditable;
	}
	
	public boolean new_PurchaseOrder() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_purchaseorder "
					+ "(rowId, vendorId, status, "
					+ "createdOn, updatedOn, createdBy, updatedBy) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?)";
        	
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, purchaseOrderId);
            stmt.setString(2, vendorId);
            stmt.setString(3, orderStatus);
            stmt.setTimestamp(4, timestamp);
            stmt.setTimestamp(5, timestamp);
            stmt.setString(6, orderCreatedBy);
            stmt.setString(7, orderUpdatedBy);
            
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

	public boolean update_PurchaseOrder() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
	    	 String sql="UPDATE maroo_data.d_purchaseorder SET "
	    	 		+ "vendorId = ?, status = ?, "
	    	 		+ "updatedOn = ?, updatedBy = ? where rowId = ?";
        	
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, vendorId);
            stmt.setString(2, orderStatus);
            stmt.setTimestamp(3, timestamp);
            stmt.setString(4, orderUpdatedBy);
            stmt.setString(5, purchaseOrderId);
            
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
	
	public boolean update_PurchaseOrder_Status(String orderitemId) {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {

	    	 String sql="UPDATE maroo_data.d_purchase_order_item SET "
	    	 		+ "status = ?,"
	    	 		+ "updatedOn = ?, updatedBy = ? where rowId = ?";
      
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, orderStatus);
            stmt.setTimestamp(2, timestamp);
            stmt.setString(3, orderUpdatedBy);
            stmt.setString(4, orderitemId);
             
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
	
	public boolean make_purchaseOrderNotEditable(String orderitemId) {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {

	    	 String sql="UPDATE maroo_data.d_purchaseorder SET "
	    	 		+ "isEditable = ?,"
	    	 		+ "updatedOn = ?, updatedBy = ? where rowId = ?";
      
            stmt = conn.prepareStatement(sql);

            stmt.setInt(1, isEditable);
            stmt.setTimestamp(2, timestamp);
            stmt.setString(3, orderUpdatedBy);
            stmt.setString(4, orderitemId);
             
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
