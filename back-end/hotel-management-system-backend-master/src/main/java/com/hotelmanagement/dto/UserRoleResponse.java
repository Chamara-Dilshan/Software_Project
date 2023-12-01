package com.hotelmanagement.dto;

import java.util.List;
import lombok.Data;

@Data
public class UserRoleResponse extends CommanApiResponse {

	private List<String> roles;
	
	private List<String> genders;
	
}
