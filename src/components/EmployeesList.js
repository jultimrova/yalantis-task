import React from "react";
import Employee from "./Employee";

const EmployeesList = ({ employees, handleClick, handleChange }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="container">
      {alphabet.map((letter, index) => {
        return (
          <div key={index} className="employeesByAlphabet">
            <strong className="letter">{letter}</strong>
            <p id={letter} className="empty">
              ---
            </p>
            {employees.map(
              ({ lastName, firstName, id, checked, disabled }, index) => {
                const empty = document.querySelectorAll(".empty");
                if (lastName.charAt(0) === letter) {
                  empty.forEach((each) => {
                    if (each.id === letter) {
                      each.style.display = "none";
                    }
                  });
                  return (
                    <Employee
                      key={index + 1}
                      id={id}
                      lastName={lastName}
                      firstName={firstName}
                      checked={checked}
                      disabled={disabled}
                      handleClick={handleClick}
                      handleChange={handleChange}
                    />
                  );
                }
              }
            )}
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesList