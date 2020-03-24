import React from 'react';
import './PageNot.css';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div className="container  not-found-aria">
        <div className="row ">
            <div className="col not-found-content text-center">
                <h1>404</h1>
                <h3>Something is wrong</h3>
                <p> Please try to refresh the page or</p>
                <Link to="/">start over.</Link>
            </div>
        </div>
    </div>
    );
};

export default PageNotFound;