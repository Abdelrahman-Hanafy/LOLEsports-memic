import React from 'react'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SideFliter = () => {
    var arbian = require('../assets/Arabian.png');
    var emea = require('../assets/emea.png');
    var lec = require('../assets/lec.png');
    var lck = require('../assets/lck.png');

    let logos = [lec,lck,emea,arbian]
  return ( 
    <div className='MuiDrawer-paper' >
        <div className='filter'>FILTER</div>
        <ul className='side-list'>
            {['LEC', 'LCK', 'EMEA Master', 'Arabian League'].map((text, index) => (
            <li key={text} id={text} >
                <ListItemButton>
                <ListItemIcon>
                    <img src={logos[index]} width="45" height="45" alt=''/>
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SideFliter