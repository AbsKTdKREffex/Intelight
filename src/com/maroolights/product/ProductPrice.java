package com.maroolights.product;



import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.maroolights.data.MySqlConnect;
 
public class ProductPrice extends Product{
     
    Connection conn = null;
    PreparedStatement stmt = null;
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    
    private String productPriceId;
    private String productId;
    private Integer quantity;
    private Float price;
    private String segment;
    private String category;
    private Timestamp createdOn;
    private Timestamp updatedOn;
    
	public Timestamp getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Timestamp createdOn) {
		this.createdOn = createdOn;
	}
	
	public Timestamp getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Timestamp updatedOn) {
		this.updatedOn = updatedOn;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public String getProductPriceId() {
		return productPriceId;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public String getSegment() {
		return segment;
	}

	public void setSegment(String segment) {
		this.segment = segment;
	}

	public void setProductPriceId(String productPriceId) {
		this.productPriceId = productPriceId;
	}

	public boolean new_Product_Price() {
        boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
        	
        	String sql = "INSERT INTO maroo_data.d_product_price "
					+ "( rowId, productId, quantity, price, segment, category, "
					+ " createdOn, updatedOn) VALUES "
					+ "( ?, ?, ?, ?, ?, ?, ?, ?)";
			
      
            stmt = conn.prepareStatement(sql);
           
            stmt.setString(1, productPriceId);
            stmt.setString(2, productId);
            stmt.setInt(3, quantity);
            stmt.setFloat(4, price);
            stmt.setString(5, segment);
            stmt.setString(6, category);
            stmt.setTimestamp(7, createdOn);
//            stmt.setString(8, createdBy);
            stmt.setTimestamp(8, updatedOn);
//            stmt.setString(10, updatedBy);
             
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
     

	public boolean update_Product_Price() {
		boolean returnVal = false;
        conn = MySqlConnect.DBConnection();
         
        try {
			String sql = "update maroo_data.d_product_price set"
					+ "  productId = ?, quantity = ?, price = ?,"
					+ "  segment = ?, category = ?, updatedOn = ?"
					+ " where rowId = ?";
			stmt = conn.prepareStatement(sql);
				
			stmt.setString(1, productId);
            stmt.setInt(2, quantity);
            stmt.setFloat(3, price);
            stmt.setString(4, segment);
            stmt.setString(5, category);
            stmt.setTimestamp(6, updatedOn);
//            stmt.setString(6, updatedBy);
	        stmt.setString(7, productPriceId);
	            
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