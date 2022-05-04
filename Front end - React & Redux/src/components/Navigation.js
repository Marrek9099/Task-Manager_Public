import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../components/history'
import { signOut} from '../actions'

const Navigation = ({signOut, user}) => {


    const renderLi = () => {
        
        if(history.location.pathname === '/') {
            return  <React.Fragment>
                    <div className={`px-3`} >Task Manager</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className="nav-item px-3">
                                <Link to='/signIn' className="nav-link text-black">Sign In</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link to='/SignUp' className="nav-link text-black">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                       
                    </React.Fragment>
        }
        else {
            if(user.hasAccess) {
                return  <React.Fragment>
                            <div className={`px-3 ml-auto`} >Task Manager</div>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <span onClick={() => signOut()}className="signOut nav-link text-black">Sign Out</span>
                                </li>
                            </ul>
                        </React.Fragment>
            }
        }
    }
  
    return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light py-3 font-weight-bold">
                    <Link to="/" className="navbar-brand px-3"><i className="fas fa-clipboard-list"></i></Link>
                    {renderLi()}
                </nav>
            </div>
        
    )
}

const mapStateToProps = state => {
    return { user : state.authReduc}
}

export default connect(mapStateToProps, {signOut})(Navigation)