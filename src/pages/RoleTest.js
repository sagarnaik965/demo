import React from 'react'
import { useSelector } from 'react-redux'

const RoleTest = () => {
    let { authStore } = useSelector((state) => state);
    let DeptIdLs = localStorage.getItem('DeptIdLS')
    let Roles = localStorage.getItem('RoleLS')
    let activities  = authStore.activity;

   


  return ( 
    <div>
{authStore.role} 
<br></br>
{DeptIdLs}
<br></br>
{Roles}
<br></br>





<hr></hr>
{/* {JSON.stringify(authStore.activity)} */}
<hr></hr>
{authStore.activity.includes("USER_CREATION") && <h1> yes yous can <b> USER_CREATION</b> </h1>  } 
{authStore.activity.includes("create") && <h1> yes yous can   <b> MANAGE of SAUA</b></h1>  } 
{authStore.activity.includes("GENERATE_LICENSE_KEY") && <h1> yes yous can   <b> GENERATE LICENSE KEY</b>  </h1>  } 
{authStore.activity.includes("update")  && <h1>4 update  </h1>  } 
{authStore.activity.includes("UPDATE_PROFILE") && <h1>yes yous can   <b> UPDATE PROFILE </b></h1>  } 

<br></br>
<br></br>
<br></br>
<br></br>

<hr></hr>
<hr></hr>
{/* 
USER_CREATION
MANAGE_SAUA
RESEND_ACCOUNT_ACTIVATION_LINK
UPDATE_AUA_LICENSE_KEY
UPDATE_KUA_LICENSE_KEY
TRANSACTION_SPECIFIC_REPORT
TRANSACTION_SUMMARY_REPORT_AUA
SUSPEND_SAUA
GENERATE_LICENSE_KEY
UPDATE_SA_LICENSE_KEY
TRANSACTION_SUMMARY_REPORT_SAUA
GENERATE_SA_LICENSE_KEY
MANAGE_SA
SUSPEND_SA
WEBCLIENT_OPERATIONS
GENERATE_SA_CODE
UPDATE_PROFILE
       */}
      

    </div>
  )
}

export default RoleTest
