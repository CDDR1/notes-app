import React from 'react';
import { useState } from 'react';

const getRemainingChars = (maxLength) => {
    return maxLength - document.querySelector(".card__textarea").value.length;  
};

const AddCard = () => {
    const maxLength = 200;
    let [remainingChars, setRemainingChars] = useState(maxLength);

    return (
        <div className='card card--input'>
            <textarea 
                className='card__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={maxLength}
                placeholder='Type to add a note...'
                onChange={() => setRemainingChars(getRemainingChars(maxLength))}
            ></textarea>
            <div className="card__bottom">
                <div className="card__remainig-chars">{remainingChars} Remaining</div>
                <button 
                className="card__save-btn"
                onClick={() => console.log("clicked")}
                >Save</button>
            </div>
        </div>
    );
};

export default AddCard;