import React from 'react'
import ExtraCauses from '../Sidebar/ExtraCauses'
import SideProjectCard from '../Sidebar/SideProjectCard';
import { Grid, Typography, Button, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import AboutImg  from '../../img/about.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Resume from '../../data/zdt-resume.pdf'

import useStyles from '../styles'

const aboutInfo = {
    header: 'Hi, it\'s me, Zach!',
    text: 'There have been many jokes about my being the "Zach of All Trades", but the name is starting to stick. Between an engineering degree, tech consulting with companies in almost a dozen countries and a mind for entrepreneurship, the deck is starting stack. Did I mention that I love video? Add marketing as another skill set. I have always defined myself by the work that I want to do and the last year has been a very exciting transition in that regard. After years of looking on enviously at my developer friends, I am finally making the transition to a fully technical role in the software development space.'
}

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));

const About = () => {

    const classes = useStyles(); 
    
    return (
        <div className={classes.about}>
            <Grid container
                display='flex'
                spacing={4}
                alignItems="center"
            >
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <img className={classes.aboutImg} src={AboutImg} alt='Hey! This is supposed to be me here.' />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Grid container className={classes.aboutText} alignItems='flex-start' justifyContent='space-between'>
                        <Grid item xs={12}>
                            <Typography gutterBottom variant='h4' align='center'>{aboutInfo.header}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{pt: 2}}>
                            <Typography variant='body1'>{aboutInfo.text}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} direction='row' className={classes.aboutLinkContainer} sx={{mt: 4}}>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <div className={classes.w100}>
                        <Typography gutterBottom variant='h6' align='center' sx={{pb: 2}}>For more info:</Typography>
                    </div>
                    <div className={classes.resumeBtn}>
                        <ColorButton fullWidth className={classes.aboutBtn} variant="contained" size='large' href={Resume} target="_blank"><b>Download Resume (pdf)</b></ColorButton>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className={classes.socialContainer}>
                    <div className={classes.w100}>
                        <Typography gutterBottom variant='h6' align='center' sx={{pb: 2}}>...or let's Connect!</Typography>
                    </div>
                    <div className={classes.socialBtnContainer}>
                        <div className={classes.aboutSocialBtn}>
                            <Link href="https://github.com/ZachTippit/" target="_blank" >
                                <IconButton>
                                    <GitHubIcon style={{fontSize: 50}}/>
                                </IconButton>
                            </Link>
                        </div>
                        <div className={classes.aboutSocialBtn}>
                            <Link href="https://www.linkedin.com/in/zachtippit/" target="_blank" >
                                <IconButton>
                                    <LinkedInIcon style={{fontSize: 50}} color='primary'/>
                                </IconButton>
                            </Link>
                        </div>
                        <div className={classes.aboutSocialBtn}>
                            <Link href="https://www.instagram.com/zach_tippit/" target="_blank" >
                                <IconButton>
                                    <InstagramIcon style={{fontSize: 50}} color='secondary'/>
                                </IconButton>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems="center" spacing={3} sx={{mt: 4}}>
                <Grid item xs={12} sm={12} md={6}>
                    <ExtraCauses />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <SideProjectCard />
                </Grid>
            </Grid>
        </div>
    )
}

export default About
