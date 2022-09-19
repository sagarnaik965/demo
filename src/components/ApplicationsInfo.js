import React from 'react'
import StatusCard from './StatusCard';
import ChartLine from './ChartLine';
import ChartBar from './ChartBar';
import PageVisitsCard from './PageVisitsCard';
import TrafficCard from './TrafficCard';
import { useEffect, useState } from 'react';
import Piechart from './Piechart';
import Piechart1 from './Piechart1';
import { NavLink, useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import ChartbarFortotal from './ChartbarFortotal';
import ChartbarForYes from './ChartbarForYes';
import ChartbarForNo from './ChartbarForNo';
import TableCard from './TableCard';
import { AppChart } from './AppChart';
const ApplicationsInfo = () => { 
  return (
    <div>
      {/* <div className="bg-light-white-500 px-3 md:px-8 h-40" /> */}
      <Card>
        <CardHeader color="orange" contentPosition="left">
          <h4 className="text-white text-2xl">Transaction Details For Apllication</h4>
        </CardHeader>
        <CardBody>
          {/* <div className="relative h-96"> */}
          <div className="relative ">
          <AppChart />
          </div>
        </CardBody>
      </Card>




    </div>




  );
}

export default ApplicationsInfo;
