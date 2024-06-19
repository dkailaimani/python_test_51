import React from 'react';
import { Link } from 'react-router-dom';

const characters = [
    { id: 1, name: 'Spider-Man' },
    { id: 2, name: 'Iron Man' },
    { id: 3, name: 'Captain America' },
    { id: 4, name: 'Black Widow' },
    { id: 5, name: 'Wolverine' },
];

const BrowseCharacters = () => {
    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default BrowseCharacters;
