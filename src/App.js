import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import fire from "./firebase/config.js";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
        }
      })
  }

  const handleSignup = () => {
    clearErrors();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
        }
      })
  }

  const handleLogout = () => {
    fire
      .auth()
      .signOut();
  }

  const authListener = () => {
    fire
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          clearInput();
          setUser(user);
        } else {
          setUser('');
        }
      })
  };

  useEffect(() => {
    authListener();
  }, [])

  return (
    <Router>
      <Container className="vh-100">
        <Switch>
          <Route exact path="/login">
            <Login
              eamil={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
