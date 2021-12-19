import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, TextField, Grid } from '@mui/material';
import useStyles from '../styles'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const SideSignUp = () => {
    const classes = useStyles();

    return (
        <Card style={{backgroundColor: 'lightgreen'}} className={classes.signUpCard}>
            <CardContent>
                <Typography variant="h5" align="center" component="div">
                Join x other folks and have new posts sent directly to your inbox
                </Typography>
            </CardContent>
            <CardActions>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    <TextField className={classes.emailInput} id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                <Grid item>
                    <Button className={classes.w100}>Submit</Button>
                </Grid>
            </Grid>
                
                
            </CardActions>
        </Card>
    )
}

export default SideSignUp;