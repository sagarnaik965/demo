import { createSlice } from "@reduxjs/toolkit";
localStorage.setItem('DeptIdLS',"");
localStorage.setItem('RoleLS',"");
// localStorage.setItem('ActivityLS',"");



const authSlice = createSlice({
  name: "authStore",
  initialState: {
    loginStatus: false,
    deptId:localStorage.getItem('DeptIdLS'),
    role:localStorage.getItem('RoleLS'),
    activity:localStorage.getItem('ActivityLS')
  //   activity:[
  //     "USER_CREATION",
  //     "MANAGE_SAUA",
  //     "RESEND_ACCOUNT_ACTIVATION_LINK",
  //     "UPDATE_AUA_LICENSE_KEY",
  //     "UPDATE_KUA_LICENSE_KEY",
  //     "TRANSACTION_SPECIFIC_REPORT",
  //     "TRANSACTION_SUMMARY_REPORT_AUA",
  //     "SUSPEND_SAUA",
  //     "GENERATE_LICENSE_KEY",
  //     "UPDATE_SA_LICENSE_KEY",
  //     "TRANSACTION_SUMMARY_REPORT_SAUA",
  //     "GENERATE_SA_LICENSE_KEY",
  //     "MANAGE_SA",
  //     "SUSPEND_SA",
  //     "WEBCLIENT_OPERATIONS",
  //     "GENERATE_SA_CODE",
  //     "UPDATE_PROFILE"
  // ]
  },
  reducers: {
    loginAction: (state) => {
      state.loginStatus = true; 
    },
    logoutAction: (state) => {
      state.loginStatus = false;
    },
    setDeptid:(state,action)=>{
      // alert("setDeptid "+action.payload)
      state.deptId=action.payload; 
    },
    setRole:(state,action)=>{
      // alert("setDeptid "+action.payload)
      state.role=action.payload;
    },

    setActivity:(state,action)=>{
      // alert("setDeptid "+action.payload)
      state.activity=action.payload;
    }
  },
});




export const setRoleAction = (payload) => {
  return async (dispatch) => {
    dispatch(setRole(payload));
  };
};


export const setDeptidAction = (payload) => {
  return async (dispatch) => {
    
    dispatch(setDeptid(payload));
  };
};

export const loginApiAction = (payload) => {
  return async (dispatch) => {
    // LOGIN API
    // ...more logcal operation

    // finally update the redux state
    dispatch(loginAction());
  };
};


export const setActivityAction = (payload) => {
  return async (dispatch) => {
    // LOGIN API
    // ...more logcal operation

    // finally update the redux state
    dispatch(setActivity(payload));
  };
};



export const logoutApiAction = (payload) => {
  return async (dispatch) => {
    // LOGOUT API
    // ...more logcal operation
    // finally update the redux state
    dispatch(logoutAction());
  };
};

export const { loginAction, logoutAction,setDeptid ,setRole ,setActivity } = authSlice.actions;
export default authSlice.reducer;
