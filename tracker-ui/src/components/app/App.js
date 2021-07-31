import { BrowserRouter, Routes, Route } from "react-router-dom"
import SleepTracker from '../sleep/sleep';
import './App.css';
import Home from '../home/home';
import Navbar from '../navbar/navbar';
import Register from "../Register/Register";
import Login from "../Login/Login";
import SleepUnauthorized from "../sleep/sleepUnauthorized";

import { AuthContextProvider, useAuthContext } from "../../Contexts/auth";
import apiClient from "../../services/apiClient";
import { useEffect } from "react";
import Profile from "../Profile/Profile";
import Settings from "../Profile/Settings";
import UserActivities from "../View/recents";



export default function AppContainer(){
    return (
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    )
}

const App = ()=> {

    const {user, setUser, initialized, setInitialized, recents, setActivity, error, setError, activityNumber, setActivityNumber, recycleNumber, setRecycleNumber} = useAuthContext()

    
    //itinnialed by default is false i changed user?.email(true if email is found false if not) to !user?.email(fa)
    const isAuthenticated = Boolean(initialized && !user?.email)
    
    useEffect(() => {
      document.title="Life Tracker"
        const initApp = async () => {
          const { data } = await apiClient.fetchUserFromToken()
          if (data) setUser(data.user)
         
          setInitialized(true)
        }
        const token = localStorage.getItem("beauty_token")
        if (token) {
          apiClient.setToken(token)
          initApp()
        } else {
          setInitialized(true)
        }
      }, [isAuthenticated])
    
      
      
      //Rendering all user had done recently
      useEffect(() => {
        const fetchRecents = async () => {
          const { data, error } = await apiClient.fetchRecents()
          console.log(data)
          if (error) setError(error)
          if (data?.sleeps) {
            //console.log(data.recents)
            setActivity(data.sleeps)
            
            //console.log(data.recents[0].created_at)
          }
        }
        
        fetchRecents()
      }, [])


    //Rendering Number of total activities 
      useEffect(() => {
        
        const ProfileApp = async () => {
            const { data } = await apiClient.fetchNumber()
            if (data)  {
            setActivityNumber(data.activityNumber)
           }   
        }
      ProfileApp()
        }, [setActivityNumber])


        const clearAppState = () => {
        console.log("function is invoking")
        setUser({})
        setError(null)
      }
    
      const logoutUser = async () => {
        await apiClient.logoutUser()
        clearAppState()
      }
    
    return(
        <div className="App">
            <BrowserRouter>
                <Navbar user={user} error={error} isAuthenticated={isAuthenticated} initialized={initialized} logoutUser={logoutUser}/>
                <Routes>
                    <Route path="/sleep" element={ <SleepTracker user={user} setUser={setUser} setActivityNumber={setActivityNumber} setActivity={setActivity} initialized={initialized}/> }/>
                    <Route path="/sleep/sleepUnauthorized" element={ <SleepUnauthorized/> }/>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/register" element={ <Register user={user} setUser={setUser} />}/>
                    <Route path="/login" element={ <Login user={user} setUser={setUser}/>}/>
                    <Route path="/profile" element={ <Profile user={user} logoutUser={logoutUser} activityNumber={activityNumber} setActivityNumber={setActivityNumber} />}/>
                    <Route path="/profile/recents" element={ <UserActivities
                                                                user={user} 
                                                                setUser={setUser}
                                                                recents={recents} 
                                                                activityNumber={activityNumber}
                                                                /> } />
                    <Route path="/profile/settings" element={ <Settings user={user}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}


