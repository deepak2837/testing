import React, { useContext } from 'react'
import "./Banner.css"
import { context } from '../../App'

function Banner(value) {
    console.log(value.value[0])
     

  return (


    <div>
      <div className="banner_contents"> 
 

    
    <h1>
      {/* {value.value[0].id} */}
      
    </h1>
   
  


        <div className="banner_buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h3>wdejfrgjfkl;ksa'dlmksofolsknjvkfdjkj.lksmd cdvfbuioijflkn,jdkfbuiljdkns,cdjbflknsdjcdbvfklkncdjfd.njxcddkjlsfjbs</h3>
      </div>
      <img className="main-image" />

    </div>
  )
}

export default Banner