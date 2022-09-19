import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Maps from './pages/Maps';
import Footer from './components/Footer';
import Report from './pages/Report';
import Reports from './pages/Reports'


// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';

import ApplicationDetails from './components/ApplicationDetails';
import ApplicationsInfo from './components/ApplicationsInfo';

import SideNav from './components/SideNav';
import AppDetails from './components/AppDetails';
import RolesDemo from './components/RolesDemo';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import RoleTest from './pages/RoleTest';

function App() {
    
    return (
        <>
            <Sidebar />
            {/* <SideNav /> */}
            <div className="md:ml-64">
                <Switch>
                <Route exact path="/" component={Dashboard} />

                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    
                    <Route exact path="/appdetails" component={AppDetails  } />
                    <Route exact path="/report" component={Report } />
                    <Route exact path="/reports" component={Reports} />
                    <Route exact path="/login" component={Login} />
                    

                    

                    <Route exact path="/rolesdemo" component={RolesDemo} />
                    <Route exact path="/rolestesting" component={RoleTest} />
                    <Route exact path="/:deptcode/:roles" component={Dashboard} />


                    {/* <Route
                        path="/rolesdemo"
                        element={
                            <ProtectedRoute>
                                <RolesDemo />
                            </ProtectedRoute>
                        }
                    /> */}


                    <Route exact path="/applicationDetails" component={ApplicationDetails} />
                    <Route exact path="/applicationinfo/:appcode" component={ApplicationsInfo} />


                    {/* <Redirect from="*" to="/" /> */}
                </Switch>
                {/* <Footer /> */}
            </div>
        </>
    );
}

function ProtectedRoute({ children }) {
    let { authStore } = useSelector((state) => state);
  
    if (!authStore.loginStatus) {
      return <Redirect to="/" replace={true} />;
    }
  
    return children;
  }

export default App;
