import { Col, Card, Button } from 'react-bootstrap'
import { IArticles } from '../interfaces/IArticles'
import { useNavigate } from 'react-router-dom'


interface ArticleComponentProps {
    article: IArticles
}

const Articles = ({ article }: ArticleComponentProps) => {
    const navigate = useNavigate()

    return (
        <Col xs={12} md={4} lg={3} className="mt-3">
            <Card className="card-fix bg-transparent text-white">
                <Card.Img variant="top" src={article.imageUrl} className="article-image" />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title><>{article.title}</></Card.Title>
                    <Card.Text>By: {article.newsSite}</Card.Text>
                    <Button className='details-button' variant="primary" onClick={(() => { navigate(`/details/${article.id}`) })}>See Details</Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default Articles