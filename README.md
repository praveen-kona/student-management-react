# Student Management System - React

A simple **Student Management System** frontend application built using **React, Vite, and Axios**.

This project connects a React frontend with a Spring Boot REST API to perform CRUD operations on student data.

---

## 🚀 Technologies Used

### Frontend
- React
- Vite
- JavaScript
- Axios
- HTML
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST API

### Database
- MySQL

---

## 📌 Features

- View all students
- Add a new student
- Find student by ID
- Find student by first name
- Update student details
- Delete student by ID
- Refresh student list
- React form handling
- Axios API integration
- CORS configuration

---

## 🏗️ Project Architecture

```text
React Frontend
      |
      | Axios
      ↓
Spring Boot REST API
      |
      ↓
Service Layer
      |
      ↓
Repository Layer
      |
      ↓
MySQL Database
```
🔗 REST APIs
1. Get All Students
GET /student/getAllStudents

Full URL:

http://localhost:9090/student/getAllStudents
2. Add Student
POST /student/saveStudent

Full URL:

http://localhost:9090/student/saveStudent

Example request body:

{
    "fname": "Praveen",
    "lname": "Kona",
    "age": 22,
    "total_marks": 86.5
}
3. Get Student By ID
GET /student/getStudent/{sid}

Example:

http://localhost:9090/student/getStudent/1
4. Get Student By First Name
GET /student/getStudent/fname/{fname}

Example:

http://localhost:9090/student/getStudent/fname/Praveen
5. Update Student
PUT /student/update/{sid}

Example:

http://localhost:9090/student/update/1

Example request body:

{
    "fname": "Praveen",
    "lname": "Kumar",
    "age": 23,
    "total_marks": 90.5
}
6. Delete Student
DELETE /student/delete/{sid}

Example:

http://localhost:9090/student/delete/1
🔄 CRUD Operations
Operation	HTTP Method	Endpoint
Create Student	POST	/student/saveStudent
Read All Students	GET	/student/getAllStudents
Read Student By ID	GET	/student/getStudent/{sid}
Read Student By Name	GET	/student/getStudent/fname/{fname}
Update Student	PUT	/student/update/{sid}
Delete Student	DELETE	/student/delete/{sid}
📂 Frontend Project Structure
student-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── index.html
⚙️ Backend Configuration

The Spring Boot backend runs on:

http://localhost:9090

The React frontend runs on:

http://localhost:5173

The backend uses MySQL database:

Database: praveen
🌐 CORS Configuration

The Spring Boot backend allows requests from the React frontend:

http://localhost:5173

Example:

@CrossOrigin(origins = "http://localhost:5173")

This allows the React frontend to communicate with the Spring Boot backend.

💻 How to Run the Project
Step 1: Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL
Step 2: Open the Project
cd student-management-react
Step 3: Install Dependencies
npm install
Step 4: Start the React Application
npm run dev

The frontend will normally run at:

http://localhost:5173
🔧 Backend Requirement

This React application requires the Spring Boot Student Management REST API to be running.

The backend should be available at:

http://localhost:9090

The backend also requires a running MySQL database.

🔌 Frontend-Backend Communication

The React application uses Axios to communicate with the Spring Boot REST APIs.

Example:

axios.get("http://localhost:9090/student/getAllStudents")

The communication flow is:

User
 ↓
React UI
 ↓
Axios
 ↓
Spring Boot REST API
 ↓
Service
 ↓
Repository
 ↓
MySQL
📝 Student Data

Each student contains the following fields:

sid
fname
lname
age
total_marks

Example:

{
    "sid": 1,
    "fname": "Praveen",
    "lname": "Kona",
    "age": 22,
    "total_marks": 86.5
}
🎯 Project Purpose

The main purpose of this project is to understand how a React frontend communicates with a Spring Boot backend using REST APIs and Axios.

The project demonstrates basic full-stack CRUD operations:

Create
Read
Update
Delete
📚 Concepts Learned
React
Components
JSX
useState
useEffect
Event handling
Forms
State management
Rendering lists
Conditional rendering
Axios API calls
Spring Boot
REST Controllers
REST API endpoints
@GetMapping
@PostMapping
@PutMapping
@DeleteMapping
@RequestBody
@PathVariable
Service layer
Repository layer
JPA/Hibernate
CORS
Database
MySQL
CRUD operations
JPA/Hibernate database communication
🔐 API Mapping
POST    → Create Student
GET     → Read Student
PUT     → Update Student
DELETE  → Delete Student
📸 Application

The application provides sections for:

Student Management System

├── Refresh Students
├── Add Student
├── Find Student By ID
├── Find Student By Name
├── Update Student
├── Delete Student
└── Students List
🚀 Future Improvements

Possible future improvements include:

Better UI design
Form validation
Loading indicators
Better error messages
Delete confirmation
Search and filtering
Pagination
React Router
Authentication
Responsive design
👨‍💻 Author

Praveen Kona

⭐ Project Status
Basic Full-Stack CRUD Project - Completed

The React frontend is integrated with the Spring Boot REST API and supports the main student CRUD operations.


**This is the single complete README** for your current React project. You can copy the whole block into `README.md` and push it to GitHub.
