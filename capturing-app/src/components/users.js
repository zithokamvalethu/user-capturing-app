import React from "react";

const Users = (props) => {
  const { people } = props;

  return (
    <div>
      <table className="table" id="users-list">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>DATE OF BIRTH</th>
            <th>GRADE</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person, id) => (
            <tr key={id}>
              <td>{person.name}</td>
              <td>{person.dob}</td>
              <td>{person.surname}</td>
              <td>{person.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
