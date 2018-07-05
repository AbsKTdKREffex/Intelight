package com.maroonlights.hsn;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class Hsn {

    Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String rowId;
    private String hsnId;
    private String sgst;
    private String cgst;
    private String igst;
    private String createdBy;
    private String updatedBy;
	
	public String getSgst() {
		return sgst;
	}

	public void setSgst(String sgst) {
		this.sgst = sgst;
	}
	
	public String getRowId() {
		return rowId;
	}

	public void setRowId(String rowId) {
		this.rowId = rowId;
	}

	public String getHsnId() {
		return hsnId;
	}

	public void setHsnId(String hsnId) {
		this.hsnId = hsnId;
	}

	public String getCgst() {
		return cgst;
	}

	public void setCgst(String cgst) {
		this.cgst = cgst;
	}

	public String getIgst() {
		return igst;
	}

	public void setIgst(String igst) {
		this.igst = igst;
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

	public boolean new_Hsn() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_hsn "
					+ "(rowId, Hsnid, Sgst, Cgst, Igst,"
					+ "createdOn, updatedOn, createdBy, updatedBy) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, rowId);
            stmt.setString(2, hsnId);
            stmt.setString(3, sgst);
            stmt.setString(4, cgst);
            stmt.setString(5, igst);
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
     
	public boolean update_Hsn() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "update maroo_data.d_hsn  set"
					+ " Hsnid = ?, Sgst = ?, Cgst = ?, Igst = ?, "
					+ "updatedBy = ?, updatedOn = ?"
					+ "where rowId = ?";
			stmt = conn.prepareStatement(sql);
			
				stmt.setString(1, hsnId);
	            stmt.setString(2, sgst);
	            stmt.setString(3, cgst);
	            stmt.setString(4, igst);
	            stmt.setString(5, updatedBy);
	            stmt.setTimestamp(6, timestamp);
	            stmt.setString(7, rowId);
	            
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
