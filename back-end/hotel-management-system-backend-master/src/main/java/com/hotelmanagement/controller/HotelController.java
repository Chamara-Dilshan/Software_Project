package com.hotelmanagement.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagement.dto.CommanApiResponse;
import com.hotelmanagement.dto.HotelAddRequest;
import com.hotelmanagement.dto.HotelAddResponse;
import com.hotelmanagement.dto.HotelResponseDto;
import com.hotelmanagement.entity.Hotel;
import com.hotelmanagement.entity.Location;
import com.hotelmanagement.entity.User;
import com.hotelmanagement.exception.HotelNotFoundException;
import com.hotelmanagement.service.HotelService;
import com.hotelmanagement.service.LocationService;
import com.hotelmanagement.service.UserService;
import com.hotelmanagement.utility.Constants.ResponseCode;
import com.hotelmanagement.utility.StorageService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("api/hotel/")
@CrossOrigin(origins = "http://localhost:3000")
public class HotelController {

	Logger LOG = LoggerFactory.getLogger(HotelController.class);

	@Autowired
	private HotelService hotelService;

	@Autowired
	private LocationService locationService;

	@Autowired
	private StorageService storageService;

	@Autowired
	private UserService userService;

	@PostMapping("add")
	@ApiOperation(value = "Api to add hotel")
	public ResponseEntity<?> register(HotelAddRequest hotelAddRequest) {
		LOG.info("Recieved request for Add Hotel");

		CommanApiResponse response = new CommanApiResponse();

		if (hotelAddRequest == null) {
			throw new HotelNotFoundException();
		}

		if (hotelAddRequest.getLocationId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Hotel Location is not selected");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		if (hotelAddRequest.getUserId() == 0) {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Hotel Admin is not selected");
			return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
		}

		Hotel hotel = HotelAddRequest.toEntity(hotelAddRequest);
		Location location = locationService.getLocationById(hotelAddRequest.getLocationId());
		hotel.setLocation(location);

		String image1 = storageService.store(hotelAddRequest.getImage1());
		String image2 = storageService.store(hotelAddRequest.getImage2());
		String image3 = storageService.store(hotelAddRequest.getImage3());
		hotel.setImage1(image1);
		hotel.setImage2(image2);
		hotel.setImage3(image3);
		Hotel addedHotel = hotelService.addHotel(hotel);

		if (addedHotel != null) {

			User hotelAdmin = userService.getUserById(hotelAddRequest.getUserId());
			hotelAdmin.setHotelId(addedHotel.getId());
			this.userService.updateUser(hotelAdmin);

			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage("Hotel Added Successfully");
			return new ResponseEntity(response, HttpStatus.OK);
		}

		else {
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to add Hotel");
			return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("id")
	@ApiOperation(value = "Api to fetch hotel by using Hotel Id")
	public ResponseEntity<?> fetchHotel(@RequestParam("hotelId") int hotelId) {
		LOG.info("Recieved request for Fetch Hotel using hotel Id");

		HotelResponseDto response = new HotelResponseDto();

		Hotel hotel = hotelService.fetchHotel(hotelId);

		if (hotel == null) {
			throw new HotelNotFoundException();
		}

		try {
			response.setHotel(hotel);
			response.setResponseCode(ResponseCode.SUCCESS.value());
			response.setResponseMessage("Hotel Fetched Successfully");
			return new ResponseEntity(response, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error("Exception Caught");
			response.setResponseCode(ResponseCode.FAILED.value());
			response.setResponseMessage("Failed to Fetch Hotel");
			return new ResponseEntity(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("fetch")
	@ApiOperation(value = "Api to fetch all hotels")
	public ResponseEntity<?> fetchAllHotels() {
		LOG.info("Recieved request for Fetch Hotels");

		HotelAddResponse hotelAddResponse = new HotelAddResponse();

		List<Hotel> hotels = hotelService.fetchAllHotels();
		try {
			hotelAddResponse.setHotels(hotels);
			hotelAddResponse.setResponseCode(ResponseCode.SUCCESS.value());
			hotelAddResponse.setResponseMessage("Hotels Fetched Successfully");
			return new ResponseEntity(hotelAddResponse, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error("Exception Caught");
			hotelAddResponse.setResponseCode(ResponseCode.FAILED.value());
			hotelAddResponse.setResponseMessage("Failed to Fetch Hotels");
			return new ResponseEntity(hotelAddResponse, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("location")
	@ApiOperation(value = "Api to fetch all hotels by using location Id")
	public ResponseEntity<?> getProductsByCategories(@RequestParam("locationId") int locationId) {

		System.out.println("request came for getting all hotels by locations");

		HotelAddResponse hotelAddResponse = new HotelAddResponse();

		List<Hotel> hotels = new ArrayList<Hotel>();

		Location location = locationService.getLocationById(locationId);

		hotels = this.hotelService.fetchHotelsByLocation(location);

		try {
			hotelAddResponse.setHotels(hotels);
			hotelAddResponse.setResponseCode(ResponseCode.SUCCESS.value());
			hotelAddResponse.setResponseMessage("Hotels Fetched Successfully");
			return new ResponseEntity(hotelAddResponse, HttpStatus.OK);

		} catch (Exception e) {
			LOG.error("Exception Caught");
			hotelAddResponse.setResponseCode(ResponseCode.FAILED.value());
			hotelAddResponse.setResponseMessage("Failed to Fetch Hotels");
			return new ResponseEntity(hotelAddResponse, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping(value = "/{hotelImageName}", produces = "image/*")
	@ApiOperation(value = "Api to fetch hotel image by using image name")
	public void fetchProductImage(@PathVariable("hotelImageName") String hotelImageName, HttpServletResponse resp) {
		System.out.println("request came for fetching product pic");
		System.out.println("Loading file: " + hotelImageName);
		Resource resource = storageService.load(hotelImageName);
		if (resource != null) {
			try (InputStream in = resource.getInputStream()) {
				ServletOutputStream out = resp.getOutputStream();
				FileCopyUtils.copy(in, out);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		System.out.println("response sent!");
	}

}
