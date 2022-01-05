import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, Button, Typography, TextField, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { addSubscriber, subscriberCount } from '../../lib/email';

import useStyles from '../styles'

const SideSignUp = () => {
    const [subCount, setSubCount] = useState('a lot of');
    const { register, handleSubmit } = useForm();
    const [ isRegistered, setIsRegistered ] = useState(false);
    const classes = useStyles();

    const emailSubmit = async (data, e) => {
        setIsRegistered(await addSubscriber(data));
    }

    const onError = (errors, e) => console.log(errors, e);

    useEffect( async() => {
        let SUB_COUNT = await subscriberCount();
        setSubCount(SUB_COUNT);
    }, [])

    return (
        <Card style={{backgroundColor: 'lightBlue'}} className={classes.signUpCard}>
            <CardContent>
                {isRegistered ? 
                    <Typography variant='body1' align='center'><b>Thank you for subscribing! Check your email for details.</b></Typography> 
                    : 
                    <Typography variant="h5" align="center" component="div">
                        Join {subCount} other folks and have new posts sent directly to your inbox
                    </Typography>
                }
            </CardContent>
            <CardActions>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <form onSubmit={handleSubmit(emailSubmit, onError)}>
                        <Grid item>
                            <TextField {...register('email')} className={classes.emailInput} id="outlined-basic" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <Button type="submit" className={classes.w100}>Submit</Button>
                        </Grid>
                    </form>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default SideSignUp;