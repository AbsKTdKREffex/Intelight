package com.maroolights.quotation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;

public class QuotationDetails extends Quotation{
	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());

    private String status;
    private String revisedFrom;
    private String quotationDetailsCreatedBy;
    private String quotationDetailsUpdatedBy;
    
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRevisedFrom() {
		return revisedFrom;
	}
	public void setRevisedFrom(String revisedFrom) {
		this.revisedFrom = revisedFrom;
	}
	public String getQuotationDetailsCreatedBy() {
		return quotationDetailsCreatedBy;
	}
	public void setQuotationDetailsCreatedBy(String quotationDetailsCreatedBy) {
		this.quotationDetailsCreatedBy = quotationDetailsCreatedBy;
	}
	public String getQuotationDetailsUpdatedBy() {
		return quotationDetailsUpdatedBy;
	}
	public void setQuotationDetailsUpdatedBy(String quotationDetailsUpdatedBy) {
		this.quotationDetailsUpdatedBy = quotationDetailsUpdatedBy;
	}
	
	public boolean new_Quotation_Details() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "INSERT INTO maroo_data.d_quotation_details "
					+ "(rowId, projectId, status, revisedFrom,"
					+ "createdOn, updatedOn, createdBy, updatedBy ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, super.getQuotationId());
            stmt.setString(2, super.getProjectId());
            stmt.setString(3, status);
            stmt.setString(4, revisedFrom);
            stmt.setTimestamp(5, timestamp);
            stmt.setTimestamp(6, timestamp);
            stmt.setString(7, quotationDetailsCreatedBy);
            stmt.setString(8, quotationDetailsUpdatedBy);
             
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

//	public boolean update_Quotation_Details() {
//        boolean returnVal = false;
//        conn = MySqlConnect.DBConnection();
//         
//        try {
//        	
//        	String sql = "update maroo_data.d_quotation_details "
//					+ "(rowId, projectId, status, revisedFrom,"
//					+ "createdOn, updatedOn, createdBy, updatedBy ) VALUES "
//					+ "( ?, ?, ?, ?, ?, ?, ?, ?)";
//
//      
//            stmt = conn.prepareStatement(sql);
//
//            stmt.setString(1, super.getQuotationId());
//            stmt.setString(2, super.getProjectId());
//            stmt.setString(3, status);
//            stmt.setString(4, revisedFrom);
//            stmt.setTimestamp(5, timestamp);
//            stmt.setTimestamp(6, timestamp);
//            stmt.setString(7, super.getQuotationId());
//            stmt.setString(8, super.getQuotationId());
//             
//            stmt.executeUpdate();
//            returnVal = true;
//            conn.close();
//            }
//        catch (SQLException e) {
//            e.printStackTrace();
//        	returnVal = false;
//        }
//        finally {
//			try {
//				conn.close();
//			} catch (SQLException e) {
//				
//				e.printStackTrace();
//			}
//		}
//        return returnVal;
//    }
}
