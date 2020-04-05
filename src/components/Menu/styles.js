import styled from 'styled-components'

export const Menu = styled.ul`
    width: 178px;
    margin-left: 20px;
    margin-top: 30px;
    padding: 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        display: none;
    }
`

export const ItemMenu = styled.li`
    width: 100%;
    padding: 9px 12px;
    display: flex;
    align-items: center;
    justify-content: end;

    & > a {
        display: block;
        width: 100%;
        text-align: left;
        padding: 8px 21px 8px 31px;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: var(--branco);
        position: relative;
        transition: all ease .35s;

        & img {
            display: none;
        }
    }

    & a:hover {
        color: var(--terciario);
    }

    & a.active {
        color: var(--terciario);

        & img {
            display: block;
        }
    }
`

export const Logo = styled.img`
    width: 130px;
    margin-bottom: 50px;
`

export const SphereMenu = styled.img`
    width: 25px;
    height: auto;
    position: absolute;
    left: -1px;
    top: calc(50% - 13px);
    transform: translateY(-50%);
`