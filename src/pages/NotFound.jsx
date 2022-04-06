import React from 'react';
import '@styles/NotFound.scss'


const NotFound = () => {
	return (
		<div className="NotFound">
            <div className="NotFound-form-container ">
                <img width="600" src="https://media.istockphoto.com/vectors/error-404-not-found-page-message-vector-id1141729932?s=2048x2048"/>
                <h1>La URL que ingreso no existe no existe</h1>
            </div>
        </div>
	);
}

export default NotFound;
