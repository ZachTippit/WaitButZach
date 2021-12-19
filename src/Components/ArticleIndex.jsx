import React from 'react'
import ArticleCard from './Article/ArticleCard'
import * as data from '../data/content.json'
import useStyles from './styles'

let contentArray = data.default;

const ArticleIndex = () => {
    const classes = useStyles();
    console.log(contentArray)
    return (
        <div>
            <div className={classes.articlesHeader}>
                <h2>Articles</h2>
            </div>
            
            { contentArray.map(content => ( <ArticleCard articlePic={content.articlePic} title={content.title} description={content.description} /> ))}
        </div>
    )
}

export default ArticleIndex