package com.maroolights.client;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class ClientContactPerson extends Client{
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String contactPersonId;
    private String firstName;
    private String lastName;
    private Long contactNo;
    private Long altContactNo;
    private String email;
    private String designation;
    private String location;
    private String clientCPCreatedBy;
    private String clientCPUpdatedBy;
    
	public String getFirstName() {
		return firstName;
	}
	public String getContactPersonId() {
		return contactPersonId;
	}
	public void setContactPersonId(String contactPersonId) {
		this.contactPersonId = contactPersonId;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getClientCPCreatedBy() {
		return clientCPCreatedBy;
	}
	public void setClientCPCreatedBy(String clientCPCreatedBy) {
		this.clientCPCreatedBy = clientCPCreatedBy;
	}
	public String getClientCPUpdatedBy() {
		return clientCPUpdatedBy;
	}
	public void setClientCPUpdatedBy(String clientCPUpdatedBy) {
		this.clientCPUpdatedBy = clientCPUpdatedBy;
	}
	
	public boolean new_ContactPerson() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        try {
        	String sql = "INSERT INTO maroo_data.d_contactperson "
					+ "(rowId, clientId, firstName, lastName, contactNo,"
					+ " altContactNo, emailId, designation, location,"
					+ " createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, contactPersonId);
            stmt.setString(2, clientId);
            stmt.setString(3, firstName);
            stmt.setString(4, lastName);
            stmt.setLong(5, contactNo);
            stmt.setLong(6, altContactNo);
            stmt.setString(7, email);
            stmt.setString(8, designation);
            stmt.setString(9, location);
            stmt.setTimestamp(10, timestamp);
            stmt.setTimestamp(11, timestamp);
            stmt.setString(12, clientCPCreatedBy);
            stmt.setString(13, clientCPUpdatedBy);
             
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
	
	public boolean update_ContactPerson() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "update maroo_data.d_contactperson  set"
					+ " firstName = ?, lastName = ?, contactNo = ?, altContactNo = ?,"
					+ " emailId = ?, designation = ?, location = ?,"
					+ " updatedOn = ?, updatedBy = ? "
					+ "where rowId = ?";
			
			stmt = conn.prepareStatement(sql);
			
            stmt.setString(1, firstName);
            stmt.setString(2, lastName);
            stmt.setLong(3, contactNo);
            stmt.setLong(4, altContactNo);
            stmt.setString(5, email);
            stmt.setString(6, designation);
            stmt.setString(7, location);
            stmt.setTimestamp(8, timestamp);
            stmt.setString(9, clientCPUpdatedBy);
			stmt.setString(10, contactPersonId);
			
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
