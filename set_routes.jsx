import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/characters">Browse Characters</a></li>
                   
                            <li><a href="/comics">Comics</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<BrowseCharacters />} />
                        <Route path="/characters/:id" element={<CharacterDetails />} />
                        <Route path="/comics" element={<Comics />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
