// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import Button from '@material-tailwind/react/Button';
// import Input from '@material-tailwind/react/Input';
// import Textarea from '@material-tailwind/react/Textarea';
// import { Form } from 'react-bootstrap';
// import { Label } from '@material-tailwind/react';
// import { useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom";
import CardBody from '@material-tailwind/react/CardBody';

import { Box ,TableCell,TableRow,TableBody,Paper,Table,TableContainer,TableHead} from '@mui/material';



export default function LicenceKey({applklist}) {

    // const history = useHistory();

    // const [appname, setappname] = useState();
    // useEffect(() => {
    //     setappname(localStorage.getItem('app_name'))
    // })


    // const handleBack=()=>{

    //     history.push('/')
    // }

    return (
        // <Box>           
        //     <CardBody>
        //         <div>
        //         <form>
        //             <h4 align="left" style={{ color: 'plum' }}>
        //                 <b> {appname}</b>
        //             </h4>
        //             <div className="flex flex-wrap mt-10">
        //                 <div className="w-full lg:w-6/12 pr-1 mb-5 font-light">
        //                     <label style={{ color: 'plum' }}><b>Licence Key</b></label>
        //                     <Input

        //                         type="text"
        //                         color="blue"
        //                         readonly
        //                     // placeholder="Licence Key"
        //                     />
        //                 </div>
        //                 <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
        //                     <label style={{ color: 'black' }}><b>Validity</b></label>
        //                     <div className="row">
        //                         {/* <div className="col-md-5">
        //                             <Form.Group controlId="dob">
                                     
        //                                 <Form.Control type="date" name="dob" placeholder="Date of Birth" />
        //                             </Form.Group>
        //                         </div> */}
        //                     </div>

        //                 </div>
                       
                      
                        
        //             </div>
        //             {/* <div className="d-flex flex-row bd-highlight mb-20" style={{ position: 'relative', marginLeft: '150px' }}>
        //                 <div className="p-10 bd-highlight"><Button onClick={handleBack}>Back</Button></div>
        //                 <div className="p-10 bd-highlight"> <Button>Update</Button></div>
        //             </div> */}
        //         </form>
        //         {/* <Button variant="contained" size="small" >Update</Button> */}
        //         </div>
        //     </CardBody>
        // </Box>

        <Box>
        <CardBody>
            <div>
                <form>
                    {/* <h4 align="left" style={{ color: 'plum' }}>
                        <b> {appname}</b>
                    </h4> */}
                    {/* <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-1 mb-5 font-light">
                            <label style={{ color: 'plum' }}><b>Licence Key</b></label>
                            <Input

                                type="text"
                                color="blue"
                                value={applk.map((app)=>(
                                    <p key={app.lk}>{app.lk}</p>
                                ))}
                                readonly
                            // placeholder="Licence Key"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <label style={{ color: 'black' }}><b>Validity</b></label>
                            <div className="row">
                              
                            </div>

                        </div>



                    </div> */}

                    <TableContainer component={Paper} style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'> Licence Key</TableCell>
                                    <TableCell align='left'> Validity</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
                                    applklist.map((appl) => (

                                        <TableRow key={appl.lk}>
                                            <TableCell align='center'> {appl.lk}</TableCell>
                                            <TableCell align='left'> {appl.lkexpiry}</TableCell>

                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                </form>

            </div>
        </CardBody>
    </Box>
    );
}
