package com.maroolights.client;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class Client {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    protected String clientId;
    private String companyName;
    private String industry;
    private String location;
    private int creditTime;
    private int creditLimit;
    private String clientCreatedBy;
    private String clientUpdatedBy;
    
	public String getClientId() {
		return clientId;
	}
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getCreditTime() {
		return creditTime;
	}
	public void setCreditTime(int creditTime) {
		this.creditTime = creditTime;
	}
	public int getCreditLimit() {
		return creditLimit;
	}
	public void setCreditLimit(int creditLimit) {
		this.creditLimit = creditLimit;
	}
	public String getClientCreatedBy() {
		return clientCreatedBy;
	}
	public void setClientCreatedBy(String clientCreatedBy) {
		this.clientCreatedBy = clientCreatedBy;
	}
	public String getClientUpdatedBy() {
		return clientUpdatedBy;
	}
	public void setClientUpdatedBy(String clientUpdatedBy) {
		this.clientUpdatedBy = clientUpdatedBy;
	}
	
	public boolean new_Client() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        try {
        	String sql = "INSERT INTO maroo_data.d_client "
					+ "(rowId, companyName, industry, location, creditTime, creditLimit,"
					+ " createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, clientId);
            stmt.setString(2, companyName);
            stmt.setString(3, industry);
            stmt.setString(4, location);
            stmt.setInt(5, creditTime);
            stmt.setInt(6, creditLimit);
            stmt.setTimestamp(7, timestamp);
            stmt.setTimestamp(8, timestamp);
            stmt.setString(9, clientCreatedBy);
            stmt.setString(10, clientUpdatedBy);
             
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
	
	public boolean update_Client() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "update maroo_data.d_client  set"
					+ " companyName = ?, industry = ?, location = ?,"
					+ " creditTime = ?, creditLimit = ?,"
					+ " updatedOn = ?, updatedBy = ? "
					+ "where rowId = ?";
			
			stmt = conn.prepareStatement(sql);
			
            stmt.setString(1, companyName);
            stmt.setString(2, industry);
            stmt.setString(3, location);
            stmt.setInt(4, creditTime);
            stmt.setInt(5, creditLimit);
            stmt.setTimestamp(6, timestamp);
            stmt.setString(7, clientUpdatedBy);
			stmt.setString(8, clientId);
			
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
