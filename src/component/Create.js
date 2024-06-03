import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {v1 as uuid} from "uuid"; 
import array from '../Data'

function Create() {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")

    let history = useNavigate();

    const HandleSubmit = (e)=>{
         e.preventDefault(); 

        const ids = uuid();

        let uni = ids.slice(0,8)

        let a = name,
         b = age;

         if (name == "" || age==""){
            alert("invalid input")
            return
         }

         array.push({id:uni, Name:a, Age:b})
         history("/")

    }

  return (
       <div className='edit-page-table'>
      <h2>Add Employee </h2>
       <form>
       <table>
          <tbody>
             <tr>
                <td><label> Name:</label></td>
                <td><input type='text' placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/></td>
             </tr>
             <tr>
                <td><label> age:</label></td>
                <td><input type='text' placeholder='enter age'onChange={(e)=>setAge(e.target.value)}/></td>
             </tr>
             <tr>
                <td colSpan={2}>
                <button onClick={(e)=>HandleSubmit(e)}>Submit</button>       
                </td>
             </tr>             
          </tbody>
       </table>

          <Link to="/" className='back-btn'>Home</Link>




        </form>
    </div>
  )
}

export default Create
