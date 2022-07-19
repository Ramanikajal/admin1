
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMedicines, getMedicines, upadateMedicines } from '../../Redux/action/Medicines.action';
import { addMedicines } from '../../Redux/action/Medicines.action';
// import{ isLoading}from'../../Redux/Reducer/Medicines.Reducer';
import { Message } from '@mui/icons-material';

function Medicines(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [Update, setUpdate] = useState();
    const [dopen, setDopen] = React.useState(false);
    const [did, setDid] = useState()
    const [uid, setUid] = useState()
    const Medicines = useSelector(state => state.Medicines)

    console.log(Medicines.isLoading)


    const handleClickDopen = (id) => {
        setDopen(true);
        setDid(id);
    };

    const handleClickOpen = () => {
        setOpen(true);
        setUpdate()
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate()
        setDopen()
        formik.resetForm();
    };


    let medicine = {
        name: yup.string().required('please enter name'),
        price: yup.string().required('please enter price'),
        quantity: yup.string().required('please enter quantity'),
        expiry: yup.string().required('please enter expiry'),
    }


    let schema = yup.object().shape(medicine);

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            if (Update) {
                handleupdate(values)
            } else {
                handleSubmitdata(values)
            }
        }
    })

    const handleupdate = (values) => {
        console.log(values)
        dispatch(upadateMedicines(values))
        // let localdata = JSON.parse(localStorage.getItem("medicine"));

        // let udata = localdata.map((l, i) => {
        //     if (l.id === uid) {
        //         return { id: uid, ...values };
        //     } else {
        //         return l;
        //     }
        // })
        // console.log(udata);

        // localStorage.setItem("medicine", JSON.stringify(udata))
        setOpen(false)
        setUpdate(false)
        loadData()
    }

    const handleSubmitdata = (values) => {
        
        // let localdata = JSON.parse(localStorage.getItem("medicine"));

        let data = {
            id: Math.floor(Math.random() * 1000),
            ...values
        }
        dispatch(addMedicines(data))

        // if (localdata === null) {
        //     localStorage.setItem("medicine", JSON.stringify([data]))
        // } else {
        //     localdata.push(data)
        //     localStorage.setItem("medicine", JSON.stringify(localdata))
        // }

        setOpen(false);
        loadData()

    }


    const loadData = () => {
        // let localData = JSON.parse(localStorage.getItem("medicine"))

        // if (localData !== null) {
        //     setData(localData)
        // }
        setData(Medicines.Medicines)
    }

    const dispatch = useDispatch();

    useEffect(
        () => {
            loadData()
            dispatch(getMedicines())

        },
        [])

    const columns = [
        { field: 'id', headerName: 'Id', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: ' Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleClickDopen(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
        {
            field: 'edit', headerName: 'Edit', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params)}>
                        <CreateIcon />
                    </IconButton>
                </>
            )
        }
    ];

    const handleEdit = (params) => {
        setOpen(true);
        //console.log(params.row);
        setUid(params.row.id)
        setUpdate(true)
        console.log(params.row.id)
        formik.setValues({
            id: params.row.id,
            name: params.row.name,
            price: params.row.price,
            quantity: params.row.quantity,
            expiry: params.row.expiry,
        });
    }

    const handleDelete = () => {
        console.log(data)
        // let localData = JSON.parse(localStorage.getItem("medicine"))

        // let filterData = localData.filter((v, i) => v.id !== did);

        // localStorage.setItem("medicine", JSON.stringify(filterData));
        // loadData()
        setDopen(false)
        dispatch(deleteMedicines(did));
        handleClose('');
    }

    return (
        <>
            {
                Medicines.isLoading ?
                (
                    <p>Loading...</p>
                 ) :(
                    Medicines.error !== '' ?
                    <p>{Medicines.error }</p>:
                
                     
                    < Box >
                        <Container>
                            <div>
                                <center>
                                    <Button variant="outlined" onClick={() => handleClickOpen()}>
                                        Add Medicine
                                    </Button>
                                </center>
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={Medicines.Medicines}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        checkboxSelection
                                    />

                                </div>
                                <Dialog open={open} onClose={handleClose}>
                                    <DialogTitle>Add Medicine</DialogTitle>
                                    <Formik values={formik}>
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
                                                    value={formik.values.name}
                                                    helperText={formik.errors.name}
                                                    error={formik.errors.name ? true : false}

                                                />

                                                {
                                                    formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                                }

                                                <TextField
                                                    margin="dense"
                                                    id="price"
                                                    label="price"
                                                    type="price"
                                                    fullWidth
                                                    variant="standard"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.price}
                                                    helperText={formik.errors.price}
                                                    error={formik.errors.price ? true : false}
                                                />
                                                {
                                                    formik.errors.price && formik.touched.price ? <p>{formik.errors.price}</p> : ''
                                                }

                                                <TextField
                                                    margin="dense"
                                                    id="quantity"
                                                    label="quantity"
                                                    fullWidth
                                                    variant="standard"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.quantity}
                                                    helperText={formik.errors.quantity}
                                                    error={formik.errors.quantity ? true : false}

                                                />
                                                {
                                                    formik.errors.quantity && formik.touched.quantity ? <p>{formik.errors.quantity}</p> : ''
                                                }
                                                <TextField
                                                    margin="dense"
                                                    id="expiry"
                                                    label="expiry"
                                                    fullWidth
                                                    variant="standard"
                                                    onChange={formik.handleChange}
                                                    v alue={formik.values.expiry}
                                                    helperText={formik.errors.expiry}
                                                    error={formik.errors.expiry ? true : false}
                                                />
                                                {
                                                    formik.errors.expiry && formik.touched.expiry ? <p>{formik.errors.expiry}</p> : ''
                                                }
                                                <DialogActions>
                                                    <Button onClick={handleClose}>Cancel</Button>
                                                    <Button type="submit">Submit</Button>
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
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Are You Sure Delete Medicine Data ...? "}
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">

                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => handleDelete()} autofocus>yes</Button>
                                            <Button onClick={handleClose}>No</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </div>
                        </Container>
                    </Box >
                     )
            }




        </>

    )



}

export default Medicines;