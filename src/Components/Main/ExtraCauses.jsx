import React from 'react'
import { Typography } from '@mui/material'
import useStyles from '../styles'

const ExtraCauses = () => {
    const classes = useStyles();

    return (
        <div className={classes.extraCausesContainer}>
            <div className={classes.coffeeHeader}>
                <Typography variant='h5' className={classes.coffeeText}>Don't Buy Me a Coffee</Typography>
            </div>
            <p>Please do not fund my caffeine addiction any further. Contribute to something helpful instead!</p>
            <ul>
                <li><a href='https://www.globalgiving.org/projects/afghanistan-emergency-fund/projects/#menu'>Afghanistan Emergency Fund</a></li>
                <li><a href='https://www.plannedparenthood.org/get-involved/other-ways-give'>Planned Parenthood</a></li>
                <li><a href='https://www.charitywater.org/donate'>Project Water</a></li>
                <li><a href='https://donate.wikimedia.org/'>Wikipedia (they need it!)</a></li>
            </ul>
            
        </div>
    )
}

export default ExtraCauses
