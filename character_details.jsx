import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();

    const character = {
        id,
        name: 'Spider-Man',
        description: 'With great power comes great responsibility.',
        comics: ['The Amazing Spider-Man', 'Ultimate Spider-Man'],
    };

    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.map((comic, index) => (
                    <li key={index}>{comic}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetails;
