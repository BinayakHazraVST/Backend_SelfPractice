import React, { useState } from 'react'
import SingleFileUpload from './components/SingleFileUpload'
import MultipleFileUpload from './components/MultipleFileUpload'

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle? <SingleFileUpload setToggle={setToggle}/> :
                <MultipleFileUpload setToggle={setToggle}/>}
    </div>
  )
}

export default App
