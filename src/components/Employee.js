import React from 'react'

const Employee = ({id, lastName, firstName, selectEmployee}) => {
    return (
        <div id={id} className='employeeName'>{lastName} {firstName}
            <input id={id}
                   className='employeeCheck'
                   type="checkbox"
                   defaultChecked={false}
                   onClick={selectEmployee}
            />
        </div>
    )
}

export default Employee