import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import Content  from './Content'
import Sidebar from '../Sidebar/Sidebar'
import Article from '../Article/Article'
import useStyles from '../styles'
import '../animations.css'

const Main = ({ articles, fetchArticle }) => {
    const classes = useStyles();
    
    // const [article, setArticle] = useState();

    // useEffect(() => {
    //     console.log('Article', article);
    //   }, [article])
    
    return (
        <>
            <Grid container className={classes.mainContainer} spacing={4}>
                <Grid item lg={8} md={12} sm={12} xs={12}>
                    <Content articles={articles} fetchArticle={fetchArticle}/> 
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12} className='fade-in-bottom'>
                    <Sidebar />
                </Grid>
            </Grid>
            <div className={classes.margin4rem}>

            </div>
        </>
    )
}

export default Main

// : <Article article={article}/> }
