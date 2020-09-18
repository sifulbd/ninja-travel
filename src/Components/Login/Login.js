import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';



const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    return (
        <div className="nt-home img-bg">
        <div className="ftp-overlay"></div>
        <div className="container">
            <div className="row rw-height mdl section-separator">            
                <div className="col-lg-6">
                    <h2>Contact</h2>

                </div>
                <div className="col-lg-6">
                    <div className="row">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;