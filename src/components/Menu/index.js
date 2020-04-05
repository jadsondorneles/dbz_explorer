import React from 'react'
import { NavLink  } from 'react-router-dom'

import { Menu, ItemMenu, Logo, SphereMenu } from './styles'

import logo from '../../assets/img/logo.svg'
import sphere1 from '../../assets/img/1-estrela.svg'

import DrawMobile from './Mobile/index'

export default function Menus() {
    return (
        <>
            <Menu>
                <ItemMenu>
                    <Logo src={logo} />
                </ItemMenu>
                <ItemMenu>
                    <NavLink exact activeClassName="active" to="/">
                        <SphereMenu src={sphere1} className="rotating" /> Home
                    </NavLink >
                </ItemMenu>
                <ItemMenu>
                    <NavLink strict activeClassName="active" to="/Planets">
                        <SphereMenu src={sphere1} className="rotating" /> Planets
                    </NavLink >
                </ItemMenu>
                <ItemMenu>
                    <NavLink strict activeClassName="active" to="/Fighters">
                        <SphereMenu src={sphere1} className="rotating" /> Fighters
                    </NavLink >
                </ItemMenu>
            </Menu>
            <DrawMobile />
        </>
    )
}