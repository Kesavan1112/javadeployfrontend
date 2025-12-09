import React, { useState, useEffect } from "react";

function StudentForm({ onAdd, onUpdate, editStudent }) {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });

  useEffect(() => {
    if (editStudent) setStudent(editStudent);
  }, [editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editStudent) onUpdate(student);
    else onAdd(student);
    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Name"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            required
          />
        </div>

        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Email"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            required
          />
        </div>

        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Course"
            value={student.course}
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
            required
          />
        </div>

        <div className="col-md-3">
          <button className="btn btn-primary w-100">
            {editStudent ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default StudentForm;
