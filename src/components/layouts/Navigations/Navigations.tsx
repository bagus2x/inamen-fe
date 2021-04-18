import { AppBar } from '@material-ui/core';
import DenseToolbar from '~components/common/DenseToolbar';
import NavbarTitle from '~components/views/NavbarTitle';
import use100vh from '~libs/hooks/100vh';
import useStyles from './styles';

const Navigations: React.FC = ({ children }) => {
    const classes = useStyles();
    const height = use100vh();

    return (
        <div className={classes.root} style={{ height }}>
            <AppBar color="inherit" elevation={1} className={classes.navbar}>
                <DenseToolbar>
                    <NavbarTitle />
                </DenseToolbar>
            </AppBar>
            <nav className={classes.sideNavbar}>a</nav>
            <main className={classes.content}>{children}</main>
        </div>
    );
};

export default Navigations;
