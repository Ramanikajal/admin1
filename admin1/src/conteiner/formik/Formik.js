// import React from 'react';
import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

function Formik (props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState([]);
    const [ Did,setDid] = useState ();
    const [dopen, setDopen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
      setUpdate();
    };
    const handleClickDopen = (id) => {
      setDopen(true);
      setDid(id);
    };
  
    const handleClose = () => {
      setOpen(false);
      setUpdate();
      setDopen();
      formik.resetForm()
    };
  
  
  
    let  Formik = {
      name: yup.string().required('enter name'),
      price: yup.string().required('please enter price'),
      quantity: yup.string().required('please enter quantity'),
      expiry: yup.string().required('please enter expiry'),
    }
  
  
    let schema = yup.object().shape(Formik);
  
    const formik = useFormik({
      initialValues: {
        name:'',
        price:'',
        quantity: '',
        expiry: ''
      },
      validationSchema: schema,
      onSubmit: (value, { resetForm }) => {
        if(update){
  
          handleUpdate(value)
        }else{
          handleSubmitdata(value)
        }
        resetForm();
      }
    })
    const handleUpdate = (value) => {
      let localdata = JSON.parse(localStorage.getItem(" Formik"));
      
      let udata = localdata.map((l, i) => {
        if(l.id === value.id) {
            return value;
        } else {
          return l;
        }
      })
      console.log(udata);
  
      localStorage.setItem(" Formik", JSON.stringify(udata))
      setOpen(false)
      setUpdate()
      loadData()
    }
  
    const handleSubmitdata = (value) => {
      let localdata = JSON.parse(localStorage.getItem(" Formik"));
  
      let data = {
        id: Math.floor(Math.random() * 1000),
        ...value
      }
  
      if (localdata === null) {
        localStorage.setItem(" Formik", JSON.stringify([data]))
      } else {
        localdata.push(data)
        localStorage.setItem(" Formik", JSON.stringify(localdata))
      }
  
      setOpen(false);
      loadData()
  
    }
  
    const columns = [
  
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'price', headerName: ' Price', width: 130 },
      { field: 'quantity', headerName: 'Quantity', width: 130 },
      { field: 'expiry', headerName: 'Expiry', width: 130 },
      {
        field: 'Delete', headerName: 'Delete', width: 130,
        renderCell: (params) => (
          <IconButton aria-label="delete" onClick={() => handleClickDopen(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        )
      },
      {
        field: 'Edit', headerName: 'Edit', width: 130,
        renderCell: (params) => (
          <IconButton aria-label="Edit" onClick={() => handleEdit(params.row)}>
            <EditIcon />
          </IconButton>
        )
      }
    ];
    const handleEdit = (data) => {
      setOpen(true);
      setUpdate(data);
      formik.setValues(data);
      // console.log(data);
    }
      
    const handleDelete = () => {
      let localData = JSON.parse(localStorage.getItem(" Formik"))
  
      let filterData = localData.filter((v, i) => v.id !== Did);
  
      localStorage.setItem(" Formik", JSON.stringify(filterData));
  
      setDopen()
      loadData()
  
  
    }
  
    const loadData = () => {
      let localData = JSON.parse(localStorage.getItem(" Formik"))
  
      if (localData !== null) {
        setData(localData)
      }
    }
  
    useEffect(
      () => {
        loadData()
      },
      [])
  
    return (
      <Box>
        <Container>
          <div>
            <center>
                      <Button variant="outlined" onClick={handleClickOpen}>
                    Add  Formik
                    </Button> 
                     
            </center>
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
              <DialogTitle>Add  Formik</DialogTitle>
              <Formik value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                  <DialogContent>
  
                    <TextField
                      margin="dense"
                      id="name"
                      label="name"
                      type="name"
                      fullWidth
                      variant="standard"
                      onChange={formik.handleChange}
                      defaultValue={formik.values.name}
                      helperText={formik.errors.name}
                      error={formik.errors.name ? true : false}
  
                    />
  
                    <TextField
                      margin="dense"
                      id="price"
                      label="price"
                      type="price"
                      fullWidth
                      variant="standard"
                      onChange={formik.handleChange}
                      defaultValue={formik.values.price}
                      helperText={formik.errors.price}
                      error={formik.errors.price ? true : false}
                    />
                    <TextField
                      margin="dense"
                      id="quantity"
                      label="quantity"
                      fullWidth
                      variant="standard"
                      onChange={formik.handleChange}
                      defaultValue={formik.values.quantity}
                      helperText={formik.errors.quantity}
                      error={formik.errors.quantity ? true : false}
  
                    />
                    <TextField
                      margin="dense"
                      id="expiry"
                      label="expiry"
                      fullWidth
                      variant="standard"
                      onChange={formik.handleChange}
                      defaultValue={formik.values.expiry}
                      helperText={formik.errors.expiry}
                      error={formik.errors.expiry ? true : false}
                    />
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                     { 
                          update?  <Button type="submit">Update</Button>
                           :
                         <Button type="submit">Submit</Button>
                     }
                    </DialogActions>
                  </DialogContent>
                </Form>
              </Formik>
            </Dialog>
            <div>
    
          <Dialog
            open={dopen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title">
              {"Are You Sure Delete  Formik Data..? "}
            </DialogTitle>
            <DialogContent>
            
            </DialogContent>
            <DialogActions>
              <Button onClick={()=> handleDelete()}>Yes</Button>
              <Button onClick={handleClose} >
                No
              </Button>
            </DialogActions>
          </Dialog>
      </div>
          </div>
        </Container>
      </Box>
  
    )
}

export default Formik;