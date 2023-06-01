import React, { useState } from 'react';
import { TextField, Box, Button, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 400,
  maxHeight: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  color: '#000',
  borderRadius: '20px',
  padding: '40px 30px 60px',
  textAlign: 'center',
};

function AjoutCat() {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handlesave = async () => {
    const res = await fetch('http://localhost:3001/api/categories', {
      method: 'POST',
      body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      console.log('successfully inserted!');
      handleClose();
    } else {
      console.log('Error:', res.status);
    }
  };

  return (
    <div>
      <Button type="button" variant="contained" onClick={handleOpen}>
        ADD
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Category
          </Typography>
          <hr />

          <div className="mb-4">
            <TextField
              variant="outlined"
              name="nomcategorie"
              label="nomcategorie"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <TextField
              variant="outlined"
              name="imagecategorie"
              label="imagecategorie"
              onChange={handleChange}
            />
          </div>
          <hr />
          <div className="mb-3">
            <Button
              type="button"
              variant="contained"
              onClick={handlesave}
              color="primary"
            >
              Save
            </Button>
            <Button
              type="button"
              variant="contained"
              onClick={handleClose}
              color="secondary"
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default AjoutCat;
