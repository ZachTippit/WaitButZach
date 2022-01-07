import React, { useEffect, useState } from 'react'
import FeaturedContent from './FeaturedContent'
import ArticleCard from '../Article/ArticleCard'
import useStyles from '../styles'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { getAllArticles } from '../../lib/article.js'


const Content = ({articles, fetchArticle}) => {

    const classes = useStyles();
    const [content, setContent] = useState([]);

    // useEffect(() => {
    //     console.log(articles);
    // }, [,articles])

    const handleArticleSelect = async(id) => {
        await fetchArticle(id);
    }

    return (
        <div>
            { articles.map((content,index) => ( 
                index===0 ?
                    <div key={content.sys.id}>
                        <div className={classes.articlesHeader}>
                            <Typography variant='h4' className={classes.articleText}>Featured Content</Typography>
                        </div>
                        <Link to={`article/${content.fields.URLtitle}`} key={content.sys.id} style={{textDecoration: 'none', color: 'inherit'}}>
                            <FeaturedContent
                            key={content.sys.id}
                            id={content.sys.id}
                            pic={content.fields.headerImage.fields.file.url}
                            title={content.fields.title} description={content.fields.subtitle}
                            date={content.fields.datePublished}
                            tags={content.metadata.tags}
                            articleSelect={(e) => handleArticleSelect(content.fields.URLtitle)}
                            />
                        </Link>
                        <div className={classes.articlesHeader}>
                            <Typography variant='h4' className={classes.articleText}>Articles</Typography>
                        </div>
                    </div>
                    
                :
                    <Link to={`article/${content.fields.URLtitle}`} key={content.sys.id} style={{textDecoration: 'none'}}>
                        <ArticleCard 
                            key={content.sys.id}
                            id={content.sys.id}
                            pic={content.fields.headerImage.fields.file.url}
                            title={content.fields.title}
                            description={content.fields.subtitle}
                            date={content.fields.datePublished}
                            tags={content.metadata.tags}
                            articleSelect={(e) => handleArticleSelect(content.fields.URLtitle)} 
                        />    
                    </Link>
            ))}
        </div>
    )
}

export default Content
