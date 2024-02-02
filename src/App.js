import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
// import router from "../../Server/routes/Router";
function App() {
  // const [name,setName]=
  const [error, setError] = useState("");
  const [name, setName] = useState("David");
  const [message, setMessage] = useState("Template Message to send");
  // const [processing, setProcessing] = useState(false);
  // const [userData, setUserData] = useState("");

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

  const postData = async () => {
    const postData = {
      user: name,
      msg: message,
    };
    await axios
      .post("http://localhost:5000/contact", postData)
      .then((res) => {
        setError("Successfully sent data");
        setTimeout(()=>setError(""), 2500);
      })
      // .then((val) =>
      // )
      .catch((e) => console.error(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + " |  " + message + "|  ");
    if (!name || !message) {
      console.log("Error No data");
    } else {
      console.log("No Errors");
    }
    setError("");
    postData();
    setName((name) => (name === "David" ? "Stephen" : "Elijah"));
    setMessage((msg) =>
      msg === "Template Message to send"
        ? "New Message to be sent"
        : "Final Message for sending"
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      */}
        <a
          className="App-link"
          href="https://open.spotify.com/track/0x8waPhRHIyK83064VSaXE?si=5b160fc5d9b84b61"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleSubmit}>Submit</button>
        <p>{error}</p>
        <p>From: {name}</p>
        <p>Body: {message}</p>
      </header>
    </div>
  );
}

export default App;
