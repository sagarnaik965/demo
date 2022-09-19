import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminNavbarLogout from './AdminNavbarLogout';

import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import { AiOutlineHome } from 'react-icons/ai';
import { FiSettings } from "react-icons/fi";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdOutlineExpandMore } from "react-icons/md";
import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdGroups } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import Navbar from './Navbar';
import { useSelector } from 'react-redux';



export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    let { authStore } = useSelector((state) => state);
    return (

        <>

            {!authStore.loginStatus && 

            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />

            }

            {authStore.loginStatus &&

                <AdminNavbarLogout
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />

            }

            <div
                className={`h-screen fixed top-0 md:left-0 sm:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="http://localhost:3000/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <H6 color="gray">Department Portal</H6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />                    



                        <ul className="flex-col min-w-full flex list-none">
                            
                        {/* <li className="rounded-lg mb-4 mt-2">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdOutlineExpandMore />}
                            >
                                <Typography>
                                    <NavLink
                                        to="/"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <AiOutlineHome />
                                        Dashboard
                                    </NavLink>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Settings
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        </li> */}


                            <li className="rounded-lg mb-4 mt-2">
                                <NavLink
                                    // to={`/${authStore.deptId}/${authStore.role}`}
                                    to={`/${localStorage.getItem("DeptIdLS")}/${localStorage.getItem("RoleLS")}`}
                                    

                                    // to="/ECI0001"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="dashboard" size="2xl" /> */}
                                    <AiOutlineHome />
                                    Dashboard
                                </NavLink>
                            </li>



                            {/* <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/settings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FiSettings />
                                    Settings
                                </NavLink>
                            </li> */}

                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/appdetails"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="settings" size="2xl" /> */}
                                    <MdGroups />

                                    Application Details
                                </NavLink>
                            </li>


                            {/* <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/tables"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Menu iconShape="square">
                                        <MenuItem >    </MenuItem>
                                        <SubMenu title="Tables"  >
                                            <MenuItem>
                                                <li className="rounded-lg mb-2">
                                                    <NavLink
                                                        to="/appdetails"
                                                        className="flex items-center gap-4 text-sm text-white-700 font-light px-4 py-3 rounded-lg"
                                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                                    >
                                                        <FiSettings />
                                                        Settings
                                                    </NavLink>
                                                </li>
                                            </MenuItem>
                                        </SubMenu>
                                    </Menu>
                                </NavLink>


                            </li> */}

                           
                            


                        {authStore.role=="1" && 
                        
                        <li className="rounded-lg mb-4 mt-2">
                        <NavLink
                            to="/reports"
                            exact
                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                        >
                            {/* <Icon name="dashboard" size="2xl" /> */}
                            <TbReport />
                            Report
                        </NavLink>
                    </li>
                        }

                    <li className="rounded-lg mb-4 mt-2">
                        <NavLink
                            to="/rolestesting"
                            exact
                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                        >
                            {/* <Icon name="dashboard" size="2xl" /> */}
                            <TbReport />
                            Roles Test
                        </NavLink>
                    </li>

                    <li className="rounded-lg mb-4 mt-2">
                        <NavLink
                            to="/rolestesting"
                            exact
                            className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                            activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                        > 
                            {/* <Icon name="dashboard" size="2xl" /> */}
                            <TbReport />
                           Test
                        </NavLink>
                    </li>


                           

                           


                            </ul>



                        {/* <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                                <a
                                    href="https://material-tailwind.com/documentation/quick-start"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="description" size="2xl" />
                                    Documentation
                                </a>
                            </li>
                            <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                                <a
                                    href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-4 text-sm font-light py-3"
                                >
                                    Free Download
                                </a>
                            </li>
                        </ul> */}



                    </div>
                </div>
            </div>
        </>
    );
}
