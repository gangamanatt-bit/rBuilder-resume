import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';
import { CiEdit } from "react-icons/ci";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Edit() {
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><CiEdit /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
                            <h3>Personal details</h3>
                            <div className="p-3 row">
                                <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                                 <FormControl variant="standard">
                    <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                    >
                      
                      <MenuItem value={10}>Ten</MenuItem>
                     
                    </Select>
                  </FormControl>
                            </div>
                        </div>
                         <div>
                                        <h3>Educational details</h3>
                                        <div className="p-3 row">
                                            <TextField id="standard-basic-degree" label="Bachelor's degree" variant="standard" />
                                            <TextField id="standard-basic-college" label="University/college name" variant="standard" />
                                             <TextField id="standard-basic-yog" label="Year of Graduation" variant="standard" />
                                           
                                        </div>
                                    </div>
                                   <div>
                                        <h3>Skills</h3>
                                        <div className="p-3 d-flex justify-content-center align-items-center">
                                            <input type="text" placeholder='Add skill' className='form-control'/>
                                            <Button variant='text'>Add</Button>
                                           
                                        </div>
                                         <h3> added Skills</h3>
                                        <div className="p-3 d-flex justify-content-center align-items-center">
                                            <Button variant='contained' className='my-1'>Skill <FaXmark className='ms-1'/></Button>

                                           
                                        </div>

                                    </div>
                                    <div>
                                        <h3>Summary</h3>
                                        <div className="p-3 row">
                                         <TextField id="standard-basic-yog" label="summary" multiline varient="standard" />

                                        </div>
                                    </div>
                                    <button className="btn btn-primary">update</button>
                                   
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit
