import React from 'react'
import { Typography, Link, Grid } from '@mui/material'
import { capitalCase } from 'change-case'
import clsx from 'clsx'
import useStyles from '../styles'
import '../animations.css'

const FeaturedContent = ({id, pic, title, description, date, tags, articleSelect}) => {

    const classes = useStyles();

    return (
        <div>
            <div className={clsx(classes.featuredContent, 'slide-in-fwd-center')}>
                <img src={pic} className={classes.featuredContentPic} alt={`${pic}`} onClick={() => articleSelect(id)}/>
                <Typography variant='h5' align='center' onClick={() => articleSelect(id)}>{title}</Typography>
                <Typography variant='body2' align='center' className={classes.contentDate}><i>Published: {date}</i></Typography>
                <Grid container direction='row' sx={{ display: 'flex', justifyContent: 'center', pt: 1, pb: 1, width: '90%', margin: 'auto'}} className={classes.articleCardDescription}>
                    {/* <Grid item md={2} sx={{display: {xs: 'none', sm: 'none', md: 'inherit' }, pl: 2}} alignSelf='start'>
                        <Typography variant='body1' sx={{fontSize: '0.75rem'}}><i>Tags:</i></Typography>
                    </Grid> */}
                    {tags !== [] && tags.map((tag, index) => (
                        <Grid item xs md={2} sx={{mr: 1, ml: 1}} alignSelf='center' key={index}>
                            <img src={badgeMaker(tag.sys.id)} alt={tag.sys.id} style={{display: 'block', margin:'auto', textAlign: 'center' }}/>
                        </Grid>))}
                </Grid>
                <div className={classes.featuredContentDescription}>
                    <Typography variant='body1' align='center'>{description}</Typography>
                </div>
            </div>
        </div>
    )
}

export default FeaturedContent

// <Link onClick={() => articleSelect(id)}>read more.</Link>
const badgeMaker = (tag) => {
    const tag2 = capitalCase(tag)
    // console.log(tag2)
    const URL = 'https://img.shields.io/badge/'
    let badge = '';
    switch(tag){
        case 'devLog':
            badge = `${URL}-${tag2}-150C3B`
            break;
        case 'movieReview':
            badge = `${URL}-${tag2}-591509`
            break;
        case 'theZachVarietyShow':
            badge = `${URL}-${tag2}-B8A512`
            break;
        case 'gaming':
            badge = `${URL}-${tag2}-067D4A`
            break;
        case 'front-end':
            badge = `${URL}-${tag2}-88c0c2`
            break;
        case 'back-end':
            badge = `${URL}-${tag2}-5c2670`
            break;
        default:
            badge = `${URL}-${tag2}-lightgrey`
            break;
    }

    return badge;
}