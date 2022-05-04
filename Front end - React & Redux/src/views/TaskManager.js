import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { isSignedIn } from '../actions'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AddTaskForm from '../components/AddTaskForm'
import TasksList from '../components/TasksList'



const TaskManager = ({user, isSignedIn}) => {

    useEffect( () => {
        const loggedInUser = localStorage.getItem('user')
        if(loggedInUser) {
          isSignedIn(JSON.parse(loggedInUser))
        }
    }, [isSignedIn])


    if(!user.hasAccess)
        return <div>
                  <div className="container p-5">
                      <div>Please sign in or sign up first</div>
                      <Link className="btn btn-success m-2" to="/signIn">Sign In</Link>
                      <Link className="btn btn-success" to="/signUp">Sign Up</Link>
                  </div>
               </div>
    else {  
        return <div>
                    
                    <Navigation/>
                    <div className="container-fluid bg-light">
                        <div className="text-center font-weight-bold text-success py-3">{`Hi ${user.userData.name}, welcome to your task manager`}</div>
                        <div className="row">
                            <div className="col-12 col-sm-6 py-5 px-5 text-center align-self-top">
                                <AddTaskForm/>
                            </div>
                            <div className="col-12 col-sm-6 py-5 text-center">
                                <TasksList/>
                            </div>
                            
                        </div>
                    </div>
                
                    <Footer/>
           </div>
    }

    
}

const mapStateToProps = state => {
    return { user : state.authReduc}
}
 
export default connect(mapStateToProps , {isSignedIn})(TaskManager)