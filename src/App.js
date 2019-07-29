import React from 'react';
import './App.css';
import MovieCard from './components/MovieCard'
import Top from "./components/Top"



let data = require("./data/data.json");


function App() {
  console.log(data)
  return (
    <div className="App">
      <Top></Top>
      <div />
      <ul style={{ display: "flex", flexWrap: "wrap", marginLeft: "75px" }}>
        {data.map(x => <div style={{ paddingRight: "25px" }}><MovieCard movie={x} /></div>)}
      </ul>
      <div>
      </div>
    </div>
  );
}


export default App;
