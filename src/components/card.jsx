import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <>
        <div className="card">
            <div className="uper">
                <div className="imgCircle">
                    <img src={props.imgSrc}  />
                </div>
                <div className="fvrtJob">
                    <p><Bookmark/></p>
                </div>
            </div>
            <div className="middle">
                <div className="company">
                    <p>{props.company}</p>
                    <span>{props.time}</span>
                </div>
                <div className="jobTitle"><h3>{props.jobTitle}</h3></div>
                <div className="attributes">
                    <span>{props.jobType}</span>
                    <span>{props.jobSitting}</span>
                </div>
            </div>
            <div className="lower">
                <div className="priceL">
                    <h3>{props.price}</h3>
                    <p>{props.location}</p>
                </div>
                <div className="apply">
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default card