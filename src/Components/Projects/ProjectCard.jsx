import React from 'react'
import { Grid, Typography, Link } from '@mui/material'
import useStyles from '../styles'



const ProjectCard = ({articlePic, title, description, techArray, link}) => {
    const classes = useStyles();
    console.log('techarray', techArray)
    return (
        <div className={classes.articleCard}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" component={Link} href={link}>
                <Grid item xs={4} zeroMinWidth>
                    <Typography variant='body1' align='center' noWrap>
                        {articlePic}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant='h6'><b>{title}</b></Typography>
                    {techArray.map(tech => (<img src={badgeMaker(tech)}/>))}
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

const badgeMaker = (tech) => {
    const URL = 'https://img.shields.io/badge/'
    let badge = '';
    switch(tech){
        case 'React':
            badge = `${URL}-${tech}-blueviolet`
            break;
        case 'Node.js':
            badge = `${URL}-${tech}-222`
            break;
        case 'MUI':
            badge = `${URL}-${tech}-informational`
            break;
        case 'Heroku':
            badge = `${URL}-${tech}-red`
            break;
        default:
            badge = `${URL}-${tech}-lightgrey`
            break;
    }

    return badge;
}

export default ProjectCard;
