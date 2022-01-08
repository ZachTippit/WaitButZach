import * as React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import useStyles from '../styles';

const pages = [
    { title: 'Home', link: '/' },
    { title: 'About', link: 'about' },
    { title: 'Articles', link: 'articles' },
    { title: 'Projects', link: 'projects' },
    { title: 'Reading List', link: 'reading' },
    { title: 'Contact', link: 'contact' }
  ];

export default function Footer(){

  const classes = useStyles();


  return (
    <div className={classes.footer}>
        {/* Desktop Render */}
        <Box
          sx={{
            display: {xs: 'none', sm: 'none', md: 'flex'},
            justifyContent: 'space-around',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        >
          <Box alignSelf='center'>
            <Typography variant='body2' style={{color: 'white', fontSize: '0.75rem', fontWeight: 'bold'}}>Quick Links</Typography>
            {pages.map((page, index) => (
                <Link to={page.link} style={{fontSize: '0.75rem'}} key={index}>
                    <p>
                        {`> ${page.title}`}
                    </p>
                </Link>  
            ))}
          </Box>
          <Box alignSelf='center'>
            <p style={{color:'white'}}>©2022 Zach Tippit</p>
          </Box>
          <Box alignSelf='center' sx={{pt: 1}}>
            <div className={classes.socialBtnContainer}>
                <div className={classes.aboutSocialBtn}>
                    <a href="https://github.com/ZachTippit/" target="_blank" >
                        <IconButton >
                            <GitHubIcon style={{fontSize: 50}}/>
                        </IconButton>
                    </a>
                </div>
                <div className={classes.aboutSocialBtn}>
                    <a href="https://www.linkedin.com/in/zachtippit/" target="_blank" >
                        <IconButton>
                            <LinkedInIcon style={{fontSize: 50}} color='primary'/>
                        </IconButton>
                    </a>
                </div>
                <div className={classes.aboutSocialBtn}>
                    <a href="https://www.instagram.com/zach_tippit/" target="_blank" >
                        <IconButton>
                            <InstagramIcon style={{fontSize: 50}} color='secondary'/>
                        </IconButton>
                    </a>
                </div>
            </div>
          </Box>
          </Box>

      {/* Mobile Render */}
      <Stack sx={{ display: { sm: 'flex', md: 'none'}}} direction="column" justifyContent="center" alignItems="center">
        <Link to='/contact' sx={{pt: 1}}>Contact</Link>
        <Box alignSelf='center' sx={{pt: 1}}>
            <div className={classes.socialBtnContainer}>
                <div className={classes.aboutSocialBtn}>
                    <a to="https://github.com/ZachTippit/" target="_blank" >
                        <IconButton>
                            <GitHubIcon style={{fontSize: 30}}/>
                        </IconButton>
                    </a>
                </div>
                <div className={classes.aboutSocialBtn}>
                    <a to="https://www.linkedin.com/in/zachtippit/" target="_blank" >
                        <IconButton>
                            <LinkedInIcon style={{fontSize: 30}} color='primary'/>
                        </IconButton>
                    </a>
                </div>
                <div className={classes.aboutSocialBtn}>
                    <a to="https://www.instagram.com/zach_tippit/" target="_blank" >
                        <IconButton>
                            <InstagramIcon style={{fontSize: 30}} color='secondary'/>
                        </IconButton>
                    </a>
                </div>
            </div>
          </Box>
          <Typography sx={{pt: 1, pb: 1}} variant='body2' style={{color:'white'}}>©2022 Zach Tippit</Typography>
          {/* {socials.map(social => (
            <Link href={social.link}><Typography align='center' variant='body2'>{social.title}</Typography></Link>
          ))} */}
      </Stack>
    </div>
  );
}