import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {


  const [name, setName] = useState("");

  const callApi = async () => {
   await axios.get("/api").then((res) => {
      setName(res.data.username);
    });  
  }

  useEffect(() => {
    callApi();
  }, []);


 
  console.log(name);
  return <div>hello {name ? `${name}` : "hello world"}</div>;
}

export default App;
