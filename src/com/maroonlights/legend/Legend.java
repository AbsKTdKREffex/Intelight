package com.maroonlights.legend;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.maroolights.data.MySqlConnect;

public class Legend {
	 
    Connection conn = null;
    PreparedStatement stmt = null;
    
    private String rowId;
	private String legendGroup;
	private String category;
	private String subCategory;
	
	public String getRowId() {
		return rowId;
	}

	public void setRowId(String rowId) {
		this.rowId = rowId;
	}

	public String getLegendGroup() {
		return legendGroup;
	}

	public void setLegendGroup(String legendGroup) {
		this.legendGroup = legendGroup;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	private String description;
	
	public boolean new_Customer() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_legend "
					+ "( rowId, legendGroup, category, subCategory, description ) VALUES "
					+ "( ?, ?, ?, ?, ?)";
			
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, rowId);
            stmt.setString(2, legendGroup);
            stmt.setString(3, category);
            stmt.setString(4, subCategory);
            stmt.setString(5, description);
             
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
     
	public boolean update_Customer() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "update maroo_data.d_legend  set"
					+ " legendGroup = ?, category = ?, subCategory = ?, description = ?"
					+ "where rowId = ?";
			stmt = conn.prepareStatement(sql);
			
            stmt.setString(1, legendGroup);
            stmt.setString(2, category);
            stmt.setString(3, subCategory);
            stmt.setString(4, description);
			stmt.setString(5, rowId);
	            
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
