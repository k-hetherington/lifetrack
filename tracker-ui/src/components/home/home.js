import './home.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button"
import { Box, Typography, makeStyles, Grid, Link, Container} from "@material-ui/core"
//import Container from '@material-ui/core/Container';

//for grids
import Paper from '@material-ui/core/Paper';


//useStyles is like CSS in js
const useStyles = makeStyles((theme) => ({

nutritionPaper: {
    height: 320,
    width: 280,
    background: `url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // marginLeft: 80,
    padding: 25,
    
},
fittnessPaper: {
    height: 320,
    width: 280,
    background: `url(https://images.unsplash.com/photo-1601568870191-8c417f7e0077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // marginLeft: 80,
    padding: 25,
        
},
sleepPaper: {
    height: 320,
    width: 280,
    background: `url(https://images.unsplash.com/photo-1487300001871-12053913095d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // marginLeft: 80,
    padding: 25,
    marginRight:0,
            
},  
wrapper: {
    height: 600,
    // width: '100vw',
    margin: "auto",
    background: `url(https://images.unsplash.com/photo-1524207874394-5ec7c8c8e1a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop:'10px',
    opacity:'0.8',
    fontFamily: "Sans-serif"

},
title: {
    fontFamily: "Sans-serif",
    fontStyle: "normal",
    // fontWeight: "bold",
    fontSize: 55,
    // marginTop: 20,
    paddingTop: 100,
    margin: "auto",
    letterSpacing: "-0.015em",
    color: "#000000",
    fontWeight:'10'

},
subtitle: {
    width: "70%",
    marginLeft: 200,
    marginRight: "auto",
    padding: 20,
    fontFamily: "Sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: "-0.015em",
    color: "#000000",

},
registerBTN: {
    marginTop: 10, // space between outer edge and adjacent elements 
    paddingTop:10, //space between content , outer edge
    width: 270,
    // height: 70,
    marginBottom: 15,
    fontFamily: "Sans-serif",
   
    fontWeight: "normal",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: "-0.015em",
    background: "#FFFFFF",
    color: "#FFFFFF",

},
bottom: {
    
    // width: '100vw',
    padding: 40,
    marginTop: 5,
    fontFamily: "Sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    background: "#c7c7c7",

},

activities: {
    fontFamily: "Sans-serif",
    fontStyle: "normal",
    fontSize: 40,
    padding: "none",
    letterSpacing: "-0.015em",
    textAlign: "center",
    marginTop: 60,
    marginBottom: 20,
    color: "#00000",

},

productTitle: {
    fontFamily: "Sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    // marginLeft: 80,
    marginTop: 8,
    textAlign: "center",
    letterSpacing: "-0.015em",
    color: "#5C625E"
    
},

productSubtitle: {
    fontFamily: "Sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
    // marginLeft: 80,
    textAlign: "center",
    letterSpacing: "-0.015em",
    color: "#756F6F;"
    
},

}));

export default function Home() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles(); //classes invokes useStyles hook

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (

 <Container maxWidth="lg" minWidth='600px' style={{ backgroundColor: '#ffffff',height: '100vh' }}> 
    
    <Box className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>
            Tracking Your Path to Optimal Health
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
           Register now to begin tracking your fittness, nutrition, and sleep.
        </Typography>
        <Button variant="outlined" font="sans-serif" color="default" size='medium' className={classes.registerBTN}>

            <a href="/register">
                Register
            </a>
        </Button>
    </Box>

    <Box>
        <Typography className={classes.activities}>
            Track All Your Activities 
        </Typography>

        <Grid className="activities-examples">
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        {[0].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.nutritionPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Nutrition
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Track food intake
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                        {[1].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.fittnessPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Fittness
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Track your fittness activity
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                        {[2].map((value) => (
                            <Grid key={value} item>
                            <Paper className={classes.sleepPaper} />
                                <Box>
                                    <Typography className={classes.productTitle}>
                                        Sleep
                                    </Typography>
                                    <Typography className={classes.productSubtitle}>
                                        Track how many hours of sleep you get
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
</Container> 

  );
}


