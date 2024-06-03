import React, { useEffect, useState } from "react";
import  { useNavigate,Link } from 'react-router-dom'
import array from "../Data"

function Edit() {
 const [name, setName] = useState("");
const [age, setAge] = useState("");
const [id,setID] = useState("")

const history = useNavigate();


const HandleSubmit = (e)=>{
debugger;
  e.preventDefault();
  if (name === "" || age === "") {
    alert("invalid input");
    return;
}

let index = array.map((e)=> e.id).indexOf(id);

let a = array[index];
console.log(a)
a.Name = name;
a.Age = age;
history("/")

 

  
}

useEffect(()=>{
    setID(localStorage.getItem('id'));
    setName(localStorage.getItem('Name'));
    setAge(localStorage.getItem('Age'));
    
},[]);


  return (
    <div>
      <form>
        Name:{" "}
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Age:{" "}
        <input
          type="text"
          value={age}
          placeholder="enter age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" onClick={(e) => HandleSubmit(e)} value="submit"/>
        <Link to="/">
          <button>Home</button>
        </Link>
      </form>
    </div>
  );
}

export default Edit;
