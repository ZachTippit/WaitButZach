import React from 'react'
import ArticleCard from './Article/ArticleCard'
import { Typography } from '@mui/material'
import * as data from '../data/content.json'
import useStyles from './styles'
import SideSignUp from './Main/SideSignUp';

let contentArray = data.default;

const ArticleIndex = () => {
    const classes = useStyles();
    console.log(contentArray)
    return (
        <div className={classes.articleIndex}>
            <div className={classes.articlesHeader}>
                <Typography variant='h4' className={classes.articleText}>Articles</Typography>
            </div>
            
            { contentArray.map(content => ( <ArticleCard articlePic={content.articlePic} title={content.title} description={content.description} /> ))}
            <div className={classes.emailSignUp_ARTICLE}>
                <SideSignUp />
            </div>
        </div>
    )
}

export default ArticleIndex