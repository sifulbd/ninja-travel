import React, { useContext, useState, } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import {UserContext} from './../../App';
import { Form, Button } from 'react-bootstrap';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedIn, setLoggedInUser] = useContext(UserContext);    
    const [newUser, setNewUser] = useState(true);
    const [passwordState, setPasswordState] = useState({
        password: '',
        confirmPassword: ''
    })
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    });
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" }};

    const handleGoogleSignin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then( res => {
            const{displayName, email, photoURL} = res.user;
            const signInUser = {
              isSignIn: true,
              name: displayName, 
              email: email,
              photo: photoURL,
            };
            setLoggedInUser(signInUser);
            history.replace(from);  
        })
        .catch(err => console.log(err));
    }
   

    //FB logging
    const handleFBLogIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const{displayName, email} = result.user;
            const fbSingnedInUser = {name: displayName, email}
            setLoggedInUser(fbSingnedInUser);
            history.replace(from);            
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);            
        });
    }
    const handleBlur = (e) => {        
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value) && e.target.value !== ''; 
            if(isFieldValid){
                console.log('it is valid email');
            }
        }
        if(e.target.name === 'password' || e.target.name === 'cPassword'){
            isFieldValid = /d{1}/.test(e.target.value) && e.target.value !== '';
            if(isFieldValid){
                console.log('it is valid password');
            }
        }
        if(isFieldValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                const newUserInfo = {...user};
                newUserInfo.success = true;
                newUserInfo.error = '';
                updateUserName(user.name);
                setLoggedInUser(newUserInfo);
            })
            .catch(error => {
                const newUserInfo = {...user};
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setLoggedInUser(newUserInfo);
            });
        }
        if(!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const{displayName, email} = res.user;
                const customSingnedInUser = {
                    name: displayName, 
                    email
                }
                setLoggedInUser(customSingnedInUser);
                history.replace(from);  
            })
            .catch(error => {
                const newUserInfo = {};
                newUserInfo.error = error.message;
                console.log(error);
                setLoggedInUser(newUserInfo)
            })
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;    
        user.updateProfile({
            displayName: name,
        }).then(function() {
          // Update successful.
        }).catch(function(error) {
          // An error happened.
        });    
    }

    return (
        <div className="nt-home img-bg">
        <div className="ftp-overlay"></div>
        <div className="container">
            <div className="row rw-height mdl section-separator">            
                <div className="col-lg-8">    
                    <p style={{color: 'red'}}>{loggedIn.error}</p>
                    {loggedIn.success && <p style={{color: 'green'}}>User {newUser ? 'created' : 'Login'} successfully</p>}                
                    <Form className="login-booking-form" onSubmit={handleSubmit}>
                        <h3>{!newUser ? 'Login' : 'Create an Account'}</h3>
                        {  newUser &&  <Form.Group>
                                <Form.Control onBlur={handleBlur} name="name" type="text" placeholder="First Name" />
                            </Form.Group>
                        }
                        {  newUser &&  <Form.Group>
                            <Form.Control onBlur={handleBlur} name="lName" type="text" placeholder="Last Name" />
                            </Form.Group>
                        }
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        {  newUser &&  <Form.Group>
                                <Form.Control onBlur={handleBlur} name="cPassword" type="password" placeholder="Confirsm Password" />
                            </Form.Group>
                        }
                        <div className="row">
                            <div className="col-lg-6">
                                <Form.Check type="checkbox" label="Remember Me" />
                            </div>
                            <div className="col-lg-6 text-right">
                                <Link to="/">Forget Password?</Link>                                
                            </div>
                        </div> <br></br>
                        <input className="btn-custom btn btn-warning" type="submit" value={newUser ? "Create an account" : "Login"}/>
                        <br /> <br />
                        <p className="text-center mt-2 mb-0">{newUser ? 'Already have an account?' : "Don't have an account?"} 
                            <span className="text-warning pointer"  onClick={() => setNewUser(!newUser)}>{newUser ? 'Log in' : 'Create an account'}</span>
                        </p>

                    </Form>

                    <br />
                    <br />
                    <span>Or</span>
                    <br />
                    <br />

                    <button onClick={handleGoogleSignin}>Sign in With Google</button>
                    <button onClick={handleFBLogIn}>Sign in With facebook</button>
                </div>                
            </div>
        </div>
    </div>
    );
};

export default Login;