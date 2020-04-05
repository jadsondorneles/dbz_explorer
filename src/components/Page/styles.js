import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 70px;
    font-weight: 600;
    color: var(--terciario);
    margin: -16px 0 0 0;
    letter-spacing: -2px;
    text-transform: uppercase;

    @media (max-width: 800px) {
        font-size: 40px;
    }
`

export const ContainerHome = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 190px calc(100% - 190px));

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 29px;
    }
`

export const ItemHome = styled.div`

    & > img {
        width: 190px;
    }

    & > h3 {
        color: var(--branco);
        & > span {
            color: var(--terciario);
        }
    }

    & > p {
        color: var(--alternativo);
        font-weight: 200;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const LinkArea = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > a {
        border: 2px solid var(--terciario);
        color: var(--branco);
        transition: all ease .35s;
        font-size: 13px;
        padding: 8px 27px;
        text-decoration: none;
        margin-top: 34px;
    }

    & > a:hover {
        background-color: var(--terciario);
    }

    @media (max-width: 800px) {
        margin: -20px 0 19px 0;
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 190px calc(100% - 190px));
    
    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 20px;
    }
`

export const Item = styled.div`

    & > img {
        width: 130px;
    }

    & > h3 {
        color: var(--branco);
        & > span {
            color: var(--terciario);
        }
    }

    & > p {
        color: var(--alternativo);
        font-weight: 200;
        & > span {
            color: var(--terciario);
            font-weight: bold;
        }
    }

    @media (max-width: 800px) {
        & > img {
            height: 167px;
            width: auto;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`

export const Box = styled.div`
    padding: 62px 0 0 0px;
    position: relative;
    left: -37px;
    top: -6px;
    width: calc(100% + 31px);

    & > h3 {
        color: var(--branco);
        margin-bottom: 0;
        & > span {
            color: var(--terciario);
        }
    }

    & > p {
        color: var(--alternativo);
        font-weight: 200;
        margin-top: 7px;
        & > span {
            color: var(--terciario);
            font-weight: bold;
        }
    }

    @media (max-width: 800px) {
        left: 0;
        width: 100%;
        margin-bottom: 50px;
        margin-top: 100px;
    }
`

export const InputArea = styled.div`
    border: 2px solid var(--terciario);
    width: calc(100% - 18px);
    display: grid;
    grid-template-columns: repeat(2, 25px calc(100% - 25px));
    padding: 4px 7px;
    margin-bottom: 10px;

    & > span.material-icons {
        color: var(--terciario);
    }

    & > i.material-icons {
        color: var(--terciario);
    }

    & > input {
        background: transparent;
        border: 0;
        font-size: var(--font-regular);
        color: var(--terciario);
        outline: none;
        padding-left: 10px;
        width: calc(100% - 10px);
    }
`

export const Result = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 8px;
`

export const ItemResult = styled.div`
    box-shadow: 0px 0px 22px -7px rgba(0,0,0,0.75);
    background: var(--alternativo2);
    color: var(--branco);
    padding: 3px 10px;
    border-radius: 5px;
    align-items: center;
    justify-content: end;
    position: relative;
    display: flex;
    flex-direction: row;

    & > a {
        border: 2px solid var(--terciario);
        color: var(--branco);
        transition: all ease .35s;
        font-size: 10px;
        padding: 5px 13px;
        text-decoration: none;
    }

    & > a:hover {
        background-color: var(--terciario);
    }
`

export const Picture = styled.img`
    background-image: url('${props => props.image}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    width: 42px;
    height: 42px;
    border-radius: 50%;
`

export const Name = styled.div`
    margin-left: 15px;
    width: calc(100% - 124px);
`

export const Residents = styled.div`
    position: absolute;
    left: 0;
    top: 57px;
    width: 100%;

    & > h3 {
        color: var(--branco);
        margin-bottom: 0;
        & > span {
            color: var(--terciario);
        }
    }

    & > p {
        color: var(--alternativo);
        font-weight: 200;
        margin-top: 7px;
        & > span {
            color: var(--terciario);
            font-weight: bold;
        }
    }

    @media(max-width: 800px) {
        padding: 0 20px;
    }
`

export const ItemFighter = styled.div`
        display: grid;
    grid-template-columns: repeat(2,100px calc(100% - 100px));
    max-width: 500px;
    position: relative;
    margin-top: 8px;
`

export const PictureFighter = styled.div`
    background-image: url('${props => props.src}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

export const GroupFighter = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 15px;
`

export const NameFighter = styled.div`
    color: var(--branco);
    text-transform: uppercase;
    font-size: 20px;
`

export const GroupInformation = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin-top: 19px;
`

export const InformationFighter = styled.div`
    color: var(--branco);
    font-weight: 200;

    & > span {
        color: var(--terciario);
        font-weight: 500;
    }
`

export const Pagination = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-rows: repeat(1, 1fr);

    & .navigation-buttons {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    & .navigation-buttons > button > span{
        font-size: 15px;
    }

    & button.btn-pagination {
        color: var(--branco);
        background: rgba(255, 117, 21, 0.44);
        border: 0;
        margin: 0 3px;
        min-height: 26px;
        min-width: 26px;
        border-radius: 100px;
    }

    & .jplist-holder {
        z-index: 500;
    }

    & .jplist-holder button {
        color: var(--branco);
        background: rgba(255, 117, 21, 0.44);
        border: 0;
        margin: 0 3px;
        min-height: 26px;
        min-width: 26px;
        border-radius: 100px;
        cursor: pointer;
    }

    & .pageInformation {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--branco);
        margin-top: 15px;
    }

    & button.btn-pagination.jplist-selected[data-selected="true"] {
        background: var(--terciario);
        cursor: pointer;
    }

    & button.btn-pagination[data-type="first"], 
    button.btn-pagination[data-type="prev"], 
    button.btn-pagination[data-type="next"], 
    button.btn-pagination[data-type="last"] {
        background: var(--terciario);
        cursor: pointer;
    }

    & button.btn-pagination.jplist-disabled[data-type="first"], 
    button.btn-pagination.jplist-disabled[data-type="prev"], 
    button.btn-pagination.jplist-disabled[data-type="next"], 
    button.btn-pagination.jplist-disabled[data-type="last"] {
        background: #818181;
        color: #000;
        cursor: none;
    }
`

export const ErrorMessage = styled.div`
    width: 100%;
    min-height: 200px;
    font-size: 20px;
    color: var(--branco);
    display: flex;
    align-items: center;
    justify-content: center;
`