import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import {Link} from "react-router-dom"
import Preview from '../components/Preview';
import Edit from '../components/Edit';

function ViewResume() {
  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
            {/* icon set */}
            {/* download */}
            <button className="btn text-primary fs-2 me-2"><FaFileDownload /></button>
            <Edit/>
             <Link to={'/download'} className="btn text-primary fs-2 me-2"><IoMdRefresh /></Link>
             <Link to={'/form'} className="btn text-primary fs-2 me-2"><FaBackward /></Link>
          </div>
          <div className="mt-5"><Preview/></div>
        </div>
        <div className="col-lg-2"></div>
      </div>
      
    </div>
  )
}

export default ViewResume
