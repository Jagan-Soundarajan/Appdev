import React from 'react';

// Define an array of sports items
const sportsItems = [
    { id: 1, name: 'Football', description: 'A round ball used in soccer.' },
    { id: 2, name: 'Basketball', description: 'An orange ball used in basketball.' },
    { id: 3, name: 'Tennis Racket', description: 'A racket used to hit tennis balls.' },
    { id: 4, name: 'Baseball Bat', description: 'A wooden or metal bat used in baseball.' },
    { id: 5, name: 'Hockey Stick', description: 'A stick used to hit a puck in hockey.' }
];

// Functional component to render a list of sports items
const SportItem = () => {
    return (
        <div>
            <h1>Sports Items List</h1>
            <ul>
                {sportsItems.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SportItem;
