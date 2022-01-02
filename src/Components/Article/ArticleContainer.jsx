import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import Content  from '../Main/Content'
import Sidebar from '../Main/Sidebar'
import Article from './Article'
import useStyles from '../styles'

import { getArticle } from '../../lib/article.js'


const ArticleContainer = () => {
    const classes = useStyles();
    const [article, setArticle] = useState();

    const getArticleID = async (id) => {
        const ARTICLE = await getArticle(id);
        setArticle(ARTICLE);
    }

    // useEffect(() => {
    //     console.log('Article', article);
    //   }, [article])

    return (
        <>
            <Grid container className={classes.mainContainer} spacing={4}>
                <Grid item lg={8} md={12} sm={12} xs={12}>
                    { !article ? <Content articleSelect={(title) => getArticleID(title)}/> : <Article article={article}/> }
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Sidebar />
                </Grid>
            </Grid>
            <div className={classes.margin4rem}>

            </div>
        </>
    )
}

export default ArticleContainer