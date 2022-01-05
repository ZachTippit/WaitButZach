import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Typography, Box, Tabs, Tab } from '@mui/material'
import { selects } from '../../../data/selects.js'
import useStyles from '../../styles'
import clsx from 'clsx';

let selectsObj = selects;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        key={index}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const SelectsCard = () => {
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div>
            <Typography gutterBottom variant='h4' align='center'>Recommendations</Typography>
            <Typography variant='body1' align='center'>Here are a few things I thought you'd like.</Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    { Object.entries(selectsObj).map(([category, list], index) => (
                        <Tab label={category} id={`simple-tab-${index}`} aria-controls={`simple-tabpanel-${index}`} key={index}/>
                    ))}
                </Tabs>
            </Box>
            { Object.entries(selectsObj).map(([category, list], index) => (
                <TabPanel value={value} index={index} key={index}>
                    <Typography variant='h2' align='center'>{category}</Typography>
                    <Grid container spacing={4}>
                        {list.map((item, index) => (
                        <Grid item xs={12} sm={12} className={clsx(classes.allTimePhotoContainer)} key={index}>
                            <div className={clsx(classes.selectPhotoContainer, classes.winner)}>
                                <img src={item.pic} alt="Avatar" className={classes.selectPhoto} />
                                <div className={classes.selectPhotoOverlay}>
                                    <Typography variant='h2' className={classes.selectPhotoText}>{item.title}</Typography>
                                </div>
                            </div>
                        </Grid>                        
                        ))}   
                    </Grid>
                </TabPanel>
            ))}           
        </div>
    )
}

export default SelectsCard