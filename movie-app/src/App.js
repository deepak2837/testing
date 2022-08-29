

import React,{useEffect ,useState,createContext} from 'react'
import Homepage from "./container/HomePage/HomePage"

import Banner from "./components/Banner/Banner.js"

import Row from "./components/Row/Row.js"
export const context  = createContext()

const base_url = "https://imdb-api.com/en/API/MostPopularMovies/k_lpsfhtx5"



function App() {
const [data,setdata] = useState([])

  useEffect(()=>{
    api_loder()
  },[])
    async function api_loder(){
  const k = await fetch(base_url)
  const m = await k.json();
  setdata(m.items)
  }

console.log(data)
  return (
    
  <context.Provider  value ={data} >
    <Homepage/> 
   {/* <Banner/>
   <Row/> */}
    </context.Provider>
  )
  }
export default App;
// import Homepage from "./container/HomePage/HomePage.js"
// import React, { useState, useEffect } from "react";
// const url ="https://api.themoviedb.org/3/trending/all/week?api_key=3653c65d49aec32d55c3b5dd49c7b021&language=en-US"


// function App() {
//   const [movie, setMovie] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   async function fetchData() {
//     const response = await fetch(url);
//     const request = await response.json();

//     setMovie(request.results);

//   }
// console.log(movie)
//   return (
//       <div className="banner_contents">

// <Homepage/>


      
//     </div>
//   );
// }

// export default App;






