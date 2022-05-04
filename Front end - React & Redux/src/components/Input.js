import React from 'react'


const Input = ({input, type, id, placeholder, meta}) => {
   const renderError = () => {
        if(meta.error && meta.touched){
            return <div className="error">{meta.error}</div>
        }
   }


    return ( <div>
                <input {...input} type={type} className="form-control" id={id} placeholder={placeholder} maxLength="40"/>
                {renderError()}
             </div>
            )
}

export default Input