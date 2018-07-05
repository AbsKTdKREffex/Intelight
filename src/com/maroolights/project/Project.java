package com.maroolights.project;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;


public class Project {
	 
    Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    protected String projectId;
	private String clientId;
	private String clientContactId;
	private String architectCompanyId;
	private String architectId;
	private String assArchitectId;
	private String projectName;
	private String siteIncharge;
	private Long siteInchargeNo;
	private String overallHeight;
	private String siteArea;
	private String electrician;
	private long electricianNo;
	private String contractorElectrician;
	private long contractorElectricianNo;
	private String noOfRooms;
	private String siteAddress;
	private String projectCategory;
	private String projectSubCategory;
	private String projectManager;
	private String siteTiming;
	protected String projectCreatedBy;
	protected String projectUpdatedBy;
	
	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getClientContactId() {
		return clientContactId;
	}

	public void setClientContactId(String clientContactId) {
		this.clientContactId = clientContactId;
	}

	public String getArchitectCompanyId() {
		return architectCompanyId;
	}

	public void setArchitectCompanyId(String architectCompanyId) {
		this.architectCompanyId = architectCompanyId;
	}

	public String getArchitectId() {
		return architectId;
	}

	public void setArchitectId(String architectId) {
		this.architectId = architectId;
	}

	public String getAssArchitectId() {
		return assArchitectId;
	}

	public void setAssArchitectId(String assArchitectId) {
		this.assArchitectId = assArchitectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getSiteIncharge() {
		return siteIncharge;
	}

	public void setSiteIncharge(String siteIncharge) {
		this.siteIncharge = siteIncharge;
	}

	public Long getSiteInchargeNo() {
		return siteInchargeNo;
	}

	public void setSiteInchargeNo(Long siteInchargeNo) {
		this.siteInchargeNo = siteInchargeNo;
	}

	public String getOverallHeight() {
		return overallHeight;
	}

	public void setOverallHeight(String overallHeight) {
		this.overallHeight = overallHeight;
	}

	public String getSiteArea() {
		return siteArea;
	}

	public void setSiteArea(String siteArea) {
		this.siteArea = siteArea;
	}

	public String getElectrician() {
		return electrician;
	}

	public void setElectrician(String electrician) {
		this.electrician = electrician;
	}

	public long getElectricianNo() {
		return electricianNo;
	}

	public void setElectricianNo(long electricianNo) {
		this.electricianNo = electricianNo;
	}

	public String getContractorElectrician() {
		return contractorElectrician;
	}

	public void setContractorElectrician(String contractorElectrician) {
		this.contractorElectrician = contractorElectrician;
	}

	public long getContractorElectricianNo() {
		return contractorElectricianNo;
	}

	public void setContractorElectricianNo(long contractorElectricianNo) {
		this.contractorElectricianNo = contractorElectricianNo;
	}

	public String getNoOfRooms() {
		return noOfRooms;
	}

	public void setNoOfRooms(String noOfRooms) {
		this.noOfRooms = noOfRooms;
	}

	public String getProjectCategory() {
		return projectCategory;
	}

	public void setProjectCategory(String projectCategory) {
		this.projectCategory = projectCategory;
	}

	public String getProjectSubCategory() {
		return projectSubCategory;
	}

	public void setProjectSubCategory(String projectSubCategory) {
		this.projectSubCategory = projectSubCategory;
	}

	public String getSiteAddress() {
		return siteAddress;
	}

	public void setSiteAddress(String siteAddress) {
		this.siteAddress = siteAddress;
	}

	public String getProjectCreatedBy() {
		return projectCreatedBy;
	}

	public void setProjectCreatedBy(String projectCreatedBy) {
		this.projectCreatedBy = projectCreatedBy;
	}

	public String getProjectUpdatedBy() {
		return projectUpdatedBy;
	}

	public void setProjectUpdatedBy(String projectUpdatedBy) {
		this.projectUpdatedBy = projectUpdatedBy;
	}

	public String getProjectManager() {
		return projectManager;
	}

	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}

	public String getSiteTiming() {
		return siteTiming;
	}

	public void setSiteTiming(String siteTiming) {
		this.siteTiming = siteTiming;
	}

	public boolean new_Project() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.f_project_details "
					+ "(rowid, clientId, clientContactId, architectCompanyId, architectId, assArchitectId, projectName, siteIncharge, "
					+ "siteInchargeNo, overallHeight, electrician, electricianNo, contractorElectrician, contractorElectricianNo, "
					+ "siteArea, noOfRooms, siteAddress, projcategory, projsubcategory, projectManager, siteTiming, "
					+ "createdBy, updatedBy, createdOn, updatedOn) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, projectId);
            stmt.setString(2, clientId);
            stmt.setString(3, clientContactId);
            stmt.setString(4, architectCompanyId);
            stmt.setString(5, architectId);
            stmt.setString(6, assArchitectId);
            stmt.setString(7, projectName);
            stmt.setString(8, siteIncharge);
            stmt.setLong(9, siteInchargeNo);
            stmt.setString(10, overallHeight);
            stmt.setString(11, electrician);
            stmt.setLong(12, electricianNo);
            stmt.setString(13, contractorElectrician);
            stmt.setLong(14, contractorElectricianNo);
            stmt.setString(15, siteArea);
            stmt.setString(16, noOfRooms);
            stmt.setString(17, siteAddress);
            stmt.setString(18, projectCategory);
            stmt.setString(19, projectSubCategory);
            stmt.setString(20, projectManager);
            stmt.setString(21, siteTiming);
            stmt.setString(22, projectCreatedBy);
            stmt.setString(23, projectUpdatedBy);
            stmt.setTimestamp(24, timestamp);
            stmt.setTimestamp(25, timestamp);
             
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
     
	public boolean update_Project() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "UPDATE maroo_data.f_project_details SET "
					+ "clientId = ?, clientContactId = ?, architectCompanyId = ?, architectId = ?, assArchitectId = ?, projectName = ?, siteIncharge = ?, "
					+ "siteInchargeNo = ?, overallHeight = ?, electrician = ?, electricianNo = ?, contractorElectrician = ?, contractorElectricianNo = ?, "
					+ "siteArea = ?, noOfRooms = ?, siteAddress = ?,  projcategory = ?, projsubcategory = ?, projectManager = ?, siteTiming = ?, "
					+ "updatedBy = ?, updatedOn = ? WHERE rowid = ?;";
			stmt = conn.prepareStatement(sql);
			
			 stmt.setString(1, clientId);
	         stmt.setString(2, clientContactId);
	         stmt.setString(3, architectCompanyId);
	         stmt.setString(4, architectId);
	         stmt.setString(5, assArchitectId);
	         stmt.setString(6, projectName);
	         stmt.setString(7, siteIncharge);
	         stmt.setLong(8, siteInchargeNo);
	         stmt.setString(9, overallHeight);
             stmt.setString(10, electrician);
             stmt.setLong(11, electricianNo);
             stmt.setString(12, contractorElectrician);
             stmt.setLong(13, contractorElectricianNo);
	         stmt.setString(14, siteArea);
	         stmt.setString(15, noOfRooms);
	         stmt.setString(16, siteAddress);
	         stmt.setString(17, projectCategory);
	         stmt.setString(18, projectSubCategory);
	         stmt.setString(19, projectManager);
	         stmt.setString(20, siteTiming);
	         stmt.setString(21, projectUpdatedBy);
	         stmt.setTimestamp(22, timestamp);
	         stmt.setString(23, projectId);
	            
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
