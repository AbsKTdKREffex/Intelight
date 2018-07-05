package com.maroolights.architect;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class ArchitectCompany {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String companyId;
    private String architectId;
    private String companyName;
    private String companyLocation;
    private String companyWebsite;
    private Long companyContactNo;
    private String companyEmail;
    private String companyAddress;
    private String source;
    private String state;
    private String gstNo;
    private String firstName;
    private String lastName;
    private String archLocation;
    private Long archContactNo;
    private Long archAltContactNo;
    private String archEmail;
    private String archAddress;
    private String designation;
    private String companyCreatedBy;
    private String companyUpdatedBy;
    private String architectCreatedBy;
    private String architectUpdatedBy;
    
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public String getArchitectId() {
		return architectId;
	}
	public void setArchitectId(String architectId) {
		this.architectId = architectId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCompanyLocation() {
		return companyLocation;
	}
	public void setCompanyLocation(String companyLocation) {
		this.companyLocation = companyLocation;
	}
	public String getCompanyWebsite() {
		return companyWebsite;
	}
	public void setCompanyWebsite(String companyWebsite) {
		this.companyWebsite = companyWebsite;
	}
	public Long getCompanyContactNo() {
		return companyContactNo;
	}
	public void setCompanyContactNo(Long companyContactNo) {
		this.companyContactNo = companyContactNo;
	}
	public String getSource() {
		return source;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getGstNo() {
		return gstNo;
	}
	public void setGstNo(String gstNo) {
		this.gstNo = gstNo;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getFirstName() {
		return firstName;
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
	public String getArchLocation() {
		return archLocation;
	}
	public void setArchLocation(String archLocation) {
		this.archLocation = archLocation;
	}
	public Long getArchContactNo() {
		return archContactNo;
	}
	public void setArchContactNo(Long archContactNo) {
		this.archContactNo = archContactNo;
	}
	public String getArchEmail() {
		return archEmail;
	}
	public void setArchEmail(String archEmail) {
		this.archEmail = archEmail;
	}
	public String getArchAddress() {
		return archAddress;
	}
	public void setArchAddress(String archAddress) {
		this.archAddress = archAddress;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getCompanyEmail() {
		return companyEmail;
	}
	public void setCompanyEmail(String companyEmail) {
		this.companyEmail = companyEmail;
	}
	public String getCompanyAddress() {
		return companyAddress;
	}
	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}
	public Long getArchAltContactNo() {
		return archAltContactNo;
	}
	public void setArchAltContactNo(Long archAltContactNo) {
		this.archAltContactNo = archAltContactNo;
	}
	public String getCompanyCreatedBy() {
		return companyCreatedBy;
	}
	public void setCompanyCreatedBy(String companyCreatedBy) {
		this.companyCreatedBy = companyCreatedBy;
	}
	public String getCompanyUpdatedBy() {
		return companyUpdatedBy;
	}
	public void setCompanyUpdatedBy(String companyUpdatedBy) {
		this.companyUpdatedBy = companyUpdatedBy;
	}
	public String getArchitectCreatedBy() {
		return architectCreatedBy;
	}
	public void setArchitectCreatedBy(String architectCreatedBy) {
		this.architectCreatedBy = architectCreatedBy;
	}
	public String getArchitectUpdatedBy() {
		return architectUpdatedBy;
	}
	public void setArchitectUpdatedBy(String architectUpdatedBy) {
		this.architectUpdatedBy = architectUpdatedBy;
	}
	
	public boolean new_Company() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_company "
					+ "(rowId, companyName, location, website, contactNo, email,"
					+ " address, source, state, gstNo, createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, companyId);
            stmt.setString(2, companyName);
            stmt.setString(3, companyLocation);
            stmt.setString(4, companyWebsite);
            stmt.setLong(5, companyContactNo);
            stmt.setString(6, companyEmail);
            stmt.setString(7, companyAddress);
            stmt.setString(8, source);
            stmt.setString(9, state);
            stmt.setString(10, gstNo);
            stmt.setTimestamp(11, timestamp);
            stmt.setTimestamp(12, timestamp);
            stmt.setString(13, companyCreatedBy);
            stmt.setString(14, companyUpdatedBy);
            
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
	
	public boolean new_Architect() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        try {
        	String sql = "INSERT INTO maroo_data.d_architect "
					+ "(rowId, companyId, firstName, lastName, location,"
					+ " contactNo, altContactNo, emailId, address, designation,"
					+ " createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, architectId);
            stmt.setString(2, companyId);
            stmt.setString(3, firstName);
            stmt.setString(4, lastName);
            stmt.setString(5, archLocation);
            stmt.setLong(6, archContactNo);
            stmt.setLong(7, archAltContactNo);
            stmt.setString(8, archEmail);
            stmt.setString(9, archAddress);
            stmt.setString(10, designation);
            stmt.setTimestamp(11, timestamp);
            stmt.setTimestamp(12, timestamp);
            stmt.setString(13, architectCreatedBy);
            stmt.setString(14, architectUpdatedBy);
            System.out.println(stmt);
            
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
	
	public boolean update_Company() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "update maroo_data.d_company  set"
					+ " companyName = ?, location = ?, website = ?, contactNo = ?,"
					+ " email = ?, address = ?, source = ?, state = ?, gstNo = ?,"
					+ " updatedOn = ?, updatedBy = ? where rowId = ?";
			
			stmt = conn.prepareStatement(sql);
			
            stmt.setString(1, companyName);
            stmt.setString(2, companyLocation);
            stmt.setString(3, companyWebsite);
            stmt.setLong(4, companyContactNo);
            stmt.setString(5, companyEmail);
            stmt.setString(6, companyAddress);
            stmt.setString(7, source);
            stmt.setString(8, state);
            stmt.setString(9, gstNo);
            stmt.setTimestamp(10, timestamp);
            stmt.setString(11, companyUpdatedBy);
			stmt.setString(12, companyId);
			
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
	
	public boolean update_Architect() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        try {
        	String sql = "update maroo_data.d_architect  set"
					+ " firstName = ?, lastName = ?, location = ?, contactNo = ?, altContactNo = ?,"
					+ " emailId = ?, address = ?, designation = ?, updatedOn = ?, updatedBy = ? "
					+ "where rowId = ?";
			stmt = conn.prepareStatement(sql);
			
			stmt.setString(1, firstName);
            stmt.setString(2, lastName);
            stmt.setString(3, archLocation);
            stmt.setLong(4, archContactNo);
            stmt.setLong(5, archAltContactNo);
            stmt.setString(6, archEmail);
            stmt.setString(7, archAddress);
            stmt.setString(8, designation);
            stmt.setTimestamp(9, timestamp);
            stmt.setString(10, architectUpdatedBy);
            stmt.setString(11, architectId);
            System.out.println(stmt);
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
