import React, { useState, useEffect } from 'react';
import { Container, Row, Alert } from 'react-bootstrap';
import Event from './Event';
import eventsData from '../data/events.json';

const Events = () => {
    const [events, setEvents] = useState(eventsData);
    const [showAlert, setShowAlert] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        setShowWelcome(true);
        
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []); 

    const buyTicket = (eventName) => {
        setEvents(events.map(event => {
            if (event.name === eventName && event.nbTickets > 0) {
                return {
                    ...event,
                    nbTickets: event.nbTickets - 1,
                    nbParticipants: event.nbParticipants + 1
                };
            }
            return event;
        }));
        
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    };

    return (
        <Container className="mt-4">
            {showWelcome && (
                <Alert variant="info" className="mb-4">
                    Hey welcome to Esprit Events
                </Alert>
            )}
            {showAlert && (
                <Alert variant="success" className="mb-4">
                    You have booked an event
                </Alert>
            )}
            <Row>
                {events.map((event, index) => (
                    <Event 
                        key={index} 
                        event={{
                            name: event.name,
                            price: event.price,
                            tickets: event.nbTickets,
                            participants: event.nbParticipants,
                            img: event.img
                        }}
                        onBook={() => buyTicket(event.name)}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default Events;
