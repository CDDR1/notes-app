import './App.css';
import Card from './Card.jsx';
import AddCard from './AddCard.jsx';

const App = () => {
  return (
    <div className="app">
        <div className="app__container">
            <nav className='app__main-nav'>
                <h1 className='app__main-title'>Notes</h1>
                <button className='app__toggle-mode-btn'>Toggle Mode</button>
            </nav>
            <input className='app__searchbar' placeholder='type to search...'></input>
            <div className='app__cards'>
                <Card />
                <Card />
                <AddCard />
            </div>
        </div>
    </div>
  );
}

export default App;