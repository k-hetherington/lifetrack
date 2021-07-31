import './navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';  
//import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button"
import {  Container} from "@material-ui/core"
import StyledMenu from "../Menu/Menu"

export default function Navbar({ user, logoutUser, isAuthenticated, intialized }){

    return (
         <Container style={{ backgroundColor: '#FFFFFF', height: '5vh'}}>
            <nav>
                <ul className="navbar-titles">
                    <li>
                       <Link className="navbar-titles" to="/">
                           <div className="logo">
                            <img src="data:image/png;base64,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" alt="codepath logo" width="28%" ></img>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-titles" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-titles" to="/sleep">
                            Sleep
                        </Link>
                    </li>
    
                    { !isAuthenticated? (
                    <StyledMenu logoutUser={logoutUser}/>
                    ):(<><Button className="login" variant="outlined" size='small'>
                        <Link to="/login">
                            Log In
                            </Link>
                    </Button>
                    <Button className="register" variant="outlined" size='small'>
                        <Link to="/register">
                            Register
                         </Link>
                    </Button></>)}
        
                </ul>
            </nav>
           </Container>
    )
}