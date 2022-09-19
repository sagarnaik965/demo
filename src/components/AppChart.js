import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // indexAxis: 'y',

//   scales: {
//     x: {
//         stacked: true
//     },
//     y: {
//         stacked: true,
//         barPercentage: 0.4
//     }
// },


  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100,
        barPercentage: 0.4

        }
      }
    ]
  },
  responsive: true,
  // plugins: {
  //   legend: {
  //     // position: 'top' as const,
  //   },
  //   title: {
  //     display: true,
  //   //   text: "Chart.js Bar Chart"
  //   },  
    
  // }
};

const labels = ["getrefnum", "getuid", "activate", "struid", "deactivate"];
const d1=[];

export function AppChart() {

const[no,setNo] = useState([]);
const[yes,setYes] = useState([]);
const[txnforTotal,setTotal] = useState([]);



    const data = {    
        labels,
        datasets: [
          {
            label: "Successfull",
            data: no,
            backgroundColor:  '#0DC818'
          },
          {
            label: "Un Successfull ",
            data: yes,
            backgroundColor:  '#E74C3C',
          },
          {
            label: "Total",
            data: txnforTotal,
            backgroundColor: '#F4D03F',
          }
        ],
        borderWidth: 0.1,
        
      };
const {appcode} = useParams();

    useEffect(()=> {
        const txnforNo = () =>  {
          // fetch("http://localhost:8082/applicationwisedataNo/"+appcode)
          fetch("http://localhost:8082/dept/applicationwisedataNo/"+appcode)

          .then((data) => {
            const res = data.json();
            return res
          }).then((res) => {
            console.log("resss", res)
            var label = [];
            var data = [];
            for(var i of res) {
                label.push(i.label);
                data.push(i.y)
            }
            setNo(data);
          
    
          }).catch(e => {
            console.log("error", e)
          }) 
        }
      txnforNo();

      const txnforYes = () =>  {
        // fetch("http://localhost:8082/applicationwisedataYes/"+appcode)
        fetch("http://localhost:8082/dept/applicationwisedataYes/"+appcode)

        .then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          console.log("resss", res)
          var label = [];
          var data = [];
          for(var i of res) {
              label.push(i.label);
              data.push(i.y)
          }
          setYes(data);
        
  
        }).catch(e => {
          console.log("error", e)
        }) 
      }
    txnforYes();

    const txnforTotal = () =>  {
        // fetch("http://localhost:8082/applicationwisedata/"+appcode)
        fetch("http://localhost:8082/dept/applicationwisedata/"+appcode)
        .then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          console.log("resss", res)
          var label = [];
          var data = [];
          for(var i of res) {
              label.push(i.label);
              data.push(i.y)
          }
          setTotal(data); 
        }).catch(e => {
          console.log("error", e)
        }) 
      }
    txnforTotal();
      }, [])
  return <Bar options={options} data={data} />;
}
