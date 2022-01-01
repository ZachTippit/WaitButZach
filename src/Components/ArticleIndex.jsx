import React, { useEffect, useState } from 'react'
import ArticleCard from './Article/ArticleCard'
import { Typography } from '@mui/material'
import useStyles from './styles'
import SideSignUp from './Main/SideSignUp';
import { getAllArticles } from '../lib/article.js'

const ArticleIndex = () => {
    const classes = useStyles();

    const [content, setContent] = useState([]);

    useEffect(async () => {
        const contentArray2 = await getAllArticles();
        setContent(contentArray2);
      }, [])

    return (
        <div className={classes.articleIndex}>
            <div className={classes.articlesHeader}>
                <Typography variant='h4' className={classes.articleText}>Articles</Typography>
            </div>
            { content.map(content => ( <ArticleCard pic={content.fields.headerImage.fields.file.url} title={content.fields.title} description={content.fields.subtitle} date={content.fields.datePublished}/> ))}
            {/* { contentArray.map(content => ( <ArticleCard pic={content.articlePic} title={content.title} description={content.description} date={content.published}/> ))} */}
            <div className={classes.emailSignUp_ARTICLE}>
                <SideSignUp />
            </div>
        </div>
    )
}

export default ArticleIndex