import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./sleepUnauthorized.css"

export default function SleepUnauthorized(){
    return(
        <div className="sleepUnauthorized">
            <Container maxWidth="lg" style={{ backgroundColor: '#ffffff',height: '100vh' }} justify-content="center">
                <div className="sleepTitle">
                    <h2>Sleep</h2>
                </div>
                <div className="sleepDescription">
                    <p>
                        Track your Sleep
                    </p>     
                </div>
                {/* spacing={2} */}
                <Grid container className="feedPlace" justify-content="center" >
                    <Grid item  xs={6}  className="sleepWarning"  component={Paper} elevation={0}>
                        <p>
                        Sorry! You must be logged in and/or registered to view this page.
                        </p>
                        <Grid container  justify-content= "center" spacing={2} className="redirectBttns">
                        <Grid item > 
                            <Button className="login" variant="outlined"  >
                                <a href="/login">
                                    Log In
                                </a>
                            </Button>
                        </Grid>
                            <Grid item>
                                <Button className="register" variant="outlined" >
                                    <a href="/register">
                                        Register
                                    </a>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
           </Container>
        </div>
    );
}