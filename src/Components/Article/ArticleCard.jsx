import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment';
import { capitalCase } from 'change-case'
import useStyles from '../styles'

import { getArticle } from '../../lib/article.js'

const ArticleCard = ({id, pic, title, description, date, tags, articleSelect}) => {
    const classes = useStyles();

    return (
        <div className={classes.articleCard}>
            <Grid container direction="row" alignItems="center" component={Button} onClick={() => getArticle()} style={{textDecoration: 'none', color: '#333'}}>
                <Grid item xs={12} sm={4} md={4} zeroMinWidth>
                    <div className={classes.contentPicContainer}>
                        <img src={pic} alt={`${pic}`} className={classes.contentPic}/>
                    </div>
                </Grid>
                <Grid item xs>
                    <Typography variant='h6'><b>{title}</b></Typography>
                    <div className={classes.articleCardDescription}>
                        <Typography variant='body2' style={{overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.75rem'}}><i>Published: {date}</i></Typography>
                    </div>
                    <Grid container direction='row' sx={{ display: 'flex', justifyContent: 'center', pt: 1, pb: 1, width: '90%', margin: 'auto'}} className={classes.articleCardDescription}>
                        {/* <Grid item md={2} sx={{display: {xs: 'none', sm: 'none', md: 'inherit' }, pl: 2}} alignSelf='start'>
                            <Typography variant='body1' sx={{fontSize: '0.75rem'}}><i>Tags:</i></Typography>
                        </Grid> */}
                        {tags !== [] && tags.map((tag, index) => (
                            <Grid item xs md={2} sx={{mr: 1, ml: 1}} alignSelf='center' key={index}>
                                <img src={badgeMaker(tag.sys.id)} alt={tag.sys.id} style={{display: 'block', margin:'auto', textAlign: 'center' }}/>
                            </Grid>))}
                    </Grid>
                    <div className={classes.articleCardDescription}>
                        <Typography variant='body2' style={{overflow: 'hidden', textOverflow: 'ellipsis', width: '80%', margin: 'auto'}}>{description}</Typography>
                    </div>
                    
                </Grid>
                <Grid item display={{xs: 'none', sm: 'flex'}}>
                    <CommentIcon color="action" size="small" />
                </Grid>
            </Grid>

        </div>
    )
}

export default ArticleCard;


const badgeMaker = (tag) => {
    const tag2 = capitalCase(tag)
    // console.log(tag2)
    const URL = 'https://img.shields.io/badge/'
    let badge = '';
    switch(tag){
        case 'devLog':
            badge = `${URL}-${tag2}-150C3B`
            break;
        case 'movieReview':
            badge = `${URL}-${tag2}-591509`
            break;
        case 'theZachVarietyShow':
            badge = `${URL}-${tag2}-B8A512`
            break;
        case 'gaming':
            badge = `${URL}-${tag2}-067D4A`
            break;
        case 'front-end':
            badge = `${URL}-${tag2}-88c0c2`
            break;
        case 'back-end':
            badge = `${URL}-${tag2}-5c2670`
            break;
        default:
            badge = `${URL}-${tag2}-lightgrey`
            break;
    }

    return badge;
}