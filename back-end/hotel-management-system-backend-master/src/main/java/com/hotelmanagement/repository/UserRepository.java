package com.hotelmanagement.repository;

import com.hotelmanagement.entity.Employee;
import com.hotelmanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
