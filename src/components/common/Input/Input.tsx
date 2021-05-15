import { Theme, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const Input = withStyles((theme: Theme) => ({
    root: {
        background: theme.palette.grey[300],
        padding: theme.spacing(0.25, 1)
    }
}))(InputBase);

export default Input;
