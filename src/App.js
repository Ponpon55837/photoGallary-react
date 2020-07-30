import React, { useState } from 'react'
import Title from './comps/Title.js'
import UploadForm from './comps/UploadForm.js'
import ImageGrid from './comps/ImageGrid.js'
import Model from './comps/Model.js'

const App = () => {
  const [selectdImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectdImg && <Model selectdImg={selectdImg} setSelectedImg={setSelectedImg} /> }
    </div>
  )
}

export default App
