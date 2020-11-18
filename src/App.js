import React, {useEffect, useState} from 'react'
import './styles/Employees.css'
import EmployeesList from './components/EmployeesList'
import EmployeesBirthday from './components/EmployeesBirthday'
import axios from 'axios'

const App = () => {
    const [employees, setEmployee] = useState([])
    const [selectedEmployees, setSelectedEmployee] = useState([])

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
                        dob: new Date(employeesData[i].dob).toLocaleString('en', options),
                        birthdayMonth: new Date(employeesData[i].dob).toLocaleString('en', {month: 'long'})
                    }
                    tempEmployees.push(employee)
                }
                sortByLastName(tempEmployees)
                setEmployee(tempEmployees)

                if (localStorage.getItem('employees')) {
                    setEmployee(JSON.parse(localStorage.getItem('employees')))
                }
            })
    }, [])

    useEffect(() => {
        if (localStorage.getItem('selectedEmployees')) {
            setSelectedEmployee(JSON.parse(localStorage.getItem('selectedEmployees')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('selectedEmployees', JSON.stringify(selectedEmployees))
    }, [selectedEmployees])

    useEffect(() => {
        if (localStorage.getItem('employees')) {
            setEmployee(JSON.parse(localStorage.getItem('employees')))
        }
    }, [])

    const handleChange = (e, id) => {
        setEmployee(employees.map(emp => {
            if (emp.id === id) {
                emp.checked = !emp.checked
                emp.disabled = !emp.disabled
            }
            return emp
        }))
        localStorage.setItem('employees', JSON.stringify(employees))
    }

    const handleClick = (e, id) => {
        employees.map(emp => {
            if (emp.id === id) {
                const selected = {
                    id: emp.id,
                    firstName: emp.firstName,
                    lastName: emp.lastName,
                    dob: emp.dob,
                    birthdayMonth: emp.birthdayMonth
                }
                return setSelectedEmployee([...selectedEmployees, selected])
            }
        })
    }

    const sortByLastName = (arr) => {
        arr.sort((a, b) => a.lastName.localeCompare(b.lastName))
    }

    return <>
        <div className='list'>
            <h2>Employees</h2>
            <EmployeesList employees={employees} handleClick={handleClick} handleChange={handleChange}/>
        </div>
        <div className='birthday'>
            <h2>Employees birthday</h2>
            <EmployeesBirthday selectedEmployees={selectedEmployees}/>
        </div>
    </>
}

export default App;
