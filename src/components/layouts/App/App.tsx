import React, { useEffect, useState, MouseEvent } from 'react';
import { Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuRounded';
import AddIcon from '@material-ui/icons/AddRounded';
import NotifIcon from '@material-ui/icons/NotificationsRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import NavigationIcon from '@material-ui/icons/NavigationRounded';
import HistoryIcon from '@material-ui/icons/HistoryRounded';
import VideoGameIcon from '@material-ui/icons/VideogameAssetRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import NavbarTitle from '~components/views/NavbarTitle';
import use100vh from '~libs/hooks/100vh';
import useStyles from '~components/layouts/App/styles';
import DenseToolbar from '~components/common/DenseToolbar';
import Link from '~components/common/Link';
import SearchInput from '~components/views/SearchInput';

const App: React.FC = ({ children }) => {
    const classes = useStyles();
    const height = use100vh();
    const isSmallDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const [sidenavShrink, setSidenavShrink] = useState(false);
    const [anchorAccount, setAnchorAccount] = useState<null | HTMLElement>(null);
    const [visibleMobileSearch, setVisibleMobileSearch] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            if (isSmallDown) {
                setSidenavShrink(true);
                return;
            }
            setSidenavShrink(false);
        }, 1000);
        return () => clearTimeout(id);
    }, [isSmallDown]);

    const handleSidenavShrink = () => {
        setSidenavShrink(!sidenavShrink);
    };

    const handleProfileMenuOpen = (ev: React.MouseEvent<HTMLElement>) => {
        setAnchorAccount(ev.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorAccount(null);
    };

    const handleVisibleMobileSearch = () => {
        setVisibleMobileSearch(true);
    };

    const handleInvsibleMobileSearch = () => {
        setVisibleMobileSearch(false);
    };

    return (
        <div className={classes.root} style={{ height }}>
            <AppBar color="inherit" elevation={1}>
                <DenseToolbar>
                    <div className={classes.toolbarLeft}>
                        <Hidden smDown>
                            <NavbarTitle />
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton size="small" color="primary" edge="start" onClick={handleSidenavShrink}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton size="small" color="primary" edge="start" onClick={handleVisibleMobileSearch}>
                                <SearchIcon />
                            </IconButton>
                        </Hidden>
                    </div>
                    <Hidden smDown>
                        <div className={classes.toolbarCenter}>
                            <SearchInput />
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        {visibleMobileSearch && <SearchInput mobile onInactive={handleInvsibleMobileSearch} />}
                    </Hidden>
                    <div className={classes.toolbarRight}>
                        <IconButton size="small" color="primary" component={Link} href="/studio">
                            <AddIcon />
                        </IconButton>
                        <IconButton size="small" color="primary">
                            <NotifIcon />
                        </IconButton>
                        <IconButton size="small" color="primary" onClick={handleProfileMenuOpen}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorAccount}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            id={'menuId'}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={!!anchorAccount}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </DenseToolbar>
            </AppBar>
            <nav className={clsx(classes.sideNavbar, { [classes.sidenavShrink]: sidenavShrink })}>
                <IconButton size="small" color="primary" component={Link} href="/browse">
                    <Tooltip enterDelay={1000} arrow placement="right" title="Browse">
                        <NavigationIcon />
                    </Tooltip>
                </IconButton>
                <IconButton size="small" color="primary" component={Link} href="/history">
                    <Tooltip enterDelay={1000} arrow placement="right" title="History">
                        <HistoryIcon />
                    </Tooltip>
                </IconButton>
                <IconButton size="small" color="primary" component={Link} href="/matches">
                    <Tooltip enterDelay={1000} arrow placement="right" title="My matches">
                        <VideoGameIcon />
                    </Tooltip>
                </IconButton>
            </nav>
            <main className={clsx(classes.content, { [classes.contentExpand]: sidenavShrink })}>{children}</main>
        </div>
    );
};

export default App;
