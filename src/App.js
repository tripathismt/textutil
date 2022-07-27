import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

let name="shubham mani tripathi";

//textutils project
function App() {

  const [ mode,setMode]=useState('light');
 const[alert,setAlert]=useState(null,null);
 const showAlert=(message,type)=>
 {
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
      setAlert(null,null);
     }, 1500);
     
 }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#000039';
      showAlert("dark mode activated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode activated","success");
    }

  }
  return (
    <>
    <Router>
     
   
   <Navbar title="TextUtils" about="AboutUs" mode={mode} toggleMode={toggleMode} />
    <Alert  alert={alert}/>
       
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
          </Route>
        </Switch>
       
    </div>
    </Router>

    </>
  );
}

export default App;
