import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null)

export const AuthContextProvider = ({ children })=>{
    const [user, setUser]= useState({})
    const [initialized, setInitialized] = useState(false)
    const [recents, setActivity] = useState([])
    const [recycles, setRecycles] = useState([])
    const [error, setError] = useState(null)

    const [activityNumber, setActivityNumber] = useState(0)
    const [recycleNumber, setRecycleNumber]= useState(0)
    const [picture, setPicture] = useState(null)
    const authValue = { user, setUser, initialized, setInitialized, recents, setActivity, recycles, setRecycles, error, setError, activityNumber, setActivityNumber, recycleNumber, setRecycleNumber, picture, setPicture }


    return (
        <AuthContext.Provider value={authValue}>
        <>{children}</>
        </AuthContext.Provider>
    )
}

export const useAuthContext =()=> useContext(AuthContext)