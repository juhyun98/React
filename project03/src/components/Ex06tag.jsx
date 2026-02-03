import React from 'react'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Card.Img의 src속성 : 연예인 사진 URL
// Card.Title : 연예인 이름
// Card.Text : 연예인 설명
// Button의 href속성 : 연예인 인스타그램 URL
const Ex06tag = ( {title, imgSrc, content, birthYear, sns} ) => {

    return (
        <div>
            <Card style={{ width: '18rem', height: '562px'}}>
                <Card.Img variant="top" src={imgSrc} style={{width:"288px", height:"300px"}} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{height: '144px'}}>
                        {content}
                    </Card.Text>
                    <Button variant="primary" href={sns}>Instagram</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Ex06tag