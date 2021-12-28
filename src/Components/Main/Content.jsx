import React from 'react'
import ContentCard from './ContentCard'
import ArticleCard from '../Article/ArticleCard'
import * as data from '../../data/content.json'
import Dune from '../../img/selects/dune.png'
import useStyles from '../styles'
import { Typography, Link } from '@mui/material'

let contentArray = data.default;

const Content = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.articlesHeader}>
                <Typography variant='h4' className={classes.articleText}>Featured Content</Typography>
            </div>
            <div className={classes.featuredContent}>
                <img src={Dune} className={classes.featuredContentPic} />
                <Typography variant='h5' align='center' fullWidth>New Portfolio Launch!</Typography>
                <Typography variant='body2' align='center' fullWidth className={classes.contentDate}><i>Published: 12/28/21</i></Typography>
                <div className={classes.featuredContentDescription}>
                    <Typography variant='body1' align='left'>Hello, world! Welcome to the second release of my portfolio site. While the first version (link) was a fantastic tool for hosting my projects... <Link href='/'>read more.</Link></Typography>
                </div>
            </div>
            <div className={classes.articlesHeader}>
                <Typography variant='h4' className={classes.articleText}>Articles</Typography>
            </div>
            
            { contentArray.map(content => ( <ArticleCard articlePic={content.articlePic} title={content.title} description={content.description}/> ))}
        </div>
    )
}

export default Content
