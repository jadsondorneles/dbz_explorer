
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import ContainerPage from '../../components/ContainerPage/index'

import { 
    Title, 
    Container, 
    Item, 
    Box, 
    InputArea, 
    Result, 
    ItemResult, 
    Picture, 
    Name, 
    Residents, 
    ItemFighter, 
    PictureFighter, 
    GroupFighter, 
    NameFighter, 
    GroupInformation,
    InformationFighter,
    Pagination,
    ErrorMessage
} from '../../components/Page/styles'

import gotenks from '../../assets/img/gotenks.png'

import CircularProgress from '../../components/CircularProgress/index'

import api from '../../services/api'

export default function Fighters({ match }) {
    
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(false)
    const [data, setData] = useState([])
    const [fighter, setFighter] = useState([]) 

    const pageNumber = '{pageNumber}'
    const pagesNumber = '{pagesNumber}'

    async function loadData() {
        if (match.params.name === undefined) {
            setLoading(true)
            await api.get('/api/character')
                .then(response => {
                    setData(response.data)
                    setLoading(false)
                    window["execJPList"]()
                })
                .catch(error => {
                    setLoading(false)
                    setErrors(true)
                })
        } else {
            setLoading(true)
            await api.get(`/api/character/${match.params.name}`)
                .then(response => {
                    console.log(response.data)
                    setFighter(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    setLoading(false)
                    setErrors(true)
                })
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (

        match.params.name !== undefined
        ?
            <ContainerPage>
                <Container>
                    {
                        errors
                        ?
                        <ErrorMessage>The server does not support many requests.<br/> Please try again in a few minutes.</ErrorMessage>
                        :
                            <>
                                <Item>
                                    <Title>{fighter.name}}</Title>
                                </Item>
                                <Item>
                                    <Residents>
                                        <h3>INFORMATION</h3>
                                        <p>Fighter technical sheet</p>
                                        <ItemFighter>
                                            <PictureFighter src={`http://dragon-ball-api.herokuapp.com${fighter.image.replace('../','')}`} />
                                            <GroupFighter>
                                                <NameFighter>{fighter.name}}</NameFighter>
                                                <GroupInformation>
                                                    <InformationFighter><span>Specie</span> {fighter.species}</InformationFighter>
                                                    <InformationFighter><span>Status</span> {fighter.status}</InformationFighter>
                                                    <InformationFighter><span>Gender</span> {fighter.gender}</InformationFighter>
                                                    <InformationFighter><span>Series</span> {fighter.series}</InformationFighter>
                                                </GroupInformation>
                                            </GroupFighter>
                                        </ItemFighter>
                                    </Residents>
                                </Item>
                            </>
                    }
                </Container>
            </ContainerPage>
        :
            <ContainerPage>
                <Container>
                    <Item>
                        <Title>FIGHTERS</Title>
                        <img src={gotenks} alt="Gotenks"/>
                    </Item>
                    <Item>
                        <Box>
                            <h3>TO EXPLORE</h3>
                            <p>Research all the fighters that are part of this incredible universe</p>
                            {
                                loading
                                ?
                                    <CircularProgress/>
                                :
                                    errors 
                                    ?
                                        <ErrorMessage>The server does not support many requests.<br/> Please try again in a few minutes.</ErrorMessage>
                                    :
                                        <>
                                            <InputArea>
                                                <i className="material-icons">search</i>
                                                <input type="text" data-jplist-control="textbox-filter" data-group="dbzexplorer" data-path=".title"/>
                                            </InputArea>
                                            <Result data-jplist-group="dbzexplorer">
                                                {
                                                    data.map((obj, i) => (
                                                        <ItemResult key={i} data-jplist-item>
                                                            <Picture image={`https://dragon-ball-api.herokuapp.com/${obj.image.replace('../','')}`} alt=""/>
                                                            <Name className="title">{obj.name}</Name>
                                                            <Link to={`/Planets/${obj.name}`}>DETAILS</Link>
                                                        </ItemResult>
                                                    ))
                                                }
                                            </Result>
                                            <Pagination data-jplist-control="pagination" data-group="dbzexplorer" data-items-per-page="2" data-current-page="0" data-name="pagination1">
                                                <div className="navigation-buttons">
                                                    <button type="button" className="btn-pagination" data-type="first"><span className="material-icons">first_page</span></button>
                                                    <button type="button" className="btn-pagination" data-type="prev"><span className="material-icons">navigate_before</span></button>

                                                    <div className="jplist-holder" data-type="pages">
                                                        <button type="button" className="btn-pagination" data-type="page">{pageNumber}</button>
                                                    </div>

                                                    <button type="button" className="btn-pagination" data-type="next"><span className="material-icons">navigate_next</span></button>
                                                    <button type="button" className="btn-pagination" data-type="last"><span className="material-icons">last_page</span></button>
                                                </div>
                                                <div className="pageInformation">
                                                    <span data-type="info" className="badge badge-secondary ml-3 p-2">
                                                        Page {pageNumber} of {pagesNumber}
                                                    </span>
                                                </div>
                                            </Pagination>
                                        </>
                            }
                        </Box>
                    </Item>
                </Container>
            </ContainerPage>

    )
}