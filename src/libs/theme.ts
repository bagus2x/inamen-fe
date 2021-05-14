import { grey } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#607d8b'
        },
        secondary: {
            main: '#feC556',
            contrastText: '#263238'
        },
        text: {
            primary: '#263238'
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        },
        h1: {
            fontSize: '2em',
            fontWeight: 500
        },
        h2: {
            fontSize: '1.5em',
            fontWeight: 500
        },
        h3: {
            fontSize: '1.17em',
            fontWeight: 500
        },
        h4: {
            fontSize: '1.12em',
            fontWeight: 400
        },
        h5: {
            fontSize: '0.83em',
            fontWeight: 300
        },
        h6: {
            fontSize: '0.75em',
            fontWeight: 300
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                ':focus': {
                    outline: 'none'
                },
                '::-moz-focus-inner': {
                    border: 0
                },
                a: {
                    textDecoration: 'none !important'
                }
            }
        },
        MuiButton: {
            root: {
                borderRadius: 8
            }
        },
        MuiInputBase: {
            root: {
                borderRadius: 8
            }
        },
        MuiLink: {
            root: {
                userSelect: 'none',
                cursor: 'pointer'
            }
        }
    }
});

export default responsiveFontSizes(theme);
