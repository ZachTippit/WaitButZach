import React from 'react'
import Dune from '../../img/selects/dune.png'
import { Grid, Typography, Link, Button } from '@mui/material'
import useStyles from '../styles'

import { getArticle } from '../../lib/article.js'

const ArticleCard = ({pic, title, description, date, commentBtnCount, articleID}) => {
    const classes = useStyles();

    return (
        <div className={classes.articleCard} >
            <Grid container direction="row" alignItems="center" component={Button} onClick={() => getArticle(articleID)} style={{textDecoration: 'none', color: '#333'}}>
                <Grid item xs={4} zeroMinWidth>
                    <div className={classes.contentPicContainer}>
                        <img src={pic} alt='Image' className={classes.contentPic}/>
                    </div>
                </Grid>
                <Grid item xs>
                    <Typography variant='h6' sx={{pl: 4}}><b>{title}</b></Typography>
                    <div className={classes.articleCardDescription}>
                        <Typography variant='body2' sx={{pl: 4}} style={{overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.75rem'}}><i>Published: {date}</i></Typography>
                    </div>
                    <div className={classes.articleCardDescription}>
                        <Typography variant='body2' sx={{pl: 4}} style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{description}</Typography>
                    </div>
                    
                </Grid>
                <Grid item display={{xs: 'none', sm: 'flex'}}>
                    <Typography variant='body1' align='center'>
                        Comment
                    </Typography>
                </Grid>
            </Grid>
            {/* <img src={} alt='Article header' /> */}
        </div>
    )
}

export default ArticleCard;
