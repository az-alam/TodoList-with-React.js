import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import "./index.css"

function Todo() {
  const [input, setinput] = useState("");
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState(false);
  const [completed, setcompleted]=useState([]);

  function handlechange(e) {
    e.preventDefault()
    // console.log(e.target.value);
    setinput(e.target.value);
  }

  function handleclick(e) {
    e.preventDefault()
    if(edit !== false){
      data[edit]=input
      setedit(false)
    }
 
    else
    setdata([...data, input])

  }

  function handledelete(e, index){
    e.preventDefault()
    setdata(data.filter((task, id)=>{
      return id !== index
    }))
  }

  function handleEdit(e, index){
    e.preventDefault()
    setinput(data[index])
    setedit(index)
  }

  function handleDone(e, index){
    e.preventDefault()
    setcompleted([...completed, index])
  }


  return (
    <div id='box'>
      <form>
        <input placeholder='Enter a name' value={input} onChange={handlechange}></input>
        <button onClick={handleclick}>Submit</button>
      </form>

      <div>
        {
          data.map((items, index) => {
            return (
              <ul>
                <li className={completed.includes(index) ? "completed" : ""} key={index}>
                  {items}
                  <a href="" onClick={(e)=>handledelete(e, index)}><DeleteIcon /></a>
                  <a href="" onClick={(e)=>handleEdit(e, index)}><EditIcon/></a>
                  <a href="" onClick={(e)=>handleDone(e, index)}><CheckIcon/></a>
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}

export default Todo