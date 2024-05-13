'use client';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="col">
            <Card className="bg-white shadow-md rounded-lg">
              <Card.Body>
                <Card.Title>Card {index + 1}</Card.Title>
                <Card.Text>
                  This is a sample card with some quick example text to build on
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
