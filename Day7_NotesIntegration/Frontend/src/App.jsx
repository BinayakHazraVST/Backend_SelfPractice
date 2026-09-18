import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import Notes from './assets/components/Notes';

const App = () => {
  const [notesData, setNotesData] = useState({})
  const [allNotes, setAllNotes]=useState([]);
  const [message, setMessage]=useState("");
  const [updateInfo, setUpdateInfo]=useState(null);

  console.log(allNotes.length)

  const getAllNotes=async()=>{
    let result=await axios.get("http://localhost:3000/notes/allnotes");
    setAllNotes(result.data.data);
    setMessage(result.data.message);
  }

  useEffect(()=>{
    getAllNotes()
  },[])

  const handleChange=(event)=>{
    let {name, value}=event.target;
    setNotesData({...notesData, [name]:value});
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    let result=null;

    if(updateInfo){
      result=await axios.put(`http://localhost:3000/notes/update/${updateInfo}`, notesData);
    }else{
      result=await axios.post("http://localhost:3000/notes/create", notesData);
    }

    getAllNotes();
    setMessage(result.data.message);
    setNotesData({});
  }

  if(message==="Internal server error"){
    return <div>{message}</div>
  }

  const updateNote=(notes)=>{
    setUpdateInfo(notes._id);
    setNotesData({
      title:notes.title,
      description:notes.description
    })
  }

  const deleteNote=async(notes)=>{
    let result=await axios.delete(`http://localhost:3000/notes/delete/${notes._id}`);
    setMessage(result.data.message);
    getAllNotes();
  }

  return (
    <div className="appContent">

      <form onSubmit={handleSubmit}>
        <h2>{updateInfo? "Update A Notes" : "Add New Notes"}</h2>
        <label>
          Title:<br/>
          <input type="text" placeholder='Enter title' required name="title"
          value={notesData?.title || ""} onChange={handleChange}/>
        </label>

        <label>
          Description:<br/>
          <textarea rows={5} cols={50} type="text" placeholder='Enter title' 
          minLength={20} required 
          name="description"
          value={notesData?.description || ""} onChange={handleChange}/>
        </label>

        <button>{updateInfo? "Update Notes" : "Add Notes"}</button>
      </form>

      <div className='line'></div>

      <h2>Your Notes:</h2>
      <div className="notesBox">
        {
          allNotes.length===0? <p style={{justifyContent:"center", alignItems:"Center"}}>No Notes added till now</p>:<>

          {allNotes.map((elem)=>{
            return <Notes key={elem._id} updateNote={updateNote} deleteNote={deleteNote}
            notes={elem}/>
          })}
          </> 
        }
      </div>
    </div>
  )
}

export default App
