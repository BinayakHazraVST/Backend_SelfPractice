import React from 'react'

const Notes = ({ notes, updateNote, deleteNote }) => {
    let { title, description } = notes;
    return (
        <div className="noteDetails">
            <h3>{title}</h3>
            <div className='line'></div>
            <div>{description.length > 50 ? description.substring(0, 50)+"..." : description}</div>
            <div className='buttonBox'>
                <button className='updateBtn' onClick={() => updateNote(notes)}>Update</button>
                <button className="deleteBtn" onClick={()=> deleteNote(notes)}>Delete</button>
            </div>
        </div>
    )
}

export default Notes
