import { useEffect, useState } from "react";


import DatePicker from "react-datepicker";
import { CSVLink, CSVDownload } from "react-csv";
import "react-datepicker/dist/react-datepicker.css";
// import { Button } from "@material-tailwind/react";
import Button from '@mui/material/Button';


import {
  AccordionHeader,
  AccordionBody, Alert, Accordion, Heading2,
  // Button
} from "@material-tailwind/react";
import BasicGrid from "../components/BasicGrid";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';





const Report = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [LastDate, setLastDate] = useState(new Date());

  let [MonthlyMonth, setMonthlyMonth] = useState("JAN");
  let [MonthlyYear, setMonthlyYear] = useState("2022");
  let [quarterlyQuarter, setQuarterlyQuarter] = useState("JAN");
  let [quarterlyYear, setQuarterlyYear] = useState("2022");
  let [yearlyYear, setyearlyYear] = useState("2022");
  let [customfdate, setcustomfdate] = useState("9-7-2022");
  let [customtdate, setcustomtdate] = useState("9-7-2022");

  let [monthlycsvdata, setMonthlycsvdata] = useState([[]]);

  let [monthlycsvdataflag, setMonthlycsvdataflag] = useState(true);
  let [quaterlycsvdataflag, setQuaterlycsvdataflag] = useState(true);
  let [yearlycsvdataflag, setYearlycsvdataflag] = useState(true);
  let [customcsvdataflag, setCustomcsvdataflag] = useState(true);


  let [yearlycsvdata, setYearlycsvdata] = useState([[]]);
  let [quaterltcsvdata, setQuaterltcsvdata] = useState([[]]);
  let [customcsvdata, setCustomcsvdata] = useState([[]]);




  const monthlyreportsummary = (event) => {
    const fdate = startDate.toLocaleDateString().replaceAll("/","-");  
    const ldate = LastDate.toLocaleDateString().replaceAll("/","-");
  
    setMonthlycsvdataflag(false)
    let type = "custom"
    const txnforNo = () => {
      fetch("http://localhost:8082/dept/reportsdownload/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + fdate + "/" + ldate + "/")
        .then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          setMonthlycsvdata(res)
          console.log("data", res)
        }).catch(e => {
          console.log("error", e)
        })
    }
    txnforNo();
    // const repo={
    //   "type":"custom",
    // "fDate":startDate,
    // "selectMonthlyMonth":MonthlyMonth,
    // "selectMonthlyYear":MonthlyYear,
    // "selectQuarterlyQuarter":quarterlyQuarter,
    // "selectQuarterlyYear":quarterlyYear,
    // "selectYearlyYear":yearlyYear,
    // "tdate":LastDate
    // }
    // let demo = JSON.stringify(repo);
    // console.log(JSON.parse(demo));
    // fetch("http://localhost:8082/demo/", {
    //   method: 'POST',
    //   headers: { 'Content-type': 'application/json' },
    //   body: JSON.stringify({
    //     "y": 200,
    //     "label": "aaaaaa"
    // })
    // })
    // .then(response => console.log(response))
    // // .then(response => console.log(response.json()))
    // .then(response => console.log(response))
    // .then(response => console.log(response))
    // .catch(data => console.log(data));

    // setTimeout(() => {
    //   setMonthlycsvdataflag(true)

    // }, 3000);
    event.preventDefault();
  }



  const quaterlyreportsummary = (event) => {
    const fdate = startDate.toLocaleDateString().replaceAll("/","-");  
    const ldate = LastDate.toLocaleDateString().replaceAll("/","-");
    setQuaterlycsvdataflag(false);


    let type = "threemonth"
    const txnforNo = () => {
      fetch("http://localhost:8082/dept/reportsdownload/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + fdate + "/" + ldate + "/")

      // fetch("http://localhost:8082/dept/reportsdownload/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + customfdate + "/" + customtdate + "/")
        .then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          setQuaterltcsvdata(res)
          console.log("data", res)
        }).catch(e => {
          console.log("error", e)
        })
    }
    txnforNo();
    event.preventDefault();
  }

  const yealryreportsummary = (event) => {
    const fdate = startDate.toLocaleDateString().replaceAll("/","-");  
    const ldate = LastDate.toLocaleDateString().replaceAll("/","-");
    setYearlycsvdataflag(false);

    let type = "sixmonth"
    const txnforNo = () => {
      fetch("http://localhost:8082/dept/reportsdownload/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + fdate + "/" + ldate + "/")

      // fetch("http://localhost:8082/dept/reportsdownload/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + customfdate + "/" + customtdate + "/")
        .then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          setYearlycsvdata(res)
          console.log("data", res)
        }).catch(e => {
          console.log("error", e)
        })
    }
    txnforNo();
    event.preventDefault();
  }

  const customreportsummary = (event) => {
    const fdate = startDate.toLocaleDateString().replaceAll("/","-");  
    const ldate = LastDate.toLocaleDateString().replaceAll("/","-");
    setCustomcsvdataflag(false);


    let type = "other"
    const txnforNo = () => {
      fetch("http://localhost:8082/dept/reportsdownload/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + fdate + "/" + ldate + "/")

      // fetch("http://localhost:8082/dept/reportsdownload/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + customfdate + "/" + customtdate + "/")
        .then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          setCustomcsvdata(res)
          console.log("data", res)
        }).catch(e => {
          console.log("error", e)
        })
    }
    txnforNo();
    event.preventDefault();
  }










  // const quaterlyreportsummary = (event) => {
  //   let type = "threemonth"
  //   const txnforNo = () => {
  //     fetch("http://localhost:8082/demo/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + customfdate + "/" + customtdate + "/")
  //       .then((data) => {
  //         const res = data.json();
  //         return res
  //       }).then((res) => {
  //         setQuaterltcsvdata(res)
  //         console.log("data", res)
  //       }).catch(e => {
  //         console.log("error", e)
  //       })
  //   }
  //   txnforNo();
  //   alert("Thanks for reaching us!!")
  //   event.preventDefault();
  // }

  // const yealryreportsummary = (event) => {
  //   let type = "sixmonth"
  //   const txnforNo = () => {
  //     fetch("http://localhost:8082/demo/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + customfdate + "/" + customtdate + "/")
  //       .then((data) => {
  //         const res = data.json();
  //         return res
  //       }).then((res) => {
  //         setYearlycsvdata(res)
  //         console.log("data", res)
  //       }).catch(e => {
  //         console.log("error", e)
  //       })
  //   }
  //   txnforNo();
  //   alert("Thanks for reaching us!!")
  //   event.preventDefault();
  // }

  // const customreportsummary = (event) => {
  //   let type = "other"
  //   const txnforNo = () => {
  //     fetch("http://localhost:8082/demo/" + type + "/" + MonthlyMonth + "/" + MonthlyYear + "/" + quarterlyQuarter + "/" + quarterlyYear + "/" + yearlyYear + "/" + customfdate + "/" + customtdate + "/")
  //       .then((data) => {
  //         const res = data.json();
  //         return res
  //       }).then((res) => {
  //         setCustomcsvdata(res)
  //         console.log("data", res)
  //       }).catch(e => {
  //         console.log("error", e)
  //       })
  //   }
  //   txnforNo();
  //   alert("Thanks for reaching us!!")
  //   event.preventDefault();
  // }




  function addDays(date, d) {
    // alert(date+" "+d)
    return (new Date() - d)
  }

  function getDate(e) {
    alert(startDate.toLocaleDateString())
    // alert(startDate.toLocaleString())

  }

  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];

  // const csvData = [
  //   { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  //   { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  //   { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
  // ];

  const [date, setDate] = useState(new Date());



  // -----------------------------------------------------------
  function selectMonthlyMonth(event) {
    alert(event.target.value)
    setMonthlyMonth(event.target.value)

  }

  function selectMonthlyYear(event) {
    alert(event.target.value)
    setMonthlyYear(event.target.value)

  }

  // -----------------------------------------------------------
  function selectQuarterlyQuarter(event) {
    alert(event.target.value)
    setQuarterlyQuarter(event.target.value)
  }

  function selectQuarterlyYear(event) {
    alert(event.target.value)
    setQuarterlyYear(event.target.value)
  }

  function selectYearlyYear(event) {
    alert(event.target.value)
    setyearlyYear(event.target.value)
  }


  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  }




  return (
    <div>






      <div className="bg-light-white-500 px-3 md:px-8 h-40" >
        <Alert color="grey"><Heading2>Report Management</Heading2></Alert>

        {/* <CSVLink
       data={csvData}
       filename={"my-file.csv"}
       className="btn btn-primary">
       <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Download</button>
     </CSVLink> */}



        {/* <CSVLink data={monthlycsvdata}>Download me</CSVLink>; */}
        {/* <CSVDownload data={csvData} target="_blank" value="DOwnLoad"/> */}

        {/* <CSVLink data={array} separator={";"}>
      Download me
     </CSVLink> */}

        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div>
              <label style={{ width: '55px', float: 'left', color: '#797979', marginLeft: '18px' }} >Month</label>
              <select style={{ width: '167px', float: 'left' }}
                onChange={e => setMonthlyMonth(e.target.value)}
                className="form-control" id="selectMonthlyMonth" name="selectMonthlyMonth">
                <option value="JAN">January</option>
                <option value="FEB">February</option>
                <option value="MAR">March</option>
                <option value="APR">April</option>
                <option value="MAY">May</option>
                <option value="JUN">June</option>
                <option value="JUL">July</option>
                <option value="AUG">August</option>
                <option value="SEP">September</option>
                <option value="OCT">October</option>
                <option value="NOV">November</option>
                <option value="DEC">December</option>
              </select>
            </div>

          </Grid>
          <Grid item xs={4}>
            <div>

              <label
                style={{ width: '42px', float: 'left', marginLeft: '18px', color: '#797979' }}
              >Year</label>
              <select style={{ width: '150px', float: 'left' }}
                // onChange={e => selectMonthlyMonth(e)}
                onChange={e => setMonthlyYear(e.target.value)}
                className="form-control" id="selectMonthlyYear" name="selectMonthlyYear">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
            </div>

          </Grid>
          <Grid item xs={4}>
            <div>

              {monthlycsvdataflag ? <>
                <Button size="large" color="warning" variant="outlined" onClick={monthlyreportsummary}>Generate Monthly Report</Button>

              </> :
                <CSVLink data={monthlycsvdata}
                  filename={MonthlyMonth + " " + MonthlyYear}

                >
                  <Button color="success" variant="contained" onClick={(e) => setMonthlycsvdataflag(true)}>Download</Button>
                </CSVLink>
              }</div>

          </Grid>
        </Grid>



        {/* 
       <label style={{ width: '55px', float: 'left', color: '#797979' }} >Month</label>
       <select style={{ width: '167px', float: 'left' }}
         onChange={e => setMonthlyMonth(e.target.value)}
         className="form-control" id="selectMonthlyMonth" name="selectMonthlyMonth">
         <option value="JAN">January</option>
         <option value="FEB">February</option>
         <option value="MAR">March</option>
         <option value="APR">April</option>
         <option value="MAY">May</option>
         <option value="JUN">June</option>
         <option value="JUL">July</option>
         <option value="AUG">August</option>
         <option value="SEP">September</option>
         <option value="OCT">October</option>
         <option value="NOV">November</option>
         <option value="DEC">December</option>
       </select> 
       
       <label
         style={{ width: '42px', float: 'left', marginLeft: '18px', color: '#797979' }}
       >Year</label>
       <select style={{ width: '150px', float: 'left' }}
         onChange={e => setMonthlyYear(e.target.value)}
         className="form-control" id="selectMonthlyYear" name="selectMonthlyYear">
         <option value="2022">2022</option>
         <option value="2021">2021</option>
         <option value="2020">2020</option>
         <option value="2019">2019</option>
         <option value="2018">2018</option>
         <option value="2017">2017</option>
       </select>
      
       <br></br>
       {monthlycsvdataflag ? <>
         <Button variant="outlined"onClick={monthlyreportsummary}>Generate Monthly Report</Button>

       </>  :  
       <CSVLink data={monthlycsvdata} 
       filename={MonthlyMonth+" "+MonthlyYear}

       >
       <Button variant="outlined" onClick={(e)=>setMonthlycsvdataflag(true)}>Download</Button>
         </CSVLink>
        } */}


        <br></br>

        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div>
              <label
                style={{ width: '55px', float: 'left', color: '#797979', marginLeft: '18px' }}  >Quarter</label>
              <select
                style={{ width: '168px', float: 'left' }}
                className="form-control"
                id="selectQuarterlyQuarter"
                name="selectQuarterlyQuarter"
                onChange={(e) => setQuarterlyQuarter(e.target.value)}
              >
                <option value="JAN">January-March</option>
                <option value="APR">April-June</option>
                <option value="JUL">July-September</option>
                <option value="OCT">October-December</option>
              </select>
            </div>


          </Grid>
          <Grid item xs={4}>
            <div>
              <label
                style={{ width: '60px', float: 'left', paddingLeft: '20px', color: '#797979' }} >Year</label>
              <select style={{ width: '150px', float: 'left' }}
                className="form-control" id="selectQuarterlyYear"
                name="selectQuarterlyYear"
                onChange={(e) => setQuarterlyYear(e.target.value)}
              >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
            </div>

          </Grid>
          <Grid item xs={4}>
            <div>
              {quaterlycsvdataflag ? <>
                <Button size="large" color="warning" variant="outlined" onClick={quaterlyreportsummary}>Generate Quaterly Report</Button> </> : <CSVLink data={quaterltcsvdata} filename={quarterlyQuarter + " " + quarterlyYear}> <Button color="success" variant="contained" onClick={(e) => setQuaterlycsvdataflag(true)}>Download</Button> </CSVLink>
              }
            </div>

          </Grid>
        </Grid>



        <br></br>


        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div>
              <label
                style={{ width: '60px', float: 'left', paddingLeft: '0px', color: '#797979', marginLeft: '18px' }}>Year</label>
              <select
                style={{ width: '150px', float: 'left' }}
                className="form-control"
                id="selectYearlyYear"
                name="selectYearlyYear"
                onChange={e => { setyearlyYear(e.target.value) }}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
            </div>
          </Grid>
          <Grid item xs={4}>


          </Grid>
          <Grid item xs={4}>
            <div>
              {yearlycsvdataflag ? <>
                <Button size="large" color="warning" variant="outlined" onClick={yealryreportsummary}>Generate Yearly Report &nbsp;&nbsp;</Button>

              </> :
                <CSVLink data={yearlycsvdata}
                  filename={yearlyYear}

                >
                  <Button color="success" variant="contained" onClick={(e) => setYearlycsvdataflag(true)}>Download</Button>
                </CSVLink>
              }

            </div>

          </Grid>
        </Grid>


        <br></br>

        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div style={{ marginLeft: '18px' }}>
              <label style={{ width: '55px', float: 'left', color: '#797979' }}>From</label>
              <DatePicker

                selected={startDate}
                onChange={(date) => setStartDate(date)}
                maxDate={addDays(new Date(), 5)}
                placeholderText="Select a date before 5 days in the future"
              />

            </div>

          </Grid>
          <Grid item xs={4}>

            <div style={{ marginLeft: '18px' }}>
              <label
                style={{ width: '60px', float: 'left', paddingLeft: '0px', color: '#797979', }}>To</label>

              <DatePicker
                selected={LastDate}
                onChange={(date) => setLastDate(date)}
                maxDate={addDays(new Date(), 5)}
                placeholderText="Select a date before 5 days in the future"
              />

            </div>

          </Grid>
          <Grid item xs={4}>
            <div>
              {customcsvdataflag ? <>
                <Button size="large" color="warning" variant="outlined" onClick={customreportsummary}>Generate Custom Report</Button>

              </> :
                <CSVLink data={customcsvdata}
                  filename="CustomReport"
                >
                  <Button color="success" variant="contained" onClick={(e) => setCustomcsvdataflag(true)}>Download</Button>
                </CSVLink>
              }

            </div>

          </Grid>
        </Grid>

        <br></br>
        <br></br>
        <br></br>



      </div>


    </div>
  );
}

export default Report
