package com.hotelmanagement.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.hotelmanagement.entity.Hotel;
import lombok.Data;

@Data
public class HotelAddRequest {

	private int id;

	private String name;

	private String description;
	
	private int locationId;

	private String street;

	private String pincode;

	private String emailId;

	private double pricePerDay; // price per day per room

	private int totalRoom;
	
	private int userId;
	
	private MultipartFile image1;	
	
	private MultipartFile image2;
	
	private MultipartFile image3;	
	
	public static Hotel toEntity(HotelAddRequest hotelAddRequest) {
		Hotel hotel = new Hotel();
		BeanUtils.copyProperties(hotelAddRequest, hotel, "locationId","image1","image2","image3");
		return hotel;
	}

}
