import React from 'react'

const SubmitButton = ({value, ...otherprops}) => <input 
  type='submit'
  className='btn btn-block bg-blue'
  value={value}
  {...otherprops}
/>

export default SubmitButton
