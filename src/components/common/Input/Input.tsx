import { Theme, withStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

const Input = withStyles((theme: Theme) => ({
    root: {
        background: theme.palette.grey[300],
        padding: `${theme.spacing(0.25)}px ${theme.spacing(1)}px`
    }
}))(InputBase);

export default Input;
