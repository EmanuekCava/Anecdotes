import React from 'react'

const Error = ({ msg }) => {
  return (
    <div className="container-error">
        <p className="message">{msg}</p>
    </div>
  )
}

export default Error