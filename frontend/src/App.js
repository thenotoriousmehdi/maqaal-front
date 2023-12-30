// create a folder with a backend forlder 
// npx create-react-app frontend 
// npm install -D tailwindcss
// npx tailwindcss init


// content: [
// "./src/**/*.{js,jsx,ts,tsx}",
// ],

/* @tailwind base;
@tailwind components;
@tailwind utilities; */

import Navbar from './Navbar';
import Main from './Main';
import Articles  from './Articles';
import LoginForm from './loginForm';
import Register from './Register';
 
import { BrowserRouter as Router ,Route ,Switch,Redirect  } from  'react-router-dom';
import { useState,useEffect } from 'react';

function App() {

  const [canPass,SetcanPass] = useState(false);
  const verifiesToken=()=>{
  
    const hasToken = !!localStorage.getItem('accessToken');
    const currentToken = localStorage.getItem('accessToken');
 
  
    if(hasToken){
        // there is a token but is it valid
        fetch("http://localhost:8000/validateToken", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${currentToken}`,
          },
        })
          .then((response) => {   
            console.log("fetch code to validate token got executed");
            console.log("Status Code:", response.status);
            return response.json(); // Log the raw response text
          })
          .then((data) => {
            SetcanPass(true)
            console.log(data);
          })
          .catch((error) => {
            console.log("Error verifying token:", error);
          });
          return true
    }else{
        console.log("no token must log in");
        return false;
     }
  }
 
  /* canPass = verifiesToken(); */
  useEffect(()=>{
    const indicator = verifiesToken();
     
  },[])
  

  return ( 
    <Router>
    <div className="App">
     <Navbar />
     <Switch >
        <Route exact path="/"><Main /></Route>
        <Route path="/articles">
            {canPass ? <Articles />:<Redirect to="/login" />}
          </Route>
        <Route exact path="/register"><Register/></Route>
        <Route exact path="/login"><LoginForm/></Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
