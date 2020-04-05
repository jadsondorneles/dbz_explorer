import React from 'react'

import { Link } from 'react-router-dom'

import ContainerPage from '../../components/ContainerPage/index'

import { ContainerHome, ItemHome, LinkArea } from '../../components/Page/styles'

import manjibuu from '../../assets/img/manjibuu.png'

export default function Error404() {
    return (
        <ContainerPage id="ContainerPage">
            <ContainerHome id="ContainerHome">
                <ItemHome id="ItemHome">
                    <img src={manjibuu} alt="Manji Buu"/>
                </ItemHome>
                <ItemHome id="ItemHome">
                    <h3>Ops.. <span>Page Not Found!</span></h3>
                    <p>This page does not exist please click the button below and browse the site again</p>
                    <LinkArea>
                        <Link to="/">HOME PAGE</Link>
                    </LinkArea>
                </ItemHome>
            </ContainerHome>
        </ContainerPage>
    )
}