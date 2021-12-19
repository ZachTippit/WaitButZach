import React from 'react'
import { Grid, Typography } from '@mui/material'
import useStyles from '../styles'

const ContentCard = ({articlePic, title, commentBtnCount}) => {
    const classes = useStyles();

    return (
        <div className={classes.contentCard}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={4} zeroMinWidth>
                    <Typography variant='body1' align='center' noWrap>
                        {articlePic}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <h4>{title}</h4>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='body1' align='center' noWrap>
                        Comment
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.btmContentBorder}></div>
            {/* <img src={} alt='Article header' /> */}
        </div>
    )
}

export default ContentCard
