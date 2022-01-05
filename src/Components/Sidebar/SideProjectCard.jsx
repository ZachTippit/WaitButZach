import * as React from 'react';
import { Paper, List, ListItem, ListSubheader, ListItemButton, ListItemText, Link } from '@mui/material';
import * as data from '../../data/projects';
import useStyles from '../styles'

const projects = data.default;

const SideProjectCard = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.sidePrjCard}>
            <List 
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" style={{backgroundColor: '#000d35', color: 'white'}}>
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