import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import Content  from './Content'
import Sidebar from '../Sidebar/Sidebar'
import Article from '../Article/Article'
import useStyles from '../styles'

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
                    { !articles ? 
                        <h3>Loading posts! If you can see this have a lovely day :)</h3> : 
                        <Content articles={articles} fetchArticle={fetchArticle}/> 
                    }
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

export default Main

// : <Article article={article}/> }
