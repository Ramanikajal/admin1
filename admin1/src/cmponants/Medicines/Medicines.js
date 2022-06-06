import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid, } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function Medicines(props) {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [exapiry, setExapiry] = useState('');
  const [data, setData] = useState([]);
  const [dopen, setDopen] = useState(false);
  const[Did, setDid]=useState();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDopen(false);
  };

  const handledClickOpen = (params) => {
    setDopen(true);
    setDid(params.id);
  }



  const getData = () => {

    let localData = JSON.parse(localStorage.getItem("Medicines"));
    if (localData !== null) {
      setData(localData)
    }
  }
  useEffect(
    () => {
      getData();
    },
    [])

  const handlesubmit = () => {
    console.log(name, price, exapiry, quantity);


    let data = {
      id: Math.floor(Math.random() * 1000),
      name,
      price,
      quantity,
      exapiry
    };
    handleClose();
    setName('');
    setPrice('');
    setExapiry('');
    setQuantity('');
    getData();
    setOpen();
    


    let localData = JSON.parse(localStorage.getItem("Medicines"));
    if (localData === null) {
      localStorage.setItem('Medicines', JSON.stringify([data]));
    }
    else {
      localData.push(data)
      localStorage.setItem('Medicines', JSON.stringify(localData));
    }
    getData();
  }


  const handledelet = (params) => {

    let localData = JSON.parse(localStorage.getItem("Medicines"));

    let fData = localData.filter((l, i) => l.id !== Did);

    localStorage.setItem("Medicines", JSON.stringify(fData));
    setDid();
    handleClose();
    getData();


  }
  
  const handedeEdit = () => {
    setOpen(false);
  };


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: ' name', width: 130 },
    { field: 'price', headerName: 'price', width: 130 },
    { field: 'quantity', headerName: 'quantity', width: 90, },
    { field: 'exapiry', headerName: 'exapiry', width: 160, },
    {
      field: 'action', headerName: 'action', width: 130,
      renderCell: (params) => {

        return (
          <>
            <IconButton onClick={() =>handledClickOpen (params)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
            
          </>
        )
      },
    },


    { field: 'Edit', headerName: 'Edit', width: 130,

      renderCell: (params) => {

        return (
          <>
            <IconButton onClick={() => handedeEdit(params)} aria-label="updet">
              <BorderColorIcon />
            </IconButton>
          </>
        )
      },
    }
  ];


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add  medicines
      </Button>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>medicines</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            name="name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Price"
            label=" Price"
            name="name"
            fullWidth
            variant="standard"
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="exapiry"
            label="exapiry"
            name="name"
            fullWidth
            variant="standard"
            onChange={(e) => setExapiry(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Quantity"
            label="Quantity"
            name="name"
            fullWidth
            variant="standard"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlesubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <div>
     
     
      <Dialog
        open={dopen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"select data is delet"}
        </DialogTitle>
       
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handledelet} autoFocus>
            yse
          </Button>
        </DialogActions>
      </Dialog>
    </div>
     </div>
  )
}


export default Medicines;