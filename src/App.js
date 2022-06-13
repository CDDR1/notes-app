import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Card from "./Card.jsx";
import AddCard from "./AddCard.jsx";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [cards, setCards] = useState([]);
    const [cardText, setCardText] = useState('');
    const maxTextLength = 200;

    const deleteCard = (cardID) => {
        const updatedCards = cards.filter(card => card.cardID !== cardID);
        setCards(updatedCards);
    };

    const getCardID = () => {
        return uuidv4();
    };

    const getDate = () => {
        const currentDate = new Date();
        return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    };

    const addCardToState = (newCard) => {
        setCards(state => [...state, newCard]);
    };      

    const handleCardSave = (textarea) => {
        const newCard = {
            cardID: getCardID(),
            cardText: cardText,
            cardDate: getDate(),
        };
        addCardToState(newCard);
        setCardText('');
        textarea.value = '';
    };

    const handleTextChange = (text) => {
        setCardText(text);
    };

    return (
        <div className="app">
            <div className="app__container">
                <nav className="app__main-nav">
                    <h1 className="app__main-title">Notes</h1>
                    <button className="app__toggle-mode-btn">Toggle Mode</button>
                </nav>
                <input className="app__searchbar" placeholder="type to search..."></input>
                <div className="app__cards">
                    {
                        cards.length > 0 && cards.map(card => <Card text={card.cardText} date={card.cardDate} key={card.cardID} cardID={card.cardID} removeCard={deleteCard} />)
                    }
                    <AddCard 
                        maxLength={maxTextLength} 
                        onTextChange={handleTextChange} 
                        remainingChars={maxTextLength - cardText.length} 
                        onSave={handleCardSave}
                    /> 
                </div>
            </div>
        </div>
    );
};

export default App;