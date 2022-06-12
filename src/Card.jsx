import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
    return (
        <div className='card'>
            <textarea 
                className='card__textarea'
                name="card-text" 
                id="card-text" 
                maxLength={200}
                value={props.text}
                readOnly="readOnly"
            ></textarea>
            <div className="card__bottom">
                <div className="card__date">{props.date}</div>
                <div className="card__delete-btn">
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
};

export default Card;