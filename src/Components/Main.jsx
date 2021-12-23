import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import Content  from './Main/Content'
import Sidebar from './Main/Sidebar'
import Footer from './Footer'
import useStyles from './styles'

const Main = () => {
    const classes = useStyles();
    
    return (
        <>
            <Grid container className={classes.mainContainer}>
                <Grid item lg={8} md={12} sm={12} xs={12}>
                    <Content />
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Sidebar />
                </Grid>
            </Grid>
            <div className={classes.margin4rem}>

            </div>
        </>
    )
}

export default Main
