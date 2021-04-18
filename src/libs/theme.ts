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
                body: {
                    backgroundColor: '#fff'
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
                userSelect: 'none'
            }
        }
    }
});

export default responsiveFontSizes(theme);
