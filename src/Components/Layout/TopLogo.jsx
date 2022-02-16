import React from 'react'
import useStyles from '../styles';
import logo from '../../img/logo.png'
import {default as logoTxt} from '../../img/zoat-text.png'
import {default as logoGif} from '../../img/desk-logo.gif'
import '../animations.css'
import clsx from 'clsx'
import { Grid } from '@material-ui/core';

const TopLogo = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent='center' className={clsx(classes.topLogoContainer, 'slide-in-fwd-center')}>
            <Grid xs={0} md={3} />
            <Grid item sm={12} md={2}>
                <img className={classes.topLogoGif} src={logoGif} alt='Animated gif of Zach of All Trades' />
            </Grid>
            <Grid item sm={12} md={2}>
                <img className={classes.topLogoIMG} src={logoTxt} alt='Zach of All Trades' />
            </Grid>            
            <Grid xs={0} md={5} />
        </Grid>
    )
}

export default TopLogo
