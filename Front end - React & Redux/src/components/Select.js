import React from 'react'



const Select = ({input, id, name, meta}) => {
    const renderError = () => {
        if(meta.error && meta.touched){
            return <div className="error">{meta.error}</div>
        }
    }
    return ( <div>
                <select {...input} className="form-control" id={id} name={name} >
                    <option value="">-Pick Option-</option>
                    <option value="normal">Normal</option>
                    <option value="important">Important</option>
                    <option value="critical">Critical</option>
                </select>
                {renderError()}
             </div>
            )
}

export default Select