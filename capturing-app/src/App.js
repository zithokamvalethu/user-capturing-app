import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Users from "./components/users";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    dob: "",
    grade: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, surname, dob, grade } = formData;
    if (name && surname && dob && grade) {
      setPeople([...people, formData]);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
      <Users people={people} />
    </div>
  );
}

export default App;
