import React from 'react';
import { useState } from 'react';

const getTextLength = () => {
    // Returns the text length of the textarea in the card.
    return document.querySelector(".card__textarea").value.length;  
};

const calculateRemainingChars = () => {
    const textarea = document.querySelector(".card__textarea");
    
    // The first time the page loads, textarea will be equal to null. 
    // In that case, 200 is returned to avoid an error. 
    // When it's not null, we can make the calculation (total available chars - current chars).
    return textarea === null ? 200 : 200 - getTextLength();
};

const AddCard = () => {
    let [currentChars, setCurrentChars] = useState(0);
    let [remainingChars, setRemainingChars] = useState(200);

    return (
        <div className='card card--input'>
            <textarea 
                className='card__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={200}
                placeholder='Type to add a note...'
                onChange={() => setCurrentChars({currentChars: getTextLength()})}
            ></textarea>
            <div className="card__bottom">
                <div className="card__remainig-chars">{`${calculateRemainingChars()} Remaining`}</div>
                <button 
                className="card__save-btn"
                onClick={() => console.log("clicked")}
                >Save</button>
            </div>
        </div>
    );
};

export default AddCard;