package com.hotelmanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class HotelReviewDto {

	private String user;
	
	private int star;
	
	private String review;
	
}
