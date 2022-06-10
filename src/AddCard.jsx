import React from 'react';

const AddCard = () => {
    return (
        <div className='card card--input'>
            <textarea 
                className='card__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={200}
                placeholder='Type to add a note...'
            ></textarea>
            <div className="card__bottom">
                <div className="card__remainig-chars">200 Remaining</div>
                <div className="card__save-btn">Save</div>
            </div>
        </div>
    )
};

export default AddCard;