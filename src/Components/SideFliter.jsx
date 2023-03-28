import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;
const SideFliter = () => {
    var arbian = require('../assets/Arabian.png');
    var emea = require('../assets/emea.png');
    var lec = require('../assets/lec.png');
    var lck = require('../assets/lck.png');

    let logos = [lec,lck,emea,arbian]
  return (

    <Box >
    <Drawer
        sx={{

            '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: 'auto',
            left:'auto',
            backgroundColor: '#0a0e13',
            color: '#00c8c8'
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <div className='filter'>FILTER</div>
        <Divider style={{
            borderColor: '#00c8c8',
            // borderBottomWidth: 'medium'
        } } />
        <List>
            {['LEC', 'LCK', 'EMEA Master', 'Arabian League'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <img src={logos[index]} width="45" height="45" alt=''/>
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    </Drawer>
    
    </Box>
  )
}

export default SideFliter