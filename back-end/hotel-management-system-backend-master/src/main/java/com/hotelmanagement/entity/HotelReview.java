package com.hotelmanagement.entity;

import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name="hotel_review")
public class HotelReview {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private int userId;

	private int hotelId;
	
	private int star;  // out of 5
	
	private String review;
	
}
