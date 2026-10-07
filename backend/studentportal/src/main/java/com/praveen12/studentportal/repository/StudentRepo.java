package com.praveen12.studentportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.praveen12.studentportal.model.Student;
@Repository
public interface StudentRepo extends JpaRepository<Student,Integer> {
	
	Student findByFname(String fname);

}
