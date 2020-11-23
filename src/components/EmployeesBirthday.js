import React from "react";

const EmployeesBirthday = ({ selectedEmployees }) => {
  const groupByMonth = selectedEmployees
    .sort((a, b) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      return months.indexOf(a.birthdayMonth) - months.indexOf(b.birthdayMonth);
    })
    .reduce((r, e) => {
      const key = e.birthdayMonth;
      if (!r[key]) r[key] = [];
      r[key].push(e);
      return r;
    }, {});

  return (
    <div className="container">
      {selectedEmployees.length > 0 ? (
        Object.entries(groupByMonth).map(([key, value], i) => {
          return (
            <ul key={i}>
              {key}
              {selectedEmployees.map(
                ({ lastName, firstName, id, dob, birthdayMonth }, index) => {
                  if (birthdayMonth === key) {
                    return (
                      <li key={index} id={id}>
                        {lastName} {firstName} - {dob} year
                      </li>
                    );
                  }
                }
              )}
            </ul>
          );
        })
      ) : (
        <p>No selected employees</p>
      )}
    </div>
  );
};

export default EmployeesBirthday