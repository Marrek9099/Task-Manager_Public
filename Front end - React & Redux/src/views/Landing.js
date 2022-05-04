import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { isSignedIn } from '../actions'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'


const Landing = ({isSignedIn}) => {
    useEffect( () => {
        const loggedInUser = localStorage.getItem('user')
        if(loggedInUser) {
          isSignedIn(JSON.parse(loggedInUser))
        }
    }, [isSignedIn])

    return (
        <div>
            <Navigation/>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-12 col-sm-6 py-5 px-5 text-center align-self-center">
                        “A good plan today is better than a perfect plan tomorrow.” – Proverb
                    </div>
                    <div className="col-12 col-sm-6 py-5 text-center">
                        <i className="fas fa-clipboard-list"></i>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )


}


export default connect(undefined, {isSignedIn})(Landing)