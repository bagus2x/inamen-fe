import React, { useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import Divider from '@material-ui/core/Divider';
import FlareRoundedIcon from '@material-ui/icons/FlareRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import ModeCommentRoundedIcon from '@material-ui/icons/ModeCommentRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import TocRoundedIcon from '@material-ui/icons/TocRounded';
import { Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import use100vh from '~libs/hooks/100vh';
import useStyles from '~components/layouts/Host/styles';
import Link from '~components/common/Link';
import NavbarTitle from '~components/views/NavbarTitle';
import { useRouter } from 'next/router';

const Host: React.FC = ({ children }) => {
    const classes = useStyles();
    const router = useRouter();
    const height = use100vh();
    const isSmDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
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
            <Drawer
                variant={isSmDown ? 'temporary' : 'permanent'}
                keepMounted
                open={drawer}
                onClose={handleDrawerClose}
            >
                <div className={classes.list}>
                    <List>
                        <ListItem>
                            <div className={classes.title}>
                                <NavbarTitle />
                            </div>
                        </ListItem>
                        <ListItem button component={Link} color="inherit" href="/host">
                            <ListItemIcon>{<PlaylistAddRoundedIcon />}</ListItemIcon>
                            <ListItemText primary="My Tournaments" />
                        </ListItem>
                        <Divider />
                        {tournamentID && (
                            <>
                                <ListItem button component={Link} color="inherit" href={`/host/${tournamentID}`}>
                                    <ListItemIcon>{<ShowChartRoundedIcon />}</ListItemIcon>
                                    <ListItemText primary="Overview" />
                                </ListItem>
                                <ListItem
                                    button
                                    component={Link}
                                    color="inherit"
                                    href={`/host/${tournamentID}/matches`}
                                >
                                    <ListItemIcon>{<FlareRoundedIcon />}</ListItemIcon>
                                    <ListItemText primary="Matches" />
                                </ListItem>
                                <ListItem
                                    button
                                    component={Link}
                                    color="inherit"
                                    href={`/host/${tournamentID}/standings`}
                                >
                                    <ListItemIcon>{<TocRoundedIcon />}</ListItemIcon>
                                    <ListItemText primary="Standings" />
                                </ListItem>
                                <ListItem
                                    button
                                    component={Link}
                                    color="inherit"
                                    href={`/host/${tournamentID}/participants`}
                                >
                                    <ListItemIcon>{<PeopleRoundedIcon />}</ListItemIcon>
                                    <ListItemText primary="Participants" />
                                </ListItem>
                                <ListItem button component={Link} color="inherit" href={`/host/${tournamentID}/chat`}>
                                    <ListItemIcon>{<ModeCommentRoundedIcon />}</ListItemIcon>
                                    <ListItemText primary="Chat Room" />
                                </ListItem>
                                <ListItem
                                    button
                                    component={Link}
                                    color="inherit"
                                    href={`/host/${tournamentID}/settings`}
                                >
                                    <ListItemIcon>{<SettingsRoundedIcon />}</ListItemIcon>
                                    <ListItemText primary="Settings" />
                                </ListItem>
                            </>
                        )}
                    </List>
                    <div className={classes.grow}></div>
                    <div>
                        <List>
                            <ListItem button>
                                <ListItemText primary="Profile" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Help" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Sign out" />
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Drawer>
            <main className={classes.content}>{children}</main>
        </div>
    );
};

export default Host;
