import react, { useEffect, useState } from 'react';
import StatusCard from '../components/StatusCard';
import SettingsForm from '../components/SettingsForm';
import ProfileCard from '../components/ProfileCard';
import ChartBar from '../components/ChartBar';
import ChartLine from '../components/ChartLine';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import ChartbarFortotal from '../components/ChartbarFortotal';
import ChartbarForYes from '../components/ChartbarForYes';
import ChartbarForNo from '../components/ChartbarForNo';

export default function Dashboard() {
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Successfull"
                            amount=""
                            percentage=""
                            percentageIcon=""
                            percentageColor=""
                            date="12345678910"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="unSuccessfull"
                            amount=""
                            percentage=""
                            percentageIcon=""
                            percentageColor=""
                            date="12345678910111111"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Total Transaction"
                            amount=""
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="12345678910"
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Total Application"
                            amount=""
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="12345678910"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-16">
                            {/* <SettingsForm /> */}
                            {/* <ChartLine/> */}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                            <Card>
                                <CardHeader color="orange" contentPosition="left">
                                    <h4 className="text-white text-1xl">Transaction details for TOTAL</h4>
                                </CardHeader>
                                <CardBody>
                                    {/* <div className="relative h-96"> */}
                                    <div className="relative ">
                                        <ChartbarFortotal />

                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader color="orange" contentPosition="left">
                                    <h4 className="text-white text-1xl">Transaction details For YES</h4>
                                </CardHeader>
                                <CardBody>
                                    {/* <div className="relative h-96"> */}
                                    <div className="relative ">
                                        <ChartbarForYes />

                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader color="orange" contentPosition="left">
                                    <h4 className="text-white text-1xl">Transaction details for NO</h4>
                                </CardHeader>
                                <CardBody>
                                    {/* <div className="relative h-96"> */}
                                    <div className="relative ">
                                        <ChartbarForNo />

                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
                            {/* <ProfileCard /> */}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                            {/* <ChartBar /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
