import { Box, Drawer } from '@mui/material';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';

interface SideBarProps {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerToggle: () => void
}

interface menuItem {
    text: string,
    path: string,
    icon: React.ComponentType
}

const SideBar = ({ drawerWidth, mobileOpen, handleDrawerToggle }: SideBarProps) => {
    const menuItems: menuItem[] = [
        { text: "Home", path: "/", icon: HomeIcon },
        { text: "Report", path: "/report", icon: EqualizerIcon },
    ]

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                <item.icon />
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* モバイル用 */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                {/* PC用 */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </div>
    )
}

export default SideBar