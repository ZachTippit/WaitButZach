import React from 'react'
import SideSignUp from './SideSignUp'
import SideProjectCard from './SideProjectCard'
import ExtraCauses from './ExtraCauses'
import { Button, Stack, Typography, Divider, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import useStyles from '../styles'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <div className={classes.articlesHeader}>
                <Typography variant='h4' className={classes.articleText}>Other Content</Typography>
            </div>
            <Stack direction="column" alignItems="center" justifyContent='space-between' spacing={5} divider={<Divider orientation="horizontal" flexItem />}>
                <div style={{width: '100%'}}>
                    <SideSignUp />
                </div>
                <div className={classes.w100}>
                    <Typography gutterBottom fullWidth variant='h6' align='center' sx={{pb: 2}}>...or let's Connect!</Typography>
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
                </div>
                <div style={{width: '100%'}}>
                    <ColorButton className={classes.sidebarCard} variant="contained" size='large'><b>Random Post Button</b></ColorButton>
                </div>
                <div style={{width: '100%'}}>
                    <SideProjectCard />
                </div>
                <div style={{width: '100%'}}>
                    <ExtraCauses />
                </div>
            </Stack>
        </div>
    )
}

export default Sidebar
