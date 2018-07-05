package com.maroolights.employee;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;
 
public class Employee  {
     
    Connection conn = null;
    PreparedStatement stmt = null;
    PreparedStatement stmt1 = null;
    PreparedStatement stmt2 = null;
    PreparedStatement stmt3 = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String employeeId;
    private String firstName;
    private String lastName;
    private String department;
    private String designation;
    private Long mobileNo;
    private Long altContactNo;
    private String emailId;
    private String userIdEmp;
    private String password="pass123";
    private Date birthday;
    private Date joinDate;
    private String status;
    private String location;
    private String reportTo;
    private String userId;
    private String permissions;
    private String createdby;
    private String updatedby;
   	
	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
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

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(Long mobileNo) {
		this.mobileNo = mobileNo;
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

	public String getUserIdEmp() {
		return userIdEmp;
	}

	public void setUserIdEmp(String userIdEmp) {
		this.userIdEmp = userIdEmp;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getBirthday() {
		return birthday;
	}

	public String getCreatedby() {
		return createdby;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	public String getUpdatedby() {
		return updatedby;
	}

	public void setUpdatedby(String updatedby) {
		this.updatedby = updatedby;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public Date getJoinDate() {
		return joinDate;
	}

	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getReportTo() {
		return reportTo;
	}

	public void setReportTo(String reportTo) {
		this.reportTo = reportTo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPermissions() {
		return permissions;
	}

	public void setPermissions(String permissions) {
		this.permissions = permissions;
	}

	public boolean new_Employee() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
            String sql = "INSERT INTO maroo_data.d_employee "
					+ "(rowId, firstName, lastName, department, designation, contactNo, "
					+ "altcontactNo, emailId, userId, DOB, joiningDate, "
					+ "location, reportTo, createdOn, updatedOn, createdBy, updatedBy) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			
            stmt = conn.prepareStatement(sql);
        	
            stmt.setString(1, employeeId);
            stmt.setString(2, firstName);
            stmt.setString(3, lastName);
            stmt.setString(4, department);
            stmt.setString(5, designation);
            stmt.setLong(6, mobileNo);
            stmt.setLong(7, altContactNo);
            stmt.setString(8, emailId);
            stmt.setString(9, userIdEmp);
            stmt.setDate(10, birthday);
            stmt.setDate(11, joinDate);
            stmt.setString(12, location);
            stmt.setString(13, reportTo);
            stmt.setTimestamp(14, timestamp);
            stmt.setTimestamp(15, timestamp);
            stmt.setString(16, createdby);
            stmt.setString(17, updatedby);
            
            stmt.executeUpdate();
            conn.close();
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
     
	public boolean update_Employee() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "update maroo_data.d_employee  set"
					+ " firstName = ?, lastName = ?, department = ?, designation = ?, contactNo = ?,"
					+ "altcontactNo= ?, emailId = ?, userId = ?, password = ?, "
					+ "DOB = ?, joiningDate = ?, reportTo = ?, updatedOn = ?, updatedBy = ?, status = ?, location = ? "
					+ "where rowId = ?";
			stmt = conn.prepareStatement(sql);
			
			stmt.setString(1, firstName);
            stmt.setString(2, lastName);
            stmt.setString(3, department);
            stmt.setString(4, designation);
            stmt.setLong(5, mobileNo);
            stmt.setLong(6, altContactNo);
            stmt.setString(7, emailId);
            stmt.setString(8, userIdEmp);
            stmt.setString(9, password);
            stmt.setDate(10, birthday);
            stmt.setDate(11, joinDate);
            stmt.setString(12, reportTo);
            stmt.setTimestamp(13, timestamp);
            stmt.setString(14, updatedby);
            stmt.setString(15, status);
            stmt.setString(16, location);
	        stmt.setString(17, employeeId);
	            
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return returnVal;
	}
	
	public boolean selfupdate_Employee() {
		boolean returnVal = false;
       conn = MySqlConnect.DBConnection();
       
       try {
			String sql = "update maroo_data.d_employee  set"
					+ " firstName = ?, lastName = ?, contactNo = ?,"
					+ " altcontactNo= ?, emailId = ?, location = ?,"
					+ " updatedOn = ?, updatedBy = ? "
					+ "where rowId = ?";
			stmt = conn.prepareStatement(sql);
			
			stmt.setString(1, firstName);
			stmt.setString(2, lastName);
			stmt.setLong(3, mobileNo);
			stmt.setLong(4, altContactNo);
			stmt.setString(5, emailId);
			stmt.setString(6, location);
			stmt.setTimestamp(7, timestamp);
			stmt.setString(8, updatedby);
			stmt.setString(9, employeeId);
	            
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
    
	public boolean assigningPermissions() {
		boolean returnVal = false;
       conn = MySqlConnect.DBConnection();
        
       try {
			String sql = "update maroo_data.d_employee set"
					+ " permissions = ?,"
					+ " updatedOn = ?, updatedBy = ? "
					+ "where rowId = ?";
			stmt = conn.prepareStatement(sql);
			
			stmt.setString(1, permissions);
			stmt.setTimestamp(2, timestamp);
			stmt.setString(3, updatedby);
			stmt.setString(4, employeeId);

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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return returnVal;
	}
}