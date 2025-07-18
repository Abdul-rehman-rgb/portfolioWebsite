import React from 'react'

const Paragraph = ({para = "paragrapgh Text"}) => {
  return (
    <p className='text-lg leading-relaxed text-gray-600'>{para}</p>
  )
}

export default Paragraph