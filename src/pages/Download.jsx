import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
function Download() {
  return (
   <div className='container'>
      <div className='d-flex m-5 justify-content-between align-items-center'>
        <h2>Download Resume History</h2>
        <Link to={'/forms'}><IoMdArrowRoundBack />Back</Link>
      </div>
      <div className='row mb-5'>
        <div className="col-lg-4">
          <div style={{height:'400px'}} className="shadow p-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Review at: time</h5>
              <button className='btn fs-5 text-danger'><MdDelete /></button>
            </div>
            <div className="mt-3 text-center">
              <img  src="resume1-removebg-preview.png" alt="" />
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Download
