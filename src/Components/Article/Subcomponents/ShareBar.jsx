import React from 'react'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton } from 'react-share'
import { EmailIcon, FacebookIcon, LinkedinIcon, RedditIcon, TwitterIcon } from 'react-share'
import { Grid } from '@mui/material'
import { Typography } from '@material-ui/core'

const ShareBar = ({articleURL}) => {

    const shareProps = {
        url: `https://zachtippit.netlify.app${articleURL}`
    }
    
    const iconProps = {
        size: 32,
        round: false
    }

    return (
        <Grid container direction='row' spacing={1} justifyContent='space-around'>
            <Grid item alignItems='center' sx={{display: {xs: 'none', sm: 'inherit'}}}>
                <Typography variant='body1' style={{fontWeight: 'bold', fontSize: '1rem', margin: 'auto'}}>Share </Typography>
            </Grid>
            <Grid item>
                <FacebookShareButton {...shareProps}>
                    <FacebookIcon {...iconProps}/>
                </FacebookShareButton>
            </Grid>
            <Grid item>
                <LinkedinShareButton {...shareProps}>
                    <LinkedinIcon {...iconProps}/>
                </LinkedinShareButton>
            </Grid>
            <Grid item>
                <RedditShareButton {...shareProps}>
                    <RedditIcon {...iconProps}/>
                </RedditShareButton>
            </Grid>
            <Grid item>
                <TwitterShareButton {...shareProps}>
                    <TwitterIcon {...iconProps}/>
                </TwitterShareButton>
            </Grid>
            <Grid item>
                <EmailShareButton {...shareProps}>
                    <EmailIcon {...iconProps} />
                </EmailShareButton>
            </Grid>
        </Grid>
    )
}

export default ShareBar;