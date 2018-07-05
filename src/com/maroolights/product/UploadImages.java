package com.maroolights.product;



import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 * Servlet implementation class UploadServlet
 */
@WebServlet("/UploadImages")
public class UploadImages extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private boolean isMultipart;
	private String filePath;
	private int maxFileSize = 10000 * 1024;
	private int maxMemSize = 4 * 1024;
	private File file ;

	public void init( ){
		// Get the file location where it would be stored.
		filePath = getServletContext().getInitParameter("file-upload"); 
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// Check that we have a file upload request
	      isMultipart = ServletFileUpload.isMultipartContent(request);
	      response.setContentType("text/html");
	      java.io.PrintWriter out = response.getWriter( );
	      
	      if( !isMultipart ) {
              out.println("<script type=\"text/javascript\">");
              out.println("location='JSP/Inventory/Product/ProductInfo.jsp?for="+request.getParameter("for")+"&val=0';");
              out.println("</script>");
	         return;
	      }
	  
	      DiskFileItemFactory factory = new DiskFileItemFactory();
	   
	      // maximum size that will be stored in memory
	      factory.setSizeThreshold(maxMemSize);
	   
	      // Location to save data that is larger than maxMemSize.
	      factory.setRepository(new File("/opt/ProductImages/"));

	      // Create a new file upload handler
	      ServletFileUpload upload = new ServletFileUpload(factory);
	   
	      // maximum file size to be uploaded.
	      upload.setSizeMax( maxFileSize );

	      try {
	         // Parse the request to get file items.
	         List<FileItem> fileItems = upload.parseRequest(request);
		
	         // Process the uploaded file items
	         Iterator<FileItem> i = fileItems.iterator();
	         String fieldValue = null;

	         while ( i.hasNext () ) {
	            FileItem fi = (FileItem)i.next();
	            if (fi.isFormField()) {
	                 fieldValue = fi.getString();
	            }
	            if ( !fi.isFormField () ) {
	               // Get the uploaded file parameters
	               String fileName = fi.getName();
	               String oldFileExt = fileName.substring(fileName.lastIndexOf("."));
	               // Write the file
	               String fullName = fieldValue + oldFileExt;
	               if( fileName.lastIndexOf("\\") >= 0 ) {
	                  file = new File( filePath + fullName) ;
	               } else {
	                  file = new File( filePath + fullName) ;
	               }
	               //if it is there then delete
	               file.delete();
	               fi.write( file ) ;
	               Product prod = new Product();
	               prod.setProductId(fieldValue);
	               prod.setUploadedImgName(fullName);
	               prod.setImgUpload(true);
	               
	               if(prod.upload_Image())
	               {
	            	   System.out.println(request.getParameter("for"));
		               out.println("<script type=\"text/javascript\">");
		               if(!(request.getParameter("for").equals("null")))
		               {
		            	   System.out.println("In If of uploaded");
			               out.println("location='JSP/Inventory/Product/ProductInfo.jsp?for="+request.getParameter("for")+"&val=1';");   
		               }
		               else
		               {
		            	   System.out.println("In Else of uploaded");
			               out.println("location='JSP/Inventory/Product/ImageUpload.jsp?val=1';");
		               }
		               out.println("</script>");
	               }
	               else
	               {
		               out.println("<script type=\"text/javascript\">");
		               if(!(request.getParameter("for").equals("null")))
		               {
		            	   System.out.println("In If of can't upload");
			               out.println("location='JSP/Inventory/Product/ProductInfo.jsp?for="+request.getParameter("for")+"val=0';");
		               }
		               else
		               {
		            	   System.out.println("In Else of can't upload");
			               out.println("location='JSP/Inventory/Product/ImageUpload.jsp?val=0';");
		               }
		               out.println("</script>");
	               }
	               
	            }
	         }
	         } catch(Exception ex) {
	               out.println("<script type=\"text/javascript\">");
	               if(!(request.getParameter("for").equals("null")))
	               {
	            	   System.out.println("In If of excep");
		               out.println("location='JSP/Inventory/Product/ProductInfo.jsp?for="+request.getParameter("for")+"val=0';");
	               }
	               else
	               {
	            	   System.out.println("In Else of excep");
		               out.println("location='JSP/Inventory/Product/ImageUpload.jsp?val=0';");
	               }
	               out.println("</script>");
	         }
	}

}
