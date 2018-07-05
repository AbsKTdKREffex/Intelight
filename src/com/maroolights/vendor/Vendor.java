package com.maroolights.vendor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class Vendor {

    Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String rowId;
    private String companyName;
    private String location;
    private String contactPerson;
    private Long contactNo;
    private Long altContactNo;
    private String emailId;
    private String gstNo;
    private int state;
    private String website;
    private Long creditLimit;
    private int creditTime;
    private String address;
    private String createdBy;
    private String updatedBy;
    
	public String getRowId() {
		return rowId;
	}
	public void setRowId(String rowId) {
		this.rowId = rowId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getContactPerson() {
		return contactPerson;
	}
	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}
	public Long getContactNo() {
		return contactNo;
	}
	public void setContactNo(Long contactNo) {
		this.contactNo = contactNo;
	}
	public Long getAltContactNo() {
		return altContactNo;
	}
	public void setAltContactNo(Long altContactNo) {
		this.altContactNo = altContactNo;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getGstNo() {
		return gstNo;
	}
	public void setGstNo(String gstNo) {
		this.gstNo = gstNo;
	}
	public int getState() {
		return state;
	}
	public void setState(int state) {
		this.state = state;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public Long getCreditLimit() {
		return creditLimit;
	}
	public void setCreditLimit(Long creditLimit) {
		this.creditLimit = creditLimit;
	}
	public int getCreditTime() {
		return creditTime;
	}
	public void setCreditTime(int creditTime) {
		this.creditTime = creditTime;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
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
	
	public boolean new_Vendor() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        try {
        	String sql = "INSERT INTO maroo_data.d_vendor "
					+ "(rowId, companyName, location, contactPerson, contactNo, altContactNo,"
					+ " emailId, gstNo, state, website, creditLimit, creditTime, address,"
					+ "createdOn, updatedOn, createdBy, updatedBy) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, rowId);
            stmt.setString(2, companyName);
            stmt.setString(3, location);
            stmt.setString(4, contactPerson);
            stmt.setLong(5, contactNo);
            stmt.setLong(6, altContactNo);
            stmt.setString(7, emailId);
            stmt.setString(8, gstNo);
            stmt.setInt(9, state);
            stmt.setString(10, website);
            stmt.setLong(11, creditLimit);
            stmt.setInt(12, creditTime);
            stmt.setString(13, address);
            stmt.setTimestamp(14, timestamp);
            stmt.setTimestamp(15, timestamp);
            stmt.setString(16, createdBy);
            stmt.setString(17, updatedBy);
             
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

	public boolean update_Vendor() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "update maroo_data.d_vendor  set"
					+ " companyName = ?, location = ?, contactPerson = ?, contactNo = ?,"
					+ "	altContactNo= ?, emailId = ?, gstNo = ?, state = ?, website = ?,"
					+ " creditLimit = ?, creditTime = ?, address = ?,"
					+ " updatedBy = ?, updatedOn = ?"
					+ " where rowId = ?";
			stmt = conn.prepareStatement(sql);

            stmt.setString(1, companyName);
            stmt.setString(2, location);
            stmt.setString(3, contactPerson);
            stmt.setLong(4, contactNo);
            stmt.setLong(5, altContactNo);
            stmt.setString(6, emailId);
            stmt.setString(7, gstNo);
            stmt.setInt(8, state);
            stmt.setString(9, website);
            stmt.setLong(10, creditLimit);
            stmt.setInt(11, creditTime);
            stmt.setString(12, address);
            stmt.setString(13, updatedBy);
            stmt.setTimestamp(14, timestamp);
            stmt.setString(15, rowId);
	            
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
