package com.maroolights.data;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class MySqlConnect {

	public static String connector = "com.mysql.jdbc.Driver";
	public static String dataBase = "jdbc:mysql://localhost:3306/";
//	public static String dataBase = "jdbc:mysql://166.62.36.237:3306/";
	public static String dbUser = "root";
	public static String dbPassword = "Aditya@6511";
	
	public static void main(String arg[]) {
		System.out.println("Hi");
		System.out.println(DBConnection());
	}
	
	public static Connection DBConnection() {
		try{
			Class.forName(connector);
			Connection conn = DriverManager.getConnection(dataBase,dbUser,dbPassword);
			return conn;
		}
		catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


public static java.sql.Timestamp convertToTimestamp(String date){
	Timestamp ts = Timestamp.valueOf(date);
    return ts;
}

public static Date convertToSqlDate(String strDate) {
	java.util.Date date;
	Date sqlDate;
	SimpleDateFormat sdf = new SimpleDateFormat("dd MMMM, yyyy");
	try {
		date = sdf.parse(strDate);
		sqlDate = new Date(date.getTime());
	} catch (ParseException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		sqlDate =null;
	}
	return sqlDate;
}
}

