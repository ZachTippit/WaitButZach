import React from 'react'
import SideSignUp from './SideSignUp'
import SideProjectCard from './SideProjectCard'
import ExtraCauses from './ExtraCauses'
import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import useStyles from '../styles'

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <div className={classes.articlesHeader}>
                <Typography variant='h4' className={classes.articleText}>Sidebar</Typography>
            </div>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                <SideSignUp />
                <ColorButton className={classes.sidebarCard} variant="contained" size='large'><b>Random Post Button</b></ColorButton>
                <SideProjectCard />
                <ExtraCauses />
            </Stack>
        </div>
    )
}

export default Sidebar
