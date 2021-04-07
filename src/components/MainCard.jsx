import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyle = makeStyles(theme => ({
    card: {
        display: 'flex',
        flexDirection: 'row',
        margin: '1.5em 0 2.2em 0',
        minHeight: '20vh',
        padding: '1em',
        width: '100%',
        boxSizing: 'border-box',
        borderStyle: 'none none solid none',
        borderWidth: '1pt',
        borderColor: '#cccccc',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '5px',
            boxShadow: '10px 5px 20px #8d8d8dAA',
        },
    },
    card_left: {
        padding: '0 2em 0 2em',
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        [theme.breakpoints.down('sm')]: {
            flexGrow: 1,
            justifyContent: 'center'
        },
    },
    card_left__small: {
        [theme.breakpoints.down('md')]: {
            display: 'flex'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },
    card_left__normal: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
    },
    card_image: {
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '30%',
            padding: '1em'
        },
    },
    card_right: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexGrow: 4,
        flexShrink: 1,
        flexBasis: 0,
    },
    cardRight_title: {
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            fontSize: '1.6em',
        },
    },
}))

function MainCard({ title, description, logo, isIconOnRight = false }) {
    const classes = useStyle();

    return (
        <div className={classes.card}>
            <div className={isIconOnRight ? `${classes.card_left} ${classes.card_left__small}` : `${classes.card_left}`}>
                <img src={logo} alt="" className={classes.card_image} />
            </div>
            <div className={classes.card_right}>
                <Typography variant="h4" className={classes.cardRight_title}>{title}</Typography>
                <Typography variant="body1" align="justify">{description}</Typography>
            </div>
            { isIconOnRight ?
                <div className={`${classes.card_left} ${classes.card_left__normal}`}>
                    <img src={logo} alt="" className={classes.card_image} />
                </div>
                : ''
            }
        </div>
    )
}

export default MainCard;