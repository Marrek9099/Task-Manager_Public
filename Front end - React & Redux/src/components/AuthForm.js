import React, {useRef} from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signUp, signIn } from '../actions'
import Input from './Input'
import history from './history'



const AuthForm = props => {
    const submissionError = useRef(null)
    const formPath = history.location.pathname === '/SignUp' ? 'Sign Up' : 'Sign In'

    const submitError = () => {
        submissionError.current.classList.add('visible')
    }
    
    const onSubmit = formValues =>{
        if(formPath === 'Sign Up'){
            props.signUp(formValues, submitError)    
        }
        else {
            props.signIn(formValues, submitError)
        }
        
    }
    const renderPasswConf = () => {
        if(history.location.pathname === '/SignUp') {
            return <React.Fragment>
                     <div className="form-group">
                        <label htmlFor="password2">Confirm password</label>
                        <Field name="password2" component={Input} type='password' id='password2' placeholder="Enter password again"/>
                     </div>
                     <ul className="passwordRules">
                        <li>Password must be at least 8 characters long</li>
                        <li>Password must contain at least 1 capital letter</li>
                        <li>Passowrd must contain at least 1 lower case letter</li>
                        <li>Password must contain at least 1 number</li>
                        <li>Password must contain at least 1 special character e.g. #!%</li>
                     </ul>

                   </React.Fragment>
        }
    }
    const renderNameField = () => {
        if(history.location.pathname === '/SignUp') {
            return <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field name="name" component={Input} type='text' id='name' placeholder="Enter your name"/>
                   </div>

        }
    }

    
    return <div>
                <div className="text-center my-3"><i className="fas fa-clipboard-list p-2 display-4"></i>{formPath}</div>
                
                <form onSubmit={props.handleSubmit(onSubmit)} className="auth p-5 my-2">
                    {renderNameField()}     
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <Field name="email" component={Input} type='email' id='inputEmail' placeholder="Enter email"/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field name="password" component={Input} type='password' id='password' placeholder="Password"/>
                    </div>
                    {renderPasswConf()}
                    <div ref={submissionError} className="submissionError">{formPath === 'Sign Up'? "Email already in use" : "Incorrect login details"}</div>
                    <button type="submit" className="btn btn-success">{formPath}</button>
                    
                </form>
            </div>
}



const validate = (formValues) => {
    const isSingUpPage = history.location.pathname === '/SignUp' ? true : false
    const errors = {}
    
    if (!formValues.email) {
        errors.email = 'Please enter your email'
    }

    if(!formValues.password){
        errors.password = 'Please enter a password'
    }

    
    
    if(isSingUpPage) {
        if (!formValues.name) {
            errors.name = 'Please enter your name'
        }
        if(formValues.password) {
            if (!formValues.password.match(/[a-z]/g)) {
                    errors.password = 'Password must include at least 1 lowercase character'
                }
            if (!formValues.password.match(
                /[A-Z]/g)){
                    errors.password = 'Password must include at least 1 uppercase character'
                }
            if (!formValues.password.match(
                /[0-9]/g)){
                    errors.password = 'Password must include at least 1 number'
                }
    
            if (!formValues.password.match(
                    /[!@#$%^&*(),.?":{}|<>]/g)){
                        errors.password = 'Password must include at least 1 special character'
                }   
            
            if (formValues.password.length < 8){
                errors.password = 'Password must be at least 8 charactesrs long'
            }

            if(formValues.password.includes(' ')){
                errors.password = 'Password contains empty spaces'
            }

        }

        if(formValues.password && formValues.password2){
            if(formValues.password !== formValues.password2){
                errors.password2 = 'Passwords do not match'
            }    
        }
            
    }
   

    return errors;
}

export default connect(null, {signUp, signIn})(reduxForm({
    form: `Credentials form`,
    validate})
(AuthForm))