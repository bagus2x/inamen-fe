import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuRounded';
import NotifIcon from '@material-ui/icons/NotificationsRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Divider from '@material-ui/core/Divider';
import use100vh from '~libs/hooks/100vh';
import useStyles from '~components/layouts/Host/styles';
import DenseToolbar from '~components/common/DenseToolbar';
import Link from '~components/common/Link';
import NavbarTitle from '~components/views/NavbarTitle';
import { useRouter } from 'next/router';

const Host: React.FC = ({ children }) => {
    const classes = useStyles();
    const router = useRouter();
    const height = use100vh();
    const [anchorAccount, setAnchorAccount] = useState<null | HTMLElement>(null);
    const [drawer, setDrawer] = useState(false);

    const { tournamentID } = router.query;

    const handleProfileMenuOpen = (ev: React.MouseEvent<HTMLElement>) => {
        setAnchorAccount(ev.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorAccount(null);
    };

    const handleDrawerOpen = () => {
        setDrawer(true);
    };

    const handleDrawerClose = () => {
        setDrawer(false);
    };

    return (
        <div className={classes.root} style={{ height }}>
            <AppBar color="inherit" elevation={1}>
                <DenseToolbar>
                    <div className={classes.toolbarLeft}>
                        <IconButton size="small" color="primary" edge="start" onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className={classes.toolbarRight}>
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
                            <MenuItem onClick={handleMenuClose} component={Link} href="/user">
                                Profile
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} href="/user/settings">
                                Settings
                            </MenuItem>
                        </Menu>
                    </div>
                </DenseToolbar>
            </AppBar>
            <Drawer keepMounted open={drawer} onClose={handleDrawerClose}>
                <div className={classes.list}>
                    <ListItem>
                        <NavbarTitle />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                        <ListItemText primary="My Tournaments" />
                    </ListItem>
                    <Divider />
                    {tournamentID && (
                        <>
                            <ListItem button>
                                <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                                <ListItemText primary="Overview" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                                <ListItemText primary="Matches" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                                <ListItemText primary="Standings" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                                <ListItemText primary="Participants" />
                            </ListItem>
                        </>
                    )}
                </div>
            </Drawer>
            <main className={classes.content}>{children}</main>
        </div>
    );
};

export default Host;
