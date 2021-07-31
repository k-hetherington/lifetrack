import "./Profile.css"
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { Button } from "@material-ui/core"
import { useNavigate } from "react-router"
import SimpleModal from "./Popup"
import { Link } from "react-router-dom"

export default function Profile({user, logoutUser, activityNumber, setActivityNumber}) {
    setActivityNumber(activityNumber)
    console.log(user.profile_pic)
    const navigate = useNavigate()
    


    const handleOnLogout = async ()=>{
        await logoutUser()
        navigate("/")
    }
    const handleOnClick =  () =>{
        navigate("/profile/settings")
    }
    const goToRecents = ()=>{
        navigate("/profile/recents")
    }
  

    return (
        <div className= "profile">
            <div className="info">
                <div className="avatar">
                    {user.profile_pic?(
                        <Avatar src={user.profile_pic} style={{ height: '100px', width: '100px' }}></Avatar>
                        ):(
                    <Avatar style={{ height: '100px', width: '100px' }} src="/broken-image.jpg"></Avatar>)
                        }
                </div>
               
                <div className="user-info">
                        <h2 className="text">{user.username}</h2>
                        <br/>
                        <h2 className="text">{user.age}</h2>
                        <br/>
                        <h2 className="text">{user.zip_code}</h2>
                        <br/>
                        <h2 className="text">{user.email}</h2>
                        <br/>
                        {!user.profile_pic?(<>
                            <Button className="text" onClick={handleOnClick}><Box border={1}>Settings</Box></Button>
                            <br/><br/>
                            <SimpleModal />
                            <br/><br/>
                            <Button className="text" onClick={handleOnLogout}><Box>Log Out</Box></Button></>
                        ) :(<><Button className="text" onClick={handleOnClick}><Box>Settings</Box></Button>
                        <br/><br/>
                        <Button className="text" onClick={handleOnLogout}><Box border={1}>Log Out</Box></Button></>)}
                </div>
            </div>
           <div className="user">
            <div className="welcome">
                <h1 className="welcome">Welcome, {user.first_name}!</h1>
            </div>
                <div className="recents">
                    <Box border={1} borderColor="#000000">
                        <h2 className="number">{activityNumber}</h2>
                        <h2 className="text">Recent Activity</h2>
                        <Button className="text" onClick={goToRecents}><Box className= "box">View Recent Activity</Box></Button>
                    </Box>
                </div>
            </div>
            </div>
    )
}