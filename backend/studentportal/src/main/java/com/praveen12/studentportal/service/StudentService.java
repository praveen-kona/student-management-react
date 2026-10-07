package com.praveen12.studentportal.service;

import com.praveen12.studentportal.model.Student;
import java.util.*;

public interface StudentService {
	
	Student  createStudent(Student s);
	
	List<Student> getAllStudents();
	
	Student getStudentById(Integer sid);
	
	Student updateStudentById(Student s,Integer sid);
	
	void deleteStudentById(Integer sid);
	
	Student findByFname(String fname);

}
