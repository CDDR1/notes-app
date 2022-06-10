import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    return (
        <div className='card'>
            <textarea 
                className='card__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={200}
                placeholder='Type to add a note...'
            ></textarea>
            <div className="card__bottom">
                <div className="card__date">06/10/2022</div>
                <div className="card__delete-btn">
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
};

export default Card;