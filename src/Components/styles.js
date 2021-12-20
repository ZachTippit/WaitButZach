import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({ 
    app: {
        maxWidth: '1400px',
        margin: 'auto',
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

    // Top Image
    topLogoContainer: {
        width: '100%',
        margin: 'auto',     
        paddingTop: '20px',
        paddingBottom: '0',
        display: 'flex',
        alignItems: 'flex-end'   
    },

    topLogoIMG: {
        maxHeight: '150px',
        width: '300px',
        paddingLeft: '10%',
        paddingBottom: '0'   
    },

    // Navbar

    navbar: {
        backgroundColor: 'black'
    },

    homeBtn: {
        marginRight: '4rem'
    },

    navBtn: {
        textAlign: 'center',
        width: '100%',
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
        [theme.breakpoints.down('md')]: {
            minHeight: '150vh',  
        }
        
    },



    // Main > Content

    articlesHeader: {
        paddingLeft: '2rem',
        width: '80%',
        borderBottom: "#3A84C5 6px solid"
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
        paddingRight: '2rem',
        [theme.breakpoints.down('md')]: { borderLeft: 'none', }
    },

    sidebarHeader: {
        paddingLeft: '1.5rem',
        width: '80%',
        borderBottom: "#3A84C5 6px solid",
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

    articleIndex: {
        paddingTop: '2rem',
        minHeight: '80vh',
        [theme.breakpoints.down('md')]: {
            minHeight: '85vh',  
        }
    },

    articlesHeader: {
        paddingLeft: '2rem',
        width: '80%',
        borderBottom: "#3A84C5 6px solid",
        marginTop: '2rem',
        marginBottom: '2rem'
    },

    articleCard: {
        width: '80%',
        padding: '20px',
        margin: 'auto',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        borderBottom: 'black 1px solid',
        marginBottom: '0.5rem'
    },

    articleText: {
        backgroundColor: '#3A84C5',
        color: 'white',
        width: 'fit-content',
        padding: '0.25rem'
    },

    articleCardDescription: {
        maxHeight: '2.5rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

    emailSignUp_ARTICLE: {
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem'
    },



    // Projects

    projects: {
        minHeight: '70vh'
    },

    prjHeader:{
        paddingLeft: '2rem',
        width: '80%',
        borderBottom: "#3A84C5 6px solid",
        marginTop: '2rem',
        marginBottom: '2rem'
    },

    prjText: {
        backgroundColor: '#3A84C5',
        color: 'white',
        width: 'fit-content',
        padding: '0.25rem'
    },

    prjSubhead: {
        paddingLeft: '2rem',
        width: '80%',
        paddingBottom: '2rem'
    },

    projectPic: {
        width: '100%',
        margin: 'auto'
    },

    // Footer

    footer: {
        minHeight: '80px',
        width: '100%',
        margin: 'auto',
        backgroundColor: '#333',
        overflow: 'hidden',
        verticalAlign: 'center'
    }

}))