import * as React from 'react';
import { Box, Stack, Typography, Link, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


import useStyles from './styles';

const socials = [
  {
    title: 'Github',
    link: 'https://github.com/ZachTippit',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zachtippit/',
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/zach_tippit/',
  },
]


const Footer = () => {

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
            <Link href='/contact'>Contact</Link>
          </Box>
          <Box alignSelf='center'>
            <p style={{color:'white'}}>©2021 Zach Tippit</p>
          </Box>
          <Box alignSelf='center' sx={{pt: 1}}>
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
          </Box>
          </Box>
          {/* <Box alignSelf='center'>
            <Link href="https://github.com/ZachTippit/" target="_blank" >
              <GitHubIcon/>
            </Link>
            <Link href="https://www.linkedin.com/in/zachtippit/" target="_blank" >
              <LinkedInIcon/>
            </Link>
            <Link href="https://www.instagram.com/zach_tippit/" target="_blank" >
              <InstagramIcon/>
            </Link>
          </Box>
       */}

      {/* Mobile Render */}
      <Stack sx={{ display: { sm: 'flex', md: 'none'}}} direction="column" justifyContent="center" alignItems="center">
        <Link href='/contact'>Contact</Link>
        <Typography variant='body2' style={{color:'white'}}>©2021 Zach Tippit</Typography>
        <Box alignSelf='center' sx={{pt: 1}}>
            <div className={classes.socialBtnContainer}>
                <div className={classes.aboutSocialBtn}>
                    <Link href="https://github.com/ZachTippit/" target="_blank" >
                        <IconButton>
                            <GitHubIcon style={{fontSize: 30}}/>
                        </IconButton>
                    </Link>
                </div>
                <div className={classes.aboutSocialBtn}>
                    <Link href="https://www.linkedin.com/in/zachtippit/" target="_blank" >
                        <IconButton>
                            <LinkedInIcon style={{fontSize: 30}} color='primary'/>
                        </IconButton>
                    </Link>
                </div>
                <div className={classes.aboutSocialBtn}>
                    <Link href="https://www.instagram.com/zach_tippit/" target="_blank" >
                        <IconButton>
                            <InstagramIcon style={{fontSize: 30}} color='secondary'/>
                        </IconButton>
                    </Link>
                </div>
            </div>
          </Box>
          {/* {socials.map(social => (
            <Link href={social.link}><Typography align='center' variant='body2'>{social.title}</Typography></Link>
          ))} */}
      </Stack>
    </div>
  );
}

export default Footer;