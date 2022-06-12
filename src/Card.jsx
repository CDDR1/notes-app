import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const getDate = () => {
    const currentDate = new Date();
    return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
};

const Card = () => {
    return (
        <div className='card'>
            <textarea 
                className='card__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={200}
                value="Some value here"
            ></textarea>
            <div className="card__bottom">
                <div className="card__date">{getDate()}</div>
                <div className="card__delete-btn">
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
};

export default Card;