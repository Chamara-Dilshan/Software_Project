package com.hotelmanagement.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="hotel_facility")
public class HotelFacility {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int hotelId;
	
	private int facilityId;
	
}
