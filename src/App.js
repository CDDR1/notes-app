import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Card from "./Card.jsx";
import AddCard from "./AddCard.jsx";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [cards, setCards] = useState([]);
    const [cardText, setCardText] = useState('');
    const [searchbarText, setSearchbarText] = useState('');
    const maxTextLength = 200;

    useEffect(() => {
        const localStorageCards = JSON.parse(localStorage.getItem("cards"));
        if (localStorageCards) {
            setCards(localStorageCards);
        }

        const darkThemeOn = JSON.parse(localStorage.getItem("darkTheme"));
        if (darkThemeOn) {
            setDarkTheme(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    }, [darkTheme]);

    const toggleDarkMode = (darkTheme) => {
        document.querySelector(".app").classList.toggle("app--dark");
        document.querySelector(".app__main-title").classList.toggle("main-title--light");
        darkTheme ? setDarkTheme(false) : setDarkTheme(true);
    };

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
                    <button 
                        className="app__toggle-mode-btn"
                        onClick={() => toggleDarkMode(darkTheme)}
                    >Toggle Mode</button>
                </nav>
                <input 
                    className="app__searchbar" 
                    placeholder="type to search..."
                    onChange={(e) => setSearchbarText(e.target.value)}
                ></input>
                <div className="app__cards">
                    {
                        cards
                        .filter(card => card.cardText.toLowerCase().slice(0, searchbarText.length) === searchbarText.toLowerCase())
                        .map(card => 
                            <Card 
                                text={card.cardText} 
                                date={card.cardDate} 
                                key={card.cardID} 
                                cardID={card.cardID} 
                                removeCard={deleteCard} 
                            />    
                        )
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