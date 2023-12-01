package com.hotelmanagement.entity;

import java.util.Set;

import javax.persistence.*;

import org.springframework.beans.BeanUtils;

import com.hotelmanagement.dto.HotelDto;

import lombok.Data;

@Entity
@Data
@Table(name="hotel")
public class Hotel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private String description;
	
	@ManyToOne
	@JoinColumn(name = "location_id")
	private Location location;
	private String street;

	private String pincode;

	private String emailId;

	private double pricePerDay; // price per day per room

	private int totalRoom;
	
	private String image1;
	
	private String image2;
	
	private String image3;
	
	private int userId;    // user Id whose role is Hotel

	public static HotelDto toHotelAddResponse(Hotel hotel) {
		HotelDto hotelDto = new HotelDto();
		BeanUtils.copyProperties(hotel, hotelDto, "location");
		return hotelDto;
	}

}
