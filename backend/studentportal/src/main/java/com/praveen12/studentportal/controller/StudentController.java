package com.praveen12.studentportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.praveen12.studentportal.model.Student;
import com.praveen12.studentportal.service.StudentService;
@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	
	@PostMapping("/saveStudent")
	Student createStudent(@RequestBody Student s)
	{
		return studentService.createStudent(s);
	}
	
	@GetMapping("/welcome")
	String hello()
	{
		return "hello guru";
	}
	
	@GetMapping("getAllStudents")
	List<Student> getAllStudents()
	{
		return studentService.getAllStudents();
		
	}
	
	@GetMapping("/getStudent/{sid}")
	Student getStudent(@PathVariable Integer sid)
	{
		return studentService.getStudentById(sid);
	}
	
	@GetMapping("/getStudent/fname/{fname}")
	Student getStudentByName(@PathVariable String fname)
	{
		return studentService.findByFname(fname);
		
	}
	
	@PutMapping("/update/{sid}")
	Student updateStudent(@RequestBody Student s,@PathVariable Integer sid)
	{
		
		return studentService.updateStudentById(s,sid);
		
	}
	
	@DeleteMapping("/delete/{sid}")
	String deleteStudent(@PathVariable Integer sid)
	{
		studentService.deleteStudentById(sid);
		return "Deleted "+ sid +" Successfully";
		
	}

}
