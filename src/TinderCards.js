import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map(doc => doc.data()))
        );
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <div>
            <div className="cards__container">
                {people.map(person => (
                    <TinderCard className="swipe__cards" key={person.name} preventSwipe={['up', 'down   ']}>
                        <div style={{ backgroundImage: `url(${person.url})` }} className="user__profile">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
