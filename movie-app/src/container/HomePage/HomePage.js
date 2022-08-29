import React,{useContext} from 'react'
import Navbar from "../../components/Navbar/Navbar"
import { context } from '../../App'
import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"


function HomePage() {

const data = useContext(context);
   console.log(data)
  return (
    <div>
       
        <Navbar />
         <Banner value = {data}/>
        <Row value = {data}/> 
       
    </div>
  )
}

export default HomePage