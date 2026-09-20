import React from 'react'
import { useState } from 'react';
import axios from 'axios'

const SingleFileUpload = ({setToggle}) => {
  let [singleFileData, setSingleFileData] = useState({});
  let [message, setMessage] = useState("");
  // let [multipleFileData, setMultipleFileData]=useState({});

  const handleChange = (event) => {
    let { name, value, type, files } = event.target;
    // console.log("files in change",files);

    if (type === "file") {
      setSingleFileData({ ...singleFileData, [name]: files[0] })
    } else {
      setSingleFileData({ ...singleFileData, [name]: value });
    }

    if (message) {
      setMessage("");
    }
  }

  const handleSubmitSingleFile = async (event) => {
    event.preventDefault();

    setMessage("Updating your profile pic...")
    let formElement=event.target;

    const formData = new FormData();
    formData.append("name", singleFileData.name);
    formData.append("email", singleFileData.email);
    formData.append("image", singleFileData.profilePic);

    // for(let [key, value] of formData.entries()){
    //   console.log(key, value)
    // }

    try {
      let result = await axios.post("http://localhost:3000/files/addSingle", formData, {
        withCredentials:true,
      });

      setMessage(result.data.message);
    }catch(error){
      console.log(error);
      setMessage("Upload failed");
    }
    setSingleFileData({});
    formElement.reset();
  }

  return (
    <div>
      <div className="formSingleFile">
        <h1>Upload Your Profile Pic</h1>

        <form onSubmit={handleSubmitSingleFile}>
          <label>
            Name:<br />
            <input type="text" placeholder="Enter your name" required
              name="name" value={singleFileData?.name || ""}
              onChange={handleChange} />
          </label>

          <label>
            Email:<br />
            <input type="email" placeholder="Enter email" required
              name="email" value={singleFileData?.email || ""}
              onChange={handleChange} />
          </label>

          <label>
            Upload your Profile Pic
            <input type="file" required placeholder="Upload profile pic"
              name="profilePic" onChange={handleChange} />
          </label>

          <button>Upload</button>

        </form>
        {message ? <p>{message}</p> : <></>}
      </div>
      <div onClick={()=>setToggle(false)}>Want to upload a post</div>
    </div>
  )
}

export default SingleFileUpload
