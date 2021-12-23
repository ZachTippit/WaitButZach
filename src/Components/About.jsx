import React from 'react'
import { Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import AboutImg  from '../img/about.png'

import useStyles from './styles'

const aboutInfo = {
    header: 'Hi, it\'s me, Zach!',
    text: 'There have been many jokes about my being the "Zach of All Trades", but the name is kind of sticking. Between an engineering degree, tech consulting with companies in almost a dozen countries and a mind for entrepreneurship, the deck is starting stack. Did I mention that I love video? Add marketing as another skill set. I have always defined myself by the work that I want to do and the last year has been a very exciting transition in that regard. After years of looking on enviously at my developer friends, I am finally making the transition to a fully technical role in the software development space.'
}

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const About = () => {

    const classes = useStyles(); 
    
    return (
        <div className={classes.about}>
            <Grid container
                display={{xs: 'none', sm: 'none', md: 'flex'}}
                spacing={4}
                alignItems="center"
            >
                <Grid item md={6}>
                    <img className={classes.aboutImg} src={AboutImg} alt='This is a picture of me!' />
                </Grid>
                <Grid container md={6} className={classes.aboutText} alignItems='flex-start' justifyContent='space-between'>
                    <Grid item md={12}>
                        <Typography gutterBottom variant='h6' fullWidth>{aboutInfo.header}</Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Typography variant='body1'>{aboutInfo.text}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container
                display={{xs: 'flex', sm: 'flex', md: 'none'}}
                spacing = {2}
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12} sm={12}>
                    <img className={classes.aboutImg} src={AboutImg} alt='This is a picture of me!' />
                </Grid>
                <Grid item xs={12} sm={12} item alignItems='flex-start' justifyContent='space-between'>
                    <Typography variant='h6'>{aboutInfo.header}</Typography>
                    <Typography variant='body1'>{aboutInfo.text}</Typography>
                </Grid>
            </Grid>
            <div className={classes.aboutBtnContainer}>
                <div className={classes.aboutBtn}>
                    <ColorButton fullWidth className={classes.aboutBtn} variant="contained" size='large'><b>Download Resume (pdf)</b></ColorButton>
                </div>
                <div className={classes.aboutBtn}>
                    <Grid container direction='row' justifyContent='space-between' alignItems='space-between' spacing={4} className={classes.socialBtnContainer}>
                        <Grid item xs={4} className={classes.aboutSocialBtn} >
                            <ColorButton fullWidth variant="contained" size='small'><b>GH</b></ColorButton>
                        </Grid>
                        <Grid item xs={4} className={classes.aboutSocialBtn}>
                            <ColorButton fullWidth variant="contained" size='small'><b>LI</b></ColorButton>
                        </Grid>
                        <Grid item xs={4} className={classes.aboutSocialBtn}>
                            <ColorButton fullWidth variant="contained" size='small'><b>IG</b></ColorButton>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.aboutBtn}>
                    <ColorButton className={classes.aboutBtn} fullWidth variant="contained" size='large'><b>Reading List</b></ColorButton>
                </div>
                <div className={classes.aboutBtn}>
                    <ColorButton className={classes.aboutBtn} fullWidth variant="contained" size='large'><b>Random Post Button</b></ColorButton>
                </div>
            </div>
        </div>
    )
}

export default About
