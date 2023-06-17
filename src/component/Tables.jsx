import React from "react";

const Tables = ({ users }) => {
  return (
    <div className="container">
      <table className="content">
        <thead>
          <tr>
            <td>Serial No.</td>
            <td>FullName</td>
            <td>Phone Number</td>
            <td>Email Address</td>
            <td>Street</td>
          </tr>
        </thead>
        {users.map((user, index) => (
          <>
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.phone?.slice(0, 12)}</td>
                <td>{user.email}</td>
                <td>{user.address?.street}</td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
};

export default Tables;
