import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Event = ({ event, onBook }) => {
    const isSoldOut = event.tickets === 0;

    return (
        <Col md={4} className="mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img 
                    variant="top" 
                    src={`/images/${event.img}`} 
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>
                        Price: {event.price}<br/>
                        Number of tickets: {event.tickets}<br/>
                        Number of participants: {event.participants}
                    </Card.Text>
                    <Button 
                        variant="primary" 
                        onClick={onBook}
                        disabled={isSoldOut}
                    >
                        {isSoldOut ? 'Sold Out' : 'Book an event'}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;
