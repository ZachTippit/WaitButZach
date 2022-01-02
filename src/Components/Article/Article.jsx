import React from 'react'
import { Typography, Divider } from '@mui/material';
import useStyles from '../styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Article = ({article}) => {

    const classes = useStyles();

    console.log(article);
    return (
        <div className={classes.articleContainer}>
            <img src={article.headerImage.fields.file.url} alt={article.headerImage.fields.title} className={classes.articleHeaderPic}/>
            <Typography sx={{mt: 2, color: '#333'}} variant='h4'><b>{article.title}</b></Typography>
            <Typography variant='body2' sx={{color: '#111', pl: 2, mt: 1}}>{article.subtitle}</Typography>
            <Typography gutterBottom variant='body2' sx={{mt: 1, pb: 2, fontSize: '0.625rem', pl: 2}}><i>First published: {article.datePublished}<span style={{paddingRight: '2rem'}} />By Zach Tippit</i></Typography>
            <Divider variant="middle" sx={{mb: 4}}/>
            {documentToReactComponents(article.articleBody)}
            <Divider variant="middle" sx={{mt: 4, mb: 4}}/>
        </div>
    )
}

export default Article
