import React from "react";
import array from "../Data";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  function setID(id, name, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }


  let history = useNavigate();
  //delete opetion

  function deteted(id) {
    let index = array
      .map((e) => {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);
    history("/");
  }

 
  
  return (
    <div className="table">
      <h2>Employee add and edit and delete opration in React:</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td colSpan={2}>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            array.map((user) => {
              return (
                <tr>
                  <td>{user.Name}</td>
                  <td>{user.Age}</td>
                  <td>
                    <Link to={`/edit`}>
                      <button onClick={(e) => setID(user.id, user.Name, user.Age)}>
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link>
                      <button onClick={(e) => deteted(user.id)}>Delete</button>
                    </Link>
                  </td>
                </tr>
              );
            })
          }
          
        </tbody>
      </table>
      <Link to="/create">
        <button className="create-btn">Create</button>
      </Link>
    </div>
  );
}

export default Home;
