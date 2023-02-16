import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { IArticles } from '../interfaces/IArticles'
import { useParams, useLocation } from 'react-router-dom'

const DetailsPage = () => {
    const URL = 'https://api.spaceflightnewsapi.net/v3/articles/'
    const params = useParams()
    const location = useLocation()
    const [articleDetail, setArticleDetail] = useState<IArticles>()

    const fetchArticleDetails = async () => {

        try {
            let response = await fetch(URL + params.id)
            if (response.ok) {
                let articlesDetailsFromApi = await response.json()
                console.log(articlesDetailsFromApi)
                setArticleDetail(articlesDetailsFromApi)
            } else {
                console.log("We've got an error! :(")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchArticleDetails()
    }, [])

    return (
        <>
            <Container>
                <Card className='bg-transparent text-white'>
                    <Card.Img variant="top" src={articleDetail?.imageUrl} className="details-page-image" />
                    <Card.Body>
                        <Card.Title>{articleDetail?.title}</Card.Title>
                        <Card.Text>
                            {articleDetail?.summary}
                        </Card.Text>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default DetailsPage