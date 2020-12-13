import { createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import palette from './palette'
import { getDirection, getFont } from '../localization'

const theme = createMuiTheme({
    palette: palette,
    spacing: 2,
    direction: getDirection(),
    typography: {
        allVariants: {
            fontFamily: getFont()
        },
        h1: {
            fontSize: 32,
            fontWeight: "bold"
        },
        h2: {
            fontSize: 28,
            fontWeight: 700
        },
        h3: {
            fontSize: 24,
            fontWeight: 500
        },
        h4: {
            fontSize: 20,
            fontWeight: "bold"
        }
    }
})

export default responsiveFontSizes(theme);