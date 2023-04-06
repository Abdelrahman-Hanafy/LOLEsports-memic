import React from 'react'

import './Style/filter.css'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {leagues} from './constant'

const SideFliter = () => {
    const leagueOptions = [];
    for(const lg in leagues){
        leagueOptions.push(<li key={lg} id={lg} >
                <ListItemButton>
                <ListItemIcon>
                    <img src={leagues[lg]["logo"]} width="45" height="45" alt=''/>
                </ListItemIcon>
                <ListItemText primary={lg} />
                </ListItemButton>
            </li>);
    }
    


    return ( 
        <div className='MuiDrawer-paper' >
            <div className='filter'>FILTER</div>
            <ul className='side-list'>
                {leagueOptions}
            </ul>
        </div>
    )
}

export default SideFliter