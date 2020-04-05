import React, { useState, useEffect } from 'react'

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
            GroupFighter, 
            NameFighter, 
            Pagination,
            ErrorMessage 
        } from '../../components/Page/styles'

import kaioPlanet from '../../assets/img/kaio-planet.png'

import CircularProgress from '../../components/CircularProgress/index'

import api from '../../services/api'

export default function Planets({ match }) {

    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(false)
    const [data, setData] = useState([])
    const [planet, setPlanet] = useState([])

    const pageNumber = '{pageNumber}'
    const pagesNumber = '{pagesNumber}'

    async function loadData() {
        if (match.params.name === undefined) {
            setLoading(true)
            await api.get('/api/planet')
                .then(response => {
                    console.log(response.data)
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
            await api.get(`/api/planet/${match.params.name}`)
                .then(response => {
                    console.log(response.data)
                    setPlanet(response.data)
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
    })
    
    return (

        match.params.name !== undefined
        ?
            <ContainerPage>
                <Container id="container-planet">
                    {
                        errors
                        ?
                            <ErrorMessage>The server does not support many requests.<br/> Please try again in a few minutes.</ErrorMessage>
                        :
                            <>
                                <Item>
                                    <Title>{planet.name}</Title>
                                </Item>
                                <Item>
                                    <Residents id="residents">
                                        <h3>RESIDENTS</h3>
                                        <p>List of fighters residing on the planet</p>
                                        <ItemFighter>
                                            <GroupFighter>
                                                <NameFighter>{planet.residents}</NameFighter>
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
                <Container id="container-planet">
                    <Item>
                        <Title>PLANETS</Title>
                        <img src={kaioPlanet} alt="Kaio Planet"/>
                    </Item>
                    <Item>
                        <Box id="box">
                            <h3>TO EXPLORE</h3>
                            <p>Discover all the planets that exist in the <span>DBZ</span> universe. Search and see the information selected for each one.</p>
                            {
                                loading
                                ?
                                    <CircularProgress />
                                :
                                    errors
                                    ?
                                        <ErrorMessage>The server does not support many requests.<br/> Please try again in a few minutes.</ErrorMessage>
                                    :                                        
                                        <>
                                            <InputArea>
                                                <span className="material-icons">search</span>
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
                                            <Pagination data-jplist-control="pagination"data-group="dbzexplorer"data-items-per-page="2"data-current-page="0"data-name="pagination1">
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