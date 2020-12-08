import React, {useState} from "react";
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import './App.css'
import Recipe from './Recipe';
// import Alert from './Alert'; 


const App = () => {
  const [query, setQuery] = useState(""); 
  const [recipes, setRecipes] = useState([]);
  // const [alert, setAlertt] = useState("");
const API_ID = "54823b8c"; 

const APP_KEY = "4ac5e2b9ff045cdb5b9ffb3c72879e54";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`; 


  const getData = async() => {
    // if (query !== "") {
      const result = await Axios.get(url); 
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
    // } else {
      // setAlert("Please fill the form");
    
  };

  const onChange = (e) => {
    setQuery(e.target.value); 
  };

  const onSubmit = (e) => {
    e.preventDefault(); 
    getData();
  };
  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching App</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {/* {alert !== "" && <Alert alert={alert}/>} */}
        <input type="text" placeholder="Search..." autoCorrect="off" onChange={onChange} value={query}/>
        <input type="submit" value="search"/>
      </form>
      <div className = "recipes">
        {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe}/> )}
      </div>
    </div>
  );
};

export default App;