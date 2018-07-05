package com.maroolights.electrician;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class ElectricianCompany {
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String companyId;
    private String contractorCompanyName;
    private String contractorName;
    private String companyLocation;
    private Long companyContactNo;
    private Long companyAltContactNo;
    private String companyEmail;
    private String type;
    private String state;
    private String gstNo;
    private String staffId;
    private String staffName;
    private String staffLocation;
    private Long staffContactNo;
    private Long staffAltContactNo;
    private String companyCreatedBy;
    private String companyUpdatedBy;
    private String electricianCreatedBy;
    private String electricianUpdatedBy;
    
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public String getContractorCompanyName() {
		return contractorCompanyName;
	}
	public void setContractorCompanyName(String contractorCompanyName) {
		this.contractorCompanyName = contractorCompanyName;
	}
	public String getContractorName() {
		return contractorName;
	}
	public void setContractorName(String contractorName) {
		this.contractorName = contractorName;
	}
	public String getCompanyLocation() {
		return companyLocation;
	}
	public void setCompanyLocation(String companyLocation) {
		this.companyLocation = companyLocation;
	}
	public Long getCompanyContactNo() {
		return companyContactNo;
	}
	public void setCompanyContactNo(Long companyContactNo) {
		this.companyContactNo = companyContactNo;
	}
	public Long getCompanyAltContactNo() {
		return companyAltContactNo;
	}
	public void setCompanyAltContactNo(Long companyAltContactNo) {
		this.companyAltContactNo = companyAltContactNo;
	}
	public String getCompanyEmail() {
		return companyEmail;
	}
	public void setCompanyEmail(String companyEmail) {
		this.companyEmail = companyEmail;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	public String getStaffId() {
		return staffId;
	}
	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}
	public String getStaffName() {
		return staffName;
	}
	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}
	public String getStaffLocation() {
		return staffLocation;
	}
	public void setStaffLocation(String staffLocation) {
		this.staffLocation = staffLocation;
	}
	public Long getStaffContactNo() {
		return staffContactNo;
	}
	public void setStaffContactNo(Long staffContactNo) {
		this.staffContactNo = staffContactNo;
	}
	public Long getStaffAltContactNo() {
		return staffAltContactNo;
	}
	public void setStaffAltContactNo(Long staffAltContactNo) {
		this.staffAltContactNo = staffAltContactNo;
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
	public String getElectricianCreatedBy() {
		return electricianCreatedBy;
	}
	public void setElectricianCreatedBy(String electricianCreatedBy) {
		this.electricianCreatedBy = electricianCreatedBy;
	}
	public String getElectricianUpdatedBy() {
		return electricianUpdatedBy;
	}
	public void setElectricianUpdatedBy(String electricianUpdatedBy) {
		this.electricianUpdatedBy = electricianUpdatedBy;
	}
	
	public boolean new_Company() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_contaractor_company "
					+ "(rowId, contractorCompanyName, contractorName, location,"
					+ " contactNo, altContactNo, email, type, state, gstNo,"
					+ " createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, companyId);
            stmt.setString(2, contractorCompanyName);
            stmt.setString(3, contractorName);
            stmt.setString(4, companyLocation);
            stmt.setLong(5, companyContactNo);
            stmt.setLong(6, companyAltContactNo);
            stmt.setString(7, companyEmail);
            stmt.setString(8, type);
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
	
	public boolean new_Company_Staff() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_contaractor_staff "
					+ "(rowId, contractorCompanyId, staffName, location, contactNo, altContactNo,"
					+ " createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        	
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, staffId);
            stmt.setString(2, companyId);
            stmt.setString(3, staffName);
            stmt.setString(4, staffLocation);
            stmt.setLong(5, staffContactNo);
            stmt.setLong(6, staffAltContactNo);
            stmt.setTimestamp(7, timestamp);
            stmt.setTimestamp(8, timestamp);
            stmt.setString(9, electricianCreatedBy);
            stmt.setString(10, electricianUpdatedBy);

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
			String sql = "update maroo_data.d_contaractor_company  set"
					+ " contractorCompanyName = ?, contractorName = ?, location = ?, contactNo = ?,"
					+ " altContactNo = ?, email = ?, type = ?, state = ?, gstNo = ?,"
					+ " updatedOn = ?, updatedBy = ? where rowId = ?";
			
			stmt = conn.prepareStatement(sql);
			

            stmt.setString(1, contractorCompanyName);
            stmt.setString(2, contractorName);
            stmt.setString(3, companyLocation);
            stmt.setLong(4, companyContactNo);
            stmt.setLong(5, companyAltContactNo);
            stmt.setString(6, companyEmail);
            stmt.setString(7, type);
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
	
	public boolean update_Company_Staff() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "update maroo_data.d_contaractor_staff  set"
					+ " staffName = ?, location = ?, contactNo = ?, altContactNo = ?,"
					+ " updatedOn = ?, updatedBy = ? "
					+ "where rowId = ?";
			stmt = conn.prepareStatement(sql);

            stmt.setString(1, staffName);
            stmt.setString(2, staffLocation);
            stmt.setLong(3, staffContactNo);
            stmt.setLong(4, staffAltContactNo);
            stmt.setTimestamp(5, timestamp);
            stmt.setString(6, electricianUpdatedBy);
            stmt.setString(7, staffId);
	            
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
