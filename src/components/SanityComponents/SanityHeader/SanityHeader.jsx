import React from 'react'
import "./SanityHeader.css"
const SanityHeader = (props) => {
  return (
<div className="slugHeader-container">
      <img src={props.img} alt={props.alt} />
     <div className="slugHeader-cover">
       <h1>{props.headTitle}</h1>
     </div>
    </div>
  )
}

export default SanityHeader
