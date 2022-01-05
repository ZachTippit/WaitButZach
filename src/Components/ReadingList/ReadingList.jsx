import * as React from 'react';
import { styled } from '@mui/material/styles';
import SelectsCard from './Subcomponents/SelectsCard'
import AllTime from './Subcomponents/AllTime'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';

import useStyles from '../styles'

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
                <Typography variant='body1' className={classes.prjSubhead}>I consume a genuinely concerning amount of content so I can at least put it to good use! Here are a few of the things that I have been obsessed with lately.</Typography>

            
                <Accordion expanded={expanded === '2021_Selects'} onChange={handleChange('2021_Selects')}>
                    <AccordionSummary id={'2021_Selects-header'}>
                    <Typography><b>2021 Selects</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{p: 0, pt: 3, pb:3}}>
                        <SelectsCard />
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'Recommendations'} onChange={handleChange('Recommendations')}>
                    <AccordionSummary id={'Recommendations-header'}>
                    <Typography><b>General Recommendations</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{p: 0, pt: 3, pb:3}}>
                        
                    </AccordionDetails>
                </Accordion> */}
                <Accordion expanded={expanded === 'All-Time'} onChange={handleChange('All-Time')}>
                    <AccordionSummary id={'All-Time-header'}>
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