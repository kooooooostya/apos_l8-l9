import React from 'react';
import firebaseApp from "../utils/config/firebase-config";
import firebase from "firebase/compat";

class LoginComponent extends React.Component {

  handleFacebook(e) {
    e.preventDefault();
      const provider = new firebase.auth.FacebookAuthProvider();
      firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      console.log('Facebook login success')
    }).catch(function(error) {
          const errorMessage = error.message;
          alert("Facebook sign in error: "+ errorMessage);
    });
  }
   handleGoogle(e) {
    e.preventDefault();
       const provider = new firebase.auth.GoogleAuthProvider();
       firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      console.log('Google login success')
    }).catch(function(error) {
           const errorMessage = error.message;
           alert("Google sign in error: "+ errorMessage);
    });
  }

    handleLogout(e) {
        e.preventDefault();

        firebaseApp.auth().signOut().then(r =>
            console.log("sign out succesful")
        )
        // firebaseApp.auth().signOut().then(function() {
        //     console.log("sign out succesful");
        //     hashHistory.push('/login');
        // }, function(error) {
        //     console.log("an error happened");
        // });
    }
  render() {
    return (
      <div className="Login">
        <h1>Login/Logout</h1>
           <div className="form-group col-md-4">
            <button className="btn btn-block btn-social btn-facebook" onClick={this.handleFacebook}>
              <span className="fa fa-facebook"></span>
              Sign in with Facebook
            </button>
            <button className="btn btn-block btn-social btn-google" onClick={this.handleGoogle}>
              <span className="fa fa-google"></span>
              Sign in with Google
            </button>
               <button className="btn btn-block btn-social btn-google" onClick={this.handleLogout}>
                   <span className="fa fa-google"></span>
                   Logout
               </button>
          <br/>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
