import { TabContent, TabList } from "@material-tailwind/react";
import { Box, Table, TableRow } from "@mui/material";
import React from "react";
import { MdSettingsApplications } from 'react-icons/md'
import Grid from '@mui/material/Grid';
import{Item} from '@mui/material';
import {FcCheckmark} from'react-icons/fc';
import { FcCancel } from "react-icons/fc";

export default function AllowedOperations({Operations}) {
    return (
        <>
             <Grid container spacing={1} style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}>
                                    <Grid item xs={4}>
                                        <div align="center"><b>Get Store UID
                                            {
                                                Operations.map((appl) => (
                                                    appl.is_struid == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div align="center"><b>Get Reference Number
                                            {
                                                Operations.map((appl) => (
                                                    appl.is_getrefnum == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div align="center"><b>Get UID
                                            {
                                                Operations.map((appl) => (
                                                    appl.is_getuid == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div align="center"><b>Activate
                                            {
                                                Operations.map((appl) => (
                                                    appl.is_activate == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div align="center"><b>Deactivate
                                            {
                                                Operations.map((appl) => (
                                                    appl.is_deactivate == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <br></br>
                                </Grid>
        </>

    );
}