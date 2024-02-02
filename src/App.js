import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import router from "../../Server/routes/Router";
function App() {
  // const [name,setName]=
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [userData, setUserData] = useState("");

  // OLD FETCH API
  // const fetchData = async () => {
  //   const opts = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name: name,
  //       message: message,
  //     }),
  //   };
  //   await fetch("//link to json website")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (processing) {
  //         setUserData(data);
  //       }
  //     }).catch(err=>console.error(err));
  // };

  const postData = () => {
    const postData = {
      user: name,
      msg: message,
    };
    // await axios.post("http://localhost:5000/contact",postData).then(res=>set)
    //   try{name===""||message===""?console.log('Error No data'):router.post("/contact",{name,message})}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + " | " + " " + message + "|  ");
    if (!name || !message) {
      console.log("Error No data");
    } else {
      console.log("No Errors");
    }
    postData();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleSubmit}></button>
      </header>
    </div>
  );
}

export default App;
