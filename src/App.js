import React ,{useEffect, useState } from 'react';
import './App.css';

import Recipie from './Recipie';



const App  = () =>{
  const APP_Id = "00b77b1d";
  const APP_KEY = "74da6a40b4a69ddb62ac88c6cfae10ff";
const [recipies, setRecipies] = useState([]);
const [search,setSearch] =useState('');
const [query, setQuery] = useState('chicken');



const request = `https://api.edamam.com/search?q=${query}&app_id=${APP_Id}&app_key=${APP_KEY}`;
const getRecipies = async () =>{
 const response = await fetch(request);
 const data = await response.json();
      setRecipies(data.hits)
 }

 useEffect(()=>{
  getRecipies();
  
},[query]);

 return <div className={'App'}>
  <form  onSubmit={(e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }} className={'search-form'}>
  <input className={'search-bar'} type="text"  value={search} onChange={(e) =>setSearch(e.target.value)}/>
  <button  className={'search-button'} type="submit" >search</button>
  </form>
  <div className={'recipies'}>
  {recipies.map(recipe =>(
    <Recipie 
 key = {recipe.recipe.label}
 title={recipe.recipe.label}
 calories={recipe.recipe.calories}
 image = {recipe.recipe.image}
 ingredients = {recipe.recipe.ingredients}/>  
))}
</div>

</div>
  
}


export default  App;

