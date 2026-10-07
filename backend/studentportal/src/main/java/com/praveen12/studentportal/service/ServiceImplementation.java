package com.praveen12.studentportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.praveen12.studentportal.model.Student;
import com.praveen12.studentportal.repository.StudentRepo;
@Service
public class ServiceImplementation implements StudentService{

	
	@Autowired
	StudentRepo studentRepo;
	@Override
	public Student createStudent(Student s) {
		
		return studentRepo.save(s);
	
	}

	@Override
	public List<Student> getAllStudents() {
		
		return studentRepo.findAll();
	}

	@Override
	public Student getStudentById(Integer sid) {
		
		return studentRepo.findById(sid).orElseThrow();
	}

	@Override
	public Student updateStudentById(Student s,Integer sid) {
		
		Student studentInfoFromDB=getStudentById(sid);
		studentInfoFromDB.setAge(s.getAge());
		studentInfoFromDB.setFname(s.getFname());
		studentInfoFromDB.setLname(s.getLname());
		studentInfoFromDB.setTotal_marks(s.getTotal_marks());
		
		return studentRepo.save(studentInfoFromDB);
	}

	@Override
	public void deleteStudentById(Integer sid) {
		
		studentRepo.deleteById(sid);
	}

	@Override
	public Student findByFname(String fname) {
		return studentRepo.findByFname(fname);
	}

}
