package com.hotelmanagement.dto;

import java.util.List;

import com.hotelmanagement.entity.Location;

import lombok.Data;

@Data
public class LocationFetchResponse extends CommanApiResponse {
	
    private List<Location> locations;
    
    

}
