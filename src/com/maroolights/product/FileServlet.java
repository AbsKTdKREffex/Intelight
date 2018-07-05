package com.maroolights.product;

import java.io.File;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.file.Files;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class File
 */
@WebServlet("/files/*")
public class FileServlet extends HttpServlet {
	   private String filePath;
	   private static final long serialVersionUID = 1L;

	   public void init( ){
	      // Get the file location where it would be stored.
	      filePath = getServletContext().getInitParameter("file-upload"); 
	   }
	   
	   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
    	
    	 String filename = URLDecoder.decode(request.getPathInfo().substring(1), "UTF-8");
    	  //String filename = URLDecoder.decode("deleteModel.PNG", "UTF-8");
    	        File file = new File(filePath, filename);
    	        response.setHeader("Content-Type", getServletContext().getMimeType(filename));
    	        response.setHeader("Content-Length", String.valueOf(file.length()));
    	        response.setHeader("Content-Disposition", "inline; filename=\"" + file.getName() + "\"");
    	        Files.copy(file.toPath(), response.getOutputStream());
    	
	}

	
}
