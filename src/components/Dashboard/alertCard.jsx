import React from 'react'
import './alertCard.css'

const alertCard = (props) => {

  return (
    <div className = "alert-card">
    <h2 className="alert-card-title">{props.alertdate}</h2>
    <p className="alert-card-description">{props.alertmodule}</p>
    <p className="alert-card-message">{props.alertmessage}</p>
    </div>
  )
}

export default alertCard