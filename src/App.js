import { useState } from "react";
import "./App.css";
import Card from "./Card.jsx";
import AddCard from "./AddCard.jsx";

const displayCards = (cards) => {
    if (cards > 0) {
        return <Card />;
    }
    return <AddCard />; 
}

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [cards, setCards] = useState(0);
    return (
        <div className="app">
            <div className="app__container">
                <nav className="app__main-nav">
                    <h1 className="app__main-title">Notes</h1>
                    <button className="app__toggle-mode-btn">Toggle Mode</button>
                </nav>
                <input className="app__searchbar" placeholder="type to search..."></input>
                <div className="app__cards">{displayCards(cards)}</div>
            </div>
        </div>
    );
};

export default App;