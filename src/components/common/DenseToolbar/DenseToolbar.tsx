import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '~components/common/DenseToolbar/styles';

const DenseToolbar: React.FC = ({ children }) => {
    const classes = useStyles();

    return (
        <Toolbar variant="dense" classes={{ dense: classes.denseToolbar }}>
            {children}
        </Toolbar>
    );
};

export default DenseToolbar;
