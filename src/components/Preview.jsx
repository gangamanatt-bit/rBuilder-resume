import React from 'react'
import { Divider, Button } from '@mui/material'

function Preview() {
  return (
    <div className='w-100'>
       <h2>Full name</h2>
       <p className="fs-6">phone:9088673423</p>
       <p className="fs-6">Email:mail</p>
       <p className="fs-6">LinkedIn: <a href="">url</a></p>
       <p className="fs-6">GitHub: <a href="">url</a></p>
       <p className="fs-6">Location:Location</p>
       <Divider className='bg-dark my-3'/>
       <h4>Professional Summary</h4>
       <p>Summary</p>
       <Divider className='bg-dark '/>
       <h4 className="mt-3">Technical skills</h4>
       <Button variant='text'>Skill</Button>
       <Divider className='bg-dark my-3 '/>
       <h4>Education</h4>
       <p className="fs-6">Degree</p>
        <p className="fs-6">Degree</p>
         <p className="fs-6">Degree</p>
    </div>
  )
}

export default Preview
