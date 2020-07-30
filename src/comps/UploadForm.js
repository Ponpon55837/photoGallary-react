import React, { useState } from 'react'
import ProgressBar from './ProgressBar.js'

const UploadForm = () => {
  // 設定初始的file為空
  const [file, setFile] = useState(null)
  const [error, setError] =useState(null)

  const types = ['image/png', 'image/jpeg']

  const changeHandler = (e) => {
    // 抓取放入陣列的第一筆資料內容
    let selected = e.target.files[0]

    // 判斷式為 需要selected存在，並且selected.type有跟types中限定的type相同才行
    if(selected && types.includes(selected.type)){
      // 如果selected有抓到內容，使用setFile function把selected抓到的內容寫入file
      setFile(selected)
      // 如果selectd有抓到內容，要把Error清空
      setError('')
      console.log(selected)
    }
    else {
      setFile(null)
      setError('Please select an image file type like PNG/JEPG')
    }
  }

  return (
    <form>
      <label>
        <input type='file' onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className='output'>
        { error && <div className='error'>{error}</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}

export default UploadForm
