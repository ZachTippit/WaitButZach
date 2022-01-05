import React, { useState, useEffect, Suspense } from 'react'
import { Typography, Divider, Grid } from '@mui/material';
import useStyles from '../styles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getArticle } from '../../lib/article'


const Article = ({article, articles, findArticle, fetchAndFindArticle}) => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [articleData, setArticle] = useState(article);

    useEffect(() => {
        async function fetchArticle(slug){
            if(!articles){
                setArticle(await fetchAndFindArticle(slug));
            } else{
                setArticle(await findArticle(slug));
            }
            
            console.log('Tooties');
        }

        fetchArticle(params.slug);
        console.log(article, articleData);
    }, [,article, location.pathname, params.slug])

    useEffect(() => {
        async function fetchArticles(){

        }
        if(!articles){
        }
    }, [articles])

    const classes = useStyles();

    return (
        <Grid container direction='row' sx={{pt: 2}}>
            <Grid item xs sm md lg></Grid>
            <Grid item xs={10} sm={10} md={8} lg={6}>
                <div className={classes.articleContainer}>
                {!article ? 
                    <h3>It's loading, bucko.</h3> 
                    : 
                    <>
                        <img src={article.fields.headerImage.fields.file.url} alt={article.fields.headerImage.fields.title} className={classes.articleHeaderPic}/>
                        <Typography sx={{mt: 2, color: '#333'}} variant='h4'><b>{article.fields.title}</b></Typography>
                        <Typography variant='body2' sx={{color: '#111', pl: 2, mt: 1}}>{article.fields.subtitle}</Typography>
                        <Typography gutterBottom variant='body2' sx={{mt: 1, pb: 2, fontSize: '0.625rem', pl: 2}}><i>First published: {article.fields.datePublished}<span style={{paddingRight: '2rem'}} />By Zach Tippit</i></Typography>
                        <Divider variant="middle" sx={{mb: 4}}/>
                        {documentToReactComponents(article.fields.articleBody)}
                        <Divider variant="middle" sx={{mt: 4, mb: 4}}/>
                    </>
                }
                </div>
            </Grid>
            <Grid item xs sm md lg></Grid>
        </Grid>
    )
}

export default Article