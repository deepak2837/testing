import React,{ useContext}  from 'react'
import "./Row.css"
import { context } from '../../App'
function Row(value) {

  
    console.log(value)


  return (<div><div className='topratedmovies'>Top Rated Movies</div>
    <div className='row_container'>
   
<img className="fitimage" src = "https://picsum.photos/200/300" />
<img className="fitimage" src = "https://picsum.photos/200/300" />



</div>


    </div>
  )
}

export default Row