import * as React from 'react';
import Input from '@material-tailwind/react/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@material-tailwind/react'
import {Grid,TableContainer,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material'
import { useState } from 'react';


export default function View({appdetails}) {

    // const appdetail1= JSON.parse(localStorage.getItem('appdetail'));
    //console.log(appdetail)

    // const [appdetail, setappdetail] = useState([]);
    // const [appname, setappname] = React.useState();

    // const handleChange = e => {
    //     // alert(e.target.value)
    //     //alert(e.target.value)
    //     // setappname(e.target.value)

    //     //  history.push('/view')

    //     fetch(`http://localhost:8082/appdetail/${e.target.value}`)
    //         .then((data) => {
    //             const res = data.json();
    //             console.log("resss", res)
    //             return res
    //         }).then((res) => {
    //             setappdetail(res)
    //             console.log("resss", res)
    //         }).catch(e => {
    //             console.log("error", e)
    //         })
    //     };

  return (
    <>
         <Grid >

{/* <div align="center"> */}
{/* <View /> */}

{/* <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        > */}
{/* <h3 className="text-blue-500 text-sm mt-3 mb-6 font-light uppercase" align="center">
            <b>Application Details</b>
        </h3> */}
{/* <TextField id="filled-basic" label="Email" variant="filled" fullWidth /><br></br>
<TextField id="filled-basic" label="Description" variant="filled" fullWidth /><br></br>
<TextField id="filled-basic" label="App Name" variant="filled" fullWidth /><br></br> */}

{/* <TextField
                id="standard-helperText"
                label={appdetail.email}
                defaultValue={appdetail.email}
               

                //   helperText="Some important text"
            // variant="standard" 
         />  */}

{/* <Button variant='contained' size='small' width='10px'>Update</Button> */}



{/* <div align="right">
                <Box sx={{ minWidth: 180 }}>
                    <FormControl style={{ minWidth: 170 }} >
                        <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Department List"
                        // onChange={handleDept}

                        >

                            {appdetail.map((item, index) => (
                                <MenuItem key={index} value={item.email} >
                                    {item.email}
                                </MenuItem>
                            ))

                            }
                          
                        </Select>

                    </FormControl>

                </Box>
            </div> */}




{/* </Box> */}

<br></br>

<TableContainer style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem', position: 'relative'}}>
        <Table sx={{ minWidth: 950 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align='center'> Email</TableCell>
                    <TableCell align='center'> Description</TableCell>
                    <TableCell align='center'> Appname</TableCell>
                    {/* <TableCell align='center'> </TableCell> */}
                </TableRow>
            </TableHead>
            <TableBody>

                {
                   (appdetails).map((appd) => (

                        <TableRow key={appd.appname}>
                            {/* <TableCell align='center'> {email}</TableCell>
                            <TableCell align='center'> {desc}</TableCell> */}
                            <TableCell align='center'> {appd.email}</TableCell>
                            <TableCell align='center'> {appd.desc}</TableCell>
                            <TableCell align='center'> {appd.appname}</TableCell>
                            {/* <TableCell align='center'><AiOutlineEdit /></TableCell> */}
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
{/* <Button variant="contained" size="small" align="center">Update</Button><br></br> */}

{/* </div> */}



{/* <div align="center">

    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <div>
            <Grid item xs={3}>
                {appdetail.map((appd) => (
                    <TextField
                        id="standard-helperText"
                        label="Email"
                        defaultValue={appd.email}
                        placeholder="Enter email"
                        onChange={(e) => setemail(e.target.value)}
                        // helperText="Some important text"
                        variant="standard"
                    />

                ))
                }
            </Grid>
            <Grid item xs={3}>

                {appdetail.map((appd) => (
                    <TextField
                        id="standard-helperText"
                        label="Description"
                        defaultValue={appd.desc}
                        placeholder="Enter Description"
                        onChange={(e) => setdesc(e.target.value)}
                        // helperText="Some important text"
                        variant="standard"
                    />

                ))
                }
            </Grid>

            <Grid item xs={3}>

                {appdetail.map((appd) => (
                    <TextField
                        id="standard-helperText"
                        label="Appname"
                        placeholder='Enter Appname'
                        defaultValue={appd.appname}
                        onChange={(e) => setappn(e.target.value)}
                        // helperText="Some important text"
                        variant="standard"
                    />

                ))
                }
            </Grid><br></br>

            <Grid item xs={3}>

                <Button variant='contained' size='small' width='10px' onClick={handleUpdate}>Update</Button>
            </Grid>
            <br></br>
        </div>
    </Box>
</div> */}




</Grid>

    </>
  );
}