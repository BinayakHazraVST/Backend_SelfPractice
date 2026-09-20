import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const MultipleFileUpload = ({setToggle}) => {
    const [multipleFileData, setMultipleFileData] = useState({});
    const [message, setMessage]=useState("");

    const handleChange=(event)=>{
        let {name, value, type, files}=event.target;
        
        if(type==="file"){
            setMultipleFileData({...multipleFileData, [name]:files})
        }else{
            setMultipleFileData({...multipleFileData, [name]:value})
        }

        if(message){
            setMessage("");
        }
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();

        setMessage("Uploding post now...");

        let formElement=event.target;
        let formData=new FormData();
        formData.append("content", multipleFileData.content);
        
        for(let i=0;i<multipleFileData.postImages.length;i++){
            formData.append("images",multipleFileData.postImages[i]);
        }

        // for(let [key, value] of formData.entries()){
        //     console.log(key, value)
        // }

        try{
            let result=await axios.post("http://localhost:3000/files/addMultiple", formData, {
                withCredentials:true
            });

            setMessage(result.data.message);
        }catch(error){
            console.log(error);
            setMessage("Upload Failed")
        }
        setMultipleFileData({})
        formElement.reset();
    }
  return (
    <div>
      <div>
        <h1>Upload a Post</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Content:<br/>
                <textarea rows={5} cols={20} required 
                minLength={5} name="content" 
                value={multipleFileData?.content || ""}
                onChange={handleChange}/>
            </label>

            <label>
                Upload Photos:<br/>
                <input type="file" multiple required name="postImages"
                onChange={handleChange}/>
            </label>

            <button>Upload</button>
        </form>

        {message? <p>{message}</p>:<></>}
      </div>
      <div onClick={()=>setToggle(true)}>Want to update your profile pic</div>
    </div>
  )
}

export default MultipleFileUpload
