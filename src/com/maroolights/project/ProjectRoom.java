package com.maroolights.project;

import java.sql.*;

import com.maroolights.data.MySqlConnect;

public class ProjectRoom extends Project{

	Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
 
    private String roomId;
    private String roomName;
    private String sizeLBH;
    private String lightPlacements;
    private String measurementDetails;
    private String recommendationsGiven;
    private String provisionForDrivers;
    private Boolean picsTaken;
    private String roomCreatedBy;
    private String roomUpdatedBy;
	
    public String getRoomId() {
		return roomId;
	}
	public void setRoomId(String roomId) {
		this.roomId = roomId;
	}
	public String getRoomName() {
		return roomName;
	}
	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}
	public String getSizeLBH() {
		return sizeLBH;
	}
	public void setSizeLBH(String sizeLBH) {
		this.sizeLBH = sizeLBH;
	}
	public String getLightPlacements() {
		return lightPlacements;
	}
	public void setLightPlacements(String lightPlacements) {
		this.lightPlacements = lightPlacements;
	}
	public String getMeasurementDetails() {
		return measurementDetails;
	}
	public void setMeasurementDetails(String measurementDetails) {
		this.measurementDetails = measurementDetails;
	}
	public String getRecommendationsGiven() {
		return recommendationsGiven;
	}
	public void setRecommendationsGiven(String recommendationsGiven) {
		this.recommendationsGiven = recommendationsGiven;
	}
	public String getProvisionForDrivers() {
		return provisionForDrivers;
	}
	public void setProvisionForDrivers(String provisionForDrivers) {
		this.provisionForDrivers = provisionForDrivers;
	}
	public Boolean getPicsTaken() {
		return picsTaken;
	}
	public void setPicsTaken(Boolean picsTaken) {
		this.picsTaken = picsTaken;
	}
	public String getRoomCreatedBy() {
		return roomCreatedBy;
	}
	public void setRoomCreatedBy(String roomCreatedBy) {
		this.roomCreatedBy = roomCreatedBy;
	}
	public String getRoomUpdatedBy() {
		return roomUpdatedBy;
	}
	public void setRoomUpdatedBy(String roomUpdatedBy) {
		this.roomUpdatedBy = roomUpdatedBy;
	}
	
	public boolean new_ProjectRoom() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.f_room_details "
        			+ "(rowid, projectId, roomName, sizeLBH, lightPlacements, measurementDetails, "
        			+ "recommendationsGiven, provisionForDrivers, picsTaken, "
        			+ "createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, roomId);
            stmt.setString(2, projectId);
            stmt.setString(3, roomName);
//            stmt.setString(4, electrician);
            stmt.setString(4, sizeLBH);
            stmt.setString(5, lightPlacements);
            stmt.setString(6, measurementDetails);
            stmt.setString(7, recommendationsGiven);
//            stmt.setString(9, samplesToBrought);
//            stmt.setString(10, samplesGiven);
            stmt.setString(8, provisionForDrivers);
            stmt.setBoolean(9, picsTaken);
            stmt.setString(10, roomCreatedBy);
            stmt.setString(11, roomUpdatedBy);
            stmt.setTimestamp(12, timestamp);
            stmt.setTimestamp(13, timestamp);
             
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
     
	public boolean update_ProjectRoom() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "UPDATE maroo_data.f_room_details SET "
					+ "roomName = ?, sizeLBH = ?, lightPlacements = ?, "
					+ "measurementDetails = ?, recommendationsGiven = ?, "
        			+ "provisionForDrivers = ?, picsTaken = ?, "
        			+ "updatedBy = ?, updatedOn = ? WHERE rowid = ?;";
			stmt = conn.prepareStatement(sql);
			
			stmt.setString(1, roomName);
//            stmt.setString(2, electrician);
            stmt.setString(2, sizeLBH);
            stmt.setString(3, lightPlacements);
            stmt.setString(4, measurementDetails);
            stmt.setString(5, recommendationsGiven);
//            stmt.setString(7, samplesToBrought);
//            stmt.setString(8, samplesGiven);
            stmt.setString(6, provisionForDrivers);
            stmt.setBoolean(7, picsTaken);
            stmt.setString(8, roomUpdatedBy);
            stmt.setTimestamp(9, timestamp);
            stmt.setString(10, roomId);
            
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
