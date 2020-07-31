import React from 'react'
import useFirestore from '../hooks/useFireStore.js'
import { motion } from 'framer-motion'
import { Row, Col } from 'react-bootstrap'

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')
  console.log(docs)

  return (
    <Row className='img-grid'>
      { docs && docs.map(doc => (
        <Col xs={12} sm={12} md={6} lg={4} xl={3} key={doc.id}>
          <motion.div
            className='img-wrap'
            layout
            whileHover={{ opacity: 1, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImg(doc.url)}>
            <motion.img
              src={doc.url}
              alt='upload pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1,
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["0%", "66%", "100%", "33%", "0%"], }}
              tramsition={{ delay: 1 }} />
          </motion.div>
        </Col>
      ))}
    </Row>
  )
}

export default ImageGrid
