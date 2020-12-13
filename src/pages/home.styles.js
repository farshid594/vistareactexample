import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        transition: "1s",
        // borderBottom:"1px solid #f0f",
        padding: 15,
        position: 'relative',
        // [theme.breakpoints.between('sm','mdّ')]:{

        // },
        "&::after": {
            content: "''",
            width: 80,
            height: 5,
            backgroundColor: "#f00",
            position: 'absolute',
            borderRadius: 10,
            bottom: 0,
            left: 44
        },
        "&:hover": {
            // backgroundColor: theme.palette.primary.main,
            transition: "1s"
        },
        "&>span": {
            color: "#fff"
        },
    },
    label: {
        color: "#f00"
    }

}))
export default useStyles
