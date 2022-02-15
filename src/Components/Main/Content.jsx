import React, { useEffect, useState } from 'react'
import FeaturedContent from './FeaturedContent'
import ArticleCard from '../Article/ArticleCard'
import useStyles from '../styles'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import '../animations.css';


const Content = ({articles, fetchArticle}) => {

    const classes = useStyles();
    const [page, setPage] = useState(1);

    // useEffect(() => {
    //     console.log(articles);
    // }, [,articles])

    const handleArticleSelect = async(id) => {
        console.log('Called from Content')
        await fetchArticle(id);
    }

    useEffect(() => {

    }, [page])

    return (
        <div>
            <div>
                <div className={classes.articlesHeader}>
                    <Typography variant='h4' className={classes.articleText}>Featured Content</Typography>
                </div>
                {!articles ?
                    <h3 style={{textAlign: 'center'}}>Loading posts! If you can see this have a lovely day :)</h3> 
                    : 
                    <Link to={`article/${articles[0].fields.URLtitle}`} key={articles[0].sys.id} style={{textDecoration: 'none', color: 'inherit'}}>
                        <FeaturedContent
                        key={articles[0].sys.id}
                        id={articles[0].sys.id}
                        pic={articles[0].fields.headerImage.fields.file.url}
                        title={articles[0].fields.title} description={articles[0].fields.subtitle}
                        date={articles[0].fields.published}
                        tags={articles[0].metadata.tags}
                        articleSelect={(e) => handleArticleSelect(articles[0].fields.URLtitle)}
                        />
                    </Link>
                    }
                
                <div className={classes.articlesHeader}>
                    <Typography variant='h4' className={classes.articleText}>Articles</Typography>
                </div>
            </div>
            {!articles ?
                <></>
                :
                <>
                { articles.map((content,index) => ( 
                    index===0 ?
                    <></>
                    :
                    <Link to={`article/${content.fields.URLtitle}`} key={content.sys.id} style={{textDecoration: 'none'}}>
                        <ArticleCard 
                            key={content.sys.id}
                            id={content.sys.id}
                            pic={content.fields.headerImage.fields.file.url}
                            title={content.fields.title}
                            description={content.fields.subtitle}
                            date={content.fields.published}
                            tags={content.metadata.tags}
                            articleSelect={(e) => handleArticleSelect(content.fields.URLtitle)} 
                        />    
                    </Link>
                ))}
                </>
            } 
        </div>
    )
}

export default Content
