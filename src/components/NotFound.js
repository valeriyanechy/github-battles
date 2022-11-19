import React from 'react';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='not-found__title title'>Ups!</h1>
            <p className='not-found__text'>The page you were looking for can't be found.</p>
            <div className='not-found__num'>404</div>
        </div>
    );
}

export default NotFound;