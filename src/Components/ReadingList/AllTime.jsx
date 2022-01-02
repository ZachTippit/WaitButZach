import React from 'react'
import PropTypes from 'prop-types';
import { Typography, Box, Tabs, Tab, Link } from '@mui/material'
import { allTime } from '../../data/selects.js'
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
            <Typography>{children}</Typography>
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
                        <Tab label={category} id={`simple-tab-${index}`} ariaControls={`simple-tabpanel-${index}`} />
                    ))}
                </Tabs>
            </Box>
            { Object.entries(allTimeObj).map(([category, list], index) => (
                <TabPanel value={value} index={index}   >
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


                    {/* // <Grid item xs={12} sm={12} md={6} lg={4} sx={{mb: 16}} align='center'>
                    //     <Typography gutterBottom variant='h4' align='center'>{category}</Typography>
                    //     <>
                    //         {list.map((item, index) => (
                    //             index===0 ? 
                    //            <div className={clsx(classes.selectPhotoContainer, classes.winner)}>
                    //                 <img src={item.pic} alt="Avatar" className={classes.selectPhoto} />
                    //                 <div className={classes.selectPhotoOverlay}>
                    //                     <Typography variant='h6'>{item.category}</Typography>
                    //                     <Typography variant='h4' className={classes.selectPhotoText}>{item.title}</Typography>
                    //                 </div>
                    //             </div>
                    //             :
                    //             <div className={clsx(classes.selectPhotoContainer, classes.runnerUp)}>
                    //                 <img src={item.pic} alt="Avatar" className={classes.selectPhoto} />
                    //                 <div className={classes.selectPhotoOverlay}>
                    //                     <Typography variant='h6'>{item.category}</Typography>
                    //                     <Typography variant='h4' className={classes.selectPhotoText}>{item.title}</Typography>
                    //                 </div>
                    //             </div>
                        
                    //         ))}
                    //     </>
                    // </Grid> */}
                
                {/* {selects.map(medium => (
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Typography gutterBottom variant='h4' align='center'>MOVIES</Typography>
                    <ul>
                        {medium.map((item, index) => (
                            index===0 ? 
                            <li>
                                <img src={Dune} alt='top photo!' className={classes.topPhoto} />
                                <Typography variant='h5' align='center' >{item}</Typography>
                            </li>
                            :
                            <li>
                                <img src={Dune} alt='top photo!' className={classes.runnerUpPhoto} />
                                <Typography variant='h6' align='center' >{item}</Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
                ))} */}
            
        </div>
    )
}

export default AllTime