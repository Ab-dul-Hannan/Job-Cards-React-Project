import React from 'react'

const nav = (props) => {
  return (
    <div className="nav">
      <div className="logo">{props.logo}</div>
      <div className="links">
        <p>2026 Abdul Hannan.  All Rights Reserved</p>
        <a href={props.linkedIn}
          target="_blank"
          rel="noopener noreferrer">LinkedIn</a>
        <span>/</span>
        <a href={props.gitHub}
          target="_blank"
          rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  )
}

export default nav