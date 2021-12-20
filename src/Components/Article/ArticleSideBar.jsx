import React from 'react'
import SideSignUp from '../Main/SideSignUp'
import ExtraCauses from '../Main/ExtraCauses'
import { Button, Stack } from '@mui/material';
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

const ArticleSidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarHeader}>
                <h2>Sidebar</h2>
            </div>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                <SideSignUp />
                <ColorButton className={classes.sidebarCard} variant="contained" size='large'><b>Random Post Button</b></ColorButton>
                <ExtraCauses />
            </Stack>
        </div>
    )
}

export default ArticleSidebar
