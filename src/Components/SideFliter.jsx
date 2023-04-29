import React, {useEffect,useState} from 'react'

import './Style/filter.css'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import axios from 'axios';

    const SideFliter = ({setLeagueSelected}) => {

    const [leagues,setLeagues] = useState([]);

    useEffect(() => {

    const fetchLeagues = async ()=>{
        const res = await axios.get('https://localhost:7091/api/leagues',{})
        const resData = await res.data
        setLeagues(resData)
    }        
        
    fetchLeagues();
    }, []);

    const handleOnSelectLeague = (val) => {
        setLeagueSelected(val);
    };

    const leagueOptions = [];
    for(const lg in leagues){
        leagueOptions.push(
            <li key={leagues[lg]["id"]}  id={leagues[lg]["id"]} >
                <ListItemButton onClick={(e) => handleOnSelectLeague(leagues[lg]["id"])}>
                    <ListItemIcon>
                        <img src={leagues[lg]["logo"]} width="45" height="45" alt=''/>
                    </ListItemIcon>
                    <ListItemText primary={leagues[lg]["name"]} />
                </ListItemButton>
            </li>
        );
    }
    


    return ( 
        <div className='MuiDrawer-paper' >
            <div className='filter'>FILTER</div>
            <ul className='side-list' id='side-list'>
                <li key='cancel' id='cancel'  >
                    <ListItemButton onClick={(e) => handleOnSelectLeague('')}>
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