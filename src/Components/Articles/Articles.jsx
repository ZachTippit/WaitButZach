import React, {useEffect, useState, Suspense} from 'react'
import { Grid } from '@material-ui/core'
import ArticleCard from '../Article/ArticleCard';
import useStyles from '../styles'
import { Link } from 'react-router-dom'
import { getPosts } from '../../lib/contentful';

const Articles = ({articlesData, findArticle}) => {

    const [articles, setArticles] = useState(articlesData);
    const [page, setPage] = useState(1);

    const classes = useStyles();

    useEffect(() => {
        async function getArticles(){
            const ARTICLES = await getPosts(page);
            setArticles(ARTICLES);
        }

        getArticles();
        // console.log(articles);
    }, [])

    const handleArticleSelect = async(slug) => {
        await findArticle(slug);
    }

    return(
        <>
        
            <Grid container className={classes.mainContainer} spacing={4}>
                <Grid item xl></Grid>
                <Grid item xl={8} lg={12}>
                    <Suspense fallback={<h1>Loading articles...</h1>}>
                    {!articles ? <h1>Still loading...</h1> : 
                    (articles.map((article, index) => (
                        <Link key={article.sys.id} to={`/article/${article.fields.URLtitle}`} style={{textDecoration: 'none'}}>
                            <ArticleCard 
                                id={article.sys.id}
                                pic={article.fields.headerImage.fields.file.url}
                                title={article.fields.title}
                                description={article.fields.subtitle}
                                date={article.fields.datePublished} 
                                tags={article.metadata.tags}
                                findArticle={(e) => handleArticleSelect(article.fields.URLtitle)}/>
                        </Link>
                    )))}
                    </Suspense>
                </Grid>
                <Grid item xl></Grid>
            </Grid>
            <div className={classes.margin4rem}>

            </div>
        </>
    )
}

export default Articles