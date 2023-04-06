import React from 'react'

import './Style/filter.css'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {leagues} from './constant'

    const SideFliter = ({setLeagueSelected}) => {

    const handleOnSelectLeague = (event) => {
        const value = event.target.innerText;
        setLeagueSelected(value);

        document.querySelectorAll("#side-list > li").forEach(
            function (currentValue, currentIndex, listObj) {
                currentValue.className = '';
            }, 
        "myThisArg");
        
        if(value !=='' && value !=='clear'){
            document.getElementById(value).className = 'selected';
        }

    };

    const leagueOptions = [];
    for(const lg in leagues){
        leagueOptions.push(
            <li key={lg} id={lg} >
                <ListItemButton onClick={handleOnSelectLeague}>
                    <ListItemIcon>
                        <img src={leagues[lg]["logo"]} width="45" height="45" alt=''/>
                    </ListItemIcon>
                    <ListItemText primary={lg} />
                </ListItemButton>
            </li>
        );
    }
    


    return ( 
        <div className='MuiDrawer-paper' >
            <div className='filter'>FILTER</div>
            <ul className='side-list' id='side-list'>
                <li key='cancel' id='cancel'  >
                    <ListItemButton onClick={handleOnSelectLeague}>
                    <ListItemIcon style={{justifyContent:'center'}}>
                        <img src={require('../assets/cancel.png')} width="20" height="20" alt=''/>
                    </ListItemIcon>
                    <ListItemText primary='clear'  />
                    </ListItemButton>
                </li>
                {leagueOptions}
            </ul>
        </div>
    )
}

export default SideFliter