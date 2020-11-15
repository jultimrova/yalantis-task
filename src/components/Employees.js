import React from 'react'
import axios from 'axios'
import '../styles/Employees.css'

class Employees extends React.Component {
    state = {
        employees: []
    }

    componentDidMount() {
        axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            .then(res => {
                const employeesData = res.data
                const tempEmployees = []

                for (let i = 0; i < employeesData.length; i++) {
                    let employee = {
                        id: employeesData[i].id,
                        firstName: employeesData[i].firstName,
                        lastName: employeesData[i].lastName,
                        dob: employeesData[i].dob
                    }
                    tempEmployees.push(employee)
                }
                this.setState({employees: tempEmployees})
            })
    }

    render() {
        const group = this.state.employees
            .sort((a, b) => a.lastName.localeCompare(b.lastName))
            .reduce((r, e) => {
                const key = e.lastName[0]
                if (!r[key]) {
                    r[key] = []
                }
                r[key].push(e)
                return r
            }, {})

        return <div>
            <h1>List of employees</h1>
            <div className='container'>
                {Object.entries(group)
                    .map(([key, value], i) => {
                        return (
                            <div className='employeesByAlphabet' key={i}>
                                <strong>{key}</strong>
                                {value.map((item, j) =>
                                    <div className='employee__name' key={j}>{item.lastName} {item.firstName}
                                        <input className='employee__check' type="checkbox" defaultChecked={false}/>
                                    </div>
                                )}
                            </div>)
                    })
                }
            </div>
        </div>

    }
}

export default Employees