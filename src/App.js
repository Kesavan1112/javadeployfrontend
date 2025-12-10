import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const API_BASE = "https://javadeploymentsample-4.onrender.com";

  const loadStudents = async () => {
    const res = await axios.get(`${API_BASE}/students`);
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const addStudent = async (student) => {
    await axios.post(`${API_BASE}/students`, student);
    loadStudents();
  };

  const updateStudent = async (student) => {
    await axios.put(`${API_BASE}/students/${student.id}`, student);
    setEditStudent(null);
    loadStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`${API_BASE}/students/${id}`);
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
