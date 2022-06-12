import React from 'react';
import { useState } from 'react';

const getRemainingChars = (maxLength) => {
    return maxLength - document.querySelector(".card__textarea").value.length;  
};

const AddCard = (props) => {
    const maxLength = 200;
    let [remainingChars, setRemainingChars] = useState(maxLength);

    return (
        <div className='card card--input'>
            <textarea 
                className='card__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={props.maxLength}
                placeholder='Type to add a note...'
                onChange={() => props.onTextChange(document.querySelector(".card__textarea").value)}
            ></textarea>
            <div className="card__bottom">
                <div className="card__remainig-chars">{props.remainingChars} Remaining</div>
                <button 
                className="card__save-btn"
                onClick={() => console.log("clicked")}
                >Save</button>
            </div>
        </div>
    );
};

export default AddCard;