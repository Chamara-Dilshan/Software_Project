package com.hotelmanagement.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="booking")
public class Booking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String bookingId;
	
	private int userId;

	private String checkIn;   // check in date 
	 
	private String checkOut;   // check out date
	
	private String status;
	
	private int hotelId;
	
	private int totalRoom;   // total room booked
	
	private int totalDay;   
		
}
