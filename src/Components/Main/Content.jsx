import React from 'react'
import ContentCard from './ContentCard'
import * as data from '../../data/content.json'
import useStyles from '../styles'

let contentArray = data.default;

const Content = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.articlesHeader}>
                <h2>Articles</h2>
            </div>
            
            { contentArray.map(content => ( <ContentCard articlePic={content.articlePic} title={content.title} /> ))}
        </div>
    )
}

export default Content
