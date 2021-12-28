import * as React from 'react';
import { styled } from '@mui/material/styles';
import SelectsCard from './ReadingList/SelectsCard'
import AllTime from './ReadingList/AllTime'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Link, Grid } from '@mui/material';

import * as data from '../data/projects.json'
import useStyles from './styles'

let projects = data.default;


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ReadingList = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }

    const classes = useStyles();

    return(
        <div className={classes.readingList}>
            <div className={classes.prjHeader}>
                <Typography variant='h4' className={classes.prjText}>Reading List</Typography>
            </div>
                <Typography variant='body1' className={classes.prjSubhead}>These have all been created in 2021 with the exception of the HANSCycle project. Used technologies are listed in each. Reach out if you have any questions/want to know more!</Typography>

            
                <Accordion expanded={expanded === '2021_Selects'} onChange={handleChange('2021_Selects')}>
                    <AccordionSummary aria-controls={'2021_Selects-content'} id={'2021_Selects-header'}>
                    <Typography><b>2021 Selects</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{p: 0, pt: 3, pb:3}}>
                        <SelectsCard />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'Recommendations'} onChange={handleChange('Recommendations')}>
                    <AccordionSummary aria-controls={'Recommendations-content'} id={'Recommendations-header'}>
                    <Typography><b>General Recommendations</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{p: 0, pt: 3, pb:3}}>
                        
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'All-Time'} onChange={handleChange('All-Time')}>
                    <AccordionSummary aria-controls={'All-Time-content'} id={'All-Time-header'}>
                    <Typography><b>All-Time Favorites</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{p: 0, pt: 3, pb:3}}>
                        <AllTime />
                    </AccordionDetails>
                </Accordion>
        </div>
    )
}

export default ReadingList;