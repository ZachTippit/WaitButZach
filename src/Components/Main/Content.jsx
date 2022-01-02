import React, { useEffect, useState } from 'react'
import FeaturedContent from './FeaturedContent'
import ArticleCard from '../Article/ArticleCard'
import useStyles from '../styles'
import { Typography } from '@mui/material'
import { getAllArticles } from '../../lib/article.js'


const Content = ({articleSelect}) => {

    const classes = useStyles();
    const [content, setContent] = useState([]);

    useEffect(async () => {
        const contentArray2 = await getAllArticles();
        setContent(contentArray2);
      }, [])

    const handleArticleSelect = (id) => {
        articleSelect(id);
    }

    return (
        <div>
            { content.map((content,index) => ( 
                index===0 ?
                    <>
                        <FeaturedContent 
                            id={content.sys.id}
                            pic={content.fields.headerImage.fields.file.url}
                            title={content.fields.title} description={content.fields.subtitle}
                            date={content.fields.datePublished}
                            articleSelect={handleArticleSelect} 
                        />
                        <div className={classes.articlesHeader}>
                            <Typography variant='h4' className={classes.articleText}>Articles</Typography>
                        </div>
                    </>
                    
                :
                    <ArticleCard 
                        id={content.sys.id}
                        pic={content.fields.headerImage.fields.file.url}
                        title={content.fields.title}
                        description={content.fields.subtitle}
                        date={content.fields.datePublished}
                        articleSelect={handleArticleSelect}/>    
            ))}
        </div>
    )
}

export default Content
