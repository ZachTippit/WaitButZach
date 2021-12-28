import React from 'react'
import Dune from '../../img/selects/dune.png'
import { Grid, Typography, Link } from '@mui/material'
import useStyles from '../styles'

const ArticleCard = ({articlePic, title, description, commentBtnCount}) => {
    const classes = useStyles();

    return (
        <div className={classes.articleCard} >
            <Grid container direction="row" alignItems="center" component={Link} href='/' style={{textDecoration: 'none', color: '#333'}}>
                <Grid item xs={4} zeroMinWidth>
                    <img src={Dune} alt='Image' className={classes.contentPic}/>
                </Grid>
                <Grid item xs>
                    <Typography variant='h6' sx={{pl: 4}}><b>{title}</b></Typography>
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
