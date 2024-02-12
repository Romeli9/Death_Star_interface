import React from 'react'
import * as FaIcons from 'react-icons/fa' 

const EnergySystemIcon = require('../icons/renewable-energy1.png');
const AtmosferSystemIcon = require('../icons/atmosphere1.png');
const RepairTeamIcon = require('../icons/repair1.png');


export const SidebarData = [
    {
        path: '/energysystempage',
        icon: <img src={EnergySystemIcon}/>
    },
    {
        path: '/atmosfersystempage',
        icon: <img src={AtmosferSystemIcon}/>
    },
    {
        path: '/repairteampage',
        icon:  <img src={RepairTeamIcon}/>
    },
]
