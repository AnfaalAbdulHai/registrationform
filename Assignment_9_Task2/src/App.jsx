import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";


const App = () => {
  // const [isloggedin,setisloggedIn] = useState(false);

  // const toggle =()=>{
  //   setisloggedIn(!isloggedin)
  // }
  return (
<>  
{/* {
  isloggedin ? <Login click={toggle}/>: <Signup click={toggle}/>
} */}

<RegistrationForm/>
  
</>


  );
};

export default App;

