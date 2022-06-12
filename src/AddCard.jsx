import React from 'react';
import { useState } from 'react';

const getTextLength = () => {
    // Returns the text length of the textarea in the card.
    return document.querySelector(".card__textarea").value.length;  
};

const AddCard = () => {
    let [currentChars, setCurrentChars] = useState(0);
    const maxLength = 200;

    return (
        <div className='card card--input'>
            <textarea 
                className='card__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={maxLength}
                placeholder='Type to add a note...'
                onChange={() => setCurrentChars(getTextLength())}
            ></textarea>
            <div className="card__bottom">
                <div className="card__remainig-chars">{maxLength - currentChars} Remaining</div>
                <button 
                className="card__save-btn"
                onClick={() => console.log("clicked")}
                >Save</button>
            </div>
        </div>
    );
};

export default AddCard;