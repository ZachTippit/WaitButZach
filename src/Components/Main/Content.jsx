import React from 'react'
import FeaturedContent from './FeaturedContent'
import ArticleCard from '../Article/ArticleCard'
import { content } from '../../data/content'
import Logo from '../../img/logo.png'
import useStyles from '../styles'
import { Typography, Link } from '@mui/material'

let contentArray = content;

const Content = () => {
    const classes = useStyles();

    return (
        <div>
            { contentArray.map((content,index) => ( 
                index===0 ?
                    <>
                        <FeaturedContent pic={content.articlePic} title={content.title} description={content.description} date={content.published} />
                        <div className={classes.articlesHeader}>
                            <Typography variant='h4' className={classes.articleText}>Articles</Typography>
                        </div>
                    </>
                    
                :
                    <ArticleCard pic={content.articlePic} title={content.title} description={content.description} date={content.published}/>    
            ))}
        </div>
    )
}

export default Content
