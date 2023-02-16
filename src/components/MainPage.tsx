import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { IArticles } from '../interfaces/IArticles'
import Articles from './Articles'
import Badge from 'react-bootstrap/Badge';

const MainPage = () => {
    const URL = 'https://api.spaceflightnewsapi.net/v3/articles'

    const [articles, setArticles] = useState<IArticles[]>([])

    const fetchArticles = async () => {

        try {
            let response = await fetch(URL)
            if (response.ok) {
                let articlesFromApi = await response.json()
                console.log(articlesFromApi)
                setArticles(articlesFromApi)
            } else {
                console.log("We've got an error! :(")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchArticles()
    }, [])

    return (
        <>
            <Container>
                <Row className='d-flex justify-content-center mt-3'>
                    <Col xs={12} md={6} lg={4}>
                        <Badge bg="info"><h1>Batı News</h1></Badge>
                    </Col>

                </Row>
                <Row>
                    {articles.map((a) => (
                        <Articles article={a} key={a.id}></Articles>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default MainPage