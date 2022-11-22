import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import './App.css';

function App() {
  const [ profile, setProfile ] = useState([]);
  const clientId = '862987207402-6cpa0kbkkglpu55tgfkfn5b1lahvhb2q.apps.googleusercontent.com';
  const [fbUser, setFbUser] = useState();

  const responseFacebook = (response) => {
    setFbUser(response);
  }

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };
  const logOut = () => {
    setProfile(null);
  };  



  return (
    <div>
      {fbUser ?
        <div><h2>{fbUser.name}</h2><h3>{fbUser.email}</h3></div>
       :
        <FacebookLogin
        appId="540373324605232"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} /> 
      }

      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
          <div>
              <img src={profile.imageUrl} alt="user_image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
          </div>
      ) : (
          <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
          />
      )}
</div>
);
}

export default App;
