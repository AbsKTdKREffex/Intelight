package com.maroolights.purchaseorder;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class PurchaseOrderDetails {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String rowId;
    protected String purchaseOrderId;
    protected String purchaseOrderItemId;
    private String status;
    private Long amount;
    private String receipt;
    private String productId;
    private Long quantity;
    private String createdBy;
    private String updatedBy;
    private int inInventory;
    
	public String getRowId() {
		return rowId;
	}
	public void setRowId(String rowId) {
		this.rowId = rowId;
	}
	public String getPurchaseOrderId() {
		return purchaseOrderId;
	}
	public void setPurchaseOrderId(String purchaseOrderId) {
		this.purchaseOrderId = purchaseOrderId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
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
	public String getPurchaseOrderItemId() {
		return purchaseOrderItemId;
	}
	public void setPurchaseOrderItemId(String purchaseOrderItemId) {
		this.purchaseOrderItemId = purchaseOrderItemId;
	}
	public Long getAmount() {
		return amount;
	}
	public void setAmount(Long amount) {
		this.amount = amount;
	}
	public String getReceipt() {
		return receipt;
	}
	public void setReceipt(String receipt) {
		this.receipt = receipt;
	}
	public int getInInventory() {
		return inInventory;
	}
	public void setInInventory(int inInventory) {
		this.inInventory = inInventory;
	}
	
	public boolean new_PurchaseOrder_Details() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_purchase_order_item "
					+ "(rowId, purchaseOrderId, status, productId, quantity,"
					+ " createdOn, updatedOn, createdBy, updatedBy) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, rowId);
            stmt.setString(2, purchaseOrderId);
            stmt.setString(3, status);
            stmt.setString(4, productId);
            stmt.setLong(5, quantity);
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
	
	public boolean PurchaseOrder_Details_update(String prodid, String purchaseId) {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {

	    	 String sql="UPDATE maroo_data.d_purchase_order_item SET "
	    	 		+ "purchaseOrderId = ?, status = ?, productId = ?, quantity = ?, "
	    	 		+ "updatedOn = ?, updatedBy = ? where productId = ? and purchaseOrderId = ?";
      
            stmt = conn.prepareStatement(sql);

            stmt.setString(1, purchaseOrderId);
            stmt.setString(2, status);
            stmt.setString(3, productId);
            stmt.setLong(4, quantity);
            stmt.setTimestamp(5, timestamp);
            stmt.setString(6, updatedBy);
            stmt.setString(7, prodid);
            stmt.setString(8, purchaseId);
             
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

	public boolean PurchaseOrder_Details_check(String productId,String orderId) {
		boolean returnVal = false;
	    conn = MySqlConnect.DBConnection();
	    try
	    {
	    	 String sql="SELECT rowId from maroo_data.d_purchase_order_item where productId=? and purchaseOrderId=?";
//	    	 boolean returnVal1=false;
	         stmt = conn.prepareStatement(sql);
	         stmt.setString(1, productId);
	         stmt.setString(2, orderId);
	         ResultSet rs =stmt.executeQuery();
	         while (rs.next())
	         {
	        	 returnVal = true;
	         }
//	         returnVal = returnVal1;
	         conn.close();
	    }
	    catch (SQLException e)
	    {
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

	public boolean PurchaseOrder_delete(String prodid, String purchaseId) {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        try
        {
        	stmt = conn.prepareStatement("DELETE FROM maroo_data.d_purchase_order_item  where productId ='"+ prodid +"' and purchaseOrderId ='"+ purchaseId +"';");
			int i= stmt.executeUpdate();
			if(i > 0)
			{
				returnVal = true;
			}
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
	
	public boolean new_PurchaseDetail() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_pofulfillment "
					+ "(rowId, itemId, quantity, amount, receipt,"
					+ " createdOn, updatedOn, createdBy, updatedBy) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, rowId);
            stmt.setString(2, purchaseOrderItemId);
            stmt.setLong(3, quantity);
            stmt.setLong(4, amount);
            stmt.setString(5, receipt);
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
	
	public boolean update_PurchaseDetail() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "UPDATE maroo_data.d_pofulfillment SET "
					+ "inInventory = ?, updatedOn = ?, updatedBy = ? where rowId = ?";
            stmt = conn.prepareStatement(sql);

            stmt.setInt(1, inInventory);
            stmt.setTimestamp(2, timestamp);
            stmt.setString(3, updatedBy);
            stmt.setString(4, rowId);
             
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
