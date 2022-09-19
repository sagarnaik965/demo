import react from 'react';
import StatusCard from '../components/StatusCard';
import ChartLine from '../components/ChartLine';
import ChartBar from '../components/ChartBar';
import PageVisitsCard from '../components/PageVisitsCard';
import TrafficCard from '../components/TrafficCard';
import { useEffect, useState } from 'react';
import Piechart from '../components/Piechart';
import Piechart1 from '../components/Piechart1';
import { NavLink, useParams } from 'react-router-dom';
import { AppChart } from '../components/AppChart';
import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import { FiSettings } from "react-icons/fi";
import { cgPoll } from "react-icons/cg";
import { BiPoll,BiGroup } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import {loginApiAction, setActivityAction, setDeptidAction, setRoleAction} from '../store/authslice';
import { Button } from '@mui/material';


export default function Dashboard() {


    const [succesfullcount, setsuccesfullcount] = useState(10);
    const [unsuccesfullcount, setunsuccesfullcount] = useState(20);
    const [totalac, setTotalac] = useState(0);
    const [Activity, setActivity] = useState([
        "USER_CREATION",
        "MANAGE_SAUA",
        "RESEND_ACCOUNT_ACTIVATION_LINK",
        "UPDATE_AUA_LICENSE_KEY",
        "UPDATE_KUA_LICENSE_KEY",
        "TRANSACTION_SPECIFIC_REPORT",
        "TRANSACTION_SUMMARY_REPORT_AUA",
        "SUSPEND_SAUA",
        "GENERATE_LICENSE_KEY",
        // "UPDATE_PROFILE"
    ]);

    const [role, setrole] = useState("");
    const {deptcode} = useParams();
    const {roles} = useParams();

    let { authStore } = useSelector((state) => state);
    let dispatch = useDispatch();
    
   
    

   
    if( localStorage.getItem('DeptIdLS')=="" && authStore.deptId=="")
    {        
        dispatch(loginApiAction());
        localStorage.setItem('DeptIdLS', deptcode);  
        localStorage.setItem('ActivityLS', Activity);        

        dispatch(setDeptidAction(deptcode));   
        dispatch(setActivityAction(Activity)); 
        
    }

    if(localStorage.getItem('RoleLS')=="" && authStore.role=="")
    {            
        localStorage.setItem('RoleLS', roles);     
        dispatch(setRoleAction(roles));
       
    }
   


    useEffect(() => {
        //it check wheather role is there or not         
        // dispatch(setDeptidAction("ECI0001"));
        // dispatch(setRoleAction(role));
        // fetch("http://localhost:8082/dept/getRoles")
        // .then((response) => response.json())
        // .then((actualData) => setActivity(actualData))
        // // .then((actualData) => console.log(actualData))
        // .catch((err) => {
        //     console.log(err.message);
        // });
      

        

        // fetch("http://localhost:8082/homepagesuccesscount")
        fetch("http://localhost:8082/dept/homepagesuccesscount")

            .then((response) => response.json())
            .then((actualData) => setsuccesfullcount(actualData))
            // .then((actualData) => console.log(actualData))
            .catch((err) => {
                console.log(err.message);
            });

        // fetch("http://localhost:8082/totalerrorcount")
        fetch("http://localhost:8082/dept/totalerrorcount")

            .then((response) => response.json())
            .then((actualData) => setunsuccesfullcount(actualData))
            // .then((actualData) => console.log(actualData))
            .catch((err) => {
                console.log(err.message);
            });

        // fetch("http://localhost:8082/totalaccountdeptwise")
        fetch("http://localhost:8082/dept/totalaccountdeptwise")

            .then((response) => response.json())
            .then((actualData) => setTotalac(actualData))
            // .then((actualData) => console.log(actualData))
            .catch((err) => {
                console.log(err.message);
            });

        // fetch("http://localhost:8082/dept/role/"+authStore.deptid)
        // fetch("http://localhost:8082/dept/role")

        // .then((response) => response.json())
        // .then((actualData) => setrole(actualData)        
        // )
        // // .then((actualData) => console.log(actualData))
        // .catch((err) => {
        //     console.log(err.message);
        // });
    });
    var total = succesfullcount + unsuccesfullcount;
    return (
        <>
        {/* <h1>{authStore.role}</h1> */}
         <h1>{authStore.deptId}</h1>
         <h1>{authStore.role}</h1>



            <div className="bg-light-white-500 px-3 md:px-8 h-40" />
            <div className="grid grid-cols-1 xl:grid-cols-6">
            </div>

            <div className="px-3 md:py-5 -mt-24">
                <div className="container mx-auto max-w-full">

                    <div className="grid grid-cols-1 xl:grid-cols-5">

                        <div className="xl:col-start-1 xl:col-end-3 px-4 mb-14">
                            <h2 className="text- text-2xl">Transaction Details</h2>
                            <br></br>
                            <br></br>
                            <div className="px-4 mb-10">
                                <Card>
                                    <CardRow>
                                        <CardHeader color="green" iconOnly className="mb-0">
                                            {/* <Icon name={icon} size="3xl" color="white" /> */}
                                            <BiPoll size={'40px'} />
                                        </CardHeader>
                                        <CardStatus title="Succesfull" amount={succesfullcount} />
                                    </CardRow>
                                </Card>
                            </div>

                            <div className="px-4 mb-10">
                                <Card>
                                    <CardRow>
                                        <CardHeader color="red" iconOnly className="mb-0">
                                            {/* <Icon name={icon} size="3xl" color="white" /> */}
                                            <BiPoll size={'40px'} />
                                        </CardHeader>
                                        <CardStatus title="unsuccesfull" amount={unsuccesfullcount} />
                                    </CardRow>
                                </Card>
                            </div>

                            <div className="px-4 mb-10">
                                <Card>
                                    <CardRow>
                                        <CardHeader color="orange" iconOnly className="mb-0">
                                            {/* <Icon name={icon} size="3xl" color="white" /> */}
                                            <BiPoll size={'40px'} />
                                        </CardHeader>
                                        <CardStatus title="total" amount={total} />
                                    </CardRow>
                                </Card>
                            </div>

                            <NavLink to="/applicationDetails">

                            <div className="px-4 mb-10">
                                <Card>
                                    <CardRow>
                                        <CardHeader color="blue" iconOnly className="mb-0">
                                            {/* <Icon name={icon} size="3xl" color="white" /> */}
                                            <BiGroup size={'40px'} />
                                        </CardHeader>
                                        <CardStatus title="Applications wise details" amount={totalac} />
                                    </CardRow>
                                </Card>
                            </div>
                            </NavLink>

                            {/* <StatusCard
                                color="green"
                                icon="cgPoll"

                                title="Succesfull"
                                amount={succesfullcount}
                                // amount="10000000000011"

                                percentage=""
                                percentageIcon=""
                                percentageColor=""
                                date=""
                            /> */}
                            {/* <StatusCard
                                color="red"
                                icon="polls"
                                title="UnSuccesfull"
                                amount={unsuccesfullcount}
                                percentage=""
                                percentageIcon=""
                                percentageColor="red"
                                date=""
                            /> */}
                            {/* <StatusCard
                                color="orange"
                                icon="polls"
                                title="  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total"
                                amount={total}
                                percentage=""
                                percentageIcon=""
                                percentageColor="orange"
                                date=""
                            /> */}


                            {/* <StatusCard
                            color="orange"
                            icon="groups"
                            title="Application Counts"
                            amount={totalac}
                            percentage=""
                            percentageIcon=""
                            percentageColor=""
                            date=""
                        />                        */}
                        </div>

                        <div className="xl:col-start-3 xl:col-end-6 px-4 mb-14">
                            <h2 className="text- text-2xl">Operation wise Trasanctions</h2>
                            <br></br>
                            <br></br>

                            <Piechart1 />


                        </div>

                    </div>
                </div>
            </div>




            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            {/* <ChartBar /> */}
                            {/* <Piechart/> */}




                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
