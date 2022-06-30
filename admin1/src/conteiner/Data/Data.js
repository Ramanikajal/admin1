import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import EditIcon from '@mui/icons-material/Edit';

function Medicineformik(props) {
    const [open, setOpen] = useState(false);
    const [dopen, setDOpen] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [data, setData] = useState([]);
    const [did, setDid] = useState();
    const [update, setUpdate] = useState(false);
    const [uid, setUid] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);
    };

    const handledClickOpen = (params) => {
        setDOpen(true);
        setDid(params.id);
    };

    const getData = () => {
        setData();
        let localData = JSON.parse(localStorage.getItem('Data'));
        if (localData !== null) {
            setData(localData);
        }
    }
    const handleEdit=(params)=>{
        setUid(params.id);
        setOpen(true);
        formik.setValues({
        name:params.name,
        price:params.price,
        quantity:params.quantity,
        expiry:params.expiry
        });
        setUpdate(true);
    }
    const handleUpdate=(values)=>{
        console.log(values, uid);
        let localData=JSON.parse(localStorage.getItem('Data'));
        let vData=localData.map((l)=>{
            if(l.id===uid){
                return{id: uid, ...values};
            }
            else
            {
                return l;
            }
        })
        console.log(vData);
        localStorage.setItem("Data", JSON.stringify(vData));
        setOpen(false);
        setUpdate(false);
        setUid();
        getData();
    }
    const handleDelete = () => {
        let localData1 = JSON.parse(localStorage.getItem("Data"));
        let appData = localData1.filter((l, i) => l.id !== did);
        localStorage.setItem("Data", JSON.stringify(appData));
        getData();
        setDid('');
        handleClose('');

    }
    useEffect(
        () => {
            getData();
        },
        [])

    let handleSubmit = (values) => {
        console.log(name, price, quantity, expiry);

        let data = {
            id: Math.floor(Math.random() * 1000),
            name: values.name,
            price: values.price,
            quantity: values.quantity,
            expiry: values.expiry
        };

        let localData = JSON.parse(localStorage.getItem('Data'));

        if (localData === null) {
            localStorage.setItem('Data', JSON.stringify([data]));
        }
        else {
            localData.push(data);
            localStorage.setItem('Data', JSON.stringify(localData));
        }

        handleClose();
        setName('');
        setPrice('');
        setQuantity('');
        setExpiry('');
        getData();

    }

    let schema = yup.object().shape({
        name: yup.string().required('Plese Enter Your Name'),
        price: yup.string().required('Plese Enter Your price'),
        quantity: yup.string().required('Plese Enter Your quantity'),
        expiry: yup.string().required('Plese Enter Your expiry')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            if(update){
                handleUpdate(values);
            }
            else{
                handleSubmit(values);
            }
            handleClose();
        },
    });

    console.log(formik.errors);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                    <IconButton aria-label="delete" onClick={() => handledClickOpen(params)}>
                        <DeleteIcon />
                    </IconButton>

                        <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                        </IconButton>
                    </>
                )
            }
        }
    ];

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Data
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
                <DialogTitle>Data Data</DialogTitle>
                <Formik values={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="name"
                                value={formik.values.name}
                                label="Data Name"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name ? <p>{formik.errors.name}</p> : null}
                            <TextField
                                autoFocus
                                margin="dense"
                                name="Price"
                                value={formik.values.price}
                                label="Data Price"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.price ? <p>{formik.errors.price}</p> : null}
                            <TextField
                                autoFocus
                                margin="dense"
                                name="quantity"
                                value={formik.values.quantity}
                                label="Data Quantity"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            {formik.errors.quantity ? <p>{formik.errors.quantity}</p> : null}
                            <TextField
                                autoFocus
                                margin="dense"
                                name="expiry"
                                value={formik.values.expiry}
                                label="Data Expiry"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.expiry ? <p>{formik.errors.expiry}</p> : null}
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </DialogContent>
                    </Form>
                </Formik>
            </Dialog>

            <Dialog
                open={dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure delete?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>NO</Button>
                    <Button onClick={handleDelete} autoFocus>
                        YES
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Data;