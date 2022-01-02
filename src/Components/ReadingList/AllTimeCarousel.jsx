import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Typography } from '@mui/material';

import useStyles from '../styles'

const AllTimeCarousel = ({list}) => {

    const classes = useStyles();

    return(
            <Carousel>
                {list.map((item, index) => (
                    <div className={classes.allTimeCarousel}>
                        <img src={item.pic} alt="Avatar" className={classes.selectPhoto} />
                        <div className={classes.allTimePhotoOverlay}>
                            <div className={classes.allTimeText}>
                                <Typography variant='subtitle' align='left'><i>{item.category}</i></Typography>
                                <div className={classes.bump}>
                                    <Typography variant='h5' align='left' className={classes.slideIn}>{item.title}</Typography>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </Carousel>
    )
} 

export default AllTimeCarousel;