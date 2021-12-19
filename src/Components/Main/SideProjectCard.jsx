import * as React from 'react';
import { Paper, List, ListItem, ListSubheader, ListItemButton, ListItemText, Link } from '@mui/material';
import * as Projects from '../../data/projects.json';
import useStyles from '../styles'

const projects = Projects.default;

const SideProjectCard = () => {

    const classes = useStyles();

    console.log(projects);

    return (
        <Paper className={classes.sidePrjCard}>
            <List 
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" style={{backgroundColor: 'darkBlue', color: 'white'}}>
                        <b>Portfolio Quick Links</b>
                    </ListSubheader>}
            >
                {projects.map((project, index) => (
                    <ListItem key={index} component="div" disablePadding>
                        <ListItemButton component={Link} href={project.link} style={{ backgroundColor: index%2===1? '#eee' : null }}>
                            <ListItemText primary={project.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}

export default SideProjectCard;