import React from 'react'

const Employee = ({id, lastName, firstName, checked, disabled, handleClick, handleChange}) => {
    return (
        <div id={id} className='employeeName'>{lastName} {firstName}
            <input id={id}
                   className='employeeCheck'
                   type='checkbox'
                   disabled={disabled}
                   defaultChecked={checked}
                   onClick={e => handleClick(e, id)}
                   onChange={e => handleChange(e, id)}
            />
        </div>
    )
}

export default Employee