package com.hotelmanagement.dto;

import java.util.List;

import com.hotelmanagement.entity.Hotel;

import lombok.Data;

@Data
public class HotelAddResponse extends CommanApiResponse {

	List<Hotel> hotels;
	
}
