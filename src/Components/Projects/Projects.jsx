import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Link, Grid, Button } from '@mui/material';

import * as data from '../../data/projects.json'
import useStyles from '../styles'

let projects = data.default;


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

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

const Projects = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }

    const classes = useStyles();

    return(
        <div className={classes.projects}>
            <div className={classes.prjHeader}>
                <Typography variant='h4' className={classes.prjText}>Projects</Typography>
            </div>
                <Typography variant='body1' className={classes.prjSubhead}>Ah, so you have found your way to my projects page! Please <Link href='/contact'>reach out if you have any questions or comments.</Link></Typography>
                <Typography variant='body1' className={classes.prjSubhead}>There are live sites and </Typography>

            { projects.map((content, index) => ( 
                <Accordion expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)} key={content.title}>
                    <AccordionSummary aria-controls={`panel${index+1}-content`} id={`panel${index+1}-header`}>
                    <Typography><b>{content.title}</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}
                          sx={{ flexDirection: { xs: 'column', sm: "column", md: "row"} }}
                        >
                            <Grid item xs={12} sm={12} md={4}>
                                <img src={content.pic} className={classes.projectPic} alt={`${content.pic}`}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} sx={{height: '100%'}}>
                              <div className={classes.projectCardText}>
                                <Typography gutterBottom variant='h5'><b>{content.title}</b></Typography>
                                <Typography variant='body1'>{content.description}</Typography>
                                <Button variant='contained' sx={{mt: 4, pt: 1, pb: 1}} href={content.link} className={classes.prjLinkBtn}>Check out the project!</Button>
                              </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                              <div className={classes.projectCardText}>
                                <Typography gutterBottom variant='h5'><b>Tech Used</b></Typography>
                                {content.tech.map(tech => (<img src={badgeMaker(tech)} style={{padding: '0.25rem'}} alt={`${tech}`} key={tech}/>))}
                              </div>
                            </Grid>
                        </Grid>
                        
                    </AccordionDetails>
                </Accordion>
                // <ProjectCard 
                // articlePic={content.articlePic} 
                // title={content.title} 
                // description={content.description} 
                // techArray={content.tech} 
                // link={content.link}/> 
                ))}
        </div>
    )
}

export default Projects;

// import React from 'react'


// const Projects = () => {
//     const classes = useStyles();
//     return (
//         <div>
//             <div className={classes.articlesHeader}>
//                 <h2>Articles</h2>
//             </div>
            
//             
//         </div>
//     )
// }