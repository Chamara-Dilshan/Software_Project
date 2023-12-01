package com.hotelmanagement.dto;

import java.util.List;

import com.hotelmanagement.entity.Facility;
import com.hotelmanagement.entity.Location;

import lombok.Data;

@Data
public class HotelDto {

	private int id;
	
	private String name;
	
	private String description;
	
	private String location;   // city from Location Class  
	
	private String street;
	
	private String pincode;
	
	private String emailId;    
	
	private double pricePerDay;   // price per day per room
	
	private int totalRoom; 
	
	private List<Facility> facility;
	
	private String image1;
	
	private String image2;
	
	private String image3;
	
	private int userId;
	
}
