package com.maroolights.client;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class ClientAddress extends Client {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());

    private String addressId;
    private String location;
    private String branchName;
    private String address;
    private String gstNo;
    private Long contactNo;
    private String state;
    private int pincode;
    private String clientAddCreatedBy;
    private String clientAddUpdatedBy;
    
	public String getAddressId() {
		return addressId;
	}
	public void setAddressId(String addressId) {
		this.addressId = addressId;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getBranchName() {
		return branchName;
	}
	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGstNo() {
		return gstNo;
	}
	public void setGstNo(String gstNo) {
		this.gstNo = gstNo;
	}
	public Long getContactNo() {
		return contactNo;
	}
	public void setContactNo(Long contactNo) {
		this.contactNo = contactNo;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getClientAddCreatedBy() {
		return clientAddCreatedBy;
	}
	public void setClientAddCreatedBy(String clientAddCreatedBy) {
		this.clientAddCreatedBy = clientAddCreatedBy;
	}
	public String getClientAddUpdatedBy() {
		return clientAddUpdatedBy;
	}
	public void setClientAddUpdatedBy(String clientAddUpdatedBy) {
		this.clientAddUpdatedBy = clientAddUpdatedBy;
	}
	
	public boolean new_Address() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_address "
					+ "(rowId, clientId, location, branchName, address,"
					+ " gstNo, contactNo, state, pincode,"
					+ " createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, addressId);
            stmt.setString(2, super.getClientId());
            stmt.setString(3, location);
            stmt.setString(4, branchName);
            stmt.setString(5, address);
            stmt.setString(6, gstNo);
            stmt.setLong(7, contactNo);
            stmt.setString(8, state);
            stmt.setInt(9, pincode);
            stmt.setTimestamp(10, timestamp);
            stmt.setTimestamp(11, timestamp);
            stmt.setString(12, clientAddCreatedBy);
            stmt.setString(13, clientAddUpdatedBy);
             
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
	
	public boolean update_Address() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "update maroo_data.d_address  set"
					+ " location = ?, branchName = ?, address = ?, gstNo = ?,"
					+ " contactNo = ?, state = ?, pincode = ?,"
					+ " updatedOn = ?, updatedBy = ? "
					+ "where rowId = ?";
			
			stmt = conn.prepareStatement(sql);
			
            stmt.setString(1, location);
            stmt.setString(2, branchName);
            stmt.setString(3, address);
            stmt.setString(4, gstNo);
            stmt.setLong(5, contactNo);
            stmt.setString(6, state);
            stmt.setInt(7, pincode);
            stmt.setTimestamp(8, timestamp);
            stmt.setString(9, clientAddUpdatedBy);
			stmt.setString(10, addressId);
			
	        stmt.executeUpdate();
	        returnVal = true;
			
		}catch (SQLException e) {
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
