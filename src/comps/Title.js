import React from 'react'
import { motion } from 'framer-motion'

const Title = () => {

  return (
    <motion.div className='title' animate={{
      scale: [1, 1.1, 1.2, 1.1, 1]}}>
      <h1>
        FireGram
      </h1>
      <h2>Your Pictures</h2>
      <p>Add Your Pictures into this Firebase Database.</p>
    </motion.div>
  )
}

export default Title
