import React from 'react'

export const Alert = ({message}) => {
  return (
    <div className="alert alert-primary" role="alert">
    
   {message}
  </div>
  )
}
export default Alert;