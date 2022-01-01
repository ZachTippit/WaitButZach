import React, { useEffect, useState } from 'react'
import FeaturedContent from './FeaturedContent'
import ArticleCard from '../Article/ArticleCard'
import { content } from '../../data/content'
import useStyles from '../styles'
import { Typography, Link } from '@mui/material'
import { getAllArticles } from '../../lib/article.js'

let contentArray = content;

const Content = () => {

    const classes = useStyles();

    const [content, setContent] = useState([]);

    useEffect(async () => {
        const contentArray2 = await getAllArticles();
        setContent(contentArray2);
      }, [])

    return (
        <div>
            { content.map((content,index) => ( 
                index===0 ?
                    <>
                        <FeaturedContent pic={content.fields.headerImage.fields.file.url} title={content.fields.title} description={content.fields.subtitle} date={content.fields.datePublished} />
                        <div className={classes.articlesHeader}>
                            <Typography variant='h4' className={classes.articleText}>Articles</Typography>
                        </div>
                    </>
                    
                :
                    <ArticleCard pic={content.fields.headerImage.fields.file.url} title={content.fields.title} description={content.fields.subtitle} date={content.fields.datePublished}/>    
            ))}
        </div>
    )
}

export default Content
