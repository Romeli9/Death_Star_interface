import React from 'react'
import { Link } from 'react-router-dom'

import * as FaIcons from 'react-icons/fa' 

import { SidebarData } from './SidebarData'

import styled from 'styled-components'

import { useState } from 'react'
import "./sidebar.css"

const tempIcon = require('../icons/Group1.png');

const Sidebar: React.FunctionComponent = () => {
    const [close, setClose] = useState(false)
    return (
        <div className="navbar">
                
                {SidebarData.map((item, index) => {
                    return (
                        <MenuItemContainer>
                            <MenuItems key={index}>
                                <MenuItemLinks to={item.path}>
                                    {item.icon}
                                </MenuItemLinks>
                            </MenuItems>
                        </MenuItemContainer>
                    )
                })}
            
        </div>
            
        
    )
}



const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0px;
    
`

const MenuIconOpen = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    color: #ffffff;
`

const MenuItems = styled.li`
    
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    
   
    
`

const MenuItemLinks = styled(Link)`
    display: flex;

    
`

const MenuItemContainer = styled.div`
    
    margin-left: 41px;
    width: 78px;
    height: 77px;
    border-radius: 15px;
    background-color: rgb(16 20 50 / 80%);
    padding: 12px 13px;
    margin-bottom: 50px;

    
`

export default Sidebar
