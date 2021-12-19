import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({ 
    app: {
        maxWidth: '1400px',
        margin: 'auto'
    },

    // Top Image
    topLogoContainer: {
        width: '100%',
        margin: 'auto',     
        paddingTop: '20px'   
    },

    topLogoIMG: {
        width: '200px',
        paddingLeft: '10%'
    },

    centerDiv: {
        margin: 'auto'
    },

    w70: {
        width: '70%'
    },

    blueBG: {
        backgroundColor: 'blue',
        height: '60vh'
    },

    greenBG: {
        backgroundColor: 'green',
        height: '60vh'
    },

    w100: {
        width: '100%'
    },

    // Navbar

    homeBtn: {
        marginRight: '4rem'
    },

    navBtn: {
        transition: "background 0.5s, color 0.5s",
        '&:hover': {
            backgroundColor: "#555",
            color: 'lightGray'
         },
    },

    // Main

    mainContainer: {
        paddingTop: '2rem',
        minHeight: '80vh',
        overflow: 'auto'
    },



    // Main > Content

    articlesHeader: {
        paddingLeft: '2rem',
        width: '80%',
        borderBottom: "lightblue 6px solid"
    },

    contentCard: {
        width: '100%',
        padding: '20px',
        margin: 'auto',
    },

    btmContentBorder: {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        width: '90%',
        borderBottom: 'black 1px solid'
    },



    // Main > Sidebar

    sidebar: {
        height: '60vh',
        borderLeft: '2px black dotted',
        paddingLeft: '2rem',
        paddingRight: '2rem'
    },

    sidebarHeader: {
        paddingLeft: '1.5rem',
        width: '80%',
        borderBottom: "lightblue 6px solid",
        marginBottom: '1.5rem'
    },

    sidePrjCard: {
        width: '400px',
        overflow: 'auto',
        maxHeight: '200px'
    },

    signUpCard: {
        width: '400px',
        backgroundColor: 'lightgreen',
        margin: 'auto'
    },

    extraCausesContainer: {
        width: '400px',
        margin: 'auto'
    },

    emailInput: {
        backgroundColor: 'white'
    },

    sidebarCard: {
        width: '400px',
        margin: 'auto'
    },

    randomPostCard: {
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
    },



    // Articles

    articleCard: {
        width: '80%',
        padding: '20px',
        margin: 'auto',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        borderBottom: 'black 1px solid',
        marginBottom: '0.5rem'
    },

    articleCardDescription: {
        maxHeight: '2.5rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

}))