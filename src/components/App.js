import "../styles/App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import React, { useState } from "react";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selctedOption={selectedOption} />
    </div>
  );
}

export default App;
