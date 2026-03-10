import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom'

function ResumeSteps() {
  return (
    <div className='my-5 '>
      <h1 className='text-center'>Create a job winning Resume in minutes</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4 rounded p-5 text-center shadow">
            <IoDocumentTextSharp className='fs-1 text-primary mb-3' />
            <h3>Add your Details</h3>
            <p>add pre written exaples to each sections</p>
            <h5>Step 1</h5>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 rounded p-5 text-center shadow">
            <MdFileDownload className='fs-1 text-primary mb-3' />
            <h3>Download your Resume</h3>
            <p>Download and start applying</p>
            <h5>Step 2</h5>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className='text-center mt-5'>
           <Link to={'/form'} className='btn text-light' style={{backgroundColor:'purple'}}>Let's Start</Link>
        </div>
      </div>
    </div>
  )
}

export default ResumeSteps
