import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    // ==============================
    // 1. All Students
    // ==============================
    const [students, setStudents] = useState([]);

    // ==============================
    // 2. Add Student
    // ==============================
    const [student, setStudent] = useState({
        fname: "",
        lname: "",
        age: "",
        total_marks: ""
    });

    // ==============================
    // 3. Find Student By ID
    // ==============================
    const [searchId, setSearchId] = useState("");
    const [searchedStudent, setSearchedStudent] = useState(null);

    // ==============================
    // 4. Find Student By Name
    // ==============================
    const [searchName, setSearchName] = useState("");
    const [searchedStudentByName, setSearchedStudentByName] = useState(null);

    // ==============================
    // 5. Update Student
    // ==============================
    const [updateId, setUpdateId] = useState("");

    const [updateStudent, setUpdateStudent] = useState({
        fname: "",
        lname: "",
        age: "",
        total_marks: ""
    });

    // ==============================
    // 6. Delete Student
    // ==============================
    const [deleteId, setDeleteId] = useState("");


    // ==========================================
    // GET ALL STUDENTS
    // ==========================================
    const getStudents = () => {

        axios.get("http://localhost:9090/student/getAllStudents")

            .then(response => {

                setStudents(response.data);

            })

            .catch(error => {

                console.log(error);

            });
    };


    // Load students when page opens
    useEffect(() => {

        getStudents();

    }, []);


    // ==========================================
    // ADD STUDENT
    // ==========================================
    const addStudent = () => {

        axios.post(
            "http://localhost:9090/student/saveStudent",
            student
        )

        .then(response => {

            console.log("Student added:", response.data);

            // Refresh student list
            getStudents();

            // Clear input boxes
            setStudent({
                fname: "",
                lname: "",
                age: "",
                total_marks: ""
            });

        })

        .catch(error => {

            console.log("Error:", error);

        });
    };


    // ==========================================
    // GET STUDENT BY ID
    // ==========================================
    const getStudentById = () => {

        axios.get(
            `http://localhost:9090/student/getStudent/${searchId}`
        )

        .then(response => {

            console.log("Student found:", response.data);

            setSearchedStudent(response.data);

        })

        .catch(error => {

            console.log("Error:", error);

            setSearchedStudent(null);

        });
    };


    // ==========================================
    // GET STUDENT BY FIRST NAME
    // ==========================================
    const getStudentByName = () => {

        axios.get(
            `http://localhost:9090/student/getStudent/fname/${searchName}`
        )

        .then(response => {

            console.log("Student found:", response.data);

            setSearchedStudentByName(response.data);

        })

        .catch(error => {

            console.log("Error:", error);

            setSearchedStudentByName(null);

        });
    };


    // ==========================================
    // UPDATE STUDENT
    // ==========================================
    const updateStudentById = () => {

        axios.put(
            `http://localhost:9090/student/update/${updateId}`,
            updateStudent
        )

        .then(response => {

            console.log("Student updated:", response.data);

            // Refresh students
            getStudents();

            // Clear update form
            setUpdateId("");

            setUpdateStudent({
                fname: "",
                lname: "",
                age: "",
                total_marks: ""
            });

        })

        .catch(error => {

            console.log("Update error:", error);

        });
    };


    // ==========================================
    // DELETE STUDENT
    // ==========================================
    const deleteStudent = () => {

        axios.delete(
            `http://localhost:9090/student/delete/${deleteId}`
        )

        .then(response => {

            console.log("Student deleted:", response.data);

            // Refresh student list
            getStudents();

            // Clear ID box
            setDeleteId("");

        })

        .catch(error => {

            console.log("Delete error:", error);

        });
    };


    // ==========================================
    // HTML / REACT UI
    // ==========================================
    return (

        <div>

            <h1>Student Management System</h1>


            {/* ==================================
                REFRESH STUDENTS
            ================================== */}

            <button onClick={getStudents}>
                Refresh Students
            </button>


            {/* ==================================
                ADD STUDENT
            ================================== */}

            <h2>Add Student</h2>

            <input
                type="text"
                placeholder="First Name"
                value={student.fname}
                onChange={(e) => setStudent({
                    ...student,
                    fname: e.target.value
                })}
            />

            <input
                type="text"
                placeholder="Last Name"
                value={student.lname}
                onChange={(e) => setStudent({
                    ...student,
                    lname: e.target.value
                })}
            />

            <input
                type="number"
                placeholder="Age"
                value={student.age}
                onChange={(e) => setStudent({
                    ...student,
                    age: e.target.value
                })}
            />

            <input
                type="number"
                placeholder="Total Marks"
                value={student.total_marks}
                onChange={(e) => setStudent({
                    ...student,
                    total_marks: e.target.value
                })}
            />

            <button onClick={addStudent}>
                Add Student
            </button>


            {/* ==================================
                FIND STUDENT BY ID
            ================================== */}

            <h2>Find Student By ID</h2>

            <input
                type="number"
                placeholder="Enter Student ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
            />

            <button onClick={getStudentById}>
                Find Student
            </button>


            {/* Display student found by ID */}

            {
                searchedStudent && (

                    <div>

                        <h3>Student Found</h3>

                        <p>ID: {searchedStudent.sid}</p>

                        <p>
                            Name: {searchedStudent.fname}{" "}
                            {searchedStudent.lname}
                        </p>

                        <p>
                            Age: {searchedStudent.age}
                        </p>

                        <p>
                            Marks: {searchedStudent.total_marks}
                        </p>

                    </div>

                )
            }


            {/* ==================================
                FIND STUDENT BY NAME
            ================================== */}

            <h2>Find Student By Name</h2>

            <input
                type="text"
                placeholder="Enter First Name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
            />

            <button onClick={getStudentByName}>
                Find By Name
            </button>


            {/* Display student found by name */}

            {
                searchedStudentByName && (

                    <div>

                        <h3>Student Found</h3>

                        <p>
                            ID: {searchedStudentByName.sid}
                        </p>

                        <p>
                            Name: {searchedStudentByName.fname}{" "}
                            {searchedStudentByName.lname}
                        </p>

                        <p>
                            Age: {searchedStudentByName.age}
                        </p>

                        <p>
                            Marks: {searchedStudentByName.total_marks}
                        </p>

                    </div>

                )
            }


            {/* ==================================
                UPDATE STUDENT
            ================================== */}

            <h2>Update Student</h2>

            <input
                type="number"
                placeholder="Student ID"
                value={updateId}
                onChange={(e) => setUpdateId(e.target.value)}
            />

            <input
                type="text"
                placeholder="First Name"
                value={updateStudent.fname}
                onChange={(e) => setUpdateStudent({
                    ...updateStudent,
                    fname: e.target.value
                })}
            />

            <input
                type="text"
                placeholder="Last Name"
                value={updateStudent.lname}
                onChange={(e) => setUpdateStudent({
                    ...updateStudent,
                    lname: e.target.value
                })}
            />

            <input
                type="number"
                placeholder="Age"
                value={updateStudent.age}
                onChange={(e) => setUpdateStudent({
                    ...updateStudent,
                    age: e.target.value
                })}
            />

            <input
                type="number"
                placeholder="Total Marks"
                value={updateStudent.total_marks}
                onChange={(e) => setUpdateStudent({
                    ...updateStudent,
                    total_marks: e.target.value
                })}
            />

            <button onClick={updateStudentById}>
                Update Student
            </button>


            {/* ==================================
                DELETE STUDENT
            ================================== */}

            <h2>Delete Student</h2>

            <input
                type="number"
                placeholder="Enter Student ID"
                value={deleteId}
                onChange={(e) => setDeleteId(e.target.value)}
            />

            <button onClick={deleteStudent}>
                Delete Student
            </button>


            {/* ==================================
                ALL STUDENTS
            ================================== */}

            <h2>Students</h2>

            {
                students.map(student => (

                    <div key={student.sid}>

                        <p>
                            ID: {student.sid}
                        </p>

                        <p>
                            Name: {student.fname} {student.lname}
                        </p>

                        <p>
                            Age: {student.age}
                        </p>

                        <p>
                            Marks: {student.total_marks}
                        </p>

                        <hr />

                    </div>

                ))
            }

        </div>
    );
}

export default App;