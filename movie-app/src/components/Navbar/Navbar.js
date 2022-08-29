import React,{useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Navbar.css"


export default function Navbar() {
  const [color,setcolor] = useState(false)
  window.onscroll = function transistion(){ 
if (window.scrollY >= 500 ) {
    setcolor(true)
} 
else {
  setcolor(false)
}}
  return (
    <div  >
      <div className={`navbarcontainer ${color && "darkclass"}`}>
        <div><img className='navbarlogo' src="https://archive.org/download/movie-box-logo/movie%20box%20logo.jpg" /></div>
        <div className='navabaruserlogo'>
          <div > <AccountCircleIcon className={`userlogo ${color && "userlogo1"}`} fontSize="large" /></div>
          <p className={`username ${color && "username1"}`}>hi user</p></div>
      </div>
      
    </div>
  )
}
