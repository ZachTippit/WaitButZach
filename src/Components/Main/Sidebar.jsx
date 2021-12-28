import React from 'react'
import SideSignUp from './SideSignUp'
import SideProjectCard from './SideProjectCard'
import ExtraCauses from './ExtraCauses'
import { Button, Stack, Typography, Divider } from '@mui/material';
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
                <Typography variant='h4' className={classes.articleText}>Other Content</Typography>
            </div>
            <Stack direction="column" alignItems="center" justifyContent='space-between' spacing={5} divider={<Divider orientation="horizontal" flexItem />}>
                <div style={{width: '100%'}}>
                    <SideSignUp />
                </div>
                <div style={{width: '100%'}}>
                    <ColorButton className={classes.sidebarCard} variant="contained" size='large'><b>Random Post Button</b></ColorButton>
                </div>
                <div style={{width: '100%'}}>
                    <SideProjectCard />
                </div>
                <div style={{width: '100%'}}>
                    <ExtraCauses />
                </div>
            </Stack>
        </div>
    )
}

export default Sidebar
