import React from 'react'

import { Link } from 'react-router-dom'

import ContainerPage from '../../components/ContainerPage/index'

import { ContainerHome, ItemHome, LinkArea } from '../../components/Page/styles'

import gojetaSS4 from '../../assets/img/gojeta-ss4.png'

export default function Home() {
    return (
        <ContainerPage id="ContainerPage">
            <ContainerHome id="ContainerHome">
                <ItemHome id="ItemHome">
                    <img src={gojetaSS4} alt="Gojeta SS4"/>
                </ItemHome>
                <ItemHome id="ItemHome">
                    <h3>Dragon Ball Z <span>Explorer</span></h3>
                    <p>Explore the entire DBZ world, meet the planets and all the characters</p>
                    <p>Browse and come to know this incredible universe <strong>=)</strong></p>
                    <LinkArea>
                        <Link to="/Planets">TO DISCOVERY</Link>
                    </LinkArea>
                </ItemHome>
            </ContainerHome>
        </ContainerPage>
    )
}