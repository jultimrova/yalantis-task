import React, {useEffect, useState} from 'react'
import './styles/Employees.css'
import EmployeesList from './components/EmployeesList'
import EmployeesBirthday from './components/EmployeesBirthday'
import axios from 'axios'

const App = () => {
    const [employee, setEmployee] = useState([])
    let [selectedEmployees, setSelectedEmployee] = useState([])

    console.log(selectedEmployees)
    const selectEmployee = (e) => {
        employee.map(emp => {
            if (emp.id === e.target.id) {
                const selected = {
                    id: emp.id,
                    firstName: emp.firstName,
                    lastName: emp.lastName,
                    dob: emp.dob
                }
                setSelectedEmployee([...selectedEmployees, selected])
            }
        })
    }

    const sortByLastName = (arr) => {
        arr.sort((a, b) => a.lastName.localeCompare(b.lastName))
    }

    useEffect(() => {
        axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            .then(res => {
                const employeesData = res.data
                const tempEmployees = []

                for (let i = 0; i < employeesData.length; i++) {
                    const options = {day: 'numeric', month: 'long', year: 'numeric'}
                    let employee = {
                        id: employeesData[i].id,
                        firstName: employeesData[i].firstName,
                        lastName: employeesData[i].lastName,
                        dob: new Date(employeesData[i].dob).toLocaleString('en', options)
                    }
                    tempEmployees.push(employee)
                }

                sortByLastName(tempEmployees)
                setEmployee(tempEmployees)
            })
        console.log('render list')
    }, [])

    return <>
        <div className='list'>
            <h2>Employees</h2>
            <EmployeesList employees={employee} selectEmployee={selectEmployee}/>
        </div>
        <div className='birthday'>
            <h2>Employees birthday</h2>
            <EmployeesBirthday selectedEmployees={selectedEmployees}/>
        </div>
    </>
}

export default App;
