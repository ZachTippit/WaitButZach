import React from 'react'
import ContentCard from './ContentCard'
import * as data from '../../data/content.json'
import useStyles from '../styles'
import { Typography } from '@mui/material'

let contentArray = data.default;

const Content = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.articlesHeader}>
                <Typography variant='h4' className={classes.articleText}>Articles</Typography>
            </div>
            
            { contentArray.map(content => ( <ContentCard articlePic={content.articlePic} title={content.title} /> ))}
        </div>
    )
}

export default Content
