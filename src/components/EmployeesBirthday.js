import React from 'react'

const EmployeesBirthday = ({selectedEmployees}) => {
    return <div className="container">
        <ul>Month
            {selectedEmployees.length > 0 ? (
                selectedEmployees.map((employee, index) => {
                    const {lastName, firstName, id, dob} = employee
                    return <li key={index} id={id}>{lastName} {firstName} {dob} </li>
                })
            ) : (
                <p>No selected employees</p>
            )
            }
        </ul>
    </div>
}

export default EmployeesBirthday