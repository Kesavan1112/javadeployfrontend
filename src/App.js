import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const loadStudents = async () => {
    const res = await axios.get("http://localhost:8080/students");
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const addStudent = async (student) => {
    await axios.post("http://localhost:8080/students", student);
    loadStudents();
  };

  const updateStudent = async (student) => {
    await axios.put(`http://localhost:8080/students/${student.id}`, student);
    setEditStudent(null);
    loadStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    loadStudents();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student Management</h2>
      <StudentForm
        onAdd={addStudent}
        onUpdate={updateStudent}
        editStudent={editStudent}
      />
      <StudentList
        students={students}
        onEdit={setEditStudent}
        onDelete={deleteStudent}
      />
    </div>
  );
}

export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/