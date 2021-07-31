import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './sleep.css';
import React from 'react';
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  Grid  from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import apiClient from "../../services/apiClient";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1487300001871-12053913095d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginRight: theme.spacing(5),
    height:'40 em',
  },
  paper: {
    margin: theme.spacing(1, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:'25rem',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    margin: theme.spacing(0, "auto"),
    height:'25rem',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const AntSwitch = withStyles((theme) => ({
  root: {
    width: 34,
    height: 17,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 4,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 11,
    height: 12,
    boxShadow: 'none',
    color: theme.palette.common.black
  },
  track: {
    border: `2px solid ${theme.palette.grey[500]}`,
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);



export default function SleepTracker({ user, setUser, setActivityNumber, setActivity, initialized}){

    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
   // const [createdAt, setCreatedAt] = useState("")
    const [toggle, setToggle]=useState(false)
    

    const [form, setForm] = useState({
        start_time: "",
        end_time: "",
        notes: "",
        date: "",
    })

    useEffect(() => {
      // if user is already logged in,
      // redirect them to the detailed activity page aka an authenticated view
      if (user?.email) {
        navigate("/sleep")
      }
      else if(!user?.email && initialized){
        navigate("/sleep/sleepUnauthorized")
      }
    }, [user, navigate, initialized])

   
      const handleOnInputChange = (event) => {
          setForm((f) => ({ ...f, [event.target.name]: event.target.value }))  
      }
      

     const handleChange = (event) => {
      setForm((f) => ({ ...f, [event.target.name]: event.target.checked }))
    };
   
    const handleOnSubmit = async () => {
      setIsProcessing(true)
      setErrors((e) => ({ ...e, form: null }))

      const{ data, error } = await apiClient.createSleep({
            start_time: form.start_time,
            end_time: form.end_time,
            notes: form.notes,
            date: form.date,
      })
      
     
      if(error) setErrors( setErrors((e) => ({ ...e, form: error })))
      if(data?.user){
        // setUser(data.user)
        // apiClient.setToken(data.token)
        // console.log(form)
        setActivity(recentSleep=>[...recentSleep, data.sleeps])
    }
      
    // setActivity(recentSleep=>[...recentSleep, data.sleeps])

      

    //   console.log(data.sleeps.is_used)
      setIsProcessing(false)

    navigate("/profile/recents")
    
    }
    
 
  const classes = useStyles();
  
    
    return(
      <div className="Sleep">
        <Container maxWidth="lg" style={{ backgroundColor: '#ffffff',height: '100vh' }} justify-content="center">
           <div className="sleepTitle">
                 <h2>Sleep</h2>
           </div>
           <div className="sleepDescription">
                Track how many hours of sleep you get each night. 
            </div>
            
            <Grid container  spacing={1} className="feedArea">
      
              <Grid item xs={3} sm={3} md={4} className={classes.image}>

              </Grid>

              <Grid item xs={3} sm={3} md={4} className="sleepForm" component={Paper} elevation={0}>
              <div className={classes.paper}>
          
          
          <form className={classes.form} noValidate>
              <h3>Start Time</h3>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="start_time"
              type="timestamp"
              name="start_time"
              autoFocus
              value={form.start_time}
              onChange={handleOnInputChange}
            />
            <h3>End Time</h3>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="end_time"
              type="timestamp"
              id="end_time"
              value={form.end_time}
              onChange={handleOnInputChange}
            />
            <h3>Notes</h3>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="notes"
              label="Notes"
              type="notes"
              id="notes"
              autoComplete="notes"
              value={form.notes}
              onChange={handleOnInputChange}
            />
           <h3>Date</h3>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="date"
              type="date"
              id="date"
              value={form.date}
              onChange={handleOnInputChange}
            />
    
            <Button
              type="submit"
             fullWidth
              variant="contained"
              // color="#ffffff"
              className={classes.submit}
              disabled={isProcessing} 
              onClick={handleOnSubmit}
              
            >
              {isProcessing ? "Loading..." : "Submit"}
              {/* Submit */}
            </Button>
            <Grid container>
            </Grid>
  
          </form>
        </div>
            </Grid>
            </Grid>

        </Container>
      </div>
      
    );


}

