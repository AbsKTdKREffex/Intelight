package com.maroolights.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;
 
public class ProductProfile implements ProductMethods{
     
    Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String productId;
    private String brand;
    private String productName = "";
	private String width = "";
    private String depth;
    private String wattage = "";
	private String totalWattage = "";
    private String ledName;
    private String ledType;
    private String deepTop;
    private String fixtureType;
    private String mountingType;
    private String trim;
    private String color;
    private String finish;
    private String finishType;
    private String diffuser = "";
    private String driver = "";
    private String driverDetail;
    private String warranty = "";
    private String length;
    private String hsnId;
    private int gold;
    private int silver;
    private int bronze;
    private String additionalInfo;
	private boolean imgUpload = false;
	private String uploadedImgName = "";
    private String createdBy;
    private String updatedBy;

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getHsnId() {
		return hsnId;
	}

	public void setHsnId(String hsnId) {
		this.hsnId = hsnId;
	}

	public int getGold() {
		return gold;
	}

	public void setGold(int gold) {
		this.gold = gold;
	}

	public int getSilver() {
		return silver;
	}

	public void setSilver(int silver) {
		this.silver = silver;
	}

	public int getBronze() {
		return bronze;
	}

	public void setBronze(int bronze) {
		this.bronze = bronze;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
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

	public String getWarranty() {
		return warranty;
	}

	public void setWarranty(String warranty) {
		this.warranty = warranty;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getWattage() {
		return wattage;
	}

	public void setWattage(String wattage) {
		this.wattage = wattage;
	}

	public String getFinishType() {
		return finishType;
	}

	public void setFinishType(String finishType) {
		this.finishType = finishType;
	}

	public String getDiffuser() {
		return diffuser;
	}

	public void setDiffuser(String diffuser) {
		this.diffuser = diffuser;
	}

	public String getDriver() {
		return driver;
	}

	public void setDriver(String driver) {
		this.driver = driver;
	}

	public String getTotalWattage() {
		return totalWattage;
	}

	public void setTotalWattage(String totalWattage) {
		this.totalWattage = totalWattage;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	public boolean isImgUpload() {
		return imgUpload;
	}

	public void setImgUpload(boolean imgUpload) {
		this.imgUpload = imgUpload;
	}

	public String getUploadedImgName() {
		return uploadedImgName;
	}

	public void setUploadedImgName(String uploadedImgName) {
		this.uploadedImgName = uploadedImgName;
	}

	public String getDepth() {
		return depth;
	}

	public void setDepth(String depth) {
		this.depth = depth;
	}

	public String getLedName() {
		return ledName;
	}

	public void setLedName(String ledName) {
		this.ledName = ledName;
	}

	public String getLedType() {
		return ledType;
	}

	public void setLedType(String ledType) {
		this.ledType = ledType;
	}

	public String getDeepTop() {
		return deepTop;
	}

	public void setDeepTop(String deepTop) {
		this.deepTop = deepTop;
	}

	public String getFixtureType() {
		return fixtureType;
	}

	public void setFixtureType(String fixtureType) {
		this.fixtureType = fixtureType;
	}

	public String getMountingType() {
		return mountingType;
	}

	public void setMountingType(String mountingType) {
		this.mountingType = mountingType;
	}

	public String getTrim() {
		return trim;
	}

	public void setTrim(String trim) {
		this.trim = trim;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getFinish() {
		return finish;
	}

	public void setFinish(String finish) {
		this.finish = finish;
	}

	public String getDriverDetail() {
		return driverDetail;
	}

	public void setDriverDetail(String driverDetail) {
		this.driverDetail = driverDetail;
	}

	public String getLength() {
		return length;
	}

	public void setLength(String length) {
		this.length = length;
	}

	@Override
	public boolean newProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
        
        try {
        	String sql = "INSERT INTO maroo_data.d_productprofiles "
					+ "(rowId, brand, productName, width, depth, wattage,"
					+ " totalWattage, ledName, ledType, deepTop, fixtureType,"
					+ " mountingType, trim, color, finish, finishType, diffuser,"
					+ " driver, driverDetail, warranty, length,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ " createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, productId);
            stmt.setString(2, brand);
            stmt.setString(3, productName);
            stmt.setString(4, width);
            stmt.setString(5, depth);
            stmt.setString(6, wattage);
            stmt.setString(7, totalWattage);
            stmt.setString(8, ledName);
            stmt.setString(9, ledType);
            stmt.setString(10, deepTop);
            stmt.setString(11, fixtureType);
            stmt.setString(12, mountingType);
            stmt.setString(13, trim);
            stmt.setString(14, color);
            stmt.setString(15, finish);
            stmt.setString(16, finishType);
            stmt.setString(17, diffuser);
            stmt.setString(18, driver);
            stmt.setString(19, driverDetail);
            stmt.setString(20, warranty);
            stmt.setString(21, length);
            stmt.setString(22, hsnId);
            stmt.setInt(23, gold);
            stmt.setInt(24, silver);
            stmt.setInt(25, bronze);
            stmt.setString(26, additionalInfo);
            stmt.setString(27, createdBy);
            stmt.setString(28, updatedBy);
            stmt.setTimestamp(29, timestamp);
            stmt.setTimestamp(30, timestamp);
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

	@Override
	public boolean updateProduct() {
		return false;
	}

	@Override
	public boolean deleteProduct() {
		return false;
	}

	/*public boolean new_SpotLightProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_product "
					+ "(rowId, productType, brand, wattage, shape, fixingType, rimType,"
					+ " recessedType, recessedSubType, nature, finishType, finishColor,"
					+ " LEDChipBrand, colorTemperature, beamAngle, optics, diffuser, driver,"
					+ " dimmType, dimmSubType, IPRating, size, cutout, CRI, warranty,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ "createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, productId);
            stmt.setString(2, productType);
            stmt.setString(3, brand);
            stmt.setString(4, wattage);
            stmt.setString(5, shape);
            stmt.setString(6, fixingType);
            stmt.setString(7, rimType);
            stmt.setString(8, recessedType);
            stmt.setString(9, recessedSubType);
            stmt.setString(10, nature);
            stmt.setString(11, finishType);
            stmt.setString(12, finishColor);
            stmt.setString(13, LEDChipBrand);
            stmt.setString(14, colorTemperature);
            stmt.setString(15, beamAngle);
            stmt.setString(16, optics);
            stmt.setString(17, diffuser);
            stmt.setString(18, driver);
            stmt.setString(19, dimmType);
            stmt.setString(20, dimmSubType);
            stmt.setString(21, IPRating);
            stmt.setString(22, size);
            stmt.setString(23, cutout);
            stmt.setString(24, CRI);
            stmt.setString(25, warranty);
            stmt.setString(26, hsnId);
            stmt.setInt(27, gold);
            stmt.setInt(28, silver);
            stmt.setInt(29, bronze);
            stmt.setString(30, additionalInfo);
            stmt.setString(31, createdBy);
            stmt.setString(32, updatedBy);
            stmt.setTimestamp(33, timestamp);
            stmt.setTimestamp(34, timestamp);
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
    }*/

	/*public boolean new_LedLightsProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_product "
					+ "(rowId, productType, brand, productName,"
					+ " type, watt, shape, color, degree, lamp,"
					+ " cutoutSize, dimensions, driverDetails,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ " createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, productId);
            stmt.setString(2, productType);
            stmt.setString(3, brand);
            stmt.setString(4, productName);
            stmt.setString(5, type);
            stmt.setString(6, watt);
            stmt.setString(7, shape);
            stmt.setString(8, color);
            stmt.setString(9, degree);
            stmt.setString(10, lamp);
            stmt.setString(11, cutoutSize);
            stmt.setString(12, dimensions);
            stmt.setString(13, driverDetails);
            stmt.setString(14, hsnId);
            stmt.setInt(15, gold);
            stmt.setInt(16, silver);
            stmt.setInt(17, bronze);
            stmt.setString(18, additionalInfo);
            stmt.setString(19, createdBy);
            stmt.setString(20, updatedBy);
            stmt.setTimestamp(21, timestamp);
            stmt.setTimestamp(22, timestamp);
             
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

	public boolean new_LedStripsProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "INSERT INTO maroo_data.d_product "
					+ "(rowId, productType, brand, color, series, noOfLed, wattage,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ " createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, productId);
            stmt.setString(2, productType);
            stmt.setString(3, brand);
            stmt.setString(4, color);
            stmt.setString(5, series);
            stmt.setString(6, noOfLed);
            stmt.setString(7, wattage);
            stmt.setString(8, hsnId);
            stmt.setInt(9, gold);
            stmt.setInt(10, silver);
            stmt.setInt(11, bronze);
            stmt.setString(12, additionalInfo);
            stmt.setString(13, createdBy);
            stmt.setString(14, updatedBy);
            stmt.setTimestamp(15, timestamp);
            stmt.setTimestamp(16, timestamp);
             
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

	public boolean new_DriversProduct() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "INSERT INTO maroo_data.d_product "
					+ "(rowId, productType, brand, dimmable,"
					+ " typesOfDimming, volts, wattage, milliAmpere,"
					+ " hsnId, gold, silver, bronze, additionalInfo,"
					+ " createdBy, updatedBy, createdOn, updatedOn ) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, productId);
            stmt.setString(2, productType);
            stmt.setString(3, brand);
            stmt.setString(4, dimmable);
            stmt.setString(5, typeOfDimming);
            stmt.setString(6, volts);
            stmt.setString(7, wattage);
            stmt.setString(8, ma);
            stmt.setString(9, hsnId);
            stmt.setInt(10, gold);
            stmt.setInt(11, silver);
            stmt.setInt(12, bronze);
            stmt.setString(13, additionalInfo);
            stmt.setString(14, createdBy);
            stmt.setString(15, updatedBy);
            stmt.setTimestamp(16, timestamp);
            stmt.setTimestamp(17, timestamp);
             
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
    }*/

	/*public boolean update_SpotLightProduct() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	String sql = "update maroo_data.d_product  set"
					+ " brand = ?, wattage = ?, shape = ?, fixingType = ?, rimType = ?,"
					+ " recessedType = ?, recessedSubType = ?, nature = ?, finishType = ?,"
					+ " finishColor = ?, LEDChipBrand = ?, colorTemperature = ?, beamAngle = ?,"
					+ " optics = ?, diffuser = ?, driver = ?, dimmType = ?, dimmSubType = ?,"
					+ " IPRating = ?, size = ?, cutout = ?, CRI = ?, warranty = ?, "
					+ " hsnId = ?, gold = ?, silver = ?, bronze = ?, additionalInfo = ?,"
					+ " updatedBy = ?, updatedOn = ? where rowId = ?";
        	
			stmt = conn.prepareStatement(sql);

            stmt.setString(1, brand);
            stmt.setString(2, wattage);
            stmt.setString(3, shape);
            stmt.setString(4, fixingType);
            stmt.setString(5, rimType);
            stmt.setString(6, recessedType);
            stmt.setString(7, recessedSubType);
            stmt.setString(8, nature);
            stmt.setString(9, finishType);
            stmt.setString(10, finishColor);
            stmt.setString(11, LEDChipBrand);
            stmt.setString(12, colorTemperature);
            stmt.setString(13, beamAngle);
            stmt.setString(14, optics);
            stmt.setString(15, diffuser);
            stmt.setString(16, driver);
            stmt.setString(17, dimmType);
            stmt.setString(18, dimmSubType);
            stmt.setString(19, IPRating);
            stmt.setString(20, size);
            stmt.setString(21, cutout);
            stmt.setString(22, CRI);
            stmt.setString(23, warranty);
            stmt.setString(24, hsnId);
            stmt.setInt(25, gold);
            stmt.setInt(26, silver);
            stmt.setInt(27, bronze);
            stmt.setString(28, additionalInfo);
            stmt.setString(29, updatedBy);
            stmt.setTimestamp(30, timestamp);
            stmt.setString(31, productId);
            
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
	}*/

	/*public boolean update_LedLightsProduct() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "update maroo_data.d_product  set"
					+ " brand = ?, productName = ?,  type = ?, watt = ?, shape = ?,"
					+ " color = ?, degree = ?, lamp = ?, cutoutSize = ?, dimensions = ?, driverDetails = ?,"
					+ " hsnId = ?, gold = ?, silver = ?, bronze = ?, additionalInfo = ?,"
					+ " updatedBy = ?, updatedOn = ? where rowId = ?";
        	
			stmt = conn.prepareStatement(sql);
			
            stmt.setString(1, brand);
            stmt.setString(2, productName);
            stmt.setString(3, type);
            stmt.setString(4, watt);
            stmt.setString(5, shape);
            stmt.setString(6, color);
            stmt.setString(7, degree);
            stmt.setString(8, lamp);
            stmt.setString(9, cutoutSize);
            stmt.setString(10, dimensions);
            stmt.setString(11, driverDetails);
            stmt.setString(12, hsnId);
            stmt.setInt(13, gold);
            stmt.setInt(14, silver);
            stmt.setInt(15, bronze);
            stmt.setString(16, additionalInfo);
            stmt.setString(17, updatedBy);
            stmt.setTimestamp(18, timestamp);
            stmt.setString(19, productId);
            
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

	public boolean update_LedStripsProduct() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "update maroo_data.d_product  set"
					+ " brand = ?, color = ?, series = ?,  noOfLed = ?, wattage = ?,"
					+ " hsnId = ?, gold = ?, silver = ?, bronze = ?, additionalInfo = ?,"
					+ " updatedBy = ?, updatedOn = ? where rowId = ?";
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, brand);
            stmt.setString(2, color);
            stmt.setString(3, series);
            stmt.setString(4, noOfLed);
            stmt.setString(5, wattage);
            stmt.setString(6, hsnId);
            stmt.setInt(7, gold);
            stmt.setInt(8, silver);
            stmt.setInt(9, bronze);
            stmt.setString(10, additionalInfo);
            stmt.setString(11, updatedBy);
            stmt.setTimestamp(12, timestamp);
            stmt.setString(13, productId);
            
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

	public boolean update_DriversProduct() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "update maroo_data.d_product  set"
					+ " brand = ?, dimmable = ?, typesOfDimming = ?,  volts = ?, wattage = ?, milliAmpere = ?,"
					+ " hsnId = ?, gold = ?, silver = ?, bronze = ?, additionalInfo = ?,"
					+ " updatedBy = ?, updatedOn = ? where rowId = ?";
      
            stmt = conn.prepareStatement(sql);
            
            stmt.setString(1, brand);
            stmt.setString(2, dimmable);
            stmt.setString(3, typeOfDimming);
            stmt.setString(4, volts);
            stmt.setString(5, wattage);
            stmt.setString(6, ma);
            stmt.setString(7, hsnId);
            stmt.setInt(8, gold);
            stmt.setInt(9, silver);
            stmt.setInt(10, bronze);
            stmt.setString(11, additionalInfo);
            stmt.setString(12, updatedBy);
            stmt.setTimestamp(13, timestamp);
            stmt.setString(14, productId);
            
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
	}*/

	public boolean uploadImage() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "update maroo_data.d_product  set"
					+ " imgUploaded = ?, uploadedImgName = ? where rowId = ?";
			stmt = conn.prepareStatement(sql);
			
			stmt.setBoolean(1, imgUpload);
	        stmt.setString(2, uploadedImgName);
	        stmt.setString(3, productId);
	            
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