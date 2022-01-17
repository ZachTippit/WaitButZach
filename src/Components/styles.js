import { makeStyles } from '@material-ui/core/styles';

//  Quick Reference Colors: 

//      Header/text background color:   #000d35
//      Navbar/Footer color:            #555
//      


export default makeStyles((theme) => ({ 
    app: {
        width: '100%',
        margin: 'auto',
        overflowX: 'hidden'
    },

    w100: {
        width: '100%'
    },

    // Top Image
    topLogoContainer: {
        width: '100%',
        margin: 'auto',     
        paddingBottom: '0',
        display: 'flex',
        alignItems: 'flex-end'   
    },

    topLogoIMG: {
        maxHeight: '150px',
        width: '300px',
        margin: 'auto',
        paddingBottom: '0',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            maxHeight: '150px'
        }   
    },

    // Navbar

    navbar: {
        background: 'black'
    },

    homeBtn: {
        marginRight: '4rem'
    },

    navBtn: {
        display: 'flex',
        textAlign: 'center',
        width: '100%',
        height: '4rem',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
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

    featuredContent: {
        display: 'block',
        margin: 'auto',
        marginBottom: '2rem',
        width: '80%'
    },

    featuredContentPic: {
        display: 'block',
        margin: 'auto',
        width: '40%',
        paddingBottom: '1.5rem'
    },

    featuredContentDescription: {
        minWidth: '200px',
        width: '60%',
        margin: 'auto',
        paddingTop: '0.5rem',
        height: '50px',
        overflow: 'hidden'
    },

    contentPicContainer: {
        height: '160px',
        overflowY: 'hidden',
        display: 'flex',
        justifyContent: 'center'
    },

    contentPic: {
        objectFit: 'cover',
        width: '100%',
    },

    btmContentBorder: {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        width: '90%',
        borderBottom: 'black 1px solid'
    },



    // Main > Sidebar

    sidebar: {
        height: '100%',
        borderLeft: '2px black dotted',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        [theme.breakpoints.down('md')]: { borderLeft: 'none', }
    },

    sidebarHeader: {
        paddingLeft: '1.5rem',
        width: '100%',
        borderBottom: " #000d35 6px solid",
        marginBottom: '1.5rem'
    },

    sidePrjCard: {
        display: 'block',
        width: '100%',
        overflow: 'auto',
        maxHeight: '300px',
        alignItems: "center",
        justifyContent: "center"
    },

    signUpCard: {
        width: '100%',
        backgroundColor: 'lightGray',
        margin: 'auto'
    },

    extraCausesContainer: {
        width: '100%',
        margin: 'auto'
    },

    emailInput: {
        backgroundColor: 'white',
        margin: 'auto'
    },

    sidebarCard: {
        width: '100%',
        margin: 'auto'
    },

    randomPostCard: {
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
    },

    margin4rem: {
        marginBottom: '4rem'
    },

    coffeeHeader: {
        paddingLeft: '2rem',
        width: '80%',
        borderBottom: "#000d35 6px solid",
        marginBottom: '2rem'
    },
    
    coffeeText: {
        backgroundColor: '#000d35',
        color: 'white',
        width: 'fit-content',
        padding: '0.25rem'
    },



    // About

    about: {
        width: '80%',
        margin: 'auto',
        minHeight: '60vh',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        [theme.breakpoints.down('md')]: {
            minHeight: '90vh',  
        }
    },

    aboutImg: {
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',

    },

    aboutText: {
        paddingLeft: '2rem',
        display: 'flex',
        direction: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        [theme.breakpoints.down('md')]: {
            paddingTop: '2rem',
        }

    },

    aboutBtnContainer: {
        width: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-between'
    },

    aboutBtn: {
        display: 'block',
        marginTop: '2rem'
    },

    resumeBtn: {
        paddingTop: '1rem',
        paddingBottom: '2rem'
    },

    aboutLinkContainer: {
        backgroundColor: 'lightGray',
        padding: '3rem'
    },

    socialContainer: {
        paddingTop: 0,
        [theme.breakpoints.down('md')]: {
            paddingTop: '4rem'
        }
    },

    socialBtnContainer: {
        display: 'flex',
        width: '100%',
    },

    aboutSocialBtn: {
        width: '33%',
        textAlign: 'center',
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
        borderBottom: "#000d35 6px solid",
        marginBottom: '2rem'
    },

    articleCard: {
        width: '80%',
        padding: '20px',
        margin: 'auto',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        borderBottom: 'black 1px solid',
        transition: '0.5s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(30,30,30,0.5)',
        }
    },

    articleText: {
        backgroundColor: '#000d35',
        color: 'white',
        width: 'fit-content',
        padding: '0.25rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem'
    },

    articleCardDescription: {
        maxHeight: '2.5rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

    emailSignUp_ARTICLE: {
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        width: '50%',
        margin: 'auto'
    },



    //  Article Page
    
    articleContainer: {
        paddingLeft: '2rem',
        paddingRight: '2rem'
    },

    articleHeaderPic: {
        display: 'block',
        width: '100%',
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '70%'
        }
    },

    code: {
        backgroundColor: '#eee',
        padding: '1rem',
        overflowX: 'scroll',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.75rem'
        }
    },

    articleImageBlock: {
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: '75%'
        }
    },


    // Projects

    projects: {
        minHeight: '70vh',
        paddingBottom: '2rem'
    },

    prjHeader:{
        paddingLeft: '2rem',
        width: '80%',
        borderBottom: "#000d35 6px solid",
        paddingTop: '2rem',
        marginBottom: '2rem'
    },

    prjText: {
        backgroundColor: '#000d35',
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

    projectCardText: {
        paddingLeft: '2rem',
        height: '100%'
    },

    prjLinkBtn: {
        position: 'absolute',
        bottom: '0'
    },



    // Contact

    contactContainer: {
        width: '80%',
        margin: 'auto',
        marginTop: '2rem',
        marginBottom: '4rem',
    },


    // Reading List
    readingList: {
        minHeight: '62vh',
        paddingBottom: '2rem'
    },

    topPhoto: {
        width: '300px',
        margin: 'auto',
    },

    runnerUpPhoto: {
        width: '250px',
    },

    selectPhotoContainer: {
        margin: 'auto',
        marginBottom: '2rem',
        position: 'relative',
        '&:hover': {
                 opacity: "1"
        }
    },

    winner: {
        width: '300px',
        height: '300px'
    },

    runnerUp: {
        width: '250px',
        height: '250px'
    },

    selectPhoto: {
        display: 'block',
        width: '100%',
        height: '100%',
        transition: '0.5s ease-in-out',
        '&:hover' : {
            filter: 'blur(3px)'
        }
    },

    allTimeCarousel: {
        maxWidth: '30%',
        maxHeight: '30%',
        margin: 'auto'
    },

    selectPhotoOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#444',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0,
        transition: '0.5s ease',
        '&:hover': {
            opacity: '0.7',
        }
    },

    selectPhotoText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    },

    allTimePhoto: {
        display: 'block',
        width: '100%',
        height: '100%',
        transition: '0.5s ease-in-out',
        '&:hover' : {
            filter: 'blur(3px)'
        }
    },

    allTimePhotoContainer: {
        width: '50%',
        margin: 'auto',
        position: 'relative',
        '&:hover': {
                 opacity: "1"
        }
    },

    allTimePhotoOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#444',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 1,
        transition: '0.5s ease',
        '&:hover': {
            opacity: '0.4',
        }
    },

    bump: {
        paddingLeft: '2rem'
    },
    
    allTimeText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    // Footer

    footer: {
        minHeight: '120px',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        width: '100%',
        margin: 'auto',
        backgroundColor: '#333',
        overflow: 'hidden',
        verticalAlign: 'center'
    }

}))