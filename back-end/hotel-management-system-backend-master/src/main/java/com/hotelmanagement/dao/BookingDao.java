package com.hotelmanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotelmanagement.entity.Booking;

@Repository
public interface BookingDao extends JpaRepository<Booking, Integer> {
	
	List<Booking> findByUserId(int userId);
	List<Booking> findByHotelId(int hotelId);
	
}
