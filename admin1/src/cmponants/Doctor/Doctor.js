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
import { addDoctor, deletDoctor, getDoctor, updetDoctor } from '../../Redux/action/Doctor.action';

function Doctor(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [Update, setUpdate] = useState();
    const [dopen, setDopen] = React.useState(false);
    const [did, setDid] = useState()
    const [uid, setUid] = useState()
    const Counter = useSelector(state => state.Counter)
    const Doctor = useSelector(state => state.Doctor)
    const dispatch = useDispatch()


    console.log(Doctor.isLoading)


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


    let doctor = {
        Doctorname: yup.string().required('please enter Doctorname '),
        Degree: yup.string().required('please enter Degree'),
        Aptprice: yup.string().required('please enter Aptprice'),
        Discription: yup.string().required('please enter Discription'),
    }


    let schema = yup.object().shape(doctor);

    const formik = useFormik({
        initialValues: {
            Doctorname: '',
            Degree: '',
            Aptprice: '',
            Discription: ''
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
        dispatch(updetDoctor(values))
        // let localdata = JSON.parse(localStorage.getItem("Doctor"));

        // let udata = localdata.map((l, i) => {
        //     if (l.id === uid) {
        //         return { id: uid, ...values };
        //     } else {
        //         return l;
        //     }
        // })
        // console.log(udata);

        // localStorage.setItem("Doctor", JSON.stringify(udata))
        setOpen(false)
        setUpdate(false)
        loadData()
    }

    const handleSubmitdata = (values) => {
        // let localdata = JSON.parse(localStorage.getItem("Doctor"));

        // let data = {
        //     id: Math.floor(Math.random() * 1000),
        //     ...values
        // }
        dispatch(addDoctor(values))
        // if (localdata === null) {
        //     localStorage.setItem("Doctor", JSON.stringify([data]))
        // } else {
        //     localdata.push(data)
        //     localStorage.setItem("Doctor", JSON.stringify(localdata))
        // }


        setOpen(false);
        loadData()

    }


    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("Doctor"))

        if (localData !== null) {
            setData(localData)
        }
    }

    useEffect(
        () => {
            loadData()
            dispatch(getDoctor())
        },
        [])

    const columns = [
        { field: 'id', headerName: 'Id', width: 130 },
        { field: 'Doctorname', headerName: 'Doctorname', width: 130 },
        { field: 'Degree', headerName: ' Degree', width: 130 },
        { field: 'Aptprice', headerName: 'Aptprice', width: 130 },
        { field: 'Discription', headerName: 'Discription', width: 130 },
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
            id:params.id,
            Doctorname: params.row.Doctorname,
            Degree: params.row.Degree,
            Aptprice: params.row.Aptprice,
            Discription: params.row.Discription,
        });
    }

    const handleDelete = () => {
        // let localData = JSON.parse(localStorage.getItem("Doctor"))

        // let filterData = localData.filter((v, i) => v.id !== did);

        // localStorage.setItem("Doctor", JSON.stringify(filterData));
        dispatch(deletDoctor(did))
        loadData()
        setDopen(false)
    }

    return (


        <Box>
            <Container>
                <div>
                    <center>
                        <Button variant="outlined" onClick={() => handleClickOpen()}>
                            Add Doctor
                        </Button>

                        <p>{Counter.Counter}</p>
                    </center>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={Doctor.Doctor}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />

                    </div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add Doctor</DialogTitle>
                        <Formik values={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>

                                    <TextField
                                        margin="dense"
                                        id="Doctorname"
                                        label="Doctorname"
                                        type="Doctorname"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.Doctorname}
                                        helperText={formik.errors.Doctorname}
                                        error={formik.errors.Doctorname ? true : false}

                                    />

                                    {
                                        formik.errors.Doctorname && formik.touched.Doctorname ? <p>{formik.errors.Doctorname}</p> : ''
                                    }

                                    <TextField
                                        margin="dense"
                                        id="Degree"
                                        label="Degree"
                                        type="Degree"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.Degree}
                                        helperText={formik.errors.Degree}
                                        error={formik.errors.Degree ? true : false}
                                    />
                                    {
                                        formik.errors.Degree && formik.touched.Degree ? <p>{formik.errors.Degree}</p> : ''
                                    }

                                    <TextField
                                        margin="dense"
                                        id="Aptprice"
                                        label="Aptprice"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.Aptprice}
                                        helperText={formik.errors.Aptprice}
                                        error={formik.errors.Aptprice ? true : false}

                                    />
                                    {
                                        formik.errors.Aptprice && formik.touched.Aptprice ? <p>{formik.errors.Aptprice}</p> : ''
                                    }
                                    <TextField
                                        margin="dense"
                                        id="Discription"
                                        label="Discription"
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.Discription}
                                        helperText={formik.errors.Discription}
                                        error={formik.errors.Discription ? true : false}
                                    />
                                    {
                                        formik.errors.Discription && formik.touched.Discription ? <p>{formik.errors.Discription}</p> : ''
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
                                {"Are You Sure Delete Doctor Data ...? "}
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
        </Box>

    )



}

export default Doctor;