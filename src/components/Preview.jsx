import React from 'react'
import { Divider, Button } from '@mui/material'

function Preview({resumeData}) {
  return (
    <div className='w-100'>
       <h2>{resumeData?.fullName}</h2>
       <p className="fs-6">Phone:{resumeData?.phone}</p>
       <p className="fs-6">Email:{resumeData?.email}</p>
       <p className="fs-6">LinkedIn: <a href="">{resumeData?.linkedin}</a></p>
       <p className="fs-6">GitHub:<a href="">{resumeData?.github}</a></p>
       <p className="fs-6">Location:{resumeData?.location}</p>
       <Divider className='bg-dark my-3'/>
       <h4>Professional Summary</h4>
       <p>{resumeData?.summary}</p>
       <Divider className='bg-dark '/>
       <h4 className="mt-3">Technical skills</h4>
       {
        resumeData?.skills?.map((item, index)=>(<Button key={index} className='text-dark border-dark m-1' variant='outlined'>{item}</Button>))
       }
       <Divider className='bg-dark my-3 '/>
       <h4>Education</h4>
       <p className="fs-6">Bachelor's degree in {resumeData?.degree}</p>
        <p className="fs-6">University/college name:{resumeData?.university}</p>
         <p className="fs-6">Year of passout:{resumeData?.passOut}</p>
    </div>
  )
}

export default Preview
