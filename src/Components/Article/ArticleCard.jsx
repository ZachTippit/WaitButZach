import React from 'react'
import { Grid, Typography } from '@mui/material'
import useStyles from '../styles'

const ArticleCard = ({articlePic, title, description, commentBtnCount}) => {
    const classes = useStyles();

    return (
        <div className={classes.articleCard}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={4} zeroMinWidth>
                    <Typography variant='body1' align='center' noWrap>
                        {articlePic}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant='h6'><b>{title}</b></Typography>
                    <div className={classes.articleCardDescription}>
                        <Typography variant='body2' style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{description}</Typography>
                    </div>
                    
                </Grid>
                <Grid item xs={4}>
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
