import React, { useState } from 'react'
import Title from './comps/Title.js'
import UploadForm from './comps/UploadForm.js'
import ImageGrid from './comps/ImageGrid.js'
import Model from './comps/Model.js'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  const [selectdImg, setSelectedImg] = useState(null)

  return (
    <Container className='App'>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Title />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <UploadForm />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <ImageGrid setSelectedImg={setSelectedImg} />
        </Col>
        { selectdImg && <Model selectdImg={selectdImg} setSelectedImg={setSelectedImg} /> }
      </Row>
    </Container>
  )
}

export default App
