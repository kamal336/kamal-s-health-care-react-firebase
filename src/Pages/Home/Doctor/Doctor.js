
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {id,name,img} = props.doctor;
    return (
       <Col lg={4} className="my-2">
         <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="text-primary">{name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Show More</Button>
            </Card.Body>
            </Card>
       </Col>
    );
};

export default Doctor;