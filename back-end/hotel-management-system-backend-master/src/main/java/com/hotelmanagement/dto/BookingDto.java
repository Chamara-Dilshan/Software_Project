package com.hotelmanagement.dto;

import lombok.Data;

@Data
public class BookingDto {
	
	private int id;
	
    private String bookingId;
	
	private int userId;
	
	private String customerName;

	private String checkIn;    
	 
	private String checkOut;   
	
	private String status;
	
	private int hotelId;
	
	private int totalRoom;   
	
	private int totalDay;   

	private String hotelContact;
	
	private String hotelEmail;
	
	private String hotelImage;
	
	private String hotelName;
	
	private String customerContact;
	
	private String totalAmount;
	
}
