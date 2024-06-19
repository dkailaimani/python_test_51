import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/characters" activeClassName="active">Browse Characters</NavLink></li>
                            <li><NavLink to="/comics" activeClassName="active">Comics</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<BrowseCharacters />} />
                        <Route path="/characters/:id" element={<CharacterDetails />} />
                        <Route path="/comics" element={<Comics />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
