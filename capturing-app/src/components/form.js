import React from "react";

const Form = (props) => {
  const { handleChange, handleSubmit, formData } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={formData.name}
        ></input>

        <input
          placeholder="Surname"
          name="surname"
          type="text"
          value={formData.surname}
          onChange={handleChange}
        ></input>

        <input
          placeholder="yyyy:mm:dd"
          type="date"
          name="dob"
          onChange={handleChange}
        ></input>
        <input
          placeholder="grade"
          type="number"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        ></input>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default Form;
