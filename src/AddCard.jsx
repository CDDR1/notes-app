import React from 'react';

const AddCard = (props) => {
    return (
        <div className='card card--input'>
            <textarea 
                className='card__textarea card--input__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={props.maxLength}
                placeholder='Type to add a note...'
                onChange={(e) => props.onTextChange(e.target.value)}
            ></textarea>
            <div className="card__bottom">
                <div className="card__remainig-chars">{props.remainingChars} Remaining</div>
                <button 
                className="card__save-btn"
                onClick={() => props.onSave(document.querySelector(".card--input__textarea"))}
                >Save</button>
            </div>
        </div>
    );
};

export default AddCard;