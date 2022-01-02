import React from 'react'
import { Typography, Link } from '@mui/material'

import useStyles from '../styles'

const FeaturedContent = ({id, pic, title, description, date, articleSelect}) => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.articlesHeader}>
                <Typography variant='h4' className={classes.articleText}>Featured Content</Typography>
            </div>
            <div className={classes.featuredContent}>
                <img src={pic} className={classes.featuredContentPic} alt={`${pic}`} onClick={() => articleSelect(id)}/>
                <Typography variant='h5' align='center' fullWidth onClick={() => articleSelect(id)}>{title}</Typography>
                <Typography variant='body2' align='center' fullWidth className={classes.contentDate}><i>Published: {date}</i></Typography>
                <div className={classes.featuredContentDescription}>
                    <Typography variant='body1' align='center'>{description} <Link onClick={() => articleSelect(id)}>read more.</Link></Typography>
                </div>
            </div>
        </div>
    )
}

export default FeaturedContent
