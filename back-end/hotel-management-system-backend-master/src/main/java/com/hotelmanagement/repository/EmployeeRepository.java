package com.hotelmanagement.repository;

import com.hotelmanagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
