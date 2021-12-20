import * as React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material'

import useStyles from './styles';

const socials = [
  {
    title: 'Github',
    link: 'https://github.com/ZachTippit'
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zachtippit/'
  },
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/zach_tippit/'
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
            <Link href='/'>Contact</Link>
          </Box>
          <Box alignSelf='center'>
            <p style={{color:'white'}}>©2021 Zach Tippit</p>
          </Box>
          <Box alignSelf='center'>
            {socials.map(social => (
              <Link href={social.link}><Typography align='center' variant='body2'>{social.title}</Typography></Link>
            ))}
          </Box>
      </Box>

      {/* Mobile Render */}
      <Stack sx={{ display: { sm: 'flex', md: 'none'}}} direction="column" justifyContent="center" alignItems="center">
        <Link href='/'>Contact</Link>
        <Typography variant='body2' style={{color:'white'}}>©2021 Zach Tippit</Typography>
        <div>
          {socials.map(social => (
            <Link href={social.link}><Typography align='center' variant='body2'>{social.title}</Typography></Link>
          ))}
        </div>
      </Stack>
    </div>
  );
}

export default Footer;