import React from 'react'
import PropTypes from 'prop-types';
import { Typography, Box, Tabs, Tab, Link } from '@mui/material'
import { allTime } from '../../../data/selects.js'
import AllTimeCarousel from './AllTimeCarousel.jsx';

let allTimeObj = allTime;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
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

const AllTime = () => {
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    
    return (
        <div>
            <Typography gutterBottom variant='h4' align='center'>These are my all time favorites!</Typography>
            <Typography variant='body1' align='center'>Enjoy the list and <Link href='/contact'>let me know if you're curious about any others.</Link></Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    { Object.entries(allTimeObj).map(([category, list], index) => (
                        <Tab label={category} id={`simple-tab-${index}`} key={index}/>
                    ))}
                </Tabs>
            </Box>
            { Object.entries(allTimeObj).map(([category, list], index) => (
                <TabPanel value={value} index={index} key={index}>
                    <Typography variant='h2' align='center'>{category}</Typography>
                    <AllTimeCarousel list={list}/>
                    {/* <Grid container>
                        {list.map((item, index) => (
                        <Grid item xs={6} sm={4} className={clsx(classes.allTimePhotoContainer)}>
                                
                            </Grid>                        
                        ))}   
                    </Grid> */}
                    
                </TabPanel>
            ))}            
        </div>
    )
}

export default AllTime