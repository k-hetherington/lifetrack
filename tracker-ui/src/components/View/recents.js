
import { Grid, Card, Container, CardMedia, CardContent, makeStyles, Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        width: '15vw',
        height: '35vh',
        border:'2px solid',
        borderRadius: 0,
        borderColor:'#64ffda',
     
    },
    title: {
    //  display:"flex",
     paddingTop: '5%',
     paddingBottom: '5%',
     alignItems:'center',
     justifyContent:'space-between',
    },

    Button:{
        justifyContent:'flex-end',
    },
    feed: {
     justifyContent:"space-between",
     alignContent:"space-evenly",
     gridRowGap:'4rem' ,
     gridColumnGap: '2rem',


    },
    card: {
        borderColor:"primary.main"
    },
    media: {
      height: '8%',
      width: '100%',
      paddingTop: '56.25%', // 16:9
    },
    timestamp: {
        textAlign:'start',
    },
  }));

export default function UserActivities({ recents, activityNumber }){
    const navigate = useNavigate()
    const handleOnClick =  () =>{
        navigate("/profile/recents")
    }

    const classes = useStyles();
   //console.log(activity)
    return(
        <div className="Recents">
             <Container maxWidth="lg" style={{ backgroundColor: '#ffffff',height: '100vh' }}>
                <Grid container className="usersActivities">
                   
                    <Grid container className={classes.title} >
                        <h2>Total Recent Activities: {activityNumber}</h2>
                    </Grid>
                    <Grid container className={classes.feed}>
                        {recents.map((activity) => {
    
                            return ( 
                                <Card className={classes.root} key={activity.id} >
                                        
                                        <CardMedia 
                                        className={classes.media}
                                        image={activity.product_pic}
                                        title="Activities"
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="textSecondary" component="p">
                                               Product: {activity.product_type} 
                                            </Typography>

                                            <Typography variant="body1" color="textSecondary" component="p">
                                               Qty: {activity.quantity}
                                            </Typography>

                                            <Typography variant="body1" color="textSecondary" component="p" className={classes.timestamp}>
                                               Created at: {activity.created_at}
                                            </Typography>
                                        </CardContent>
                                </Card>
                            )
                        })
                        }
                    </Grid>
                </Grid>
             </Container>
        </div>
    );







}