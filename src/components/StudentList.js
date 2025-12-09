import React from "react";

function StudentList({ students, onEdit, onDelete }) {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th width="150">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.course}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(s)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(s.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
