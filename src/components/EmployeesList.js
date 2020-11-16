import React from 'react'
import Employee from './Employee'

const EmployeesList = ({employees, handleChange, selectEmployee}) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    return (
        <div className='container'>
            {alphabet.map((letter, index) => {
                return (
                    <div key={index} className='employeesByAlphabet'>
                        <strong className='letter'>{letter}</strong>
                        {employees.length > 0 ? (
                            employees.map((employee, index) => {
                                const {lastName, firstName, id} = employee
                                if (lastName.charAt(0) === letter) {
                                    return <Employee key={index + 1} id={id} lastName={lastName}
                                                     firstName={firstName} handleChange={handleChange}
                                                     selectEmployee={selectEmployee}/>
                                }
                            })
                        ) : (
                            <p>No data</p>
                        )
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default EmployeesList