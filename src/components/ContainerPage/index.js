import React from 'react'

import { Container, Content, Spheres1, Spheres2, Spheres4, SpheresDragon1, SpheresDragon2, SpheresDragon4, Informations, By } from './styles' 

import gokuBackground from '../../assets/img/goku-background.png'
import sphere1 from '../../assets/img/1-estrela.svg'
import sphere2 from '../../assets/img/2-estrelas.svg'
import sphere4 from '../../assets/img/4-estrelas.svg'

import Menu from '../Menu/index'

export default function ContainerPage(props) {
    return (
        <Container id="container">
            <Content bgImage={gokuBackground} id="Content">
                <Menu />
                <Informations id="Informations">
                    {props.children}
                </Informations>
                <Spheres1>
                    <SpheresDragon1 src={sphere1} />
                </Spheres1>
                <Spheres4 id="Spheres4">
                    <SpheresDragon4 src={sphere4} />
                </Spheres4>
                <By>developer by Jadson A. Dorneles</By>
            </Content>
            <Spheres2>
                <SpheresDragon2 src={sphere2} />
            </Spheres2>
        </Container>
    )
}