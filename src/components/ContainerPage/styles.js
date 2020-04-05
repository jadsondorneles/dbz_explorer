import styled from 'styled-components'

export const Container = styled.div `
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div `
    max-width: 850px;
    max-height: 500px;
    background: var(--primario);
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 22px;
    -webkit-box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.75);
    background-image: url('${props => props.bgImage}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 880px) {
        max-width: inherit;
        max-height: inherit;
        position: relative;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        overflow: auto;
        top: 0;
    }
`
export const Spheres1 = styled.div `
    animation: MoveUpDown2 1s linear infinite;
    position: absolute;
    top: -69px;
    z-index: -1;
    right: 304px;

    @media (max-width: 880px) {
        left: 50%;
        right: auto;
        transform: translateX(-50%);
    }
`
export const SpheresDragon1 = styled.img `
    width: 93px;
    position: relative;
    top: 9px;
`

export const Spheres2 = styled.div `
    animation: MoveUpDown 5s linear infinite;
    position: absolute;
    left: -78px;

    @media (max-width: 880px) {
        left: -65px;
        right: auto;
    }
`
export const SpheresDragon2 = styled.img `
    width: 97%;
    position: relative;
    top: 115px;

    @media (max-width: 800px) {
        width: 137px;
        position: relative;
        top: 72px;
    }
`

export const Spheres4 = styled.div `
    -webkit-animation: MoveUpDown 3s linear infinite;
    animation: MoveUpDown 3s linear infinite;
    position: absolute;
    right: 56px;
    top: 414px;

    @media (max-width: 880px) {
        left: auto;
        right: 0;
        position: fixed;
        bottom: -22px;
        top: auto;
    }
`
export const SpheresDragon4 = styled.img `
    width: 150px;
    position: relative;
    
    @media (max-width: 880px) {
        width: 80px;
        top: 36px;
        right: 20px;
    }
`

export const Informations = styled.div`
    position: absolute;
    top: 42px;
    left: 204px;
    width: 596px;
    height: 311px;
    /* border: 1px solid var(--branco); */

    @media (max-width: 800px) {
        position: relative;
        left: 0;
        width: auto;
        height: auto;
        padding-bottom: 50px;
    }
`

export const By = styled.div`
    color: var(--alternativo);
    font-size: 11px;
    position: absolute;
    bottom: 18px;
    left: 39px;

    @media (max-width: 800px) {
        display: none;
    }
`