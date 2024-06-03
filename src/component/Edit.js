import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import array from '../Data';

function Edit() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    const history = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(name =='' || age ==''){
            alert("invalid input")
            return
        }

        //index find

        let index = array.map((e)=>{
            return e.id
        }).indexOf(id)

        let a = array[index]
        a.Name = name
        a.Age = age

        history("/")

        
    }

    useEffect(()=>{
        setName(localStorage.getItem("Name"));
        setAge(localStorage.getItem("Age"));
        setId(localStorage.getItem("id"));
    },[])
  return (
    <div className='edit-page-table'>
      <h2>Edit Employee </h2>
       <form>
       <table>
          <tbody>
             <tr>
                <td><label> Name:</label></td>
                <td><input
          type="text"
          value={name}
          placeholder="Enter name" 
          onChange={(e)=>setName(e.target.value)}
          /></td>
             </tr>
             <tr>
                <td><label> age:</label></td>
                <td><input
          type="text"
          value={age}
          placeholder="Enter name" 
          onChange={(e)=>setAge(e.target.value)}
          /></td>
             </tr>
             <tr>
                <td colSpan={2}>
                <input type="submit" onClick={(e)=>handleSubmit(e)} value="Update"/>        
                </td>
             </tr>             
          </tbody>
       </table>

       <Link to="/" className='back-btn'>Home</Link>




        </form>
    </div>
  )
}

export default Edit
